EXTENDED_ERROR_EXPLANATION = {
	'ParseError': "A parse error means that Python does not understand the syntax on the line the error message points out.  Common examples are forgetting commas beteween arguments or forgetting a : (colon) on a for statement.      <br><b>Suggestion: </b>To fix a parse error you just need to look carefully at the line with the error and possibly the line before it.  Make sure it conforms to all of Python's rules.",
	'TypeError': "Type errors most often occur when an expression tries to combine two objects with types that should not be combined.  Like using \"+\" to add a number to a list instead of \".append\", or dividing a string by a number.  <br><b>Suggestion: </b>To fix a type error you will most likely need to trace through your code and make sure the variables have the types you expect them to have.",
	'SyntaxError': "This message indicates that Python can't figure out the syntax of a particular statement.  Some examples are assigning to a literal, or a function call.      <br><b>Suggestion: </b>Check your assignment statements and make sure that the left hand side of the assignment is a variable, not a literal (e.g., 7 or \"hello\") or a function.",
	'NameError': "A name error almost always means that you have used a variable before it has a value.  Often this may be a simple typo, so check the spelling carefully.  <br><b>Suggestion: </b>Check the right hand side of assignment statements and your function calls, this is the most likely place for a NameError to be found. It really helps to step through your code, one line at a time, mentally keeping track of your variables.",
	'ValueError': "A ValueError most often occurs when you pass a parameter to a built-in function, and the function is expecting one type and you pass something  different. For instance, if you try to convert a non-numeric string to an int, you will get a ValueError:<br><pre>  int(\"Corgi\") # ValueError: invalid literal for int() with base 10</pre> <br><b>Suggestion: </b>The error message gives you a pretty good hint about the name of the function as well as the value that is incorrect.  Look at the error message closely and then trace back to the variable containing the problematic value. }",
	'AttributeError': "This happens when you try to do <code>SOMETHING.WHATEVER</code> and either SOMETHING wasn't declared or WHATEVER isn't an attribute of SOMETHING. This error message is telling you that the object on the left hand side of the dot, does not have the attribute or method on the right hand side.      <br><b>Suggestion: </b>You were probably trying to either get access to some data (weather.get) or append (a_list.append). If it's the first one, you should make sure the module is imported and that you are called its function correctly. If it's the second one, you should make sure you spelled \"append\" right and that you are using a variable with a list for a value.",
	'TokenError': "Most of the time this error indicates that you have forgotten a right parenthesis or have forgotten to close a pair of quotes.  <br><b>Suggestion: </b>Check each line of your program and make sure that your parenthesis are balanced.",
	'IndexError': "This message means that you are trying to index past the end of a string or a list.  For example, if your list has 3 things in it and you try to access the item at position 5.  <br><b>Suggestion: </b>Remember that the first item in a list or string is at index position 0, quite often this message comes about because you are off by one.  Remember in a list of length 3 the last legal index is 2.<br><pre>favorite_colors = [\"red\", \"blue\", \"green\"]\nfavorite_colors[2] # prints green favorite_color[3] # raises an IndexError</pre>",
	'ImportError': "This error message indicates that you are trying to import a module that does not exist, or is not in the same directory as your python script.  <br><b>Suggestion: </b>One problem may simply be that you have a typo - remember, you must not capitalize the module name. Another common problem is that you have placed the module in a different directory. Finally, if you're using a dataset module, then it might not be imported. Use the \"Import Datasets\" button below!",
	'ReferenceError': "This is a really hard error to get, so I'm not entirely sure what you did.  <br><b>Suggestion: </b>Bring this code to the instructor. ",
	'ZeroDivisionError': "This tells you that you are trying to divide by 0. Typically this is because the value of the variable in the denominator of a division expression has the value 0.  <br><b>Suggestion: </b>Are you sure you are dividing by the right variable? Are you sure that that variable has the value you expect - is it possible that you counted the number of elements in an empty list, for instance?",
	'IndentationError': "This error occurs when you have not indented your code properly.  This is most likely to happen as part of an if, for, while or def statement.  <br><b>Suggestion: </b>Check your if, def, for, and while statements to be sure the lines are properly indented beneath them (seriously, this happens ALL the time).  Another source of this error comes from copying and pasting code where you have accidentally left some bits of code lying around that don't belong there anymore. Finally, a very sinister but unlikely possibility is that you have some tab characters in your code, which look identical to four spaces. Never, ever use tabs, and carefully check code from the internet to make sure it doesn't have tabs.",
	'EOFError': "If you are using input() or raw_input() commands, then this error happens when they don't get the right ending.  <br><b>Suggestion: </b>It's hard to protect against users. However, if you're using input(), you might be able to use raw_input() instead to avoid this problem. ",
	'IOError': "This is a very easy error to get. The most common reason is that you were trying to open a file and it wasn't in the right place.   <br><b>Suggestion: </b>Make sure that the file is in the right place - print out the file path, and then check that it's definitely on your computer at that location. If you need help doing file processing, you should probably check with an instructor.",
	'KeyError': "A dictionary has a bunch of keys that you can use to get data. This error is caused by you trying to refer to a key that does not exist.  <br><b>Suggestion: </b>The most common reason you get this exception is that you have a typo in your dictionary access. Check your spelling. Also double check that the key definitely exists.",
	'MemoryError': "Somehow, you have run out of memory. <br><b>Suggestion: </b>Make sure you are filtering your dataset! Alternatively, bring your code to an instructor.",
	'OSError': "It's hard to say what an OSError is without deep checking. Many things can cause it.  <br><b>Suggestion: </b>Bring your code to an instructor.      "
}
/*
var filename = '__main__.py';
var python_source = 'a, b = 0\nfor x in y:\n    t = 0';
parse = Sk.parse(filename, python_source);
ast = Sk.astFromParse(parse.cst, filename, parse.flags);
*/

var iter_fields = function(node) {
    /** Yield a tuple of ``(fieldname, value)`` for each field in ``node._fields``
    that is present on *node*. **/
    var fieldList = [];
    for (var i = 0; i < node._fields.length; i += 2) {
        var field = node._fields[i];
        if (field in node) {
            fieldList.push([field, node[field]]);
        }
    }
    return fieldList;
}

var iter_child_nodes = function(node) {
    var fieldList = iter_fields(node);
    var resultList = [];
    for (var i = 0; i < fieldList.length; i += 1) {
        var field = fieldList[i][0], value = fieldList[i][1];
        if (value === null) {
            continue;
        }
        if ("_astname" in value) {
            resultList.push(value);
        } else if (value.constructor === Array) {
            for (var j = 0; j < value.length; j += 1) {
                var subvalue = value[j];
                if ("_astname" in subvalue) {
                    resultList.push(subvalue);
                }
            }
        }
    }
    return resultList;
}

function NodeVisitor() {};

NodeVisitor.prototype.visit = function(node) {
    /** Visit a node. **/
    var method_name = 'visit_' + node._astname;
    if (method_name in this) {
        return this[method_name](node);
    } else {
        return this.generic_visit(node);
    }
}

NodeVisitor.prototype.walk = function(node) {
    var resultList = [node];
    var childList = iter_child_nodes(node);
    for (var i = 0; i < childList.length; i += 1) {
        var child = childList[i];
        resultList.concat(this.walk(child));
    }
    return resultList;
}

NodeVisitor.prototype.visitList = function(nodes) {
    for (var j = 0; j < nodes.length; j += 1) {
        var node = nodes[j];
        if ("_astname" in node) {
            this.visit(node);
        }
    }
}

NodeVisitor.prototype.generic_visit = function(node) {
    /** Called if no explicit visitor function exists for a node. **/
    var fieldList = iter_fields(node);
    for (var i = 0; i < fieldList.length; i += 1) {
        var field = fieldList[i][0], value = fieldList[i][1];
        if (value === null) {
            continue;
        }
        if (Array === value.constructor) {
            for (var j = 0; j < value.length; j += 1) {
                var subvalue = value[j];
                if ("_astname" in subvalue) {
                    this.visit(subvalue);
                }
            }
        } else if ("_astname" in value) {
            this.visit(value);
        }
    }
}

NodeVisitor.prototype.recursive_walk = function(node) {
    var todo = [node];
    var result = [];
    while (todo.length > 0) {
        node = todo.shift();
        todo = todo.concat(iter_child_nodes(node))
        result.push(node);
    }
    return result;
}

/*
function CodeAnalyzer() {
    NodeVisitor.apply(this, Array.prototype.slice.call(arguments));
    this.id = 0;
};

CodeAnalyzer.prototype = new NodeVisitor();
CodeAnalyzer.prototype.visit = function(node) {
    node._id = this.id;
    this.id += 1;
    NodeVisitor.prototype.visit.call(this, node);
    //console.log(node);
}
*/

/*
CodeAnalyzer.prototype.visit_Num = function(node) {
    node._id = this.id;
    this.id += 1;
    console.log(node.n.v);
    // NodeVisitor.prototype.visit_Num.call(this, node);
};*/

//console.log((new NodeVisitor()).visit(ast));


function arrayContains(needle, haystack) {
    return haystack.indexOf(needle) > -1;
}

function AbstractInterpreter(code, filename) {
    NodeVisitor.apply(this, Array.prototype.slice.call(arguments));
    this.id = 0;
    this.frameIndex = 0;
    this.code = code;
    this.source = code !== "" ? this.code.split("\n") : [];
    this.filename = filename || '__main__';
    this.stackDepth = 0;
}

AbstractInterpreter.prototype = new NodeVisitor();

AbstractInterpreter.prototype.BUILTINS = {'print': {"type": 'None'}, 
                                'sum': {"type": "Num"},
                                'round': {"type": "Num"},
                                'range': {"type": "List"},
                                'xrange': {"type": "List"},
                                'reversed': {"type": "List"},
                                'len': {"type": "Num"},
                                'True': {"type": "Bool"}, 
                                'False': {"type": "Bool"}, 
                                'None': {"type": 'None'}}
AbstractInterpreter.MODULES = {
    'weather': {
        'get_temperature': {"type": 'Num'},
        'get_forecasts': {"type": "List", "empty": false, "component": {"type": 'Num'}},
        'get_report': {"type": "Dict", "all_strings": true,
                       "keys": {"temperature": {"type": 'Num'}, 
                                "humidity": {"type": "Num"},
                       "wind": {"type": "Num"}}},
        'get_forecasted_reports': [{"temperature": 'Num', "humidity": "Num", "wind": "Num"}],
        'get_all_forecasted_temperatures': [{'city': 'str', 'forecasts': ['int']}],
        'get_highs_lows': {'highs': ['Num'], 'lows': ['Num']}
    },
    'stocks': {
        'get_current': 'float',
        'get_past': ['float'],
    },
    'earthquakes': {
        'get': ['float'],
        'get_both': [{'magnitude': 'float', 'depth': 'float'}],
        'get_all': [{'magnitude': 'float', 'distance': 'float', 'gap': 'int', 
                        'id': 'str', 'significance': 'int', 'time': 'int',
                        'location': {'depth': 'float', 'latitude': 'float', 'longitude': 'float',
                                     'location_description': 'str'}}]
    },
    'crime': {
        'get_property_crimes': ['float'],
        'get_violent_crimes': ['float'],
        'get_both_crimes': ['float'],
        'get_by_year': [{'state': 'str', 'violent': 'float', 'property': 'float', 'population': 'int'}],
        'get_all': {}
    },
    'books': {
        'get_all': [{'title': 'str', 'author': 'str', 'price': 'float', 'paperback': 'bool', 'page count': 'int'}]
    }
}

AbstractInterpreter.prototype.newReport = function(parentFrame) {
    return {
            "Unread variables": [],
            "Undefined variables": [],
            "Overwritten variables": [],
            "Append to non-list": [],
            "Used iteration list": [],
            "Unused iteration variable": [],
            "Non-list iterations": [],
            "Empty iterations": [],
            "Type changes": [],
            "Iteration variable is iteration list": [],
            "Unknown functions": [],
            "Incompatible types": []
        }
}

AbstractInterpreter.prototype.newFrame = function(parentFrame) {
    this.frameIndex += 1;
    return {"variables":{}, 
            "plurals": [], 
            "singulars": [], 
            "children": [],
            "writes": [],
            "reads": [],
            "parentFrame": parentFrame,
            "index": this.frameIndex};
}

AbstractInterpreter.prototype.analyze = function() {    
    // Attempt parsing - might fail!
    try {
        var parse = Sk.parse(this.filename, this.code);
        this.ast = Sk.astFromParse(parse.cst, this.filename, parse.flags);
    } catch (error) {
        return {"error": error, "message": "Parsing error"};
    }
    
    this.rootFrame = this.newFrame(null);
    this.currentFrame = this.rootFrame;
    this.report = this.newReport();
    
    for (var name in this.BUILTINS) {
        this.addVariable(name);
        this.setType(name, this.BUILTINS[name]);
    }
    
    this.visit(this.ast);
    this.postProcess();
    return true;
}

AbstractInterpreter.prototype.postProcess = function() {
    this.checkUnreadVariables(this.rootFrame)
    this.checkUnusedSingular(this.rootFrame)
    this.checkUsedPlural(this.rootFrame)
    this.checkSingularIsPlural(this.rootFrame)
}

AbstractInterpreter.prototype.getFrameIndex = function() {
    return this.currentFrame.index;
}
AbstractInterpreter.prototype.addSingular = function(singular) {
    this.currentFrame.singulars.push(singular);
}
AbstractInterpreter.prototype.addPlural = function(plural) {
    this.currentFrame.plurals.push(plural);
}
AbstractInterpreter.prototype.addFrame = function() {
    var newChild = this.newFrame(this.currentFrame)
    this.currentFrame.children.push(newChild)
    this.currentFrame = newChild
}
AbstractInterpreter.prototype.leaveFrame = function() {
    this.currentFrame = this.currentFrame.parentFrame;
}
AbstractInterpreter.prototype.addVariable = function(name, loc) {
    var currentFrame = this.currentFrame;
    currentFrame.writes.push(name);
    while (currentFrame !== null) {
        if (name in currentFrame.variables) {
            var behavior = currentFrame.variables[name].behavior;
            if (behavior.slice(-1)[0].mode == "write") {
                this.report["Overwritten variables"].push({
                    'name': name,
                    'last_location': loc,
                    'first_location': behavior[0].location
                })
            }
            behavior.push({"mode": "write", "location": loc});
            return;
        }
        currentFrame = currentFrame.parentFrame;
    }
    this.currentFrame.variables[name] = {"behavior": [{"mode": "write", "location": loc}], "type": null};
}

AbstractInterpreter.prototype.setListType = function(name, type, loc) {
    var currentFrame = this.currentFrame;
    while (currentFrame !== null) {
        if (name in currentFrame.variables) {
            var variable = currentFrame.variables[name];
            if (variable.type.type === "List") {
                if (variable.type.empty || this.testTypeEquality(variable.type.component, type)) {
                    variable.type = {"type": "List", "empty": false, "component": type};
                } else {
                    this.report["Type changes"].push(loc);
                }
            } else {
                this.report["Append to non-list"].push(name);
            }
            // Adjust the read to become a write
            for (var i = variable.behavior.length-1; i > 0; i = i-1) {
                if (variable.behavior[i].location == loc) {
                    variable.behavior[i].mode = "append";
                }
            }
        }
        currentFrame = currentFrame.parentFrame;
    }
}
AbstractInterpreter.prototype.testTypeEquality = function(left, right) {
    if (left === null || right === null) {
        return false;
    } else if (left.type === null || right.type === null) {
        return false;
    } else if (left.type === "List" && right.type === "List") {
        if (left.empty && right.empty) {
            return true;
        } else if (left.empty || right.empty) {
            return false;
        } else {
            return left.component == right.component
        }
    } else {
        return left.type == right.type;
    }
}
AbstractInterpreter.prototype.setType = function(name, type, loc) {
    var currentFrame = this.currentFrame;
    while (currentFrame !== null) {
        if (name in currentFrame.variables) {
            var variable = currentFrame.variables[name];
            if (variable.type !== null) {
                if (!this.testTypeEquality(variable.type, type)) {
                    this.report["Type changes"].push(name);
                }
            }
            variable.type = type;
            return;
        }
        currentFrame = currentFrame.parentFrame;
    }
}

AbstractInterpreter.prototype.getType = function(name) {
    var currentFrame = this.currentFrame;
    while (currentFrame !== null) {
        if (name in currentFrame.variables) {
            return currentFrame.variables[name].type;
        }
        currentFrame = currentFrame.parentFrame;
    }
    return null;
}

AbstractInterpreter.prototype.isTypeEmptyList = function(name) {
    var type = this.getType(name);
    return (type !== null && type.type === "List") && (type.empty);
}
AbstractInterpreter.prototype.isTypeList = function(name) {
    var type = this.getType(name);
    return (type !== null && type.type === "List");
}
AbstractInterpreter.prototype.readVariable = function(name, loc) {
    var currentFrame = this.currentFrame;
    currentFrame.reads.push(name);
    while (currentFrame !== null) {
        if (name in currentFrame.variables) {
            currentFrame.variables[name].behavior.push({"mode": "read", "location": loc});
            return;
        }
        currentFrame = currentFrame.parentFrame;
    }
    this.report["Undefined variables"].push({'name': name, 'line': loc});
}
AbstractInterpreter.prototype.checkUnreadVariables = function(frame) {
    //TODO: Make it check EVERYWHERE before deciding to report unread
    for (var name in frame.variables) {
        if (!(name in this.BUILTINS)) {
            var is_read = false
            for (var i = 0, len = frame.variables[name].behavior.length;
                 i < len; i++) {
                is_read = is_read || frame.variables[name].behavior[i].mode == "read";
            }
            if (!is_read) {
                var typeInfo = this.getType(name);
                //console.log(frame.variables[name].behavior[0])
                this.report["Unread variables"].push({
                    'name': name, 
                    'type': typeInfo == null ? null : typeInfo.type,
                    'line': frame.variables[name].behavior[0].location
                });
            }
        }
    }
    for (var i = 0, len = frame.children.length; i < len; i++) {
        this.checkUnreadVariables(frame.children[i])
    }
}

AbstractInterpreter.prototype.checkUnusedSingular = function(frame) {
    for (var i = 0, len = frame.singulars.length; i < len; i++) {
        if (!(this.walkFramesForUse(frame, frame.singulars[i], "reads"))) {
            this.report["Unused iteration variable"].push(frame.singulars[i])
        }
    }
    for (var i = 0, len = frame.children.length; i < len; i++) {
        this.checkUnusedSingular(frame.children[i])
    }
}
AbstractInterpreter.prototype.checkUsedPlural = function(frame) {
    for (var i = 0, len = frame.plurals.length; i < len; i++) {
        if (this.walkFramesForUse(frame, frame.plurals[i], "both")) {
            this.report["Used iteration list"].push(frame.plurals[i])
        }
    }
    for (var i = 0, len = frame.children.length; i < len; i++) {
        this.checkUsedPlural(frame.children[i])
    }
}
AbstractInterpreter.prototype.checkSingularIsPlural = function(frame) {
    for (var i = 0, len = frame.plurals.length; i < len; i++) {
        for (var j = 0, len = frame.singulars.length; j < len; j++) {
            if (frame.plurals[i] == frame.singulars[j]) {
                this.report["Iteration variable is iteration list"].push(frame.singulars[j]);
            }
        }
    }
    for (var i = 0, len = frame.children.length; i < len; i++) {
        this.checkSingularIsPlural(frame.children[i])
    }
}
AbstractInterpreter.prototype.walkFramesForUse = function(frame, name, type) {
    if (type === undefined) {
        type = "both";
    }
    if ((type == "both" || type == "reads") && arrayContains(name, frame.reads)) {
        return true;
    }
    if ((type == "both" || type == "writes") && arrayContains(name, frame.writes)) {
        return true;
    }
    var result = false;
    for (var i = 0, len = frame.children.length; i < len; i++) {
        result = result || this.walkFramesForUse(frame.children[i], name, type);
    }
    return result;
}

AbstractInterpreter.prototype.visit = function(node) {
    this.stackDepth += 1;
    NodeVisitor.prototype.visit.call(this, node);
    this.stackDepth -= 1;
}

AbstractInterpreter.prototype.typecheck = function(value) {
    switch (value._astname) {
        case "Name":
            return this.getType(value.id.v);
        case "Num": case "Str":
            return {"type": value._astname};
        case "Tuple":
            var components = [];
            for (var i = 0, len = value.elts.length; i < len; i++) {
                components.push(this.typecheck(value.elts[i]))
            }
            return {"type": "Tuple", "components": components};
        case "Dict":
            var literals = true;
            for (var i = 0, len = value.keys.length; i < len; i++) {
                literals = literals && (key_type.type == "Str");
            }
            if (literals) {
                var components = {};
                for (var i = 0, len = value.keys.length; i < len; i++) {
                    var key_type = this.typecheck(value.keys[i]);
                    var value_type = this.typecheck(value.values[i]);
                    components[value.keys[i].id.v] = {"key": key_type, "value": value_type};
                }
                return {"type": "Dict", "literals": true, "components": components};
            } else {
                var key_type = {"type": "Unknown"}, value_type = {"type": "Unknown"};
                if (value.keys.length > 0) {
                    key_type = this.typecheck(value.keys[0]);
                    value_type = this.typecheck(value.values[0]);
                }
                return {"type": "Dict", "literals": false, "key": key_type, "value": value_type};
            }
        case "List":
            if (value.elts.length == 0) {
                return {"type": "List", "empty": true};
            } else {
                return {"type": "List", "empty": false, "component": this.typecheck(value.elts[0])};
            }
        case "Call":
            return this.walkAttributeChain(value.func);
        case "BinOp":
            var left = this.typecheck(value.left),
                right = this.typecheck(value.right);
            if (left === null || right === null) {
                return {"type": "Unknown"}
            } else if (left.type != right.type) {
                this.report["Incompatible types"].push(value.lineno);
            } else {
                return left;
            }
        default:
            return {"type": "Unknown"}
    }
}

