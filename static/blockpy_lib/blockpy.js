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
	'OSError': "It's hard to say what an OSError is without deep checking. Many things can cause it.  <br><b>Suggestion: </b>Bring your code to an instructor.      ",
    'TimeLimitError': "A TimeLimit error means that BlockPy wasn't able to process your program fast enough. Typically, this means that you're iterating through too many elements."
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
                if (subvalue instanceof Object && "_astname" in subvalue) {
                    this.visit(subvalue);
                }
            }
        } else if (value instanceof Object && "_astname" in value) {
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
    
    // Code
    this.code = code;
    this.source = code !== "" ? this.code.split("\n") : [];
    this.filename = filename || '__main__';
    
    // Attempt parsing - might fail!
    try {
        var parse = Sk.parse(this.filename, this.code);
        this.ast = Sk.astFromParse(parse.cst, this.filename, parse.flags);
    } catch (error) {
        this.report = {"error": error, "message": "Parsing error"};
        return;
    }
    
    // Handle loops
    this.loopStackId = 0
    this.loopHierarchy = {};
    this.loopStack = [];
    
    // Handle decisions
    this.branchStackId = 0;
    
    this.branchTree = { null: [] };
    this.currentBranch = this.branchTree[null];
    this.currentBranchName = null;
    
    // Handle walking AST
    this.astStackDepth = 0;
    
    this.variables = {};
    this.variableTypes = {};
    for (var name in this.BUILTINS) {
        this.setVariable(name, this.BUILTINS[name]);
    }
    
    // OLD
    //this.frameIndex = 0;
    //this.rootFrame = this.newFrame(null);
    //this.currentFrame = this.rootFrame;
    this.report = this.newReport();
    
    this.visit(this.ast);
    
    //console.log(this.variables)
    this.postProcess();
}

AbstractInterpreter.prototype = new NodeVisitor();

AbstractInterpreter.prototype.BUILTINS = {'print': {"type": 'None'}, 
                                'sum': {"type": "Num"},
                                'round': {"type": "Num"},
                                'range': {"type": "List", "subtype": {"type": "Num"} },
                                'xrange': {"type": "List", "subtype": {"type": "Num"} },
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
            "error": false,
            "Unconnected blocks": [],
            "Unread variables": [],
            "Undefined variables": [],
            "Possibly undefined variables": [],
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

AbstractInterpreter.prototype._initializeVariable = function(name) {
    if (!(name in this.variables)) {
        this.variables[name] = [];
    }
}
AbstractInterpreter.prototype._newBehavior = function(method, type, position, currentType) {
    return {"method": method, 
            "type": type, 
            "loop": this.loopStackId, 
            "parentName": this.currentBranchName,
            "position": position, 
            "currentType": currentType};
}

AbstractInterpreter.prototype.setVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push(this._newBehavior("set", type, position, type));
}
AbstractInterpreter.prototype.setIterVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push(this._newBehavior("set_iterate", type, position, type));
}
AbstractInterpreter.prototype.updateVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push(this._newBehavior("update", type, position, type));
}
AbstractInterpreter.prototype.readVariable = function(name, position) {
    this._initializeVariable(name);
    var previousType = this.getType(name);
    this.variables[name].push(this._newBehavior("read", null, position, previousType));
}
AbstractInterpreter.prototype.iterateVariable = function(name, position) {
    this._initializeVariable(name);
    var previousType = this.getType(name);
    this.variables[name].push(this._newBehavior("iterate", null, position, previousType));
}
// The type here refers to the subtype of the list
AbstractInterpreter.prototype.appendVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push(this._newBehavior("append", type, position, {
        "type": "List", "subtype": type, "empty": false
    }));
}

function nameBranch(branch) {
    return (branch.id == null ? null : branch.id+branch.path[0]);
}

function otherBranch(branch) {
    return (branch.id == null ? null : branch.id+(branch.path[0] == 'i' ? 'e' : 'i'));
}

AbstractInterpreter.prototype.postProcess = function() {
    //console.log("POST PORCESS", this.source)
    for (var name in this.variables) {
        if (!(name in this.BUILTINS)) {
            //console.log("STARTING", name, this.source)
            var trace = this.variables[name];
            if (name == "___") {
                this.report["Unconnected blocks"].push({"position": trace[0].position})
            }
            /*console.log(name, trace.map(function(e, i) { 
                return e.method +(e.type == null ? "" : "["+e.type.type+"]")
                                +("_"+e.parentName);
            }));*/
            // Check for unread variables
            var previousBehavior = null;
            
            var traceTree = (function buildTraceTree(nodes, parentId) {
                var result = [];
                while (trace.length && parentId == trace[0].parentName) {
                    result.push(trace.shift())
                }
                
                for (var i = 0, len = nodes.length; i < len; i += 1) {
                    var node = nodes[i];
                    result.push({
                        "if": buildTraceTree(node["if"], node.id+"i"),
                        "else": buildTraceTree(node["else"], node.id+"e"),
                        "method": "branch"
                    })
                    while (trace.length && parentId == trace[0].parentName) {
                        result.push(trace.shift())
                    }
                    
                }
                return result;
            })(this.branchTree[null], null);
            //console.log("TT", this.source, traceTree)
            
            var SETTINGS = ["was set", "was read", "was overwritten"],
                report = this.report,
                previousType = null,
                testTypeEquality = this.testTypeEquality.bind(this),
                overwrittenLine = null,
                variableTypes = this.variableTypes;
            var finalState = (function walkState(nodes, previous) {
                var result;
                if (previous === null) {
                    result = {"was set": "no", "was read": "no", "was overwritten": "no"}
                } else {
                    result = {"was set": previous["was set"],
                              "was read": previous["was read"],
                              "was overwritten": previous["was overwritten"]};
                }
                for (var i = 0, len = nodes.length; i < len; i += 1) {
                    var node = nodes[i];
                    if (node.type !== null && node.type !== undefined && !(name in variableTypes)) {
                        variableTypes[name] = node.type;
                    }
                    if (node.method == "branch") {
                        var ifResult = walkState(node["if"], result)
                        var elseResult = walkState(node["else"], result)
                        for (var j = 0, len2 = SETTINGS.length; j < len2; j += 1) {
                            var setting = SETTINGS[j];
                            if (ifResult[setting] == "yes" && elseResult[setting] == "yes") {
                                result[setting] = "yes";
                            } else if (ifResult[setting] == "no" && elseResult[setting] == "no") {
                                result[setting] = "no";
                            } else {
                                result[setting] = "maybe";
                            }
                        }
                        //console.log(ifResult, elseResult, result)
                    } else {
                        if (node["method"] == "set" || node["method"] == "set_iterate") {
                            if (previousType == null) {
                                previousType = node.type;
                            } else {
                                if (node.type != null && testTypeEquality(previousType, node.type)) {
                                    previousType = node.type;
                                } else {
                                    report['Type changes'].push({"name": name, "position": node.position});
                                }
                            }
                            if (result["was set"] == "yes" && result["was read"] == "no") {
                                result["was overwritten"] = "yes";
                                if (overwrittenLine == null) {
                                    overwrittenLine = node.position;
                                }
                            } else {
                                result["was set"] = "yes"
                                if (node["method"] == "set") {
                                    result["was read"] = "no"
                                } else {
                                    result["was read"] = "yes"
                                }
                            }
                        } else if (node["method"] == "read" || node["method"] == "iterate") {
                            if (result["was set"] == "no") {
                                report['Undefined variables'].push({"name": name, "position": node.position});
                            } else if (result["was set"] == "maybe") {
                                report['Possibly undefined variables'].push({"name": name, "position": node.position});
                            }
                            result["was read"] = "yes"
                        } else if (node["method"] == "update" || node["method"] == "append") {
                            if (node["method"] == "append" && previousType != null && previousType.type != "List") {
                                report["Append to non-list"].push({"name": name, "position": node.position, "type": node.type})
                            }
                            if (result["was set"] == "no") {
                                report['Undefined variables'].push({"name": name, "position": node.position});
                            } else if (result["was set"] == "maybe") {
                                report['Possibly undefined variables'].push({"name": name, "position": node.position});
                            }
                            result["was set"] = "yes"
                        }
                    }
                }
                return result;
            })(traceTree, null);
            
            if (finalState["was read"] == "no") {
                this.report['Unread variables'].push({"name": name});
            }
            if (finalState["was overwritten"] == "yes") {
                report['Overwritten variables'].push({"name": name, "position": overwrittenLine});
            }
            
            //console.log("ELLIE", name, finalState);
        }
    }
    /*
    this.checkUnreadVariables(this.rootFrame)
    this.checkUnusedSingular(this.rootFrame)
    this.checkUsedPlural(this.rootFrame)
    this.checkSingularIsPlural(this.rootFrame)
    */
}


AbstractInterpreter.prototype.testTypeEquality = function(left, right) {
    if (left === null || right === null) {
        return false;
    } else if (left.type === null || right.type === null) {
        return false;
    } else if (left.type === "List" && right.type === "List") {
        if (left.empty || right.empty) {
            return true;
        } else {
            return this.testTypeEquality(left.subtype, right.subtype);
        }
    } else {
        return left.type == right.type;
    }
}

AbstractInterpreter.prototype.getType = function(name) {
    if (name in this.variables) {
        var trace = this.variables[name];
        if (trace != undefined && trace.length > 0) {
            return trace[trace.length-1].currentType;
        }
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

AbstractInterpreter.prototype.visit = function(node) {
    this.astStackDepth += 1;
    NodeVisitor.prototype.visit.call(this, node);
    this.astStackDepth -= 1;
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
            return {"type": "Tuple", "subtypes": components};
        case "Dict":
            var literals = true;
            for (var i = 0, len = value.keys.length; i < len; i++) {
                var key_type = this.typecheck(value.keys[i]);
                literals = literals && (key_type.type == "Str");
            }
            if (literals) {
                var components = {};
                for (var i = 0, len = value.keys.length; i < len; i++) {
                    var key_type = this.typecheck(value.keys[i]);
                    var value_type = this.typecheck(value.values[i]);
                    components[value.keys[i].s.v] = {"key": key_type, "value": value_type};
                }
                return {"type": "Dict", "literals": true, "subtypes": components};
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
                return {"type": "List", "empty": false, "subtype": this.typecheck(value.elts[0])};
            }
        case "Call":
            var funcType = this.walkAttributeChain(value.func);
            return funcType;
        case "BinOp":
            var left = this.typecheck(value.left),
                right = this.typecheck(value.right);
            if (left === null || right === null) {
                return null;
            } else if (left.type != right.type) {
                this.report["Incompatible types"].push({"left": left, "right": right, "operation": value.op.name, "position": this.getLocation(value)});
            } else {
                return left;
            }
        default:
            return null;
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
            this.report["Unknown functions"].push({"name": attribute.attr.v, "position": this.getLocation(attribute)});
            return null;
        }
    } else if (attribute._astname == "Name") {
        if (attribute.id.v in AbstractInterpreter.MODULES) {
            return AbstractInterpreter.MODULES[attribute.id.v];
        } else if (attribute.id.v in this.BUILTINS) {
            return this.BUILTINS[attribute.id.v];
        } else {
            this.report["Unknown functions"].push({"name": attribute.attr, "position": this.getLocation(attribute)});
            return null;
        }
    }
}

AbstractInterpreter.prototype.getLocation = function(node) {
    return {"column": node.col_offset, "line": node.lineno};
}

AbstractInterpreter.prototype.visit_AugAssign = function(node) {
    var typeValue = this.typecheck(node.value);
    this.visit(node.value);
    this.visit(node.target);
    var walked = this.walk(node.target);
    for (var i = 0, len = walked.length; i < len; i++) {
        var targetChild = walked[i];
        if (targetChild._astname == "Tuple") {
            // TODO: Check if is an iterable (list, tuple, dict, set) literal or variable
        } else if (targetChild._astname == "Name") {
            this.updateVariable(targetChild.id.v, typeValue, this.getLocation(node));
        }
    }
}

AbstractInterpreter.prototype.visit_Call = function(node) {
    if (node.func._astname == "Attribute") {
        if (node.func.attr.v == "append") {
            if (node.args.length >= 1) {
                var valueType = this.typecheck(node.args[0]);
                if (node.func.value._astname == "Name") {
                    var target = node.func.value.id.v;
                    this.appendVariable(target, valueType, this.getLocation(node));
                    this.visitList(node.keywords);
                    this.visitList(node.args);
                    if (node.kwargs != null) {
                        this.visit(node.kwargs);
                    }
                    if (node.starargs != null) {
                        this.visit(node.starargs);
                    }
                } else {
                    this.generic_visit(node);
                }
            } else {
                this.generic_visit(node);
            }
        } else {
            this.generic_visit(node);
        }
    } else {
        //console.log(node);
        this.generic_visit(node);
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
                // TODO: Check if is an iterable (list, tuple, dict, set) literal or variable
            } else if (targetChild._astname == "Name") {
                this.setVariable(targetChild.id.v, typeValue, this.getLocation(node));
            }
        }
    }
}
AbstractInterpreter.prototype.visit_Import = function(node) {
    for (var i = 0, len = node.names.length; i < len; i++) {
        var module = node.names[i];
        var asname = module.asname === null ? module.name : module.asname;
        this.setVariable(asname.v, {"type": "Module"}, this.getLocation(node))
    }
}
AbstractInterpreter.prototype.visit_ImportFrom = function(node) {
    for (var i = 0, len = node.names.length; i < len; i++) {
        var module = node.module === null ? node.names[i] : node.module + node.names[i];
        var asname = module.asname === null ? module.name : module.asname;
        this.setVariable(asname.v, {"type": "Module"}, this.getLocation(node));
    }
}

AbstractInterpreter.prototype.visit_Name = function(node) {
    //console.log(node);
    //TODO:
    if (node.ctx.prototype._astname === "Load") {
        this.readVariable(node.id.v, this.getLocation(node));
    }
    this.generic_visit(node);
}

