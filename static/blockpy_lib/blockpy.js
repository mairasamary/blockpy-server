/**
 * BlockPy version 3.1
 * This file was automatically combined using a script.
 * You should edit individual files in the src/* folder.
 */

/**
 * Determines if the element is in the list.
 * @param {anything} needle - The element to look for.
 * @param {Array} haystack - The list to search.
 * @return {Boolean} Whether the element exists
 */
function arrayContains(needle, haystack) {
    return haystack.indexOf(needle) > -1;
}

/**
 * Remove duplicate values from an array, preserving order.
 * Creates a new array, so is non-destructive.
 * Courtesy:
 * https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
 *
 * @param {Array} array - The array to uniquify. Elements compared with ===.
 */
function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

/**
 * A helper function for extending an array based
 * on an "addArray" and "removeArray". Any element
 * found in removeArray is removed from the first array
 * and all the elements of addArray are added.
 * Any duplicate items are removed.
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
    return arrayUnique(copyArray.concat(addArray));
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
 * Indents the given string by 4 spaces. This correctly handles multi-line strings.
 *
 * @param {String} str - The string to be manipulated.
 * @returns {String} The string with four spaces added at the start of every new line.
 */
function indent(str) {
  return str.replace(/^(?=.)/gm, '    ');
}

/**
 * Return a random integer between [`min`, `max`].
 * 
 * @param {number} min - The lowest possible integer.
 * @param {number} max - The highest possible integer (inclusive).
 * @returns {number} A random integer.
 */
