Grading uploads image in block mode
Blockly~Corgis integration
Finalize parking
Instructor API rewrite
Superior error messages
Upload mode
Decouple Assignments from Courses
Data explorer
Fix undo/redo and copy/paste

Submission
    tied to a student/course/assignment
Assignment
    tied to nothing
    Delete -> Removes this assignment completely
        Only creators of the assignment can do this? And Admins
        
    Remove -> deletes its entry in the Course Assignments
Assignment Group
    tied to nothing
    Delete -> 
Course Assignments
    Connects a course to its list of assignments
Create a new assignment

Low
    Add student(s)
        Add Directly
        Invite student
    Edit assignment
        Edit maze
        Edit explain priorities
    View Assignments as student
    Show public courses
    Instructor tab to the right
    More sophisticated code storage for students via assignment_id in LocalStorage
    Upload block image on mark success
    Extract visualizer
    Deleting an assignment should potentially delete linked submissions?
    Add new graphs
    Assignment adding is broken (doesn't return a URL)
    Trashcan is broken
    Enable "shift-select" to do multi-block select.
High
    Upload mode
    Finish parking menus
    Instructor api
        set_highlight
        set_success
        give_feedback
        popup
        ast_has()
        ast_get()
    Student View is broken
    Generate feedback might be broken
    Unit testing for the static analyzer
        += is not correctly intrepetted
        Doesn't recognize built-ins like sorted
    Screenshotter fails on blocks that have an unconnected left
    
        
SQL blocks
Download this problem for offline (bundle javascript?)
SQLite datasets:
    Have flat and hiearchical

blockpy/
    ->
    
book/

datasets/
corgis/
wiki/

explain/

maze/


think.cs.vt.edu/
    index
    error
    select
    select_builtin_assignment
    dashboard
    user/
        login
        logout
        register
        etc.
    course/
        new
        remove
        load
        edit
        list
    assignment/
        new
        remove
        load
        edit
    group/
        new
        remove
        load
    -------
    blockpy/
        In guest mode, you encounter 
        In regular user mode, you encounter assignments
        In LTI mode, you encounter assignments
        
        Endpoints:
            index
                if assignment.id is given, and user is in course of assignment,
                    load assignment
                else
                    scratch canvas (not tied to online database)
            new
            load
            edit
            dashboard
            about
            contact
        AJAX
            save_code
            save_events
            save_correct
            get_submission_code
            save_presentation_code
    book/
        index
        
    corgis/
    datasets/
        index
        about
        contact
        python/
        java/
        sql/
        visualizer/
            <dataset>/
    explain/
        index
    maze/
        index
    curriculum/ (ct)
        index
        assignments
        cohort model
        
Add in app by closure
Only add in lti=lti if needed
        
@blockpy.route('/assignment/<id>', methods=['GET', 'POST'])
@lti(request='session')
def index(id, lti=lti):
    if g.lti_exception:
        # flash exception
    if not g.lti:
        # set status to not lti
    if not g.user:
        # Scratch canvas
    if not g.course:
        # Suggest course
        # Otherwise, scratch canvas
    # Provide the assignment
    