AbstractInterpreter.prototype.walkAttributeChain = function(attribute) {
    if (attribute._astname == "Attribute") {
        var result = this.walkAttributeChain(attribute.value);
        if (result == null) {
            return null;
        } else if (attribute.attr.v in result) {
            return result[attribute.attr.v];
        } else {
            this.report["Unknown functions"].push(attribute.attr.v);
            return null;
        }
    } else if (attribute._astname == "Name") {
        if (attribute.id.v in AbstractInterpreter.MODULES) {
            return AbstractInterpreter.MODULES[attribute.id.v];
        } else {
            this.report["Unknown functions"].push(attribute.attr);
            return null;
        }
    }
}

AbstractInterpreter.prototype.visit_AugAssign = function(node) {
    var typeValue = this.typecheck(node.value);
    this.visit(node.value);
    this.visit(node.target);
    var walked = this.walk(node.target);
    for (var i = 0, len = walked.length; i < len; i++) {
        var targetChild = walked[i];
        if (targetChild._astname == "Tuple") {
            
        } else if (targetChild._astname == "Name") {
            this.setType(targetChild.id.v, typeValue, this.getLocation(node));
        }
    }
}
AbstractInterpreter.prototype.visit_Call = function(node) {
    this.generic_visit(node);
    if (node.func._astname == "Attribute") {
        if (node.func.attr.v == "append") {
            if (node.args.length >= 1) {
                var valueType = this.typecheck(node.args[0]);
                if (node.func.value._astname == "Name") {
                    var target = node.func.value.id.v;
                    this.setListType(target, valueType, this.getLocation(node));
                }
            }
        }
    }
}
AbstractInterpreter.prototype.visit_Assign = function(node) {
    var typeValue = this.typecheck(node.value);
    this.visit(node.value);
    this.visitList(node.targets);
    for (var i = 0, len = node.targets.length; i < len; i++) {
        var walked = this.walk(node.targets[i]);
        for (var j = 0, len = walked.length; j < len; j++) {
            var targetChild = walked[j];
            if (targetChild._astname == "Tuple") {
                
            } else if (targetChild._astname == "Name") {
                this.setType(targetChild.id.v, typeValue, this.getLocation(node));
            }
        }
    }
}
AbstractInterpreter.prototype.getLocation = function(node) {
    return node.lineno+"|"+node.col_offset;
}
AbstractInterpreter.prototype.visit_Import = function(node) {
    for (var i = 0, len = node.names.length; i < len; i++) {
        var module = node.names[i];
        var asname = module.asname === null ? module.name : module.asname;
        this.addVariable(asname.v, this.getLocation(node));
        this.setType(asname.v, {"type": "Module"}, this.getLocation(node));
    }
}
AbstractInterpreter.prototype.visit_ImportFrom = function(node) {
    for (var i = 0, len = node.names.length; i < len; i++) {
        var module = node.module === null ? node.names[i] : node.module + node.names[i];
        var asname = module.asname === null ? module.name : module.asname;
        this.addVariable(asname.v, this.getLocation(node));
        this.setType(asname.v, {"type": "Module"}, this.getLocation(node));
    }
}

AbstractInterpreter.prototype.visit_Name = function(node) {
    if (node.ctx.name == "Store") {
        this.addVariable(node.id.v, this.getLocation(node));
    } else if (node.ctx.name === "Load") {
        this.readVariable(node.id.v, this.getLocation(node));
    }
    this.generic_visit(node);
}

AbstractInterpreter.prototype.visit_For = function(node) {
    this.visit(node.iter);
    this.addFrame();
    var walked = this.walk(node.iter);
    for (var i = 0, len = walked.length; i < len; i++) {
        var child = walked[i];
        if (child._astname === "Name" && child.ctx.name === "Load") {
            if (this.isTypeEmptyList(child.id.v)) {
                this.report["Empty iterations"].push(child.id.v);
            }
            if (!(this.isTypeList(child.id.v))) {
                this.report["Non-list iterations"].push(child.id.v);
            }
            this.addPlural(child.id.v, this.getLocation(node));
        } else if (child._astname === "List" && child.elts.length === 0) {
            this.report["Empty iterations"].push(child.lineno);
        } else {
            //console.log(child);
        }
    }
    walked = this.walk(node.target);
    for (var i = 0, len = walked.length; i < len; i++) {
        var child = walked[i];
        if (child._astname === "Name" && child.ctx.name === "Store") {
            this.addSingular(child.id.v, this.getLocation(node));
        }
    }
    this.visit(node.target);
    var iterType = this.typecheck(node.iter);
    if (iterType !== null && iterType.type == "List" && !iterType.empty) {
        this.setType(node.target.id.v, iterType.component, this.getLocation(node));
    }
    for (var i = 0, len = node.body.length; i < len; i++) {
        this.visit(node.body[i]);
    }
    for (var i = 0, len = node.orelse.length; i < len; i++) {
        this.visit(node.orelse[i]);
    }
    this.leaveFrame();
}


/*
var filename = '__main__.py';
var python_source = 'sum([1,2])/len([4,5,])\ntotal=0\ntotal=total+1\nimport weather\nimport matplotlib.pyplot as plt\ncelsius_temperatures = []\nexisting=weather.get_forecasts("Miami, FL")\nfor t in existing:\n    celsius = (t - 32) / 2\n    celsius_temperatures.append(celsius)\nplt.plot(celsius_temperatures)\nplt.title("Temperatures in Miami")\nplt.show()';
var analyzer = new AbstractInterpreter(python_source);
analyzer.analyze()
console.log(python_source);
console.log(analyzer.ast);
console.log(analyzer.rootFrame);
console.log(analyzer.report);
*/
function PythonToBlocks() {
}

function xmlToString(xml) {
    return new XMLSerializer().serializeToString(xml);
}

PythonToBlocks.prototype.convertSourceToCodeBlock = function(python_source) {
    var xml = document.createElement("xml");
    xml.appendChild(raw_block(python_source));
    return xmlToString(xml);
}

PythonToBlocks.prototype.convertSource = function(python_source) {
    var xml = document.createElement("xml");
    if (python_source.trim() === "") {
        return {"xml": xmlToString(xml), "error": null};
    }
    this.source = python_source.split("\n");
    var filename = 'user_code.py';
    // Attempt parsing - might fail!
    var parse, ast, symbol_table, error;
    try {
        parse = Sk.parse(filename, python_source);
        ast = Sk.astFromParse(parse.cst, filename, parse.flags);
        //symbol_table = Sk.symboltable(ast, filename, python_source, filename, parse.flags);
    } catch (e) {
        error = e;
        xml.appendChild(raw_block(python_source))
        return {"xml": xmlToString(xml), "error": error};
    }
    this.comments = parse.comments;
    this.measureNode(ast);
    var converted = this.convert(ast);
    if (converted !== null) {
        for (var block = 0; block < converted.length; block+= 1) {
            xml.appendChild(converted[block]);
        }
    }
    return {"xml": xmlToString(xml), "error": null, "lineMap": this.lineMap, 'comment': this.comments};
}

PythonToBlocks.prototype.identifier = function(node) {
    return Sk.ffi.remapToJs(node);
}

PythonToBlocks.prototype.recursiveMeasure = function(node, nextBlockLine) {
    if (node === undefined)  {
        return;
    }
    var myNext = nextBlockLine;
    if ("orelse" in node && node.orelse.length > 0) {
        if (node.orelse.length == 1 && node.orelse[0]._astname == "If") {
            myNext = node.orelse[0].lineno-1;
        } else {
            myNext = node.orelse[0].lineno-1-1;
        }
    }
    this.heights.push(nextBlockLine);
    if ("body" in node) {
        for (var i = 0; i < node.body.length; i++) {
            var next;
            if (i+1 == node.body.length) {
                next = myNext;
            } else {
                next = node.body[i+1].lineno-1;
            }
            this.recursiveMeasure(node.body[i], next);
        }
    }
    if ("orelse" in node) {
        for (var i = 0; i < node.orelse.length; i++) {
            var next;
            if (i == node.orelse.length) {
                next = nextBlockLine;
            } else {
                next = 1+(node.orelse[i].lineno-1);
            }
            this.recursiveMeasure(node.orelse[i], next);
        }
    }
}

PythonToBlocks.prototype.measureNode = function(node) {
    this.heights = [];
    this.recursiveMeasure(node, this.source.length-1);
    this.heights.shift();
}

PythonToBlocks.prototype.getSourceCode = function(from, to) {
    var lines = this.source.slice(from-1, to);
    // Strip out any starting indentation.
    if (lines.length > 0) {
        var indentation = lines[0].search(/\S/);
        for (var i = 0; i < lines.length; i++) {
            lines[i] = lines[i].substring(indentation);
        }
    }
    return lines.join("\n");
}

PythonToBlocks.prototype.convertBody = function(node, is_top_level) {
    // Empty body. Boring!
    if (node.length == 0) {
        return null;
    }
    
    // This is tricked by semicolons. Hard to get around that...
    // TODO: Force semicolon breaks in a preprocessor, and extract comments too
    //console.log(this.comments);
    //console.log('text_comment');
    
    // Build the actual blocks
    var from = node[0].lineno;
    var to = this.heights.shift();
    
    // Walk through and convert the blocks to statements
    var children = [];
    var currentChild = null,
        firstChild = null;
    for (var i = 0; i < node.length; i++) {
        from = node[i].lineno;
        to = this.heights.shift();
        var newChild = this.convertStatement(node[i], this.getSourceCode(from, to), is_top_level);
        
        // Skip null blocks (e.g., imports)
        if (newChild !== null) {
            if (is_top_level && newChild.constructor == Array) {
                // Add non-statement expressions to the end
                children.push(newChild[0]);
            } else if (is_top_level && children.length > 0) {
                children.push(newChild);
            } else {
                if (newChild.constructor == Array) {
                    newChild = newChild[0];
                }
                if (firstChild == null) {
                    firstChild = newChild;
                    currentChild = newChild;
                } else {
                    var nextElement = document.createElement("next");
                    nextElement.appendChild(newChild);
                    currentChild.appendChild(nextElement);
                    currentChild = newChild;
                }
            }
        }
    }
    // Actually add that first child to the start
    if (firstChild !== null) {
        children.unshift(firstChild);
    }
    return children;
}

function block(type, lineNumber, fields, values, settings, mutations, statements) {
    var newBlock = document.createElement("block");
    // Settings
    newBlock.setAttribute("type", type);
    newBlock.setAttribute("line_number", lineNumber);
    for (var setting in settings) {
        var settingValue = settings[setting];
        newBlock.setAttribute(setting, settingValue);
    }
    // Mutations
    if (mutations !== undefined && Object.keys(mutations).length > 0) {
        var newMutation = document.createElement("mutation");
        for (var mutation in mutations) {
            var mutationValue = mutations[mutation];
            if (mutation.charAt(0) == '@') {
                newMutation.setAttribute(mutation.substr(1), mutationValue);
            } else if (mutationValue.constructor === Array) {
                for (var i = 0; i < mutationValue.length; i++) {
                    var mutationNode = document.createElement(mutation);
                    mutationNode.setAttribute("name", mutationValue[i]);
                    newMutation.appendChild(mutationNode);
                }
            } else {
                var mutationNode = document.createElement("arg");
                mutationNode.setAttribute("name", mutation);
                mutationNode.appendChild(mutationValue);
                newMutation.appendChild(mutationNode);
            }
        }
        newBlock.appendChild(newMutation);
    }
    // Fields
    for (var field in fields) {
        var fieldValue = fields[field];
        var newField = document.createElement("field");
        newField.setAttribute("name", field);
        newField.appendChild(document.createTextNode(fieldValue));
        newBlock.appendChild(newField);
    }
    // Values
    for (var value in values) {
        var valueValue = values[value];
        var newValue = document.createElement("value");
        if (valueValue !== null) {
            newValue.setAttribute("name", value);
            newValue.appendChild(valueValue);
            newBlock.appendChild(newValue);
        }
    }
    // Statements
    if (statements !== undefined && Object.keys(statements).length > 0) {
        for (var statement in statements) {
            var statementValue = statements[statement];
            if (statementValue == null) {
                continue;
            } else {
                for (var i = 0; i < statementValue.length; i += 1) {
                    // In most cases, you really shouldn't ever have more than
                    //  one statement in this list. I'm not sure Blockly likes
                    //  that.
                    var newStatement = document.createElement("statement");
                    newStatement.setAttribute("name", statement);
                    newStatement.appendChild(statementValue[i]);
                    newBlock.appendChild(newStatement);
                }
            }
        }
    }
    return newBlock;
}

raw_block = function(text) {
    return block("raw_block", 0, { "TEXT": text });
}

PythonToBlocks.prototype.convert = function(node, is_top_level) {
    return this[node._astname](node, is_top_level);
}

function arrayMax(array) {
  return array.reduce(function(a, b) {
    return Math.max(a, b);
  });
}

function arrayMin(array) {
  return array.reduce(function(a, b) {
    return Math.min(a, b);
  });
}

PythonToBlocks.prototype.convertStatement = function(node, full_source, is_top_level) {
    try {
        return this.convert(node, is_top_level);
    } catch (e) {
        heights = this.getChunkHeights(node);
        extractedSource = this.getSourceCode(arrayMin(heights), arrayMax(heights));
        console.error(e);
        return raw_block(extractedSource);
    }
}

PythonToBlocks.prototype.getChunkHeights = function(node) {
    var lineNumbers = [];
    if (node.hasOwnProperty("lineno")) {
        lineNumbers.push(node.lineno);
    }
    if (node.hasOwnProperty("body")) {
        for (var i = 0; i < node.body.length; i += 1) {
            var subnode = node.body[i];
            lineNumbers = lineNumbers.concat(this.getChunkHeights(subnode));
        }
    }
    if (node.hasOwnProperty("orelse")) {
        for (var i = 0; i < node.orelse.length; i += 1) {
            var subnode = node.orelse[i];
            lineNumbers = lineNumbers.concat(this.getChunkHeights(subnode));
        }
    }
    return lineNumbers;
}

/* ----- Nodes ---- */
/*
 * NO LINE OR COLUMN NUMBERS
 * Module
 * body: asdl_seq
 */
PythonToBlocks.prototype.Module = function(node)
{
    return this.convertBody(node.body, true);
}

/*
 * NO LINE OR COLUMN NUMBERS
 * Interactive
 * body: asdl_seq
 */
PythonToBlocks.prototype.Interactive = function(body)
{
    return this.convertBody(node.body);
}

/*
 * NO LINE OR COLUMN NUMBERS
 * TODO
 * body: expr_ty
 */
PythonToBlocks.prototype.Expression = function(body)
{
    this.body = body;
}

/*
 * NO LINE OR COLUMN NUMBERS
 *
 * body: asdl_seq
 */
PythonToBlocks.prototype.Suite = function(body)
{
    this.asdl_seq(node.body);
}

/*
 *
 * name: identifier
 * args: arguments__ty
 * body: asdl_seq
 * decorator_list: asdl_seq
 */
PythonToBlocks.prototype.FunctionDef = function(node)
{
    var name = node.name;
    var args = node.args;
    var body = node.body;
    var decorator_list = node.decorator_list;
    if (decorator_list.length > 0) {
        throw new Error("Decorators are not implemented.");
    }
    return block("procedures_defnoreturn", node.lineno, {
        "NAME": this.identifier(name)
    }, {
    }, {
        "inline": "false"
    }, {
        "arg": this.arguments_(args)
    }, {
        "STACK": this.convertBody(body)
    });
}

/*
 * name: identifier
 * args: arguments__ty
 * bases: asdl_seq
 * body: asdl_seq
 * decorator_list: asdl_seq
 */
PythonToBlocks.prototype.ClassDef = function(node)
{
    this.name = name;
    this.bases = bases;
    this.body = body;
    this.decorator_list = decorator_list;
    throw new Error("Not implemented");
}

/*
 * value: expr_ty
 *
 */
PythonToBlocks.prototype.Return = function(node)
{
    var value = node.value;
    // No field, one title, one setting
    return block("procedures_return", node.lineno, {}, {
        "VALUE": this.convert(value)
    }, {
        "inline": "false"
    });
}

/*
 * targets: asdl_seq
 *
 */
PythonToBlocks.prototype.Delete = function(/* {asdl_seq *} */ targets)
{
    this.targets = targets;
    // TODO
    throw new Error("Delete is not implemented");
}

/*
 * targets: asdl_seq
 * value: expr_ty
 */
PythonToBlocks.prototype.Assign = function(node)
{
    var targets = node.targets;
    var value = node.value;
    if (targets.length == 0) {
        throw new Error("Nothing to assign to!");
    } else if (targets.length == 1) {
        return block("variables_set", node.lineno, {
            "VAR": this.Name_str(targets[0]) //targets
        }, {
            "VALUE": this.convert(value)
        });
    } else {
        //TODO
        throw new Error("Multiple Assigment Targets Not implemented");
    }
}

/*
 * target: expr_ty
 * op: operator_ty
 * value: expr_ty
 */
PythonToBlocks.prototype.AugAssign = function(node)
{
    var target = node.target;
    var op = node.op;
    var value = node.value;
    if (op.name != "Add") {
        //TODO
        throw new Error("Only addition is currently supported for augmented assignment!");
    } else {
        return block("math_change", node.lineno, {
            "VAR": this.Name_str(target)
        }, {
            "DELTA": this.convert(value)
        });
    }
}

/*
 * dest: expr_ty
 * values: asdl_seq
 * nl: bool
 *
 */
PythonToBlocks.prototype.Print = function(node)
{
    var dest = node.dest;
    var values = node.values;
    var nl = node.nl;
    
    if (values.length == 1) {
        return block("text_print", node.lineno, {}, {
            "TEXT": this.convert(values[0])
        });
    } else {
        return block("text_print_multiple", node.lineno, {}, 
            this.convertElements("PRINT", values), 
        {
            "inline": "true"
        }, {
            "@items": values.length
        });
    }
}

/*
 * target: expr_ty
 * iter: expr_ty
 * body: asdl_seq
 * orelse: asdl_seq
 *
 */
PythonToBlocks.prototype.For = function(node) {
    var target = node.target;
    var iter = node.iter;
    var body = node.body;
    var orelse = node.orelse;
    
    if (orelse.length > 0) {
        // TODO
        throw new Error("Or-else block of For is not implemented.");
    }
    
    return block("controls_forEach", node.lineno, {
        "VAR": this.Name_str(target)
    }, {
        "LIST": this.convert(iter)
    }, {
        "inline": "false"
    }, {}, {
        "DO": this.convertBody(body)
    });
}

/*
 * test: expr_ty
 * body: asdl_seq
 * orelse: asdl_seq
 */
PythonToBlocks.prototype.While = function(node) {
    var test = node.test;
    var body = node.body;
    var orelse = node.orelse;
    if (orelse.length > 0) {
        // TODO
        throw new Error("Or-else block of While is not implemented.");
    }
    return block("controls_while", node.lineno, {}, {
        "BOOL": this.convert(test)
    }, {}, {}, {
        "DO": this.convertBody(body)
    });
}

/*
 * test: expr_ty
 * body: asdl_seq
 * orelse: asdl_seq
 *
 */
PythonToBlocks.prototype.If = function(node)
{
    var test = node.test;
    var body = node.body;
    var orelse = node.orelse;
    
    var IF_values = {"IF0": this.convert(test)};
    var DO_values = {"DO0": this.convertBody(body)};
    
    var elseifCount = 0;
    var elseCount = 0;
    var potentialElseBody = null;
    
    // Handle weird orelse stuff
    if (orelse !== undefined) {
        if (orelse.length == 1 && orelse[0]._astname == "If") {
            // This is an 'ELIF'
            while (orelse.length == 1  && orelse[0]._astname == "If") {
                this.heights.shift();
                elseifCount += 1;
                body = orelse[0].body;
                test = orelse[0].test;
                orelse = orelse[0].orelse;
                DO_values["DO"+elseifCount] = this.convertBody(body, false);
                if (test !== undefined) {
                    IF_values["IF"+elseifCount] = this.convert(test);
                }
            }
        }
        if (orelse !== undefined && orelse.length > 0) {
            // Or just the body of an Else statement
            elseCount += 1;
            DO_values["ELSE"] = this.convertBody(orelse);
        }
    }
    
    return block("controls_if", node.lineno, {
    }, IF_values, {
        "inline": "false"
    }, {
        "@elseif": elseifCount,
        "@else": elseCount
    }, DO_values);
}

/*
 * context_expr: expr_ty
 * optional_vars: expr_ty
 * body: asdl_seq
 */
PythonToBlocks.prototype.With = function(node)
{
    var context_expr = node.context_expr;
    var optional_vars = node.optional_vars;
    var body = node.body;
    throw new Error("With_ not implemented");
}

/*
 * type: expr_ty
 * inst: expr_ty
 * tback: expr_ty
 */
PythonToBlocks.prototype.Raise = function(node)
{
    var type = node.type;
    var inst = node.inst;
    var tback = node.tback;
    throw new Error("Raise not implemented");
}

/*
 * body: asdl_seq
 * handlers: asdl_seq
 * orelse: asdl_seq
 *
 */