AbstractInterpreter.prototype.visit_If = function(node) {
    // Visit the conditional
    this.visit(node.test);
    
    // Update branch management
    this.branchStackId += 1;
    var branchId = this.branchStackId;
    
    var cb = this.currentBranch,
        cbName = this.currentBranchName,
        branches = {"if": [], 
                    "else": [], 
                    "id": branchId, 
                    "method": "branch",
                    "parentName": this.currentBranchName};
    cb.push(branches)
    
    // Visit the bodies
    this.currentBranch = branches["if"];
    this.currentBranchName = branchId + 'i';
    for (var i = 0, len = node.body.length; i < len; i++) {
        this.visit(node.body[i]);
    }
    this.currentBranch = branches["else"];
    this.currentBranchName = branchId + 'e';
    for (var i = 0, len = node.orelse.length; i < len; i++) {
        this.visit(node.orelse[i]);
    }
    this.currentBranch = cb;
    this.currentBranchName = cbName;
}

AbstractInterpreter.prototype.visit_For = function(node) {
    this.loopStackId += 1;
    // Handle the iteration list
    var walked = this.walk(node.iter),
        iterationList = null;
    for (var i = 0, len = walked.length; i < len; i++) {
        var child = walked[i];
        if (child._astname === "Name" && child.ctx.prototype._astname === "Load") {
            iterationList = child.id.v;
            if (this.isTypeEmptyList(child.id.v)) {
                this.report["Empty iterations"].push({"name": child.id.v, "position": this.getLocation(node)});
            }
            if (!(this.isTypeList(child.id.v))) {
                this.report["Non-list iterations"].push({"name": child.id.v, "position": this.getLocation(node)});
            }
            this.iterateVariable(child.id.v, this.getLocation(node));
        } else if (child._astname === "List" && child.elts.length === 0) {
            this.report["Empty iterations"].push({"name": child.id.v, "position": this.getLocation(node)});
        } else {
            this.visit(child);
        }
    }
    var iterType = this.typecheck(node.iter),
        iterSubtype = null;
    if (iterType !== null && iterType.type == "List" && !iterType.empty) {
        iterSubtype = iterType.subtype;
    }
    
    // Handle the iteration variable
    walked = this.walk(node.target);
    var iterationVariable = null;
    for (var i = 0, len = walked.length; i < len; i++) {
        var child = walked[i];
        if (child._astname === "Name" && child.ctx.prototype._astname === "Store") {
            iterationVariable = node.target.id.v;
            this.setIterVariable(node.target.id.v, iterSubtype, this.getLocation(node));
        } else {
            this.visit(child);
        }
    }
    
    if (iterationVariable && iterationList && iterationList == iterationVariable) {
        this.report["Iteration variable is iteration list"].push({"name": iterationList, "position": this.getLocation(node)});
    }

    // Handle the bodies
    for (var i = 0, len = node.body.length; i < len; i++) {
        this.visit(node.body[i]);
    }
    for (var i = 0, len = node.orelse.length; i < len; i++) {
        this.visit(node.orelse[i]);
    }
}




var filename = '__main__.py';
//var python_source = 'sum([1,2])/len([4,5,])\ntotal=0\ntotal=total+1\nimport weather\nimport matplotlib.pyplot as plt\ncelsius_temperatures = []\nexisting=weather.get_forecasts("Miami, FL")\nfor t in existing:\n    celsius = (t - 32) / 2\n    celsius_temperatures.append(celsius)\nplt.plot(celsius_temperatures)\nplt.title("Temperatures in Miami")\nplt.show()';
var python_source = ''+
    'b=0\n'+
    'if X:\n'+
        '\ta=0\n'+
        '\tc=0\n'+
    'else:\n'+
        '\tif Y:\n'+
            '\t\ta=0\n'+
            '\t\ta=0\n'+
            '\t\tb = 0\n'+
        '\telif Z:\n'+
            '\t\ta=0\n'+
        '\telse:\n'+
            '\t\ta=0\n'+
        '\tif A:\n'+
            '\t\tb=0\n'+
        '\telse:\n'+
            '\t\ta=0\n'+
    'print(c)';
