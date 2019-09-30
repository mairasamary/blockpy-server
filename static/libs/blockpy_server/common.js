
const REMAP_EVENT_TYPES = {
    "Session.Start": "Began session",
    "X-IP.Change": "Changed IP address",
    "File.Edit": "Edited code",
    "File.Create": "Started assignment",
    "Run.Program": "Ran program",
    "Compile.Error": "Syntax error",
    "X-Submission.LMS": "Updated grade"
};

const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "June", "July",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
];
const weekDays = [
    "Sun", "Mon", "Tue",
    "Wed", "Thu", "Fri",
    "Sat"
];

function isSameDay(first, second) {
    return first.getDate() === second.getDate() &&
        first.getMonth() === second.getMonth() &&
        first.getFullYear() === second.getFullYear();
}

/**
 * Helper function to parse a date/time string and rewrite it as something
 * more human readable.
 * @param {String} timeString - the string representation of time ("YYYYMMDD HHMMSS")
 * @returns {String} - A human-readable time string.
 */
function prettyPrintDateTime(timeString) {
    /*let year = timeString.slice(0, 4),
        month = parseInt(timeString.slice(4, 6), 10)-1,
        day = timeString.slice(6, 8),
        hour = timeString.slice(9, 11),
        minutes = timeString.slice(11, 13),
        seconds = timeString.slice(13, 15);*/
    // TODO: Handle timezones correctly
    let now = new Date();
    let past = new Date(timeString.indexOf("T") !== -1 ?
                        timeString : parseInt(timeString, 10));
    if (isSameDay(now, past)) {
        return "Today at "+past.toLocaleTimeString();
    } else {
        let dayStr = weekDays[past.getDay()];
        let monthStr = monthNames[past.getMonth()];
        let date = dayStr + ", " + monthStr + " " + past.getDate();
        if (now.getFullYear() === past.getFullYear()) {
            return date + " at "+past.toLocaleTimeString();
        } else {
            return date + ", "+past.getFullYear() + " at "+past.toLocaleTimeString();
        }
    }
}