PythonToBlocks.prototype.TryExcept = function(node)
{
    var body = node.body;
    var handlers = node.handlers;
    var orelse = node.orelse;
    throw new Error("TryExcept not implemented");
}

/*
 * body: asdl_seq
 * finalbody: asdl_seq
 *
 */
PythonToBlocks.prototype.TryFinally = function(node)
{
    var body = node.body;
    var finalbody = node.finalbody;
    throw new Error("TryExcept not implemented");
}

/*
 * test: expr_ty
 * msg: expr_ty
 */
PythonToBlocks.prototype.Assert = function(node)
{
    var test = node.test;
    var msg = node.msg;
    throw new Error("Assert not implemented");
}

/*
 * names: asdl_seq
 *
 */
PythonToBlocks.prototype.Import = function(node)
{
    var names = node.names;
    // The import statement isn't used in blockly because it happens implicitly
    return null;
}

/*
 * module: identifier
 * names: asdl_seq
 * level: int
 *
 */
PythonToBlocks.prototype.ImportFrom = function(node)
{
    var module = node.module;
    var names = node.names;
    var level = node.level;
    // The import statement isn't used in blockly because it happens implicitly
    return null;
}

/*
 * body: expr_ty
 * globals: expr_ty
 * locals: expr_ty
 *
 */
PythonToBlocks.prototype.Exec = function(node) {
    var body = node.body;
    var globals = node.globals;
    var locals = node.locals;
    throw new Error("Exec not implemented");
}

/*
 * names: asdl_seq
 *
 */
PythonToBlocks.prototype.Global = function(node)
{
    var names = node.names;
    throw new Error("Globals not implemented");
}

/*
 * value: expr_ty
 *
 */
PythonToBlocks.prototype.Expr = function(node, is_top_level) {
    var value = node.value;
    
    var converted = this.convert(value);
    if (converted.constructor == Array) {
        return converted[0];
    } else if (is_top_level === true) {
        return [this.convert(value)];
    } else {
        return block("raw_empty", node.lineno, {}, {
            "VALUE": this.convert(value)
        });
    }
}

/*
 *
 *
 */
PythonToBlocks.prototype.Pass = function() {
    return null; //block("controls_pass");
}

/*
 *
 *
 */
PythonToBlocks.prototype.Break = function(node) {
    return block("controls_flow_statements", node.lineno, {
        "FLOW": "BREAK"
    });
}

/*
 *
 *
 */
PythonToBlocks.prototype.Continue = function(node) {
    return block("controls_flow_statements", node.lineno, {
        "FLOW": "CONTINUE"
    });
}

/*
 * TODO: what does this do?
 *
 */
PythonToBlocks.prototype.Debugger = function() {
    return null;
}

PythonToBlocks.prototype.booleanOperator = function(op) {
    switch (op.name) {
        case "And": return "AND";
        case "Or": return "OR";
        default: throw new Error("Operator not supported:"+op.name);
    }
}

/*
 * op: boolop_ty
 * values: asdl_seq
 */
PythonToBlocks.prototype.BoolOp = function(node) {
    var op = node.op;
    var values = node.values;
    // TODO: is there ever a case where it's != 2 values?
    return block("logic_operation", node.lineno, {
        "OP": this.booleanOperator(op)
    }, {
        "A": this.convert(values[0]),
        "B": this.convert(values[1])
    }, {
        "inline": "true"
    });
}

PythonToBlocks.prototype.binaryOperator = function(op) {
    switch (op.name) {
        case "Add": return "ADD";
        case "Sub": return "MINUS";
        case "Div": case "FloorDiv": return "DIVIDE";
        case "Mult": return "MULTIPLY";
        case "Pow": return "POWER";
        case "Mod": return "MODULO";
        default: throw new Error("Operator not supported:"+op.name);
    }
}

/*
 * left: expr_ty
 * op: operator_ty
 * right: expr_ty
 */
PythonToBlocks.prototype.BinOp = function(node)
{
    var left = node.left;
    var op = node.op;
    var right = node.right;
    return block("math_arithmetic", node.lineno, {
        "OP": this.binaryOperator(op) // TODO
    }, {
        "A": this.convert(left),
        "B": this.convert(right)
    }, {
        "inline": true
    });
}

/*
 * op: unaryop_ty
 * operand: expr_ty
 */
PythonToBlocks.prototype.UnaryOp = function(node)
{
    var op = node.op;
    var operand = node.operand;
    if (op.name == "Not") {
        return block("logic_negate", node.lineno, {}, {
            "BOOL": this.convert(operand) 
        }, {
            "inline": "false"
        });
    } else {
        throw new Error("Other unary operators are not implemented yet.");
    }
}

/*
 * args: arguments__ty
 * body: expr_ty
 */
PythonToBlocks.prototype.Lambda = function(node) {
    var args = node.args;
    var body = node.body;
    throw new Error("Lambda functions are not implemented yet.");
}

/*
 * test: expr_ty
 * body: expr_ty
 * orelse: expr_ty
 */
PythonToBlocks.prototype.IfExp = function(node)
{
    var test = node.test;
    var body = node.body;
    var orelse = node.orelse;
    throw new Error("Inline IF expressions are not implemented yet.");
}

/*
 * keys: asdl_seq
 * values: asdl_seq
 */
PythonToBlocks.prototype.Dict = function(node) {
    var keys = node.keys;
    var values = node.values;
    
    var keyList = [];
    var valueList = [];
    for (var i = 0; i < keys.length; i+= 1) {
        if (keys[i]._astname != "Str") {
            throw new Error("Dictionary Keys should be Strings.");
        }
        keyList["KEY"+i] = this.Str_value(keys[i]);
        valueList["VALUE"+i] = this.convert(values[i]);
    }
    
    return block("dicts_create_with", node.lineno, keyList, valueList, {
        "inline": "false"
    }, {
        "@items": keys.length
    });
}

/*
 * elts: asdl_seq
 *
 */
PythonToBlocks.prototype.Set = function(node)
{
    var elts = node.elts;
    throw new Error("Sets are not implemented");
}

/*
 * elt: expr_ty
 * generators: asdl_seq
 */
PythonToBlocks.prototype.ListComp = function(node)
{
    var elt = node.elt;
    var generators = node.generators;
    throw new Error("List Comprehensions are not implemented"); 
}

/*
 * elt: expr_ty
 * generators: asdl_seq
 */
PythonToBlocks.prototype.SetComp = function(node)
{
    var elt = node.elt;
    var generators = node.generators;
    throw new Error("Set Comprehensions are not implemented"); 
}

/*
 * key: expr_ty
 * value: expr_ty
 * generators: asdl_seq
 */
PythonToBlocks.prototype.DictComp = function(node)
{
    var key = node.key;
    var value = node.value;
    var generators = node.generators;
    throw new Error("Dictionary Comprehensions are not implemented"); 
}

/*
 * elt: expr_ty
 * generators: asdl_seq
 */
PythonToBlocks.prototype.GeneratorExp = function(node) {
    var elt = node.elt;
    var generators = node.generators;
    throw new Error("Generator Expresions are not implemented"); 
}

/*
 * value: expr_ty
 *
 */
PythonToBlocks.prototype.Yield = function(node)
{
    var value = value;
    throw new Error("Yield expression is not implemented");
}


PythonToBlocks.prototype.compareOperator = function(op) {
    switch (op.name) {
        case "Eq": return "EQ";
        case "NotEq": return "NEQ";
        case "Lt": return "LT";
        case "Gt": return "GT";
        case "LtE": return "LTE";
        case "GtE": return "GTE";
        case "In_": return "IN";
        case "NotIn": return "NOTIN";
        // Is, IsNot, In, NotIn
        default: throw new Error("Operator not supported:"+op.name);
    }
}

/*
 * left: expr_ty
 * ops: asdl_int_seq
 * asdl_seq: comparators
 */
PythonToBlocks.prototype.Compare = function(node)
{
    var left = node.left;
    var ops = node.ops;
    var comparators = node.comparators;
    
    if (ops.length != 1) {
        throw new Error("Only one comparison operator is supported");
    } else if (ops[0].name == "In_" || ops[0].name == "NotIn") {
        return block("logic_isIn", node.lineno, {
            "OP": this.compareOperator(ops[0])
        }, {
            "ITEM": this.convert(left),
            "LIST": this.convert(comparators[0])
        }, {
            "inline": "true"
        });
    } else {
        return block("logic_compare", node.lineno, {
            "OP": this.compareOperator(ops[0])
        }, {
            "A": this.convert(left),
            "B": this.convert(comparators[0])
        }, {
            "inline": "true"
        });
    }
    
}

convertStockSymbols = function(symbol) {
    switch (symbol) {
        case 'FB': case "Facebook":
            return "Facebook";
        case "AAPL": case "Apple":
            return "Apple";
        case "MSFT": case "Microsoft":
            return "Microsoft";
        case "GOOG": case "Google":
            return "Google";
        default:
            throw new Error("Unknown Stock Symbol.");
    }
}

toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
            
PythonToBlocks.KNOWN_MODULES = {
    "weather": {
        "get_temperature": ["weather_temperature", "CITY"],
        "get_report": ["weather_report", "CITY"],
        "get_forecasts": ["weather_forecasts", "CITY"],
        "get_highs_lows": ["weather_highs_lows", "CITY"],
        "get_all_forecasted_temperatures": ["weather_all_forecasts"],
        "get_forecasted_reports": ["weather_report_forecasts", "CITY"]
    }, 
    "earthquakes": {
        "get": ["earthquake_get", "PROPERTY"],
        "get_both": ["earthquake_both"],
        "get_all": ["earthquake_all"]
    },
    "stocks": {
        "get_current": ["stocks_current", ["TICKER", convertStockSymbols]],
        "get_past": ["stocks_past", ["TICKER", convertStockSymbols]]
    },
    "crime": {
        // STATE = toTitleCase
        "get_property_crimes": ["crime_state", ["STATE", toTitleCase],
                                              ["TYPE", "property"]],
        "get_violent_crimes": ["crime_state",  ["STATE", toTitleCase],
                                              ["TYPE", "violent"]],
        "get_by_year": ["crime_year", "YEAR"],
        "get_all": ["crime_all"]
    },
    "books": {
        "get_all": ["books_get"]
    },
    "plt": {
        "title": ["*plot_title", "TEXT"],
        "xlabel": ["*plot_xlabel", "TEXT"],
        "ylabel": ["*plot_ylabel", "TEXT"],
        "hist": ["*plot_hist", {"type": "variable", "mode": "value", "name": "values"}],
        "scatter": ["*plot_scatter", {"type": "variable", "mode": "value", "name": "x_values"},
                                      {"type": "variable", "mode": "value", "name": "y_values"}],
        "show": ["*plot_show"]
    }
};
PythonToBlocks.prototype.KNOWN_FUNCTIONS = ["append", "strip", "rstrip", "lstrip"];
PythonToBlocks.prototype.CallAttribute = function(func, args, keywords, starargs, kwargs) {
    var name = this.identifier(func.attr);
    if (func.value._astname == "Name") {
        var module = this.identifier(func.value.id);
        if (module == "plt" && name == "plot") {
            if (args.length == 1) {
                return [block("plot_line", func.lineno, {}, {
                    "y_values": this.convert(args[0])
                }, {"inline": "false"})];
            } else if (args.length == 2) {
                return [block("plot_lineXY", func.lineno, {}, {
                    "x_values": this.convert(args[0]),
                    "y_values": this.convert(args[1])
                }, {"inline": "false"})];
            } else {
                throw new Error("Incorrect number of arguments to plt.plot");
            }
        } else if (module in PythonToBlocks.KNOWN_MODULES && name in PythonToBlocks.KNOWN_MODULES[module]) {
            var definition = PythonToBlocks.KNOWN_MODULES[module][name];
            var blockName = definition[0];
            var isExpression = true;
            if (blockName.charAt(0) == "*") {
                blockName = blockName.slice(1);
                isExpression = false;
            }
            var fields = {};
            var mutations = {};
            var values = {};
            for (var i = 0; i < args.length; i++) {
                var argument = definition[1+i];
                var destination = fields;
                if (typeof argument ==  "string") {
                    fields[argument] = this.Str_value(args[i]);
                } else if (typeof argument == "object") {
                    if (argument.mode == "value") {
                        destination = values;
                    }
                    if (argument.add_mutation !== undefined) {
                        mutations[argument.add_mutation.name] = argument.add_mutation.value;
                    }
                    if (argument.type == 'mutation') {
                        if (argument.index == undefined) {
                            mutations[argument.name] = this.Str_value(args[i]);
                        } else {
                            mutations[argument.name] = this.Str_value(args[argument.index+1]);
                        }
                    } else if (argument.type == "integer") {
                        destination[argument.name] = this.Num_value(args[i]);
                    } else if (argument.type == 'variable') {
                        destination[argument.name] = this.convert(args[i]);
                    } else if (argument.type == "integer_mapper") {
                        // Okay we jumped the shark here
                        var argumentName = argument.name;
                        var argumentMapper = argument.method;
                        destination[argumentName] = argumentMapper(this.Num_value(args[i]));
                    } else if (argument.type == 'mapper') {
                        var argumentName = argument.name;
                        var argumentMapper = argument.method;
                        destination[argumentName] = argumentMapper(this.Str_value(args[i]));
                    }
                } else {
                    var argumentName = argument[0];
                    var argumentMapper = argument[1];
                    fields[argumentName] = argumentMapper(this.Str_value(args[i]));
                }
            }
            for (var i = 1+args.length; i < definition.length; i++) {
                var first = definition[i][0];
                var second = definition[i][1];
                fields[first] = second;
            }
            if (isExpression) {
                var k = block(blockName, func.lineno, fields, values, [], mutations);
                return k;
            } else {
                return [block(blockName, func.lineno, fields, values, [], mutations)];
            }
        }
    } 
    if (this.KNOWN_FUNCTIONS.indexOf(name) > -1) {
        switch (name) {
            case "append":
                if (args.length !== 1) {
                    throw new Error("Incorrect number of arguments to .append");
                }
                // Return as statement
                return [block("lists_append", func.lineno, {}, {
                    "ITEM": this.convert(args[0]),
                    "LIST": this.convert(func.value)
                }, {
                    "inline": "true"
                })];
            case "strip":
                return block("text_trim", func.lineno, { "MODE": "BOTH" }, 
                    { "TEXT": this.convert(func.value) });
            case "lstrip":
                return block("text_trim", func.lineno, { "MODE": "LEFT" }, 
                    { "TEXT": this.convert(func.value) });
            case "rstrip":
                return block("text_trim", func.lineno, { "MODE": "RIGHT" }, 
                    { "TEXT": this.convert(func.value) });
            default: throw new Error("Unknown function call!");
        }
    } else {
        console.log(func, args, keywords, starargs, kwargs);
        
        /*
        var arguments = {};
        for (var i = 0; i < args.length; i++) {
            arguments["ARGUMENT"+i] = this.convert(args[i]);
        }
        return block("function_call", {"NAME": name}, arguments);*/
        //throw new Error("Unknown function call or not implemented");
    }
}

/*
 * func: expr_ty
 * args: asdl_seq
 * keywords: asdl_seq
 * starargs: expr_ty
 * kwargs: expr_ty
 *
 */
PythonToBlocks.prototype.Call = function(node) {
    var func = node.func;
    var args = node.args;
    var keywords = node.keywords;
    var starargs = node.starargs;
    var kwargs = node.kwargs;
    
    switch (func._astname) {
        case "Name":
            switch (this.identifier(func.id)) {
                case "print":
                    if (args.length == 1) {
                        return [block("text_print", node.lineno, {}, {
                            "TEXT": this.convert(args[0])})];
                    } else {
                        return [block("text_print_multiple", node.lineno, {}, 
                            this.convertElements("PRINT", args), 
                            {"inline": "true"
                            }, { "@items": args.length})];
                    }
                case "abs":
                    return block("math_single", node.lineno, {"OP": "ABS"}, {"NUM": this.convert(args[0])})
                case "round":
                    return block("math_round", node.lineno, {"OP": "ROUND"}, {"NUM": this.convert(args[0])})
                case "sum":
                    return block("math_on_list", node.lineno, {"OP": "SUM"}, {"LIST": this.convert(args[0])})
                case "min":
                    return block("math_on_list", node.lineno, {"OP": "MIN"}, {"LIST": this.convert(args[0])})
                case "max":
                    return block("math_on_list", node.lineno, {"OP": "MAX"}, {"LIST": this.convert(args[0])})
                case "len":
                    return block("lists_length", node.lineno, {}, {"VALUE": this.convert(args[0])})
                default:
                    if (starargs !== null && starargs.length > 0) {
                        throw new Error("*args (variable arguments) are not implemented yet.");
                    } else if (kwargs !== null && kwargs.length > 0) {
                        throw new Error("**args (keyword arguments) are not implemented yet.");
                    }
                    var arguments = {};
                    var argumentsMutation = {"@name": this.identifier(func.id)};
                    for (var i = 0; i < args.length; i+= 1) {
                        arguments["ARG"+i] = this.convert(args[i]);
                        argumentsMutation[i] = this.convert(args[i]);
                    }
                    return block("procedures_callreturn", node.lineno, {}, arguments, {
                        "inline": "false"
                    }, argumentsMutation);
            }
        // Direct function call
        case "Attribute":
        // Module function call
            return this.CallAttribute(func, args, keywords, starargs, kwargs);
    }
}

/*
 * value: expr_ty
 *
 */
PythonToBlocks.prototype.Repr = function(node)
{
    var value = node.value;
    throw new Error("Repr is not yet implemented");
}

/*
 * n: object
 *
 */
PythonToBlocks.prototype.Num = function(node)
{
    var n = node.n;
    return block("math_number", node.lineno, {"NUM": Sk.ffi.remapToJs(n)});
}

PythonToBlocks.prototype.Num_value = function(node)
{
    var n = node.n;
    return Sk.ffi.remapToJs(n);
}

/*
 * s: string
 *
 */
PythonToBlocks.prototype.Str = function(node)
{
    var s = node.s;
    return block("text", node.lineno, {"TEXT": Sk.ffi.remapToJs(s)});
}

PythonToBlocks.prototype.Str_value = function(node) {
    var s = node.s;
    return Sk.ffi.remapToJs(s);
}

/*
 * value: expr_ty
 * attr: identifier
 * ctx: expr_context_ty
 *
 */
PythonToBlocks.prototype.Attribute = function(node)
{
    var value = node.value;
    var attr = node.attr;
    var ctx = node.ctx;
    
    throw new Error("Attribute access not implemented");
}

/*
 * value: expr_ty
 * slice: slice_ty
 * ctx: expr_context_ty
 *
 */
PythonToBlocks.prototype.Subscript = function(node)
{
    var value = node.value;
    var slice = node.slice;
    var ctx = node.ctx;
    
    if (slice.value._astname == "Str") {
        return block("dict_get_literal", node.lineno, {
            "ITEM": this.Str_value(slice.value)
        }, {
            "DICT": this.convert(value)
        });
    } else if (slice.value._astname == "Num") {
        return block("lists_index", node.lineno, {}, {
            "ITEM": this.convert(slice.value),
            "LIST": this.convert(value),
        });
    }
    
    throw new Error("This kind of subscript is not supported.");
}

/*
 * id: identifier
 * ctx: expr_context_ty
 */
PythonToBlocks.prototype.Name = function(node)
{
    var id = node.id;
    var ctx = node.ctx;
    switch (this.Name_str(node)) {
        case "True":
            return block("logic_boolean", node.lineno, {"BOOL": "TRUE"});
        case "False":
            return block("logic_boolean", node.lineno, {"BOOL": "FALSE"});
        case "___":
            return null;
        default:
            return block('variables_get', node.lineno, {
                "VAR": this.identifier(id)
            });
    }
}

/*
 * id: identifier
 * ctx: expr_context_ty
 */
PythonToBlocks.prototype.Name_str = function(node)
{
    var id = node.id;
    var ctx = node.ctx;
    return this.identifier(id);
}

PythonToBlocks.prototype.convertElements = function(key, values) {
    var output = {};
    for (var i = 0; i < values.length; i++) {
        output[key+i] = this.convert(values[i]);
    }
    return output;
}

/*
 * elts: asdl_seq
 * ctx: expr_context_ty
 *
 */
PythonToBlocks.prototype.List = function(node) {
    var elts = node.elts;
    var ctx = node.ctx;
    
    return block("lists_create_with", node.lineno, {}, 
        this.convertElements("ADD", elts)
    , {
        "inline": "true"
    }, {
        "@items": elts.length
    });
}

/*
 * elts: asdl_seq
 * ctx: expr_context_ty
 */
PythonToBlocks.prototype.Tuple = function(node)
{
    var elts = node.elts;
    var ctx = node.ctx;
    
    throw new Error("Tuples not implemented");
}

/*
 *
 *
 */
PythonToBlocks.prototype.Ellipsis = function() {
    throw new Error("Ellipsis not implemented");
}

/*
 * lower: expr_ty
 * upper: expr_ty
 * step: expr_ty
 *
 */
PythonToBlocks.prototype.Slice = function(node)
{
    var lower = node.lower;
    var upper = node.upper;
    var step = node.step;
    
    throw new Error("Slices not implemented");
}

/*
 * dims: asdl_seq
 *
 */
PythonToBlocks.prototype.ExtSlice = function(node)
{
    var dims = node.dims;
    
    throw new Error("ExtSlice is not implemented.");
}

/*
 * value: expr_ty
 *
 */
PythonToBlocks.prototype.Index = function(value)
{
    var value = node.value;
    
    throw new Error("Index is not implemented");
}

/*
 * target: expr_ty
 * iter: expr_ty
 * ifs: asdl_seq
 *
 */