function randomInteger(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Encodes some text so that it can be safely written into an HTML box.
 * This includes replacing special HTML characters (&, <, >, etc.).
 *
 * @param {string} str - The text to be converted.
 * @return {string} The HTML-safe text.
 */
function encodeHTML(str) {
    return str.replace(/&/g, '&amp;')
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
 * Move elements from one array to another based on a conditional check.
 * https://stackoverflow.com/questions/31887967/javascript-move-objects-from-one-array-to-another-best-approach
 */
function moveElements(source, target, moveCheck) {
    for (var i = 0; i < source.length; i++) {
        var element = source[i];
        if (moveCheck(element)) {
            source.splice(i, 1);
            target.push(element);
            i--;
        }
    } 
}
/**
 * A dictionary of improved explanations for Python errors. These are shown to users
 * alongside the regular errors to hopefully increase clarity.
 */
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


function AbstractInterpreter(code, filename) {
    NodeVisitor.apply(this, Array.prototype.slice.call(arguments));
}
AbstractInterpreter.prototype = new NodeVisitor();

AbstractInterpreter.prototype.processCode = function(code, filename) {
    // Code
    this.source = code !== "" ? code.split("\n") : [];
    filename = filename || '__main__';
    
    // Attempt parsing - might fail!
    try {
        var parse = Sk.parse(filename, code);
        var ast = Sk.astFromParse(parse.cst, filename, parse.flags);
        this.processAst(ast);
    } catch (error) {
        this.report = {"error": error, "message": "Parsing error"};
        return;
    }
};

AbstractInterpreter.prototype.processAst = function(ast) {
    this.ast = ast;
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
    this.variablesNonBuiltin = {};
    for (var name in this.BUILTINS) {
        this.setVariable(name, this.BUILTINS[name], true);
    }
    
    this.functionContext = null;
    
    // OLD
    //this.frameIndex = 0;
    //this.rootFrame = this.newFrame(null);
    //this.currentFrame = this.rootFrame;
    this.report = this.newReport();
    
    this.visit(this.ast);
    
    //console.log(this.variables)
    this.postProcess();
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
AbstractInterpreter.prototype._newBehavior = function(method, type, position, currentType, returnType) {
    if (returnType === undefined) {
        returnType = null;
    }
    return {"method": method, 
            "type": type, 
            "loop": this.loopStackId, 
            "parentName": this.currentBranchName,
            "position": position, 
            "currentType": currentType,
            "returnType": returnType};
}

AbstractInterpreter.prototype.setVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push(this._newBehavior("set", type, position, type));
}
AbstractInterpreter.prototype.setIterVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push(this._newBehavior("set_iterate", type, position, type));
}
AbstractInterpreter.prototype.setReturnVariable = function(name, type, position) {
    this._initializeVariable(name);
    this.variables[name].push({
        "method": "set_returns",
        "type": this.getLast(name).type,
        "parentName": this.getLast(name).parentName,
        "position": position,
        "currentType": this.getLast(name).type,
        "returnType": type,
    });
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
    for (var name in this.variables) {
        if (!(name in this.BUILTINS)) {
            var trace = this.variables[name];
            this.variablesNonBuiltin[name] = trace.slice();
            //console.log(name, this.variablesNonBuiltin[name])
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
                        } else if (node["method"] == "set_returns") {
                            
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

AbstractInterpreter.prototype.getLast = function(name) {
    if (name in this.variables) {
        var trace = this.variables[name];
        if (trace != undefined && trace.length > 0) {
            return trace[trace.length-1];
        }
    }
    return {'currentType': null, 'returnType': null};
}

AbstractInterpreter.prototype.getType = function(name) {
    return this.getLast(name).currentType;
}

AbstractInterpreter.prototype.isTypeEmptyList = function(name) {
    var type = this.getType(name);
    return (type !== null && type.type === "List") && (type.empty);
}
AbstractInterpreter.prototype.isTypeSequence = function(name) {
    var type = this.getType(name);
    return (type !== null && 
            arrayContains(type.type, this.TYPE_INHERITANCE['Sequence']));
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
            if (left === null || right === null || left === undefined || right === undefined) {
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
            return this.BUILTINS[attribute.id.v].returns;
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

AbstractInterpreter.prototype.visit_FunctionDef = function(node) {
    this.setVariable(node.name.v, {"type": "Function"}, this.getLocation(node))
    this.functionContext = node.name.v;
    var args = node.args.args;
    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var name = Sk.ffi.remapToJs(arg.id);
        this.setVariable(name, {}, this.getLocation(node))
    }
    this.generic_visit(node);
}
AbstractInterpreter.prototype.visit_Return = function(node) {
    this.setReturnVariable(this.functionContext, 
                           this.typecheck(node.value), 
                           this.getLocation(node));
    this.generic_visit(node);
}

AbstractInterpreter.prototype.visit_ClassDef = function(node) {
    this.setVariable(node.name.v, {"type": "Class"}, this.getLocation(node))
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

AbstractInterpreter.prototype.unpackSequence = function(type) {
    if (type.type == "List" && !type.empty) {
        return type.subtype;
    } else if (type.type == "Str") {
        return {"type": "Str"};
    }
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
            if (!(this.isTypeSequence(child.id.v))) {
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
    if (iterType !== null) {
        iterSubtype = this.unpackSequence(iterType);
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
AbstractInterpreter.prototype.TYPE_INHERITANCE = {
    "Sequence": ["List", "Set", "Tuple", "Str"],
    "Num": ["Int", "Float"]
}
AbstractInterpreter.prototype.BUILTINS = {
    // Values
    'True': {"type": "Bool"}, 
    'False': {"type": "Bool"}, 
    'None': {"type": 'None'},
    // Functions
    "print": {
        "type": "Function",
        "returns": {"type": "None"},
        "parameters": [
            {"type": "Any", "var": true}
        ]
    },
    "sum": {
        "type": "Function",
        "returns": {"type": "Num"},
        "parameters": [
            {"type": "Sequence"},
            {"type": "Num", "optional": true}
        ]
    },
    "open": {
        "type": "Function",
        "returns": {"type": "File"},
        "parameters": [
            {"type": "Str"},
            {"type": "Str", "name": "mode", "optional": true}
        ]
    },
    "round": {
        "type": "Function",
        "returns": {"type": "Num"},
        "parameters": [
            {"type": "Num"},
            {"type": "Num"}
        ]
    },
    "range": {
        "type": "Function",
        "returns": {"type": "List", "subtype": {"type": "Num"}},
        "parameters": [
            {"type": "Num"},
            {"type": "Num", "optional": true}
        ]
    },
    "xrange": {
        "type": "Function",
        "returns": {"type": "List", "subtype": {"type": "Num"}},
        "parameters": [
            {"type": "Num"},
            {"type": "Num", "optional": true}
        ]
    },
    "str": {
        "type": "Function",
        "returns": {"type": "Str"},
        "parameters": [
            {"type": "Any"}
        ]
    },
    'input': {"type": "Str"},
    'reversed': {"type": "List"},
    'len': {"type": "Num"},
    'type': {"type": "Any"},
    'dir': {"type": "List"}
};
AbstractInterpreter.METHODS = {
    "List": {
        "append": {
            "type": "Function",
            "returns": {"type": "None"}
        }
    },
    "Str": {
        "strip": {
            "type": "Function",
            "returns": {"type": "Str"}
        }
    }
}
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
    'image': {
        
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
/**
 * An object for converting Python source code to the
 * Blockly XML representation.
 * 
 * @constructor
 * @this {PythonToBlocks}
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

/**
 * The main function for converting a string representation of Python
 * code to the Blockly XML representation.
 *
 * @param {string} python_source - The string representation of Python
 *      code (e.g., "a = 0").
 * @returns {Object} An object which will either have the converted
 *      source code or an error message and the code as a code-block.
 */
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
    this.highestLineSeen = 0;
    this.levelIndex = 0;
    this.nextExpectedLine = 0;
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

PythonToBlocks.prototype.getSourceCode = function(frm, to) {
    var lines = this.source.slice(frm-1, to);
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
    this.levelIndex += 1;
    // Empty body, return nothing
    if (node.length == 0) {
        return null;
    }
    
    // Final result list
    var children = [], // The complete set of peers
        root = null, // The top of the current peer
        current = null, // The bottom of the current peer
        levelIndex = this.levelIndex; 
        
    function addPeer(peer) {
        if (root == null) {
            children.push(peer);
        } else {
            children.push(root);
        }
        root = peer;
        current = peer;
    }
    
    function finalizePeers() {
        if (root != null) {
            children.push(root);
        }
    }
    
    function nestChild(child) {
        if (root == null) {
            root = child;
            current = child;
        } else if (current == null) {
            root = current;
        } else {
            var nextElement = document.createElement("next");
            nextElement.appendChild(child);
            current.appendChild(nextElement);
            current = child;
        }
    }
    
    var lineNumberInBody = 0,
        lineNumberInProgram,
        previousLineInProgram=null,
        distance,
        skipped_line,
        commentCount,
        previousHeight = null,
        previousWasStatement = false;
        visitedFirstLine = false;
        
    // Iterate through each node
    for (var i = 0; i < node.length; i++) {
        lineNumberInBody += 1;
        
        lineNumberInProgram = node[i].lineno;
        distance = 0, wasFirstLine = true;
        if (previousLineInProgram != null) {
            distance = lineNumberInProgram - previousLineInProgram-1;
            wasFirstLine = false;
        }
        lineNumberInBody += distance;
        
        // Handle earlier comments
        commentCount = 0;
        for (var commentLineInProgram in this.comments) {
            if (commentLineInProgram < lineNumberInProgram) {
                commentChild = this.Comment(this.comments[commentLineInProgram], commentLineInProgram);
                if (previousLineInProgram == null) {
                    nestChild(commentChild);
                } else {
                    skipped_previous_line = Math.abs(previousLineInProgram-commentLineInProgram) > 1;
                    if (is_top_level && skipped_previous_line) {
                        addPeer(commentChild);
                    } else {
                        nestChild(commentChild);
                    }
                }
                previousLineInProgram = commentLineInProgram;
                this.highestLineSeen = Math.max(this.highestLineSeen, parseInt(commentLineInProgram, 10));
                distance = lineNumberInProgram - previousLineInProgram;
                delete this.comments[commentLineInProgram];
                commentCount += 1;
            }
        }
        
        distance = lineNumberInProgram - this.highestLineSeen;
        this.highestLineSeen = Math.max(lineNumberInProgram, this.highestLineSeen);
        
        // Now convert the actual node
        var height = this.heights.shift();
        var originalSourceCode = this.getSourceCode(lineNumberInProgram, height);
        var newChild = this.convertStatement(node[i], originalSourceCode, is_top_level);
        
        // Skip null blocks (e.g., imports)
        if (newChild == null) {
            continue;
        }
        
        skipped_line = distance > 1;
        previousLineInProgram = lineNumberInProgram;
        previousHeight = height;
        
        // Handle top-level expression blocks
        if (is_top_level && newChild.constructor == Array) {
            addPeer(newChild[0]);
        // Handle skipped line
        } else if (is_top_level && skipped_line && visitedFirstLine) {
            addPeer(newChild);
        // The previous line was not a Peer
        } else if (is_top_level && !previousWasStatement) {
            addPeer(newChild);
        // Otherwise, always embed it in there.
        } else {
            nestChild(newChild);
        }
        previousWasStatement = newChild.constructor !== Array;
        
        visitedFirstLine = true;
    }
    
    
    // Handle comments that are on the very last line
    var lastLineNumber = lineNumberInProgram+1
    if (lastLineNumber in this.comments) {
        commentChild = this.Comment(this.comments[lastLineNumber], lastLineNumber);
        nestChild(commentChild);
        delete this.comments[lastLineNumber];
    }
    
    // Handle any extra comments that stuck around
    if (is_top_level) {
        for (var commentLineInProgram in this.comments) {
            commentChild = this.Comment(this.comments[commentLineInProgram], commentLineInProgram);
            distance = commentLineInProgram - previousLineInProgram;
            if (previousLineInProgram == null) {
                addPeer(commentChild);
            } else if (distance > 1) {
                addPeer(commentChild);
            } else {
                nestChild(commentChild);
            }
            previousLineInProgram = commentLineInProgram;
            delete this.comments[lastLineNumber];
        }
    }
    
    
    finalizePeers();
    
    this.levelIndex -= 1;
    
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
    
    return block("controls_if_better", node.lineno, {
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
    var ctx = node.ctx;
    
    return block("set_create", node.lineno, {}, 
        this.convertElements("ADD", elts)
    , {
        "inline": elts.length > 3 ? "false" : "true", 
    }, {
        "@items": elts.length
    });
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
PythonToBlocks.KNOWN_ATTR_FUNCTIONS = {};
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
    } else if (name in PythonToBlocks.KNOWN_ATTR_FUNCTIONS) {
        return PythonToBlocks.KNOWN_ATTR_FUNCTIONS[name].bind(this)(func, args, keywords, starargs, kwargs, node)
    } else {
        console.log(func, args, keywords, starargs, kwargs);
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
        //return raw_expression(expressionCall, lineno);
        
        var argumentsNormal = {};
        var argumentsMutation = {"@name": name};
        for (var i = 0; i < args.length; i+= 1) {
            argumentsNormal["ARG"+i] = this.convert(args[i]);
            argumentsMutation[i] = this.convert(args[i]);
        }
        var methodCall = block("procedures_callreturn", node.lineno, {
        }, argumentsNormal, {
            "inline": "false"
        }, argumentsMutation);
        
        return block("attribute_access", node.lineno, {}, {
            "MODULE": this.convert(func.value),
            "NAME": methodCall
        }, { "inline": "true"}, {});
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
                case "input":
                    return block("text_input", node.lineno, {"MESSAGE": this.Str_value(args[0])});
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
                    var argumentsNormal = {};
                    var argumentsMutation = {"@name": this.identifier(func.id)};
                    for (var i = 0; i < args.length; i+= 1) {
                        argumentsNormal["ARG"+i] = this.convert(args[i]);
                        argumentsMutation[i] = this.convert(args[i]);
                    }
                    return block("procedures_callreturn", node.lineno, {}, argumentsNormal, {
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
    
    console.log(node);
    
    return block("attribute_access", node.lineno, {
        "MODULE": this.convert(value),
        "NAME": this.convert(attr)
    });
    
    //throw new Error("Attribute access not implemented");
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
    
    if (slice._astname == "Index") {
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
    } else if (slice._astname == "Slice") {
        return block("lists_getSublist", node.lineno, {
            "WHERE1": "FROM_START",
            "WHERE2": "FROM_END"
        }, {
            "LIST": this.convert(value)
        }, {}, {
            "AT1": this.convert(slice.lower),
            "AT2": this.convert(slice.upper)
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

PythonToBlocks.prototype.convertElements = function(key, values, plusser) {
    if (plusser === undefined) {
        plusser = 0;
    }
    var output = {};
    for (var i = 0; i < values.length; i++) {
        output[key+(plusser+i)] = this.convert(values[i]);
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
    
    return block("tuple_create", node.lineno, {}, 
        this.convertElements("ADD", elts)
    , {
        "inline": elts.length > 3 ? "false" : "true", 
    }, {
        "@items": elts.length
    });
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

/**
 * An automatically generated file, based on the files in `instructors/`.
 * We need to have the python code in these files made available in the 
 * JS files, so we load them in via a preprocessing step.
 */

var $INSTRUCTOR_MODULES_EXTENDED = {};

$INSTRUCTOR_MODULES_EXTENDED["instructor_append.py"] = "from instructor_utility import *\ndef find_append_in(node):\n    appendList = []\n    calls = node.find_all(\"Call\")\n    for node in calls:\n        if node.func.attr == \"append\":\n            appendList.append(node)\n    return appendList\ndef missing_append_in_iteration():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        if len(find_append_in(loop)):\n            return False\n    explain(\"You must construct a list by appending values one at a time to the list.\")\n    return True\ndef not_append_to_list():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        append_nodes = find_append_in(loop)\n        for node in append_nodes:\n            listNode = node.func.value\n            if listNode.data_type != \"List\":\n                explain(\"Values can only be appended to a list. The property name(%s) is either not initialized or is confused with another property.\" %(listNode.id))\ndef  append_list_not_initialized():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    loop_appends = []\n    for loop in for_loops:\n        loop_appends.extend(find_append_in(loop));\n    assignments = ast.find_all(\"Assign\")\n    for append_call in loop_appends:\n        append_loc = append_call.lineno\n        append_var = append_call.func.value\n        found_init = False\n        for assignment in assignments:\n            if assignment.has(append_var) and assignment.lineno < append_loc:\n                found_init = True\n                break\n        if found_init == False:\n            explain(\"The list property name(%s) must be initialized.\" %(append_var.id))\n            return True\n    return False\n\ndef append_list_initiatization_wrong():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    loop_appends = []\n    for loop in for_loops:\n        loop_appends.extend(find_append_in(loop));\n    assignments = ast.find_all(\"Assign\")\n    for append_call in loop_appends:\n        append_loc = append_call.lineno\n        append_var = append_call.func.value\n        init_fail = False\n        for assignment in assignments:\n            if assignment.has(append_var) and assignment.lineno < append_loc:\n                if assignment.value.ast_name == \"List\":\n                    if len(elts) != 0:\n                        init_fail = True\n                else:#or if its not even a list\n                    init_fail = True\n            if init_fail:\n                explain(\"The list property name(%s) is not initialized correctly.\" %(append_var.id))\n                return\ndef append_list_wrong_slot():\n	ast = parse_program()\n	append_calls = find_append_in(ast)\n	for append_call in append_calls:\n		arg = append_call.args[0]\n		caller = append_call.func.value\n		if arg.ast_name == \"Name\":\n			if arg.data_type == \"List\":\n				explain(\"You should not append a list (%s) to %s.\" %(arg.id, caller.id))"
$INSTRUCTOR_MODULES_EXTENDED["instructor_filter.py"] = "from instructor_utility import *\n'''\nName: missing_if_in_for\nPattern:\nmissing\nfor <item> in ___ :\n    if …<item> … :\n\nFeedback: The arrangement of decision and iteration is not correct for the filter pattern.\n\n'''\ndef missing_if_in_for():\n	ast = parse_program()\n	loops = ast.find_all(\"For\")\n	for loop in loops:\n		iter_prop = loop.target\n		ifs = loop.find_all(\"If\")\n		for if_block in ifs:\n			if if_block.has(iter_prop):\n				return False\n	explain(\"The arrangement of decision and iteration is not correct for the filter pattern.\")\n	return True\n'''\nName: append_not_in_if\nPattern:\nmissing\nif … :\n   ___.append(___)\n\nFeedback: Only items satisfying some condition should be appended to the list.\n\n'''\ndef append_not_in_if():\n	ast = parse_program()\n	ifs = ast.find_all(\"If\")\n	for if_block in ifs:\n		calls = if_block.find_all(\"Call\")\n		for node in calls:\n        	if node.func.attr == \"append\":\n            	return False\n    explain(\"Only items satisfying some condition should be appended to the list.\")\n    return True"
$INSTRUCTOR_MODULES_EXTENDED["instructor_histogram.py"] = "from instructor_utility import *\n'''\nName: histogram_missing\nPattern:\n\nMissing\n   plt.hist(___)\n\nFeedback: The program should display a histogram.\n\n'''\ndef histogram_missing():\n	ast = parse_program()\n	calls = ast.find_all(\"Call\")\n	plotting = False\n	for call in calls:\n		if call.func.attr == \"hist\" and call.func.value.id == \"plt\":\n			plotting = True\n			break\n	if plotting == False:\n		explain(\"The program should display a histogram.\")\n	return not plotting\n'''\nName: plot_show_missing\nPattern:\nMissing\n   plt.show()\n\nFeedback: The plot must be explicitly shown to appear in the Printer area.\n'''\ndef plot_show_missing():\n	ast = parse_program()\n	calls = ast.find_all(\"Call\")\n	plotting = False\n	for call in calls:\n		if call.func.attr == \"show\" and call.func.value.id == \"plt\":\n			plotting = True\n			break\n	if plotting == False:\n		explain(\"The plot must be explicitly shown to appear in the Printer area.\")\n	return not plotting\n'''\nName: histogram_argument_not_list\nPattern:\n   plt.hist(<argument>)\nWhere type(<argument>) is not “list”\n\nFeedback: Making a histogram requires a list; <argument> is not a list.\n\n'''\ndef histogram_argument_not_list():\n	ast = parse_program()\n	calls = ast.find_all(\"Call\")\n	arg_name = \"\"\n	for call in calls:\n		if call.func.attr == \"hist\" and call.func.value.id == \"plt\":\n			arg = call.args[0]\n			if arg != None and not (arg.data_type == \"List\" or arg.ast_name == \"List\"):\n				arg_name = arg.id\n				break\n	if arg_name != \"\":\n		explain(\"Making a histogram requires a list; %s is not a list.\" %(arg_name))\n	return arg_name != \"\"\n'''\nName: histogram_wrong_list\nPattern:\n\nfor ___ in ___:\n   <target>.append(___)\nplt.hist(<list>)\n\nwhere name(<target>) != name(<list>)\n\nFeedback: The list created in the iteration is not the list being used to create the histogram.\n\n'''\n\ndef histogram_wrong_list():\n	ast = parse_program()\n	loops = ast.find_all(\"For\")\n	append_targets = []\n	for loop in loops:\n		calls = loop.find_all(\"Call\")\n		for call in calls:\n			if call.func.attr == \"append\":\n				append_targets.append(call.func.value)\n	all_proper_plot = True\n	#should probably actually check for the location of plt.hist\n	calls = ast.find_all(\"Call\")\n	for call in calls:\n		if call.func.attr == \"hist\" and call.func.value.id == \"plt\":\n			arg = call.args[0]\n			proper_plot = False\n			if arg.ast_name == \"Name\":\n				for name in append_targets:\n					if name.id == arg.id:\n						proper_plot = True\n						break\n				if not proper_plot:\n					all_proper_plot = False\n					break\n			else:\n				all_proper_plot = False\n				break\n	if not all_proper_plot:\n		explain(\"The list created in the iteration is not the list being used to create the histogram.\")\n	return not all_proper_plot"
$INSTRUCTOR_MODULES_EXTENDED["instructor_iteration.py"] = "from instructor import *\ndef all_for_loops():\n    ast = parse_program()\n    return ast.find_all(\"For\")\n#this conflics with list_repeated_in_for\ndef wrong_target_is_list():\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        iter_prop = loop.target\n        if iter_prop.ast_name == \"Name\" and iter_prop.data_type == \"List\":\n            explain('The property %s is not correctly placed in the \"for\" block.' % (iter_prop.id))\n    return False\n#this conflics with list_in_wrong_slot_in_for\ndef wrong_list_repeated_in_for():\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        iter_prop = loop.target\n        list_prop = loop.iter\n        if iter_prop.ast_name == \"Name\" and list_prop.ast_name == \"Name\" and iter_prop.id == list_prop.id and iter_prop.data_type == \"List\":\n            explain('The %s property can only appear once in the \"for\" block' % (list_prop.id))\n    return False\n#this isn't consistent with the pattern you wrote\ndef missing_iterator_initialization():\n    ast = parse_program()\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        list_prop = loop.iter\n        if list_prop.data_type != \"List\" or def_use_error(list_prop):\n            #compliment(\"Made a list initialization\")\n            explain(\"The property %s is in the list slot of the iteration but is not a list.\" %(list_prop.id))\n            return True\n    return False\n#TODO: We need to cover the different cases for these\ndef wrong_iterator_not_list():\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        list_prop = loop.iter\n        if list_prop.ast_name != \"List\" and list_prop.data_type != \"List\" and list_prop.id != \"___\":\n            if list_prop.ast_name == \"Name\":\n                explain(\"The property name(%s) has been set to something that is not a list but is placed in the iteration block that must be a list.\" % (list_prop.id))\n                return True\n    return False\ndef missing_target_slot_empty():\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        iter_prop = loop.target\n        if iter_prop.id == \"___\":\n            explain(\"You must fill in the empty slot in the iteration.\")\n            return True\n    return False\ndef list_not_initialized_on_run():\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        list_prop = loop.iter\n        if list_prop.data_type == None:\n            explain(\"The list in your for loop has not been initialized\")\ndef list_initialization_misplaced():\n    for_loops = all_for_loops()\n    for loop in for_loops:\n        list_prop = loop.iter\n        if list_prop.data_type == \"List\" and def_use_error(list_prop):\n            explain(\"Initialization is a list but either wrong place or redefined\")\ndef missing_for_slot_empty():\n    for_loops = all_for_loops()\n    is_missing = False\n    for loop in for_loops:\n        list_prop = loop.iter\n        iter_prop = loop.target\n        if list_prop.ast_name == \"Name\" and list_prop.id == \"___\":\n            is_missing = True\n            break\n        if iter_prop.ast_name == \"Name\" and iter_prop.id == \"___\":\n            is_missing = True\n            break\n    if is_missing:\n        explain(\"You must fill in the empty slot in the iteration.\")\n"
$INSTRUCTOR_MODULES_EXTENDED["instructor_printing.py"] = "from instructor import *\nfrom instructor_utility import *\n\ndef ensure_prints(count):\n    prints = find_function_calls('print')\n    if not prints:\n        gently(\"You are not using the print command!\")\n        return False\n    elif len(prints) > count:\n        gently(\"You are printing too many times!\")\n        return False\n    elif len(prints) < count:\n        gently(\"You are not printing enough things!\")\n        return False\n    else:\n        for a_print in prints:\n            if not is_top_level(a_print):\n                gently(\"You have a print statement that is not at the top level. That is incorrect!\")\n                return False\n    return prints\n"
$INSTRUCTOR_MODULES_EXTENDED["instructor_utility.py"] = "from instructor import *\n\ndef is_top_level(ast_node):\n    ast = parse_program()\n    for element in ast.body:\n        if element.ast_name == 'Expr':\n            if element.value == ast_node:\n                return True\n        elif element == ast_node:\n            return True\n    return False\n\ndef find_function_calls(name):\n    ast = parse_program()\n    all_calls = ast.find_all('Call')\n    calls = []\n    for a_call in all_calls:\n        if a_call.func.ast_name == 'Attribute':\n            if a_call.func.attr == name:\n                calls.append(a_call)\n        elif a_call.func.ast_name == 'Name':\n            if a_call.func.id == name:\n                calls.append(a_call)\n    return calls\n\ndef function_is_called(name):\n    return len(find_function_calls(name))\n    \ndef no_nonlist_nums():\n    pass\n    \ndef only_printing_variables():\n    ast = parse_program()\n    all_calls = ast.find_all('Call')\n    count = 0\n    for a_call in all_calls:\n        if a_call.func.ast_name == 'Name' and a_call.func.id == \"print\":\n            for arg in a_call.args:\n                if arg.ast_name != \"Name\":\n                    return False\n    return True\n\ndef find_prior_initializations(node):\n    if node.ast_name != \"Name\":\n        return None\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    cur_line_no = node.lineno\n    all_assignments = []\n    for assignment in assignments:\n        if assignment.has(node):\n            if assignment.lineno < cur_line_no:\n                all_assignments.append(assignment)\n    return all_assignments\n\n'''\n    \n    mod.no_nonlist_nums = new Sk.builtin.func(function(source) {\n        Sk.builtin.pyCheckArgs(\"no_nonlist_nums\", arguments, 1, 1);\n        Sk.builtin.pyCheckType(\"source\", \"string\", Sk.builtin.checkString(source));\n        \n        source = source.v;\n        \n        var num_list = getNonListNums(source);\n        \n        var count = 0;\n        for (var i = 0, len = num_list.length; i < len; i = i+1) {\n            if (num_list[i].v != 0 && num_list[i].v != 1) {\n                return Sk.ffi.remapToPy(true);\n            }\n        }\n        return Sk.ffi.remapToPy(false);\n    });\n\n\n    \n    /**\n     * Given source code as a string, return a list of all of the AST elements\n     * that are Num (aka numeric literals) but that are not inside List elements.\n     *\n     * @param {String} source - Python source code.\n     * @returns {Array.number} The list of JavaScript numeric literals that were found.\n     */\n    function getNonListNums(source) {\n        if (!(source in parses)) {\n            var parse = Sk.parse(\"__main__\", source);\n            parses[source] = Sk.astFromParse(parse.cst, \"__main__\", parse.flags);\n        }\n        var ast = parses[source];\n        var visitor = new NodeVisitor();\n        var insideList = false;\n        var nums = [];\n        visitor.visit_List = function(node) {\n            insideList = true;\n            this.generic_visit(node);\n            insideList = false;\n        }\n        visitor.visit_Num = function(node) {\n            if (!insideList) {\n                nums.push(node.n);\n            }\n            this.generic_visit(node);\n        }\n        visitor.visit(ast);\n        return nums;\n    }\n    \n    \n '''"
$INSTRUCTOR_MODULES_EXTENDED["iteration_context.py"] = "from instructor_utility import *\n#################8.2 Start#######################\ndef list_length_3_or_more():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    for assignment in assignments:\n        right = assignment.value\n        left = assignment.targets\n        if right.ast_name == \"List\" and left.ast_name == \"Name\":\n            if len(right.elts) < 3:\n                explain(\"You must have at least three pieces\")\ndef missing_list_initialization_8_2():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    isMissing = True\n    for assignment in assignments:\n        right = assignment.value\n        left = assignment.target\n        if left.id == \"shopping_cart\":\n            if right.ast_name == \"List\":\n                isMissing = False\n                break\n    if isMissing:\n        explain(\"You must set the property shopping_cart to a list containing the prices of items in the shopping cart.\")\n#################8.2 End#######################\n#################8.3 Start#######################\ndef wrong_list_initialization_placement_8_3():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    is_placed_wrong = True\n    lineno = None\n    for assignment in assignments:\n        right = assignment.value\n        left = assignment.target\n        if left.id == \"episode_length_list\":\n            lineno = left.lineno\n    loops = ast.find_all(\"For\")\n    for loop in loops:\n        if loop.lineno > lineno:\n            is_placed_wrong = False\n    if is_placed_wrong:\n        explain(\"The list of episode lengths (episode_length_list) must be initialized before the iteration which uses this list.\")\n    return True\ndef wrong_accumulator_initialization_placement_8_3():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    is_placed_wrong = True\n    lineno = None\n    for assignment in assignments:\n        right = assignment.value\n        left = assignment.target\n        if left.id == \"sum_length\":\n            lineno = left.lineno\n    loops = ast.find_all(\"For\")\n    for loop in loops:\n        if loop.lineno > lineno:\n            is_placed_wrong = False\n    if is_placed_wrong:\n        explain(\"The property to hold the sum of the episode lengths (sum_length) must be initialized before the iteration which uses this property.\")\n    return is_placed_wrong \ndef wrong_print_8_3():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    has_for = len(for_loops) > 0\n    for_loc = []\n    wrong_print_placement = True\n    for loop in for_loops:\n        for_loc.append(loop.next_tree.lineno)\n    calls = ast.find_all(\"Call\")\n    for call in calls:\n        if call.func.id == \"print\":\n            for loc in for_loc:\n                if call.lineno >= loc.lineno:\n                    wrong_print_placement = False\n                    break\n            if not wrong_print_placement:\n                break\n    if wrong_print_placement:\n        explain(\"The output of the total length of time is not in the correct place. The total length of time should be output only once after the total length of time has been computed.\")\n\n#################8.3 End#######################\n#################8.4 Start#######################\ndef missing_target_slot_empty_8_4():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        iter_prop = loop.target\n        if iter_prop.id == \"___\":\n            explain(\"You must fill in the empty slot in the iteration.\")\n            return False\n    return True\ndef missing_addition_slot_empty_8_4():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    for assignment in assignments:\n        left = assignment.target\n        right = assignment.value\n        if left.id == \"sum_pages\":\n            binOp = right.find_all(\"BinOp\")\n            if len(binOp) == 1:\n                binOp = binOp[0]\n                if binOp.op == \"Add\":\n                    if binOp.left.ast_name == \"Name\" and binOp.right.ast_name == \"Name\":\n                        if binOp.has(left):\n                            if binOp.left.id == \"___\" or binOp.right.id == \"___\":\n                                explain(\"You must fill in the empty slot in the addition.\")\n                                return True\n    return False\ndef wrong_names_not_agree_8_4():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        iter_prop = loop.target\n        list_prop = loop.iter\n        if list_prop.ast_name == \"Name\" and iter_prop.ast_name == \"Name\":\n            assignments = loop.find_all(\"Assign\")\n            for assignment in assignments:\n                binops = assignment.find_all(\"BinOp\")\n                if len(binops) > 0:\n                    lhs = assignment.targets\n                    if lhs.ast_name == \"Name\" and lhs.id == \"sum_pages\":\n                        for binop in binops:\n                            if binop.has(lhs) and binop == \"Add\":\n                                if not binop.has(iter_prop):\n                                    explain(\"Each value of name(%s) must be added to %s.\" %(iter_prop.id, lhs.id))\n                                    return True\n    return False\n#################8.4 End#######################\ndef wrong_should_be_counting():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            binops = assignment.find_all(\"BinOp\")\n            if len(binops) > 0:\n                lhs = assignment.targets\n                for binop in binops:\n                    if binop.has(lhs) and binop.op == \"Add\":\n                        explain(\"This problem asks for the number of items in the list not the total of all the values in the list.\")\ndef wrong_should_be_summing():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            binops = assignment.find_all(\"BinOp\")\n            for binop in binops:\n                if binop.has(1) and binop.op == \"Add\":\n                    explain(\"This problem asks for the total of all the values in the list not the number of items in the list.\")\ndef wrong_cannot_sum_list():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        list_prop = loop.iter\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            binops = assignment.find_all(\"BinOp\")\n            for binop in binops:\n                if binop.has(list_prop) and binop.op == \"Add\":\n                    explain(\"Addition can only be done with a single value at a time, not with an entire list at one time.\")\ndef missing_no_print():\n    prints = find_function_calls('print')\n    if not prints:\n        explain(\"Program does not output anything.\")\ndef missing_counting_list():\n    ast = parse_program()\n    has_count = False\n    for_loops = ast.find_all(\"For\")\n    if len(for_loops) > 0:\n        for loop in for_loops:\n            assignments = loop.find_all(\"Assign\")\n            if len(assignments) < 1:\n                continue\n            for assignment in assignments:\n                binops = assignment.find_all(\"BinOp\")\n                if len(binops) < 1:\n                    continue\n                lhs = assignment.targets\n                for binop in binops:\n                    if binop.has(lhs) and binop.has(1) and binop.op == \"Add\":\n                        has_count = True\n    if not has_count:\n        explain(\"Need to find the total number of items in the list.\")\ndef missing_summing_list():\n    ast = parse_program()\n    has_total = False\n    for_loops = ast.find_all(\"For\")\n    if len(for_loops) > 0:\n        for loop in for_loops:\n            assignments = loop.find_all(\"Assign\")\n            if len(assignments) < 1:\n                continue\n            iter_prop = loop.target\n            for assignment in assignments:\n                binops = assignment.find_all(\"BinOp\")\n                if len(binops) < 1:\n                    continue\n                lhs = assignment.targets\n                for binop in binops:\n                    if binop.has(lhs) and binop.has(iter_prop) and binop.op == \"Add\":\n                        has_total = True\n    if not has_total:\n        explain(\"Need to find the total of all list elements.\")\ndef missing_zero_initialization():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    accumulator = None\n    loop_acu = None\n    for loop in for_loops:\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            binops = assignment.find_all(\"BinOp\")\n            if len(binops) > 0:\n                lhs = assignment.targets\n                for binop in binops:\n                    if binop.has(lhs) and binop.op == \"Add\":\n                        accumulator = lhs\n                        loop_acu = loop\n    accu_init = False\n    if accumulator != None:\n        assignments = ast.find_all(\"Assign\")\n        for assignment in assignments:\n            if loop_acu.lineno > assignment.lineno:\n                lhs = assignment.targets\n                if lhs.id == accumulator.id and assignment.has(0):\n                    accu_init = True\n                    break\n    if accu_init == False and accumulator != None:\n        explain(\"The property <b>%s</b> does not have an initial value. The addition on the first iteration step is not correct because the property <b>%s</b> does not have an initial value.\" %(accumulator.id,accumulator.id))\n        return False\n    return True\ndef missing_average():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    has_for = len(for_loops) > 0\n    has_average = False\n    for_loc = []\n    for loop in for_loops:\n        for_loc.append(loop.next_tree.lineno)\n    if has_for:\n        assignments = ast.find_all(\"Assign\")\n        if len(assignments) > 0:\n            for assignment in assignments:\n                binops = assignment.find_all(\"BinOp\")\n                lhs = assignment.targets\n                if len(binops) != 1:\n                    continue\n                binop = binops[0]\n                if binop.op != \"Div\":\n                    continue\n                is_after = False\n                for lineno in for_loc:\n                    if lineno <= binop.lineno:\n                        is_after = True\n                        break\n                if not is_after:\n                    break\n                right = binop.right\n                left = binop.left\n                if right.ast_name == \"Name\" and left.ast_name == \"Name\":\n                    if right.id != left.id and right.id != lhs.id and left.id != lhs.id:\n                        has_average = True\n                        break\n    if not has_average:\n        explain(\"An average value is not computed\")\ndef average_in_iteration():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    for loop in for_loops:\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            binops = assignment.find_all(\"BinOp\")\n            for binop in binops:\n                if binop.op == \"Div\":\n                    assName = assignment.targets\n                    numerator = binop.left\n                    denominator = binop.right\n                    if numerator.ast_name == \"Name\" and denominator.ast_name == \"Name\":\n                        explain(\"An average value is best computed after the properties name %s(total) and name(%s) are completely known rather than recomputing the average on each iteration.\" %(numerator.id,denominator.id))\ndef wrong_average_demoninator():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    count_vars = []\n    loc_array = []\n    for loop in for_loops:\n        iter_prop = loop.target\n        loc = loop.next_tree.lineno\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            if assignment.has(1):\n                ass_left = assignment.targets\n                ass_right = assignment.value\n                if ass_right.ast_name == \"BinOp\" and ass_right.op == \"Add\":\n                    if ass_right.has(ass_left):\n                        count_vars.append(ass_left)\n                        loc_array.append(loc)\n    assignments = ast.find_all(\"Assign\")\n    denominator_wrong = False\n    for assignment in assignments:\n        index = 0\n        for loc in loc_array:\n            if assignment.lineno >= loc and assignment.value.ast_name == \"BinOp\":\n                ass_left = assignment.targets\n                binop = assignment.value\n                if binop.op == \"Div\" and not binop.has(ass_left):\n                    numerator = assignment.value.left\n                    denominator = assignment.value.right\n                    if numerator.id != denominator.id and denominator.id != count_vars[index].id:\n                        denominator_wrong = True\n            if denominator_wrong:\n                break\n            index = index + 1\n        if denominator_wrong:\n            break\n    if denominator_wrong:\n        explain(\"The average is not calculated correctly.\")\n    return numerator_wrong\ndef wrong_average_numerator():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    total_vars = []\n    loc_array = []\n    for loop in for_loops:\n        iter_prop = loop.target\n        loc = loop.next_tree.lineno\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            if assignment.has(iter_prop):\n                ass_left = assignment.targets\n                ass_right = assignment.value\n                if ass_right.ast_name == \"BinOp\" and ass_right.op == \"Add\":\n                    if ass_right.has(ass_left):\n                        total_vars.append(ass_left)\n                        loc_array.append(loc)\n    assignments = ast.find_all(\"Assign\")\n    numerator_wrong = False\n    for assignment in assignments:\n        index = 0\n        for loc in loc_array:\n            if assignment.lineno >= loc and assignment.value.ast_name == \"BinOp\":\n                ass_left = assignment.targets\n                binop = assignment.value\n                if binop.op == \"Div\" and not binop.has(ass_left):\n                    numerator = assignment.value.left\n                    denominator = assignment.value.right\n                    if numerator.id != denominator.id and numerator.id != total_vars[index].id:\n                        numerator_wrong = True\n            if numerator_wrong:\n                break\n            index = index + 1\n        if numerator_wrong:\n            break\n    if numerator_wrong:\n        explain(\"The average is not calculated correctly.\")\n    return numerator_wrong\ndef wrong_compare_list():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    is_comparing_list = False\n    offending_list = \"\"\n    for loop in for_loops:\n        list_prop = loop.iter\n        ifs = ast.find_all(\"If\")\n        for if_block in ifs:\n            if if_block.test.has(list_prop):\n                is_comparing_list = True\n                offending_list = list_prop.id\n                break\n        if is_comparing_list:\n            break\n    if is_comparing_list:\n        explain(\"Each item in the list name(%s) must be compared one item at a time.\" %(offending_list))\n    return is_comparing_list\ndef wrong_for_inside_if():\n    ast = parse_program()\n    if_blocks = ast.find_all(\"If\")\n    if_inside_for = False\n    for if_block in if_blocks:\n        loops = if_block.find_all(\"For\")\n        if len(loops) > 0:\n            if_inside_for = True\n            break\n    if if_inside_for:\n        explain(\"The iteration should not be inside the decision block.\")\n    return if_inside_for\ndef wrong_converstion_problem_10_5():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    is_wrong_conversion = True\n    for loop in loops:\n        iter_prop = loop.target\n        binops = loop.find_all(\"BinOp\")\n        for binop in binops:\n            if binop.op == \"Mult\" and binop.has(iter_prop) and binop.has(0.62):\n                is_wrong_conversion = False\n                break\n        if not is_wrong_conversion:\n            break\n    if is_wrong_conversion:\n        explain(\"The conversion from kilometers to miles is not correct.\")\ndef wrong_list_initialization_9_1():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    has_call = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_list\":\n            call = assignment.find_all(\"Call\")\n            if len(call) == 1:\n                args = call.args\n                if len(args) == 3:\n                    if args[0] == \"Precipitation\" and args[1] == \"Location\" and args[2] == \"Blacksburg, VA\":\n                        has_call = True\n                        break\n    if not has_call:\n        explain(\"The list of rainfall amounts (rainfall_list) is not initialized properly.\")\n    return not has_call\ndef wrong_accumulator_initialization_9_1():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    has_assignment = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_sum\" and assignment.value.ast_name == \"Num\":\n            if assignment.value.n == 0:\n                has_assignment = True\n                break\n    if not has_assignment:\n        explain(\"The property to hold the total value of the rainfall amounts (rainfall_sum) is not initialized properly.\")\n    return not has_assignment\ndef wrong_accumulation_9_1():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    has_assignment = False\n    for assignment in assignments:\n        target = assignment.targets\n        if target.id == \"rainfall_sum\":\n            if assignment.value.ast_name == \"BinOp\":\n                binop = assignment.value\n                if binop.op == \"Add\":\n                    left = binop.left\n                    right = binop.right\n                    if (left.id == \"rainfall_sum\" or right.id == \"rainfall_sum\") and (left.id == \"rainfall\" or right.id == \"rainfall\"):\n                        has_assignment = True\n                        break\n    if not has_assignment:\n        explain(\"The addition of each rainfall amount to rainfall_sum is not correct.\")\n    return not has_assignment\ndef wrong_list_initialization_placement_9_1():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    loops = ast.find_all(\"For\")\n    list_init = None\n    init_after_loop = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_list\":\n            list_init = assignment\n            break\n    for loop in loops:\n        if loop.lineno > list_init.lineno:\n            init_after_loop = True\n            break\n    if list_init == None or not init_after_loop:\n        explain(\"The list of rainfall amount (rainfall_list) must be initialized before the iteration that uses this list.\")\ndef wrong_accumulator_initialization_placement_9_1():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    loops = ast.find_all(\"For\")\n    list_init = None\n    init_after_loop = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_sum\":\n            list_init = assignment\n            break\n    for loop in loops:\n        if loop.lineno > list_init.lineno:\n            init_after_loop = True\n            break\n    if list_init == None or not init_after_loop:\n        explain(\"The property for the sum of all the rainfall amounts (rainfall_sum) must be initialized before the iteration which uses this property.\")\ndef wrong_iteration_body_9_1():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    assignment_in_for = False\n    for loop in loops:\n        assignments = loop.find_all(\"Assign\")\n        for assignment in assignments:\n            if assignment.targets.id == \"rainfall_sum\":\n                assignment_in_for = True\n                break\n        if assignment_in_for:\n            break\n    if not assignment_in_for:\n        explain(\"The addition of each rainfall amount to the total rainfall is not in the correct place.\")\ndef wrong_print_9_1():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    has_for = len(for_loops) > 0\n    for_loc = []\n    wrong_print_placement = True\n    for loop in for_loops:\n        for_loc.append(loop.next_tree.lineno)\n    calls = ast.find_all(\"Call\")\n    for call in calls:\n        if call.func.id == \"print\":\n            for loc in for_loc:\n                if call.lineno >= loc.lineno:\n                    wrong_print_placement = False\n                    break\n            if not wrong_print_placement:\n                break\n    if wrong_print_placement:\n        explain(\"The output of the total rainfall amount is not in the correct place. The total rainfall should be output only once after the total rainfall has been computed.\")\ndef wrong_list_initialization_9_2():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    has_call = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_list\":\n            call = assignment.find_all(\"Call\")\n            if len(call) == 1:\n                args = call.args\n                if len(args) == 3:\n                    if args[0] == \"Precipitation\" and args[1] == \"Location\" and args[2] == \"Blacksburg, VA\":\n                        has_call = True\n                        break\n    if not has_call:\n        explain(\"The list of rainfall amounts (rainfall_list) is not initialized properly.\")\n    return not has_call\ndef wrong_accumulator_initialization_9_2():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    has_assignment = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_count\" and assignment.value.ast_name == \"Num\":\n            if assignment.value.n == 0:\n                has_assignment = True\n                break\n    if not has_assignment:\n        explain(\"The property to hold the total value of the rainfall amounts (rainfall_count) is not initialized properly.\")\n    return not has_assignment\ndef wrong_accumulation_9_2():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    has_assignment = False\n    for assignment in assignments:\n        target = assignment.targets\n        if target.id == \"rainfall_count\":\n            if assignment.value.ast_name == \"BinOp\":\n                binop = assignment.value\n                if binop.op == \"Add\":\n                    left = binop.left\n                    right = binop.right\n                    if (left.id == \"rainfall_count\" or right.id == \"rainfall_count\") and (left.ast_name == \"Num\" or right.ast_name == \"Num\"):\n                        if left.ast_name == \"Num\":\n                            num_node = left\n                        else:\n                            num_node = right\n                        if num_node.n == 1:\n                            has_assignment = True\n                        break\n    if not has_assignment:\n        explain(\"The adding of another day with rainfall to the total count of days with rainfall (rainfall_count) is not correct.\")\n    return not has_assignment\ndef wrong_list_initialization_placement_9_2():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    loops = ast.find_all(\"For\")\n    list_init = None\n    init_after_loop = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_list\":\n            list_init = assignment\n            break\n    for loop in loops:\n        if loop.lineno > list_init.lineno:\n            init_after_loop = True\n            break\n    if list_init == None or not init_after_loop:\n        explain(\"The list of rainfall amount (rainfall_list) must be initialized before the iteration that uses this list.\")\ndef wrong_accumulator_initialization_placement_9_2():\n    ast = parse_program()\n    assignments = ast.find_all(\"Assign\")\n    loops = ast.find_all(\"For\")\n    list_init = None\n    init_after_loop = False\n    for assignment in assignments:\n        if assignment.targets.id == \"rainfall_count\":\n            list_init = assignment\n            break\n    for loop in loops:\n        if loop.lineno > list_init.lineno:\n            init_after_loop = True\n            break\n    if list_init == None or not init_after_loop:\n        explain(\"The property for the count of the number of days having rain (rainfall_count) must be initialized before the iteration which uses this property.\")\ndef wrong_iteration_body_9_2():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    correct_if = False\n    for loop in loops:\n        if_blocks = loop.find_all(\"If\")\n        for if_block in if_blocks:\n            test = if_block.test\n            if test.numeric_logic_check(1, \"var > 0\"):\n                correct_if = True\n                break\n        if correct_if:\n            break\n    if not correct_if:\n        explain(\"The test (if) to determine if a given amount of rainfall is greater than (>) zero is not in the correct place.\")\n    return not correct_if\ndef wrong_decision_body_9_2():\n    ast = parse_program()\n    if_blocks = ast.find_all(\"If\")\n    assignment_in_if = False\n    for if_block in if_blocks:\n        test = if_block.test\n        if test.numeric_logic_check(1, \"var > 0\"):\n            assignments = if_block.find_all(\"Assign\")\n            for assignment in assignments:\n                if assignment.targets.id == \"rainfall_count\":\n                    if assignment.value.ast_name == \"BinOp\":\n                        binop = assignment.value\n                        if binop.has(1) and binop.has(assignment.targets):\n                            assignment_in_if = True\n                            break\n        if assignment_in_if:\n            break\n    if not assignment_in_if:\n        explain(\"The increase by 1 in the number of days having rainfall (rainfall_count) is not in the correct place.\")\ndef wrong_print_9_2():\n    ast = parse_program()\n    for_loops = ast.find_all(\"For\")\n    has_for = len(for_loops) > 0\n    for_loc = []\n    wrong_print_placement = True\n    for loop in for_loops:\n        for_loc.append(loop.next_tree.lineno)\n    calls = ast.find_all(\"Call\")\n    for call in calls:\n        if call.func.id == \"print\":\n            for loc in for_loc:\n                if call.lineno >= loc.lineno:\n                    wrong_print_placement = False\n                    break\n            if not wrong_print_placement:\n                break\n    if wrong_print_placement:\n        explain(\"The output of the total number of days with rainfall is not in the correct place. The total number of days should be output only once after the total number of days has been computed.\")\n    return wrong_print_placement\ndef wrong_filter_condition_10_3():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    correct_if = False\n    for loop in loops:\n        if_blocks = loop.find_all(\"If\")\n        for if_block in if_blocks:\n            test = if_block.test\n            if test.numeric_logic_check(1, \"var > 0\") or test.numeric_logic_check(1, \"var != 0\"):\n                correct_if = True\n                break\n    if not correct_if:\n        explain(\"The condition used to filter the year when artists died is not correct.\")\n    return not correct_if\ndef wrong_and_filter_condition_10_4():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    correct_if = False\n    for loop in loops:\n        if_blocks = loop.find_all(\"If\")\n        for if_block in if_blocks:\n            test = if_block.test\n            if test.numeric_logic_check(1, \"32 <= temp && temp <= 50\"):\n                correct_if = True\n                break\n    if not correct_if:\n        explain(\"The condition used to filter the temperatures into the specified range of temperatures is not correct.\")\n    return not correct_if\ndef wrong_nested_filter_condition_10_4():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    correct_if = False\n    for loop in loops:\n        if_blocks = loop.find_all(\"If\")\n        for if_block in if_blocks:\n            test1 = if_block.test\n            if_blocks2 = if_block.find_all(\"If\")\n            for if_block2 in if_blocks2:\n                test2 = if_block2.test\n                if test1.numeric_logic_check(1, \"32 <= temp\") and test2.numeric_logic_check(1,\"temp <= 50\"):\n                    correct_if = True\n                    break\n                elif test2.numeric_logic_check(1, \"32 <= temp\") and test1.numeric_logic_check(1,\"temp <= 50\"):\n                    correct_if = True\n                    break\n    if not correct_if:\n        explain(\"The decisions used to filter the temperatures into the specified range of temperatures is not correct.\")\n    return not correct_if\ndef wrong_append_10_5():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    correct_append = False\n    for loop in loops:\n        assignments = loop.find_all(\"Assign\")\n        if_blocks = loop.find_all(\"If\")\n        for assignment in assignments:\n            for if_block in if_blocks:\n                if assignment.lineno > if_block.lineno:\n                    break\n                appendList = []\n                calls = if_block.find_all(\"Call\")\n                for node in calls:\n                    if node.func.attr == \"append\":\n                        appendList.append(node)\n                for append in appendList:\n                    if append.args[0].id == assignment.targets.id:\n                        correct_append = True\n                if correct_append:\n                    break\n            if correct_append:\n                break\n        if correct_append:\n            break\n    if not correct_append:\n        explain(\"The earthquake depth appended to the list is not correct\")\n    return not correct_append\ndef wrong_debug_10_6():\n    ast = parse_program()\n    loops = ast.find_all(\"For\")\n    appendList = []\n    calls = if_block.find_all(\"Call\")\n    for node in calls:\n        if node.func.attr == \"append\":\n            appendList.append(node)\n    #cheating because using length of 1\n    if loops[0] == None or calls[0] == None or loops[0].iter.id != \"quakes\" or calls[0].value.id != \"quakes_in_miles\":\n        explain(\"This is not one of the two changes needed. Undo the change and try again.\")\ndef wrong_debug_10_7():\n    ast = parse_program()\n    if_blocks = ast.find_all(\"If\")\n    if len(if_blocks) > 1 or if_blocks[0].test.left.id != \"book\":\n        explain(\"This is not the change needed. Undo the change and try again.\")\n"

/**
 * Skulpt Module for holding the Instructor API.
 *
 * This module is loaded in by getting the functions' source code from toString.
 * Isn't that crazy?
 *
 * @param {String} name - The name of the module (should always be 'instructor')
 *
 */
var $sk_mod_instructor = function(name) {
    // Main module object that gets returned at the end.
    var mod = {};
    
    /**
     * Skulpt Exception that forces the program to exit, but gracefully.
     * 
     * @param {Array} args - A list of optional arguments to pass to the Exception.
     *                       Usually this will include a message for the user.
     */
    Sk.builtin.GracefulExit = function (args) {
        var o;
        if (!(this instanceof Sk.builtin.GracefulExit)) {
            o = Object.create(Sk.builtin.GracefulExit.prototype);
            o.constructor.apply(o, arguments);
            return o;
        }
        Sk.builtin.Exception.apply(this, arguments);
    };
    Sk.abstr.setUpInheritance("GracefulExit", Sk.builtin.GracefulExit, Sk.builtin.Exception);
    
    /**
     * Give complimentary feedback to the user
     */
    mod.compliment = new Sk.builtin.func(function(message) {
        Sk.builtin.pyCheckArgs("compliment", arguments, 1, 1);
        Sk.builtin.pyCheckType("message", "string", Sk.builtin.checkString(message));
        
        Sk.executionReports.instructor.compliments.push(Sk.ffi.remapToJs(message));
    });
    /**
     * Mark problem as completed
     */
    mod.set_success = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("set_success", arguments, 0, 0);
        Sk.executionReports.instructor.complete = true;
        throw new Sk.builtin.GracefulExit();
    });
    /**
     * Let user know about an issue
     */
    mod.explain = new Sk.builtin.func(function(message, priority, line) {
        Sk.builtin.pyCheckArgs("explain", arguments, 1, 3);
        Sk.builtin.pyCheckType("message", "string", Sk.builtin.checkString(message));
        if (priority != undefined){
            Sk.builtin.pyCheckType("priority", "string", Sk.builtin.checkString(priority));
            priority = Sk.ffi.remapToJs(priority);
        } else {
            priority = 'medium';
        }
        if (line !== undefined) {
            Sk.builtin.pyCheckType("line", "integer", Sk.builtin.checkInt(line));
        } else {
            line = null;
        }
        if (!Sk.executionReports.instructor.complaint){
            Sk.executionReports.instructor.complaint = [];
        }
        var newComplaint = {
            'name': 'Instructor Feedback',
            'message': Sk.ffi.remapToJs(message),
            'priority': priority,
            'line': line
        }
        Sk.executionReports.instructor.complaint.push(newComplaint);
    });
    
    mod.gently = new Sk.builtin.func(function(message, line) {
        return Sk.misceval.callsimOrSuspend(mod.explain, message, Sk.ffi.remapToPy('student'), line);
    });
    
    /**
     * Prevent a certain kind of error from percolating where type is the phase that's being suppressed and
     * subtype is a specific error in the report of that phase.
     */
    mod.suppress = new Sk.builtin.func(function(type, subtype) {
        Sk.builtin.pyCheckArgs("suppress", arguments, 1, 2);
        Sk.builtin.pyCheckType("type", "string", Sk.builtin.checkString(type));
        type = Sk.ffi.remapToJs(type);
        if (subtype !== undefined) {
            Sk.builtin.pyCheckType("subtype", "string", Sk.builtin.checkString(subtype));
            subtype = Sk.ffi.remapToJs(subtype);
            if (Sk.feedbackSuppressions[type] === false) {
                Sk.feedbackSuppressions[type] = {};
                Sk.feedbackSuppressions[type][subtype] = true;
            } else if (Sk.feedbackSuppressions[type] !== false) {
                Sk.feedbackSuppressions[type][subtype] = true;
            }
        } else {
            Sk.feedbackSuppressions[type] = true;
        }
    });
    
    /**
     * Logs feedback to javascript console
     */
    mod.log = new Sk.builtin.func(function(message) {
        Sk.builtin.pyCheckArgs("log", arguments, 1, 1);
        console.log(Sk.ffi.remapToJs(message));
    });
    
    // get_ast()
    // get_trace()
    // get_types()
    // get_types_raw()
    
    var create_logger = function(phase, report_item) {
        return new Sk.builtin.func(function() {
            Sk.builtin.pyCheckArgs('log_'+report_item, arguments, 0, 0);
            var report = Sk.executionReports[phase];
            if (report.success) {
                console.log(report[report_item]);
            } else {
                console.log('Execution phase "'+phase+'" failed, '+report_item+' could not be found.');
            }
        });
    };
    mod.log_ast = create_logger('parser', 'ast');
    mod.log_variables = create_logger('analyzer', 'variables');
    mod.log_behavior = create_logger('analyzer', 'behavior');
    mod.log_issues = create_logger('analyzer', 'issues');
    mod.log_trace = create_logger('analyzer', 'student');

    // Provides `student` as an object with all the data that the student declared.
    mod.StudentData = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self) {
            //self.data = Sk.builtin.dict();
            var newDict = Sk.builtin.dict();
            Sk.abstr.sattr(self, 'data', newDict, true);
            self.module = Sk.executionReports['student'].module;
            if (self.module !== undefined) {
                self.module = self.module.$d;
                for (var key in self.module) {
                    if (self.module.hasOwnProperty(key)) {
                        newDict.mp$ass_subscript(Sk.ffi.remapToPy(key), 
                                                 self.module[key]);
                    }
                }
            } else {
                self.module = {};
            }
        });
        $loc.get_names_by_type = new Sk.builtin.func(function(self, type, exclude_builtins) {
            Sk.builtin.pyCheckArgs("get_names_by_type", arguments, 2, 3);
            if (exclude_builtins === undefined) {
                exclude_builtins = true;
            } else {
                Sk.builtin.pyCheckType("exclude_builtins", "boolean", Sk.builtin.checkBool(exclude_builtins));
                exclude_builtins = Sk.ffi.remapToJs(exclude_builtins);
            }
            var result = [];
            for (var property in self.module) {
                if (self.module[property].tp$name == type.tp$name) {
                    console.log(exclude_builtins);
                    if (exclude_builtins && property.startsWith("__")) {
                        continue;
                    }
                    result.push(Sk.ffi.remapToPy(property));
                }
            }
            return Sk.builtin.list(result);
        });
    
        $loc.get_values_by_type = new Sk.builtin.func(function(self, type, exclude_builtins) {
            Sk.builtin.pyCheckArgs("get_values_by_type", arguments, 2, 3);
            if (exclude_builtins === undefined) {
                exclude_builtins = true;
            } else {
                Sk.builtin.pyCheckType("exclude_builtins", "boolean", Sk.builtin.checkBool(exclude_builtins));
                exclude_builtins = Sk.ffi.remapToJs(exclude_builtins);
            }
            var result = [];
            for (var property in self.module) {
                if (self.module[property].tp$name == type.tp$name) {
                    if (exclude_builtins && property.startsWith("__")) {
                        continue;
                    }
                    result.push(self.module[property]);
                }
            }
            return Sk.builtin.list(result);
        });
    });
    mod.student = Sk.misceval.callsimOrSuspend(mod.StudentData);
    
    //Enhanced feedback functions and objects starts here
    //variable used for easy reidentification of nodes so we don't have to recreate every node type
    var flatTree = [];
    //variable used for accumulating interrupting feedback AS A LIST OF PYTHON OBJECTS
    var accInterruptFeedback = [];
    //variable used for accumulating complementary feedback AS A LIST OF PYTHON OBJECTS
    var accCompFeedback = [];
    /**
     * Generates a flat ast tree and store it in the local variable.
     * This function is meant to be used to avoid extra coding by recreating every AST node type
     *
     **/
    function generateFlatTree(){
        var parser = Sk.executionReports['parser'];
        //Tree's already been built, don't do anything else
        if(flatTree.length > 0){
            return;
        }
        var ast;
        if (parser.success) {
            ast = parser.ast;
        } else {
            return;
        }
        var visitor = new NodeVisitor();
        visitor.visit = function(node){
            flatTree.push(node);
            /** Visit a node. **/
            var method_name = 'visit_' + node._astname;
            //console.log(flatTree.length - 1 + ": " + node._astname)
            if (method_name in this) {
                return this[method_name](node);
            } else {
                return this.generic_visit(node);
            }
        }
        visitor.visit(ast);
    }
    /**
     * This function checks if the given object is one of the Sk.builtin objects
     * TODO: make this so we don't have to explicitly put out every option
     *          one possible thing we could do is get a string version of the 
     *          of the constructor and look for the substring "return new Sk.builtin"
     *          But I don't know how reliable that is.  Rather, it's kind of hackish.
     * @param {object} obj - the object to be examined
     * @return {boolean} true if the object is one of the Sk.builtin types
    **/
    function isSkBuiltin(obj){
        return (obj instanceof Sk.builtin.dict) ||
            (obj instanceof Sk.builtin.list) ||
            (obj instanceof Sk.builtin.tuple) ||
            (obj instanceof Sk.builtin.bool) ||
            (obj instanceof Sk.builtin.int_) ||
            (obj instanceof Sk.builtin.float_) ||
            (obj instanceof Sk.builtin.str) ||
            (obj instanceof Sk.builtin.lng);
        //var cons_str = obj.constructor + "";
        //return cons_str.indexOf("return new Sk.builtin") !== -1;
    }
    /**
     * Should theoretically belong in Sk.ffi, but I put it here instead to not mess up the skulpt files
     * like the normal Sk.ffi.remapToPy, it doesn't work for functions or more complex objects, but it handles
     * cases where the types in obj ore a mix of python SIMPLE objects and SIMPLE normal javascript objects
     * @param {object} obj - the object to be converted
     * @return {Sk.builtin.???} - returns the corresponding python object, dropping all functions and things it can't convert
    **/
    function mixedRemapToPy(obj){
        var k;
        var kvs;
        var i;
        var arr;
        //@TODO: should theoretically check if the object is a pyhon dict or array with js objects
        if (isSkBuiltin(obj)){
            //object is already python ready
            return obj;
        } else if (Object.prototype.toString.call(obj) === "[object Array]") {
            //object is actually a javascript array
            arr = [];
            for (i = 0; i < obj.length; ++i) {
                //for each object, convert it to a python object if it isn't one already
                var subval = obj[i];
                if(!isSkBuiltin(subval)){
                    arr.push(mixedRemapToPy(subval));
                }else{
                    arr.push(subval)
                }
            }
            return new Sk.builtin.list(arr);
        } else if (obj === null) {//null object
            return Sk.builtin.none.none$;
        } else if (typeof obj === "object") {
            if(!isSkBuiltin(obj)){
                //assuming it's a standard dictionary
                kvs = [];//Sk.builtin.dict uses an array of key-value,key-value...
                for (k in obj) {
                    //convert the key if it needs to be converted
                    kvs.push(mixedRemapToPy(k));
                    //covert corresponding value if it needs to be converted
                    kvs.push(mixedRemapToPy(obj[k]));
                }
                //create the new dictionary
                return new Sk.builtin.dict(kvs);
            }else{
                return obj;
            }
        } else if (typeof obj === "string") {
            return new Sk.builtin.str(obj);
        } else if (typeof obj === "number") {
            return Sk.builtin.assk$(obj);
        } else if (typeof obj === "boolean") {
            return new Sk.builtin.bool(obj);
        } else if(typeof obj === "function") {
            return new Sk.builtin.str(obj.toString());
        }
    }
    
    /**
     * This function coverts the output in the student report to a python 
     * list and returns it.
    **/
    mod.get_output = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_output", arguments, 0, 0);
        if (Sk.executionReports['student'].success) {
            return mixedRemapToPy(Sk.executionReports['student']['output']());
        } else {
            return Sk.ffi.remapToPy([]);
        }
    });
    
    /**
     * This function resets the output, particularly useful if the student
     * code is going to be rerun.
     */
    mod.reset_output = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("reset_output", arguments, 0, 0);
        if (Sk.executionReports['student'].success) {
            Sk.executionReports['student']['output'].removeAll();
        }
    });
    
    /**
     * This function is called by instructors to get the students' code as a string.
    **/
    mod.get_program = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("get_program", arguments, 0, 0);
        return Sk.ffi.remapToPy(Sk.executionReports['verifier'].code);
    });

    /**
     * This function is called by instructors to construct the python version of the AST
    **/
    mod.parse_program = new Sk.builtin.func(function() {
        if (Sk.executionReports['verifier'].success) {
            generateFlatTree(Sk.executionReports['verifier'].code);
            console.log(flatTree);
            return Sk.misceval.callsimOrSuspend(mod.AstNode, 0);
        } else {
            return Sk.builtin.none.none$;
        }
    });

    mod.def_use_error = new Sk.builtin.func(function(py_node) {
       var id = py_node.id;
       var node = flatTree[id];
       if((node instanceof Object) && ("_astname" in node) && node._astname == "Name"){
            var undefVars = Sk.executionReports['analyzer'].issues["Undefined variables"];
            var hasError = false;
            var name = Sk.ffi.remapToJs(node.id);
            for(var i = 0; i < undefVars.length; i += 1){
                if(undefVars[i].name == name){
                    hasError = true;
                    break;
                }
            }
            return Sk.ffi.remapToPy(hasError);
        }else{
            return Ski.ffi.remapToPy(false);
        }
    });

    /**
     * This function takes an AST node and if it's a name node, finds the type of the object
     * @param {Skulpt AST node} node - the node to check
    **/
    function checkNameNodeType(node){
        if((node instanceof Object) && ("_astname" in node) && node._astname == "Name"){
            var analyzer = Sk.executionReports['analyzer'];
            var typesList = analyzer.variables;
            var name = Sk.ffi.remapToJs(node.id);
            if (typesList[name] === undefined) {
                return Sk.ffi.remapToPy(null);
            } else {
                return Sk.ffi.remapToPy(typesList[name]["type"]);
            }
        }else{
            return Sk.ffi.remapToPy(null);
        }
    }
    /**
     * When passed a python AST node, returns the next node that isn't in this node's
     * subtree.  If such a node does not exist, returns Sk.ffi.remapToPy(null)
    **/
    function getNextTree(self){
        var visitor = new NodeVisitor();
        var currentId = self.id;//-1 to offset first iteration
        visitor.visit = function(node) {
            currentId += 1;
            /** Visit a node. **/
            var method_name = 'visit_' + node._astname;
            return this.generic_visit(node);
        }
        visitor.visit(flatTree[currentId]);
        if(currentId > flatTree.length){
            return Sk.ffi.remapToPy(null);
        }
        return Sk.misceval.callsimOrSuspend(mod.AstNode, currentId);
    }
    
    /**
     * TODO: Make this a subclass of AstNode that can be returned when a user
             parses a broken program. This would fail silently for most kinds
             of traversals (e.g., "ast.find_all" or "ast.body"). Perhaps it
             has some kind of special flag.
     */
    mod.CorruptedAstNode = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self) {
            self.id = -1;
            self.type = '';
            Sk.abstr.sattr(self, 'type', Sk.ffi.remapToPy(self.type), true);
        });
    });

    /**
     * Returns javascript equivalent string representation of python operator given a function that represents
     * a python operator
    **/
    function transPyOps(field){
        var op = field.name;
        console.log("op is: " + op);
        var transOp = null;
        switch(op){
            case "Add":
                transOp = "+";
                break;
            case "Div":
                transOp = "/";
                break;
            case "Mult":
                transOp = "*";
                break;
            case "Sub":
                transOp = "-";
                break;
            case "Gt":
                transOp = ">";
                break;
            case "Lt":
                transOp = "<";
                break;
            case "LtE":
                transOp = "<=";
                break;
            case "GtE":
                transOp = ">=";
                break;
            case "And":
                transOp = "&&";
                break;
            case "Or":
                transOp = "||";
                break;
            case "Not":
                transOp = "!";
                break;
            case "Eq":
                transOp = "==";
                break;
            case "NotEq":
                transOp = "!=";
                break;
            default:
                break;
        }
        return transOp;
    }

    /**
     * Python representation of the AST nodes w/o recreating the entire thing. This class assumes that parse_program
     * is called first
     * @property {number} self.id - the javascript id number of this object
     * @property {string} self.type - the javascript string representing the type of the node (_astname)
     * @property {Sk.abstr.(s/g)attr} id - the python version of self.id
     * @property {Sk.abstr.(s/g)attr} type - the python version of self.type
    **/
    mod.AstNode = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self, id) {
            self.id = Sk.ffi.remapToJs(id);//note that id is passed from PYTHON as a default type already
            self.type = flatTree[self.id]._astname;
            //Sk.abstr.sattr(self, 'type', Sk.ffi.remapToPy(self.type), true);
        });

        $loc.__eq__ = new Sk.builtin.func(function(self, other){
            return Sk.ffi.remapToPy(self.id == other.id);
        });

        /**
         * If this node is a Compare or BoolOp node, sees if the logic in expr (a javascript string being a logical statement)
         * matches the logic of self.  This assumes that we are only comparing numerical values to a single variable
         * @property {number} mag - the order of magnitude that should be added to numbers to check logic, 1 is usually
         * a good value, especially when working with the set of integers.
        **/
        $loc.numeric_logic_check = new Sk.builtin.func(function(self, mag, expr){
            if(self.type != "Compare" && self.type != "BoolOp"){
                console.log("incorrect node type: " + self.type);
                return Sk.ffi.remapToPy(null);
            }
            expr = Sk.ffi.remapToJs(expr);
            var actualAstNode = flatTree[self.id];
            //test values for the boolean expression
            var consArray = [];
            var expConsArray = []
            var consRegex = /-?(?:\d{1,})\.?(?:\d{1,})?/;
            var varRegex = new RegExp(/[a-zA-Z_]\w{1,}/,'g');
            var extracts = expr.match(consRegex);
            for(var i = 0; i < extracts.length; i += 1){
                var cons = extracts[i] * 1;
                consArray.push(cons);
                expConsArray.push(cons);
                expConsArray.push(cons + mag * -1);
                expConsArray.push(cons + mag);
            }
            var compVarArray = expr.match(varRegex);
            var compVar = [];
            for(var i = 0; i < compVarArray.length; i += 1){
                if(compVar.indexOf(compVarArray[i]) == -1){
                    compVar.push(compVarArray[i]);
                }
            }
            if(compVar.length != 1){
                console.log("too many variables");
                return Sk.ffi.remapToPy(null);
            }else{
                compVar = "varPlaceHolder";
            }
            expr = expr.replace(varRegex, "varPlaceHolder");
            console.log(expr);
            //build sudent expression
            var otherExpr = "";
            var prevWasOp = false;
            var boolOpstack = [];
            var studentVars = [];
            var fastFail = false;
            var visitor = new NodeVisitor();
            visitor.visit_BoolOp = function(node){
                otherExpr += "(";
                var values = node.values;
                for(var i = 0; i < values.length; i += 1){
                    this.visit(values[i]);
                    if(i < values.length - 1){
                        otherExpr += transPyOps(node.op);
                    }
                }
                otherExpr += ")";
            }
            visitor.visit_Name = function(node){
                if(studentVars.length == 0){
                    studentVars.push(node.id);
                }
                if(studentVars.indexOf(node.id) == -1){
                    var fastFail = true;
                }
                otherExpr += compVar + " ";
            }
            visitor.visit_Num = function(node){
                otherExpr += Sk.ffi.remapToJs(node.n) + " ";
            }
            visitor.visit_Compare = function(node){
                //left op comp op comp
                otherExpr += "(";
                this.visit(node.left);
                var comparators = node.comparators;
                var ops = node.ops;
                for(var i = 0; i < comparators.length; i += 1){
                    if(i % 2 == 1){
                        otherExpr = " && ";
                        this.visit(comparators[i-1]);
                    }
                    otherExpr += transPyOps(ops[i]);
                    this.visit(comparators[i]);

                }
                otherExpr += ")";
            }
            visitor.visit(actualAstNode);
            var varPlaceHolder = 0;
            if(fastFail){
                console.log("fast fail!");
                return Sk.ffi.remapToPy(null);
            }
            console.log(expr);
            console.log(otherExpr);
            var otherCons = otherExpr.match(consRegex);
            for(var i =0 ; i < otherCons.length; i += 1){
                if(consArray.indexOf(otherCons[i] * 1) == -1){
                    return Sk.ffi.remapToPy(false);
                }
            }
            for(var i = 0; i < expConsArray.length; i += 1){
                varPlaceHolder = expConsArray[i];
                if(eval(expr) != eval(otherExpr)){
                    return Sk.ffi.remapToPy(false);
                }
            }
            return Sk.ffi.remapToPy(true);
        });
        /**
         * This function dynamically looks to see if the ast node has a given property and does
         * remapping where it can
         * @param {obj} self - the javascript object representing the python AST node (which is also a python object)
         * @param {string} key - the property the user is trying to look up
        **/
        $loc.__getattr__ = new Sk.builtin.func(function(self, key) {
            var actualAstNode = flatTree[self.id];
            key = Sk.ffi.remapToJs(key);
            if(key == "data_type"){
                //if it's a name node, returns the data type, otherwise returns null
                return checkNameNodeType(actualAstNode);
            }
            if(key == "next_tree"){
                return getNextTree(self);
            }
            if(key == "ast_name"){
                key = "_astname";
            }
            if(key in actualAstNode){
                var field = actualAstNode[key];
                //@TODO: check for flag to see if chain assignments are allowed, otherwise return first item
                if (actualAstNode._astname == "Assign" && key == "targets"){//this means its an assignment node
                    var childId = flatTree.indexOf(field[0]);//get the relevant node
                    //console.log("Assign and targets case!" + childId);
                    return Sk.misceval.callsimOrSuspend(mod.AstNode, childId);
                } else if (field === null) {
                    return Sk.ffi.remapToPy(null);
                } else if (field.constructor === Array && key != "ops"){
                    var astNodeCount = 0
                    var fieldArray = [];
                    //this will likely always be a mixed array
                    for(var i = 0; i < field.length; i++){
                        var subfield = field[i];
                        //if AST node, use callism and push new object
                        if(subfield instanceof Object && "_astname" in subfield){//an AST node)
                            var childId = flatTree.indexOf(subfield);//get the relevant node
                            fieldArray.push(Sk.misceval.callsimOrSuspend(mod.AstNode, childId));
                        }else{//else smart remap
                            var tranSubfield = mixedRemapToPy(subfield);
                            if(tranSubfield != undefined){
                                fieldArray.push(tranSubfield);
                            }
                        }
                    }
                    return new Sk.builtin.list(fieldArray);
                } else if (isSkBuiltin(field)){//probably already a python object
                    return field;
                } else if (field instanceof Object && "_astname" in field){//an AST node
                    var childId = flatTree.indexOf(field);//get the relevant node
                    return Sk.misceval.callsimOrSuspend(mod.AstNode, childId);
                } else {
                    switch(key){//looking for a function
                        case "ctx"://a load or store
                        case "ops"://an operator
                        case "op"://an operator
                            //the above 3 cases are functions, extract the function name
                            field = field.name;
                            return Sk.ffi.remapToPy(field);
                        default:
                            break;
                    }
                    //console.log(field)
                    //console.log(mixedRemapToPy(field));
                    //hope this is a basic type
                    return mixedRemapToPy(field);
                }
            }
            return Sk.ffi.remapToPy(null);
        });

        /**
         * Given the python Name ast node (variable) and self (which is automatically filled), checks
         * the AST on the javascript side to see if the node has the specified variable using the name
         * @TODO: change this so it can handle any data type as opposed to just numbers and ast nodes
         * @param {???} self - the javascript reference of this object, which is self in python.
         * @param {mod.AstNode} pyAstNode - the python object representing the variable node to look for
        **/
        $loc.has = new Sk.builtin.func(function(self, pyAstNode) {
            var rawVariableName = null;
            var rawNum = null;
            var nodeId = self.id;
            var thisNode = flatTree[nodeId];
            //got a number instead of an AST node
            if (Sk.builtin.checkNumber(pyAstNode)){
                rawNum = Sk.ffi.remapToJs(pyAstNode);
            } else {//assume it's an AST node
                //@TODO: should handle exceptions/do type checking
                var otherId = Sk.ffi.remapToJs(pyAstNode.id);
                var otherNode = flatTree[otherId];
                if(otherNode._astname != "Name"){
                    return Sk.ffi.remapToPy(false);
                }
                rawVariableName = Sk.ffi.remapToJs(otherNode.id);
            }

            var hasVar = false;
            var visitor = new NodeVisitor();
            if (rawVariableName != null){
                visitor.visit_Name = function(node){
                    var otherRawName = Sk.ffi.remapToJs(node.id);
                    if (rawVariableName == otherRawName){
                        hasVar = true;
                        return;
                    }
                    return this.generic_visit(node);
                }
            }

            if (rawNum != null){
                visitor.visit_Num = function(node){
                    var otherNum = Sk.ffi.remapToJs(node.n);
                    if (rawNum == otherNum){
                        hasVar = true;
                        return;
                    }
                    return this.generic_visit(node);
                }
            }

            visitor.visit(flatTree[nodeId]);
            return Sk.ffi.remapToPy(hasVar);
        });

        /**
         * Given a type of ast node as a string, returns all in the ast that are nodes of the specified "type"
         * valid options include BinOp, For, Call, If, Compare, Assign, Expr, note that these ARE case sensitive
         * @param {???} self - the javascript reference of this object, which is self in python.
         * @param {Sk.builtin.str} type - the python string representing the "type" of node to look for
        **/
        $loc.find_all = new Sk.builtin.func(function(self, type) {
            var items = [];
            var currentId = self.id - 1;
            var funcName = 'visit_' + Sk.ffi.remapToJs(type);
            var visitor = new NodeVisitor();
            visitor.visit = function(node) {
                currentId += 1;
                /** Visit a node. **/
                var method_name = 'visit_' + node._astname;
                if (method_name in this) {
                    return this[method_name](node);
                } else {
                    return this.generic_visit(node);
                }
            }
            visitor[funcName] = function(node){
                var skulptNode = Sk.misceval.callsimOrSuspend(mod.AstNode, currentId);
                items.push(skulptNode);
                return this.generic_visit(node);
            }
            var nodeId = self.id;
            visitor.visit(flatTree[nodeId]);
            //Don't use Sk.ffi because the objects in the array are already python objects
            return new Sk.builtin.list(items);
        });
    });
    return mod;
}

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


