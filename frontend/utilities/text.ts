export function pad(num: number) {return ("0" + num).slice(-2);}

export function formatClock() {
    const now = new Date();
    const time = `${now.getHours() % 12 || 12}:${pad(now.getMinutes())} `;
    return time + (now.getHours()>=12 ? 'PM': 'AM');
}