PythonToBlocks.prototype.comprehension = function(node)
{
    var target = node.target;
    var iter = node.iter;
    var ifs = node.ifs;
    
    throw new Error("Comprehensions not implemented.");
}

/*
 * type: expr_ty
 * name: expr_ty
 * body: asdl_seq
 *
 */
PythonToBlocks.prototype.ExceptHandler = function(node)
{
    var type = node.type;
    var name = node.name;
    var body = node.boy;
    
    throw new Error("Except handlers are not implemented");
}

PythonToBlocks.prototype.argument_ = function(node) {
    var id = node.id;
    return this.identifier(id);
}

/*
 * args: asdl_seq
 * vararg: identifier
 * kwarg: identifier
 * defaults: asdl_seq
 *
 */
PythonToBlocks.prototype.arguments_ = function(node)
{
    var args = node.args;
    var vararg = node.vararg;
    var kwarg = node.kwarg;
    var defaults = node.defaults;
    
    var allArgs = [];
    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        allArgs.push(this.argument_(arg));
    }
    return allArgs;
}

/*
 * arg: identifier
 * value: expr_ty
 *
 */
PythonToBlocks.prototype.keyword = function(node)
{
    var arg = node.arg;
    var value = node.value;
    
    throw new Error("Keywords are not implemented");
}

/*
 * name: identifier
 * asname: identifier
 *
 */
PythonToBlocks.prototype.alias = function(node)
{
    var name = node.name;
    var asname = node.asname;
    
    throw new Error("Aliases are not implemented");
}


/* ----- expr_context ----- */
/*
Load
Store
Del
AugLoad
AugStore
Param
*/


/* ----- operator ----- */
/*
Add
Sub
Mult
Div
Mod
Pow
LShift
RShift
BitOr
BitXor
BitAnd
FloorDiv
*/

/* ----- unaryop ----- */
/*
Invert
Not
UAdd
USub
*/
/*
Blockly.Blocks['classics_get_all'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(WEATHER_HUE);
    this.appendDummyInput()
        .appendField("classics.get all books");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setTooltip('Returns all the books');
  }
};
Blockly.Python['classics_get_all'] = function(block) {
    Blockly.Python.definitions_['import_classics'] = 'import classics';
    var code = 'classics.get_all()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

PythonToBlocks.KNOWN_MODULES['classics'] = {
    "get_all": ["classics_get_all"]
};
*/


function newBlock(name) {
    var block = blockpy.components.editor.blockly.newBlock(name);
    block.initSvg();
    block.render();
}

var DAYS = [
    ["Monday", "MON"],
    ["Tuesday", "TUE"],
    ["Wednesday", "WED"],
    ["Thursday", "THU"],
    ["Friday", "FRI"],
    ["Saturday", "SAT"],
    ["Sunday", "SUN"]
  ]

var DAYS_MAP = {
        'mon': 'parking.Day("MON")',
        'tue': 'parking.Day("TUE")',
        'wed': 'parking.Day("WED")',
        'thu': 'parking.Day("THU")',
        'fri': 'parking.Day("FRI")',
        'sat': 'parking.Day("SAT")',
        'sun': 'parking.Day("SUN")',
        'tod': 'parking.today()'
    };


Blockly.Blocks['datetime_day'] = {
  /**
   * Block for datetime day.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DAY",
          "options": [["Today", "TODAY"]].concat(DAYS)
        }
      ],
      "output": "DatetimeDay",
      "colour": DATA_HUE,
      "tooltip": "Returns a day of the week",
      "helpUrl": ""
    });
  }
};
Blockly.Python['datetime_day'] = function(block) {
    Blockly.Python.definitions_['import_parking'] = 'import parking';
    var operator = DAYS_MAP[block.getFieldValue('DAY').slice(0, 3).toLowerCase()];
    return [operator, Blockly.Python.ORDER_ATOMIC];
};

var HOURS = [["1", "1"], ["2", "2"], ["3", "3"],
             ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],
             ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"],
             ["12", "12"]];
var MINUTES = [["00", "00"], ["30", "30"]];
var MERIDIANS = [["am", "AM"], ["pm", "PM"]];

Blockly.Blocks['datetime_time'] = {
  /**
   * Block for datetime day.
   * @this Blockly.Block
   */
    init: function() {
        this.setColour(DATA_HUE);
        var dropdown = new Blockly.FieldDropdown([["Now", "NOW"]].concat(HOURS), function(option) {
            var isNow = (option == 'NOW');
            this.sourceBlock_.updateShape_(isNow);
        });
        this.appendDummyInput()
            .appendField(dropdown, 'HOUR');
        this.setInputsInline(true);
        this.setOutput(true, 'DatetimeTime');
        this.setTooltip("Returns a time of day");
    },
    mutationToDom: function() {
        var container = document.createElement('mutation');
        var isNow = (this.getFieldValue('HOUR') == 'NOW');
        container.setAttribute('isNow', isNow);
        return container;
    },
    domToMutation: function(xmlElement) {
        var isNow = (xmlElement.getAttribute('isNow') == 'true');
        this.updateShape_(isNow);
    },
    updateShape_: function(isNow) {
        // Add or remove a Value Input.
        var inputExists = this.getInput('EXTENDED');
        if (!isNow) {
            if (!inputExists) {
                var minuteMenu = new Blockly.FieldDropdown(MINUTES);
                var meridianMenu = new Blockly.FieldDropdown(MERIDIANS);
                this.appendDummyInput('EXTENDED')
                    .appendField(':')
                    .appendField(minuteMenu, 'MINUTE')
                    .appendField(meridianMenu, 'MERIDIAN');
            }
        } else if (inputExists) {
            this.removeInput('EXTENDED');
        }
    }
};

var HOURS_MAP = {
    '1': 'parking.one()',
    '2': 'parking.two()',
    '3': 'parking.three()',
    '4': 'parking.four()',
    '5': 'parking.five()',
    '6': 'parking.six()',
    '7': 'parking.seven()',
    '8': 'parking.eight()',
    '9': 'parking.nine()',
    '10': 'parking.ten()',
    '11': 'parking.eleven()',
    '12': 'parking.twelve()',
    'NOW': 'parking.now()'
};
var MINUTES_MAP = {
    '00': 'parking.exactly()',
    '30': 'parking.half()'
}
var MERIDIANS_MAP = {
    'AM': 'parking.am()',
    'PM': 'parking.pm()'
}