function PLUS_MINUS_updateShape(listItemName, startMessage) {
    return function() {
        var that = this;
        function addField(field, block, e) {
            var rect = field.fieldGroup_.getBoundingClientRect();
            var yPosition = e.clientY;
            if (yPosition < rect.top+rect.height/2) {
                var input = that.appendValueInput(listItemName + that.itemCount_);
                that.itemCount_ += 1;
            } else {
                if (that.itemCount_ > 0) {
                    that.itemCount_ -= 1;
                    that.removeInput(listItemName + that.itemCount_)
                }
            }
        }
        if (!this.getInput('START')) {
            var clickablePlusMinus = new Blockly.FieldClickImage("images/plus-minus-button.svg", 12, 24, '+', addField, '-2px');
            //clickablePlusMinus.imageElement_.style.y = '-2px';
            this.appendDummyInput('START')
                .appendField(startMessage)
                .appendField(clickablePlusMinus);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
          if (!this.getInput(listItemName + i)) {
            var input = this.appendValueInput(listItemName + i);
          }
        }
        // Remove deleted inputs.
        while (this.getInput(listItemName + i)) {
          this.removeInput(listItemName + i);
          i++;
        }
    }
}
Blockly.Blocks['class_creation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create class")
        .appendField(new Blockly.FieldVariable("new class"), "CLASS");
    
    this.appendDummyInput()
        .appendField("Inherits from")
        .appendField(new Blockly.FieldVariable("j"), "NAME")
        .appendField(",")
        .appendField(new Blockly.FieldVariable("k"), "NAME");
  
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

Blockly.Python['attribute_access'] = function(block) {
  var value_module = Blockly.Python.valueToCode(block, 'MODULE', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_module+'.'+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
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
        this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_TOOLTIP);
    },
    /**
     * Create XML to represent dict inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function(workspace) {
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
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    fixEmpty_: function() {
        if (this.itemCount_ > 0) {
            this.getInput("START").fieldRow[0].setText("dictionary of");
        } else {
            this.getInput("START").fieldRow[0].setText(Blockly.Msg.DICTS_CREATE_EMPTY_TITLE);
        }
    },
    addRow: function(i) {
        if (!this.getInput('VALUE'+i)) {
            this.appendValueInput('VALUE' + i)
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(
                      new Blockly.FieldTextInput(
                          Blockly.Msg.DICTS_CREATE_WITH_ITEM_KEY),
                     'KEY'+i)
               .appendField(Blockly.Msg.DICTS_CREATE_WITH_ITEM_MAPPING);
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function() {
        var that = this;
        function addField(field, block, e) {
            var rect = field.fieldGroup_.getBoundingClientRect();
            var yPosition = e.clientY;
            if (yPosition < rect.top+rect.height/2) {
                that.itemCount_ += 1;
                that.addRow(that.itemCount_);
            } else {
                if (that.itemCount_ > 0) {
                    that.removeInput('VALUE' + that.itemCount_);
                    that.itemCount_ -= 1;
                }
            }
            that.fixEmpty_();
        }
        var clickablePlusMinus = new Blockly.FieldClickImage("images/plus_minus_v.png", 24, 24, '+', addField, '-2px');
        // Rebuild block.
        if (!this.getInput("START")) {
            this.appendDummyInput('START')
                .appendField("dictionary of")
                .appendField(clickablePlusMinus);
        }
        this.fixEmpty_();
        for (var i = 1; i <= this.itemCount_; i++) {
            this.addRow(i);
        }
    }
};
Blockly.Python.dicts_create_with = function(block) {
    var value_keys = Blockly.Python.valueToCode(block, 'keys', Blockly.   Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = new Array(block.itemCount_);
  
    for (var n = 1; n <= block.itemCount_; n++) {
        var key = Blockly.Python.quote_(block.getFieldValue('KEY' + n));
        var value = Blockly.Python.valueToCode(block, 'VALUE' + n,
                Blockly.Python.ORDER_NONE) || '___';
        code[n-1] = key +": "+ value;
    }
    code = '{' + code.join(', ') + '}';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['controls_if_better'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput('DO0')
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.updateShape_();
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
      } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) {
      container.setAttribute('else', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   /*
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },*/
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   *//*
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'controls_if_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 1; i <= this.elseifCount_; i++) {
      Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
    Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
  },*/
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   *//*
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },*/
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    // Delete everything.    
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i)
          .setCheck('Boolean')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
      this.appendStatementInput('DO' + i)
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
          .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
    }
  }
};

