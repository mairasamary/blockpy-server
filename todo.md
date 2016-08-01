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
    Move capture into right click menu, make capture create PNGs
    Finish parking menus
    Instructor api
        set_highlight
        set_success
        give_feedback
        popup
        ast_has()
        ast_get()
    Incorrect code can crash the back-and-forth
        if 0: pass
    Student View is broken
    Generate feedback might be broken
    Visualizer is still creating phantom graphs
    Parsons problems are not working
    Figure out final toolbar - reset needs to be fixed, for sure
    Unit testing for the static analyzer
        += is not correctly intrepetted
        Doesn't recognize built-ins like sorted
        
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
    