Blockly.Python['datetime_time'] = function(block) {
    Blockly.Python.definitions_['import_parking'] = 'import parking';
    var hour = block.getFieldValue('HOUR');
    var code;
    if (hour == "NOW") {
        code = "parking.now()";
    } else {
        var minute = parseInt(block.getFieldValue('MINUTE'));
        var meridian = Blockly.Python.quote_(block.getFieldValue('MERIDIAN'));
        code = 'parking.Time('+hour+','+minute+','+meridian+')';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

var convertDate = function(date) {
    date = date.slice(0, 3).toLowerCase();
    switch (date) {
        case "mon": return "Monday";
        case "tue": return "Tuesday";
        case "wed": return "Wednesday";
        case "thu": return "Thursday";
        case "fri": return "Friday";
        case "sat": return "Saturday";
        case "sun": return "Sunday";
        default: return date;
    }
}
var convertMinute = function(minute) {
    if (minute < 10) {
        return "0"+minute;
    } else {
        return ""+minute;
    }
}

PythonToBlocks.KNOWN_MODULES['parking'] = {
    "today": ["datetime_day", ["DAY", "TODAY"]],
    "day_compare": ["datetime_check_day", "OP", 
                            {"type": "variable", "mode": "value", "name": "LEFT"}, 
                            {"type": "mapper", "name": "VALUE", "method": convertDate}],
    "Day": ["datetime_day", {"type": "mapper", "name": "DAY", "method": convertDate}],
    "now": ["datetime_time", ["HOUR", "NOW"]],
    "Time": ["datetime_time", {"type": "integer", "name": "HOUR", "add_mutation": {"name": "@isnow", "value": "true"}}, 
                             {"type": "integer_mapper", "name": "MINUTE", "method": convertMinute}, 
                             "MERIDIAN"],
    "time_compare": ["datetime_check_time", "OP",
                            {"type": "variable", "mode": "value", "name": "LEFT"}, 
                            {"type": "integer", "name": "HOURS"},
                            {"type": "integer_mapper", "name": "MINUTES", "method": convertMinute},
                            "MERIDIANS"]
};

var equalityOperators = [
    ["==", "IS"],
    ["<", "BEFORE"],
    [">", "AFTER"],
    ["<=", "BEFORE_EQUAL"],
    ["=>", "AFTER_EQUAL"],
    ["!=", "IS_NOT"]
];
var equalityOperatorsConversions = {
    "IS": "parking.equal",
    "BEFORE": "parking.before",
    "AFTER": "parking.after",
    "BEFORE_EQUAL": "parking.before_equal",
    "AFTER_EQUAL": "parking.after_equal",
    "IS_NOT": "parking.not_equal",
}
// FINISH _time and _day
// Add in numbers and days to KNOWN_MODULES

Blockly.Blocks['datetime_check_day'] = {
  /**
   * Block for testing if something contains something.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('LEFT')
        .setCheck('DatetimeDay')
        .appendField(new Blockly.FieldDropdown(DAYS), 'VALUE')
        .appendField(new Blockly.FieldDropdown(equalityOperators), 'OP');
    
    this.setInputsInline(false);
  }
};

Blockly.Python['datetime_check_day'] = function(block) {
    Blockly.Python.definitions_['import_parking'] = 'import parking';
    var value = Blockly.Python.quote_(block.getFieldValue('VALUE'));
    var operator = Blockly.Python.quote_(block.getFieldValue('OP'));
    var left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC) || "___";
    var code = "parking.day_compare(" + operator + ", " + left + ', ' + value + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['datetime_check_time'] = {
  /**
   * Block for testing if something contains something.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('LEFT')
        .setCheck('DatetimeTime')
        .appendField(new Blockly.FieldDropdown(HOURS), 'HOURS')
        .appendField(':')
        .appendField(new Blockly.FieldDropdown(MINUTES), 'MINUTES')
        .appendField(new Blockly.FieldDropdown(MERIDIANS), 'MERIDIANS')
        .appendField(new Blockly.FieldDropdown(equalityOperators), 'OP');
    //this.setInputsInline(true);
  }
};

Blockly.Python['datetime_check_time'] = function(block) {
    Blockly.Python.definitions_['import_parking'] = 'import parking';
    var hour = parseInt(block.getFieldValue('HOURS'));
    var minute = parseInt(block.getFieldValue('MINUTES'));
    var meridian = Blockly.Python.quote_(block.getFieldValue('MERIDIANS'));
    var operator = Blockly.Python.quote_(block.getFieldValue('OP'));
    var left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC)
    var code = "parking.time_compare(" + operator+", "+left + ',' + hour + ',' + minute + ',' +meridian + ")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
function randomInteger(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Indents the given string
 * @param {string} str  The string to be indented.
 * @param {number} numOfIndents  The amount of indentations to place at the
 *     beginning of each line of the string.
 * @param {number=} opt_spacesPerIndent  Optional.  If specified, this should be
 *     the number of spaces to be used for each tab that would ordinarily be
 *     used to indent the text.  These amount of spaces will also be used to
 *     replace any tab characters that already exist within the string.
 * @return {string}  The new string with each line beginning with the desired
 *     amount of indentation.
 */
function indent(str, numOfIndents, opt_spacesPerIndent) {
  str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
  numOfIndents = new Array(opt_spacesPerIndent + 1 || 0).join(' '); // re-use
  return opt_spacesPerIndent
    ? str.replace(/^\t+/g, function(tabs) {
        return tabs.replace(/./g, numOfIndents);
    })
    : str;
}

function encodeHTML(text) {
    return text.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&apos;');
}

/**
 * Shuffle the blocks in the workspace
 */
Blockly.WorkspaceSvg.prototype.shuffle = function() {
    var metrics = this.getMetrics();
    var width = metrics.viewWidth / 2,
        height = metrics.viewHeight;
    var blocks = this.getTopBlocks(false);
    var y = 5, x = 0,
        maximal_increase = height/blocks.length;
    for (var i = 0; i < blocks.length; i++){
        // Get a block
        var block = blocks[i];
        var properties = block.getRelativeToSurfaceXY();
        if (i == 0) {
            x = 5;
        } else {
            x = -properties.x+randomInteger(10, width);
        }
        block.moveBy(x, 
                     -properties.y+y);
        y = y + randomInteger(5, maximal_increase);
    }
}

function BlockPyDialog(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.titleTag = tag.find('.modal-title');
    this.bodyTag = tag.find('.modal-body');
}

BlockPyDialog.prototype.show = function(title, body, onclose) {
    this.titleTag.html(title);
    this.bodyTag.html(body);
    this.tag.modal('show');
    this.tag.draggable({
        'handle': '.modal-title'
    });
    
    this.tag.on('hidden.bs.modal', function (e) {
        if (onclose !== undefined) {
            onclose();
        }
    });
}
function LocalStorageWrapper(namespace) {
    this.set =  function(key, value) {
        localStorage.setItem(namespace+"_"+key+"_value", value);
        localStorage.setItem(namespace+"_"+key+"_timestamp", $.now());
    };
    this.remove = function(key) {
        localStorage.removeItem(namespace+"_"+key+"_value");
        localStorage.removeItem(namespace+"_"+key+"_timestamp");
    };
    this.get = function(key) {
        return localStorage.getItem(namespace+"_"+key+"_value");
    };
    this.has = function(key) {
        return localStorage.getItem(namespace+"_"+key+"_value") !== null;
    };
    // Tests whether the server has the newer version
    this.is_new = function(key, server_time) {
        var stored_time = localStorage.getItem(namespace+"_"+key+"_timestamp");
        return (server_time >= stored_time+5000);
    };
};
//BlockPyLocalStorage = new LocalStorageWrapper("BLOCKPY")
/**
 * Printer
 * Responsible for maintaining the list of elements in the printer console.
 */

function BlockPyPrinter(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.loadPrinter();
};

BlockPyPrinter.prototype.loadPrinter = function() {
    this.resetPrinter();
}

BlockPyPrinter.prototype.resetPrinter = function() {
    this.tag.empty();
    this.main.model.execution.output.removeAll();
}

BlockPyPrinter.prototype.getConfiguration = function() {
    var printer = this;
    return {
        'printHtml': function(html, value) { printer.printHtml(html, value);},
        'width': this.tag.width(),
        'png_mode': true,
        'height': this.tag.height(),
        'console': this.tag[0]
    }
}

BlockPyPrinter.prototype.stepPrinter = function(step, page) {
    $(this.printer).find('.blockpy-printer-output').each(function() {
        if ($(this).attr("data-step") <= step) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

/*
 * Print a successful line to the on-screen printer.
 */
BlockPyPrinter.prototype.print = function(lineText) {
    var stepNumber = this.main.model.execution.step();
    var lineNumber = this.main.model.execution.line_number();
    // Perform any necessary cleaning
    if (lineText !== "\n") {
        var encodedText = encodeHTML(lineText);
        this.main.model.execution.output.push(encodedText.trim());
        if (!(this.main.model.settings.mute_printer())) {
            var lineContainer = $("<div class='blockpy-printer-output' >");
            var lineData = $("<samp></samp>", {
                'data-toggle': 'tooltip',
                'data-placement': 'left',
                'data-step': stepNumber,
                "html": encodedText,
                'title': "Step "+stepNumber + ", Line "+lineNumber,
            })
            lineContainer.append(lineData);
            // Append to the current text
            this.tag.append(lineContainer);
            lineData.tooltip();
        }
    }
}

/*
 *
 * html: A blob of HTML to render in the tag
 * value: a value to push on the outputList for comparison
 */
BlockPyPrinter.prototype.printHtml = function(chart, value) {
    var step = this.main.model.execution.step();
    var line = this.main.model.execution.line_number();
    this.main.model.execution.output.push(value);
    if (!(this.main.model.settings.mute_printer())) {
        var outerDiv = $(Sk.console.png_mode ? chart : chart[0]);//.parent();
        outerDiv.parent().show();
        outerDiv.attr({
            "data-toggle": 'tooltip',
            "data-placement": 'left',
            //"data-container": '#'+chart.attr("id"),
            "class": "blockpy-printer-output",
            "data-step": step,
            "title": "Step "+step+", Line "+line
        });
        outerDiv.tooltip();
    }
}

BlockPyInterface = "<div class='blockpy-content container-fluid' style='background-color :#fcf8e3; border: 1px solid #faebcc; '>    <div class='blockpy-popup modal fade' style='display:none'>        <div class='modal-dialog' style='width:750px'>            <div class='modal-content' id='modal-message' >                <div class='modal-header'>                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>                    <h4 class='modal-title'>Dynamic Content</h4>                </div>                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>                </div>                <div class='modal-footer'>                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>                </div>                </div>        </div>    </div>    <canvas id='capture-canvas' style='display:none'></canvas>    <div class='row' style='padding-bottom: 10px; border-bottom: 1px solid #faebcc; '>        <div class='blockpy-content-top col-md-9 col-sm-9'>            <span class='blockpy-alert pull-right text-muted' data-bind=\"visible: false, text: status.text\"></span>            <strong>BlockPy: </strong>             <span class='blockpy-presentation-name'                  data-bind='text: assignment.name'></span>            <div class='blockpy-presentation' data-bind=\"html: assignment.introduction\">            </div>        </div>        <div class='blockpy-content-topright col-md-3 col-sm-3'>            <span class='pull-right label label-default'                  data-bind=\"css: status_server_class()[0],                             text: status_server_class()[1]\">Loading</span>            <div class='pull-right'>                Disable Semantic Errors: <input type='checkbox' data-bind=\"checked: settings.disable_semantic_errors\">                <label class='blockpy-toolbar-auto-upload' data-bind=\"visible: settings.instructor\">                Auto-save:                <input type='checkbox' data-bind=\"checked:settings.auto_upload\">                </label>                                 <label class='blockpy-toolbar-instructor-mode' data-bind=\"visible: settings.instructor_initial\">                Instructor mode:                 <input type='checkbox' data-bind=\"checked:settings.instructor\">                </label>                                <label class='blockpy-toolbar-instructor-mode' data-bind=\"visible: settings.instructor_initial\">                Upload mode:                 <input type='checkbox' data-bind=\"checked:assignment.upload\">                </label>             </div>            <!--<img src=\"images/corgi.png\" class='img-responsive' />-->        </div>    </div>    <div class='row' style='margin-top: 5px border: 1px solid #bce8f1;'>        <div class='blockpy-content-left col-md-6 col-sm-6'             style='padding:10px'>            <strong>Printer</strong>            <div class='blockpy-printer blockpy-printer-default'>            </div>        </div>        <div class='blockpy-content-right col-md-6 col-sm-6 bubble'             style='padding:10px'>            <div class='blockpy-feedback'>                <button type='button' class='btn btn-sm btn-default blockpy-feedback-trace pull-right'                         data-bind=\"visible: !execution.show_trace() && (status.error() == 'feedback' || status.error() == 'no errors')\">                    <span class='glyphicon glyphicon-circle-arrow-down'></span> Trace Variables                </button>                                <strong>Feedback: </strong>                <span class='label blockpy-feedback-status' data-bind=\"css: status_feedback_class()[0], text: status_feedback_class()[1]\">Runtime Error</span>                <br>                <pre class='blockpy-feedback-original'></pre>                <strong class='blockpy-feedback-title'></strong>                <div class='blockpy-feedback-body'><i>Run your code to get feedback.</i></div>                <div class='blockpy-code-trace'></div>                                <div class=\"blockpy-feedback-traces\"                      data-bind=\"visible: execution.show_trace, foreach: execution.trace\">                                <div data-bind=\"visible: $index()+1 == $root.execution.trace_step()\">                <div>                    <button type='button' class='btn btn-default' data-bind=\"click: $root.moveTraceFirst\">                        <span class='glyphicon glyphicon-step-backward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: $root.moveTraceBackward\">                        <span class='glyphicon glyphicon-backward'></span>                    </button>                    Step <span data-bind='text: step'></span>                    / <span data-bind='text: $root.execution.last_step()-1'></span>                    (<span data-bind='text: line == -1 ? \"The end\" : \"Line \"+line'></span>)                    <button type='button' class='btn btn-default' data-bind=\"click: $root.moveTraceForward\">                        <span class='glyphicon glyphicon-forward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: $root.moveTraceLast\">                        <span class='glyphicon glyphicon-step-forward'></span>                    </button>                </div>                                <table class='table table-condensed table-striped table-bordered table-hover'>                    <thead>                        <tr><th>Name</th><th>Type</th><th>Value</th></tr>                    </thead>                    <tbody data-bind=\"foreach: properties\">                        <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">                            <td data-bind=\"text: name\"></td>                            <td data-bind=\"text: type\"></td>                            <td><code data-bind=\"text: value\"></code></td>                        </tr>                    </tbody>                </table>                </div>                                </div>            </div>        </div>    </div>    <div class=\"row\"         style='background-color :#fcf8e3; padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='col-md-12 col-sm-12 blockpy-toolbar btn-toolbar' role='toolbar'>                        <button type='button' class='btn blockpy-run' style='float:left',                data-bind='css: execution.status() == \"running\" ? \"btn-info\" :                                execution.status() == \"error\" ? \"btn-danger\" : \"btn-success\" ' >                <span class='glyphicon glyphicon-play'></span> Run            </button>                        <div class=\"btn-group\" data-toggle=\"buttons\" data-bind=\"visible: !assignment.upload()\">                <label class=\"btn btn-default blockpy-mode-set-blocks\"                        data-bind=\"css: {active: settings.editor() == 'Blocks'}\">                    <span class='glyphicon glyphicon-th-large'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> Blocks                </label>                <label class=\"btn btn-default blockpy-mode-set-instructor\"                       data-bind=\"visible: settings.instructor,                                  css: {active: settings.editor() == 'Upload'}\">                    <span class='glyphicon glyphicon-list-alt'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Instructor                </label>                <label class=\"btn btn-default blockpy-mode-set-text\"                        data-bind=\"css: {active: settings.editor() == 'Text'}\">                    <span class='glyphicon glyphicon-pencil'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Text                </label>            </div>            <button type='button' class='btn btn-default blockpy-toolbar-reset' data-bind=\"visible: !assignment.upload()\">                <span class='glyphicon glyphicon-refresh'></span> Reset            </button>            <!--<button type='button' class='btn btn-default blockpy-toolbar-capture'>                <span class='glyphicon glyphicon-picture'></span> Capture            </button>-->            <button type='button' class='btn btn-default blockpy-toolbar-import' data-bind=\"visible: !assignment.upload()\">                <span class='glyphicon glyphicon-list-alt'></span> Import Datasets            </button>            <!--            <button type='button' class='btn btn-default blockpy-toolbar-english'>                <span class='glyphicon glyphicon-list-alt'></span> English            </button>            -->                        <select data-bind=\"visible: settings.instructor() & !assignment.upload(), value: settings.filename\"                    class=\"blockpy-toolbar-filename-picker\">                <option value='__main__' selected>Student Code</option>                <option value='starting_code'>Starting Code</option>                <option value='give_feedback'>Generate Feedback</option>            </select>                        </div>    </div>    <div class='row blockpy-content-bottom'         style='padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='blockpy-editor col-md-12 col-sm-12'>            <div class='blockpy-blocks blockpy-editor-menu'                  style='height:100%'>                <div class='blockly-div' style='height:450px; width: 100%' '></div>                <!-- <div class='blockly-area'></div> -->            </div>            <div class='blockpy-text blockpy-editor-menu'>                <div class='blockpy-text-sidebar' style='width:150px; height: 100%; float:left; background-color: #ddd'>                <!--                <button type='button' class='btn btn-default blockpy-text-insert-if'>Decision (If)</button>                <button type='button' class='btn btn-default blockpy-text-insert-if-else'>Decision (If/Else)</button>                -->                </div>                <textarea class='codemirror-div language-python'                           style='height:100%'></textarea>            </div>            <div class='blockpy-upload blockpy-editor-menu'>                <label class=\"btn btn-default btn-file\">                    Browse <input type=\"file\" style=\"display: none;\">                </label>            </div>            <div class='blockpy-instructor blockpy-editor-menu form-inline'>                <!-- Name -->                <form class=\"form-inline\" style='display:inline-block'>                <label>Name:</label>                <input type='text' class='blockpy-presentation-name-editor form-control'                       data-bind='textInput: assignment.name'>                 </form>                <br>                <br>                                <label>Introduction:</label>                <div class='blockpy-presentation-body-editor'>                 </div>                                <!-- Parsons -->                <label class='blockpy-presentation-parsons-check'>                Parsons:                <input type='checkbox' class='form-control' data-bind=\"checked:assignment.parsons\">                </label>                 <br>                                <!-- Initial mode -->                <label class='blockpy-presentation-text-first'>                Initial View:                <select data-bind=\"value: assignment.initial_view\">                    <option value=\"Blocks\" selected>Blocks</option>                    <option value=\"Text\">Text</option>                    <option value=\"Instructor\">Instructor</option>                    <option value=\"Upload\">Upload</option>                </select>                </label>                <br>                                <label>Available Modules</lable>                <select class='blockpy-available-modules' multiple='multiple'                        data-bind=\"selectedOptions: assignment.modules\">                    <option>Properties</option>                    <option>Decisions</option>                    <option>Iteration</option>                    <option>Functions</option>                    <option>Calculation</option>                    <option>Output</option>                    <option>Python</option>                    <option>Values</option>                    <option>Lists</option>                    <option>Dictionaries</option>                    <option>Data - Parking</option>                            </div>            <div class='blockpy-upload blockpy-editor-menu'>            </div>        </div>    </div>    <div>        <div class='blockpy-content-right col-md-5 col-sm-5 alert alert-info'>            <div class='panel panel-default'>                <div class='panel-heading'>Data Explorer</div>                <div class='panel-body'>                <div class='blockpy-explorer'>                    <table><tr>                    <!-- Step: X of Y (Line: Z) -->                    <td colspan='4'>                        <div class='blockpy-explorer-run-hide'>                            <i>Run your code to explore it.</i>                        </div>                        <div class='blockpy-explorer-status'>                            <strong>Step: </strong>                            <span class='blockpy-explorer-step-span'>0</span> of                             <span class='blockpy-explorer-length-span'>0</span>                             (<strong>Line: </strong>                            <span class='blockpy-explorer-line-span'>0</span>)                        </div>                    </td>                    </tr><tr>                    <!-- First Previous Next Last -->                    <td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-first'>                        <span class='glyphicon glyphicon-fast-backward'></span> First</button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-back'>                        <span class='glyphicon glyphicon-backward'></span> Back</button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-next'>                        Next <span class='glyphicon glyphicon-forward'></span></button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-last'>                        Last <span class='glyphicon glyphicon-fast-forward'></span> </button>                    </td>                    </tr></table>                    <!-- Printer -->                                        <!-- Modules -->                    <br><div>                        <strong>Loaded Modules: </strong>                        <i class='blockpy-explorer-modules'>None</i>                    </div>                    <!-- Actual Trace data -->                    <br><strong>Trace Table</strong>                    <br><table style='width: 100%'                            class='table table-condensed table-striped                                    table-bordered table-hover blockpy-explorer-table'>                        <!-- Property Type Value -->                        <tr>                            <th>Property</th>                            <th>Type</th>                            <th>Value</th>                        </tr>                    </table>                </div>                </div>            </div>        </div>    </div></div><!--<div class='blockpy-explorer-errors alert alert-danger alert-dismissible' role='alert'>                     <button type='button' class='blockpy-explorer-errors-hide close' aria-label='Close'><span  aria-hidden='true'>&times;</span></button>                     <div class='blockpy-explorer-errors-body'>                                     </div>-->";

function BlockPyServer(main) {
    this.main = main;
    
    // Add the LocalStorage connection
    this.storage = new LocalStorageWrapper("BLOCKPY");
    
    this.saveTimer = {};
    this.presentationTimer = null;
    
    this.createSubscriptions();
}

BlockPyServer.prototype.createSubscriptions = function() {
    var server = this, model = this.main.model;
    model.program.subscribe(function() { server.saveCode(); });
    model.assignment.name.subscribe(function() { server.saveAssignment();});
    model.assignment.introduction.subscribe(function() { server.saveAssignment(); });
    model.assignment.parsons.subscribe(function() { server.saveAssignment(); });
    model.assignment.initial_view.subscribe(function() { server.saveAssignment(); });
    model.assignment.modules.subscribe(function() { server.saveAssignment(); });
    model.settings.editor.subscribe(function(newValue) { server.logEvent('editor', newValue); });
};

BlockPyServer.prototype.TIMER_DELAY = 1000;

BlockPyServer.prototype.createServerData = function() {
    var assignment = this.main.model.assignment;
    return {
        'assignment_id': assignment.assignment_id,
        'course_id': assignment.course_id,
        'student_id': assignment.student_id,
        'version': assignment.version()
    }
}

BlockPyServer.prototype.setStatus = function(status) {
    this.main.model.status.server(status);
}

BlockPyServer.prototype.defaultResponse = function(response) {
    if (response.is_version_correct) {
        this.setStatus('Out of date');
    } else if (response.success) {
        this.setStatus('Saved');
    } else {
        console.error(response);
        this.setStatus('Error');
    }
}
BlockPyServer.prototype.defaultFailure = function() {
    this.setStatus('Disconnected');
}

BlockPyServer.prototype.logEvent = function(event_name, action) {
    var data = this.createServerData();
    data['event'] = event_name;
    data['action'] = action;
    
    this.setStatus('Logging');
    if (this.main.model.server_is_connected('log_event')) {
        $.post(this.main.model.constants.urls.log_event, data, 
               this.defaultResponse.bind(this))
         .fail(this.defaultFailure.bind(this));
    } else {
        this.setStatus('Offline');
    }
}

BlockPyServer.prototype.markSuccess = function(success) {
    var data = this.createServerData();
    var server = this,
        model = this.main.model;
    data['code'] = model.programs.__main__;
    data['status'] = success;
    this.main.components.editor.getPngFromBlocks(function(pngData, img) {
        data['image'] = pngData;
        img.remove();
        server.setStatus('Saving');
        if (model.server_is_connected('save_success')) {
            $.post(model.constants.urls.save_success, data, 
                   server.defaultResponse.bind(server))
             .fail(server.defaultFailure.bind(server));
        } else {
            server.setStatus('Offline');
        }
    });
};

BlockPyServer.prototype.saveAssignment = function() {
    var data = this.createServerData();
    var model = this.main.model;
    data['introduction'] = model.assignment.introduction();
    data['parsons'] = model.assignment.parsons();
    data['initial'] = model.assignment.initial_view();
    data['name'] = model.assignment.name();
    //data['disabled'] = disabled;
    data['modules'] = model.assignment.modules().join(','); // TODO: hackish, broken if ',' is in name
    
    var server = this;
    this.setStatus('Saving');
    if (this.main.model.server_is_connected('save_assignment') && 
        this.main.model.settings.auto_upload()) {
        clearTimeout(this.presentationTimer);
        this.presentationTimer = setTimeout(function() {
            $.post(server.main.model.constants.urls.save_assignment, data, 
                   server.defaultResponse.bind(server))
             .fail(server.defaultFailure.bind(server));
        }, this.TIMER_DELAY);
    } else {
        this.setStatus('Offline');
    }
}

BlockPyServer.prototype.saveCode = function() {
    var filename = this.main.model.settings.filename();
    var data = this.createServerData();
    data['filename'] = filename;
    data['code'] = this.main.model.programs[filename]();
    
    var server = this;
    this.setStatus('Saving');
    if (this.main.model.server_is_connected('save_code') && 
        this.main.model.settings.auto_upload()) {
        if (this.saveTimer[filename]) {
            clearTimeout(this.saveTimer);
        }
        this.saveTimer[filename] = setTimeout(function() {
            $.post(server.main.model.constants.urls.save_code, data, 
                   server.defaultResponse.bind(server))
             .fail(server.defaultFailure.bind(server));
        }, this.TIMER_DELAY);
    } else {
        this.setStatus('Offline');
    }
}

/*
BlockPyServer.prototype.load = function() {
    var data = {
        'question_id': this.model.question.question_id,
        'student_id': this.model.question.student_id,
        'context_id': this.model.question.context_id
    };
    var alertBox = this.alertBox;
    var server = this, blockpy = this.blockpy;
    if (this.model.urls.server !== false && this.model.urls.load_code !== false) {
        $.post(this.model.urls.load_code, data, function(response) {
            if (response.success) {
                if (server.storage.has(data.question_id)) {
                    if (server.storage.is_new(data.question_id, response.timestamp)) {
                        var xml = server.storage.get(data.question_id);
                        server.model.load(xml);
                        server.save();
                    } else {
                        server.storage.remove(data.question_id);
                        if (response.code !== null) {
                            server.model.load(response.code);
                        }
                    }
                } else {
                    if (response.code !== null) {
                        server.model.load(response.code);
                    }
                }
                if (response.completed) {
                    blockpy.feedback.success('');
                }
                alertBox("Loaded").delay(200).fadeOut("slow");
            } else {
                console.error("Server Load Error", response.message);
                alertBox("Loading failed");
            }
        }).fail(function() {
            alertBox("Loading failed");
        }).always(function() {
            server.model.loaded = true;
        });
    } else {
        server.model.loaded = true;
        alertBox("Loaded").delay(200).fadeOut("slow");
        if (this.model.urls.load_success === true) {
            this.blockpy.feedback.success('');
        }
    }
};
*/
function BlockPyPresentation(main, tag) {
    this.main = main;
    this.tag = tag;
    
    var presentationEditor = this;
    //this.main.model.settings.instructor.subscribe(function() {presentationEditor.setVisible()});
}

BlockPyPresentation.prototype.closeEditor = function() {
    this.tag.destroy();
};
BlockPyPresentation.prototype.setBody = function(content) {
    this.main.model.assignment.introduction(content);
    this.main.components.editor.blockly.resize();
};

BlockPyPresentation.prototype.setVisible = function() {
    if (this.main.model.settings.instructor()) {
        this.startEditor();
    } else {
        this.closeEditor();
    }
}

BlockPyPresentation.prototype.startEditor = function() {
    var presentationEditor = this;
    this.tag.summernote({
        codemirror: { // codemirror options
            theme: 'monokai'
        },
        onChange: function(content) {presentationEditor.setBody(content)},
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['fontname', 'fontsize']],
            ['insert', ['link', 'table', 'ul', 'ol']],
            ['misc', ['codeview', 'help']]
        ]
    });
    this.tag.code(this.main.model.assignment.introduction());
    //this.name.tag();
};
function PropertyExplorer(main, tag, stepConsole, stepEditor, tag, server) {
    this.main = main;
    this.tag = tag;
    
    this.traceTable = [];
    
    this.stepConsole = stepConsole;
    this.stepEditor = stepEditor;
    this.server = server;
    this.tag = tag;
    this.tags = {
        "message": tag.find('.blockpy-explorer-run-hide'),
        "errors": tag.find('.blockpy-explorer-errors'),
        "errors_body": tag.find('.blockpy-explorer-errors-body'),
        "errors_hide": tag.find('.blockpy-explorer-errors-hide'),
        "first": tag.find('.blockpy-explorer-first'),
        "back": tag.find('.blockpy-explorer-back'),
        "next": tag.find('.blockpy-explorer-next'),
        "last": tag.find('.blockpy-explorer-last'),
        "step": tag.find('.blockpy-explorer-step-span'),
        "length": tag.find('.blockpy-explorer-length-span'),
        "line": tag.find('.blockpy-explorer-line-span'),
        "table": tag.find('.blockpy-explorer-table'),
        "modules": tag.find('.blockpy-explorer-modules')
    };
    this.tags.first.prop("disabled", true);
    this.tags.back.prop("disabled", true);
    this.tags.next.prop("disabled", true);
    this.tags.last.prop("disabled", true);
    this.tags.errors.hide();
    var errors = this.tags.errors;
    this.tags.errors_hide.click(function() {
       errors.hide();
    });
    
    /*
        // Add the Property Explorer
    this.explorer = new PropertyExplorer(
        function(step, page) { 
            blockpy.stepConsole(step);
        },
        function(step, page) { 
            blockpy.editor.highlightLine(page.line-1);
            if (page.block) {
                blockpy.editor.highlightBlock(page.block);
            } else {
                blockpy.editor.highlightBlock(null);
            }
        },
        blockpy.mainDiv.find('.blockpy-explorer'),
        blockpy.server
    );
    */
}

PropertyExplorer.prototype.move = function(step) {
    // Fix the current step
    var last = this.traceTable.length-1;
    if (step < 0) {
        step = last + step + 1;
    }
    if (step > last) {
        step = last;
    }
    // Update the VCR Controls
    this.tags.first.prop('disabled', step == 0);
    this.tags.back.prop('disabled', step == 0);
    this.tags.next.prop('disabled', step == last);
    this.tags.last.prop('disabled', step == last);
    // Unbind/bind the VCR controls functions
    var explorer = this;
    var server = this.server;
    if (step > 0) {
        var back = Math.max(0, step-1);
        this.tags.first.off('click').click(function() {
            server.logEvent('explorer', 'first');
            explorer.move(0);
        });
        this.tags.back.off('click').click(function() {
            server.logEvent('explorer', 'back');
            explorer.move(back);
        });
    }
    if (step < last) {
        var next = Math.min(last, step+1);
        this.tags.last.off('click').click(function() {
            server.logEvent('explorer', 'last');
            explorer.move(last);
        });
        this.tags.next.off('click').click(function() {
            server.logEvent('explorer', 'next');
            explorer.move(next);
        });
    }
    // Update the header bar of the explorer
    this.tags.step.html(step+1);
    this.tags.length.html(last+1);
    this.clear();
    // Get the page of the traceTable at this step
    var page = this.traceTable[step];
    if (page === undefined) {
        this.tags.table.append("<tr><td colspan='3'>No data found at this step!</td></tr>");
        return;
    }
    // Update the modules list
    if (page.modules.length > 0) {
        this.tags.modules.html(page.modules.join(', '));
    } else {
        this.tags.modules.html("None");
    }
    // Update header row
    this.tags.line.html(page.line==-1 ? "Last": page.line);
    // Notify the console and editor of the new step
    this.stepConsole(step, page);
    this.stepEditor(step, page);
    // Render the properties
    for (var property in page.properties) {
        var value = page.properties[property];
        this.tags.table.append(
            $("<tr/>").append($("<td/>").text(value.name))
                      .append($("<td/>").text(value.type))
                      .append('<td><samp>'+encodeHTML(value.value)+'</samp></td>'));
    }
};

String.prototype.trunc = String.prototype.trunc ||
function(n) {
    return (this.length > n) ? this.substr(0,n-1)+'&hellip;' : this;
};

PropertyExplorer.prototype.abbreviateValue = function(value) {
    
    return encodeHTML;
}

/*
 * Clear out any existing data
 */
PropertyExplorer.prototype.clear = function() {
    this.tags.table.find("tr:gt(0)").remove();
}

PropertyExplorer.prototype.reload = function(traceTable) {
    this.traceTable = traceTable;
    this.move(-1);
    this.tags.message.hide();
}

PropertyExplorer.prototype.load = function() {
    this.tags.errors.hide();
    this.step = 0;
}
function BlockPyEditor(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.converter = new PythonToBlocks();
    
    // HTML DOM accessors
    this.blockTag = tag.find('.blockpy-blocks');
    this.textTag = tag.find('.blockpy-text');
    this.uploadTag = tag.find('.blockpy-upload');
    this.instructorTag = tag.find('.blockpy-instructor');
    this.textSidebarTag = this.textTag.find(".blockpy-text-sidebar");
    
    // Blockly and CodeMirror instances
    this.blockly = null;
    this.codeMirror = null;
    this.updateStack = [];
    this.blocksFailed = false;
    
    // Keep track of the toolbox width
    this.blocklyToolboxWidth = 0;
    
    // Initialize subcomponents
    this.initText();
    this.initBlockly();
    this.initInstructor();
    
    var editor = this;
    
    // Handle mode switching
    this.main.model.settings.editor.subscribe(function() {editor.setMode()});
    
    // Handle level switching
    this.main.model.settings.level.subscribe(function() {editor.setLevel()});
}

BlockPyEditor.prototype.initBlockly = function() {
    var blocklyDiv = this.blockTag.find('.blockly-div')[0];
    this.blockly = Blockly.inject(blocklyDiv,
                                  { path: this.main.model.constants.blocklyPath, 
                                    scrollbars: this.main.model.constants.blocklyScrollbars, 
                                    readOnly: this.main.model.settings.read_only(),
                                    zoom: {enabled: false},
                                    toolbox: this.updateToolbox(false)});
    // Activate tracing in blockly for highlighting
    this.blockly.traceOn(true);
    // Activate undo/redo
    this.blockly.enableUndo();
    // Register model changer
    var editor = this;
    this.blockly.addChangeListener(function() { 
        //editor.main.components.feedback.clearEditorErrors();
        editor.updateCodeFromBlocks();
    });
    //this.main.model.program.subscribe(function() {editor.updateBlocks()});
    this.main.model.settings.filename.subscribe(function() {
        if (editor.main.model.settings.editor() == "Blocks") {
            editor.updateBlocks()
        }
    });
    this.main.model.assignment.modules.subscribe(function() {editor.updateToolbox(true)});
    // Force the proper window size
    this.blockly.resize();
    // Keep the toolbox width set
    this.blocklyToolboxWidth = this.blockly.toolbox_.width;
    
    Blockly.captureDialog_ = this.copyImage.bind(this);
};

BlockPyEditor.prototype.initText = function() {
    var codeMirrorDiv = this.textTag.find('.codemirror-div')[0];
    this.codeMirror = CodeMirror.fromTextArea(codeMirrorDiv, {
                                        mode: { name: "python", 
                                                version: 3, 
                                                singleLineStringErrors: false
                                        },
                                        readOnly: this.main.model.settings.read_only(),
                                        lineNumbers: true,
                                        firstLineNumber: 1,
                                        indentUnit: 4,
                                        tabSize: 4,
                                        indentWithTabs: false,
                                        matchBrackets: true,
                                        extraKeys: {"Tab": "indentMore", 
                                                    "Shift-Tab": "indentLess"},
                                      });
    // Register model changer
    var editor = this;
    this.codeMirror.on("change", function() {
        //editor.main.components.feedback.clearEditorErrors();
        editor.updateCodeFromText()
    });
    this.main.model.program.subscribe(function() {editor.updateText()});
    // Ensure that it fills the editor area
    this.codeMirror.setSize(null, "100%");
    
    this.tag.find('.blockpy-text-insert-if').click(function() {
        var line_number = blockpy.components.editor.codeMirror.getCursor().line;
        var line = blockpy.components.editor.codeMirror.getLine(line_number);
        var whitespace = line.match(/^(\s*)/)[1];
        editor.codeMirror.replaceSelection("if ___:\n    "+whitespace+"pass");
    });
    this.tag.find('.blockpy-text-insert-if-else').click(function() {
        var line_number = blockpy.components.editor.codeMirror.getCursor().line;
        var line = blockpy.components.editor.codeMirror.getLine(line_number);
        var whitespace = line.match(/^(\s*)/)[1];
        editor.codeMirror.replaceSelection("if ___:\n    "+whitespace+"pass\n"+whitespace+"else:\n    "+whitespace+"pass");
    });
};

BlockPyEditor.prototype.initInstructor = function() {
    var introductionEditor = this.instructorTag.find('.blockpy-presentation-body-editor');
    var model = this.main.model;
    introductionEditor.summernote({
        codemirror: { // codemirror options
            theme: 'monokai'
        },
        onChange: model.assignment.introduction,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['fontname', 'fontsize']],
            ['insert', ['link', 'table', 'ul', 'ol', 'image']],
            ['misc', ['codeview', 'help']]
        ]
    });
    introductionEditor.code(model.assignment.introduction());
    
    this.availableModules = this.instructorTag.find('.blockpy-available-modules');
    this.availableModules.multiSelect({ selectableOptgroup: true });
    
    
}

BlockPyEditor.prototype.addAvailableModule = function(name) {
    this.availableModules.multiSelect('addOption', { 
        'value': name, 'text': name
    });
    this.availableModules.multiSelect('select', name);
};

BlockPyEditor.prototype.hideTextMenu = function() {
    this.textTag.css('height', '0%');
    $(this.codeMirror.getWrapperElement()).hide();
    this.textSidebarTag.hide();
    this.textTag.hide();
}
BlockPyEditor.prototype.showTextMenu = function() {
    this.textTag.show();
    // Adjust height
    this.textTag.css('height', '100%');
    // Show CodeMirror
    $(this.codeMirror.getWrapperElement()).show();
    this.codeMirror.refresh();
    
    // Resize sidebar
    var codemirrorGutterWidth = $('.CodeMirror-gutters').width();
    var sideBarWidth = this.blocklyToolboxWidth-codemirrorGutterWidth-2;
    this.textSidebarTag.css('width', sideBarWidth+'px');
    this.textSidebarTag.show();
}

BlockPyEditor.prototype.hideBlockMenu = function() {
    this.blocklyToolboxWidth = this.blockly.toolbox_.width;
    this.blockTag.css('height', '0%');
    this.blockly.setVisible(false);
}

BlockPyEditor.prototype.showBlockMenu = function() {
    this.blockTag.css('height', '100%');
    this.blockly.resize();
    this.blockly.setVisible(true);
}
BlockPyEditor.prototype.showUploadMenu = function() {
    this.uploadTag.css('height', '100%');
    this.uploadTag.show();
}
BlockPyEditor.prototype.hideUploadMenu = function() {
    this.uploadTag.hide();
    this.uploadTag.css('height', '0%');
}
BlockPyEditor.prototype.showInstructorMenu = function() {
    this.instructorTag.css('height', '100%');
    this.instructorTag.show();
}
BlockPyEditor.prototype.hideInstructorMenu = function() {
    this.instructorTag.hide();
    this.instructorTag.css('height', '0%');
}

BlockPyEditor.prototype.setModeToText = function() {
    this.hideBlockMenu();
    this.hideUploadMenu();
    this.hideInstructorMenu();
    this.showTextMenu();
    // Update the text model from the blocks
    this.updateText(); //TODO: is this necessary?
}

BlockPyEditor.prototype.setModeToBlocks = function() {
    this.hideTextMenu();
    this.hideUploadMenu();
    this.hideInstructorMenu();
    this.showBlockMenu();
    // Update the blocks model from the text
    success = this.updateBlocks();
    if (!success) {
        var main = this.main;
        main.components.editor.updateText();
        main.model.settings.editor("Text");
        setTimeout(function() {
            main.components.toolbar.tags.mode_set_text.click();
        }, 0);
    }
}

BlockPyEditor.prototype.setModeToUpload = function() {
    this.hideTextMenu();
    this.hideInstructorMenu();
    this.hideBlockMenu();
    this.showUploadMenu();
    //TODO: finish upload mode
}

BlockPyEditor.prototype.setModeToInstructor = function() {
    this.hideTextMenu();
    this.hideBlockMenu();
    this.hideUploadMenu();
    this.showInstructorMenu();
    //TODO: finish upload mode
    //this.main.reportError("editor", "Instructor mode has not been implemented");
}

BlockPyEditor.prototype.changeMode = function() {
    if (main.model.settings.editor() == "Blocks") {
        main.model.settings.editor("Text");
    } else {
        main.model.settings.editor("Blocks");
    }
}

BlockPyEditor.prototype.setMode = function(mode) {
    // Either update the model, or go with the model's
    if (mode === undefined) {
        mode = this.main.model.settings.editor();
    } else {
        this.main.model.settings.editor(mode);
    }
    // Dispatch according to new mode
    if (mode == 'Blocks') {
        //this.updateCodeFromText()
        this.setModeToBlocks();
    } else if (mode == 'Text') {
        //this.updateCodeFromBlocks();
        this.setModeToText();
    } else if (mode == 'Upload') {
        this.setModeToUpload();
    } else if (mode == 'Instructor') {
        this.setModeToInstructor();
    } else {
        this.main.reportError("editor", "Invalid Mode: "+mode);
    }
}

BlockPyEditor.prototype.updateCodeFromBlocks = function() {
    if (this.updateStack.slice(-1).pop() !== undefined) {
        return;
    }
    var newCode = Blockly.Python.workspaceToCode(this.blockly);
    this.updateStack.push('blocks');
    this.main.setCode(newCode);
    this.updateStack.pop();
}
BlockPyEditor.prototype.updateCodeFromText = function() {
    if (this.updateStack.slice(-1).pop() !== undefined) {
        return;
    }
    var newCode = this.codeMirror.getValue();
    this.updateStack.push('text');
    // TODO: Check to see if an actual change or not
    this.main.setCode(newCode);
    this.unhighlightLines();
    this.updateStack.pop();
    // Ensure that we maintain proper highlighting
}

BlockPyEditor.prototype.updateText = function() {
    if (this.updateStack.slice(-1).pop() == 'text') {
        return;
    }
    var code = this.main.model.program();
    this.updateStack.push('text');
    if (code == undefined || code.trim() == "") {
        this.codeMirror.setValue("\n");
    } else {
        this.codeMirror.setValue(code);
    }
    this.refreshHighlight();
    this.updateStack.pop();
}

BlockPyEditor.prototype.updateBlocks = function() {
    if (this.updateStack.slice(-1).pop() == 'blocks') {
        return;
    }
    var python_code = this.main.model.program().trim(), xml_code = "";
    if (python_code !== '' && python_code !== undefined && python_code.trim().charAt(0) !== '<') {
        var result = this.converter.convertSource(python_code);
        xml_code = result.xml;
        if (result.error !== null) {
            this.blocksFailed = true;
            this.main.reportError('editor', result.error, "While attempting to convert the Python code into blocks, I found a syntax error. In other words, your Python code has a spelling or grammatical mistake. You should check to make sure that you have written all of your code correctly. To me, it looks like the problem is on line "+ result.error.args.v[2]+', where it says:<br><code>'+result.error.args.v[3][2]+'</code>', result.error.args.v[2]);
            return false;
        }
    }
    if (xml_code !== '' && xml_code !== undefined) {
        var blocklyXml = Blockly.Xml.textToDom(xml_code);
        this.updateStack.push('blocks');
        try {
            this.setBlocksFromXml(blocklyXml);
        } catch (e) {
            console.error(e);
            var error_code = this.converter.convertSourceToCodeBlock(python_code);
            var blocklyXml = Blockly.Xml.textToDom(error_code);
            this.setBlocksFromXml(blocklyXml);
        }
    } else {
        this.updateStack.push('blocks');
        this.blockly.clear();
    }
    // Parsons shuffling
    if (this.main.model.assignment.parsons()) {
        this.blockly.shuffle();
    } else {
        this.blockly.align();
    }
    if (this.previousLine !== null) {
        this.refreshBlockHighlight(this.previousLine);
    }
    this.updateStack.pop();
    return true;
}

BlockPyEditor.prototype.getBlocksFromXml = function() {
    return Blockly.Xml.workspaceToDom(this.blockly);
}
          
BlockPyEditor.prototype.setBlocksFromXml = function(xml) {
    this.blockly.clear();
    Blockly.Xml.domToWorkspace(xml, this.blockly);
    //console.log(this.blockly.getAllBlocks());
}

BlockPyEditor.prototype.previousLine = null;
BlockPyEditor.prototype.refreshHighlight = function() {
    if (this.previousLine !== null) {
        this.codeMirror.addLineClass(this.previousLine, 'text', 'editor-error-line');
    }
}
BlockPyEditor.prototype.highlightLine = function(line) {
    if (this.previousLine !== null) {
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    this.codeMirror.addLineClass(line, 'text', 'editor-active-line');
    this.previousLine = line;
}
BlockPyEditor.prototype.highlightError = function(line) {
    if (this.previousLine !== null) {
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    this.codeMirror.addLineClass(line, 'text', 'editor-error-line');
    this.refreshBlockHighlight(line);
    this.previousLine = line;
}
BlockPyEditor.prototype.highlightBlock = function(block) {
    this.blockly.highlightBlock(block);
}

BlockPyEditor.prototype.refreshBlockHighlight = function(line) {
    if (this.blocksFailed) {
        this.blocksFailed = false;
        return;
    }
    if (this.main.model.settings.editor() != "Blocks") {
        return;
    }
    var all_blocks = this.blockly.getAllBlocks();
    //console.log(all_blocks.map(function(e) { return e.lineNumber }));
    var blockMap = {};
    all_blocks.forEach(function(elem) {
        var lineNumber = parseInt(elem.lineNumber, 10);
        if (lineNumber in blockMap) {
            blockMap[lineNumber].push(elem);
        } else {
            blockMap[lineNumber] = [elem];
        }
    });
    if (1+line in blockMap) {
        var hblocks = blockMap[1+line];
        /*hblocks.forEach(function(elem) {
            elem.addSelect();
        });*/
        if (hblocks.length > 0) {
            this.blockly.highlightBlock(hblocks[0].id);
        }
    }
}
BlockPyEditor.prototype.unhighlightBlock = function() {
    // TODO:
}
BlockPyEditor.prototype.unhighlightLines = function() {
    if (this.previousLine !== null) {
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    this.previousLine = null;
}

/*
 * DEPRECATED, thankfully
 * Builds up an array indicating the relevant block ID for a given step.
 * Operates on the current this.blockly instance
 * It works by injecting __HIGHLIGHT__(id); at the start of every line of code
 *  and then extracting that with regular expressions. This makes it vulnerable
 *  if someone decides to use __HIGHLIGHT__ in their code. I'm betting on that
 *  never being a problem, though.
 */
BlockPyEditor.prototype.getHighlightMap = function() {
    // Protect the current STATEMENT_PREFIX
    var backup = Blockly.Python.STATEMENT_PREFIX;
    Blockly.Python.STATEMENT_PREFIX = '__HIGHLIGHT__(%1);';
    Blockly.Python.addReservedWords('__HIGHLIGHT__');
    // Get the source code, injected with __HIGHLIGHT__(id)
    var highlightedCode = Blockly.Python.workspaceToCode(this.blockly);
    Blockly.Python.STATEMENT_PREFIX = backup;
    // Build up the array by processing the highlighted code line-by-line
    var highlightMap = [];
    var lines = highlightedCode.split("\n");
    for (var i = 0; i < lines.length; i++) {
        // Get the block ID from the line
        var id = lines[i].match(/\W*__HIGHLIGHT__\(\'(.+?)\'\)/);
        if (id !== null) {
            // Convert it into a base-10 number, because JavaScript.
            highlightMap[i] = parseInt(id[1], 10);
        }
    }
    return highlightMap;
}


BlockPyEditor.prototype.changeProgram = function(name) {
    this.silentChange_ = true;
    this.model.settings.filename = name;
    this.editor.setPython(this.model.programs[name]);
    this.toolbar.elements.programs.find("[data-name="+name+"]").click();
}

BlockPyEditor.prototype.setLevel = function() {
    var level = this.main.model.settings.level();
}

BlockPyEditor.CATEGORY_MAP = {
    'Properties': '<category name="Properties" custom="VARIABLE" colour="240">'+
                  '</category>',
    'Decisions': '<category name="Decisions" colour="330">'+
                    '<block type="controls_if"></block>'+
                    '<block type="controls_if"><mutation else="1"></mutation></block>'+
                    '<block type="logic_compare"></block>'+
                    '<block type="logic_operation"></block>'+
                    '<block type="logic_negate"></block>'+
                  '</category>',
    'Iteration': '<category name="Iteration" colour="300">'+
                    '<block type="controls_forEach"></block>'+
                '</category>',
    'Functions': '<category name="Functions" custom="PROCEDURE" colour="210">'+
                '</category>',
    'Calculation': '<category name="Calculation" colour="270">'+
                    //'<block type="raw_table"></block>'+
                    '<block type="math_arithmetic"></block>'+
                    //'<block type="type_check"></block>'+
                    //'<block type="raw_empty"></block>'+
                    //'<block type="math_single"></block>'+
                    //'<block type="math_number_property"></block>'+
                    '<block type="math_round"></block>'+
                    //'<block type="text_join"></block>'+
                '</category>',
    'Python':   '<category name="Python" colour="180">'+
                    '<block type="raw_block"></block>'+
                    '<block type="raw_expression"></block>'+
                    //'<block type="function_call"></block>'+
                '</category>',
    'Output':   '<category name="Output" colour="160">'+
                    '<block type="text_print"></block>'+
                    //'<block type="text_print_multiple"></block>'+
                    '<block type="plot_line"></block>'+
                    '<block type="plot_scatter"></block>'+
                    '<block type="plot_show"></block>'+
                    '<block type="plot_title"></block>'+
                    '<block type="plot_xlabel"></block>'+
                    '<block type="plot_ylabel"></block>'+
                '</category>',
    'Values':   '<category name="Values" colour="100">'+
                    '<block type="text"></block>'+
                    '<block type="math_number"></block>'+
                    '<block type="logic_boolean"></block>'+
                '</category>',
    'Lists':    '<category name="Lists" colour="30">'+
                    '<block type="lists_create_with">'+
                        '<value name="ADD0">'+
                          '<shadow type="math_number"><field name="NUM">0</field></shadow>'+
                        '</value>'+
                        '<value name="ADD1">'+
                          '<shadow type="math_number"><field name="NUM">0</field></shadow>'+
                        '</value>'+
                        '<value name="ADD2">'+
                          '<shadow type="math_number"><field name="NUM">0</field></shadow>'+
                        '</value>'+
                    '</block>'+
                    '<block type="lists_create_with"></block>'+
                    '<block type="lists_create_empty"></block>'+
                    '<block type="lists_append"></block>'+
                    /*'<block type="lists_length"></block>'+*/
                    /*'<block type="lists_index">'+
                        '<value name="ITEM">'+
                          '<shadow type="math_number">'+
                            '<field name="NUM">0</field>'+
                          '</shadow>'+
                        '</value>'+
                    '</block>'+*/
                '</category>',
    'Dictionaries': '<category name="Dictionaries" colour="0">'+
                    '<block type="dicts_create_with"></block>'+
                    '<block type="dict_get_literal"></block>'+
                    //'<block type="dict_keys"></block>'+
                '</category>',
    /*
    'Data - Weather': '<category name="Data - Weather" colour="70">'+
                    '<block type="weather_temperature"></block>'+
                    '<block type="weather_report"></block>'+
                    '<block type="weather_forecasts"></block>'+
                    '<block type="weather_report_forecasts"></block>'+
                    '<block type="weather_all_forecasts"></block>'+
                    '<block type="weather_highs_lows"></block>'+
                '</category>',
    'Data - Stocks': '<category name="Data - Stock" colour="65">'+
                    '<block type="stocks_current"></block>'+
                    '<block type="stocks_past"></block>'+
                '</category>',
    'Data - Earthquakes': '<category name="Data - Earthquakes" colour="60">'+
                    '<block type="earthquake_get"></block>'+
                    '<block type="earthquake_both"></block>'+
                    '<block type="earthquake_all"></block>'+
                '</category>',
    'Data - Crime': '<category name="Data - Crime" colour="55">'+
                    '<block type="crime_state"></block>'+
                    '<block type="crime_year"></block>'+
                    '<block type="crime_all"></block>'+
                '</category>',
    'Data - Books': '<category name="Data - Books" colour="50">'+
                    '<block type="books_get"></block>'+
                '</category>',*/
    'Data - Parking': '<category name="Data - Parking" colour="45">'+
                    '<block type="datetime_day"></block>'+
                    '<block type="datetime_time"></block>'+
                    '<block type="datetime_check_day"></block>'+
                    '<block type="datetime_check_time"></block>'+
                '</category>',
    'Separator': '<sep></sep>'
};

BlockPyEditor.prototype.updateToolbox = function(only_set) {
    var xml = '<xml id="toolbox" style="display: none">';
    var modules = this.main.model.assignment.modules();
    var started_misc = false,
        started_values = false,
        started_data = false;
    for (var i = 0, length = modules.length; i < length; i = i+1) {
        var module = modules[i];
        if (!started_misc && ['Calculation', 'Output', 'Python'].indexOf(module) != -1) {
            started_misc = true;
            xml += BlockPyEditor.CATEGORY_MAP['Separator'];
        }
        if (!started_values && ['Values', 'Lists', 'Dictionaries'].indexOf(module) != -1) {
            started_values = true;
            xml += BlockPyEditor.CATEGORY_MAP['Separator'];
        }
        if (!started_data && module.slice(0, 6) == 'Data -') {
            started_data = true;
            xml += BlockPyEditor.CATEGORY_MAP['Separator'];
        }
        if (typeof module == 'string') {
            xml += BlockPyEditor.CATEGORY_MAP[module];
        } else {
            var category = '<category name="'+module.name+'" colour="'+module.color+'">';
            for (var j= 0; category_length = module.blocks.length; j = j+1) {
                var block = module.blocks[j];
                category += '<block type="'+block+'"></block>';
            }
            category += '</category>';
        }
        //'<sep></sep>'+
    }
    xml += '</xml>';
    if (only_set) {
        this.blockly.updateToolbox(xml);
    } else {
        return xml;
    }
};

BlockPyEditor.prototype.getPngFromBlocks = function(callback) {
    var blocks = this.blockly.svgBlockCanvas_.cloneNode(true);
    blocks.removeAttribute("width");
    blocks.removeAttribute("height");
    if (blocks.children[0] !== undefined) {
        blocks.removeAttribute("transform");
        blocks.children[0].removeAttribute("transform");
        blocks.children[0].children[0].removeAttribute("transform");
        var linkElm = document.createElementNS("http://www.w3.org/1999/xhtml", "style");
        linkElm.textContent = Blockly.Css.CONTENT.join('') + '\n\n';
        blocks.insertBefore(linkElm, blocks.firstChild);
        var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
        var xml = new XMLSerializer().serializeToString(blocks);
        xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="0 0 '+bbox.width+' '+bbox.height+'"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
        var data = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(xml)));
        var img  = document.createElement("img");
        img.setAttribute('src', data);
        img.style.display = 'block';
        img.onload = function() {
            //TODO: Make this capture a class descendant. Cross the D3/Jquery barrier!
            var canvas = d3.select('#capture-canvas').node();//d3.select('body').append('canvas').node();
            canvas.width = bbox.width;
            canvas.height = bbox.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            var canvasUrl = canvas.toDataURL("image/png");
            callback(canvasUrl, img);
        }
        img.onerror = function() {
            callback("", img);
        }
    } else {
        callback("", document.createElement("img"))
    }
}


BlockPyEditor.prototype.copyImage = function() {
    var dialog = this.main.components.dialog;
    this.getPngFromBlocks(function(canvasUrl, img) {
        img.onload = function() {
            var span = document.createElement('span');
            span.textContent = "Right-click and copy the image below."
            var div = document.createElement('div');
            div.appendChild(span);
            div.appendChild(img);
            dialog.show("Blocks as Image", div);
        };
        img.src = canvasUrl;
    });
}
_IMPORTED_DATASETS = {};

function BlockPyCorgis(main) {
    this.main = main;
    
    this.loadedDatasets = [];
    
    var corgis = this;
    var imports = [];
    this.main.model.assignment.modules().forEach(function(name) {
        var post_prefix = name.substring(7).replace(/\s/g, '_').toLowerCase();
        if (!(name in BlockPyEditor.CATEGORY_MAP)) {
            imports.push.apply(imports, corgis.importDataset(post_prefix, name));
        }
    });
    $.when.apply($, imports).done(function() {
        if (main.model.settings.editor() == "Blocks") {
            main.components.editor.updateBlocks();
        }
        main.components.editor.updateToolbox(true);
    }).fail(function(e) {
        console.error(e);
    });
}

BlockPyCorgis.prototype.importDataset = function(slug, name) {
    var url_retrievals = [];
    if (this.main.model.server_is_connected('import_datasets')) {
        var root = this.main.model.constants.urls.import_datasets+'blockpy/'+slug+'/'+slug;
        var get_dataset = $.getScript(root+'_dataset.js');
        var get_skulpt = $.get(root+'_skulpt.js', function(data) {
            Sk.builtinFiles['files']['src/lib/'+slug+'/__init__.js'] = data;
        });
        var get_blockly = $.getScript(root+'_blockly.js');
        var corgis = this;
        $.when(get_dataset, get_skulpt, get_blockly).done(function() {
            corgis.loadedDatasets.push(slug);
            corgis.main.model.assignment.modules.push(name);
            corgis.main.components.editor.addAvailableModule(name);
        });
        url_retrievals.push(get_dataset, get_skulpt, get_blockly);
    }
    return url_retrievals;
}

BlockPyCorgis.prototype.openDialog = function(name) {
    var corgis = this;
    if (this.main.model.server_is_connected('import_datasets')) {
        var root = this.main.model.constants.urls.import_datasets;
        $.getJSON(root+'index.json', function(data) {
            var datasets = data.blockpy.datasets;
            var body = $('<table></table>', {'class': 'table-bordered table-condensed table-striped'});
            Object.keys(datasets).map(function(name) {
                var title_name = name;
                name = name.replace(/\s/g, '_').toLowerCase();
                var btn = $('<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Load</button>');
                if (corgis.loadedDatasets.indexOf(name) > -1) {
                    set_button_loaded(btn);
                } else {
                    btn.click(function() {
                        corgis.importDataset(name.toLowerCase(), 'Data - '+title_name);
                        set_button_loaded(btn);
                    });
                }
                $("<tr></tr>")
                    .append($("<td>"+title_name+"</td>"))
                    .append($("<td></td>").append(btn))
                    .appendTo(body);
            });
            var editor = corgis.main.components.editor;
            corgis.main.components.dialog.show("Import Datasets", body, function() {
                if (editor.main.model.settings.editor() == "Blocks") {
                    editor.updateBlocks();
                }
            });
        });
    } else {
        var datasets = {"Classics": "", "Weather": "", "Global Development": "", "Tate": ""};
        var body = $('<table></table>', {'class': 'table-bordered table-condensed table-striped'});
        var loadedDatasets = this.loadedDatasets;
        Object.keys(datasets).map(function(name) {
            var title_name = name;
            name = name.replace(/\s/g, '_').toLowerCase();
            var btn = $('<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Load</button>');
            if (loadedDatasets.indexOf(name) > -1) {
                set_button_loaded(btn);
            } else {
                btn.click(function() {
                    corgis.importDataset(name.toLowerCase(), title_name);
                    set_button_loaded(btn);
                });
            }
            $("<tr></tr>")
                .append($("<td>"+title_name+"</td>"))
                .append($("<td></td>").append(btn))
                .appendTo(body);
        });
        var editor = this.main.components.editor;
        this.main.components.dialog.show("Import Datasets", body, function() {
            if (editor.main.model.settings.editor() == "Blocks") {
                editor.updateBlocks();
            }
        });
    }
};

var set_button_loaded = function(btn) {
    btn.addClass("active")
       .addClass('btn-success')
       .removeClass('btn-primary')
       .prop("disabled", true)
       .text("Loaded")
       .attr("aria-pressed", "true");
}
function BlockPyEnglish(main) {
    this.main = main;
    
    
}

BlockPyEnglish.prototype.openDialog = function() {
    try {
        body = Blockly.Pseudo.workspaceToCode();
    } catch (e) {
        console.error(e);
        body = "I couldn't understand the code. Sorry!"
    }
    this.main.components.dialog.show("English", body, function() {});
}
function BlockPyFeedback(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.body = this.tag.find('.blockpy-feedback-body');
    this.title = this.tag.find('.blockpy-feedback-title');
    this.original = this.tag.find('.blockpy-feedback-original');
    this.status = this.tag.find('.blockpy-feedback-status');
    this.trace = this.tag.find('.blockpy-feedback-trace');
    
    this.trace.click(this.buildTraceTable.bind(this));
    
    this.original.hide();
};

BlockPyFeedback.prototype.buildTraceTable = function() {
    var execution = this.main.model.execution;
    execution.show_trace(true);
    execution.trace_step(execution.last_step());
}

BlockPyFeedback.prototype.error = function(html) {
    this.tag.html(html);
    this.tag.removeClass("alert-success");
    this.tag.addClass("alert-warning");
    this.main.components.printer.print("Execution stopped - there was an error!");
}

BlockPyFeedback.prototype.clear = function() {
    this.title.html("Ready");
    this.original.hide();
    this.body.html("Run your program to get feedback.");
    this.main.model.status.error("none");
    this.main.components.editor.unhighlightLines();
    this.main.components.printer.resetPrinter()
};

BlockPyFeedback.prototype.clearEditorErrors = function() {
    if (this.main.model.status.error() == "editor") {
        this.clear();
    }
}

BlockPyFeedback.prototype.success = function() {
    this.tag.html("<span class='label label-success'><span class='glyphicon glyphicon-ok'></span> Success!</span>");
    this.tag.removeClass("alert-warning");
}

BlockPyFeedback.prototype.editorError = function(original, message, line) {
    original = this.prettyPrintError(original);
    this.title.html("Editor Error");
    this.original.show().html(original);
    this.body.html(message);
    this.main.model.status.error("editor");
    this.main.components.editor.highlightError(line-1);
    this.main.components.printer.print("Editor error - could not make blocks!");
}

BlockPyFeedback.prototype.complete = function() {
    this.title.html("Complete!");
    this.original.hide();
    this.body.html("Great work!");
    this.main.model.status.error("complete");
    this.main.components.editor.unhighlightLines();
}

BlockPyFeedback.prototype.noErrors = function() {
    this.title.html("Ran");
    this.original.hide();
    this.body.html("No errors reported. View your output on the left.");
    this.main.model.status.error("no errors");
    this.main.components.editor.unhighlightLines();
}

BlockPyFeedback.prototype.syntaxError = function(original, message, line) {
    original = this.prettyPrintError(original);
    this.title.html("Syntax Error");
    this.original.show().html(original);
    this.body.html(message);
    this.main.model.status.error("syntax");
    this.main.components.editor.highlightError(line-1);
    this.main.components.printer.print("Execution stopped - there was an error!");
}

BlockPyFeedback.prototype.semanticError = function(name, message, line) {
    this.title.html(name);
    this.original.hide();
    this.body.html(message);
    this.main.model.status.error("semantic");
    this.main.components.editor.highlightError(line-1);
    this.main.components.printer.print("Execution stopped - there was an error!");
}

BlockPyFeedback.prototype.internalError = function(original, name, message) {
    original = this.prettyPrintError(original);
    this.title.html(name);
    this.original.show().html(original);
    this.body.html(message);
    this.main.model.status.error("internal");
    this.main.components.printer.print("Internal error! Please show this to an instructor!");
}

BlockPyFeedback.prototype.instructorFeedback = function(name, message, line) {
    this.title.html(name);
    this.original.hide();
    this.body.html(message);
    this.main.model.status.error("feedback");
    if (line !== undefined) {
        this.main.components.editor.highlightError(line-1);
    }
}

BlockPyFeedback.prototype.emptyProgram = function() {
    this.title.html("Blank Program");
    this.original.hide().html("");
    this.body.html("You have not written any code yet.");
    this.main.model.status.error("runtime");
}

BlockPyFeedback.prototype.prettyPrintError = function(error) {
    if (typeof error === "string") {
        return error;
    } else {
        // A weird skulpt thing?
        if (error.tp$str !== undefined) {
            return error.tp$str().v;
        } else {
            return ""+error.name + ": " + error.message;
        }
    }
}

/*
 * Print an error to the printers -- the on screen one and the browser one
 */
BlockPyFeedback.prototype.printError = function(error) {
    //console.log(error);
    original = this.prettyPrintError(error);
    this.title.html(error.tp$name);
    this.original.show().html(original);
    if (error.tp$name == "ParseError") {
        this.body.html("While attempting to convert the Python code into blocks, I found a syntax error. In other words, your Python code has a spelling or grammatical mistake. You should check to make sure that you have written all of your code correctly. To me, it looks like the problem is on line "+ error.args.v[2]+', where it says:<br><code>'+error.args.v[3][2]+'</code>', error.args.v[2]);
    } else if (error.constructor == Sk.builtin.NameError
                && error.args.v.length > 0
                && error.args.v[0].v == "name '___' is not defined") {
        this.body.html("You have incomplete blocks. Make sure that you do not have any dangling blocks or blocks that are connected incorrectly.<br><br>If you look at the text view of your Python code, you'll see <code>___</code> in the code. The converter will create these <code>___</code> to show that you have a block that's missing a piece.");
    } else if (error.tp$name in EXTENDED_ERROR_EXPLANATION) {
        this.body.html(EXTENDED_ERROR_EXPLANATION[error.tp$name]);
    } else {
        this.body.html(error.enhanced);
    }
    console.error(error);
    if (error.stack) {
        console.error(error.stack);
    }
    this.main.model.status.error("runtime");
    this.main.components.editor.highlightError(error.traceback[0].lineno-1);
    return;
    // Is it a string?
    if (typeof error !== "string") {
        // A weird skulpt thing?
        if (error.tp$str !== undefined) {
            try {
                this.editor.highlightError(error.traceback[0].lineno-1);
            } catch (e) {
            }
            
            var all_blocks = Blockly.mainWorkspace.getAllBlocks();
            blockMap = {};
            all_blocks.forEach(function(elem) {
                if (elem.lineNumber in blockMap) {
                    blockMap[elem.lineNumber].push(elem);
                } else {
                    blockMap[elem.lineNumber] = [elem];
                }
            });
            var hblocks = blockMap[""+error.traceback[0].lineno];
            Blockly.mainWorkspace.highlightBlock(hblocks[0].id);
            //hblocks[0].addSelect();
            
            if (error.constructor == Sk.builtin.NameError
                && error.args.v.length > 0
                && error.args.v[0].v == "name '___' is not defined") {
                error = "<b>Error: </b> You have incomplete blocks. Make sure that you do not have any dangling blocks.<br><br><b>Extended Error Explanation:</b> If you look at the text view of your Python code, you'll see <code>___</code> in the code. The converter will create these <code>___</code> to show that you have a block that's missing a piece.";
            }  else if (error.tp$name == "ParseError") {
                
            } else if (error.tp$name in EXTENDED_ERROR_EXPLANATION) {
                error = "<b>Error: </b>"+error.tp$str().v + "<br><br>"+EXTENDED_ERROR_EXPLANATION[error.tp$name];
            } else {
                error = error.tp$str().v;
            }
        } else {
            // An error?
            error = ""+error.name + ": " + error.message;
            printer.log("Unknown Error"+error.stack);
        }
    }
    // Perform any necessary cleaning
    this.explorer.tags.errors_body.html(error);
}


BlockPyFeedback.prototype.printSemantic = function(result) {
    //this.explorer.tags.message.show();
    //this.explorer.tags.message.html(JSON.stringify(result.identifiers));
    var out = $("<div></div>");
    for (var title in result) {
        if (result[title].length >0) {
            out.append("<b>"+title+"</b>: "+result[title].join()+"<br>");
        }
    }
    this.body.html(out);
}
function BlockPyToolbar(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.tags = {};
    this.tags.mode_set_text = this.tag.find('.blockpy-mode-set-text');
    this.tags.filename_picker = this.tag.find('.blockpy-toolbar-filename-picker');
    
    var groupHtml = '<div class="btn-group" role="group"></div>';
    var runGroup =      $(groupHtml).appendTo(tag);
    var modeGroup =     $(groupHtml).appendTo(tag);
    var doGroup =       $(groupHtml).appendTo(tag);
    var blocksGroup =   $(groupHtml).appendTo(tag);
    var codeGroup =     $(groupHtml).appendTo(tag);
    var programsGroup = $(groupHtml).appendTo(tag);
    this.elements = {
        /*'undo': $("<button></button>")
                            .addClass('btn btn-default blockpy-toolbar-undo')
                            .attr("role", "group")
                            .html('<i class="fa fa-undo"></i>')
                            .appendTo(doGroup),
        'redo': $("<button></button>")
                            .addClass('btn btn-default blockpy-toolbar-redo')
                            .attr("role", "group")
                            .html('<i class="fa fa-repeat"></i>')
                            .appendTo(doGroup),*/
        /*'align': $("<button></button>")
                            .addClass('btn btn-default blockpy-toolbar-align')
                            .attr("role", "group")
                            .html('<i class="fa fa-align-left"></i> Align')
                            .appendTo(doGroup),
        'reset': $("<button></button>")
                            .addClass('btn btn-default blockpy-toolbar-reset')
                            .attr("role", "group")
                            .html('<i class="fa fa-refresh"></i> Reset')
                            .appendTo(doGroup),
        'clear': $("<button></button>")
                            .addClass('btn btn-default blockpy-toolbar-clear')
                            .attr("role", "group")
                            .html('<i class="fa fa-trash-o"></i> Clear')
                            .appendTo(doGroup),*/
        'programs': $("<div></div>")
                            .addClass('btn-group blockpy-programs')
                            .attr("data-toggle", "buttons")
                            .appendTo(programsGroup)
    };    
    this.elements.programs.hide();
    this.elements.editor_mode = this.tag.find('.blockpy-change-mode');
    this.activateToolbar();
}

BlockPyToolbar.prototype.addProgram = function(name) {
    this.elements.programs.append("<label class='btn btn-default'>"+
                                    "<input type='radio' id='"+name+"' "+
                                      "data-name='"+name+"' autocomplete='off'>"+
                                        name+
                                   "</label>");
}

BlockPyToolbar.prototype.showPrograms = function() {
    this.elements.programs.show();
}

BlockPyToolbar.prototype.hidePrograms = function() {
    this.elements.programs.hide();
}
    
    
BlockPyToolbar.prototype.activateToolbar = function() {
    var main = this.main;
    var elements = this.elements;
    this.tag.find('.blockpy-run').click(function() {
        main.components.engine.run();
    });
    this.tags.mode_set_text.click(function() {
        main.model.settings.editor("Text");
    });
    this.tag.find('.blockpy-toolbar-reset').click(function() {
        main.model.programs['__main__'](main.model.programs['starting_code']());
        main.components.editor.updateBlocks();
    });
    this.tag.find('.blockpy-mode-set-blocks').click(function() {
        main.model.settings.editor("Blocks");
    });
    this.tag.find('.blockpy-mode-set-instructor').click(function() {
        main.model.settings.editor("Instructor");
    });
    this.tag.find('.blockpy-toolbar-import').click(function() {
        main.components.corgis.openDialog();
    });
    this.tag.find('.blockpy-toolbar-english').click(function() {
        main.components.english.openDialog();
    });
}
/**
 * Printer
 * Responsible for executing code and cleaning the results
 */

function BlockPyEngine(main) {
    this.main = main;
    
    this.loadEngine();
    
    this.instructor_module = instructor_module('instructor')
    
    //this.main.model.program.subscribe(this.analyze.bind(this))
}

BlockPyEngine.prototype.loadEngine = function() {
    var engine = this;
    var printer = this.main.components.printer;
    // Skulpt settings
    // No connected services
    Sk.connectedServices = {}
    // Limit execution to 5 seconds
    Sk.execLimit = 5000;
    // Ensure version 3, so we get proper print handling
    Sk.python3 = true;
    // Major Skulpt configurations
    Sk.configure({
        // Function to handle the text outputted by Skulpt
        output: printer.print.bind(printer),
        // Function to handle loading in new files
        read: this.readFile.bind(this)
    });
    // Identify the location to put new charts
    Sk.console = printer.getConfiguration();
    // Stepper!
    Sk.afterSingleExecution = this.step.bind(this);
}

BlockPyEngine.prototype.loadCode = function(code) {
    // Create parse
}

BlockPyEngine.prototype.readFile = function(filename) {
    if (Sk.builtinFiles === undefined ||
        Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
    }
    return Sk.builtinFiles["files"][filename];
}

BlockPyEngine.prototype.reset = function() {
    this.main.model.execution.trace.removeAll();
    this.main.model.execution.step(0);
    this.main.model.execution.last_step(0);
    this.main.model.execution.line_number(0)
    this.main.components.printer.resetPrinter();
    this.main.model.execution.show_trace(false);
}

BlockPyEngine.prototype.step = function(variables, lineNumber, 
                                       columnNumber, filename, astType, ast) {
    if (filename == '<stdin>.py') {
        var currentStep = this.main.model.execution.step();
        var globals = this.parseGlobals(variables);
        this.main.model.execution.trace.push(
            {'step': currentStep,
             'filename': filename,
             //'block': highlightMap[lineNumber-1],
             'line': lineNumber,
             'column': columnNumber,
             'properties': globals.properties,
             'modules': globals.modules});
        this.main.model.execution.step(currentStep+1)
        this.main.model.execution.last_step(currentStep+1);
        this.main.model.execution.line_number(lineNumber)
    }
}

/*
Syntax Error
Runtime Error
Semantic Error
Question Error
*/

/*
 * Gives suggestions on the given code
 */
BlockPyEngine.prototype.analyze = function() {
    this.main.model.execution.status("analyzing");
    
    var feedback = this.main.components.feedback;
    
    // Get the code
    var code = this.main.model.programs['__main__']();
    if (code.trim() == "") {
        this.main.components.feedback.emptyProgram("You haven't written any code yet!");
        //this.main.model.feedback.status("semantic");
        return false;
    }
    
    var analyzer = new AbstractInterpreter(code);
    this.main.model.execution.ast = analyzer.ast;
    
    result = analyzer.analyze();
    // Syntax error
    if (result !== true) {
        this.main.reportError('editor', result.error, "While attempting to convert the Python code into blocks, I found a syntax error. In other words, your Python code has a spelling or grammatical mistake. You should check to make sure that you have written all of your code correctly. To me, it looks like the problem is on line "+ result.error.args.v[2]+', where it says:<br><code>'+result.error.args.v[3][2]+'</code>', result.error.args.v[2]);
        return false;
    }
    
    var report = analyzer.report;
    // Semantic error
    //console.log(report);
    
    // TODO: variables defined AFTER their use
    if (report["Undefined variables"].length >= 1) {
        var variable = report["Undefined variables"][0];
        feedback.semanticError("Initialization Problem", "The property <code>"+variable.name+"</code> was read on line "+variable.line.split("|")[0]+", but it was not given a value on a previous line. You cannot use a property until it has been initialized.", variable.line.split("|")[0])
        return false;
    } else if (report["Unread variables"].length >= 1) {
        var variable = report["Unread variables"][0];
        feedback.semanticError("Unused Property", "The property <code>"+variable.name+"</code> was created on line "+variable.line.split("|")[0]+", but was never used.", variable.line.split("|")[0])
        return false;
    } else if (report["Overwritten variables"].length >= 1) {
        var variable = report["Overwritten variables"][0];
        feedback.semanticError("Overwritten Property", "The property <code>"+variable.name+"</code> was set on line "+variable.first_location.split("|")[0]+", but before it could be read it was changed on line "+variable.last_location.split("|")[0]+". It is unnecessary to change an existing variable's value without reading it first.", variable.last_location.split("|")[0])
        return false;
    }
    
    return true;
}

var GLOBAL_VALUE;

/*
 * Runs the given python code, resetting the console and Trace Table.
 */
BlockPyEngine.prototype.run = function() {
    // Reset everything
    this.reset();
    
    if (!this.main.model.settings.disable_semantic_errors()) {
        var success = this.analyze();
        if (success === false) {
            return;
        }
    }
    
    Sk.builtins.value = new Sk.builtin.func(function() {
        return Sk.ffi.remapToPy(GLOBAL_VALUE === undefined ? 5 : GLOBAL_VALUE);
    });
    Sk.builtins.set_value = new Sk.builtin.func(function(v) {
        GLOBAL_VALUE = v.v;
    });
    
    this.main.model.execution.status("running");
    
    var feedback = this.main.components.feedback;
    
    // Get the code
    var code = this.main.model.programs['__main__']();
    if (code.trim() == "") {
        feedback.emptyProgram();
        this.main.model.execution.status("error");
        return;
    }
    // Actually run the python code
    var executionPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    });
    
    var engine = this;
    var server = this.server;
    var execution = this.main.model.execution;
    executionPromise.then(
        function (module) {
            // Run the afterSingleExecution one extra time for final state
            Sk.afterSingleExecution(module.$d, -1, 0, "<stdin>.py");
            //blockpy.explorer.reload(blockpy.traceTable, -1);
            // Handle checks
            feedback.noErrors()
            engine.check(code, execution.trace(), execution.output(), execution.ast);
            // Reenable "Run"
            engine.main.model.execution.status("waiting");
        },
        function(error) {
            feedback.printError(error);
            engine.main.model.execution.status("error");
            //server.logEvent('blockly_error', error);
        }
    );
}

function indent(str) {
  return str.replace(/^(?=.)/gm, '    ');
}

var instructor_module = function(name) {
    var mod = {};
    Sk.builtin.Feedback = function (args) {
        var o;
        if (!(this instanceof Sk.builtin.Feedback)) {
            o = Object.create(Sk.builtin.Feedback.prototype);
            o.constructor.apply(o, arguments);
            return o;
        }
        Sk.builtin.Exception.apply(this, arguments);
    };
    Sk.abstr.setUpInheritance("Feedback", Sk.builtin.Feedback, Sk.builtin.Exception);
    Sk.builtin.Success = function (args) {
        var o;
        if (!(this instanceof Sk.builtin.Success)) {
            o = Object.create(Sk.builtin.Success.prototype);
            o.constructor.apply(o, arguments);
            return o;
        }
        Sk.builtin.Exception.apply(this, arguments);
    };
    Sk.abstr.setUpInheritance("Success", Sk.builtin.Success, Sk.builtin.Exception);
    mod.set_feedback = new Sk.builtin.func(function(message) {
        Sk.builtin.pyCheckArgs("set_feedback", arguments, 1, 1);
        Sk.builtin.pyCheckType("message", "string", Sk.builtin.checkString(message));
        throw new Sk.builtin.Feedback(message.v);
    });
    mod.set_success = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("set_success", arguments, 0, 0);
        throw new Sk.builtin.Success();
    });
    
    var parses = {};
    function getParseList(source) {
        if (!(source in parses)) {
            var parse = Sk.parse("__main__", source);
            parses[source] = Sk.astFromParse(parse.cst, "__main__", parse.flags);
        }
        var ast = parses[source];
        return (new NodeVisitor()).recursive_walk(ast);
    }
    
    mod.get_property = new Sk.builtin.func(function(name) {
        Sk.builtin.pyCheckArgs("calls_function", arguments, 1, 1);
        Sk.builtin.pyCheckType("name", "string", Sk.builtin.checkString(name));
        name = name.v;
        var trace = Sk.builtins._trace;
        if (trace.length <= 0) {
            return Sk.builtin.none.none$;
        }
        var properties = trace[trace.length-1]["properties"];
        for (var i = 0, len = properties.length; i < len; i += 1) {
            if (properties[i]['name'] == name) {
                return Sk.ffi.remapToPy(properties[i])
            }
        }
        return Sk.builtin.none.none$;
    });
    
    mod.calls_function = new Sk.builtin.func(function(source, name) {
        Sk.builtin.pyCheckArgs("calls_function", arguments, 2, 2);
        Sk.builtin.pyCheckType("source", "string", Sk.builtin.checkString(source));
        Sk.builtin.pyCheckType("name", "string", Sk.builtin.checkString(name));
        
        source = source.v;
        name = name.v;
        
        var ast_list = getParseList(source);
        
        var count = 0;
        for (var i = 0, len = ast_list.length; i < len; i = i+1) {
            if (ast_list[i]._astname == 'Call') {
                if (ast_list[i].func._astname == 'Attribute') {
                    count += Sk.ffi.remapToJs(ast_list[i].func.attr) == name | 0;
                } else if (ast_list[i].func._astname == 'Name') {
                    count += Sk.ffi.remapToJs(ast_list[i].func.id) == name | 0;
                }   
            }
        }
        
        return Sk.ffi.remapToPy(count > 0);
    });
    
    mod.count_components = new Sk.builtin.func(function(source, component) {
        Sk.builtin.pyCheckArgs("count_components", arguments, 2, 2);
        Sk.builtin.pyCheckType("source", "string", Sk.builtin.checkString(source));
        Sk.builtin.pyCheckType("component", "string", Sk.builtin.checkString(component));
        
        source = source.v;
        component = component.v;
        
        var ast_list = getParseList(source);
        
        var count = 0;
        for (var i = 0, len = ast_list.length; i < len; i = i+1) {
            if (ast_list[i]._astname == component) {
                count = count+1;
            }
        }
        
        return Sk.ffi.remapToPy(count);
    });
    return mod;
}

BlockPyEngine.prototype.setupEnvironment = function(student_code, traceTable, output, ast) {
    var model = this.main.model;
    this._backup_execution = Sk.afterSingleExecution;
    Sk.afterSingleExecution = undefined;
    Sk.builtins.get_output = new Sk.builtin.func(function() { 
        Sk.builtin.pyCheckArgs("get_output", arguments, 0, 0);
        return Sk.ffi.remapToPy(model.execution.output());
    });
    Sk.builtins.reset_output = new Sk.builtin.func(function() { 
        Sk.builtin.pyCheckArgs("reset_output", arguments, 0, 0);
        model.execution.output.removeAll();
    });
    Sk.builtins.log = new Sk.builtin.func(function(data) { 
        Sk.builtin.pyCheckArgs("output", arguments, 1, 1);
        console.log(data)
    });
    Sk.builtins.trace = Sk.ffi.remapToPy(traceTable);
    Sk.builtins._trace = traceTable;
    Sk.builtins.code = Sk.ffi.remapToPy(student_code);
    Sk.builtins.set_success = this.instructor_module.set_success;
    Sk.builtins.set_feedback = this.instructor_module.set_feedback;
    Sk.builtins.count_components = this.instructor_module.count_components;
    Sk.builtins.calls_function = this.instructor_module.calls_function;
    Sk.builtins.get_property = this.instructor_module.get_property;
    Sk.skip_drawing = true;
    model.settings.mute_printer(true);
}

BlockPyEngine.prototype.disposeEnvironment = function() {
    Sk.afterSingleExecution = this._backup_execution;
    Sk.builtins.get_output = undefined;
    Sk.builtins.reset_output = undefined;
    Sk.builtins.log = undefined;
    Sk.builtins._trace = undefined;
    Sk.builtins.trace = undefined;
    Sk.builtins.trace = undefined;
    Sk.builtins.code = undefined;
    Sk.builtins.set_success = undefined;
    Sk.builtins.set_feedback = undefined;
    Sk.builtins.count_components = undefined;
    Sk.builtins.calls_function = undefined;
    Sk.builtins.get_property = undefined;
    Sk.skip_drawing = false;
    GLOBAL_VALUE = undefined;
    this.main.model.settings.mute_printer(false);
}

BlockPyEngine.prototype.check = function(student_code, traceTable, output, ast) {
    var engine = this;
    var server = this.main.components.server;
    var model = this.main.model;
    var on_run = model.programs['give_feedback']();
    if (on_run !== undefined && on_run.trim() !== "") {
        
        
        on_run = 'def run_code():\n'+indent(student_code)+'\n'+on_run;
        this.setupEnvironment(student_code, traceTable, output, ast);
        
        var executionPromise = Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>", false, on_run, true);
        });
        executionPromise.then(
            function (module) {
                engine.main.components.feedback.noErrors();
                engine.disposeEnvironment();
            }, function (error) {
                engine.disposeEnvironment();
                console.log(error.tp$name, error.tp$name == "Success");
                if (error.tp$name == "Success") {
                    server.markSuccess(1.0);
                    engine.main.components.feedback.complete();
                } else if (error.tp$name == "Feedback") {
                    server.markSuccess(0.0);
                    engine.main.components.feedback.instructorFeedback("Incorrect Answer", error.args.v[0].v);
                } else {
                    console.error(error);
                    engine.main.components.feedback.internalError(error, "Feedback Error", "Error in instructor's feedback. Please show the above message to an instructor!");
                    server.logEvent('blockly_instructor_error', ''+error);
                }
            });
    }
}

