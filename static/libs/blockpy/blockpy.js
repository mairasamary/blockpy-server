(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("ko"));
	else if(typeof define === 'function' && define.amd)
		define("blockpy", ["jQuery", "ko"], factory);
	else if(typeof exports === 'object')
		exports["blockpy"] = factory(require("jQuery"), require("ko"));
	else
		root["blockpy"] = factory(root["jQuery"], root["ko"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_knockout__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blockpy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blockpy.js":
/*!************************!*\
  !*** ./src/blockpy.js ***!
  \************************/
/*! exports provided: BlockPy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPy", function() { return BlockPy; });
/* harmony import */ var _css_blockpy_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/blockpy.css */ "./src/css/blockpy.css");
/* harmony import */ var _css_blockpy_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_blockpy_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_bootstrap_retheme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bootstrap_retheme.css */ "./src/css/bootstrap_retheme.css");
/* harmony import */ var _css_bootstrap_retheme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_retheme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storage.js */ "./src/storage.js");
/* harmony import */ var editors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! editors.js */ "./src/editors.js");
/* harmony import */ var editor_python_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editor/python.js */ "./src/editor/python.js");
/* harmony import */ var server_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! server.js */ "./src/server.js");
/* harmony import */ var interface_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! interface.js */ "./src/interface.js");
/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files */ "./src/files.js");
/* harmony import */ var _editor_abstract_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor/abstract_editor */ "./src/editor/abstract_editor.js");
/* harmony import */ var engine_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! engine.js */ "./src/engine.js");
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trace */ "./src/trace.js");
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./console */ "./src/console.js");
/* harmony import */ var feedback_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! feedback.js */ "./src/feedback.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

















/**
 * Major entry point for creating a BlockPy instance
 */

var BlockPy =
/*#__PURE__*/
function () {
  /**
   * @param {Object} configuration - User level settings (e.g., what editor mode, whether to mute semantic errors, etc.)
   * @param {Object} assignment - Assignment level settings (data about the loaded assignment, user, submission, etc.)
   * @param {Object} submission - Includes the source code of any programs to be loaded
   */
  function BlockPy(configuration, assignment, submission) {
    _classCallCheck(this, BlockPy);

    this.initModel(configuration);

    if (assignment !== undefined) {
      this.setAssignment(configuration, assignment, submission);
    }

    this.initMain();
  }
  /**
   * Initializes the BlockPy object by initializing its interface,
   * model, and components.
   *
   */


  _createClass(BlockPy, [{
    key: "initMain",
    value: function initMain() {
      this.initUtilities();
      this.initModelMethods();
      this.turnOnHacks();
      this.initInterface();
      this.applyModel();
      this.initComponents();
      this.start();
    }
  }, {
    key: "getSetting",

    /**
     * Retrieves a default value or
     * @param {string} key - the key to look up a value for
     * @param {Object} defaultValue - if the key is not found anywhere, use this value
     */
    value: function getSetting(key, defaultValue) {
      if (key in this.initialConfiguration_) {
        return this.initialConfiguration_[key];
      } else if (this.localSettings_.has(key)) {
        return this.localSettings_.get(key);
      } else {
        return defaultValue;
      }
    }
    /**
     * Initializes the model to its defaults.
     *
     * Categories:
     *   * user: values for the current user (stored to server)
     *   * assignment: values for the current assignment (stored to server)
     *   * submission: values for the current submission (stored to server)
     *   * display: flags related to current visibility (stored to localSettings)
     *   * status: messages related to current status (not stored)
     *   * execution: values related to last run (not stored)
     *   * configuration: constant values related to setup (not stored)
     */

  }, {
    key: "initModel",
    value: function initModel(configuration) {
      // Connect to local storage
      this.localSettings_ = new storage_js__WEBPACK_IMPORTED_MODULE_3__["LocalStorageWrapper"]("localSettings");
      this.initialConfiguration_ = configuration;
      this.model = {
        user: {
          id: ko.observable(configuration["user.id"]),
          name: ko.observable(configuration["user.name"]),

          /**
           * Whether you are an Owner (can modify the assignment), Grader (can view
           * the assignments' information) or Student (can not see any instructor stuff).
           * @type {bool}
           */
          role: ko.observable(this.getSetting("user.role", true)),

          /**
           * Current course for this user
           */
          courseId: ko.observable(configuration["user.course_id"]),

          /**
           * Current assignment group that this user is inside
           */
          groupId: ko.observable(configuration["user.group_id"])
        },
        assignment: {
          id: ko.observable(null),
          name: ko.observable("Scratch Canvas"),
          instructions: ko.observable("Welcome to BlockPy. Try editing and running the code below."),

          /**
           * The human-friendly URL to use as a shortcut for this assignment
           */
          url: ko.observable(""),

          /**
           * Any additional files for the assignment's instructor space
           */
          extraFiles: ko.observableArray([]),
          onRun: ko.observable(configuration["assignment.on_run"]),
          onChange: ko.observable(configuration["assignment.on_change"]),
          onEval: ko.observable(configuration["assignment.on_eval"]),
          //
          startingCode: ko.observableArray([Object(_files__WEBPACK_IMPORTED_MODULE_8__["makeModelFile"])("^starting_code.py", configuration["assignment.starting_code"])]),
          forkedId: ko.observable(null),
          forkedVersion: ko.observable(null),
          ownerId: ko.observable(null),
          courseId: ko.observable(null),
          version: ko.observable(null),
          tags: ko.observableArray([]),
          sampleSubmissions: ko.observableArray([]),
          settings: {
            /**
             * Whether or not the user is allowed to edit the file directly
             * @type {bool}
             */
            canEdit: ko.observable(configuration["assignment.can_edit"]),

            /**
             * Whether or not the user can use blocks
             * @type {bool}
             */
            canBlocks: ko.observable(configuration["assignment.can_blocks"]),

            /**
             * Whether to prevent timeouts (potentially allow infinite loops)
             * @type {bool}
             */
            disableTimeout: ko.observable(configuration["assignment.disable_timeout"]),

            /**
             * What level of toolbox to present to the user
             */
            toolboxLevel: ko.observable(configuration["assignment.toolbox_level"] || "normal"),

            /**
             * When the student opens this assignment, what Python editor mode to start in
             */
            startView: ko.observable(editor_python_js__WEBPACK_IMPORTED_MODULE_5__["DisplayModes"].SPLIT),

            /**
             * Whether this a parson's style question
             */
            isParsons: ko.observable(configuration["assignment.is_parsons"]),
            // Whether to even try to run feedback
            disableFeedback: ko.observable(false),
            // Whether to immediately start in Interactive Console mode
            startInteractive: ko.observable(configuration["assignment.start_interactive"]),
            // What menus/feedback to show and hide
            // TODO: make the rest of these based on configuration
            hideScore: ko.observable(false),
            hideFiles: ko.observable(true),
            hideEditor: ko.observable(false),
            hideAll: ko.observable(false),
            hideImportDatasetsButton: ko.observable(false),
            hideImportStatements: ko.observable(false),
            hideQueuedInputs: ko.observable(true),
            hideCoverageButton: ko.observable(false)
          }
        },
        submission: {
          id: ko.observable(null),
          code: ko.observableArray([Object(_files__WEBPACK_IMPORTED_MODULE_8__["makeModelFile"])("answer.py", configuration["submission.code"] || "")]),
          url: ko.observable(""),
          endpoint: ko.observable(""),
          score: ko.observable(0),
          correct: ko.observable(false),
          // assignmentId inferred from assignment.id
          // courseId inferred from user.courseId
          // userId inferred from user.id
          // assignmentVersion inferred from assignment.version
          version: ko.observable(0),
          status: ko.observable("Started")
        },
        display: {
          /**
           * Currently visible File, if applicable
           * @type {String}
           */
          filename: ko.observable(null),

          /**
           * Whether or not to be presented with the instructor settings and files
           * @type {bool}
           */
          instructor: ko.observable(this.getSetting("display.instructor", "true") === "true"),

          /**
           * Whether or not to prevent the printer from showing things
           */
          mutePrinter: ko.observable(false),

          /**
           * (Python Views) The current editor mode.
           * @type {DisplayModes}
           */
          pythonMode: ko.observable(this.getSetting("display.python.mode", editor_python_js__WEBPACK_IMPORTED_MODULE_5__["DisplayModes"].SPLIT)),

          /**
           * Whether or not to be auto-saving changes in Python editor
           * If an integer, specifies the delay that should be used (microseconds).
           * This is never on in non-Python editors.
           * @type {bool|int}
           */
          autoSave: ko.observable(true),

          /**
           * Whether or not the console is full width and feedback is hidden
           */
          bigConsole: ko.observable(false),

          /**
           * Which panel to show in the second row's second column
           * @type {SecondRowSecondPanelOptions}
           */
          secondRowSecondPanel: ko.observable(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].FEEDBACK),

          /**
           * Whether or not to be tracing the code right now
           */
          traceExecution: ko.observable(false),

          /**
           * The list of promises to still resolve while loading datasets
           * @type {Array<Promise>}
           */
          loadingDatasets: ko.observableArray([]),

          /**
           * The temporary changed value of the instructions have been changed from what is in the assignment
           */
          changedInstructions: ko.observable(null),

          /**
           * A holder for the timer to trigger on-changes
           */
          triggerOnChange: null
        },
        status: {
          // @type {ServerStatus}
          loadAssignment: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadAssignmentMessage: ko.observable(""),
          // @type {ServerStatus}
          loadHistory: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadHistoryMessage: ko.observable(""),
          // @type {ServerStatus}
          loadFile: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadFileMessage: ko.observable(""),
          // @type {ServerStatus}
          loadDataset: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          loadDatasetMessage: ko.observable(""),
          // @type {ServerStatus}
          logEvent: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          logEventMessage: ko.observable(""),
          // @type {ServerStatus}
          saveFile: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveFileMessage: ko.observable(""),
          // @type {ServerStatus}
          saveAssignment: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveAssignmentMessage: ko.observable(""),
          // @type {ServerStatus}
          updateStatus: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          updateStatusMessage: ko.observable(""),
          // @type {ServerStatus}
          onExecution: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY)
        },
        execution: {
          // Information about in-progress executions
          reports: {},
          // list of Output objects
          output: ko.observableArray([]),
          // Information related to a student run
          student: {
            // str: the filename that was last executed and is associated with these results
            filename: ko.observable(null),
            // integer
            currentStep: ko.observable(null),
            // integer
            lastStep: ko.observable(0),
            // integer
            currentLine: ko.observable(null),
            lastLine: ko.observable(0),
            // array of simple objects
            currentTraceData: ko.observableArray([]),
            // integer
            currentTraceStep: ko.observable(0),
            // Actual execution results
            results: null
          },
          // Information related to feedback from the instructor run
          feedback: {
            // str (markdown)
            message: ko.observable("*Ready*"),
            category: ko.observable(null),
            label: ko.observable(null),
            hidden: ko.observable(false),
            linesError: ko.observableArray([]),
            linesUncovered: ko.observableArray([]),
            // The results of the last execution
            results: null
          }
        },
        configuration: {
          /**
           * Functions to fire when certain events occur
           */
          callbacks: {
            /**
             * When the student gets a success
             */
            "success": this.initialConfiguration_["callback.success"]
          },

          /**
           * Whether or not the server is connected.
           * @type {bool}
           */
          serverConnected: ko.observable(this.getSetting("server.connected", true)),
          // string
          blocklyPath: this.initialConfiguration_["blockly.path"],
          // string
          attachmentPoint: this.initialConfiguration_["attachment.point"],
          // JQuery object
          container: null,
          // Maps codes ('log_event', 'save_code') to URLs
          urls: this.initialConfiguration_["urls"] || {}
        }
      };
    }
  }, {
    key: "initInterface",

    /**
     * Creates the interface
     */
    value: function initInterface() {
      var constants = this.model.configuration;
      var gui = Object(interface_js__WEBPACK_IMPORTED_MODULE_7__["makeInterface"])(this);
      constants.container = jquery__WEBPACK_IMPORTED_MODULE_2___default()(constants.attachmentPoint).html(jquery__WEBPACK_IMPORTED_MODULE_2___default()(gui));
    }
  }, {
    key: "loadAssignment",
    value: function loadAssignment(assignment_id) {
      this.components.server.loadAssignment(assignment_id);
    }
  }, {
    key: "initModelMethods",
    value: function initModelMethods() {
      var self = this;
      var model = this.model;
      model.ui = {
        role: {
          isGrader: ko.pureComputed(function () {
            return model.user.role() === "owner" || model.user.role() === "grader";
          })
        },
        instructions: {
          isChanged: ko.pureComputed(function () {
            return model.display.changedInstructions() !== null;
          }),
          current: ko.pureComputed(function () {
            return model.ui.instructions.isChanged() ? self.utilities.markdown(model.display.changedInstructions()) : self.utilities.markdown(model.assignment.instructions());
          }),
          reset: function reset() {
            return model.display.changedInstructions(null);
          }
        },
        secondRow: {
          isFeedbackVisible: ko.pureComputed(function () {
            return model.display.secondRowSecondPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].FEEDBACK;
          }),
          isTraceVisible: ko.pureComputed(function () {
            return model.display.secondRowSecondPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].TRACE;
          }),
          isConsoleShowVisible: ko.pureComputed(function () {
            return model.ui.secondRow.isFeedbackVisible() || model.ui.secondRow.isTraceVisible();
          }),
          switchLabel: ko.pureComputed(function () {
            return model.execution.student.lastStep() !== null ? "View Trace" : "";
          }),
          advanceState: function advanceState() {
            var currentPanel = model.display.secondRowSecondPanel;

            if (currentPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE) {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].FEEDBACK);
            } else if (currentPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].TRACE) {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE);
            } else if (model.execution.student.lastStep() !== null) {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].TRACE);
            } else {
              currentPanel(interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE);
            }
          }
        },
        console: {
          size: ko.pureComputed(function () {
            return model.display.secondRowSecondPanel() === interface_js__WEBPACK_IMPORTED_MODULE_7__["SecondRowSecondPanelOptions"].NONE ? "col-md-12" : "col-md-6";
          })
        },
        feedback: {
          badge: ko.pureComputed(function () {
            if (model.execution.feedback.category() === null) {
              return "label-none";
            }

            switch (model.execution.feedback.category().toLowerCase()) {
              default:
              case "none":
                return "label-none";

              case "runtime":
                return "label-runtime-error";

              case "syntax":
                return "label-syntax-error";

              case "editor":
                return "label-syntax-error";

              case "internal":
                return "label-internal-error";

              case "semantic":
              case "analyzer":
                return "label-semantic-error";

              case "feedback":
              case "instructor":
                return "label-feedback-error";

              case "complete":
                return "label-problem-complete";

              case "no errors":
                return "label-no-errors";
            }
          }),
          category: ko.pureComputed(function () {
            if (model.execution.feedback.category() === null) {
              return "";
            }

            switch (model.execution.feedback.category().toLowerCase()) {
              default:
              case "none":
                return "";

              case "runtime":
                return "Runtime Error";

              case "syntax":
                return "Syntax Error";

              case "editor":
                return "Editor Error";

              case "internal":
                return "Internal Error";

              case "semantic":
              case "analyzer":
                return "Algorithm Error";

              case "feedback":
              case "instructor":
                return "Incorrect Answer";

              case "complete":
                return "Complete";

              case "no errors":
                return "No errors";
            }
          })
        },
        trace: {
          has: ko.pureComputed(function () {
            return model.execution.student.currentTraceData() !== null;
          }),
          line: ko.pureComputed(function () {
            var step = model.execution.student.currentTraceStep();
            var lastStep = model.execution.student.lastStep();
            var traceData = model.execution.student.currentTraceData();

            if (step === 0) {
              return "Before run";
            } else if (step === lastStep) {
              return "Finished run";
            } else {
              return traceData[step].line;
            }
          }),
          first: function first() {
            model.execution.student.currentTraceStep(0);
          },
          backward: function backward() {
            var previous = Math.min(0, model.execution.student.currentTraceStep() - 1);
            model.execution.student.currentTraceStep(previous);
          },
          forward: function forward() {
            var next = Math.min(model.execution.lastStep(), model.execution.student.currentTraceStep() + 1);
            model.execution.student.currentTraceStep(next);
          },
          last: function last() {
            model.execution.student.currentTraceStep(model.execution.student.lastStep());
          },
          data: ko.pureComputed(function () {
            var step = model.execution.student.currentTraceStep();
            var lastStep = model.execution.student.lastStep();
            var traceData = model.execution.student.currentTraceData();

            switch (step) {
              case 0:
                return [];

              case lastStep:
                return traceData[step - 1];

              default:
                traceData[step];
            }
          })
        },
        files: {
          visible: ko.pureComputed(function () {
            return model.display.instructor() || !model.assignment.settings.hideFiles();
          }),
          hasContents: function hasContents(path) {
            switch (path) {
              case "answer.py":
                return model.submission.code();

              case "!instructions.md":
                return model.assignment.instructions();

              case "!on_change.py":
                return model.assignment.onChange() !== null;

              case "!on_eval.py":
                return model.assignment.onEval();

              case "?mock_urls.blockpy":
                return model.assignment.extraFiles().some(function (file) {
                  return file.filename() === "?mock_urls.blockpy";
                });

              case "!tags.blockpy":
                return model.assignment.tags().length;

              case "!sample_submissions.blockpy":
                return model.assignment.sampleSubmissions().length;

              default:
                return false;
            }
          },
          add: function add(path) {
            switch (path) {
              case "?mock_urls.blockpy":
              case "?tags.blockpy":
              case "?settings.blockpy":
                self.components.fileSystem.newFile(path);
                break;

              case "!on_change.py":
                model.assignment.onChange("");
                self.components.fileSystem.newFile(path);
                break;

              case "!on_eval.py":
                model.assignment.onEval("");
                self.components.fileSystem.newFile(path);
                break;

              default:
            }

            model.display.filename(path);
          },
          "delete": function _delete() {
            return self.components.fileSystem.deleteFile(model.display.filename());
          }
        },
        editors: {
          current: ko.pureComputed(function () {
            return self.components.editors.getEditor(model.display.filename());
          }),
          view: ko.pureComputed(function () {
            return model.display.filename() ? model.ui.editors.current() : "None";
          }),
          reset: function reset() {
            model.submission.code(model.assignment.startingCode().map(function (file) {
              var filename = file.filename();

              if (filename === "^starting_code.py") {
                filename = "answer.py";
              } else {
                filename = filename.substr(1);
              }

              return Object(_files__WEBPACK_IMPORTED_MODULE_8__["makeModelFile"])(filename, file.contents());
            }));
          },
          canSave: ko.pureComputed(function () {
            return !model.display.autoSave();
          }),
          canDelete: ko.pureComputed(function () {
            return (!model.assignment.settings.hideFiles() || model.display.instructor()) && _files__WEBPACK_IMPORTED_MODULE_8__["UNDELETABLE_FILES"].indexOf(model.display.filename()) === -1;
          }),
          canRename: ko.pureComputed(function () {
            return (!model.assignment.settings.hideFiles() || model.display.instructor()) && _files__WEBPACK_IMPORTED_MODULE_8__["UNRENAMABLE_FILES"].indexOf(model.display.filename()) === -1;
          }),
          upload: _editor_abstract_editor__WEBPACK_IMPORTED_MODULE_9__["uploadFile"].bind(self),
          download: _editor_abstract_editor__WEBPACK_IMPORTED_MODULE_9__["downloadFile"].bind(self),
          python: {
            fullscreen: function fullscreen() {
              var codeMirror = self.components.editors.byName("python").bm.textEditor.codeMirror;
              return codeMirror.setOption("fullScreen", !codeMirror.getOption("fullScreen"));
            }
          }
        },
        execute: {
          run: function run() {
            return self.components.engine.run();
          }
        },
        server: {
          status: function status(endpoint) {
            return "server-status-" + model.status[endpoint]();
          },
          isEndpointConnected: function isEndpointConnected(endpoint) {
            return model.configuration.serverConnected() && model.configuration.urls !== undefined && model.configuration.urls[endpoint] !== undefined;
          },
          messages: ko.pureComputed(function () {
            return model.status.loadAssignmentMessage() || model.status.saveAssignmentMessage() || model.status.loadHistoryMessage() || model.status.loadFileMessage() || model.status.saveFileMessage() || model.status.loadDatasetMessage() || model.status.logEventMessage() || model.status.updateStatusMessage() || "";
          })
        }
      };
      Object(interface_js__WEBPACK_IMPORTED_MODULE_7__["makeExtraInterfaceSubscriptions"])(self, model);
    }
  }, {
    key: "turnOnHacks",
    value: function turnOnHacks() {
      console.log("TODO");
    }
    /**
     * Applys the KnockoutJS bindings to the model, instantiating the values into the
     * HTML.
     */

  }, {
    key: "applyModel",
    value: function applyModel() {
      ko.applyBindings(this.model);
    }
  }, {
    key: "initUtilities",
    value: function initUtilities() {
      var main = this;
      this.utilities = {
        markdown: function markdown(text) {
          return text ? EasyMDE.prototype.markdown(text) : "<p></p>";
        }
      };
    }
  }, {
    key: "initComponents",
    value: function initComponents() {
      var container = this.model.configuration.container;
      var components = this.components = {};
      var main = this; // Each of these components will take the BlockPy instance, and possibly a
      // reference to the relevant HTML location where it will be embedded.

      components.feedback = new feedback_js__WEBPACK_IMPORTED_MODULE_13__["BlockPyFeedback"](main, container.find(".blockpy-feedback"));
      components.engine = new engine_js__WEBPACK_IMPORTED_MODULE_10__["BlockPyEngine"](main);
      components.fileSystem = new _files__WEBPACK_IMPORTED_MODULE_8__["BlockPyFileSystem"](main);
      components.editors = new editors_js__WEBPACK_IMPORTED_MODULE_4__["Editors"](main, container.find(".blockpy-editor"));
      components.trace = new _trace__WEBPACK_IMPORTED_MODULE_11__["Trace"](main);
      components.console = new _console__WEBPACK_IMPORTED_MODULE_12__["BlockPyConsole"](main, container.find(".blockpy-console"));
      components.server = new server_js__WEBPACK_IMPORTED_MODULE_6__["BlockPyServer"](main);
      /*
      TODO
      components.dialog = new BlockPyDialog(main, container.find(".blockpy-popup"));
      components.toolbar = new BlockPyToolbar(main, container.find(".blockpy-toolbar"));
      components.server = new BlockPyServer(main);
      components.corgis = new BlockPyCorgis(main);
      components.history = new BlockPyHistory(main);*/
    }
  }, {
    key: "start",
    value: function start() {
      this.model.display.filename("answer.py");
    }
  }]);

  return BlockPy;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout")))

/***/ }),

/***/ "./src/console.js":
/*!************************!*\
  !*** ./src/console.js ***!
  \************************/
/*! exports provided: CONSOLE_HTML, BlockPyConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_HTML", function() { return CONSOLE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyConsole", function() { return BlockPyConsole; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSOLE_HTML = "\n    <div class='col-md-6 blockpy-panel blockpy-console'\n          role=\"region\" aria-label=\"Console\"\n          data-bind=\"class: ui.console.size\">\n          \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-show-feedback'\n                data-bind=\"hidden: ui.secondRow.isConsoleShowVisible, click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span>\n        </button>\n          \n        <strong>Console:</strong>\n        \n        <div class='blockpy-printer blockpy-printer-default'>\n        </div>\n        \n     </div>";
var BlockPyConsole =
/*#__PURE__*/
function () {
  /**
   * An object for managing the console where printing and plotting is outputed.
   *
   * @constructor
   * @param {Object} main - The main BlockPy instance
   * @param {HTMLElement} tag - The HTML object this is attached to.
   */
  function BlockPyConsole(main, tag) {
    _classCallCheck(this, BlockPyConsole);

    this.main = main;
    this.tag = tag;
    this.settings = {};
    this.clear(); // TODO: If the user modifies a file, then make the console look faded a little
  }

  _createClass(BlockPyConsole, [{
    key: "clear",

    /**
     * Reset the status of the printer, including removing any text in it and
     * fixing its size.
     */
    value: function clear() {
      this.main.model.execution.output.removeAll();
      this.tag.find(".blockpy-printer").empty();
      Sk.TurtleGraphics = {
        target: this.newTurtle(),
        width: 0,
        height: 0
      };
    }
  }, {
    key: "newTurtle",
    // TODO: turtles should be based on the current width
    value: function newTurtle() {
      return this;
    }
    /**
     * Update and return the current configuration of the printer. This
     * involves calculating its size, among other operations.
     *
     * @returns {Object} Returns an object with information about the printer.
     */

  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      var printer = this;

      this.printerSettings["printHtml"] = function (html, value) {
        printer.printHtml(html, value);
      };

      this.printerSettings["width"] = Math.min(500, this.tag.width() - 40);
      this.printerSettings["pngMode"] = true;
      this.printerSettings["skipDrawing"] = false;
      this.printerSettings["height"] = Math.min(500, this.tag.height() + 40);
      this.printerSettings["container"] = this.tag[0];
      return this.printerSettings;
    }
  }, {
    key: "stepPrinter",

    /**
     * Updates each printed element in the printer and makes it hidden
     * or visible, depending on what step we're on.
     *
     * @param {Number} step - The current step of the executed program that we're on; each element in the printer must be marked with a "data-step" property to resolve this.
     * @param {Number} page - Deprecated, not sure what this even does.
     */
    value: function stepPrinter(step, page) {
      $(this.printer).find(".blockpy-printer-output").each(function () {
        if ($(this).attr("data-step") <= step) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  }, {
    key: "print",

    /**
     * Print a successful line to the on-screen printer.
     * @param {String} lineText - A line of text to be printed out.
     */
    value: function print(lineText) {
      // Should probably be accessing the model instead of a component...
      var stepNumber = this.main.components.engine.executionBuffer.step;
      var lineNumber = this.main.components.engine.executionBuffer.line_number; // Perform any necessary cleaning

      if (lineText !== "\n") {
        this.main.model.execution.output.push(lineText.slice(0, -1));
        var encodedText = encodeHTML(lineText);

        if (!this.main.model.settings.mute_printer()) {
          var lineContainer = $("<div class='blockpy-printer-output' >");
          var lineData = $("<samp></samp>", {
            "data-toggle": "tooltip",
            "data-placement": "left",
            "data-step": stepNumber,
            "html": encodedText,
            "title": "Step " + stepNumber + ", Line " + lineNumber
          });
          lineContainer.append(lineData); // Append to the current text

          this.tag.append(lineContainer);
          lineData.tooltip();
        }
      }
    }
  }, {
    key: "printHtml",

    /**
     * Prints a successful HTML blob to the printer. This is typically charts,
     * but it can actually be any kind of HTML. This will probably be useful for
     * doing Turtle and Processing stuff down the road.
     *
     * @param {HTML} html - A blob of HTML to render in the tag
     * @param {Anything} value - a value to push on the outputList for comparison. For instance, on charts this is typically the data of the chart.
     */
    value: function printHtml(chart, value) {
      var step = this.main.model.execution.step();
      var line = this.main.model.execution.line_number();
      this.main.model.execution.output.push(value);

      if (!this.main.model.settings.mute_printer()) {
        var outerDiv = $(Sk.console.png_mode ? chart : chart[0]); //.parent();

        outerDiv.parent().show();
        outerDiv.attr({
          "data-toggle": "tooltip",
          "data-placement": "left",
          //"data-container": '#'+chart.attr("id"),
          "class": "blockpy-printer-output",
          "data-step": step,
          "title": "Step " + step + ", Line " + line
        });
        outerDiv.tooltip();
      }
    }
  }, {
    key: "scrollToBottom",

    /**
     * Unconditionally scroll to the bottom of the window.
     *
     */
    value: function scrollToBottom() {
      this.tag.animate({
        scrollTop: this.tag.prop("scrollHeight") - this.tag.prop("clientHeight")
      }, 500);
    }
  }, {
    key: "inputFunction",

    /**
     * Creates and registers a Promise from the Input box
     * @param {String} promptMessage - Message to display to the user.
     *
     */
    value: function inputFunction(promptMessage) {
      var result = this.printInput(promptMessage);

      if (result.promise) {
        var resolveOnClick;
        var submittedPromise = new Promise(function (resolve) {
          resolveOnClick = resolve;
        });

        var submitForm = function submitForm() {
          resolveOnClick(result.input.val());
          result.input.prop("disabled", true);
          result.button.prop("disabled", true);
        };

        result.button.click(submitForm);
        result.input.keyup(function (e) {
          if (e.keyCode === 13) {
            submitForm();
          }
        });
        result.input.focus();
        return submittedPromise;
      } else {
        return "";
      }
    }
  }, {
    key: "printInput",

    /**
     * Creates an Input box for receiving input() from the user.
     *
     * @param {String} promptMessage - a message to render before the input
     * @returns {String} Returns the handle on the message box.
     */
    value: function printInput(promptMessage) {
      // Should probably be accessing the model instead of a component...
      var stepNumber = this.main.components.engine.executionBuffer.step;
      var lineNumber = this.main.components.engine.executionBuffer.line_number; // Perform any necessary cleaning

      if (promptMessage !== "\n") {
        var encodedText = encodeHTML(promptMessage);

        if (!this.main.model.settings.mute_printer()) {
          var inputForm = $("<input type='text' />");
          var inputMsg = $("<samp></samp>", {
            "html": encodedText
          });
          var inputBtn = $("<button></button>", {
            "html": "Enter"
          });
          var inputBox = $("<div></div>", {
            "data-toggle": "tooltip",
            "class": "blockpy-printer-output",
            "data-placement": "left",
            "data-step": stepNumber,
            "title": "Step " + stepNumber + ", Line " + lineNumber
          });
          inputBox.append(inputMsg).append($("<br>")).append(inputForm).append(inputBtn);
          this.tag.append(inputBox);
          inputBox.tooltip();
          return {
            "input": inputForm,
            "button": inputBtn,
            "promise": true
          };
        }
      }

      return {
        "promise": false
      };
    }
  }], [{
    key: "getDisabledConfiguration",

    /**
     * Update and return a static disabled configuration of the printer. This
     * printer will be unable to do most tasks.
     *
     * @returns {Object} Returns an object with information about the printer.
     */
    value: function getDisabledConfiguration() {
      var printerSettings = {};

      printerSettings["printHtml"] = function (html, value) {
        console.log(html, value);
      };

      printerSettings["width"] = 500;
      printerSettings["pngMode"] = false;
      printerSettings["skipDrawing"] = true;
      printerSettings["height"] = 500;
      printerSettings["container"] = null;
      return printerSettings;
    }
  }]);

  return BlockPyConsole;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/css/blockpy.css":
/*!*****************************!*\
  !*** ./src/css/blockpy.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/css/bootstrap_retheme.css":
/*!***************************************!*\
  !*** ./src/css/bootstrap_retheme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/*! exports provided: DIALOG_HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_HTML", function() { return DIALOG_HTML; });
var DIALOG_HTML = "\n    <div class='blockpy-popup modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-modal=\"true\">\n        <div class='modal-dialog' style='width:750px'>\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                </div>\n                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
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
  this.titleTag = tag.find(".modal-title");
  this.bodyTag = tag.find(".modal-body");
}
/**
 * A simple externally available function for popping up a dialog
 * message. This menu will be draggable by its title.
 * 
 * @param {String} title - The title of the message dialog. Can have HTML.
 * @param {String} body - The body of the message dialog. Can have HTML.
 * @param {function} onclose - A function to be run when the user closes the dialog.
 */


BlockPyDialog.prototype.show = function (title, body, onclose) {
  this.titleTag.html(title);
  this.bodyTag.html(body);
  this.tag.modal("show");
  this.tag.draggable({
    "handle": ".modal-title"
  });
  this.tag.on("hidden.bs.modal", function (e) {
    if (onclose !== undefined) {
      onclose();
    }
  });
};

/***/ }),

/***/ "./src/editor/abstract_editor.js":
/*!***************************************!*\
  !*** ./src/editor/abstract_editor.js ***!
  \***************************************/
/*! exports provided: uploadFile, sluggify, downloadFile, AbstractEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sluggify", function() { return sluggify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return AbstractEditor; });
/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editors */ "./src/editors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


function uploadFile(model, event) {
  var fileReader = new FileReader();
  var files = event.target.files;

  fileReader.onload = function (e) {
    return model.ui.editors.current().uploadFile(e);
  };

  fileReader.fileName = files[0].name;
  fileReader.readAsText(files[0]);
  event.target.value = "";
}
function sluggify(text) {
  return text.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}
function downloadFile(model, event) {
  var _model$ui$editors$cur = model.ui.editors.current().downloadFile(),
      name = _model$ui$editors$cur.name,
      extension = _model$ui$editors$cur.extension,
      contents = _model$ui$editors$cur.contents,
      mimetype = _model$ui$editors$cur.mimetype; // Make safe


  name = sluggify(name);
  name = name + extension; // Make the data download as a file

  var blob = new Blob([contents], {
    type: mimetype
  });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, name);
  } else {
    var temporaryDownloadLink = window.document.createElement("a");
    temporaryDownloadLink.href = window.URL.createObjectURL(blob);
    temporaryDownloadLink.download = name;
    document.body.appendChild(temporaryDownloadLink);
    temporaryDownloadLink.click();
    document.body.removeChild(temporaryDownloadLink);
  }
}
var AbstractEditor =
/*#__PURE__*/
function () {
  function AbstractEditor(main, tag) {
    _classCallCheck(this, AbstractEditor);

    this.main = main;
    this.tag = tag;
    this.fileSystem = main.components.fileSystem;
    this.filename = null;
    this.file = null;
  }

  _createClass(AbstractEditor, [{
    key: "deleteFile",
    value: function deleteFile() {
      this.fileSystem.deleteFile(this.filename);
      this.main.model.display.filename("answer.py");
      this.main.components.editors.changeEditor("answer.py");
    }
  }, {
    key: "onFileDeleted",
    value: function onFileDeleted() {
      // TODO: Switch to the previous file instead of a default file
      this.main.model.display.filename("answer.py");
      this.main.components.editors.changeEditor("answer.py");
    }
  }, {
    key: "onFileUpdated",
    value: function onFileUpdated(file) {
      if (file.filename === this.filename) {
        //this.file = file;
        this.main.components.editors.changeEditor(this.filename); //this.fileSystem.stopWatchingFile(this.filename);
        //this.trackCurrentFile();
      }
    }
  }, {
    key: "trackCurrentFile",
    value: function trackCurrentFile() {
      this.fileSystem.watchFile(this.filename, {
        updated: this.onFileUpdated.bind(this),
        deleted: this.onFileDeleted.bind(this)
      });
    }
  }, {
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      this.filename = newFilename;
      this.file = this.fileSystem.getFile(newFilename);
      this.trackCurrentFile();
    }
    /**
     *
     * @param newFilename - the filename that the other editor will be switching to
     * @param oldEditor
     * @param newEditor
     */

  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      this.fileSystem.stopWatchingFile(this.filename);
      this.file = null;
      this.filename = null;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      var filename = event.target.fileName;
      var contents = event.target.result;
      this.file.handle(contents);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var filename = _editors__WEBPACK_IMPORTED_MODULE_0__["Editors"].parseFilename(this.filename);
      return {
        name: filename.name,
        extension: filename.type,
        contents: this.file.handle(),
        mimetype: "text/plain"
      };
    }
  }]);

  return AbstractEditor;
}();

/***/ }),

/***/ "./src/editor/assignment_settings.js":
/*!*******************************************!*\
  !*** ./src/editor/assignment_settings.js ***!
  \*******************************************/
/*! exports provided: ASSIGNMENT_SETTINGS_EDITOR_HTML, AssignmentSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGNMENT_SETTINGS_EDITOR_HTML", function() { return ASSIGNMENT_SETTINGS_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSettings", function() { return AssignmentSettings; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div>\n    Assignment Settings\n    </div>\n";

var AssignmentSettingsView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(AssignmentSettingsView, _AbstractEditor);

  function AssignmentSettingsView() {
    _classCallCheck(this, AssignmentSettingsView);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssignmentSettingsView).apply(this, arguments));
  }

  return AssignmentSettingsView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var AssignmentSettings = {
  name: "Assignment Settings",
  extensions: ["!assignment_settings.blockpy"],
  constructor: AssignmentSettingsView,
  template: ASSIGNMENT_SETTINGS_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/markdown.js":
/*!********************************!*\
  !*** ./src/editor/markdown.js ***!
  \********************************/
/*! exports provided: MARKDOWN_EDITOR_HTML, MarkdownEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKDOWN_EDITOR_HTML", function() { return MARKDOWN_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownEditor", function() { return MarkdownEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var MARKDOWN_EDITOR_HTML = "\n    <textarea class=\"blockpy-editor-markdown\"></textarea>    \n";

var MarkdownEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(MarkdownEditorView, _AbstractEditor);

  function MarkdownEditorView(main, tag) {
    var _this;

    _classCallCheck(this, MarkdownEditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkdownEditorView).call(this, main, tag));
    _this.mde = new EasyMDE({
      element: tag.find(".blockpy-editor-markdown")[0],
      autoDownloadFontAwesome: false,
      forceSync: true,
      minHeight: "500px",
      // TODO: imageUploadFunction
      renderingConfig: {
        codeSyntaxHighlighting: true
      },
      indentWithTabs: false,
      tabSize: 4
    });
    _this.dirty = false;
    return _this;
  }

  _createClass(MarkdownEditorView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(MarkdownEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = true;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this);
      this.mde.codemirror.on("change", this.currentListener);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.mde.value(newContents);
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.file.handle(this.mde.value());
        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      this.currentSubscription.dispose();
      this.mde.codemirror.off("change", this.currentListener);

      _get(_getPrototypeOf(MarkdownEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }]);

  return MarkdownEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var MarkdownEditor = {
  name: "Markdown",
  extensions: [".md"],
  constructor: MarkdownEditorView,
  template: MARKDOWN_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/python.js":
/*!******************************!*\
  !*** ./src/editor/python.js ***!
  \******************************/
/*! exports provided: DisplayModes, PYTHON_EDITOR_HTML, PythonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayModes", function() { return DisplayModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PYTHON_EDITOR_HTML", function() { return PYTHON_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PythonEditor", function() { return PythonEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * TODO: rename files, manual save, tags, sample_submissions, on_eval, non-builtin files
 * TODO: import data, history, run, url_data, assignment_settings, parsons_mode
 * TODO: delete becomes "clear" for instructor files
 */

/**
 *
 * @enum {str}
 */

var DisplayModes = {
  BLOCK: "block",
  SPLIT: "split",
  TEXT: "text"
};

function makeTab(name, icon, mode) {
  return "<label class=\"btn btn-outline-secondary blockpy-mode-set-blocks\"\n                data-bind=\"css: {active: display.pythonMode() === '".concat(mode, "'},\n                           click: display.pythonMode.bind($data, '").concat(mode, "')\">\n                <span class='fas fa-").concat(icon, "'></span>\n                <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> ").concat(name, "\n            </label>");
}

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n                ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n                ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n            </div>\n\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.reset\">\n                <span class=\"fas fa-sync\"></span> Reset\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.upload\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n\n\n    <div class=\"blockpy-python-blockmirror\">\n    </div>\n");
/*
        <button type='button' class='btn blockpy-run' style='float:left',
            data-bind='css: execution.status() == "running" ? "btn-info" :
                            execution.status() == "error" ? "btn-danger" : "btn-success",
                       visible: settings.instructor() || !assignment.upload()' >
            <span class='glyphicon glyphicon-play'></span> Run
        </button>

            <div class="btn-group" data-toggle="buttons" data-bind="visible: !assignment.upload()">
                <label class="btn btn-default blockpy-mode-set-blocks"
                       data-bind="css: {active: settings.editor() == 'Blocks',
                                        disabled: !areBlocksUpdating()}">
                    <span class='glyphicon glyphicon-th-large'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off" checked> Blocks
                </label>
                <!--<label class="btn btn-default blockpy-mode-set-instructor"
                       data-bind="visible: settings.instructor,
                                  css: {active: settings.editor() == 'Upload'}">
                    <span class='glyphicon glyphicon-list-alt'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off"> Instructor
                </label>-->
                <label class="btn btn-default blockpy-mode-set-split"
                       data-bind="css: {active: settings.editor() == 'Split',
                                        disabled: !areBlocksUpdating()}">
                    <span class='glyphicon glyphicon-resize-horizontal'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off"> Split
                </label>
                <label class="btn btn-default blockpy-mode-set-text"
                       data-bind="css: {active: settings.editor() == 'Text'}">
                    <span class='glyphicon glyphicon-pencil'></span>
                    <input type="radio" name="blockpy-mode-set" autocomplete="off"> Text
                </label>
            </div>
            <button type='button' class='btn btn-default blockpy-toolbar-reset'
                    data-bind="visible: !assignment.upload()">
                <span class='glyphicon glyphicon-refresh'></span> Reset
            </button>
            <!--<button type='button' class='btn btn-default blockpy-toolbar-capture'>
                <span class='glyphicon glyphicon-picture'></span> Capture
            </button>-->
            <button type='button' class='btn btn-default blockpy-toolbar-import'
                    data-bind="visible: settings.instructor() || (!assignment.upload() && assignment.importable())">
                <span class='glyphicon glyphicon-cloud-download'></span> Import Datasets
            </button>

            <div class="btn-group">
                <label class="btn btn-default btn-file">
                    <span class='glyphicon glyphicon-upload'></span> Upload
                    <input class="blockpy-toolbar-upload" type="file" style="display: none;">
                </label>

                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="caret"></span>
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a class='blockpy-toolbar-download'><span class='glyphicon glyphicon-download'></span> Download Python Code</a>
                    </li>
                </ul>
            </div>

            <button type='button' class='btn btn-default blockpy-toolbar-history'>
                <span class='glyphicon glyphicon-hourglass'></span> History
            </button>
            <button type='button' class='btn btn-default blockpy-toolbar-instructor' data-bind="visible: settings.instructor">
                <span class='glyphicon glyphicon-list-alt'></span> Settings
            </button>

            <!--
            <button type='button' class='btn btn-default blockpy-toolbar-english'>
                <span class='glyphicon glyphicon-list-alt'></span> English
            </button>
            -->
            <div data-bind="visible: settings.instructor()"
                 style='clear:both'>
            <div class="btn-group blockpy-toolbar-filename-picker" data-toggle="buttons">
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == '__main__'}"
                       data-filename="__main__">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off" checked> __main__
                </label>
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == 'starting_code'}"
                       data-filename="starting_code">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off"> on_start
                </label>
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == 'give_feedback'}"
                       data-filename="give_feedback">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off"> on_run
                </label>
                <label class="btn btn-default blockpy-set-filename"
                       data-bind="css: {active: settings.filename() == 'on_change'}"
                       data-filename="on_change">
                    <input type="radio" name="blockpy-filename-set" autocomplete="off"> on_change
                </label>
            </div>
            </div>
        </div>
    </div>
 */

function convertIpynbToPython(code) {
  var ipynb = JSON.parse(code);

  var isUsable = function isUsable(cell) {
    if (cell.cell_type === "code") {
      return cell.source.length > 0 && !cell.source[0].startsWith("%");
    } else {
      return cell.cell_type === "markdown" || cell.cell_type === "raw";
    }
  };

  var makePython = function makePython(cell) {
    if (cell.cell_type === "code") {
      return cell.source.join("\n");
    } else if (cell.cell_type === "markdown" || cell.cell_type === "raw") {
      return "'''" + cell.source.join("\n") + "'''";
    }
  };

  return ipynb.cells.filter(isUsable).map(makePython).join("\n");
}

var PythonEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(PythonEditorView, _AbstractEditor);

  function PythonEditorView(main, tag) {
    var _this;

    _classCallCheck(this, PythonEditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PythonEditorView).call(this, main, tag.find(".blockpy-python-blockmirror")));
    _this.bm = new BlockMirror({
      "container": _this.tag[0],
      "run": main.components.engine.run.bind(main.components.engine),
      "skipSkulpt": true,
      "blocklyMediaPath": main.model.configuration.blocklyPath //'height': '2000px'

    });
    _this.dirty = false;

    _this.makeSubscriptions();

    return _this;
  }

  _createClass(PythonEditorView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(PythonEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      if (oldEditor !== this) {
        // Delay so that everything is rendered
        setTimeout(this.bm.refresh.bind(this.bm), 0);
      }

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentBMListener = this.updateHandle.bind(this);
      this.bm.addChangeListener(this.currentBMListener);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.bm.setCode(newContents);
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.file.handle(this.bm.getCode());
        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      this.dirty = false;
      this.currentSubscription.dispose();
      this.bm.removeChangeListener(this.currentBMListener);

      _get(_getPrototypeOf(PythonEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }, {
    key: "makeSubscriptions",
    value: function makeSubscriptions() {
      var _this2 = this;

      this.bm.setMode(this.main.model.display.pythonMode());
      this.main.model.display.pythonMode.subscribe(function (mode) {
        _this2.bm.setMode(mode);
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      var filename = event.target.fileName;
      var code = event.target.result;

      if (filename.endsWith(".ipynb")) {
        code = convertIpynbToPython(code);
      }

      this.file.handle(code); // TODO: log upload event
      // TODO: Run code
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var result = _get(_getPrototypeOf(PythonEditorView.prototype), "downloadFile", this).call(this);

      if (result.name === "answer" && result.extension === ".py") {
        result.name = Object(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["sluggify"])(this.main.model.assignment.name());
      }

      result.mimetype = "text/x-python";
      return result;
    }
  }]);

  return PythonEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var PythonEditor = {
  name: "Python",
  extensions: [".py"],
  constructor: PythonEditorView,
  template: PYTHON_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/tags.js":
/*!****************************!*\
  !*** ./src/editor/tags.js ***!
  \****************************/
/*! exports provided: TAGS_EDITOR_HTML, TagsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_EDITOR_HTML", function() { return TAGS_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsEditor", function() { return TagsEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TAGS_EDITOR_HTML = "\nCreate new\nImport by name\nFind by owner/course/kind\n\nTags:\n    Data:\n        Name\n        Kind\n        Level\n        Version\n        Description\n    Controls:\n        Edit\n        Remove\n        Delete \n";

var TagsEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(TagsEditorView, _AbstractEditor);

  function TagsEditorView(main, tag) {
    _classCallCheck(this, TagsEditorView);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagsEditorView).call(this, main, tag.find(".blockpy-editor-tags")));
  }

  return TagsEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var TagsEditor = {
  name: "Tags",
  extensions: ["!tags.blockpy"],
  constructor: TagsEditorView,
  template: TAGS_EDITOR_HTML
};

/***/ }),

/***/ "./src/editor/text.js":
/*!****************************!*\
  !*** ./src/editor/text.js ***!
  \****************************/
/*! exports provided: TEXT_EDITOR_HTML, TextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_EDITOR_HTML", function() { return TEXT_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return TextEditor; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TEXT_EDITOR_HTML = "\n    <div>\n    <textarea></textarea>\n    </div>\n";

var TextEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(TextEditorView, _AbstractEditor);

  function TextEditorView() {
    _classCallCheck(this, TextEditorView);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextEditorView).apply(this, arguments));
  }

  return TextEditorView;
}(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"]);

var TextEditor = {
  name: "Text",
  extensions: [".txt"],
  constructor: TextEditorView,
  template: TEXT_EDITOR_HTML
};

/***/ }),

/***/ "./src/editors.js":
/*!************************!*\
  !*** ./src/editors.js ***!
  \************************/
/*! exports provided: EditorsEnum, EDITORS_HTML, Editors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsEnum", function() { return EditorsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITORS_HTML", function() { return EDITORS_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editors", function() { return Editors; });
/* harmony import */ var _editor_python__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/python */ "./src/editor/python.js");
/* harmony import */ var _editor_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/text */ "./src/editor/text.js");
/* harmony import */ var _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/assignment_settings */ "./src/editor/assignment_settings.js");
/* harmony import */ var _editor_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/tags */ "./src/editor/tags.js");
/* harmony import */ var _editor_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/markdown */ "./src/editor/markdown.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Editors are inferred from Filenames.
 *
 * The editor is based on the extension:
 *  .blockpy: Special editor (will be chosen by filename)
 *  .py: Python Editor
 *  .md: Markdown Editor
 *  .txt: Text Editor (also used for other types)
 *  .peml: PEML Editor
 *  .png, .gif, .jpeg, .jpg, .bmp: Image Editor
 *  .json: JSON Editor
 *  .yaml: YAML Editor
 */





/**
 * The different possible editors available
 * @enum {string}
 */

var EditorsEnum = {
  SUBMISSION: "submission",
  ASSIGNMENT: "assignment",
  INSTRUCTIONS: "instructions",
  ON_RUN: "on_run",
  ON_CHANGE: "on_change",
  ON_EVAL: "on_eval",
  STARTING_CODE: "starting_code",
  SAMPLE_SUBMISSIONS: "sample_submissions",
  INSTRUCTOR_FILE: "instructor_file"
};
var SPECIAL_NAMESPACES = ["!", "^", "?", "$"];
var AVAILABLE_EDITORS = [_editor_text__WEBPACK_IMPORTED_MODULE_1__["TextEditor"], _editor_python__WEBPACK_IMPORTED_MODULE_0__["PythonEditor"], _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_2__["AssignmentSettings"], _editor_tags__WEBPACK_IMPORTED_MODULE_3__["TagsEditor"], _editor_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownEditor"]];
var EDITORS_HTML = AVAILABLE_EDITORS.map(function (editor) {
  return "\n<div class=\"col-md-12 blockpy-panel blockpy-editor\">\n    <div data-bind=\"visible: ui.editors.view().name === '".concat(editor.name, "'\">\n    ").concat(editor.template, "    \n    </div>\n</div>\n");
}
/*
`
<!-- ko if: ui.editors.view().name === '${editor.name}' -->
${editor.template}
<!-- /ko -->`*/
).join("\n");
var Editors =
/*#__PURE__*/
function () {
  function Editors(main, tag) {
    var _this = this;

    _classCallCheck(this, Editors);

    this.main = main;
    this.tag = tag;
    this.current = null;
    this.registered_ = [];
    this.extensions_ = {};
    this.byName_ = {};
    AVAILABLE_EDITORS.forEach(function (editor) {
      return _this.registerEditor(editor);
    });
    this.main.model.display.filename.subscribe(this.changeEditor, this);
  }

  _createClass(Editors, [{
    key: "registerEditor",
    value: function registerEditor(data) {
      var extensions = data.extensions;
      var instance = new data.constructor(this.main, this.tag);
      instance.name = data.name;
      this.registered_.push(instance);
      this.byName_[data.name.toLowerCase()] = instance;

      for (var i = 0; i < extensions.length; i++) {
        this.extensions_[extensions[i]] = instance;
      }
    }
  }, {
    key: "byName",
    value: function byName(name) {
      return this.byName_[name.toLowerCase()];
    }
  }, {
    key: "changeEditor",
    value: function changeEditor(newFilename) {
      var oldEditor = this.current;
      var newEditor = this.getEditor(newFilename, oldEditor);

      if (oldEditor !== null) {
        oldEditor.exit(newFilename, oldEditor, newEditor);
      }

      this.current = newEditor;
      this.current.enter(newFilename, oldEditor);
    }
  }, {
    key: "getEditor",
    value: function getEditor(path) {
      var _Editors$parseFilenam = Editors.parseFilename(path),
          space = _Editors$parseFilenam.space,
          name = _Editors$parseFilenam.name,
          type = _Editors$parseFilenam.type;

      if (type === ".blockpy" && path in this.extensions_) {
        return this.extensions_[path];
      } else if (type in this.extensions_) {
        return this.extensions_[type];
      } else {
        return this.registered_[0];
      }
    }
  }], [{
    key: "parseFilename",
    value: function parseFilename(path) {
      var space = path.charAt(0);

      if (SPECIAL_NAMESPACES.indexOf(space) !== -1) {
        path = path.substr(1);
      } else {
        space = "";
      }

      var name = path.substr(0, path.lastIndexOf("."));
      var type = path.substr(path.lastIndexOf("."));
      return {
        "space": space,
        "name": name,
        "type": type
      };
    }
  }]);

  return Editors;
}();

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: BlockPyEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyEngine", function() { return BlockPyEngine; });
/* harmony import */ var _sk_mod_instructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sk_mod_instructor */ "./src/sk_mod_instructor.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server.js");
/* harmony import */ var engine_configurations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine/configurations.js */ "./src/engine/configurations.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UTILITY_MODULE_CODE = "var $builtinmodule = " + _sk_mod_instructor__WEBPACK_IMPORTED_MODULE_0__["$sk_mod_instructor"].toString();
/**
 * An object for executing Python code and passing the results along to interested components.
 *
 * Interesting components:
 *  Execution Buffer: Responsible for collecting the trace during program execution.
 *                    This prevents Knockoutjs from updating the editor during execution.
 *
 * @constructor
 * @this {BlockPyEditor}
 * @param {Object} main - The main BlockPy instance
 * @param {HTMLElement} tag - The HTML object this is attached to.
 */

var BlockPyEngine =
/*#__PURE__*/
function () {
  function BlockPyEngine(main) {
    _classCallCheck(this, BlockPyEngine);

    this.main = main;
    this.executionModel = this.main.model.execution;
    this.configureSkulpt();
    this.configurations = {
      run: new engine_configurations_js__WEBPACK_IMPORTED_MODULE_2__["RunConfiguration"](main),
      eval: new engine_configurations_js__WEBPACK_IMPORTED_MODULE_2__["EvalConfiguration"](main),
      onRun: new engine_configurations_js__WEBPACK_IMPORTED_MODULE_2__["OnRunConfiguration"](main),
      onChange: new engine_configurations_js__WEBPACK_IMPORTED_MODULE_2__["OnChangeConfiguration"](main),
      onEval: new engine_configurations_js__WEBPACK_IMPORTED_MODULE_2__["OnEvalConfiguration"](main)
    }; // Keeps track of the tracing while the program is executing

    this.executionBuffer = {};
    this.openedFiles = {};
    /**
     * Definable function to be run when execution has fully ended,
     * whether it succeeds or fails.
     */

    this.onExecutionBegin = null;
    this.onExecutionEnd = null;
  }

  _createClass(BlockPyEngine, [{
    key: "importFile",
    value: function importFile() {// TODO
    }
  }, {
    key: "writeFile",
    value: function writeFile() {// TODO
    }
  }, {
    key: "print",
    value: function print() {// TODO
    }
  }, {
    key: "input",
    value: function input() {// TODO
    }
  }, {
    key: "getImageProxy",
    value: function getImageProxy() {} // TODO

    /**
     * Initializes the Python Execution engine and the Printer (console).
     * This is called only once as "universal" settings across all configurations.
     */

  }, {
    key: "configureSkulpt",
    value: function configureSkulpt() {
      var _this = this;

      // Skulpt settings
      var printer = this.main.components.printer;
      Sk.configure({
        __future__: Sk.python3,
        // import
        //read: this.importFile.bind(this),
        // open
        fileopen: this.openFile.bind(this),
        // file.write
        filewrite: this.writeFile.bind(this),
        // print
        output: this.print.bind(this),
        // Prevents reading HTML elements as files
        inBrowser: false,
        // input
        inputfun: this.input.bind(this),
        inputfunTakesPrompt: true,
        // Media Image Proxy URL
        imageProxy: this.getImageProxy.bind(this),
        // Whether or not to keep the globals
        retainGlobals: true
      }); // How long to wait for execution
      // Sk.execLimit
      // Function to call after each step
      // afterSingleExecution
      // Proxy requests

      Sk.requestsGet = function (filename) {
        return _this.openURL(filename, "url");
      }; // Access point for instructor data


      Sk.executionReports = this.main.model.execution.reports;
      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = UTILITY_MODULE_CODE;
    }
  }, {
    key: "resetReports",

    /**
     * Reset reports and suppressions
     */
    value: function resetReports() {
      var report = this.executionModel.reports;
      report["verifier"] = {};
      report["parser"] = {};
      report["student"] = {};
      report["instructor"] = {};
    }
  }, {
    key: "resetStudentModel",
    value: function resetStudentModel() {
      var student = this.executionModel.student;
      student.currentStep(null);
      student.lastStep(0);
      student.currentLine(null);
      student.currentTraceData.removeAll();
      student.currentTraceStep(0);
      student.results = null;
    }
  }, {
    key: "resetExecutionBuffer",
    value: function resetExecutionBuffer() {
      this.executionBuffer = {
        "trace": [],
        "step": 0,
        "line": 0
      };
    }
  }, {
    key: "reset",

    /**
     * Remove all interface aspects of the previous Run.
     */
    value: function reset() {
      // TODO: Clear out any coverage/trace/error highlights in editors
      // Reset execution in model
      this.resetStudentModel(); // Get reports ready

      this.resetReports(); // Clear out the execution buffer

      this.resetExecutionBuffer(); // Clear out the console of printed stuff

      this.main.components.console.clear(); // Clear out any old feedback

      this.main.components.feedback.clear();
    }
  }, {
    key: "openFile",

    /**
     * @param {Sk.Str} name - The filename as a Skulpt string.
     */
    value: function openFile(name) {
      var filename = Sk.openFilenamePrefix || "";
      filename += name;
      var elem = document.getElementById(filename);

      if (elem == null) {
        if (name in this.openedFiles) {
          return this.openedFiles[name];
        } else {
          throw new Sk.builtin.IOError("[Errno 2] No such file or directory: '" + name + "'");
        }
      } else {
        if (elem.nodeName.toLowerCase() === "textarea") {
          return elem.value;
        } else {
          return elem.textContent;
        }
      }
    }
  }, {
    key: "openURL",
    value: function openURL(url, type) {
      var server = this.main.components.server;
      var openedFiles = this.openedFiles;
      return new Promise(function (resolve, reject) {
        if (url in openedFiles) {
          resolve(openedFiles[url]);
        } else {
          server.loadFile(url, type, function (contents) {
            openedFiles[url] = contents;
            resolve(contents);
          }, function (message) {
            reject(new Sk.builtin.IOError("Cannot access url: " + url + " because " + message));
          });
        }
      });
    }
  }, {
    key: "loadAllFiles",
    value: function loadAllFiles() {
      var names = this.main.model.assignment.files();
      var feedback = this.main.components.feedback;

      for (var i = 0; i < names.length; ++i) {
        this.openURL(names[i], "file").then(function () {}, function (e) {
          feedback.internalError(e, "FileLoadError", "The file failed to load on the server.");
        });
      }
    }
  }, {
    key: "step",

    /**
     * "Steps" the execution of the code, meant to be used as a callback to the Skulpt
     * environment.
     *
     * @param {Object} variables - Hash that maps the names of variables (Strings) to their Skulpt representation.
     * @param {Number} lineNumber - The corresponding line number in the source code that is being executed.
     * @param {Number} columnNumber - The corresponding column number in the source code that is being executed. Think of it as the "X" position to the lineNumber's "Y" position.
     * @param {String} filename - The name of the python file being executed (e.g., "__main__.py").
     */
    value: function step(variables, lineNumber, columnNumber, filename) {
      if (filename === "__main__.py") {
        var currentStep = this.executionBuffer.step;
        var globals = this.parseGlobals(variables);
        this.executionBuffer.trace.push({
          "step": currentStep,
          "filename": filename,
          //'block': highlightMap[lineNumber-1],
          "line": lineNumber,
          "column": columnNumber,
          "properties": globals.properties,
          "modules": globals.modules
        });
        this.executionBuffer.step = currentStep + 1;
        this.executionBuffer.last_step = currentStep + 1;
        this.executionBuffer.line_number = lineNumber;
      }
    }
  }, {
    key: "lastStep",

    /**
     * Called at the end of the Skulpt execution to terminate the executionBuffer
     * and hand it off to the execution trace in the model.
     */
    value: function lastStep() {
      var execution = this.main.model.execution;
      execution.student.currentTraceData(this.executionBuffer.trace);
      execution.student.currentStep(this.executionBuffer.step);
      execution.student.lastStep(this.executionBuffer.last_step);
      execution.student.currentLine(this.executionBuffer.line_number);
      execution.student.lastLine(this.executionBuffer.line_number);
    }
  }, {
    key: "run",
    value: function run() {
      this.main.model.execution.feedback.message("Running...");
      this.configuration = this.configurations.run.use(this);
      this.main.model.execution.reports["verifier"] = {
        "success": Boolean(this.configuration.code.trim()),
        "code": this.configuration.code
      };
      this.updateParse(this.configuration.filename, this.configuration.code); // TODO: save code to server

      this.execute().then(this.runSuccess.bind(this), this.runFailure.bind(this)).then(this.onRun.bind(this));
    }
  }, {
    key: "runSuccess",
    value: function runSuccess(module) {
      var _this2 = this;

      console.log("runSuccess");
      var report = this.main.model.execution.reports;
      var filename = this.configuration.filename;
      return new Promise(function (resolve, reject) {
        Sk.afterSingleExecution(module.$d, -1, 0, filename + ".py");

        _this2.lastStep();

        report["student"] = {
          "success": true,
          "trace": _this2.executionBuffer.trace,
          "lines": _this2.executionBuffer.trace.map(function (x) {
            return x.line;
          }),
          "module": module,
          "output": _this2.main.model.execution.output
        };

        _this2.executionEnd_();

        resolve();
      });
    }
  }, {
    key: "runFailure",
    value: function runFailure(error) {
      var _this3 = this;

      var report = this.main.model.execution.reports;
      return new Promise(function (resolve, reject) {
        report["student"] = {
          "success": false,
          "error": error
        };
        console.error(error);

        _this3.executionEnd_();

        resolve();
      });
    }
  }, {
    key: "onRun",
    value: function onRun() {
      this.configuration = this.configurations.onRun.use(this);
      this.execute().then(this.onRunSuccess.bind(this), this.onRunFailure.bind(this));
    }
  }, {
    key: "onRunSuccess",
    value: function onRunSuccess(module) {
      console.log(module.$d);
      this.main.components.feedback.presentFeedback(module.$d);
      this.main.model.execution.reports["instructor"]["success"] = true;
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY); //after(module);
    }
  }, {
    key: "onRunFailure",
    value: function onRunFailure(error) {
      var report = this.main.model.execution.reports;

      if (error.tp$name === "GracefulExit") {
        report["instructor"]["success"] = true;
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      } else {
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED); //console.log(report["instructor"]["code"]);

        console.error(error);
        this.main.components.feedback.presentInternalError(error, this.configuration.filename); //report["instructor"]["success"] = false;
        //report["instructor"]["error"] = error;
        //TODO: report["instructor"]["line_offset"] = lineOffset;
      } //TODO: after(error);

    }
  }, {
    key: "evaluate",
    value: function evaluate() {
      this.configuration = this.configurations.eval.use(this);
    }
  }, {
    key: "change",
    value: function change() {
      this.configuration = this.configurations.change.use(this);
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this4 = this;

      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].ACTIVE);
      clearTimeout(this.main.model.display.triggerOnChange);
      return Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody(_this4.configuration.filename, false, _this4.configuration.code, true);
      });
    }
    /**
     * Ensure that the parse information is up-to-date
     */

  }, {
    key: "updateParse",
    value: function updateParse(filename, code) {
      var report = this.main.model.execution.reports; // Attempt a parse

      var ast;

      try {
        var parse = Sk.parse(filename, code);
        ast = Sk.astFromParse(parse.cst, filename, parse.flags);
      } catch (error) {
        // Report the error
        report["parser"] = {
          "success": false,
          "error": error
        };
        console.error(error);
        console.log(filename, code);
        return false;
      } // Successful parse


      report["parser"] = {
        "success": true,
        "ast": ast
      };
      return true;
    }
    /**
     * Activated whenever the Run button is clicked
     */

  }, {
    key: "on_run",
    value: function on_run(afterwards) {
      var engine = this;
      var feedback = engine.main.components.feedback;
      var model = this.main.model;
      var printer = this.main.components.printer;
      engine.runStudentCode(function () {
        engine.runInstructorCode("give_feedback", false, function (module) {
          if (Sk.executionReports["instructor"]["success"]) {
            // SUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE
            engine.main.components.feedback.presentFeedback(module.$d);

            var _success = Sk.ffi.remapToJs(module.$d.SUCCESS);

            var score = Sk.ffi.remapToJs(module.$d.SCORE);
            var hide = Sk.ffi.remapToJs(module.$d.HIDE);

            if (category === "Instructor" && label === "No errors") {
              this.main.model.status.error("no errors");
            } else {
              this.main.model.status.error(category);
            } // TODO: Get data from model now


            if (!feedback.isFeedbackVisible()) {
              engine.main.components.toolbar.notifyFeedbackUpdate();
              feedback.scrollIntoView();
            }

            score = Math.max(0.0, Math.min(1.0, score));
            var old_status = model.settings.completion_status();
            model.settings.completion_status(Math.max(old_status, score));

            if (_success && category.toLowerCase() === "complete") {
              engine.main.components.server.markSuccess(1.0);
            } else {
              engine.main.components.server.markSuccess(score);
            }

            model.execution.status("complete");

            if (afterwards !== undefined) {
              afterwards(result);
            }

            if (!Sk.executionReports.instructor.scrolling) {
              try {
                printer.scrollToBottom();
              } catch (e) {}
            }
          } else {
            feedback.presentInstructorError();
          }
        });
      });
      this.main.components.server.logEvent("engine", "on_run");
    }
  }, {
    key: "on_change",

    /**
     * Activated whenever the Python code changes
     */
    value: function on_change() {
      var FILENAME = "on_change"; // TODO: Do we actually want to skip if this is the case?
      // Skip if the instructor has not defined anything

      if (!this.main.model.programs[FILENAME]().trim()) {
        return false;
      }

      this.main.model.execution.status("changing");
      this.main.components.server.saveCode(); // On step does not perform parse analysis by default or run student code

      var engine = this;
      var feedback = this.main.components.feedback;
      engine.resetReports();
      engine.verifyCode();
      engine.updateParse();
      engine.runInstructorCode(FILENAME, true, function (module) {
        if (Sk.executionReports["instructor"]["success"]) {
          // SUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE
          // TODO: only show under certain circumstances
          if (!success && !(category === "Instructor" && label === "No errors")) {
            feedback.presentFeedback(category, label, message, line);
          }

          engine.main.components.feedback.presentFeedback(module.$d);
          engine.main.model.execution.status("complete");
        }
      });
      engine.main.components.server.logEvent("engine", "on_change");
    }
  }, {
    key: "updateSubmission",
    value: function updateSubmission(executionResults) {
      var success = Sk.ffi.remapToJs(executionResults.SUCCESS);
      var score = Sk.ffi.remapToJs(executionResults.SCORE);
      var data = Sk.ffi.remapToJs(executionResults.DATA);
    }
    /**
     * Run the instructor code
     */

  }, {
    key: "runInstructorCode",
    value: function runInstructorCode(filename, quick, after) {
      this.main.model.execution.status("instructor");
      var report = this.main.model.execution.reports; // Prepare execution

      this.setInstructorEnvironment(); // Actually run the python code

      var studentCode = this.main.model.programs["__main__"]();
      var studentCodeSafe = studentCode; //studentCode = JSON.stringify(studentCode);

      if (!report["parser"].success || !report["verifier"].success) {
        studentCodeSafe = "pass";
      }

      Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
      var instructorCode = this.main.model.programs[filename]();
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, quick);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset;
      report["instructor"] = {
        "compliments": [],
        "filename": filename + ".py",
        "code": instructorCode //'complete': false // Actually, let's use undefined for now.

      };
    }
  }, {
    key: "executionEnd_",

    /**
     * Helper function that will attempt to call the defined onExecutionEnd,
     * but will do nothing if there is no function defined.
     */
    value: function executionEnd_() {
      if (this.onExecutionEnd !== null) {
        this.onExecutionEnd();
      }
    }
    /**
     *
     */

  }, {
    key: "executionBegin_",
    value: function executionBegin_() {
      if (this.onExecutionBegin !== null) {
        this.onExecutionBegin();
      }
    }
  }], [{
    key: "inputMockFunction",
    value: function inputMockFunction() {
      if (Sk.queuedInput.length) {
        return Sk.queuedInput.pop();
      } else {
        return "";
      }
    }
  }]);

  return BlockPyEngine;
}();

/***/ }),

/***/ "./src/engine/configurations.js":
/*!**************************************!*\
  !*** ./src/engine/configurations.js ***!
  \**************************************/
/*! exports provided: RunConfiguration, EvalConfiguration, SampleConfiguration, OnRunConfiguration, OnChangeConfiguration, OnEvalConfiguration, OnSampleConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunConfiguration", function() { return RunConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalConfiguration", function() { return EvalConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleConfiguration", function() { return SampleConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnRunConfiguration", function() { return OnRunConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChangeConfiguration", function() { return OnChangeConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnEvalConfiguration", function() { return OnEvalConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSampleConfiguration", function() { return OnSampleConfiguration; });
/* harmony import */ var utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities.js */ "./src/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var NEW_LINE_REGEX = /\r\n|\r|\n/;
/**
 * @return {string}
 */

var WRAP_INSTRUCTOR_CODE = function WRAP_INSTRUCTOR_CODE(studentCode, instructorCode, quick, isSafe) {
  var safeCode = JSON.stringify(studentCode);
  var indentedCode = Object(utilities_js__WEBPACK_IMPORTED_MODULE_0__["indent"])(Object(utilities_js__WEBPACK_IMPORTED_MODULE_0__["indent"])(isSafe ? studentCode : "pass"));
  var tifaAnalysis = "";

  if (!quick) {
    tifaAnalysis = "from pedal.tifa import tifa_analysis\ntifa_analysis(False)";
  }

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\n").concat(tifaAnalysis, "\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = get_student_data()\ncompatibility.set_sandbox(student)\nerror, position = get_student_error()\ncompatibility.raise_exception(error, position)\ncompatibility.run_student = run_student\ncompatibility.get_plots = get_plots\ncompatibility.get_output = get_output\ncompatibility.reset_output = reset_output\ncompatibility.trace_lines = trace_lines\ndef capture_output(func, *args):\n   reset_output()\n   func(*args)\n   return get_output()\ncompatibility.capture_output = capture_output\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n#print(MAIN_REPORT.feedback[0].mistake['error'])\n");
};

var Configuration =
/*#__PURE__*/
function () {
  function Configuration(main) {
    _classCallCheck(this, Configuration);

    this.main = main;
    this.filename = null;
    this.code = null;
  }

  _createClass(Configuration, [{
    key: "use",
    value: function use(engine) {
      Sk.read = this.importFile.bind(this);

      Sk.output = function (element) {
        return console.log(element);
      };

      return this;
    }
  }, {
    key: "run",
    value: function run(engine) {}
    /**
     * Used to access Skulpt built-ins. This is pretty generic, taken
     * almost directly from the Skulpt docs.
     *
     * @param {String} filename - The python filename (e.g., "os" or "pprint") that will be loaded.
     * @returns {String} The JavaScript source code of the file (weird, right?)
     * @throws Will throw an error if the file isn't found.
     */

  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (this.isForbidden(filename)) {
        throw "File not accessible: '" + filename + "'";
      } else if (filename === "./answer.py") {
        return this.main.model.submission.code()[0].contents();
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }, {
    key: "isForbidden",
    value: function isForbidden(filename) {
      return false;
    }
  }]);

  return Configuration;
}();

var StudentConfiguration =
/*#__PURE__*/
function (_Configuration) {
  _inherits(StudentConfiguration, _Configuration);

  function StudentConfiguration() {
    _classCallCheck(this, StudentConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(StudentConfiguration).apply(this, arguments));
  }

  _createClass(StudentConfiguration, [{
    key: "use",
    value: function use(engine) {
      var _this = this;

      _get(_getPrototypeOf(StudentConfiguration.prototype), "use", this).call(this, engine); // Limit execution to 5 seconds


      var settings = this.main.model.settings;

      Sk.execLimitFunction = function () {
        return _this.main.model.assignment.settings.disableTimeout() ? Infinity : 10000;
      };

      Sk.execLimit = Sk.execLimitFunction(); // Identify the location to put new charts
      //TODO: Sk.console = this.main.components.console.getConfiguration();
      // Stepper! Executed after every statement.

      Sk.afterSingleExecution = engine.step.bind(this); // Unmute everything
      // TODO: Sk.console.skipDrawing = !!settings.preventD3;
      // TODO: this.main.model.settings.mute_printer(false);
      // Create an input box

      Sk.inputfun = engine.input.bind(this);
      engine.reset();
      return this;
    }
  }, {
    key: "isForbidden",
    value: function isForbidden(filename) {
      return filename.startsWith("src/lib/utility/") || filename.startsWith("src/lib/pedal/");
    }
  }]);

  return StudentConfiguration;
}(Configuration);

var InstructorConfiguration =
/*#__PURE__*/
function (_Configuration2) {
  _inherits(InstructorConfiguration, _Configuration2);

  function InstructorConfiguration() {
    _classCallCheck(this, InstructorConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(InstructorConfiguration).apply(this, arguments));
  }

  _createClass(InstructorConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(InstructorConfiguration.prototype), "use", this).call(this, engine); // Instructors have no limits


      Sk.execLimit = undefined; // Stepper! Executed after every statement.

      Sk.afterSingleExecution = null; // Mute everything
      // TODO Sk.console.skipDrawing = true;
      // TODO this.main.model.settings.mute_printer(true);
      // Disable input box

      Sk.queuedInput = []; // TODO Sk.inputfun = BlockPyEngine.inputMockFunction;
      // Enable utility mode

      return this;
    }
  }]);

  return InstructorConfiguration;
}(Configuration);

var RunConfiguration =
/*#__PURE__*/
function (_StudentConfiguration) {
  _inherits(RunConfiguration, _StudentConfiguration);

  function RunConfiguration() {
    _classCallCheck(this, RunConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(RunConfiguration).apply(this, arguments));
  }

  _createClass(RunConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(RunConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "answer.py";
      this.code = this.main.model.submission.code()[0].contents();
      return this;
    }
  }]);

  return RunConfiguration;
}(StudentConfiguration);
var EvalConfiguration =
/*#__PURE__*/
function (_StudentConfiguration2) {
  _inherits(EvalConfiguration, _StudentConfiguration2);

  function EvalConfiguration() {
    _classCallCheck(this, EvalConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(EvalConfiguration).apply(this, arguments));
  }

  _createClass(EvalConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(EvalConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "answer.py"; // TODO: fix to be currently added line

      this.code = "print('Not ready yet!')"; // skip normal reset, only reset buffer and feedback

      engine.resetExecutionBuffer();
      engine.main.components.feedback.clear();
      return this;
    }
  }]);

  return EvalConfiguration;
}(StudentConfiguration);
var SampleConfiguration =
/*#__PURE__*/
function (_StudentConfiguration3) {
  _inherits(SampleConfiguration, _StudentConfiguration3);

  function SampleConfiguration() {
    _classCallCheck(this, SampleConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(SampleConfiguration).apply(this, arguments));
  }

  _createClass(SampleConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(SampleConfiguration.prototype), "use", this).call(this, engine); // TODO: Fix to be the current sample submission


      this.filename = "answer.py";
      this.code = "print('Not ready yet!')";
      return this;
    }
  }]);

  return SampleConfiguration;
}(StudentConfiguration);
var OnRunConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat) {
  _inherits(OnRunConfiguration, _InstructorConfigurat);

  function OnRunConfiguration() {
    _classCallCheck(this, OnRunConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnRunConfiguration).apply(this, arguments));
  }

  _createClass(OnRunConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnRunConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "on_run";
      this.code = this.main.model.assignment.onRun();
      var report = this.main.model.execution.reports; // Actually run the python code

      var studentCodeSafe = this.main.model.submission.code()[0].contents();
      Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      var isSafe = report["parser"].success && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset;
      report["instructor"] = {
        "compliments": [],
        "filename": this.filename + ".py",
        "code": instructorCode //'complete': false // Actually, let's use undefined for now.

      };
      this.code = instructorCode;
      console.log(this.code);
      return this;
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (this.isForbidden(filename)) {
        throw "File not accessible: '" + filename + "'";
      } else if (filename === "./answer.py") {
        return this.main.model.submission.code()[0].contents();
      } else if (filename === "./on_run.py") {
        return this.main.model.assignment.onRun();
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }]);

  return OnRunConfiguration;
}(InstructorConfiguration);
var OnChangeConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat2) {
  _inherits(OnChangeConfiguration, _InstructorConfigurat2);

  function OnChangeConfiguration() {
    _classCallCheck(this, OnChangeConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnChangeConfiguration).apply(this, arguments));
  }

  _createClass(OnChangeConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnChangeConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "on_change.py";
      this.code = this.main.model.assignment.onChange();
      return this;
    }
  }]);

  return OnChangeConfiguration;
}(InstructorConfiguration);
var OnEvalConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat3) {
  _inherits(OnEvalConfiguration, _InstructorConfigurat3);

  function OnEvalConfiguration() {
    _classCallCheck(this, OnEvalConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnEvalConfiguration).apply(this, arguments));
  }

  _createClass(OnEvalConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnEvalConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "on_eval.py";
      this.code = this.main.model.assignment.onEval();
      return this;
    }
  }]);

  return OnEvalConfiguration;
}(InstructorConfiguration);
var OnSampleConfiguration =
/*#__PURE__*/
function (_OnRunConfiguration) {
  _inherits(OnSampleConfiguration, _OnRunConfiguration);

  function OnSampleConfiguration() {
    _classCallCheck(this, OnSampleConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(OnSampleConfiguration).apply(this, arguments));
  }

  _createClass(OnSampleConfiguration, [{
    key: "use",
    value: function use(engine) {
      _get(_getPrototypeOf(OnSampleConfiguration.prototype), "use", this).call(this, engine);

      this.filename = "on_run.py";
      this.code = this.main.model.assignment.onRun();
      return this;
    }
  }]);

  return OnSampleConfiguration;
}(OnRunConfiguration);

/***/ }),

/***/ "./src/feedback.js":
/*!*************************!*\
  !*** ./src/feedback.js ***!
  \*************************/
/*! exports provided: FEEDBACK_HTML, BlockPyFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEEDBACK_HTML", function() { return FEEDBACK_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyFeedback", function() { return BlockPyFeedback; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FEEDBACK_HTML = "\n\n<span class='blockpy-floating-feedback text-muted-less pull-right position-sticky sticky-top'\n    aria-hidden=\"true\" role=\"presentation\" aria-label=\"New Feedback Alert\">\n    New feedback &uarr;\n</span>\n\n<div class='blockpy-feedback col-md-6 blockpy-panel'\n            role=\"region\" aria-label=\"Feedback\"\n            aria-live=\"polite\">\n\n    <!-- Feedback/Trace Visibility Control -->\n    <button type='button'\n            class='btn btn-sm btn-outline-secondary float-right'\n            data-bind=\"click: ui.secondRow.advanceState\">\n        <span class='fas fa-eye'></span>\n        <span data-bind=\"text: ui.secondRow.switchLabel\"></span>\n    </button>\n\n    <!-- Actual Feedback Region -->    \n    <div>\n        <strong>Feedback: </strong>\n        <span class='badge blockpy-feedback-category feedback-badge'\n            data-bind=\"css: ui.feedback.badge,\n                       text: ui.feedback.category\">Feedback Kind</span>\n    </div>\n    <div>\n        <strong class=\"blockpy-feedback-label\"\n            data-bind=\"text: execution.feedback.label\"></strong>\n        <div class=\"blockpy-feedback-message\"\n            data-bind=\"html: execution.feedback.message\"></div>\n    </div>\n</div>            \n";
var BlockPyFeedback =
/*#__PURE__*/
function () {
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
    _classCallCheck(this, BlockPyFeedback);

    this.main = main;
    this.tag = tag;
    this.feedbackModel = this.main.model.execution.feedback;
    this.category = this.tag.find(".blockpy-feedback-category");
    this.label = this.tag.find(".blockpy-feedback-label");
    this.message = this.tag.find(".blockpy-feedback-message");
  }

  _createClass(BlockPyFeedback, [{
    key: "scrollIntoView",

    /**
     * Moves the screen (takes 1 second) to make the Feedback area visible.
     */
    value: function scrollIntoView() {
      $("html, body").animate({
        scrollTop: this.tag.offset().top
      }, 1000);
    }
  }, {
    key: "isFeedbackVisible",

    /**
     * Determines if the feedback area is currently visible
     * @returns {boolean}
     */
    value: function isFeedbackVisible() {
      var top_of_element = this.tag.offset().top;
      var bottom_of_element = this.tag.offset().top + this.tag.outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).height();
      var top_of_screen = $(window).scrollTop(); //bottom_of_element -= 40; // User friendly padding

      return bottom_of_screen > top_of_element && top_of_screen < bottom_of_element;
    }
  }, {
    key: "clear",

    /**
     * Clears any output currently in the feedback area. Also resets the printer and
     * any highlighted lines in the editor.
     */
    value: function clear() {
      this.feedbackModel.message("*Ready*");
      this.feedbackModel.category(null);
      this.feedbackModel.label(null);
      this.feedbackModel.hidden(false);
      this.feedbackModel.linesError.removeAll();
      this.feedbackModel.linesUncovered.removeAll();
    }
  }, {
    key: "updateFeedback",

    /**
     * Updates the model with these new execution results
     * @param executionResults
     */
    value: function updateFeedback(executionResults) {
      // Parse out data
      var message = Sk.ffi.remapToJs(executionResults.MESSAGE);
      var category = Sk.ffi.remapToJs(executionResults.CATEGORY);
      var label = Sk.ffi.remapToJs(executionResults.LABEL);
      var hide = Sk.ffi.remapToJs(executionResults.HIDE);
      var data = Sk.ffi.remapToJs(executionResults.DATA); // Override based on assignments' settings

      var hideScore = this.main.model.assignment.settings.hideScore();

      if (hideScore && category.toLowerCase() === "complete") {
        category = "Instructor";
        label = "No errors";
        message = "No errors reported";
      } // Remap to expected BlockPy labels


      if (category.toLowerCase() === "instructor" && label.toLowerCase() === "explain") {
        label = "Instructor Feedback";
      } // Update model accordingly


      message = this.main.utilities.markdown(message);
      this.feedbackModel.message(message);
      this.feedbackModel.category(category);
      this.feedbackModel.label(label); // Find the first error on a line and report that

      var line = BlockPyFeedback.findFirstErrorLine(data);
      this.feedbackModel.linesError.removeAll();

      if (line !== null && line !== undefined) {
        this.feedbackModel.linesError.push(line);
      } // Invert the set of traced lines


      var studentReport = this.main.model.execution.reports.student;
      this.feedbackModel.linesUncovered.removeAll();

      if (studentReport.success) {
        for (var i = 0; i <= this.main.model.execution.student.lastLine; i++) {
          if (studentReport.lines.indexOf(i) === -1) {
            this.feedbackModel.linesUncovered.push(i);
          }
        }
      }
    }
    /**
     * Present any accumulated feedback
     */

  }, {
    key: "presentFeedback",
    value: function presentFeedback(executionResults) {
      this.updateFeedback(executionResults); // TODO: Logging
      //this.main.components.server.logEvent("feedback", category+"|"+label, message);

      if (!this.isFeedbackVisible()) {
        this.notifyFeedbackUpdate();
        this.scrollIntoView();
      }
    }
  }, {
    key: "notifyFeedbackUpdate",
    value: function notifyFeedbackUpdate() {
      this.tag.find(".blockpy-floating-feedback").show().fadeOut(7000);
    }
  }, {
    key: "presentInternalError",
    value: function presentInternalError(error, filenameExecuted) {
      console.error(error);
      this.main.model.execution.feedback.category("internal");
      this.main.model.execution.feedback.label("Internal Error");
      var message = "\n            Error in instructor feedback.\n            Please show the following to an instructor:\n            \n            <pre><strong>".concat(error.tp$name, "</strong>: ").concat(Sk.ffi.remapToJs(error.args), "</pre>");

      if (error.traceback && error.traceback.length) {
        var tracebackFormatted = error.traceback.map(function (frame) {
          return "File <span class=\"filename\">\"".concat(frame.filename, "\"</span>, line <span class=\"lineno\">").concat(frame.lineno, "</span>\n");
        }).join("");
        message += "<pre>".concat(tracebackFormatted, "</pre>");
        var last_traceback = error.traceback.slice(-1)[0];

        if (last_traceback.filename === filenameExecuted) {
          last_traceback.lineno -= this.main.model.execution.reports.instructor.line_offset;
        }

        console.error(error);
      }

      this.main.model.execution.feedback.message(message);
    }
  }], [{
    key: "findFirstErrorLine",
    value: function findFirstErrorLine(feedbackData) {
      for (var i = feedbackData.length - 1; i >= 0; i -= 1) {
        if ("position" in feedbackData[i]) {
          return feedbackData[i].position.line;
        }
      }

      return null;
    }
  }]);

  return BlockPyFeedback;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/files.js":
/*!**********************!*\
  !*** ./src/files.js ***!
  \**********************/
/*! exports provided: FILES_HTML, STARTING_FILES, BASIC_NEW_FILES, UNDELETABLE_FILES, UNRENAMABLE_FILES, makeModelFile, BlockPyFileSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_HTML", function() { return FILES_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING_FILES", function() { return STARTING_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_NEW_FILES", function() { return BASIC_NEW_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDELETABLE_FILES", function() { return UNDELETABLE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNRENAMABLE_FILES", function() { return UNRENAMABLE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeModelFile", function() { return makeModelFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyFileSystem", function() { return BlockPyFileSystem; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var makeTab = function makeTab(filename, friendlyName, hideIfEmpty) {
  if (friendlyName === undefined) {
    friendlyName = filename;
  }

  return "\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n            data-toggle=\"tab\"\n            data-bind=\"css: {active: display.filename() === '".concat(filename, "'},\n                click: display.filename.bind($data, '").concat(filename, "'),\n                visible: !").concat(hideIfEmpty, " || ui.files.hasContents('").concat(filename, "')\">\n            ").concat(friendlyName, "</a>\n    </li>");
};

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Assignment Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
/**
 * Filenames live in one of five possible namespaces:
 *  Instructor (!): Invisible to the student under all circumstances
 *  Start Space (^): Used to reset the student namespace
 *  Student Space (): Visible to the student when display.hideFiles is not true
 *  Hidden Space (?): Not directly visible to the student, but accessible programmatically
 *  Secret Space ($): Not visible from the menu at all, some other mechanism controls it
 *  Generated Space (*): Visible to the student, but destroyed after Engine.Clear. Can shadow an actual file.
 */

var STARTING_FILES = [// Submission
"answer.py", // Instructor files
"!instructions.md", "!assignment_settings.blockpy", "^starting_code.py", "!on_run.py", "$settings.blockpy"];
var BASIC_NEW_FILES = ["!on_change.py", "!on_eval.py", "?mock_urls.blockpy", "!tags.blockpy", "!sample_submissions.blockpy"];
var DELETABLE_SIMPLE_FILES = ["!on_change.py", "!on_eval.py"];
var UNDELETABLE_FILES = ["answer.py", "!instructions.md", "!assignment_settings.py", "^starting_code.py", "!on_run.py", "$settings.blockpy"];
var UNRENAMABLE_FILES = ["answer.py", "!instructions.md", "!assignment_settings.py", "^starting_code.py", "!on_run.py", "$settings.blockpy", "!on_change.py", "!on_eval.py", "?mock_urls.blockpy", "!tags.blockpy", "!sample_submissions.blockpy"];

var BlockPyFile = function BlockPyFile(main, filename, contents) {
  _classCallCheck(this, BlockPyFile);

  this.main = main;
  this.filename = filename;
  this.contents = contents || "";
  this.owner = null;
  this.handle = null;
};

function makeModelFile(filename, contents) {
  return {
    "filename": ko.observable(filename),
    contents: ko.observable(contents || "")
  };
}
/**
 * Abstracts away database logic
 */

var BlockPyFileSystem =
/*#__PURE__*/
function () {
  function BlockPyFileSystem(main) {
    _classCallCheck(this, BlockPyFileSystem);

    this.main = main;
    this.files_ = {};
    this.mountFiles();
    this.watchModel();
    this.watches_ = {};
  }

  _createClass(BlockPyFileSystem, [{
    key: "watchFile",
    value: function watchFile(filename, callback) {
      if (!(filename in this.watches_)) {
        this.watches_[filename] = [];
      }

      this.watches_[filename].push(callback);
    }
  }, {
    key: "stopWatchingFile",
    value: function stopWatchingFile(filename) {
      delete this.watches_[filename];
    }
  }, {
    key: "watchModel",
    value: function watchModel() {
      var _this = this;

      var filesystem = this;
      [this.main.model.submission.code, this.main.model.assignment.startingCode, this.main.model.assignment.extraFiles].forEach(function (fileArray) {
        return fileArray.subscribe(function (changes) {
          changes.forEach(function (change) {
            var modelFile = change.value;

            if (change.status === "added") {
              // Track new file
              var file = filesystem.newFile(modelFile.filename(), modelFile.contents(), modelFile.contents);
              filesystem.notifyWatches(file);
            } else if (change.status === "deleted") {
              // Delete file
              filesystem.deleteFileLocally_(modelFile.filename);
            }
          });
        }, _this, "arrayChange");
      });
    } // answer.py
    //   => subscribe to first element of submission.code)
    // !on_run.py, !on_change.py, !on_eval.py
    //   => subscribe to relevant assignment.<whatever>
    // ^starting_code.py
    //   => subscribe to first element of assignment.startingCode
    // ^whatever
    //   => subscribe to rest of the elements of assignment.startingCode
    // !whatever or ?whatever
    //   => subscribe to elements of assignment.extraFiles
    // Otherwise:
    //   => subscribe to rest of the elements of submission.code

    /**
     * New special files need to be registered here
     * @param file {BlockPyFile}
     * @private
     */

  }, {
    key: "observeFile_",
    value: function observeFile_(file) {
      if (file.filename === "answer.py") {
        file.handle = this.main.model.submission.code()[0].contents;
      } else if (file.filename === "!on_run.py") {
        file.handle = this.main.model.assignment.onRun;
      } else if (file.filename === "!on_change.py") {
        file.handle = this.main.model.assignment.onChange;
      } else if (file.filename === "!on_eval.py") {
        file.handle = this.main.model.assignment.onEval;
      } else if (file.filename === "!instructions.md") {
        file.handle = this.main.model.assignment.instructions;
      } else if (file.filename === "^starting_code.py") {
        file.handle = this.main.model.assignment.startingCode()[0].contents;
      } else if (file.filename === "?mock_urls.blockpy") {
        this.observeInArray_(file, this.main.model.assignment.extraFiles);
      } else if (file.filename === "!tags.blockpy") {
        file.handle = this.main.model.assignment.tags;
      } else if (file.filename === "!assignment_settings.blockpy") {
        file.handle = this.main.model.assignment.settings;
      } else if (file.filename === "$settings.blockpy") {
        file.handle = this.main.model.display;
      } else if (file.filename.startsWith("^")) {
        this.observeInArray_(file, this.main.model.assignment.startingCode);
      } else if (file.filename.startsWith("!") || file.filename.startsWith("?")) {
        this.observeInArray_(file, this.main.model.assignment.extraFiles);
      } else {
        this.observeInArray_(file, this.main.model.submission.code);
      }
    }
  }, {
    key: "observeInArray_",
    value: function observeInArray_(file, array) {
      file.owner = array;
      var codeBundle = file.owner();

      for (var i = 0; i < codeBundle.length; i++) {
        if (codeBundle[i].filename() === file.filename) {
          file.handle = codeBundle[i].contents;
        }
      }

      if (file.handle === null) {
        var newFile = makeModelFile(file.filename);
        file.handle = newFile.contents;
        array.push(newFile);
      }
    }
  }, {
    key: "mountFiles",
    value: function mountFiles() {
      this.newFile("answer.py");
      this.newFile("^starting_code.py");
      this.newFile("!on_run.py");
      this.newFile("!instructions.md");
      this.newFile("!assignment_settings.blockpy");
    }
  }, {
    key: "newFile",
    value: function newFile(filename, contents, modelFile) {
      if (filename in this.files_) {
        // File already exists! Just update its handle
        var existingFile = this.files_[filename];
        existingFile.handle = modelFile;
        existingFile.handle(contents || "");
        return existingFile;
      } else {
        // File does not exist
        var newFile = new BlockPyFile(this.main, filename);
        this.files_[filename] = newFile;

        if (modelFile === undefined) {
          this.observeFile_(newFile);
        } else {
          newFile.handle = modelFile;
        }

        return newFile;
      }
    }
  }, {
    key: "writeFile",
    value: function writeFile(filename, contents) {
      contents = contents || "";
      this.files_[filename].handle(contents);
    }
  }, {
    key: "readFile",
    value: function readFile(filename) {
      return this.files_[filename].handle();
    }
  }, {
    key: "getFile",
    value: function getFile(filename) {
      return this.files_[filename];
    }
    /**
     *
     * @param filename
     * @returns {boolean|object} The info about the file, or false if it could not be deleted
     */

  }, {
    key: "deleteFile",
    value: function deleteFile(filename) {
      if (DELETABLE_SIMPLE_FILES.indexOf(filename) !== -1) {
        var file = this.deleteFileLocally_(filename);
        file.handle(null);
        return true;
      } else if (this.files_[filename].owner === null) {
        return false;
      } else {
        // Triggers a callback to eventually call deleteFileLocally_
        var found = this.files_[filename].owner.remove(function (modelFile) {
          return modelFile.filename === filename;
        });
        return found || false;
      }
    }
  }, {
    key: "deleteFileLocally_",
    value: function deleteFileLocally_(filename) {
      var file = this.files_[filename];
      delete this.files_[filename];

      if (filename in this.watches_) {
        this.watches_[filename].forEach(function (callback) {
          return callback.deleted();
        });
      }

      return file;
    }
  }, {
    key: "notifyWatches",
    value: function notifyWatches(file) {
      if (file.filename in this.watches_) {
        this.watches_[file.filename].forEach(function (callback) {
          return callback.updated(file);
        });
      }
    }
  }]);

  return BlockPyFileSystem;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout")))

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: FOOTER_HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_HTML", function() { return FOOTER_HTML; });
var FOOTER_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-status\">\n    <div>\n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadAssignment')\">Load Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveAssignment')\">Save Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadFile')\">Load File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveFile')\">Save File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadDataset')\">Load Dataset</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('logEvent')\">Log Event</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('updateStatus')\">Update Status</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('onExecution')\">Execution</span>\n    </div>\n    <div\n        <span data-bind=\"text: ui.server.messages\"></span>\n    </div>\n    <div>\n        <span>User: <span data-bind=\"text: user.id\"></span> (<span data-bind=\"text: user.name\"></span>)</span>, \n        <span>Course: <span data-bind=\"text: user.courseId\"></span></span>,\n        <span>Group: <span data-bind=\"text: user.groupId\"></span></span>,\n        <span>Assignment: <span data-bind=\"text: assignment.id\"></span></span>,\n        <span>Assignment Version: <span data-bind=\"text: assignment.version\"></span></span>,\n        <span>Submission: <span data-bind=\"text: submission.id\"></span></span>, \n        <span>Submission Version: <span data-bind=\"text: submission.version\"></span></span>\n    </div>\n</div>\n";

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: SecondRowSecondPanelOptions, makeExtraInterfaceSubscriptions, makeInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondRowSecondPanelOptions", function() { return SecondRowSecondPanelOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeExtraInterfaceSubscriptions", function() { return makeExtraInterfaceSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeInterface", function() { return makeInterface; });
/* harmony import */ var trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trace.js */ "./src/trace.js");
/* harmony import */ var dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog.js */ "./src/dialog.js");
/* harmony import */ var feedback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feedback.js */ "./src/feedback.js");
/* harmony import */ var files_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! files.js */ "./src/files.js");
/* harmony import */ var footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! footer.js */ "./src/footer.js");
/* harmony import */ var editors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editors.js */ "./src/editors.js");
/* harmony import */ var console_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! console.js */ "./src/console.js");







/**
 * @enum {str}
 */

var SecondRowSecondPanelOptions = {
  FEEDBACK: "feedback",
  TRACE: "trace",
  NONE: "none"
};
function makeExtraInterfaceSubscriptions(self, model) {
  var highlightTimeout = null;
  model.ui.instructions.current.subscribe(function () {
    if (highlightTimeout !== null) {
      clearTimeout(highlightTimeout);
    }

    highlightTimeout = setTimeout(function () {
      model.configuration.container.find(".blockpy-instructions pre code").map(function (i, block) {
        window.hljs.highlightBlock(block);
      });
    }, 400);
  });
}
function makeInterface(main) {
  return "\n<div class='blockpy-content container-fluid'>\n\n    <!-- Popup -->\n    ".concat(dialog_js__WEBPACK_IMPORTED_MODULE_1__["DIALOG_HTML"], "\n    \n    <!-- Hidden Capture Canvas -->\n    <canvas id='capture-canvas' class='d-none' role=\"presentation\" aria-hidden=\"true\"></canvas>\n    \n    <!-- Row 1: Header and Quick Menu -->\n    <div class='row'>\n         \n         <!-- Description -->\n         <div class='col-md-10 blockpy-panel blockpy-header'\n               role='heading' aria-label='Assignment Description'>\n         \n            <!-- Assignment Name -->\n            <span role='heading' aria-level='1'\n                  class=\"blockpy-name\">\n                <strong>BlockPy: </strong> \n                <span data-bind='text: assignment.name'></span>\n            </span>\n            \n            <!-- Reset Instructions Button -->\n            <div class=\"blockpy-instructions-reset\"\n                data-bind=\"visible: ui.instructions.isChanged\">\n                <a class=\"float-right\"\n                    data-bind=\"click: ui.instructions.reset\"\n                    href=\"\">\n                    Reset instructions</a>\n            </div>\n            \n            <!-- Instructions -->\n            <div class='blockpy-instructions'\n                 data-bind=\"html: ui.instructions.current\">\n            </div>\n        </div>\n        \n        <div class='col-md-2 blockpy-panel blockpy-quick-menu'\n             role='menubar' aria-label='Quick Menu' title=\"Quick Menu\">\n            <!-- Get Shareable Link -->\n            <button class=\"btn btn-outline-secondary btn-sm\">\n                Get shareable link</button>\n            <!-- View as instructor -->\n            <div class=\"form-check\"\n                 data-bind=\"visible: ui.role.isGrader\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"blockpy-as-instructor\"\n                    data-bind=\"checked: display.instructor\">\n                <label class=\"form-check-label\" for=\"blockpy-as-instructor\">\n                    View as instructor\n                </label>\n            </div>\n        </div>\n         \n    </div>\n    \n    <!-- Row 2: Console and Feedback -->\n    <div class='row'>\n    \n        <!-- Console -->\n        ").concat(console_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_HTML"], "\n         \n        <!-- Feedback -->\n        <!-- ko if: ui.secondRow.isFeedbackVisible -->\n        ").concat(feedback_js__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_HTML"], "\n        <!-- /ko -->\n        \n        <!-- Trace -->\n        <!-- ko if: ui.secondRow.isTraceVisible -->\n        ").concat(trace_js__WEBPACK_IMPORTED_MODULE_0__["TRACE_HTML"], "\n        <!-- /ko -->\n         \n    </div>\n    \n    <!-- Row 3: File Navigation -->\n    <!-- ko if: ui.files.visible -->\n    <div class='row'>\n        ").concat(files_js__WEBPACK_IMPORTED_MODULE_3__["FILES_HTML"], "\n    </div>\n    <!-- /ko -->\n    \n    <!-- View Row -->\n    <div class=\"row\">\n        ").concat(editors_js__WEBPACK_IMPORTED_MODULE_5__["EDITORS_HTML"], "\n    </div>\n\n    <!-- Footer Row -->    \n    <div class=\"row\">\n        ").concat(footer_js__WEBPACK_IMPORTED_MODULE_4__["FOOTER_HTML"], "\n    </div>\n    \n</div>\n    ");
}
;

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: StatusState, BlockPyServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusState", function() { return StatusState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyServer", function() { return BlockPyServer; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/**
 *
 * @enum {str}
 */

var StatusState = {
  READY: "ready",
  ACTIVE: "active",
  RETRYING: "retrying",
  FAILED: "failed"
};
/**
 * Object for communicating with the external servers. This includes functionality for
 * saving and loading files, logging events, saving completions, and retrieving history.
 *
 * @constructor
 * @this {BlockPyServer}
 * @param {Object} main - The main BlockPy instance
 */

function BlockPyServer(main) {
  this.main = main; // Save URLs locally for quicker access

  this.urls = main.model.configuration.urls; // Add the LocalStorage connection
  // Presently deprecated, but we should investigate this

  this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageWrapper"]("BLOCKPY"); // FaultResistantCache

  this.queue = {
    "log_event": JSON.parse(this.storage.getDefault("log_event", "[]")),
    "save_success": JSON.parse(this.storage.getDefault("save_success", "[]"))
  };
  this.MAX_QUEUE_SIZE = {
    "log_event": 200,
    "save_success": 50
  };
  this.saveTimer = {};
  this.presentationTimer = null;
  this.timers = {};
  this.overlay = null;
  this.blockingAttempts = 0; // For managing "walks" that let us rerun stored code

  this.inProgressWalks = [];
  this.createSubscriptions(); // Check cache

  this.checkCaches();
}

BlockPyServer.prototype.checkIP = function (newIP) {
  if (this.storage.has("IP")) {
    var oldIP = this.storage.get("IP");

    if (oldIP !== newIP) {
      this.logEvent("editor", "changeIP", oldIP + "|" + newIP);
      this.storage.set("IP", newIP);
    }
  } else {
    this.storage.set("IP", newIP);
  }
};

BlockPyServer.prototype.checkCaches = function () {
  if (this.storage.has("ASSIGNMENTS_CACHE")) {
    var _data = JSON.parse(this.storage.get("ASSIGNMENTS_CACHE"));

    this._postLatestRetry(_data, this.urls.save_assignment, "assignment", "ASSIGNMENTS_CACHE", this.TIMER_DELAY);
  }

  for (var filename in this.main.model.programs) {
    if (this.storage.has("CODE_CACHE_" + filename)) {
      var _data2 = JSON.parse(this.storage.get("CODE_CACHE_" + filename));

      this._postLatestRetry(_data2, this.urls.save_code, "code_" + filename, "CODE_CACHE_" + filename, this.TIMER_DELAY);
    }
  }

  var server = this;
  Object.keys(this.queue).forEach(function (cache) {
    (function pushAnyQueued(response) {
      if (response.success) {
        if (server.queue[cache].length) {
          var data = JSON.parse(server.queue[cache].pop());
          var url = server.urls[cache];

          server._postRetry(data, url, cache, 1000, pushAnyQueued);
        }
      }
    })({
      "success": true
    });
  });
};

BlockPyServer.prototype.createSubscriptions = function () {
  var server = this,
      model = this.main.model;
  /*
  model.program_updated.subscribe(function() { server.saveCode(); });
  model.assignment.name.subscribe(function(e) { server.saveAssignment();});
  model.assignment.introduction.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.parsons.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.importable.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.secret.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.disable_algorithm_errors.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.disable_timeout.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.initial_view.subscribe(function(e) { server.saveAssignment(); });
  model.assignment.files.subscribe(function(e) { server.saveAssignment(); });
  //model.settings.editor.subscribe(function(newValue) { server.logEvent('editor', newValue); });
  model.execution.show_trace.subscribe(function(newValue) { server.logEvent("trace", newValue); });
  model.execution.trace_step.subscribe(function(newValue) { server.logEvent("trace_step", newValue); });
   */
};
/**
 *
 * Some subscriptions have to happen after other things have been loaded.
 * Right now this is just after CORGIS libraries have been loaded, but maybe
 * we'll add more later and this will need to be refactored.
 *
 */


BlockPyServer.prototype.finalizeSubscriptions = function () {
  var server = this,
      model = this.main.model;
  model.assignment.modules.subscribe(function (e) {
    server.saveAssignment();
  });
};

BlockPyServer.prototype.TIMER_DELAY = 1000;
BlockPyServer.prototype.FAIL_DELAY = 2000;

BlockPyServer.prototype.createServerData = function () {
  var assignment = this.main.model.assignment;
  var d = new Date();
  var seconds = Math.round(d.getTime() / 1000);
  data = {
    "assignment_id": assignment.assignment_id(),
    "group_id": assignment.group_id(),
    "course_id": assignment.course_id(),
    "student_id": assignment.student_id(),
    "version": assignment.version(),
    "timestamp": seconds
  };

  if (this.main.model.settings.log_id() != null) {
    data["log_id"] = this.main.model.settings.log_id();
  }

  return data;
};

BlockPyServer.prototype.setStatus = function (status, server_error) {
  // TODO: Handle different endpoints
  this.main.model.status.server(status);

  if (server_error !== undefined) {
    this.main.model.status.server_error(server_error);
  } else {
    this.main.model.status.server_error("");
  }
};

BlockPyServer.prototype.defaultResponse = function (response) {
  if (response.success) {
    this.setStatus("Saved");
    this.checkIP(response.ip);
  } else {
    console.error(response);
    this.setStatus("Error", response.message);
  }
};

BlockPyServer.prototype.defaultFailure = function (error, textStatus) {
  this.setStatus("Disconnected", "Could not access server!\n" + textStatus);
};

BlockPyServer.prototype.logEvent = function (event_name, action, body) {
  if (this.main.model.ui.server.isEndpointConnected("log_event")) {
    var data = this.createServerData();
    data["event"] = event_name;
    data["action"] = action;
    data["body"] = body === undefined ? "" : body;
    this.setStatus("Logging"); // Trigger request

    this._postRetry(data, this.urls.log_event, "log_event", 0, function () {});
  } else {
    this.setStatus("Offline", "Server is not connected! (Log Event)");
  }
};

BlockPyServer.prototype._enqueueData = function (cache, data) {
  // Ensure we have not overfilled the queue
  var length = this.queue[cache].length;
  var max = this.MAX_QUEUE_SIZE[cache];

  if (length > max) {
    this.queue[cache] = this.queue[cache].slice(length - max, max);
  } // Only add the element if it's new


  var key = JSON.stringify(data);
  var index = this.queue[cache].indexOf(key);

  if (index === -1) {
    this.queue[cache].push(key);
    this.storage.set(cache, JSON.stringify(this.queue[cache]));
  }
};

BlockPyServer.prototype._dequeueData = function (cache, data) {
  var key = JSON.stringify(data);
  var index = this.queue[cache].indexOf(key);

  if (index >= 0) {
    this.queue[cache].splice(index);
    this.storage.set(cache, JSON.stringify(this.queue[cache]));
  }
};

BlockPyServer.prototype._getQueued = function (cache, data) {
  return JSON.parse(this.queue[cache][0]);
};

BlockPyServer.prototype._postRetry = function (data, url, cache, delay, callback) {
  // Trigger request
  var server = this;
  server.setStatus("Saving");
  setTimeout(function () {
    // Make a backup of the current post
    server._enqueueData(cache, data);

    $.post(url, data).done(function (response) {
      server._dequeueData(cache, data);

      if (response.success) {
        server.setStatus("Saved");
      } else {
        console.error(response);
        server.setStatus("Error", response.message);
      }

      callback(response);

      if (response.success) {
        server.checkIP(response.ip);
      }
    }) // If server request is the latest one, then let's try it again in a bit
    .fail(function (error, textStatus) {
      server.defaultFailure(error, textStatus);

      server._postRetry(data, url, cache, delay + server.FAIL_DELAY, callback);
    });
  }, delay);
};

BlockPyServer.prototype.markSuccess = function (success) {
  var model = this.main.model;
  var callback = model.settings.completedCallback;
  var forceUpdate = model.settings.forceUpdate;
  var hideCorrectness = model.assignment.secret();
  var server = this;

  if (model.ui.server.isEndpointConnected("save_success")) {
    var data = this.createServerData();
    data["code"] = model.programs.__main__;
    data["status"] = success;
    data["hide_correctness"] = hideCorrectness;
    data["force_update"] = forceUpdate;
    this.main.components.editor.getPngFromBlocks(function (pngData, img) {
      data["image"] = pngData;

      if (img.remove) {
        img.remove();
      }

      server._postRetry(data, server.urls.save_success, "save_success", 0, function (response) {
        if (response.success && !response.submitted) {
          server.setStatus("Ungraded", response.message);
        }

        if (success && callback) {
          callback(data);
        }
      });
    });
  }
};
/*
BlockPyServer.prototype.markSuccess = function(success) {
    var model = this.main.model;
    var callback = model.settings.completedCallback;
    var hideCorrectness = model.assignment.secret();
    var server = this;
    if (model.ui.server.isEndpointConnected('save_success')) {
        var data = this.createServerData();
        data['code'] = model.programs.__main__;
        data['status'] = success;
        data['hide_correctness'] = hideCorrectness;
        this.main.components.editor.getPngFromBlocks(function(pngData, img) {
            data['image'] = pngData;
            if (img.remove) {
                img.remove();
            }
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
        server.setStatus('Offline', "Server is not connected! (Mark Success)");
    }
};*/


BlockPyServer.prototype.saveAssignment = function () {
  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("save_assignment") && model.settings.auto_upload()) {
    var data = this.createServerData();
    data["introduction"] = model.assignment.introduction();
    data["parsons"] = model.assignment.parsons();
    data["initial"] = model.assignment.initial_view();
    data["importable"] = model.assignment.importable();
    data["secret"] = model.assignment.secret();
    data["disable_algorithm_errors"] = model.assignment.disable_algorithm_errors();
    data["disable_timeout"] = model.assignment.disable_timeout();
    data["name"] = model.assignment.name(); // TODO: hackish, broken if ',' is in name

    data["modules"] = model.assignment.modules().join(",");
    data["files"] = model.assignment.files().join(",");

    this._postLatestRetry(data, this.urls.save_assignment, "assignment", "ASSIGNMENTS_CACHE", this.TIMER_DELAY);
  } else {
    this.setStatus("Offline", "Server is not connected! (Save Assignment)");
  }
};
/**
 * Make a AJAX request that, upon failure, will check to see if this was the
 * latest attempt for this `cache` marker. If so, it will attempt again until
 * successful; otherwise, it gives up the request.
 *
 * @param {Object} data - The AJAX-ready data to be posted
 * @param {String} url - The URL to post to
 * @param {String} filename - The unique name given to the relevant timer
 * @param {String} cache - The unique name given to the relevant cache entry
 * @param {Integer} delay - The current number of milliseconds to wait before
 trying the request again.
 */


BlockPyServer.prototype._postLatestRetry = function (data, url, filename, cache, delay) {
  var server = this;
  clearTimeout(this.timers[filename]);
  this.timers[filename] = setTimeout(function () {
    // Make a backup of the current post
    server.storage.set(cache, JSON.stringify(data));
    var time = server.storage.getTime(cache); // Send the request

    server.setStatus("Saving");
    $.post(url, data).done(function (response) {
      server.defaultResponse(response); // If server request is the latest one, clear it from the cache

      var cachedTime = server.storage.getTime(cache);

      if (time >= cachedTime) {
        server.storage.remove(cache);
      }
    }).fail(function (error, textStatus) {
      server.defaultFailure(error, textStatus); // If server request is the latest one, then let's try it again in a bit

      var cachedTime = server.storage.getTime(cache);

      if (time >= cachedTime) {
        server._postLatestRetry(data, url, filename, cache, delay + server.FAIL_DELAY);
      }
    });
  }, delay);
};

BlockPyServer.prototype.saveCode = function () {
  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("save_code") && model.settings.auto_upload()) {
    var data = this.createServerData();
    var filename = model.settings.filename();
    data["filename"] = filename;
    data["code"] = model.programs[filename]();

    this._postLatestRetry(data, this.urls.save_code, "code_" + filename, "CODE_CACHE_" + filename, this.TIMER_DELAY);
  } else {
    this.setStatus("Offline", "Server is not connected! (Save Code)");
  }
};

BlockPyServer.prototype.getHistory = function (callback) {
  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("get_history")) {
    var data = this.createServerData();
    var server = this;

    this._postBlocking(this.urls.get_history, data, 5, function (response) {
      if (response.success) {
        callback(response.data);
      } else {
        console.error(response);
        server.setStatus("Error", response.message);
      }
    });
  } else {
    this.setStatus("Offline", "Server is not connected! (Get History)");
    callback([]);
  }
};
/**
 *
 */


BlockPyServer.prototype.showOverlay = function (attempt) {
  this.blockingAttempts += 1;

  if (!document.getElementsByClassName("blockpy-overlay").length) {
    this.overlay = $('<div class="blockpy-overlay"> </div>');
    this.overlay.appendTo(document.body);
  }

  switch (attempt) {
    case 0:
      this.overlay.css("background-color", "#988");
      break;

    case 1:
      this.overlay.css("background-color", "#655");
      break;

    case 2:
      this.overlay.css("background-color", "#333");
      break;

    default:
      this.overlay.css("background-color", "black");
      break;
  }
};

BlockPyServer.prototype.hideOverlay = function () {
  this.blockingAttempts -= 1;

  if (this.blockingAttempts <= 0) {
    this.overlay.remove();
  }
};

BlockPyServer.prototype._postBlocking = function (url, data, attempts, success, failure) {
  var server = this;
  this.setStatus("Loading");
  this.showOverlay(attempts);
  $.post(url, data).done(function (response) {
    server.hideOverlay();
    server.setStatus("Loaded");
    success(response);

    if (response.success) {
      server.checkIP(response.ip);
    }
  }).fail(function (e, textStatus, errorThrown) {
    if (attempts <= 0) {
      server.hideOverlay();
      server.defaultFailure();

      if (failure) {
        failure(e, textStatus, errorThrown);
      }
    } else {
      setTimeout(function () {
        server.hideOverlay();

        server._postBlocking(url, data, attempts - 1, success, failure);
      }, server.FAIL_DELAY);
    }
  });
};

BlockPyServer.prototype.loadAssignment = function (assignment_id) {
  var model = this.main.model;
  var server = this;

  if (model.ui.server.isEndpointConnected("load_assignment")) {
    var _data3 = this.createServerData();

    _data3["assignment_id"] = assignment_id;

    this._postBlocking(this.urls.load_assignment, _data3, 5, function (response) {
      console.log(response);

      if (response.success) {
        server.main.setAssignment(response.settings, response.assignment, response.programs);
      } else {
        server.setStatus("Failure", response.message);
      }
    }, function (e, textStatus, errorThrown) {
      server.main.components.dialog.show("Error While Loading", "BlockPy encountered an error while loading the assignment.<br>" + "You should probably reload the page or advance to another assignment.<br>");
      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("Offline", "Server is not connected! (Load Assignment)");
  }
};
/**
 * This function can be used to load files and web resources.
 */


BlockPyServer.prototype.loadFile = function (filename, type, callback, errorCallback) {
  var model = this.main.model;
  var server = this;

  if (model.ui.server.isEndpointConnected("load_file")) {
    var data = this.createServerData();
    data["filename"] = filename;
    data["type"] = type;

    this._postBlocking(this.urls.load_file, data, 5, function (response) {
      if (response.success) {
        callback(response.data);
      } else {
        errorCallback(response.message);
        server.setStatus("Failure", response.message);
      }
    }, function (e, textStatus, errorThrown) {
      errorCallback("Server failure! Report to instructor");
      console.error(errorThrown);
    });
  } else {
    errorCallback("No file server available.");
    this.setStatus("Offline", "Server is not connected! (Load File)");
  }
};
/*
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
        if (main.model.ui.server.isEndpointConnected('walk_old_code')) {
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
            this.setStatus('Offline', "Server is not connected! (Walk Old Code)");
        }
    }
}*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/sk_mod_instructor.js":
/*!**********************************!*\
  !*** ./src/sk_mod_instructor.js ***!
  \**********************************/
/*! exports provided: $sk_mod_instructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$sk_mod_instructor", function() { return $sk_mod_instructor; });
/**
 * Skulpt Module for holding the Instructor API.
 *
 * This module is loaded in by getting the functions' source code from toString.
 * Isn't that crazy?
 *
 *
 */
var $sk_mod_instructor = function $sk_mod_instructor() {
  // Main module object that gets returned at the end.
  var mod = {};
  var none = Sk.builtin.none.none$;
  var prior = null;
  mod.timeit = new Sk.builtin.func(function (name) {
    Sk.builtin.pyCheckArgs("timeit", arguments, 1, 1);
    var difference;

    if (prior === null) {
      difference = 0;
    } else {
      difference = Date.now() - prior;
    }

    console.log(Sk.ffi.remapToJs(name), difference / 1000);
    prior = Date.now();
  });
  /**
   * Logs feedback to javascript console
   */

  mod.log = new Sk.builtin.func(function (message) {
    Sk.builtin.pyCheckArgs("log", arguments, 1, 1);
    console.log(Sk.ffi.remapToJs(message));
  });
  /**
   * Logs debug to javascript console
   */

  mod.debug = new Sk.builtin.func(function (message) {
    Sk.builtin.pyCheckArgs("log", arguments, 1, 1);
    console.log(message);
  });
  /**
   * This function coverts the output in the student report to a python 
   * list and returns it.
  **/

  mod.get_output = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_output", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      return mixedRemapToPy(Sk.executionReports["student"]["output"]());
    } else {
      return Sk.ffi.remapToPy([]);
    }
  });
  /**
   * This function resets the output, particularly useful if the student
   * code is going to be rerun.
   */

  mod.reset_output = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("reset_output", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      Sk.executionReports["student"]["output"].removeAll();
    }
  });
  mod.queue_input = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("queue_input", arguments, 1, Infinity);
    var args = arguments;

    for (var i = args.length - 1; i >= 0; i--) {
      var input = args[i];
      Sk.builtin.pyCheckType("input", "string", Sk.builtin.checkString(input));
      Sk.queuedInput.push(Sk.ffi.remapToJs(input));
    }
  });
  /**
   * This function is called by instructors to get the students' code as a string.
  **/

  mod.get_program = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_program", arguments, 0, 0);
    return Sk.ffi.remapToPy(Sk.executionReports["verifier"].code);
  });
  mod.trace_lines = new Sk.builtin.func(function () {
    if (Sk.executionReports["student"].success) {
      var lines = Sk.executionReports["student"].lines;
      return Sk.ffi.remapToPy(lines);
    } else {
      return new Sk.builtin.list([]);
    }
  });
  /**
   *
   */

  mod.get_student_error = new Sk.builtin.func(function () {
    console.log(Sk.executionReports);
    Sk.builtin.pyCheckArgs("get_student_error", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      return new Sk.builtin.tuple([none, none]);
    } else {
      var error = Sk.executionReports["student"].error,
          position = {};

      if (error && error.traceback && error.traceback.length > 0) {
        position["line"] = error.traceback[0].lineno;
      } else {
        error = none;
      }

      position = Sk.ffi.remapToPy(position);
      return new Sk.builtin.tuple([error, position]);
    }
  });
  mod.had_execution_time_error = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("had_execution_time_error", arguments, 0, 0);
    return !Sk.executionReports["student"].success && Sk.executionReports["student"].error && Sk.executionReports["student"].error.tp$name === "TimeLimitError";
  });
  var backupTime = undefined;
  mod.limit_execution_time = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("limit_execution_time", arguments, 0, 0);
    backupTime = Sk.execLimit;

    if (Sk.execLimitFunction) {
      Sk.execLimit = Sk.execLimitFunction();
      Sk.execStart = Date.now();
    }
  });
  mod.unlimit_execution_time = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("unlimit_execution_time", arguments, 0, 0);
    Sk.execLimit = backupTime;
    Sk.execStart = Date.now();
  });
  mod.suppress_scrolling = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("suppress_scrolling", arguments, 0, 0);
    Sk.executionReports.instructor.scrolling = true;
  });
  /*
  def hist(self, data, **kwargs):
      label = kwargs.get('label', None)
      self.active_plot['data'].append({'type': 'Histogram', 'values': data, 'label': label})
  def plot(self, xs, ys=None, **kwargs):
      label = kwargs.get('label', None)
      if ys == None:
          self.active_plot['data'].append({'type': 'Line', 
                                          'x': range(len(xs)), 'y': xs, 'label': label})
      else:
          self.active_plot['data'].append({'type': 'Line', 'x': xs, 'y': ys, 'label': label})
  def scatter(self, xs, ys, **kwargs):
      label = kwargs.get('label', None)
      self.active_plot['data'].append({'type': 'Scatter', 'x': xs, 'y': ys, 'label': label})
  */

  mod.get_plots = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_plots", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      var outputs = Sk.executionReports["student"]["output"]();
      outputs = outputs.filter(function (output) {
        return typeof output != "string";
      }).map(function (graph) {
        return {
          "data": graph.map(function (plot) {
            var newPlot = {
              "type": plot.type,
              "label": ""
            };

            if (plot.type === "line" || plot.type === "scatter") {
              newPlot["x"] = plot.data.map(function (v) {
                return v.x;
              });
              newPlot["y"] = plot.data.map(function (v) {
                return v.y;
              });
            } else if (plot.type === "hist") {
              newPlot["values"] = plot.data;
            }

            return newPlot;
          }),
          "xlabel": "",
          "ylabel": "",
          "title": "",
          "legend": false
        };
      });
      return mixedRemapToPy(outputs);
    } else {
      return Sk.ffi.remapToPy([]);
    }
  }); // Provides `student` as an object with all the data that the student declared.

  mod.StudentData = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function (self) {
      //self.data = Sk.builtin.dict();
      var newDict = Sk.builtin.dict();
      Sk.abstr.sattr(self, Sk.builtin.str("data"), newDict, true);
      self.module = Sk.executionReports["student"].module;

      if (self.module !== undefined) {
        self.module = self.module.$d;

        for (var key in self.module) {
          if (self.module.hasOwnProperty(key)) {
            newDict.mp$ass_subscript(Sk.ffi.remapToPy(key), self.module[key]);
          }
        }
      } else {
        self.module = {};
      }
    });
    $loc.get_names_by_type = new Sk.builtin.func(function (self, type, exclude_builtins) {
      Sk.builtin.pyCheckArgs("get_names_by_type", arguments, 2, 3);

      if (exclude_builtins === undefined) {
        exclude_builtins = true;
      } else {
        Sk.builtin.pyCheckType("exclude_builtins", "boolean", Sk.builtin.checkBool(exclude_builtins));
        exclude_builtins = Sk.ffi.remapToJs(exclude_builtins);
      }

      var result = [];

      for (var property in self.module) {
        if (self.module.hasOwnProperty(property)) {
          if (self.module[property].tp$name === type.tp$name) {
            //console.log(exclude_builtins);
            if (exclude_builtins && property.startsWith("__")) {
              continue;
            }

            result.push(Sk.ffi.remapToPy(property));
          }
        }
      }

      return Sk.builtin.list(result);
    });
    $loc.get_values_by_type = new Sk.builtin.func(function (self, type, exclude_builtins) {
      Sk.builtin.pyCheckArgs("get_values_by_type", arguments, 2, 3);

      if (exclude_builtins === undefined) {
        exclude_builtins = true;
      } else {
        Sk.builtin.pyCheckType("exclude_builtins", "boolean", Sk.builtin.checkBool(exclude_builtins));
        exclude_builtins = Sk.ffi.remapToJs(exclude_builtins);
      }

      var result = [];

      for (var property in self.module) {
        if (self.module.hasOwnProperty(property)) {
          if (self.module[property].tp$name === type.tp$name) {
            if (exclude_builtins && property.startsWith("__")) {
              continue;
            }

            result.push(self.module[property]);
          }
        }
      }

      return Sk.builtin.list(result);
    });
  });
  mod.student = Sk.misceval.callsimOrSuspend(mod.StudentData);
  mod.get_student_data = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_student_data", arguments, 0, 0);
    return mod.student;
  });
  return mod;
};

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: LocalStorageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageWrapper", function() { return LocalStorageWrapper; });
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

LocalStorageWrapper.prototype.set = function (key, value) {
  localStorage.setItem(this.namespace + "_" + key + "_value", value);
  localStorage.setItem(this.namespace + "_" + key + "_timestamp", $.now());
};
/**
 * A method for removing a key from LocalStorage.
 *
 * @param {String} key - The name of the key to remove.
 */


LocalStorageWrapper.prototype.remove = function (key) {
  localStorage.removeItem(this.namespace + "_" + key + "_value");
  localStorage.removeItem(this.namespace + "_" + key + "_timestamp");
};
/**
 * A method for retrieving the value associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 */


LocalStorageWrapper.prototype.get = function (key) {
  return localStorage.getItem(this.namespace + "_" + key + "_value");
};
/**
 * A method for retrieving the time associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the time for.
 * @returns {Integer} - The timestamp (local epoch) when the key was last set.
 */


LocalStorageWrapper.prototype.getTime = function (key) {
  return parseInt(localStorage.getItem(this.namespace + "_" + key + "_timestamp"));
};
/**
 * A method for retrieving the value associated with the given key.
 * If the key does not exist, then the default value is used instead.
 * This default will be set.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 * @param {String} defaultValue - The default value to use. Must be a string.
 */


LocalStorageWrapper.prototype.getDefault = function (key, defaultValue) {
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


LocalStorageWrapper.prototype.has = function (key) {
  return localStorage.getItem(this.namespace + "_" + key + "_value") !== null;
};
/**
 * A test for whether the server has the newer version. This function
 * assumes that the server trip takes about 5 seconds. This method
 * is largely deprecated.
 *
 * @param {String} key - The key to check.
 * @param {Integer} server_time - The server's time as an epoch (in milliseconds)
 */


LocalStorageWrapper.prototype.is_new = function (key, server_time) {
  var stored_time = localStorage.getItem(this.namespace + "_" + key + "_timestamp");
  return server_time >= stored_time + 5000;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/trace.js":
/*!**********************!*\
  !*** ./src/trace.js ***!
  \**********************/
/*! exports provided: TRACE_HTML, Trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE_HTML", function() { return TRACE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TRACE_HTML = "\n\n<div class=\"blockpy-trace col-md-6 blockpy-panel\"\n            role=\"region\" aria-label=\"Trace\">\n    \n    <div class=\"clearfix\">\n        <strong>Trace: </strong>\n        \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-hide-trace'\n                data-bind=\"click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span> Hide Trace\n        </button>\n    </div>\n\n    <div class=\"input-group mb-3 blockpy-trace-controls\">\n        <div class=\"input-group-prepend\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.first\">\n                <span class='fas fa-step-backward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.back\">\n                <span class='fas fa-backward'></span>\n            </button>\n            <span class=\"input-group-text\">Step:</span>\n            <span class=\"input-group-text\">\n                <span data-bind='text: execution.student.currentTraceStep'></span>\n                / <span data-bind='text: execution.student.lastStep'></span>\n            </span>\n            <span class=\"input-group-text\">\n                (<span data-bind='text: ui.trace.line'></span>)\n            </span>\n        </div>\n        <div class=\"input-group-append\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.forward\">\n                <span class='fas fa-forward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.last\">\n                <span class='fas fa-step-forward'></span>\n            </button>\n        </div>\n    </div>\n    \n    <table class='table table-sm table-striped table-bordered table-hover'>\n        <caption>Current variables at this step</caption>\n        <thead>\n            <tr><th>Name</th><th>Type</th><th>Value</th></tr>\n        </thead>\n        <tbody data-bind=\"foreach: ui.trace.data().properties\">\n            <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">\n                <td data-bind=\"text: name\"></td>\n                <td data-bind=\"text: type\"></td>\n                <td>\n                    <code data-bind=\"text: value\"></code>\n                    <!-- ko if: type == \"List\" -->\n                    <a href=\"\" data-bind=\"click: $root.viewExactValue(type, exact_value)\">\n                    <span class='glyphicon glyphicon-new-window'></span>\n                    </a>\n                    <!-- /ko -->\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    \n</div>\n";
var Trace =
/*#__PURE__*/
function () {
  function Trace(main, tag) {
    _classCallCheck(this, Trace);

    this.main = main;
    this.tag = tag; // this.trace.click(this.buildTraceTable.bind(this));
  }
  /**
   * Reload the trace table, showing it if it was hidden and
   * resetting its position to the last step.
   */


  _createClass(Trace, [{
    key: "buildTraceTable",
    value: function buildTraceTable() {
      var execution = this.main.model.execution;
      execution.show_trace(true);
      execution.trace_step(execution.last_step());
      this.main.components.server.logEvent("editor", "trace");
    }
  }, {
    key: "parseGlobals",

    /**
     * Consume a set of variables traced from the execution and parse out any
     * global variables and modules.
     *
     * @param {Object} variables - a mapping of variable names to their Skupt value.
     */
    value: function parseGlobals(variables) {
      var result = [];
      var modules = [];

      if (!this.main.model.settings.trace_off()) {
        for (var property in variables) {
          var value = variables[property];

          if (property !== "__name__" && property !== "__doc__" && property !== "__package__") {
            property = property.replace("_$rw$", "").replace("_$rn$", "");
            var parsed = {
              "name": property,
              "type": "Unknown",
              "value": value.toString()
            };

            try {
              parsed = BlockPyEngine.parseValue(property, value);
            } catch (_unused) {// Can't really do anything
            }

            if (parsed !== null) {
              result.push(parsed);
            } else if (value.constructor === Sk.builtin.module) {
              modules.push(value.$d.__name__.v);
            }
          }
        }
      }

      return {
        "properties": result,
        "modules": modules
      };
    }
  }], [{
    key: "parseValue",

    /**
     * Convert a Skulpt value into a more easily printable object.
     *
     * @param {String} property
     * @param {Object} value - the skulpt value
     */
    value: function parseValue(property, value) {
      if (value === undefined) {
        return {
          "name": property,
          "type": "Unknown",
          "value": "Undefined"
        };
      }

      switch (value.constructor) {
        case Sk.builtin.func:
          return {
            "name": property,
            "type": "Function",
            "value": value.func_code.co_varnames !== undefined ? " Arguments: " + value.func_code.co_varnames.join(", ") : " No arguments"
          };

        case Sk.builtin.module:
          return null;

        case Sk.builtin.str:
          if (value.sq$length <= 2000) {
            return {
              "name": property,
              "type": "String",
              "value": value.$r().v
            };
          } else {
            return {
              "name": property,
              "type": "String",
              "value": "[" + value.sq$length() + " characters not shown]"
            };
          }

        case Sk.builtin.none:
          return {
            "name": property,
            "type": "None",
            "value": "None"
          };

        case Sk.builtin.bool:
          return {
            "name": property,
            "type": "Boolean",
            "value": value.$r().v
          };

        case Sk.builtin.nmber:
          return {
            "name": property,
            "type": "int" === value.skType ? "Integer" : "Float",
            "value": value.$r().v
          };

        case Sk.builtin.int_:
          return {
            "name": property,
            "type": "Integer",
            "value": value.$r().v
          };

        case Sk.builtin.float_:
          return {
            "name": property,
            "type": "Float",
            "value": value.$r().v
          };

        case Sk.builtin.tuple:
          return {
            "name": property,
            "type": "Tuple",
            "value": value.$r().v
          };

        case Sk.builtin.list:
          if (value.v.length <= 20) {
            return {
              "name": property,
              "type": "List",
              "value": value.$r().v,
              "exact_value": value
            };
          } else {
            return {
              "name": property,
              "type": "List",
              "value": "[... " + value.v.length + " elements ...]",
              "exact_value": value
            };
          }

        case Sk.builtin.dict:
          return {
            "name": property,
            "type": "Dictionary",
            "value": value.$r().v
          };

        case Number:
          return {
            "name": property,
            "type": value % 1 === 0 ? "Integer" : "Float",
            "value": value
          };

        case String:
          return {
            "name": property,
            "type": "String",
            "value": value
          };

        case Boolean:
          return {
            "name": property,
            "type": "Boolean",
            "value": value ? "True" : "False"
          };

        default:
          return {
            "name": property,
            "type": value.tp$name === undefined ? value : value.tp$name,
            "value": value.$r === undefined ? value : value.$r().v
          };
      }
    }
  }]);

  return Trace;
}();

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: indent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indent", function() { return indent; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) {
        a.splice(j--, 1);
      }
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
  var copyArray = array.filter(function (item) {
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
  var clone = node.nodeType == 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false); // Recurse     

  var child = node.firstChild;

  while (child) {
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
  return str.replace(/^(?=.)/gm, "    ");
}
/**
 * Return a random integer between [`min`, `max`].
 * 
 * @param {number} min - The lowest possible integer.
 * @param {number} max - The highest possible integer (inclusive).
 * @returns {number} A random integer.
 */

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Encodes some text so that it can be safely written into an HTML box.
 * This includes replacing special HTML characters (&, <, >, etc.).
 *
 * @param {string} str - The text to be converted.
 * @return {string} The HTML-safe text.
 */


function encodeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
/**
 * Shuffle the blocks in the workspace
 */


if (typeof Blockly !== "undefined") {
  Blockly.WorkspaceSvg.prototype.shuffle = function () {
    var metrics = this.getMetrics();
    var width = metrics.viewWidth / 2,
        height = metrics.viewHeight;
    var blocks = this.getTopBlocks(false);
    var y = 5,
        x = 0,
        maximal_increase = height / blocks.length;

    for (var i = 0; i < blocks.length; i++) {
      // Get a block
      var block = blocks[i];
      var properties = block.getRelativeToSurfaceXY();

      if (i == 0) {
        x = 5;
      } else {
        x = -properties.x + randomInteger(10, width);
      }

      block.moveBy(x, -properties.y + y);
      y = y + randomInteger(5, maximal_increase);
    }
  };
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
 * This function checks if the given object is one of the Sk.builtin objects
 * TODO: make this so we don't have to explicitly put out every option
 *          one possible thing we could do is get a string version of the 
 *          of the constructor and look for the substring "return new Sk.builtin"
 *          But I don't know how reliable that is.  Rather, it's kind of hackish.
 *          Should tehoretically belong in Sk.ffi
 * @param {object} obj - the object to be examined
 * @return {boolean} true if the object is one of the Sk.builtin types
**/


function isSkBuiltin(obj) {
  return obj instanceof Sk.builtin.dict || obj instanceof Sk.builtin.list || obj instanceof Sk.builtin.tuple || obj instanceof Sk.builtin.bool || obj instanceof Sk.builtin.int_ || obj instanceof Sk.builtin.float_ || obj instanceof Sk.builtin.str || obj instanceof Sk.builtin.lng; //var cons_str = obj.constructor + "";
  //return cons_str.indexOf("return new Sk.builtin") !== -1;
}

function isAstNode(obj) {
  return obj instanceof Object && "_astname" in obj;
}
/**
 * Should theoretically belong in Sk.ffi, but I put it here instead to not mess up the skulpt files
 * like the normal Sk.ffi.remapToPy, it doesn't work for functions or more complex objects, but it handles
 * cases where the types in obj are a mix of python SIMPLE objects and SIMPLE normal javascript objects
 * @param {object} obj - the object to be converted
 * @return {Sk.builtin.???} - returns the corresponding python object, dropping all functions and things it can't convert
**/


function mixedRemapToPy(obj) {
  var k;
  var kvs;
  var i;
  var arr; //@TODO: should theoretically check if the object is a pyhon dict or array with js objects

  if (isSkBuiltin(obj)) {
    //object is already python ready
    return obj;
  } else if (Object.prototype.toString.call(obj) === "[object Array]") {
    //object is actually a javascript array
    arr = [];

    for (i = 0; i < obj.length; ++i) {
      //for each object, convert it to a python object if it isn't one already
      var subval = obj[i];

      if (!isSkBuiltin(subval)) {
        arr.push(mixedRemapToPy(subval));
      } else {
        arr.push(subval);
      }
    }

    return new Sk.builtin.list(arr);
  } else if (obj === null) {
    //null object
    return Sk.builtin.none.none$;
  } else if (_typeof(obj) === "object") {
    if (!isSkBuiltin(obj)) {
      //assuming it's a standard dictionary
      kvs = []; //Sk.builtin.dict uses an array of key-value,key-value...

      for (k in obj) {
        //convert the key if it needs to be converted
        kvs.push(mixedRemapToPy(k)); //covert corresponding value if it needs to be converted

        kvs.push(mixedRemapToPy(obj[k]));
      } //create the new dictionary


      return new Sk.builtin.dict(kvs);
    } else {
      return obj;
    }
  } else if (typeof obj === "string") {
    return new Sk.builtin.str(obj);
  } else if (typeof obj === "number") {
    return Sk.builtin.assk$(obj);
  } else if (typeof obj === "boolean") {
    return new Sk.builtin.bool(obj);
  } else if (typeof obj === "function") {
    return new Sk.builtin.str(obj.name);
  }
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "knockout":
/*!*********************!*\
  !*** external "ko" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3M/OTgyOSIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3M/N2M4NCIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hYnN0cmFjdF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9weXRob24uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvdGFncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90ZXh0LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9jb25maWd1cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9za19tb2RfaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy90cmFjZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5L2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImtvXCIiXSwibmFtZXMiOlsiQmxvY2tQeSIsImNvbmZpZ3VyYXRpb24iLCJhc3NpZ25tZW50Iiwic3VibWlzc2lvbiIsImluaXRNb2RlbCIsInVuZGVmaW5lZCIsInNldEFzc2lnbm1lbnQiLCJpbml0TWFpbiIsImluaXRVdGlsaXRpZXMiLCJpbml0TW9kZWxNZXRob2RzIiwidHVybk9uSGFja3MiLCJpbml0SW50ZXJmYWNlIiwiYXBwbHlNb2RlbCIsImluaXRDb21wb25lbnRzIiwic3RhcnQiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJpbml0aWFsQ29uZmlndXJhdGlvbl8iLCJsb2NhbFNldHRpbmdzXyIsImhhcyIsImdldCIsIkxvY2FsU3RvcmFnZVdyYXBwZXIiLCJtb2RlbCIsInVzZXIiLCJpZCIsImtvIiwib2JzZXJ2YWJsZSIsIm5hbWUiLCJyb2xlIiwiZ2V0U2V0dGluZyIsImNvdXJzZUlkIiwiZ3JvdXBJZCIsImluc3RydWN0aW9ucyIsInVybCIsImV4dHJhRmlsZXMiLCJvYnNlcnZhYmxlQXJyYXkiLCJvblJ1biIsIm9uQ2hhbmdlIiwib25FdmFsIiwic3RhcnRpbmdDb2RlIiwibWFrZU1vZGVsRmlsZSIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwic2V0dGluZ3MiLCJjYW5FZGl0IiwiY2FuQmxvY2tzIiwiZGlzYWJsZVRpbWVvdXQiLCJ0b29sYm94TGV2ZWwiLCJzdGFydFZpZXciLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImlzUGFyc29ucyIsImRpc2FibGVGZWVkYmFjayIsInN0YXJ0SW50ZXJhY3RpdmUiLCJoaWRlU2NvcmUiLCJoaWRlRmlsZXMiLCJoaWRlRWRpdG9yIiwiaGlkZUFsbCIsImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvbiIsImhpZGVJbXBvcnRTdGF0ZW1lbnRzIiwiaGlkZVF1ZXVlZElucHV0cyIsImhpZGVDb3ZlcmFnZUJ1dHRvbiIsImNvZGUiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN0YXR1cyIsImRpc3BsYXkiLCJmaWxlbmFtZSIsImluc3RydWN0b3IiLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJhdXRvU2F2ZSIsImJpZ0NvbnNvbGUiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlRmlsZSIsInNhdmVGaWxlTWVzc2FnZSIsInNhdmVBc3NpZ25tZW50Iiwic2F2ZUFzc2lnbm1lbnRNZXNzYWdlIiwidXBkYXRlU3RhdHVzIiwidXBkYXRlU3RhdHVzTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImZlZWRiYWNrIiwibWVzc2FnZSIsImNhdGVnb3J5IiwibGFiZWwiLCJoaWRkZW4iLCJsaW5lc0Vycm9yIiwibGluZXNVbmNvdmVyZWQiLCJjYWxsYmFja3MiLCJzZXJ2ZXJDb25uZWN0ZWQiLCJibG9ja2x5UGF0aCIsImF0dGFjaG1lbnRQb2ludCIsImNvbnRhaW5lciIsInVybHMiLCJjb25zdGFudHMiLCJndWkiLCJtYWtlSW50ZXJmYWNlIiwiJCIsImh0bWwiLCJhc3NpZ25tZW50X2lkIiwiY29tcG9uZW50cyIsInNlcnZlciIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsImNvbnNvbGUiLCJzaXplIiwiYmFkZ2UiLCJ0b0xvd2VyQ2FzZSIsInRyYWNlIiwibGluZSIsInN0ZXAiLCJ0cmFjZURhdGEiLCJmaXJzdCIsImJhY2t3YXJkIiwicHJldmlvdXMiLCJNYXRoIiwibWluIiwiZm9yd2FyZCIsIm5leHQiLCJsYXN0IiwiZGF0YSIsImZpbGVzIiwidmlzaWJsZSIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwiZmlsZVN5c3RlbSIsIm5ld0ZpbGUiLCJkZWxldGVGaWxlIiwiZWRpdG9ycyIsImdldEVkaXRvciIsInZpZXciLCJtYXAiLCJzdWJzdHIiLCJjb250ZW50cyIsImNhblNhdmUiLCJjYW5EZWxldGUiLCJVTkRFTEVUQUJMRV9GSUxFUyIsImluZGV4T2YiLCJjYW5SZW5hbWUiLCJVTlJFTkFNQUJMRV9GSUxFUyIsInVwbG9hZCIsInVwbG9hZEZpbGUiLCJiaW5kIiwiZG93bmxvYWQiLCJkb3dubG9hZEZpbGUiLCJweXRob24iLCJmdWxsc2NyZWVuIiwiY29kZU1pcnJvciIsImJ5TmFtZSIsImJtIiwidGV4dEVkaXRvciIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsImV4ZWN1dGUiLCJydW4iLCJlbmdpbmUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwibWVzc2FnZXMiLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwibG9nIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsIkJsb2NrUHlGZWVkYmFjayIsImZpbmQiLCJCbG9ja1B5RW5naW5lIiwiQmxvY2tQeUZpbGVTeXN0ZW0iLCJFZGl0b3JzIiwiVHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlTZXJ2ZXIiLCJDT05TT0xFX0hUTUwiLCJ0YWciLCJjbGVhciIsInJlbW92ZUFsbCIsImVtcHR5IiwiU2siLCJUdXJ0bGVHcmFwaGljcyIsInRhcmdldCIsIm5ld1R1cnRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJpbnRlciIsInByaW50ZXJTZXR0aW5ncyIsInZhbHVlIiwicHJpbnRIdG1sIiwicGFnZSIsImVhY2giLCJhdHRyIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsInN0ZXBOdW1iZXIiLCJleGVjdXRpb25CdWZmZXIiLCJsaW5lTnVtYmVyIiwibGluZV9udW1iZXIiLCJwdXNoIiwic2xpY2UiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJtdXRlX3ByaW50ZXIiLCJsaW5lQ29udGFpbmVyIiwibGluZURhdGEiLCJhcHBlbmQiLCJ0b29sdGlwIiwiY2hhcnQiLCJvdXRlckRpdiIsInBuZ19tb2RlIiwicGFyZW50IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInByb3AiLCJwcm9tcHRNZXNzYWdlIiwicmVzdWx0IiwicHJpbnRJbnB1dCIsInByb21pc2UiLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJpbnB1dCIsInZhbCIsImJ1dHRvbiIsImNsaWNrIiwia2V5dXAiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwiaW5wdXRGb3JtIiwiaW5wdXRNc2ciLCJpbnB1dEJ0biIsImlucHV0Qm94IiwiRElBTE9HX0hUTUwiLCJCbG9ja1B5RGlhbG9nIiwidGl0bGVUYWciLCJib2R5VGFnIiwidGl0bGUiLCJib2R5Iiwib25jbG9zZSIsIm1vZGFsIiwiZHJhZ2dhYmxlIiwib24iLCJldmVudCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsInR5cGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCIsIkFzc2lnbm1lbnRTZXR0aW5nc1ZpZXciLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImRpcnR5IiwidXBkYXRlRWRpdG9yIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImN1cnJlbnRMaXN0ZW5lciIsInVwZGF0ZUhhbmRsZSIsImNvZGVtaXJyb3IiLCJuZXdDb250ZW50cyIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIkJMT0NLIiwiVEVYVCIsIm1ha2VUYWIiLCJpY29uIiwibW9kZSIsIlBZVEhPTl9FRElUT1JfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJKU09OIiwicGFyc2UiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImpvaW4iLCJjZWxscyIsImZpbHRlciIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsIm1ha2VTdWJzY3JpcHRpb25zIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwic2V0Q29kZSIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsInNldE1vZGUiLCJlbmRzV2l0aCIsIlB5dGhvbkVkaXRvciIsIlRBR1NfRURJVE9SX0hUTUwiLCJUYWdzRWRpdG9yVmlldyIsIlRhZ3NFZGl0b3IiLCJURVhUX0VESVRPUl9IVE1MIiwiVGV4dEVkaXRvclZpZXciLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJlZGl0b3IiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsImZvckVhY2giLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiaSIsImV4aXQiLCJlbnRlciIsInNwYWNlIiwiY2hhckF0IiwibGFzdEluZGV4T2YiLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwidG9TdHJpbmciLCJleGVjdXRpb25Nb2RlbCIsImNvbmZpZ3VyZVNrdWxwdCIsImNvbmZpZ3VyYXRpb25zIiwiUnVuQ29uZmlndXJhdGlvbiIsImV2YWwiLCJFdmFsQ29uZmlndXJhdGlvbiIsIk9uUnVuQ29uZmlndXJhdGlvbiIsIk9uQ2hhbmdlQ29uZmlndXJhdGlvbiIsIk9uRXZhbENvbmZpZ3VyYXRpb24iLCJvcGVuZWRGaWxlcyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsImNvbmZpZ3VyZSIsIl9fZnV0dXJlX18iLCJweXRob24zIiwiZmlsZW9wZW4iLCJvcGVuRmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5Ccm93c2VyIiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwicmVxdWVzdHNHZXQiLCJvcGVuVVJMIiwiZXhlY3V0aW9uUmVwb3J0cyIsImJ1aWx0aW5GaWxlcyIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJvcGVuRmlsZW5hbWVQcmVmaXgiLCJlbGVtIiwiZ2V0RWxlbWVudEJ5SWQiLCJidWlsdGluIiwiSU9FcnJvciIsIm5vZGVOYW1lIiwidGV4dENvbnRlbnQiLCJyZWplY3QiLCJuYW1lcyIsInRoZW4iLCJpbnRlcm5hbEVycm9yIiwidmFyaWFibGVzIiwiY29sdW1uTnVtYmVyIiwiZ2xvYmFscyIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwibGFzdF9zdGVwIiwidXNlIiwiQm9vbGVhbiIsInRyaW0iLCJ1cGRhdGVQYXJzZSIsInJ1blN1Y2Nlc3MiLCJydW5GYWlsdXJlIiwibW9kdWxlIiwiYWZ0ZXJTaW5nbGVFeGVjdXRpb24iLCIkZCIsIngiLCJleGVjdXRpb25FbmRfIiwiZXJyb3IiLCJvblJ1blN1Y2Nlc3MiLCJvblJ1bkZhaWx1cmUiLCJwcmVzZW50RmVlZGJhY2siLCJ0cCRuYW1lIiwiRkFJTEVEIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJjaGFuZ2UiLCJBQ1RJVkUiLCJjbGVhclRpbWVvdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiYXN0IiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJhZnRlcndhcmRzIiwicnVuU3R1ZGVudENvZGUiLCJydW5JbnN0cnVjdG9yQ29kZSIsInN1Y2Nlc3MiLCJmZmkiLCJyZW1hcFRvSnMiLCJTVUNDRVNTIiwiU0NPUkUiLCJISURFIiwidG9vbGJhciIsIm5vdGlmeUZlZWRiYWNrVXBkYXRlIiwic2Nyb2xsSW50b1ZpZXciLCJtYXgiLCJvbGRfc3RhdHVzIiwiY29tcGxldGlvbl9zdGF0dXMiLCJtYXJrU3VjY2VzcyIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwicHJlc2VudEluc3RydWN0b3JFcnJvciIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJleGVjdXRpb25SZXN1bHRzIiwiREFUQSIsInF1aWNrIiwiYWZ0ZXIiLCJzZXRJbnN0cnVjdG9yRW52aXJvbm1lbnQiLCJzdHVkZW50Q29kZSIsInN0dWRlbnRDb2RlU2FmZSIsImluc3RydWN0b3JDb2RlIiwibGluZU9mZnNldCIsInNwbGl0IiwiTkVXX0xJTkVfUkVHRVgiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInF1ZXVlZElucHV0IiwicG9wIiwiaXNTYWZlIiwic2FmZUNvZGUiLCJzdHJpbmdpZnkiLCJpbmRlbnRlZENvZGUiLCJpbmRlbnQiLCJ0aWZhQW5hbHlzaXMiLCJDb25maWd1cmF0aW9uIiwicmVhZCIsImltcG9ydEZpbGUiLCJpc0ZvcmJpZGRlbiIsIlN0dWRlbnRDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0RnVuY3Rpb24iLCJJbmZpbml0eSIsImV4ZWNMaW1pdCIsIkluc3RydWN0b3JDb25maWd1cmF0aW9uIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsIk9uU2FtcGxlQ29uZmlndXJhdGlvbiIsIkZFRURCQUNLX0hUTUwiLCJmZWVkYmFja01vZGVsIiwib2Zmc2V0IiwidG9wIiwidG9wX29mX2VsZW1lbnQiLCJib3R0b21fb2ZfZWxlbWVudCIsIm91dGVySGVpZ2h0IiwiYm90dG9tX29mX3NjcmVlbiIsInRvcF9vZl9zY3JlZW4iLCJNRVNTQUdFIiwiQ0FURUdPUlkiLCJMQUJFTCIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJsaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwiZmFkZU91dCIsImZpbGVuYW1lRXhlY3V0ZWQiLCJhcmdzIiwidHJhY2ViYWNrIiwidHJhY2ViYWNrRm9ybWF0dGVkIiwiZnJhbWUiLCJsaW5lbm8iLCJsYXN0X3RyYWNlYmFjayIsImxpbmVfb2Zmc2V0IiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIkZJTEVTX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImNhbGxiYWNrIiwiZmlsZXN5c3RlbSIsImZpbGVBcnJheSIsImNoYW5nZXMiLCJtb2RlbEZpbGUiLCJub3RpZnlXYXRjaGVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwib2JzZXJ2ZUluQXJyYXlfIiwiYXJyYXkiLCJjb2RlQnVuZGxlIiwiZXhpc3RpbmdGaWxlIiwib2JzZXJ2ZUZpbGVfIiwiZm91bmQiLCJyZW1vdmUiLCJGT09URVJfSFRNTCIsImhpZ2hsaWdodFRpbWVvdXQiLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsIlRSQUNFX0hUTUwiLCJSRVRSWUlORyIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsInNhdmVUaW1lciIsInByZXNlbnRhdGlvblRpbWVyIiwidGltZXJzIiwib3ZlcmxheSIsImJsb2NraW5nQXR0ZW1wdHMiLCJpblByb2dyZXNzV2Fsa3MiLCJjcmVhdGVTdWJzY3JpcHRpb25zIiwiY2hlY2tDYWNoZXMiLCJjaGVja0lQIiwibmV3SVAiLCJvbGRJUCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJzYXZlX2Fzc2lnbm1lbnQiLCJUSU1FUl9ERUxBWSIsInNhdmVfY29kZSIsIk9iamVjdCIsImtleXMiLCJjYWNoZSIsInB1c2hBbnlRdWV1ZWQiLCJyZXNwb25zZSIsIl9wb3N0UmV0cnkiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJGQUlMX0RFTEFZIiwiY3JlYXRlU2VydmVyRGF0YSIsImQiLCJEYXRlIiwic2Vjb25kcyIsInJvdW5kIiwiZ2V0VGltZSIsImdyb3VwX2lkIiwiY291cnNlX2lkIiwic3R1ZGVudF9pZCIsImxvZ19pZCIsInNldFN0YXR1cyIsInNlcnZlcl9lcnJvciIsImRlZmF1bHRSZXNwb25zZSIsImlwIiwiZGVmYXVsdEZhaWx1cmUiLCJ0ZXh0U3RhdHVzIiwiZXZlbnRfbmFtZSIsImFjdGlvbiIsImxvZ19ldmVudCIsIl9lbnF1ZXVlRGF0YSIsImluZGV4IiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiX2dldFF1ZXVlZCIsImRlbGF5IiwicG9zdCIsImRvbmUiLCJmYWlsIiwiY29tcGxldGVkQ2FsbGJhY2siLCJmb3JjZVVwZGF0ZSIsImhpZGVDb3JyZWN0bmVzcyIsInNlY3JldCIsIl9fbWFpbl9fIiwiZ2V0UG5nRnJvbUJsb2NrcyIsInBuZ0RhdGEiLCJpbWciLCJzYXZlX3N1Y2Nlc3MiLCJzdWJtaXR0ZWQiLCJhdXRvX3VwbG9hZCIsImludHJvZHVjdGlvbiIsInBhcnNvbnMiLCJpbml0aWFsX3ZpZXciLCJpbXBvcnRhYmxlIiwiZGlzYWJsZV9hbGdvcml0aG1fZXJyb3JzIiwiZGlzYWJsZV90aW1lb3V0IiwidGltZSIsImNhY2hlZFRpbWUiLCJnZXRIaXN0b3J5IiwiX3Bvc3RCbG9ja2luZyIsImdldF9oaXN0b3J5Iiwic2hvd092ZXJsYXkiLCJhdHRlbXB0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFwcGVuZFRvIiwiY3NzIiwiaGlkZU92ZXJsYXkiLCJhdHRlbXB0cyIsImZhaWx1cmUiLCJlcnJvclRocm93biIsImxvYWRfYXNzaWdubWVudCIsImRpYWxvZyIsImVycm9yQ2FsbGJhY2siLCJsb2FkX2ZpbGUiLCJtb2QiLCJub25lIiwibm9uZSQiLCJwcmlvciIsInRpbWVpdCIsImZ1bmMiLCJweUNoZWNrQXJncyIsImFyZ3VtZW50cyIsImRpZmZlcmVuY2UiLCJub3ciLCJkZWJ1ZyIsImdldF9vdXRwdXQiLCJtaXhlZFJlbWFwVG9QeSIsInJlbWFwVG9QeSIsInJlc2V0X291dHB1dCIsInF1ZXVlX2lucHV0IiwicHlDaGVja1R5cGUiLCJjaGVja1N0cmluZyIsImdldF9wcm9ncmFtIiwidHJhY2VfbGluZXMiLCJsaXN0IiwiZ2V0X3N0dWRlbnRfZXJyb3IiLCJ0dXBsZSIsImhhZF9leGVjdXRpb25fdGltZV9lcnJvciIsImJhY2t1cFRpbWUiLCJsaW1pdF9leGVjdXRpb25fdGltZSIsImV4ZWNTdGFydCIsInVubGltaXRfZXhlY3V0aW9uX3RpbWUiLCJzdXBwcmVzc19zY3JvbGxpbmciLCJnZXRfcGxvdHMiLCJvdXRwdXRzIiwiZ3JhcGgiLCJwbG90IiwibmV3UGxvdCIsInYiLCJ5IiwiU3R1ZGVudERhdGEiLCJidWlsZENsYXNzIiwiJGdibCIsIiRsb2MiLCJfX2luaXRfXyIsIm5ld0RpY3QiLCJkaWN0IiwiYWJzdHIiLCJzYXR0ciIsInN0ciIsImhhc093blByb3BlcnR5IiwibXAkYXNzX3N1YnNjcmlwdCIsImdldF9uYW1lc19ieV90eXBlIiwiZXhjbHVkZV9idWlsdGlucyIsImNoZWNrQm9vbCIsInByb3BlcnR5IiwiZ2V0X3ZhbHVlc19ieV90eXBlIiwiY2FsbHNpbU9yU3VzcGVuZCIsImdldF9zdHVkZW50X2RhdGEiLCJuYW1lc3BhY2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJwYXJzZUludCIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJzaG93X3RyYWNlIiwidHJhY2Vfc3RlcCIsInRyYWNlX29mZiIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bmNfY29kZSIsImNvX3Zhcm5hbWVzIiwic3EkbGVuZ3RoIiwiJHIiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiU3RyaW5nIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsIml0ZW0iLCJjbG9uZU5vZGUiLCJub2RlIiwiY2xvbmUiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZVZhbHVlIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJyYW5kb21JbnRlZ2VyIiwiZmxvb3IiLCJyYW5kb20iLCJCbG9ja2x5IiwiV29ya3NwYWNlU3ZnIiwic2h1ZmZsZSIsIm1ldHJpY3MiLCJnZXRNZXRyaWNzIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImJsb2NrcyIsImdldFRvcEJsb2NrcyIsIm1heGltYWxfaW5jcmVhc2UiLCJnZXRSZWxhdGl2ZVRvU3VyZmFjZVhZIiwibW92ZUJ5IiwibW92ZUVsZW1lbnRzIiwibW92ZUNoZWNrIiwiaXNTa0J1aWx0aW4iLCJvYmoiLCJsbmciLCJpc0FzdE5vZGUiLCJrIiwia3ZzIiwiYXJyIiwiY2FsbCIsInN1YnZhbCIsImFzc2skIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FBQ0k7Ozs7O0FBS0EsbUJBQVlDLGFBQVosRUFBMkJDLFVBQTNCLEVBQXVDQyxVQUF2QyxFQUFtRDtBQUFBOztBQUMvQyxTQUFLQyxTQUFMLENBQWVILGFBQWY7O0FBQ0EsUUFBSUMsVUFBVSxLQUFLRyxTQUFuQixFQUE4QjtBQUMxQixXQUFLQyxhQUFMLENBQW1CTCxhQUFuQixFQUFrQ0MsVUFBbEMsRUFBOENDLFVBQTlDO0FBQ0g7O0FBQ0QsU0FBS0ksUUFBTDtBQUNIO0FBRUQ7Ozs7Ozs7QUFkSjtBQUFBO0FBQUEsK0JBbUJlO0FBQ1AsV0FBS0MsYUFBTDtBQUNBLFdBQUtDLGdCQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNBLFdBQUtDLGFBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLEtBQUw7QUFDSDtBQTNCTDtBQUFBOztBQTZCSTs7Ozs7QUE3QkosK0JBa0NlQyxHQWxDZixFQWtDb0JDLFlBbENwQixFQWtDa0M7QUFDMUIsVUFBSUQsR0FBRyxJQUFJLEtBQUtFLHFCQUFoQixFQUF1QztBQUNuQyxlQUFPLEtBQUtBLHFCQUFMLENBQTJCRixHQUEzQixDQUFQO0FBQ0gsT0FGRCxNQUVPLElBQUksS0FBS0csY0FBTCxDQUFvQkMsR0FBcEIsQ0FBd0JKLEdBQXhCLENBQUosRUFBa0M7QUFDckMsZUFBTyxLQUFLRyxjQUFMLENBQW9CRSxHQUFwQixDQUF3QkwsR0FBeEIsQ0FBUDtBQUNILE9BRk0sTUFFQTtBQUNILGVBQU9DLFlBQVA7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUE1Q0o7QUFBQTtBQUFBLDhCQXdEY2YsYUF4RGQsRUF3RDZCO0FBQ3JCO0FBQ0EsV0FBS2lCLGNBQUwsR0FBc0IsSUFBSUcsOERBQUosQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxXQUFLSixxQkFBTCxHQUE2QmhCLGFBQTdCO0FBRUEsV0FBS3FCLEtBQUwsR0FBYTtBQUNUQyxZQUFJLEVBQUU7QUFDRkMsWUFBRSxFQUFFQyxFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxTQUFELENBQTNCLENBREY7QUFFRjBCLGNBQUksRUFBRUYsRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsV0FBRCxDQUEzQixDQUZKOztBQUdGOzs7OztBQUtBMkIsY0FBSSxFQUFFSCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxLQUFLRyxVQUFMLENBQWdCLFdBQWhCLEVBQTZCLElBQTdCLENBQWQsQ0FSSjs7QUFTRjs7O0FBR0FDLGtCQUFRLEVBQUVMLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLGdCQUFELENBQTNCLENBWlI7O0FBYUY7OztBQUdBOEIsaUJBQU8sRUFBRU4sRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsZUFBRCxDQUEzQjtBQWhCUCxTQURHO0FBbUJUQyxrQkFBVSxFQUFFO0FBQ1JzQixZQUFFLEVBQUVDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FESTtBQUVSQyxjQUFJLEVBQUVGLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLGdCQUFkLENBRkU7QUFHUk0sc0JBQVksRUFBRVAsRUFBRSxDQUFDQyxVQUFILENBQWMsNkRBQWQsQ0FITjs7QUFJUjs7O0FBR0FPLGFBQUcsRUFBRVIsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQVBHOztBQVFSOzs7QUFHQVEsb0JBQVUsRUFBRVQsRUFBRSxDQUFDVSxlQUFILENBQW1CLEVBQW5CLENBWEo7QUFZUkMsZUFBSyxFQUFFWCxFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxtQkFBRCxDQUEzQixDQVpDO0FBYVJvQyxrQkFBUSxFQUFFWixFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxzQkFBRCxDQUEzQixDQWJGO0FBY1JxQyxnQkFBTSxFQUFFYixFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyxvQkFBRCxDQUEzQixDQWRBO0FBZVI7QUFDQXNDLHNCQUFZLEVBQUVkLEVBQUUsQ0FBQ1UsZUFBSCxDQUFtQixDQUFDSyw0REFBYSxDQUFDLG1CQUFELEVBQXNCdkMsYUFBYSxDQUFDLDBCQUFELENBQW5DLENBQWQsQ0FBbkIsQ0FoQk47QUFpQlJ3QyxrQkFBUSxFQUFFaEIsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQWpCRjtBQWtCUmdCLHVCQUFhLEVBQUVqQixFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBbEJQO0FBbUJSaUIsaUJBQU8sRUFBRWxCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FuQkQ7QUFvQlJJLGtCQUFRLEVBQUVMLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FwQkY7QUFxQlJrQixpQkFBTyxFQUFFbkIsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQXJCRDtBQXNCUm1CLGNBQUksRUFBRXBCLEVBQUUsQ0FBQ1UsZUFBSCxDQUFtQixFQUFuQixDQXRCRTtBQXVCUlcsMkJBQWlCLEVBQUVyQixFQUFFLENBQUNVLGVBQUgsQ0FBbUIsRUFBbkIsQ0F2Qlg7QUF3QlJZLGtCQUFRLEVBQUU7QUFDTjs7OztBQUlBQyxtQkFBTyxFQUFFdkIsRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMscUJBQUQsQ0FBM0IsQ0FMSDs7QUFNTjs7OztBQUlBZ0QscUJBQVMsRUFBRXhCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLHVCQUFELENBQTNCLENBVkw7O0FBV047Ozs7QUFJQWlELDBCQUFjLEVBQUV6QixFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyw0QkFBRCxDQUEzQixDQWZWOztBQWdCTjs7O0FBR0FrRCx3QkFBWSxFQUFFMUIsRUFBRSxDQUFDQyxVQUFILENBQWN6QixhQUFhLENBQUMsMEJBQUQsQ0FBYixJQUE2QyxRQUEzRCxDQW5CUjs7QUFvQk47OztBQUdBbUQscUJBQVMsRUFBRTNCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjMkIsNkRBQVksQ0FBQ0MsS0FBM0IsQ0F2Qkw7O0FBd0JOOzs7QUFHQUMscUJBQVMsRUFBRTlCLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjekIsYUFBYSxDQUFDLHVCQUFELENBQTNCLENBM0JMO0FBNEJOO0FBQ0F1RCwyQkFBZSxFQUFFL0IsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQTdCWDtBQThCTjtBQUNBK0IsNEJBQWdCLEVBQUVoQyxFQUFFLENBQUNDLFVBQUgsQ0FBY3pCLGFBQWEsQ0FBQyw4QkFBRCxDQUEzQixDQS9CWjtBQWdDTjtBQUNBO0FBQ0F5RCxxQkFBUyxFQUFFakMsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQWxDTDtBQW1DTmlDLHFCQUFTLEVBQUVsQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBbkNMO0FBb0NOa0Msc0JBQVUsRUFBRW5DLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0FwQ047QUFxQ05tQyxtQkFBTyxFQUFFcEMsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQXJDSDtBQXNDTm9DLG9DQUF3QixFQUFFckMsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQXRDcEI7QUF1Q05xQyxnQ0FBb0IsRUFBRXRDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0F2Q2hCO0FBd0NOc0MsNEJBQWdCLEVBQUV2QyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBeENaO0FBeUNOdUMsOEJBQWtCLEVBQUV4QyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxLQUFkO0FBekNkO0FBeEJGLFNBbkJIO0FBdUZUdkIsa0JBQVUsRUFBRTtBQUNScUIsWUFBRSxFQUFFQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxJQUFkLENBREk7QUFFUndDLGNBQUksRUFBRXpDLEVBQUUsQ0FBQ1UsZUFBSCxDQUFtQixDQUFDSyw0REFBYSxDQUFDLFdBQUQsRUFDQ3ZDLGFBQWEsQ0FBQyxpQkFBRCxDQUFiLElBQW9DLEVBRHJDLENBQWQsQ0FBbkIsQ0FGRTtBQUlSZ0MsYUFBRyxFQUFFUixFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBSkc7QUFLUnlDLGtCQUFRLEVBQUUxQyxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBTEY7QUFNUjBDLGVBQUssRUFBRTNDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLENBQWQsQ0FOQztBQU9SMkMsaUJBQU8sRUFBRTVDLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0FQRDtBQVFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0FrQixpQkFBTyxFQUFFbkIsRUFBRSxDQUFDQyxVQUFILENBQWMsQ0FBZCxDQVpEO0FBYVI0QyxnQkFBTSxFQUFFN0MsRUFBRSxDQUFDQyxVQUFILENBQWMsU0FBZDtBQWJBLFNBdkZIO0FBc0dUNkMsZUFBTyxFQUFFO0FBQ0w7Ozs7QUFJQUMsa0JBQVEsRUFBRS9DLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FMTDs7QUFNTDs7OztBQUlBK0Msb0JBQVUsRUFBRWhELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQUtHLFVBQUwsQ0FBZ0Isb0JBQWhCLEVBQXNDLE1BQXRDLE1BQWdELE1BQTlELENBVlA7O0FBV0w7OztBQUdBNkMscUJBQVcsRUFBRWpELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0FkUjs7QUFlTDs7OztBQUlBaUQsb0JBQVUsRUFBRWxELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQUtHLFVBQUwsQ0FBZ0IscUJBQWhCLEVBQXVDd0IsNkRBQVksQ0FBQ0MsS0FBcEQsQ0FBZCxDQW5CUDs7QUFvQkw7Ozs7OztBQU1Bc0Isa0JBQVEsRUFBRW5ELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0ExQkw7O0FBMkJMOzs7QUFHQW1ELG9CQUFVLEVBQUVwRCxFQUFFLENBQUNDLFVBQUgsQ0FBYyxLQUFkLENBOUJQOztBQStCTDs7OztBQUlBb0QsOEJBQW9CLEVBQUVyRCxFQUFFLENBQUNDLFVBQUgsQ0FBY3FELHdFQUEyQixDQUFDQyxRQUExQyxDQW5DakI7O0FBb0NMOzs7QUFHQUMsd0JBQWMsRUFBRXhELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQWQsQ0F2Q1g7O0FBd0NMOzs7O0FBSUF3RCx5QkFBZSxFQUFFekQsRUFBRSxDQUFDVSxlQUFILENBQW1CLEVBQW5CLENBNUNaOztBQTZDTDs7O0FBR0FnRCw2QkFBbUIsRUFBRTFELEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FoRGhCOztBQWlETDs7O0FBR0EwRCx5QkFBZSxFQUFFO0FBcERaLFNBdEdBO0FBNEpUZCxjQUFNLEVBQUU7QUFDSjtBQUNBZSx3QkFBYyxFQUFFNUQsRUFBRSxDQUFDQyxVQUFILENBQWM0RCxxREFBVyxDQUFDQyxLQUExQixDQUZaO0FBR0pDLCtCQUFxQixFQUFFL0QsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQUhuQjtBQUlKO0FBQ0ErRCxxQkFBVyxFQUFFaEUsRUFBRSxDQUFDQyxVQUFILENBQWM0RCxxREFBVyxDQUFDQyxLQUExQixDQUxUO0FBTUpHLDRCQUFrQixFQUFFakUsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQU5oQjtBQU9KO0FBQ0FpRSxrQkFBUSxFQUFFbEUsRUFBRSxDQUFDQyxVQUFILENBQWM0RCxxREFBVyxDQUFDQyxLQUExQixDQVJOO0FBU0pLLHlCQUFlLEVBQUVuRSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBVGI7QUFVSjtBQUNBbUUscUJBQVcsRUFBRXBFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjNEQscURBQVcsQ0FBQ0MsS0FBMUIsQ0FYVDtBQVlKTyw0QkFBa0IsRUFBRXJFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEVBQWQsQ0FaaEI7QUFhSjtBQUNBcUUsa0JBQVEsRUFBRXRFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjNEQscURBQVcsQ0FBQ0MsS0FBMUIsQ0FkTjtBQWVKUyx5QkFBZSxFQUFFdkUsRUFBRSxDQUFDQyxVQUFILENBQWMsRUFBZCxDQWZiO0FBZ0JKO0FBQ0F1RSxrQkFBUSxFQUFFeEUsRUFBRSxDQUFDQyxVQUFILENBQWM0RCxxREFBVyxDQUFDQyxLQUExQixDQWpCTjtBQWtCSlcseUJBQWUsRUFBRXpFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEVBQWQsQ0FsQmI7QUFtQko7QUFDQXlFLHdCQUFjLEVBQUUxRSxFQUFFLENBQUNDLFVBQUgsQ0FBYzRELHFEQUFXLENBQUNDLEtBQTFCLENBcEJaO0FBcUJKYSwrQkFBcUIsRUFBRTNFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEVBQWQsQ0FyQm5CO0FBc0JKO0FBQ0EyRSxzQkFBWSxFQUFFNUUsRUFBRSxDQUFDQyxVQUFILENBQWM0RCxxREFBVyxDQUFDQyxLQUExQixDQXZCVjtBQXdCSmUsNkJBQW1CLEVBQUU3RSxFQUFFLENBQUNDLFVBQUgsQ0FBYyxFQUFkLENBeEJqQjtBQXlCSjtBQUNBNkUscUJBQVcsRUFBRTlFLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjNEQscURBQVcsQ0FBQ0MsS0FBMUI7QUExQlQsU0E1SkM7QUF3TFRpQixpQkFBUyxFQUFFO0FBQ1A7QUFDQUMsaUJBQU8sRUFBRSxFQUZGO0FBR1A7QUFDQUMsZ0JBQU0sRUFBRWpGLEVBQUUsQ0FBQ1UsZUFBSCxDQUFtQixFQUFuQixDQUpEO0FBS1A7QUFDQXdFLGlCQUFPLEVBQUU7QUFDTDtBQUNBbkMsb0JBQVEsRUFBRS9DLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FGTDtBQUdMO0FBQ0FrRix1QkFBVyxFQUFFbkYsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUpSO0FBS0w7QUFDQW1GLG9CQUFRLEVBQUVwRixFQUFFLENBQUNDLFVBQUgsQ0FBYyxDQUFkLENBTkw7QUFPTDtBQUNBb0YsdUJBQVcsRUFBRXJGLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLElBQWQsQ0FSUjtBQVNMcUYsb0JBQVEsRUFBRXRGLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLENBQWQsQ0FUTDtBQVVMO0FBQ0FzRiw0QkFBZ0IsRUFBRXZGLEVBQUUsQ0FBQ1UsZUFBSCxDQUFtQixFQUFuQixDQVhiO0FBWUw7QUFDQThFLDRCQUFnQixFQUFFeEYsRUFBRSxDQUFDQyxVQUFILENBQWMsQ0FBZCxDQWJiO0FBY0w7QUFDQXdGLG1CQUFPLEVBQUU7QUFmSixXQU5GO0FBdUJQO0FBQ0FDLGtCQUFRLEVBQUU7QUFDTjtBQUNBQyxtQkFBTyxFQUFFM0YsRUFBRSxDQUFDQyxVQUFILENBQWMsU0FBZCxDQUZIO0FBR04yRixvQkFBUSxFQUFFNUYsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUhKO0FBSU40RixpQkFBSyxFQUFFN0YsRUFBRSxDQUFDQyxVQUFILENBQWMsSUFBZCxDQUpEO0FBS042RixrQkFBTSxFQUFFOUYsRUFBRSxDQUFDQyxVQUFILENBQWMsS0FBZCxDQUxGO0FBTU44RixzQkFBVSxFQUFFL0YsRUFBRSxDQUFDVSxlQUFILENBQW1CLEVBQW5CLENBTk47QUFPTnNGLDBCQUFjLEVBQUVoRyxFQUFFLENBQUNVLGVBQUgsQ0FBbUIsRUFBbkIsQ0FQVjtBQVFOO0FBQ0ErRSxtQkFBTyxFQUFFO0FBVEg7QUF4QkgsU0F4TEY7QUE0TlRqSCxxQkFBYSxFQUFFO0FBQ1g7OztBQUdBeUgsbUJBQVMsRUFBRTtBQUNQOzs7QUFHQSx1QkFBVyxLQUFLekcscUJBQUwsQ0FBMkIsa0JBQTNCO0FBSkosV0FKQTs7QUFVWDs7OztBQUlBMEcseUJBQWUsRUFBRWxHLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjLEtBQUtHLFVBQUwsQ0FBZ0Isa0JBQWhCLEVBQW9DLElBQXBDLENBQWQsQ0FkTjtBQWVYO0FBQ0ErRixxQkFBVyxFQUFFLEtBQUszRyxxQkFBTCxDQUEyQixjQUEzQixDQWhCRjtBQWlCWDtBQUNBNEcseUJBQWUsRUFBRSxLQUFLNUcscUJBQUwsQ0FBMkIsa0JBQTNCLENBbEJOO0FBbUJYO0FBQ0E2RyxtQkFBUyxFQUFFLElBcEJBO0FBcUJYO0FBQ0FDLGNBQUksRUFBRSxLQUFLOUcscUJBQUwsQ0FBMkIsTUFBM0IsS0FBc0M7QUF0QmpDO0FBNU5OLE9BQWI7QUFxUEg7QUFsVEw7QUFBQTs7QUFvVEk7OztBQXBUSixvQ0F1VG9CO0FBQ1osVUFBSStHLFNBQVMsR0FBRyxLQUFLMUcsS0FBTCxDQUFXckIsYUFBM0I7QUFDQSxVQUFJZ0ksR0FBRyxHQUFHQyxrRUFBYSxDQUFDLElBQUQsQ0FBdkI7QUFDQUYsZUFBUyxDQUFDRixTQUFWLEdBQXNCSyw2Q0FBQyxDQUFDSCxTQUFTLENBQUNILGVBQVgsQ0FBRCxDQUE2Qk8sSUFBN0IsQ0FBa0NELDZDQUFDLENBQUNGLEdBQUQsQ0FBbkMsQ0FBdEI7QUFDSDtBQTNUTDtBQUFBO0FBQUEsbUNBNlRtQkksYUE3VG5CLEVBNlRrQztBQUMxQixXQUFLQyxVQUFMLENBQWdCQyxNQUFoQixDQUF1QmxELGNBQXZCLENBQXNDZ0QsYUFBdEM7QUFDSDtBQS9UTDtBQUFBO0FBQUEsdUNBaVV1QjtBQUNmLFVBQUlHLElBQUksR0FBRyxJQUFYO0FBQ0EsVUFBSWxILEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUNBQSxXQUFLLENBQUNtSCxFQUFOLEdBQVc7QUFDUDdHLFlBQUksRUFBRTtBQUNGOEcsa0JBQVEsRUFBRWpILEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDdEJySCxLQUFLLENBQUNDLElBQU4sQ0FBV0ssSUFBWCxPQUFzQixPQUF0QixJQUFpQ04sS0FBSyxDQUFDQyxJQUFOLENBQVdLLElBQVgsT0FBc0IsUUFEakM7QUFBQSxXQUFoQjtBQURSLFNBREM7QUFLUEksb0JBQVksRUFBRTtBQUNWNEcsbUJBQVMsRUFBRW5ILEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDdkJySCxLQUFLLENBQUNpRCxPQUFOLENBQWNZLG1CQUFkLE9BQXdDLElBRGpCO0FBQUEsV0FBaEIsQ0FERDtBQUlWMEQsaUJBQU8sRUFBRXBILEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDckJySCxLQUFLLENBQUNtSCxFQUFOLENBQVN6RyxZQUFULENBQXNCNEcsU0FBdEIsS0FDSUosSUFBSSxDQUFDTSxTQUFMLENBQWVDLFFBQWYsQ0FBd0J6SCxLQUFLLENBQUNpRCxPQUFOLENBQWNZLG1CQUFkLEVBQXhCLENBREosR0FFSXFELElBQUksQ0FBQ00sU0FBTCxDQUFlQyxRQUFmLENBQXdCekgsS0FBSyxDQUFDcEIsVUFBTixDQUFpQjhCLFlBQWpCLEVBQXhCLENBSGlCO0FBQUEsV0FBaEIsQ0FKQztBQVNWZ0gsZUFBSyxFQUFFO0FBQUEsbUJBQ0gxSCxLQUFLLENBQUNpRCxPQUFOLENBQWNZLG1CQUFkLENBQWtDLElBQWxDLENBREc7QUFBQTtBQVRHLFNBTFA7QUFpQlA4RCxpQkFBUyxFQUFFO0FBQ1BDLDJCQUFpQixFQUFFekgsRUFBRSxDQUFDa0gsWUFBSCxDQUFnQjtBQUFBLG1CQUMvQnJILEtBQUssQ0FBQ2lELE9BQU4sQ0FBY08sb0JBQWQsT0FBeUNDLHdFQUEyQixDQUFDQyxRQUR0QztBQUFBLFdBQWhCLENBRFo7QUFJUG1FLHdCQUFjLEVBQUUxSCxFQUFFLENBQUNrSCxZQUFILENBQWdCO0FBQUEsbUJBQzVCckgsS0FBSyxDQUFDaUQsT0FBTixDQUFjTyxvQkFBZCxPQUF5Q0Msd0VBQTJCLENBQUNxRSxLQUR6QztBQUFBLFdBQWhCLENBSlQ7QUFPUEMsOEJBQW9CLEVBQUU1SCxFQUFFLENBQUNrSCxZQUFILENBQWdCO0FBQUEsbUJBQ2xDckgsS0FBSyxDQUFDbUgsRUFBTixDQUFTUSxTQUFULENBQW1CQyxpQkFBbkIsTUFBMEM1SCxLQUFLLENBQUNtSCxFQUFOLENBQVNRLFNBQVQsQ0FBbUJFLGNBQW5CLEVBRFI7QUFBQSxXQUFoQixDQVBmO0FBVVBHLHFCQUFXLEVBQUU3SCxFQUFFLENBQUNrSCxZQUFILENBQWdCO0FBQUEsbUJBQ3pCckgsS0FBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JFLFFBQXhCLE9BQXVDLElBQXZDLEdBQ0ksWUFESixHQUNtQixFQUZNO0FBQUEsV0FBaEIsQ0FWTjtBQWNQMEMsc0JBQVksRUFBRSx3QkFBWTtBQUN0QixnQkFBSUMsWUFBWSxHQUFHbEksS0FBSyxDQUFDaUQsT0FBTixDQUFjTyxvQkFBakM7O0FBQ0EsZ0JBQUkwRSxZQUFZLE9BQU96RSx3RUFBMkIsQ0FBQzBFLElBQW5ELEVBQXlEO0FBQ3JERCwwQkFBWSxDQUFDekUsd0VBQTJCLENBQUNDLFFBQTdCLENBQVo7QUFDSCxhQUZELE1BRU8sSUFBSXdFLFlBQVksT0FBT3pFLHdFQUEyQixDQUFDcUUsS0FBbkQsRUFBMEQ7QUFDN0RJLDBCQUFZLENBQUN6RSx3RUFBMkIsQ0FBQzBFLElBQTdCLENBQVo7QUFDSCxhQUZNLE1BRUEsSUFBSW5JLEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRSxRQUF4QixPQUF1QyxJQUEzQyxFQUFpRDtBQUNwRDJDLDBCQUFZLENBQUN6RSx3RUFBMkIsQ0FBQ3FFLEtBQTdCLENBQVo7QUFDSCxhQUZNLE1BRUE7QUFDSEksMEJBQVksQ0FBQ3pFLHdFQUEyQixDQUFDMEUsSUFBN0IsQ0FBWjtBQUNIO0FBQ0o7QUF6Qk0sU0FqQko7QUE0Q1BDLGVBQU8sRUFBRTtBQUNMQyxjQUFJLEVBQUVsSSxFQUFFLENBQUNrSCxZQUFILENBQWdCO0FBQUEsbUJBQ2xCckgsS0FBSyxDQUFDaUQsT0FBTixDQUFjTyxvQkFBZCxPQUF5Q0Msd0VBQTJCLENBQUMwRSxJQUFyRSxHQUNJLFdBREosR0FFSSxVQUhjO0FBQUEsV0FBaEI7QUFERCxTQTVDRjtBQW1EUHRDLGdCQUFRLEVBQUU7QUFDTnlDLGVBQUssRUFBRW5JLEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0IsWUFBWTtBQUMvQixnQkFBSXJILEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JXLFFBQWhCLENBQXlCRSxRQUF6QixPQUF3QyxJQUE1QyxFQUFrRDtBQUM5QyxxQkFBTyxZQUFQO0FBQ0g7O0FBQ0Qsb0JBQVEvRixLQUFLLENBQUNrRixTQUFOLENBQWdCVyxRQUFoQixDQUF5QkUsUUFBekIsR0FBb0N3QyxXQUFwQyxFQUFSO0FBQ0k7QUFDQSxtQkFBSyxNQUFMO0FBQ0ksdUJBQU8sWUFBUDs7QUFDSixtQkFBSyxTQUFMO0FBQ0ksdUJBQU8scUJBQVA7O0FBQ0osbUJBQUssUUFBTDtBQUNJLHVCQUFPLG9CQUFQOztBQUNKLG1CQUFLLFFBQUw7QUFDSSx1QkFBTyxvQkFBUDs7QUFDSixtQkFBSyxVQUFMO0FBQ0ksdUJBQU8sc0JBQVA7O0FBQ0osbUJBQUssVUFBTDtBQUNBLG1CQUFLLFVBQUw7QUFDSSx1QkFBTyxzQkFBUDs7QUFDSixtQkFBSyxVQUFMO0FBQ0EsbUJBQUssWUFBTDtBQUNJLHVCQUFPLHNCQUFQOztBQUNKLG1CQUFLLFVBQUw7QUFDSSx1QkFBTyx3QkFBUDs7QUFDSixtQkFBSyxXQUFMO0FBQ0ksdUJBQU8saUJBQVA7QUFyQlI7QUF1QkgsV0EzQk0sQ0FERDtBQTZCTnhDLGtCQUFRLEVBQUU1RixFQUFFLENBQUNrSCxZQUFILENBQWdCLFlBQVk7QUFDbEMsZ0JBQUlySCxLQUFLLENBQUNrRixTQUFOLENBQWdCVyxRQUFoQixDQUF5QkUsUUFBekIsT0FBd0MsSUFBNUMsRUFBa0Q7QUFDOUMscUJBQU8sRUFBUDtBQUNIOztBQUNELG9CQUFRL0YsS0FBSyxDQUFDa0YsU0FBTixDQUFnQlcsUUFBaEIsQ0FBeUJFLFFBQXpCLEdBQW9Dd0MsV0FBcEMsRUFBUjtBQUNJO0FBQ0EsbUJBQUssTUFBTDtBQUNJLHVCQUFPLEVBQVA7O0FBQ0osbUJBQUssU0FBTDtBQUNJLHVCQUFPLGVBQVA7O0FBQ0osbUJBQUssUUFBTDtBQUNJLHVCQUFPLGNBQVA7O0FBQ0osbUJBQUssUUFBTDtBQUNJLHVCQUFPLGNBQVA7O0FBQ0osbUJBQUssVUFBTDtBQUNJLHVCQUFPLGdCQUFQOztBQUNKLG1CQUFLLFVBQUw7QUFDQSxtQkFBSyxVQUFMO0FBQ0ksdUJBQU8saUJBQVA7O0FBQ0osbUJBQUssVUFBTDtBQUNBLG1CQUFLLFlBQUw7QUFDSSx1QkFBTyxrQkFBUDs7QUFDSixtQkFBSyxVQUFMO0FBQ0ksdUJBQU8sVUFBUDs7QUFDSixtQkFBSyxXQUFMO0FBQ0ksdUJBQU8sV0FBUDtBQXJCUjtBQXVCSCxXQTNCUztBQTdCSixTQW5ESDtBQTZHUEMsYUFBSyxFQUFFO0FBQ0gzSSxhQUFHLEVBQUVNLEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDakJySCxLQUFLLENBQUNrRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkssZ0JBQXhCLE9BQStDLElBRDlCO0FBQUEsV0FBaEIsQ0FERjtBQUlIK0MsY0FBSSxFQUFFdEksRUFBRSxDQUFDa0gsWUFBSCxDQUFnQixZQUFZO0FBQzlCLGdCQUFJcUIsSUFBSSxHQUFHMUksS0FBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixFQUFYO0FBQ0EsZ0JBQUlKLFFBQVEsR0FBR3ZGLEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCRSxRQUF4QixFQUFmO0FBQ0EsZ0JBQUlvRCxTQUFTLEdBQUczSSxLQUFLLENBQUNrRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkssZ0JBQXhCLEVBQWhCOztBQUNBLGdCQUFJZ0QsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDWixxQkFBTyxZQUFQO0FBQ0gsYUFGRCxNQUVPLElBQUlBLElBQUksS0FBS25ELFFBQWIsRUFBdUI7QUFDMUIscUJBQU8sY0FBUDtBQUNILGFBRk0sTUFFQTtBQUNILHFCQUFPb0QsU0FBUyxDQUFDRCxJQUFELENBQVQsQ0FBZ0JELElBQXZCO0FBQ0g7QUFDSixXQVhLLENBSkg7QUFnQkhHLGVBQUssRUFBRSxpQkFBWTtBQUNmNUksaUJBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCTSxnQkFBeEIsQ0FBeUMsQ0FBekM7QUFDSCxXQWxCRTtBQW1CSGtELGtCQUFRLEVBQUUsb0JBQVk7QUFDbEIsZ0JBQUlDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZaEosS0FBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixLQUE2QyxDQUF6RCxDQUFmO0FBQ0EzRixpQkFBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixDQUF5Q21ELFFBQXpDO0FBQ0gsV0F0QkU7QUF1QkhHLGlCQUFPLEVBQUUsbUJBQVk7QUFDakIsZ0JBQUlDLElBQUksR0FBR0gsSUFBSSxDQUFDQyxHQUFMLENBQVNoSixLQUFLLENBQUNrRixTQUFOLENBQWdCSyxRQUFoQixFQUFULEVBQXFDdkYsS0FBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixLQUE2QyxDQUFsRixDQUFYO0FBQ0EzRixpQkFBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JNLGdCQUF4QixDQUF5Q3VELElBQXpDO0FBQ0gsV0ExQkU7QUEyQkhDLGNBQUksRUFBRSxnQkFBWTtBQUNkbkosaUJBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCTSxnQkFBeEIsQ0FBeUMzRixLQUFLLENBQUNrRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkUsUUFBeEIsRUFBekM7QUFDSCxXQTdCRTtBQThCSDZELGNBQUksRUFBRWpKLEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0IsWUFBWTtBQUM5QixnQkFBSXFCLElBQUksR0FBRzFJLEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCTSxnQkFBeEIsRUFBWDtBQUNBLGdCQUFJSixRQUFRLEdBQUd2RixLQUFLLENBQUNrRixTQUFOLENBQWdCRyxPQUFoQixDQUF3QkUsUUFBeEIsRUFBZjtBQUNBLGdCQUFJb0QsU0FBUyxHQUFHM0ksS0FBSyxDQUFDa0YsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0JLLGdCQUF4QixFQUFoQjs7QUFDQSxvQkFBUWdELElBQVI7QUFDSSxtQkFBSyxDQUFMO0FBQ0ksdUJBQU8sRUFBUDs7QUFDSixtQkFBS25ELFFBQUw7QUFDSSx1QkFBT29ELFNBQVMsQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBaEI7O0FBQ0o7QUFDSUMseUJBQVMsQ0FBQ0QsSUFBRCxDQUFUO0FBTlI7QUFRSCxXQVpLO0FBOUJILFNBN0dBO0FBeUpQVyxhQUFLLEVBQUU7QUFDSEMsaUJBQU8sRUFBRW5KLEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDckJySCxLQUFLLENBQUNpRCxPQUFOLENBQWNFLFVBQWQsTUFBOEIsQ0FBQ25ELEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUI2QyxRQUFqQixDQUEwQlksU0FBMUIsRUFEVjtBQUFBLFdBQWhCLENBRE47QUFJSGtILHFCQUFXLEVBQUUscUJBQVNDLElBQVQsRUFBZTtBQUN4QixvQkFBUUEsSUFBUjtBQUNJLG1CQUFLLFdBQUw7QUFBa0IsdUJBQU94SixLQUFLLENBQUNuQixVQUFOLENBQWlCK0QsSUFBakIsRUFBUDs7QUFDbEIsbUJBQUssa0JBQUw7QUFBeUIsdUJBQU81QyxLQUFLLENBQUNwQixVQUFOLENBQWlCOEIsWUFBakIsRUFBUDs7QUFDekIsbUJBQUssZUFBTDtBQUFzQix1QkFBT1YsS0FBSyxDQUFDcEIsVUFBTixDQUFpQm1DLFFBQWpCLE9BQWdDLElBQXZDOztBQUN0QixtQkFBSyxhQUFMO0FBQW9CLHVCQUFPZixLQUFLLENBQUNwQixVQUFOLENBQWlCb0MsTUFBakIsRUFBUDs7QUFDcEIsbUJBQUssb0JBQUw7QUFBMkIsdUJBQU9oQixLQUFLLENBQUNwQixVQUFOLENBQWlCZ0MsVUFBakIsR0FBOEI2SSxJQUE5QixDQUFtQyxVQUFBQyxJQUFJO0FBQUEseUJBQ3JFQSxJQUFJLENBQUN4RyxRQUFMLE9BQW9CLG9CQURpRDtBQUFBLGlCQUF2QyxDQUFQOztBQUUzQixtQkFBSyxlQUFMO0FBQXNCLHVCQUFPbEQsS0FBSyxDQUFDcEIsVUFBTixDQUFpQjJDLElBQWpCLEdBQXdCb0ksTUFBL0I7O0FBQ3RCLG1CQUFLLDZCQUFMO0FBQW9DLHVCQUFPM0osS0FBSyxDQUFDcEIsVUFBTixDQUFpQjRDLGlCQUFqQixHQUFxQ21JLE1BQTVDOztBQUNwQztBQUFTLHVCQUFPLEtBQVA7QUFUYjtBQVdILFdBaEJFO0FBaUJIQyxhQUFHLEVBQUUsYUFBU0osSUFBVCxFQUFlO0FBQ2hCLG9CQUFRQSxJQUFSO0FBQ0ksbUJBQUssb0JBQUw7QUFDQSxtQkFBSyxlQUFMO0FBQ0EsbUJBQUssbUJBQUw7QUFDSXRDLG9CQUFJLENBQUNGLFVBQUwsQ0FBZ0I2QyxVQUFoQixDQUEyQkMsT0FBM0IsQ0FBbUNOLElBQW5DO0FBQTBDOztBQUM5QyxtQkFBSyxlQUFMO0FBQ0l4SixxQkFBSyxDQUFDcEIsVUFBTixDQUFpQm1DLFFBQWpCLENBQTBCLEVBQTFCO0FBQ0FtRyxvQkFBSSxDQUFDRixVQUFMLENBQWdCNkMsVUFBaEIsQ0FBMkJDLE9BQTNCLENBQW1DTixJQUFuQztBQUNBOztBQUNKLG1CQUFLLGFBQUw7QUFDSXhKLHFCQUFLLENBQUNwQixVQUFOLENBQWlCb0MsTUFBakIsQ0FBd0IsRUFBeEI7QUFDQWtHLG9CQUFJLENBQUNGLFVBQUwsQ0FBZ0I2QyxVQUFoQixDQUEyQkMsT0FBM0IsQ0FBbUNOLElBQW5DO0FBQ0E7O0FBQ0o7QUFiSjs7QUFnQkF4SixpQkFBSyxDQUFDaUQsT0FBTixDQUFjQyxRQUFkLENBQXVCc0csSUFBdkI7QUFDSCxXQW5DRTtBQW9DSCxvQkFBUSxtQkFBVztBQUNmLG1CQUFPdEMsSUFBSSxDQUFDRixVQUFMLENBQWdCNkMsVUFBaEIsQ0FBMkJFLFVBQTNCLENBQXNDL0osS0FBSyxDQUFDaUQsT0FBTixDQUFjQyxRQUFkLEVBQXRDLENBQVA7QUFDSDtBQXRDRSxTQXpKQTtBQWlNUDhHLGVBQU8sRUFBRTtBQUNMekMsaUJBQU8sRUFBRXBILEVBQUUsQ0FBQ2tILFlBQUgsQ0FBaUI7QUFBQSxtQkFDdEJILElBQUksQ0FBQ0YsVUFBTCxDQUFnQmdELE9BQWhCLENBQXdCQyxTQUF4QixDQUFrQ2pLLEtBQUssQ0FBQ2lELE9BQU4sQ0FBY0MsUUFBZCxFQUFsQyxDQURzQjtBQUFBLFdBQWpCLENBREo7QUFJTGdILGNBQUksRUFBRS9KLEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDbEJySCxLQUFLLENBQUNpRCxPQUFOLENBQWNDLFFBQWQsS0FBMkJsRCxLQUFLLENBQUNtSCxFQUFOLENBQVM2QyxPQUFULENBQWlCekMsT0FBakIsRUFBM0IsR0FBd0QsTUFEdEM7QUFBQSxXQUFoQixDQUpEO0FBT0xHLGVBQUssRUFBRSxpQkFBVztBQUNkMUgsaUJBQUssQ0FBQ25CLFVBQU4sQ0FBaUIrRCxJQUFqQixDQUFzQjVDLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJxQyxZQUFqQixHQUFnQ2tKLEdBQWhDLENBQ2xCLFVBQUFULElBQUksRUFBSTtBQUNKLGtCQUFJeEcsUUFBUSxHQUFHd0csSUFBSSxDQUFDeEcsUUFBTCxFQUFmOztBQUNBLGtCQUFJQSxRQUFRLEtBQUssbUJBQWpCLEVBQXNDO0FBQ2xDQSx3QkFBUSxHQUFHLFdBQVg7QUFDSCxlQUZELE1BRU87QUFDSEEsd0JBQVEsR0FBR0EsUUFBUSxDQUFDa0gsTUFBVCxDQUFnQixDQUFoQixDQUFYO0FBQ0g7O0FBQ0QscUJBQU9sSiw0REFBYSxDQUFDZ0MsUUFBRCxFQUFXd0csSUFBSSxDQUFDVyxRQUFMLEVBQVgsQ0FBcEI7QUFDSCxhQVRpQixDQUF0QjtBQVdILFdBbkJJO0FBb0JMQyxpQkFBTyxFQUFFbkssRUFBRSxDQUFDa0gsWUFBSCxDQUFnQjtBQUFBLG1CQUNyQixDQUFDckgsS0FBSyxDQUFDaUQsT0FBTixDQUFjSyxRQUFkLEVBRG9CO0FBQUEsV0FBaEIsQ0FwQko7QUFzQkxpSCxtQkFBUyxFQUFFcEssRUFBRSxDQUFDa0gsWUFBSCxDQUFnQjtBQUFBLG1CQUN2QixDQUFDLENBQUNySCxLQUFLLENBQUNwQixVQUFOLENBQWlCNkMsUUFBakIsQ0FBMEJZLFNBQTFCLEVBQUQsSUFBMENyQyxLQUFLLENBQUNpRCxPQUFOLENBQWNFLFVBQWQsRUFBM0MsS0FDQXFILHdEQUFpQixDQUFDQyxPQUFsQixDQUEwQnpLLEtBQUssQ0FBQ2lELE9BQU4sQ0FBY0MsUUFBZCxFQUExQixNQUF3RCxDQUFDLENBRmxDO0FBQUEsV0FBaEIsQ0F0Qk47QUF5Qkx3SCxtQkFBUyxFQUFFdkssRUFBRSxDQUFDa0gsWUFBSCxDQUFnQjtBQUFBLG1CQUN2QixDQUFDLENBQUNySCxLQUFLLENBQUNwQixVQUFOLENBQWlCNkMsUUFBakIsQ0FBMEJZLFNBQTFCLEVBQUQsSUFBMENyQyxLQUFLLENBQUNpRCxPQUFOLENBQWNFLFVBQWQsRUFBM0MsS0FDQXdILHdEQUFpQixDQUFDRixPQUFsQixDQUEwQnpLLEtBQUssQ0FBQ2lELE9BQU4sQ0FBY0MsUUFBZCxFQUExQixNQUF3RCxDQUFDLENBRmxDO0FBQUEsV0FBaEIsQ0F6Qk47QUE0QkwwSCxnQkFBTSxFQUFFQyxrRUFBVSxDQUFDQyxJQUFYLENBQWdCNUQsSUFBaEIsQ0E1Qkg7QUE2Qkw2RCxrQkFBUSxFQUFFQyxvRUFBWSxDQUFDRixJQUFiLENBQWtCNUQsSUFBbEIsQ0E3Qkw7QUE4QkwrRCxnQkFBTSxFQUFFO0FBQ0pDLHNCQUFVLEVBQUUsc0JBQU07QUFDZCxrQkFBSUMsVUFBVSxHQUFHakUsSUFBSSxDQUFDRixVQUFMLENBQWdCZ0QsT0FBaEIsQ0FBd0JvQixNQUF4QixDQUErQixRQUEvQixFQUF5Q0MsRUFBekMsQ0FBNENDLFVBQTVDLENBQXVESCxVQUF4RTtBQUNBLHFCQUFPQSxVQUFVLENBQUNJLFNBQVgsQ0FBcUIsWUFBckIsRUFBbUMsQ0FBQ0osVUFBVSxDQUFDSyxTQUFYLENBQXFCLFlBQXJCLENBQXBDLENBQVA7QUFDSDtBQUpHO0FBOUJILFNBak1GO0FBc09QQyxlQUFPLEVBQUU7QUFDTEMsYUFBRyxFQUFFO0FBQUEsbUJBQ0R4RSxJQUFJLENBQUNGLFVBQUwsQ0FBZ0IyRSxNQUFoQixDQUF1QkQsR0FBdkIsRUFEQztBQUFBO0FBREEsU0F0T0Y7QUEwT1B6RSxjQUFNLEVBQUU7QUFDSmpFLGdCQUFNLEVBQUcsZ0JBQUFILFFBQVE7QUFBQSxtQkFDYixtQkFBbUI3QyxLQUFLLENBQUNnRCxNQUFOLENBQWFILFFBQWIsR0FETjtBQUFBLFdBRGI7QUFJSitJLDZCQUFtQixFQUFFLDZCQUFDL0ksUUFBRDtBQUFBLG1CQUNqQjdDLEtBQUssQ0FBQ3JCLGFBQU4sQ0FBb0IwSCxlQUFwQixNQUNBckcsS0FBSyxDQUFDckIsYUFBTixDQUFvQjhILElBQXBCLEtBQTZCMUgsU0FEN0IsSUFFQWlCLEtBQUssQ0FBQ3JCLGFBQU4sQ0FBb0I4SCxJQUFwQixDQUF5QjVELFFBQXpCLE1BQXVDOUQsU0FIdEI7QUFBQSxXQUpqQjtBQVFKOE0sa0JBQVEsRUFBRTFMLEVBQUUsQ0FBQ2tILFlBQUgsQ0FBZ0I7QUFBQSxtQkFDdEJySCxLQUFLLENBQUNnRCxNQUFOLENBQWFrQixxQkFBYixNQUNBbEUsS0FBSyxDQUFDZ0QsTUFBTixDQUFhOEIscUJBQWIsRUFEQSxJQUVBOUUsS0FBSyxDQUFDZ0QsTUFBTixDQUFhb0Isa0JBQWIsRUFGQSxJQUdBcEUsS0FBSyxDQUFDZ0QsTUFBTixDQUFhc0IsZUFBYixFQUhBLElBSUF0RSxLQUFLLENBQUNnRCxNQUFOLENBQWE0QixlQUFiLEVBSkEsSUFLQTVFLEtBQUssQ0FBQ2dELE1BQU4sQ0FBYXdCLGtCQUFiLEVBTEEsSUFNQXhFLEtBQUssQ0FBQ2dELE1BQU4sQ0FBYTBCLGVBQWIsRUFOQSxJQU9BMUUsS0FBSyxDQUFDZ0QsTUFBTixDQUFhZ0MsbUJBQWIsRUFQQSxJQU9zQyxFQVJoQjtBQUFBLFdBQWhCO0FBUk47QUExT0QsT0FBWDtBQThQQThHLDBGQUErQixDQUFDNUUsSUFBRCxFQUFPbEgsS0FBUCxDQUEvQjtBQUNIO0FBbmtCTDtBQUFBO0FBQUEsa0NBcWtCa0I7QUFDVm9JLGFBQU8sQ0FBQzJELEdBQVIsQ0FBWSxNQUFaO0FBQ0g7QUFFRDs7Ozs7QUF6a0JKO0FBQUE7QUFBQSxpQ0E2a0JpQjtBQUNUNUwsUUFBRSxDQUFDNkwsYUFBSCxDQUFpQixLQUFLaE0sS0FBdEI7QUFDSDtBQS9rQkw7QUFBQTtBQUFBLG9DQWlsQm9CO0FBQ1osVUFBSWlNLElBQUksR0FBRyxJQUFYO0FBQ0EsV0FBS3pFLFNBQUwsR0FBaUI7QUFDYkMsZ0JBQVEsRUFBRSxrQkFBQ3lFLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxHQUFHQyxPQUFPLENBQUNDLFNBQVIsQ0FBa0IzRSxRQUFsQixDQUEyQnlFLElBQTNCLENBQUgsR0FBc0MsU0FBcEQ7QUFBQTtBQURHLE9BQWpCO0FBR0g7QUF0bEJMO0FBQUE7QUFBQSxxQ0F3bEJxQjtBQUNiLFVBQUkxRixTQUFTLEdBQUcsS0FBS3hHLEtBQUwsQ0FBV3JCLGFBQVgsQ0FBeUI2SCxTQUF6QztBQUNBLFVBQUlRLFVBQVUsR0FBRyxLQUFLQSxVQUFMLEdBQWtCLEVBQW5DO0FBQ0EsVUFBSWlGLElBQUksR0FBRyxJQUFYLENBSGEsQ0FJYjtBQUNBOztBQUNBakYsZ0JBQVUsQ0FBQ25CLFFBQVgsR0FBc0IsSUFBSXdHLDREQUFKLENBQW9CSixJQUFwQixFQUEwQnpGLFNBQVMsQ0FBQzhGLElBQVYsQ0FBZSxtQkFBZixDQUExQixDQUF0QjtBQUNBdEYsZ0JBQVUsQ0FBQzJFLE1BQVgsR0FBb0IsSUFBSVksd0RBQUosQ0FBa0JOLElBQWxCLENBQXBCO0FBQ0FqRixnQkFBVSxDQUFDNkMsVUFBWCxHQUF3QixJQUFJMkMsd0RBQUosQ0FBc0JQLElBQXRCLENBQXhCO0FBQ0FqRixnQkFBVSxDQUFDZ0QsT0FBWCxHQUFxQixJQUFJeUMsa0RBQUosQ0FBWVIsSUFBWixFQUFrQnpGLFNBQVMsQ0FBQzhGLElBQVYsQ0FBZSxpQkFBZixDQUFsQixDQUFyQjtBQUNBdEYsZ0JBQVUsQ0FBQ3dCLEtBQVgsR0FBbUIsSUFBSWtFLDZDQUFKLENBQVVULElBQVYsQ0FBbkI7QUFDQWpGLGdCQUFVLENBQUNvQixPQUFYLEdBQXFCLElBQUl1RSx3REFBSixDQUFtQlYsSUFBbkIsRUFBeUJ6RixTQUFTLENBQUM4RixJQUFWLENBQWUsa0JBQWYsQ0FBekIsQ0FBckI7QUFDQXRGLGdCQUFVLENBQUNDLE1BQVgsR0FBb0IsSUFBSTJGLHVEQUFKLENBQWtCWCxJQUFsQixDQUFwQjtBQUNBOzs7Ozs7O0FBT0g7QUE1bUJMO0FBQUE7QUFBQSw0QkE4bUJZO0FBQ0osV0FBS2pNLEtBQUwsQ0FBV2lELE9BQVgsQ0FBbUJDLFFBQW5CLENBQTRCLFdBQTVCO0FBQ0g7QUFobkJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTyxJQUFNMkosWUFBWSx3cUJBQWxCO0FBbUJBLElBQU1GLGNBQWI7QUFBQTtBQUFBO0FBRUk7Ozs7Ozs7QUFPQSwwQkFBYVYsSUFBYixFQUFtQmEsR0FBbkIsRUFBd0I7QUFBQTs7QUFDcEIsU0FBS2IsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2EsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS3JMLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLc0wsS0FBTCxHQUxvQixDQU9wQjtBQUNIOztBQWpCTDtBQUFBOztBQW1CSTs7OztBQW5CSiw0QkF1Qlk7QUFDSixXQUFLZCxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDNEgsU0FBakM7QUFDQSxXQUFLRixHQUFMLENBQVNSLElBQVQsQ0FBYyxrQkFBZCxFQUFrQ1csS0FBbEM7QUFDQUMsUUFBRSxDQUFDQyxjQUFILEdBQW9CO0FBQ2hCQyxjQUFNLEVBQUUsS0FBS0MsU0FBTCxFQURRO0FBRWhCQyxhQUFLLEVBQUUsQ0FGUztBQUdoQkMsY0FBTSxFQUFFO0FBSFEsT0FBcEI7QUFLSDtBQS9CTDtBQUFBO0FBaUNJO0FBakNKLGdDQWtDZ0I7QUFDUixhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBdENKO0FBQUE7QUFBQSx1Q0E0Q3VCO0FBQ2YsVUFBSUMsT0FBTyxHQUFHLElBQWQ7O0FBQ0EsV0FBS0MsZUFBTCxDQUFxQixXQUFyQixJQUFtQyxVQUFTM0csSUFBVCxFQUFlNEcsS0FBZixFQUFzQjtBQUFFRixlQUFPLENBQUNHLFNBQVIsQ0FBa0I3RyxJQUFsQixFQUF3QjRHLEtBQXhCO0FBQWdDLE9BQTNGOztBQUNBLFdBQUtELGVBQUwsQ0FBcUIsT0FBckIsSUFBK0IxRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxHQUFULEVBQWMsS0FBSzhELEdBQUwsQ0FBU1EsS0FBVCxLQUFpQixFQUEvQixDQUEvQjtBQUNBLFdBQUtHLGVBQUwsQ0FBcUIsU0FBckIsSUFBaUMsSUFBakM7QUFDQSxXQUFLQSxlQUFMLENBQXFCLGFBQXJCLElBQXFDLEtBQXJDO0FBQ0EsV0FBS0EsZUFBTCxDQUFxQixRQUFyQixJQUFnQzFFLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQVQsRUFBYyxLQUFLOEQsR0FBTCxDQUFTUyxNQUFULEtBQWtCLEVBQWhDLENBQWhDO0FBQ0EsV0FBS0UsZUFBTCxDQUFxQixXQUFyQixJQUFtQyxLQUFLWCxHQUFMLENBQVMsQ0FBVCxDQUFuQztBQUNBLGFBQU8sS0FBS1csZUFBWjtBQUNIO0FBckRMO0FBQUE7O0FBd0VJOzs7Ozs7O0FBeEVKLGdDQStFZ0IvRSxJQS9FaEIsRUErRXNCa0YsSUEvRXRCLEVBK0U0QjtBQUNwQi9HLE9BQUMsQ0FBQyxLQUFLMkcsT0FBTixDQUFELENBQWdCbEIsSUFBaEIsQ0FBcUIseUJBQXJCLEVBQWdEdUIsSUFBaEQsQ0FBcUQsWUFBVztBQUM1RCxZQUFJaEgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUgsSUFBUixDQUFhLFdBQWIsS0FBNkJwRixJQUFqQyxFQUF1QztBQUNuQzdCLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtILElBQVI7QUFDSCxTQUZELE1BRU87QUFDSGxILFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1ILElBQVI7QUFDSDtBQUNKLE9BTkQ7QUFPSDtBQXZGTDtBQUFBOztBQXlGSTs7OztBQXpGSiwwQkE2RlVDLFFBN0ZWLEVBNkZvQjtBQUNaO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLEtBQUtqQyxJQUFMLENBQVVqRixVQUFWLENBQXFCMkUsTUFBckIsQ0FBNEJ3QyxlQUE1QixDQUE0Q3pGLElBQTdEO0FBQ0EsVUFBSTBGLFVBQVUsR0FBRyxLQUFLbkMsSUFBTCxDQUFVakYsVUFBVixDQUFxQjJFLE1BQXJCLENBQTRCd0MsZUFBNUIsQ0FBNENFLFdBQTdELENBSFksQ0FJWjs7QUFDQSxVQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkIsYUFBS2hDLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUNrSixJQUFqQyxDQUFzQ0wsUUFBUSxDQUFDTSxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFDLENBQW5CLENBQXRDO0FBQ0EsWUFBSUMsV0FBVyxHQUFHQyxVQUFVLENBQUNSLFFBQUQsQ0FBNUI7O0FBQ0EsWUFBSSxDQUFFLEtBQUtoQyxJQUFMLENBQVVqTSxLQUFWLENBQWdCeUIsUUFBaEIsQ0FBeUJpTixZQUF6QixFQUFOLEVBQWdEO0FBQzVDLGNBQUlDLGFBQWEsR0FBRzlILENBQUMsQ0FBQyx1Q0FBRCxDQUFyQjtBQUNBLGNBQUkrSCxRQUFRLEdBQUcvSCxDQUFDLENBQUMsZUFBRCxFQUFrQjtBQUM5QiwyQkFBZSxTQURlO0FBRTlCLDhCQUFrQixNQUZZO0FBRzlCLHlCQUFhcUgsVUFIaUI7QUFJOUIsb0JBQVFNLFdBSnNCO0FBSzlCLHFCQUFTLFVBQVFOLFVBQVIsR0FBcUIsU0FBckIsR0FBK0JFO0FBTFYsV0FBbEIsQ0FBaEI7QUFPQU8sdUJBQWEsQ0FBQ0UsTUFBZCxDQUFxQkQsUUFBckIsRUFUNEMsQ0FVNUM7O0FBQ0EsZUFBSzlCLEdBQUwsQ0FBUytCLE1BQVQsQ0FBZ0JGLGFBQWhCO0FBQ0FDLGtCQUFRLENBQUNFLE9BQVQ7QUFDSDtBQUNKO0FBQ0o7QUFwSEw7QUFBQTs7QUFzSEk7Ozs7Ozs7O0FBdEhKLDhCQThIY0MsS0E5SGQsRUE4SHFCckIsS0E5SHJCLEVBOEg0QjtBQUNwQixVQUFJaEYsSUFBSSxHQUFHLEtBQUt1RCxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJ3RCxJQUExQixFQUFYO0FBQ0EsVUFBSUQsSUFBSSxHQUFHLEtBQUt3RCxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJtSixXQUExQixFQUFYO0FBQ0EsV0FBS3BDLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUNrSixJQUFqQyxDQUFzQ1osS0FBdEM7O0FBQ0EsVUFBSSxDQUFFLEtBQUt6QixJQUFMLENBQVVqTSxLQUFWLENBQWdCeUIsUUFBaEIsQ0FBeUJpTixZQUF6QixFQUFOLEVBQWdEO0FBQzVDLFlBQUlNLFFBQVEsR0FBR25JLENBQUMsQ0FBQ3FHLEVBQUUsQ0FBQzlFLE9BQUgsQ0FBVzZHLFFBQVgsR0FBc0JGLEtBQXRCLEdBQThCQSxLQUFLLENBQUMsQ0FBRCxDQUFwQyxDQUFoQixDQUQ0QyxDQUNhOztBQUN6REMsZ0JBQVEsQ0FBQ0UsTUFBVCxHQUFrQm5CLElBQWxCO0FBQ0FpQixnQkFBUSxDQUFDbEIsSUFBVCxDQUFjO0FBQ1YseUJBQWUsU0FETDtBQUVWLDRCQUFrQixNQUZSO0FBR1Y7QUFDQSxtQkFBUyx3QkFKQztBQUtWLHVCQUFhcEYsSUFMSDtBQU1WLG1CQUFTLFVBQVFBLElBQVIsR0FBYSxTQUFiLEdBQXVCRDtBQU50QixTQUFkO0FBUUF1RyxnQkFBUSxDQUFDRixPQUFUO0FBQ0g7QUFDSjtBQS9JTDtBQUFBOztBQWlKSTs7OztBQWpKSixxQ0FxSnFCO0FBQ2IsV0FBS2hDLEdBQUwsQ0FBU3FDLE9BQVQsQ0FBaUI7QUFDYkMsaUJBQVMsRUFBRSxLQUFLdEMsR0FBTCxDQUFTdUMsSUFBVCxDQUFjLGNBQWQsSUFBZ0MsS0FBS3ZDLEdBQUwsQ0FBU3VDLElBQVQsQ0FBYyxjQUFkO0FBRDlCLE9BQWpCLEVBRUcsR0FGSDtBQUdIO0FBekpMO0FBQUE7O0FBMkpJOzs7OztBQTNKSixrQ0FnS2tCQyxhQWhLbEIsRUFnS2lDO0FBQ3pCLFVBQUlDLE1BQU0sR0FBRyxLQUFLQyxVQUFMLENBQWdCRixhQUFoQixDQUFiOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ0UsT0FBWCxFQUFvQjtBQUNoQixZQUFJQyxjQUFKO0FBQ0EsWUFBSUMsZ0JBQWdCLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0I7QUFDakRILHdCQUFjLEdBQUdHLE9BQWpCO0FBQ0gsU0FGc0IsQ0FBdkI7O0FBR0EsWUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4Qkosd0JBQWMsQ0FBQ0gsTUFBTSxDQUFDUSxLQUFQLENBQWFDLEdBQWIsRUFBRCxDQUFkO0FBQ0FULGdCQUFNLENBQUNRLEtBQVAsQ0FBYVYsSUFBYixDQUFrQixVQUFsQixFQUE4QixJQUE5QjtBQUNBRSxnQkFBTSxDQUFDVSxNQUFQLENBQWNaLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFDSCxTQUpEOztBQUtBRSxjQUFNLENBQUNVLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQkosVUFBcEI7QUFDQVAsY0FBTSxDQUFDUSxLQUFQLENBQWFJLEtBQWIsQ0FBbUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzNCLGNBQUlBLENBQUMsQ0FBQ0MsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ2xCUCxzQkFBVTtBQUNiO0FBQ0osU0FKRDtBQUtBUCxjQUFNLENBQUNRLEtBQVAsQ0FBYU8sS0FBYjtBQUNBLGVBQU9YLGdCQUFQO0FBQ0gsT0FsQkQsTUFrQk87QUFDSCxlQUFPLEVBQVA7QUFDSDtBQUNKO0FBdkxMO0FBQUE7O0FBeUxJOzs7Ozs7QUF6TEosK0JBK0xlTCxhQS9MZixFQStMOEI7QUFDdEI7QUFDQSxVQUFJcEIsVUFBVSxHQUFHLEtBQUtqQyxJQUFMLENBQVVqRixVQUFWLENBQXFCMkUsTUFBckIsQ0FBNEJ3QyxlQUE1QixDQUE0Q3pGLElBQTdEO0FBQ0EsVUFBSTBGLFVBQVUsR0FBRyxLQUFLbkMsSUFBTCxDQUFVakYsVUFBVixDQUFxQjJFLE1BQXJCLENBQTRCd0MsZUFBNUIsQ0FBNENFLFdBQTdELENBSHNCLENBSXRCOztBQUNBLFVBQUlpQixhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDeEIsWUFBSWQsV0FBVyxHQUFHQyxVQUFVLENBQUNhLGFBQUQsQ0FBNUI7O0FBQ0EsWUFBSSxDQUFFLEtBQUtyRCxJQUFMLENBQVVqTSxLQUFWLENBQWdCeUIsUUFBaEIsQ0FBeUJpTixZQUF6QixFQUFOLEVBQWdEO0FBQzVDLGNBQUk2QixTQUFTLEdBQUcxSixDQUFDLENBQUMsdUJBQUQsQ0FBakI7QUFDQSxjQUFJMkosUUFBUSxHQUFHM0osQ0FBQyxDQUFDLGVBQUQsRUFBbUI7QUFBQyxvQkFBUTJIO0FBQVQsV0FBbkIsQ0FBaEI7QUFDQSxjQUFJaUMsUUFBUSxHQUFHNUosQ0FBQyxDQUFDLG1CQUFELEVBQXNCO0FBQUMsb0JBQVE7QUFBVCxXQUF0QixDQUFoQjtBQUNBLGNBQUk2SixRQUFRLEdBQUc3SixDQUFDLENBQUMsYUFBRCxFQUNDO0FBQ0ksMkJBQWUsU0FEbkI7QUFFSSxxQkFBUyx3QkFGYjtBQUdJLDhCQUFrQixNQUh0QjtBQUlJLHlCQUFhcUgsVUFKakI7QUFLSSxxQkFBUyxVQUFRQSxVQUFSLEdBQXFCLFNBQXJCLEdBQStCRTtBQUw1QyxXQURELENBQWhCO0FBUUFzQyxrQkFBUSxDQUFDN0IsTUFBVCxDQUFnQjJCLFFBQWhCLEVBQ0szQixNQURMLENBQ1loSSxDQUFDLENBQUMsTUFBRCxDQURiLEVBRUtnSSxNQUZMLENBRVkwQixTQUZaLEVBR0sxQixNQUhMLENBR1k0QixRQUhaO0FBSUEsZUFBSzNELEdBQUwsQ0FBUytCLE1BQVQsQ0FBZ0I2QixRQUFoQjtBQUNBQSxrQkFBUSxDQUFDNUIsT0FBVDtBQUNBLGlCQUFPO0FBQUMscUJBQVN5QixTQUFWO0FBQXFCLHNCQUFVRSxRQUEvQjtBQUF5Qyx1QkFBVztBQUFwRCxXQUFQO0FBQ0g7QUFDSjs7QUFDRCxhQUFPO0FBQUMsbUJBQVc7QUFBWixPQUFQO0FBQ0g7QUE1Tkw7QUFBQTs7QUF1REk7Ozs7OztBQXZESiwrQ0E2RHNDO0FBQzlCLFVBQUloRCxlQUFlLEdBQUcsRUFBdEI7O0FBQ0FBLHFCQUFlLENBQUMsV0FBRCxDQUFmLEdBQThCLFVBQVMzRyxJQUFULEVBQWU0RyxLQUFmLEVBQXNCO0FBQUV0RixlQUFPLENBQUMyRCxHQUFSLENBQVlqRixJQUFaLEVBQWtCNEcsS0FBbEI7QUFBMEIsT0FBaEY7O0FBQ0FELHFCQUFlLENBQUMsT0FBRCxDQUFmLEdBQTBCLEdBQTFCO0FBQ0FBLHFCQUFlLENBQUMsU0FBRCxDQUFmLEdBQTRCLEtBQTVCO0FBQ0FBLHFCQUFlLENBQUMsYUFBRCxDQUFmLEdBQWdDLElBQWhDO0FBQ0FBLHFCQUFlLENBQUMsUUFBRCxDQUFmLEdBQTJCLEdBQTNCO0FBQ0FBLHFCQUFlLENBQUMsV0FBRCxDQUFmLEdBQThCLElBQTlCO0FBQ0EsYUFBT0EsZUFBUDtBQUNIO0FBdEVMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7OztBQ05MO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2Q7Ozs7Ozs7Ozs7Ozs7QUNOTDtBQUFBO0FBQU8sSUFBSWtELFdBQVcsbzJCQUFmO0FBcUJQOzs7Ozs7Ozs7Ozs7QUFXQSxTQUFTQyxhQUFULENBQXVCM0UsSUFBdkIsRUFBNkJhLEdBQTdCLEVBQWtDO0FBQzlCLE9BQUtiLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUthLEdBQUwsR0FBV0EsR0FBWDtBQUVBLE9BQUsrRCxRQUFMLEdBQWdCL0QsR0FBRyxDQUFDUixJQUFKLENBQVMsY0FBVCxDQUFoQjtBQUNBLE9BQUt3RSxPQUFMLEdBQWVoRSxHQUFHLENBQUNSLElBQUosQ0FBUyxhQUFULENBQWY7QUFDSDtBQUVEOzs7Ozs7Ozs7O0FBUUFzRSxhQUFhLENBQUN4RSxTQUFkLENBQXdCMkIsSUFBeEIsR0FBK0IsVUFBU2dELEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxPQUF0QixFQUErQjtBQUMxRCxPQUFLSixRQUFMLENBQWMvSixJQUFkLENBQW1CaUssS0FBbkI7QUFDQSxPQUFLRCxPQUFMLENBQWFoSyxJQUFiLENBQWtCa0ssSUFBbEI7QUFDQSxPQUFLbEUsR0FBTCxDQUFTb0UsS0FBVCxDQUFlLE1BQWY7QUFDQSxPQUFLcEUsR0FBTCxDQUFTcUUsU0FBVCxDQUFtQjtBQUNmLGNBQVU7QUFESyxHQUFuQjtBQUlBLE9BQUtyRSxHQUFMLENBQVNzRSxFQUFULENBQVksaUJBQVosRUFBK0IsVUFBVWhCLENBQVYsRUFBYTtBQUN4QyxRQUFJYSxPQUFPLEtBQUtsUyxTQUFoQixFQUEyQjtBQUN2QmtTLGFBQU87QUFDVjtBQUNKLEdBSkQ7QUFLSCxDQWJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUVPLFNBQVNwRyxVQUFULENBQW9CN0ssS0FBcEIsRUFBMkJxUixLQUEzQixFQUFrQztBQUNyQyxNQUFJQyxVQUFVLEdBQUcsSUFBSUMsVUFBSixFQUFqQjtBQUNBLE1BQUlsSSxLQUFLLEdBQUdnSSxLQUFLLENBQUNqRSxNQUFOLENBQWEvRCxLQUF6Qjs7QUFDQWlJLFlBQVUsQ0FBQ0UsTUFBWCxHQUFxQixVQUFBcEIsQ0FBQztBQUFBLFdBQ2xCcFEsS0FBSyxDQUFDbUgsRUFBTixDQUFTNkMsT0FBVCxDQUFpQnpDLE9BQWpCLEdBQTJCc0QsVUFBM0IsQ0FBc0N1RixDQUF0QyxDQURrQjtBQUFBLEdBQXRCOztBQUdBa0IsWUFBVSxDQUFDRyxRQUFYLEdBQXNCcEksS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTaEosSUFBL0I7QUFDQWlSLFlBQVUsQ0FBQ0ksVUFBWCxDQUFzQnJJLEtBQUssQ0FBQyxDQUFELENBQTNCO0FBQ0FnSSxPQUFLLENBQUNqRSxNQUFOLENBQWFNLEtBQWIsR0FBcUIsRUFBckI7QUFDSDtBQUVNLFNBQVNpRSxRQUFULENBQWtCekYsSUFBbEIsRUFBd0I7QUFDM0IsU0FBT0EsSUFBSSxDQUFDMEYsT0FBTCxDQUFhLGFBQWIsRUFBNEIsR0FBNUIsRUFBaUNySixXQUFqQyxFQUFQO0FBQ0g7QUFFTSxTQUFTeUMsWUFBVCxDQUFzQmhMLEtBQXRCLEVBQTZCcVIsS0FBN0IsRUFBb0M7QUFBQSw4QkFDS3JSLEtBQUssQ0FBQ21ILEVBQU4sQ0FBUzZDLE9BQVQsQ0FBaUJ6QyxPQUFqQixHQUEyQnlELFlBQTNCLEVBREw7QUFBQSxNQUNsQzNLLElBRGtDLHlCQUNsQ0EsSUFEa0M7QUFBQSxNQUM1QndSLFNBRDRCLHlCQUM1QkEsU0FENEI7QUFBQSxNQUNqQnhILFFBRGlCLHlCQUNqQkEsUUFEaUI7QUFBQSxNQUNQeUgsUUFETyx5QkFDUEEsUUFETyxFQUV2Qzs7O0FBQ0F6UixNQUFJLEdBQUdzUixRQUFRLENBQUN0UixJQUFELENBQWY7QUFDQUEsTUFBSSxHQUFHQSxJQUFJLEdBQUd3UixTQUFkLENBSnVDLENBS3ZDOztBQUNBLE1BQUlFLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVMsQ0FBQzNILFFBQUQsQ0FBVCxFQUFxQjtBQUFDNEgsUUFBSSxFQUFFSDtBQUFQLEdBQXJCLENBQVg7O0FBQ0EsTUFBSUksTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxnQkFBckIsRUFBdUM7QUFDbkNGLFVBQU0sQ0FBQ0MsU0FBUCxDQUFpQkUsVUFBakIsQ0FBNEJOLElBQTVCLEVBQWtDMVIsSUFBbEM7QUFDSCxHQUZELE1BRU07QUFDRixRQUFJaVMscUJBQXFCLEdBQUdKLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQkMsYUFBaEIsQ0FBOEIsR0FBOUIsQ0FBNUI7QUFDQUYseUJBQXFCLENBQUNHLElBQXRCLEdBQTZCUCxNQUFNLENBQUNRLEdBQVAsQ0FBV0MsZUFBWCxDQUEyQlosSUFBM0IsQ0FBN0I7QUFDQU8seUJBQXFCLENBQUN2SCxRQUF0QixHQUFpQzFLLElBQWpDO0FBQ0FrUyxZQUFRLENBQUN2QixJQUFULENBQWM0QixXQUFkLENBQTBCTixxQkFBMUI7QUFDQUEseUJBQXFCLENBQUNwQyxLQUF0QjtBQUNBcUMsWUFBUSxDQUFDdkIsSUFBVCxDQUFjNkIsV0FBZCxDQUEwQlAscUJBQTFCO0FBQ0g7QUFDSjtBQUVNLElBQU1RLGNBQWI7QUFBQTtBQUFBO0FBQ0ksMEJBQVk3RyxJQUFaLEVBQWtCYSxHQUFsQixFQUF1QjtBQUFBOztBQUNuQixTQUFLYixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLYSxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLakQsVUFBTCxHQUFrQm9DLElBQUksQ0FBQ2pGLFVBQUwsQ0FBZ0I2QyxVQUFsQztBQUNBLFNBQUszRyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS3dHLElBQUwsR0FBWSxJQUFaO0FBQ0g7O0FBUkw7QUFBQTtBQUFBLGlDQVVpQjtBQUNULFdBQUtHLFVBQUwsQ0FBZ0JFLFVBQWhCLENBQTJCLEtBQUs3RyxRQUFoQztBQUNBLFdBQUsrSSxJQUFMLENBQVVqTSxLQUFWLENBQWdCaUQsT0FBaEIsQ0FBd0JDLFFBQXhCLENBQWlDLFdBQWpDO0FBQ0EsV0FBSytJLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUJnRCxPQUFyQixDQUE2QitJLFlBQTdCLENBQTBDLFdBQTFDO0FBQ0g7QUFkTDtBQUFBO0FBQUEsb0NBZ0JvQjtBQUNaO0FBQ0EsV0FBSzlHLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JpRCxPQUFoQixDQUF3QkMsUUFBeEIsQ0FBaUMsV0FBakM7QUFDQSxXQUFLK0ksSUFBTCxDQUFVakYsVUFBVixDQUFxQmdELE9BQXJCLENBQTZCK0ksWUFBN0IsQ0FBMEMsV0FBMUM7QUFDSDtBQXBCTDtBQUFBO0FBQUEsa0NBc0JrQnJKLElBdEJsQixFQXNCd0I7QUFDaEIsVUFBSUEsSUFBSSxDQUFDeEcsUUFBTCxLQUFrQixLQUFLQSxRQUEzQixFQUFxQztBQUNqQztBQUNBLGFBQUsrSSxJQUFMLENBQVVqRixVQUFWLENBQXFCZ0QsT0FBckIsQ0FBNkIrSSxZQUE3QixDQUEwQyxLQUFLN1AsUUFBL0MsRUFGaUMsQ0FHakM7QUFDQTtBQUNIO0FBQ0o7QUE3Qkw7QUFBQTtBQUFBLHVDQStCdUI7QUFDZixXQUFLMkcsVUFBTCxDQUFnQm1KLFNBQWhCLENBQTBCLEtBQUs5UCxRQUEvQixFQUF5QztBQUNyQytQLGVBQU8sRUFBRSxLQUFLQyxhQUFMLENBQW1CcEksSUFBbkIsQ0FBd0IsSUFBeEIsQ0FENEI7QUFFckNxSSxlQUFPLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnRJLElBQW5CLENBQXdCLElBQXhCO0FBRjRCLE9BQXpDO0FBSUg7QUFwQ0w7QUFBQTtBQUFBLDBCQXNDVXVJLFdBdENWLEVBc0N1QkMsU0F0Q3ZCLEVBc0NrQztBQUMxQixXQUFLcFEsUUFBTCxHQUFnQm1RLFdBQWhCO0FBQ0EsV0FBSzNKLElBQUwsR0FBWSxLQUFLRyxVQUFMLENBQWdCMEosT0FBaEIsQ0FBd0JGLFdBQXhCLENBQVo7QUFDQSxXQUFLRyxnQkFBTDtBQUNIO0FBRUQ7Ozs7Ozs7QUE1Q0o7QUFBQTtBQUFBLHlCQWtEU0gsV0FsRFQsRUFrRHNCQyxTQWxEdEIsRUFrRGlDRyxTQWxEakMsRUFrRDRDO0FBQ3BDLFdBQUs1SixVQUFMLENBQWdCNkosZ0JBQWhCLENBQWlDLEtBQUt4USxRQUF0QztBQUNBLFdBQUt3RyxJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUt4RyxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUF0REw7QUFBQTtBQUFBLCtCQXdEZW1PLEtBeERmLEVBd0RzQjtBQUNkLFVBQUluTyxRQUFRLEdBQUdtTyxLQUFLLENBQUNqRSxNQUFOLENBQWFxRSxRQUE1QjtBQUNBLFVBQUlwSCxRQUFRLEdBQUdnSCxLQUFLLENBQUNqRSxNQUFOLENBQWFtQyxNQUE1QjtBQUNBLFdBQUs3RixJQUFMLENBQVVpSyxNQUFWLENBQWlCdEosUUFBakI7QUFDSDtBQTVETDtBQUFBO0FBQUEsbUNBOERtQjtBQUNYLFVBQUluSCxRQUFRLEdBQUd1SixnREFBTyxDQUFDbUgsYUFBUixDQUFzQixLQUFLMVEsUUFBM0IsQ0FBZjtBQUNBLGFBQU87QUFDSDdDLFlBQUksRUFBRTZDLFFBQVEsQ0FBQzdDLElBRFo7QUFFSHdSLGlCQUFTLEVBQUUzTyxRQUFRLENBQUMrTyxJQUZqQjtBQUdINUgsZ0JBQVEsRUFBRSxLQUFLWCxJQUFMLENBQVVpSyxNQUFWLEVBSFA7QUFJSDdCLGdCQUFRLEVBQUU7QUFKUCxPQUFQO0FBTUg7QUF0RUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFFTyxJQUFNK0IsK0JBQStCLHVEQUFyQzs7SUFNREMsc0I7Ozs7Ozs7Ozs7OztFQUErQmhCLCtEOztBQUk5QixJQUFNaUIsa0JBQWtCLEdBQUc7QUFDOUIxVCxNQUFJLEVBQUUscUJBRHdCO0FBRTlCMlQsWUFBVSxFQUFFLENBQUMsOEJBQUQsQ0FGa0I7QUFHOUJDLGFBQVcsRUFBRUgsc0JBSGlCO0FBSTlCSSxVQUFRLEVBQUVMO0FBSm9CLENBQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlA7QUFFTyxJQUFNTSxvQkFBb0Isd0VBQTFCOztJQUtEQyxrQjs7Ozs7QUFDRiw4QkFBWW5JLElBQVosRUFBa0JhLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CLDRGQUFNYixJQUFOLEVBQVlhLEdBQVo7QUFDQSxVQUFLdUgsR0FBTCxHQUFXLElBQUlsSSxPQUFKLENBQVk7QUFDbkJtSSxhQUFPLEVBQUV4SCxHQUFHLENBQUNSLElBQUosQ0FBUywwQkFBVCxFQUFxQyxDQUFyQyxDQURVO0FBRW5CaUksNkJBQXVCLEVBQUUsS0FGTjtBQUduQkMsZUFBUyxFQUFFLElBSFE7QUFJbkJDLGVBQVMsRUFBRSxPQUpRO0FBS25CO0FBQ0FDLHFCQUFlLEVBQUU7QUFDYkMsOEJBQXNCLEVBQUU7QUFEWCxPQU5FO0FBU25CQyxvQkFBYyxFQUFFLEtBVEc7QUFVbkJDLGFBQU8sRUFBRTtBQVZVLEtBQVosQ0FBWDtBQVlBLFVBQUtDLEtBQUwsR0FBYSxLQUFiO0FBZG1CO0FBZXRCOzs7OzBCQUVLekIsVyxFQUFhQyxTLEVBQVc7QUFDMUIsb0ZBQVlELFdBQVosRUFBeUJDLFNBQXpCOztBQUNBLFdBQUt3QixLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsS0FBS3JMLElBQUwsQ0FBVWlLLE1BQVYsRUFBbEIsRUFIMEIsQ0FJMUI7O0FBQ0EsV0FBS3FCLG1CQUFMLEdBQTJCLEtBQUt0TCxJQUFMLENBQVVpSyxNQUFWLENBQWlCc0IsU0FBakIsQ0FBMkIsS0FBS0YsWUFBTCxDQUFrQmpLLElBQWxCLENBQXVCLElBQXZCLENBQTNCLENBQTNCLENBTDBCLENBTTFCOztBQUNBLFdBQUtvSyxlQUFMLEdBQXVCLEtBQUtDLFlBQUwsQ0FBa0JySyxJQUFsQixDQUF1QixJQUF2QixDQUF2QjtBQUNBLFdBQUt1SixHQUFMLENBQVNlLFVBQVQsQ0FBb0JoRSxFQUFwQixDQUF1QixRQUF2QixFQUFpQyxLQUFLOEQsZUFBdEM7QUFDSDs7O2lDQUVZRyxXLEVBQWE7QUFDdEIsV0FBS1AsS0FBTCxHQUFhLENBQUMsS0FBS0EsS0FBbkI7O0FBQ0EsVUFBSSxLQUFLQSxLQUFULEVBQWdCO0FBQ1osYUFBS1QsR0FBTCxDQUFTM0csS0FBVCxDQUFlMkgsV0FBZjtBQUNBLGFBQUtQLEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSjs7O2lDQUVZekQsSyxFQUFPO0FBQ2hCLFdBQUt5RCxLQUFMLEdBQWEsQ0FBQyxLQUFLQSxLQUFuQjs7QUFDQSxVQUFJLEtBQUtBLEtBQVQsRUFBZ0I7QUFDWixhQUFLcEwsSUFBTCxDQUFVaUssTUFBVixDQUFpQixLQUFLVSxHQUFMLENBQVMzRyxLQUFULEVBQWpCO0FBQ0EsYUFBS29ILEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSjs7O3lCQUVJekIsVyxFQUFhQyxTLEVBQVdHLFMsRUFBVztBQUNwQztBQUNBLFdBQUt1QixtQkFBTCxDQUF5Qk0sT0FBekI7QUFDQSxXQUFLakIsR0FBTCxDQUFTZSxVQUFULENBQW9CRyxHQUFwQixDQUF3QixRQUF4QixFQUFrQyxLQUFLTCxlQUF2Qzs7QUFDQSxtRkFBVzdCLFdBQVgsRUFBd0JDLFNBQXhCO0FBQ0g7Ozs7RUFsRDRCUiwrRDs7QUFxRDFCLElBQU0wQyxjQUFjLEdBQUc7QUFDMUJuVixNQUFJLEVBQUUsVUFEb0I7QUFFMUIyVCxZQUFVLEVBQUUsQ0FBQyxLQUFELENBRmM7QUFHMUJDLGFBQVcsRUFBRUcsa0JBSGE7QUFJMUJGLFVBQVEsRUFBRUM7QUFKZ0IsQ0FBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURQOzs7Ozs7QUFNQTs7OztBQUlBO0FBRU8sSUFBSXBTLFlBQVksR0FBRztBQUN0QjBULE9BQUssRUFBRSxPQURlO0FBRXRCelQsT0FBSyxFQUFFLE9BRmU7QUFHdEIwVCxNQUFJLEVBQUU7QUFIZ0IsQ0FBbkI7O0FBTVAsU0FBU0MsT0FBVCxDQUFpQnRWLElBQWpCLEVBQXVCdVYsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQy9CLDJKQUNpRUEsSUFEakUsb0ZBRWdFQSxJQUZoRSx3REFHa0NELElBSGxDLHNIQUlzRnZWLElBSnRGO0FBTUg7O0FBRU0sSUFBTXlWLGtCQUFrQiwwaUJBWWJILE9BQU8sQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QjVULFlBQVksQ0FBQzBULEtBQXBDLENBWk0sK0JBYWJFLE9BQU8sQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQjVULFlBQVksQ0FBQ0MsS0FBbEMsQ0FiTSwrQkFjYjJULE9BQU8sQ0FBQyxNQUFELEVBQVMsWUFBVCxFQUF1QjVULFlBQVksQ0FBQzJULElBQXBDLENBZE0sMG5IQUF4QjtBQWlHUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVHQSxTQUFTSyxvQkFBVCxDQUE4Qm5ULElBQTlCLEVBQW9DO0FBQ2hDLE1BQUlvVCxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXdFQsSUFBWCxDQUFaOztBQUNBLE1BQUl1VCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxJQUFULEVBQWU7QUFDMUIsUUFBSUEsSUFBSSxDQUFDQyxTQUFMLEtBQW1CLE1BQXZCLEVBQStCO0FBQzNCLGFBQU9ELElBQUksQ0FBQ0UsTUFBTCxDQUFZM00sTUFBWixHQUFxQixDQUFyQixJQUNILENBQUN5TSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFVBQWYsQ0FBMEIsR0FBMUIsQ0FETDtBQUVILEtBSEQsTUFHTztBQUNILGFBQU9ILElBQUksQ0FBQ0MsU0FBTCxLQUFtQixVQUFuQixJQUNIRCxJQUFJLENBQUNDLFNBQUwsS0FBbUIsS0FEdkI7QUFFSDtBQUNKLEdBUkQ7O0FBU0EsTUFBSUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0osSUFBVCxFQUFlO0FBQzVCLFFBQUlBLElBQUksQ0FBQ0MsU0FBTCxLQUFtQixNQUF2QixFQUErQjtBQUMzQixhQUFPRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUcsSUFBWixDQUFpQixJQUFqQixDQUFQO0FBQ0gsS0FGRCxNQUVPLElBQUlMLElBQUksQ0FBQ0MsU0FBTCxLQUFtQixVQUFuQixJQUNQRCxJQUFJLENBQUNDLFNBQUwsS0FBbUIsS0FEaEIsRUFDdUI7QUFDMUIsYUFBTyxRQUFNRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUcsSUFBWixDQUFpQixJQUFqQixDQUFOLEdBQTZCLEtBQXBDO0FBQ0g7QUFDSixHQVBEOztBQVFBLFNBQU9ULEtBQUssQ0FBQ1UsS0FBTixDQUFZQyxNQUFaLENBQW1CUixRQUFuQixFQUE2QmhNLEdBQTdCLENBQWlDcU0sVUFBakMsRUFBNkNDLElBQTdDLENBQWtELElBQWxELENBQVA7QUFDSDs7SUFFS0csZ0I7Ozs7O0FBQ0YsNEJBQVkzSyxJQUFaLEVBQWtCYSxHQUFsQixFQUF1QjtBQUFBOztBQUFBOztBQUNuQiwwRkFBTWIsSUFBTixFQUFZYSxHQUFHLENBQUNSLElBQUosQ0FBUyw2QkFBVCxDQUFaO0FBQ0EsVUFBS2pCLEVBQUwsR0FBVSxJQUFJd0wsV0FBSixDQUFnQjtBQUN0QixtQkFBYSxNQUFLL0osR0FBTCxDQUFTLENBQVQsQ0FEUztBQUV0QixhQUFPYixJQUFJLENBQUNqRixVQUFMLENBQWdCMkUsTUFBaEIsQ0FBdUJELEdBQXZCLENBQTJCWixJQUEzQixDQUFnQ21CLElBQUksQ0FBQ2pGLFVBQUwsQ0FBZ0IyRSxNQUFoRCxDQUZlO0FBR3RCLG9CQUFjLElBSFE7QUFJdEIsMEJBQW9CTSxJQUFJLENBQUNqTSxLQUFMLENBQVdyQixhQUFYLENBQXlCMkgsV0FKdkIsQ0FLdEI7O0FBTHNCLEtBQWhCLENBQVY7QUFPQSxVQUFLd08sS0FBTCxHQUFhLEtBQWI7O0FBQ0EsVUFBS2dDLGlCQUFMOztBQVZtQjtBQVd0Qjs7OzswQkFFS3pELFcsRUFBYUMsUyxFQUFXO0FBQzFCLGtGQUFZRCxXQUFaLEVBQXlCQyxTQUF6Qjs7QUFDQSxVQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEI7QUFDQXlELGtCQUFVLENBQUMsS0FBSzFMLEVBQUwsQ0FBUTJMLE9BQVIsQ0FBZ0JsTSxJQUFoQixDQUFxQixLQUFLTyxFQUExQixDQUFELEVBQWdDLENBQWhDLENBQVY7QUFDSDs7QUFDRCxXQUFLeUosS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLQyxZQUFMLENBQWtCLEtBQUtyTCxJQUFMLENBQVVpSyxNQUFWLEVBQWxCLEVBUDBCLENBUzFCOztBQUNBLFdBQUtxQixtQkFBTCxHQUEyQixLQUFLdEwsSUFBTCxDQUFVaUssTUFBVixDQUFpQnNCLFNBQWpCLENBQTJCLEtBQUtGLFlBQUwsQ0FBa0JqSyxJQUFsQixDQUF1QixJQUF2QixDQUEzQixDQUEzQixDQVYwQixDQVkxQjs7QUFDQSxXQUFLbU0saUJBQUwsR0FBeUIsS0FBSzlCLFlBQUwsQ0FBa0JySyxJQUFsQixDQUF1QixJQUF2QixDQUF6QjtBQUNBLFdBQUtPLEVBQUwsQ0FBUTZMLGlCQUFSLENBQTBCLEtBQUtELGlCQUEvQjtBQUNIOzs7aUNBRVk1QixXLEVBQWE7QUFDdEIsV0FBS1AsS0FBTCxHQUFhLENBQUMsS0FBS0EsS0FBbkI7O0FBQ0EsVUFBSSxLQUFLQSxLQUFULEVBQWdCO0FBQ1osYUFBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLekosRUFBTCxDQUFROEwsT0FBUixDQUFnQjlCLFdBQWhCO0FBQ0EsYUFBS1AsS0FBTCxHQUFhLEtBQWI7QUFDSDtBQUNKOzs7aUNBRVl6RCxLLEVBQU87QUFDaEIsV0FBS3lELEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5COztBQUNBLFVBQUksS0FBS0EsS0FBVCxFQUFnQjtBQUNaLGFBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBS3BMLElBQUwsQ0FBVWlLLE1BQVYsQ0FBaUIsS0FBS3RJLEVBQUwsQ0FBUStMLE9BQVIsRUFBakI7QUFDQSxhQUFLdEMsS0FBTCxHQUFhLEtBQWI7QUFDSDtBQUNKOzs7eUJBRUl6QixXLEVBQWFDLFMsRUFBV0csUyxFQUFXO0FBQ3BDO0FBQ0EsV0FBS3FCLEtBQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS0UsbUJBQUwsQ0FBeUJNLE9BQXpCO0FBQ0EsV0FBS2pLLEVBQUwsQ0FBUWdNLG9CQUFSLENBQTZCLEtBQUtKLGlCQUFsQzs7QUFDQSxpRkFBVzVELFdBQVgsRUFBd0JDLFNBQXhCO0FBQ0g7Ozt3Q0FFbUI7QUFBQTs7QUFDaEIsV0FBS2pJLEVBQUwsQ0FBUWlNLE9BQVIsQ0FBZ0IsS0FBS3JMLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JpRCxPQUFoQixDQUF3QkksVUFBeEIsRUFBaEI7QUFDQSxXQUFLNEksSUFBTCxDQUFVak0sS0FBVixDQUFnQmlELE9BQWhCLENBQXdCSSxVQUF4QixDQUFtQzRSLFNBQW5DLENBQTZDLFVBQUFZLElBQUksRUFBSTtBQUNqRCxjQUFJLENBQUN4SyxFQUFMLENBQVFpTSxPQUFSLENBQWdCekIsSUFBaEI7QUFDSCxPQUZEO0FBR0g7OzsrQkFFVXhFLEssRUFBTztBQUNkLFVBQUluTyxRQUFRLEdBQUdtTyxLQUFLLENBQUNqRSxNQUFOLENBQWFxRSxRQUE1QjtBQUNBLFVBQUk3TyxJQUFJLEdBQUd5TyxLQUFLLENBQUNqRSxNQUFOLENBQWFtQyxNQUF4Qjs7QUFDQSxVQUFJck0sUUFBUSxDQUFDcVUsUUFBVCxDQUFrQixRQUFsQixDQUFKLEVBQWlDO0FBQzdCM1UsWUFBSSxHQUFHbVQsb0JBQW9CLENBQUNuVCxJQUFELENBQTNCO0FBQ0g7O0FBQ0QsV0FBSzhHLElBQUwsQ0FBVWlLLE1BQVYsQ0FBaUIvUSxJQUFqQixFQU5jLENBT2Q7QUFDQTtBQUNIOzs7bUNBRWM7QUFDWCxVQUFJMk0sTUFBTSxxRkFBVjs7QUFDQSxVQUFJQSxNQUFNLENBQUNsUCxJQUFQLEtBQWdCLFFBQWhCLElBQTRCa1AsTUFBTSxDQUFDc0MsU0FBUCxLQUFxQixLQUFyRCxFQUE0RDtBQUN4RHRDLGNBQU0sQ0FBQ2xQLElBQVAsR0FBY3NSLGlFQUFRLENBQUMsS0FBSzFGLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQnlCLElBQTNCLEVBQUQsQ0FBdEI7QUFDSDs7QUFDRGtQLFlBQU0sQ0FBQ3VDLFFBQVAsR0FBa0IsZUFBbEI7QUFDQSxhQUFPdkMsTUFBUDtBQUNIOzs7O0VBbEYwQnVELCtEOztBQXFGeEIsSUFBTTBFLFlBQVksR0FBRztBQUN4Qm5YLE1BQUksRUFBRSxRQURrQjtBQUV4QjJULFlBQVUsRUFBRSxDQUFDLEtBQUQsQ0FGWTtBQUd4QkMsYUFBVyxFQUFFMkMsZ0JBSFc7QUFJeEIxQyxVQUFRLEVBQUU0QjtBQUpjLENBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlVUDtBQUVPLElBQU0yQixnQkFBZ0IsaU9BQXRCOztJQWtCREMsYzs7Ozs7QUFDRiwwQkFBWXpMLElBQVosRUFBa0JhLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUEsdUZBQ2JiLElBRGEsRUFDUGEsR0FBRyxDQUFDUixJQUFKLENBQVMsc0JBQVQsQ0FETztBQUV0Qjs7O0VBSHdCd0csK0Q7O0FBTXRCLElBQU02RSxVQUFVLEdBQUc7QUFDdEJ0WCxNQUFJLEVBQUUsTUFEZ0I7QUFFdEIyVCxZQUFVLEVBQUUsQ0FBQyxlQUFELENBRlU7QUFHdEJDLGFBQVcsRUFBRXlELGNBSFM7QUFJdEJ4RCxVQUFRLEVBQUV1RDtBQUpZLENBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCUDtBQUVPLElBQU1HLGdCQUFnQix5REFBdEI7O0lBTURDLGM7Ozs7Ozs7Ozs7OztFQUF1Qi9FLCtEOztBQUd0QixJQUFNZ0YsVUFBVSxHQUFHO0FBQ3RCelgsTUFBSSxFQUFFLE1BRGdCO0FBRXRCMlQsWUFBVSxFQUFFLENBQUMsTUFBRCxDQUZVO0FBR3RCQyxhQUFXLEVBQUU0RCxjQUhTO0FBSXRCM0QsVUFBUSxFQUFFMEQ7QUFKWSxDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJTyxJQUFJRyxXQUFXLEdBQUc7QUFDckJDLFlBQVUsRUFBRSxZQURTO0FBRXJCQyxZQUFVLEVBQUUsWUFGUztBQUdyQkMsY0FBWSxFQUFFLGNBSE87QUFJckJDLFFBQU0sRUFBRSxRQUphO0FBS3JCQyxXQUFTLEVBQUUsV0FMVTtBQU1yQkMsU0FBTyxFQUFFLFNBTlk7QUFPckJDLGVBQWEsRUFBRSxlQVBNO0FBUXJCQyxvQkFBa0IsRUFBRSxvQkFSQztBQVNyQkMsaUJBQWUsRUFBRTtBQVRJLENBQWxCO0FBWVAsSUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBM0I7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxDQUN0QlosdURBRHNCLEVBQ1ZOLDJEQURVLEVBQ0l6RCw4RUFESixFQUN3QjRELHVEQUR4QixFQUNvQ25DLCtEQURwQyxDQUExQjtBQUlPLElBQU1tRCxZQUFZLEdBQUdELGlCQUFpQixDQUFDdk8sR0FBbEIsQ0FBc0IsVUFBQXlPLE1BQU07QUFBQSx1SUFHR0EsTUFBTSxDQUFDdlksSUFIVix1QkFJbER1WSxNQUFNLENBQUMxRSxRQUoyQztBQUFBO0FBUXBEOzs7OztBQVJ3QixFQWExQnVDLElBYjBCLENBYXJCLElBYnFCLENBQXJCO0FBZUEsSUFBTWhLLE9BQWI7QUFBQTtBQUFBO0FBQ0ksbUJBQVlSLElBQVosRUFBa0JhLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ25CLFNBQUtiLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUthLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUt2RixPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtzUixXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0FMLHFCQUFpQixDQUFDTSxPQUFsQixDQUEwQixVQUFBSixNQUFNO0FBQUEsYUFBSSxLQUFJLENBQUNLLGNBQUwsQ0FBb0JMLE1BQXBCLENBQUo7QUFBQSxLQUFoQztBQUNBLFNBQUszTSxJQUFMLENBQVVqTSxLQUFWLENBQWdCaUQsT0FBaEIsQ0FBd0JDLFFBQXhCLENBQWlDK1IsU0FBakMsQ0FBMkMsS0FBS2xDLFlBQWhELEVBQThELElBQTlEO0FBQ0g7O0FBVkw7QUFBQTtBQUFBLG1DQVltQjNKLElBWm5CLEVBWXlCO0FBQ2pCLFVBQUk0SyxVQUFVLEdBQUc1SyxJQUFJLENBQUM0SyxVQUF0QjtBQUNBLFVBQUlrRixRQUFRLEdBQUcsSUFBSTlQLElBQUksQ0FBQzZLLFdBQVQsQ0FBcUIsS0FBS2hJLElBQTFCLEVBQWdDLEtBQUthLEdBQXJDLENBQWY7QUFDQW9NLGNBQVEsQ0FBQzdZLElBQVQsR0FBZ0IrSSxJQUFJLENBQUMvSSxJQUFyQjtBQUNBLFdBQUt3WSxXQUFMLENBQWlCdkssSUFBakIsQ0FBc0I0SyxRQUF0QjtBQUNBLFdBQUtILE9BQUwsQ0FBYTNQLElBQUksQ0FBQy9JLElBQUwsQ0FBVWtJLFdBQVYsRUFBYixJQUF3QzJRLFFBQXhDOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHbkYsVUFBVSxDQUFDckssTUFBN0IsRUFBcUN3UCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLGFBQUtMLFdBQUwsQ0FBaUI5RSxVQUFVLENBQUNtRixDQUFELENBQTNCLElBQWtDRCxRQUFsQztBQUNIO0FBQ0o7QUFyQkw7QUFBQTtBQUFBLDJCQXVCVzdZLElBdkJYLEVBdUJpQjtBQUNULGFBQU8sS0FBSzBZLE9BQUwsQ0FBYTFZLElBQUksQ0FBQ2tJLFdBQUwsRUFBYixDQUFQO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLGlDQTJCaUI4SyxXQTNCakIsRUEyQjhCO0FBQ3RCLFVBQUlDLFNBQVMsR0FBRyxLQUFLL0wsT0FBckI7QUFDQSxVQUFJa00sU0FBUyxHQUFHLEtBQUt4SixTQUFMLENBQWVvSixXQUFmLEVBQTRCQyxTQUE1QixDQUFoQjs7QUFDQSxVQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEJBLGlCQUFTLENBQUM4RixJQUFWLENBQWUvRixXQUFmLEVBQTRCQyxTQUE1QixFQUF1Q0csU0FBdkM7QUFDSDs7QUFDRCxXQUFLbE0sT0FBTCxHQUFla00sU0FBZjtBQUNBLFdBQUtsTSxPQUFMLENBQWE4UixLQUFiLENBQW1CaEcsV0FBbkIsRUFBZ0NDLFNBQWhDO0FBQ0g7QUFuQ0w7QUFBQTtBQUFBLDhCQWlEYzlKLElBakRkLEVBaURvQjtBQUFBLGtDQUNjaUQsT0FBTyxDQUFDbUgsYUFBUixDQUFzQnBLLElBQXRCLENBRGQ7QUFBQSxVQUNQOFAsS0FETyx5QkFDUEEsS0FETztBQUFBLFVBQ0FqWixJQURBLHlCQUNBQSxJQURBO0FBQUEsVUFDTTRSLElBRE4seUJBQ01BLElBRE47O0FBRVosVUFBSUEsSUFBSSxLQUFLLFVBQVQsSUFBdUJ6SSxJQUFJLElBQUksS0FBS3NQLFdBQXhDLEVBQXFEO0FBQ2pELGVBQU8sS0FBS0EsV0FBTCxDQUFpQnRQLElBQWpCLENBQVA7QUFDSCxPQUZELE1BRU8sSUFBSXlJLElBQUksSUFBSSxLQUFLNkcsV0FBakIsRUFBOEI7QUFDakMsZUFBTyxLQUFLQSxXQUFMLENBQWlCN0csSUFBakIsQ0FBUDtBQUNILE9BRk0sTUFFQTtBQUNILGVBQU8sS0FBSzRHLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBUDtBQUNIO0FBQ0o7QUExREw7QUFBQTtBQUFBLGtDQXFDeUJyUCxJQXJDekIsRUFxQytCO0FBQ3ZCLFVBQUk4UCxLQUFLLEdBQUc5UCxJQUFJLENBQUMrUCxNQUFMLENBQVksQ0FBWixDQUFaOztBQUNBLFVBQUlkLGtCQUFrQixDQUFDaE8sT0FBbkIsQ0FBMkI2TyxLQUEzQixNQUFzQyxDQUFDLENBQTNDLEVBQThDO0FBQzFDOVAsWUFBSSxHQUFHQSxJQUFJLENBQUNZLE1BQUwsQ0FBWSxDQUFaLENBQVA7QUFDSCxPQUZELE1BRU87QUFDSGtQLGFBQUssR0FBRyxFQUFSO0FBQ0g7O0FBQ0QsVUFBSWpaLElBQUksR0FBR21KLElBQUksQ0FBQ1ksTUFBTCxDQUFZLENBQVosRUFBZVosSUFBSSxDQUFDZ1EsV0FBTCxDQUFpQixHQUFqQixDQUFmLENBQVg7QUFDQSxVQUFJdkgsSUFBSSxHQUFHekksSUFBSSxDQUFDWSxNQUFMLENBQVlaLElBQUksQ0FBQ2dRLFdBQUwsQ0FBaUIsR0FBakIsQ0FBWixDQUFYO0FBQ0EsYUFBTztBQUFDLGlCQUFTRixLQUFWO0FBQWlCLGdCQUFRalosSUFBekI7QUFBK0IsZ0JBQVE0UjtBQUF2QyxPQUFQO0FBQ0g7QUEvQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFVQSxJQUFNd0gsbUJBQW1CLEdBQUcsMEJBQTBCQyxxRUFBa0IsQ0FBQ0MsUUFBbkIsRUFBdEQ7QUFFQTs7Ozs7Ozs7Ozs7OztBQVlPLElBQU1wTixhQUFiO0FBQUE7QUFBQTtBQUNJLHlCQUFZTixJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzJOLGNBQUwsR0FBc0IsS0FBSzNOLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUF0QztBQUVBLFNBQUsyVSxlQUFMO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQjtBQUNsQnBPLFNBQUcsRUFBRSxJQUFJcU8seUVBQUosQ0FBcUI5TixJQUFyQixDQURhO0FBRWxCK04sVUFBSSxFQUFFLElBQUlDLDBFQUFKLENBQXNCaE8sSUFBdEIsQ0FGWTtBQUdsQm5MLFdBQUssRUFBRSxJQUFJb1osMkVBQUosQ0FBdUJqTyxJQUF2QixDQUhXO0FBSWxCbEwsY0FBUSxFQUFFLElBQUlvWiw4RUFBSixDQUEwQmxPLElBQTFCLENBSlE7QUFLbEJqTCxZQUFNLEVBQUUsSUFBSW9aLDRFQUFKLENBQXdCbk8sSUFBeEI7QUFMVSxLQUF0QixDQUxjLENBYWQ7O0FBQ0EsU0FBS2tDLGVBQUwsR0FBdUIsRUFBdkI7QUFFQSxTQUFLa00sV0FBTCxHQUFtQixFQUFuQjtBQUVBOzs7OztBQUlBLFNBQUtDLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNIOztBQXpCTDtBQUFBO0FBQUEsaUNBMkJpQixDQUNUO0FBQ0g7QUE3Qkw7QUFBQTtBQUFBLGdDQStCZ0IsQ0FDUjtBQUNIO0FBakNMO0FBQUE7QUFBQSw0QkFtQ1ksQ0FDSjtBQUNIO0FBckNMO0FBQUE7QUFBQSw0QkF1Q1ksQ0FDSjtBQUNIO0FBekNMO0FBQUE7QUFBQSxvQ0EyQ29CLENBRWYsQ0E3Q0wsQ0E0Q1E7O0FBR0o7Ozs7O0FBL0NKO0FBQUE7QUFBQSxzQ0FtRHNCO0FBQUE7O0FBQ2Q7QUFDQSxVQUFJL00sT0FBTyxHQUFHLEtBQUt2QixJQUFMLENBQVVqRixVQUFWLENBQXFCd0csT0FBbkM7QUFDQU4sUUFBRSxDQUFDc04sU0FBSCxDQUFhO0FBQ1RDLGtCQUFVLEVBQUV2TixFQUFFLENBQUN3TixPQUROO0FBRVQ7QUFDQTtBQUNBO0FBQ0FDLGdCQUFRLEVBQUUsS0FBS0MsUUFBTCxDQUFjOVAsSUFBZCxDQUFtQixJQUFuQixDQUxEO0FBTVQ7QUFDQStQLGlCQUFTLEVBQUUsS0FBS0MsU0FBTCxDQUFlaFEsSUFBZixDQUFvQixJQUFwQixDQVBGO0FBUVQ7QUFDQTFGLGNBQU0sRUFBRSxLQUFLMlYsS0FBTCxDQUFXalEsSUFBWCxDQUFnQixJQUFoQixDQVRDO0FBVVQ7QUFDQWtRLGlCQUFTLEVBQUUsS0FYRjtBQVlUO0FBQ0FDLGdCQUFRLEVBQUUsS0FBS2xMLEtBQUwsQ0FBV2pGLElBQVgsQ0FBZ0IsSUFBaEIsQ0FiRDtBQWNUb1EsMkJBQW1CLEVBQUUsSUFkWjtBQWVUO0FBQ0FDLGtCQUFVLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnRRLElBQW5CLENBQXdCLElBQXhCLENBaEJIO0FBaUJUO0FBQ0F1USxxQkFBYSxFQUFFO0FBbEJOLE9BQWIsRUFIYyxDQXdCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBbk8sUUFBRSxDQUFDb08sV0FBSCxHQUFpQixVQUFDcFksUUFBRDtBQUFBLGVBQWMsS0FBSSxDQUFDcVksT0FBTCxDQUFhclksUUFBYixFQUF1QixLQUF2QixDQUFkO0FBQUEsT0FBakIsQ0E3QmMsQ0E4QmQ7OztBQUNBZ0ssUUFBRSxDQUFDc08sZ0JBQUgsR0FBc0IsS0FBS3ZQLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQkMsT0FBaEQ7QUFFQStILFFBQUUsQ0FBQ3VPLFlBQUgsQ0FBZ0JwUyxLQUFoQixDQUFzQiw2QkFBdEIsSUFBdURvUSxtQkFBdkQ7QUFDSDtBQXJGTDtBQUFBOztBQXVGSTs7O0FBdkZKLG1DQTBGbUI7QUFDWCxVQUFJaUMsTUFBTSxHQUFHLEtBQUs5QixjQUFMLENBQW9CelUsT0FBakM7QUFDQXVXLFlBQU0sQ0FBQyxVQUFELENBQU4sR0FBcUIsRUFBckI7QUFDQUEsWUFBTSxDQUFDLFFBQUQsQ0FBTixHQUFtQixFQUFuQjtBQUNBQSxZQUFNLENBQUMsU0FBRCxDQUFOLEdBQW9CLEVBQXBCO0FBQ0FBLFlBQU0sQ0FBQyxZQUFELENBQU4sR0FBdUIsRUFBdkI7QUFDSDtBQWhHTDtBQUFBO0FBQUEsd0NBa0d3QjtBQUNoQixVQUFJclcsT0FBTyxHQUFHLEtBQUt1VSxjQUFMLENBQW9CdlUsT0FBbEM7QUFDQUEsYUFBTyxDQUFDQyxXQUFSLENBQW9CLElBQXBCO0FBQ0FELGFBQU8sQ0FBQ0UsUUFBUixDQUFpQixDQUFqQjtBQUNBRixhQUFPLENBQUNHLFdBQVIsQ0FBb0IsSUFBcEI7QUFDQUgsYUFBTyxDQUFDSyxnQkFBUixDQUF5QnNILFNBQXpCO0FBQ0EzSCxhQUFPLENBQUNNLGdCQUFSLENBQXlCLENBQXpCO0FBQ0FOLGFBQU8sQ0FBQ08sT0FBUixHQUFrQixJQUFsQjtBQUNIO0FBMUdMO0FBQUE7QUFBQSwyQ0E0RzJCO0FBQ25CLFdBQUt1SSxlQUFMLEdBQXVCO0FBQ25CLGlCQUFTLEVBRFU7QUFFbkIsZ0JBQVEsQ0FGVztBQUduQixnQkFBUTtBQUhXLE9BQXZCO0FBS0g7QUFsSEw7QUFBQTs7QUFvSEk7OztBQXBISiw0QkF1SFk7QUFDSjtBQUNBO0FBQ0EsV0FBS3dOLGlCQUFMLEdBSEksQ0FJSjs7QUFDQSxXQUFLQyxZQUFMLEdBTEksQ0FNSjs7QUFDQSxXQUFLQyxvQkFBTCxHQVBJLENBUUo7O0FBQ0EsV0FBSzVQLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUJvQixPQUFyQixDQUE2QjJFLEtBQTdCLEdBVEksQ0FVSjs7QUFDQSxXQUFLZCxJQUFMLENBQVVqRixVQUFWLENBQXFCbkIsUUFBckIsQ0FBOEJrSCxLQUE5QjtBQUNIO0FBbklMO0FBQUE7O0FBNklJOzs7QUE3SUosNkJBZ0phMU0sSUFoSmIsRUFnSm1CO0FBQ1gsVUFBSTZDLFFBQVEsR0FBR2dLLEVBQUUsQ0FBQzRPLGtCQUFILElBQXlCLEVBQXhDO0FBQ0E1WSxjQUFRLElBQUk3QyxJQUFaO0FBQ0EsVUFBSTBiLElBQUksR0FBR3hKLFFBQVEsQ0FBQ3lKLGNBQVQsQ0FBd0I5WSxRQUF4QixDQUFYOztBQUNBLFVBQUk2WSxJQUFJLElBQUksSUFBWixFQUFrQjtBQUNkLFlBQUkxYixJQUFJLElBQUksS0FBS2dhLFdBQWpCLEVBQThCO0FBQzFCLGlCQUFPLEtBQUtBLFdBQUwsQ0FBaUJoYSxJQUFqQixDQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQU0sSUFBSTZNLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV0MsT0FBZixDQUF1QiwyQ0FBMkM3YixJQUEzQyxHQUFrRCxHQUF6RSxDQUFOO0FBQ0g7QUFDSixPQU5ELE1BTU87QUFDSCxZQUFJMGIsSUFBSSxDQUFDSSxRQUFMLENBQWM1VCxXQUFkLE9BQWdDLFVBQXBDLEVBQWdEO0FBQzVDLGlCQUFPd1QsSUFBSSxDQUFDck8sS0FBWjtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFPcU8sSUFBSSxDQUFDSyxXQUFaO0FBQ0g7QUFDSjtBQUNKO0FBaktMO0FBQUE7QUFBQSw0QkFvS1l6YixHQXBLWixFQW9LaUJzUixJQXBLakIsRUFvS3VCO0FBQ2YsVUFBSWhMLE1BQU0sR0FBRyxLQUFLZ0YsSUFBTCxDQUFVakYsVUFBVixDQUFxQkMsTUFBbEM7QUFDQSxVQUFJb1QsV0FBVyxHQUFHLEtBQUtBLFdBQXZCO0FBQ0EsYUFBTyxJQUFJekssT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJ3TSxNQUFuQixFQUEyQjtBQUMxQyxZQUFJMWIsR0FBRyxJQUFJMFosV0FBWCxFQUF3QjtBQUNwQnhLLGlCQUFPLENBQUN3SyxXQUFXLENBQUMxWixHQUFELENBQVosQ0FBUDtBQUNILFNBRkQsTUFFTztBQUNIc0csZ0JBQU0sQ0FBQzVDLFFBQVAsQ0FBZ0IxRCxHQUFoQixFQUFxQnNSLElBQXJCLEVBQTJCLFVBQVU1SCxRQUFWLEVBQW9CO0FBQzNDZ1EsdUJBQVcsQ0FBQzFaLEdBQUQsQ0FBWCxHQUFtQjBKLFFBQW5CO0FBQ0F3RixtQkFBTyxDQUFDeEYsUUFBRCxDQUFQO0FBQ0gsV0FIRCxFQUdHLFVBQVV2RSxPQUFWLEVBQW1CO0FBQ2xCdVcsa0JBQU0sQ0FBQyxJQUFJblAsRUFBRSxDQUFDK08sT0FBSCxDQUFXQyxPQUFmLENBQXVCLHdCQUF3QnZiLEdBQXhCLEdBQThCLFdBQTlCLEdBQTRDbUYsT0FBbkUsQ0FBRCxDQUFOO0FBQ0gsV0FMRDtBQU1IO0FBQ0osT0FYTSxDQUFQO0FBWUg7QUFuTEw7QUFBQTtBQUFBLG1DQXFMbUI7QUFDWCxVQUFJd1csS0FBSyxHQUFHLEtBQUtyUSxJQUFMLENBQVVqTSxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJ5SyxLQUEzQixFQUFaO0FBQ0EsVUFBSXhELFFBQVEsR0FBRyxLQUFLb0csSUFBTCxDQUFVakYsVUFBVixDQUFxQm5CLFFBQXBDOztBQUNBLFdBQUssSUFBSXNULENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtRCxLQUFLLENBQUMzUyxNQUExQixFQUFrQyxFQUFFd1AsQ0FBcEMsRUFBdUM7QUFDbkMsYUFBS29DLE9BQUwsQ0FBYWUsS0FBSyxDQUFDbkQsQ0FBRCxDQUFsQixFQUF1QixNQUF2QixFQUNLb0QsSUFETCxDQUNVLFlBQVksQ0FDakIsQ0FGTCxFQUVPLFVBQVVuTSxDQUFWLEVBQWE7QUFDWnZLLGtCQUFRLENBQUMyVyxhQUFULENBQXVCcE0sQ0FBdkIsRUFBMEIsZUFBMUIsRUFBMkMsd0NBQTNDO0FBQ0gsU0FKTDtBQUtIO0FBQ0o7QUEvTEw7QUFBQTs7QUFpTUk7Ozs7Ozs7OztBQWpNSix5QkEwTVNxTSxTQTFNVCxFQTBNb0JyTyxVQTFNcEIsRUEwTWdDc08sWUExTWhDLEVBME04Q3haLFFBMU05QyxFQTBNd0Q7QUFDaEQsVUFBSUEsUUFBUSxLQUFLLGFBQWpCLEVBQWdDO0FBQzVCLFlBQUlvQyxXQUFXLEdBQUcsS0FBSzZJLGVBQUwsQ0FBcUJ6RixJQUF2QztBQUNBLFlBQUlpVSxPQUFPLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBZDtBQUNBLGFBQUt0TyxlQUFMLENBQXFCM0YsS0FBckIsQ0FBMkI4RixJQUEzQixDQUFnQztBQUM1QixrQkFBUWhKLFdBRG9CO0FBRTVCLHNCQUFZcEMsUUFGZ0I7QUFHNUI7QUFDQSxrQkFBUWtMLFVBSm9CO0FBSzVCLG9CQUFVc08sWUFMa0I7QUFNNUIsd0JBQWNDLE9BQU8sQ0FBQ0UsVUFOTTtBQU81QixxQkFBV0YsT0FBTyxDQUFDRztBQVBTLFNBQWhDO0FBU0EsYUFBSzNPLGVBQUwsQ0FBcUJ6RixJQUFyQixHQUE0QnBELFdBQVcsR0FBRyxDQUExQztBQUNBLGFBQUs2SSxlQUFMLENBQXFCNE8sU0FBckIsR0FBaUN6WCxXQUFXLEdBQUcsQ0FBL0M7QUFDQSxhQUFLNkksZUFBTCxDQUFxQkUsV0FBckIsR0FBbUNELFVBQW5DO0FBQ0g7QUFDSjtBQTNOTDtBQUFBOztBQTZOSTs7OztBQTdOSiwrQkFpT2U7QUFDUCxVQUFJbEosU0FBUyxHQUFHLEtBQUsrRyxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEM7QUFDQUEsZUFBUyxDQUFDRyxPQUFWLENBQWtCSyxnQkFBbEIsQ0FBbUMsS0FBS3lJLGVBQUwsQ0FBcUIzRixLQUF4RDtBQUNBdEQsZUFBUyxDQUFDRyxPQUFWLENBQWtCQyxXQUFsQixDQUE4QixLQUFLNkksZUFBTCxDQUFxQnpGLElBQW5EO0FBQ0F4RCxlQUFTLENBQUNHLE9BQVYsQ0FBa0JFLFFBQWxCLENBQTJCLEtBQUs0SSxlQUFMLENBQXFCNE8sU0FBaEQ7QUFDQTdYLGVBQVMsQ0FBQ0csT0FBVixDQUFrQkcsV0FBbEIsQ0FBOEIsS0FBSzJJLGVBQUwsQ0FBcUJFLFdBQW5EO0FBQ0FuSixlQUFTLENBQUNHLE9BQVYsQ0FBa0JJLFFBQWxCLENBQTJCLEtBQUswSSxlQUFMLENBQXFCRSxXQUFoRDtBQUNIO0FBeE9MO0FBQUE7QUFBQSwwQkEwT1U7QUFDRixXQUFLcEMsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCVyxRQUExQixDQUFtQ0MsT0FBbkMsQ0FBMkMsWUFBM0M7QUFDQSxXQUFLbkgsYUFBTCxHQUFxQixLQUFLbWIsY0FBTCxDQUFvQnBPLEdBQXBCLENBQXdCc1IsR0FBeEIsQ0FBNEIsSUFBNUIsQ0FBckI7QUFDQSxXQUFLL1EsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCQyxPQUExQixDQUFrQyxVQUFsQyxJQUFnRDtBQUM1QyxtQkFBVzhYLE9BQU8sQ0FBQyxLQUFLdGUsYUFBTCxDQUFtQmlFLElBQW5CLENBQXdCc2EsSUFBeEIsRUFBRCxDQUQwQjtBQUU1QyxnQkFBUSxLQUFLdmUsYUFBTCxDQUFtQmlFO0FBRmlCLE9BQWhEO0FBSUEsV0FBS3VhLFdBQUwsQ0FBaUIsS0FBS3hlLGFBQUwsQ0FBbUJ1RSxRQUFwQyxFQUE4QyxLQUFLdkUsYUFBTCxDQUFtQmlFLElBQWpFLEVBUEUsQ0FRRjs7QUFDQSxXQUFLNkksT0FBTCxHQUFlOFEsSUFBZixDQUNJLEtBQUthLFVBQUwsQ0FBZ0J0UyxJQUFoQixDQUFxQixJQUFyQixDQURKLEVBRUksS0FBS3VTLFVBQUwsQ0FBZ0J2UyxJQUFoQixDQUFxQixJQUFyQixDQUZKLEVBR0V5UixJQUhGLENBR08sS0FBS3piLEtBQUwsQ0FBV2dLLElBQVgsQ0FBZ0IsSUFBaEIsQ0FIUDtBQUlIO0FBdlBMO0FBQUE7QUFBQSwrQkF5UGV3UyxNQXpQZixFQXlQdUI7QUFBQTs7QUFDZmxWLGFBQU8sQ0FBQzJELEdBQVIsQ0FBWSxZQUFaO0FBQ0EsVUFBSTJQLE1BQU0sR0FBRyxLQUFLelAsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCQyxPQUF2QztBQUNBLFVBQUlqQyxRQUFRLEdBQUcsS0FBS3ZFLGFBQUwsQ0FBbUJ1RSxRQUFsQztBQUNBLGFBQU8sSUFBSTBNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVV3TSxNQUFWLEVBQXFCO0FBQ3BDblAsVUFBRSxDQUFDcVEsb0JBQUgsQ0FBd0JELE1BQU0sQ0FBQ0UsRUFBL0IsRUFBbUMsQ0FBQyxDQUFwQyxFQUF1QyxDQUF2QyxFQUEwQ3RhLFFBQVEsR0FBRyxLQUFyRDs7QUFDQSxjQUFJLENBQUNxQyxRQUFMOztBQUNBbVcsY0FBTSxDQUFDLFNBQUQsQ0FBTixHQUFvQjtBQUNoQixxQkFBVyxJQURLO0FBRWhCLG1CQUFTLE1BQUksQ0FBQ3ZOLGVBQUwsQ0FBcUIzRixLQUZkO0FBR2hCLG1CQUFTLE1BQUksQ0FBQzJGLGVBQUwsQ0FBcUIzRixLQUFyQixDQUEyQjJCLEdBQTNCLENBQStCLFVBQUFzVCxDQUFDO0FBQUEsbUJBQUlBLENBQUMsQ0FBQ2hWLElBQU47QUFBQSxXQUFoQyxDQUhPO0FBSWhCLG9CQUFVNlUsTUFKTTtBQUtoQixvQkFBVSxNQUFJLENBQUNyUixJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJFO0FBTHBCLFNBQXBCOztBQU9BLGNBQUksQ0FBQ3NZLGFBQUw7O0FBQ0E3TixlQUFPO0FBQ1YsT0FaTSxDQUFQO0FBYUg7QUExUUw7QUFBQTtBQUFBLCtCQTRRZThOLEtBNVFmLEVBNFFzQjtBQUFBOztBQUNkLFVBQUlqQyxNQUFNLEdBQUcsS0FBS3pQLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQkMsT0FBdkM7QUFDQSxhQUFPLElBQUl5SyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVd00sTUFBVixFQUFxQjtBQUNwQ1gsY0FBTSxDQUFDLFNBQUQsQ0FBTixHQUFvQjtBQUNoQixxQkFBVyxLQURLO0FBRWhCLG1CQUFTaUM7QUFGTyxTQUFwQjtBQUlBdlYsZUFBTyxDQUFDdVYsS0FBUixDQUFjQSxLQUFkOztBQUNBLGNBQUksQ0FBQ0QsYUFBTDs7QUFDQTdOLGVBQU87QUFDVixPQVJNLENBQVA7QUFTSDtBQXZSTDtBQUFBO0FBQUEsNEJBeVJZO0FBQ0osV0FBS2xSLGFBQUwsR0FBcUIsS0FBS21iLGNBQUwsQ0FBb0JoWixLQUFwQixDQUEwQmtjLEdBQTFCLENBQThCLElBQTlCLENBQXJCO0FBQ0EsV0FBS3ZSLE9BQUwsR0FBZThRLElBQWYsQ0FDSSxLQUFLcUIsWUFBTCxDQUFrQjlTLElBQWxCLENBQXVCLElBQXZCLENBREosRUFFSSxLQUFLK1MsWUFBTCxDQUFrQi9TLElBQWxCLENBQXVCLElBQXZCLENBRko7QUFJSDtBQS9STDtBQUFBO0FBQUEsaUNBaVNpQndTLE1BalNqQixFQWlTeUI7QUFDakJsVixhQUFPLENBQUMyRCxHQUFSLENBQVl1UixNQUFNLENBQUNFLEVBQW5CO0FBQ0EsV0FBS3ZSLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUJuQixRQUFyQixDQUE4QmlZLGVBQTlCLENBQThDUixNQUFNLENBQUNFLEVBQXJEO0FBQ0EsV0FBS3ZSLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQkMsT0FBMUIsQ0FBa0MsWUFBbEMsRUFBZ0QsU0FBaEQsSUFBNkQsSUFBN0Q7QUFDQSxXQUFLOEcsSUFBTCxDQUFVak0sS0FBVixDQUFnQmdELE1BQWhCLENBQXVCaUMsV0FBdkIsQ0FBbUNqQixtREFBVyxDQUFDQyxLQUEvQyxFQUppQixDQUtqQjtBQUNIO0FBdlNMO0FBQUE7QUFBQSxpQ0F5U2lCMFosS0F6U2pCLEVBeVN3QjtBQUNoQixVQUFJakMsTUFBTSxHQUFHLEtBQUt6UCxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJDLE9BQXZDOztBQUNBLFVBQUl3WSxLQUFLLENBQUNJLE9BQU4sS0FBa0IsY0FBdEIsRUFBc0M7QUFDbENyQyxjQUFNLENBQUMsWUFBRCxDQUFOLENBQXFCLFNBQXJCLElBQWtDLElBQWxDO0FBQ0EsYUFBS3pQLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JnRCxNQUFoQixDQUF1QmlDLFdBQXZCLENBQW1DakIsbURBQVcsQ0FBQ0MsS0FBL0M7QUFDSCxPQUhELE1BR087QUFDSCxhQUFLZ0ksSUFBTCxDQUFVak0sS0FBVixDQUFnQmdELE1BQWhCLENBQXVCaUMsV0FBdkIsQ0FBbUNqQixtREFBVyxDQUFDZ2EsTUFBL0MsRUFERyxDQUVIOztBQUNBNVYsZUFBTyxDQUFDdVYsS0FBUixDQUFjQSxLQUFkO0FBQ0EsYUFBSzFSLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUJuQixRQUFyQixDQUE4Qm9ZLG9CQUE5QixDQUFtRE4sS0FBbkQsRUFBMEQsS0FBS2hmLGFBQUwsQ0FBbUJ1RSxRQUE3RSxFQUpHLENBS0g7QUFDQTtBQUNBO0FBQ0gsT0FiZSxDQWNoQjs7QUFDSDtBQXhUTDtBQUFBO0FBQUEsK0JBMFRlO0FBQ1AsV0FBS3ZFLGFBQUwsR0FBcUIsS0FBS21iLGNBQUwsQ0FBb0JFLElBQXBCLENBQXlCZ0QsR0FBekIsQ0FBNkIsSUFBN0IsQ0FBckI7QUFDSDtBQTVUTDtBQUFBO0FBQUEsNkJBOFRhO0FBQ0wsV0FBS3JlLGFBQUwsR0FBcUIsS0FBS21iLGNBQUwsQ0FBb0JvRSxNQUFwQixDQUEyQmxCLEdBQTNCLENBQStCLElBQS9CLENBQXJCO0FBQ0g7QUFoVUw7QUFBQTtBQUFBLDhCQWtVYztBQUFBOztBQUNOLFdBQUsvUSxJQUFMLENBQVVqTSxLQUFWLENBQWdCZ0QsTUFBaEIsQ0FBdUJpQyxXQUF2QixDQUFtQ2pCLG1EQUFXLENBQUNtYSxNQUEvQztBQUNBQyxrQkFBWSxDQUFDLEtBQUtuUyxJQUFMLENBQVVqTSxLQUFWLENBQWdCaUQsT0FBaEIsQ0FBd0JhLGVBQXpCLENBQVo7QUFDQSxhQUFPb0osRUFBRSxDQUFDbVIsUUFBSCxDQUFZQyxjQUFaLENBQTJCO0FBQUEsZUFDOUJwUixFQUFFLENBQUNxUixrQkFBSCxDQUFzQixNQUFJLENBQUM1ZixhQUFMLENBQW1CdUUsUUFBekMsRUFBbUQsS0FBbkQsRUFDc0IsTUFBSSxDQUFDdkUsYUFBTCxDQUFtQmlFLElBRHpDLEVBQytDLElBRC9DLENBRDhCO0FBQUEsT0FBM0IsQ0FBUDtBQUlIO0FBRUQ7Ozs7QUEzVUo7QUFBQTtBQUFBLGdDQThVZ0JNLFFBOVVoQixFQThVMEJOLElBOVUxQixFQThVZ0M7QUFDeEIsVUFBSThZLE1BQU0sR0FBRyxLQUFLelAsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCQyxPQUF2QyxDQUR3QixDQUV4Qjs7QUFDQSxVQUFJcVosR0FBSjs7QUFDQSxVQUFJO0FBQ0EsWUFBSXRJLEtBQUssR0FBR2hKLEVBQUUsQ0FBQ2dKLEtBQUgsQ0FBU2hULFFBQVQsRUFBbUJOLElBQW5CLENBQVo7QUFDQTRiLFdBQUcsR0FBR3RSLEVBQUUsQ0FBQ3VSLFlBQUgsQ0FBZ0J2SSxLQUFLLENBQUN3SSxHQUF0QixFQUEyQnhiLFFBQTNCLEVBQXFDZ1QsS0FBSyxDQUFDeUksS0FBM0MsQ0FBTjtBQUNILE9BSEQsQ0FHRSxPQUFPaEIsS0FBUCxFQUFjO0FBQ1o7QUFDQWpDLGNBQU0sQ0FBQyxRQUFELENBQU4sR0FBbUI7QUFDZixxQkFBVyxLQURJO0FBRWYsbUJBQVNpQztBQUZNLFNBQW5CO0FBSUF2VixlQUFPLENBQUN1VixLQUFSLENBQWNBLEtBQWQ7QUFDQXZWLGVBQU8sQ0FBQzJELEdBQVIsQ0FBWTdJLFFBQVosRUFBc0JOLElBQXRCO0FBQ0EsZUFBTyxLQUFQO0FBQ0gsT0FoQnVCLENBaUJ4Qjs7O0FBQ0E4WSxZQUFNLENBQUMsUUFBRCxDQUFOLEdBQW1CO0FBQ2YsbUJBQVcsSUFESTtBQUVmLGVBQU84QztBQUZRLE9BQW5CO0FBSUEsYUFBTyxJQUFQO0FBQ0g7QUFHRDs7OztBQXhXSjtBQUFBO0FBQUEsMkJBMldXSSxVQTNXWCxFQTJXdUI7QUFDZixVQUFJalQsTUFBTSxHQUFHLElBQWI7QUFDQSxVQUFJOUYsUUFBUSxHQUFHOEYsTUFBTSxDQUFDTSxJQUFQLENBQVlqRixVQUFaLENBQXVCbkIsUUFBdEM7QUFDQSxVQUFJN0YsS0FBSyxHQUFHLEtBQUtpTSxJQUFMLENBQVVqTSxLQUF0QjtBQUNBLFVBQUl3TixPQUFPLEdBQUcsS0FBS3ZCLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUJ3RyxPQUFuQztBQUVBN0IsWUFBTSxDQUFDa1QsY0FBUCxDQUFzQixZQUFZO0FBQzlCbFQsY0FBTSxDQUFDbVQsaUJBQVAsQ0FBeUIsZUFBekIsRUFBMEMsS0FBMUMsRUFBaUQsVUFBVXhCLE1BQVYsRUFBa0I7QUFDL0QsY0FBSXBRLEVBQUUsQ0FBQ3NPLGdCQUFILENBQW9CLFlBQXBCLEVBQWtDLFNBQWxDLENBQUosRUFBa0Q7QUFDOUM7QUFDQTdQLGtCQUFNLENBQUNNLElBQVAsQ0FBWWpGLFVBQVosQ0FBdUJuQixRQUF2QixDQUFnQ2lZLGVBQWhDLENBQWdEUixNQUFNLENBQUNFLEVBQXZEOztBQUVBLGdCQUFJdUIsUUFBTyxHQUFHN1IsRUFBRSxDQUFDOFIsR0FBSCxDQUFPQyxTQUFQLENBQWlCM0IsTUFBTSxDQUFDRSxFQUFQLENBQVUwQixPQUEzQixDQUFkOztBQUNBLGdCQUFJcGMsS0FBSyxHQUFHb0ssRUFBRSxDQUFDOFIsR0FBSCxDQUFPQyxTQUFQLENBQWlCM0IsTUFBTSxDQUFDRSxFQUFQLENBQVUyQixLQUEzQixDQUFaO0FBQ0EsZ0JBQUluUixJQUFJLEdBQUdkLEVBQUUsQ0FBQzhSLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQjNCLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVNEIsSUFBM0IsQ0FBWDs7QUFFQSxnQkFBSXJaLFFBQVEsS0FBSyxZQUFiLElBQTZCQyxLQUFLLEtBQUssV0FBM0MsRUFBd0Q7QUFDcEQsbUJBQUtpRyxJQUFMLENBQVVqTSxLQUFWLENBQWdCZ0QsTUFBaEIsQ0FBdUIyYSxLQUF2QixDQUE2QixXQUE3QjtBQUNILGFBRkQsTUFFTztBQUNILG1CQUFLMVIsSUFBTCxDQUFVak0sS0FBVixDQUFnQmdELE1BQWhCLENBQXVCMmEsS0FBdkIsQ0FBNkI1WCxRQUE3QjtBQUNILGFBWjZDLENBYzlDOzs7QUFDQSxnQkFBSSxDQUFDRixRQUFRLENBQUMrQixpQkFBVCxFQUFMLEVBQW1DO0FBQy9CK0Qsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZakYsVUFBWixDQUF1QnFZLE9BQXZCLENBQStCQyxvQkFBL0I7QUFDQXpaLHNCQUFRLENBQUMwWixjQUFUO0FBQ0g7O0FBQ0R6YyxpQkFBSyxHQUFHaUcsSUFBSSxDQUFDeVcsR0FBTCxDQUFTLEdBQVQsRUFBY3pXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQVQsRUFBY2xHLEtBQWQsQ0FBZCxDQUFSO0FBQ0EsZ0JBQUkyYyxVQUFVLEdBQUd6ZixLQUFLLENBQUN5QixRQUFOLENBQWVpZSxpQkFBZixFQUFqQjtBQUNBMWYsaUJBQUssQ0FBQ3lCLFFBQU4sQ0FBZWllLGlCQUFmLENBQWlDM1csSUFBSSxDQUFDeVcsR0FBTCxDQUFTQyxVQUFULEVBQXFCM2MsS0FBckIsQ0FBakM7O0FBQ0EsZ0JBQUlpYyxRQUFPLElBQUloWixRQUFRLENBQUN3QyxXQUFULE9BQTJCLFVBQTFDLEVBQXNEO0FBQ2xEb0Qsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZakYsVUFBWixDQUF1QkMsTUFBdkIsQ0FBOEIwWSxXQUE5QixDQUEwQyxHQUExQztBQUNILGFBRkQsTUFFTztBQUNIaFUsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZakYsVUFBWixDQUF1QkMsTUFBdkIsQ0FBOEIwWSxXQUE5QixDQUEwQzdjLEtBQTFDO0FBQ0g7O0FBQ0Q5QyxpQkFBSyxDQUFDa0YsU0FBTixDQUFnQmxDLE1BQWhCLENBQXVCLFVBQXZCOztBQUNBLGdCQUFJNGIsVUFBVSxLQUFLN2YsU0FBbkIsRUFBOEI7QUFDMUI2Zix3QkFBVSxDQUFDclAsTUFBRCxDQUFWO0FBQ0g7O0FBQ0QsZ0JBQUksQ0FBQ3JDLEVBQUUsQ0FBQ3NPLGdCQUFILENBQW9CclksVUFBcEIsQ0FBK0J5YyxTQUFwQyxFQUErQztBQUMzQyxrQkFBSTtBQUNBcFMsdUJBQU8sQ0FBQ3FTLGNBQVI7QUFDSCxlQUZELENBRUUsT0FBT3pQLENBQVAsRUFBVSxDQUNYO0FBQ0o7QUFDSixXQXJDRCxNQXFDTztBQUNIdkssb0JBQVEsQ0FBQ2lhLHNCQUFUO0FBQ0g7QUFDSixTQXpDRDtBQTBDSCxPQTNDRDtBQTRDQSxXQUFLN1QsSUFBTCxDQUFVakYsVUFBVixDQUFxQkMsTUFBckIsQ0FBNEJ4QyxRQUE1QixDQUFxQyxRQUFyQyxFQUErQyxRQUEvQztBQUNIO0FBOVpMO0FBQUE7O0FBZ2FJOzs7QUFoYUosZ0NBbWFnQjtBQUNSLFVBQUlzYixRQUFRLEdBQUcsV0FBZixDQURRLENBRVI7QUFDQTs7QUFDQSxVQUFJLENBQUMsS0FBSzlULElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JnZ0IsUUFBaEIsQ0FBeUJELFFBQXpCLElBQXFDN0MsSUFBckMsRUFBTCxFQUFrRDtBQUM5QyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFLalIsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCbEMsTUFBMUIsQ0FBaUMsVUFBakM7QUFDQSxXQUFLaUosSUFBTCxDQUFVakYsVUFBVixDQUFxQkMsTUFBckIsQ0FBNEJnWixRQUE1QixHQVJRLENBU1I7O0FBQ0EsVUFBSXRVLE1BQU0sR0FBRyxJQUFiO0FBQ0EsVUFBSTlGLFFBQVEsR0FBRyxLQUFLb0csSUFBTCxDQUFVakYsVUFBVixDQUFxQm5CLFFBQXBDO0FBQ0E4RixZQUFNLENBQUNpUSxZQUFQO0FBQ0FqUSxZQUFNLENBQUN1VSxVQUFQO0FBQ0F2VSxZQUFNLENBQUN3UixXQUFQO0FBQ0F4UixZQUFNLENBQUNtVCxpQkFBUCxDQUF5QmlCLFFBQXpCLEVBQW1DLElBQW5DLEVBQXlDLFVBQVV6QyxNQUFWLEVBQWtCO0FBQ3ZELFlBQUlwUSxFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixZQUFwQixFQUFrQyxTQUFsQyxDQUFKLEVBQWtEO0FBQzlDO0FBQ0E7QUFDQSxjQUFJLENBQUN1RCxPQUFELElBQ0EsRUFBRWhaLFFBQVEsS0FBSyxZQUFiLElBQTZCQyxLQUFLLEtBQUssV0FBekMsQ0FESixFQUMyRDtBQUN2REgsb0JBQVEsQ0FBQ2lZLGVBQVQsQ0FBeUIvWCxRQUF6QixFQUFtQ0MsS0FBbkMsRUFBMENGLE9BQTFDLEVBQW1EMkMsSUFBbkQ7QUFDSDs7QUFDRGtELGdCQUFNLENBQUNNLElBQVAsQ0FBWWpGLFVBQVosQ0FBdUJuQixRQUF2QixDQUFnQ2lZLGVBQWhDLENBQWdEUixNQUFNLENBQUNFLEVBQXZEO0FBQ0E3UixnQkFBTSxDQUFDTSxJQUFQLENBQVlqTSxLQUFaLENBQWtCa0YsU0FBbEIsQ0FBNEJsQyxNQUE1QixDQUFtQyxVQUFuQztBQUNIO0FBQ0osT0FYRDtBQVlBMkksWUFBTSxDQUFDTSxJQUFQLENBQVlqRixVQUFaLENBQXVCQyxNQUF2QixDQUE4QnhDLFFBQTlCLENBQXVDLFFBQXZDLEVBQWlELFdBQWpEO0FBQ0g7QUEvYkw7QUFBQTtBQUFBLHFDQWljcUIwYixnQkFqY3JCLEVBaWN1QztBQUMvQixVQUFJcEIsT0FBTyxHQUFHN1IsRUFBRSxDQUFDOFIsR0FBSCxDQUFPQyxTQUFQLENBQWlCa0IsZ0JBQWdCLENBQUNqQixPQUFsQyxDQUFkO0FBQ0EsVUFBSXBjLEtBQUssR0FBR29LLEVBQUUsQ0FBQzhSLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQmtCLGdCQUFnQixDQUFDaEIsS0FBbEMsQ0FBWjtBQUNBLFVBQUkvVixJQUFJLEdBQUc4RCxFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJrQixnQkFBZ0IsQ0FBQ0MsSUFBbEMsQ0FBWDtBQUNIO0FBRUQ7Ozs7QUF2Y0o7QUFBQTtBQUFBLHNDQTBjc0JsZCxRQTFjdEIsRUEwY2dDbWQsS0ExY2hDLEVBMGN1Q0MsS0ExY3ZDLEVBMGM4QztBQUN0QyxXQUFLclUsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCbEMsTUFBMUIsQ0FBaUMsWUFBakM7QUFDQSxVQUFJMFksTUFBTSxHQUFHLEtBQUt6UCxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJDLE9BQXZDLENBRnNDLENBR3RDOztBQUNBLFdBQUtvYix3QkFBTCxHQUpzQyxDQUt0Qzs7QUFDQSxVQUFJQyxXQUFXLEdBQUcsS0FBS3ZVLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JnZ0IsUUFBaEIsQ0FBeUIsVUFBekIsR0FBbEI7QUFDQSxVQUFJUyxlQUFlLEdBQUdELFdBQXRCLENBUHNDLENBUXRDOztBQUNBLFVBQUksQ0FBQzlFLE1BQU0sQ0FBQyxRQUFELENBQU4sQ0FBaUJxRCxPQUFsQixJQUE2QixDQUFDckQsTUFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQnFELE9BQXJELEVBQThEO0FBQzFEMEIsdUJBQWUsR0FBRyxNQUFsQjtBQUNIOztBQUNEdlQsUUFBRSxDQUFDdU8sWUFBSCxDQUFnQnBTLEtBQWhCLENBQXNCLGtDQUF0QixJQUE0RCwyREFBNUQ7QUFDQSxVQUFJcVgsY0FBYyxHQUFHLEtBQUt6VSxJQUFMLENBQVVqTSxLQUFWLENBQWdCZ2dCLFFBQWhCLENBQXlCOWMsUUFBekIsR0FBckI7QUFDQSxVQUFJeWQsVUFBVSxHQUFHRCxjQUFjLENBQUNFLEtBQWYsQ0FBcUJDLGNBQXJCLEVBQXFDbFgsTUFBdEQ7QUFDQStXLG9CQUFjLEdBQUdJLG9CQUFvQixDQUFDTCxlQUFELEVBQWtCQyxjQUFsQixFQUFrQ0wsS0FBbEMsQ0FBckM7QUFDQU0sZ0JBQVUsR0FBR0QsY0FBYyxDQUFDRSxLQUFmLENBQXFCQyxjQUFyQixFQUFxQ2xYLE1BQXJDLEdBQThDZ1gsVUFBM0Q7QUFDQWpGLFlBQU0sQ0FBQyxZQUFELENBQU4sR0FBdUI7QUFDbkIsdUJBQWUsRUFESTtBQUVuQixvQkFBWXhZLFFBQVEsR0FBRyxLQUZKO0FBR25CLGdCQUFRd2QsY0FIVyxDQUluQjs7QUFKbUIsT0FBdkI7QUFNSDtBQWplTDtBQUFBOztBQW9lSTs7OztBQXBlSixvQ0F3ZW9CO0FBQ1osVUFBSSxLQUFLbkcsY0FBTCxLQUF3QixJQUE1QixFQUFrQztBQUM5QixhQUFLQSxjQUFMO0FBQ0g7QUFDSjtBQUVEOzs7O0FBOWVKO0FBQUE7QUFBQSxzQ0FpZnNCO0FBQ2QsVUFBSSxLQUFLRCxnQkFBTCxLQUEwQixJQUE5QixFQUFvQztBQUNoQyxhQUFLQSxnQkFBTDtBQUNIO0FBQ0o7QUFyZkw7QUFBQTtBQUFBLHdDQXFJK0I7QUFDdkIsVUFBSXBOLEVBQUUsQ0FBQzZULFdBQUgsQ0FBZXBYLE1BQW5CLEVBQTJCO0FBQ3ZCLGVBQU91RCxFQUFFLENBQUM2VCxXQUFILENBQWVDLEdBQWYsRUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sRUFBUDtBQUNIO0FBQ0o7QUEzSUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRUEsSUFBTUgsY0FBYyxHQUFHLFlBQXZCO0FBRUE7Ozs7QUFHQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQVVOLFdBQVYsRUFBdUJFLGNBQXZCLEVBQXVDTCxLQUF2QyxFQUE4Q1ksTUFBOUMsRUFBc0Q7QUFDL0UsTUFBSUMsUUFBUSxHQUFHakwsSUFBSSxDQUFDa0wsU0FBTCxDQUFlWCxXQUFmLENBQWY7QUFDQSxNQUFJWSxZQUFZLEdBQUdDLDJEQUFNLENBQUNBLDJEQUFNLENBQUNKLE1BQU0sR0FBR1QsV0FBSCxHQUFpQixNQUF4QixDQUFQLENBQXpCO0FBQ0EsTUFBSWMsWUFBWSxHQUFHLEVBQW5COztBQUNBLE1BQUksQ0FBQ2pCLEtBQUwsRUFBWTtBQUNSaUIsZ0JBQVksR0FBRyw0REFBZjtBQUNIOztBQUVELGlHQUdTSixRQUhULDRFQU9GRSxZQVBFLDBKQWFGRSxZQWJFLDRtQkErQkZaLGNBL0JFO0FBb0NILENBNUNEOztJQStDTWEsYTs7O0FBRUYseUJBQVl0VixJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSy9JLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLTixJQUFMLEdBQVksSUFBWjtBQUNIOzs7O3dCQUVHK0ksTSxFQUFRO0FBQ1J1QixRQUFFLENBQUNzVSxJQUFILEdBQVUsS0FBS0MsVUFBTCxDQUFnQjNXLElBQWhCLENBQXFCLElBQXJCLENBQVY7O0FBQ0FvQyxRQUFFLENBQUM5SCxNQUFILEdBQVksVUFBQ2tQLE9BQUQ7QUFBQSxlQUFhbE0sT0FBTyxDQUFDMkQsR0FBUixDQUFZdUksT0FBWixDQUFiO0FBQUEsT0FBWjs7QUFDQSxhQUFPLElBQVA7QUFDSDs7O3dCQUVHM0ksTSxFQUFRLENBRVg7QUFFRDs7Ozs7Ozs7Ozs7K0JBUVd6SSxRLEVBQVU7QUFDakIsVUFBSSxLQUFLd2UsV0FBTCxDQUFpQnhlLFFBQWpCLENBQUosRUFBZ0M7QUFDNUIsY0FBTSwyQkFBMkJBLFFBQTNCLEdBQXNDLEdBQTVDO0FBQ0gsT0FGRCxNQUVPLElBQUlBLFFBQVEsS0FBSyxhQUFqQixFQUFnQztBQUNuQyxlQUFPLEtBQUsrSSxJQUFMLENBQVVqTSxLQUFWLENBQWdCbkIsVUFBaEIsQ0FBMkIrRCxJQUEzQixHQUFrQyxDQUFsQyxFQUFxQ3lILFFBQXJDLEVBQVA7QUFDSCxPQUZNLE1BRUEsSUFBSTZDLEVBQUUsQ0FBQ3VPLFlBQUgsS0FBb0IxYyxTQUFwQixJQUNQbU8sRUFBRSxDQUFDdU8sWUFBSCxDQUFnQixPQUFoQixFQUF5QnZZLFFBQXpCLE1BQXVDbkUsU0FEcEMsRUFDK0M7QUFDbEQsY0FBTSxzQkFBc0JtRSxRQUF0QixHQUFpQyxHQUF2QztBQUNIOztBQUNELGFBQU9nSyxFQUFFLENBQUN1TyxZQUFILENBQWdCLE9BQWhCLEVBQXlCdlksUUFBekIsQ0FBUDtBQUNIOzs7Z0NBRVdBLFEsRUFBVTtBQUNsQixhQUFPLEtBQVA7QUFDSDs7Ozs7O0lBR0N5ZSxvQjs7Ozs7Ozs7Ozs7Ozt3QkFDRWhXLE0sRUFBUTtBQUFBOztBQUNSLG9GQUFVQSxNQUFWLEVBRFEsQ0FFUjs7O0FBQ0EsVUFBSWxLLFFBQVEsR0FBRyxLQUFLd0ssSUFBTCxDQUFVak0sS0FBVixDQUFnQnlCLFFBQS9COztBQUNBeUwsUUFBRSxDQUFDMFUsaUJBQUgsR0FBdUI7QUFBQSxlQUNuQixLQUFJLENBQUMzVixJQUFMLENBQVVqTSxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkI2QyxRQUEzQixDQUFvQ0csY0FBcEMsS0FBdURpZ0IsUUFBdkQsR0FBa0UsS0FEL0M7QUFBQSxPQUF2Qjs7QUFFQTNVLFFBQUUsQ0FBQzRVLFNBQUgsR0FBZTVVLEVBQUUsQ0FBQzBVLGlCQUFILEVBQWYsQ0FOUSxDQU9SO0FBQ0E7QUFDQTs7QUFDQTFVLFFBQUUsQ0FBQ3FRLG9CQUFILEdBQTBCNVIsTUFBTSxDQUFDakQsSUFBUCxDQUFZb0MsSUFBWixDQUFpQixJQUFqQixDQUExQixDQVZRLENBV1I7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FvQyxRQUFFLENBQUMrTixRQUFILEdBQWN0UCxNQUFNLENBQUNvRSxLQUFQLENBQWFqRixJQUFiLENBQWtCLElBQWxCLENBQWQ7QUFFQWEsWUFBTSxDQUFDakUsS0FBUDtBQUVBLGFBQU8sSUFBUDtBQUNIOzs7Z0NBRVd4RSxRLEVBQVU7QUFDbEIsYUFBT0EsUUFBUSxDQUFDcVQsVUFBVCxDQUFvQixrQkFBcEIsS0FDSHJULFFBQVEsQ0FBQ3FULFVBQVQsQ0FBb0IsZ0JBQXBCLENBREo7QUFFSDs7OztFQTFCOEJnTCxhOztJQTZCN0JRLHVCOzs7Ozs7Ozs7Ozs7O3dCQUNFcFcsTSxFQUFRO0FBQ1IsdUZBQVVBLE1BQVYsRUFEUSxDQUVSOzs7QUFDQXVCLFFBQUUsQ0FBQzRVLFNBQUgsR0FBZS9pQixTQUFmLENBSFEsQ0FJUjs7QUFDQW1PLFFBQUUsQ0FBQ3FRLG9CQUFILEdBQTBCLElBQTFCLENBTFEsQ0FNUjtBQUNBO0FBQ0E7QUFDQTs7QUFDQXJRLFFBQUUsQ0FBQzZULFdBQUgsR0FBaUIsRUFBakIsQ0FWUSxDQVdSO0FBQ0E7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs7RUFmaUNRLGE7O0FBa0IvQixJQUFNeEgsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3QkFDUXBPLE1BRFIsRUFDZ0I7QUFDUixnRkFBVUEsTUFBVjs7QUFDQSxXQUFLekksUUFBTCxHQUFnQixXQUFoQjtBQUNBLFdBQUtOLElBQUwsR0FBWSxLQUFLcUosSUFBTCxDQUFVak0sS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCK0QsSUFBM0IsR0FBa0MsQ0FBbEMsRUFBcUN5SCxRQUFyQyxFQUFaO0FBRUEsYUFBTyxJQUFQO0FBQ0g7QUFQTDs7QUFBQTtBQUFBLEVBQXNDc1gsb0JBQXRDO0FBVU8sSUFBTTFILGlCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ1F0TyxNQURSLEVBQ2dCO0FBQ1IsaUZBQVVBLE1BQVY7O0FBQ0EsV0FBS3pJLFFBQUwsR0FBZ0IsV0FBaEIsQ0FGUSxDQUdSOztBQUNBLFdBQUtOLElBQUwsR0FBWSx5QkFBWixDQUpRLENBTVI7O0FBQ0ErSSxZQUFNLENBQUNrUSxvQkFBUDtBQUNBbFEsWUFBTSxDQUFDTSxJQUFQLENBQVlqRixVQUFaLENBQXVCbkIsUUFBdkIsQ0FBZ0NrSCxLQUFoQztBQUVBLGFBQU8sSUFBUDtBQUNIO0FBWkw7O0FBQUE7QUFBQSxFQUF1QzRVLG9CQUF2QztBQWVPLElBQU1LLG1CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ1FyVyxNQURSLEVBQ2dCO0FBQ1IsbUZBQVVBLE1BQVYsRUFEUSxDQUVSOzs7QUFDQSxXQUFLekksUUFBTCxHQUFnQixXQUFoQjtBQUNBLFdBQUtOLElBQUwsR0FBWSx5QkFBWjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBUkw7O0FBQUE7QUFBQSxFQUF5QytlLG9CQUF6QztBQVdPLElBQU16SCxrQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHdCQUNRdk8sTUFEUixFQUNnQjtBQUNSLGtGQUFVQSxNQUFWOztBQUNBLFdBQUt6SSxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsV0FBS04sSUFBTCxHQUFZLEtBQUtxSixJQUFMLENBQVVqTSxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJrQyxLQUEzQixFQUFaO0FBRUEsVUFBSTRhLE1BQU0sR0FBRyxLQUFLelAsSUFBTCxDQUFVak0sS0FBVixDQUFnQmtGLFNBQWhCLENBQTBCQyxPQUF2QyxDQUxRLENBTVI7O0FBQ0EsVUFBSXNiLGVBQWUsR0FBRyxLQUFLeFUsSUFBTCxDQUFVak0sS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCK0QsSUFBM0IsR0FBa0MsQ0FBbEMsRUFBcUN5SCxRQUFyQyxFQUF0QjtBQUNBNkMsUUFBRSxDQUFDdU8sWUFBSCxDQUFnQnBTLEtBQWhCLENBQXNCLGtDQUF0QixJQUE0RCwyREFBNUQ7QUFDQSxVQUFJcVgsY0FBYyxHQUFHLEtBQUs5ZCxJQUExQjtBQUNBLFVBQUkrZCxVQUFVLEdBQUdELGNBQWMsQ0FBQ0UsS0FBZixDQUFxQkMsY0FBckIsRUFBcUNsWCxNQUF0RDtBQUNBLFVBQUlzWCxNQUFNLEdBQUd2RixNQUFNLENBQUMsUUFBRCxDQUFOLENBQWlCcUQsT0FBakIsSUFBNEJyRCxNQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CcUQsT0FBNUQ7QUFDQTJCLG9CQUFjLEdBQUdJLG9CQUFvQixDQUFDTCxlQUFELEVBQWtCQyxjQUFsQixFQUFrQyxLQUFsQyxFQUF5Q08sTUFBekMsQ0FBckM7QUFDQU4sZ0JBQVUsR0FBR0QsY0FBYyxDQUFDRSxLQUFmLENBQXFCQyxjQUFyQixFQUFxQ2xYLE1BQXJDLEdBQThDZ1gsVUFBM0Q7QUFDQWpGLFlBQU0sQ0FBQyxZQUFELENBQU4sR0FBdUI7QUFDbkIsdUJBQWUsRUFESTtBQUVuQixvQkFBWSxLQUFLeFksUUFBTCxHQUFnQixLQUZUO0FBR25CLGdCQUFRd2QsY0FIVyxDQUluQjs7QUFKbUIsT0FBdkI7QUFPQSxXQUFLOWQsSUFBTCxHQUFZOGQsY0FBWjtBQUVBdFksYUFBTyxDQUFDMkQsR0FBUixDQUFZLEtBQUtuSixJQUFqQjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBM0JMO0FBQUE7QUFBQSwrQkE2QmVNLFFBN0JmLEVBNkJ5QjtBQUNqQixVQUFJLEtBQUt3ZSxXQUFMLENBQWlCeGUsUUFBakIsQ0FBSixFQUFnQztBQUM1QixjQUFNLDJCQUEyQkEsUUFBM0IsR0FBc0MsR0FBNUM7QUFDSCxPQUZELE1BRU8sSUFBSUEsUUFBUSxLQUFLLGFBQWpCLEVBQWdDO0FBQ25DLGVBQU8sS0FBSytJLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQitELElBQTNCLEdBQWtDLENBQWxDLEVBQXFDeUgsUUFBckMsRUFBUDtBQUNILE9BRk0sTUFFQSxJQUFJbkgsUUFBUSxLQUFLLGFBQWpCLEVBQWdDO0FBQ25DLGVBQU8sS0FBSytJLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQmtDLEtBQTNCLEVBQVA7QUFDSCxPQUZNLE1BRUEsSUFBSW9NLEVBQUUsQ0FBQ3VPLFlBQUgsS0FBb0IxYyxTQUFwQixJQUNQbU8sRUFBRSxDQUFDdU8sWUFBSCxDQUFnQixPQUFoQixFQUF5QnZZLFFBQXpCLE1BQXVDbkUsU0FEcEMsRUFDK0M7QUFDbEQsY0FBTSxzQkFBc0JtRSxRQUF0QixHQUFpQyxHQUF2QztBQUNIOztBQUNELGFBQU9nSyxFQUFFLENBQUN1TyxZQUFILENBQWdCLE9BQWhCLEVBQXlCdlksUUFBekIsQ0FBUDtBQUNIO0FBekNMOztBQUFBO0FBQUEsRUFBd0M2ZSx1QkFBeEM7QUE0Q08sSUFBTTVILHFCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ1F4TyxNQURSLEVBQ2dCO0FBQ1IscUZBQVVBLE1BQVY7O0FBQ0EsV0FBS3pJLFFBQUwsR0FBZ0IsY0FBaEI7QUFDQSxXQUFLTixJQUFMLEdBQVksS0FBS3FKLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQm1DLFFBQTNCLEVBQVo7QUFFQSxhQUFPLElBQVA7QUFDSDtBQVBMOztBQUFBO0FBQUEsRUFBMkNnaEIsdUJBQTNDO0FBVU8sSUFBTTNILG1CQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBQ1F6TyxNQURSLEVBQ2dCO0FBQ1IsbUZBQVVBLE1BQVY7O0FBQ0EsV0FBS3pJLFFBQUwsR0FBZ0IsWUFBaEI7QUFDQSxXQUFLTixJQUFMLEdBQVksS0FBS3FKLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQm9DLE1BQTNCLEVBQVo7QUFFQSxhQUFPLElBQVA7QUFDSDtBQVBMOztBQUFBO0FBQUEsRUFBeUMrZ0IsdUJBQXpDO0FBVU8sSUFBTUUscUJBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3QkFDUXRXLE1BRFIsRUFDZ0I7QUFDUixxRkFBVUEsTUFBVjs7QUFDQSxXQUFLekksUUFBTCxHQUFnQixXQUFoQjtBQUNBLFdBQUtOLElBQUwsR0FBWSxLQUFLcUosSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCa0MsS0FBM0IsRUFBWjtBQUVBLGFBQU8sSUFBUDtBQUNIO0FBUEw7O0FBQUE7QUFBQSxFQUEyQ29aLGtCQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUE8sSUFBSWdJLGFBQWEsbXZDQUFqQjtBQW1DQSxJQUFNN1YsZUFBYjtBQUFBO0FBQUE7QUFFSTs7Ozs7Ozs7O0FBU0EsMkJBQVlKLElBQVosRUFBa0JhLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUtiLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUthLEdBQUwsR0FBV0EsR0FBWDtBQUVBLFNBQUtxVixhQUFMLEdBQXFCLEtBQUtsVyxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJXLFFBQS9DO0FBRUEsU0FBS0UsUUFBTCxHQUFnQixLQUFLK0csR0FBTCxDQUFTUixJQUFULENBQWMsNEJBQWQsQ0FBaEI7QUFDQSxTQUFLdEcsS0FBTCxHQUFhLEtBQUs4RyxHQUFMLENBQVNSLElBQVQsQ0FBYyx5QkFBZCxDQUFiO0FBQ0EsU0FBS3hHLE9BQUwsR0FBZSxLQUFLZ0gsR0FBTCxDQUFTUixJQUFULENBQWMsMkJBQWQsQ0FBZjtBQUNIOztBQXBCTDtBQUFBOztBQXNCSTs7O0FBdEJKLHFDQXlCcUI7QUFDYnpGLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JzSSxPQUFoQixDQUF3QjtBQUNwQkMsaUJBQVMsRUFBRSxLQUFLdEMsR0FBTCxDQUFTc1YsTUFBVCxHQUFrQkM7QUFEVCxPQUF4QixFQUVHLElBRkg7QUFHSDtBQTdCTDtBQUFBOztBQStCSTs7OztBQS9CSix3Q0FtQ3dCO0FBQ2hCLFVBQUlDLGNBQWMsR0FBRyxLQUFLeFYsR0FBTCxDQUFTc1YsTUFBVCxHQUFrQkMsR0FBdkM7QUFDQSxVQUFJRSxpQkFBaUIsR0FBRyxLQUFLelYsR0FBTCxDQUFTc1YsTUFBVCxHQUFrQkMsR0FBbEIsR0FBd0IsS0FBS3ZWLEdBQUwsQ0FBUzBWLFdBQVQsRUFBaEQ7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRzViLENBQUMsQ0FBQ3FMLE1BQUQsQ0FBRCxDQUFVOUMsU0FBVixLQUF3QnZJLENBQUMsQ0FBQ3FMLE1BQUQsQ0FBRCxDQUFVM0UsTUFBVixFQUEvQztBQUNBLFVBQUltVixhQUFhLEdBQUc3YixDQUFDLENBQUNxTCxNQUFELENBQUQsQ0FBVTlDLFNBQVYsRUFBcEIsQ0FKZ0IsQ0FLaEI7O0FBQ0EsYUFBU3FULGdCQUFnQixHQUFHSCxjQUFwQixJQUF3Q0ksYUFBYSxHQUFHSCxpQkFBaEU7QUFDSDtBQTFDTDtBQUFBOztBQTRDSTs7OztBQTVDSiw0QkFnRFk7QUFDSixXQUFLSixhQUFMLENBQW1CcmMsT0FBbkIsQ0FBMkIsU0FBM0I7QUFDQSxXQUFLcWMsYUFBTCxDQUFtQnBjLFFBQW5CLENBQTRCLElBQTVCO0FBQ0EsV0FBS29jLGFBQUwsQ0FBbUJuYyxLQUFuQixDQUF5QixJQUF6QjtBQUNBLFdBQUttYyxhQUFMLENBQW1CbGMsTUFBbkIsQ0FBMEIsS0FBMUI7QUFDQSxXQUFLa2MsYUFBTCxDQUFtQmpjLFVBQW5CLENBQThCOEcsU0FBOUI7QUFDQSxXQUFLbVYsYUFBTCxDQUFtQmhjLGNBQW5CLENBQWtDNkcsU0FBbEM7QUFDSDtBQXZETDtBQUFBOztBQWtFSTs7OztBQWxFSixtQ0FzRW1CbVQsZ0JBdEVuQixFQXNFcUM7QUFDN0I7QUFDQSxVQUFJcmEsT0FBTyxHQUFHb0gsRUFBRSxDQUFDOFIsR0FBSCxDQUFPQyxTQUFQLENBQWlCa0IsZ0JBQWdCLENBQUN3QyxPQUFsQyxDQUFkO0FBQ0EsVUFBSTVjLFFBQVEsR0FBR21ILEVBQUUsQ0FBQzhSLEdBQUgsQ0FBT0MsU0FBUCxDQUFpQmtCLGdCQUFnQixDQUFDeUMsUUFBbEMsQ0FBZjtBQUNBLFVBQUk1YyxLQUFLLEdBQUdrSCxFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJrQixnQkFBZ0IsQ0FBQzBDLEtBQWxDLENBQVo7QUFDQSxVQUFJN1UsSUFBSSxHQUFHZCxFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJrQixnQkFBZ0IsQ0FBQ2YsSUFBbEMsQ0FBWDtBQUNBLFVBQUloVyxJQUFJLEdBQUc4RCxFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJrQixnQkFBZ0IsQ0FBQ0MsSUFBbEMsQ0FBWCxDQU42QixDQVE3Qjs7QUFDQSxVQUFJaGUsU0FBUyxHQUFHLEtBQUs2SixJQUFMLENBQVVqTSxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkI2QyxRQUEzQixDQUFvQ1csU0FBcEMsRUFBaEI7O0FBQ0EsVUFBSUEsU0FBUyxJQUFJMkQsUUFBUSxDQUFDd0MsV0FBVCxPQUEyQixVQUE1QyxFQUF3RDtBQUNwRHhDLGdCQUFRLEdBQUcsWUFBWDtBQUNBQyxhQUFLLEdBQUcsV0FBUjtBQUNBRixlQUFPLEdBQUcsb0JBQVY7QUFDSCxPQWQ0QixDQWdCN0I7OztBQUNBLFVBQUlDLFFBQVEsQ0FBQ3dDLFdBQVQsT0FBMkIsWUFBM0IsSUFBMkN2QyxLQUFLLENBQUN1QyxXQUFOLE9BQXdCLFNBQXZFLEVBQWtGO0FBQzlFdkMsYUFBSyxHQUFHLHFCQUFSO0FBQ0gsT0FuQjRCLENBcUI3Qjs7O0FBQ0FGLGFBQU8sR0FBRyxLQUFLbUcsSUFBTCxDQUFVekUsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIzQixPQUE3QixDQUFWO0FBQ0EsV0FBS3FjLGFBQUwsQ0FBbUJyYyxPQUFuQixDQUEyQkEsT0FBM0I7QUFDQSxXQUFLcWMsYUFBTCxDQUFtQnBjLFFBQW5CLENBQTRCQSxRQUE1QjtBQUNBLFdBQUtvYyxhQUFMLENBQW1CbmMsS0FBbkIsQ0FBeUJBLEtBQXpCLEVBekI2QixDQTJCN0I7O0FBQ0EsVUFBSXlDLElBQUksR0FBRzRELGVBQWUsQ0FBQ3lXLGtCQUFoQixDQUFtQzFaLElBQW5DLENBQVg7QUFDQSxXQUFLK1ksYUFBTCxDQUFtQmpjLFVBQW5CLENBQThCOEcsU0FBOUI7O0FBQ0EsVUFBSXZFLElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLEtBQUsxSixTQUE5QixFQUF5QztBQUNyQyxhQUFLb2pCLGFBQUwsQ0FBbUJqYyxVQUFuQixDQUE4Qm9JLElBQTlCLENBQW1DN0YsSUFBbkM7QUFDSCxPQWhDNEIsQ0FrQzdCOzs7QUFDQSxVQUFJc2EsYUFBYSxHQUFHLEtBQUs5VyxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJDLE9BQTFCLENBQWtDRSxPQUF0RDtBQUNBLFdBQUs4YyxhQUFMLENBQW1CaGMsY0FBbkIsQ0FBa0M2RyxTQUFsQzs7QUFDQSxVQUFJK1YsYUFBYSxDQUFDaEUsT0FBbEIsRUFBMkI7QUFDdkIsYUFBSyxJQUFJNUYsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxJQUFJLEtBQUtsTixJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEIsQ0FBMEJHLE9BQTFCLENBQWtDSSxRQUFyRCxFQUErRDBULENBQUMsRUFBaEUsRUFBb0U7QUFDaEUsY0FBSTRKLGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQnZZLE9BQXBCLENBQTRCME8sQ0FBNUIsTUFBbUMsQ0FBQyxDQUF4QyxFQUEyQztBQUN2QyxpQkFBS2dKLGFBQUwsQ0FBbUJoYyxjQUFuQixDQUFrQ21JLElBQWxDLENBQXVDNkssQ0FBdkM7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUVEOzs7O0FBcEhKO0FBQUE7QUFBQSxvQ0F1SG9CZ0gsZ0JBdkhwQixFQXVIc0M7QUFDOUIsV0FBSzhDLGNBQUwsQ0FBb0I5QyxnQkFBcEIsRUFEOEIsQ0FHOUI7QUFDQTs7QUFFQSxVQUFJLENBQUMsS0FBS3ZZLGlCQUFMLEVBQUwsRUFBK0I7QUFDM0IsYUFBSzBYLG9CQUFMO0FBQ0EsYUFBS0MsY0FBTDtBQUNIO0FBQ0o7QUFqSUw7QUFBQTtBQUFBLDJDQW1JMkI7QUFDbkIsV0FBS3pTLEdBQUwsQ0FBU1IsSUFBVCxDQUFjLDRCQUFkLEVBQTRDeUIsSUFBNUMsR0FBbURtVixPQUFuRCxDQUEyRCxJQUEzRDtBQUNIO0FBcklMO0FBQUE7QUFBQSx5Q0F1SXlCdkYsS0F2SXpCLEVBdUlnQ3dGLGdCQXZJaEMsRUF1SWtEO0FBQzFDL2EsYUFBTyxDQUFDdVYsS0FBUixDQUFjQSxLQUFkO0FBQ0EsV0FBSzFSLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQlcsUUFBMUIsQ0FBbUNFLFFBQW5DLENBQTRDLFVBQTVDO0FBQ0EsV0FBS2tHLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQlcsUUFBMUIsQ0FBbUNHLEtBQW5DLENBQXlDLGdCQUF6QztBQUNBLFVBQUlGLE9BQU8sMEpBSVE2WCxLQUFLLENBQUNJLE9BSmQsd0JBSW1DN1EsRUFBRSxDQUFDOFIsR0FBSCxDQUFPQyxTQUFQLENBQWlCdEIsS0FBSyxDQUFDeUYsSUFBdkIsQ0FKbkMsV0FBWDs7QUFNQSxVQUFJekYsS0FBSyxDQUFDMEYsU0FBTixJQUFtQjFGLEtBQUssQ0FBQzBGLFNBQU4sQ0FBZ0IxWixNQUF2QyxFQUErQztBQUMzQyxZQUFJMlosa0JBQWtCLEdBQUUzRixLQUFLLENBQUMwRixTQUFOLENBQWdCbFosR0FBaEIsQ0FBb0IsVUFBQW9aLEtBQUs7QUFBQSwyREFDYkEsS0FBSyxDQUFDcmdCLFFBRE8sb0RBQ3dDcWdCLEtBQUssQ0FBQ0MsTUFEOUM7QUFBQSxTQUF6QixFQUMwRi9NLElBRDFGLENBQytGLEVBRC9GLENBQXhCO0FBRUEzUSxlQUFPLG1CQUFZd2Qsa0JBQVosV0FBUDtBQUNBLFlBQUlHLGNBQWMsR0FBRzlGLEtBQUssQ0FBQzBGLFNBQU4sQ0FBZ0I5VSxLQUFoQixDQUFzQixDQUFDLENBQXZCLEVBQTBCLENBQTFCLENBQXJCOztBQUNBLFlBQUlrVixjQUFjLENBQUN2Z0IsUUFBZixLQUE0QmlnQixnQkFBaEMsRUFBa0Q7QUFDOUNNLHdCQUFjLENBQUNELE1BQWYsSUFBeUIsS0FBS3ZYLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQkMsT0FBMUIsQ0FBa0NoQyxVQUFsQyxDQUE2Q3VnQixXQUF0RTtBQUNIOztBQUNEdGIsZUFBTyxDQUFDdVYsS0FBUixDQUFjQSxLQUFkO0FBQ0g7O0FBQ0QsV0FBSzFSLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JrRixTQUFoQixDQUEwQlcsUUFBMUIsQ0FBbUNDLE9BQW5DLENBQTJDQSxPQUEzQztBQUNIO0FBNUpMO0FBQUE7QUFBQSx1Q0F5RDhCNmQsWUF6RDlCLEVBeUQ0QztBQUNwQyxXQUFLLElBQUl4SyxDQUFDLEdBQUd3SyxZQUFZLENBQUNoYSxNQUFiLEdBQW9CLENBQWpDLEVBQW9Dd1AsQ0FBQyxJQUFJLENBQXpDLEVBQTRDQSxDQUFDLElBQUcsQ0FBaEQsRUFBbUQ7QUFDL0MsWUFBSSxjQUFjd0ssWUFBWSxDQUFDeEssQ0FBRCxDQUE5QixFQUFtQztBQUMvQixpQkFBT3dLLFlBQVksQ0FBQ3hLLENBQUQsQ0FBWixDQUFnQnlLLFFBQWhCLENBQXlCbmIsSUFBaEM7QUFDSDtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBaEVMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBLElBQU1rTixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFTelMsUUFBVCxFQUFtQjJnQixZQUFuQixFQUFpQ0MsV0FBakMsRUFBOEM7QUFDMUQsTUFBSUQsWUFBWSxLQUFLOWtCLFNBQXJCLEVBQWdDO0FBQzVCOGtCLGdCQUFZLEdBQUczZ0IsUUFBZjtBQUNIOztBQUNELDJMQUkyREEsUUFKM0QsdUVBS21EQSxRQUxuRCw0Q0FNd0I0Z0IsV0FOeEIsdUNBTWdFNWdCLFFBTmhFLGdDQU9VMmdCLFlBUFY7QUFTSCxDQWJEOztBQWVPLElBQUlFLFVBQVUscU1BUWZwTyxPQUFPLENBQUMsV0FBRCxDQVJRLG1CQVNmQSxPQUFPLENBQUMsa0JBQUQsRUFBcUIsY0FBckIsQ0FUUSxtQkFVZkEsT0FBTyxDQUFDLDhCQUFELEVBQWlDLHFCQUFqQyxDQVZRLG1CQVdmQSxPQUFPLENBQUMsbUJBQUQsRUFBc0IsZUFBdEIsQ0FYUSxtQkFZZkEsT0FBTyxDQUFDLFlBQUQsRUFBZSxRQUFmLENBWlEsbUJBYWZBLE9BQU8sQ0FBQyxlQUFELEVBQWtCLFdBQWxCLEVBQStCLElBQS9CLENBYlEsbUJBY2ZBLE9BQU8sQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEVBQTJCLElBQTNCLENBZFEsbUJBZWZBLE9BQU8sQ0FBQyxvQkFBRCxFQUF1QixVQUF2QixFQUFtQyxJQUFuQyxDQWZRLG1CQWdCZkEsT0FBTyxDQUFDLDZCQUFELEVBQWdDLG9CQUFoQyxFQUFzRCxJQUF0RCxDQWhCUSxtQkFpQmZBLE9BQU8sQ0FBQyxlQUFELEVBQWtCLE1BQWxCLEVBQTBCLElBQTFCLENBakJRLCs4Q0FBZDtBQStDUDs7Ozs7Ozs7OztBQVVPLElBQUlxTyxjQUFjLEdBQUcsQ0FDeEI7QUFDQSxXQUZ3QixFQUd4QjtBQUNBLGtCQUp3QixFQUt4Qiw4QkFMd0IsRUFNeEIsbUJBTndCLEVBT3hCLFlBUHdCLEVBUXhCLG1CQVJ3QixDQUFyQjtBQVdBLElBQU1DLGVBQWUsR0FBRyxDQUMzQixlQUQyQixFQUUzQixhQUYyQixFQUczQixvQkFIMkIsRUFJM0IsZUFKMkIsRUFLM0IsNkJBTDJCLENBQXhCO0FBUVAsSUFBTUMsc0JBQXNCLEdBQUcsQ0FBQyxlQUFELEVBQWtCLGFBQWxCLENBQS9CO0FBRU8sSUFBTTFaLGlCQUFpQixHQUFHLENBQUMsV0FBRCxFQUFjLGtCQUFkLEVBQWtDLHlCQUFsQyxFQUNDLG1CQURELEVBQ3NCLFlBRHRCLEVBQ29DLG1CQURwQyxDQUExQjtBQUdBLElBQU1HLGlCQUFpQixHQUFHLENBQUMsV0FBRCxFQUFjLGtCQUFkLEVBQWtDLHlCQUFsQyxFQUNDLG1CQURELEVBQ3NCLFlBRHRCLEVBQ29DLG1CQURwQyxFQUVDLGVBRkQsRUFFa0IsYUFGbEIsRUFFaUMsb0JBRmpDLEVBR0MsZUFIRCxFQUdrQiw2QkFIbEIsQ0FBMUI7O0lBS0R3WixXLEdBQ0YscUJBQVlsWSxJQUFaLEVBQWtCL0ksUUFBbEIsRUFBNEJtSCxRQUE1QixFQUFzQztBQUFBOztBQUNsQyxPQUFLNEIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBSy9JLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS21ILFFBQUwsR0FBZ0JBLFFBQVEsSUFBSSxFQUE1QjtBQUNBLE9BQUsrWixLQUFMLEdBQWEsSUFBYjtBQUNBLE9BQUt6USxNQUFMLEdBQWMsSUFBZDtBQUNILEM7O0FBR0UsU0FBU3pTLGFBQVQsQ0FBdUJnQyxRQUF2QixFQUFpQ21ILFFBQWpDLEVBQTJDO0FBQzlDLFNBQU87QUFBQyxnQkFBWWxLLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjOEMsUUFBZCxDQUFiO0FBQXNDbUgsWUFBUSxFQUFFbEssRUFBRSxDQUFDQyxVQUFILENBQWNpSyxRQUFRLElBQUksRUFBMUI7QUFBaEQsR0FBUDtBQUNIO0FBRUQ7Ozs7QUFHTyxJQUFNbUMsaUJBQWI7QUFBQTtBQUFBO0FBQ0ksNkJBQVlQLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLb1ksTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxVQUFMO0FBRUEsU0FBS0MsVUFBTDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7QUFSTDtBQUFBO0FBQUEsOEJBVWN0aEIsUUFWZCxFQVV3QnVoQixRQVZ4QixFQVVrQztBQUMxQixVQUFJLEVBQUV2aEIsUUFBUSxJQUFJLEtBQUtzaEIsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixhQUFLQSxRQUFMLENBQWN0aEIsUUFBZCxJQUEwQixFQUExQjtBQUNIOztBQUNELFdBQUtzaEIsUUFBTCxDQUFjdGhCLFFBQWQsRUFBd0JvTCxJQUF4QixDQUE2Qm1XLFFBQTdCO0FBQ0g7QUFmTDtBQUFBO0FBQUEscUNBaUJxQnZoQixRQWpCckIsRUFpQitCO0FBQ3ZCLGFBQU8sS0FBS3NoQixRQUFMLENBQWN0aEIsUUFBZCxDQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLGlDQXFCaUI7QUFBQTs7QUFDVCxVQUFJd2hCLFVBQVUsR0FBRyxJQUFqQjtBQUNBLE9BQUMsS0FBS3pZLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQitELElBQTVCLEVBQ0MsS0FBS3FKLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQnFDLFlBRDVCLEVBRUMsS0FBS2dMLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQmdDLFVBRjVCLEVBRXdDb1ksT0FGeEMsQ0FFZ0QsVUFBQTJMLFNBQVM7QUFBQSxlQUNyREEsU0FBUyxDQUFDMVAsU0FBVixDQUFvQixVQUFTMlAsT0FBVCxFQUFrQjtBQUNsQ0EsaUJBQU8sQ0FBQzVMLE9BQVIsQ0FBZ0IsVUFBVWtGLE1BQVYsRUFBa0I7QUFDOUIsZ0JBQUkyRyxTQUFTLEdBQUczRyxNQUFNLENBQUN4USxLQUF2Qjs7QUFDQSxnQkFBSXdRLE1BQU0sQ0FBQ2xiLE1BQVAsS0FBa0IsT0FBdEIsRUFBK0I7QUFDM0I7QUFDQSxrQkFBSTBHLElBQUksR0FBR2diLFVBQVUsQ0FBQzVhLE9BQVgsQ0FBbUIrYSxTQUFTLENBQUMzaEIsUUFBVixFQUFuQixFQUF5QzJoQixTQUFTLENBQUN4YSxRQUFWLEVBQXpDLEVBQStEd2EsU0FBUyxDQUFDeGEsUUFBekUsQ0FBWDtBQUNBcWEsd0JBQVUsQ0FBQ0ksYUFBWCxDQUF5QnBiLElBQXpCO0FBQ0gsYUFKRCxNQUlPLElBQUl3VSxNQUFNLENBQUNsYixNQUFQLEtBQWtCLFNBQXRCLEVBQWlDO0FBQ3BDO0FBQ0EwaEIsd0JBQVUsQ0FBQ0ssa0JBQVgsQ0FBOEJGLFNBQVMsQ0FBQzNoQixRQUF4QztBQUNIO0FBQ0osV0FWRDtBQVdILFNBWkQsRUFZRyxLQVpILEVBWVMsYUFaVCxDQURxRDtBQUFBLE9BRnpEO0FBaUJILEtBeENMLENBMENJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7O0FBdERKO0FBQUE7QUFBQSxpQ0EyRGlCd0csSUEzRGpCLEVBMkR1QjtBQUNmLFVBQUlBLElBQUksQ0FBQ3hHLFFBQUwsS0FBa0IsV0FBdEIsRUFBbUM7QUFDL0J3RyxZQUFJLENBQUNpSyxNQUFMLEdBQWMsS0FBSzFILElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JuQixVQUFoQixDQUEyQitELElBQTNCLEdBQWtDLENBQWxDLEVBQXFDeUgsUUFBbkQ7QUFDSCxPQUZELE1BRU8sSUFBSVgsSUFBSSxDQUFDeEcsUUFBTCxLQUFrQixZQUF0QixFQUFvQztBQUN2Q3dHLFlBQUksQ0FBQ2lLLE1BQUwsR0FBYyxLQUFLMUgsSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCa0MsS0FBekM7QUFDSCxPQUZNLE1BRUEsSUFBSTRJLElBQUksQ0FBQ3hHLFFBQUwsS0FBa0IsZUFBdEIsRUFBdUM7QUFDMUN3RyxZQUFJLENBQUNpSyxNQUFMLEdBQWMsS0FBSzFILElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQm1DLFFBQXpDO0FBQ0gsT0FGTSxNQUVBLElBQUkySSxJQUFJLENBQUN4RyxRQUFMLEtBQWtCLGFBQXRCLEVBQXFDO0FBQ3hDd0csWUFBSSxDQUFDaUssTUFBTCxHQUFjLEtBQUsxSCxJQUFMLENBQVVqTSxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJvQyxNQUF6QztBQUNILE9BRk0sTUFFQSxJQUFJMEksSUFBSSxDQUFDeEcsUUFBTCxLQUFrQixrQkFBdEIsRUFBMEM7QUFDN0N3RyxZQUFJLENBQUNpSyxNQUFMLEdBQWMsS0FBSzFILElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQjhCLFlBQXpDO0FBQ0gsT0FGTSxNQUVBLElBQUlnSixJQUFJLENBQUN4RyxRQUFMLEtBQWtCLG1CQUF0QixFQUEyQztBQUM5Q3dHLFlBQUksQ0FBQ2lLLE1BQUwsR0FBYyxLQUFLMUgsSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCcUMsWUFBM0IsR0FBMEMsQ0FBMUMsRUFBNkNvSixRQUEzRDtBQUVILE9BSE0sTUFHQSxJQUFJWCxJQUFJLENBQUN4RyxRQUFMLEtBQWtCLG9CQUF0QixFQUE0QztBQUMvQyxhQUFLOGhCLGVBQUwsQ0FBcUJ0YixJQUFyQixFQUEyQixLQUFLdUMsSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCZ0MsVUFBdEQ7QUFDSCxPQUZNLE1BRUEsSUFBSThJLElBQUksQ0FBQ3hHLFFBQUwsS0FBa0IsZUFBdEIsRUFBdUM7QUFDMUN3RyxZQUFJLENBQUNpSyxNQUFMLEdBQWMsS0FBSzFILElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JwQixVQUFoQixDQUEyQjJDLElBQXpDO0FBQ0gsT0FGTSxNQUVBLElBQUltSSxJQUFJLENBQUN4RyxRQUFMLEtBQWtCLDhCQUF0QixFQUFzRDtBQUN6RHdHLFlBQUksQ0FBQ2lLLE1BQUwsR0FBYyxLQUFLMUgsSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCNkMsUUFBekM7QUFDSCxPQUZNLE1BRUEsSUFBSWlJLElBQUksQ0FBQ3hHLFFBQUwsS0FBa0IsbUJBQXRCLEVBQTJDO0FBQzlDd0csWUFBSSxDQUFDaUssTUFBTCxHQUFjLEtBQUsxSCxJQUFMLENBQVVqTSxLQUFWLENBQWdCaUQsT0FBOUI7QUFDSCxPQUZNLE1BRUEsSUFBSXlHLElBQUksQ0FBQ3hHLFFBQUwsQ0FBY3FULFVBQWQsQ0FBeUIsR0FBekIsQ0FBSixFQUFtQztBQUN0QyxhQUFLeU8sZUFBTCxDQUFxQnRiLElBQXJCLEVBQTJCLEtBQUt1QyxJQUFMLENBQVVqTSxLQUFWLENBQWdCcEIsVUFBaEIsQ0FBMkJxQyxZQUF0RDtBQUNILE9BRk0sTUFFQSxJQUFJeUksSUFBSSxDQUFDeEcsUUFBTCxDQUFjcVQsVUFBZCxDQUF5QixHQUF6QixLQUFpQzdNLElBQUksQ0FBQ3hHLFFBQUwsQ0FBY3FULFVBQWQsQ0FBeUIsR0FBekIsQ0FBckMsRUFBb0U7QUFDdkUsYUFBS3lPLGVBQUwsQ0FBcUJ0YixJQUFyQixFQUEyQixLQUFLdUMsSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWhCLENBQTJCZ0MsVUFBdEQ7QUFDSCxPQUZNLE1BRUE7QUFDSCxhQUFLb2tCLGVBQUwsQ0FBcUJ0YixJQUFyQixFQUEyQixLQUFLdUMsSUFBTCxDQUFVak0sS0FBVixDQUFnQm5CLFVBQWhCLENBQTJCK0QsSUFBdEQ7QUFDSDtBQUNKO0FBeEZMO0FBQUE7QUFBQSxvQ0EwRm9COEcsSUExRnBCLEVBMEYwQnViLEtBMUYxQixFQTBGaUM7QUFDekJ2YixVQUFJLENBQUMwYSxLQUFMLEdBQWFhLEtBQWI7QUFDQSxVQUFJQyxVQUFVLEdBQUd4YixJQUFJLENBQUMwYSxLQUFMLEVBQWpCOztBQUNBLFdBQUssSUFBSWpMLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRytMLFVBQVUsQ0FBQ3ZiLE1BQTdCLEVBQXFDd1AsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJK0wsVUFBVSxDQUFDL0wsQ0FBRCxDQUFWLENBQWNqVyxRQUFkLE9BQTZCd0csSUFBSSxDQUFDeEcsUUFBdEMsRUFBZ0Q7QUFDNUN3RyxjQUFJLENBQUNpSyxNQUFMLEdBQWN1UixVQUFVLENBQUMvTCxDQUFELENBQVYsQ0FBYzlPLFFBQTVCO0FBQ0g7QUFDSjs7QUFDRCxVQUFJWCxJQUFJLENBQUNpSyxNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3RCLFlBQUk3SixPQUFPLEdBQUc1SSxhQUFhLENBQUN3SSxJQUFJLENBQUN4RyxRQUFOLENBQTNCO0FBQ0F3RyxZQUFJLENBQUNpSyxNQUFMLEdBQWM3SixPQUFPLENBQUNPLFFBQXRCO0FBQ0E0YSxhQUFLLENBQUMzVyxJQUFOLENBQVd4RSxPQUFYO0FBQ0g7QUFDSjtBQXZHTDtBQUFBO0FBQUEsaUNBeUdpQjtBQUNULFdBQUtBLE9BQUwsQ0FBYSxXQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLG1CQUFiO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLFlBQWI7QUFDQSxXQUFLQSxPQUFMLENBQWEsa0JBQWI7QUFDQSxXQUFLQSxPQUFMLENBQWEsOEJBQWI7QUFDSDtBQS9HTDtBQUFBO0FBQUEsNEJBaUhZNUcsUUFqSFosRUFpSHNCbUgsUUFqSHRCLEVBaUhnQ3dhLFNBakhoQyxFQWlIMkM7QUFDbkMsVUFBSTNoQixRQUFRLElBQUksS0FBS21oQixNQUFyQixFQUE2QjtBQUN6QjtBQUNBLFlBQUljLFlBQVksR0FBRyxLQUFLZCxNQUFMLENBQVluaEIsUUFBWixDQUFuQjtBQUNBaWlCLG9CQUFZLENBQUN4UixNQUFiLEdBQXNCa1IsU0FBdEI7QUFDQU0sb0JBQVksQ0FBQ3hSLE1BQWIsQ0FBb0J0SixRQUFRLElBQUksRUFBaEM7QUFDQSxlQUFPOGEsWUFBUDtBQUNILE9BTkQsTUFNTztBQUNIO0FBQ0EsWUFBSXJiLE9BQU8sR0FBRyxJQUFJcWEsV0FBSixDQUFnQixLQUFLbFksSUFBckIsRUFBMkIvSSxRQUEzQixDQUFkO0FBQ0EsYUFBS21oQixNQUFMLENBQVluaEIsUUFBWixJQUF3QjRHLE9BQXhCOztBQUNBLFlBQUkrYSxTQUFTLEtBQUs5bEIsU0FBbEIsRUFBNkI7QUFDekIsZUFBS3FtQixZQUFMLENBQWtCdGIsT0FBbEI7QUFDSCxTQUZELE1BRU87QUFDSEEsaUJBQU8sQ0FBQzZKLE1BQVIsR0FBaUJrUixTQUFqQjtBQUNIOztBQUNELGVBQU8vYSxPQUFQO0FBQ0g7QUFDSjtBQW5JTDtBQUFBO0FBQUEsOEJBcUljNUcsUUFySWQsRUFxSXdCbUgsUUFySXhCLEVBcUlrQztBQUMxQkEsY0FBUSxHQUFHQSxRQUFRLElBQUksRUFBdkI7QUFDQSxXQUFLZ2EsTUFBTCxDQUFZbmhCLFFBQVosRUFBc0J5USxNQUF0QixDQUE2QnRKLFFBQTdCO0FBQ0g7QUF4SUw7QUFBQTtBQUFBLDZCQTBJYW5ILFFBMUliLEVBMEl1QjtBQUNmLGFBQU8sS0FBS21oQixNQUFMLENBQVluaEIsUUFBWixFQUFzQnlRLE1BQXRCLEVBQVA7QUFDSDtBQTVJTDtBQUFBO0FBQUEsNEJBOElZelEsUUE5SVosRUE4SXNCO0FBQ2QsYUFBTyxLQUFLbWhCLE1BQUwsQ0FBWW5oQixRQUFaLENBQVA7QUFDSDtBQUVEOzs7Ozs7QUFsSko7QUFBQTtBQUFBLCtCQXVKZUEsUUF2SmYsRUF1SnlCO0FBQ2pCLFVBQUlnaEIsc0JBQXNCLENBQUN6WixPQUF2QixDQUErQnZILFFBQS9CLE1BQTZDLENBQUMsQ0FBbEQsRUFBcUQ7QUFDakQsWUFBSXdHLElBQUksR0FBRyxLQUFLcWIsa0JBQUwsQ0FBd0I3aEIsUUFBeEIsQ0FBWDtBQUNBd0csWUFBSSxDQUFDaUssTUFBTCxDQUFZLElBQVo7QUFDQSxlQUFPLElBQVA7QUFDSCxPQUpELE1BSU8sSUFBSSxLQUFLMFEsTUFBTCxDQUFZbmhCLFFBQVosRUFBc0JraEIsS0FBdEIsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDN0MsZUFBTyxLQUFQO0FBQ0gsT0FGTSxNQUVBO0FBQ0g7QUFDQSxZQUFJaUIsS0FBSyxHQUFHLEtBQUtoQixNQUFMLENBQVluaEIsUUFBWixFQUFzQmtoQixLQUF0QixDQUE0QmtCLE1BQTVCLENBQW1DLFVBQUFULFNBQVM7QUFBQSxpQkFBSUEsU0FBUyxDQUFDM2hCLFFBQVYsS0FBdUJBLFFBQTNCO0FBQUEsU0FBNUMsQ0FBWjtBQUNBLGVBQU9taUIsS0FBSyxJQUFJLEtBQWhCO0FBQ0g7QUFDSjtBQW5LTDtBQUFBO0FBQUEsdUNBcUt1Qm5pQixRQXJLdkIsRUFxS2lDO0FBQ3pCLFVBQUl3RyxJQUFJLEdBQUcsS0FBSzJhLE1BQUwsQ0FBWW5oQixRQUFaLENBQVg7QUFDQSxhQUFPLEtBQUttaEIsTUFBTCxDQUFZbmhCLFFBQVosQ0FBUDs7QUFDQSxVQUFJQSxRQUFRLElBQUksS0FBS3NoQixRQUFyQixFQUErQjtBQUMzQixhQUFLQSxRQUFMLENBQWN0aEIsUUFBZCxFQUF3QjhWLE9BQXhCLENBQWdDLFVBQUF5TCxRQUFRO0FBQUEsaUJBQUlBLFFBQVEsQ0FBQ3RSLE9BQVQsRUFBSjtBQUFBLFNBQXhDO0FBQ0g7O0FBQ0QsYUFBT3pKLElBQVA7QUFDSDtBQTVLTDtBQUFBO0FBQUEsa0NBOEtrQkEsSUE5S2xCLEVBOEt3QjtBQUNoQixVQUFJQSxJQUFJLENBQUN4RyxRQUFMLElBQWlCLEtBQUtzaEIsUUFBMUIsRUFBb0M7QUFDaEMsYUFBS0EsUUFBTCxDQUFjOWEsSUFBSSxDQUFDeEcsUUFBbkIsRUFBNkI4VixPQUE3QixDQUFxQyxVQUFBeUwsUUFBUTtBQUFBLGlCQUFJQSxRQUFRLENBQUN4UixPQUFULENBQWlCdkosSUFBakIsQ0FBSjtBQUFBLFNBQTdDO0FBQ0g7QUFDSjtBQWxMTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFBQTtBQUFPLElBQUk2YixXQUFXLHdvREFBZixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdPLElBQUk5aEIsMkJBQTJCLEdBQUc7QUFDckNDLFVBQVEsRUFBRSxVQUQyQjtBQUVyQ29FLE9BQUssRUFBRSxPQUY4QjtBQUdyQ0ssTUFBSSxFQUFFO0FBSCtCLENBQWxDO0FBTUEsU0FBUzJELCtCQUFULENBQXlDNUUsSUFBekMsRUFBK0NsSCxLQUEvQyxFQUFzRDtBQUN6RCxNQUFJd2xCLGdCQUFnQixHQUFHLElBQXZCO0FBQ0F4bEIsT0FBSyxDQUFDbUgsRUFBTixDQUFTekcsWUFBVCxDQUFzQjZHLE9BQXRCLENBQThCME4sU0FBOUIsQ0FBd0MsWUFBTTtBQUMxQyxRQUFJdVEsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDM0JwSCxrQkFBWSxDQUFDb0gsZ0JBQUQsQ0FBWjtBQUNIOztBQUNEQSxvQkFBZ0IsR0FBR3pPLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDL1csV0FBSyxDQUFDckIsYUFBTixDQUFvQjZILFNBQXBCLENBQThCOEYsSUFBOUIsQ0FBbUMsZ0NBQW5DLEVBQXFFbkMsR0FBckUsQ0FBMEUsVUFBQ2dQLENBQUQsRUFBSXNNLEtBQUosRUFBYztBQUNwRnZULGNBQU0sQ0FBQ3dULElBQVAsQ0FBWUMsY0FBWixDQUEyQkYsS0FBM0I7QUFDSCxPQUZEO0FBR0gsS0FKNEIsRUFJMUIsR0FKMEIsQ0FBN0I7QUFLSCxHQVREO0FBVUg7QUFFTSxTQUFTN2UsYUFBVCxDQUF1QnFGLElBQXZCLEVBQTZCO0FBQ2hDLDhGQUlFMEUscURBSkYseW9FQTRETTlELHVEQTVETixxSEFnRU1xVix5REFoRU4sb0lBcUVNMEQsbURBckVOLDRLQTZFTTdCLG1EQTdFTiwyR0FtRk1wTCx1REFuRk4sMkZBd0ZNNE0scURBeEZOO0FBNkZIO0FBQUEsQzs7Ozs7Ozs7Ozs7O0FDN0hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUVPLElBQUl2aEIsV0FBVyxHQUFHO0FBQ3JCQyxPQUFLLEVBQUUsT0FEYztBQUVyQmthLFFBQU0sRUFBRSxRQUZhO0FBR3JCMEgsVUFBUSxFQUFFLFVBSFc7QUFJckI3SCxRQUFNLEVBQUU7QUFKYSxDQUFsQjtBQU9QOzs7Ozs7Ozs7QUFRTyxTQUFTcFIsYUFBVCxDQUF1QlgsSUFBdkIsRUFBNkI7QUFDaEMsT0FBS0EsSUFBTCxHQUFZQSxJQUFaLENBRGdDLENBR2hDOztBQUNBLE9BQUt4RixJQUFMLEdBQVl3RixJQUFJLENBQUNqTSxLQUFMLENBQVdyQixhQUFYLENBQXlCOEgsSUFBckMsQ0FKZ0MsQ0FNaEM7QUFDQTs7QUFDQSxPQUFLcWYsT0FBTCxHQUFlLElBQUkvbEIsNERBQUosQ0FBd0IsU0FBeEIsQ0FBZixDQVJnQyxDQVVoQzs7QUFDQSxPQUFLZ21CLEtBQUwsR0FBYTtBQUNULGlCQUFhOVAsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSzRQLE9BQUwsQ0FBYUUsVUFBYixDQUF3QixXQUF4QixFQUFxQyxJQUFyQyxDQUFYLENBREo7QUFFVCxvQkFBZ0IvUCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLNFAsT0FBTCxDQUFhRSxVQUFiLENBQXdCLGNBQXhCLEVBQXdDLElBQXhDLENBQVg7QUFGUCxHQUFiO0FBSUEsT0FBS0MsY0FBTCxHQUFzQjtBQUNsQixpQkFBYSxHQURLO0FBRWxCLG9CQUFnQjtBQUZFLEdBQXRCO0FBS0EsT0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLE9BQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFFQSxPQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLE9BQUtDLGdCQUFMLEdBQXdCLENBQXhCLENBekJnQyxDQTJCaEM7O0FBQ0EsT0FBS0MsZUFBTCxHQUF1QixFQUF2QjtBQUVBLE9BQUtDLG1CQUFMLEdBOUJnQyxDQWdDaEM7O0FBQ0EsT0FBS0MsV0FBTDtBQUNIOztBQUVEN1osYUFBYSxDQUFDUixTQUFkLENBQXdCc2EsT0FBeEIsR0FBa0MsVUFBVUMsS0FBVixFQUFpQjtBQUMvQyxNQUFJLEtBQUtiLE9BQUwsQ0FBYWptQixHQUFiLENBQWlCLElBQWpCLENBQUosRUFBNEI7QUFDeEIsUUFBSSttQixLQUFLLEdBQUcsS0FBS2QsT0FBTCxDQUFhaG1CLEdBQWIsQ0FBaUIsSUFBakIsQ0FBWjs7QUFDQSxRQUFJOG1CLEtBQUssS0FBS0QsS0FBZCxFQUFxQjtBQUNqQixXQUFLbGlCLFFBQUwsQ0FBYyxRQUFkLEVBQXdCLFVBQXhCLEVBQW9DbWlCLEtBQUssR0FBRyxHQUFSLEdBQWNELEtBQWxEO0FBQ0EsV0FBS2IsT0FBTCxDQUFhZSxHQUFiLENBQWlCLElBQWpCLEVBQXVCRixLQUF2QjtBQUNIO0FBQ0osR0FORCxNQU1PO0FBQ0gsU0FBS2IsT0FBTCxDQUFhZSxHQUFiLENBQWlCLElBQWpCLEVBQXVCRixLQUF2QjtBQUNIO0FBQ0osQ0FWRDs7QUFZQS9aLGFBQWEsQ0FBQ1IsU0FBZCxDQUF3QnFhLFdBQXhCLEdBQXNDLFlBQVk7QUFDOUMsTUFBSSxLQUFLWCxPQUFMLENBQWFqbUIsR0FBYixDQUFpQixtQkFBakIsQ0FBSixFQUEyQztBQUN2QyxRQUFJdUosS0FBSSxHQUFHNk0sSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSzRQLE9BQUwsQ0FBYWhtQixHQUFiLENBQWlCLG1CQUFqQixDQUFYLENBQVg7O0FBQ0EsU0FBS2duQixnQkFBTCxDQUFzQjFkLEtBQXRCLEVBQTRCLEtBQUszQyxJQUFMLENBQVVzZ0IsZUFBdEMsRUFBdUQsWUFBdkQsRUFDc0IsbUJBRHRCLEVBQzJDLEtBQUtDLFdBRGhEO0FBRUg7O0FBQ0QsT0FBSyxJQUFJOWpCLFFBQVQsSUFBcUIsS0FBSytJLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JnZ0IsUUFBckMsRUFBK0M7QUFDM0MsUUFBSSxLQUFLOEYsT0FBTCxDQUFham1CLEdBQWIsQ0FBaUIsZ0JBQWdCcUQsUUFBakMsQ0FBSixFQUFnRDtBQUM1QyxVQUFJa0csTUFBSSxHQUFHNk0sSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSzRQLE9BQUwsQ0FBYWhtQixHQUFiLENBQWlCLGdCQUFnQm9ELFFBQWpDLENBQVgsQ0FBWDs7QUFDQSxXQUFLNGpCLGdCQUFMLENBQXNCMWQsTUFBdEIsRUFBNEIsS0FBSzNDLElBQUwsQ0FBVXdnQixTQUF0QyxFQUNzQixVQUFVL2pCLFFBRGhDLEVBRXNCLGdCQUFnQkEsUUFGdEMsRUFFZ0QsS0FBSzhqQixXQUZyRDtBQUdIO0FBQ0o7O0FBQ0QsTUFBSS9mLE1BQU0sR0FBRyxJQUFiO0FBQ0FpZ0IsUUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS3BCLEtBQWpCLEVBQXdCL00sT0FBeEIsQ0FBZ0MsVUFBVW9PLEtBQVYsRUFBaUI7QUFDN0MsS0FBQyxTQUFTQyxhQUFULENBQXVCQyxRQUF2QixFQUFpQztBQUM5QixVQUFJQSxRQUFRLENBQUN2SSxPQUFiLEVBQXNCO0FBQ2xCLFlBQUk5WCxNQUFNLENBQUM4ZSxLQUFQLENBQWFxQixLQUFiLEVBQW9CemQsTUFBeEIsRUFBZ0M7QUFDNUIsY0FBSVAsSUFBSSxHQUFHNk0sSUFBSSxDQUFDQyxLQUFMLENBQVdqUCxNQUFNLENBQUM4ZSxLQUFQLENBQWFxQixLQUFiLEVBQW9CcEcsR0FBcEIsRUFBWCxDQUFYO0FBQ0EsY0FBSXJnQixHQUFHLEdBQUdzRyxNQUFNLENBQUNSLElBQVAsQ0FBWTJnQixLQUFaLENBQVY7O0FBQ0FuZ0IsZ0JBQU0sQ0FBQ3NnQixVQUFQLENBQWtCbmUsSUFBbEIsRUFBd0J6SSxHQUF4QixFQUE2QnltQixLQUE3QixFQUFvQyxJQUFwQyxFQUEwQ0MsYUFBMUM7QUFDSDtBQUNKO0FBQ0osS0FSRCxFQVFHO0FBQUMsaUJBQVc7QUFBWixLQVJIO0FBU0gsR0FWRDtBQVdILENBMUJEOztBQTRCQXphLGFBQWEsQ0FBQ1IsU0FBZCxDQUF3Qm9hLG1CQUF4QixHQUE4QyxZQUFZO0FBQ3RELE1BQUl2ZixNQUFNLEdBQUcsSUFBYjtBQUFBLE1BQW1CakgsS0FBSyxHQUFHLEtBQUtpTSxJQUFMLENBQVVqTSxLQUFyQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlSCxDQWpCRDtBQW1CQTs7Ozs7Ozs7O0FBT0E0TSxhQUFhLENBQUNSLFNBQWQsQ0FBd0JvYixxQkFBeEIsR0FBZ0QsWUFBWTtBQUN4RCxNQUFJdmdCLE1BQU0sR0FBRyxJQUFiO0FBQUEsTUFBbUJqSCxLQUFLLEdBQUcsS0FBS2lNLElBQUwsQ0FBVWpNLEtBQXJDO0FBQ0FBLE9BQUssQ0FBQ3BCLFVBQU4sQ0FBaUJrZSxPQUFqQixDQUF5QjdILFNBQXpCLENBQW1DLFVBQVU3RSxDQUFWLEVBQWE7QUFDNUNuSixVQUFNLENBQUNwQyxjQUFQO0FBQ0gsR0FGRDtBQUdILENBTEQ7O0FBT0ErSCxhQUFhLENBQUNSLFNBQWQsQ0FBd0I0YSxXQUF4QixHQUFzQyxJQUF0QztBQUNBcGEsYUFBYSxDQUFDUixTQUFkLENBQXdCcWIsVUFBeEIsR0FBcUMsSUFBckM7O0FBRUE3YSxhQUFhLENBQUNSLFNBQWQsQ0FBd0JzYixnQkFBeEIsR0FBMkMsWUFBWTtBQUNuRCxNQUFJOW9CLFVBQVUsR0FBRyxLQUFLcU4sSUFBTCxDQUFVak0sS0FBVixDQUFnQnBCLFVBQWpDO0FBQ0EsTUFBSStvQixDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFSO0FBQ0EsTUFBSUMsT0FBTyxHQUFHOWUsSUFBSSxDQUFDK2UsS0FBTCxDQUFXSCxDQUFDLENBQUNJLE9BQUYsS0FBYyxJQUF6QixDQUFkO0FBQ0EzZSxNQUFJLEdBQUc7QUFDSCxxQkFBaUJ4SyxVQUFVLENBQUNtSSxhQUFYLEVBRGQ7QUFFSCxnQkFBWW5JLFVBQVUsQ0FBQ29wQixRQUFYLEVBRlQ7QUFHSCxpQkFBYXBwQixVQUFVLENBQUNxcEIsU0FBWCxFQUhWO0FBSUgsa0JBQWNycEIsVUFBVSxDQUFDc3BCLFVBQVgsRUFKWDtBQUtILGVBQVd0cEIsVUFBVSxDQUFDMEMsT0FBWCxFQUxSO0FBTUgsaUJBQWF1bUI7QUFOVixHQUFQOztBQVFBLE1BQUksS0FBSzViLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0J5QixRQUFoQixDQUF5QjBtQixNQUF6QixNQUFxQyxJQUF6QyxFQUErQztBQUMzQy9lLFFBQUksQ0FBQyxRQUFELENBQUosR0FBaUIsS0FBSzZDLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0J5QixRQUFoQixDQUF5QjBtQixNQUF6QixFQUFqQjtBQUNIOztBQUNELFNBQU8vZSxJQUFQO0FBQ0gsQ0FoQkQ7O0FBa0JBd0QsYUFBYSxDQUFDUixTQUFkLENBQXdCZ2MsU0FBeEIsR0FBb0MsVUFBVXBsQixNQUFWLEVBQWtCcWxCLFlBQWxCLEVBQWdDO0FBQ2hFO0FBQ0EsT0FBS3BjLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JnRCxNQUFoQixDQUF1QmlFLE1BQXZCLENBQThCakUsTUFBOUI7O0FBQ0EsTUFBSXFsQixZQUFZLEtBQUt0cEIsU0FBckIsRUFBZ0M7QUFDNUIsU0FBS2tOLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0JnRCxNQUFoQixDQUF1QnFsQixZQUF2QixDQUFvQ0EsWUFBcEM7QUFDSCxHQUZELE1BRU87QUFDSCxTQUFLcGMsSUFBTCxDQUFVak0sS0FBVixDQUFnQmdELE1BQWhCLENBQXVCcWxCLFlBQXZCLENBQW9DLEVBQXBDO0FBQ0g7QUFDSixDQVJEOztBQVVBemIsYUFBYSxDQUFDUixTQUFkLENBQXdCa2MsZUFBeEIsR0FBMEMsVUFBVWhCLFFBQVYsRUFBb0I7QUFDMUQsTUFBSUEsUUFBUSxDQUFDdkksT0FBYixFQUFzQjtBQUNsQixTQUFLcUosU0FBTCxDQUFlLE9BQWY7QUFDQSxTQUFLMUIsT0FBTCxDQUFhWSxRQUFRLENBQUNpQixFQUF0QjtBQUNILEdBSEQsTUFHTztBQUNIbmdCLFdBQU8sQ0FBQ3VWLEtBQVIsQ0FBYzJKLFFBQWQ7QUFDQSxTQUFLYyxTQUFMLENBQWUsT0FBZixFQUF3QmQsUUFBUSxDQUFDeGhCLE9BQWpDO0FBQ0g7QUFDSixDQVJEOztBQVNBOEcsYUFBYSxDQUFDUixTQUFkLENBQXdCb2MsY0FBeEIsR0FBeUMsVUFBVTdLLEtBQVYsRUFBaUI4SyxVQUFqQixFQUE2QjtBQUNsRSxPQUFLTCxTQUFMLENBQWUsY0FBZixFQUErQiwrQkFBK0JLLFVBQTlEO0FBQ0gsQ0FGRDs7QUFJQTdiLGFBQWEsQ0FBQ1IsU0FBZCxDQUF3QjNILFFBQXhCLEdBQW1DLFVBQVVpa0IsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEIzWCxJQUE5QixFQUFvQztBQUNuRSxNQUFJLEtBQUsvRSxJQUFMLENBQVVqTSxLQUFWLENBQWdCbUgsRUFBaEIsQ0FBbUJGLE1BQW5CLENBQTBCMkUsbUJBQTFCLENBQThDLFdBQTlDLENBQUosRUFBZ0U7QUFDNUQsUUFBSXhDLElBQUksR0FBRyxLQUFLc2UsZ0JBQUwsRUFBWDtBQUNBdGUsUUFBSSxDQUFDLE9BQUQsQ0FBSixHQUFnQnNmLFVBQWhCO0FBQ0F0ZixRQUFJLENBQUMsUUFBRCxDQUFKLEdBQWlCdWYsTUFBakI7QUFDQXZmLFFBQUksQ0FBQyxNQUFELENBQUosR0FBZ0I0SCxJQUFJLEtBQUtqUyxTQUFWLEdBQXVCLEVBQXZCLEdBQTRCaVMsSUFBM0M7QUFDQSxTQUFLb1gsU0FBTCxDQUFlLFNBQWYsRUFMNEQsQ0FNNUQ7O0FBQ0EsU0FBS2IsVUFBTCxDQUFnQm5lLElBQWhCLEVBQXNCLEtBQUszQyxJQUFMLENBQVVtaUIsU0FBaEMsRUFBMkMsV0FBM0MsRUFBd0QsQ0FBeEQsRUFBMkQsWUFBWSxDQUN0RSxDQUREO0FBRUgsR0FURCxNQVNPO0FBQ0gsU0FBS1IsU0FBTCxDQUFlLFNBQWYsRUFBMEIsc0NBQTFCO0FBQ0g7QUFDSixDQWJEOztBQWVBeGIsYUFBYSxDQUFDUixTQUFkLENBQXdCeWMsWUFBeEIsR0FBdUMsVUFBVXpCLEtBQVYsRUFBaUJoZSxJQUFqQixFQUF1QjtBQUMxRDtBQUNBLE1BQUlPLE1BQU0sR0FBRyxLQUFLb2MsS0FBTCxDQUFXcUIsS0FBWCxFQUFrQnpkLE1BQS9CO0FBQ0EsTUFBSTZWLEdBQUcsR0FBRyxLQUFLeUcsY0FBTCxDQUFvQm1CLEtBQXBCLENBQVY7O0FBQ0EsTUFBSXpkLE1BQU0sR0FBRzZWLEdBQWIsRUFBa0I7QUFDZCxTQUFLdUcsS0FBTCxDQUFXcUIsS0FBWCxJQUFvQixLQUFLckIsS0FBTCxDQUFXcUIsS0FBWCxFQUFrQjdZLEtBQWxCLENBQXdCNUUsTUFBTSxHQUFHNlYsR0FBakMsRUFBc0NBLEdBQXRDLENBQXBCO0FBQ0gsR0FOeUQsQ0FPMUQ7OztBQUNBLE1BQUkvZixHQUFHLEdBQUd3VyxJQUFJLENBQUNrTCxTQUFMLENBQWUvWCxJQUFmLENBQVY7QUFDQSxNQUFJMGYsS0FBSyxHQUFHLEtBQUsvQyxLQUFMLENBQVdxQixLQUFYLEVBQWtCM2MsT0FBbEIsQ0FBMEJoTCxHQUExQixDQUFaOztBQUNBLE1BQUlxcEIsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLFNBQUsvQyxLQUFMLENBQVdxQixLQUFYLEVBQWtCOVksSUFBbEIsQ0FBdUI3TyxHQUF2QjtBQUNBLFNBQUtxbUIsT0FBTCxDQUFhZSxHQUFiLENBQWlCTyxLQUFqQixFQUF3Qm5SLElBQUksQ0FBQ2tMLFNBQUwsQ0FBZSxLQUFLNEUsS0FBTCxDQUFXcUIsS0FBWCxDQUFmLENBQXhCO0FBQ0g7QUFDSixDQWREOztBQWVBeGEsYUFBYSxDQUFDUixTQUFkLENBQXdCMmMsWUFBeEIsR0FBdUMsVUFBVTNCLEtBQVYsRUFBaUJoZSxJQUFqQixFQUF1QjtBQUMxRCxNQUFJM0osR0FBRyxHQUFHd1csSUFBSSxDQUFDa0wsU0FBTCxDQUFlL1gsSUFBZixDQUFWO0FBQ0EsTUFBSTBmLEtBQUssR0FBRyxLQUFLL0MsS0FBTCxDQUFXcUIsS0FBWCxFQUFrQjNjLE9BQWxCLENBQTBCaEwsR0FBMUIsQ0FBWjs7QUFDQSxNQUFJcXBCLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osU0FBSy9DLEtBQUwsQ0FBV3FCLEtBQVgsRUFBa0I0QixNQUFsQixDQUF5QkYsS0FBekI7QUFDQSxTQUFLaEQsT0FBTCxDQUFhZSxHQUFiLENBQWlCTyxLQUFqQixFQUF3Qm5SLElBQUksQ0FBQ2tMLFNBQUwsQ0FBZSxLQUFLNEUsS0FBTCxDQUFXcUIsS0FBWCxDQUFmLENBQXhCO0FBQ0g7QUFDSixDQVBEOztBQVFBeGEsYUFBYSxDQUFDUixTQUFkLENBQXdCNmMsVUFBeEIsR0FBcUMsVUFBVTdCLEtBQVYsRUFBaUJoZSxJQUFqQixFQUF1QjtBQUN4RCxTQUFPNk0sSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSzZQLEtBQUwsQ0FBV3FCLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBWCxDQUFQO0FBQ0gsQ0FGRDs7QUFJQXhhLGFBQWEsQ0FBQ1IsU0FBZCxDQUF3Qm1iLFVBQXhCLEdBQXFDLFVBQVVuZSxJQUFWLEVBQWdCekksR0FBaEIsRUFBcUJ5bUIsS0FBckIsRUFBNEI4QixLQUE1QixFQUFtQ3pFLFFBQW5DLEVBQTZDO0FBQzlFO0FBQ0EsTUFBSXhkLE1BQU0sR0FBRyxJQUFiO0FBQ0FBLFFBQU0sQ0FBQ21oQixTQUFQLENBQWlCLFFBQWpCO0FBQ0FyUixZQUFVLENBQUMsWUFBWTtBQUNuQjtBQUNBOVAsVUFBTSxDQUFDNGhCLFlBQVAsQ0FBb0J6QixLQUFwQixFQUEyQmhlLElBQTNCOztBQUNBdkMsS0FBQyxDQUFDc2lCLElBQUYsQ0FBT3hvQixHQUFQLEVBQVl5SSxJQUFaLEVBQ0tnZ0IsSUFETCxDQUNVLFVBQVU5QixRQUFWLEVBQW9CO0FBQ3RCcmdCLFlBQU0sQ0FBQzhoQixZQUFQLENBQW9CM0IsS0FBcEIsRUFBMkJoZSxJQUEzQjs7QUFDQSxVQUFJa2UsUUFBUSxDQUFDdkksT0FBYixFQUFzQjtBQUNsQjlYLGNBQU0sQ0FBQ21oQixTQUFQLENBQWlCLE9BQWpCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hoZ0IsZUFBTyxDQUFDdVYsS0FBUixDQUFjMkosUUFBZDtBQUNBcmdCLGNBQU0sQ0FBQ21oQixTQUFQLENBQWlCLE9BQWpCLEVBQTBCZCxRQUFRLENBQUN4aEIsT0FBbkM7QUFDSDs7QUFDRDJlLGNBQVEsQ0FBQzZDLFFBQUQsQ0FBUjs7QUFDQSxVQUFJQSxRQUFRLENBQUN2SSxPQUFiLEVBQXNCO0FBQ2xCOVgsY0FBTSxDQUFDeWYsT0FBUCxDQUFlWSxRQUFRLENBQUNpQixFQUF4QjtBQUNIO0FBQ0osS0FiTCxFQWNJO0FBZEosS0FlS2MsSUFmTCxDQWVVLFVBQVUxTCxLQUFWLEVBQWlCOEssVUFBakIsRUFBNkI7QUFDL0J4aEIsWUFBTSxDQUFDdWhCLGNBQVAsQ0FBc0I3SyxLQUF0QixFQUE2QjhLLFVBQTdCOztBQUNBeGhCLFlBQU0sQ0FBQ3NnQixVQUFQLENBQWtCbmUsSUFBbEIsRUFBd0J6SSxHQUF4QixFQUE2QnltQixLQUE3QixFQUFvQzhCLEtBQUssR0FBR2ppQixNQUFNLENBQUN3Z0IsVUFBbkQsRUFBK0RoRCxRQUEvRDtBQUNILEtBbEJMO0FBbUJILEdBdEJTLEVBc0JQeUUsS0F0Qk8sQ0FBVjtBQXVCSCxDQTNCRDs7QUE4QkF0YyxhQUFhLENBQUNSLFNBQWQsQ0FBd0J1VCxXQUF4QixHQUFzQyxVQUFVWixPQUFWLEVBQW1CO0FBQ3JELE1BQUkvZSxLQUFLLEdBQUcsS0FBS2lNLElBQUwsQ0FBVWpNLEtBQXRCO0FBQ0EsTUFBSXlrQixRQUFRLEdBQUd6a0IsS0FBSyxDQUFDeUIsUUFBTixDQUFlNm5CLGlCQUE5QjtBQUNBLE1BQUlDLFdBQVcsR0FBR3ZwQixLQUFLLENBQUN5QixRQUFOLENBQWU4bkIsV0FBakM7QUFDQSxNQUFJQyxlQUFlLEdBQUd4cEIsS0FBSyxDQUFDcEIsVUFBTixDQUFpQjZxQixNQUFqQixFQUF0QjtBQUNBLE1BQUl4aUIsTUFBTSxHQUFHLElBQWI7O0FBQ0EsTUFBSWpILEtBQUssQ0FBQ21ILEVBQU4sQ0FBU0YsTUFBVCxDQUFnQjJFLG1CQUFoQixDQUFvQyxjQUFwQyxDQUFKLEVBQXlEO0FBQ3JELFFBQUl4QyxJQUFJLEdBQUcsS0FBS3NlLGdCQUFMLEVBQVg7QUFDQXRlLFFBQUksQ0FBQyxNQUFELENBQUosR0FBZXBKLEtBQUssQ0FBQ2dnQixRQUFOLENBQWUwSixRQUE5QjtBQUNBdGdCLFFBQUksQ0FBQyxRQUFELENBQUosR0FBaUIyVixPQUFqQjtBQUNBM1YsUUFBSSxDQUFDLGtCQUFELENBQUosR0FBMkJvZ0IsZUFBM0I7QUFDQXBnQixRQUFJLENBQUMsY0FBRCxDQUFKLEdBQXVCbWdCLFdBQXZCO0FBQ0EsU0FBS3RkLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUI0UixNQUFyQixDQUE0QitRLGdCQUE1QixDQUE2QyxVQUFVQyxPQUFWLEVBQW1CQyxHQUFuQixFQUF3QjtBQUNqRXpnQixVQUFJLENBQUMsT0FBRCxDQUFKLEdBQWdCd2dCLE9BQWhCOztBQUNBLFVBQUlDLEdBQUcsQ0FBQ3ZFLE1BQVIsRUFBZ0I7QUFDWnVFLFdBQUcsQ0FBQ3ZFLE1BQUo7QUFDSDs7QUFDRHJlLFlBQU0sQ0FBQ3NnQixVQUFQLENBQWtCbmUsSUFBbEIsRUFBd0JuQyxNQUFNLENBQUNSLElBQVAsQ0FBWXFqQixZQUFwQyxFQUFrRCxjQUFsRCxFQUFrRSxDQUFsRSxFQUNrQixVQUFVeEMsUUFBVixFQUFvQjtBQUNoQixZQUFJQSxRQUFRLENBQUN2SSxPQUFULElBQW9CLENBQUN1SSxRQUFRLENBQUN5QyxTQUFsQyxFQUE2QztBQUN6QzlpQixnQkFBTSxDQUFDbWhCLFNBQVAsQ0FBaUIsVUFBakIsRUFBNkJkLFFBQVEsQ0FBQ3hoQixPQUF0QztBQUNIOztBQUNELFlBQUlpWixPQUFPLElBQUkwRixRQUFmLEVBQXlCO0FBQ3JCQSxrQkFBUSxDQUFDcmIsSUFBRCxDQUFSO0FBQ0g7QUFDSixPQVJuQjtBQVNILEtBZEQ7QUFlSDtBQUNKLENBNUJEO0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0F3RCxhQUFhLENBQUNSLFNBQWQsQ0FBd0J2SCxjQUF4QixHQUF5QyxZQUFZO0FBQ2pELE1BQUk3RSxLQUFLLEdBQUcsS0FBS2lNLElBQUwsQ0FBVWpNLEtBQXRCOztBQUNBLE1BQUlBLEtBQUssQ0FBQ21ILEVBQU4sQ0FBU0YsTUFBVCxDQUFnQjJFLG1CQUFoQixDQUFvQyxpQkFBcEMsS0FDQTVMLEtBQUssQ0FBQ3lCLFFBQU4sQ0FBZXVvQixXQUFmLEVBREosRUFDa0M7QUFDOUIsUUFBSTVnQixJQUFJLEdBQUcsS0FBS3NlLGdCQUFMLEVBQVg7QUFDQXRlLFFBQUksQ0FBQyxjQUFELENBQUosR0FBdUJwSixLQUFLLENBQUNwQixVQUFOLENBQWlCcXJCLFlBQWpCLEVBQXZCO0FBQ0E3Z0IsUUFBSSxDQUFDLFNBQUQsQ0FBSixHQUFrQnBKLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJzckIsT0FBakIsRUFBbEI7QUFDQTlnQixRQUFJLENBQUMsU0FBRCxDQUFKLEdBQWtCcEosS0FBSyxDQUFDcEIsVUFBTixDQUFpQnVyQixZQUFqQixFQUFsQjtBQUNBL2dCLFFBQUksQ0FBQyxZQUFELENBQUosR0FBcUJwSixLQUFLLENBQUNwQixVQUFOLENBQWlCd3JCLFVBQWpCLEVBQXJCO0FBQ0FoaEIsUUFBSSxDQUFDLFFBQUQsQ0FBSixHQUFpQnBKLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUI2cUIsTUFBakIsRUFBakI7QUFDQXJnQixRQUFJLENBQUMsMEJBQUQsQ0FBSixHQUFtQ3BKLEtBQUssQ0FBQ3BCLFVBQU4sQ0FBaUJ5ckIsd0JBQWpCLEVBQW5DO0FBQ0FqaEIsUUFBSSxDQUFDLGlCQUFELENBQUosR0FBMEJwSixLQUFLLENBQUNwQixVQUFOLENBQWlCMHJCLGVBQWpCLEVBQTFCO0FBQ0FsaEIsUUFBSSxDQUFDLE1BQUQsQ0FBSixHQUFlcEosS0FBSyxDQUFDcEIsVUFBTixDQUFpQnlCLElBQWpCLEVBQWYsQ0FUOEIsQ0FVOUI7O0FBQ0ErSSxRQUFJLENBQUMsU0FBRCxDQUFKLEdBQWtCcEosS0FBSyxDQUFDcEIsVUFBTixDQUFpQmtlLE9BQWpCLEdBQTJCckcsSUFBM0IsQ0FBZ0MsR0FBaEMsQ0FBbEI7QUFDQXJOLFFBQUksQ0FBQyxPQUFELENBQUosR0FBZ0JwSixLQUFLLENBQUNwQixVQUFOLENBQWlCeUssS0FBakIsR0FBeUJvTixJQUF6QixDQUE4QixHQUE5QixDQUFoQjs7QUFFQSxTQUFLcVEsZ0JBQUwsQ0FBc0IxZCxJQUF0QixFQUE0QixLQUFLM0MsSUFBTCxDQUFVc2dCLGVBQXRDLEVBQXVELFlBQXZELEVBQ3NCLG1CQUR0QixFQUMyQyxLQUFLQyxXQURoRDtBQUVILEdBakJELE1BaUJPO0FBQ0gsU0FBS29CLFNBQUwsQ0FBZSxTQUFmLEVBQTBCLDRDQUExQjtBQUNIO0FBQ0osQ0F0QkQ7QUF3QkE7Ozs7Ozs7Ozs7Ozs7O0FBWUF4YixhQUFhLENBQUNSLFNBQWQsQ0FBd0IwYSxnQkFBeEIsR0FBMkMsVUFBVTFkLElBQVYsRUFBZ0J6SSxHQUFoQixFQUFxQnVDLFFBQXJCLEVBQStCa2tCLEtBQS9CLEVBQXNDOEIsS0FBdEMsRUFBNkM7QUFDcEYsTUFBSWppQixNQUFNLEdBQUcsSUFBYjtBQUNBbVgsY0FBWSxDQUFDLEtBQUtnSSxNQUFMLENBQVlsakIsUUFBWixDQUFELENBQVo7QUFDQSxPQUFLa2pCLE1BQUwsQ0FBWWxqQixRQUFaLElBQXdCNlQsVUFBVSxDQUFDLFlBQVk7QUFDM0M7QUFDQTlQLFVBQU0sQ0FBQzZlLE9BQVAsQ0FBZWUsR0FBZixDQUFtQk8sS0FBbkIsRUFBMEJuUixJQUFJLENBQUNrTCxTQUFMLENBQWUvWCxJQUFmLENBQTFCO0FBQ0EsUUFBSW1oQixJQUFJLEdBQUd0akIsTUFBTSxDQUFDNmUsT0FBUCxDQUFlaUMsT0FBZixDQUF1QlgsS0FBdkIsQ0FBWCxDQUgyQyxDQUkzQzs7QUFDQW5nQixVQUFNLENBQUNtaEIsU0FBUCxDQUFpQixRQUFqQjtBQUNBdmhCLEtBQUMsQ0FBQ3NpQixJQUFGLENBQU94b0IsR0FBUCxFQUFZeUksSUFBWixFQUNLZ2dCLElBREwsQ0FDVSxVQUFVOUIsUUFBVixFQUFvQjtBQUN0QnJnQixZQUFNLENBQUNxaEIsZUFBUCxDQUF1QmhCLFFBQXZCLEVBRHNCLENBRXRCOztBQUNBLFVBQUlrRCxVQUFVLEdBQUd2akIsTUFBTSxDQUFDNmUsT0FBUCxDQUFlaUMsT0FBZixDQUF1QlgsS0FBdkIsQ0FBakI7O0FBQ0EsVUFBSW1ELElBQUksSUFBSUMsVUFBWixFQUF3QjtBQUNwQnZqQixjQUFNLENBQUM2ZSxPQUFQLENBQWVSLE1BQWYsQ0FBc0I4QixLQUF0QjtBQUNIO0FBQ0osS0FSTCxFQVNLaUMsSUFUTCxDQVNVLFVBQVUxTCxLQUFWLEVBQWlCOEssVUFBakIsRUFBNkI7QUFDL0J4aEIsWUFBTSxDQUFDdWhCLGNBQVAsQ0FBc0I3SyxLQUF0QixFQUE2QjhLLFVBQTdCLEVBRCtCLENBRS9COztBQUNBLFVBQUkrQixVQUFVLEdBQUd2akIsTUFBTSxDQUFDNmUsT0FBUCxDQUFlaUMsT0FBZixDQUF1QlgsS0FBdkIsQ0FBakI7O0FBQ0EsVUFBSW1ELElBQUksSUFBSUMsVUFBWixFQUF3QjtBQUNwQnZqQixjQUFNLENBQUM2ZixnQkFBUCxDQUF3QjFkLElBQXhCLEVBQThCekksR0FBOUIsRUFBbUN1QyxRQUFuQyxFQUE2Q2trQixLQUE3QyxFQUN3QjhCLEtBQUssR0FBR2ppQixNQUFNLENBQUN3Z0IsVUFEdkM7QUFFSDtBQUNKLEtBakJMO0FBa0JILEdBeEJpQyxFQXdCL0J5QixLQXhCK0IsQ0FBbEM7QUF5QkgsQ0E1QkQ7O0FBOEJBdGMsYUFBYSxDQUFDUixTQUFkLENBQXdCNlQsUUFBeEIsR0FBbUMsWUFBWTtBQUMzQyxNQUFJamdCLEtBQUssR0FBRyxLQUFLaU0sSUFBTCxDQUFVak0sS0FBdEI7O0FBQ0EsTUFBSUEsS0FBSyxDQUFDbUgsRUFBTixDQUFTRixNQUFULENBQWdCMkUsbUJBQWhCLENBQW9DLFdBQXBDLEtBQ0E1TCxLQUFLLENBQUN5QixRQUFOLENBQWV1b0IsV0FBZixFQURKLEVBQ2tDO0FBQzlCLFFBQUk1Z0IsSUFBSSxHQUFHLEtBQUtzZSxnQkFBTCxFQUFYO0FBQ0EsUUFBSXhrQixRQUFRLEdBQUdsRCxLQUFLLENBQUN5QixRQUFOLENBQWV5QixRQUFmLEVBQWY7QUFDQWtHLFFBQUksQ0FBQyxVQUFELENBQUosR0FBbUJsRyxRQUFuQjtBQUNBa0csUUFBSSxDQUFDLE1BQUQsQ0FBSixHQUFlcEosS0FBSyxDQUFDZ2dCLFFBQU4sQ0FBZTljLFFBQWYsR0FBZjs7QUFFQSxTQUFLNGpCLGdCQUFMLENBQXNCMWQsSUFBdEIsRUFBNEIsS0FBSzNDLElBQUwsQ0FBVXdnQixTQUF0QyxFQUNzQixVQUFVL2pCLFFBRGhDLEVBRXNCLGdCQUFnQkEsUUFGdEMsRUFFZ0QsS0FBSzhqQixXQUZyRDtBQUdILEdBVkQsTUFVTztBQUNILFNBQUtvQixTQUFMLENBQWUsU0FBZixFQUEwQixzQ0FBMUI7QUFDSDtBQUNKLENBZkQ7O0FBaUJBeGIsYUFBYSxDQUFDUixTQUFkLENBQXdCcWUsVUFBeEIsR0FBcUMsVUFBVWhHLFFBQVYsRUFBb0I7QUFDckQsTUFBSXprQixLQUFLLEdBQUcsS0FBS2lNLElBQUwsQ0FBVWpNLEtBQXRCOztBQUNBLE1BQUlBLEtBQUssQ0FBQ21ILEVBQU4sQ0FBU0YsTUFBVCxDQUFnQjJFLG1CQUFoQixDQUFvQyxhQUFwQyxDQUFKLEVBQXdEO0FBQ3BELFFBQUl4QyxJQUFJLEdBQUcsS0FBS3NlLGdCQUFMLEVBQVg7QUFDQSxRQUFJemdCLE1BQU0sR0FBRyxJQUFiOztBQUNBLFNBQUt5akIsYUFBTCxDQUFtQixLQUFLamtCLElBQUwsQ0FBVWtrQixXQUE3QixFQUEwQ3ZoQixJQUExQyxFQUFnRCxDQUFoRCxFQUNtQixVQUFVa2UsUUFBVixFQUFvQjtBQUNoQixVQUFJQSxRQUFRLENBQUN2SSxPQUFiLEVBQXNCO0FBQ2xCMEYsZ0JBQVEsQ0FBQzZDLFFBQVEsQ0FBQ2xlLElBQVYsQ0FBUjtBQUNILE9BRkQsTUFFTztBQUNIaEIsZUFBTyxDQUFDdVYsS0FBUixDQUFjMkosUUFBZDtBQUNBcmdCLGNBQU0sQ0FBQ21oQixTQUFQLENBQWlCLE9BQWpCLEVBQTBCZCxRQUFRLENBQUN4aEIsT0FBbkM7QUFDSDtBQUNKLEtBUnBCO0FBU0gsR0FaRCxNQVlPO0FBQ0gsU0FBS3NpQixTQUFMLENBQWUsU0FBZixFQUEwQix3Q0FBMUI7QUFDQTNELFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDSDtBQUNKLENBbEJEO0FBb0JBOzs7OztBQUdBN1gsYUFBYSxDQUFDUixTQUFkLENBQXdCd2UsV0FBeEIsR0FBc0MsVUFBVUMsT0FBVixFQUFtQjtBQUNyRCxPQUFLdkUsZ0JBQUwsSUFBeUIsQ0FBekI7O0FBQ0EsTUFBSSxDQUFDL1QsUUFBUSxDQUFDdVksc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1EbmhCLE1BQXhELEVBQWdFO0FBQzVELFNBQUswYyxPQUFMLEdBQWV4ZixDQUFDLENBQUMsc0NBQUQsQ0FBaEI7QUFDQSxTQUFLd2YsT0FBTCxDQUFhMEUsUUFBYixDQUFzQnhZLFFBQVEsQ0FBQ3ZCLElBQS9CO0FBQ0g7O0FBQ0QsVUFBUTZaLE9BQVI7QUFDSSxTQUFLLENBQUw7QUFDSSxXQUFLeEUsT0FBTCxDQUFhMkUsR0FBYixDQUFpQixrQkFBakIsRUFBcUMsTUFBckM7QUFDQTs7QUFDSixTQUFLLENBQUw7QUFDSSxXQUFLM0UsT0FBTCxDQUFhMkUsR0FBYixDQUFpQixrQkFBakIsRUFBcUMsTUFBckM7QUFDQTs7QUFDSixTQUFLLENBQUw7QUFDSSxXQUFLM0UsT0FBTCxDQUFhMkUsR0FBYixDQUFpQixrQkFBakIsRUFBcUMsTUFBckM7QUFDQTs7QUFDSjtBQUNJLFdBQUszRSxPQUFMLENBQWEyRSxHQUFiLENBQWlCLGtCQUFqQixFQUFxQyxPQUFyQztBQUNBO0FBWlI7QUFjSCxDQXBCRDs7QUFxQkFwZSxhQUFhLENBQUNSLFNBQWQsQ0FBd0I2ZSxXQUF4QixHQUFzQyxZQUFZO0FBQzlDLE9BQUszRSxnQkFBTCxJQUF5QixDQUF6Qjs7QUFDQSxNQUFJLEtBQUtBLGdCQUFMLElBQXlCLENBQTdCLEVBQWdDO0FBQzVCLFNBQUtELE9BQUwsQ0FBYWYsTUFBYjtBQUNIO0FBQ0osQ0FMRDs7QUFPQTFZLGFBQWEsQ0FBQ1IsU0FBZCxDQUF3QnNlLGFBQXhCLEdBQXdDLFVBQVUvcEIsR0FBVixFQUFleUksSUFBZixFQUFxQjhoQixRQUFyQixFQUErQm5NLE9BQS9CLEVBQXdDb00sT0FBeEMsRUFBaUQ7QUFDckYsTUFBSWxrQixNQUFNLEdBQUcsSUFBYjtBQUNBLE9BQUttaEIsU0FBTCxDQUFlLFNBQWY7QUFDQSxPQUFLd0MsV0FBTCxDQUFpQk0sUUFBakI7QUFDQXJrQixHQUFDLENBQUNzaUIsSUFBRixDQUFPeG9CLEdBQVAsRUFBWXlJLElBQVosRUFDS2dnQixJQURMLENBQ1UsVUFBVTlCLFFBQVYsRUFBb0I7QUFDdEJyZ0IsVUFBTSxDQUFDZ2tCLFdBQVA7QUFDQWhrQixVQUFNLENBQUNtaEIsU0FBUCxDQUFpQixRQUFqQjtBQUNBckosV0FBTyxDQUFDdUksUUFBRCxDQUFQOztBQUNBLFFBQUlBLFFBQVEsQ0FBQ3ZJLE9BQWIsRUFBc0I7QUFDbEI5WCxZQUFNLENBQUN5ZixPQUFQLENBQWVZLFFBQVEsQ0FBQ2lCLEVBQXhCO0FBQ0g7QUFDSixHQVJMLEVBU0tjLElBVEwsQ0FTVSxVQUFValosQ0FBVixFQUFhcVksVUFBYixFQUF5QjJDLFdBQXpCLEVBQXNDO0FBQ3hDLFFBQUlGLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNmamtCLFlBQU0sQ0FBQ2drQixXQUFQO0FBQ0Foa0IsWUFBTSxDQUFDdWhCLGNBQVA7O0FBQ0EsVUFBSTJDLE9BQUosRUFBYTtBQUNUQSxlQUFPLENBQUMvYSxDQUFELEVBQUlxWSxVQUFKLEVBQWdCMkMsV0FBaEIsQ0FBUDtBQUNIO0FBQ0osS0FORCxNQU1PO0FBQ0hyVSxnQkFBVSxDQUFDLFlBQVk7QUFDbkI5UCxjQUFNLENBQUNna0IsV0FBUDs7QUFDQWhrQixjQUFNLENBQUN5akIsYUFBUCxDQUFxQi9wQixHQUFyQixFQUEwQnlJLElBQTFCLEVBQWdDOGhCLFFBQVEsR0FBRyxDQUEzQyxFQUE4Q25NLE9BQTlDLEVBQXVEb00sT0FBdkQ7QUFDSCxPQUhTLEVBR1Bsa0IsTUFBTSxDQUFDd2dCLFVBSEEsQ0FBVjtBQUlIO0FBQ0osR0F0Qkw7QUF1QkgsQ0EzQkQ7O0FBNkJBN2EsYUFBYSxDQUFDUixTQUFkLENBQXdCckksY0FBeEIsR0FBeUMsVUFBVWdELGFBQVYsRUFBeUI7QUFDOUQsTUFBSS9HLEtBQUssR0FBRyxLQUFLaU0sSUFBTCxDQUFVak0sS0FBdEI7QUFDQSxNQUFJaUgsTUFBTSxHQUFHLElBQWI7O0FBQ0EsTUFBSWpILEtBQUssQ0FBQ21ILEVBQU4sQ0FBU0YsTUFBVCxDQUFnQjJFLG1CQUFoQixDQUFvQyxpQkFBcEMsQ0FBSixFQUE0RDtBQUN4RCxRQUFJeEMsTUFBSSxHQUFHLEtBQUtzZSxnQkFBTCxFQUFYOztBQUNBdGUsVUFBSSxDQUFDLGVBQUQsQ0FBSixHQUF3QnJDLGFBQXhCOztBQUNBLFNBQUsyakIsYUFBTCxDQUFtQixLQUFLamtCLElBQUwsQ0FBVTRrQixlQUE3QixFQUE4Q2ppQixNQUE5QyxFQUFvRCxDQUFwRCxFQUNtQixVQUFVa2UsUUFBVixFQUFvQjtBQUNoQmxmLGFBQU8sQ0FBQzJELEdBQVIsQ0FBWXViLFFBQVo7O0FBQ0EsVUFBSUEsUUFBUSxDQUFDdkksT0FBYixFQUFzQjtBQUNsQjlYLGNBQU0sQ0FBQ2dGLElBQVAsQ0FBWWpOLGFBQVosQ0FBMEJzb0IsUUFBUSxDQUFDN2xCLFFBQW5DLEVBQzBCNmxCLFFBQVEsQ0FBQzFvQixVQURuQyxFQUUwQjBvQixRQUFRLENBQUN0SCxRQUZuQztBQUdILE9BSkQsTUFJTztBQUNIL1ksY0FBTSxDQUFDbWhCLFNBQVAsQ0FBaUIsU0FBakIsRUFBNEJkLFFBQVEsQ0FBQ3hoQixPQUFyQztBQUNIO0FBQ0osS0FWcEIsRUFXbUIsVUFBVXNLLENBQVYsRUFBYXFZLFVBQWIsRUFBeUIyQyxXQUF6QixFQUFzQztBQUNsQ25rQixZQUFNLENBQUNnRixJQUFQLENBQVlqRixVQUFaLENBQXVCc2tCLE1BQXZCLENBQThCdmQsSUFBOUIsQ0FBbUMscUJBQW5DLEVBQ21DLG1FQUM5QywyRUFGVztBQUdBM0YsYUFBTyxDQUFDdVYsS0FBUixDQUFjdk4sQ0FBZCxFQUFpQnFZLFVBQWpCLEVBQTZCMkMsV0FBN0I7QUFDSCxLQWhCcEI7QUFpQkgsR0FwQkQsTUFvQk87QUFDSCxTQUFLaEQsU0FBTCxDQUFlLFNBQWYsRUFBMEIsNENBQTFCO0FBQ0g7QUFDSixDQTFCRDtBQTRCQTs7Ozs7QUFHQXhiLGFBQWEsQ0FBQ1IsU0FBZCxDQUF3Qi9ILFFBQXhCLEdBQW1DLFVBQVVuQixRQUFWLEVBQW9CK08sSUFBcEIsRUFBMEJ3UyxRQUExQixFQUFvQzhHLGFBQXBDLEVBQW1EO0FBQ2xGLE1BQUl2ckIsS0FBSyxHQUFHLEtBQUtpTSxJQUFMLENBQVVqTSxLQUF0QjtBQUNBLE1BQUlpSCxNQUFNLEdBQUcsSUFBYjs7QUFDQSxNQUFJakgsS0FBSyxDQUFDbUgsRUFBTixDQUFTRixNQUFULENBQWdCMkUsbUJBQWhCLENBQW9DLFdBQXBDLENBQUosRUFBc0Q7QUFDbEQsUUFBSXhDLElBQUksR0FBRyxLQUFLc2UsZ0JBQUwsRUFBWDtBQUNBdGUsUUFBSSxDQUFDLFVBQUQsQ0FBSixHQUFtQmxHLFFBQW5CO0FBQ0FrRyxRQUFJLENBQUMsTUFBRCxDQUFKLEdBQWU2SSxJQUFmOztBQUNBLFNBQUt5WSxhQUFMLENBQW1CLEtBQUtqa0IsSUFBTCxDQUFVK2tCLFNBQTdCLEVBQXdDcGlCLElBQXhDLEVBQThDLENBQTlDLEVBQ21CLFVBQVVrZSxRQUFWLEVBQW9CO0FBQ2hCLFVBQUlBLFFBQVEsQ0FBQ3ZJLE9BQWIsRUFBc0I7QUFDbEIwRixnQkFBUSxDQUFDNkMsUUFBUSxDQUFDbGUsSUFBVixDQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0htaUIscUJBQWEsQ0FBQ2pFLFFBQVEsQ0FBQ3hoQixPQUFWLENBQWI7QUFDQW1CLGNBQU0sQ0FBQ21oQixTQUFQLENBQWlCLFNBQWpCLEVBQTRCZCxRQUFRLENBQUN4aEIsT0FBckM7QUFDSDtBQUNKLEtBUnBCLEVBU21CLFVBQVVzSyxDQUFWLEVBQWFxWSxVQUFiLEVBQXlCMkMsV0FBekIsRUFBc0M7QUFDbENHLG1CQUFhLENBQUMsc0NBQUQsQ0FBYjtBQUNBbmpCLGFBQU8sQ0FBQ3VWLEtBQVIsQ0FBY3lOLFdBQWQ7QUFDSCxLQVpwQjtBQWFILEdBakJELE1BaUJPO0FBQ0hHLGlCQUFhLENBQUMsMkJBQUQsQ0FBYjtBQUNBLFNBQUtuRCxTQUFMLENBQWUsU0FBZixFQUEwQixzQ0FBMUI7QUFDSDtBQUNKLENBeEJEO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNoQkE7QUFBQTtBQUFBOzs7Ozs7OztBQVFPLElBQUkxTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQVc7QUFDdkM7QUFDQSxNQUFJK1IsR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJQyxJQUFJLEdBQUd4ZSxFQUFFLENBQUMrTyxPQUFILENBQVd5UCxJQUFYLENBQWdCQyxLQUEzQjtBQUVBLE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0FILEtBQUcsQ0FBQ0ksTUFBSixHQUFhLElBQUkzZSxFQUFFLENBQUMrTyxPQUFILENBQVc2UCxJQUFmLENBQW9CLFVBQVN6ckIsSUFBVCxFQUFlO0FBQzVDNk0sTUFBRSxDQUFDK08sT0FBSCxDQUFXOFAsV0FBWCxDQUF1QixRQUF2QixFQUFpQ0MsU0FBakMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0M7QUFDQSxRQUFJQyxVQUFKOztBQUNBLFFBQUlMLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2hCSyxnQkFBVSxHQUFHLENBQWI7QUFDSCxLQUZELE1BRU87QUFDSEEsZ0JBQVUsR0FBR3JFLElBQUksQ0FBQ3NFLEdBQUwsS0FBYU4sS0FBMUI7QUFDSDs7QUFDRHhqQixXQUFPLENBQUMyRCxHQUFSLENBQVltQixFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUI1ZSxJQUFqQixDQUFaLEVBQW9DNHJCLFVBQVUsR0FBQyxJQUEvQztBQUNBTCxTQUFLLEdBQUdoRSxJQUFJLENBQUNzRSxHQUFMLEVBQVI7QUFDSCxHQVZZLENBQWI7QUFZQTs7OztBQUdBVCxLQUFHLENBQUMxZixHQUFKLEdBQVUsSUFBSW1CLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsVUFBU2htQixPQUFULEVBQWtCO0FBQzVDb0gsTUFBRSxDQUFDK08sT0FBSCxDQUFXOFAsV0FBWCxDQUF1QixLQUF2QixFQUE4QkMsU0FBOUIsRUFBeUMsQ0FBekMsRUFBNEMsQ0FBNUM7QUFDQTVqQixXQUFPLENBQUMyRCxHQUFSLENBQVltQixFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJuWixPQUFqQixDQUFaO0FBQ0gsR0FIUyxDQUFWO0FBS0E7Ozs7QUFHQTJsQixLQUFHLENBQUNVLEtBQUosR0FBWSxJQUFJamYsRUFBRSxDQUFDK08sT0FBSCxDQUFXNlAsSUFBZixDQUFvQixVQUFTaG1CLE9BQVQsRUFBa0I7QUFDOUNvSCxNQUFFLENBQUMrTyxPQUFILENBQVc4UCxXQUFYLENBQXVCLEtBQXZCLEVBQThCQyxTQUE5QixFQUF5QyxDQUF6QyxFQUE0QyxDQUE1QztBQUNBNWpCLFdBQU8sQ0FBQzJELEdBQVIsQ0FBWWpHLE9BQVo7QUFDSCxHQUhXLENBQVo7QUFLQTs7Ozs7QUFJQTJsQixLQUFHLENBQUNXLFVBQUosR0FBaUIsSUFBSWxmLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsWUFBVztBQUM1QzVlLE1BQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsWUFBdkIsRUFBcUNDLFNBQXJDLEVBQWdELENBQWhELEVBQW1ELENBQW5EOztBQUNBLFFBQUk5ZSxFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQnVELE9BQW5DLEVBQTRDO0FBQ3hDLGFBQU9zTixjQUFjLENBQUNuZixFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQixRQUEvQixHQUFELENBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsYUFBT3RPLEVBQUUsQ0FBQzhSLEdBQUgsQ0FBT3NOLFNBQVAsQ0FBaUIsRUFBakIsQ0FBUDtBQUNIO0FBQ0osR0FQZ0IsQ0FBakI7QUFTQTs7Ozs7QUFJQWIsS0FBRyxDQUFDYyxZQUFKLEdBQW1CLElBQUlyZixFQUFFLENBQUMrTyxPQUFILENBQVc2UCxJQUFmLENBQW9CLFlBQVc7QUFDOUM1ZSxNQUFFLENBQUMrTyxPQUFILENBQVc4UCxXQUFYLENBQXVCLGNBQXZCLEVBQXVDQyxTQUF2QyxFQUFrRCxDQUFsRCxFQUFxRCxDQUFyRDs7QUFDQSxRQUFJOWUsRUFBRSxDQUFDc08sZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0J1RCxPQUFuQyxFQUE0QztBQUN4QzdSLFFBQUUsQ0FBQ3NPLGdCQUFILENBQW9CLFNBQXBCLEVBQStCLFFBQS9CLEVBQXlDeE8sU0FBekM7QUFDSDtBQUNKLEdBTGtCLENBQW5CO0FBT0F5ZSxLQUFHLENBQUNlLFdBQUosR0FBa0IsSUFBSXRmLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsWUFBVztBQUM3QzVlLE1BQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsYUFBdkIsRUFBc0NDLFNBQXRDLEVBQWlELENBQWpELEVBQW9EbkssUUFBcEQ7QUFDQSxRQUFJdUIsSUFBSSxHQUFHNEksU0FBWDs7QUFDQSxTQUFLLElBQUk3UyxDQUFDLEdBQUdpSyxJQUFJLENBQUN6WixNQUFMLEdBQVksQ0FBekIsRUFBNEJ3UCxDQUFDLElBQUksQ0FBakMsRUFBb0NBLENBQUMsRUFBckMsRUFBeUM7QUFDckMsVUFBSXBKLEtBQUssR0FBR3FULElBQUksQ0FBQ2pLLENBQUQsQ0FBaEI7QUFDQWpNLFFBQUUsQ0FBQytPLE9BQUgsQ0FBV3dRLFdBQVgsQ0FBdUIsT0FBdkIsRUFBZ0MsUUFBaEMsRUFBMEN2ZixFQUFFLENBQUMrTyxPQUFILENBQVd5USxXQUFYLENBQXVCM2MsS0FBdkIsQ0FBMUM7QUFDQTdDLFFBQUUsQ0FBQzZULFdBQUgsQ0FBZXpTLElBQWYsQ0FBb0JwQixFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJsUCxLQUFqQixDQUFwQjtBQUNIO0FBQ0osR0FSaUIsQ0FBbEI7QUFVQTs7OztBQUdBMGIsS0FBRyxDQUFDa0IsV0FBSixHQUFrQixJQUFJemYsRUFBRSxDQUFDK08sT0FBSCxDQUFXNlAsSUFBZixDQUFvQixZQUFXO0FBQzdDNWUsTUFBRSxDQUFDK08sT0FBSCxDQUFXOFAsV0FBWCxDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsRUFBaUQsQ0FBakQsRUFBb0QsQ0FBcEQ7QUFDQSxXQUFPOWUsRUFBRSxDQUFDOFIsR0FBSCxDQUFPc04sU0FBUCxDQUFpQnBmLEVBQUUsQ0FBQ3NPLGdCQUFILENBQW9CLFVBQXBCLEVBQWdDNVksSUFBakQsQ0FBUDtBQUNILEdBSGlCLENBQWxCO0FBS0E2b0IsS0FBRyxDQUFDbUIsV0FBSixHQUFrQixJQUFJMWYsRUFBRSxDQUFDK08sT0FBSCxDQUFXNlAsSUFBZixDQUFvQixZQUFXO0FBQzdDLFFBQUk1ZSxFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQnVELE9BQW5DLEVBQTRDO0FBQ3hDLFVBQUlpRSxLQUFLLEdBQUc5VixFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQndILEtBQTNDO0FBQ0EsYUFBTzlWLEVBQUUsQ0FBQzhSLEdBQUgsQ0FBT3NOLFNBQVAsQ0FBaUJ0SixLQUFqQixDQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBTyxJQUFJOVYsRUFBRSxDQUFDK08sT0FBSCxDQUFXNFEsSUFBZixDQUFvQixFQUFwQixDQUFQO0FBQ0g7QUFDSixHQVBpQixDQUFsQjtBQVNBOzs7O0FBR0FwQixLQUFHLENBQUNxQixpQkFBSixHQUF3QixJQUFJNWYsRUFBRSxDQUFDK08sT0FBSCxDQUFXNlAsSUFBZixDQUFvQixZQUFXO0FBQ25EMWpCLFdBQU8sQ0FBQzJELEdBQVIsQ0FBWW1CLEVBQUUsQ0FBQ3NPLGdCQUFmO0FBQ0F0TyxNQUFFLENBQUMrTyxPQUFILENBQVc4UCxXQUFYLENBQXVCLG1CQUF2QixFQUE0Q0MsU0FBNUMsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQ7O0FBQ0EsUUFBSTllLEVBQUUsQ0FBQ3NPLGdCQUFILENBQW9CLFNBQXBCLEVBQStCdUQsT0FBbkMsRUFBNEM7QUFDeEMsYUFBTyxJQUFJN1IsRUFBRSxDQUFDK08sT0FBSCxDQUFXOFEsS0FBZixDQUFxQixDQUFDckIsSUFBRCxFQUFPQSxJQUFQLENBQXJCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxVQUFJL04sS0FBSyxHQUFHelEsRUFBRSxDQUFDc08sZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0JtQyxLQUEzQztBQUFBLFVBQ0lpRyxRQUFRLEdBQUcsRUFEZjs7QUFFQSxVQUFJakcsS0FBSyxJQUFJQSxLQUFLLENBQUMwRixTQUFmLElBQTRCMUYsS0FBSyxDQUFDMEYsU0FBTixDQUFnQjFaLE1BQWhCLEdBQXlCLENBQXpELEVBQTREO0FBQ3hEaWEsZ0JBQVEsQ0FBQyxNQUFELENBQVIsR0FBbUJqRyxLQUFLLENBQUMwRixTQUFOLENBQWdCLENBQWhCLEVBQW1CRyxNQUF0QztBQUNILE9BRkQsTUFFTztBQUNIN0YsYUFBSyxHQUFHK04sSUFBUjtBQUNIOztBQUNEOUgsY0FBUSxHQUFHMVcsRUFBRSxDQUFDOFIsR0FBSCxDQUFPc04sU0FBUCxDQUFpQjFJLFFBQWpCLENBQVg7QUFDQSxhQUFPLElBQUkxVyxFQUFFLENBQUMrTyxPQUFILENBQVc4USxLQUFmLENBQXFCLENBQUNwUCxLQUFELEVBQVFpRyxRQUFSLENBQXJCLENBQVA7QUFDSDtBQUNKLEdBaEJ1QixDQUF4QjtBQW1CQTZILEtBQUcsQ0FBQ3VCLHdCQUFKLEdBQStCLElBQUk5ZixFQUFFLENBQUMrTyxPQUFILENBQVc2UCxJQUFmLENBQW9CLFlBQVc7QUFDMUQ1ZSxNQUFFLENBQUMrTyxPQUFILENBQVc4UCxXQUFYLENBQXVCLDBCQUF2QixFQUFtREMsU0FBbkQsRUFBOEQsQ0FBOUQsRUFBaUUsQ0FBakU7QUFDQSxXQUFPLENBQUM5ZSxFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQnVELE9BQWhDLElBQ0M3UixFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQm1DLEtBRGhDLElBRUN6USxFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQm1DLEtBQS9CLENBQXFDSSxPQUFyQyxLQUFpRCxnQkFGekQ7QUFHSCxHQUw4QixDQUEvQjtBQU9BLE1BQUlrUCxVQUFVLEdBQUdsdUIsU0FBakI7QUFDQTBzQixLQUFHLENBQUN5QixvQkFBSixHQUEyQixJQUFJaGdCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsWUFBVztBQUN0RDVlLE1BQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsc0JBQXZCLEVBQStDQyxTQUEvQyxFQUEwRCxDQUExRCxFQUE2RCxDQUE3RDtBQUNBaUIsY0FBVSxHQUFHL2YsRUFBRSxDQUFDNFUsU0FBaEI7O0FBQ0EsUUFBSTVVLEVBQUUsQ0FBQzBVLGlCQUFQLEVBQTBCO0FBQ3RCMVUsUUFBRSxDQUFDNFUsU0FBSCxHQUFlNVUsRUFBRSxDQUFDMFUsaUJBQUgsRUFBZjtBQUNBMVUsUUFBRSxDQUFDaWdCLFNBQUgsR0FBZXZGLElBQUksQ0FBQ3NFLEdBQUwsRUFBZjtBQUNIO0FBQ0osR0FQMEIsQ0FBM0I7QUFRQVQsS0FBRyxDQUFDMkIsc0JBQUosR0FBNkIsSUFBSWxnQixFQUFFLENBQUMrTyxPQUFILENBQVc2UCxJQUFmLENBQW9CLFlBQVc7QUFDeEQ1ZSxNQUFFLENBQUMrTyxPQUFILENBQVc4UCxXQUFYLENBQXVCLHdCQUF2QixFQUFpREMsU0FBakQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0Q7QUFDQTllLE1BQUUsQ0FBQzRVLFNBQUgsR0FBZW1MLFVBQWY7QUFDQS9mLE1BQUUsQ0FBQ2lnQixTQUFILEdBQWV2RixJQUFJLENBQUNzRSxHQUFMLEVBQWY7QUFDSCxHQUo0QixDQUE3QjtBQU1BVCxLQUFHLENBQUM0QixrQkFBSixHQUF5QixJQUFJbmdCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsWUFBVztBQUNwRDVlLE1BQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsb0JBQXZCLEVBQTZDQyxTQUE3QyxFQUF3RCxDQUF4RCxFQUEyRCxDQUEzRDtBQUNBOWUsTUFBRSxDQUFDc08sZ0JBQUgsQ0FBb0JyWSxVQUFwQixDQUErQnljLFNBQS9CLEdBQTJDLElBQTNDO0FBQ0gsR0FId0IsQ0FBekI7QUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBNkwsS0FBRyxDQUFDNkIsU0FBSixHQUFnQixJQUFJcGdCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsWUFBVztBQUMzQzVlLE1BQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsV0FBdkIsRUFBb0NDLFNBQXBDLEVBQStDLENBQS9DLEVBQWtELENBQWxEOztBQUNBLFFBQUk5ZSxFQUFFLENBQUNzTyxnQkFBSCxDQUFvQixTQUFwQixFQUErQnVELE9BQW5DLEVBQTRDO0FBQ3hDLFVBQUl3TyxPQUFPLEdBQUdyZ0IsRUFBRSxDQUFDc08sZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0IsUUFBL0IsR0FBZDtBQUNBK1IsYUFBTyxHQUFHQSxPQUFPLENBQUM1VyxNQUFSLENBQWUsVUFBU3ZSLE1BQVQsRUFBaUI7QUFDdEMsZUFBTyxPQUFPQSxNQUFQLElBQWlCLFFBQXhCO0FBQ0gsT0FGUyxFQUVQK0UsR0FGTyxDQUVILFVBQVNxakIsS0FBVCxFQUFnQjtBQUNuQixlQUFPO0FBQUMsa0JBQVFBLEtBQUssQ0FBQ3JqQixHQUFOLENBQVUsVUFBU3NqQixJQUFULEVBQWU7QUFDckMsZ0JBQUlDLE9BQU8sR0FBRztBQUFFLHNCQUFRRCxJQUFJLENBQUN4YixJQUFmO0FBQ1YsdUJBQVM7QUFEQyxhQUFkOztBQUVBLGdCQUFJd2IsSUFBSSxDQUFDeGIsSUFBTCxLQUFjLE1BQWQsSUFBd0J3YixJQUFJLENBQUN4YixJQUFMLEtBQWMsU0FBMUMsRUFBcUQ7QUFDakR5YixxQkFBTyxDQUFDLEdBQUQsQ0FBUCxHQUFlRCxJQUFJLENBQUNya0IsSUFBTCxDQUFVZSxHQUFWLENBQWMsVUFBU3dqQixDQUFULEVBQVk7QUFBRSx1QkFBT0EsQ0FBQyxDQUFDbFEsQ0FBVDtBQUFhLGVBQXpDLENBQWY7QUFDQWlRLHFCQUFPLENBQUMsR0FBRCxDQUFQLEdBQWVELElBQUksQ0FBQ3JrQixJQUFMLENBQVVlLEdBQVYsQ0FBYyxVQUFTd2pCLENBQVQsRUFBWTtBQUFFLHVCQUFPQSxDQUFDLENBQUNDLENBQVQ7QUFBYSxlQUF6QyxDQUFmO0FBQ0gsYUFIRCxNQUdPLElBQUlILElBQUksQ0FBQ3hiLElBQUwsS0FBYyxNQUFsQixFQUEwQjtBQUM3QnliLHFCQUFPLENBQUMsUUFBRCxDQUFQLEdBQW9CRCxJQUFJLENBQUNya0IsSUFBekI7QUFDSDs7QUFDRCxtQkFBT3NrQixPQUFQO0FBQ0gsV0FWZSxDQUFUO0FBV1Asb0JBQVUsRUFYSDtBQVdPLG9CQUFVLEVBWGpCO0FBWVAsbUJBQVMsRUFaRjtBQVlNLG9CQUFVO0FBWmhCLFNBQVA7QUFjSCxPQWpCUyxDQUFWO0FBa0JBLGFBQU9yQixjQUFjLENBQUNrQixPQUFELENBQXJCO0FBQ0gsS0FyQkQsTUFxQk87QUFDSCxhQUFPcmdCLEVBQUUsQ0FBQzhSLEdBQUgsQ0FBT3NOLFNBQVAsQ0FBaUIsRUFBakIsQ0FBUDtBQUNIO0FBQ0osR0ExQmUsQ0FBaEIsQ0F0SnVDLENBbUx2Qzs7QUFDQWIsS0FBRyxDQUFDb0MsV0FBSixHQUFrQjNnQixFQUFFLENBQUNtUixRQUFILENBQVl5UCxVQUFaLENBQXVCckMsR0FBdkIsRUFBNEIsVUFBU3NDLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUMvREEsUUFBSSxDQUFDQyxRQUFMLEdBQWdCLElBQUkvZ0IsRUFBRSxDQUFDK08sT0FBSCxDQUFXNlAsSUFBZixDQUFvQixVQUFTNWtCLElBQVQsRUFBZTtBQUMvQztBQUNBLFVBQUlnbkIsT0FBTyxHQUFHaGhCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV2tTLElBQVgsRUFBZDtBQUNBamhCLFFBQUUsQ0FBQ2toQixLQUFILENBQVNDLEtBQVQsQ0FBZW5uQixJQUFmLEVBQXFCZ0csRUFBRSxDQUFDK08sT0FBSCxDQUFXcVMsR0FBWCxDQUFlLE1BQWYsQ0FBckIsRUFBNkNKLE9BQTdDLEVBQXNELElBQXREO0FBQ0FobkIsVUFBSSxDQUFDb1csTUFBTCxHQUFjcFEsRUFBRSxDQUFDc08sZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0I4QixNQUE3Qzs7QUFDQSxVQUFJcFcsSUFBSSxDQUFDb1csTUFBTCxLQUFnQnZlLFNBQXBCLEVBQStCO0FBQzNCbUksWUFBSSxDQUFDb1csTUFBTCxHQUFjcFcsSUFBSSxDQUFDb1csTUFBTCxDQUFZRSxFQUExQjs7QUFDQSxhQUFLLElBQUkvZCxHQUFULElBQWdCeUgsSUFBSSxDQUFDb1csTUFBckIsRUFBNkI7QUFDekIsY0FBSXBXLElBQUksQ0FBQ29XLE1BQUwsQ0FBWWlSLGNBQVosQ0FBMkI5dUIsR0FBM0IsQ0FBSixFQUFxQztBQUNqQ3l1QixtQkFBTyxDQUFDTSxnQkFBUixDQUF5QnRoQixFQUFFLENBQUM4UixHQUFILENBQU9zTixTQUFQLENBQWlCN3NCLEdBQWpCLENBQXpCLEVBQ3lCeUgsSUFBSSxDQUFDb1csTUFBTCxDQUFZN2QsR0FBWixDQUR6QjtBQUVIO0FBQ0o7QUFDSixPQVJELE1BUU87QUFDSHlILFlBQUksQ0FBQ29XLE1BQUwsR0FBYyxFQUFkO0FBQ0g7QUFDSixLQWhCZSxDQUFoQjtBQWlCQTBRLFFBQUksQ0FBQ1MsaUJBQUwsR0FBeUIsSUFBSXZoQixFQUFFLENBQUMrTyxPQUFILENBQVc2UCxJQUFmLENBQW9CLFVBQVM1a0IsSUFBVCxFQUFlK0ssSUFBZixFQUFxQnljLGdCQUFyQixFQUF1QztBQUNoRnhoQixRQUFFLENBQUMrTyxPQUFILENBQVc4UCxXQUFYLENBQXVCLG1CQUF2QixFQUE0Q0MsU0FBNUMsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQ7O0FBQ0EsVUFBSTBDLGdCQUFnQixLQUFLM3ZCLFNBQXpCLEVBQW9DO0FBQ2hDMnZCLHdCQUFnQixHQUFHLElBQW5CO0FBQ0gsT0FGRCxNQUVPO0FBQ0h4aEIsVUFBRSxDQUFDK08sT0FBSCxDQUFXd1EsV0FBWCxDQUF1QixrQkFBdkIsRUFBMkMsU0FBM0MsRUFBc0R2ZixFQUFFLENBQUMrTyxPQUFILENBQVcwUyxTQUFYLENBQXFCRCxnQkFBckIsQ0FBdEQ7QUFDQUEsd0JBQWdCLEdBQUd4aEIsRUFBRSxDQUFDOFIsR0FBSCxDQUFPQyxTQUFQLENBQWlCeVAsZ0JBQWpCLENBQW5CO0FBQ0g7O0FBQ0QsVUFBSW5mLE1BQU0sR0FBRyxFQUFiOztBQUNBLFdBQUssSUFBSXFmLFFBQVQsSUFBcUIxbkIsSUFBSSxDQUFDb1csTUFBMUIsRUFBa0M7QUFDOUIsWUFBSXBXLElBQUksQ0FBQ29XLE1BQUwsQ0FBWWlSLGNBQVosQ0FBMkJLLFFBQTNCLENBQUosRUFBMEM7QUFDdEMsY0FBSTFuQixJQUFJLENBQUNvVyxNQUFMLENBQVlzUixRQUFaLEVBQXNCN1EsT0FBdEIsS0FBa0M5TCxJQUFJLENBQUM4TCxPQUEzQyxFQUFvRDtBQUNoRDtBQUNBLGdCQUFJMlEsZ0JBQWdCLElBQUlFLFFBQVEsQ0FBQ3JZLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBeEIsRUFBbUQ7QUFDL0M7QUFDSDs7QUFDRGhILGtCQUFNLENBQUNqQixJQUFQLENBQVlwQixFQUFFLENBQUM4UixHQUFILENBQU9zTixTQUFQLENBQWlCc0MsUUFBakIsQ0FBWjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxhQUFPMWhCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzRRLElBQVgsQ0FBZ0J0ZCxNQUFoQixDQUFQO0FBQ0gsS0FyQndCLENBQXpCO0FBdUJBeWUsUUFBSSxDQUFDYSxrQkFBTCxHQUEwQixJQUFJM2hCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsVUFBUzVrQixJQUFULEVBQWUrSyxJQUFmLEVBQXFCeWMsZ0JBQXJCLEVBQXVDO0FBQ2pGeGhCLFFBQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsb0JBQXZCLEVBQTZDQyxTQUE3QyxFQUF3RCxDQUF4RCxFQUEyRCxDQUEzRDs7QUFDQSxVQUFJMEMsZ0JBQWdCLEtBQUszdkIsU0FBekIsRUFBb0M7QUFDaEMydkIsd0JBQWdCLEdBQUcsSUFBbkI7QUFDSCxPQUZELE1BRU87QUFDSHhoQixVQUFFLENBQUMrTyxPQUFILENBQVd3USxXQUFYLENBQXVCLGtCQUF2QixFQUEyQyxTQUEzQyxFQUFzRHZmLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzBTLFNBQVgsQ0FBcUJELGdCQUFyQixDQUF0RDtBQUNBQSx3QkFBZ0IsR0FBR3hoQixFQUFFLENBQUM4UixHQUFILENBQU9DLFNBQVAsQ0FBaUJ5UCxnQkFBakIsQ0FBbkI7QUFDSDs7QUFDRCxVQUFJbmYsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsV0FBSyxJQUFJcWYsUUFBVCxJQUFxQjFuQixJQUFJLENBQUNvVyxNQUExQixFQUFrQztBQUM5QixZQUFJcFcsSUFBSSxDQUFDb1csTUFBTCxDQUFZaVIsY0FBWixDQUEyQkssUUFBM0IsQ0FBSixFQUEwQztBQUN0QyxjQUFJMW5CLElBQUksQ0FBQ29XLE1BQUwsQ0FBWXNSLFFBQVosRUFBc0I3USxPQUF0QixLQUFrQzlMLElBQUksQ0FBQzhMLE9BQTNDLEVBQW9EO0FBQ2hELGdCQUFJMlEsZ0JBQWdCLElBQUlFLFFBQVEsQ0FBQ3JZLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBeEIsRUFBbUQ7QUFDL0M7QUFDSDs7QUFDRGhILGtCQUFNLENBQUNqQixJQUFQLENBQVlwSCxJQUFJLENBQUNvVyxNQUFMLENBQVlzUixRQUFaLENBQVo7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBTzFoQixFQUFFLENBQUMrTyxPQUFILENBQVc0USxJQUFYLENBQWdCdGQsTUFBaEIsQ0FBUDtBQUNILEtBcEJ5QixDQUExQjtBQXFCSCxHQTlEaUIsQ0FBbEI7QUErREFrYyxLQUFHLENBQUNwbUIsT0FBSixHQUFjNkgsRUFBRSxDQUFDbVIsUUFBSCxDQUFZeVEsZ0JBQVosQ0FBNkJyRCxHQUFHLENBQUNvQyxXQUFqQyxDQUFkO0FBRUFwQyxLQUFHLENBQUNzRCxnQkFBSixHQUF1QixJQUFJN2hCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWYsQ0FBb0IsWUFBVztBQUNsRDVlLE1BQUUsQ0FBQytPLE9BQUgsQ0FBVzhQLFdBQVgsQ0FBdUIsa0JBQXZCLEVBQTJDQyxTQUEzQyxFQUFzRCxDQUF0RCxFQUF5RCxDQUF6RDtBQUNBLFdBQU9QLEdBQUcsQ0FBQ3BtQixPQUFYO0FBQ0gsR0FIc0IsQ0FBdkI7QUFLQSxTQUFPb21CLEdBQVA7QUFDSCxDQTNQTSxDOzs7Ozs7Ozs7Ozs7QUNSUDtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBV08sU0FBUzFyQixtQkFBVCxDQUE2Qml2QixTQUE3QixFQUF3QztBQUMzQyxPQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBT0FqdkIsbUJBQW1CLENBQUNxTSxTQUFwQixDQUE4QnlhLEdBQTlCLEdBQXFDLFVBQVNwbkIsR0FBVCxFQUFjaU8sS0FBZCxFQUFxQjtBQUN0RHVoQixjQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBS0YsU0FBTCxHQUFlLEdBQWYsR0FBbUJ2dkIsR0FBbkIsR0FBdUIsUUFBNUMsRUFBc0RpTyxLQUF0RDtBQUNBdWhCLGNBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFLRixTQUFMLEdBQWUsR0FBZixHQUFtQnZ2QixHQUFuQixHQUF1QixZQUE1QyxFQUEwRG9ILENBQUMsQ0FBQ3FsQixHQUFGLEVBQTFEO0FBQ0gsQ0FIRDtBQUtBOzs7Ozs7O0FBS0Fuc0IsbUJBQW1CLENBQUNxTSxTQUFwQixDQUE4QmtaLE1BQTlCLEdBQXVDLFVBQVM3bEIsR0FBVCxFQUFjO0FBQ2pEd3ZCLGNBQVksQ0FBQ0UsVUFBYixDQUF3QixLQUFLSCxTQUFMLEdBQWUsR0FBZixHQUFtQnZ2QixHQUFuQixHQUF1QixRQUEvQztBQUNBd3ZCLGNBQVksQ0FBQ0UsVUFBYixDQUF3QixLQUFLSCxTQUFMLEdBQWUsR0FBZixHQUFtQnZ2QixHQUFuQixHQUF1QixZQUEvQztBQUNILENBSEQ7QUFLQTs7Ozs7OztBQUtBTSxtQkFBbUIsQ0FBQ3FNLFNBQXBCLENBQThCdE0sR0FBOUIsR0FBb0MsVUFBU0wsR0FBVCxFQUFjO0FBQzlDLFNBQU93dkIsWUFBWSxDQUFDRyxPQUFiLENBQXFCLEtBQUtKLFNBQUwsR0FBZSxHQUFmLEdBQW1CdnZCLEdBQW5CLEdBQXVCLFFBQTVDLENBQVA7QUFDSCxDQUZEO0FBSUE7Ozs7Ozs7O0FBTUFNLG1CQUFtQixDQUFDcU0sU0FBcEIsQ0FBOEIyYixPQUE5QixHQUF3QyxVQUFTdG9CLEdBQVQsRUFBYztBQUNsRCxTQUFPNHZCLFFBQVEsQ0FBQ0osWUFBWSxDQUFDRyxPQUFiLENBQXFCLEtBQUtKLFNBQUwsR0FBZSxHQUFmLEdBQW1CdnZCLEdBQW5CLEdBQXVCLFlBQTVDLENBQUQsQ0FBZjtBQUNILENBRkQ7QUFJQTs7Ozs7Ozs7OztBQVFBTSxtQkFBbUIsQ0FBQ3FNLFNBQXBCLENBQThCNFosVUFBOUIsR0FBMkMsVUFBU3ZtQixHQUFULEVBQWNDLFlBQWQsRUFBNEI7QUFDbkUsTUFBSSxLQUFLRyxHQUFMLENBQVNKLEdBQVQsQ0FBSixFQUFtQjtBQUNmLFdBQU8sS0FBS0ssR0FBTCxDQUFTTCxHQUFULENBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxTQUFLb25CLEdBQUwsQ0FBU3BuQixHQUFULEVBQWNDLFlBQWQ7QUFDQSxXQUFPQSxZQUFQO0FBQ0g7QUFDSixDQVBEO0FBU0E7Ozs7Ozs7QUFLQUssbUJBQW1CLENBQUNxTSxTQUFwQixDQUE4QnZNLEdBQTlCLEdBQW9DLFVBQVNKLEdBQVQsRUFBYztBQUM5QyxTQUFPd3ZCLFlBQVksQ0FBQ0csT0FBYixDQUFxQixLQUFLSixTQUFMLEdBQWUsR0FBZixHQUFtQnZ2QixHQUFuQixHQUF1QixRQUE1QyxNQUEwRCxJQUFqRTtBQUNILENBRkQ7QUFJQTs7Ozs7Ozs7OztBQVFBTSxtQkFBbUIsQ0FBQ3FNLFNBQXBCLENBQThCa2pCLE1BQTlCLEdBQXVDLFVBQVM3dkIsR0FBVCxFQUFjOHZCLFdBQWQsRUFBMkI7QUFDOUQsTUFBSUMsV0FBVyxHQUFHUCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsS0FBS0osU0FBTCxHQUFlLEdBQWYsR0FBbUJ2dkIsR0FBbkIsR0FBdUIsWUFBNUMsQ0FBbEI7QUFDQSxTQUFROHZCLFdBQVcsSUFBSUMsV0FBVyxHQUFDLElBQW5DO0FBQ0gsQ0FIRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZPLElBQU01SixVQUFVLGcxRkFBaEI7QUF1RUEsSUFBTWxaLEtBQWI7QUFBQTtBQUFBO0FBRUksaUJBQVlULElBQVosRUFBa0JhLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUtiLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUthLEdBQUwsR0FBV0EsR0FBWCxDQUZtQixDQUluQjtBQUNIO0FBRUQ7Ozs7OztBQVRKO0FBQUE7QUFBQSxzQ0Fhc0I7QUFDZCxVQUFJNUgsU0FBUyxHQUFHLEtBQUsrRyxJQUFMLENBQVVqTSxLQUFWLENBQWdCa0YsU0FBaEM7QUFDQUEsZUFBUyxDQUFDdXFCLFVBQVYsQ0FBcUIsSUFBckI7QUFDQXZxQixlQUFTLENBQUN3cUIsVUFBVixDQUFxQnhxQixTQUFTLENBQUM2WCxTQUFWLEVBQXJCO0FBQ0EsV0FBSzlRLElBQUwsQ0FBVWpGLFVBQVYsQ0FBcUJDLE1BQXJCLENBQTRCeEMsUUFBNUIsQ0FBcUMsUUFBckMsRUFBK0MsT0FBL0M7QUFDSDtBQWxCTDtBQUFBOztBQW9CSTs7Ozs7O0FBcEJKLGlDQTBCaUJnWSxTQTFCakIsRUEwQjRCO0FBQ3BCLFVBQUlsTixNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUl1TixPQUFPLEdBQUcsRUFBZDs7QUFDQSxVQUFJLENBQUMsS0FBSzdRLElBQUwsQ0FBVWpNLEtBQVYsQ0FBZ0J5QixRQUFoQixDQUF5Qmt1QixTQUF6QixFQUFMLEVBQTJDO0FBQ3ZDLGFBQUssSUFBSWYsUUFBVCxJQUFxQm5TLFNBQXJCLEVBQWdDO0FBQzVCLGNBQUkvTyxLQUFLLEdBQUcrTyxTQUFTLENBQUNtUyxRQUFELENBQXJCOztBQUNBLGNBQUlBLFFBQVEsS0FBSyxVQUFiLElBQ0FBLFFBQVEsS0FBSyxTQURiLElBRUFBLFFBQVEsS0FBSyxhQUZqQixFQUVnQztBQUM1QkEsb0JBQVEsR0FBR0EsUUFBUSxDQUFDaGQsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQixFQUNOQSxPQURNLENBQ0UsT0FERixFQUNXLEVBRFgsQ0FBWDtBQUVBLGdCQUFJZ2UsTUFBTSxHQUFHO0FBQUMsc0JBQVFoQixRQUFUO0FBQW1CLHNCQUFRLFNBQTNCO0FBQ1QsdUJBQVNsaEIsS0FBSyxDQUFDaU0sUUFBTjtBQURBLGFBQWI7O0FBRUEsZ0JBQUk7QUFDQWlXLG9CQUFNLEdBQUdyakIsYUFBYSxDQUFDc2pCLFVBQWQsQ0FBeUJqQixRQUF6QixFQUFtQ2xoQixLQUFuQyxDQUFUO0FBQ0gsYUFGRCxDQUVFLGdCQUFNLENBQ0o7QUFDSDs7QUFDRCxnQkFBSWtpQixNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQnJnQixvQkFBTSxDQUFDakIsSUFBUCxDQUFZc2hCLE1BQVo7QUFDSCxhQUZELE1BRU8sSUFBSWxpQixLQUFLLENBQUN1RyxXQUFOLEtBQXNCL0csRUFBRSxDQUFDK08sT0FBSCxDQUFXcUIsTUFBckMsRUFBNkM7QUFDaERSLHFCQUFPLENBQUN4TyxJQUFSLENBQWFaLEtBQUssQ0FBQzhQLEVBQU4sQ0FBU3NTLFFBQVQsQ0FBa0JuQyxDQUEvQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUNELGFBQU87QUFBQyxzQkFBY3BlLE1BQWY7QUFBdUIsbUJBQVd1TjtBQUFsQyxPQUFQO0FBQ0g7QUFyREw7QUFBQTs7QUF1REk7Ozs7OztBQXZESiwrQkE2RHNCOFIsUUE3RHRCLEVBNkRnQ2xoQixLQTdEaEMsRUE2RHVDO0FBQy9CLFVBQUlBLEtBQUssS0FBSzNPLFNBQWQsRUFBeUI7QUFDckIsZUFBTztBQUFDLGtCQUFRNnZCLFFBQVQ7QUFDSCxrQkFBUSxTQURMO0FBRUgsbUJBQVM7QUFGTixTQUFQO0FBSUg7O0FBQ0QsY0FBUWxoQixLQUFLLENBQUN1RyxXQUFkO0FBQ0ksYUFBSy9HLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzZQLElBQWhCO0FBQ0ksaUJBQU87QUFBQyxvQkFBUThDLFFBQVQ7QUFDSCxvQkFBUSxVQURMO0FBRUgscUJBQ0tsaEIsS0FBSyxDQUFDcWlCLFNBQU4sQ0FBZ0JDLFdBQWhCLEtBQWdDanhCLFNBQWhDLEdBQ0csaUJBQWUyTyxLQUFLLENBQUNxaUIsU0FBTixDQUFnQkMsV0FBaEIsQ0FBNEJ2WixJQUE1QixDQUFpQyxJQUFqQyxDQURsQixHQUVHO0FBTEwsV0FBUDs7QUFPSixhQUFLdkosRUFBRSxDQUFDK08sT0FBSCxDQUFXcUIsTUFBaEI7QUFBd0IsaUJBQU8sSUFBUDs7QUFDeEIsYUFBS3BRLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV3FTLEdBQWhCO0FBQ0ksY0FBSTVnQixLQUFLLENBQUN1aUIsU0FBTixJQUFtQixJQUF2QixFQUE2QjtBQUN6QixtQkFBTztBQUFDLHNCQUFRckIsUUFBVDtBQUNILHNCQUFRLFFBREw7QUFFSCx1QkFBU2xoQixLQUFLLENBQUN3aUIsRUFBTixHQUFXdkM7QUFGakIsYUFBUDtBQUlILFdBTEQsTUFLTztBQUNILG1CQUFPO0FBQUMsc0JBQVFpQixRQUFUO0FBQ0gsc0JBQVEsUUFETDtBQUVILHVCQUFTLE1BQUlsaEIsS0FBSyxDQUFDdWlCLFNBQU4sRUFBSixHQUFzQjtBQUY1QixhQUFQO0FBSUg7O0FBQ0wsYUFBSy9pQixFQUFFLENBQUMrTyxPQUFILENBQVd5UCxJQUFoQjtBQUNJLGlCQUFPO0FBQUMsb0JBQVFrRCxRQUFUO0FBQ0gsb0JBQVEsTUFETDtBQUVILHFCQUFTO0FBRk4sV0FBUDs7QUFJSixhQUFLMWhCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV2tVLElBQWhCO0FBQ0ksaUJBQU87QUFBQyxvQkFBUXZCLFFBQVQ7QUFDSCxvQkFBUSxTQURMO0FBRUgscUJBQVNsaEIsS0FBSyxDQUFDd2lCLEVBQU4sR0FBV3ZDO0FBRmpCLFdBQVA7O0FBSUosYUFBS3pnQixFQUFFLENBQUMrTyxPQUFILENBQVdtVSxLQUFoQjtBQUNJLGlCQUFPO0FBQUMsb0JBQVF4QixRQUFUO0FBQ0gsb0JBQVEsVUFBVWxoQixLQUFLLENBQUMyaUIsTUFBaEIsR0FBeUIsU0FBekIsR0FBb0MsT0FEekM7QUFFSCxxQkFBUzNpQixLQUFLLENBQUN3aUIsRUFBTixHQUFXdkM7QUFGakIsV0FBUDs7QUFJSixhQUFLemdCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV3FVLElBQWhCO0FBQ0ksaUJBQU87QUFBQyxvQkFBUTFCLFFBQVQ7QUFDSCxvQkFBUSxTQURMO0FBRUgscUJBQVNsaEIsS0FBSyxDQUFDd2lCLEVBQU4sR0FBV3ZDO0FBRmpCLFdBQVA7O0FBSUosYUFBS3pnQixFQUFFLENBQUMrTyxPQUFILENBQVdzVSxNQUFoQjtBQUNJLGlCQUFPO0FBQUMsb0JBQVEzQixRQUFUO0FBQ0gsb0JBQVEsT0FETDtBQUVILHFCQUFTbGhCLEtBQUssQ0FBQ3dpQixFQUFOLEdBQVd2QztBQUZqQixXQUFQOztBQUlKLGFBQUt6Z0IsRUFBRSxDQUFDK08sT0FBSCxDQUFXOFEsS0FBaEI7QUFDSSxpQkFBTztBQUFDLG9CQUFRNkIsUUFBVDtBQUNILG9CQUFRLE9BREw7QUFFSCxxQkFBU2xoQixLQUFLLENBQUN3aUIsRUFBTixHQUFXdkM7QUFGakIsV0FBUDs7QUFJSixhQUFLemdCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzRRLElBQWhCO0FBQ0ksY0FBSW5mLEtBQUssQ0FBQ2lnQixDQUFOLENBQVFoa0IsTUFBUixJQUFrQixFQUF0QixFQUEwQjtBQUN0QixtQkFBTztBQUFDLHNCQUFRaWxCLFFBQVQ7QUFDSCxzQkFBUSxNQURMO0FBRUgsdUJBQVNsaEIsS0FBSyxDQUFDd2lCLEVBQU4sR0FBV3ZDLENBRmpCO0FBR0gsNkJBQWVqZ0I7QUFIWixhQUFQO0FBS0gsV0FORCxNQU1PO0FBQ0gsbUJBQU87QUFBQyxzQkFBUWtoQixRQUFUO0FBQ0gsc0JBQVEsTUFETDtBQUVILHVCQUFTLFVBQVFsaEIsS0FBSyxDQUFDaWdCLENBQU4sQ0FBUWhrQixNQUFoQixHQUF1QixnQkFGN0I7QUFHSCw2QkFBZStEO0FBSFosYUFBUDtBQUtIOztBQUNMLGFBQUtSLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV2tTLElBQWhCO0FBQ0ksaUJBQU87QUFBQyxvQkFBUVMsUUFBVDtBQUNILG9CQUFRLFlBREw7QUFFSCxxQkFBU2xoQixLQUFLLENBQUN3aUIsRUFBTixHQUFXdkM7QUFGakIsV0FBUDs7QUFJSixhQUFLNkMsTUFBTDtBQUNJLGlCQUFPO0FBQUMsb0JBQVE1QixRQUFUO0FBQ0gsb0JBQVFsaEIsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLFNBQWxCLEdBQThCLE9BRG5DO0FBRUgscUJBQVNBO0FBRk4sV0FBUDs7QUFJSixhQUFLK2lCLE1BQUw7QUFDSSxpQkFBTztBQUFDLG9CQUFRN0IsUUFBVDtBQUNILG9CQUFRLFFBREw7QUFFSCxxQkFBU2xoQjtBQUZOLFdBQVA7O0FBSUosYUFBS3VQLE9BQUw7QUFDSSxpQkFBTztBQUFDLG9CQUFRMlIsUUFBVDtBQUNILG9CQUFRLFNBREw7QUFFSCxxQkFBVWxoQixLQUFLLEdBQUcsTUFBSCxHQUFXO0FBRnZCLFdBQVA7O0FBSUo7QUFDSSxpQkFBTztBQUFDLG9CQUFRa2hCLFFBQVQ7QUFDSCxvQkFBUWxoQixLQUFLLENBQUNxUSxPQUFOLEtBQWtCaGYsU0FBbEIsR0FBOEIyTyxLQUE5QixHQUFzQ0EsS0FBSyxDQUFDcVEsT0FEakQ7QUFFSCxxQkFBU3JRLEtBQUssQ0FBQ3dpQixFQUFOLEtBQWFueEIsU0FBYixHQUF5QjJPLEtBQXpCLEdBQWlDQSxLQUFLLENBQUN3aUIsRUFBTixHQUFXdkM7QUFGbEQsV0FBUDtBQXZGUjtBQTRGSDtBQWhLTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7Ozs7OztBQU1BLFNBQVMrQyxhQUFULENBQXVCQyxNQUF2QixFQUErQkMsUUFBL0IsRUFBeUM7QUFDckMsU0FBT0EsUUFBUSxDQUFDbm1CLE9BQVQsQ0FBaUJrbUIsTUFBakIsSUFBMkIsQ0FBQyxDQUFuQztBQUNIO0FBRUQ7Ozs7Ozs7Ozs7QUFRQSxTQUFTRSxXQUFULENBQXFCNUwsS0FBckIsRUFBNEI7QUFDeEIsTUFBSTZMLENBQUMsR0FBRzdMLEtBQUssQ0FBQzhMLE1BQU4sRUFBUjs7QUFDQSxPQUFJLElBQUk1WCxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUMyWCxDQUFDLENBQUNubkIsTUFBakIsRUFBeUIsRUFBRXdQLENBQTNCLEVBQThCO0FBQzFCLFNBQUksSUFBSTZYLENBQUMsR0FBQzdYLENBQUMsR0FBQyxDQUFaLEVBQWU2WCxDQUFDLEdBQUNGLENBQUMsQ0FBQ25uQixNQUFuQixFQUEyQixFQUFFcW5CLENBQTdCLEVBQWdDO0FBQzVCLFVBQUdGLENBQUMsQ0FBQzNYLENBQUQsQ0FBRCxLQUFTMlgsQ0FBQyxDQUFDRSxDQUFELENBQWIsRUFBa0I7QUFBQ0YsU0FBQyxDQUFDOUgsTUFBRixDQUFTZ0ksQ0FBQyxFQUFWLEVBQWMsQ0FBZDtBQUFrQjtBQUN4QztBQUNKOztBQUVELFNBQU9GLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTRyxXQUFULENBQXFCaE0sS0FBckIsRUFBNEJpTSxRQUE1QixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFDL0MsTUFBSUMsU0FBUyxHQUFHbk0sS0FBSyxDQUFDdE8sTUFBTixDQUFhLFVBQVMwYSxJQUFULEVBQWU7QUFDeEMsV0FBT0YsV0FBVyxDQUFDMW1CLE9BQVosQ0FBb0I0bUIsSUFBcEIsTUFBOEIsQ0FBQyxDQUF0QztBQUNILEdBRmUsQ0FBaEI7QUFHQSxTQUFPUixXQUFXLENBQUNPLFNBQVMsQ0FBQ0wsTUFBVixDQUFpQkcsUUFBakIsQ0FBRCxDQUFsQjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLQSxTQUFTSSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUNyQjtBQUNBLE1BQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxRQUFMLElBQWlCLENBQWpCLEdBQXFCbGYsUUFBUSxDQUFDbWYsY0FBVCxDQUF3QkgsSUFBSSxDQUFDSSxTQUE3QixDQUFyQixHQUErREosSUFBSSxDQUFDRCxTQUFMLENBQWUsS0FBZixDQUEzRSxDQUZxQixDQUlyQjs7QUFDQSxNQUFJTSxLQUFLLEdBQUdMLElBQUksQ0FBQ00sVUFBakI7O0FBQ0EsU0FBTUQsS0FBTixFQUFhO0FBQ1RKLFNBQUssQ0FBQzVlLFdBQU4sQ0FBa0IwZSxTQUFTLENBQUNNLEtBQUQsQ0FBM0I7QUFDQUEsU0FBSyxHQUFHQSxLQUFLLENBQUNFLFdBQWQ7QUFDSDs7QUFFRCxTQUFPTixLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTblEsTUFBVCxDQUFnQmlOLEdBQWhCLEVBQXFCO0FBQ3hCLFNBQU9BLEdBQUcsQ0FBQzFjLE9BQUosQ0FBWSxVQUFaLEVBQXdCLE1BQXhCLENBQVA7QUFDSDtBQUVEOzs7Ozs7OztBQU9BLFNBQVNtZ0IsYUFBVCxDQUF1Qi9vQixHQUF2QixFQUEyQndXLEdBQTNCLEVBQWdDO0FBQzVCLFNBQU96VyxJQUFJLENBQUNpcEIsS0FBTCxDQUFXanBCLElBQUksQ0FBQ2twQixNQUFMLE1BQWV6UyxHQUFHLEdBQUN4VyxHQUFKLEdBQVEsQ0FBdkIsSUFBMEJBLEdBQXJDLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTeUYsVUFBVCxDQUFvQjZmLEdBQXBCLEVBQXlCO0FBQ3JCLFNBQU9BLEdBQUcsQ0FBQzFjLE9BQUosQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLEVBQ0ZBLE9BREUsQ0FDTSxJQUROLEVBQ1ksTUFEWixFQUVGQSxPQUZFLENBRU0sSUFGTixFQUVZLE1BRlosRUFHRkEsT0FIRSxDQUdNLElBSE4sRUFHWSxRQUhaLEVBSUZBLE9BSkUsQ0FJTSxJQUpOLEVBSVksUUFKWixDQUFQO0FBS0g7QUFFRDs7Ozs7QUFHQSxJQUFJLE9BQU9zZ0IsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNoQ0EsU0FBTyxDQUFDQyxZQUFSLENBQXFCL2xCLFNBQXJCLENBQStCZ21CLE9BQS9CLEdBQXlDLFlBQVc7QUFDaEQsUUFBSUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBZDtBQUNBLFFBQUlobEIsS0FBSyxHQUFHK2tCLE9BQU8sQ0FBQ0UsU0FBUixHQUFvQixDQUFoQztBQUFBLFFBQ0lobEIsTUFBTSxHQUFHOGtCLE9BQU8sQ0FBQ0csVUFEckI7QUFFQSxRQUFJQyxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQixLQUFsQixDQUFiO0FBQ0EsUUFBSTlFLENBQUMsR0FBRyxDQUFSO0FBQUEsUUFBV25RLENBQUMsR0FBRyxDQUFmO0FBQUEsUUFDSWtWLGdCQUFnQixHQUFHcGxCLE1BQU0sR0FBQ2tsQixNQUFNLENBQUM5b0IsTUFEckM7O0FBRUEsU0FBSyxJQUFJd1AsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NaLE1BQU0sQ0FBQzlvQixNQUEzQixFQUFtQ3dQLENBQUMsRUFBcEMsRUFBdUM7QUFDbkM7QUFDQSxVQUFJc00sS0FBSyxHQUFHZ04sTUFBTSxDQUFDdFosQ0FBRCxDQUFsQjtBQUNBLFVBQUkwRCxVQUFVLEdBQUc0SSxLQUFLLENBQUNtTixzQkFBTixFQUFqQjs7QUFDQSxVQUFJelosQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNSc0UsU0FBQyxHQUFHLENBQUo7QUFDSCxPQUZELE1BRU87QUFDSEEsU0FBQyxHQUFHLENBQUNaLFVBQVUsQ0FBQ1ksQ0FBWixHQUFjc1UsYUFBYSxDQUFDLEVBQUQsRUFBS3prQixLQUFMLENBQS9CO0FBQ0g7O0FBQ0RtWSxXQUFLLENBQUNvTixNQUFOLENBQWFwVixDQUFiLEVBQ2EsQ0FBQ1osVUFBVSxDQUFDK1EsQ0FBWixHQUFjQSxDQUQzQjtBQUVBQSxPQUFDLEdBQUdBLENBQUMsR0FBR21FLGFBQWEsQ0FBQyxDQUFELEVBQUlZLGdCQUFKLENBQXJCO0FBQ0g7QUFDSixHQXBCRDtBQXFCSDtBQUVEOzs7Ozs7QUFJQSxTQUFTRyxZQUFULENBQXNCeGMsTUFBdEIsRUFBOEJsSixNQUE5QixFQUFzQzJsQixTQUF0QyxFQUFpRDtBQUM3QyxPQUFLLElBQUk1WixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHN0MsTUFBTSxDQUFDM00sTUFBM0IsRUFBbUN3UCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUk3RSxPQUFPLEdBQUdnQyxNQUFNLENBQUM2QyxDQUFELENBQXBCOztBQUNBLFFBQUk0WixTQUFTLENBQUN6ZSxPQUFELENBQWIsRUFBd0I7QUFDcEJnQyxZQUFNLENBQUMwUyxNQUFQLENBQWM3UCxDQUFkLEVBQWlCLENBQWpCO0FBQ0EvTCxZQUFNLENBQUNrQixJQUFQLENBQVlnRyxPQUFaO0FBQ0E2RSxPQUFDO0FBQ0o7QUFDSjtBQUNKO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVM2WixXQUFULENBQXFCQyxHQUFyQixFQUF5QjtBQUNyQixTQUFRQSxHQUFHLFlBQVkvbEIsRUFBRSxDQUFDK08sT0FBSCxDQUFXa1MsSUFBM0IsSUFDRjhFLEdBQUcsWUFBWS9sQixFQUFFLENBQUMrTyxPQUFILENBQVc0USxJQUR4QixJQUVGb0csR0FBRyxZQUFZL2xCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBVzhRLEtBRnhCLElBR0ZrRyxHQUFHLFlBQVkvbEIsRUFBRSxDQUFDK08sT0FBSCxDQUFXa1UsSUFIeEIsSUFJRjhDLEdBQUcsWUFBWS9sQixFQUFFLENBQUMrTyxPQUFILENBQVdxVSxJQUp4QixJQUtGMkMsR0FBRyxZQUFZL2xCLEVBQUUsQ0FBQytPLE9BQUgsQ0FBV3NVLE1BTHhCLElBTUYwQyxHQUFHLFlBQVkvbEIsRUFBRSxDQUFDK08sT0FBSCxDQUFXcVMsR0FOeEIsSUFPRjJFLEdBQUcsWUFBWS9sQixFQUFFLENBQUMrTyxPQUFILENBQVdpWCxHQVAvQixDQURxQixDQVNyQjtBQUNBO0FBQ0g7O0FBRUQsU0FBU0MsU0FBVCxDQUFtQkYsR0FBbkIsRUFBdUI7QUFDbkIsU0FBT0EsR0FBRyxZQUFZL0wsTUFBZixJQUF5QixjQUFjK0wsR0FBOUM7QUFDSDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTNUcsY0FBVCxDQUF3QjRHLEdBQXhCLEVBQTRCO0FBQ3hCLE1BQUlHLENBQUo7QUFDQSxNQUFJQyxHQUFKO0FBQ0EsTUFBSWxhLENBQUo7QUFDQSxNQUFJbWEsR0FBSixDQUp3QixDQUt4Qjs7QUFDQSxNQUFJTixXQUFXLENBQUNDLEdBQUQsQ0FBZixFQUFxQjtBQUNqQjtBQUNBLFdBQU9BLEdBQVA7QUFDSCxHQUhELE1BR08sSUFBSS9MLE1BQU0sQ0FBQzlhLFNBQVAsQ0FBaUJ1TixRQUFqQixDQUEwQjRaLElBQTFCLENBQStCTixHQUEvQixNQUF3QyxnQkFBNUMsRUFBOEQ7QUFDakU7QUFDQUssT0FBRyxHQUFHLEVBQU47O0FBQ0EsU0FBS25hLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzhaLEdBQUcsQ0FBQ3RwQixNQUFwQixFQUE0QixFQUFFd1AsQ0FBOUIsRUFBaUM7QUFDN0I7QUFDQSxVQUFJcWEsTUFBTSxHQUFHUCxHQUFHLENBQUM5WixDQUFELENBQWhCOztBQUNBLFVBQUcsQ0FBQzZaLFdBQVcsQ0FBQ1EsTUFBRCxDQUFmLEVBQXdCO0FBQ3BCRixXQUFHLENBQUNobEIsSUFBSixDQUFTK2QsY0FBYyxDQUFDbUgsTUFBRCxDQUF2QjtBQUNILE9BRkQsTUFFSztBQUNERixXQUFHLENBQUNobEIsSUFBSixDQUFTa2xCLE1BQVQ7QUFDSDtBQUNKOztBQUNELFdBQU8sSUFBSXRtQixFQUFFLENBQUMrTyxPQUFILENBQVc0USxJQUFmLENBQW9CeUcsR0FBcEIsQ0FBUDtBQUNILEdBYk0sTUFhQSxJQUFJTCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUFDO0FBQ3RCLFdBQU8vbEIsRUFBRSxDQUFDK08sT0FBSCxDQUFXeVAsSUFBWCxDQUFnQkMsS0FBdkI7QUFDSCxHQUZNLE1BRUEsSUFBSSxRQUFPc0gsR0FBUCxNQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFFBQUcsQ0FBQ0QsV0FBVyxDQUFDQyxHQUFELENBQWYsRUFBcUI7QUFDakI7QUFDQUksU0FBRyxHQUFHLEVBQU4sQ0FGaUIsQ0FFUjs7QUFDVCxXQUFLRCxDQUFMLElBQVVILEdBQVYsRUFBZTtBQUNYO0FBQ0FJLFdBQUcsQ0FBQy9rQixJQUFKLENBQVMrZCxjQUFjLENBQUMrRyxDQUFELENBQXZCLEVBRlcsQ0FHWDs7QUFDQUMsV0FBRyxDQUFDL2tCLElBQUosQ0FBUytkLGNBQWMsQ0FBQzRHLEdBQUcsQ0FBQ0csQ0FBRCxDQUFKLENBQXZCO0FBQ0gsT0FSZ0IsQ0FTakI7OztBQUNBLGFBQU8sSUFBSWxtQixFQUFFLENBQUMrTyxPQUFILENBQVdrUyxJQUFmLENBQW9Ca0YsR0FBcEIsQ0FBUDtBQUNILEtBWEQsTUFXSztBQUNELGFBQU9KLEdBQVA7QUFDSDtBQUNKLEdBZk0sTUFlQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxXQUFPLElBQUkvbEIsRUFBRSxDQUFDK08sT0FBSCxDQUFXcVMsR0FBZixDQUFtQjJFLEdBQW5CLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTy9sQixFQUFFLENBQUMrTyxPQUFILENBQVd3WCxLQUFYLENBQWlCUixHQUFqQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFNBQW5CLEVBQThCO0FBQ2pDLFdBQU8sSUFBSS9sQixFQUFFLENBQUMrTyxPQUFILENBQVdrVSxJQUFmLENBQW9COEMsR0FBcEIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFHLE9BQU9BLEdBQVAsS0FBZSxVQUFsQixFQUE4QjtBQUNqQyxXQUFPLElBQUkvbEIsRUFBRSxDQUFDK08sT0FBSCxDQUFXcVMsR0FBZixDQUFtQjJFLEdBQUcsQ0FBQzV5QixJQUF2QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQ3BPRCxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZpbGVTeXN0ZW0sIG1ha2VNb2RlbEZpbGUsIFVOREVMRVRBQkxFX0ZJTEVTLCBVTlJFTkFNQUJMRV9GSUxFU30gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7VHJhY2V9IGZyb20gXCIuL3RyYWNlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvbnNvbGV9IGZyb20gXCIuL2NvbnNvbGVcIjtcclxuaW1wb3J0IHtCbG9ja1B5RmVlZGJhY2t9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1ham9yIGVudHJ5IHBvaW50IGZvciBjcmVhdGluZyBhIEJsb2NrUHkgaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gLSBVc2VyIGxldmVsIHNldHRpbmdzIChlLmcuLCB3aGF0IGVkaXRvciBtb2RlLCB3aGV0aGVyIHRvIG11dGUgc2VtYW50aWMgZXJyb3JzLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2lnbm1lbnQgLSBBc3NpZ25tZW50IGxldmVsIHNldHRpbmdzIChkYXRhIGFib3V0IHRoZSBsb2FkZWQgYXNzaWdubWVudCwgdXNlciwgc3VibWlzc2lvbiwgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWJtaXNzaW9uIC0gSW5jbHVkZXMgdGhlIHNvdXJjZSBjb2RlIG9mIGFueSBwcm9ncmFtcyB0byBiZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbikge1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NpZ25tZW50KGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgQmxvY2tQeSBvYmplY3QgYnkgaW5pdGlhbGl6aW5nIGl0cyBpbnRlcmZhY2UsXHJcbiAgICAgKiBtb2RlbCwgYW5kIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLmluaXRVdGlsaXRpZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbE1ldGhvZHMoKTtcclxuICAgICAgICB0aGlzLnR1cm5PbkhhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBkZWZhdWx0IHZhbHVlIG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHVwIGEgdmFsdWUgZm9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlIC0gaWYgdGhlIGtleSBpcyBub3QgZm91bmQgYW55d2hlcmUsIHVzZSB0aGlzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhbFNldHRpbmdzXy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFNldHRpbmdzXy5nZXQoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtb2RlbCB0byBpdHMgZGVmYXVsdHMuXHJcbiAgICAgKlxyXG4gICAgICogQ2F0ZWdvcmllczpcclxuICAgICAqICAgKiB1c2VyOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHVzZXIgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogYXNzaWdubWVudDogdmFsdWVzIGZvciB0aGUgY3VycmVudCBhc3NpZ25tZW50IChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIHN1Ym1pc3Npb246IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgc3VibWlzc2lvbiAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBkaXNwbGF5OiBmbGFncyByZWxhdGVkIHRvIGN1cnJlbnQgdmlzaWJpbGl0eSAoc3RvcmVkIHRvIGxvY2FsU2V0dGluZ3MpXHJcbiAgICAgKiAgICogc3RhdHVzOiBtZXNzYWdlcyByZWxhdGVkIHRvIGN1cnJlbnQgc3RhdHVzIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGV4ZWN1dGlvbjogdmFsdWVzIHJlbGF0ZWQgdG8gbGFzdCBydW4gKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogY29uZmlndXJhdGlvbjogY29uc3RhbnQgdmFsdWVzIHJlbGF0ZWQgdG8gc2V0dXAgKG5vdCBzdG9yZWQpXHJcbiAgICAgKi9cclxuICAgIGluaXRNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5sb2NhbFNldHRpbmdzXyA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwibG9jYWxTZXR0aW5nc1wiKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXyA9IGNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmlkXCJdKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIubmFtZVwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgeW91IGFyZSBhbiBPd25lciAoY2FuIG1vZGlmeSB0aGUgYXNzaWdubWVudCksIEdyYWRlciAoY2FuIHZpZXdcclxuICAgICAgICAgICAgICAgICAqIHRoZSBhc3NpZ25tZW50cycgaW5mb3JtYXRpb24pIG9yIFN0dWRlbnQgKGNhbiBub3Qgc2VlIGFueSBpbnN0cnVjdG9yIHN0dWZmKS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByb2xlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInVzZXIucm9sZVwiLCB0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBbnkgYWRkaXRpb25hbCBmaWxlcyBmb3IgdGhlIGFzc2lnbm1lbnQncyBpbnN0cnVjdG9yIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0pLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fY2hhbmdlXCJdKSxcclxuICAgICAgICAgICAgICAgIG9uRXZhbDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ldmFsXCJdKSxcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGVBcnJheShbbWFrZU1vZGVsRmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIsIGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0pXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgdXNlciBpcyBhbGxvd2VkIHRvIGVkaXQgdGhlIGZpbGUgZGlyZWN0bHlcclxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBjYW5FZGl0OiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmNhbl9lZGl0XCJdKSxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgdXNlciBjYW4gdXNlIGJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbkJsb2Nrczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5jYW5fYmxvY2tzXCJdKSxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHRvIHByZXZlbnQgdGltZW91dHMgKHBvdGVudGlhbGx5IGFsbG93IGluZmluaXRlIGxvb3BzKVxyXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVUaW1lb3V0OiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmRpc2FibGVfdGltZW91dFwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB0b29sYm94TGV2ZWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQudG9vbGJveF9sZXZlbFwiXSB8fCBcIm5vcm1hbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGVuIHRoZSBzdHVkZW50IG9wZW5zIHRoaXMgYXNzaWdubWVudCwgd2hhdCBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW5cclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBzdGFydFZpZXc6IGtvLm9ic2VydmFibGUoRGlzcGxheU1vZGVzLlNQTElUKSxcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHRoaXMgYSBwYXJzb24ncyBzdHlsZSBxdWVzdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUGFyc29uczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pc19wYXJzb25zXCJdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGV0aGVyIHRvIGV2ZW4gdHJ5IHRvIHJ1biBmZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGZWVkYmFjazoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hldGhlciB0byBpbW1lZGlhdGVseSBzdGFydCBpbiBJbnRlcmFjdGl2ZSBDb25zb2xlIG1vZGVcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEludGVyYWN0aXZlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0X2ludGVyYWN0aXZlXCJdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtYWtlIHRoZSByZXN0IG9mIHRoZXNlIGJhc2VkIG9uIGNvbmZpZ3VyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBoaWRlU2NvcmU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVGaWxlczoga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRWRpdG9yOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlQWxsOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlSW1wb3J0RGF0YXNldHNCdXR0b246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVJbXBvcnRTdGF0ZW1lbnRzOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlUXVldWVkSW5wdXRzOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVDb3ZlcmFnZUJ1dHRvbjoga28ub2JzZXJ2YWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBrby5vYnNlcnZhYmxlQXJyYXkoW21ha2VNb2RlbEZpbGUoXCJhbnN3ZXIucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnRseSB2aXNpYmxlIEZpbGUsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgaW5zdHJ1Y3RvciBzZXR0aW5ncyBhbmQgZmlsZXNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkuaW5zdHJ1Y3RvclwiLCBcInRydWVcIik9PT1cInRydWVcIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgdGhlIHByaW50ZXIgZnJvbSBzaG93aW5nIHRoaW5nc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBtdXRlUHJpbnRlcjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIChQeXRob24gVmlld3MpIFRoZSBjdXJyZW50IGVkaXRvciBtb2RlLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0Rpc3BsYXlNb2Rlc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHl0aG9uTW9kZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5LnB5dGhvbi5tb2RlXCIsIERpc3BsYXlNb2Rlcy5TUExJVCkpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdGF0dXM6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gZmVlZGJhY2sgZnJvbSB0aGUgaW5zdHJ1Y3RvciBydW5cclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyIChtYXJrZG93bilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiKlJlYWR5KlwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzRXJyb3I6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNVbmNvdmVyZWQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3VsdHMgb2YgdGhlIGxhc3QgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRnVuY3Rpb25zIHRvIGZpcmUgd2hlbiBjZXJ0YWluIGV2ZW50cyBvY2N1clxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGVuIHRoZSBzdHVkZW50IGdldHMgYSBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiY2FsbGJhY2suc3VjY2Vzc1wiXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzZXJ2ZXIgaXMgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbm5lY3RlZDoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJzZXJ2ZXIuY29ubmVjdGVkXCIsIHRydWUpKSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYmxvY2tseVBhdGg6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYmxvY2tseS5wYXRoXCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50UG9pbnQ6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYXR0YWNobWVudC5wb2ludFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIEpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIE1hcHMgY29kZXMgKCdsb2dfZXZlbnQnLCAnc2F2ZV9jb2RlJykgdG8gVVJMc1xyXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJ1cmxzXCJdIHx8IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBpbml0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGxldCBjb25zdGFudHMgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgbGV0IGd1aSA9IG1ha2VJbnRlcmZhY2UodGhpcyk7XHJcbiAgICAgICAgY29uc3RhbnRzLmNvbnRhaW5lciA9ICQoY29uc3RhbnRzLmF0dGFjaG1lbnRQb2ludCkuaHRtbCgkKGd1aSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5sb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kZWxNZXRob2RzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIG1vZGVsLnVpID0ge1xyXG4gICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0dyYWRlcjoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJvd25lclwiIHx8IG1vZGVsLnVzZXIucm9sZSgpID09PSBcImdyYWRlclwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWNvbmRSb3c6IHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZGJhY2tWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDS1xyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzVHJhY2VWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29uc29sZVNob3dWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUoKSB8fCBtb2RlbC51aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaExhYmVsOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3IFRyYWNlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgYWR2YW5jZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQYW5lbCA9IG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25zb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTJcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTZcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm8tZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJydW50aW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJSdW50aW1lIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzeW50YXhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlN5bnRheCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJFZGl0b3IgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImludGVybmFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnRlcm5hbCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VtYW50aWNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuYWx5emVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGdvcml0aG0gRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVmb3JlIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCA9PT0gbGFzdFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluaXNoZWQgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXS5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5taW4oMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLmxhc3RTdGVwKCksIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAobmV4dCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VEYXRhW3N0ZXBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxlczoge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkgfHwgIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoYXNDb250ZW50czogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5zd2VyLnB5XCI6IHJldHVybiBtb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFpbnN0cnVjdGlvbnMubWRcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9tb2NrX3VybHMuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRvcnM6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lZGl0b3JzLmdldEVkaXRvcihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdmlldzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmNvZGUobW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIl5zdGFydGluZ19jb2RlLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IFwiYW5zd2VyLnB5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5TYXZlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhbW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpKSxcclxuICAgICAgICAgICAgICAgIGNhbkRlbGV0ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgY2FuUmVuYW1lOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5SRU5BTUFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIHB5dGhvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGVNaXJyb3IgPSBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5ieU5hbWUoXCJweXRob25cIikuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGU6IHtcclxuICAgICAgICAgICAgICAgIHJ1bjogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogKGVuZHBvaW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItc3RhdHVzLVwiICsgbW9kZWwuc3RhdHVzW2VuZHBvaW50XSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNFbmRwb2ludENvbm5lY3RlZDogKGVuZHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJsc1tlbmRwb2ludF0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEhpc3RvcnlNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZERhdGFzZXRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9nRXZlbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3RhdHVzTWVzc2FnZSgpIHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25IYWNrcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseXMgdGhlIEtub2Nrb3V0SlMgYmluZGluZ3MgdG8gdGhlIG1vZGVsLCBpbnN0YW50aWF0aW5nIHRoZSB2YWx1ZXMgaW50byB0aGVcclxuICAgICAqIEhUTUwuXHJcbiAgICAgKi9cclxuICAgIGFwcGx5TW9kZWwoKSB7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VXRpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICB0aGlzLnV0aWxpdGllcyA9IHtcclxuICAgICAgICAgICAgbWFya2Rvd246ICh0ZXh0KSA9PiB0ZXh0ID8gRWFzeU1ERS5wcm90b3R5cGUubWFya2Rvd24odGV4dCkgOiBcIjxwPjwvcD5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXI7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMgPSB7fTtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgLy8gRWFjaCBvZiB0aGVzZSBjb21wb25lbnRzIHdpbGwgdGFrZSB0aGUgQmxvY2tQeSBpbnN0YW5jZSwgYW5kIHBvc3NpYmx5IGFcclxuICAgICAgICAvLyByZWZlcmVuY2UgdG8gdGhlIHJlbGV2YW50IEhUTUwgbG9jYXRpb24gd2hlcmUgaXQgd2lsbCBiZSBlbWJlZGRlZC5cclxuICAgICAgICBjb21wb25lbnRzLmZlZWRiYWNrID0gbmV3IEJsb2NrUHlGZWVkYmFjayhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmVuZ2luZSA9IG5ldyBCbG9ja1B5RW5naW5lKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmlsZVN5c3RlbSA9IG5ldyBCbG9ja1B5RmlsZVN5c3RlbShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmVkaXRvcnMgPSBuZXcgRWRpdG9ycyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWVkaXRvclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBUcmFjZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvbnNvbGUgPSBuZXcgQmxvY2tQeUNvbnNvbGUobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1jb25zb2xlXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgVE9ET1xyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1wb3B1cFwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50b29sYmFyID0gbmV3IEJsb2NrUHlUb29sYmFyKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktdG9vbGJhclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXJ2ZXIgPSBuZXcgQmxvY2tQeVNlcnZlcihtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvcmdpcyA9IG5ldyBCbG9ja1B5Q29yZ2lzKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuaGlzdG9yeSA9IG5ldyBCbG9ja1B5SGlzdG9yeShtYWluKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSB3aGVyZSBwcmludGluZyBhbmQgcGxvdHRpbmcgaXMgb3V0cHV0ZWQuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZSB1c2VyIG1vZGlmaWVzIGEgZmlsZSwgdGhlbiBtYWtlIHRoZSBjb25zb2xlIGxvb2sgZmFkZWQgYSBsaXR0bGVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlciwgaW5jbHVkaW5nIHJlbW92aW5nIGFueSB0ZXh0IGluIGl0IGFuZFxuICAgICAqIGZpeGluZyBpdHMgc2l6ZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyXCIpLmVtcHR5KCk7XG4gICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLm5ld1R1cnRsZSgpLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhbmQgcmV0dXJuIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gb2YgdGhlIHByaW50ZXIuIFRoaXNcbiAgICAgKiBpbnZvbHZlcyBjYWxjdWxhdGluZyBpdHMgc2l6ZSwgYW1vbmcgb3RoZXIgb3BlcmF0aW9ucy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByaW50ZXIuXG4gICAgICovXG4gICAgZ2V0Q29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgdmFyIHByaW50ZXIgPSB0aGlzO1xuICAgICAgICB0aGlzLnByaW50ZXJTZXR0aW5nc1tcInByaW50SHRtbFwiXT0gZnVuY3Rpb24oaHRtbCwgdmFsdWUpIHsgcHJpbnRlci5wcmludEh0bWwoaHRtbCwgdmFsdWUpO307XG4gICAgICAgIHRoaXMucHJpbnRlclNldHRpbmdzW1wid2lkdGhcIl09IE1hdGgubWluKDUwMCwgdGhpcy50YWcud2lkdGgoKS00MCk7XG4gICAgICAgIHRoaXMucHJpbnRlclNldHRpbmdzW1wicG5nTW9kZVwiXT0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcmludGVyU2V0dGluZ3NbXCJza2lwRHJhd2luZ1wiXT0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJpbnRlclNldHRpbmdzW1wiaGVpZ2h0XCJdPSBNYXRoLm1pbig1MDAsIHRoaXMudGFnLmhlaWdodCgpKzQwKTtcbiAgICAgICAgdGhpcy5wcmludGVyU2V0dGluZ3NbXCJjb250YWluZXJcIl09IHRoaXMudGFnWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludGVyU2V0dGluZ3M7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhbmQgcmV0dXJuIGEgc3RhdGljIGRpc2FibGVkIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHByaW50ZXIuIFRoaXNcbiAgICAgKiBwcmludGVyIHdpbGwgYmUgdW5hYmxlIHRvIGRvIG1vc3QgdGFza3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcmludGVyLlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXREaXNhYmxlZENvbmZpZ3VyYXRpb24oKSB7XG4gICAgICAgIHZhciBwcmludGVyU2V0dGluZ3MgPSB7fTtcbiAgICAgICAgcHJpbnRlclNldHRpbmdzW1wicHJpbnRIdG1sXCJdPSBmdW5jdGlvbihodG1sLCB2YWx1ZSkgeyBjb25zb2xlLmxvZyhodG1sLCB2YWx1ZSk7fTtcbiAgICAgICAgcHJpbnRlclNldHRpbmdzW1wid2lkdGhcIl09IDUwMDtcbiAgICAgICAgcHJpbnRlclNldHRpbmdzW1wicG5nTW9kZVwiXT0gZmFsc2U7XG4gICAgICAgIHByaW50ZXJTZXR0aW5nc1tcInNraXBEcmF3aW5nXCJdPSB0cnVlO1xuICAgICAgICBwcmludGVyU2V0dGluZ3NbXCJoZWlnaHRcIl09IDUwMDtcbiAgICAgICAgcHJpbnRlclNldHRpbmdzW1wiY29udGFpbmVyXCJdPSBudWxsO1xuICAgICAgICByZXR1cm4gcHJpbnRlclNldHRpbmdzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgJCh0aGlzLnByaW50ZXIpLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBzdWNjZXNzZnVsIGxpbmUgdG8gdGhlIG9uLXNjcmVlbiBwcmludGVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lVGV4dCAtIEEgbGluZSBvZiB0ZXh0IHRvIGJlIHByaW50ZWQgb3V0LlxuICAgICAqL1xuICAgIHByaW50KGxpbmVUZXh0KSB7XG4gICAgICAgIC8vIFNob3VsZCBwcm9iYWJseSBiZSBhY2Nlc3NpbmcgdGhlIG1vZGVsIGluc3RlYWQgb2YgYSBjb21wb25lbnQuLi5cbiAgICAgICAgdmFyIHN0ZXBOdW1iZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XG4gICAgICAgIHZhciBsaW5lTnVtYmVyID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lX251bWJlcjtcbiAgICAgICAgLy8gUGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFuaW5nXG4gICAgICAgIGlmIChsaW5lVGV4dCAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQucHVzaChsaW5lVGV4dC5zbGljZSgwLCAtMSkpO1xuICAgICAgICAgICAgdmFyIGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTChsaW5lVGV4dCk7XG4gICAgICAgICAgICBpZiAoISh0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3MubXV0ZV9wcmludGVyKCkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmVDb250YWluZXIgPSAkKFwiPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyLW91dHB1dCcgPlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1zdGVwXCI6IHN0ZXBOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIFwiaHRtbFwiOiBlbmNvZGVkVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0ZXAgXCIrc3RlcE51bWJlciArIFwiLCBMaW5lIFwiK2xpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGluZUNvbnRhaW5lci5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB0byB0aGUgY3VycmVudCB0ZXh0XG4gICAgICAgICAgICAgICAgdGhpcy50YWcuYXBwZW5kKGxpbmVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGxpbmVEYXRhLnRvb2x0aXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmludHMgYSBzdWNjZXNzZnVsIEhUTUwgYmxvYiB0byB0aGUgcHJpbnRlci4gVGhpcyBpcyB0eXBpY2FsbHkgY2hhcnRzLFxuICAgICAqIGJ1dCBpdCBjYW4gYWN0dWFsbHkgYmUgYW55IGtpbmQgb2YgSFRNTC4gVGhpcyB3aWxsIHByb2JhYmx5IGJlIHVzZWZ1bCBmb3JcbiAgICAgKiBkb2luZyBUdXJ0bGUgYW5kIFByb2Nlc3Npbmcgc3R1ZmYgZG93biB0aGUgcm9hZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTH0gaHRtbCAtIEEgYmxvYiBvZiBIVE1MIHRvIHJlbmRlciBpbiB0aGUgdGFnXG4gICAgICogQHBhcmFtIHtBbnl0aGluZ30gdmFsdWUgLSBhIHZhbHVlIHRvIHB1c2ggb24gdGhlIG91dHB1dExpc3QgZm9yIGNvbXBhcmlzb24uIEZvciBpbnN0YW5jZSwgb24gY2hhcnRzIHRoaXMgaXMgdHlwaWNhbGx5IHRoZSBkYXRhIG9mIHRoZSBjaGFydC5cbiAgICAgKi9cbiAgICBwcmludEh0bWwoY2hhcnQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBzdGVwID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGVwKCk7XG4gICAgICAgIHZhciBsaW5lID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5saW5lX251bWJlcigpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgaWYgKCEodGhpcy5tYWluLm1vZGVsLnNldHRpbmdzLm11dGVfcHJpbnRlcigpKSkge1xuICAgICAgICAgICAgdmFyIG91dGVyRGl2ID0gJChTay5jb25zb2xlLnBuZ19tb2RlID8gY2hhcnQgOiBjaGFydFswXSk7Ly8ucGFyZW50KCk7XG4gICAgICAgICAgICBvdXRlckRpdi5wYXJlbnQoKS5zaG93KCk7XG4gICAgICAgICAgICBvdXRlckRpdi5hdHRyKHtcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgLy9cImRhdGEtY29udGFpbmVyXCI6ICcjJytjaGFydC5hdHRyKFwiaWRcIiksXG4gICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtc3RlcFwiOiBzdGVwLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiK3N0ZXArXCIsIExpbmUgXCIrbGluZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvdXRlckRpdi50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVW5jb25kaXRpb25hbGx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy50YWcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLnByb3AoXCJzY3JvbGxIZWlnaHRcIikgLSB0aGlzLnRhZy5wcm9wKFwiY2xpZW50SGVpZ2h0XCIpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dEZ1bmN0aW9uKHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucHJpbnRJbnB1dChwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgaWYgKHJlc3VsdC5wcm9taXNlKSB7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgICAgICBsZXQgc3VibWl0dGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlT25DbGljayA9IHJlc29sdmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2socmVzdWx0LmlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuaW5wdXQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5idXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc3VsdC5idXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgICAgICByZXN1bHQuaW5wdXQua2V5dXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc3VsdC5pbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFByb21pc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9tcHRNZXNzYWdlIC0gYSBtZXNzYWdlIHRvIHJlbmRlciBiZWZvcmUgdGhlIGlucHV0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gUmV0dXJucyB0aGUgaGFuZGxlIG9uIHRoZSBtZXNzYWdlIGJveC5cbiAgICAgKi9cbiAgICBwcmludElucHV0KHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgLy8gU2hvdWxkIHByb2JhYmx5IGJlIGFjY2Vzc2luZyB0aGUgbW9kZWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudC4uLlxuICAgICAgICB2YXIgc3RlcE51bWJlciA9IHRoaXMubWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcDtcbiAgICAgICAgdmFyIGxpbmVOdW1iZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmVfbnVtYmVyO1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHByb21wdE1lc3NhZ2UgIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIHZhciBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwocHJvbXB0TWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAoISh0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3MubXV0ZV9wcmludGVyKCkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0TXNnID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgIHtcImh0bWxcIjogZW5jb2RlZFRleHR9KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRCdG4gPSAkKFwiPGJ1dHRvbj48L2J1dHRvbj5cIiwge1wiaHRtbFwiOiBcIkVudGVyXCJ9KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJibG9ja3B5LXByaW50ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtc3RlcFwiOiBzdGVwTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiK3N0ZXBOdW1iZXIgKyBcIiwgTGluZSBcIitsaW5lTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoaW5wdXRNc2cpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjxicj5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5wdXRGb3JtKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0QnRuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZy5hcHBlbmQoaW5wdXRCb3gpO1xuICAgICAgICAgICAgICAgIGlucHV0Qm94LnRvb2x0aXAoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiaW5wdXRcIjogaW5wdXRGb3JtLCBcImJ1dHRvblwiOiBpbnB1dEJ0biwgXCJwcm9taXNlXCI6IHRydWV9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XCJwcm9taXNlXCI6IGZhbHNlfTtcbiAgICB9O1xuXG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY0ODEzMzExMTI3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjQ4MTMzMTExMzVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LXBvcHVwIG1vZGFsIGhpZGRlbidcbiAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgYXJpYS1sYWJlbD0nRGlhbG9nJ1xuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nJyBzdHlsZT0nd2lkdGg6NzUwcHgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCcgcm9sZT0ncmVnaW9uJyBhcmlhLWxhYmVsPSdEaWFsb2cgY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+RHluYW1pYyBDb250ZW50PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1ib2R5JyBzdHlsZT0nd2lkdGg6MTAwJTsgaGVpZ2h0OjQwMHB4OyB3aGl0ZS1zcGFjZTpwcmUtd3JhcCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbi8qKlxuICogQSB1dGlsaXR5IG9iamVjdCBmb3IgcXVpY2tseSBhbmQgY29udmVuaWVudGx5IGdlbmVyYXRpbmcgZGlhbG9nIGJveGVzLlxuICogVW5mb3J0dW5hdGVseSwgdGhpcyBkb2Vzbid0IGR5bmFtaWNhbGx5IGNyZWF0ZSBuZXcgYm94ZXM7IGl0IHJldXNlcyB0aGUgc2FtZSBvbmVcbiAqIG92ZXIgYW5kIG92ZXIgYWdhaW4uIEl0IHR1cm5zIG91dCBkeW5hbWljYWxseSBnZW5lcmF0aW5nIG5ldyBkaWFsb2cgYm94ZXNcbiAqIGlzIGEgcGFpbiEgU28gd2UgY2FuJ3Qgc3RhY2sgdGhlbS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RGlhbG9nfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuICAgIFxuICAgIHRoaXMudGl0bGVUYWcgPSB0YWcuZmluZChcIi5tb2RhbC10aXRsZVwiKTtcbiAgICB0aGlzLmJvZHlUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1ib2R5XCIpO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHkgLSBUaGUgYm9keSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmNsb3NlIC0gQSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGRpYWxvZy5cbiAqL1xuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy50YWcuZHJhZ2dhYmxlKHtcbiAgICAgICAgXCJoYW5kbGVcIjogXCIubW9kYWwtdGl0bGVcIlxuICAgIH0pO1xuICAgIFxuICAgIHRoaXMudGFnLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChvbmNsb3NlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCJpbXBvcnQge0VkaXRvcnN9IGZyb20gXCIuLi9lZGl0b3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGUgPT5cclxuICAgICAgICBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS51cGxvYWRGaWxlKGUpXHJcbiAgICApO1xyXG4gICAgZmlsZVJlYWRlci5maWxlTmFtZSA9IGZpbGVzWzBdLm5hbWU7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQge25hbWUsIGV4dGVuc2lvbiwgY29udGVudHMsIG1pbWV0eXBlfSA9IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgLy8gTWFrZSBzYWZlXHJcbiAgICBuYW1lID0gc2x1Z2dpZnkobmFtZSk7XHJcbiAgICBuYW1lID0gbmFtZSArIGV4dGVuc2lvbjtcclxuICAgIC8vIE1ha2UgdGhlIGRhdGEgZG93bmxvYWQgYXMgYSBmaWxlXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1ldHlwZX0pO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBuYW1lKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5RG93bmxvYWRMaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtID0gbWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW07XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZURlbGV0ZWQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIHRoZSBwcmV2aW91cyBmaWxlIGluc3RlYWQgb2YgYSBkZWZhdWx0IGZpbGVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVVcGRhdGVkKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gdGhpcy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0N1cnJlbnRGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS53YXRjaEZpbGUodGhpcy5maWxlbmFtZSwge1xyXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm9uRmlsZVVwZGF0ZWQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZGVsZXRlZDogdGhpcy5vbkZpbGVEZWxldGVkLmJpbmQodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZVN5c3RlbS5nZXRGaWxlKG5ld0ZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3RmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgdGhhdCB0aGUgb3RoZXIgZWRpdG9yIHdpbGwgYmUgc3dpdGNoaW5nIHRvXHJcbiAgICAgKiBAcGFyYW0gb2xkRWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gbmV3RWRpdG9yXHJcbiAgICAgKi9cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZS5uYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGVuYW1lLnR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmZpbGUuaGFuZGxlKCksXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIEFzc2lnbm1lbnQgU2V0dGluZ3NcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLm1kZS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJNYXJrZG93blwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1kXCJdLFxyXG4gICAgY29uc3RydWN0b3I6IE1hcmtkb3duRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBNQVJLRE9XTl9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBUT0RPOiByZW5hbWUgZmlsZXMsIG1hbnVhbCBzYXZlLCB0YWdzLCBzYW1wbGVfc3VibWlzc2lvbnMsIG9uX2V2YWwsIG5vbi1idWlsdGluIGZpbGVzXHJcbiAqIFRPRE86IGltcG9ydCBkYXRhLCBoaXN0b3J5LCBydW4sIHVybF9kYXRhLCBhc3NpZ25tZW50X3NldHRpbmdzLCBwYXJzb25zX21vZGVcclxuICogVE9ETzogZGVsZXRlIGJlY29tZXMgXCJjbGVhclwiIGZvciBpbnN0cnVjdG9yIGZpbGVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBlbnVtIHtzdHJ9XHJcbiAqL1xyXG5pbXBvcnQge0Fic3RyYWN0RWRpdG9yLCBzbHVnZ2lmeX0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgbGV0IERpc3BsYXlNb2RlcyA9IHtcclxuICAgIEJMT0NLOiBcImJsb2NrXCIsXHJcbiAgICBTUExJVDogXCJzcGxpdFwiLFxyXG4gICAgVEVYVDogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LnB5dGhvbk1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1blwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgJHttYWtlVGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgJHttYWtlVGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG4vKlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJsb2NrcHktcnVuJyBzdHlsZT0nZmxvYXQ6bGVmdCcsXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD0nY3NzOiBleGVjdXRpb24uc3RhdHVzKCkgPT0gXCJydW5uaW5nXCIgPyBcImJ0bi1pbmZvXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0aW9uLnN0YXR1cygpID09IFwiZXJyb3JcIiA/IFwiYnRuLWRhbmdlclwiIDogXCJidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKSB8fCAhYXNzaWdubWVudC51cGxvYWQoKScgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5Jz48L3NwYW4+IFJ1blxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6ICFhc3NpZ25tZW50LnVwbG9hZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ0Jsb2NrcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGFyZ2UnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiBCbG9ja3NcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtaW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ1VwbG9hZCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gSW5zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdTcGxpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVzaXplLWhvcml6b250YWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gU3BsaXRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdUZXh0J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gVGV4dFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1yZXNldCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAhYXNzaWdubWVudC51cGxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCc+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1jYXB0dXJlJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmUnPjwvc3Bhbj4gQ2FwdHVyZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWltcG9ydCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKCkgfHwgKCFhc3NpZ25tZW50LnVwbG9hZCgpICYmIGFzc2lnbm1lbnQuaW1wb3J0YWJsZSgpKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tY2xvdWQtZG93bmxvYWQnPjwvc3Bhbj4gSW1wb3J0IERhdGFzZXRzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdXBsb2FkJz48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkIFB5dGhvbiBDb2RlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1oaXN0b3J5Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzcyc+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaW5zdHJ1Y3RvcicgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj4gU2V0dGluZ3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1lbmdsaXNoJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+IEVuZ2xpc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKVwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9J2NsZWFyOmJvdGgnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJsb2NrcHktdG9vbGJhci1maWxlbmFtZS1waWNrZXJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdfX21haW5fXyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiX19tYWluX19cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gX19tYWluX19cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnc3RhcnRpbmdfY29kZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwic3RhcnRpbmdfY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fc3RhcnRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnZ2l2ZV9mZWVkYmFjayd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiZ2l2ZV9mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fcnVuXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ29uX2NoYW5nZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwib25fY2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBvbl9jaGFuZ2VcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpIHtcclxuICAgIGxldCBpcHluYiA9IEpTT04ucGFyc2UoY29kZSk7XHJcbiAgICBsZXQgaXNVc2FibGUgPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWNlbGwuc291cmNlWzBdLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1ha2VQeXRob24gPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiJycnXCIrY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKStcIicnJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaXB5bmIuY2VsbHMuZmlsdGVyKGlzVXNhYmxlKS5tYXAobWFrZVB5dGhvbikuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuY2xhc3MgUHl0aG9uRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCIpKTtcclxuICAgICAgICB0aGlzLmJtID0gbmV3IEJsb2NrTWlycm9yKHtcclxuICAgICAgICAgICAgXCJjb250YWluZXJcIjogdGhpcy50YWdbMF0sXHJcbiAgICAgICAgICAgIFwicnVuXCI6IG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuLmJpbmQobWFpbi5jb21wb25lbnRzLmVuZ2luZSksXHJcbiAgICAgICAgICAgIFwic2tpcFNrdWxwdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJsb2NrbHlNZWRpYVBhdGhcIjogbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmJsb2NrbHlQYXRoLFxyXG4gICAgICAgICAgICAvLydoZWlnaHQnOiAnMjAwMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5ibS5yZWZyZXNoLmJpbmQodGhpcy5ibSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvZGUpO1xyXG4gICAgICAgIC8vIFRPRE86IGxvZyB1cGxvYWQgZXZlbnRcclxuICAgICAgICAvLyBUT0RPOiBSdW4gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSBcImFuc3dlclwiICYmIHJlc3VsdC5leHRlbnNpb24gPT09IFwiLnB5XCIpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBzbHVnZ2lmeSh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5uYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQubWltZXR5cGUgPSBcInRleHQveC1weXRob25cIjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHl0aG9uRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJQeXRob25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5weVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBQeXRob25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFBZVEhPTl9FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBR1NfRURJVE9SX0hUTUwgPSBgXHJcbkNyZWF0ZSBuZXdcclxuSW1wb3J0IGJ5IG5hbWVcclxuRmluZCBieSBvd25lci9jb3Vyc2Uva2luZFxyXG5cclxuVGFnczpcclxuICAgIERhdGE6XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIEtpbmRcclxuICAgICAgICBMZXZlbFxyXG4gICAgICAgIFZlcnNpb25cclxuICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgQ29udHJvbHM6XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIFJlbW92ZVxyXG4gICAgICAgIERlbGV0ZSBcclxuYDtcclxuXHJcbmNsYXNzIFRhZ3NFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGFnc1wiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUYWdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhdGFncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRhZ3NFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRBR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBURVhUX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIDx0ZXh0YXJlYT48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBUZXh0RWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4vc2tfbW9kX2luc3RydWN0b3JcIjtcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgICBSdW5Db25maWd1cmF0aW9uLFxuICAgIEV2YWxDb25maWd1cmF0aW9uLFxuICAgIE9uQ2hhbmdlQ29uZmlndXJhdGlvbixcbiAgICBPbkV2YWxDb25maWd1cmF0aW9uLFxuICAgIE9uUnVuQ29uZmlndXJhdGlvbixcbiAgICBPblNhbXBsZUNvbmZpZ3VyYXRpb24sXG4gICAgU2FtcGxlQ29uZmlndXJhdGlvblxufSBmcm9tIFwiZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzXCI7XG5cbmNvbnN0IFVUSUxJVFlfTU9EVUxFX0NPREUgPSBcInZhciAkYnVpbHRpbm1vZHVsZSA9IFwiICsgJHNrX21vZF9pbnN0cnVjdG9yLnRvU3RyaW5nKCk7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJlU2t1bHB0KCk7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICB0aGlzLm9wZW5lZEZpbGVzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaW1wb3J0RmlsZSgpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgIH1cblxuICAgIHdyaXRlRmlsZSgpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgIH1cblxuICAgIHByaW50KCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgaW5wdXQoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICBnZXRJbWFnZVByb3h5KCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIFB5dGhvbiBFeGVjdXRpb24gZW5naW5lIGFuZCB0aGUgUHJpbnRlciAoY29uc29sZSkuXG4gICAgICogVGhpcyBpcyBjYWxsZWQgb25seSBvbmNlIGFzIFwidW5pdmVyc2FsXCIgc2V0dGluZ3MgYWNyb3NzIGFsbCBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBjb25maWd1cmVTa3VscHQoKSB7XG4gICAgICAgIC8vIFNrdWxwdCBzZXR0aW5nc1xuICAgICAgICBsZXQgcHJpbnRlciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnByaW50ZXI7XG4gICAgICAgIFNrLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxuICAgICAgICAgICAgLy8gaW1wb3J0XG4gICAgICAgICAgICAvL3JlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgLy8gb3BlblxuICAgICAgICAgICAgZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcbiAgICAgICAgICAgIGZpbGV3cml0ZTogdGhpcy53cml0ZUZpbGUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIC8vIHByaW50XG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIC8vIFByZXZlbnRzIHJlYWRpbmcgSFRNTCBlbGVtZW50cyBhcyBmaWxlc1xuICAgICAgICAgICAgaW5Ccm93c2VyOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGlucHV0XG4gICAgICAgICAgICBpbnB1dGZ1bjogdGhpcy5pbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxuICAgICAgICAgICAgaW1hZ2VQcm94eTogdGhpcy5nZXRJbWFnZVByb3h5LmJpbmQodGhpcyksXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEhvdyBsb25nIHRvIHdhaXQgZm9yIGV4ZWN1dGlvblxuICAgICAgICAvLyBTay5leGVjTGltaXRcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcbiAgICAgICAgLy8gYWZ0ZXJTaW5nbGVFeGVjdXRpb25cbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XG5cbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0cyBhbmQgc3VwcHJlc3Npb25zXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgfTtcblxuICAgIHJlc2V0U3R1ZGVudE1vZGVsKCkge1xuICAgICAgICBsZXQgc3R1ZGVudCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwuc3R1ZGVudDtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50U3RlcChudWxsKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQucmVzdWx0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXRFeGVjdXRpb25CdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge1xuICAgICAgICAgICAgXCJ0cmFjZVwiOiBbXSxcbiAgICAgICAgICAgIFwic3RlcFwiOiAwLFxuICAgICAgICAgICAgXCJsaW5lXCI6IDAsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgaW50ZXJmYWNlIGFzcGVjdHMgb2YgdGhlIHByZXZpb3VzIFJ1bi5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gVE9ETzogQ2xlYXIgb3V0IGFueSBjb3ZlcmFnZS90cmFjZS9lcnJvciBoaWdobGlnaHRzIGluIGVkaXRvcnNcbiAgICAgICAgLy8gUmVzZXQgZXhlY3V0aW9uIGluIG1vZGVsXG4gICAgICAgIHRoaXMucmVzZXRTdHVkZW50TW9kZWwoKTtcbiAgICAgICAgLy8gR2V0IHJlcG9ydHMgcmVhZHlcbiAgICAgICAgdGhpcy5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBleGVjdXRpb24gYnVmZmVyXG4gICAgICAgIHRoaXMucmVzZXRFeGVjdXRpb25CdWZmZXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBjb25zb2xlIG9mIHByaW50ZWQgc3R1ZmZcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5jbGVhcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgYW55IG9sZCBmZWVkYmFja1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5jbGVhcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLnF1ZXVlZElucHV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTay5TdHJ9IG5hbWUgLSBUaGUgZmlsZW5hbWUgYXMgYSBTa3VscHQgc3RyaW5nLlxuICAgICAqL1xuICAgIG9wZW5GaWxlKG5hbWUpIHtcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gU2sub3BlbkZpbGVuYW1lUHJlZml4IHx8IFwiXCI7XG4gICAgICAgIGZpbGVuYW1lICs9IG5hbWU7XG4gICAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmlsZW5hbWUpO1xuICAgICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobmFtZSBpbiB0aGlzLm9wZW5lZEZpbGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbmVkRmlsZXNbbmFtZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLklPRXJyb3IoXCJbRXJybm8gMl0gTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeTogJ1wiICsgbmFtZSArIFwiJ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIG9wZW5VUkwodXJsLCB0eXBlKSB7XG4gICAgICAgIGxldCBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgICAgIGxldCBvcGVuZWRGaWxlcyA9IHRoaXMub3BlbmVkRmlsZXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodXJsIGluIG9wZW5lZEZpbGVzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuZWRGaWxlc1t1cmxdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VydmVyLmxvYWRGaWxlKHVybCwgdHlwZSwgZnVuY3Rpb24gKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5lZEZpbGVzW3VybF0gPSBjb250ZW50cztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb250ZW50cyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBTay5idWlsdGluLklPRXJyb3IoXCJDYW5ub3QgYWNjZXNzIHVybDogXCIgKyB1cmwgKyBcIiBiZWNhdXNlIFwiICsgbWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbG9hZEFsbEZpbGVzKCkge1xuICAgICAgICBsZXQgbmFtZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5maWxlcygpO1xuICAgICAgICBsZXQgZmVlZGJhY2sgPSB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjaztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuVVJMKG5hbWVzW2ldLCBcImZpbGVcIilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2suaW50ZXJuYWxFcnJvcihlLCBcIkZpbGVMb2FkRXJyb3JcIiwgXCJUaGUgZmlsZSBmYWlsZWQgdG8gbG9hZCBvbiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcbiAgICAgKiBlbnZpcm9ubWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC4gVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxuICAgICAqL1xuICAgIHN0ZXAodmFyaWFibGVzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XG4gICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJfX21haW5fXy5weVwiKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB0aGlzLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xuICAgICAgICAgICAgbGV0IGdsb2JhbHMgPSB0aGlzLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xuICAgICAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIudHJhY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgLy8nYmxvY2snOiBoaWdobGlnaHRNYXBbbGluZU51bWJlci0xXSxcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IGdsb2JhbHMucHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlci5sYXN0X3N0ZXAgPSBjdXJyZW50U3RlcCArIDE7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlci5saW5lX251bWJlciA9IGxpbmVOdW1iZXI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcbiAgICAgKiBhbmQgaGFuZCBpdCBvZmYgdG8gdGhlIGV4ZWN1dGlvbiB0cmFjZSBpbiB0aGUgbW9kZWwuXG4gICAgICovXG4gICAgbGFzdFN0ZXAoKSB7XG4gICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZXhlY3V0aW9uQnVmZmVyLnRyYWNlKTtcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5leGVjdXRpb25CdWZmZXIuc3RlcCk7XG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZXhlY3V0aW9uQnVmZmVyLmxhc3Rfc3RlcCk7XG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRMaW5lKHRoaXMuZXhlY3V0aW9uQnVmZmVyLmxpbmVfbnVtYmVyKTtcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5leGVjdXRpb25CdWZmZXIubGluZV9udW1iZXIpO1xuICAgIH07XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvbmZpZ3VyYXRpb24uY29kZS50cmltKCkpLFxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29uZmlndXJhdGlvbi5jb2RlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UodGhpcy5jb25maWd1cmF0aW9uLmZpbGVuYW1lLCB0aGlzLmNvbmZpZ3VyYXRpb24uY29kZSk7XG4gICAgICAgIC8vIFRPRE86IHNhdmUgY29kZSB0byBzZXJ2ZXJcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMucnVuU3VjY2Vzcy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5ydW5GYWlsdXJlLmJpbmQodGhpcylcbiAgICAgICAgKS50aGVuKHRoaXMub25SdW4uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcnVuU3VjY2Vzcyhtb2R1bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJydW5TdWNjZXNzXCIpO1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbihtb2R1bGUuJGQsIC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcbiAgICAgICAgICAgICAgICBcIm1vZHVsZVwiOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGlvbkVuZF8oKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcnVuRmFpbHVyZShlcnJvcikge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uRW5kXygpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLm9uUnVuU3VjY2Vzcy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5vblJ1bkZhaWx1cmUuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uUnVuU3VjY2Vzcyhtb2R1bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLiRkKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcbiAgICB9XG5cbiAgICBvblJ1bkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUpO1xuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ldmFsLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMuY2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXG4gICAgICovXG4gICAgdXBkYXRlUGFyc2UoZmlsZW5hbWUsIGNvZGUpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXG4gICAgICAgIGxldCBhc3Q7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZShmaWxlbmFtZSwgY29kZSk7XG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCBmaWxlbmFtZSwgcGFyc2UuZmxhZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlbmFtZSwgY29kZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUnVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICovXG4gICAgb25fcnVuKGFmdGVyd2FyZHMpIHtcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IHByaW50ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5wcmludGVyO1xuXG4gICAgICAgIGVuZ2luZS5ydW5TdHVkZW50Q29kZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoXCJnaXZlX2ZlZWRiYWNrXCIsIGZhbHNlLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKG1vZHVsZS4kZC5TVUNDRVNTKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9Kcyhtb2R1bGUuJGQuU0NPUkUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMobW9kdWxlLiRkLkhJREUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMuZXJyb3IoXCJubyBlcnJvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLmVycm9yKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEdldCBkYXRhIGZyb20gbW9kZWwgbm93XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmVlZGJhY2suaXNGZWVkYmFja1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy50b29sYmFyLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRfc3RhdHVzID0gbW9kZWwuc2V0dGluZ3MuY29tcGxldGlvbl9zdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2V0dGluZ3MuY29tcGxldGlvbl9zdGF0dXMoTWF0aC5tYXgob2xkX3N0YXR1cywgc2NvcmUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5tYXJrU3VjY2VzcygxLjApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubWFya1N1Y2Nlc3Moc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyd2FyZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJ3YXJkcyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludGVyLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50SW5zdHJ1Y3RvckVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9ydW5cIik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gVE9ETzogRG8gd2UgYWN0dWFsbHkgd2FudCB0byBza2lwIGlmIHRoaXMgaXMgdGhlIGNhc2U/XG4gICAgICAgIC8vIFNraXAgaWYgdGhlIGluc3RydWN0b3IgaGFzIG5vdCBkZWZpbmVkIGFueXRoaW5nXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLnByb2dyYW1zW0ZJTEVOQU1FXSgpLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY2hhbmdpbmdcIik7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlQ29kZSgpO1xuICAgICAgICAvLyBPbiBzdGVwIGRvZXMgbm90IHBlcmZvcm0gcGFyc2UgYW5hbHlzaXMgYnkgZGVmYXVsdCBvciBydW4gc3R1ZGVudCBjb2RlXG4gICAgICAgIGxldCBlbmdpbmUgPSB0aGlzO1xuICAgICAgICBsZXQgZmVlZGJhY2sgPSB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjaztcbiAgICAgICAgZW5naW5lLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICBlbmdpbmUudmVyaWZ5Q29kZSgpO1xuICAgICAgICBlbmdpbmUudXBkYXRlUGFyc2UoKTtcbiAgICAgICAgZW5naW5lLnJ1bkluc3RydWN0b3JDb2RlKEZJTEVOQU1FLCB0cnVlLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgLy8gU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc2hvdyB1bmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXNcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgIShjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhtb2R1bGUuJGQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZW5naW5lXCIsIFwib25fY2hhbmdlXCIpO1xuICAgIH07XG5cbiAgICB1cGRhdGVTdWJtaXNzaW9uKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuU1VDQ0VTUyk7XG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5TQ09SRSk7XG4gICAgICAgIGxldCBkYXRhID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkRBVEEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgaW5zdHJ1Y3RvciBjb2RlXG4gICAgICovXG4gICAgcnVuSW5zdHJ1Y3RvckNvZGUoZmlsZW5hbWUsIHF1aWNrLCBhZnRlcikge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImluc3RydWN0b3JcIik7XG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XG4gICAgICAgIC8vIFByZXBhcmUgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMuc2V0SW5zdHJ1Y3RvckVudmlyb25tZW50KCk7XG4gICAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgcHl0aG9uIGNvZGVcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlID0gdGhpcy5tYWluLm1vZGVsLnByb2dyYW1zW1wiX19tYWluX19cIl0oKTtcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHN0dWRlbnRDb2RlO1xuICAgICAgICAvL3N0dWRlbnRDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xuICAgICAgICBpZiAoIXJlcG9ydFtcInBhcnNlclwiXS5zdWNjZXNzIHx8ICFyZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBzdHVkZW50Q29kZVNhZmUgPSBcInBhc3NcIjtcbiAgICAgICAgfVxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3BlZGFsL3NhbmRib3gvc2FuZGJveC5weVwiXSA9IFwiY2xhc3MgU2FuZGJveDogcGFzc1xcbmRlZiBydW4oKTogcGFzc1xcbmRlZiByZXNldCgpOiBwYXNzXFxuXCI7XG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tmaWxlbmFtZV0oKTtcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrKTtcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUgKyBcIi5weVwiLFxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYXR0ZW1wdCB0byBjYWxsIHRoZSBkZWZpbmVkIG9uRXhlY3V0aW9uRW5kLFxuICAgICAqIGJ1dCB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlcmUgaXMgbm8gZnVuY3Rpb24gZGVmaW5lZC5cbiAgICAgKi9cbiAgICBleGVjdXRpb25FbmRfKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkVuZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBleGVjdXRpb25CZWdpbl8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uQmVnaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwidXRpbGl0aWVzLmpzXCI7XHJcblxyXG5jb25zdCBORVdfTElORV9SRUdFWCA9IC9cXHJcXG58XFxyfFxcbi87XHJcblxyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwicGFzc1wiKSk7XHJcbiAgICBsZXQgdGlmYUFuYWx5c2lzID0gXCJcIjtcclxuICAgIGlmICghcXVpY2spIHtcclxuICAgICAgICB0aWZhQW5hbHlzaXMgPSBcImZyb20gcGVkYWwudGlmYSBpbXBvcnQgdGlmYV9hbmFseXNpc1xcbnRpZmFfYW5hbHlzaXMoRmFsc2UpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG5jb21wYXRpYmlsaXR5LnNldF9zYW5kYm94KHN0dWRlbnQpXHJcbmVycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50ID0gcnVuX3N0dWRlbnRcclxuY29tcGF0aWJpbGl0eS5nZXRfcGxvdHMgPSBnZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0ID0gZ2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgZnVuYygqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuI3ByaW50KE1BSU5fUkVQT1JULmZlZWRiYWNrWzBdLm1pc3Rha2VbJ2Vycm9yJ10pXHJcbmA7XHJcbn07XHJcblxyXG5cclxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgU2sucmVhZCA9IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFNrLm91dHB1dCA9IChlbGVtZW50KSA9PiBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBydW4oZW5naW5lKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhY2Nlc3MgU2t1bHB0IGJ1aWx0LWlucy4gVGhpcyBpcyBwcmV0dHkgZ2VuZXJpYywgdGFrZW5cclxuICAgICAqIGFsbW9zdCBkaXJlY3RseSBmcm9tIHRoZSBTa3VscHQgZG9jcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgcHl0aG9uIGZpbGVuYW1lIChlLmcuLCBcIm9zXCIgb3IgXCJwcHJpbnRcIikgdGhhdCB3aWxsIGJlIGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBKYXZhU2NyaXB0IHNvdXJjZSBjb2RlIG9mIHRoZSBmaWxlICh3ZWlyZCwgcmlnaHQ/KVxyXG4gICAgICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGlzbid0IGZvdW5kLlxyXG4gICAgICovXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKVswXS5jb250ZW50cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgIH07XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFN0dWRlbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gTGltaXQgZXhlY3V0aW9uIHRvIDUgc2Vjb25kc1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHRoaXMubWFpbi5tb2RlbC5zZXR0aW5ncztcclxuICAgICAgICBTay5leGVjTGltaXRGdW5jdGlvbiA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaW1lb3V0KCkgPyBJbmZpbml0eSA6IDEwMDAwO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgLy8gSWRlbnRpZnkgdGhlIGxvY2F0aW9uIHRvIHB1dCBuZXcgY2hhcnRzXHJcbiAgICAgICAgLy9UT0RPOiBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5nZXRDb25maWd1cmF0aW9uKCk7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gZW5naW5lLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIC8vIFRPRE86IFNrLmNvbnNvbGUuc2tpcERyYXdpbmcgPSAhIXNldHRpbmdzLnByZXZlbnREMztcclxuICAgICAgICAvLyBUT0RPOiB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3MubXV0ZV9wcmludGVyKGZhbHNlKTtcclxuICAgICAgICAvLyBDcmVhdGUgYW4gaW5wdXQgYm94XHJcbiAgICAgICAgU2suaW5wdXRmdW4gPSBlbmdpbmUuaW5wdXQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgZW5naW5lLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBJbnN0cnVjdG9ycyBoYXZlIG5vIGxpbWl0c1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG4gICAgICAgIC8vIE11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIC8vIFRPRE8gU2suY29uc29sZS5za2lwRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgLy8gVE9ETyB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3MubXV0ZV9wcmludGVyKHRydWUpO1xyXG4gICAgICAgIC8vIERpc2FibGUgaW5wdXQgYm94XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICAvLyBUT0RPIFNrLmlucHV0ZnVuID0gQmxvY2tQeUVuZ2luZS5pbnB1dE1vY2tGdW5jdGlvbjtcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKVswXS5jb250ZW50cygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgLy8gc2tpcCBub3JtYWwgcmVzZXQsIG9ubHkgcmVzZXQgYnVmZmVyIGFuZCBmZWVkYmFja1xyXG4gICAgICAgIGVuZ2luZS5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xyXG4gICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICAvLyBBY3R1YWxseSBydW4gdGhlIHB5dGhvbiBjb2RlXHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKVswXS5jb250ZW50cygpO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvcGVkYWwvc2FuZGJveC9zYW5kYm94LnB5XCJdID0gXCJjbGFzcyBTYW5kYm94OiBwYXNzXFxuZGVmIHJ1bigpOiBwYXNzXFxuZGVmIHJlc2V0KCk6IHBhc3NcXG5cIjtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSByZXBvcnRbXCJwYXJzZXJcIl0uc3VjY2VzcyAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZmFsc2UsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogdGhpcy5maWxlbmFtZSArIFwiLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKVswXS5jb250ZW50cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ldmFsLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCBsZXQgRkVFREJBQ0tfSFRNTCA9IGBcblxuPHNwYW4gY2xhc3M9J2Jsb2NrcHktZmxvYXRpbmctZmVlZGJhY2sgdGV4dC1tdXRlZC1sZXNzIHB1bGwtcmlnaHQgcG9zaXRpb24tc3RpY2t5IHN0aWNreS10b3AnXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtbGFiZWw9XCJOZXcgRmVlZGJhY2sgQWxlcnRcIj5cbiAgICBOZXcgZmVlZGJhY2sgJnVhcnI7XG48L3NwYW4+XG5cbjxkaXYgY2xhc3M9J2Jsb2NrcHktZmVlZGJhY2sgY29sLW1kLTYgYmxvY2tweS1wYW5lbCdcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiRmVlZGJhY2tcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCI+XG5cbiAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlY29uZFJvdy5zd2l0Y2hMYWJlbFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS0gQWN0dWFsIEZlZWRiYWNrIFJlZ2lvbiAtLT4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz5GZWVkYmFjazogPC9zdHJvbmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdiYWRnZSBibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5IGZlZWRiYWNrLWJhZGdlJ1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB1aS5mZWVkYmFjay5iYWRnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdWkuZmVlZGJhY2suY2F0ZWdvcnlcIj5GZWVkYmFjayBLaW5kPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdG9wX29mX2VsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3A7XG4gICAgICAgIGxldCBib3R0b21fb2ZfZWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcCArIHRoaXMudGFnLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGxldCBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICBsZXQgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy9ib3R0b21fb2ZfZWxlbWVudCAtPSA0MDsgLy8gVXNlciBmcmllbmRseSBwYWRkaW5nXG4gICAgICAgIHJldHVybiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlU2NvcmUoKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJJbnN0cnVjdG9yXCI7XG4gICAgICAgICAgICBsYWJlbCA9IFwiTm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJObyBlcnJvcnMgcmVwb3J0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RlbCBhY2NvcmRpbmdseVxuICAgICAgICBtZXNzYWdlID0gdGhpcy5tYWluLnV0aWxpdGllcy5tYXJrZG93bihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPD0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5saW5lcy5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IGFueSBhY2N1bXVsYXRlZCBmZWVkYmFja1xuICAgICAqL1xuICAgIHByZXNlbnRGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cyk7XG5cbiAgICAgICAgLy8gVE9ETzogTG9nZ2luZ1xuICAgICAgICAvL3RoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImZlZWRiYWNrXCIsIGNhdGVnb3J5K1wifFwiK2xhYmVsLCBtZXNzYWdlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGZWVkYmFja1Zpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG5vdGlmeUZlZWRiYWNrVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmxvYXRpbmctZmVlZGJhY2tcIikuc2hvdygpLmZhZGVPdXQoNzAwMCk7XG4gICAgfTtcblxuICAgIHByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgXG4gICAgICAgICAgICBFcnJvciBpbiBpbnN0cnVjdG9yIGZlZWRiYWNrLlxuICAgICAgICAgICAgUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cHJlPjxzdHJvbmc+JHtlcnJvci50cCRuYW1lfTwvc3Ryb25nPjogJHtTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpfTwvcHJlPmA7XG5cbiAgICAgICAgaWYgKGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdHJhY2ViYWNrRm9ybWF0dGVkPSBlcnJvci50cmFjZWJhY2subWFwKGZyYW1lID0+XG4gICAgICAgICAgICAgICAgYEZpbGUgPHNwYW4gY2xhc3M9XCJmaWxlbmFtZVwiPlwiJHtmcmFtZS5maWxlbmFtZX1cIjwvc3Bhbj4sIGxpbmUgPHNwYW4gY2xhc3M9XCJsaW5lbm9cIj4ke2ZyYW1lLmxpbmVub308L3NwYW4+XFxuYCkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDxwcmU+JHt0cmFjZWJhY2tGb3JtYXR0ZWR9PC9wcmU+YDtcbiAgICAgICAgICAgIGxldCBsYXN0X3RyYWNlYmFjayA9IGVycm9yLnRyYWNlYmFjay5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICBpZiAobGFzdF90cmFjZWJhY2suZmlsZW5hbWUgPT09IGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICBsYXN0X3RyYWNlYmFjay5saW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZV9vZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxufSIsImNvbnN0IG1ha2VUYWIgPSBmdW5jdGlvbihmaWxlbmFtZSwgZnJpZW5kbHlOYW1lLCBoaWRlSWZFbXB0eSkge1xyXG4gICAgaWYgKGZyaWVuZGx5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnJpZW5kbHlOYW1lID0gZmlsZW5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5maWxlbmFtZSgpID09PSAnJHtmaWxlbmFtZX0nfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsICcke2ZpbGVuYW1lfScpLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpXCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIj5cclxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxzdHJvbmc+VmlldzogPC9zdHJvbmc+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgICR7bWFrZVRhYihcImFuc3dlci5weVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiQXNzaWdubWVudCBTZXR0aW5nc1wiKX1cclxuICAgICR7bWFrZVRhYihcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiU3RhcnRpbmcgQ29kZVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ydW4ucHlcIiwgXCJPbiBSdW5cIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fY2hhbmdlLnB5XCIsIFwiT24gQ2hhbmdlXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2V2YWwucHlcIiwgXCJPbiBFdmFsXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiP21vY2tfdXJscy5ibG9ja3B5XCIsIFwiVVJMIERhdGFcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIiwgXCJTYW1wbGUgU3VibWlzc2lvbnNcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhdGFncy5ibG9ja3B5XCIsIFwiVGFnc1wiLCB0cnVlKX1cclxuICBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5BZGQgTmV3PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP21vY2tfdXJscy5ibG9ja3B5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJz9tb2NrX3VybHMuYmxvY2tweScpXCI+VVJMIERhdGE8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz90YWdzLmJsb2NrcHknKVwiPlRhZ3M8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9zYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweScpXCI+U2FtcGxlIFN1Ym1pc3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9jaGFuZ2UucHknKVwiPk9uIENoYW5nZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uRXZhbFwiPk9uIEV2YWw8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5JbnN0cnVjdG9yIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3R1ZGVudCBGaWxlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICBcclxuPC91bD5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG4vKipcclxuICogRmlsZW5hbWVzIGxpdmUgaW4gb25lIG9mIGZpdmUgcG9zc2libGUgbmFtZXNwYWNlczpcclxuICogIEluc3RydWN0b3IgKCEpOiBJbnZpc2libGUgdG8gdGhlIHN0dWRlbnQgdW5kZXIgYWxsIGNpcmN1bXN0YW5jZXNcclxuICogIFN0YXJ0IFNwYWNlICheKTogVXNlZCB0byByZXNldCB0aGUgc3R1ZGVudCBuYW1lc3BhY2VcclxuICogIFN0dWRlbnQgU3BhY2UgKCk6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQgd2hlbiBkaXNwbGF5LmhpZGVGaWxlcyBpcyBub3QgdHJ1ZVxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBTVEFSVElOR19GSUxFUyA9IFtcclxuICAgIC8vIFN1Ym1pc3Npb25cclxuICAgIFwiYW5zd2VyLnB5XCIsXHJcbiAgICAvLyBJbnN0cnVjdG9yIGZpbGVzXHJcbiAgICBcIiFpbnN0cnVjdGlvbnMubWRcIixcclxuICAgIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgXCJec3RhcnRpbmdfY29kZS5weVwiLFxyXG4gICAgXCIhb25fcnVuLnB5XCIsXHJcbiAgICBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfTkVXX0ZJTEVTID0gW1xyXG4gICAgXCIhb25fY2hhbmdlLnB5XCIsXHJcbiAgICBcIiFvbl9ldmFsLnB5XCIsXHJcbiAgICBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgXCIhdGFncy5ibG9ja3B5XCIsXHJcbiAgICBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXHJcbl07XHJcblxyXG5jb25zdCBERUxFVEFCTEVfU0lNUExFX0ZJTEVTID0gW1wiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOREVMRVRBQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOUkVOQU1BQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiLCBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhdGFncy5ibG9ja3B5XCIsIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJdO1xyXG5cclxuY2xhc3MgQmxvY2tQeUZpbGUge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgIHJldHVybiB7XCJmaWxlbmFtZVwiOiBrby5vYnNlcnZhYmxlKGZpbGVuYW1lKSwgY29udGVudHM6IGtvLm9ic2VydmFibGUoY29udGVudHMgfHwgXCJcIil9O1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3RzIGF3YXkgZGF0YWJhc2UgbG9naWNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmlsZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVzXyA9IHt9O1xyXG4gICAgICAgIHRoaXMubW91bnRGaWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoTW9kZWwoKTtcclxuICAgICAgICB0aGlzLndhdGNoZXNfID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hGaWxlKGZpbGVuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BXYXRjaGluZ0ZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hNb2RlbCgpIHtcclxuICAgICAgICBsZXQgZmlsZXN5c3RlbSA9IHRoaXM7XHJcbiAgICAgICAgW3RoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKClbMF0uY29udGVudHM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKClbMF0uY29udGVudHM7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUluQXJyYXlfKGZpbGUsIGFycmF5KSB7XHJcbiAgICAgICAgZmlsZS5vd25lciA9IGFycmF5O1xyXG4gICAgICAgIGxldCBjb2RlQnVuZGxlID0gZmlsZS5vd25lcigpO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGNvZGVCdW5kbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvZGVCdW5kbGVbaV0uZmlsZW5hbWUoKSA9PT0gZmlsZS5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBjb2RlQnVuZGxlW2ldLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxlLmhhbmRsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gbmV3RmlsZS5jb250ZW50cztcclxuICAgICAgICAgICAgYXJyYXkucHVzaChuZXdGaWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnRGaWxlcygpIHtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIW9uX3J1bi5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUoY29udGVudHMgfHwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0ZpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9ja1B5RmlsZSh0aGlzLm1haW4sIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdID0gbmV3RmlsZTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhuZXdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdGaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZW5hbWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG9iamVjdH0gVGhlIGluZm8gYWJvdXQgdGhlIGZpbGUsIG9yIGZhbHNlIGlmIGl0IGNvdWxkIG5vdCBiZSBkZWxldGVkXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoREVMRVRBQkxFX1NJTVBMRV9GSUxFUy5pbmRleE9mKGZpbGVuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlcnMgYSBjYWxsYmFjayB0byBldmVudHVhbGx5IGNhbGwgZGVsZXRlRmlsZUxvY2FsbHlfXHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lci5yZW1vdmUobW9kZWxGaWxlID0+IG1vZGVsRmlsZS5maWxlbmFtZSA9PT0gZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQgfHwgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay5kZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlXYXRjaGVzKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZS5maWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay51cGRhdGVkKGZpbGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdGF0dXMnKVwiPlVwZGF0ZSBTdGF0dXM8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ29uRXhlY3V0aW9uJylcIj5FeGVjdXRpb248L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZXJ2ZXIubWVzc2FnZXNcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+VXNlcjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5pZFwiPjwvc3Bhbj4gKDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIubmFtZVwiPjwvc3Bhbj4pPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+Q291cnNlOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmNvdXJzZUlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+R3JvdXA6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuZ3JvdXBJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQ6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQuaWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50IFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQudmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24uaWRcIj48L3NwYW4+PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbiBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gOyIsImltcG9ydCB7VFJBQ0VfSFRNTH0gZnJvbSBcInRyYWNlLmpzXCI7XG5pbXBvcnQge0RJQUxPR19IVE1MfSBmcm9tIFwiZGlhbG9nLmpzXCI7XG5pbXBvcnQge0ZFRURCQUNLX0hUTUx9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xuaW1wb3J0IHtGSUxFU19IVE1MfSBmcm9tIFwiZmlsZXMuanNcIjtcbmltcG9ydCB7Rk9PVEVSX0hUTUx9IGZyb20gXCJmb290ZXIuanNcIjtcbmltcG9ydCB7RURJVE9SU19IVE1MfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xuaW1wb3J0IHtDT05TT0xFX0hUTUx9IGZyb20gXCJjb25zb2xlLmpzXCI7XG5cbi8qKlxuICogQGVudW0ge3N0cn1cbiAqL1xuZXhwb3J0IGxldCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMgPSB7XG4gICAgRkVFREJBQ0s6IFwiZmVlZGJhY2tcIixcbiAgICBUUkFDRTogXCJ0cmFjZVwiLFxuICAgIE5PTkU6IFwibm9uZVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCkge1xuICAgIGxldCBoaWdobGlnaHRUaW1lb3V0ID0gbnVsbDtcbiAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuY3VycmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0VGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdGlvbnMgcHJlIGNvZGVcIikubWFwKCAoaSwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gUG9wdXAgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgR2V0IHNoYXJlYWJsZSBsaW5rPC9idXR0b24+XG4gICAgICAgICAgICA8IS0tIFZpZXcgYXMgaW5zdHJ1Y3RvciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkucm9sZS5pc0dyYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogZGlzcGxheS5pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFzIGluc3RydWN0b3JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCIvKipcbiAqXG4gKiBAZW51bSB7c3RyfVxuICovXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICAvLyBQcmVzZW50bHkgZGVwcmVjYXRlZCwgYnV0IHdlIHNob3VsZCBpbnZlc3RpZ2F0ZSB0aGlzXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJCTE9DS1BZXCIpO1xuXG4gICAgLy8gRmF1bHRSZXNpc3RhbnRDYWNoZVxuICAgIHRoaXMucXVldWUgPSB7XG4gICAgICAgIFwibG9nX2V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dfZXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwic2F2ZV9zdWNjZXNzXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJzYXZlX3N1Y2Nlc3NcIiwgXCJbXVwiKSlcbiAgICB9O1xuICAgIHRoaXMuTUFYX1FVRVVFX1NJWkUgPSB7XG4gICAgICAgIFwibG9nX2V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJzYXZlX3N1Y2Nlc3NcIjogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5zYXZlVGltZXIgPSB7fTtcbiAgICB0aGlzLnByZXNlbnRhdGlvblRpbWVyID0gbnVsbDtcbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgLy8gRm9yIG1hbmFnaW5nIFwid2Fsa3NcIiB0aGF0IGxldCB1cyByZXJ1biBzdG9yZWQgY29kZVxuICAgIHRoaXMuaW5Qcm9ncmVzc1dhbGtzID0gW107XG5cbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcblxuICAgIC8vIENoZWNrIGNhY2hlXG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0lQID0gZnVuY3Rpb24gKG5ld0lQKSB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJJUFwiKSkge1xuICAgICAgICB2YXIgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgIGlmIChvbGRJUCAhPT0gbmV3SVApIHtcbiAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJlZGl0b3JcIiwgXCJjaGFuZ2VJUFwiLCBvbGRJUCArIFwifFwiICsgbmV3SVApO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIG5ld0lQKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCBuZXdJUCk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tDYWNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJBU1NJR05NRU5UU19DQUNIRVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcIkFTU0lHTk1FTlRTX0NBQ0hFXCIpKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIHRoaXMudXJscy5zYXZlX2Fzc2lnbm1lbnQsIFwiYXNzaWdubWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBU1NJR05NRU5UU19DQUNIRVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICB9XG4gICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gdGhpcy5tYWluLm1vZGVsLnByb2dyYW1zKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiQ09ERV9DQUNIRV9cIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJDT0RFX0NBQ0hFX1wiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCB0aGlzLnVybHMuc2F2ZV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZV9cIiArIGZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09ERV9DQUNIRV9cIiArIGZpbGVuYW1lLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2NhY2hlXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtjYWNoZV0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbY2FjaGVdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCB1cmwsIGNhY2hlLCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VydmVyID0gdGhpcywgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgLypcbiAgICBtb2RlbC5wcm9ncmFtX3VwZGF0ZWQuc3Vic2NyaWJlKGZ1bmN0aW9uKCkgeyBzZXJ2ZXIuc2F2ZUNvZGUoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5uYW1lLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpO30pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuaW50cm9kdWN0aW9uLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnBhcnNvbnMuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuaW1wb3J0YWJsZS5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5zZWNyZXQuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuZGlzYWJsZV9hbGdvcml0aG1fZXJyb3JzLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LmRpc2FibGVfdGltZW91dC5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5pbml0aWFsX3ZpZXcuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuZmlsZXMuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIC8vbW9kZWwuc2V0dGluZ3MuZWRpdG9yLnN1YnNjcmliZShmdW5jdGlvbihuZXdWYWx1ZSkgeyBzZXJ2ZXIubG9nRXZlbnQoJ2VkaXRvcicsIG5ld1ZhbHVlKTsgfSk7XG4gICAgbW9kZWwuZXhlY3V0aW9uLnNob3dfdHJhY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uKG5ld1ZhbHVlKSB7IHNlcnZlci5sb2dFdmVudChcInRyYWNlXCIsIG5ld1ZhbHVlKTsgfSk7XG4gICAgbW9kZWwuZXhlY3V0aW9uLnRyYWNlX3N0ZXAuc3Vic2NyaWJlKGZ1bmN0aW9uKG5ld1ZhbHVlKSB7IHNlcnZlci5sb2dFdmVudChcInRyYWNlX3N0ZXBcIiwgbmV3VmFsdWUpOyB9KTtcbiAgICAgKi9cbn07XG5cbi8qKlxuICpcbiAqIFNvbWUgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGhhcHBlbiBhZnRlciBvdGhlciB0aGluZ3MgaGF2ZSBiZWVuIGxvYWRlZC5cbiAqIFJpZ2h0IG5vdyB0aGlzIGlzIGp1c3QgYWZ0ZXIgQ09SR0lTIGxpYnJhcmllcyBoYXZlIGJlZW4gbG9hZGVkLCBidXQgbWF5YmVcbiAqIHdlJ2xsIGFkZCBtb3JlIGxhdGVyIGFuZCB0aGlzIHdpbGwgbmVlZCB0byBiZSByZWZhY3RvcmVkLlxuICpcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuZmluYWxpemVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzLCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBtb2RlbC5hc3NpZ25tZW50Lm1vZHVsZXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHNlcnZlci5zYXZlQXNzaWdubWVudCgpO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuVElNRVJfREVMQVkgPSAxMDAwO1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLnJvdW5kKGQuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgZGF0YSA9IHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuYXNzaWdubWVudF9pZCgpLFxuICAgICAgICBcImdyb3VwX2lkXCI6IGFzc2lnbm1lbnQuZ3JvdXBfaWQoKSxcbiAgICAgICAgXCJjb3Vyc2VfaWRcIjogYXNzaWdubWVudC5jb3Vyc2VfaWQoKSxcbiAgICAgICAgXCJzdHVkZW50X2lkXCI6IGFzc2lnbm1lbnQuc3R1ZGVudF9pZCgpLFxuICAgICAgICBcInZlcnNpb25cIjogYXNzaWdubWVudC52ZXJzaW9uKCksXG4gICAgICAgIFwidGltZXN0YW1wXCI6IHNlY29uZHNcbiAgICB9O1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3MubG9nX2lkKCkgIT0gbnVsbCkge1xuICAgICAgICBkYXRhW1wibG9nX2lkXCJdID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzLmxvZ19pZCgpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMsIHNlcnZlcl9lcnJvcikge1xuICAgIC8vIFRPRE86IEhhbmRsZSBkaWZmZXJlbnQgZW5kcG9pbnRzXG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5zZXJ2ZXIoc3RhdHVzKTtcbiAgICBpZiAoc2VydmVyX2Vycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5zZXJ2ZXJfZXJyb3Ioc2VydmVyX2Vycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLnNlcnZlcl9lcnJvcihcIlwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5kZWZhdWx0UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIlNhdmVkXCIpO1xuICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIkVycm9yXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH1cbn07XG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5kZWZhdWx0RmFpbHVyZSA9IGZ1bmN0aW9uIChlcnJvciwgdGV4dFN0YXR1cykge1xuICAgIHRoaXMuc2V0U3RhdHVzKFwiRGlzY29ubmVjdGVkXCIsIFwiQ291bGQgbm90IGFjY2VzcyBzZXJ2ZXIhXFxuXCIgKyB0ZXh0U3RhdHVzKTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvZ0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGFjdGlvbiwgYm9keSkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dfZXZlbnRcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50XCJdID0gZXZlbnRfbmFtZTtcbiAgICAgICAgZGF0YVtcImFjdGlvblwiXSA9IGFjdGlvbjtcbiAgICAgICAgZGF0YVtcImJvZHlcIl0gPSAoYm9keSA9PT0gdW5kZWZpbmVkKSA/IFwiXCIgOiBib2R5O1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIkxvZ2dpbmdcIik7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgdGhpcy51cmxzLmxvZ19ldmVudCwgXCJsb2dfZXZlbnRcIiwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvZyBFdmVudClcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2VucXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgbm90IG92ZXJmaWxsZWQgdGhlIHF1ZXVlXG4gICAgdmFyIGxlbmd0aCA9IHRoaXMucXVldWVbY2FjaGVdLmxlbmd0aDtcbiAgICB2YXIgbWF4ID0gdGhpcy5NQVhfUVVFVUVfU0laRVtjYWNoZV07XG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXSA9IHRoaXMucXVldWVbY2FjaGVdLnNsaWNlKGxlbmd0aCAtIG1heCwgbWF4KTtcbiAgICB9XG4gICAgLy8gT25seSBhZGQgdGhlIGVsZW1lbnQgaWYgaXQncyBuZXdcbiAgICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0ucHVzaChrZXkpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9nZXRRdWV1ZWQgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnF1ZXVlW2NhY2hlXVswXSk7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIHVybCwgY2FjaGUsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIHNlcnZlci5zZXRTdGF0dXMoXCJTYXZpbmdcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICBzZXJ2ZXIuX2VucXVldWVEYXRhKGNhY2hlLCBkYXRhKTtcbiAgICAgICAgJC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHNlcnZlci5fZGVxdWV1ZURhdGEoY2FjaGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5zZXRTdGF0dXMoXCJTYXZlZFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkVycm9yXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChlcnJvciwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgIHNlcnZlci5kZWZhdWx0RmFpbHVyZShlcnJvciwgdGV4dFN0YXR1cyk7XG4gICAgICAgICAgICAgICAgc2VydmVyLl9wb3N0UmV0cnkoZGF0YSwgdXJsLCBjYWNoZSwgZGVsYXkgKyBzZXJ2ZXIuRkFJTF9ERUxBWSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgZGVsYXkpO1xufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5tYXJrU3VjY2VzcyA9IGZ1bmN0aW9uIChzdWNjZXNzKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHZhciBjYWxsYmFjayA9IG1vZGVsLnNldHRpbmdzLmNvbXBsZXRlZENhbGxiYWNrO1xuICAgIHZhciBmb3JjZVVwZGF0ZSA9IG1vZGVsLnNldHRpbmdzLmZvcmNlVXBkYXRlO1xuICAgIHZhciBoaWRlQ29ycmVjdG5lc3MgPSBtb2RlbC5hc3NpZ25tZW50LnNlY3JldCgpO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVfc3VjY2Vzc1wiKSkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IG1vZGVsLnByb2dyYW1zLl9fbWFpbl9fO1xuICAgICAgICBkYXRhW1wic3RhdHVzXCJdID0gc3VjY2VzcztcbiAgICAgICAgZGF0YVtcImhpZGVfY29ycmVjdG5lc3NcIl0gPSBoaWRlQ29ycmVjdG5lc3M7XG4gICAgICAgIGRhdGFbXCJmb3JjZV91cGRhdGVcIl0gPSBmb3JjZVVwZGF0ZTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoZnVuY3Rpb24gKHBuZ0RhdGEsIGltZykge1xuICAgICAgICAgICAgZGF0YVtcImltYWdlXCJdID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VydmVyLl9wb3N0UmV0cnkoZGF0YSwgc2VydmVyLnVybHMuc2F2ZV9zdWNjZXNzLCBcInNhdmVfc3VjY2Vzc1wiLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgIXJlc3BvbnNlLnN1Ym1pdHRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiVW5ncmFkZWRcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuLypcbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLm1hcmtTdWNjZXNzID0gZnVuY3Rpb24oc3VjY2Vzcykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgY2FsbGJhY2sgPSBtb2RlbC5zZXR0aW5ncy5jb21wbGV0ZWRDYWxsYmFjaztcbiAgICB2YXIgaGlkZUNvcnJlY3RuZXNzID0gbW9kZWwuYXNzaWdubWVudC5zZWNyZXQoKTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoJ3NhdmVfc3VjY2VzcycpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbJ2NvZGUnXSA9IG1vZGVsLnByb2dyYW1zLl9fbWFpbl9fO1xuICAgICAgICBkYXRhWydzdGF0dXMnXSA9IHN1Y2Nlc3M7XG4gICAgICAgIGRhdGFbJ2hpZGVfY29ycmVjdG5lc3MnXSA9IGhpZGVDb3JyZWN0bmVzcztcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoZnVuY3Rpb24ocG5nRGF0YSwgaW1nKSB7XG4gICAgICAgICAgICBkYXRhWydpbWFnZSddID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cygnU2F2aW5nJyk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgICAgICQucG9zdChtb2RlbC5jb25zdGFudHMudXJscy5zYXZlX3N1Y2Nlc3MsIGRhdGEsIFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKCdTYXZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKCdVbmdyYWRlZCcsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cygnRXJyb3InLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5mYWlsKHNlcnZlci5kZWZhdWx0RmFpbHVyZS5iaW5kKHNlcnZlcikpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKCdPZmZsaW5lJywgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKE1hcmsgU3VjY2VzcylcIik7XG4gICAgfVxufTsqL1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZV9hc3NpZ25tZW50XCIpICYmXG4gICAgICAgIG1vZGVsLnNldHRpbmdzLmF1dG9fdXBsb2FkKCkpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImludHJvZHVjdGlvblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaW50cm9kdWN0aW9uKCk7XG4gICAgICAgIGRhdGFbXCJwYXJzb25zXCJdID0gbW9kZWwuYXNzaWdubWVudC5wYXJzb25zKCk7XG4gICAgICAgIGRhdGFbXCJpbml0aWFsXCJdID0gbW9kZWwuYXNzaWdubWVudC5pbml0aWFsX3ZpZXcoKTtcbiAgICAgICAgZGF0YVtcImltcG9ydGFibGVcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmltcG9ydGFibGUoKTtcbiAgICAgICAgZGF0YVtcInNlY3JldFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuc2VjcmV0KCk7XG4gICAgICAgIGRhdGFbXCJkaXNhYmxlX2FsZ29yaXRobV9lcnJvcnNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmRpc2FibGVfYWxnb3JpdGhtX2Vycm9ycygpO1xuICAgICAgICBkYXRhW1wiZGlzYWJsZV90aW1lb3V0XCJdID0gbW9kZWwuYXNzaWdubWVudC5kaXNhYmxlX3RpbWVvdXQoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgLy8gVE9ETzogaGFja2lzaCwgYnJva2VuIGlmICcsJyBpcyBpbiBuYW1lXG4gICAgICAgIGRhdGFbXCJtb2R1bGVzXCJdID0gbW9kZWwuYXNzaWdubWVudC5tb2R1bGVzKCkuam9pbihcIixcIik7XG4gICAgICAgIGRhdGFbXCJmaWxlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuZmlsZXMoKS5qb2luKFwiLFwiKTtcblxuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgdGhpcy51cmxzLnNhdmVfYXNzaWdubWVudCwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFTU0lHTk1FTlRTX0NBQ0hFXCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBUaGUgVVJMIHRvIHBvc3QgdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYWNoZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIHVybCwgZmlsZW5hbWUsIGNhY2hlLCBkZWxheSkge1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyc1tmaWxlbmFtZV0pO1xuICAgIHRoaXMudGltZXJzW2ZpbGVuYW1lXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgc2VydmVyLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHZhciB0aW1lID0gc2VydmVyLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIlNhdmluZ1wiKTtcbiAgICAgICAgJC5wb3N0KHVybCwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHNlcnZlci5kZWZhdWx0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWRUaW1lID0gc2VydmVyLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoZXJyb3IsIHRleHRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuZGVmYXVsdEZhaWx1cmUoZXJyb3IsIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWRUaW1lID0gc2VydmVyLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCB1cmwsIGZpbGVuYW1lLCBjYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXkgKyBzZXJ2ZXIuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfSwgZGVsYXkpO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUNvZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVfY29kZVwiKSAmJlxuICAgICAgICBtb2RlbC5zZXR0aW5ncy5hdXRvX3VwbG9hZCgpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IG1vZGVsLnNldHRpbmdzLmZpbGVuYW1lKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IG1vZGVsLnByb2dyYW1zW2ZpbGVuYW1lXSgpO1xuXG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCB0aGlzLnVybHMuc2F2ZV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2RlX1wiICsgZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNPREVfQ0FDSEVfXCIgKyBmaWxlbmFtZSwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIENvZGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmdldEhpc3RvcnkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiZ2V0X2hpc3RvcnlcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMuZ2V0X2hpc3RvcnksIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkVycm9yXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoR2V0IEhpc3RvcnkpXCIpO1xuICAgICAgICBjYWxsYmFjayhbXSk7XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uIChhdHRlbXB0KSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzICs9IDE7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2tweS1vdmVybGF5XCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwiYmxvY2tweS1vdmVybGF5XCI+IDwvZGl2PicpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIHN3aXRjaCAoYXR0ZW1wdCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM5ODhcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjNjU1XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzMzM1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBhdHRlbXB0cywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIHRoaXMuc2V0U3RhdHVzKFwiTG9hZGluZ1wiKTtcbiAgICB0aGlzLnNob3dPdmVybGF5KGF0dGVtcHRzKTtcbiAgICAkLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlcnZlci5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkxvYWRlZFwiKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuY2hlY2tJUChyZXNwb25zZS5pcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIuZGVmYXVsdEZhaWx1cmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLl9wb3N0QmxvY2tpbmcodXJsLCBkYXRhLCBhdHRlbXB0cyAtIDEsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH0sIHNlcnZlci5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkQXNzaWdubWVudCA9IGZ1bmN0aW9uIChhc3NpZ25tZW50X2lkKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGxldCBzZXJ2ZXIgPSB0aGlzO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRfYXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiYXNzaWdubWVudF9pZFwiXSA9IGFzc2lnbm1lbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9hc3NpZ25tZW50LCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5tYWluLnNldEFzc2lnbm1lbnQocmVzcG9uc2Uuc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYXNzaWdubWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9ncmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5tYWluLmNvbXBvbmVudHMuZGlhbG9nLnNob3coXCJFcnJvciBXaGlsZSBMb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgcmVsb2FkIHRoZSBwYWdlIG9yIGFkdmFuY2UgdG8gYW5vdGhlciBhc3NpZ25tZW50Ljxicj5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgQXNzaWdubWVudClcIik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiRmFpbHVyZVwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgRmlsZSlcIik7XG4gICAgfVxufTtcblxuLypcbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLndhbGtPbGRDb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlcnZlciA9IHRoaXMsXG4gICAgICAgIG1haW4gPSB0aGlzLm1haW47XG4gICAgaWYgKHRoaXMuaW5Qcm9ncmVzc1dhbGtzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gdGhpcy5pblByb2dyZXNzV2Fsa3MucG9wKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIHdhbGsnLCByZXNwb25zZS5sb2dfaWQpO1xuICAgICAgICBtYWluLnNldENvZGUocmVzcG9uc2UuY29kZSwgJ19fbWFpbl9fJyk7XG4gICAgICAgIG1haW4uc2V0Q29kZShyZXNwb25zZS5mZWVkYmFjaywgJ2dpdmVfZmVlZGJhY2snKTtcbiAgICAgICAgbWFpbi5tb2RlbC5hc3NpZ25tZW50LmFzc2lnbm1lbnRfaWQgPSByZXNwb25zZS5hc3NpZ25tZW50X2lkO1xuICAgICAgICBtYWluLm1vZGVsLmFzc2lnbm1lbnQudXNlcl9pZCA9IHJlc3BvbnNlLnVzZXJfaWQ7XG4gICAgICAgIG1haW4ubW9kZWwuc2V0dGluZ3MubG9nX2lkKHJlc3BvbnNlLmxvZ19pZCk7XG4gICAgICAgIG1haW4uY29tcG9uZW50cy5lbmdpbmUub25FeGVjdXRpb25FbmQgPSBmdW5jdGlvbihuZXdTdGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UubG9nX2lkLCBuZXdTdGF0ZSk7XG4gICAgICAgICAgICBtYWluLmNvbXBvbmVudHMuZW5naW5lLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VydmVyLndhbGtPbGRDb2RlKClcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmdcIik7XG4gICAgICAgIG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoJ1JldHJpZXZpbmcnKTtcbiAgICAgICAgaWYgKG1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoJ3dhbGtfb2xkX2NvZGUnKSkge1xuICAgICAgICAgICAgJC5wb3N0KHNlcnZlci5tYWluLm1vZGVsLmNvbnN0YW50cy51cmxzLndhbGtfb2xkX2NvZGUsIGRhdGEsIFxuICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1vcmVfdG9fZG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuaW5Qcm9ncmVzc1dhbGtzID0gcmVzcG9uc2Uud2Fsa3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLndhbGtPbGRDb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKCdGYWlsdXJlJywgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoXG4gICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci53YWxrT2xkQ29kZSgpXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9zZXJ2ZXIuZGVmYXVsdEZhaWx1cmUuYmluZChzZXJ2ZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKCdPZmZsaW5lJywgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKFdhbGsgT2xkIENvZGUpXCIpO1xuICAgICAgICB9XG4gICAgfVxufSovIiwiLyoqXG4gKiBTa3VscHQgTW9kdWxlIGZvciBob2xkaW5nIHRoZSBJbnN0cnVjdG9yIEFQSS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gYnkgZ2V0dGluZyB0aGUgZnVuY3Rpb25zJyBzb3VyY2UgY29kZSBmcm9tIHRvU3RyaW5nLlxuICogSXNuJ3QgdGhhdCBjcmF6eT9cbiAqXG4gKlxuICovXG5leHBvcnQgbGV0ICRza19tb2RfaW5zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1haW4gbW9kdWxlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYXQgdGhlIGVuZC5cbiAgICBsZXQgbW9kID0ge307XG4gICAgbGV0IG5vbmUgPSBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgXG4gICAgbGV0IHByaW9yID0gbnVsbDtcbiAgICBtb2QudGltZWl0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ0aW1laXRcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChwcmlvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gRGF0ZS5ub3coKSAtIHByaW9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobmFtZSksIGRpZmZlcmVuY2UvMTAwMCk7XG4gICAgICAgIHByaW9yID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGZlZWRiYWNrIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5sb2cgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGRlYnVnIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5kZWJ1ZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb3ZlcnRzIHRoZSBvdXRwdXQgaW4gdGhlIHN0dWRlbnQgcmVwb3J0IHRvIGEgcHl0aG9uIFxuICAgICAqIGxpc3QgYW5kIHJldHVybnMgaXQuXG4gICAgKiovXG4gICAgbW9kLmdldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1peGVkUmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdLnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnF1ZXVlX2lucHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInF1ZXVlX2lucHV0XCIsIGFyZ3VtZW50cywgMSwgSW5maW5pdHkpO1xuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBhcmdzW2ldO1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImlucHV0XCIsIFwic3RyaW5nXCIsIFNrLmJ1aWx0aW4uY2hlY2tTdHJpbmcoaW5wdXQpKTtcbiAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goU2suZmZpLnJlbWFwVG9KcyhpbnB1dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X3Byb2dyYW0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Byb2dyYW1cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInZlcmlmaWVyXCJdLmNvZGUpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC50cmFjZV9saW5lcyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5saW5lcztcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW9kLmdldF9zdHVkZW50X2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coU2suZXhlY3V0aW9uUmVwb3J0cyk7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtub25lLCBub25lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvcixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW1wibGluZVwiXSA9IGVycm9yLnRyYWNlYmFja1swXS5saW5lbm87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uID0gU2suZmZpLnJlbWFwVG9QeShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW2Vycm9yLCBwb3NpdGlvbl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBtb2QuaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImhhZF9leGVjdXRpb25fdGltZV9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gIVNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvci50cCRuYW1lID09PSBcIlRpbWVMaW1pdEVycm9yXCI7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGJhY2t1cFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgbW9kLmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGJhY2t1cFRpbWUgPSBTay5leGVjTGltaXQ7XG4gICAgICAgIGlmIChTay5leGVjTGltaXRGdW5jdGlvbikge1xuICAgICAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb2QudW5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IGJhY2t1cFRpbWU7XG4gICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnN1cHByZXNzX3Njcm9sbGluZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzdXBwcmVzc19zY3JvbGxpbmdcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBcbiAgICAvKlxuICAgIGRlZiBoaXN0KHNlbGYsIGRhdGEsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0hpc3RvZ3JhbScsICd2YWx1ZXMnOiBkYXRhLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHBsb3Qoc2VsZiwgeHMsIHlzPU5vbmUsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIGlmIHlzID09IE5vbmU6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcmFuZ2UobGVuKHhzKSksICd5JzogeHMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAgICAgZWxzZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHNjYXR0ZXIoc2VsZiwgeHMsIHlzLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdTY2F0dGVyJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICovXG4gICAgbW9kLmdldF9wbG90cyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcGxvdHNcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXRzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBvdXRwdXRzLmZpbHRlcihmdW5jdGlvbihvdXRwdXQpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgIT0gXCJzdHJpbmdcIjsgXG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5tYXAoZnVuY3Rpb24ocGxvdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGxvdCA9IHsgXCJ0eXBlXCI6IHBsb3QudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdC50eXBlID09PSBcImxpbmVcIiB8fCBwbG90LnR5cGUgPT09IFwic2NhdHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieFwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi54OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ5XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lnk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsb3QudHlwZSA9PT0gXCJoaXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ2YWx1ZXNcIl0gPSBwbG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bsb3Q7XG4gICAgICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgICAgIFwieGxhYmVsXCI6IFwiXCIsIFwieWxhYmVsXCI6IFwiXCIsIFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIiwgXCJsZWdlbmRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWl4ZWRSZW1hcFRvUHkob3V0cHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIFByb3ZpZGVzIGBzdHVkZW50YCBhcyBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgdGhhdCB0aGUgc3R1ZGVudCBkZWNsYXJlZC5cbiAgICBtb2QuU3R1ZGVudERhdGEgPSBTay5taXNjZXZhbC5idWlsZENsYXNzKG1vZCwgZnVuY3Rpb24oJGdibCwgJGxvYykge1xuICAgICAgICAkbG9jLl9faW5pdF9fID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICAvL3NlbGYuZGF0YSA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0RpY3QgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIFNrLmFic3RyLnNhdHRyKHNlbGYsIFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSwgbmV3RGljdCwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLm1vZHVsZSA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm1vZHVsZTtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBzZWxmLm1vZHVsZS4kZDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RpY3QubXAkYXNzX3N1YnNjcmlwdChTay5mZmkucmVtYXBUb1B5KGtleSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGxvYy5nZXRfbmFtZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9uYW1lc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFNrLmZmaS5yZW1hcFRvUHkocHJvcGVydHkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICRsb2MuZ2V0X3ZhbHVlc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3ZhbHVlc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5tb2R1bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbW9kLnN0dWRlbnQgPSBTay5taXNjZXZhbC5jYWxsc2ltT3JTdXNwZW5kKG1vZC5TdHVkZW50RGF0YSk7XG4gICAgXG4gICAgbW9kLmdldF9zdHVkZW50X2RhdGEgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZGF0YVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbW9kLnN0dWRlbnQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCIvKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIiwgdmFsdWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIiwgJC5ub3coKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZW1vdmluZyBhIGtleSBmcm9tIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZW1vdmUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHRpbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHRpbWUgZm9yLlxuICogQHJldHVybnMge0ludGVnZXJ9IC0gVGhlIHRpbWVzdGFtcCAobG9jYWwgZXBvY2gpIHdoZW4gdGhlIGtleSB3YXMgbGFzdCBzZXQuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIHNlcnZlciBoYXMgdGhlIG5ld2VyIHZlcnNpb24uIFRoaXMgZnVuY3Rpb25cbiAqIGFzc3VtZXMgdGhhdCB0aGUgc2VydmVyIHRyaXAgdGFrZXMgYWJvdXQgNSBzZWNvbmRzLiBUaGlzIG1ldGhvZFxuICogaXMgbGFyZ2VseSBkZXByZWNhdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBzZXJ2ZXJfdGltZSAtIFRoZSBzZXJ2ZXIncyB0aW1lIGFzIGFuIGVwb2NoIChpbiBtaWxsaXNlY29uZHMpXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmlzX25ldyA9IGZ1bmN0aW9uKGtleSwgc2VydmVyX3RpbWUpIHtcbiAgICB2YXIgc3RvcmVkX3RpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xuICAgIHJldHVybiAoc2VydmVyX3RpbWUgPj0gc3RvcmVkX3RpbWUrNTAwMCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRSQUNFX0hUTUwgPSBgXHJcblxyXG48ZGl2IGNsYXNzPVwiYmxvY2tweS10cmFjZSBjb2wtbWQtNiBibG9ja3B5LXBhbmVsXCJcclxuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJUcmFjZVwiPlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICA8c3Ryb25nPlRyYWNlOiA8L3N0cm9uZz5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LWhpZGUtdHJhY2UnXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPiBIaWRlIFRyYWNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyBibG9ja3B5LXRyYWNlLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5iYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgKDxzcGFuIGRhdGEtYmluZD0ndGV4dDogdWkudHJhY2UubGluZSc+PC9zcGFuPilcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZvcndhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6ICRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsb2FkIHRoZSB0cmFjZSB0YWJsZSwgc2hvd2luZyBpdCBpZiBpdCB3YXMgaGlkZGVuIGFuZFxyXG4gICAgICogcmVzZXR0aW5nIGl0cyBwb3NpdGlvbiB0byB0aGUgbGFzdCBzdGVwLlxyXG4gICAgICovXHJcbiAgICBidWlsZFRyYWNlVGFibGUoKSB7XHJcbiAgICAgICAgdmFyIGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnNob3dfdHJhY2UodHJ1ZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnRyYWNlX3N0ZXAoZXhlY3V0aW9uLmxhc3Rfc3RlcCgpKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlZGl0b3JcIiwgXCJ0cmFjZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lIGEgc2V0IG9mIHZhcmlhYmxlcyB0cmFjZWQgZnJvbSB0aGUgZXhlY3V0aW9uIGFuZCBwYXJzZSBvdXQgYW55XHJcbiAgICAgKiBnbG9iYWwgdmFyaWFibGVzIGFuZCBtb2R1bGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBhIG1hcHBpbmcgb2YgdmFyaWFibGUgbmFtZXMgdG8gdGhlaXIgU2t1cHQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHBhcnNlR2xvYmFscyh2YXJpYWJsZXMpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IG1vZHVsZXMgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5zZXR0aW5ncy50cmFjZV9vZmYoKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgIT09IFwiX19uYW1lX19cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIl9fZG9jX19cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIl9fcGFja2FnZV9fXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQgPSB7XCJuYW1lXCI6IHByb3BlcnR5LCBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUudG9TdHJpbmcoKX07XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeUVuZ2luZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbid0IHJlYWxseSBkbyBhbnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zcSRsZW5ndGggPD0gMjAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBbYG1pbmAsIGBtYXhgXS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgaW50ZWdlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSBpbnRlZ2VyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gaW50ZWdlci5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xufVxuXG4vKipcbiAqIEVuY29kZXMgc29tZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHNhZmVseSB3cml0dGVuIGludG8gYW4gSFRNTCBib3guXG4gKiBUaGlzIGluY2x1ZGVzIHJlcGxhY2luZyBzcGVjaWFsIEhUTUwgY2hhcmFjdGVycyAoJiwgPCwgPiwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSB0ZXh0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEhUTUwtc2FmZSB0ZXh0LlxuICovXG5mdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9