var analyzer = new AbstractInterpreter(python_source);
//console.log(python_source);
/*
console.log(python_source);
console.log("AST:", analyzer.ast);
console.log("Report:",analyzer.report);
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
    this.comments = {};
    for (var commentLocation in parse.comments) {
        var lineColumn = commentLocation.split(",");
        var yLocation = parseInt(lineColumn[0], 10);
        this.comments[yLocation] = parse.comments[commentLocation];
    }
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
    
    // Build the actual blocks
    var lineFrom = node[0].lineno;
    var to = this.heights.shift();
    var currentLine = 0;
    
    // Walk through and convert the blocks to statements
    var children = [];
    var currentChild = null,
        firstChild = null,
        commentChildren = [],
        actualLine = 0,
        previousLine = 0;
    for (var i = 0; i < node.length; i++) {
        actualLine += 1;
        // Handle actual line
        lineFrom = node[i].lineno;
        currentLine = lineFrom;
        to = this.heights.shift();
        var newChild = this.convertStatement(node[i], this.getSourceCode(lineFrom, to), is_top_level);
        var distance = lineFrom - previousLine;
        actualLine += distance-1;
        
        // Handle earlier comments
        if (is_top_level) {
            for (var yLocation in this.comments) {
                if (yLocation < actualLine && actualLine-distance+1 <= yLocation) {
                    commentChild = this.Comment(this.comments[yLocation], yLocation);
                    children.push(commentChild);
                }
            }
        }
        previousLine = lineFrom;
        
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
    
    // Handle trailing comments
    if (lineFrom+1 in this.comments) {
        children.push(this.Comment(this.comments[lineFrom+1], lineFrom));
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

raw_block = function(txt) {
    // TODO: lineno as second parameter!
    return block("raw_block", 0, { "TEXT": txt });
}

raw_expression = function(txt, lineno) {
    return block("raw_expression", lineno, {"TEXT": txt});
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

PythonToBlocks.prototype.Comment = function(txt, lineno) {
    return block("comment_single", lineno, {
        "BODY": txt.slice(1)
    }, {}, {}, {}, {})
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
    var name = node.name;
    var bases = node.bases;
    var body = node.body;
    var decorator_list = node.decorator_list;
    if (decorator_list.length > 0) {
        throw new Error("Decorators are not implemented.");
    }
    return block("class_creation", node.lineno, {
        "CLASS": this.identifier(name)
    }, {
    }, {
        "inline": "false"
    }, {
        //"arg": this.arguments_(args)
    }, {
        "BODY": this.convertBody(body)
    });
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
    }, {
        "LIST": this.convert(iter),
        "VAR": this.convert(target)
    }, {
        "inline": "true"
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
    // TODO: is there ever a case where it's < 1 values?
    var result_block = this.convert(values[0]);
    for (var i = 1; i < values.length; i+= 1) {
        result_block = block("logic_operation", node.lineno, {
            "OP": this.booleanOperator(op)
        }, {
            "A": result_block,
            "B": this.convert(values[i])
        }, {
            "inline": "true"
        });
    }
    return result_block;
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
    
    // TODO
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
PythonToBlocks.prototype.CallAttribute = function(func, args, keywords, starargs, kwargs, node) {
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
        //console.log(func, args, keywords, starargs, kwargs);
        heights = this.getChunkHeights(node);
        extractedSource = this.getSourceCode(arrayMin(heights), arrayMax(heights));
        var col_endoffset = node.col_endoffset;
        if (args.length > 0) {
            for (var i = 0; i < args.length; i+= 1) {
                col_endoffset = args[i].col_endoffset;
            }
        } else {
            col_endoffset += 2;
            expressionCall += "()";
        }
        var expressionCall = extractedSource.slice(node.col_offset, 1+col_endoffset);
        //console.log(node, extractedSource, node.col_offset, node.col_endoffset);
        var lineno = node.lineno;
        //console.error(e);
        return raw_expression(expressionCall, lineno);
        /*
        var arguments = {};
        var argumentsMutation = {"@name": name};
        for (var i = 0; i < args.length; i+= 1) {
            arguments["ARG"+i] = this.convert(args[i]);
            argumentsMutation[i] = this.convert(args[i]);
        }
        var methodCall = block("procedures_callreturn", node.lineno, {
        }, arguments, {
            "inline": "false"
        }, argumentsMutation);
        
        return block("attribute_access", node.lineno, {}, {
            "MODULE": this.convert(func.value),
            "NAME": methodCall
        }, { "inline": "false"}, {});*/
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
                case "xrange":
                    return block("procedures_callreturn", node.lineno, {}, 
                        {"ARG0": this.convert(args[0])},
                        {"inline": "true"}, 
                        {"@name": "xrange",
                         "": this.convert(args[0])})
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
            return this.CallAttribute(func, args, keywords, starargs, kwargs, node);
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
    var strValue = Sk.ffi.remapToJs(s);
    if (strValue.split("\n").length > 1) {
        return block("string_multiline", node.lineno, {"TEXT": strValue});
    } else {
        return block("text", node.lineno, {"TEXT": strValue});
    }
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
        case "None":
            return block("logic_null", node.lineno);
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
        "inline": elts.length > 3 ? "false" : "true", 
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
        var dropdown = new Blockly.FieldDropdown([["Now", "NOW"]].concat(HOURS), function(opt) {
            var isNow = (opt == 'NOW');
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
        container.setAttribute('isnow', isNow);
        return container;
    },
    domToMutation: function(xmlElement) {
        var isNow = (xmlElement.getAttribute('isnow') == 'true');
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

Blockly.Blocks['controls_forEach'] = {
  /**
   * Block for 'for each' loop.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "for each item %1 in list %2 : ", //Blockly.Msg.CONTROLS_FOREACH_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VAR",
          "check": "Tuple"
        },
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "helpUrl": Blockly.Msg.CONTROLS_FOREACH_HELPURL
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace('%1',
          Blockly.Python.valueToCode(thisBlock, 'VAR', Blockly.Python.ORDER_RELATIONAL) || '___');
    });
  },
  customContextMenu: Blockly.Blocks['controls_for'].customContextMenu
};

Blockly.Python['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.Python.valueToCode(block, 'VAR',
      Blockly.Python.ORDER_RELATIONAL) || '___';
  var argument0 = Blockly.Python.valueToCode(block, 'LIST',
      Blockly.Python.ORDER_RELATIONAL) || '___';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var code = 'for ' + variable0 + ' in ' + argument0 + ':\n' + branch;
  return code;
};

Blockly.Blocks['class_creation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create class")
        .appendField(new Blockly.FieldVariable("new class"), "CLASS");
    /*
    this.appendDummyInput()
        .appendField("Inherits from")
        .appendField(new Blockly.FieldVariable("j"), "NAME")
        .appendField(",")
        .appendField(new Blockly.FieldVariable("k"), "NAME");
    */
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['class_creation'] = function(block) {
  var class_name = Blockly.Python.variableDB_.getName(block.getFieldValue('CLASS'), Blockly.Variables.NAME_TYPE) || '___';
  var body = Blockly.Python.statementToCode(block, 'BODY') ||
      Blockly.Python.PASS;
  // TODO: Assemble Python into code variable.
  var code = 'class ' + class_name + ':\n' + body;
  return code;
};

Blockly.Blocks['list_comprehension'] = {
  init: function() {
    this.appendValueInput("body")
        .setCheck(null)
        .appendField("[");
    this.appendValueInput("var")
        .setCheck(null)
        .appendField("for");
    this.appendValueInput("list")
        .setCheck(null)
        .appendField("in");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['list_comprehension'] = function(block) {
  var value_body = Blockly.Python.valueToCode(block, 'body', Blockly.Python.ORDER_ATOMIC) || '___';
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC) || '___';
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC) || '___';
  // TODO: Assemble Python into code variable.
  var code = '['+value_body+' for '+value_var+' in '+value_list+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

/**
 * Decode an XML DOM and create blocks on the workspace, clearing out old blocks.
 * @param {!Element} xml XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace.
 */
Blockly.Xml.domToWorkspaceDestructive = function(xml, workspace, errorXml) {
  if (xml instanceof Blockly.Workspace) {
    var swap = xml;
    xml = workspace;
    workspace = swap;
    console.warn('Deprecated call to Blockly.Xml.domToWorkspace, ' +
                 'swap the arguments.');
  }
  var width;  // Not used in LTR.
  if (workspace.RTL) {
    width = workspace.getWidth();
  }
  Blockly.Field.startCache();
  // Safari 7.1.3 is known to provide node lists with extra references to
  // children beyond the lists' length.  Trust the length, do not use the
  // looping pattern of checking the index for an object.
  var childCount = xml.childNodes.length;
  var existingGroup = Blockly.Events.getGroup();
  if (!existingGroup) {
    Blockly.Events.setGroup(true);
  }
  Blockly.Events.disable();
  while (workspace.topBlocks_.length) {
    workspace.topBlocks_[0].dispose();
  }
  workspace.variableList.length = 0;
  Blockly.Events.enable();

  // Disable workspace resizes as an optimization.
  if (workspace.setResizesEnabled) {
    workspace.setResizesEnabled(false);
  }
  for (var i = 0; i < childCount; i++) {
    var xmlChild = xml.childNodes[i];
    var name = xmlChild.nodeName.toLowerCase();
    if (name == 'block' ||
        (name == 'shadow' && !Blockly.Events.recordUndo)) {
      // Allow top-level shadow blocks if recordUndo is disabled since
      // that means an undo is in progress.  Such a block is expected
      // to be moved to a nested destination in the next operation.
      var block = Blockly.Xml.domToBlock(xmlChild, workspace);
      var blockX = parseInt(xmlChild.getAttribute('x'), 10);
      var blockY = parseInt(xmlChild.getAttribute('y'), 10);
      if (!isNaN(blockX) && !isNaN(blockY)) {
        block.moveBy(workspace.RTL ? width - blockX : blockX, blockY);
      }
    } else if (name == 'shadow') {
      goog.asserts.fail('Shadow block cannot be a top-level block.');
    }
  }
  if (!existingGroup) {
    Blockly.Events.setGroup(false);
  }
  Blockly.Field.stopCache();

  workspace.updateVariableList(false);
  // Re-enable workspace resizing.
  if (workspace.setResizesEnabled) {
    workspace.setResizesEnabled(true);
  }      
}

Blockly.Blocks['comment_single'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Comment:")
        .appendField(new Blockly.FieldTextInput("will be ignored"), "BODY");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('This is a comment, which will be ignored when you execute your code.');
    this.setHelpUrl('');
  }
};

Blockly.Python['comment_single'] = function(block) {
  var text_body = block.getFieldValue('BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = '# '+text_body+'\n';
  return code;
};

Blockly.Blocks['string_multiline'] = {
  // Container.
  init: function() {
    this.appendDummyInput()
        .appendField('Multiline String:');
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextArea(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(true, 'String');
  },
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};

Blockly.Python['string_multiline'] = function(block) {
  var text_body = block.getFieldValue('TEXT');
  // TODO: Assemble JavaScript into code variable.
  var code = '"""'+text_body+'"""\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['attribute_access'] = {
  init: function() {
    this.appendValueInput("MODULE")
        .setCheck(null);
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(".");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['attribute_access'] = function(block) {
  var value_module = Blockly.JavaScript.valueToCode(block, 'MODULE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_module+'.'+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['dicts_create_with_container'] = {
  // Container.
  init: function() {
    this.setColour(Blockly.Blocks.dicts.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['dicts_create_with_item'] = {
  // Add items.
  init: function() {
    this.setColour(Blockly.Blocks.dicts.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};
Blockly.Blocks['dicts_create_with'] = {
    /**
     * Block for creating a dict with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function() {
        console.log("init");
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.dicts.HUE);
        this.itemCount_ = 1;
        this.updateShape_();
        this.setOutput(true, 'dict');
        this.setMutator(new Blockly.Mutator(['dicts_create_with_item']));
        this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_TOOLTIP);
    },
    /**
     * Create XML to represent dict inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function(workspace) {
        console.log("mutationToDom");
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the dict inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        console.log("domToMutation");
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function() {
        console.log("updateShape");
        // Delete everything.
        if (this.getInput("EMPTY")) {
            this.removeInput('EMPTY');
        }
        var keyNames = [];
        for (var i = 0; this.getInput('VALUE' + i); i++) {
            //this.getInput('VALUE' + i).removeField("KEY"+i);
            keyNames.push(this.getFieldValue("KEY"+i))
            this.removeInput('VALUE' + i);
        }
        // Rebuild block.
        if (this.itemCount_ == 0) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.DICTS_CREATE_EMPTY_TITLE);
        } else {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH);
            for (var i = 0; i < this.itemCount_; i++) {
                this.appendValueInput('VALUE' + i)
                    .setCheck(null)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(
                          new Blockly.FieldTextInput(
                              keyNames.length > i
                              ? keyNames[i]
                              : Blockly.Msg.DICTS_CREATE_WITH_ITEM_KEY),
                         'KEY'+i)
                   .appendField(Blockly.Msg.DICTS_CREATE_WITH_ITEM_MAPPING);
            }
        }
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        console.log("Decompose");
        var containerBlock = workspace.newBlock('dicts_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 0; x < this.itemCount_; x++) {
          var itemBlock = workspace.newBlock('dicts_create_with_item');
          itemBlock.initSvg();
          connection.connect(itemBlock.previousConnection);
          connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        console.log("Compose");
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        var i = 0;
        while (itemBlock) {
            connections[i] = itemBlock.valueConnection_;
            itemBlock = itemBlock.nextConnection &&
                        itemBlock.nextConnection.targetBlock();
            i++;
        }
        this.itemCount_ = i;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            if (connections[i]) {
                this.getInput('VALUE' + i).connection.connect(connections[i]);
            }
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
        console.log("SaveConnections");
        // Store a pointer to any connected child blocks.
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 0;
        while (itemBlock) {
            var value_input = this.getInput('VALUE' + x);
            itemBlock.valueConnection_ = value_input && value_input.connection.targetConnection;
            x++;
            itemBlock = itemBlock.nextConnection &&
                        itemBlock.nextConnection.targetBlock();
        }
    }
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

/**
 * A utility object for quickly and conveniently generating dialog boxes.
 * Unfortunately, this doesn't dynamically create new boxes; it reuses the same one
 * over and over again. It turns out dynamically generating new dialog boxes
 * is a pain! So we can't stack them.
 *
 * @constructor
 * @this {BlockPyDialog}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyDialog(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.titleTag = tag.find('.modal-title');
    this.bodyTag = tag.find('.modal-body');
}

/**
 * A simple externally available function for popping up a dialog
 * message. This menu will be draggable by its title.
 * 
 * @param {String} title - The title of the message dialog. Can have HTML.
 * @param {String} body - The body of the message dialog. Can have HTML.
 * @param {function} onclose - A function to be run when the user closes the dialog.
 */
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
 * An object for managing the console where printing and plotting is outputed.
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyPrinter(main, tag) {
    this.main = main;
    this.tag = tag;
    
    /** Keep printer settings available for interested parties */
    this.printerSettings = {};
    
    this.resetPrinter();
};

/**
 * Reset the status of the printer, including removing any text in it and
 * fixing its size.
 */
BlockPyPrinter.prototype.resetPrinter = function() {
    this.tag.empty();
    this.main.model.execution.output.removeAll();
    this.printerSettings['width'] = Math.min(500, this.tag.width()-40);
    this.printerSettings['height'] = Math.min(500, this.tag.height()+40);
}

/**
 * Update and return the current configuration of the printer. This 
 * involves calculating its size, among other operations.
 *
 * @returns {Object} Returns an object with information about the printer.
 */
BlockPyPrinter.prototype.getConfiguration = function() {
    var printer = this;
    this.printerSettings['printHtml']= function(html, value) { printer.printHtml(html, value);};
    this.printerSettings['width']= Math.min(500, this.tag.width()-40);
    this.printerSettings['pngMode']= true;
    this.printerSettings['skipDrawing']= false;
    this.printerSettings['height']= Math.min(500, this.tag.height()+40);
    this.printerSettings['container']= this.tag[0];
    return this.printerSettings;
}

/**
 * Updates each printed element in the printer and makes it hidden
 * or visible, depending on what step we're on.
 *
 * @param {Number} step - The current step of the executed program that we're on; each element in the printer must be marked with a "data-step" property to resolve this.
 * @param {Number} page - Deprecated, not sure what this even does.
 */
BlockPyPrinter.prototype.stepPrinter = function(step, page) {
    $(this.printer).find('.blockpy-printer-output').each(function() {
        if ($(this).attr("data-step") <= step) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

/**
 * Print a successful line to the on-screen printer.
 * @param {String} lineText - A line of text to be printed out.
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

/**
 * Prints a successful HTML blob to the printer. This is typically charts,
 * but it can actually be any kind of HTML. This will probably be useful for
 * doing Turtle and Processing stuff down the road.
 * 
 * @param {HTML} html - A blob of HTML to render in the tag
 * @param {Anything} value - a value to push on the outputList for comparison. For instance, on charts this is typically the data of the chart.
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

BlockPyInterface = "<div class='blockpy-content container-fluid' style='background-color :#fcf8e3; border: 1px solid #faebcc; '>    <div class='blockpy-popup modal fade' style='display:none'>        <div class='modal-dialog' style='width:750px'>            <div class='modal-content' id='modal-message' >                <div class='modal-header'>                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>                    <h4 class='modal-title'>Dynamic Content</h4>                </div>                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>                </div>                <div class='modal-footer'>                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>                </div>                </div>        </div>    </div>    <canvas id='capture-canvas' style='display:none'></canvas>    <div class='row' style='padding-bottom: 10px; border-bottom: 1px solid #faebcc; '>        <div class='blockpy-content-top col-md-9 col-sm-9'>            <span class='blockpy-alert pull-right text-muted' data-bind=\"visible: false, text: status.text\"></span>            <strong>BlockPy: </strong>             <span class='blockpy-presentation-name'                  data-bind='text: assignment.name'></span>            <div class='blockpy-presentation' data-bind=\"html: assignment.introduction\">            </div>        </div>        <div class='blockpy-content-topright col-md-3 col-sm-3'>            <span class='text-muted' data-bind=\"visible: status.dataset_loading().length\">Loading Dataset!</span>            <span class='pull-right label label-default blockpy-status-box'                  data-bind=\"css: status_server_class()[0],                             text: status_server_class()[1],                             attr: { 'data-original-title': status.server_error }\"                  data-toggle=\"tooltip\" data-placement=\"left\">Loading</span>            <div class='pull-right'>                Disable Semantic Errors: <input type='checkbox' data-bind=\"checked: settings.disable_semantic_errors\">                <label class='blockpy-toolbar-auto-upload' data-bind=\"visible: settings.instructor\">                Auto-save:                <input type='checkbox' data-bind=\"checked:settings.auto_upload\">                </label>                                 <label class='blockpy-toolbar-instructor-mode' data-bind=\"visible: settings.instructor_initial\">                Instructor mode:                 <input type='checkbox' data-bind=\"checked:settings.instructor\">                </label>                                <label class='blockpy-toolbar-instructor-mode' data-bind=\"visible: settings.instructor_initial\">                Upload mode:                 <input type='checkbox' data-bind=\"checked:assignment.upload\">                </label>             </div>            <!--<img src=\"images/corgi.png\" class='img-responsive' />-->        </div>    </div>    <div class='row' style='margin-top: 5px border: 1px solid #bce8f1;'>        <div class='blockpy-content-left col-md-6 col-sm-6'             style='padding:10px'>            <strong>Printer</strong>            <div class='blockpy-printer blockpy-printer-default'>            </div>        </div>        <div class='blockpy-content-right col-md-6 col-sm-6 bubble'             style='padding:10px'>            <div class='blockpy-feedback'>                <button type='button' class='btn btn-sm btn-default blockpy-feedback-trace pull-right'                         data-bind=\"visible: !execution.show_trace() && (status.error() == 'feedback' || status.error() == 'no errors')\">                    <span class='glyphicon glyphicon-circle-arrow-down'></span> Trace Variables                </button>                                <strong>Feedback: </strong>                <span class='label blockpy-feedback-status' data-bind=\"css: status_feedback_class()[0], text: status_feedback_class()[1]\">Runtime Error</span>                <br>                <pre class='blockpy-feedback-original'></pre>                <strong class='blockpy-feedback-title'></strong>                <div class='blockpy-feedback-body'><i>Run your code to get feedback.</i></div>                <div class='blockpy-code-trace'></div>                                <!-- ko if: execution.show_trace -->                <div class=\"blockpy-feedback-traces\">                                <div>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceFirst\">                        <span class='glyphicon glyphicon-step-backward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceBackward\">                        <span class='glyphicon glyphicon-backward'></span>                    </button>                    Step <span data-bind='text: execution.trace_step()'></span>                    / <span data-bind='text: execution.last_step()-1'></span>                    (<span data-bind='text: current_trace().line == -1 ? \"The end\" : \"Line \"+current_trace().line'></span>)                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceForward\">                        <span class='glyphicon glyphicon-forward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceLast\">                        <span class='glyphicon glyphicon-step-forward'></span>                    </button>                </div>                                <table class='table table-condensed table-striped table-bordered table-hover'>                    <thead>                        <tr><th>Name</th><th>Type</th><th>Value</th></tr>                    </thead>                    <tbody data-bind=\"foreach: current_trace().properties\">                        <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">                            <td data-bind=\"text: name\"></td>                            <td data-bind=\"text: type\"></td>                            <td>                                <code data-bind=\"text: value\"></code>                                <!-- ko if: type == \"List\" -->                                <a href=\"\" data-bind=\"click: $root.viewExactValue(type, exact_value)\">                                <span class='glyphicon glyphicon-new-window'></span>                                </a>                                <!-- /ko -->                            </td>                        </tr>                    </tbody>                </table>                                </div>                <!-- /ko -->                            </div>        </div>    </div>    <div class=\"row\"         style='background-color :#fcf8e3; padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='col-md-12 col-sm-12 blockpy-toolbar btn-toolbar' role='toolbar'>                        <button type='button' class='btn blockpy-run' style='float:left',                data-bind='css: execution.status() == \"running\" ? \"btn-info\" :                                execution.status() == \"error\" ? \"btn-danger\" : \"btn-success\" ' >                <span class='glyphicon glyphicon-play'></span> Run            </button>                        <div class=\"btn-group\" data-toggle=\"buttons\" data-bind=\"visible: !assignment.upload()\">                <label class=\"btn btn-default blockpy-mode-set-blocks\"                        data-bind=\"css: {active: settings.editor() == 'Blocks'}\">                    <span class='glyphicon glyphicon-th-large'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> Blocks                </label>                <label class=\"btn btn-default blockpy-mode-set-instructor\"                       data-bind=\"visible: settings.instructor,                                  css: {active: settings.editor() == 'Upload'}\">                    <span class='glyphicon glyphicon-list-alt'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Instructor                </label>                <label class=\"btn btn-default blockpy-mode-set-split\"                       data-bind=\"css: {active: settings.editor() == 'Split'}\">                    <span class='glyphicon glyphicon-resize-horizontal'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Split                </label>                <label class=\"btn btn-default blockpy-mode-set-text\"                        data-bind=\"css: {active: settings.editor() == 'Text'}\">                    <span class='glyphicon glyphicon-pencil'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Text                </label>            </div>            <button type='button' class='btn btn-default blockpy-toolbar-reset' data-bind=\"visible: !assignment.upload()\">                <span class='glyphicon glyphicon-refresh'></span> Reset            </button>            <!--<button type='button' class='btn btn-default blockpy-toolbar-capture'>                <span class='glyphicon glyphicon-picture'></span> Capture            </button>-->            <button type='button' class='btn btn-default blockpy-toolbar-import' data-bind=\"visible: !assignment.upload() && (assignment.importable() || settings.instructor())\">                <span class='glyphicon glyphicon-cloud-download'></span> Import Datasets            </button>            <button type='button' class='btn btn-default blockpy-toolbar-history'>                <span class='glyphicon glyphicon-hourglass'></span> History            </button>            <!--            <button type='button' class='btn btn-default blockpy-toolbar-english'>                <span class='glyphicon glyphicon-list-alt'></span> English            </button>            -->                        <select data-bind=\"visible: settings.instructor() & !assignment.upload(), value: settings.filename\"                    class=\"blockpy-toolbar-filename-picker\">                <option value='__main__' selected>Student Code</option>                <option value='starting_code'>Starting Code</option>                <option value='give_feedback'>Generate Feedback</option>            </select>                        </div>    </div>    <div class='row blockpy-content-bottom'         style='padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='blockpy-editor col-md-12 col-sm-12'>            <div class='blockpy-blocks blockpy-editor-menu'                  style='height:100%'>                <div class='blockly-div' style='height:450px; width: 100%' '></div>                <!-- <div class='blockly-area'></div> -->            </div>            <div class='blockpy-text blockpy-editor-menu' style='height: 450px'>                <div class='blockpy-text-sidebar' style='width:150px; height: 100%; float:left; background-color: #ddd'>                <!--                <button type='button' class='btn btn-default blockpy-text-insert-if'>Decision (If)</button>                <button type='button' class='btn btn-default blockpy-text-insert-if-else'>Decision (If/Else)</button>                -->                </div>                <textarea class='codemirror-div language-python'                           style='height:100%'></textarea>            </div>            <div class='blockpy-upload blockpy-editor-menu'>                <label class=\"btn btn-default btn-file\">                    Browse <input type=\"file\" style=\"display: none;\">                </label>            </div>            <div class='blockpy-instructor blockpy-editor-menu form-inline'>                <!-- Name -->                <form class=\"form-inline\" style='display:inline-block'>                <label>Name:</label>                <input type='text' class='blockpy-presentation-name-editor form-control'                       data-bind='textInput: assignment.name'>                 </form>                <br>                <br>                                <label>Introduction:</label>                <div class='blockpy-presentation-body-editor'>                 </div>                                <!-- Parsons -->                <label class='blockpy-presentation-parsons-check'>                Parsons:                <input type='checkbox' class='form-control' data-bind=\"checked:assignment.parsons\">                </label>                 <br>                                <!-- Parsons -->                <label class='blockpy-presentation-importable-check'>                Able to import datasets:                <input type='checkbox' class='form-control' data-bind=\"checked:assignment.importable\">                </label>                 <br>                                <!-- Initial mode -->                <label class='blockpy-presentation-text-first'>                Initial View:                <select data-bind=\"value: assignment.initial_view\">                    <option value=\"Blocks\" selected>Blocks</option>                    <option value=\"Text\">Text</option>                    <option value=\"Instructor\">Instructor</option>                    <option value=\"Upload\">Upload</option>                </select>                </label>                <br>                                <label>Available Modules</lable>                <select class='blockpy-available-modules' multiple='multiple'                        data-bind=\"selectedOptions: assignment.modules\">                    <option>Properties</option>                    <option>Decisions</option>                    <option>Iteration</option>                    <option>Functions</option>                    <option>Calculation</option>                    <option>Output</option>                    <option>Python</option>                    <option>Values</option>                    <option>Lists</option>                    <option>Dictionaries</option>                    <option>Data - Parking</option>                            </div>            <div class='blockpy-upload blockpy-editor-menu'>            </div>        </div>    </div>    <div>        <div class='blockpy-content-right col-md-5 col-sm-5 alert alert-info'>            <div class='panel panel-default'>                <div class='panel-heading'>Data Explorer</div>                <div class='panel-body'>                <div class='blockpy-explorer'>                    <table><tr>                    <!-- Step: X of Y (Line: Z) -->                    <td colspan='4'>                        <div class='blockpy-explorer-run-hide'>                            <i>Run your code to explore it.</i>                        </div>                        <div class='blockpy-explorer-status'>                            <strong>Step: </strong>                            <span class='blockpy-explorer-step-span'>0</span> of                             <span class='blockpy-explorer-length-span'>0</span>                             (<strong>Line: </strong>                            <span class='blockpy-explorer-line-span'>0</span>)                        </div>                    </td>                    </tr><tr>                    <!-- First Previous Next Last -->                    <td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-first'>                        <span class='glyphicon glyphicon-fast-backward'></span> First</button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-back'>                        <span class='glyphicon glyphicon-backward'></span> Back</button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-next'>                        Next <span class='glyphicon glyphicon-forward'></span></button>                    </td><td style='width:25%'>                        <button type='button' class='btn btn-default blockpy-explorer-last'>                        Last <span class='glyphicon glyphicon-fast-forward'></span> </button>                    </td>                    </tr></table>                    <!-- Printer -->                                        <!-- Modules -->                    <br><div>                        <strong>Loaded Modules: </strong>                        <i class='blockpy-explorer-modules'>None</i>                    </div>                    <!-- Actual Trace data -->                    <br><strong>Trace Table</strong>                    <br><table style='width: 100%'                            class='table table-condensed table-striped                                    table-bordered table-hover blockpy-explorer-table'>                        <!-- Property Type Value -->                        <tr>                            <th>Property</th>                            <th>Type</th>                            <th>Value</th>                        </tr>                    </table>                </div>                </div>            </div>        </div>    </div></div><!--<div class='blockpy-explorer-errors alert alert-danger alert-dismissible' role='alert'>                     <button type='button' class='blockpy-explorer-errors-hide close' aria-label='Close'><span  aria-hidden='true'>&times;</span></button>                     <div class='blockpy-explorer-errors-body'>                                     </div>-->";

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
    model.assignment.importable.subscribe(function() { server.saveAssignment(); });
    model.assignment.initial_view.subscribe(function() { server.saveAssignment(); });
    model.assignment.modules.subscribe(function() { server.saveAssignment(); });
    model.settings.editor.subscribe(function(newValue) { server.logEvent('editor', newValue); });
};

BlockPyServer.prototype.TIMER_DELAY = 1000;

BlockPyServer.prototype.createServerData = function() {
    var assignment = this.main.model.assignment;
    var d = new Date();
    var seconds = Math.round(d.getTime() / 1000);
    return {
        'assignment_id': assignment.assignment_id,
        'course_id': assignment.course_id,
        'student_id': assignment.student_id,
        'version': assignment.version(),
        'timestamp': seconds
    }
}

BlockPyServer.prototype.setStatus = function(status, server_error) {
    this.main.model.status.server(status);
    if (server_error !== undefined) {
        this.main.model.status.server_error(server_error);
    } else {
        this.main.model.status.server_error('');
    }
}
BlockPyServer.prototype.defaultResponseWithoutVersioning = function(response) {
    if (response.success) {
        this.setStatus('Saved');
    } else {
        console.error(response);
        this.setStatus('Error', response.message);
    }
}
BlockPyServer.prototype.defaultResponse = function(response) {
    /*console.log(response);
    if (!response.is_version_correct) {
        this.setStatus('Out of date');
    } else */if (response.success) {
        this.setStatus('Saved');
    } else {
        console.error(response);
        this.setStatus('Error', response.message);
    }
}
BlockPyServer.prototype.defaultFailure = function(error, textStatus) {
    this.setStatus('Disconnected', "Could not access server!\n"+textStatus);
}

BlockPyServer.prototype.logEvent = function(event_name, action, body) {
    var data = this.createServerData();
    data['event'] = event_name;
    data['action'] = action;
    if (body === undefined) {
        data['body'] = '';
    } else {
        data['body'] = body;
    }
    
    this.setStatus('Logging');
    if (this.main.model.server_is_connected('log_event')) {
        $.post(this.main.model.constants.urls.log_event, data, 
               this.defaultResponse.bind(this))
         .fail(this.defaultFailure.bind(this));
    } else {
        this.setStatus('Offline', "Server is not connected!");
    }
}

BlockPyServer.prototype.markSuccess = function(success) {
    var data = this.createServerData();
    var server = this,
        model = this.main.model;
    data['code'] = model.programs.__main__;
    data['status'] = success;
    console.log("OH");
    this.main.components.editor.getPngFromBlocks(function(pngData, img) {
        data['image'] = pngData;
        console.log("AF");
        img.remove();
        console.log("HERE");
        server.setStatus('Saving');
        if (model.server_is_connected('save_success')) {
            $.post(model.constants.urls.save_success, data, 
                   server.defaultResponse.bind(server))
             .fail(server.defaultFailure.bind(server));
        } else {
            server.setStatus('Offline', "Server is not connected!");
        }
    });
};

BlockPyServer.prototype.saveAssignment = function() {
    var data = this.createServerData();
    var model = this.main.model;
    data['introduction'] = model.assignment.introduction();
    data['parsons'] = model.assignment.parsons();
    data['initial'] = model.assignment.initial_view();
    data['importable'] = model.assignment.importable();
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
                   server.defaultResponseWithoutVersioning.bind(server))
             .fail(server.defaultFailure.bind(server));
        }, this.TIMER_DELAY);
    } else {
        this.setStatus('Offline', "Server is not connected!");
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
            clearTimeout(this.saveTimer[filename]);
        }
        this.saveTimer[filename] = setTimeout(function() {
            $.post(server.main.model.constants.urls.save_code, data, 
                   filename == '__main__'
                    ? server.defaultResponse.bind(server)
                    : server.defaultResponseWithoutVersioning.bind(server))
             .fail(server.defaultFailure.bind(server));
        }, this.TIMER_DELAY);
    } else {
        this.setStatus('Offline', "Server is not connected!");
    }
}

BlockPyServer.prototype.getHistory = function(callback) {
    var data = this.createServerData();
    var model = this.main.model;
    
    var server = this;
    this.setStatus('Loading History');
    if (model.server_is_connected('get_history')) {
        $.post(model.constants.urls.get_history, data, 
               function(response) {
                if (response.success) {
                    server.setStatus('Saved');
                    callback(response.data);
                } else {
                    console.error(response);
                    server.setStatus('Error', response.message);
                }
               })
         .fail(server.defaultFailure.bind(server));
    } else {
        this.setStatus('Offline', "Server is not connected!");
        callback([]);
        /*callback([
            {code: "=", time: "20160801-105102"},
            {code: "= 0", time: "20160801-105112"},
            {code: "a = 0", time: "20160801-105502"},
            {code: "a = 0\nprint", time: "20160801-110003"},
            {code: "a = 0\nprint(a)", time: "20160801-111102"}
        ])*/
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
/**
 * An object for managing the blob of text at the top of a problem describing it.
 * This isn't a very busy component.
 *
 * TODO: Isn't most of this redundant now?
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyPresentation(main, tag) {
    this.main = main;
    this.tag = tag;
    
    var presentationEditor = this;
    //this.main.model.settings.instructor.subscribe(function() {presentationEditor.setVisible()});
}

/**
 * Removes the editor when it's not in use.
 * DEPRECATED
 */
BlockPyPresentation.prototype.closeEditor = function() {
    this.tag.destroy();
};

/**
 * Updates the contents of the presentation blob, possibly updating the
 * editor's size too.
 *
 * @param {String} content - The new text of the presentation blob.
 */
BlockPyPresentation.prototype.setBody = function(content) {
    this.main.model.assignment.introduction(content);
    this.main.components.editor.blockly.resize();
};

/**
 * Makes the editor available or not.
 * DEPRECATED.
 */
BlockPyPresentation.prototype.setVisible = function() {
    if (this.main.model.settings.instructor()) {
        this.startEditor();
    } else {
        this.closeEditor();
    }
}

/**
 * Creates the Summer Note editor for the presentation blob.
 * DEPRECATED.
 */
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
/**
 * An object that manages the various editors, where users can edit their program. Also manages the
 * movement between editors.
 * There are currently four editors:
 *  - Blocks: A Blockly instance
 *  - Text: A CodeMirror instance
 *  - Instructor: Features for changing the assignment and environment settings
 *  - Upload: (Incomplete) A menu for uploading and running code from a desktop file.
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyEditor(main, tag) {
    this.main = main;
    this.tag = tag;
    
    // This tool is what actually converts text to blocks!
    this.converter = new PythonToBlocks();
    
    // HTML DOM accessors
    this.blockTag = tag.find('.blockpy-blocks');
    this.blocklyDiv = this.blockTag.find('.blockly-div');
    this.textTag = tag.find('.blockpy-text');
    this.uploadTag = tag.find('.blockpy-upload');
    this.instructorTag = tag.find('.blockpy-instructor');
    this.textSidebarTag = this.textTag.find(".blockpy-text-sidebar");
    
    // Blockly and CodeMirror instances
    this.blockly = null;
    this.codeMirror = null;
    // The updateStack keeps track of whether an update is percolating, to prevent duplicate update events.
    this.silenceBlock = false;
    this.silenceBlockTimer = null;
    this.silenceText = false;
    this.silenceModel = 0;
    this.blocksFailed = false;
    this.blocksFailedTimeout = null;
    
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
    
    // Have to force a manual block update
    //this.updateText();
    this.updateBlocksFromModel();
    this.updateTextFromModel();
}

/**
 * Initializes the Blockly instance (handles all the blocks). This includes
 * attaching a number of ChangeListeners that can keep the internal code
 * representation updated and enforce type checking.
 */
BlockPyEditor.prototype.initBlockly = function() {
    this.blockly = Blockly.inject(this.blocklyDiv[0],
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
    this.blockly.addChangeListener(function(evt) { 
        //editor.main.components.feedback.clearEditorErrors();
        editor.updateBlocks();
        //editor.updateBlocks();
    });
    this.main.model.program.subscribe(function() {editor.updateBlocksFromModel()});
    this.main.model.settings.filename.subscribe(function() {
        /*if (editor.main.model.settings.editor() == "Blocks") {
            editor.updateBlocksFromModel()
        }*/
    });
    this.main.model.assignment.modules.subscribe(function() {editor.updateToolbox(true)});
    // Force the proper window size
    this.blockly.resize();
    // Keep the toolbox width set
    this.blocklyToolboxWidth = this.blockly.toolbox_.width;
    
    Blockly.captureDialog_ = this.copyImage.bind(this);
    
    // Enable static type checking! 
    this.blockly.addChangeListener(function() {
        if (editor.main.model.settings.disable_variable_types()) {
            var variables = editor.main.components.engine.analyzeVariables()
            editor.blockly.getAllBlocks().filter(function(r) {return r.type == 'variables_get'}).forEach(function(block) { 
                var name = block.inputList[0].fieldRow[0].value_;
                if (name in variables) {
                    var type = variables[name];

                    if (type.type == "Num") {
                        block.setOutput(true, "Number");
                    } else if (type.type == "List") {
                        block.setOutput(true, "Array");
                    } else if (type.type == "Str") {
                        block.setOutput(true, "String");
                    } else {
                        block.setOutput(true, null);
                    }
                }
            })
        }
    });


};

/**
 * Initializes the CodeMirror instance. This handles text editing (with syntax highlighting)
 * and also attaches a listener for change events to update the internal code represntation.
 */
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
        editor.updateText()
    });
    this.main.model.program.subscribe(function() {editor.updateTextFromModel()});
    // Ensure that it fills the editor area
    this.codeMirror.setSize(null, "100%");
    
    // Was toying with buttons for injecting code. These are deprecated now.
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

/**
 * Initializes the Instructor tab, which has a number of buttons and menus for
 * manipulating assignments and the environment. One important job is to register the
 * SummerNote instance used for editing the Introduction of the assignment.
 */
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

/**
 * Makes the module available in the availableModules multi-select menu by adding
 * it to the list.
 * 
 * @param {String} name - The name of the module (human-friendly version, as opposed to the slug) to be added.
 */
BlockPyEditor.prototype.addAvailableModule = function(name) {
    this.availableModules.multiSelect('addOption', { 
        'value': name, 'text': name
    });
    this.availableModules.multiSelect('select', name);
};

/**
 * Hides the Text tab, which involves shrinking it and hiding its CodeMirror too.
 */
BlockPyEditor.prototype.hideSplitMenu = function() {
    this.hideTextMenu();
    this.hideBlockMenu();
}

/**
 * Shows the Text tab, which requires restoring its height, showing AND refreshing
 * the CodeMirror instance.
 */
BlockPyEditor.prototype.showSplitMenu = function() {
    this.showBlockMenu();
    this.showTextMenu();
    
    this.textTag.css('width', '40%');
    this.blockTag.css('width', '60%');
    this.textSidebarTag.css('width', '0px');
    this.textTag.addClass('col-md-6');
    this.blockTag.addClass('col-md-6');
    Blockly.svgResize(this.blockly);
}

/**
 * Hides the Text tab, which involves shrinking it and hiding its CodeMirror too.
 */
BlockPyEditor.prototype.hideTextMenu = function() {
    this.textTag.css('height', '0%');
    $(this.codeMirror.getWrapperElement()).hide();
    this.textSidebarTag.hide();
    this.textTag.hide();
}

/**
 * Shows the Text tab, which requires restoring its height, showing AND refreshing
 * the CodeMirror instance.
 */
BlockPyEditor.prototype.showTextMenu = function() {
    this.textTag.show();
    // Adjust height
    this.textTag.css('height', '450px');
    this.textTag.css('width', '100%');
    // Show CodeMirror
    $(this.codeMirror.getWrapperElement()).show();
    // CodeMirror doesn't know its changed size
    this.codeMirror.refresh();
    
    // Resize sidebar
    var codemirrorGutterWidth = $('.CodeMirror-gutters').width();
    var sideBarWidth = this.blocklyToolboxWidth-codemirrorGutterWidth-2;
    this.textSidebarTag.css('width', sideBarWidth+'px');
    this.textSidebarTag.show();
    this.textTag.removeClass('col-md-6');
}

/**
 * Hides the Block tab, which involves shrinking it and hiding the Blockly instance.
 */
BlockPyEditor.prototype.hideBlockMenu = function() {
    this.blocklyToolboxWidth = this.blockly.toolbox_.width;
    this.blockTag.css('height', '0%');
    this.blocklyDiv.css("width", "0");
    this.blockly.setVisible(false);
}

/**
 * Shows the Block tab, which involves restoring its height and showing the Blockly instance.
 */
BlockPyEditor.prototype.showBlockMenu = function() {
    this.blockTag.css('height', '100%');
    this.blockTag.css('width', '100%');
    this.blocklyDiv.css("width", "100%");
    this.blockly.resize();
    this.blockly.setVisible(true);
    this.blockTag.removeClass('col-md-6');
    Blockly.svgResize(this.blockly);
}

/**
 * Hides the Upload tab, which shrinking it.
 */
BlockPyEditor.prototype.hideUploadMenu = function() {
    this.uploadTag.hide();
    this.uploadTag.css('height', '0%');
}

/**
 * Shows the Upload tab, which involves restoring its height.
 */
BlockPyEditor.prototype.showUploadMenu = function() {
    this.uploadTag.css('height', '100%');
    this.uploadTag.show();
}

/**
 * Hides the Instructor tab, which shrinking it.
 */
BlockPyEditor.prototype.hideInstructorMenu = function() {
    this.instructorTag.hide();
    this.instructorTag.css('height', '0%');
}

/**
 * Shows the Instructor tab, which involves restoring its height.
 */
BlockPyEditor.prototype.showInstructorMenu = function() {
    this.instructorTag.css('height', '100%');
    this.instructorTag.show();
}

/**
 * Sets the current editor mode to Text, hiding the other menus.
 * Also forces the text side to update.
 */
BlockPyEditor.prototype.setModeToText = function() {
    this.hideBlockMenu();
    this.hideUploadMenu();
    this.hideInstructorMenu();
    this.showTextMenu();
    // Update the text model from the blocks
}

/**
 * Sets the current editor mode to Blocks, hiding the other menus.
 * Also forces the block side to update.
 * There is a chance this could fail, if the text side is irredeemably
 * awful. So then the editor bounces back to the text side.
 */
BlockPyEditor.prototype.setModeToBlocks = function() {
    this.hideTextMenu();
    this.hideUploadMenu();
    this.hideInstructorMenu();
    this.showBlockMenu();
    if (this.blocksFailed !== false) {
        this.showConversionError();
        var main = this.main;
        main.model.settings.editor("Text");
        setTimeout(function() {
            main.components.toolbar.tags.mode_set_text.click();
        }, 0);
    }
    // Update the blocks model from the text
    /*
    success = this.updateBlocksFromModel();
    if (!success) {
        var main = this.main;
        main.components.editor.updateTextFromModel();
        main.model.settings.editor("Text");
        setTimeout(function() {
            main.components.toolbar.tags.mode_set_text.click();
        }, 0);
    }*/
}

/**
 * Sets the current editor mode to Upload mode, hiding the other menus.
 */
BlockPyEditor.prototype.setModeToUpload = function() {
    this.hideTextMenu();
    this.hideInstructorMenu();
    this.hideBlockMenu();
    this.showUploadMenu();
    //TODO: finish upload mode
}

/**
 * Sets the current editor mode to Split mode, hiding the other menus.
 */
BlockPyEditor.prototype.setModeToSplit = function() {
    this.hideTextMenu();
    this.hideInstructorMenu();
    this.hideBlockMenu();
    this.hideUploadMenu();
    this.showSplitMenu();
    if (this.blocksFailed !== false) {
        this.showConversionError();
    }
}

/**
 * Sets the current editor mode to the Instructor mode, hiding the other menus.
 */
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

/**
 * Dispatch method to set the mode to the given argument.
 * If the mode is invalid, an editor error is reported. If the 
 *
 * @param {String} mode - The new mode to set to ("Blocks", "Text", "Upload", or "Instructor")
 */
BlockPyEditor.prototype.setMode = function(mode) {
    // Either update the model, or go with the model's
    if (mode === undefined) {
        mode = this.main.model.settings.editor();
    } else {
        this.main.model.settings.editor(mode);
    }
    // Dispatch according to new mode
    if (mode == 'Blocks') {
        this.setModeToBlocks();
    } else if (mode == 'Text') {
        this.setModeToText();
    } else if (mode == 'Upload') {
        this.setModeToUpload();
    } else if (mode == 'Split') {
        this.setModeToSplit();
    } else if (mode == 'Instructor') {
        this.setModeToInstructor();
    } else {
        this.components.feedback.internalError(""+mode, "Invalid Mode", "The editor attempted to change to an invalid mode.")
    }
}

/**
 * Actually changes the value of the CodeMirror instance
 *
 * @param {String} code - The new code for the CodeMirror
 */
BlockPyEditor.prototype.setText = function(code) {
    if (code == undefined || code.trim() == "") {
        this.codeMirror.setValue("\n");
    } else {
        this.codeMirror.setValue(code);
    }
    // Ensure that we maintain proper highlighting
    this.refreshHighlight();
}

BlockPyEditor.prototype.showConversionError = function() {
    var error = this.blocksFailed;
    this.main.components.feedback.editorError(error, "While attempting to convert the Python code into blocks, I found a syntax error. In other words, your Python code has a spelling or grammatical mistake. You should check to make sure that you have written all of your code correctly. To me, it looks like the problem is on line "+ error.args.v[2]+', where it says:<br><code>'+error.args.v[3][2]+'</code>', error.args.v[2]);
}

BlockPyEditor.prototype.setBlocks = function(python_code) {
    var xml_code = "";
    if (python_code !== '' && python_code !== undefined && python_code.trim().charAt(0) !== '<') {
        var result = this.converter.convertSource(python_code);
        xml_code = result.xml;
        window.clearTimeout(this.blocksFailedTimeout);
        if (result.error !== null) {
            this.blocksFailed = result.error;
            var editor = this;
            this.blocksFailedTimeout = window.setTimeout(function() {
                if (editor.main.model.settings.editor() != 'Text') {
                    editor.showConversionError();
                }
            }, 500)
        } else {
            this.blocksFailed = false;
            this.main.components.feedback.clearEditorErrors();
        }
    }
    var error_code = this.converter.convertSourceToCodeBlock(python_code);
    var errorXml = Blockly.Xml.textToDom(error_code);
    if (python_code == '' || python_code == undefined || python_code.trim() == '') {
        this.blockly.clear();
    } else if (xml_code !== '' && xml_code !== undefined) {
        var blocklyXml = Blockly.Xml.textToDom(xml_code);
        try {
            this.setBlocksFromXml(blocklyXml);
        } catch (e) {
            console.error(e);
            this.setBlocksFromXml(errorXml);
        }
    } else {
        this.setBlocksFromXml(errorXml);
    }
    Blockly.Events.disable();
    // Parsons shuffling
    if (this.main.model.assignment.parsons()) {
        this.blockly.shuffle();
    } else {
        this.blockly.align();
    }
    Blockly.Events.enable();
    if (this.previousLine !== null) {
        this.refreshBlockHighlight(this.previousLine);
    }
}

BlockPyEditor.prototype.clearDeadBlocks = function() {
    var all_blocks = this.blockly.getAllBlocks();
    all_blocks.forEach(function(elem) {
        if (!Blockly.Python[elem.type]) {
            elem.dispose(true);
        }
    });
}

/**
 * Attempts to update the model for the current code file from the 
 * block workspace. Might be prevented if an update event was already
 * percolating.
 */
BlockPyEditor.prototype.updateBlocks = function() {
    if (! this.silenceBlock) {
        try {
            var newCode = Blockly.Python.workspaceToCode(this.blockly);
        } catch (e) {
            this.clearDeadBlocks();
            this.main.components.feedback.editorError("Unknown Block", "It looks like you attempted to paste or load some blocks that were not known. Typically, this is because you failed to load in the dataset before trying to paste in a data block. If there are any black blocks on the canvas, delete them before continuing.", "Unknown Block");
        }
        // Update Model
        this.silenceModel = 2;
        this.main.setCode(newCode);
        // Update Text
        this.silenceText = true;
        this.setText(newCode);
    }
}

/**
 * Attempts to update the model for the current code file from the 
 * text editor. Might be prevented if an update event was already
 * percolating. Also unhighlights any lines.
 */
var timerGuard = null;
BlockPyEditor.prototype.updateText = function() {
    if (! this.silenceText) {
        var newCode = this.codeMirror.getValue();
        // Update Model
        this.silenceModel = 2;
        this.main.setCode(newCode);
        // Update Blocks
        this.silenceBlock = true;
        this.setBlocks(newCode);
        this.unhighlightLines();
        this.resetBlockSilence();
    }
    this.silenceText = false;
}

/**
 * Resets the silenceBlock after a short delay
 */
BlockPyEditor.prototype.resetBlockSilence = function() {
    var editor = this;
    if (editor.silenceBlockTimer != null) {
        clearTimeout(editor.silenceBlockTimer);
    }
    this.silenceBlockTimer = window.setTimeout(function() {
        editor.silenceBlock = false;
        editor.silenceBlockTimer = null;
    }, 40);
};

/**
 * Updates the text editor from the current code file in the
 * model. Might be prevented if an update event was already
 * percolating.
 */
BlockPyEditor.prototype.updateTextFromModel = function() {
    if (this.silenceModel == 0) {
        var code = this.main.model.program();
        this.silenceText = true;
        this.setText(code);
    } else {
        this.silenceModel -= 1;
    }
}

/**
 * Updates the block editor from the current code file in the
 * model. Might be prevented if an update event was already
 * percolating. This can also report an error if one occurs.
 *
 * @returns {Boolean} Returns true upon success.
 */
BlockPyEditor.prototype.updateBlocksFromModel = function() {
    if (this.silenceModel == 0) {
        var code = this.main.model.program().trim();
        this.silenceBlock = true;
        this.setBlocks(code);
        this.resetBlockSilence();
    } else {
        this.silenceModel -= 1;
    }
}

/**
 * Helper function for retrieving the current Blockly workspace as
 * an XML DOM object.
 *
 * @returns {XMLDom} The blocks in the current workspace.
 */
BlockPyEditor.prototype.getBlocksFromXml = function() {
    return Blockly.Xml.workspaceToDom(this.blockly);
}
          
/**
 * Helper function for setting the current Blockly workspace to
 * whatever XML DOM is given. This clears out any existing blocks.
 */
BlockPyEditor.prototype.setBlocksFromXml = function(xml) {
    //this.blockly.clear();
    Blockly.Xml.domToWorkspaceDestructive(xml, this.blockly);
    //console.log(this.blockly.getAllBlocks());
}

/** 
 * @property {Number} previousLine - Keeps track of the previously highlighted line.
 */
BlockPyEditor.prototype.previousLine = null;

/**
 * Assuming that a line has been highlighted previously, this will set the
 * line to be highlighted again. Used when we need to restore a highlight.
 */
BlockPyEditor.prototype.refreshHighlight = function() {
    if (this.previousLine !== null) {
        this.codeMirror.addLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    // TODO: Shouldn't this refresh the highlight in the block side too?
}

/**
 * Highlights a line of code in the CodeMirror instance. This applies the "active" style
 * which is meant to bring attention to a line, but not suggest it is wrong.
 *
 * @param {Number} line - The line of code to highlight. I think this is zero indexed?
 */
BlockPyEditor.prototype.highlightLine = function(line) {
    if (this.previousLine !== null) {
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    this.codeMirror.addLineClass(line, 'text', 'editor-active-line');
    this.previousLine = line;
}

/**
 * Highlights a line of code in the CodeMirror instance. This applies the "error" style
 * which is meant to suggest that a line is wrong.
 *
 * @param {Number} line - The line of code to highlight. I think this is zero indexed?
 */
BlockPyEditor.prototype.highlightError = function(line) {
    if (this.previousLine !== null) {
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    this.codeMirror.addLineClass(line, 'text', 'editor-error-line');
    this.refreshBlockHighlight(line);
    this.previousLine = line;
}

/**
 * Highlights a block in Blockly. Unfortunately, this is the same as selecting it.
 *
 * @param {Number} block - The ID of the block object to highlight.
 */
BlockPyEditor.prototype.highlightBlock = function(block) {
    this.blockly.highlightBlock(block);
}

/**
 * Used to restore a block's highlight when travelling from the code tab. This
 * uses a mapping between the blocks and text that is generated from the parser.
 * The parser has stored the relevant line numbers for each block in the XML of the
 * block. Very sophisticated, and sadly fairly fragile.
 * TODO: I believe there's some kind of off-by-one error here...
 *
 * @param {Number} line - The line of code to highlight. I think this is zero indexed?
 */
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

/**
 * Removes the outline around a block. Currently unused.
 */
BlockPyEditor.prototype.unhighlightBlock = function() {
    // TODO:
}

/**
 * Removes any highlight in the text code editor.
 *
 */
BlockPyEditor.prototype.unhighlightLines = function() {
    if (this.previousLine !== null) {
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
        this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
    }
    this.previousLine = null;
}

/**
 * DEPRECATED, thankfully
 * Builds up an array indicating the relevant block ID for a given step.
 * Operates on the current this.blockly instance
 * It works by injecting __HIGHLIGHT__(id); at the start of every line of code
 *  and then extracting that with regular expressions. This makes it vulnerable
 *  if someone decides to use __HIGHLIGHT__ in their code. I'm betting on that
 *  never being a problem, though. Still, this was a miserable way of accomplishing
 *  the desired behavior.
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

/**
 * Updates the current file being edited in the editors.
 *
 * @param {String} name - The name of the file being edited (e.g, "__main__", "starting_code")
 */
BlockPyEditor.prototype.changeProgram = function(name) {
    this.silentChange_ = true;
    this.model.settings.filename = name;
    this.editor.setPython(this.model.programs[name]);
    this.toolbar.elements.programs.find("[data-name="+name+"]").click();
}

/**
 * Eventually will be used to update "levels" of sophistication of the code interface.
 * Currently unimplemented and unused.
 */
BlockPyEditor.prototype.setLevel = function() {
    var level = this.main.model.settings.level();
}

/**
 * Maps short category names in the toolbox to the full XML used to
 * represent that category as usual. This is kind of a clunky mechanism
 * for managing the different categories, and doesn't allow us to specify
 * individual blocks.
 */
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
                    '<block type="plot_hist"></block>'+
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
                          '<block type="math_number"><field name="NUM">0</field></block>'+
                        '</value>'+
                        '<value name="ADD1">'+
                          '<block type="math_number"><field name="NUM">0</field></block>'+
                        '</value>'+
                        '<value name="ADD2">'+
                          '<block type="math_number"><field name="NUM">0</field></block>'+
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
                    '<block type="logic_compare">'+
                        '<field name="OP">EQ</field>'+
                        '<value name="A">'+
                          '<block type="datetime_time">'+
                            '<mutation isNow="1"></mutation>'+
                            '<field name="HOUR">1</field>'+
                            '<field name="MINUTE">00</field>'+
                            '<field name="MERIDIAN">PM</field>'+
                          '</block>'+
                        '</value>'+
                    '</block>'+
                    '<block type="logic_compare">'+
                        '<field name="OP">EQ</field>'+
                        '<value name="A">'+
                          '<block type="datetime_day">'+
                            '<field name="DAY">Monday</field>'+
                          '</block>'+
                        '</value>'+
                    '</block>'+
                    //'<block type="datetime_check_day"></block>'+
                    //'<block type="datetime_check_time"></block>'+
                '</category>',
    'Separator': '<sep></sep>'
};

/**
 * Creates an updated representation of the Toolboxes XML as currently specified in the
 * model, using whatever modules have been added or removed. This method can either set it
 * or just retrieve it for future use.
 *
 * @param {Boolean} only_set - Whether to return the XML string or to actually set the XML. False means that it will not update the toolbox!
 * @returns {String?} Possibly returns the XML of the toolbox as a string.
 */
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

/**
 * Generates a PNG version of the current workspace. This PNG is stored in a Base-64 encoded
 * string as part of a data URL (e.g., "data:image/png;base64,...").
 * TODO: There seems to be some problems capturing blocks that don't start with
 * statement level blocks (e.g., expression blocks).
 * 
 * @param {Function} callback - A function to be called with the results. This function should take two parameters, the URL (as a string) of the generated base64-encoded PNG and the IMG tag.
 */
BlockPyEditor.prototype.getPngFromBlocks = function(callback) {
    try {
        var blocks = this.blockly.svgBlockCanvas_.cloneNode(true);
        blocks.removeAttribute("width");
        blocks.removeAttribute("height");
        if (blocks.childNodes[0] !== undefined) {
            blocks.removeAttribute("transform");
            blocks.childNodes[0].removeAttribute("transform");
            blocks.childNodes[0].childNodes[0].removeAttribute("transform");
            var linkElm = document.createElementNS("http://www.w3.org/1999/xhtml", "style");
            linkElm.textContent = Blockly.Css.CONTENT.join('') + '\n\n';
            blocks.insertBefore(linkElm, blocks.firstChild);
            var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
            var xml = new XMLSerializer().serializeToString(blocks);
            xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="0 0 '+bbox.width+' '+bbox.height+'"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
            console.log(xml);
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
    } catch (e) {
        callback("", document.createElement("img"));
        console.error("PNG image creation not supported!", e);
    }
}

/**
 * Shows a dialog window with the current block workspace encoded as a
 * downloadable PNG image.
 */
BlockPyEditor.prototype.copyImage = function() {
    var dialog = this.main.components.dialog;
    this.getPngFromBlocks(function(canvasUrl, img) {
        img.onload = function() {
            var span = document.createElement('span');
            span.textContent = "Right-click and copy the image below."
            var newWindow = document.createElement('button');
            var newWindowInner = document.createElement('span');
            newWindow.className += "btn btn-default btn-xs";
            newWindowInner.className += "glyphicon glyphicon-new-window";
            newWindow.onclick = function() {
                var output = img.src;
                window.open(img.src);
            }
            newWindow.appendChild(newWindowInner);
            var div = document.createElement('div');
            div.appendChild(span);
            div.appendChild(newWindow);
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
            main.components.editor.updateBlocksFromModel();
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
        this.main.model.status.dataset_loading.push(name);
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
            corgis.main.model.status.dataset_loading.pop();
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
                    .append($("<td class='col-md-4'>"+title_name+"</td>"))
                    .append($("<td>"+datasets[title_name]['short']+"</td>"))
                    .append($("<td class='col-md-2'></td>").append(btn))
                    .appendTo(body);
            });
            var editor = corgis.main.components.editor;
            corgis.main.components.dialog.show("Import Datasets", body, function() {
                if (editor.main.model.settings.editor() == "Blocks") {
                    editor.updateBlocksFromModel();
                }
            });
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
function BlockPyHistory(main) {
    this.main = main;
}

var monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "June", "July",
  "Aug", "Sept", "Oct",
  "Nov", "Dec"
];
var weekDays = [
    "Sun", "Mon", "Tue",
    "Wed", "Thu", "Fri",
    "Sat"
];


BlockPyHistory.prototype.openDialog = function() {
    var dialog = this.main.components.dialog;
    var body = "<pre>a = 0</pre>";
    this.main.components.server.getHistory(function (data) {
        body = data.reverse().reduce(function (complete, elem) { 
            // 
            var year = elem.time.slice(0, 4),
                month = parseInt(elem.time.slice(4, 6), 10)-1,
                day = elem.time.slice(6, 8),
                hour = elem.time.slice(9, 11),
                minutes = elem.time.slice(11, 13),
                seconds = elem.time.slice(13, 15);
            var time_str = hour+":"+minutes+":"+seconds,
                date_str = year+"/"+month+"/"+day;
            var date = new Date(year, month, day, hour, minutes, seconds);
            var dayStr = weekDays[date.getDay()];
            var monthStr = monthNames[date.getMonth()];
            var yearFull = date.getFullYear();
            //var complete_str = time_str + " "+date_str;
            //var complete_str = date.toUTCString();
            var complete_str = dayStr+", "+monthStr+" "+date.getDate()+", "+yearFull+" at "+date.toLocaleTimeString();
            var new_line = "<b>"+complete_str+"</b><br><pre>"+elem.code+"</pre>";
            return complete+"\n"+new_line;
        }, "");
        dialog.show("Work History", body, function() {});
    });
};
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
/**
 * An object that manages the feedback area, where users are told the state of their
 * program's execution and given guidance. Also manages the creation of the Trace Table.
 *
 * @constructor
 * @this {BlockPyFeedback}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyFeedback(main, tag) {
    this.main = main;
    this.tag = tag;
    
    this.body = this.tag.find('.blockpy-feedback-body');
    this.title = this.tag.find('.blockpy-feedback-title');
    this.original = this.tag.find('.blockpy-feedback-original');
    this.status = this.tag.find('.blockpy-feedback-status');
    this.trace = this.tag.find('.blockpy-feedback-trace');
    
    // Reload the tracetable on click
    this.trace.click(this.buildTraceTable.bind(this));
    
    this.original.hide();
};

/**
 * Reload the trace table, showing it if it was hidden and
 * resetting its position to the last step.
 */
BlockPyFeedback.prototype.buildTraceTable = function() {
    var execution = this.main.model.execution;
    execution.show_trace(true);
    execution.trace_step(execution.last_step());
    this.main.components.server.logEvent('editor', 'trace')
}

/**
 * Raises a generic warning. This might not be used anymore.
 *
 * @param {String} html - Some HTML content to render to the user.
 */
BlockPyFeedback.prototype.error = function(html) {
    this.tag.html(html);
    this.tag.removeClass("alert-success");
    this.tag.addClass("alert-warning");
    this.main.components.printer.print("Execution stopped - there was an error!");
}

/**
 * Clears any output currently in the feedback area. Also resets the printer and
 * any highlighted lines in the editor.
 */
BlockPyFeedback.prototype.clear = function() {
    this.title.html("Ready");
    this.original.hide();
    this.body.html("Run your program to get feedback.");
    this.main.model.status.error("none");
    this.main.components.editor.unhighlightLines();
    this.main.components.printer.resetPrinter()
};

/**
 * Clears any errors from the editor area.
 */
BlockPyFeedback.prototype.clearEditorErrors = function() {
    if (this.main.model.status.error() == "editor") {
        this.clear();
    }
}

/**
 * Show an error message related to a problem with the editor. This will appear in
 * the Feedback area, the Printer, and also log to the server. The relevant line of
 * code or block will also be highlighted.
 *
 * @param {String} original - HTML content that represents the original error message generated by the system.
 * @param {String} message - HTML content that is a hopefully friendlier message for the user explaining the error.
 * @param {number} line - What line the error occurred on.
 */
BlockPyFeedback.prototype.editorError = function(original, message, line) {
    original = this.prettyPrintError(original);
    this.title.html("Editor Error");
    this.original.show().html(original);
    this.body.html(message);
    this.main.model.status.error("editor");
    this.main.components.editor.highlightError(line-1);
    //this.main.components.printer.print("Editor error - could not make blocks!");
    this.main.components.server.logEvent('feedback', "Editor Error", original+"\n|\n"+message);
}

/**
 * Mark this problem as completed for the student. This will appear in the Feedback area,
 * and will also unhighlight lines in the editor and log to the server.
 */
BlockPyFeedback.prototype.complete = function() {
    this.title.html("Complete!");
    this.original.hide();
    this.body.html("Great work!");
    this.main.model.status.error("complete");
    this.main.components.editor.unhighlightLines();
    this.main.components.server.logEvent('feedback', "Success");
}

/**
 * This notifies the student that their code ran without errors, but that there was no
 * Success raised by the Checker. This will appear in the Feedback area,
 * and will also unhighlight lines in the editor and log to the server.
 */
BlockPyFeedback.prototype.noErrors = function() {
    this.title.html("Ran");
    this.original.hide();
    this.body.html("No errors reported. View your output on the left.");
    this.main.model.status.error("no errors");
    this.main.components.editor.unhighlightLines();
    this.main.components.server.logEvent('feedback', "No Errors", '');
}

/**
 * Show an error message related to syntax issue. This will appear in
 * the Feedback area, the Printer, and also log to the server. The relevant line of
 * code or block will also be highlighted.
 *
 * @param {String} original - HTML content that represents the original error message generated by the system.
 * @param {String} message - HTML content that is a hopefully friendlier message for the user explaining the error.
 * @param {number} line - What line the error occurred on.
 */
BlockPyFeedback.prototype.syntaxError = function(original, message, line) {
    original = this.prettyPrintError(original);
    this.title.html("Syntax Error");
    this.original.show().html(original);
    this.body.html(message);
    this.main.model.status.error("syntax");
    this.main.components.editor.highlightError(line-1);
    this.main.components.printer.print("Execution stopped - there was an error!");
    this.main.components.server.logEvent('feedback', "Syntax Error", original+"\n|\n"+message);
}

/**
 * Show an error message related to semantic error with the program (e.g., unused variable). 
 * This will appear in the Feedback area, the Printer, and also log to the server. The
 * relevant line of code or block will also be highlighted.
 *
 * @param {String} original - HTML content that represents the original error message generated by the system.
 * @param {String} message - HTML content that is a hopefully friendlier message for the user explaining the error.
 * @param {number} line - What line the error occurred on.
 */
BlockPyFeedback.prototype.semanticError = function(name, message, line) {
    this.title.html(name);
    this.original.hide();
    this.body.html(message);
    this.main.model.status.error("semantic");
    if (line !== null) {
        this.main.components.editor.highlightError(line-1);
    }
    this.main.components.printer.print("Execution stopped - there was an error!");
    this.main.components.server.logEvent('feedback', "Semantic Error", name+"\n|\n"+message);
}

/**
 * Show an error message related to a serious internal BlockPy program. Under normal conditions,
 * this should never appear to a student. This will appear in
 * the Feedback area, the Printer, and also log to the server. The relevant line of
 * code or block will also be highlighted.
 *
 * @param {String} original - HTML content that represents the original error message generated by the system.
 * @param {String} message - HTML content that is a hopefully friendlier message for the user explaining the error.
 * @param {number} line - What line the error occurred on.
 */
BlockPyFeedback.prototype.internalError = function(original, name, message) {
    original = this.prettyPrintError(original);
    this.title.html(name);
    this.original.show().html(original);
    this.body.html(message);
    this.main.model.status.error("internal");
    this.main.components.printer.print("Internal error! Please show this to an instructor!");
    this.main.components.server.logEvent('feedback', "Internal Error", name+"\n|\n"+original+"\n|\n"+message);
}

/**
 * Show an incorrect code message related to a problem as specified by the Checker. This will appear in
 * the Feedback area, the Printer, and also log to the server. The relevant line of
 * code or block will also be highlighted.
 *
 * @param {String} original - HTML content that represents the original error message generated by the system.
 * @param {String} message - HTML content that is a hopefully friendlier message for the user explaining the error.
 * @param {number} line - What line the error occurred on.
 */
BlockPyFeedback.prototype.instructorFeedback = function(name, message, line) {
    console.log("A");
    this.title.html(name);
    this.original.hide();
    this.body.html(message);
    this.main.model.status.error("feedback");
    if (line !== undefined) {
        this.main.components.editor.highlightError(line-1);
    }
    this.main.components.server.logEvent('feedback', "Instructor Feedback", name+"\n|\n"+"\n|\n"+message);
    console.log("B");
}

/**
 * Show "Empty Program" error, indicating the student hasn't written any code. This will appear in
 * the Feedback area, the Printer, and also log to the server. The relevant line of
 * code or block will also be highlighted.
 *
 * @param {String} original - HTML content that represents the original error message generated by the system.
 * @param {String} message - HTML content that is a hopefully friendlier message for the user explaining the error.
 * @param {number} line - What line the error occurred on.
 */
BlockPyFeedback.prototype.emptyProgram = function() {
    this.title.html("Blank Program");
    this.original.hide().html("");
    this.body.html("You have not written any code yet.");
    this.main.model.status.error("runtime");
    this.main.components.server.logEvent('feedback', "Empty Program");
}

/**
 * Converts any kind of error (usually a Skulpt one) into a prettier version that's ready
 * for users to see. If it's already a string, it is passed along unchanged. But Skulpt
 * errors have to be processed more closely.
 */
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

/**
 * Print an error to the printers -- the on screen one and the browser one. This
 * will attempt to provide extra explanation and context for an error.
 * Notice that this is largely for Run-time errors that will be thrown when the code
 * is executed, as opposed to ones raised elsewhere in the environment.
 * 
 * @param {String} error - The error message to be analyzed and printed.
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
    this.main.components.server.logEvent('feedback', "Runtime", original);
}

/**
 * An object that manages the main toolbar, including the different mode buttons.
 * This doesn't actually have many responsibilities after the initial load.
 *
 * @constructor
 * @this {BlockPyToolbar}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyToolbar(main, tag) {
    this.main = main;
    this.tag = tag;
    
    // Holds the HTMLElement tags for each of the toolbar items
    this.tags = {};
    this.tags.mode_set_text = this.tag.find('.blockpy-mode-set-text');
    this.tags.filename_picker = this.tag.find('.blockpy-toolbar-filename-picker');
    
    // Set up each of the relevant Button Groups
    var groupHtml = '<div class="btn-group" role="group"></div>';
    var runGroup =      $(groupHtml).appendTo(tag);
    var modeGroup =     $(groupHtml).appendTo(tag);
    var doGroup =       $(groupHtml).appendTo(tag);
    var blocksGroup =   $(groupHtml).appendTo(tag);
    var codeGroup =     $(groupHtml).appendTo(tag);
    var programsGroup = $(groupHtml).appendTo(tag);
    
    // this used to hold many items, but now we store them directly in the
    // html of interface.js
    this.elements = {
        'programs': $("<div></div>")
                            .addClass('btn-group blockpy-programs')
                            .attr("data-toggle", "buttons")
                            .appendTo(programsGroup)
    };    
    this.elements.programs.hide();
    this.elements.editor_mode = this.tag.find('.blockpy-change-mode');
    
    // Actually set up the toolbar!
    this.activateToolbar();
}

/**
 * Add a new button for the given filename in the Programs button group.
 * These programs will be things like "__main__".
 *
 * @param {String} name - The name of the new program.
 */
BlockPyToolbar.prototype.addProgram = function(name) {
    this.elements.programs.append("<label class='btn btn-default'>"+
                                    "<input type='radio' id='"+name+"' "+
                                      "data-name='"+name+"' autocomplete='off'>"+
                                        name+
                                   "</label>");
}

/**
 * Show the programs button group.
 */
BlockPyToolbar.prototype.showPrograms = function() {
    this.elements.programs.show();
}

/**
 * Hide the programs button group.
 */
BlockPyToolbar.prototype.hidePrograms = function() {
    this.elements.programs.hide();
}
    
/**
 * Register click events for more complex toolbar actions.
 */
BlockPyToolbar.prototype.activateToolbar = function() {
    var main = this.main;
    this.tag.find('.blockpy-run').click(function() {
        main.components.engine.run();
        main.components.server.logEvent('editor', 'run')
    });
    this.tags.mode_set_text.click(function() {
        main.model.settings.editor("Text");
        main.components.server.logEvent('editor', 'text')
    });
    this.tag.find('.blockpy-toolbar-reset').click(function() {
        main.model.programs['__main__'](main.model.programs['starting_code']());
        //main.components.editor.updateBlocks();
        main.components.server.logEvent('editor', 'reset');
    });
    this.tag.find('.blockpy-mode-set-blocks').click(function() {
        main.model.settings.editor("Blocks");
        main.components.server.logEvent('editor', 'blocks')
    });
    this.tag.find('.blockpy-mode-set-instructor').click(function() {
        main.model.settings.editor("Instructor");
        main.components.server.logEvent('editor', 'instructor')
    });
    this.tag.find('.blockpy-mode-set-split').click(function() {
        main.model.settings.editor("Split");
        main.components.server.logEvent('editor', 'split')
    });
    this.tag.find('.blockpy-toolbar-import').click(function() {
        main.components.corgis.openDialog();
        main.components.server.logEvent('editor', 'import')
    });
    this.tag.find('.blockpy-toolbar-history').click(function() {
        main.components.history.openDialog();
        main.components.server.logEvent('editor', 'history')
    });
    this.tag.find('.blockpy-toolbar-english').click(function() {
        main.components.english.openDialog();
        main.components.server.logEvent('editor', 'english')
    });
}
/**
 * An object for executing Python code and passing the results along to interested components.
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyEngine(main) {
    this.main = main;
    
    this.loadEngine();
    
    this.instructor_module = instructor_module('instructor');
    
    //this.main.model.program.subscribe(this.analyze.bind(this))
}

/**
 * Initializes the Python Execution engine and the Printer (console).
 */
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
    // Stepper! Executed after every statement.
    Sk.afterSingleExecution = this.step.bind(this);
    
    // Keeps track of the tracing while the program is executing; destroyed afterwards.
    this.executionBuffer = {};
}

/**
 * Used to access Skulpt built-ins. This is pretty generic, taken
 * almost directly from the Skulpt docs.
 *
 * @param {String} filename - The python filename (e.g., "os" or "pprint") that will be loaded.
 * @returns {String} The JavaScript source code of the file (weird, right?)
 * @throws Will throw an error if the file isn't found.
 */
BlockPyEngine.prototype.readFile = function(filename) {
    if (Sk.builtinFiles === undefined ||
        Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
    }
    return Sk.builtinFiles["files"][filename];
}

/**
 * Resets the state of the execution engine, including reinitailizing
 * the execution buffer (trace, step, etc.), reseting the printer, and
 * hiding the trace button.
 *
 */
BlockPyEngine.prototype.reset = function() {
    this.executionBuffer = {
        'trace': [],
        'step': 0,
        'last_step': 0,
        'line_number': 0,
    };
    this.main.model.execution.trace.removeAll();
    this.main.model.execution.step(0);
    this.main.model.execution.last_step(0);
    this.main.model.execution.line_number(0)
    this.main.components.printer.resetPrinter();
    this.main.model.execution.show_trace(false);
}

/**
 * "Steps" the execution of the code, meant to be used as a callback to the Skulpt
 * environment.
 * 
 * @param {Object} variables - Hash that maps the names of variables (Strings) to their Skulpt representation.
 * @param {Number} lineNumber - The corresponding line number in the source code that is being executed.
 * @param {Number} columnNumber - The corresponding column number in the source code that is being executed. Think of it as the "X" position to the lineNumber's "Y" position.
 * @param {String} filename - The name of the python file being executed (e.g., "__main__.py").
 * @param {String} astType - Unused? TODO: What is this?
 * @param {String} ast - String-encoded JSON representation of the AST node associated with this element.
 */
BlockPyEngine.prototype.step = function(variables, lineNumber, 
                                       columnNumber, filename, astType, ast) {
    if (filename == '<stdin>.py') {
        var currentStep = this.executionBuffer.step;
        var globals = this.parseGlobals(variables);
        this.executionBuffer.trace.push(
            {'step': currentStep,
             'filename': filename,
             //'block': highlightMap[lineNumber-1],
             'line': lineNumber,
             'column': columnNumber,
             'properties': globals.properties,
             'modules': globals.modules});
        this.executionBuffer.step = currentStep+1;
        this.executionBuffer.last_step = currentStep+1;
        this.executionBuffer.line_number = lineNumber;
    }
}

/**
 * Called at the end of the Skulpt execution to terminate the executionBuffer
 * and hand it off to the execution trace in the model.
 */
BlockPyEngine.prototype.lastStep = function() {
    var execution = this.main.model.execution;
    execution.trace(this.executionBuffer.trace);
    this.main.model.execution.step(this.executionBuffer.step)
    this.main.model.execution.last_step(this.executionBuffer.last_step)
    this.main.model.execution.line_number(this.executionBuffer.line_number)
    this.executionBuffer = undefined;
}

/**
 * Runs the AbstractInterpreter to get some static information about the code,
 * in particular the variables' types. This is needed for type checking.
 *
 * @returns {Object<String, AIType>} Maps variable names (as Strings) to types as constructed by the AbstractIntepreter.
 */
BlockPyEngine.prototype.analyzeVariables = function() {
    // Get the code
    var code = this.main.model.programs['__main__']();
    if (code.trim() == "") {
        return {};
    }
    
    var analyzer = new AbstractInterpreter(code);
    report = analyzer.report;
    return analyzer.variableTypes;
}

/**
 * Runs the AbstractInterpreter to get some static information about the code,
 * including potential semantic errors. It then parses that information to give
 * feedback.
 *
 * @returns {Boolean} Whether the code was successfully analyzed.
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
    
    report = analyzer.report;
    // Syntax error
    if (report.error !== false) {
        console.log(report.error.args.v)
        var codeLine = '.';
        if (report.error.args.v.length > 3) {
            codeLine = ', where it says:<br><code>'+report.error.args.v[3][2]+'</code>';
        }
        this.main.reportError('editor', report.error, "While attempting to process your Python code, I found a syntax error. In other words, your Python code has a mistake in it (e.g., mispelled a keyword, bad indentation, unnecessary symbol). You should check to make sure that you have written all of your code correctly. To me, it looks like the problem is on line "+ report.error.args.v[2]+codeLine, report.error.args.v[2]);
        return false;
    }
        
    if (report["Unconnected blocks"].length >= 1) {
        var variable = report['Unconnected blocks'][0];
        feedback.semanticError("Unconnected blocks", "It looks like you have unconnected blocks on line "+variable.position.line+". Before you run your program, you must make sure that all of your blocks are connected and that there are no unfilled holes.", variable.position.line)
        return false;
    } else if (report['Iteration variable is iteration list'].length >= 1) {
        var variable = report['Iteration variable is iteration list'][0];
        feedback.semanticError("Iteration Problem", "The property <code>"+variable.name+"</code> was iterated on line "+variable.position.line+", but you used the same variable as the iteration variable. You should choose a different variable name for the iteration variable. Usually, the iteration variable is the singular form of the iteration list (e.g., <code>for dog in dogs:</code>).", variable.position.line)
        return false;
    } else if (report["Undefined variables"].length >= 1) {
        var variable = report["Undefined variables"][0];
        feedback.semanticError("Initialization Problem", "The property <code>"+variable.name+"</code> was read on line "+variable.position.line+", but it was not given a value on a previous line. You cannot use a property until it has been initialized.", variable.position.line)
        return false;
    } else if (report["Possibly undefined variables"].length >= 1) {
        var variable = report["Possibly undefined variables"][0];
        feedback.semanticError("Initialization Problem", "The property <code>"+variable.name+"</code> was read on line "+variable.position.line+", but it was possibly not given a value on a previous line. You cannot use a property until it has been initialized. Check to make sure that this variable was declared in all of the branches of your decision.", variable.position.line);
        return false;
    } else if (report["Unread variables"].length >= 1) {
        var variable = report["Unread variables"][0];
        feedback.semanticError("Unused Property", "The property <code>"+variable.name+"</code> was set, but was never used after that.", null)
        return false;
    } else if (report["Overwritten variables"].length >= 1) {
        var variable = report["Overwritten variables"][0];
        feedback.semanticError("Overwritten Property", "The property <code>"+variable.name+"</code> was set, but before it could be read it was changed on line "+variable.position.line+". It is unnecessary to change an existing variable's value without reading it first.", variable.position.line)
        return false;
    } else if (report["Empty iterations"].length >= 1) {
        var variable = report["Empty iterations"][0];
        feedback.semanticError("Iterating over empty list", "The property <code>"+variable.name+"</code> was set as an empty list, and then you attempted to iterate over it on "+variable.position.line+". You should only iterate over non-empty lists.", variable.position.line)
        return false;
    } else if (report["Non-list iterations"].length >= 1) {
        var variable = report["Non-list iterations"][0];
        feedback.semanticError("Iterating over non-list", "The property <code>"+variable.name+"</code> is not a list, but you attempted to iterate over it on "+variable.position.line+". You should only iterate over non-empty lists.", variable.position.line)
        return false;
    } else if (report["Incompatible types"].length >= 1) {
        var variable = report["Incompatible types"][0];
        feedback.semanticError("Incompatible types", "You attempted to "+variable.operation+" a "+variable.left.type+" and a "+variable.right.type+" on line "+variable.position.line+". But you can't do that with that operator. Make sure both sides of the operator are the right type.", variable.position.line)
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
            engine.lastStep();
            // Handle checks
            feedback.noErrors()
            engine.check(code, execution.trace(), execution.output(), execution.ast, module.$d);
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
    
    mod.get_value_by_name = new Sk.builtin.func(function(name) {
        Sk.builtin.pyCheckArgs("get_value_by_name", arguments, 1, 1);
        Sk.builtin.pyCheckType("name", "string", Sk.builtin.checkString(name));
        name = name.v;
        var final_values = Sk.builtins._final_values;
        if (name in final_values) {
            return final_values[name];
        } else {
            return Sk.builtin.none.none$;
        }
    });
    mod.get_value_by_type = new Sk.builtin.func(function(type) {
        Sk.builtin.pyCheckArgs("get_value_by_type", arguments, 1, 1);
        
        var final_values = Sk.builtins._final_values;
        var result = [];
        for (var property in final_values) {
            if (final_values[property].tp$name == type.tp$name) {
                result.push(final_values[property]);
            }
        }
        return Sk.builtin.list(result);
    });
    
    mod.parse_json = new Sk.builtin.func(function(blob) {
        Sk.builtin.pyCheckArgs("parse_json", arguments, 1, 1);
        Sk.builtin.pyCheckType("blob", "string", Sk.builtin.checkString(blob));
        blob = blob.v;
        return Sk.ffi.remapToPy(JSON.parse(blob));
    });
    mod.get_property = new Sk.builtin.func(function(name) {
        Sk.builtin.pyCheckArgs("get_property", arguments, 1, 1);
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

BlockPyEngine.prototype.setupEnvironment = function(student_code, traceTable, output, ast, final_values) {
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
        Sk.builtin.pyCheckArgs("log", arguments, 1, 1);
        console.log(data)
    });
    //Sk.builtins.trace = Sk.ffi.remapToPy(traceTable);
    Sk.builtins._trace = traceTable;
    Sk.builtins._final_values = final_values;
    Sk.builtins.code = Sk.ffi.remapToPy(student_code);
    Sk.builtins.set_success = this.instructor_module.set_success;
    Sk.builtins.set_feedback = this.instructor_module.set_feedback;
    Sk.builtins.count_components = this.instructor_module.count_components;
    Sk.builtins.calls_function = this.instructor_module.calls_function;
    Sk.builtins.get_property = this.instructor_module.get_property;
    Sk.builtins.get_value_by_name = this.instructor_module.get_value_by_name;
    Sk.builtins.get_value_by_type = this.instructor_module.get_value_by_type;
    Sk.builtins.parse_json = this.instructor_module.parse_json;
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
    Sk.builtins.get_value_by_name = undefined;
    Sk.builtins.get_value_by_type = undefined;
    Sk.builtins.parse_json = undefined;
    Sk.skip_drawing = false;
    GLOBAL_VALUE = undefined;
    this.main.model.settings.mute_printer(false);
}

BlockPyEngine.prototype.check = function(student_code, traceTable, output, ast, final_values) {
    var engine = this;
    var server = this.main.components.server;
    var model = this.main.model;
    var on_run = model.programs['give_feedback']();
    if (on_run !== undefined && on_run.trim() !== "") {
        on_run = 'def run_code():\n'+indent(student_code)+'\n'+on_run;
        this.setupEnvironment(student_code, traceTable, output, ast, final_values);
        
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
                    console.log("ALPHA");
                    server.markSuccess(0.0);
                    console.log("BETA");
                    engine.main.components.feedback.instructorFeedback("Incorrect Answer", error.args.v[0].v);
                    console.log("DELTA");
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
            if (value.v.length <= 20) {
                return {'name': property,
                    'type': "List",
                    "value": value.$r().v,
                    'exact_value': value
                };
            } else {
                return {'name': property,
                    'type': "List",
                    "value": "[... "+value.v.length+" elements ...]",
                    "exact_value": value
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
/**
 * A helper function for extending an array based
 * on an "addArray" and "removeArray". Any element
 * found in removeArray is removed from the first array
 * and all the elements of addArray are added.
 * Creates a new array, so is non-destructive.
 *
 * @param {Array} array - the array to manipulate
 * @param {Array} addArray - the elements to add to the array
 * @param {Array} removeArray - the elements to remove from the array
 * @return {Array} The modified array
 */
function expandArray(array, addArray, removeArray) {
    var copyArray = array.filter(function(item) {
        return removeArray.indexOf(item) === -1;
    });
    return copyArray.concat(addArray);
}

/**
 * Deeply clones a node
 * @param {Node} node A node to clone
 * @return {Node} A clone of the given node and all its children
 */
function cloneNode(node) {
    // If the node is a text node, then re-create it rather than clone it
    var clone = node.nodeType == 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);
 
    // Recurse     
    var child = node.firstChild;
    while(child) {
        clone.appendChild(cloneNode(child));
        child = child.nextSibling;
    }
     
    return clone;
}

/**
 * Creates an instance of BlockPy
 *
 * @constructor
 * @this {BlockPy}
 * @param {Object} settings - User level settings (e.g., what view mode, whether to mute semantic errors, etc.)
 * @param {Object} assignment - Assignment level settings (data about the loaded assignment, user, submission, etc.)
 * @param {Object} submission - Unused parameter.
 * @param {Object} programs - Includes the source code of any programs to be loaded
 */
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
            'disable_variable_types': ko.observable(settings.disable_variable_types || false),
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
            'server': ko.observable("Loading"),
            // Some message from a server error can go here
            'server_error': ko.observable(''),
            // Dataset loading
            'dataset_loading': ko.observableArray()
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
            'importable': ko.observable(assignment.importable),
        },
        "programs": {
            "__main__": ko.observable(programs.__main__),
            "starting_code": ko.observable(assignment.starting_code),
            "give_feedback": ko.observable(assignment.give_feedback),
            "answer": ko.observable(assignment.answer)
        }
    };
    
    // The code for the current active program file (e.g., "__main__")
    this.model.program = ko.computed(function() {
        return this.programs[this.settings.filename()]();
    }, this.model) //.extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 400 } });
    
    // Whether this URL has been specified
    this.model.server_is_connected = function(url) {
        return this.constants.urls !== undefined && this.constants.urls[url] !== undefined;
    };
    
    // Helper function to map error statuses to UI elements
    this.model.status_feedback_class = ko.computed(function() {
        switch (this.status.error()) {
            default: case 'none': return ['label-none', ''];
            case 'runtime': return ['label-runtime-error', 'Runtime Error'];
            case 'syntax': return ['label-syntax-error', 'Syntax Error'];
            case 'editor': return ['label-syntax-error', 'Editor Error'];
            case 'internal': return ['label-internal-error', 'Internal Error'];
            case 'semantic': return ['label-semantic-error', 'Algorithm Error'];
            case 'feedback': return ['label-feedback-error', 'Incorrect Answer'];
            case 'complete': return ['label-problem-complete', 'Complete'];
            case 'no errors': return ['label-no-errors', 'No errors'];
        }
    }, this.model);
    
    // Helper function to map Server error statuses to UI elements
    this.model.status_server_class = ko.computed(function() {
        switch (this.status.server()) {
            default: case 'Loading': return ['label-default', 'Loading'];
            case 'Offline': return ['label-default', 'Offline'];
            case 'Out of date': return ['label-danger', 'Out of Date'];
            case 'Loaded': return ['label-success', 'Loaded'];
            case 'Logging': return ['label-primary', 'Logging'];
            case 'Saving': return ['label-primary', 'Saving'];
            case 'Saved': return ['label-success', 'Saved'];
            case 'Disconnected': return ['label-danger', 'Disconnected'];
            case 'Error': return ['label-danger', 'Error'];
        }
    }, this.model);
    
    // Program trace functions
    var execution = this.model.execution;
    this.model.moveTraceFirst = function(index) { 
        execution.trace_step(0); };
    this.model.moveTraceBackward = function(index) { 
        var previous = Math.max(execution.trace_step()-1, 0);
        execution.trace_step(previous); };
    this.model.moveTraceForward = function(index) { 
        var next = Math.min(execution.trace_step()+1, execution.last_step());
        execution.trace_step(next); };
    this.model.moveTraceLast = function(index) { 
        execution.trace_step(execution.last_step()); };
    this.model.current_trace = ko.pureComputed(function() {
        return execution.trace()[Math.min(execution.trace().length-1, execution.trace_step())];
    });
    
    /**
     * Opens a new window to represent the exact value of a Skulpt object.
     * Particularly useful for things like lists that can be really, really
     * long.
     * 
     * @param {String} type - The type of the value
     * @param {Object} exact_value - A Skulpt value to be rendered.
     */
    this.model.viewExactValue = function(type, exact_value) {
        return function() {
            if (type == "List") {
                var output = exact_value.$r().v;
                var result = (window.btoa?'base64,'+btoa(JSON.stringify(output)):JSON.stringify(output));
                window.open('data:application/json;' + result);
            }
        }
    }
    
    // For performance reasons, batch notifications for execution handling.
    // I'm not even sure these have any value any more.
    execution.trace.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    execution.step.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    execution.last_step.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    execution.line_number.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    
    this.initMain();
}

/**
 * The default modules to make available to the user.
 *
 * @type Array.<String>
 */
BlockPy.DEFAULT_MODULES = ['Properties', 'Decisions', 
                           'Iteration',
                           'Calculation', 'Output', 
                           'Values', 
                           'Lists', 'Dictionaries']

/**
 * Initializes the BlockPy object by initializing its interface,
 * model, and components.
 *
 */
BlockPy.prototype.initMain = function() {
    this.turnOnHacks();
    this.initInterface();
    this.initModel();
    this.initComponents();
    if (this.model.settings.developer()) {
        this.initDevelopment();
    }
}

/**
 * Initializes the User Inteface for the instance, by loading in the
 * HTML file (which has been manually encoded into a JS string using
 * the build.py script). We do this because its a giant hassle to keep
 * HTML correct when it's stored in JS strings. We should look into
 * more sophisticated templating features, probably.
 *
 */
BlockPy.prototype.initInterface = function() {
    var constants = this.model.constants;
    // Refer to interface.js, interface.html, and build.py
    constants.container = $(constants.attachmentPoint).html($(BlockPyInterface))
}

/**
 * Applys the KnockoutJS bindings to the model, instantiating the values into the
 * HTML.
 */
BlockPy.prototype.initModel = function() {
    ko.applyBindings(this.model);
}

/**
 * Initializes each of the relevant components of BlockPy. For more information,
 * consult each of the component's relevant JS file in turn.
 */
BlockPy.prototype.initComponents = function() {
    var container = this.model.constants.container;
    this.components = {};
    var main = this,
        components = this.components;
    // Each of these components will take the BlockPy instance, and possibly a
    // reference to the relevant HTML location where it will be embedded.
    components.dialog = new BlockPyDialog(main, container.find('.blockpy-popup'));
    components.toolbar  = new BlockPyToolbar(main,  container.find('.blockpy-toolbar'));
    components.feedback = new BlockPyFeedback(main, container.find('.blockpy-feedback'));
    components.editor   = new BlockPyEditor(main,   container.find('.blockpy-editor'));
    components.presentation = new BlockPyPresentation(main, container.find('.blockpy-presentation'));
    components.printer = new BlockPyPrinter(main, container.find('.blockpy-printer'));
    components.engine = new BlockPyEngine(main);
    components.server = new BlockPyServer(main);
    components.corgis = new BlockPyCorgis(main);
    components.history = new BlockPyHistory(main);
    components.english = new BlockPyEnglish(main);
    components.editor.setMode();
    main.model.status.server('Loaded')
    
    var statusBox = container.find(".blockpy-status-box");
    main.model.status.server.subscribe(function(newValue) {
        if (newValue == "Error" || 
            newValue == "Offline" ||
            newValue == "Disconnected") {
            if (!statusBox.is(':animated')) {
                statusBox.effect("shake");
            }
        } else if (newValue == "Out of date") {
            if (!statusBox.is(':animated')) {
                statusBox.effect("shake").effect("shake");
            }
        }
    });
    statusBox.tooltip();
}

/**
 * Initiailizes certain development data, useful for testing out new modules in
 * Skulpt.
 */
BlockPy.prototype.initDevelopment = function () {
    /*$.get('src/skulpt_ast.js', function(data) {
        Sk.builtinFiles['files']['src/lib/ast/__init__.js'] = data;
    });*/
}

/**
 * Redundant method for reporting an error. If this is used anywhere, it should be
 * converted to direct calls to components.feedback.
 */
BlockPy.prototype.reportError = function(component, original, message, line) {
    if (component == 'editor') {
        this.components.feedback.editorError(original, message, line);
    } else if (component == 'syntax') {
        this.components.feedback.syntaxError(original, message, line);
    }
    console.error(component, message)
}

/**
 * Helper function for setting the current code. I'm not sure if this is used anywhere.
 *
 */
BlockPy.prototype.setCode = function(code, name) {
    if (name === undefined) {
        name = this.model.settings.filename();
    }
    this.model.programs[name](code);
}

/**
 * Function for running any code that fixes bugs and stuff upstream.
 * Not pleasant that this exists, but better to have it isolated than
 * just lying about randomly...
 *
 */
BlockPy.prototype.turnOnHacks = function() {
    /*
     * jQuery UI shake - Padding disappears
     * Courtesy: http://stackoverflow.com/questions/22301972/jquery-ui-shake-padding-disappears
     */
    if ($.ui) {
        (function () {
            var oldEffect = $.fn.effect;
            $.fn.effect = function (effectName) {
                if (effectName === "shake" || effectName.effect == "shake") {
                    var old = $.effects.createWrapper;
                    $.effects.createWrapper = function (element) {
                        var result;
                        var oldCSS = $.fn.css;

                        $.fn.css = function (size) {
                            var _element = this;
                            var hasOwn = Object.prototype.hasOwnProperty;
                            return _element === element && hasOwn.call(size, "width") && hasOwn.call(size, "height") && _element || oldCSS.apply(this, arguments);
                        };

                        result = old.apply(this, arguments);

                        $.fn.css = oldCSS;
                        return result;
                    };
                }
                return oldEffect.apply(this, arguments);
            };
        })();
    }
}