BlockPyEngine.prototype.parseGlobals = function(variables) {
    var result = Array();
    var modules = Array();
    for (var property in variables) {
        var value = variables[property];
        if (property !== "__name__" && property !== "__doc__") {
            property = property.replace('_$rw$', '')
                               .replace('_$rn$', '');
            var parsed = this.parseValue(property, value);
            if (parsed !== null) {
                result.push(parsed);
            } else if (value.constructor == Sk.builtin.module) {
                modules.push(value.$d.__name__.v);
            }
        }
    }
    return {"properties": result, "modules": modules};
}

BlockPyEngine.prototype.parseValue = function(property, value) {
    if (value == undefined) {
        return {'name': property,
                'type': 'Unknown',
                "value": 'Undefined'
                };
    }
    switch (value.constructor) {
        case Sk.builtin.func:
            return {'name': property,
                    'type': "Function",
                    "value":  
                        (value.func_code.co_varnames !== undefined ?
                         " Arguments: "+value.func_code.co_varnames.join(", ") :
                         ' No arguments')
                    };
        case Sk.builtin.module: return null;
        case Sk.builtin.str:
            return {'name': property,
                'type': "String",
                "value": value.$r().v
            };
        case Sk.builtin.none:
            return {'name': property,
                'type': "None",
                "value": "None"
            };
        case Sk.builtin.bool:
            return {'name': property,
                'type': "Boolean",
                "value": value.$r().v
            };
        case Sk.builtin.nmber:
            return {'name': property,
                'type': "int" == value.skType ? "Integer": "Float",
                "value": value.$r().v
            };
        case Sk.builtin.int_:
            return {'name': property,
                'type': "Integer",
                "value": value.$r().v
            };
        case Sk.builtin.float_:
            return {'name': property,
                'type': "Float",
                "value": value.$r().v
            };
        case Sk.builtin.tuple:
            return {'name': property,
                'type': "Tuple",
                "value": value.$r().v
            };
        case Sk.builtin.list:
            if (value.v.length <= 10) {
                return {'name': property,
                    'type': "List",
                    "value": value.$r().v
                };
            } else {
                return {'name': property,
                    'type': "List",
                    "value": "[... "+value.v.length+" elements ...]<code>"
                };
            }
        case Sk.builtin.dict:
            return {'name': property,
                'type': "Dictionary",
                "value": value.$r().v
            };
        case Number:
            return {'name': property,
                'type': value % 1 === 0 ? "Integer" : "Float",
                "value": value
            };
        case String:
            return {'name': property,
                'type': "String",
                "value": value
            };
        case Boolean:
                return {'name': property,
                    'type': "Boolean",
                    "value": (value ? "True": "False")
                };
        default:
            return {'name': property,
                    'type': value.tp$name == undefined ? value : value.tp$name,
                    "value": value.$r == undefined ? value : value.$r().v
                    };
    }
}
function expandArray(array, addArray, removeArray) {
    var copyArray = array.filter(function(item) {
        return removeArray.indexOf(item) === -1;
    });
    return copyArray.concat(addArray);
}