Blockly.Python['controls_if_better'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Python.valueToCode(block, 'IF' + n,
      Blockly.Python.ORDER_NONE) || '___';
    branchCode = Blockly.Python.statementToCode(block, 'DO' + n) ||
        Blockly.Python.PASS;
    code += (n == 0 ? 'if ' : 'elif ' ) + conditionCode + ':\n' + branchCode;

    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Python.statementToCode(block, 'ELSE') ||
        Blockly.Python.PASS;
    code += 'else:\n' + branchCode;
  }
  return code;
};
Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("input")
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput("with prompt"), "MESSAGE")
        .appendField(this.newQuote_(false));
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
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
Blockly.Python['text_input'] = function(block) {
  var message = block.getFieldValue('MESSAGE');
  var code = 'input('+Blockly.Python.quote_(message)+')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['lists_create'] = function(block) {
    // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  console.log(block.itemCount_)
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) || '___';
  }
  var code = '[' + elements.join(', ') + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Blocks['lists_create'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: PLUS_MINUS_updateShape('ADD', "create list of")
};

Blockly.Blocks['lists_getIndex_only'] = {
  /**
   * Block for getting element at index.
   * @this Blockly.Block
   */
  init: function() {
    var MODE =
        [[Blockly.Msg.LISTS_GET_INDEX_GET, 'GET']];
    this.WHERE_OPTIONS =
        [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
         [Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
         [Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']
         ];
    this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput('VALUE')
        .setCheck(['String', 'Array'])
        .appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_GET_INDEX_GET)
        .appendField('', 'SPACE');
    this.appendDummyInput('AT');
    if (Blockly.Msg.LISTS_GET_INDEX_TAIL) {
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL);
    }
    this.setInputsInline(true);
    this.setOutput(true);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = 'GET';
      var where = thisBlock.getFieldValue('WHERE');
      var tooltip = '';
      switch (mode + ' ' + where) {
        case 'GET FROM_START':
        case 'GET FROM_END':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
          break;
        case 'GET FIRST':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
          break;
        case 'GET LAST':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
          break;
        case 'GET RANDOM':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
          break;
        case 'GET_REMOVE FROM_START':
        case 'GET_REMOVE FROM_END':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
          break;
        case 'GET_REMOVE FIRST':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
          break;
        case 'GET_REMOVE LAST':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
          break;
        case 'GET_REMOVE RANDOM':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
          break;
        case 'REMOVE FROM_START':
        case 'REMOVE FROM_END':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
          break;
        case 'REMOVE FIRST':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
          break;
        case 'REMOVE LAST':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
          break;
        case 'REMOVE RANDOM':
          tooltip = Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
          break;
      }
      if (where == 'FROM_START' || where == 'FROM_END') {
        var msg = (where == 'FROM_START') ?
            Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP :
            Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP;
        tooltip += '  ' + msg.replace('%1',
                thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
      }
      return tooltip;
    });
  },
  /**
   * Create XML to represent whether the block is a statement or a value.
   * Also represent whether there is an 'AT' input.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isStatement = !this.outputConnection;
    container.setAttribute('statement', isStatement);
    var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'statement' defaults to false and 'at' defaults to true.
    var isStatement = (xmlElement.getAttribute('statement') == 'true');
    this.updateStatement_(isStatement);
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  },
  /**
   * Switch between a value block and a statement block.
   * @param {boolean} newStatement True if the block should be a statement.
   *     False if the block should be a value.
   * @private
   * @this Blockly.Block
   */
  updateStatement_: function(newStatement) {
    var oldStatement = !this.outputConnection;
    if (newStatement != oldStatement) {
      this.unplug(true, true);
      if (newStatement) {
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      } else {
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setOutput(true);
      }
    }
  },
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function(isAt) {
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL')
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT');
    }
    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE');
        return null;
      }
      return undefined;
    });
    this.getInput('AT').appendField(menu, 'WHERE');
    if (Blockly.Msg.LISTS_GET_INDEX_TAIL) {
      this.moveInputBefore('TAIL', null);
    }
  }
};
Blockly.Python['lists_getIndex_only'] = function(block) {
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var listOrder = (where == 'RANDOM') ? Blockly.Python.ORDER_NONE :
      Blockly.Python.ORDER_MEMBER;
  var list = Blockly.Python.valueToCode(block, 'VALUE', listOrder) || '___';

  switch (where) {
    case 'FIRST':
      if (mode == 'GET') {
        var code = list + '[0]';
        return [code, Blockly.Python.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop(0)';
        return [code, Blockly.Python.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop(0)\n';
      }
      break;
    case 'LAST':
      if (mode == 'GET') {
        var code = list + '[-1]';
        return [code, Blockly.Python.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop()';
        return [code, Blockly.Python.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop()\n';
      }
      break;
    case 'FROM_START':
      var at = Blockly.Python.getAdjustedInt(block, 'AT');
      if (mode == 'GET') {
        var code = list + '[' + at + ']';
        return [code, Blockly.Python.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop(' + at + ')';
        return [code, Blockly.Python.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop(' + at + ')\n';
      }
      break;
    case'FROM_END':
      var at = Blockly.Python.getAdjustedInt(block, 'AT', 1, true);
      if (mode == 'GET') {
        var code = list + '[' + at + ']';
        return [code, Blockly.Python.ORDER_MEMBER];
      } else if (mode == 'GET_REMOVE') {
        var code = list + '.pop(' + at + ')';
        return [code, Blockly.Python.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return list + '.pop(' + at + ')\n';
      }
      break;
    case 'RANDOM':
      Blockly.Python.definitions_['import_random'] = 'import random';
      if (mode == 'GET') {
        code = 'random.choice(' + list + ')';
        return [code, Blockly.Python.ORDER_FUNCTION_CALL];
      } else {
        var functionName = Blockly.Python.provideFunction_(
            'lists_remove_random_item',
            ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(myList):',
              '  x = int(random.random() * len(myList))',
              '  return myList.pop(x)']);
        code = functionName + '(' + list + ')';
        if (mode == 'GET_REMOVE') {
          return [code, Blockly.Python.ORDER_FUNCTION_CALL];
        } else if (mode == 'REMOVE') {
          return code + '\n';
        }
      }
      break;
  }
  throw 'Unhandled combination (lists_getIndex).';
};


Blockly.Python['set_create'] = function(block) {
    // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  console.log(block.itemCount_)
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) || '___';
  }
  var code = '{' + elements.join(', ') + '}';
  return [code, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Blocks['set_create'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Set');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: PLUS_MINUS_updateShape('ADD', "create set of")
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
        var isNow = (this.getFieldValue('HOUR').toUpperCase() == 'NOW');
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
    "Time": ["datetime_time", {"type": "integer", "name": "HOUR", "add_mutation": {"name": "@isnow", "value": "false"}}, 
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
Blockly.Python['tuple_create'] = function(block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = (Blockly.Python.valueToCode(block, 'ADD' + i,
            Blockly.Python.ORDER_NONE) || '___' );
    }
    var code = elements.join(', ');
    if (block.itemCount_ == 1) {
        code = '(' + code + ',)';
    } else {
        code = '(' + code + ')';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['tuple_create'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE+10);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Tuple');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: PLUS_MINUS_updateShape('ADD', "create tuple of")
};
/**
 * Turtles!
 */
Blockly.Blocks['turtle_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create new turtle");
    this.setOutput(true, 'Turtle');
    this.setColour(180);
    this.setTooltip('Creates a new turtle');
    this.setHelpUrl('');
  }
};
Blockly.Python['turtle_create'] = function(block) {
    Blockly.Python.definitions_['import_turtle'] = 'import turtle';
  var code = 'turtle.Turtle()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
PythonToBlocks.KNOWN_MODULES['turtle'] = {
    "Turtle": ["turtle_create"]
}

Blockly.Blocks['turtle_color'] = {
  init: function() {
    this.appendValueInput("TURTLE")
        .setCheck("Turtle")
        .appendField("make turtle");
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setInputsInline(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['turtle_color'] = function(block) {
  var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = turtle+'.color('+color+')\n';
  return code;
};
PythonToBlocks.KNOWN_ATTR_FUNCTIONS['color'] = function(func, args, keywords, starargs, kwargs, node) {
    if (args.length < 1 || args.length > 2) {
        throw new Error("Incorrect number of arguments to turtle.color!");
    }
    return [block("turtle_color", func.lineno, {}, { 
                    "COLOR": this.convert(args[0]),
                    "TURTLE": this.convert(func.value)
                }, {"inline": "true"})];
}

Blockly.Blocks['turtle_forward'] = {
  init: function() {
    this.appendValueInput("TURTLE")
        .setCheck("Turtle")
        .appendField("make turtle");
    this.appendValueInput("DISTANCE")
        .setCheck(null)
        .appendField("move forward by");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setOutput(false);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['turtle_forward'] = function(block) {
  var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
  var distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = turtle+'.forward('+distance+')\n';
  return code;
};
PythonToBlocks.KNOWN_ATTR_FUNCTIONS['forward'] = function(func, args, keywords, starargs, kwargs, node) {
    if (args.length != 1) {
        throw new Error("Incorrect number of arguments to turtle.forward!");
    }
    return [block("turtle_forward", func.lineno, {}, { 
                    "DISTANCE": this.convert(args[0]),
                    "TURTLE": this.convert(func.value)
                }, {"inline": "true"})];
}

Blockly.Blocks['turtle_backward'] = {
  init: function() {
    this.appendValueInput("TURTLE")
        .setCheck("Turtle")
        .appendField("make turtle");
    this.appendValueInput("DISTANCE")
        .setCheck(null)
        .appendField("move backward by");
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['turtle_backward'] = function(block) {
  var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
  var distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = turtle+'.backward('+distance+')\n';
  return code;
};
PythonToBlocks.KNOWN_ATTR_FUNCTIONS['backward'] = function(func, args, keywords, starargs, kwargs, node) {
    if (args.length != 1) {
        throw new Error("Incorrect number of arguments to turtle.backward!");
    }
    return [block("turtle_backward", func.lineno, {}, { 
                    "DISTANCE": this.convert(args[0]),
                    "TURTLE": this.convert(func.value)
                }, {"inline": "true"})];
}

Blockly.Blocks['turtle_left'] = {
  init: function() {
    this.appendValueInput("TURTLE")
        .setCheck("Turtle")
        .appendField("make turtle");
    this.appendValueInput("ANGLE")
        .setCheck(null)
        .appendField("turn left by");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setOutput(false);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['turtle_left'] = function(block) {
  var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = turtle+'.left('+angle+')\n';
  return code;
};
PythonToBlocks.KNOWN_ATTR_FUNCTIONS['left'] = function(func, args, keywords, starargs, kwargs, node) {
    if (args.length != 1) {
        throw new Error("Incorrect number of arguments to turtle.left!");
    }
    return [block("turtle_left", func.lineno, {}, { 
                    "ANGLE": this.convert(args[0]),
                    "TURTLE": this.convert(func.value)
                }, {"inline": "true"})];
}

Blockly.Blocks['turtle_right'] = {
  init: function() {
    this.appendValueInput("TURTLE")
        .setCheck("Turtle")
        .appendField("make turtle");
    this.appendValueInput("ANGLE")
        .setCheck(null)
        .appendField("turn right by");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setOutput(false);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['turtle_right'] = function(block) {
  var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = turtle+'.right('+angle+')\n';
  return code;
};
PythonToBlocks.KNOWN_ATTR_FUNCTIONS['right'] = function(func, args, keywords, starargs, kwargs, node) {
    if (args.length != 1) {
        throw new Error("Incorrect number of arguments to turtle.right!");
    }
    return [block("turtle_right", func.lineno, {}, { 
                    "ANGLE": this.convert(args[0]),
                    "TURTLE": this.convert(func.value)
                }, {"inline": "true"})];
}
Blockly.Python['text_count'] = function(block) {
  var value_haystack = Blockly.Python.valueToCode(block, 'HAYSTACK', Blockly.Python.ORDER_ATOMIC) || '___';
  var value_needle = Blockly.Python.valueToCode(block, 'NEEDLE', Blockly.Python.ORDER_ATOMIC) || '___';
  var code = value_haystack + '.count(' + value_needle + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['text_count'] = {
  init: function() {
    this.appendValueInput("HAYSTACK")
        .setCheck(null)
        .appendField("in");
    this.appendValueInput("NEEDLE")
        .setCheck(null)
        .appendField("count # of");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

PythonToBlocks.KNOWN_ATTR_FUNCTIONS['count'] = function(func, args, keywords, starargs, kwargs, node) {
    if (args.length != 1) {
        throw new Error("Incorrect number of arguments to string.count!");
    }
    return block("text_count", func.lineno, {}, { 
                    "NEEDLE": this.convert(args[0]),
                    "HAYSTACK": this.convert(func.value)
                }, {"inline": "true"});
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
/**
 * Helper object for interfacing with the LocalStorage. The LocalStorage
 * browser API allows for offline storage. That API is very unsophisticated,
 * and is essentially a lame key-value store. This object sits on top
 * and provides a number of useful utilities, including rudimentarycache
 * cache expiration.
 *
 * @constructor
 * @this {LocalStorageWrapper}
 * @param {String} namespace - A namespace to use in grouping access to localstorage. This keeps access clean and organized, while also making it possible to have multiple LocalStorage connections.
 */
function LocalStorageWrapper(namespace) {
    this.namespace = namespace;
}
/**
 * A method for adding a key/value pair to LocalStorage.
 * Note that both parameters must be strings (JSON.stringify is your friend).
 *
 * @param {String} key - The name of the key.
 * @param {String} value - The value.
 */
LocalStorageWrapper.prototype.set =  function(key, value) {
    localStorage.setItem(this.namespace+"_"+key+"_value", value);
    localStorage.setItem(this.namespace+"_"+key+"_timestamp", $.now());
};

/**
 * A method for removing a key from LocalStorage.
 *
 * @param {String} key - The name of the key to remove.
 */
LocalStorageWrapper.prototype.remove = function(key) {
    localStorage.removeItem(this.namespace+"_"+key+"_value");
    localStorage.removeItem(this.namespace+"_"+key+"_timestamp");
};

/**
 * A method for retrieving the value associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 */
LocalStorageWrapper.prototype.get = function(key) {
    return localStorage.getItem(this.namespace+"_"+key+"_value");
};

/**
 * A method for retrieving the value associated with the given key.
 * If the key does not exist, then the default value is used instead.
 * This default will be set.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 * @param {String} defaultValue - The default value to use. Must be a string.
 */
LocalStorageWrapper.prototype.getDefault = function(key, defaultValue) {
    if (this.has(key)) {
        return this.get(key);
    } else {
        this.set(key, defaultValue);
        return defaultValue;
    }
};

/**
 * A test for whether the given key is in LocalStorage.
 *
 * @param {String} key - The key to test existence for.
 */
LocalStorageWrapper.prototype.has = function(key) {
    return localStorage.getItem(this.namespace+"_"+key+"_value") !== null;
};

/**
 * A test for whether the server has the newer version. This function
 * assumes that the server trip takes about 5 seconds. This method
 * is largely deprecated.
 *
 * @param {String} key - The key to check.
 * @param {Integer} server_time - The server's time as an epoch (in milliseconds)
 */
LocalStorageWrapper.prototype.is_new = function(key, server_time) {
    var stored_time = localStorage.getItem(this.namespace+"_"+key+"_timestamp");
    return (server_time >= stored_time+5000);
};
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
    Sk.TurtleGraphics = {'target': this.tag[0], 
                         'width': this.printerSettings['width']-40, 
                         'height': this.printerSettings['height']-40};
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
    // Should probably be accessing the model instead of a component...
    var stepNumber = this.main.components.engine.executionBuffer.step;
    var lineNumber = this.main.components.engine.executionBuffer.line_number;
    // Perform any necessary cleaning
    if (lineText !== "\n") {
        this.main.model.execution.output.push(lineText.slice(0, -1));
        var encodedText = encodeHTML(lineText);
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

/**
 * Creates an Input box for receiving input() from the user.
 * 
 * @param {String} promptMessage - a message to render before the input
 * @returns {String} Returns the handle on the message box.
 */
BlockPyPrinter.prototype.printInput = function(promptMessage) {
    // Should probably be accessing the model instead of a component...
    var stepNumber = this.main.components.engine.executionBuffer.step;
    var lineNumber = this.main.components.engine.executionBuffer.line_number;
    // Perform any necessary cleaning
    if (promptMessage !== "\n") {
        var encodedText = encodeHTML(promptMessage);
        if (!(this.main.model.settings.mute_printer())) {
            var inputForm = $("<input type='text' />");
            var inputMsg = $("<samp></samp>",  {"html": encodedText})
            var inputBtn = $("<button></button>", {"html": "Enter"});
            var inputBox = $("<div></div>",
                    {
                        'data-toggle': 'tooltip',
                        'class': 'blockpy-printer-output',
                        'data-placement': 'left',
                        'data-step': stepNumber,                                
                        'title': "Step "+stepNumber + ", Line "+lineNumber
                    });
            inputBox.append(inputMsg)
                    .append($("<br>"))
                    .append(inputForm)
                    .append(inputBtn);
            this.tag.append(inputBox);
            inputBox.tooltip();
            return {'input': inputForm, 'button': inputBtn, 'promise': true};
        }
    }
    return {'promise': false}
}

/**
 * An automatically generated file, based on interface.html.
 * An interesting problem in web development is managing HTML
 * code in JS files. Rather than embedding string literals and
 * concatenating them, or some other hackish soluion,
 * we simply convert an HTML file to a JS string. Therefore,
 * relevant edits should be in interface.html instead.
 *
 * The BlockPyInterface global can be seen as a constant
 * representation of the default interface.
 */
BlockPyInterface = "<div class='blockpy-content container-fluid' style='background-color :#fcf8e3; border: 1px solid #faebcc; '>    <div class='blockpy-popup modal' style='display:none'>        <div class='modal-dialog' style='width:750px'>            <div class='modal-content' id='modal-message' >                <div class='modal-header'>                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>                    <h4 class='modal-title'>Dynamic Content</h4>                </div>                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>                </div>                <div class='modal-footer'>                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>                </div>                </div>        </div>    </div>    <canvas id='capture-canvas' style='display:none'></canvas>    <div class='row blockpy-top-row' style='padding-bottom: 10px; border-bottom: 1px solid #faebcc; '>        <div class='blockpy-content-top col-md-9 col-sm-9'>            <span class='blockpy-alert pull-right text-muted' data-bind=\"visible: false, text: status.text\"></span>            <strong>BlockPy: </strong>             <span class='blockpy-presentation-name'                  data-bind='text: assignment.name'></span>            <div class='blockpy-presentation' data-bind=\"html: assignment.introduction\">            </div>        </div>        <div class='blockpy-content-topright col-md-3 col-sm-3'>            <span class='text-muted' data-bind=\"visible: status.dataset_loading().length\">Loading Dataset!</span>            <div class='pull-right' style='clear:both'>                <small class='text-muted'>Server: </small>                <span class='label label-default blockpy-status-box pull-right'                    data-bind=\"css: status_server_class()[0],                                text: status_server_class()[1],                                attr: { 'data-original-title': status.server_error }\"                    data-toggle=\"tooltip\" data-placement=\"left\">Loading</span>            </div>            <div class='pull-right' style='clear:both'>                <small class='text-muted'>Execution: </small>                <span class='label label-default'                      data-bind=\"css: execution_status_class()[0],                                 text: execution_status_class()[1],                                 attr: { 'data-original-title': execution.status }\"                      data-toggle=\"tooltip\" data-placement=\"left\">Loading</span>            </div>            <div class='pull-right' style='clear:both'>            <button type='button' class='btn btn-default btn-xs'                data-bind=\"css: {active: settings.show_settings},                           click: showHideSettings\"                >                <span class='glyphicon glyphicon-wrench'></span>            </button>            </div>            <div data-bind=\"visible: settings.show_settings\"  style='clear:both'>                <!--Disable Semantic Errors: <input type='checkbox' data-bind=\"checked: settings.disable_semantic_errors\"><br>-->                                <!--Disable Typed Blocks: <input type='checkbox' data-bind=\"checked: settings.disable_variable_types\"><br>-->                                <label class='pull-right'>                Disable Timeout: <input type='checkbox' data-bind=\"checked: settings.disable_timeout\"><br>                </label>                                <label class='pull-right blockpy-toolbar-instructor-mode' data-bind=\"visible: settings.instructor_initial\">                Instructor mode:                 <input type='checkbox' data-bind=\"checked:settings.instructor\"><br>                </label>                                <label class='pull-right blockpy-toolbar-auto-upload' data-bind=\"visible: settings.instructor\">                Auto-save:                <input type='checkbox' data-bind=\"checked:settings.auto_upload\"><br>                </label>            </div>            <!--<img src=\"images/corgi.png\" class='img-responsive' />-->        </div>    </div>    <div class='row blockpy-middle-row' style=''>        <div class='blockpy-content-left col-md-6 col-sm-6'             style='padding:10px'>            <strong>Printer</strong>            <div class='blockpy-printer blockpy-printer-default'>            </div>        </div>        <div class='blockpy-content-right col-md-6 col-sm-6 bubble'             style='padding:10px'>            <div class='blockpy-feedback'>                <button type='button' class='btn btn-sm btn-default blockpy-feedback-trace pull-right'                         data-bind=\"visible: !execution.show_trace() && (status.error() == 'feedback' || status.error() == 'no errors'|| status.error() == 'complete' || status.error() == 'semantic')\">                    <span class='glyphicon glyphicon-circle-arrow-down'></span> Trace Variables                </button>                                <strong>Feedback: </strong>                <span class='label blockpy-feedback-status' data-bind=\"css: status_feedback_class()[0], text: status_feedback_class()[1]\">Runtime Error</span>                <br>                <pre class='blockpy-feedback-original'></pre>                <strong class='blockpy-feedback-title'></strong>                <div class='blockpy-feedback-body'><i>Run your code to get feedback.</i></div>                <div class='blockpy-code-trace'></div>                                <!-- ko if: execution.show_trace -->                <div class=\"blockpy-feedback-traces\">                                <div>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceFirst\">                        <span class='glyphicon glyphicon-step-backward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceBackward\">                        <span class='glyphicon glyphicon-backward'></span>                    </button>                    Step <span data-bind='text: execution.trace_step()'></span>                    / <span data-bind='text: execution.last_step()-1'></span>                    (<span data-bind='text: current_trace().line == -1 ? \"The end\" : \"Line \"+current_trace().line'></span>)                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceForward\">                        <span class='glyphicon glyphicon-forward'></span>                    </button>                    <button type='button' class='btn btn-default' data-bind=\"click: moveTraceLast\">                        <span class='glyphicon glyphicon-step-forward'></span>                    </button>                </div>                                <table class='table table-condensed table-striped table-bordered table-hover'>                    <thead>                        <tr><th>Name</th><th>Type</th><th>Value</th></tr>                    </thead>                    <tbody data-bind=\"foreach: current_trace().properties\">                        <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">                            <td data-bind=\"text: name\"></td>                            <td data-bind=\"text: type\"></td>                            <td>                                <code data-bind=\"text: value\"></code>                                <!-- ko if: type == \"List\" -->                                <a href=\"\" data-bind=\"click: $root.viewExactValue(type, exact_value)\">                                <span class='glyphicon glyphicon-new-window'></span>                                </a>                                <!-- /ko -->                            </td>                        </tr>                    </tbody>                </table>                                </div>                <!-- /ko -->                            </div>        </div>    </div>    <div class=\"row blockpy-toolbar-row\"         style='background-color :#fcf8e3; padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='col-md-12 col-sm-12 blockpy-toolbar btn-toolbar' role='toolbar'>                        <button type='button' class='btn blockpy-run' style='float:left',                data-bind='css: execution.status() == \"running\" ? \"btn-info\" :                                execution.status() == \"error\" ? \"btn-danger\" : \"btn-success\" ' >                <span class='glyphicon glyphicon-play'></span> Run            </button>                        <div class=\"btn-group\" data-toggle=\"buttons\" data-bind=\"visible: !assignment.upload()\">                <label class=\"btn btn-default blockpy-mode-set-blocks\"                        data-bind=\"css: {active: settings.editor() == 'Blocks',                                        disabled: !areBlocksUpdating()}\">                    <span class='glyphicon glyphicon-th-large'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> Blocks                </label>                <!--<label class=\"btn btn-default blockpy-mode-set-instructor\"                       data-bind=\"visible: settings.instructor,                                  css: {active: settings.editor() == 'Upload'}\">                    <span class='glyphicon glyphicon-list-alt'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Instructor                </label>-->                <label class=\"btn btn-default blockpy-mode-set-split\"                       data-bind=\"css: {active: settings.editor() == 'Split',                                        disabled: !areBlocksUpdating()}\">                    <span class='glyphicon glyphicon-resize-horizontal'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Split                </label>                <label class=\"btn btn-default blockpy-mode-set-text\"                        data-bind=\"css: {active: settings.editor() == 'Text'}\">                    <span class='glyphicon glyphicon-pencil'></span>                    <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\"> Text                </label>            </div>            <button type='button' class='btn btn-default blockpy-toolbar-reset' data-bind=\"visible: !assignment.upload()\">                <span class='glyphicon glyphicon-refresh'></span> Reset            </button>            <!--<button type='button' class='btn btn-default blockpy-toolbar-capture'>                <span class='glyphicon glyphicon-picture'></span> Capture            </button>-->            <button type='button' class='btn btn-default blockpy-toolbar-import' data-bind=\"visible: !assignment.upload() && (assignment.importable() || settings.instructor())\">                <span class='glyphicon glyphicon-cloud-download'></span> Import Datasets            </button>            <label class=\"btn btn-default btn-file\">                Upload <input class=\"blockpy-toolbar-upload\" type=\"file\" style=\"display: none;\">            </label>            <button type='button' class='btn btn-default blockpy-toolbar-history' data-bind=\"visible: !assignment.upload() && (assignment.importable() || settings.instructor())\">                <span class='glyphicon glyphicon-hourglass'></span> History            </button>            <button type='button' class='btn btn-default blockpy-toolbar-instructor' data-bind=\"visible: settings.instructor\">                <span class='glyphicon glyphicon-list-alt'></span> Assignment            </button>            <!--            <button type='button' class='btn btn-default blockpy-toolbar-english'>                <span class='glyphicon glyphicon-list-alt'></span> English            </button>            -->            <div data-bind=\"visible: settings.instructor() & !assignment.upload()\"                 style='clear:both'>            <div class=\"btn-group blockpy-toolbar-filename-picker\" data-toggle=\"buttons\">                <label class=\"btn btn-default btn-sm blockpy-set-filename\"                        data-bind=\"css: {active: settings.filename() == '__main__'}\"                       data-filename=\"__main__\">                    <input type=\"radio\" name=\"blockpy-filename-set\" autocomplete=\"off\" checked> __main__                </label>                <label class=\"btn btn-default btn-sm blockpy-set-filename\"                       data-bind=\"css: {active: settings.filename() == 'starting_code'}\"                       data-filename=\"starting_code\">                    <input type=\"radio\" name=\"blockpy-filename-set\" autocomplete=\"off\"> on_start                </label>                <label class=\"btn btn-default btn-sm blockpy-set-filename\"                       data-bind=\"css: {active: settings.filename() == 'give_feedback'}\"                       data-filename=\"give_feedback\">                    <input type=\"radio\" name=\"blockpy-filename-set\" autocomplete=\"off\"> on_run                </label>                <label class=\"btn btn-default btn-sm blockpy-set-filename\"                       data-bind=\"css: {active: settings.filename() == 'on_change'}\"                       data-filename=\"on_change\">                    <input type=\"radio\" name=\"blockpy-filename-set\" autocomplete=\"off\"> on_change                </label>            </div>            </div>        </div>    </div>    <div class='row blockpy-content-bottom'         style='padding-bottom: 10px; border: 1px solid #faebcc'>        <div class='blockpy-editor col-md-12 col-sm-12'>            <div class='blockpy-blocks blockpy-editor-menu'                  style='height:100%'>                <div class='blockly-div' style='height:450px; width: 100%' '></div>                <!-- <div class='blockly-area'></div> -->            </div>            <div class='blockpy-text blockpy-editor-menu' style='height: 450px'>                <div class='blockpy-text-sidebar' style='width:150px; height: 100%; float:left; background-color: #ddd'>                <!--                <button type='button' class='btn btn-default blockpy-text-insert-if'>Decision (If)</button>                <button type='button' class='btn btn-default blockpy-text-insert-if-else'>Decision (If/Else)</button>                -->                </div>                <textarea class='codemirror-div language-python'                           style='height:100%'></textarea>            </div>            <div class='blockpy-instructor-popup modal' style='display:none' role='dialog'>                <div class='modal-dialog' role='document'>                    <div class='modal-content' id='modal-message' >                        <div class='modal-header'>                            <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>                            <h4 class='modal-title'>Assignment Settings</h4>                        </div>                        <div class='modal-body form-inline' style='width:100%'>                                                    <!-- Name -->                            <form class=\"form-inline\" style='display:inline-block'>                            <label>Name:</label>                            <input type='text' class='blockpy-presentation-name-editor form-control'                                   data-bind='textInput: assignment.name'>                             </form><br>                                                        <!-- Introduction -->                            <label>Introduction:</label>                            <div class='blockpy-presentation-body-editor'>                             </div>                                                        <!-- Initial mode -->                            <label class='blockpy-presentation-text-first'>                            Initial View:                            <select data-bind=\"value: assignment.initial_view\">                                <option value=\"Blocks\" selected>Blocks</option>                                <option value=\"Text\">Text</option>                                <option value=\"Split\">Split</option>                                <option value=\"Instructor\">Instructor</option>                                <option value=\"Upload\">Upload</option>                            </select>                            </label>                            <br>                                                        <!-- Parsons -->                            <label class='blockpy-presentation-parsons-check'>                            Parsons:                            <input type='checkbox' class='form-control' data-bind=\"checked:assignment.parsons\">                            </label>                            <br>                                                        <!-- Importable Datasets -->                            <label class='blockpy-presentation-importable-check'>                            Able to import datasets:                            <input type='checkbox' class='form-control' data-bind=\"checked:assignment.importable\">                            </label>                             <br>                                                        <!-- Importable Datasets -->                            <label class='blockpy-presentation-timeoutable-check'>                            Disable Timeouts:                            <input type='checkbox' class='form-control' data-bind=\"checked:assignment.disable_timeout\">                            </label>                             <br>                                                    <!-- Filesystem -->                            <label class='blockpy-presentation-importable-check'>                            Filesystem:                            </label>                            <label class=\"btn btn-sm btn-default btn-file\">                                Upload <input class=\"blockpy-presentation-upload\" type=\"file\" style=\"display: none;\">                            </label>                            <ul>                            <!--                                <li>                                    <a href=\"#\" target=\"_blank\">file.json<span class='glyphicon glyphicon-new-window'></span></a>                                    <button class='btn btn-sm btn-danger'><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>                                </li>-->                            </ul>                                                        <label>Available Modules</lable>                            <select class='blockpy-available-modules' multiple='multiple'                                    data-bind=\"selectedOptions: assignment.modules\">                                <option>Properties</option>                                <option>Decisions</option>                                <option>Iteration</option>                                <option>Functions</option>                                <option>Calculation</option>                                <option>Output</option>                                <option>Turtles</option>                                <option>Python</option>                                <option>Values</option>                                <option>Lists</option>                                <option>Dictionaries</option>                                <option>Data - Parking</option>                            </select>                        </div>                        <div class='modal-footer'>                            <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>                        </div>                    </div>                </div>            </div>            <!--<div class='blockpy-editor-menu form-inline'>            </div>-->            <div class='blockpy-upload blockpy-editor-menu'>            </div>        </div>    </div></div><!--<div class='blockpy-explorer-errors alert alert-danger alert-dismissible' role='alert'>                     <button type='button' class='blockpy-explorer-errors-hide close' aria-label='Close'><span  aria-hidden='true'>&times;</span></button>                     <div class='blockpy-explorer-errors-body'>                                     </div>-->";

/**
 * Object for communicating with the external servers. This includes functionality for
 * saving and loading files, logging events, saving completions, and retrieving history.
 *
 * @constructor
 * @this {BlockPyServer}
 * @param {Object} main - The main BlockPy instance
 */
function BlockPyServer(main) {
    this.main = main;
    
    // Add the LocalStorage connection
    // Presently deprecated, but we should investigate this
    this.storage = new LocalStorageWrapper("BLOCKPY");
    
    this.saveTimer = {};
    this.presentationTimer = null;
    
    this.overlay = null;
    
    // For managing "walks" that let us rerun stored code
    this.inProgressWalks = [];
    
    this.createSubscriptions();
}

BlockPyServer.prototype.createSubscriptions = function() {
    var server = this, model = this.main.model;
    model.program.subscribe(function() { server.saveCode(); });
    model.assignment.name.subscribe(function(e) { server.saveAssignment();});
    model.assignment.introduction.subscribe(function(e) { server.saveAssignment(); });
    model.assignment.parsons.subscribe(function(e) { server.saveAssignment(); });
    model.assignment.importable.subscribe(function(e) { server.saveAssignment(); });
    model.assignment.disable_algorithm_errors.subscribe(function(e) { server.saveAssignment(); });
    model.assignment.disable_timeout.subscribe(function(e) { server.saveAssignment(); });
    model.assignment.initial_view.subscribe(function(e) { server.saveAssignment(); });
    //model.settings.editor.subscribe(function(newValue) { server.logEvent('editor', newValue); });
    model.execution.show_trace.subscribe(function(newValue) { server.logEvent('trace', newValue); });
    model.execution.trace_step.subscribe(function(newValue) { server.logEvent('trace_step', newValue); });
};

/**
 *
 * Some subscriptions have to happen after other things have been loaded.
 * Right now this is just after CORGIS libraries have been loaded, but maybe
 * we'll add more later and this will need to be refactored.
 * 
 */
BlockPyServer.prototype.finalizeSubscriptions = function() {
    var server = this, model = this.main.model;
    model.assignment.modules.subscribe(function(e) { server.saveAssignment(); });
};

BlockPyServer.prototype.TIMER_DELAY = 1000;

BlockPyServer.prototype.createServerData = function() {
    var assignment = this.main.model.assignment;
    var d = new Date();
    var seconds = Math.round(d.getTime() / 1000);
    data = {
        'assignment_id': assignment.assignment_id(),
        'group_id': assignment.group_id,
        'course_id': assignment.course_id,
        'student_id': assignment.student_id,
        'version': assignment.version(),
        'timestamp': seconds
    };
    if (this.main.model.settings.log_id() != null) {
        data['log_id'] = this.main.model.settings.log_id();
    }
    return data;
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
    if (this.main.model.server_is_connected('log_event')) {
        var data = this.createServerData();
        data['event'] = event_name;
        data['action'] = action;
        data['body'] = (body === undefined) ? '' : body;
        this.setStatus('Logging');
        // Trigger request
        $.post(this.main.model.constants.urls.log_event, data, 
               this.defaultResponse.bind(this))
         .fail(this.defaultFailure.bind(this));
    } else {
        this.setStatus('Offline', "Server is not connected!");
    }
}

BlockPyServer.prototype.markSuccess = function(success, callback) {
    var model = this.main.model;
    var server = this;
    if (model.server_is_connected('save_success')) {
        var data = this.createServerData();
        data['code'] = model.programs.__main__;
        data['status'] = success;
        this.main.components.editor.getPngFromBlocks(function(pngData, img) {
            data['image'] = pngData;
            img.remove();
            server.setStatus('Saving');
            // Trigger request
            $.post(model.constants.urls.save_success, data, 
                function(response) {
                   if (response.success) {
                        if (response.submitted) {
                            server.setStatus('Saved');
                        } else {
                            server.setStatus('Ungraded', response.message);
                        }
                        if (success && callback) {
                            callback(data);
                        }
                    } else {
                        console.error(response);
                        server.setStatus('Error', response.message);
                        if (success && callback) {
                            callback(data);
                        }
                    }
                })
             .fail(server.defaultFailure.bind(server));
        });
    } else {
        server.setStatus('Offline', "Server is not connected!");
    }
};

BlockPyServer.prototype.saveAssignment = function() {
    var model = this.main.model;
    if (model.server_is_connected('save_assignment') && 
        model.settings.auto_upload()) {
        var data = this.createServerData();
        data['introduction'] = model.assignment.introduction();
        data['parsons'] = model.assignment.parsons();
        data['initial'] = model.assignment.initial_view();
        data['importable'] = model.assignment.importable();
        data['disable_algorithm_errors'] = model.assignment.disable_algorithm_errors();
        data['disable_timeout'] = model.assignment.disable_timeout();
        data['name'] = model.assignment.name();
        data['modules'] = model.assignment.modules().join(','); // TODO: hackish, broken if ',' is in name
        
        var server = this;
        this.setStatus('Saving');
        clearTimeout(this.presentationTimer);
        // Trigger request
        this.presentationTimer = setTimeout(function() {
            $.post(model.constants.urls.save_assignment, data, 
                   server.defaultResponseWithoutVersioning.bind(server))
             .fail(server.defaultFailure.bind(server));
        }, this.TIMER_DELAY);
    } else {
        this.setStatus('Offline', "Server is not connected!");
    }
}

BlockPyServer.prototype.saveCode = function() {
    var model = this.main.model;
    if (model.server_is_connected('save_code') && 
        model.settings.auto_upload()) {
        var data = this.createServerData();
        var filename = model.settings.filename();
        data['filename'] = filename;
        data['code'] = model.programs[filename]();
        
        var server = this;
        this.setStatus('Saving');
        if (this.saveTimer[filename]) {
            clearTimeout(this.saveTimer[filename]);
        }
        this.saveTimer[filename] = setTimeout(function() {
            $.post(model.constants.urls.save_code, data, 
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
    var model = this.main.model;
    
    if (model.server_is_connected('get_history')) {
        var data = this.createServerData();
        var server = this;
        this.setStatus('Loading History');
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
    }
}

BlockPyServer.prototype.walkOldCode = function() {
    var server = this,
        main = this.main;
    if (this.inProgressWalks.length > 0) {
        var response = this.inProgressWalks.pop();
        console.log('Processing walk', response.log_id);
        main.setCode(response.code, '__main__');
        main.setCode(response.feedback, 'give_feedback');
        main.model.assignment.assignment_id = response.assignment_id;
        main.model.assignment.user_id = response.user_id;
        main.model.settings.log_id(response.log_id);
        main.components.engine.onExecutionEnd = function(newState) {
            console.log(response.log_id, newState);
            main.components.engine.onExecutionEnd = null;
            setTimeout(function() {
                server.walkOldCode()
            }, 0);
        };
        console.log("Running");
        main.components.engine.run();
    } else {
        var data = this.createServerData();
        this.setStatus('Retrieving');
        if (main.model.server_is_connected('walk_old_code')) {
            $.post(server.main.model.constants.urls.walk_old_code, data, 
                   function (response) {
                       if (response.success) {
                           if (response.more_to_do) {
                            server.inProgressWalks = response.walks;
                            server.walkOldCode();
                           }
                       } else {
                           server.setStatus('Failure', response.message);
                       }
                   })
            .fail(
            function(response) {
                console.error(response);
                setTimeout(function() {
                    server.walkOldCode()
                }, 3000);
            }
            );
            //server.defaultFailure.bind(server));
        } else {
            this.setStatus('Offline', "Server is not connected!");
        }
    }
}

/**
 *
 */
BlockPyServer.prototype.showOverlay = function() {
    this.overlay = $('<div class="blockpy-overlay"> </div>');
    this.overlay.appendTo(document.body)
}
BlockPyServer.prototype.hideOverlay = function() {
    this.overlay.remove();
}

BlockPyServer.prototype.loadAssignment = function(assignment_id) {
    var model = this.main.model;
    var server = this;
    if (model.server_is_connected('load_assignment')) {
        var data = this.createServerData();        
        data['assignment_id'] = assignment_id;
        this.setStatus('Loading');
        this.showOverlay();
        $.post(model.constants.urls.load_assignment, data, 
                function(response) {
                    if (response.success) {
                        server.main.setAssignment(response.settings,
                                                  response.assignment, 
                                                  response.programs)
                        server.setStatus('Loaded');
                        server.hideOverlay();
                    } else {
                        server.setStatus('Failure', response.message);
                        server.hideOverlay();
                    }
               })
         .fail(function() {
            server.hideOverlay();
            server.defaultFailure()
         });
    } else {
        this.setStatus('Offline', "Server is not connected!");
    }
}

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
/**
 * An object that manages the various editors, where users can edit their program. Also manages the
 * movement between editors.
 * There are currently four editors:
 *  - Blocks: A Blockly instance
 *  - Text: A CodeMirror instance
 *  - Instructor: Features for changing the assignment and environment settings
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
    
    // Hack to prevent chrome errors. Forces audio to load on demand. 
    // See: https://github.com/google/blockly/issues/299
    Blockly.WorkspaceSvg.prototype.preloadAudio_ = function() {};
    
    // Keep track of the toolbox width
    this.blocklyToolboxWidth = 0;
    
    // Initialize subcomponents
    this.initText();
    this.initBlockly();
    this.initInstructor();
    
    this.triggerOnChange = null;
    var editor = this;
    var firstEdit = true;
    this.main.model.program.subscribe(function() {
        editor.updateBlocksFromModel();
        editor.updateTextFromModel();
        
        if (editor.main.model.settings.filename() == "__main__" &&
            !firstEdit) {
            if (editor.triggerOnChange) {
                clearTimeout(editor.triggerOnChange);
            }
            var engine = editor.main.components.engine;
            editor.triggerOnChange = setTimeout(engine.on_change.bind(engine), 1000);
        }
        firstEdit = false;
    });
    
    // Handle mode switching
    this.main.model.settings.editor.subscribe(function() {editor.setMode()});
    
    // Handle filename switching
    this.main.model.settings.filename.subscribe(function (name) {
        if (name == 'give_feedback') {
            editor.setMode('Text');
        }
    });
    
    // Handle Upload mode turned on
    this.main.model.assignment.upload.subscribe(function(uploadsMode) {
        if (uploadsMode) {
            editor.setMode('Text');
        }
    });
    
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
    // Register model changer
    var editor = this;
    this.blockly.addChangeListener(function(evt) { 
        //editor.main.components.feedback.clearEditorErrors();
        editor.blockly.highlightBlock(null);
        editor.updateBlocks();
    });
    
    this.main.model.settings.filename.subscribe(function() {
        /*if (editor.main.model.settings.editor() == "Blocks") {
            editor.updateBlocksFromModel()
        }*/
    });
    this.main.model.assignment.modules.subscribe(function() {editor.updateToolbox(true)});
    // Force the proper window size
    this.blockly.resize();
    // Keep the toolbox width set
    this.blocklyToolboxWidth = this.getToolbarWidth();
    
    Blockly.captureDialog_ = this.copyImage.bind(this);
    
    // Enable static type checking! 
    /*
    this.blockly.addChangeListener(function() {
        if (!editor.main.model.settings.disable_variable_types()) {
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
    */


};

/**
 * Retrieves the current width of the Blockly Toolbox, unless
 * we're in read-only mode (when there is no toolbox).
 * @returns {Number} The current width of the toolbox.
 */
BlockPyEditor.prototype.getToolbarWidth = function() {
    if (this.main.model.settings.read_only()) {
        return 0;
    } else {
        return this.blockly.toolbox_.width;
    }
}

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

    // Ensure that it fills the editor area
    this.codeMirror.setSize(null, "100%");
};

BlockPyEditor.prototype.reloadIntroduction = function() {
    var introductionEditor = this.tag.find('.blockpy-presentation-body-editor');
    var model = this.main.model;
    introductionEditor.code(model.assignment.introduction());
}

/**
 * Initializes the Instructor tab, which has a number of buttons and menus for
 * manipulating assignments and the environment. One important job is to register the
 * SummerNote instance used for editing the Introduction of the assignment.
 */
BlockPyEditor.prototype.initInstructor = function() {
    var introductionEditor = this.tag.find('.blockpy-presentation-body-editor');
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
    this.reloadIntroduction();
    
    this.availableModules = this.tag.find('.blockpy-available-modules');
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
    
    this.blocklyToolboxWidth = this.getToolbarWidth();
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
 * Sets the current editor mode to Split mode, hiding the other menus.
 */
BlockPyEditor.prototype.setModeToSplit = function() {
    this.hideTextMenu();
    this.hideInstructorMenu();
    this.hideBlockMenu();
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
 * @param {String} mode - The new mode to set to ("Blocks", "Text", or "Instructor")
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
    } else if (mode == 'Split') {
        this.setModeToSplit();
    } else if (mode == 'Instructor') {
        this.setModeToInstructor();
    } else {
        this.main.components.feedback.internalError(""+mode, "Invalid Mode", "The editor attempted to change to an invalid mode.")
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
    if (!this.main.model.areBlocksUpdating()) {
        return false;
    }
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
        var changed = this.main.setCode(newCode);
        if (!changed) {
            this.silenceModel = 0;
        } else {
            // Update Text
            this.silenceText = true;
            this.setText(newCode);
        }
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
        if (this.previousLine < this.codeMirror.lineCount()) {
            this.codeMirror.addLineClass(this.previousLine, 'text', 'editor-error-line');
        }
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
        if (this.previousLine < this.codeMirror.lineCount()) {
            this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
            this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
        }
    }
    if (line < this.codeMirror.lineCount()) {
        this.codeMirror.addLineClass(line, 'text', 'editor-active-line');
    }
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
        if (this.previousLine < this.codeMirror.lineCount()) {
            this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
            this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
        }
    }
    if (line < this.codeMirror.lineCount()) {
        this.codeMirror.addLineClass(line, 'text', 'editor-error-line');
    }
    this.refreshBlockHighlight(line);
    this.previousLine = line;
}

/**
 * Highlights a block in Blockly. Unfortunately, this is the same as selecting it.
 *
 * @param {Number} block - The ID of the block object to highlight.
 */
BlockPyEditor.prototype.highlightBlock = function(block) {
    //this.blockly.highlightBlock(block);
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
    if (this.main.model.settings.editor() != "Blocks" &&
        this.main.model.settings.editor() != "Split") {
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
        var blockly = this.blockly;
        hblocks.forEach(function(elem) {
            //elem.addSelect();
            blockly.highlightBlock(elem.id, true);
        });
        /*if (hblocks.length > 0) {
            this.blockly.highlightBlock(hblocks[0].id, true);
        }*/
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
        if (this.previousLine < this.codeMirror.lineCount()) {
            this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-active-line');
            this.codeMirror.removeLineClass(this.previousLine, 'text', 'editor-error-line');
        }
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
 * This appears to be deprecated.
 *
 * @param {String} name - The name of the file being edited (e.g, "__main__", "starting_code")
 */
BlockPyEditor.prototype.changeProgram = function(name) {
    this.silentChange_ = true;
    if (name == 'give_feedback') {
        this.setMode('Text');
    }
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
                    '<block type="controls_if_better"></block>'+
                    '<block type="controls_if_better"><mutation else="1"></mutation></block>'+
                    //'<block type="controls_if"></block>'+
                    //'<block type="controls_if"><mutation else="1"></mutation></block>'+
                    '<block type="logic_compare"></block>'+
                    '<block type="logic_operation"></block>'+
                    '<block type="logic_negate"></block>'+
                  '</category>',
    'Iteration': '<category name="Iteration" colour="300">'+
                    '<block type="controls_forEach"></block>'+
                '</category>',
    'Functions': '<category name="Functions" custom="PROCEDURE" colour="210">'+
                '</category>',
    'Classes': '<category name="Classes" colour="210">'+
                    '<block type="class_creation"></block>'+
                    '<block type="class_creation">'+
                        '<mutation value="k"></mutation>'+
                    '</block>'+
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
    'Turtles': '<category name="Turtles" colour="180">'+
                    '<block type="turtle_create"></block>'+
                    '<block type="turtle_forward"></block>'+
                    '<block type="turtle_backward"></block>'+
                    '<block type="turtle_left"></block>'+
                    '<block type="turtle_right"></block>'+
                    '<block type="turtle_color"></block>'+
                '</category>',
    'Values':   '<category name="Values" colour="100">'+
                    '<block type="text"></block>'+
                    '<block type="math_number"></block>'+
                    '<block type="logic_boolean"></block>'+
                '</category>',
    'Tuples': '<category name="Tuples" colour="40">'+
                '<block type="tuple_create"></block>'+
              '</category>',
    'Lists':    '<category name="Lists" colour="30">'+
                    //'<block type="lists_create"></block>'+
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
    if (only_set && !this.main.model.settings.read_only()) {
        this.blockly.updateToolbox(xml);
        this.blockly.resize();
    } else {
        return xml;
    }
};

BlockPyEditor.prototype.DOCTYPE = '<?xml version="1.0" standalone="no"?>' + '<' + '!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
BlockPyEditor.prototype.cssData = null;
BlockPyEditor.prototype.loadCss = function() {
    if (this.cssData == null) {
        var txt = '.blocklyDraggable {}\n';
        txt += Blockly.Css.CONTENT.join('\n');
        if (Blockly.FieldDate) {
            txt += Blockly.FieldDate.CSS.join('\n');
        }
        // Strip off any trailing slash (either Unix or Windows).
        this.cssData = txt.replace(/<<<PATH>>>/g, Blockly.Css.mediaPath_);
    }
}

/**
 * Generates a PNG version of the current workspace. This PNG is stored in a Base-64 encoded
 * string as part of a data URL (e.g., "data:image/png;base64,...").
 * TODO: There seems to be some problems capturing blocks that don't start with
 * statement level blocks (e.g., expression blocks).
 * 
 * @param {Function} callback - A function to be called with the results. This function should take two parameters, the URL (as a string) of the generated base64-encoded PNG and the IMG tag.
 */
BlockPyEditor.prototype.getPngFromBlocks = function(callback) {
    this.loadCss();
    try {
        // Retreive the entire canvas, strip some unnecessary tags
        var blocks = this.blockly.svgBlockCanvas_.cloneNode(true);
        blocks.removeAttribute("width");
        blocks.removeAttribute("height");
        // Ensure that we have some content
        if (blocks.childNodes[0] !== undefined) {
            // Remove tags that offset
            blocks.removeAttribute("transform");
            blocks.childNodes[0].removeAttribute("transform");
            blocks.childNodes[0].childNodes[0].removeAttribute("transform");
            // Add in styles
            var linkElm = document.createElementNS("http://www.w3.org/1999/xhtml", "style");
            linkElm.textContent = this.cssData + '\n\n';
            blocks.insertBefore(linkElm, blocks.firstChild);
            // Get the bounding box
            var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
            // Create the XML representation of the SVG
            var xml = new XMLSerializer().serializeToString(blocks);
            xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="0 0 '+bbox.width+' '+bbox.height+'"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
            // create a file blob of our SVG.
            // Unfortunately, this crashes modern chrome for unknown reasons.
            //var blob = new Blob([ this.DOCTYPE + xml], { type: 'image/svg+xml' });
            //var url = window.URL.createObjectURL(blob);
            // Old method: this failed on IE
            var url = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(xml)));
            // Create an IMG tag to hold the new element
            var img  = document.createElement("img");
            img.style.display = 'block';
            img.onload = function() {
                var canvas = document.createElement('canvas');
                canvas.width = bbox.width;
                canvas.height = bbox.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                var canvasUrl;
                try {
                    canvasUrl = canvas.toDataURL("image/png");
                } catch (e) {
                    canvasUrl = url;
                }
                img.onload = null;
                callback(canvasUrl, img);
            }
            img.onerror = function() {
                callback("", img);
            }
            img.setAttribute('src', url);
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

/**
 * Module that connects to the CORGIS datasets and manages interactions
 * with them. This includes loading in datasets at launch and on-the-fly.
 * Note that this has no presence on screen, so it does not have a tag.
 *
 * @constructor
 * @this {BlockPyCorgis}
 * @param {Object} main - The main BlockPy instance
 */
function BlockPyCorgis(main) {
    this.main = main;
    
    this.loadedDatasets = [];
    this.loadDatasets();
}

BlockPyCorgis.prototype.loadDatasets = function(silently) {
    // Load in each the datasets
    var corgis = this,
        model = this.main.model,
        editor = this.main.components.editor,
        server = this.main.components.server;
    var imports = [];
    model.assignment.modules().forEach(function(name) {
        var post_prefix = name.substring(7).replace(/\s/g, '_').toLowerCase();
        if (!(name in BlockPyEditor.CATEGORY_MAP)) {
            imports.push.apply(imports, corgis.importDataset(post_prefix, name, silently));
        }
    });
    
    // When datasets are loaded, update the toolbox.
    $.when.apply($, imports).done(function() {
        if (model.settings.editor() == "Blocks") {
            editor.updateBlocksFromModel();
        }
        editor.updateToolbox(true);
    }).fail(function(e) {
        console.error(e);
    }).always(function() {
        server.finalizeSubscriptions();
    });
}

/**
 * Loads the definitions for a dataset into the environment, including
 * the dataset (as a JS file), the skulpt bindings, and the blockly
 * bindings. This requires access to a CORGIS server, and occurs
 * asynchronously. The requests are fired and their deferred objects
 * are returned - callers can use this information to perform an action
 * on completion of the import.
 *
 * @param {String} slug - The URL safe version of the dataset name
 * @param {String} name - The user-friendly version of the dataset name.
 * @returns {Array.<Deferred>} - Returns the async requests as deferred objects.
 */
BlockPyCorgis.prototype.importDataset = function(slug, name, silently) {
    var url_retrievals = [];
    if (this.main.model.server_is_connected('import_datasets')) {
        var root = this.main.model.constants.urls.import_datasets+'blockpy/'+slug+'/'+slug;
        this.main.model.status.dataset_loading.push(name);
        // Actually get data
        var get_dataset = $.getScript(root+'_dataset.js');
        var get_skulpt = $.get(root+'_skulpt.js', function(data) {
            Sk.builtinFiles['files']['src/lib/'+slug+'/__init__.js'] = data;
        });
        var get_blockly = $.getScript(root+'_blockly.js');
        // On completion, update menus.
        var corgis = this;
        $.when(get_dataset, get_skulpt, get_blockly).done(function() {
            corgis.loadedDatasets.push(slug);
            if (silently) {
                corgis.main.model.settings.server_connected(false);
                corgis.main.model.assignment.modules.push(name);
                corgis.main.components.editor.addAvailableModule(name);
                corgis.main.model.settings.server_connected(true);
            } else {
                corgis.main.model.assignment.modules.push(name);
                corgis.main.components.editor.addAvailableModule(name);
            }
            corgis.main.model.status.dataset_loading.pop();
        });
        url_retrievals.push(get_dataset, get_skulpt, get_blockly);
    }
    return url_retrievals;
}

/**
 * Opens a dialog box to present the user with the datasets available
 * through the CORGIS server. This requires a call, so this method
 * completes asynchronously. The dialog is composed of a table with
 * buttons to load the datasets (More than one dataset can be loaded
 * from within the dialog at a time).
 * 
 * @param {String} name - The name of the dataset to open. This is basically the user friendly version of the name, though it will be mangled into a slug.
 */
BlockPyCorgis.prototype.openDialog = function(name) {
    var corgis = this;
    if (this.main.model.server_is_connected('import_datasets')) {
        var root = this.main.model.constants.urls.import_datasets;
        $.getJSON(root+'index.json', function(data) {
            // Make up the Body
            var datasets = data.blockpy.datasets;
            var start = $("<p>Documentation is available at url</p>");
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
            // Show the actual dialog
            var editor = corgis.main.components.editor;
            corgis.main.components.dialog.show("Import Datasets", body, function() {
                if (editor.main.model.settings.editor() == "Blocks") {
                    editor.updateBlocksFromModel();
                }
            });
        });
    }
};

/**
 * This is a very simplistic helper function that will transform
 * a given button into a "Loaded" state (disabled, pressed state, etc.).
 *
 * @param {HTMLElement} btn - An HTML element to change the text of.
 */
var set_button_loaded = function(btn) {
    btn.addClass("active")
       .addClass('btn-success')
       .removeClass('btn-primary')
       .prop("disabled", true)
       .text("Loaded")
       .attr("aria-pressed", "true");
}

/**
 * An object for displaying the user's coding logs (their history).
 * A lightweight component, its only job is to open a dialog.
 *
 * @constructor
 * @this {BlockPyHistory}
 * @param {Object} main - The main BlockPy instance
 */
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

/**
 * Helper function to parse a date/time string and rewrite it as something
 * more human readable.
 * @param {String} timeString - the string representation of time ("YYYYMMDD HHMMSS")
 * @returns {String} - A human-readable time string.
 */
function prettyPrintDateTime(timeString) {
    var year = timeString.slice(0, 4),
        month = parseInt(timeString.slice(4, 6), 10)-1,
        day = timeString.slice(6, 8),
        hour = timeString.slice(9, 11),
        minutes = timeString.slice(11, 13),
        seconds = timeString.slice(13, 15);
    var date = new Date(year, month, day, hour, minutes, seconds);
    var dayStr = weekDays[date.getDay()];
    var monthStr = monthNames[date.getMonth()];
    var yearFull = date.getFullYear();
    var complete = dayStr+", "+monthStr+" "+date.getDate()+", "+yearFull+" at "+date.toLocaleTimeString();
    return complete;
}


/**
 * Opens the history dialog box. This requires a trip to the server and
 * occurs asynchronously. The users' code is shown in preformatted text
 * tags (no code highlighting currently) along with the timestamp.
 */
BlockPyHistory.prototype.openDialog = function() {
    var dialog = this.main.components.dialog;
    var body = "<pre>a = 0</pre>";
    this.main.components.server.getHistory(function (data) {
        body = data.reverse().reduce(function (complete, elem) { 
            var complete_str = prettyPrintDateTime(elem.time);
            var new_line = "<b>"+complete_str+"</b><br><pre>"+elem.code+"</pre>";
            return complete+"\n"+new_line;
        }, "");
        dialog.show("Work History", body, function() {});
    });
};
/**
 * An object for handling the conversion of Python to an English transliteration.
 * Currently dummied out, but we will bring this feature back.
 *
 * @constructor
 * @this {BlockPyEnglish}
 * @param {Object} main - The main BlockPy instance
 */
function BlockPyEnglish(main) {
    this.main = main; 
}

/**
 * A method for opening a dialog with the english transliteration.
 */
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
    this.main.components.server.logEvent('editor', 'trace');
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
 * Mark this problem as finished for the student. This will appear in the Feedback area,
 * and will also unhighlight lines in the editor and log to the server.
 */
BlockPyFeedback.prototype.finished = function() {
    this.title.html("Ran");
    this.original.hide();
    this.body.html("Your program ran successfully, without any errors. However, this problem does not have a correct solution. When you are satisfied with your program, you may stop working.");
    this.main.model.status.error("no errors");
    this.main.components.editor.unhighlightLines();
    this.main.components.server.logEvent('feedback', "Finished");
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
    this.title.html(name);
    this.original.hide();
    this.body.html(message);
    this.main.model.status.error("feedback");
    if (line !== undefined) {
        this.main.components.editor.highlightError(line-1);
    }
    this.main.components.server.logEvent('feedback', "Instructor Feedback", name+"\n|\n"+"\n|\n"+message);
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
        console.log(error);
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
 * Static method to convert a priority level into a number.
 */
BlockPyFeedback.priorityNumConvert = function(priority){
    switch(priority){
        case 'low': return 1;
        case 'high': return 3;
        default: case 'medium': return 2;
    }
};

/**
 * Static method to compare two priority labels.
 */
BlockPyFeedback.priorityComparator = function(a, b) {
    var priorityA = BlockPyFeedback.priorityNumConvert(a.priority);
    var priorityB = BlockPyFeedback.priorityNumConvert(b.priority);
    if (priorityA > priorityB) {
        return -1;
    } else if (priorityB > priorityA) {
        return 1;
    } else {
        return 0;
    }
};

/**
 * Present any accumulated feedback
 */
BlockPyFeedback.prototype.presentFeedback = function() {
    var report = this.main.model.execution.reports;
    var suppress = this.main.model.execution.suppressions;
    
    // Organize complaints
    var complaint = report['instructor'].complaint;
    var gentleComplaints = [];
    var verifierComplaints = [];
    if (complaint) {
        moveElements(complaint, gentleComplaints, function(e) { return e.priority == 'student' });
        moveElements(complaint, verifierComplaints, function(e) { return e.priority == 'verifier' });
    }
    
    // Verifier
    if (!suppress['verifier'] && !report['verifier'].success) {
        this.emptyProgram();
        return 'verifier';
    }
    // Parser
    if (verifierComplaints.length) {
        this.instructorFeedback(verifierComplaints[0].name, 
                                verifierComplaints[0].message, 
                                verifierComplaints[0].line);
        return 'instructor';
    }
    if (!suppress['parser'] && !report['parser'].success) {
        var parserReport = report['parser'].error;
        var codeLine = '.';
        if (parserReport.args.v.length > 3) {
            codeLine = ', where it says:<br><code>'+parserReport.args.v[3][2]+'</code>';
        }
        this.editorError(parserReport, "While attempting to process your Python code, I found a syntax error. In other words, your Python code has a mistake in it (e.g., mispelled a keyword, bad indentation, unnecessary symbol). You should check to make sure that you have written all of your code correctly. To me, it looks like the problem is on line "+ parserReport.args.v[2]+codeLine, parserReport.args.v[2]);
        return 'parser';
    }
    // Instructor
    if (!report['instructor'].success) {
        var error = report['instructor'].error;
        this.internalError(error, "Instructor Feedback Error", "Error in instructor feedback. Please show the above message to an instructor!");
        console.error(error);
        return 'instructor';
    }
    if (report['instructor'].compliments && report['instructor'].compliments.length) {
        //this.compliment(report['instructor'].compliments);
        console.log(report['instructor'].compliments);
    }
    if (complaint && complaint.length) {
        complaint.sort(BlockPyFeedback.sortPriorities);
        console.log(complaint);
        this.instructorFeedback(complaint[0].name, complaint[0].message, complaint[0].line);
        return 'instructor';
    }
    // Analyzer
    if (suppress['analyzer'] !== true) {//if a subtype is specified, or no suppression requested, present feedback
        if (!report['analyzer'].success) {
            this.internalError(report['analyzer'].error, "Analyzer Error", "Error in analyzer. Please show the above message to an instructor!");
        }
        var wasPresented = this.presentAnalyzerFeedback();
        if (wasPresented) {
            return 'analyzer';
        }
    }
    // Student runtime errors
    if (!suppress['student']) {
        if (!report['student'].success) {
            this.printError(report['student'].error);
            return 'student';
        }
    }
    // Gentle instructor feedback
    if (gentleComplaints.length) {
        this.instructorFeedback(gentleComplaints[0].name, 
                                gentleComplaints[0].message, 
                                gentleComplaints[0].line);
        return 'instructor';
    }
    //instructor completion flag
    if (report['instructor'].complete) {
        this.complete();
        return 'success';
    }
    if (!suppress['no errors']) {
        this.noErrors()
        return 'no errors';
    }
    return 'completed';
}

BlockPyFeedback.prototype.presentAnalyzerFeedback = function() {
    var report = this.main.model.execution.reports['analyzer'].issues;
    var suppress = this.main.model.execution.suppressions['analyzer'] || {};
    if (suppress === true) {
        // Suppress all types of analyzer errors
        return false;
    } else if (!suppress['Unconnected blocks'] && report["Unconnected blocks"].length >= 1) {
        var variable = report['Unconnected blocks'][0];
        this.semanticError("Unconnected blocks", "It looks like you have unconnected blocks on line "+variable.position.line+". Before you run your program, you must make sure that all of your blocks are connected and that there are no unfilled holes.", variable.position.line)
        return true;
    } else if (!suppress['Iteration variable is iteration list'] && report['Iteration variable is iteration list'].length >= 1) {
        var variable = report['Iteration variable is iteration list'][0];
        this.semanticError("Iteration Problem", "The property <code>"+variable.name+"</code> was iterated on line "+variable.position.line+", but you used the same variable as the iteration variable. You should choose a different variable name for the iteration variable. Usually, the iteration variable is the singular form of the iteration list (e.g., <code>for dog in dogs:</code>).", variable.position.line)
        return true;
    } else if (!suppress["Undefined variables"] && report["Undefined variables"].length >= 1) {
        var variable = report["Undefined variables"][0];
        this.semanticError("Initialization Problem", "The property <code>"+variable.name+"</code> was read on line "+variable.position.line+", but it was not given a value on a previous line. You cannot use a property until it has been initialized.", variable.position.line)
        return true;
    } else if (!suppress["Possibly undefined variables"] && report["Possibly undefined variables"].length >= 1) {
        var variable = report["Possibly undefined variables"][0];
        this.semanticError("Initialization Problem", "The property <code>"+variable.name+"</code> was read on line "+variable.position.line+", but it was possibly not given a value on a previous line. You cannot use a property until it has been initialized. Check to make sure that this variable was declared in all of the branches of your decision.", variable.position.line);
        return true;
    } else if (!suppress["Unread variables"] && report["Unread variables"].length >= 1) {
        var variable = report["Unread variables"][0];
        this.semanticError("Unused Property", "The property <code>"+variable.name+"</code> was set, but was never used after that.", null)
        return true;
    } else if (!suppress["Overwritten variables"] && report["Overwritten variables"].length >= 1) {
        var variable = report["Overwritten variables"][0];
        this.semanticError("Overwritten Property", "The property <code>"+variable.name+"</code> was set, but before it could be read it was changed on line "+variable.position.line+". It is unnecessary to change an existing variable's value without reading it first.", variable.position.line)
        return true;
    } else if (!suppress["Empty iterations"] && report["Empty iterations"].length >= 1) {
        var variable = report["Empty iterations"][0];
        this.semanticError("Iterating over empty list", "The property <code>"+variable.name+"</code> was set as an empty list, and then you attempted to iterate over it on "+variable.position.line+". You should only iterate over non-empty lists.", variable.position.line)
        return true;
    } else if (!suppress["Non-list iterations"] && report["Non-list iterations"].length >= 1) {
        var variable = report["Non-list iterations"][0];
        this.semanticError("Iterating over non-list", "The property <code>"+variable.name+"</code> is not a list, but you attempted to iterate over it on "+variable.position.line+". You should only iterate over non-empty lists.", variable.position.line)
        return true;
    } else if (!suppress["Incompatible types"] && report["Incompatible types"].length >= 1) {
        var variable = report["Incompatible types"][0];
        this.semanticError("Incompatible types", "You attempted to "+variable.operation+" a "+variable.left.type+" and a "+variable.right.type+" on line "+variable.position.line+". But you can't do that with that operator. Make sure both sides of the operator are the right type.", variable.position.line)
        return true;
    }
    return false;
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
    
    // Actually set up the toolbar!
    this.activateToolbar();
}

/**
 * Register click events for more complex toolbar actions.
 */
BlockPyToolbar.prototype.activateToolbar = function() {
    var main = this.main;
    this.tag.find('.blockpy-run').click(function() {
        main.components.server.logEvent('editor', 'run')
        main.components.engine.on_run();
    });
    this.tags.mode_set_text.click(function() {
        main.components.server.logEvent('editor', 'text')
        main.model.settings.editor("Text");
    });
    this.tag.find('.blockpy-toolbar-reset').click(function() {
        main.model.programs['__main__'](main.model.programs['starting_code']());
        //main.components.editor.updateBlocks();
        main.components.server.logEvent('editor', 'reset');
        if (main.model.assignment.parsons()) {
            main.components.editor.blockly.shuffle();
        }
    });
    this.tag.find('.blockpy-mode-set-blocks').click(function(event) {
        if (main.model.areBlocksUpdating()) {
            main.components.server.logEvent('editor', 'blocks')
            main.model.settings.editor("Blocks");
        } else {
            event.preventDefault();
            return false;
        }
    });
    /*this.tag.find('.blockpy-mode-set-instructor').click(function() {
        main.model.settings.editor("Instructor");
        main.components.server.logEvent('editor', 'instructor')
    });*/
    this.tag.find('.blockpy-mode-set-split').click(function(event) {
        if (main.model.areBlocksUpdating()) {
            main.model.settings.editor("Split");
            main.components.server.logEvent('editor', 'split')
        } else {
            event.preventDefault();
            return false;
        }
    });
    this.tag.find('.blockpy-toolbar-import').click(function() {
        main.components.corgis.openDialog();
        main.components.server.logEvent('editor', 'import')
    });
    this.tag.find('.blockpy-toolbar-history').click(function() {
        main.components.history.openDialog();
        main.components.server.logEvent('editor', 'history')
    });
    var instructorDialog = this.main.model.constants.container.find('.blockpy-instructor-popup');
    this.tag.find('.blockpy-toolbar-instructor').click(function() {
        instructorDialog.modal({'backdrop': false}).modal('show');
        instructorDialog.draggable({
            'handle': '.modal-title'
        });
        main.components.server.logEvent('editor', 'instructor')
    });
    this.tag.find('.blockpy-toolbar-english').click(function() {
        main.components.english.openDialog();
        main.components.server.logEvent('editor', 'english')
    });
    var uploadButton = this.tag.find('.blockpy-toolbar-upload');
    uploadButton.change(function() {
        var fr = new FileReader();
        var files = uploadButton[0].files;
        fr.onload = function(e) {
            main.setCode(e.target.result)
            main.components.server.logEvent('editor', 'upload')
            main.components.engine.on_run();
            main.components.server.logEvent('editor', 'run')
        };
        fr.readAsText(files[0]);
    });
    
    this.tag.find('.blockpy-toolbar-filename-picker label').click(function() {
        main.model.settings.filename($(this).data('filename'))
    });
}
/**
 * An object for executing Python code and passing the results along to interested components.
 *
 * Interesting components:
 *  Execution Buffer: Responsible for collecting the trace during program execution.
 *                    This prevents Knockoutjs from updating the view during execution.
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */
function BlockPyEngine(main) {
    this.main = main;
    this.configureSkulpt();
    
    // Keeps track of the tracing while the program is executing
    this.executionBuffer = {};
    this.abstractInterpreter = new AbstractInterpreter();
}

BlockPyEngine.prototype.INSTRUCTOR_MODULE_CODE = 'var $builtinmodule = '+$sk_mod_instructor.toString();

/**
 * Initializes the Python Execution engine and the Printer (console).
 * This is typically called only once.
 */
BlockPyEngine.prototype.configureSkulpt = function() {
    // Skulpt settings
    // No connected services
    Sk.connectedServices = {}
    // Ensure version 3, so we get proper print handling
    Sk.python3 = true;
    // Major Skulpt configurations
    var printer = this.main.components.printer;
    Sk.configure({
        // Function to handle the text outputted by Skulpt
        output: printer.print.bind(printer),
        // Function to handle loading in new files
        read: this.readFile.bind(this)
    });
    // Create an input box
    Sk.inputfunTakesPrompt = true;
    Sk.inputfun = this.inputFunction.bind(this);
    // Allow file access
    Sk.openFilenamePrefix = "sk-filename-";
    // Access point for instructor data
    Sk.executionReports = this.main.model.execution.reports;
    Sk.feedbackSuppressions = this.main.model.execution.suppressions;
}

/**
 *
 */
BlockPyEngine.prototype.setStudentEnvironment = function() {
    // Limit execution to 5 seconds
    Sk.execLimit = this.main.model.settings.disable_timeout() ? null : 5000;
    // Identify the location to put new charts
    Sk.console = this.main.components.printer.getConfiguration();
    // Stepper! Executed after every statement.
    Sk.afterSingleExecution = this.step.bind(this);
    // Unlink the instructor module to prevent abuse
    delete Sk.builtinFiles['files']['src/lib/instructor.js'];
    for (var module_name in $INSTRUCTOR_MODULES_EXTENDED) {
        delete Sk.builtinFiles['files']['src/lib/'+module_name];
    }
    // Unmute everything
    Sk.skip_drawing = false;
    this.main.model.settings.mute_printer(false);
}
BlockPyEngine.prototype.setInstructorEnvironment = function() {
    // Instructors have no limits
    Sk.execLimit = undefined;
    // Stepper! Executed after every statement.
    Sk.afterSingleExecution = null;
    // Create the instructor module
    Sk.builtinFiles['files']['src/lib/instructor.js'] = this.INSTRUCTOR_MODULE_CODE;
    for (var module_name in $INSTRUCTOR_MODULES_EXTENDED) {
        Sk.builtinFiles['files']['src/lib/'+module_name] = $INSTRUCTOR_MODULES_EXTENDED[module_name];
    }
    // Mute everything
    Sk.skip_drawing = true;
    this.main.model.settings.mute_printer(true);
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
 * Creates and registers a Promise from the Input box
 * @param {String} promptMessage - Message to display to the user.
 * 
 */
BlockPyEngine.prototype.inputFunction = function(promptMessage) {
    var printer = this.main.components.printer;
    var result = printer.printInput(promptMessage);
    if (result.promise) {
        var resolveOnClick;
        var submittedPromise = new Promise(function(resolve, reject) {
            resolveOnClick = resolve;
        });
        var submitForm = function() {
            resolveOnClick(result.input.val());
            result.input.prop('disabled', true);
            result.button.prop('disabled', true);
        };
        result.button.click(submitForm);
        result.input.keyup(function(e) {
            if (e.keyCode == 13) {
                submitForm();
            }
        });
        result.input.focus();
        return submittedPromise;
    } else {
        return "";
    }
}

/**
 * Resets the state of the execution engine, including reinitailizing
 * the execution buffer (trace, step, etc.), reseting the printer, and
 * hiding the trace button.
 *
 */
BlockPyEngine.prototype.resetExecution = function() {
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
 */
BlockPyEngine.prototype.step = function(variables, lineNumber, columnNumber, filename) {
    if (filename == '__main__.py') {
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
    execution.step(this.executionBuffer.step)
    execution.last_step(this.executionBuffer.last_step)
    execution.line_number(this.executionBuffer.line_number)
}

/**
 * Activated whenever the Run button is clicked
 */
BlockPyEngine.prototype.on_run = function() {
    this.main.model.execution.status("running");
    clearTimeout(this.main.components.editor.triggerOnChange);
    this.main.components.server.logEvent('editor', 'run')
    var engine = this;
    var model = this.main.model;
    engine.resetReports();
    engine.verifyCode();
    engine.updateParse();
    engine.analyzeParse();
    engine.runStudentCode(function() {
        engine.runInstructorCode('give_feedback', function() {
            var result = engine.main.components.feedback.presentFeedback();
            if (result == 'success' || result == 'no errors') {
                engine.main.components.server.markSuccess(1.0, model.settings.completedCallback);
            } else {
                engine.main.components.server.markSuccess(0.0, model.settings.completedCallback);
            }
            model.execution.status("complete");
        });
    });
}
/**
 * Activated whenever the Python code changes
 */
BlockPyEngine.prototype.on_change = function() {
    var FILENAME = 'on_change';
    // TODO: Do we actually want to skip if this is the case?
    // Skip if the instructor has not defined anything
    if (!this.main.model.programs[FILENAME]().trim()) {
        return false;
    }
    this.main.model.execution.status("changing");
    // On step does not perform parse analysis by default or run student code
    var engine = this;
    engine.resetReports();
    engine.verifyCode();
    engine.updateParse();
    this.main.model.execution.suppressions['verifier'] = true;
    this.main.model.execution.suppressions['analyzer'] = true;
    this.main.model.execution.suppressions['student'] = true;
    this.main.model.execution.suppressions['parser'] = true;
    this.main.model.execution.suppressions['no errors'] = true;
    engine.runInstructorCode(FILENAME, function() {
        engine.main.components.feedback.presentFeedback()
        engine.main.model.execution.status("complete");
        this.main.components.server.logEvent('editor', 'change')
    });
}

/**
 * Reset reports and suppressions
 */
BlockPyEngine.prototype.resetReports = function() {
    var report = this.main.model.execution.reports;
    report['verifier'] = {};
    report['parser'] = {};
    report['analyzer'] = {};
    report['student'] = {};
    report['instructor'] = {};
    var suppress = this.main.model.execution.suppressions;
    suppress['verifier'] = false;
    suppress['parser'] = false;
    suppress['analyzer'] = false;
    suppress['student'] = false;
    suppress['no errors'] = false;
}

BlockPyEngine.prototype.verifyCode = function() {
    this.main.model.execution.status("verifying");
    var report = this.main.model.execution.reports;
    var FILENAME = '__main__';
    var code = this.main.model.programs[FILENAME]();
    // Make sure it has code
    if (code.trim()) {
        report['verifier'] = {
            'success': true,
            'code': code
        }
    } else {
        report['verifier'] = {
            'success': false,
            'code': code
        }
    }
}

/**
 * Ensure that the parse information is up-to-date
 */
BlockPyEngine.prototype.updateParse = function() {
    this.main.model.execution.status("parsing");
    var FILENAME = '__main__';
    var code = this.main.model.programs[FILENAME]();
    var report = this.main.model.execution.reports;
    // Attempt a parse
    try {
        var parse = Sk.parse(FILENAME, code);
        var ast = Sk.astFromParse(parse.cst, FILENAME, parse.flags);
    } catch (error) {
        // Report the error
        report['parser'] = {
            'success': false,
            'error': error
        }
        return false;
    }
    // Successful parse
    report['parser'] = {
        'success': true,
        'ast': ast
    }
    return true;
}

/**
 * Run the abstract interpreter
 */
BlockPyEngine.prototype.analyzeParse = function() {
    this.main.model.execution.status("analyzing");
    var report = this.main.model.execution.reports;
    if (!report['parser']['success']) {
        report['analyzer'] = {
            'success': false,
            'error': 'Parser was unsuccessful. Cannot run Abstract Interpreter'
        }
        return false;
    }
    var ast = report['parser']['ast'];
    try {
        this.abstractInterpreter.processAst(ast);
    } catch (error) {
        report['analyzer'] = {
            'success': false,
            'error': error
        }
        return false;
    }
    report['analyzer'] = {
        'success': true,
        'variables': this.abstractInterpreter.variableTypes,
        'behavior': this.abstractInterpreter.variablesNonBuiltin,
        'issues': this.abstractInterpreter.report
    }
    return true;
}

/**
 * Run the student code
 */
BlockPyEngine.prototype.runStudentCode = function(after) {
    this.main.model.execution.status("student");
    var report = this.main.model.execution.reports;
    var engine = this;
    // Prepare execution
    this.resetExecution();
    this.setStudentEnvironment();
    // Actually run the python code
    var filename = '__main__';
    var code = this.main.model.programs[filename]();
    Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody(filename, false, code, true);
    }).then(
        // Success
        function (module) {
            Sk.afterSingleExecution(module.$d, -1, 0, filename+".py");
            engine.lastStep();
            report['student'] = {
                'success': true,
                'trace': engine.executionBuffer.trace,
                'module': module,
                'output': engine.main.model.execution.output
            }
            after();
            engine.executionEnd_();
        },
        // Failure
        function (error) {
            report['student'] = {
                'success': false,
                'error': error
            }
            after();
            engine.executionEnd_();
        }
    );
}

/**
 * Run the instructor code
 */
BlockPyEngine.prototype.runInstructorCode = function(filename, after) {
    this.main.model.execution.status("instructor");
    var report = this.main.model.execution.reports;
    // Prepare execution
    this.setInstructorEnvironment();
    // Actually run the python code
    var studentCode = this.main.model.programs['__main__']();
    if (!report['parser'].success) {
        studentCode = 'pass';
    }
    instructorCode = (
        'from instructor import *\n'+
        'def run_student():\n'+
        '    try:\n'+
        indent(indent(studentCode))+'\n'+
        '    except Exception as error:\n'+
        '        return error\n'+
        '    return None\n'+
        this.main.model.programs[filename]()
    );
    var engine = this;
    report['instructor'] = {
        'compliments': [],
        //'complete': false // Actually, let's use undefined for now.
    };
    Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody(filename, false, instructorCode, true);
    }).then(
        // Success
        function (module) {
            report['instructor']['success'] = true;
            after();
        },
        // Failure
        function (error) {
            console.log(error);
            if (error.tp$name === 'GracefulExit') {
                report['instructor']['success'] = true;
            } else {
                report['instructor']['success'] = false;
                report['instructor']['error'] = error;
            }
            after();
        }
    );
}


/**
 * Consume a set of variables traced from the execution and parse out any
 * global variables and modules.
 *
 * @param {Object} variables - a mapping of variable names to their Skupt value.
 */
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

/**
 * Convert a Skulpt value into a more easily printable object.
 * 
 * @param {String} property
 * @param {Object} value - the skulpt value
 */
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
 * Definable function to be run when execution has fully ended,
 * whether it succeeds or fails.
 */
BlockPyEngine.prototype.onExecutionEnd = null;

/**
 * Helper function that will attempt to call the defined onExecutionEnd,
 * but will do nothing if there is no function defined.
 */
BlockPyEngine.prototype.executionEnd_ = function() {
    if (this.onExecutionEnd !== null) {
        this.onExecutionEnd();
    }
};
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
function BlockPy(settings, assignment, programs) {
    this.localSettings = new LocalStorageWrapper('localSettings');
    this.initModel(settings);
    if (assignment !== undefined) {
        this.setAssignment(settings, assignment, programs);
    }
    this.initModelMethods();
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
    this.applyModel();
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
BlockPy.prototype.applyModel = function() {
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
 * Helper function for setting the current code, optionally in the given filename.
 *
 * @param {String} code - The new Python source code to set.
 * @param {String?} name - An optional filename (e.g,. '__main__') to update. Defaults to the currently selected filename.
 * @returns {Boolean} - whether the code was updated (i.e. there was a diff between new and old).
 */
BlockPy.prototype.setCode = function(code, name) {
    if (name === undefined) {
        name = this.model.settings.filename();
    }
    var original = this.model.programs[name]();
    this.model.programs[name](code);
    return original != this.model.programs[name]();
}

/**
 * Initializes the model to its defaults
 */
BlockPy.prototype.initModel = function(settings) {
    var getDefault = this.localSettings.getDefault.bind(this.localSettings);
    this.model = {
        // User level settings
        'settings': {
            // Default mode when you open the screen is text
            // 'Text', 'Blocks', "Split"
            'editor': ko.observable(settings.editor || getDefault('editor','Split')),
            // Default mode when you open the screen is instructor
            // boolean
            'instructor': ko.observable(settings.instructor),
            // Track the original value
            // boolean
            'instructor_initial': ko.observable(settings.instructor),
            // Internal for Refresh mechanism to fix broken logs
            // String
            'log_id': ko.observable(null),
            // boolean
            'enable_blocks': ko.observable(true),
            // Whether the canvas is read-only
            // boolean
            'read_only': ko.observable(false),
            // The current filename that we are editing
            // string
            'filename': ko.observable("__main__"),
            // boolean
            'show_settings': ko.observable(false),
            // boolean
            'disable_semantic_errors': ko.observable(false),
            // boolean
            'disable_variable_types': ko.observable(false),
            // boolean
            'disable_timeout': ko.observable(false),
            // boolean
            'auto_upload': ko.observable(true),
            // boolean
            'developer': ko.observable(false),
            // boolean
            'mute_printer': ko.observable(false),
            // function
            'completedCallback': settings.completedCallback,
            // boolean
            'server_connected': ko.observable(true)
        },
        // Assignment level settings
        'assignment': {
            'modules': ko.observableArray(BlockPy.DEFAULT_MODULES),
            'assignment_id': ko.observable(null),
            'student_id': null,
            'course_id': null,
            'group_id': null,
            'version': ko.observable(0),
            'name': ko.observable('Untitled'),
            'introduction': ko.observable(''),
            "initial_view": ko.observable('Split'),
            'parsons': ko.observable(false),
            'upload': ko.observable(false),
            'importable': ko.observable(false),
            'has_files': ko.observable(false),
            'disable_algorithm_errors': ko.observable(false),
            'disable_timeout': ko.observable(false)
        },
        // Programs' actual code
        'programs': {
            "__main__": ko.observable(''),
            "starting_code": ko.observable(''),
            "give_feedback": ko.observable(''),
            "on_change": ko.observable(''),
            "answer": ko.observable('')
        },
        // Information about the current run of the program
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
            // boolean
            'show_trace': ko.observable(false),
            // object: strings => objects
            'reports': {},
            // objects: strings => boolean
            'suppressions': {}
            
        },
        // Internal and external status information
        'status': {
            // boolean
            'loaded': ko.observable(false),
            // Status text
            // string
            'text': ko.observable("Loading"),
            // 'none', 'runtime', 'syntax', 'semantic', 'feedback', 'complete', 'editor'
            'error': ko.observable('none'),
            // "Loading", "Saving", "Ready", "Disconnected", "Error"
            'server': ko.observable("Loading"),
            // Some message from a server error can go here
            'server_error': ko.observable(''),
            // Dataset loading
            // List of promises
            'dataset_loading': ko.observableArray()
        },
        // Constant globals for this page, cannot be changed
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
    }
}

/**
 * Define various helper methods that can be used in the view, based on 
 * data from the model.
 */
BlockPy.prototype.initModelMethods = function() {
    // The code for the current active program file (e.g., "__main__")
    this.model.program = ko.computed(function() {
        return this.programs[this.settings.filename()]();
    }, this.model) //.extend({ rateLimit: { method: "notifyWhenChangesStop", timeout: 400 } });
    
    // Whether this URL has been specified
    this.model.server_is_connected = function(url) {
        return this.settings.server_connected() &&
               this.constants.urls !== undefined && this.constants.urls[url] !== undefined;
    };
    
    var modelSettings = this.model.settings;
    this.model.showHideSettings = function() {
        modelSettings.show_settings(!modelSettings.show_settings());
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
            case 'Ungraded': return ['label-warning', 'Ungraded']
            case 'Disconnected': return ['label-danger', 'Disconnected'];
            case 'Error': return ['label-danger', 'Error'];
        }
    }, this.model);
    // Helper function to map Execution status messages to UI elements
    this.model.execution_status_class = ko.computed(function() {
        switch (this.execution.status()) {
            default: case 'idle': return ['label-success', 'Ready'];
            case 'running': return ['label-warning', 'Running'];
            case 'changing': return ['label-warning', 'Changing'];
            case 'verifying': return ['label-warning', 'Verifying'];
            case 'parsing': return ['label-warning', 'Parsing'];
            case 'analyzing': return ['label-warning', 'Analyzing'];
            case 'student': return ['label-warning', 'Student'];
            case 'instructor': return ['label-warning', 'Instructor'];
            case 'complete': return ['label-success', 'Idle'];
            
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
        //console.log(execution.trace(), execution.trace().length-1, execution.trace_step())
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
    
    this.model.areBlocksUpdating = ko.pureComputed(function() {
        return (!this.assignment.upload() &&
                (this.settings.filename() == "__main__" ||
                 this.settings.filename() == "starting_code"))
    }, this.model);
    
    // For performance reasons, batch notifications for execution handling.
    // I'm not even sure these have any value any more.
    execution.trace.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    execution.step.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    execution.last_step.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
    execution.line_number.extend({ rateLimit: { timeout: 20, method: "notifyWhenChangesStop" } });
}

/**
 * Restores any user interface items to their original states.
 * This is used to manually reset anything that isn't tied automatically to
 * the model.
 */
BlockPy.prototype.resetSystem = function() {
    if (this.components) {
        this.components.feedback.clear();
        this.components.printer.resetPrinter();
    }
}

/**
 * Function for initializing user, course, and assignment group info.
 */
BlockPy.prototype.setUserData = function(student_id, course_id, group_id) {
    this.model.assignment['group_id'] = group_id;
    this.model.assignment['student_id'] = student_id;
    this.model.assignment['course_id'] = course_id;
}

/**
 * Helper function for loading in an assignment.
 */
BlockPy.prototype.setAssignment = function(settings, assignment, programs) {
    this.model.settings.server_connected(false);
    this.resetSystem();
    // Settings
    if (settings.filename) {
        this.model.settings['filename'](settings.filename);
    }
    // Update the current filename ONLY if we're editing the __main__
    if (this.model.settings['filename']() == '__main__') {
        this.model.settings['editor'](assignment.initial_view);
    }
    if (settings.instructor) {
        this.model.settings['instructor'](settings.instructor);
        this.model.settings['instructor_initial'](settings.instructor);
    }
    this.model.settings['enable_blocks'](settings.blocks_enabled);
    this.model.settings['read_only'](settings.read_only);
    this.model.settings['show_settings'](settings.show_settings);
    this.model.settings['disable_semantic_errors'](
                    settings.disable_semantic_errors || 
                    assignment.disable_algorithmic_errors || 
                    false);
    this.model.settings['disable_variable_types'](settings.disable_variable_types);
    this.model.settings['disable_timeout'](settings.disable_timeout || 
                                           assignment.disable_timeout);
    this.model.settings['developer'](settings.developer);
    if (settings.completedCallback) {
        this.model.settings['completedCallback'] = settings.completedCallback;
    }
    // Assignment
    if (assignment.modules) {
        var new_modules = expandArray(this.model.assignment['modules'](), 
                                    assignment.modules.added || [], 
                                    assignment.modules.removed || []);
        this.model.assignment['modules'](new_modules);
    }
    this.model.assignment['assignment_id'](assignment.assignment_id);
    this.model.assignment['group_id'] = assignment.group_id;
    this.model.assignment['student_id'] = assignment.student_id;
    this.model.assignment['course_id'] = assignment.course_id;
    this.model.assignment['version'](assignment.version);
    this.model.assignment['name'](assignment.name);
    this.model.assignment['introduction'](assignment.introduction);
    if (assignment.initial_view) {
        this.model.assignment['initial_view'](assignment.initial_view);
    }
    if (assignment.has_files) {
        this.model.assignment['has_files'](assignment.has_files);
    }
    this.model.assignment['parsons'](assignment.parsons);
    this.model.assignment['upload'](assignment.upload);
    if (assignment.importable) {
        this.model.assignment['importable'](assignment.importable);
    }
    if (assignment.disable_algorithm_errors) {
        this.model.assignment['disable_algorithm_errors'](assignment.disable_algorithm_errors);
    }
    // Programs
    if (programs.__main__ !== undefined) {
        this.model.programs['__main__'](programs.__main__);
    }
    if (assignment.starting_code !== undefined) {
        this.model.programs['starting_code'](assignment.starting_code);
    }
    if (assignment.give_feedback !== undefined) {
        this.model.programs['give_feedback'](assignment.give_feedback);
    }
    if (assignment.on_change !== undefined) {
        this.model.programs['on_change'](assignment.on_change);
    }
    this.model.programs['answer'](assignment.answer);
    // Update Model
    // Reload blockly
    // Reload CodeMirror
    // Reload summernote
    this.components.editor.reloadIntroduction();
    this.model.settings.server_connected(true)
    this.components.corgis.loadDatasets(true);
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
    // Fix Function#name on browsers that do not support it (IE):
    // Courtesy: http://stackoverflow.com/a/17056530/1718155
    if (!(function f() {}).name) {
        Object.defineProperty(Function.prototype, 'name', {
            get: function() {
                var name = (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
                // For better performance only parse once, and then cache the
                // result through a new accessor for repeated access.
                Object.defineProperty(this, 'name', { value: name });
                return name;
            }
        });
    }
}
