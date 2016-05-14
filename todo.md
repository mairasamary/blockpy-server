

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