function BlockPy(settings, assignment, submission, programs) {
    this.model = {
        // User level settings
        "settings": {
            // Default mode when you open the screen is text
            // 'text', 'blocks'
            'editor': ko.observable(assignment.initial_view),
            // Default mode when you open the screen is instructor
            // boolean
            'instructor': ko.observable(settings.instructor),
            'instructor_initial': ko.observable(settings.instructor),
            // boolean
            'enable_blocks': ko.observable(settings.blocks_enabled),
            // boolean
            'read_only': ko.observable(settings.read_only),
            // string
            'filename': ko.observable("__main__"),
            // string
            'level': ko.observable("level"),
            // boolean
            'disable_semantic_errors': ko.observable(settings.disable_semantic_errors),
            // boolean
            'auto_upload': ko.observable(true),
            // boolean
            'developer': ko.observable(settings.developer || false),
            // boolean
            'mute_printer': ko.observable(false)
        },
        'execution': {
            // 'waiting', 'running'
            'status': ko.observable('waiting'),
            // integer
            'step': ko.observable(0),
            // integer
            'last_step': ko.observable(0),
            // list of string/list of int
            'output': ko.observableArray([]),
            // integer
            'line_number': ko.observable(0),            
            // array of simple objects
            'trace': ko.observableArray([]),
            // integer
            'trace_step': ko.observable(0),
            // object
            'ast': {},
            // boolean
            'show_trace': ko.observable(false),
        },
        'status': {
            // boolean
            'loaded': ko.observable(false),
            'text': ko.observable("Loading"),
            // 'none', 'runtime', 'syntax', 'semantic', 'feedback', 'complete', 'editor'
            'error': ko.observable('none'),
            // "Loading", "Saving", "Ready", "Disconnected", "Error"
            'server': ko.observable("Loading")
        },
        'constants': {
            // string
            'blocklyPath': settings.blocklyPath,
            // boolean
            'blocklyScrollbars': true,
            // string
            'attachmentPoint': settings.attachmentPoint,
            // JQuery object
            'container': null,
            // Maps codes ('log_event', 'save_code') to URLs
            'urls': settings.urls
        },
        // Assignment level settings
        "assignment": {
            'modules': ko.observableArray(expandArray(BlockPy.DEFAULT_MODULES, assignment.modules.added || [], assignment.modules.removed || [])),
            'assignment_id': assignment.assignment_id,
            'student_id': assignment.student_id,
            'course_id': assignment.course_id,
            'version': ko.observable(assignment.version),
            //'lis_result_sourcedid': assignment.lis_result_sourcedid,
            'name': ko.observable(assignment.name),
            'introduction': ko.observable(assignment.introduction),
            "initial_view": ko.observable(assignment.initial_view || 'Blocks'),
            'parsons': ko.observable(assignment.parsons),
            'upload': ko.observable(assignment.initial_view == 'Upload'),
        },
        "programs": {
            "__main__": ko.observable(programs.__main__),
            "starting_code": ko.observable(assignment.starting_code),
            "give_feedback": ko.observable(assignment.give_feedback),
        }
    };
    this.model.program = ko.computed(function() {
        return this.programs[this.settings.filename()]();
    }, this.model) //.extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 400 } });
    
    this.model.server_is_connected = function(url) {
        return this.constants.urls !== undefined && this.constants.urls[url] !== undefined;
    };
    
    this.model.status_feedback_class = ko.computed(function() {
        switch (this.status.error()) {
            default: case 'none': return ['label-none', ''];
            case 'runtime': return ['label-runtime-error', 'Runtime Error'];
            case 'syntax': return ['label-syntax-error', 'Syntax Error'];
            case 'editor': return ['label-syntax-error', 'Editor Error'];
            case 'internal': return ['label-internal-error', 'Internal Error'];
            case 'semantic': return ['label-semantic-error', 'Semantic Error'];
            case 'feedback': return ['label-feedback-error', 'Incorrect Answer'];
            case 'complete': return ['label-problem-complete', 'Complete'];
            case 'no errors': return ['label-no-errors', 'No errors'];
        }
    }, this.model);
    
    this.model.status_server_class = ko.computed(function() {
        switch (this.status.server()) {
            default: case 'Loading': return ['label-default', 'Loading'];
            case 'Offline': return ['label-default', 'Offline'];
            case 'Loaded': return ['label-success', 'Loaded'];
            case 'Logging': return ['label-primary', 'Logging'];
            case 'Saving': return ['label-primary', 'Saving'];
            case 'Saved': return ['label-success', 'Saved'];
            case 'Disconnected': return ['label-danger', 'Disconnected'];
            case 'Error': return ['label-danger', 'Error'];
        }
    }, this.model);
    
    var execution = this.model.execution;
    this.model.moveTraceFirst = function(index) { 
        execution.trace_step(1); };
    this.model.moveTraceBackward = function(index) { 
        var previous = Math.max(execution.trace_step()-1, 1);
        execution.trace_step(previous); };
    this.model.moveTraceForward = function(index) { 
        var next = Math.min(execution.trace_step()+1, execution.last_step());
        execution.trace_step(next); };
    this.model.moveTraceLast = function(index) { 
        execution.trace_step(execution.last_step()); };
    
    this.initMain();
}

BlockPy.DEFAULT_MODULES = ['Properties', 'Decisions', 
                           'Iteration',
                           'Calculation', 'Output', 
                           'Values', 
                           'Lists', 'Dictionaries']

BlockPy.prototype.initMain = function() {
    this.initInterface();
    this.initModel();
    this.initComponents();
    if (this.model.settings.developer()) {
        this.initDevelopment();
    }
}

BlockPy.prototype.initInterface = function(postCompletion) {
    var constants = this.model.constants;
    constants.container = $(constants.attachmentPoint).html($(BlockPyInterface))
}

BlockPy.prototype.initModel = function() {
    ko.applyBindings(this.model);
}

BlockPy.prototype.initComponents = function() {
    var container = this.model.constants.container;
    this.components = {};
    var main = this,
        components = this.components;
    components.dialog = new BlockPyDialog(main, container.find('.blockpy-popup'));
    components.toolbar  = new BlockPyToolbar(main,  container.find('.blockpy-toolbar'));
    components.feedback = new BlockPyFeedback(main, container.find('.blockpy-feedback'));
    components.editor   = new BlockPyEditor(main,   container.find('.blockpy-editor'));
    components.presentation = new BlockPyPresentation(main, container.find('.blockpy-presentation'));
    components.printer = new BlockPyPrinter(main, container.find('.blockpy-printer'));
    components.engine = new BlockPyEngine(main);
    components.server = new BlockPyServer(main);
    components.corgis = new BlockPyCorgis(main);
    components.english = new BlockPyEnglish(main);
    components.editor.setMode();
    main.model.status.server('Loaded')
}

BlockPy.prototype.initDevelopment = function () {
    /*$.get('src/skulpt_ast.js', function(data) {
        Sk.builtinFiles['files']['src/lib/ast/__init__.js'] = data;
    });*/
}

BlockPy.prototype.reportError = function(component, original, message, line) {
    if (component == 'editor') {
        this.components.feedback.editorError(original, message, line);
    } else if (component == 'syntax') {
        this.components.feedback.syntaxError(original, message, line);
    }
    console.error(component, message)
}

/*
function BlockPy(attachmentPoint, mode, presentation, current_code,
                on_run, on_change, starting_code, instructor, view, blocklyPath,
                settings,
                urls, questionProperties) {
    // User programs
}
*/

BlockPy.prototype.activateToolbar = function() {
    var elements = this.toolbar.elements;
    var blockpy = this, server = this.server;
    // Editor mode
    
    elements.to_pseudo.click(function(ev) {
        ev.preventDefault();
        blockpy.editor.updateBlocks();
        server.logEvent('editor', 'pseudo');
        var popup = blockpy.mainDiv.find('.blockpy-popup');
        popup.find('.modal-title').html("Pseudo-code Explanation");
        popup.find('.modal-body').html(Blockly.Pseudo.workspaceToCode(blockpy.editor.blockly));
        popup.modal('show');
    });
    blockpy.mainDiv.find('.blockpy-popup').on('hidden.bs.modal', function () {
        server.logEvent('editor', 'close_pseudo');
    });
    if (!this.model.settings.instructor) {
        elements.blockpy_mode.hide();
        //elements.to_rst.hide();
    }
    // Run
    elements.run.click(function() {
        server.logEvent('editor', 'run');
        blockpy.run();
    });
    // Undo
    elements.undo.click(function() {
        server.logEvent('editor', 'undo');
        if (blockpy.model.settings.editor() == 'blocks') {
            blockpy.editor.blockly.undo();
        } else {
            blockpy.editor.text.undo();
        }
    });
    // Redo
    elements.redo.click(function() {
        server.logEvent('editor', 'redo');
        if (blockpy.model.settings.editor() == 'blocks') {
            blockpy.editor.blockly.redo();
        } else {
            blockpy.editor.text.redo();
        }
    });
    // Wide
    var left = blockpy.mainDiv.find('.blockpy-content-left'),
        right = blockpy.mainDiv.find('.blockpy-content-right');
    elements.wide.click(function() {
        if (elements.wide.attr("data-side") == "skinny") {
            server.logEvent('editor', 'wide');
            // Make it skinny
            elements.wide.attr("data-side", "wide")
                         .html('<i class="fa fa-ellipsis-h"></i> Wide');
            // Left side
            left.removeClass('col-md-10 col-sm-12 col-xs-12 col-md-offset-1');
            left.addClass('col-md-7 col-sm-7 col-xs-7');
            // Right side
            right.removeClass('col-md-10 col-sm-12 col-xs-12 col-md-offset-1');
            right.addClass('col-md-5 col-xs-5 col-sm-5');
        } else {
            server.logEvent('editor', 'skinny');
            // Make it wide
            elements.wide.attr("data-side", "skinny")
                         .html('<i class="fa fa-ellipsis-v"></i> Skinny');
            // Left side
            left.removeClass('col-md-7 col-xs-7 col-sm-7');
            left.addClass('col-md-10 col-sm-12 col-xs-12 col-md-offset-1');
            // Right side
            right.removeClass('col-md-5 col-xs-5 col-sm-7');
            right.addClass('col-md-10 col-sm-12 col-xs-12 col-md-offset-1');
        }
        // Hack: Force the blockly window to fit the width
        if (blockpy.model.settings.editor == 'blocks') {
            blockpy.editor.blockly.render();
        }
    });
    // Reset code
    elements.reset.click(function() {
        server.logEvent('editor', 'reset');
        blockpy.setCode(blockpy.model.programs.starting_code);
    });
    // Clear code
    elements.clear.click(function() {
        server.logEvent('editor', 'clear');
        blockpy.setCode("");
    });
    // Align blocks
    elements.align.click(function() {
        server.logEvent('editor', 'align');
        blockpy.editor.blockly.align();
    });
    // Change programs
    for (var name in this.model.programs) {
        this.toolbar.addProgram(name);
    }
    this.toolbar.elements.programs.button('toggle').change(function(event) {
        if (blockpy.silentChange_) {
            blockpy.silentChange_ = false;
        } else {
            var name = $(event.target).attr("data-name");
            blockpy.changeProgram(name);
        }
    });
    
    var parsonBox = blockpy.mainDiv.find('.blockpy-presentation-parsons-check input');
    var textFirstBox = blockpy.mainDiv.find('.blockpy-presentation-text-first input');
    var nameEditor = blockpy.mainDiv.find('.blockpy-presentation-name-editor');
    var updatePresentation = function() {
        blockpy.model.settings.parsons = parsonBox.prop('checked');
        blockpy.model.settings.text_first = textFirstBox.prop('checked');
        blockpy.server.savePresentation(blockpy.presentation.get(), 
                                       nameEditor.val(), 
                                       blockpy.model.settings.parsons,
                                       blockpy.model.settings.text_first);
    }
    // Save name editing
    nameEditor.change(updatePresentation);
    // Parsons checkbox
    parsonBox.change(updatePresentation).prop('checked', this.model.settings.parsons);
    // Text first checkbox
    textFirstBox.change(updatePresentation).prop('checked', this.model.settings.text_first);
}

BlockPy.prototype.setCode = function(code, name) {
    if (name === undefined) {
        name = this.model.settings.filename();
    }
    this.model.programs[name](code);
}

BlockPy.prototype.alert = function(message) {
    var box = this.mainDiv.find('.blockpy-alert');
    box.text(message).show();
    return box;
}

/*
 * Resets skulpt to some default values
 */
