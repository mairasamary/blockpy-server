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
/*! exports provided: _IMPORTED_COMPLETE_DATASETS, _IMPORTED_DATASETS, BlockPy */
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
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog */ "./src/dialog.js");
/* harmony import */ var _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editor/assignment_settings */ "./src/editor/assignment_settings.js");
/* harmony import */ var _corgis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./corgis */ "./src/corgis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_COMPLETE_DATASETS", function() { return _corgis__WEBPACK_IMPORTED_MODULE_16__["_IMPORTED_COMPLETE_DATASETS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_DATASETS", function() { return _corgis__WEBPACK_IMPORTED_MODULE_16__["_IMPORTED_DATASETS"]; });

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
          role: ko.observable(this.getSetting("user.role", "owner")),

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
          // TODO: warning message if maze
          type: ko.observable(""),
          startingCode: ko.observable(configuration["assignment.starting_code"] || ""),
          onRun: ko.observable(configuration["assignment.on_run"] || ""),
          onChange: ko.observable(configuration["assignment.on_change"]),
          onEval: ko.observable(configuration["assignment.on_eval"]),
          extraInstructorFiles: ko.observableArray([]),
          extraStartingFiles: ko.observableArray([]),
          forkedId: ko.observable(null),
          forkedVersion: ko.observable(null),
          ownerId: ko.observable(null),
          courseId: ko.observable(null),
          version: ko.observable(null),
          tags: ko.observableArray([]),
          sampleSubmissions: ko.observableArray([]),
          reviewed: ko.observable(configuration["assignment.reviewed"]),
          hidden: ko.observable(configuration["assignment.hidden"]),
          settings: Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__["makeAssignmentSettingsModel"])(configuration)
        },
        submission: {
          id: ko.observable(null),
          code: ko.observable(configuration["submission.code"] || ""),
          extraFiles: ko.observableArray([]),
          url: ko.observable(""),
          endpoint: ko.observable(""),
          score: ko.observable(0),
          correct: ko.observable(false),
          // assignmentId inferred from assignment.id
          // courseId inferred from user.courseId
          // userId inferred from user.id
          // assignmentVersion inferred from assignment.version
          version: ko.observable(0),
          submissionStatus: ko.observable("Started"),
          gradingStatus: ko.observable("NotReady")
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
          updateSubmission: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          updateSubmissionMessage: ko.observable(""),
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
            results: null,
            globals: null
          },
          // Information related to feedback from the instructor run
          feedback: {
            // str (markdown)
            message: ko.observable("Ready"),
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
    key: "loadTags",
    value: function loadTags(tags) {// Already a JSON list representing tags
    }
  }, {
    key: "loadSampleSubmissions",
    value: function loadSampleSubmissions(samples) {// Already a JSON list representing samples
    }
  }, {
    key: "loadSubmission",
    value: function loadSubmission(submission) {
      if (!submission) {
        return false;
      } // TODO: What if submissions' assignment version and the assignments' version conflict?


      this.model.submission.id(submission.id);
      this.model.submission.code(submission.code);
      this.model.submission.correct(submission.correct);
      this.model.submission.score(submission.score);
      this.model.submission.endpoint(submission.endpoint);
      this.model.submission.url(submission.url);
      this.model.submission.version(submission.version);
      this.model.submission.gradingStatus(submission.grading_status);
      this.model.submission.submissionStatus(submission.submission_status);
      this.model.user.courseId(submission.course_id);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(submission.extra_files, this.model.submission.extraFiles);
    }
  }, {
    key: "loadAssignmentData_",
    value: function loadAssignmentData_(data) {
      console.log(data);
      var wasServerConnected = this.model.configuration.serverConnected(); // TODO: Reset UI for new assignment

      this.model.configuration.serverConnected(false);
      var assignment = data.assignment;
      this.model.assignment.id(assignment.id);
      this.model.assignment.version(assignment.version);
      this.model.assignment.courseId(assignment.course_id);
      this.model.assignment.forkedId(assignment.forked_id);
      this.model.assignment.forkedVersion(assignment.forked_version);
      this.model.assignment.hidden(assignment.hidden);
      this.model.assignment.reviewed(assignment.reviewed);
      this.model.assignment.type(assignment.type);
      this.model.assignment.url(assignment.url);
      this.model.assignment.instructions(assignment.instructions);
      this.model.assignment.name(assignment.name);
      this.model.assignment.onChange(assignment.on_change || null);
      this.model.assignment.onEval(assignment.on_eval || null);
      this.model.assignment.onRun(assignment.on_run);
      this.model.assignment.startingCode(assignment.starting_code);
      this.model.assignment.ownerId(assignment.owner_id);
      Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_15__["loadAssignmentSettings"])(this.model, assignment.settings);
      this.loadTags(assignment.tags);
      this.loadSampleSubmissions(assignment.sample_submissions);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_instructor_files, this.model.assignment.extraInstructorFiles);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_starting_files, this.model.assignment.extraStartingFiles);
      this.loadSubmission(data.submission);
      this.model.configuration.serverConnected(wasServerConnected);
      this.components.server.setStatus("saveFile", server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY);
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
                return model.assignment.extraInstructorFiles().some(function (file) {
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
              // TODO fix extrafiles for instructor and student

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
          },
          extraStudentFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.submission.extraFiles),
          extraInstructorFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.assignment.extraInstructorFiles),
          extraStartingFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.assignment.extraStartingFiles)
        },
        editors: {
          current: ko.pureComputed(function () {
            return self.components.editors.getEditor(model.display.filename());
          }),
          view: ko.pureComputed(function () {
            return model.assignment.settings.hideEditors() ? "None" : model.display.filename() ? model.ui.editors.current() : "None";
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
          importDataset: function importDataset() {
            self.components.corgis.openDialog();
          },
          python: {
            fullscreen: function fullscreen() {
              var codeMirror = self.components.pythonEditor.bm.textEditor.codeMirror;
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
            return model.status.loadAssignmentMessage() || model.status.saveAssignmentMessage() || model.status.loadHistoryMessage() || model.status.loadFileMessage() || model.status.saveFileMessage() || model.status.loadDatasetMessage() || model.status.logEventMessage() || model.status.updateSubmissionMessage() || "";
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

      components.dialog = new _dialog__WEBPACK_IMPORTED_MODULE_14__["BlockPyDialog"](main, container.find(".blockpy-dialog"));
      components.feedback = new feedback_js__WEBPACK_IMPORTED_MODULE_13__["BlockPyFeedback"](main, container.find(".blockpy-feedback"));
      components.trace = new _trace__WEBPACK_IMPORTED_MODULE_11__["Trace"](main);
      components.console = new _console__WEBPACK_IMPORTED_MODULE_12__["BlockPyConsole"](main, container.find(".blockpy-console"));
      components.engine = new engine_js__WEBPACK_IMPORTED_MODULE_10__["BlockPyEngine"](main);
      components.fileSystem = new _files__WEBPACK_IMPORTED_MODULE_8__["BlockPyFileSystem"](main);
      components.editors = new editors_js__WEBPACK_IMPORTED_MODULE_4__["Editors"](main, container.find(".blockpy-editor"));
      components.pythonEditor = this.components.editors.byName("python");
      components.server = new server_js__WEBPACK_IMPORTED_MODULE_6__["BlockPyServer"](main);
      components.corgis = new _corgis__WEBPACK_IMPORTED_MODULE_16__["BlockPyCorgis"](main);
      /*
      TODO
      components.toolbar = new BlockPyToolbar(main, container.find(".blockpy-toolbar"));
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
/*! exports provided: CONSOLE_HTML, ConsoleLineType, BlockPyConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_HTML", function() { return CONSOLE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLineType", function() { return ConsoleLineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyConsole", function() { return BlockPyConsole; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CONSOLE_HTML = "\n    <div class='col-md-6 blockpy-panel blockpy-console'\n          role=\"region\" aria-label=\"Console\"\n          data-bind=\"class: ui.console.size\">\n          \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-show-feedback'\n                data-bind=\"hidden: ui.secondRow.isConsoleShowVisible, click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span>\n        </button>\n          \n        <strong>Console:</strong>\n        \n        <div class='blockpy-printer blockpy-printer-default'>\n        </div>\n        \n     </div>";
var NEW_CONSOLE_LINE_HTML = "<div></div>";
/**
 *
 * @enum
 */

var ConsoleLineType = {
  TEXT: "text",
  HTML: "html",
  PLOT: "plot",
  IMAGE: "image",
  TURTLE: "turtle",
  EVAL: "eval",
  INPUT: "input",
  TEST_CASE: "test_case"
};

var ConsoleLine =
/*#__PURE__*/
function () {
  function ConsoleLine(main, type, content) {
    _classCallCheck(this, ConsoleLine);

    this.main = main;
    this.type = type;
    this.content = content;
    this.origin = {
      filename: Sk.currFilename,
      step: main.components.engine.executionBuffer.step,
      line: main.components.engine.executionBuffer.line
    };
    this.html = $("<div></div>", {
      "class": "blockpy-printer-output",
      "data-toggle": "tooltip",
      "data-placement": "auto",
      "data-step": this.origin.step,
      "title": "Step " + this.origin.step + ", Line " + this.origin.line
    });
    console.log(this.html.attr("title"));
    this.visible = !main.model.display.mutePrinter();
    this.index = 0;
  }

  _createClass(ConsoleLine, [{
    key: "toSkulpt",
    value: function toSkulpt() {
      return Sk.ffi.remapToJs(this.content);
    }
  }]);

  return ConsoleLine;
}();

var ConsoleLinePlot =
/*#__PURE__*/
function (_ConsoleLine) {
  _inherits(ConsoleLinePlot, _ConsoleLine);

  function ConsoleLinePlot(main, content) {
    var _this;

    _classCallCheck(this, ConsoleLinePlot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLinePlot).call(this, main, ConsoleLineType.PLOT, content));

    _this.html.addClass("blockpy-console-plot-output");

    return _this;
  }

  _createClass(ConsoleLinePlot, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        where.append(this.html);
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLinePlot;
}(ConsoleLine);

var ConsoleLineText =
/*#__PURE__*/
function (_ConsoleLine2) {
  _inherits(ConsoleLineText, _ConsoleLine2);

  function ConsoleLineText() {
    _classCallCheck(this, ConsoleLineText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineText).apply(this, arguments));
  }

  _createClass(ConsoleLineText, [{
    key: "addContent",
    value: function addContent(content) {
      this.content = this.content + content;
    }
  }, {
    key: "render",
    value: function render(where) {
      if (this.visible) {
        var encodedText = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["encodeHTML"])(this.content);
        var lineData = $("<samp></samp>", {
          "html": encodedText
        });
        this.html.append(lineData);
        where.append(this.html);
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineText;
}(ConsoleLine);

var ConsoleLineInput =
/*#__PURE__*/
function (_ConsoleLine3) {
  _inherits(ConsoleLineInput, _ConsoleLine3);

  function ConsoleLineInput(main, promptMessage) {
    _classCallCheck(this, ConsoleLineInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineInput).call(this, main, ConsoleLineType.INPUT, promptMessage));
  }
  /**
   * Creates an Input box for receiving input() from the user.
   *
   */


  _createClass(ConsoleLineInput, [{
    key: "render",
    value: function render(where) {
      // Perform any necessary cleaning
      console.log(this.content);

      if (this.visible) {
        // Input form
        var inputForm = $("<input type='text' />"); // Enter button

        var inputBtn = $("<button></button>", {
          "html": "Enter"
        }); // Group form and button

        var inputGroup = $("<div></div>", {
          "class": "blockpy-console-input"
        });
        inputGroup.append(inputForm);
        inputGroup.append(inputBtn); // Prompt box, new line, input group

        var inputBox = $("<div></div>");

        if (this.content !== "\n") {
          var encodedText = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["encodeHTML"])(this.content);
          var inputMsg = $("<samp></samp>", {
            "html": encodedText
          });
          inputBox.append(inputMsg);
        }

        inputBox.append($("<br>")).append(inputGroup); // Render

        this.html.append(inputBox);
        where.append(this.html); // Make it interactive

        return this.makeInteractive(inputForm, inputBtn);
      }

      return "";
    }
  }, {
    key: "makeInteractive",
    value: function makeInteractive(input, button) {
      var _this2 = this;

      var resolveOnClick;
      var submittedPromise = new Promise(function (resolve) {
        resolveOnClick = resolve;
      });

      var submitForm = function submitForm() {
        resolveOnClick(input.val());
        input.prop("disabled", true);
        button.prop("disabled", true);

        _this2.html.tooltip();
      };

      button.click(submitForm);
      input.keyup(function (e) {
        if (e.keyCode === 13) {
          submitForm();
        }
      });
      input.focus();
      return submittedPromise;
    }
  }]);

  return ConsoleLineInput;
}(ConsoleLine);

var BlockPyConsole =
/*#__PURE__*/
function () {
  /**
   * An object for managing the console, with features for things like printing, plotting, evaling, inputing.
   * The "printer" is the region where we put things, as opposed to the console as a whole.
   *
   * @constructor
   * @param {Object} main - The main BlockPy instance
   * @param {HTMLElement} tag - The HTML object this is attached to.
   */
  function BlockPyConsole(main, tag) {
    _classCallCheck(this, BlockPyConsole);

    this.main = main;
    this.tag = tag;
    this.printerTag = tag.find(".blockpy-printer");
    this.DEFAULT_WIDTH = 500;
    this.DEFAULT_HEIGHT = 500;
    this.output = this.main.model.execution.output;
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
      this.output.removeAll();
      this.lineBuffer = null;
      this.plotBuffer = null;
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
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Math.min(this.DEFAULT_WIDTH, this.printerTag.width() - 40);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Math.min(this.DEFAULT_HEIGHT, this.printerTag.height() + 40);
    }
  }, {
    key: "isMuted",
    value: function isMuted() {
      return this.main.model.display.mutePrinter();
    }
    /**
     * Updates each printed element in the printer and makes it hidden
     * or visible, depending on what step we're on.
     *
     * @param {Number} step - The current step of the executed program that we're on; each element in the printer must be marked with a "data-step" property to resolve this.
     * @param {Number} page - Deprecated, not sure what this even does.
     */

  }, {
    key: "stepPrinter",
    value: function stepPrinter(step, page) {
      this.printerTag.find(".blockpy-printer-output").each(function () {
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
     * Print a line to the on-screen printer.
     * @param {String} lineText - A line of text to be printed out.
     */
    value: function print(lineText) {
      // Empty strings means do nothing.
      // print("", end="")
      if (!lineText) {
        return;
      }

      var flush = false;

      if (lineText.charAt(lineText.length - 1) === "\n") {
        flush = true;
      }

      var splitLines = lineText.split("\n");

      if (this.lineBuffer === null) {
        this.lineBuffer = new ConsoleLineText(this.main, ConsoleLineType.TEXT, splitLines[0]);
      } else {
        this.lineBuffer.addContent(splitLines[0]);
      }

      for (var i = 1; i < splitLines.length - 1; i++) {
        this.output.push(this.lineBuffer);
        this.lineBuffer.render(this.printerTag);
        this.lineBuffer = new ConsoleLineText(this.main, ConsoleLineType.TEXT, splitLines[i]);
      }

      if (flush) {
        this.output.push(this.lineBuffer);
        this.lineBuffer.render(this.printerTag);
        this.lineBuffer = null;
      }
    }
  }, {
    key: "plot",
    value: function plot(plots) {
      this.plotBuffer = new ConsoleLinePlot(this.main, plots);
      this.plotBuffer.render(this.printerTag);
      return this.plotBuffer;
    }
    /**
     * Creates and registers a Promise from the Input box
     * @param {String} promptMessage - Message to display to the user.
     *
     */

  }, {
    key: "input",
    value: function input(promptMessage) {
      this.inputBuffer = new ConsoleLineInput(this.main, promptMessage);
      return this.inputBuffer.render(this.printerTag);
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
  }]);

  return BlockPyConsole;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/corgis.js":
/*!***********************!*\
  !*** ./src/corgis.js ***!
  \***********************/
/*! exports provided: _IMPORTED_DATASETS, _IMPORTED_COMPLETE_DATASETS, BlockPyCorgis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_DATASETS", function() { return _IMPORTED_DATASETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_IMPORTED_COMPLETE_DATASETS", function() { return _IMPORTED_COMPLETE_DATASETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyCorgis", function() { return BlockPyCorgis; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
 // TODO: editor.bm.blockEditor.extraTools[]

var _IMPORTED_DATASETS = {};
var _IMPORTED_COMPLETE_DATASETS = {};
/**
 * This is a very simplistic helper function that will transform
 * a given button into a "Loaded" state (disabled, pressed state, etc.).
 *
 * @param {HTMLElement} btn - An HTML element to change the text of.
 */

var setButtonLoaded = function setButtonLoaded(btn) {
  btn.addClass("active").addClass("btn-success").removeClass("btn-primary").prop("disabled", true).text("Loaded").attr("aria-pressed", "true");
};
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

BlockPyCorgis.prototype.loadDatasets = function (silently) {
  var _this = this;

  // Load in each the datasets
  var model = this.main.model,
      editor = this.main.components.pythonEditor,
      server = this.main.components.server;
  var imports = [];
  model.assignment.settings.datasets().split(",").forEach(function (name) {
    if (name && !(name in BlockMirrorBlockEditor.EXTRA_TOOLS)) {
      imports.push.apply(imports, _this.importDataset(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["slug"])(name), name, silently));
    }
  }); // When datasets are loaded, update the toolbox.

  $.when.apply($, imports).done(function () {
    console.log("TRIGGERED");
    editor.bm.forceBlockRefresh();
    editor.bm.blockEditor.remakeToolbox();
  }).fail(function (e) {
    console.log(arguments);
    console.error(e);
  }).always(function () {
    server.finalizeSubscriptions();
  });
};
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


BlockPyCorgis.prototype.importDataset = function (slug, name) {
  var _this2 = this;

  var url_retrievals = [];

  if (this.main.model.ui.server.isEndpointConnected("importDatasets")) {
    var root = this.main.model.configuration.urls.importDatasets + "blockpy/" + slug + "/" + slug;
    this.main.model.display.loadingDatasets.push(name); // Actually get data

    var getDataset = $.getScript(root + "_dataset.js"); // Load getComplete silently in the background because its big :(

    var getComplete = $.getScript(root + "_complete.js");
    var getSkulpt = $.get(root + "_skulpt.js", function (data) {
      Sk.builtinFiles["files"]["src/lib/" + slug + "/__init__.js"] = data;
    });
    var getBlockly = $.getScript(root + "_blockly.js"); // On completion, update menus.

    $.when(getDataset, getSkulpt, getBlockly).done(function () {
      _this2.loadedDatasets.push(slug);

      _this2.main.components.pythonEditor.bm.forceBlockRefresh();

      _this2.main.components.pythonEditor.bm.blockEditor.remakeToolbox();

      _this2.main.model.display.loadingDatasets.remove(name);
    });
    url_retrievals.push(getDataset, getSkulpt, getBlockly);
  }

  return url_retrievals;
};
/**
 * Opens a dialog box to present the user with the datasets available
 * through the CORGIS server. This requires a call, so this method
 * completes asynchronously. The dialog is composed of a table with
 * buttons to load the datasets (More than one dataset can be loaded
 * from within the dialog at a time).
 */


BlockPyCorgis.prototype.openDialog = function () {
  var _this3 = this;

  if (this.main.model.ui.server.isEndpointConnected("importDatasets")) {
    var root = this.main.model.configuration.urls.importDatasets;
    $.getJSON(root + "index.json", function (data) {
      // Make up the Body
      var datasets = data.blockpy.datasets;
      var documentation = data.blockpy.documentation;
      var start = $("<p>Documentation is available at <a href='".concat(documentation, "' target=_blank>url</a></p>"));
      var body = $("<table></table>", {
        "class": "table table-bordered table-sm table-striped"
      });
      Object.keys(datasets).sort().map(function (name) {
        var titleName = name;
        var btn = $('<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Load</button>');

        if (_this3.loadedDatasets.indexOf(name) > -1) {
          setButtonLoaded(btn);
        } else {
          btn.click(function () {
            _this3.importDataset(name.toLowerCase(), "Data - " + titleName);

            setButtonLoaded(btn);
          });
        }

        $("<tr></tr>").append($("<td>" + titleName + "</td>")).append($("<td>" + datasets[titleName]["short"] + "</td>")).append($("<td></td>").append(btn)).appendTo(body);
      });
      body.appendTo(start); // Show the actual dialog

      _this3.main.components.dialog.show("Import Datasets", start, null);
    });
  }
};
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
/*! exports provided: DIALOG_HTML, BlockPyDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_HTML", function() { return DIALOG_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyDialog", function() { return BlockPyDialog; });
// TODO: Dyanmically populate aria-labelledby in this and other places
var DIALOG_HTML = "\n    <div class='blockpy-dialog modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-hidden=\"true\"\n         aria-modal=\"true\">\n        <div class='modal-dialog' rol=\"document\">\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
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
    if (onclose !== undefined && onclose !== null) {
      onclose();
    }
  });
};

BlockPyDialog.prototype.ERROR_LOADING_ASSIGNMNENT = function () {
  confirm("Error Loading Assignment", "BlockPy encountered an error while loading the assignment.<br>\nPlease reload the page and try again.");
};

BlockPyDialog.prototype.SCREENSHOT_BLOCKS = function () {// TODO
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
/*! exports provided: ASSIGNMENT_SETTINGS_EDITOR_HTML, saveAssignmentSettings, loadAssignmentSettings, makeAssignmentSettingsModel, AssignmentSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSIGNMENT_SETTINGS_EDITOR_HTML", function() { return ASSIGNMENT_SETTINGS_EDITOR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAssignmentSettings", function() { return saveAssignmentSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAssignmentSettings", function() { return loadAssignmentSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAssignmentSettingsModel", function() { return makeAssignmentSettingsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSettings", function() { return AssignmentSettings; });
/* harmony import */ var _abstract_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_editor */ "./src/editor/abstract_editor.js");
/* harmony import */ var _python__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./python */ "./src/editor/python.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div>\n    Assignment Settings\n    </div>\n";
var ASSIGNMENT_SETTINGS = [
/**
 * Whether or not the user is allowed to edit the file directly
 * @type {bool}
 */
["canEdit", "can_edit", true],
/**
 * Whether or not the user can use blocks
 * @type {bool}
 */
["canBlocks", "can_blocks", true],
/**
 * Whether to prevent timeouts (potentially allow infinite loops)
 * @type {bool}
 */
["disableTimeout", "disable_timeout", false],
/**
 * What level of toolbox to present to the user
 */
["toolboxLevel", "toolbox_level", "normal"],
/**
 * When the student opens this assignment, what Python editor mode to start in
 */
["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT],
/**
 * The current list of datasets available on load as a comma separated string
 */
["datasets", "datasets", ""],
/**
 * Whether this a parson's style question
 */
["isParsons", "is_parsons", false], // Whether to even try to run feedback
["disableFeedback", "disable_feedback", false], // Whether to do any tracing
["disableTrace", "disable_trace", false], // Whether to immediately start in Interactive Console mode
["startInteractive", "start_interactive", false], ["onlyUploads", "only_uploads", false], // What menus/feedback to show and hide
["hideFiles", "hide_files", true], ["hideQueuedInputs", "hide_queued_inputs", true], ["hideEditors", "hide_editors", false], ["hideAll", "hide_all", false], ["hideImportDatasetsButton", "hide_import_datasets_button", true], ["hideImportStatements", "hide_import_statements", false], ["hideCoverageButton", "hide_coverage_button", false]];
function saveAssignmentSettings(model) {
  var settings = {};
  ASSIGNMENT_SETTINGS.forEach(function (setting) {
    var clientName = setting[0],
        serverName = setting[1],
        defaultValue = setting[2];
    var value = model.assignment.settings[clientName](); // Only store this setting if its different from the default

    if (value !== defaultValue) {
      settings[serverName] = value;
    }
  });
  return JSON.stringify(settings);
}
function loadAssignmentSettings(model, settings) {
  if (settings) {
    settings = JSON.parse(settings);
    ASSIGNMENT_SETTINGS.forEach(function (setting) {
      var clientName = setting[0],
          serverName = setting[1];

      if (serverName in settings) {
        model.assignment.settings[clientName](settings[serverName]);
      }
    });
  }
}
function makeAssignmentSettingsModel(configuration) {
  var settings = {};
  ASSIGNMENT_SETTINGS.forEach(function (setting) {
    var clientName = setting[0],
        serverName = setting[1],
        defaultValue = setting[2];

    if (configuration[serverName] === undefined) {
      settings[clientName] = ko.observable(defaultValue);
    } else {
      settings[clientName] = ko.observable(configuration["assignment.settings." + serverName]);
    }
  });
  return settings;
}

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout")))

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

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this);
      this.mde.codemirror.on("change", this.currentListener);

      if (oldEditor !== this) {
        // Delay so that everything is rendered
        setTimeout(this.mde.codemirror.refresh.bind(this.mde.codemirror), 1);
      }
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.mde.value(newContents);
        this.mde.codemirror.refresh();
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
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
 * TODO: Fix capture blocks css
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

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n                ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n                ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n            </div>\n\n        <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.reset\">\n                <span class=\"fas fa-sync\"></span> Reset\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n\n\n    <div class=\"blockpy-python-blockmirror\">\n    </div>\n");
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
    key: "configureExtraBlockly",
    value: function configureExtraBlockly() {
      var _this2 = this;

      this.bm.blockEditor.workspace.configureContextMenu = function (options) {
        options.push({
          enabled: true,
          text: "Screenshot",
          callback: function callback() {
            return _this2.main.components.dialog.SCREENSHOT_BLOCKS;
          }
        });
      };
    }
  }, {
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      var _this3 = this;

      _get(_getPrototypeOf(PythonEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentBMListener = this.updateHandle.bind(this);
      this.bm.addChangeListener(this.currentBMListener); //this.bm.blockEditor.workspace.render();
      //this.bm.refresh();
      // TODO: Figure out why this doesn't end up looking right (go to a different editor, come back, and it'll be squished)

      setTimeout(function () {
        return _this3.bm.refresh();
      }, 1000);
      console.log("Arc, reload!");
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.bm.setCode(newContents); // Delay so that everything is rendered

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
      var _this4 = this;

      this.bm.setMode(this.main.model.display.pythonMode());
      this.main.model.display.pythonMode.subscribe(function (mode) {
        _this4.bm.setMode(mode);
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
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.js");
/* harmony import */ var _engine_on_run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/on_run */ "./src/engine/on_run.js");
/* harmony import */ var _engine_run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/run */ "./src/engine/run.js");
/* harmony import */ var _engine_eval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/eval */ "./src/engine/eval.js");
/* harmony import */ var _engine_sample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/sample */ "./src/engine/sample.js");
/* harmony import */ var _engine_on_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/on_change */ "./src/engine/on_change.js");
/* harmony import */ var _engine_on_eval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/on_eval */ "./src/engine/on_eval.js");
/* harmony import */ var _engine_on_sample__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/on_sample */ "./src/engine/on_sample.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









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
    this.configurations = {
      run: new _engine_run__WEBPACK_IMPORTED_MODULE_2__["RunConfiguration"](main),
      eval: new _engine_eval__WEBPACK_IMPORTED_MODULE_3__["EvalConfiguration"](main),
      onRun: new _engine_on_run__WEBPACK_IMPORTED_MODULE_1__["OnRunConfiguration"](main),
      onChange: new _engine_on_change__WEBPACK_IMPORTED_MODULE_5__["OnChangeConfiguration"](main),
      onEval: new _engine_on_eval__WEBPACK_IMPORTED_MODULE_6__["OnEvalConfiguration"](main)
    }; // Preconfigure skulpt so we can parse

    Sk.configure(this.configurations.run.getSkulptOptions()); // Keeps track of the tracing while the program is executing

    this.executionBuffer = {};
    /**
     * Definable function to be run when execution has fully ended,
     * whether it succeeds or fails.
     */

    this.onExecutionBegin = null;
    this.onExecutionEnd = null;
  }
  /**
   * Reset reports
   */


  _createClass(BlockPyEngine, [{
    key: "resetReports",
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
    key: "run",
    value: function run() {
      this.configuration = this.configurations.run.use(this);
      this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration)).then(this.onRun.bind(this));
    }
  }, {
    key: "onRun",
    value: function onRun() {
      this.configuration = this.configurations.onRun.use(this);
      this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration)).then(this.executionEnd_.bind(this));
    }
  }, {
    key: "evaluate",
    value: function evaluate() {
      this.configuration = this.configurations.eval.use(this);
      this.execute();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.configuration = this.configurations.onChange.use(this);
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this = this;

      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_0__["StatusState"].ACTIVE);
      this.main.components.server.logEvent("Run.Program", "", "", "", this.configuration.filename);
      return Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody(_this.configuration.filename, false, _this.configuration.code, true);
      });
    }
    /**
     * Activated whenever the Python code changes
     */

  }, {
    key: "on_change",
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
  }]);

  return BlockPyEngine;
}();

/***/ }),

/***/ "./src/engine/configurations.js":
/*!**************************************!*\
  !*** ./src/engine/configurations.js ***!
  \**************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A container for holding settings of a particular run configuration.
 */
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
      // Access point for instructor data
      this.engine = engine;
      Sk.executionReports = this.main.model.execution.reports;
      Sk.console = this.main.components.console;
      Sk.queuedInput = [];
      Sk.configure(this.getSkulptOptions());
      return this;
    }
  }, {
    key: "getSkulptOptions",
    value: function getSkulptOptions() {
      return {
        __future__: Sk.python3,
        // import
        read: this.importFile.bind(this),
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
      };
    }
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
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "openFile",
    value: function openFile() {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "writeFile",
    value: function writeFile() {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "print",
    value: function print(value) {
      this.main.components.console.print(value);
    }
  }, {
    key: "input",
    value: function input() {
      console.warn("Unimplemented method!"); // TODO
    }
  }, {
    key: "getImageProxy",
    value: function getImageProxy() {// TODO
    }
  }, {
    key: "step",
    value: function step() {}
  }, {
    key: "lastStep",
    value: function lastStep() {}
  }, {
    key: "isForbidden",
    value: function isForbidden(filename) {
      return false;
    }
  }, {
    key: "success",
    value: function success(module) {
      throw new Error("Abstract success execution");
    }
  }, {
    key: "failure",
    value: function failure(error) {
      throw new Error("Abstract failure execution");
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

  return Configuration;
}();

/***/ }),

/***/ "./src/engine/eval.js":
/*!****************************!*\
  !*** ./src/engine/eval.js ***!
  \****************************/
/*! exports provided: EvalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalConfiguration", function() { return EvalConfiguration; });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/engine/student.js");
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


var EvalConfiguration =
/*#__PURE__*/
function (_StudentConfiguration) {
  _inherits(EvalConfiguration, _StudentConfiguration);

  function EvalConfiguration() {
    _classCallCheck(this, EvalConfiguration);

    return _possibleConstructorReturn(this, _getPrototypeOf(EvalConfiguration).apply(this, arguments));
  }

  _createClass(EvalConfiguration, [{
    key: "use",
    value: function use(engine) {
      // TODO: fix to be currently added line
      this.main.model.execution.feedback.message("Running...");
      this.filename = "answer";
      this.code = "print(name)";

      _get(_getPrototypeOf(EvalConfiguration.prototype), "use", this).call(this, engine);

      Sk.retainGlobals = true;
      Sk.globals = this.main.model.execution.student.globals;
      return this;
    }
  }]);

  return EvalConfiguration;
}(_student__WEBPACK_IMPORTED_MODULE_0__["StudentConfiguration"]);

/***/ }),

/***/ "./src/engine/instructor.js":
/*!**********************************!*\
  !*** ./src/engine/instructor.js ***!
  \**********************************/
/*! exports provided: InstructorConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorConfiguration", function() { return InstructorConfiguration; });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations.js */ "./src/engine/configurations.js");
/* harmony import */ var _sk_mod_instructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sk_mod_instructor */ "./src/sk_mod_instructor.js");
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



var UTILITY_MODULE_CODE = "var $builtinmodule = " + _sk_mod_instructor__WEBPACK_IMPORTED_MODULE_1__["$sk_mod_instructor"].toString();
var InstructorConfiguration =
/*#__PURE__*/
function (_Configuration) {
  _inherits(InstructorConfiguration, _Configuration);

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

      this.main.model.display.mutePrinter(true); // Disable input box

      Sk.queuedInput = []; // TODO Sk.inputfun = BlockPyEngine.inputMockFunction;
      // Enable utility mode

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = UTILITY_MODULE_CODE;
      Sk.builtinFiles.files["./_instructor/__init__.js"] = "let $builtinmod = function(mod){ return mod; }";
      return this;
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (filename === "./answer.py") {
        return this.main.model.submission.code();
      } else if (filename === "./_instructor/on_run.py") {
        return this.main.model.assignment.onRun();
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }]);

  return InstructorConfiguration;
}(_configurations_js__WEBPACK_IMPORTED_MODULE_0__["Configuration"]);

/***/ }),

/***/ "./src/engine/on_change.js":
/*!*********************************!*\
  !*** ./src/engine/on_change.js ***!
  \*********************************/
/*! exports provided: OnChangeConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChangeConfiguration", function() { return OnChangeConfiguration; });
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
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


var OnChangeConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat) {
  _inherits(OnChangeConfiguration, _InstructorConfigurat);

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
      clearTimeout(this.main.model.display.triggerOnChange);
      return this;
    }
  }]);

  return OnChangeConfiguration;
}(_instructor__WEBPACK_IMPORTED_MODULE_0__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_eval.js":
/*!*******************************!*\
  !*** ./src/engine/on_eval.js ***!
  \*******************************/
/*! exports provided: OnEvalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnEvalConfiguration", function() { return OnEvalConfiguration; });
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
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


var OnEvalConfiguration =
/*#__PURE__*/
function (_InstructorConfigurat) {
  _inherits(OnEvalConfiguration, _InstructorConfigurat);

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
}(_instructor__WEBPACK_IMPORTED_MODULE_0__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_run.js":
/*!******************************!*\
  !*** ./src/engine/on_run.js ***!
  \******************************/
/*! exports provided: OnRunConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnRunConfiguration", function() { return OnRunConfiguration; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
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




var NEW_LINE_REGEX = /\r\n|\r|\n/;
/**
 * @return {string}
 */

var WRAP_INSTRUCTOR_CODE = function WRAP_INSTRUCTOR_CODE(studentCode, instructorCode, quick, isSafe) {
  var safeCode = JSON.stringify(studentCode);
  var indentedCode = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["indent"])(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["indent"])(isSafe ? studentCode : "pass"));
  var tifaAnalysis = "";

  if (!quick) {
    tifaAnalysis = "from pedal.tifa import tifa_analysis\ntifa_analysis(False)";
  }

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\n").concat(tifaAnalysis, "\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = get_student_data()\ncompatibility.set_sandbox(student)\nerror, position = get_student_error()\ncompatibility.raise_exception(error, position)\ncompatibility.run_student = run_student\ncompatibility.get_plots = get_plots\ncompatibility.get_output = get_output\ncompatibility.reset_output = reset_output\ncompatibility.trace_lines = trace_lines\ndef capture_output(func, *args):\n   reset_output()\n   func(*args)\n   return get_output()\ncompatibility.capture_output = capture_output\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n#print(MAIN_REPORT.feedback[0].mistake['error'])\n");
};

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

      this.filename = "_instructor.on_run";
      this.code = this.main.model.assignment.onRun();
      var report = this.main.model.execution.reports; // Actually run the python code

      var studentCodeSafe = this.main.model.submission.code();
      Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      var isSafe = report["parser"].success && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset;
      report["instructor"] = {
        "compliments": [],
        "filename": "./_instructor/on_run.py",
        "code": instructorCode //'complete': false // Actually, let's use undefined for now.

      };
      this.code = instructorCode;
      Sk.retainGlobals = false;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      // TODO: Actually parse results
      var results = module.$d.on_run.$d;
      this.main.components.feedback.presentFeedback(results);
      this.main.model.execution.reports["instructor"]["success"] = true;
      var success = Sk.ffi.remapToJs(results.SUCCESS);
      this.main.model.submission.correct(success || this.main.model.submission.correct()); // Cannot exceed 1 point, cannot go below 0 points

      var score = Sk.ffi.remapToJs(results.SCORE);
      score = Math.max(0.0, Math.min(1.0, score));
      var oldScore = this.main.model.submission.score();
      this.main.model.submission.score(Math.max(oldScore, score)); // Hide status

      var hide = Sk.ffi.remapToJs(results.HIDE); // And fire the result!

      this.main.components.server.updateSubmission(score, success, hide, false);
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY); //after(module);

      if (!Sk.executionReports.instructor.scrolling) {
        try {
          this.main.components.console.scrollToBottom();
        } catch (e) {}
      }
    }
  }, {
    key: "failure",
    value: function failure(error) {
      var report = this.main.model.execution.reports;

      if (error.tp$name === "GracefulExit") {
        report["instructor"]["success"] = true;
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      } else {
        this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED); //console.log(report["instructor"]["code"]);

        console.error(error);
        this.main.components.feedback.presentInternalError(error, this.filename); //report["instructor"]["success"] = false;
        //report["instructor"]["error"] = error;
        //TODO: report["instructor"]["line_offset"] = lineOffset;
      } //TODO: after(error);

    }
  }]);

  return OnRunConfiguration;
}(_instructor__WEBPACK_IMPORTED_MODULE_2__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_sample.js":
/*!*********************************!*\
  !*** ./src/engine/on_sample.js ***!
  \*********************************/
/*! exports provided: OnSampleConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSampleConfiguration", function() { return OnSampleConfiguration; });
/* harmony import */ var _on_run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on_run */ "./src/engine/on_run.js");
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
}(_on_run__WEBPACK_IMPORTED_MODULE_0__["OnRunConfiguration"]);

/***/ }),

/***/ "./src/engine/run.js":
/*!***************************!*\
  !*** ./src/engine/run.js ***!
  \***************************/
/*! exports provided: RunConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunConfiguration", function() { return RunConfiguration; });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/engine/student.js");
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
      this.main.model.execution.feedback.message("Running...");
      this.filename = "answer";
      this.code = this.main.model.submission.code();

      _get(_getPrototypeOf(RunConfiguration.prototype), "use", this).call(this, engine);

      engine.reset();
      this.updateParse();
      this.main.components.server.saveFile("answer.py", this.code, null);
      this.main.model.execution.reports["verifier"] = {
        "success": Boolean(this.code.trim()),
        "code": this.code
      };
      Sk.retainGlobals = true;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      var _this = this;

      console.log("runSuccess");
      var report = this.main.model.execution.reports;
      var filename = this.filename;
      this.main.model.execution.student.results = module;
      this.main.model.execution.student.globals = Sk.globals;
      return new Promise(function (resolve, reject) {
        _this.step(module.$d, -1, 0, filename + ".py");

        _this.lastStep();

        report["student"] = {
          "success": true,
          "trace": _this.engine.executionBuffer.trace,
          "lines": _this.engine.executionBuffer.trace.map(function (x) {
            return x.line;
          }),
          "results": module,
          "output": _this.main.model.execution.output
        };
        resolve();
      });
    }
  }, {
    key: "failure",
    value: function failure(error) {
      var report = this.main.model.execution.reports;
      return new Promise(function (resolve, reject) {
        report["student"] = {
          "success": false,
          "error": error
        };
        console.error(error);
        resolve();
      });
    }
  }]);

  return RunConfiguration;
}(_student__WEBPACK_IMPORTED_MODULE_0__["StudentConfiguration"]);

/***/ }),

/***/ "./src/engine/sample.js":
/*!******************************!*\
  !*** ./src/engine/sample.js ***!
  \******************************/
/*! exports provided: SampleConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleConfiguration", function() { return SampleConfiguration; });
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student */ "./src/engine/student.js");
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


var SampleConfiguration =
/*#__PURE__*/
function (_StudentConfiguration) {
  _inherits(SampleConfiguration, _StudentConfiguration);

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
}(_student__WEBPACK_IMPORTED_MODULE_0__["StudentConfiguration"]);

/***/ }),

/***/ "./src/engine/student.js":
/*!*******************************!*\
  !*** ./src/engine/student.js ***!
  \*******************************/
/*! exports provided: StudentConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentConfiguration", function() { return StudentConfiguration; });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "./src/engine/configurations.js");
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

      Sk.execLimit = Sk.execLimitFunction(); // Stepper! Executed after every statement.

      Sk.afterSingleExecution = this.step.bind(this); // Unmute everything

      this.main.model.display.mutePrinter(false); // Function to call after each step
      // afterSingleExecution
      // Proxy requests

      Sk.requestsGet = function (filename) {
        return _this.openURL(filename, "url");
      };

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = "pass";
      return this;
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (this.isForbidden(filename)) {
        throw "File not accessible: '" + filename + "'";
      } else if (filename === "./answer.py") {
        return this.main.model.submission.code();
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }, {
    key: "input",
    value: function input(promptMessage) {
      return this.main.components.console.input(promptMessage);
    }
  }, {
    key: "isForbidden",
    value: function isForbidden(filename) {
      return filename.startsWith("src/lib/utility/") || filename.startsWith("src/lib/pedal/") || filename.startsWith("./_instructor/");
    }
    /**
     * "Steps" the execution of the code, meant to be used as a callback to the Skulpt
     * environment.
     *
     * @param {Object} variables - Hash that maps the names of variables (Strings) to their Skulpt representation.
     * @param {Number} lineNumber - The corresponding line number in the source code that is being executed.
     * @param {Number} columnNumber - The corresponding column number in the source code that is being executed.
     *                                Think of it as the "X" position to the lineNumber's "Y" position.
     * @param {String} filename - The name of the python file being executed (e.g., "__main__.py").
     */

  }, {
    key: "step",
    value: function step(variables, lineNumber, columnNumber, filename) {
      if (filename === "answer.py") {
        var currentStep = this.engine.executionBuffer.step;
        var globals = this.main.components.trace.parseGlobals(variables);
        this.engine.executionBuffer.trace.push({
          "step": currentStep,
          "filename": filename,
          //'block': highlightMap[lineNumber-1],
          "line": lineNumber,
          "column": columnNumber,
          "properties": globals.properties,
          "modules": globals.modules
        });
        this.engine.executionBuffer.step = currentStep + 1;
        this.engine.executionBuffer.line = lineNumber;
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
      execution.student.currentTraceData(this.engine.executionBuffer.trace);
      execution.student.currentStep(this.engine.executionBuffer.step);
      execution.student.lastStep(this.engine.executionBuffer.step);
      execution.student.currentLine(this.engine.executionBuffer.line);
      execution.student.lastLine(this.engine.executionBuffer.line);
      execution.student.currentTraceStep(this.engine.executionBuffer.step);
    }
  }, {
    key: "updateParse",

    /**
     * Ensure that the parse information is up-to-date
     */
    value: function updateParse() {
      var report = this.main.model.execution.reports; // Attempt a parse

      var ast;

      try {
        var parse = Sk.parse(this.filename, this.code);
        ast = Sk.astFromParse(parse.cst, this.filename, parse.flags);
      } catch (error) {
        // Report the error
        report["parser"] = {
          "success": false,
          "error": error
        };
        console.error(error);
        console.log(this.filename, code);
        return false;
      } // Successful parse


      report["parser"] = {
        "success": true,
        "ast": ast
      };
      return true;
    }
  }]);

  return StudentConfiguration;
}(_configurations__WEBPACK_IMPORTED_MODULE_0__["Configuration"]);

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

      var hideScore = this.main.model.assignment.hidden();

      if (hideScore && category.toLowerCase() === "complete") {
        category = "no errors";
        label = "No errors";
        message = "No errors reported";
      } // Remap to expected BlockPy labels


      if (category.toLowerCase() === "instructor" && label.toLowerCase() === "explain") {
        label = "Instructor Feedback";
      } // Don't present a lack of error as being incorrect


      if (category === "Instructor" && label === "No errors") {
        category = "no errors";
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
/*! exports provided: FILES_HTML, STARTING_FILES, BASIC_NEW_FILES, UNDELETABLE_FILES, UNRENAMABLE_FILES, makeModelFile, loadConcatenatedFile, createConcatenatedFile, observeConcatenatedFile, BlockPyFileSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ko) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_HTML", function() { return FILES_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING_FILES", function() { return STARTING_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_NEW_FILES", function() { return BASIC_NEW_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDELETABLE_FILES", function() { return UNDELETABLE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNRENAMABLE_FILES", function() { return UNRENAMABLE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeModelFile", function() { return makeModelFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConcatenatedFile", function() { return loadConcatenatedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConcatenatedFile", function() { return createConcatenatedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeConcatenatedFile", function() { return observeConcatenatedFile; });
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

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Assignment Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
/**
 * Filenames live in one of five possible namespaces:
 *  Instructor (!): Invisible to the student under all circumstances
 *  Start Space (^): Used to reset the student namespace
 *  Student Space (): Visible to the student when display.hideFiles is not true, able to be edited
 *  Hidden Space (?): Not directly visible to the student, but accessible programmatically
 *  Read-only Space (&): An instructor file type visible to the student, but is uneditable by them
 *  Secret Space ($): Not visible from the menu at all, some other mechanism controls it
 *  Generated Space (*): Visible to the student, but destroyed after Engine.Clear. Can shadow an actual file.
 *  Concatenated Space (#): Used when bundling a space for the server.
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
function loadConcatenatedFile(concatenatedFile, modelFileList) {
  if (concatenatedFile) {
    var files = JSON.parse(concatenatedFile);
    files = files.map(function (file) {
      return makeModelFile(file.filename, file.contents);
    });
    modelFileList(files);
  }
}
function createConcatenatedFile(modelFileList) {
  return JSON.stringify(modelFileList().map(function (file) {
    return {
      filename: file.filename(),
      contents: file.contents()
    };
  }));
}
function observeConcatenatedFile(modelFileList) {
  return ko.pureComputed(function () {
    var result = {};
    modelFileList().forEach(function (file) {
      return result[file.filename()] = file.contents();
    });
    return JSON.stringify(result);
  });
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
      [this.main.model.submission.extraFiles, this.main.model.assignment.extraStartingFiles, this.main.model.assignment.extraInstructorFiles].forEach(function (fileArray) {
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
        file.handle = this.main.model.submission.code;
      } else if (file.filename === "!on_run.py") {
        file.handle = this.main.model.assignment.onRun;
      } else if (file.filename === "!on_change.py") {
        file.handle = this.main.model.assignment.onChange;
      } else if (file.filename === "!on_eval.py") {
        file.handle = this.main.model.assignment.onEval;
      } else if (file.filename === "!instructions.md") {
        file.handle = this.main.model.assignment.instructions;
      } else if (file.filename === "^starting_code.py") {
        file.handle = this.main.model.assignment.startingCode;
      } else if (file.filename === "?mock_urls.blockpy") {
        this.observeInArray_(file, this.main.model.assignment.extraFiles);
      } else if (file.filename === "!tags.blockpy") {
        file.handle = this.main.model.assignment.tags;
      } else if (file.filename === "!assignment_settings.blockpy") {
        file.handle = this.main.model.assignment.settings;
      } else if (file.filename === "$settings.blockpy") {
        file.handle = this.main.model.display;
      } else if (file.filename.startsWith("^")) {
        this.observeInArray_(file, this.main.model.assignment.extraStartingFiles);
      } else if (file.filename.startsWith("!") || file.filename.startsWith("?")) {
        this.observeInArray_(file, this.main.model.assignment.extraInstructorFiles);
      } else {
        this.observeInArray_(file, this.main.model.submission.extraFiles);
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
//TODO: Move get link down to footer, remove vertical bar from quick-menu
var FOOTER_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-status\">\n    <div>\n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadAssignment')\">Load Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveAssignment')\">Save Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadFile')\">Load File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveFile')\">Save File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadDataset')\">Load Dataset</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('logEvent')\">Log Event</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('updateSubmission')\">Update Submission</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('onExecution')\">Execution</span>\n    </div>\n    <div\n        <span data-bind=\"text: ui.server.messages\"></span>\n    </div>\n    <div>\n        <span>User: <span data-bind=\"text: user.id\"></span> (<span data-bind=\"text: user.name\"></span>)</span>, \n        <span>Course: <span data-bind=\"text: user.courseId\"></span></span>,\n        <span>Group: <span data-bind=\"text: user.groupId\"></span></span>,\n        <span>Assignment: <span data-bind=\"text: assignment.id\"></span></span>,\n        <span>Assignment Version: <span data-bind=\"text: assignment.version\"></span></span>,\n        <span>Submission: <span data-bind=\"text: submission.id\"></span></span>, \n        <span>Submission Version: <span data-bind=\"text: submission.version\"></span></span>\n    </div>\n</div>\n";

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
  return "\n<div class='blockpy-content container-fluid'>\n\n    <!-- Dialog -->\n    ".concat(dialog_js__WEBPACK_IMPORTED_MODULE_1__["DIALOG_HTML"], "\n    \n    <!-- Hidden Capture Canvas -->\n    <canvas id='capture-canvas' class='d-none' role=\"presentation\" aria-hidden=\"true\"></canvas>\n    \n    <!-- Row 1: Header and Quick Menu -->\n    <div class='row'>\n         \n         <!-- Description -->\n         <div class='col-md-10 blockpy-panel blockpy-header'\n               role='heading' aria-label='Assignment Description'>\n         \n            <!-- Assignment Name -->\n            <span role='heading' aria-level='1'\n                  class=\"blockpy-name\">\n                <strong>BlockPy: </strong> \n                <span data-bind='text: assignment.name'></span>\n            </span>\n            \n            <!-- Reset Instructions Button -->\n            <div class=\"blockpy-instructions-reset\"\n                data-bind=\"visible: ui.instructions.isChanged\">\n                <a class=\"float-right\"\n                    data-bind=\"click: ui.instructions.reset\"\n                    href=\"\">\n                    Reset instructions</a>\n            </div>\n            \n            <!-- Instructions -->\n            <div class='blockpy-instructions'\n                 data-bind=\"html: ui.instructions.current\">\n            </div>\n        </div>\n        \n        <div class='col-md-2 blockpy-panel blockpy-quick-menu'\n             role='menubar' aria-label='Quick Menu' title=\"Quick Menu\">\n            <!-- Get Shareable Link -->\n            <button class=\"btn btn-outline-secondary btn-sm\">\n                Get shareable link</button>\n            <!-- View as instructor -->\n            <div class=\"form-check\"\n                 data-bind=\"visible: ui.role.isGrader\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"blockpy-as-instructor\"\n                    data-bind=\"checked: display.instructor\">\n                <label class=\"form-check-label\" for=\"blockpy-as-instructor\">\n                    View as instructor\n                </label>\n            </div>\n        </div>\n         \n    </div>\n    \n    <!-- Row 2: Console and Feedback -->\n    <div class='row'>\n    \n        <!-- Console -->\n        ").concat(console_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_HTML"], "\n         \n        <!-- Feedback -->\n        <!-- ko if: ui.secondRow.isFeedbackVisible -->\n        ").concat(feedback_js__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_HTML"], "\n        <!-- /ko -->\n        \n        <!-- Trace -->\n        <!-- ko if: ui.secondRow.isTraceVisible -->\n        ").concat(trace_js__WEBPACK_IMPORTED_MODULE_0__["TRACE_HTML"], "\n        <!-- /ko -->\n         \n    </div>\n    \n    <!-- Row 3: File Navigation -->\n    <!-- ko if: ui.files.visible -->\n    <div class='row'>\n        ").concat(files_js__WEBPACK_IMPORTED_MODULE_3__["FILES_HTML"], "\n    </div>\n    <!-- /ko -->\n    \n    <!-- View Row -->\n    <div class=\"row\">\n        ").concat(editors_js__WEBPACK_IMPORTED_MODULE_5__["EDITORS_HTML"], "\n    </div>\n\n    <!-- Footer Row -->    \n    <div class=\"row\">\n        ").concat(footer_js__WEBPACK_IMPORTED_MODULE_4__["FOOTER_HTML"], "\n    </div>\n    \n</div>\n    ");
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
 * @enum {string}
 */

var StatusState = {
  READY: "ready",
  ACTIVE: "active",
  RETRYING: "retrying",
  FAILED: "failed",
  OFFLINE: "offline"
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

  this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageWrapper"]("BLOCKPY"); // FaultResistantCache

  this.queue = {
    "logEvent": JSON.parse(this.storage.getDefault("logEvent", "[]")),
    "updateSubmission": JSON.parse(this.storage.getDefault("updateSubmission", "[]"))
  };
  this.MAX_QUEUE_SIZE = {
    "logEvent": 200,
    "updateSubmission": 50
  };
  this.TIMER_DELAY = 1000;
  this.FAIL_DELAY = 2000;
  this.timers = {};
  this.overlay = null;
  this.blockingAttempts = 0;
  this.cachedFilenames = [];
  this.createSubscriptions();
  this.checkCaches();
}
/**
 * Checks whether the IP address has changed, logging an event if that occurs.
 * @param response
 */

BlockPyServer.prototype.checkIP = function (response) {
  if (response.success) {
    if (this.storage.has("IP")) {
      var oldIP = this.storage.get("IP");

      if (oldIP !== response.ip) {
        var message = JSON.stringify({
          "old": oldIP,
          "new": response.ip
        });
        this.logEvent("X-IP.Change", undefined, undefined, message);
        this.storage.set("IP", response.ip);
      }
    } else {
      this.storage.set("IP", response.ip);
    }
  }
};
/**
 * Determines if there have been previous failures cached, and if so retries them.
 * TODO: update
 */


BlockPyServer.prototype.checkCaches = function () {
  var _this = this;

  if (this.storage.has("saveAssignment")) {
    var data = JSON.parse(this.storage.get("saveAssignment"));

    this._postLatestRetry(data, "assignment", "saveAssignment", this.TIMER_DELAY);
  }

  this.cachedFilenames.forEach(function (filename) {
    if (_this.storage.has("saveFile" + filename)) {
      var _data = JSON.parse(_this.storage.get("saveFile" + filename));

      _this._postLatestRetry(_data, filename, "saveFile", _this.TIMER_DELAY);
    }
  });
  var server = this;
  Object.keys(this.queue).forEach(function (endpoint) {
    (function pushAnyQueued(response) {
      if (response.success) {
        if (server.queue[endpoint].length) {
          var data = JSON.parse(server.queue[endpoint].pop());
          var url = server.urls[endpoint];

          server._postRetry(data, endpoint, 1000, pushAnyQueued);
        }
      }
    })({
      "success": true
    });
  });
};

BlockPyServer.prototype.createFileSubscription = function (model, filename) {
  var _this2 = this;

  model.subscribe(function (contents) {
    return _this2.main.model.display.autoSave() ? _this2.saveFile(filename, contents) : false;
  }, this);
  this.cachedFilenames.push(filename);
};
/**
 * TODO: fix
 */


BlockPyServer.prototype.createSubscriptions = function () {
  var model = this.main.model;
  this.createFileSubscription(model.submission.code, "answer.py");
  this.createFileSubscription(model.assignment.onRun, "!on_run.py");
  this.createFileSubscription(model.assignment.onEval, "!on_eval.py");
  this.createFileSubscription(model.assignment.onChange, "!on_change.py");
  this.createFileSubscription(model.assignment.instructions, "!instructions.md");
  this.createFileSubscription(model.assignment.startingCode, "^starting_code.py");
  this.createFileSubscription(model.ui.files.extraStudentFiles, "#extraStudentFiles.blockpy");
  this.createFileSubscription(model.ui.files.extraStartingFiles, "#extraStartingFiles.blockpy");
  this.createFileSubscription(model.ui.files.extraInstructorFiles, "#extraInstructorFiles.blockpy");
  /*
  model.assignment.name.subscribe(function(e) { server.saveAssignment();});
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
 * TODO: fix
 *
 */


BlockPyServer.prototype.finalizeSubscriptions = function () {//this.main.model.assignment.settings.datasets.subscribe(this.saveAssignment.bind(this));
};
/**
 * Creates the default payload for any communication with the server API
 * @returns {{assignment_id: *, course_id: *, group_id: *, user_id: *, timezone: *, version: *, timestamp: *}}
 */


BlockPyServer.prototype.createServerData = function () {
  var assignment = this.main.model.assignment;
  var user = this.main.model.user;
  var submission = this.main.model.submission;
  var now = new Date();
  var microseconds = now.getTime();
  return {
    "assignment_id": assignment.id(),
    "assignment_group_id": user.groupId(),
    "course_id": user.courseId(),
    "submission_id": submission.id(),
    "user_id": user.id(),
    "version": assignment.version(),
    "timestamp": microseconds,
    "timezone": now.getTimezoneOffset()
  };
};
/**
 * Updates the status and message for the relevant endpoint.
 * @param endpoint {string} one of the URL endpoints
 * @param status {StatusState}
 * @param message {string?}
 */


BlockPyServer.prototype.setStatus = function (endpoint, status, message) {
  this.main.model.status[endpoint](status);
  this.main.model.status[endpoint + "Message"](message || "");
};
/**
 * Renders an overlay on the screen that blocks operation until the system is ready.
 * The overlay gets progressively darker to indicate repeated failures.
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
/**
 * Undo a level of overlay; if this was the last level, removes it from the screen.
 */


BlockPyServer.prototype.hideOverlay = function () {
  this.blockingAttempts -= 1;

  if (this.blockingAttempts <= 0) {
    this.overlay.remove();
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

BlockPyServer.prototype._postRetry = function (data, endpoint, delay, callback) {
  var _this3 = this;

  // Trigger request
  var postRequest = function postRequest() {
    // Make a backup of the current post
    _this3._enqueueData(endpoint, data);

    $.post(_this3.urls[endpoint], data).done(function (response) {
      _this3._dequeueData(endpoint, data);

      if (response.success) {
        _this3.setStatus(endpoint, StatusState.READY);
      } else {
        console.error(response);

        _this3.setStatus(endpoint, StatusState.FAILED, response.message);
      }

      if (callback) {
        callback(response);
      }

      if (response.success) {
        _this3.checkIP(response.ip);
      }
    }) // If server request is the latest one, then let's try it again in a bit
    .fail(function (error, textStatus) {
      _this3.setStatus(endpoint, StatusState.RETRYING, textStatus.toString());

      _this3._postRetry(data, endpoint, delay + _this3.FAIL_DELAY, callback);
    });
  };

  if (delay === null) {
    postRequest();
  } else {
    setTimeout(postRequest, delay);
  }
};
/**
 * Make a AJAX request that, upon failure, will check to see if this was the
 * latest attempt for this `cache` marker. If so, it will attempt again until
 * successful; otherwise, it gives up the request.
 *
 * @param {Object} data - The AJAX-ready data to be posted
 * @param {String} filename - The unique name given to the relevant timer
 * @param {String} endpoint - The unique name given to the relevant cache entry
 * @param {Integer} delay - The current number of milliseconds to wait before
 trying the request again.
 */


BlockPyServer.prototype._postLatestRetry = function (data, filename, endpoint, delay) {
  var _this4 = this;

  var cache = endpoint + filename;

  var request = function request() {
    // Make a backup of the current post
    _this4.storage.set(cache, JSON.stringify(data));

    var time = _this4.storage.getTime(cache); // Send the request


    $.post(_this4.urls[endpoint], data).done(function (response) {
      if (response.success) {
        _this4.checkIP(response); // If server request is the latest one, clear it from the cache


        var cachedTime = _this4.storage.getTime(cache);

        if (time >= cachedTime) {
          _this4.storage.remove(cache);
        }

        _this4.setStatus(endpoint, StatusState.READY);
      } else {
        // This connected but failed, don't try again but let the user know why.
        _this4.setStatus(endpoint, StatusState.FAILED, response.message);

        if (response.success === false) {
          // If we're the latest one, clear it from the cache
          var _cachedTime = _this4.storage.getTime(cache);

          if (time >= _cachedTime) {
            _this4.storage.remove(cache);
          }
        }
      }
    }).fail(function (error, textStatus) {
      _this4.setStatus(endpoint, StatusState.RETRYING, textStatus.toString()); // If server request is the latest one, then let's try it again in a bit


      var cachedTime = _this4.storage.getTime(cache);

      if (time >= cachedTime) {
        _this4._postLatestRetry(data, filename, endpoint, delay + _this4.FAIL_DELAY);
      }
    });
  };

  clearTimeout(this.timers[cache]);

  if (delay === null) {
    request();
  } else {
    this.timers[cache] = setTimeout(request, delay);
  }
};

BlockPyServer.prototype._postBlocking = function (endpoint, data, attempts, success, failure) {
  var _this5 = this;

  this.showOverlay(attempts);
  $.post(this.urls[endpoint], data).done(function (response) {
    _this5.hideOverlay();

    _this5.setStatus(endpoint, StatusState.READY);

    success(response);

    _this5.checkIP(response);
  }).fail(function (e, textStatus, errorThrown) {
    if (attempts <= 0) {
      _this5.hideOverlay();

      _this5.setStatus(endpoint, StatusState.FAILED, textStatus.toString());

      if (failure) {
        failure(e, textStatus, errorThrown);
      }
    } else {
      setTimeout(function () {
        _this5.hideOverlay();

        _this5.setStatus(endpoint, StatusState.RETRYING, textStatus.toString());

        _this5._postBlocking(endpoint, data, attempts - 1, success, failure);
      }, _this5.FAIL_DELAY);
    }
  });
};

BlockPyServer.prototype.loadAssignment = function (assignment_id) {
  var _this6 = this;

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("loadAssignment")) {
    var data = this.createServerData();
    data["assignment_id"] = assignment_id;

    this._postBlocking("loadAssignment", data, 4, function (response) {
      if (response.success) {
        _this6.main.loadAssignmentData_(response);
      } else {
        _this6.setStatus("loadAssignment", StatusState.FAILED, response.message);
      }
    }, function (e, textStatus, errorThrown) {
      _this6.main.components.dialog.ERROR_LOADING_ASSIGNMNENT();

      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("loadAssignment", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.saveAssignment = function () {
  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("saveAssignment") && model.display.autoSave()) {
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

BlockPyServer.prototype.logEvent = function (event_type, category, label, message, file_path) {
  if (this.main.model.ui.server.isEndpointConnected("logEvent")) {
    var data = this.createServerData();
    data["event_type"] = event_type;
    data["category"] = category;
    data["label"] = label;
    data["message"] = message;
    data["file_path"] = file_path;
    this.setStatus("logEvent", StatusState.ACTIVE); // Trigger request

    this._postRetry(data, "logEvent", 0, function () {});
  } else {
    this.setStatus("logEvent", StatusState.OFFLINE);
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

BlockPyServer.prototype.saveFile = function (filename, contents, delay) {
  if (delay === undefined) {
    delay = this.TIMER_DELAY;
  }

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("saveFile")) {
    var data = this.createServerData();
    data["filename"] = filename;
    data["code"] = contents;
    this.setStatus("saveFile", StatusState.ACTIVE);

    this._postLatestRetry(data, filename, "saveFile", delay);
  } else {
    this.setStatus("saveFile", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.updateSubmission = function (score, correct, hiddenOverride, forceUpdate) {
  var _this7 = this;

  var callback = this.main.model.configuration.callbacks.success;

  if (this.main.model.ui.server.isEndpointConnected("updateSubmission")) {
    var data = this.createServerData();
    data["score"] = score;
    data["correct"] = correct;
    data["hidden_override"] = hiddenOverride;
    data["force_update"] = forceUpdate;
    this.main.components.pythonEditor.bm.blockEditor.getPngFromBlocks(function (pngData, img) {
      data["image"] = pngData;

      if (img.remove) {
        img.remove();
      }

      _this7._postRetry(data, "updateSubmission", 0, function (response) {
        if (response.success) {
          _this7.setStatus("updateSubmission", StatusState.READY);
        } else {
          _this7.setStatus("updateSubmission", StatusState.FAILED, response.message);
        }

        if (callback) {
          callback(data);
        }
      });
    });
  }
};
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
      var output = Sk.executionReports["student"]["output"]();
      output = output.map(function (item) {
        return item.toSkulpt();
      });
      return Sk.builtin.list(output);
    } else {
      return new Sk.builtin.list([]);
    }
  });
  /**
   * This function resets the output, particularly useful if the student
   * code is going to be rerun.
   */

  mod.reset_output = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("reset_output", arguments, 0, 0);

    if (Sk.executionReports["student"].success) {
      Sk.executionReports["student"].output.removeAll();
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
        return output.type === "plot";
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
      return Sk.ffi.remapToPy(outputs);
    } else {
      return Sk.ffi.remapToPy([]);
    }
  }); // Provides `student` as an object with all the data that the student declared.

  mod.StudentData = Sk.misceval.buildClass(mod, function ($gbl, $loc) {
    $loc.__init__ = new Sk.builtin.func(function (self) {
      //self.data = Sk.builtin.dict();
      var newDict = Sk.builtin.dict();
      Sk.abstr.sattr(self, Sk.builtin.str("data"), newDict, true);
      self.module = Sk.executionReports["student"].results;

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
   * Consume a set of variables traced from the execution and parse out any
   * global variables and modules.
   *
   * @param {Object} variables - a mapping of variable names to their Skupt value.
   */


  _createClass(Trace, [{
    key: "parseGlobals",
    value: function parseGlobals(variables) {
      var result = [];
      var modules = [];

      if (!this.main.model.display.traceExecution()) {
        for (var property in variables) {
          var value = variables[property];

          if (property !== "__name__" && property !== "__doc__" && property !== "__package__") {
            property = property.replace("_$rw$", "").replace("_$rn$", "");
            var parsed = void 0;

            try {
              parsed = Trace.parseValue(property, value);
            } catch (_unused) {
              parsed = {
                "name": property,
                "type": "Unknown",
                "value": value.toString()
              };
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
/*! exports provided: indent, slug, encodeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indent", function() { return indent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeHTML", function() { return encodeHTML; });
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
 * Turns spaces into underscores in the string, makes it lowercase.
 * @param {String} str - the string to be manipulated
 * @returns {string}
 */

function slug(str) {
  return str.replace(/\s/g, "_").toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3M/OTgyOSIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3M/N2M4NCIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hYnN0cmFjdF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9weXRob24uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvdGFncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90ZXh0LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9jb25maWd1cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ldmFsLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fY2hhbmdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fcnVuLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3N0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZpbGVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsIm11dGVQcmludGVyIiwicHl0aG9uTW9kZSIsIkRpc3BsYXlNb2RlcyIsIlNQTElUIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwib25fY2hhbmdlIiwib25fZXZhbCIsIm9uX3J1biIsInN0YXJ0aW5nX2NvZGUiLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJleHRyYV9zdGFydGluZ19maWxlcyIsImxvYWRTdWJtaXNzaW9uIiwic2V0U3RhdHVzIiwic2VsZiIsInVpIiwiaXNHcmFkZXIiLCJwdXJlQ29tcHV0ZWQiLCJpc0NoYW5nZWQiLCJjdXJyZW50IiwidXRpbGl0aWVzIiwibWFya2Rvd24iLCJyZXNldCIsInNlY29uZFJvdyIsImlzRmVlZGJhY2tWaXNpYmxlIiwiaXNUcmFjZVZpc2libGUiLCJUUkFDRSIsImlzQ29uc29sZVNob3dWaXNpYmxlIiwic3dpdGNoTGFiZWwiLCJhZHZhbmNlU3RhdGUiLCJjdXJyZW50UGFuZWwiLCJOT05FIiwic2l6ZSIsImJhZGdlIiwidG9Mb3dlckNhc2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1pbiIsImZvcndhcmQiLCJuZXh0IiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwiZmlsZVN5c3RlbSIsIm5ld0ZpbGUiLCJkZWxldGVGaWxlIiwiZXh0cmFTdHVkZW50RmlsZXMiLCJvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSIsImVkaXRvcnMiLCJnZXRFZGl0b3IiLCJ2aWV3IiwiaGlkZUVkaXRvcnMiLCJtYXAiLCJzdWJzdHIiLCJtYWtlTW9kZWxGaWxlIiwiY29udGVudHMiLCJjYW5TYXZlIiwiY2FuRGVsZXRlIiwiVU5ERUxFVEFCTEVfRklMRVMiLCJpbmRleE9mIiwiY2FuUmVuYW1lIiwiVU5SRU5BTUFCTEVfRklMRVMiLCJ1cGxvYWQiLCJ1cGxvYWRGaWxlIiwiYmluZCIsImRvd25sb2FkIiwiZG93bmxvYWRGaWxlIiwiaW1wb3J0RGF0YXNldCIsImNvcmdpcyIsIm9wZW5EaWFsb2ciLCJweXRob24iLCJmdWxsc2NyZWVuIiwiY29kZU1pcnJvciIsInB5dGhvbkVkaXRvciIsImJtIiwidGV4dEVkaXRvciIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsImV4ZWN1dGUiLCJydW4iLCJlbmdpbmUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwibWVzc2FnZXMiLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsImRpYWxvZyIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiVHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlFbmdpbmUiLCJCbG9ja1B5RmlsZVN5c3RlbSIsIkVkaXRvcnMiLCJieU5hbWUiLCJCbG9ja1B5U2VydmVyIiwiQmxvY2tQeUNvcmdpcyIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJhdHRyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvSnMiLCJDb25zb2xlTGluZVBsb3QiLCJhZGRDbGFzcyIsIndoZXJlIiwiYXBwZW5kIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ2YWwiLCJwcm9wIiwiY2xpY2siLCJrZXl1cCIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJ0YWciLCJwcmludGVyVGFnIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiY2xlYXIiLCJyZW1vdmVBbGwiLCJsaW5lQnVmZmVyIiwicGxvdEJ1ZmZlciIsImVtcHR5IiwiVHVydGxlR3JhcGhpY3MiLCJ0YXJnZXQiLCJuZXdUdXJ0bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZ2UiLCJlYWNoIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsImZsdXNoIiwiY2hhckF0Iiwic3BsaXRMaW5lcyIsInNwbGl0IiwiYWRkQ29udGVudCIsImkiLCJwdXNoIiwicmVuZGVyIiwicGxvdHMiLCJpbnB1dEJ1ZmZlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwibG9hZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsInJlbW92ZSIsImdldEpTT04iLCJibG9ja3B5IiwiZG9jdW1lbnRhdGlvbiIsImJvZHkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInRpdGxlTmFtZSIsImFwcGVuZFRvIiwiRElBTE9HX0hUTUwiLCJ0aXRsZVRhZyIsImJvZHlUYWciLCJ0aXRsZSIsIm9uY2xvc2UiLCJtb2RhbCIsImRyYWdnYWJsZSIsIm9uIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsImNvbmZpcm0iLCJTQ1JFRU5TSE9UX0JMT0NLUyIsImV2ZW50IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlTmFtZSIsInJlYWRBc1RleHQiLCJ2YWx1ZSIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCIsIkFTU0lHTk1FTlRfU0VUVElOR1MiLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwic2V0dGluZyIsImNsaWVudE5hbWUiLCJzZXJ2ZXJOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiZGlydHkiLCJ1cGRhdGVFZGl0b3IiLCJjdXJyZW50U3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwiY29kZW1pcnJvciIsInNldFRpbWVvdXQiLCJyZWZyZXNoIiwibmV3Q29udGVudHMiLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJCTE9DSyIsIm1ha2VUYWIiLCJpY29uIiwibW9kZSIsIlBZVEhPTl9FRElUT1JfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImpvaW4iLCJjZWxscyIsImZpbHRlciIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsIm1ha2VTdWJzY3JpcHRpb25zIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwiY3VycmVudEJNTGlzdGVuZXIiLCJhZGRDaGFuZ2VMaXN0ZW5lciIsInNldENvZGUiLCJnZXRDb2RlIiwicmVtb3ZlQ2hhbmdlTGlzdGVuZXIiLCJzZXRNb2RlIiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidXNlIiwidGhlbiIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiZXhlY3V0aW9uRW5kXyIsIkFDVElWRSIsIm1pc2NldmFsIiwiYXN5bmNUb1Byb21pc2UiLCJpbXBvcnRNYWluV2l0aEJvZHkiLCJGSUxFTkFNRSIsInByb2dyYW1zIiwidHJpbSIsInNhdmVDb2RlIiwidmVyaWZ5Q29kZSIsInVwZGF0ZVBhcnNlIiwicnVuSW5zdHJ1Y3RvckNvZGUiLCJtb2R1bGUiLCJleGVjdXRpb25SZXBvcnRzIiwicHJlc2VudEZlZWRiYWNrIiwiJGQiLCJDb25maWd1cmF0aW9uIiwicXVldWVkSW5wdXQiLCJfX2Z1dHVyZV9fIiwicHl0aG9uMyIsInJlYWQiLCJpbXBvcnRGaWxlIiwiZmlsZW9wZW4iLCJvcGVuRmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5Ccm93c2VyIiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwid2FybiIsIkVycm9yIiwicG9wIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwidG9TdHJpbmciLCJJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwiY2xlYXJUaW1lb3V0IiwiTkVXX0xJTkVfUkVHRVgiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwidGlmYUFuYWx5c2lzIiwic3R1ZGVudENvZGVTYWZlIiwibGluZU9mZnNldCIsIlNVQ0NFU1MiLCJTQ09SRSIsIm1heCIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsIkZBSUxFRCIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsInJlamVjdCIsIngiLCJTYW1wbGVDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0RnVuY3Rpb24iLCJkaXNhYmxlVGltZW91dCIsIkluZmluaXR5IiwicmVxdWVzdHNHZXQiLCJvcGVuVVJMIiwiaXNGb3JiaWRkZW4iLCJ2YXJpYWJsZXMiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicGFyc2VHbG9iYWxzIiwicHJvcGVydGllcyIsIm1vZHVsZXMiLCJhc3QiLCJhc3RGcm9tUGFyc2UiLCJjc3QiLCJmbGFncyIsIkZFRURCQUNLX0hUTUwiLCJmZWVkYmFja01vZGVsIiwib2Zmc2V0IiwidG9wIiwidG9wX29mX2VsZW1lbnQiLCJib3R0b21fb2ZfZWxlbWVudCIsIm91dGVySGVpZ2h0IiwiYm90dG9tX29mX3NjcmVlbiIsInRvcF9vZl9zY3JlZW4iLCJleGVjdXRpb25SZXN1bHRzIiwiTUVTU0FHRSIsIkNBVEVHT1JZIiwiTEFCRUwiLCJEQVRBIiwiaGlkZVNjb3JlIiwiZmluZEZpcnN0RXJyb3JMaW5lIiwic3R1ZGVudFJlcG9ydCIsImxpbmVzIiwidXBkYXRlRmVlZGJhY2siLCJub3RpZnlGZWVkYmFja1VwZGF0ZSIsInNjcm9sbEludG9WaWV3IiwiZmFkZU91dCIsImZpbGVuYW1lRXhlY3V0ZWQiLCJhcmdzIiwidHJhY2ViYWNrIiwidHJhY2ViYWNrRm9ybWF0dGVkIiwiZnJhbWUiLCJsaW5lbm8iLCJsYXN0X3RyYWNlYmFjayIsInNsaWNlIiwibGluZV9vZmZzZXQiLCJmZWVkYmFja0RhdGEiLCJwb3NpdGlvbiIsImZyaWVuZGx5TmFtZSIsImhpZGVJZkVtcHR5IiwiRklMRVNfSFRNTCIsIlNUQVJUSU5HX0ZJTEVTIiwiQkFTSUNfTkVXX0ZJTEVTIiwiREVMRVRBQkxFX1NJTVBMRV9GSUxFUyIsIkJsb2NrUHlGaWxlIiwib3duZXIiLCJjb25jYXRlbmF0ZWRGaWxlIiwibW9kZWxGaWxlTGlzdCIsImNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUiLCJmaWxlc18iLCJtb3VudEZpbGVzIiwid2F0Y2hNb2RlbCIsIndhdGNoZXNfIiwiZmlsZXN5c3RlbSIsImZpbGVBcnJheSIsImNoYW5nZXMiLCJjaGFuZ2UiLCJtb2RlbEZpbGUiLCJub3RpZnlXYXRjaGVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwib2JzZXJ2ZUluQXJyYXlfIiwiYXJyYXkiLCJjb2RlQnVuZGxlIiwiZXhpc3RpbmdGaWxlIiwib2JzZXJ2ZUZpbGVfIiwiZm91bmQiLCJGT09URVJfSFRNTCIsImhpZ2hsaWdodFRpbWVvdXQiLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsIlRSQUNFX0hUTUwiLCJSRVRSWUlORyIsIk9GRkxJTkUiLCJzdG9yYWdlIiwicXVldWUiLCJnZXREZWZhdWx0IiwiTUFYX1FVRVVFX1NJWkUiLCJUSU1FUl9ERUxBWSIsIkZBSUxfREVMQVkiLCJ0aW1lcnMiLCJvdmVybGF5IiwiYmxvY2tpbmdBdHRlbXB0cyIsImNhY2hlZEZpbGVuYW1lcyIsImNyZWF0ZVN1YnNjcmlwdGlvbnMiLCJjaGVja0NhY2hlcyIsImNoZWNrSVAiLCJyZXNwb25zZSIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm5vdyIsIkRhdGUiLCJtaWNyb3NlY29uZHMiLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJzaG93T3ZlcmxheSIsImF0dGVtcHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3NzIiwiaGlkZU92ZXJsYXkiLCJfZW5xdWV1ZURhdGEiLCJjYWNoZSIsIl9kZXF1ZXVlRGF0YSIsInNwbGljZSIsImRlbGF5IiwicG9zdFJlcXVlc3QiLCJwb3N0IiwidGV4dFN0YXR1cyIsInJlcXVlc3QiLCJ0aW1lIiwiY2FjaGVkVGltZSIsIl9wb3N0QmxvY2tpbmciLCJhdHRlbXB0cyIsImVycm9yVGhyb3duIiwibG9hZEFzc2lnbm1lbnREYXRhXyIsImludHJvZHVjdGlvbiIsInBhcnNvbnMiLCJpbml0aWFsX3ZpZXciLCJpbXBvcnRhYmxlIiwic2VjcmV0IiwiZGlzYWJsZV9hbGdvcml0aG1fZXJyb3JzIiwiZGlzYWJsZV90aW1lb3V0Iiwic2F2ZV9hc3NpZ25tZW50IiwiZ2V0SGlzdG9yeSIsImdldF9oaXN0b3J5IiwiZXZlbnRfdHlwZSIsImZpbGVfcGF0aCIsImVycm9yQ2FsbGJhY2siLCJsb2FkX2ZpbGUiLCJoaWRkZW5PdmVycmlkZSIsImZvcmNlVXBkYXRlIiwiZ2V0UG5nRnJvbUJsb2NrcyIsInBuZ0RhdGEiLCJpbWciLCJtb2QiLCJub25lIiwiYnVpbHRpbiIsIm5vbmUkIiwicHJpb3IiLCJ0aW1laXQiLCJmdW5jIiwicHlDaGVja0FyZ3MiLCJkaWZmZXJlbmNlIiwiZGVidWciLCJnZXRfb3V0cHV0IiwiaXRlbSIsInRvU2t1bHB0IiwibGlzdCIsInJlc2V0X291dHB1dCIsInF1ZXVlX2lucHV0IiwicHlDaGVja1R5cGUiLCJjaGVja1N0cmluZyIsImdldF9wcm9ncmFtIiwicmVtYXBUb1B5IiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwidiIsInkiLCJTdHVkZW50RGF0YSIsImJ1aWxkQ2xhc3MiLCIkZ2JsIiwiJGxvYyIsIl9faW5pdF9fIiwibmV3RGljdCIsImRpY3QiLCJhYnN0ciIsInNhdHRyIiwic3RyIiwiaGFzT3duUHJvcGVydHkiLCJtcCRhc3Nfc3Vic2NyaXB0IiwiZ2V0X25hbWVzX2J5X3R5cGUiLCJleGNsdWRlX2J1aWx0aW5zIiwiY2hlY2tCb29sIiwicHJvcGVydHkiLCJnZXRfdmFsdWVzX2J5X3R5cGUiLCJjYWxsc2ltT3JTdXNwZW5kIiwiZ2V0X3N0dWRlbnRfZGF0YSIsIm5hbWVzcGFjZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bmNfY29kZSIsImNvX3Zhcm5hbWVzIiwic3EkbGVuZ3RoIiwiJHIiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiU3RyaW5nIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsIm5vZGUiLCJjbG9uZSIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlVmFsdWUiLCJjaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInJhbmRvbUludGVnZXIiLCJmbG9vciIsInJhbmRvbSIsIkJsb2NrbHkiLCJXb3Jrc3BhY2VTdmciLCJzaHVmZmxlIiwibWV0cmljcyIsImdldE1ldHJpY3MiLCJ2aWV3V2lkdGgiLCJ2aWV3SGVpZ2h0IiwiYmxvY2tzIiwiZ2V0VG9wQmxvY2tzIiwibWF4aW1hbF9pbmNyZWFzZSIsImdldFJlbGF0aXZlVG9TdXJmYWNlWFkiLCJtb3ZlQnkiLCJtb3ZlRWxlbWVudHMiLCJtb3ZlQ2hlY2siLCJpc1NrQnVpbHRpbiIsIm9iaiIsImxuZyIsImlzQXN0Tm9kZSIsIm1peGVkUmVtYXBUb1B5IiwiayIsImt2cyIsImFyciIsImNhbGwiLCJzdWJ2YWwiLCJhc3NrJCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7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ZmlsZSI6ImJsb2NrcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJsb2NrcHlcIiwgW1wialF1ZXJ5XCIsIFwia29cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxvY2tweVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wia29cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Jsb2NrcHkuanNcIik7XG4iLCJpbXBvcnQgXCIuL2Nzcy9ibG9ja3B5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCJzdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc0VudW19IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiZWRpdG9yL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwic2VydmVyLmpzXCI7XHJcbmltcG9ydCB7bWFrZUludGVyZmFjZSwgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucywgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfSBmcm9tIFwiaW50ZXJmYWNlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc30gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIEJsb2NrUHlGaWxlU3lzdGVtLFxyXG4gICAgbG9hZENvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBtYWtlTW9kZWxGaWxlLFxyXG4gICAgb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBVTkRFTEVUQUJMRV9GSUxFUyxcclxuICAgIFVOUkVOQU1BQkxFX0ZJTEVTXHJcbn0gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7VHJhY2V9IGZyb20gXCIuL3RyYWNlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvbnNvbGV9IGZyb20gXCIuL2NvbnNvbGVcIjtcclxuaW1wb3J0IHtCbG9ja1B5RmVlZGJhY2t9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlEaWFsb2d9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbH0gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29yZ2lzLCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU30gZnJvbSBcIi4vY29yZ2lzXCI7XHJcblxyXG5leHBvcnQge19JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfTtcclxuXHJcbi8qKlxyXG4gKiBNYWpvciBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgYSBCbG9ja1B5IGluc3RhbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIC0gVXNlciBsZXZlbCBzZXR0aW5ncyAoZS5nLiwgd2hhdCBlZGl0b3IgbW9kZSwgd2hldGhlciB0byBtdXRlIHNlbWFudGljIGVycm9ycywgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NpZ25tZW50IC0gQXNzaWdubWVudCBsZXZlbCBzZXR0aW5ncyAoZGF0YSBhYm91dCB0aGUgbG9hZGVkIGFzc2lnbm1lbnQsIHVzZXIsIHN1Ym1pc3Npb24sIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VibWlzc2lvbiAtIEluY2x1ZGVzIHRoZSBzb3VyY2UgY29kZSBvZiBhbnkgcHJvZ3JhbXMgdG8gYmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbChjb25maWd1cmF0aW9uKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzaWdubWVudChjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIEJsb2NrUHkgb2JqZWN0IGJ5IGluaXRpYWxpemluZyBpdHMgaW50ZXJmYWNlLFxyXG4gICAgICogbW9kZWwsIGFuZCBjb21wb25lbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VXRpbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWxNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy50dXJuT25IYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgZGVmYXVsdCB2YWx1ZSBvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB1cCBhIHZhbHVlIGZvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSAtIGlmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGFueXdoZXJlLCB1c2UgdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBnZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9ba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxTZXR0aW5nc18uaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTZXR0aW5nc18uZ2V0KGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbW9kZWwgdG8gaXRzIGRlZmF1bHRzLlxyXG4gICAgICpcclxuICAgICAqIENhdGVnb3JpZXM6XHJcbiAgICAgKiAgICogdXNlcjogdmFsdWVzIGZvciB0aGUgY3VycmVudCB1c2VyIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGFzc2lnbm1lbnQ6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgYXNzaWdubWVudCAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBzdWJtaXNzaW9uOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24gKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogZGlzcGxheTogZmxhZ3MgcmVsYXRlZCB0byBjdXJyZW50IHZpc2liaWxpdHkgKHN0b3JlZCB0byBsb2NhbFNldHRpbmdzKVxyXG4gICAgICogICAqIHN0YXR1czogbWVzc2FnZXMgcmVsYXRlZCB0byBjdXJyZW50IHN0YXR1cyAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBleGVjdXRpb246IHZhbHVlcyByZWxhdGVkIHRvIGxhc3QgcnVuIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGNvbmZpZ3VyYXRpb246IGNvbnN0YW50IHZhbHVlcyByZWxhdGVkIHRvIHNldHVwIChub3Qgc3RvcmVkKVxyXG4gICAgICovXHJcbiAgICBpbml0TW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMubG9jYWxTZXR0aW5nc18gPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcImxvY2FsU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5pZFwiXSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLm5hbWVcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHlvdSBhcmUgYW4gT3duZXIgKGNhbiBtb2RpZnkgdGhlIGFzc2lnbm1lbnQpLCBHcmFkZXIgKGNhbiB2aWV3XHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgYXNzaWdubWVudHMnIGluZm9ybWF0aW9uKSBvciBTdHVkZW50IChjYW4gbm90IHNlZSBhbnkgaW5zdHJ1Y3RvciBzdHVmZikuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcm9sZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJ1c2VyLnJvbGVcIiwgXCJvd25lclwiKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2FybmluZyBtZXNzYWdlIGlmIG1hemVcclxuICAgICAgICAgICAgICAgIHR5cGU6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uUnVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX3J1blwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2NoYW5nZVwiXSksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZElkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkVmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG93bmVySWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlU3VibWlzc2lvbnM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICByZXZpZXdlZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5yZXZpZXdlZFwiXSksXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaGlkZGVuXCJdKSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJzdWJtaXNzaW9uLmNvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBleHRyYUZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzY29yZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudElkIGluZmVycmVkIGZyb20gYXNzaWdubWVudC5pZFxyXG4gICAgICAgICAgICAgICAgLy8gY291cnNlSWQgaW5mZXJyZWQgZnJvbSB1c2VyLmNvdXJzZUlkXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VySWQgaW5mZXJyZWQgZnJvbSB1c2VyLmlkXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50VmVyc2lvbiBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQudmVyc2lvblxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoXCJTdGFydGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGluZ1N0YXR1czoga28ub2JzZXJ2YWJsZShcIk5vdFJlYWR5XCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnRseSB2aXNpYmxlIEZpbGUsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgaW5zdHJ1Y3RvciBzZXR0aW5ncyBhbmQgZmlsZXNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkuaW5zdHJ1Y3RvclwiLCBcInRydWVcIik9PT1cInRydWVcIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgdGhlIHByaW50ZXIgZnJvbSBzaG93aW5nIHRoaW5nc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBtdXRlUHJpbnRlcjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIChQeXRob24gVmlld3MpIFRoZSBjdXJyZW50IGVkaXRvciBtb2RlLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0Rpc3BsYXlNb2Rlc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHl0aG9uTW9kZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5LnB5dGhvbi5tb2RlXCIsIERpc3BsYXlNb2Rlcy5TUExJVCkpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiBhYm91dCBpbi1wcm9ncmVzcyBleGVjdXRpb25zXHJcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgT3V0cHV0IG9iamVjdHNcclxuICAgICAgICAgICAgICAgIG91dHB1dDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYSBzdHVkZW50IHJ1blxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0cjogdGhlIGZpbGVuYW1lIHRoYXQgd2FzIGxhc3QgZXhlY3V0ZWQgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdExpbmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgb2Ygc2ltcGxlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VEYXRhOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VTdGVwOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFjdHVhbCBleGVjdXRpb24gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gZmVlZGJhY2sgZnJvbSB0aGUgaW5zdHJ1Y3RvciBydW5cclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyIChtYXJrZG93bilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiUmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc0Vycm9yOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzVW5jb3ZlcmVkOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IGV4ZWN1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEZ1bmN0aW9ucyB0byBmaXJlIHdoZW4gY2VydGFpbiBldmVudHMgb2NjdXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hlbiB0aGUgc3R1ZGVudCBnZXRzIGEgc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImNhbGxiYWNrLnN1Y2Nlc3NcIl0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VydmVyIGlzIGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25uZWN0ZWQ6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwic2VydmVyLmNvbm5lY3RlZFwiLCB0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGJsb2NrbHlQYXRoOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImJsb2NrbHkucGF0aFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudFBvaW50OiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImF0dGFjaG1lbnQucG9pbnRcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBKUXVlcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBNYXBzIGNvZGVzICgnbG9nX2V2ZW50JywgJ3NhdmVfY29kZScpIHRvIFVSTHNcclxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1widXJsc1wiXSB8fCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgaW5pdEludGVyZmFjZSgpIHtcclxuICAgICAgICBsZXQgY29uc3RhbnRzID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgIGxldCBndWkgPSBtYWtlSW50ZXJmYWNlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0YW50cy5jb250YWluZXIgPSAkKGNvbnN0YW50cy5hdHRhY2htZW50UG9pbnQpLmh0bWwoJChndWkpKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRhZ3ModGFncykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHRhZ3NcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2FtcGxlU3VibWlzc2lvbnMoc2FtcGxlcykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHNhbXBsZXNcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3VibWlzc2lvbihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKCFzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICAvLyBUT0RPOiBSZXNldCBVSSBmb3IgbmV3IGFzc2lnbm1lbnRcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCh3YXNTZXJ2ZXJDb25uZWN0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kZWxNZXRob2RzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIG1vZGVsLnVpID0ge1xyXG4gICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0dyYWRlcjoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJvd25lclwiIHx8IG1vZGVsLnVzZXIucm9sZSgpID09PSBcImdyYWRlclwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWNvbmRSb3c6IHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZGJhY2tWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDS1xyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzVHJhY2VWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29uc29sZVNob3dWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUoKSB8fCBtb2RlbC51aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaExhYmVsOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3IFRyYWNlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgYWR2YW5jZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQYW5lbCA9IG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25zb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTJcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTZcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm8tZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJydW50aW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJSdW50aW1lIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzeW50YXhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlN5bnRheCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJFZGl0b3IgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImludGVybmFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnRlcm5hbCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VtYW50aWNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuYWx5emVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGdvcml0aG0gRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVmb3JlIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCA9PT0gbGFzdFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluaXNoZWQgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXS5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5taW4oMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLmxhc3RTdGVwKCksIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAobmV4dCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2VEYXRhW3N0ZXBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxlczoge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkgfHwgIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoYXNDb250ZW50czogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5zd2VyLnB5XCI6IHJldHVybiBtb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFpbnN0cnVjdGlvbnMubWRcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9tb2NrX3VybHMuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcygpLnNvbWUoZmlsZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZSgpID09PSBcIj9tb2NrX3VybHMuYmxvY2tweVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiF0YWdzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQudGFncygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5zYW1wbGVTdWJtaXNzaW9ucygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9tb2NrX3VybHMuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP3RhZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP3NldHRpbmdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUocGF0aCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gZml4IGV4dHJhZmlsZXMgZm9yIGluc3RydWN0b3IgYW5kIHN0dWRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRvcnM6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lZGl0b3JzLmdldEVkaXRvcihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdmlldzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRWRpdG9ycygpID8gXCJOb25lXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA/IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpIDogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5jb2RlKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGZpbGVuYW1lLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGU6IHtcclxuICAgICAgICAgICAgICAgIHJ1bjogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogKGVuZHBvaW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItc3RhdHVzLVwiICsgbW9kZWwuc3RhdHVzW2VuZHBvaW50XSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNFbmRwb2ludENvbm5lY3RlZDogKGVuZHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJsc1tlbmRwb2ludF0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEhpc3RvcnlNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZERhdGFzZXRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9nRXZlbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uSGFja3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBUcmFjZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvbnNvbGUgPSBuZXcgQmxvY2tQeUNvbnNvbGUobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1jb25zb2xlXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmVuZ2luZSA9IG5ldyBCbG9ja1B5RW5naW5lKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmlsZVN5c3RlbSA9IG5ldyBCbG9ja1B5RmlsZVN5c3RlbShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmVkaXRvcnMgPSBuZXcgRWRpdG9ycyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWVkaXRvclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5weXRob25FZGl0b3IgPSB0aGlzLmNvbXBvbmVudHMuZWRpdG9ycy5ieU5hbWUoXCJweXRob25cIik7XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXJ2ZXIgPSBuZXcgQmxvY2tQeVNlcnZlcihtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvcmdpcyA9IG5ldyBCbG9ja1B5Q29yZ2lzKG1haW4pO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgVE9ET1xyXG4gICAgICAgIGNvbXBvbmVudHMudG9vbGJhciA9IG5ldyBCbG9ja1B5VG9vbGJhcihtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LXRvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuaGlzdG9yeSA9IG5ldyBCbG9ja1B5SGlzdG9yeShtYWluKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIElOUFVUOiBcImlucHV0XCIsXG4gICAgVEVTVF9DQVNFOiBcInRlc3RfY2FzZVwiXG59O1xuXG5jbGFzcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdHlwZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBTay5jdXJyRmlsZW5hbWUsXG4gICAgICAgICAgICBzdGVwOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwLFxuICAgICAgICAgICAgbGluZTogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0bWwgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiAgXCJibG9ja3B5LXByaW50ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgIFwiZGF0YS1zdGVwXCI6IHRoaXMub3JpZ2luLnN0ZXAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RlcCBcIiArIHRoaXMub3JpZ2luLnN0ZXAgKyBcIiwgTGluZSBcIiArIHRoaXMub3JpZ2luLmxpbmVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaHRtbC5hdHRyKFwidGl0bGVcIikpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhbWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRvU2t1bHB0KCkge1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9Kcyh0aGlzLmNvbnRlbnQpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVQbG90IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlBMT1QsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtcGxvdC1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUZXh0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudCArIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8c2FtcD48L3NhbXA+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW5wdXQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgcHJvbXB0TWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU5QVVQsIHByb21wdE1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSW5wdXQgYm94IGZvciByZWNlaXZpbmcgaW5wdXQoKSBmcm9tIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIC8vIFBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbmluZ1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBJbnB1dCBmb3JtXG4gICAgICAgICAgICBsZXQgaW5wdXRGb3JtID0gJChcIjxpbnB1dCB0eXBlPSd0ZXh0JyAvPlwiKTtcbiAgICAgICAgICAgIC8vIEVudGVyIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0QnRuID0gJChcIjxidXR0b24+PC9idXR0b24+XCIsIHtcImh0bWxcIjogXCJFbnRlclwifSk7XG4gICAgICAgICAgICAvLyBHcm91cCBmb3JtIGFuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEdyb3VwID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcImNsYXNzXCI6IFwiYmxvY2tweS1jb25zb2xlLWlucHV0XCJ9KTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0Rm9ybSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEJ0bik7XG4gICAgICAgICAgICAvLyBQcm9tcHQgYm94LCBuZXcgbGluZSwgaW5wdXQgZ3JvdXBcbiAgICAgICAgICAgIGxldCBpbnB1dEJveCA9ICQoXCI8ZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0TXNnID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgIHtcImh0bWxcIjogZW5jb2RlZFRleHR9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoaW5wdXRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKCQoXCI8YnI+XCIpKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5wdXRHcm91cCk7XG4gICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoaW5wdXRCb3gpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvLyBNYWtlIGl0IGludGVyYWN0aXZlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW50ZXJhY3RpdmUoaW5wdXRGb3JtLCBpbnB1dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuICAgIG1ha2VJbnRlcmFjdGl2ZShpbnB1dCwgYnV0dG9uKSB7XG4gICAgICAgIGxldCByZXNvbHZlT25DbGljaztcbiAgICAgICAgbGV0IHN1Ym1pdHRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2sgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayhpbnB1dC52YWwoKSk7XG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnV0dG9uLmNsaWNrKHN1Ym1pdEZvcm0pO1xuICAgICAgICBpbnB1dC5rZXl1cCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gc3VibWl0dGVkUHJvbWlzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5Q29uc29sZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBjb25zb2xlLCB3aXRoIGZlYXR1cmVzIGZvciB0aGluZ3MgbGlrZSBwcmludGluZywgcGxvdHRpbmcsIGV2YWxpbmcsIGlucHV0aW5nLlxuICAgICAqIFRoZSBcInByaW50ZXJcIiBpcyB0aGUgcmVnaW9uIHdoZXJlIHdlIHB1dCB0aGluZ3MsIGFzIG9wcG9zZWQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3aG9sZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZyA9IHRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKTtcblxuICAgICAgICB0aGlzLkRFRkFVTFRfV0lEVEggPSA1MDA7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUlHSFQgPSA1MDA7XG5cbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogSWYgdGhlIHVzZXIgbW9kaWZpZXMgYSBmaWxlLCB0aGVuIG1ha2UgdGhlIGNvbnNvbGUgbG9vayBmYWRlZCBhIGxpdHRsZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyLCBpbmNsdWRpbmcgcmVtb3ZpbmcgYW55IHRleHQgaW4gaXQgYW5kXG4gICAgICogZml4aW5nIGl0cyBzaXplLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm91dHB1dC5yZW1vdmVBbGwoKTtcblxuICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKS5lbXB0eSgpO1xuICAgICAgICBTay5UdXJ0bGVHcmFwaGljcyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5uZXdUdXJ0bGUoKSxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIFRPRE86IHR1cnRsZXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgbmV3VHVydGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMuREVGQVVMVF9XSURUSCwgdGhpcy5wcmludGVyVGFnLndpZHRoKCktNDApO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMuREVGQVVMVF9IRUlHSFQsIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSs0MCk7XG4gICAgfVxuXG4gICAgaXNNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBlYWNoIHByaW50ZWQgZWxlbWVudCBpbiB0aGUgcHJpbnRlciBhbmQgbWFrZXMgaXQgaGlkZGVuXG4gICAgICogb3IgdmlzaWJsZSwgZGVwZW5kaW5nIG9uIHdoYXQgc3RlcCB3ZSdyZSBvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIGN1cnJlbnQgc3RlcCBvZiB0aGUgZXhlY3V0ZWQgcHJvZ3JhbSB0aGF0IHdlJ3JlIG9uOyBlYWNoIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgbXVzdCBiZSBtYXJrZWQgd2l0aCBhIFwiZGF0YS1zdGVwXCIgcHJvcGVydHkgdG8gcmVzb2x2ZSB0aGlzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlIC0gRGVwcmVjYXRlZCwgbm90IHN1cmUgd2hhdCB0aGlzIGV2ZW4gZG9lcy5cbiAgICAgKi9cbiAgICBzdGVwUHJpbnRlcihzdGVwLCBwYWdlKSB7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlci1vdXRwdXRcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXN0ZXBcIikgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByaW50IGEgbGluZSB0byB0aGUgb24tc2NyZWVuIHByaW50ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmVUZXh0IC0gQSBsaW5lIG9mIHRleHQgdG8gYmUgcHJpbnRlZCBvdXQuXG4gICAgICovXG4gICAgcHJpbnQobGluZVRleHQpIHtcbiAgICAgICAgLy8gRW1wdHkgc3RyaW5ncyBtZWFucyBkbyBub3RoaW5nLlxuICAgICAgICAvLyBwcmludChcIlwiLCBlbmQ9XCJcIilcbiAgICAgICAgaWYgKCFsaW5lVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAobGluZVRleHQuY2hhckF0KGxpbmVUZXh0Lmxlbmd0aC0xKSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGxpdExpbmVzID0gbGluZVRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGlmICh0aGlzLmxpbmVCdWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIuYWRkQ29udGVudChzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBzcGxpdExpbmVzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsdXNoKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcGxvdChwbG90cykge1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVQbG90KHRoaXMubWFpbiwgcGxvdHMpO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RCdWZmZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmVnaXN0ZXJzIGEgUHJvbWlzZSBmcm9tIHRoZSBJbnB1dCBib3hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvbXB0TWVzc2FnZSAtIE1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUlucHV0KHRoaXMubWFpbiwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH07XG5cblxuXG4gICAgLyoqXG4gICAgICogVW5jb25kaXRpb25hbGx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy50YWcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLnByb3AoXCJzY3JvbGxIZWlnaHRcIikgLSB0aGlzLnRhZy5wcm9wKFwiY2xpZW50SGVpZ2h0XCIpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxufSIsImltcG9ydCB7c2x1Z30gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8vIFRPRE86IGVkaXRvci5ibS5ibG9ja0VkaXRvci5leHRyYVRvb2xzW11cblxuZXhwb3J0IGxldCBfSU1QT1JURURfREFUQVNFVFMgPSB7fTtcbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTID0ge307XG5cbi8qKlxuICogVGhpcyBpcyBhIHZlcnkgc2ltcGxpc3RpYyBoZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIHRyYW5zZm9ybVxuICogYSBnaXZlbiBidXR0b24gaW50byBhIFwiTG9hZGVkXCIgc3RhdGUgKGRpc2FibGVkLCBwcmVzc2VkIHN0YXRlLCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidG4gLSBBbiBIVE1MIGVsZW1lbnQgdG8gY2hhbmdlIHRoZSB0ZXh0IG9mLlxuICovXG5sZXQgc2V0QnV0dG9uTG9hZGVkID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxuICAgICAgICAucHJvcChcImRpc2FibGVkXCIsIHRydWUpXG4gICAgICAgIC50ZXh0KFwiTG9hZGVkXCIpXG4gICAgICAgIC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIFwidHJ1ZVwiKTtcbn07XG5cblxuLyoqXG4gKiBNb2R1bGUgdGhhdCBjb25uZWN0cyB0byB0aGUgQ09SR0lTIGRhdGFzZXRzIGFuZCBtYW5hZ2VzIGludGVyYWN0aW9uc1xuICogd2l0aCB0aGVtLiBUaGlzIGluY2x1ZGVzIGxvYWRpbmcgaW4gZGF0YXNldHMgYXQgbGF1bmNoIGFuZCBvbi10aGUtZmx5LlxuICogTm90ZSB0aGF0IHRoaXMgaGFzIG5vIHByZXNlbmNlIG9uIHNjcmVlbiwgc28gaXQgZG9lcyBub3QgaGF2ZSBhIHRhZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5Q29yZ2lzfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5Q29yZ2lzKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgdGhpcy5sb2FkZWREYXRhc2V0cyA9IFtdO1xuICAgIHRoaXMubG9hZERhdGFzZXRzKCk7XG59XG5cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmxvYWREYXRhc2V0cyA9IGZ1bmN0aW9uIChzaWxlbnRseSkge1xuICAgIC8vIExvYWQgaW4gZWFjaCB0aGUgZGF0YXNldHNcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWwsXG4gICAgICAgIGVkaXRvciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvcixcbiAgICAgICAgc2VydmVyID0gdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyO1xuICAgIGxldCBpbXBvcnRzID0gW107XG4gICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cygpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICYmICEobmFtZSBpbiBCbG9ja01pcnJvckJsb2NrRWRpdG9yLkVYVFJBX1RPT0xTKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoLmFwcGx5KGltcG9ydHMsIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnKG5hbWUpLCBuYW1lLCBzaWxlbnRseSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGRhdGFzZXRzIGFyZSBsb2FkZWQsIHVwZGF0ZSB0aGUgdG9vbGJveC5cbiAgICAkLndoZW4uYXBwbHkoJCwgaW1wb3J0cykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xuICAgICAgICBlZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgZWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmVyLmZpbmFsaXplU3Vic2NyaXB0aW9ucygpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkcyB0aGUgZGVmaW5pdGlvbnMgZm9yIGEgZGF0YXNldCBpbnRvIHRoZSBlbnZpcm9ubWVudCwgaW5jbHVkaW5nXG4gKiB0aGUgZGF0YXNldCAoYXMgYSBKUyBmaWxlKSwgdGhlIHNrdWxwdCBiaW5kaW5ncywgYW5kIHRoZSBibG9ja2x5XG4gKiBiaW5kaW5ncy4gVGhpcyByZXF1aXJlcyBhY2Nlc3MgdG8gYSBDT1JHSVMgc2VydmVyLCBhbmQgb2NjdXJzXG4gKiBhc3luY2hyb25vdXNseS4gVGhlIHJlcXVlc3RzIGFyZSBmaXJlZCBhbmQgdGhlaXIgZGVmZXJyZWQgb2JqZWN0c1xuICogYXJlIHJldHVybmVkIC0gY2FsbGVycyBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gcGVyZm9ybSBhbiBhY3Rpb25cbiAqIG9uIGNvbXBsZXRpb24gb2YgdGhlIGltcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2x1ZyAtIFRoZSBVUkwgc2FmZSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIHVzZXItZnJpZW5kbHkgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lLlxuICogQHJldHVybnMge0FycmF5LjxEZWZlcnJlZD59IC0gUmV0dXJucyB0aGUgYXN5bmMgcmVxdWVzdHMgYXMgZGVmZXJyZWQgb2JqZWN0cy5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUuaW1wb3J0RGF0YXNldCA9IGZ1bmN0aW9uIChzbHVnLCBuYW1lKSB7XG4gICAgbGV0IHVybF9yZXRyaWV2YWxzID0gW107XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cyArIFwiYmxvY2tweS9cIiArIHNsdWcgKyBcIi9cIiArIHNsdWc7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBBY3R1YWxseSBnZXQgZGF0YVxuICAgICAgICBsZXQgZ2V0RGF0YXNldCA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9kYXRhc2V0LmpzXCIpO1xuICAgICAgICAvLyBMb2FkIGdldENvbXBsZXRlIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGJlY2F1c2UgaXRzIGJpZyA6KFxuICAgICAgICBsZXQgZ2V0Q29tcGxldGUgPSAkLmdldFNjcmlwdChyb290ICsgXCJfY29tcGxldGUuanNcIik7XG4gICAgICAgIGxldCBnZXRTa3VscHQgPSAkLmdldChyb290ICsgXCJfc2t1bHB0LmpzXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtcInNyYy9saWIvXCIgKyBzbHVnICsgXCIvX19pbml0X18uanNcIl0gPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGdldEJsb2NrbHkgPSAkLmdldFNjcmlwdChyb290ICsgXCJfYmxvY2tseS5qc1wiKTtcbiAgICAgICAgLy8gT24gY29tcGxldGlvbiwgdXBkYXRlIG1lbnVzLlxuICAgICAgICAkLndoZW4oZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkRGF0YXNldHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHkuZGF0YXNldHM7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IGRhdGEuYmxvY2tweS5kb2N1bWVudGF0aW9uO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gJChgPHA+RG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQgPGEgaHJlZj0nJHtkb2N1bWVudGF0aW9ufScgdGFyZ2V0PV9ibGFuaz51cmw8L2E+PC9wPmApO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKFwiPHRhYmxlPjwvdGFibGU+XCIsIHtcImNsYXNzXCI6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc20gdGFibGUtc3RyaXBlZFwifSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykuc29ydCgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YXNldHMuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkxvYWRlZChidG4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGljayggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhc2V0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCJEYXRhIC0gXCIgKyB0aXRsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKFwiPHRyPjwvdHI+XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIHRpdGxlTmFtZSArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW3RpdGxlTmFtZV1bXCJzaG9ydFwiXSArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD48L3RkPlwiKS5hcHBlbmQoYnRuKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZFRvKHN0YXJ0KTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFjdHVhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5zaG93KFwiSW1wb3J0IERhdGFzZXRzXCIsIHN0YXJ0LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NTMwMTA3MDE2MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY1MzAxMDcwMTQ5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRPRE86IER5YW5taWNhbGx5IHBvcHVsYXRlIGFyaWEtbGFiZWxsZWRieSBpbiB0aGlzIGFuZCBvdGhlciBwbGFjZXNcblxuZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWRpYWxvZyBtb2RhbCBoaWRkZW4nXG4gICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9J0RpYWxvZydcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cnIHJvbD1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50JyByb2xlPSdyZWdpb24nIGFyaWEtbGFiZWw9J0RpYWxvZyBjb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5EeW5hbWljIENvbnRlbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1ib2R5JyBzdHlsZT0nd2lkdGg6MTAwJTsgaGVpZ2h0OjQwMHB4OyB3aGl0ZS1zcGFjZTpwcmUtd3JhcCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbi8qKlxuICogQSB1dGlsaXR5IG9iamVjdCBmb3IgcXVpY2tseSBhbmQgY29udmVuaWVudGx5IGdlbmVyYXRpbmcgZGlhbG9nIGJveGVzLlxuICogVW5mb3J0dW5hdGVseSwgdGhpcyBkb2Vzbid0IGR5bmFtaWNhbGx5IGNyZWF0ZSBuZXcgYm94ZXM7IGl0IHJldXNlcyB0aGUgc2FtZSBvbmVcbiAqIG92ZXIgYW5kIG92ZXIgYWdhaW4uIEl0IHR1cm5zIG91dCBkeW5hbWljYWxseSBnZW5lcmF0aW5nIG5ldyBkaWFsb2cgYm94ZXNcbiAqIGlzIGEgcGFpbiEgU28gd2UgY2FuJ3Qgc3RhY2sgdGhlbS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RGlhbG9nfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlEaWFsb2cobWFpbiwgdGFnKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgIHRoaXMudGl0bGVUYWcgPSB0YWcuZmluZChcIi5tb2RhbC10aXRsZVwiKTtcbiAgICB0aGlzLmJvZHlUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1ib2R5XCIpO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy50YWcuZHJhZ2dhYmxlKHtcbiAgICAgICAgXCJoYW5kbGVcIjogXCIubW9kYWwtdGl0bGVcIlxuICAgIH0pO1xuXG4gICAgdGhpcy50YWcub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKG9uY2xvc2UgIT09IHVuZGVmaW5lZCAmJiBvbmNsb3NlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvbmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uZmlybShcIkVycm9yIExvYWRpbmcgQXNzaWdubWVudFwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBhc3NpZ25tZW50Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59OyIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICBBc3NpZ25tZW50IFNldHRpbmdzXHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1MgPSBbXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGlzIGFsbG93ZWQgdG8gZWRpdCB0aGUgZmlsZSBkaXJlY3RseVxyXG4gICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgKi9cclxuICAgIFtcImNhbkVkaXRcIiwgXCJjYW5fZWRpdFwiLCB0cnVlXSxcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIHVzZXIgY2FuIHVzZSBibG9ja3NcclxuICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICovXHJcbiAgICBbXCJjYW5CbG9ja3NcIiwgXCJjYW5fYmxvY2tzXCIsIHRydWVdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIHByZXZlbnQgdGltZW91dHMgKHBvdGVudGlhbGx5IGFsbG93IGluZmluaXRlIGxvb3BzKVxyXG4gICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgKi9cclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlXSxcclxuICAgIC8qKlxyXG4gICAgICogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXJcclxuICAgICAqL1xyXG4gICAgW1widG9vbGJveExldmVsXCIsIFwidG9vbGJveF9sZXZlbFwiLCBcIm5vcm1hbFwiXSxcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0aGUgc3R1ZGVudCBvcGVucyB0aGlzIGFzc2lnbm1lbnQsIHdoYXQgUHl0aG9uIGVkaXRvciBtb2RlIHRvIHN0YXJ0IGluXHJcbiAgICAgKi9cclxuICAgIFtcInN0YXJ0Vmlld1wiLCBcInN0YXJ0X3ZpZXdcIiwgRGlzcGxheU1vZGVzLlNQTElUXSxcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgbGlzdCBvZiBkYXRhc2V0cyBhdmFpbGFibGUgb24gbG9hZCBhcyBhIGNvbW1hIHNlcGFyYXRlZCBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiXSxcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGEgcGFyc29uJ3Mgc3R5bGUgcXVlc3Rpb25cclxuICAgICAqL1xyXG4gICAgW1wiaXNQYXJzb25zXCIsIFwiaXNfcGFyc29uc1wiLCBmYWxzZV0sXHJcbiAgICAvLyBXaGV0aGVyIHRvIGV2ZW4gdHJ5IHRvIHJ1biBmZWVkYmFja1xyXG4gICAgW1wiZGlzYWJsZUZlZWRiYWNrXCIsIFwiZGlzYWJsZV9mZWVkYmFja1wiLCBmYWxzZV0sXHJcbiAgICAvLyBXaGV0aGVyIHRvIGRvIGFueSB0cmFjaW5nXHJcbiAgICBbXCJkaXNhYmxlVHJhY2VcIiwgXCJkaXNhYmxlX3RyYWNlXCIsIGZhbHNlXSxcclxuICAgIC8vIFdoZXRoZXIgdG8gaW1tZWRpYXRlbHkgc3RhcnQgaW4gSW50ZXJhY3RpdmUgQ29uc29sZSBtb2RlXHJcbiAgICBbXCJzdGFydEludGVyYWN0aXZlXCIsIFwic3RhcnRfaW50ZXJhY3RpdmVcIiwgZmFsc2VdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2VdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWVdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZV0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZV0sXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2VdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2VdXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc2V0dGluZ3MuXCIrc2VydmVyTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG59XHJcblxyXG5jbGFzcyBBc3NpZ25tZW50U2V0dGluZ3NWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRTZXR0aW5ncyA9IHtcclxuICAgIG5hbWU6IFwiQXNzaWdubWVudCBTZXR0aW5nc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBBc3NpZ25tZW50U2V0dGluZ3NWaWV3LFxyXG4gICAgdGVtcGxhdGU6IEFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLRE9XTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCI+PC90ZXh0YXJlYT4gICAgXHJcbmA7XHJcblxyXG5cclxuY2xhc3MgTWFya2Rvd25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLm1kZSA9IG5ldyBFYXN5TURFKHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIilbMF0sXHJcbiAgICAgICAgICAgIGF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VTeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgLy8gVE9ETzogaW1hZ2VVcGxvYWRGdW5jdGlvblxyXG4gICAgICAgICAgICByZW5kZXJpbmdDb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNvZGVTeW50YXhIaWdobGlnaHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2guYmluZCh0aGlzLm1kZS5jb2RlbWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZGUudmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5tZGUudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXJrZG93bkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiTWFya2Rvd25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5tZFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBNYXJrZG93bkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogTUFSS0RPV05fRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogVE9ETzogcmVuYW1lIGZpbGVzLCBtYW51YWwgc2F2ZSwgdGFncywgc2FtcGxlX3N1Ym1pc3Npb25zLCBvbl9ldmFsLCBub24tYnVpbHRpbiBmaWxlc1xyXG4gKiBUT0RPOiBpbXBvcnQgZGF0YSwgaGlzdG9yeSwgcnVuLCB1cmxfZGF0YSwgYXNzaWdubWVudF9zZXR0aW5ncywgcGFyc29uc19tb2RlXHJcbiAqIFRPRE86IGRlbGV0ZSBiZWNvbWVzIFwiY2xlYXJcIiBmb3IgaW5zdHJ1Y3RvciBmaWxlc1xyXG4gKiBUT0RPOiBGaXggY2FwdHVyZSBibG9ja3MgY3NzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBlbnVtIHtzdHJ9XHJcbiAqL1xyXG5pbXBvcnQge0Fic3RyYWN0RWRpdG9yLCBzbHVnZ2lmeX0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgbGV0IERpc3BsYXlNb2RlcyA9IHtcclxuICAgIEJMT0NLOiBcImJsb2NrXCIsXHJcbiAgICBTUExJVDogXCJzcGxpdFwiLFxyXG4gICAgVEVYVDogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LnB5dGhvbk1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1blwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgJHttYWtlVGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgJHttYWtlVGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmltcG9ydERhdGFzZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvc3Bhbj4gSW1wb3J0IGRhdGFzZXRzXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImV2ZW50OiB7Y2hhbmdlOiB1aS5lZGl0b3JzLnVwbG9hZH1cIj5cclxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gYmxvY2tweS10b29sYmFyLWRvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSGlzdG9yeSBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWhpc3RvcnlcIj48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwhLS0gRnVsbHkgZnVuY3Rpb25hbCwgYnV0IGEgbGl0dGxlIHRvby4uIEludmFzaXZlIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlbiBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiPjwvc3Bhbj4gRnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTYXZlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5TYXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvc3Bhbj4gU2F2ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L3NwYW4+IERlbGV0ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlbmFtZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuUmVuYW1lXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9zcGFuPiBSZW5hbWVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCI+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuLypcclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBibG9ja3B5LXJ1bicgc3R5bGU9J2Zsb2F0OmxlZnQnLFxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9J2NzczogZXhlY3V0aW9uLnN0YXR1cygpID09IFwicnVubmluZ1wiID8gXCJidG4taW5mb1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi5zdGF0dXMoKSA9PSBcImVycm9yXCIgPyBcImJ0bi1kYW5nZXJcIiA6IFwiYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKCkgfHwgIWFzc2lnbm1lbnQudXBsb2FkKCknID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcGxheSc+PC9zcGFuPiBSdW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAhYXNzaWdubWVudC51cGxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdCbG9ja3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFhcmVCbG9ja3NVcGRhdGluZygpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxhcmdlJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gQmxvY2tzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LWluc3RydWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdVcGxvYWQnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IEluc3RydWN0b3JcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5lZGl0b3IoKSA9PSAnU3BsaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFhcmVCbG9ja3NVcGRhdGluZygpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXJlc2l6ZS1ob3Jpem9udGFsJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IFNwbGl0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5lZGl0b3IoKSA9PSAnVGV4dCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IFRleHRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItcmVzZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogIWFzc2lnbm1lbnQudXBsb2FkKClcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2gnPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItY2FwdHVyZSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1waWN0dXJlJz48L3NwYW4+IENhcHR1cmVcclxuICAgICAgICAgICAgPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1pbXBvcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcigpIHx8ICghYXNzaWdubWVudC51cGxvYWQoKSAmJiBhc3NpZ25tZW50LmltcG9ydGFibGUoKSlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWNsb3VkLWRvd25sb2FkJz48L3NwYW4+IEltcG9ydCBEYXRhc2V0c1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXVwbG9hZCc+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYmxvY2tweS10b29sYmFyLWRvd25sb2FkJz48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZCBQeXRob24gQ29kZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaGlzdG9yeSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob3VyZ2xhc3MnPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWluc3RydWN0b3InIGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+IFNldHRpbmdzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPCEtLVxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItZW5nbGlzaCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCc+PC9zcGFuPiBFbmdsaXNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKClcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPSdjbGVhcjpib3RoJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBibG9ja3B5LXRvb2xiYXItZmlsZW5hbWUtcGlja2VyXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnX19tYWluX18nfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cIl9fbWFpbl9fXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+IF9fbWFpbl9fXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ3N0YXJ0aW5nX2NvZGUnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cInN0YXJ0aW5nX2NvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IG9uX3N0YXJ0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ2dpdmVfZmVlZGJhY2snfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cImdpdmVfZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IG9uX3J1blxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdvbl9jaGFuZ2UnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cIm9uX2NoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fY2hhbmdlXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICovXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpIHtcclxuICAgIGxldCBpcHluYiA9IEpTT04ucGFyc2UoY29kZSk7XHJcbiAgICBsZXQgaXNVc2FibGUgPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWNlbGwuc291cmNlWzBdLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1ha2VQeXRob24gPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiJycnXCIrY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKStcIicnJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaXB5bmIuY2VsbHMuZmlsdGVyKGlzVXNhYmxlKS5tYXAobWFrZVB5dGhvbikuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuY2xhc3MgUHl0aG9uRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCIpKTtcclxuICAgICAgICB0aGlzLmJtID0gbmV3IEJsb2NrTWlycm9yKHtcclxuICAgICAgICAgICAgXCJjb250YWluZXJcIjogdGhpcy50YWdbMF0sXHJcbiAgICAgICAgICAgIFwicnVuXCI6IG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuLmJpbmQobWFpbi5jb21wb25lbnRzLmVuZ2luZSksXHJcbiAgICAgICAgICAgIFwic2tpcFNrdWxwdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJsb2NrbHlNZWRpYVBhdGhcIjogbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmJsb2NrbHlQYXRoLFxyXG4gICAgICAgICAgICAvLydoZWlnaHQnOiAnMjAwMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlRXh0cmFCbG9ja2x5KCkge1xyXG4gICAgICAgIHRoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLmNvbmZpZ3VyZUNvbnRleHRNZW51ID0gKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNjcmVlbnNob3RcIixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuU0NSRUVOU0hPVF9CTE9DS1NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qk1MaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UucmVuZGVyKCk7XHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSB0aGlzIGRvZXNuJ3QgZW5kIHVwIGxvb2tpbmcgcmlnaHQgKGdvIHRvIGEgZGlmZmVyZW50IGVkaXRvciwgY29tZSBiYWNrLCBhbmQgaXQnbGwgYmUgc3F1aXNoZWQpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMTAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBcmMsIHJlbG9hZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldENvZGUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvZGUpO1xyXG4gICAgICAgIC8vIFRPRE86IGxvZyB1cGxvYWQgZXZlbnRcclxuICAgICAgICAvLyBUT0RPOiBSdW4gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSBcImFuc3dlclwiICYmIHJlc3VsdC5leHRlbnNpb24gPT09IFwiLnB5XCIpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBzbHVnZ2lmeSh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5uYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQubWltZXR5cGUgPSBcInRleHQveC1weXRob25cIjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWE+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0RWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUZXh0XCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIudHh0XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRleHRFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRFWFRfRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogRWRpdG9ycyBhcmUgaW5mZXJyZWQgZnJvbSBGaWxlbmFtZXMuXHJcbiAqXHJcbiAqIFRoZSBlZGl0b3IgaXMgYmFzZWQgb24gdGhlIGV4dGVuc2lvbjpcclxuICogIC5ibG9ja3B5OiBTcGVjaWFsIGVkaXRvciAod2lsbCBiZSBjaG9zZW4gYnkgZmlsZW5hbWUpXHJcbiAqICAucHk6IFB5dGhvbiBFZGl0b3JcclxuICogIC5tZDogTWFya2Rvd24gRWRpdG9yXHJcbiAqICAudHh0OiBUZXh0IEVkaXRvciAoYWxzbyB1c2VkIGZvciBvdGhlciB0eXBlcylcclxuICogIC5wZW1sOiBQRU1MIEVkaXRvclxyXG4gKiAgLnBuZywgLmdpZiwgLmpwZWcsIC5qcGcsIC5ibXA6IEltYWdlIEVkaXRvclxyXG4gKiAgLmpzb246IEpTT04gRWRpdG9yXHJcbiAqICAueWFtbDogWUFNTCBFZGl0b3JcclxuICovXHJcblxyXG5pbXBvcnQge1B5dGhvbkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3B5dGhvblwiO1xyXG5pbXBvcnQge1RleHRFZGl0b3J9IGZyb20gXCIuL2VkaXRvci90ZXh0XCI7XHJcbmltcG9ydCB7QXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1RhZ3NFZGl0b3J9IGZyb20gXCIuL2VkaXRvci90YWdzXCI7XHJcbmltcG9ydCB7TWFya2Rvd25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9tYXJrZG93blwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBkaWZmZXJlbnQgcG9zc2libGUgZWRpdG9ycyBhdmFpbGFibGVcclxuICogQGVudW0ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBsZXQgRWRpdG9yc0VudW0gPSB7XHJcbiAgICBTVUJNSVNTSU9OOiBcInN1Ym1pc3Npb25cIixcclxuICAgIEFTU0lHTk1FTlQ6IFwiYXNzaWdubWVudFwiLFxyXG4gICAgSU5TVFJVQ1RJT05TOiBcImluc3RydWN0aW9uc1wiLFxyXG4gICAgT05fUlVOOiBcIm9uX3J1blwiLFxyXG4gICAgT05fQ0hBTkdFOiBcIm9uX2NoYW5nZVwiLFxyXG4gICAgT05fRVZBTDogXCJvbl9ldmFsXCIsXHJcbiAgICBTVEFSVElOR19DT0RFOiBcInN0YXJ0aW5nX2NvZGVcIixcclxuICAgIFNBTVBMRV9TVUJNSVNTSU9OUzogXCJzYW1wbGVfc3VibWlzc2lvbnNcIixcclxuICAgIElOU1RSVUNUT1JfRklMRTogXCJpbnN0cnVjdG9yX2ZpbGVcIlxyXG59O1xyXG5cclxuY29uc3QgU1BFQ0lBTF9OQU1FU1BBQ0VTID0gW1wiIVwiLCBcIl5cIiwgXCI/XCIsIFwiJFwiXTtcclxuXHJcbmNvbnN0IEFWQUlMQUJMRV9FRElUT1JTID0gW1xyXG4gICAgVGV4dEVkaXRvciwgUHl0aG9uRWRpdG9yLCBBc3NpZ25tZW50U2V0dGluZ3MsIFRhZ3NFZGl0b3IsIE1hcmtkb3duRWRpdG9yXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgRURJVE9SU19IVE1MID0gQVZBSUxBQkxFX0VESVRPUlMubWFwKGVkaXRvciA9PlxyXG4gICAgYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1lZGl0b3JcIj5cclxuICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9J1wiPlxyXG4gICAgJHtlZGl0b3IudGVtcGxhdGV9ICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gXHJcbiAgICAvKlxyXG4gICAgYFxyXG48IS0tIGtvIGlmOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nIC0tPlxyXG4ke2VkaXRvci50ZW1wbGF0ZX1cclxuPCEtLSAva28gLS0+YCovXHJcbikuam9pbihcIlxcblwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JzIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRfID0gW107XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25zXyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnlOYW1lXyA9IHt9O1xyXG4gICAgICAgIEFWQUlMQUJMRV9FRElUT1JTLmZvckVhY2goZWRpdG9yID0+IHRoaXMucmVnaXN0ZXJFZGl0b3IoZWRpdG9yKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUuc3Vic2NyaWJlKHRoaXMuY2hhbmdlRWRpdG9yLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVkaXRvcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSBkYXRhLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGRhdGEuY29uc3RydWN0b3IodGhpcy5tYWluLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgaW5zdGFuY2UubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRfLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYnlOYW1lX1tkYXRhLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBpbnN0YW5jZTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uc19bZXh0ZW5zaW9uc1tpXV0gPSBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnlOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ieU5hbWVfW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRWRpdG9yKG5ld0ZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9sZEVkaXRvciA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICBsZXQgbmV3RWRpdG9yID0gdGhpcy5nZXRFZGl0b3IobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvbGRFZGl0b3IuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdFZGl0b3I7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50LmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXJzZUZpbGVuYW1lKHBhdGgpIHtcclxuICAgICAgICBsZXQgc3BhY2UgPSBwYXRoLmNoYXJBdCgwKTtcclxuICAgICAgICBpZiAoU1BFQ0lBTF9OQU1FU1BBQ0VTLmluZGV4T2Yoc3BhY2UpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BhY2UgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmFtZSA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICBsZXQgdHlwZSA9IHBhdGguc3Vic3RyKHBhdGgubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICByZXR1cm4ge1wic3BhY2VcIjogc3BhY2UsIFwibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogdHlwZX07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdG9yKHBhdGgpIHtcclxuICAgICAgICBsZXQge3NwYWNlLCBuYW1lLCB0eXBlfSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZShwYXRoKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCIuYmxvY2tweVwiICYmIHBhdGggaW4gdGhpcy5leHRlbnNpb25zXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zX1twYXRoXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgaW4gdGhpcy5leHRlbnNpb25zXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zX1t0eXBlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkX1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4vc2VydmVyXCI7XG5pbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3J1blwiO1xuaW1wb3J0IHtSdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvcnVuXCI7XG5pbXBvcnQge0V2YWxDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvZXZhbFwiO1xuaW1wb3J0IHtTYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvc2FtcGxlXCI7XG5pbXBvcnQge09uQ2hhbmdlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2NoYW5nZVwiO1xuaW1wb3J0IHtPbkV2YWxDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fZXZhbFwiO1xuaW1wb3J0IHtPblNhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9zYW1wbGVcIjtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGV4ZWN1dGluZyBQeXRob24gY29kZSBhbmQgcGFzc2luZyB0aGUgcmVzdWx0cyBhbG9uZyB0byBpbnRlcmVzdGVkIGNvbXBvbmVudHMuXG4gKlxuICogSW50ZXJlc3RpbmcgY29tcG9uZW50czpcbiAqICBFeGVjdXRpb24gQnVmZmVyOiBSZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyB0aGUgdHJhY2UgZHVyaW5nIHByb2dyYW0gZXhlY3V0aW9uLlxuICogICAgICAgICAgICAgICAgICAgIFRoaXMgcHJldmVudHMgS25vY2tvdXRqcyBmcm9tIHVwZGF0aW5nIHRoZSBlZGl0b3IgZHVyaW5nIGV4ZWN1dGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RWRpdG9yfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy5leGVjdXRpb25Nb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucyA9IHtcbiAgICAgICAgICAgIHJ1bjogbmV3IFJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBldmFsOiBuZXcgRXZhbENvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvblJ1bjogbmV3IE9uUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBuZXcgT25DaGFuZ2VDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25FdmFsOiBuZXcgT25FdmFsQ29uZmlndXJhdGlvbihtYWluKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByZWNvbmZpZ3VyZSBza3VscHQgc28gd2UgY2FuIHBhcnNlXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi5nZXRTa3VscHRPcHRpb25zKCkpO1xuXG4gICAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSB0cmFjaW5nIHdoaWxlIHRoZSBwcm9ncmFtIGlzIGV4ZWN1dGluZ1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmFibGUgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gZXhlY3V0aW9uIGhhcyBmdWxseSBlbmRlZCxcbiAgICAgICAgICogd2hldGhlciBpdCBzdWNjZWVkcyBvciBmYWlscy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbiA9IG51bGw7XG4gICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHJlcG9ydHNcbiAgICAgKi9cbiAgICByZXNldFJlcG9ydHMoKSB7XG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnJlcG9ydHM7XG4gICAgICAgIHJlcG9ydFtcInZlcmlmaWVyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7fTtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50Lmxhc3RTdGVwKDApO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRMaW5lKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZURhdGEucmVtb3ZlQWxsKCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ldmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25DaGFuZ2UudXNlKHRoaXMpO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgdGhpcy5jb25maWd1cmF0aW9uLmZpbGVuYW1lKTtcbiAgICAgICAgcmV0dXJuIFNrLm1pc2NldmFsLmFzeW5jVG9Qcm9taXNlKCgpID0+XG4gICAgICAgICAgICBTay5pbXBvcnRNYWluV2l0aEJvZHkodGhpcy5jb25maWd1cmF0aW9uLmZpbGVuYW1lLCBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY29kZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZWQgd2hlbmV2ZXIgdGhlIFB5dGhvbiBjb2RlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBvbl9jaGFuZ2UoKSB7XG4gICAgICAgIGxldCBGSUxFTkFNRSA9IFwib25fY2hhbmdlXCI7XG4gICAgICAgIC8vIFRPRE86IERvIHdlIGFjdHVhbGx5IHdhbnQgdG8gc2tpcCBpZiB0aGlzIGlzIHRoZSBjYXNlP1xuICAgICAgICAvLyBTa2lwIGlmIHRoZSBpbnN0cnVjdG9yIGhhcyBub3QgZGVmaW5lZCBhbnl0aGluZ1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tGSUxFTkFNRV0oKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNoYW5naW5nXCIpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUNvZGUoKTtcbiAgICAgICAgLy8gT24gc3RlcCBkb2VzIG5vdCBwZXJmb3JtIHBhcnNlIGFuYWx5c2lzIGJ5IGRlZmF1bHQgb3IgcnVuIHN0dWRlbnQgY29kZVxuICAgICAgICBsZXQgZW5naW5lID0gdGhpcztcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGVuZ2luZS5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgZW5naW5lLnZlcmlmeUNvZGUoKTtcbiAgICAgICAgZW5naW5lLnVwZGF0ZVBhcnNlKCk7XG4gICAgICAgIGVuZ2luZS5ydW5JbnN0cnVjdG9yQ29kZShGSUxFTkFNRSwgdHJ1ZSwgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNob3cgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICEoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50RmVlZGJhY2soY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2sobW9kdWxlLiRkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImVuZ2luZVwiLCBcIm9uX2NoYW5nZVwiKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGF0dGVtcHQgdG8gY2FsbCB0aGUgZGVmaW5lZCBvbkV4ZWN1dGlvbkVuZCxcbiAgICAgKiBidXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZXJlIGlzIG5vIGZ1bmN0aW9uIGRlZmluZWQuXG4gICAgICovXG4gICAgZXhlY3V0aW9uRW5kXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25FbmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZXhlY3V0aW9uQmVnaW5fKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkJlZ2luICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCIvKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2t1bHB0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxyXG4gICAgICAgICAgICAvLyBpbXBvcnRcclxuICAgICAgICAgICAgcmVhZDogdGhpcy5pbXBvcnRGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIG9wZW5cclxuICAgICAgICAgICAgZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gZmlsZS53cml0ZVxyXG4gICAgICAgICAgICBmaWxld3JpdGU6IHRoaXMud3JpdGVGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIHByaW50XHJcbiAgICAgICAgICAgIG91dHB1dDogdGhpcy5wcmludC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50cyByZWFkaW5nIEhUTUwgZWxlbWVudHMgYXMgZmlsZXNcclxuICAgICAgICAgICAgaW5Ccm93c2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJwcmludChuYW1lKVwiO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnMuanNcIjtcclxuaW1wb3J0IHskc2tfbW9kX2luc3RydWN0b3J9IGZyb20gXCIuLi9za19tb2RfaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgVVRJTElUWV9NT0RVTEVfQ09ERSA9IFwidmFyICRidWlsdGlubW9kdWxlID0gXCIgKyAkc2tfbW9kX2luc3RydWN0b3IudG9TdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIEluc3RydWN0b3JzIGhhdmUgbm8gbGltaXRzXHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgLy8gTXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy8gRGlzYWJsZSBpbnB1dCBib3hcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIC8vIFRPRE8gU2suaW5wdXRmdW4gPSBCbG9ja1B5RW5naW5lLmlucHV0TW9ja0Z1bmN0aW9uO1xyXG4gICAgICAgIC8vIEVuYWJsZSB1dGlsaXR5IG1vZGVcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBVVElMSVRZX01PRFVMRV9DT0RFO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIl0gPSBcImxldCAkYnVpbHRpbm1vZCA9IGZ1bmN0aW9uKG1vZCl7IHJldHVybiBtb2Q7IH1cIjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fZXZhbC5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgTkVXX0xJTkVfUkVHRVggPSAvXFxyXFxufFxccnxcXG4vO1xyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwicGFzc1wiKSk7XHJcbiAgICBsZXQgdGlmYUFuYWx5c2lzID0gXCJcIjtcclxuICAgIGlmICghcXVpY2spIHtcclxuICAgICAgICB0aWZhQW5hbHlzaXMgPSBcImZyb20gcGVkYWwudGlmYSBpbXBvcnQgdGlmYV9hbmFseXNpc1xcbnRpZmFfYW5hbHlzaXMoRmFsc2UpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG5jb21wYXRpYmlsaXR5LnNldF9zYW5kYm94KHN0dWRlbnQpXHJcbmVycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50ID0gcnVuX3N0dWRlbnRcclxuY29tcGF0aWJpbGl0eS5nZXRfcGxvdHMgPSBnZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0ID0gZ2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgZnVuYygqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuI3ByaW50KE1BSU5fUkVQT1JULmZlZWRiYWNrWzBdLm1pc3Rha2VbJ2Vycm9yJ10pXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25SdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX3J1blwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gQWN0dWFsbHkgcnVuIHRoZSBweXRob24gY29kZVxyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9IHJlcG9ydFtcInBhcnNlclwiXS5zdWNjZXNzICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBmYWxzZSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX3J1bi4kZDtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUZpbGUoXCJhbnN3ZXIucHlcIiwgdGhpcy5jb2RlLCBudWxsKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJ2ZXJpZmllclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IEJvb2xlYW4odGhpcy5jb2RlLnRyaW0oKSksXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJ1blN1Y2Nlc3NcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAobW9kdWxlLiRkLCAtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gVE9ETzogRml4IHRvIGJlIHRoZSBjdXJyZW50IHNhbXBsZSBzdWJtaXNzaW9uXHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJwcmludCgnTm90IHJlYWR5IHlldCEnKVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcclxuICAgICAgICBTay5yZXF1ZXN0c0dldCA9IChmaWxlbmFtZSkgPT4gdGhpcy5vcGVuVVJMKGZpbGVuYW1lLCBcInVybFwiKTtcclxuXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gXCJwYXNzXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvcmJpZGRlbihmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBhY2Nlc3NpYmxlOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuaW5wdXQocHJvbXB0TWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmlsZW5hbWUuc3RhcnRzV2l0aChcInNyYy9saWIvdXRpbGl0eS9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcInNyYy9saWIvcGVkYWwvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIuL19pbnN0cnVjdG9yL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFwiU3RlcHNcIiB0aGUgZXhlY3V0aW9uIG9mIHRoZSBjb2RlLCBtZWFudCB0byBiZSB1c2VkIGFzIGEgY2FsbGJhY2sgdG8gdGhlIFNrdWxwdFxyXG4gICAgICogZW52aXJvbm1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIEhhc2ggdGhhdCBtYXBzIHRoZSBuYW1lcyBvZiB2YXJpYWJsZXMgKFN0cmluZ3MpIHRvIHRoZWlyIFNrdWxwdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgbGluZSBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGluayBvZiBpdCBhcyB0aGUgXCJYXCIgcG9zaXRpb24gdG8gdGhlIGxpbmVOdW1iZXIncyBcIllcIiBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBweXRob24gZmlsZSBiZWluZyBleGVjdXRlZCAoZS5nLiwgXCJfX21haW5fXy5weVwiKS5cclxuICAgICAqL1xyXG4gICAgc3RlcCh2YXJpYWJsZXMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgYSBwYXJzZVxyXG4gICAgICAgIGxldCBhc3Q7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlID0gU2sucGFyc2UodGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgYXN0ID0gU2suYXN0RnJvbVBhcnNlKHBhcnNlLmNzdCwgdGhpcy5maWxlbmFtZSwgcGFyc2UuZmxhZ3MpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbGV0IEZFRURCQUNLX0hUTUwgPSBgXG5cbjxzcGFuIGNsYXNzPSdibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrIHRleHQtbXV0ZWQtbGVzcyBwdWxsLXJpZ2h0IHBvc2l0aW9uLXN0aWNreSBzdGlja3ktdG9wJ1xuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWxhYmVsPVwiTmV3IEZlZWRiYWNrIEFsZXJ0XCI+XG4gICAgTmV3IGZlZWRiYWNrICZ1YXJyO1xuPC9zcGFuPlxuXG48ZGl2IGNsYXNzPSdibG9ja3B5LWZlZWRiYWNrIGNvbC1tZC02IGJsb2NrcHktcGFuZWwnXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkZlZWRiYWNrXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuXG4gICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZWNvbmRSb3cuc3dpdGNoTGFiZWxcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIEFjdHVhbCBGZWVkYmFjayBSZWdpb24gLS0+ICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmc+RmVlZGJhY2s6IDwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UgYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeSBmZWVkYmFjay1iYWRnZSdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczogdWkuZmVlZGJhY2suYmFkZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLmZlZWRiYWNrLmNhdGVnb3J5XCI+RmVlZGJhY2sgS2luZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ0ZXh0OiBleGVjdXRpb24uZmVlZGJhY2subGFiZWxcIj48L3N0cm9uZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiBleGVjdXRpb24uZmVlZGJhY2subWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICAgICAgICAgICAgXG5gO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZlZWRiYWNrIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hbmFnZXMgdGhlIGZlZWRiYWNrIGFyZWEsIHdoZXJlIHVzZXJzIGFyZSB0b2xkIHRoZSBzdGF0ZSBvZiB0aGVpclxuICAgICAqIHByb2dyYW0ncyBleGVjdXRpb24gYW5kIGdpdmVuIGd1aWRhbmNlLiBBbHNvIG1hbmFnZXMgdGhlIGNyZWF0aW9uIG9mIHRoZSBUcmFjZSBUYWJsZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEB0aGlzIHtCbG9ja1B5RmVlZGJhY2t9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2s7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeVwiKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzY3JlZW4gKHRha2VzIDEgc2Vjb25kKSB0byBtYWtlIHRoZSBGZWVkYmFjayBhcmVhIHZpc2libGUuXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGZlZWRiYWNrIGFyZWEgaXMgY3VycmVudGx5IHZpc2libGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZlZWRiYWNrVmlzaWJsZSgpIHtcbiAgICAgICAgbGV0IHRvcF9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wO1xuICAgICAgICBsZXQgYm90dG9tX29mX2VsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3AgKyB0aGlzLnRhZy5vdXRlckhlaWdodCgpO1xuICAgICAgICBsZXQgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vYm90dG9tX29mX2VsZW1lbnQgLT0gNDA7IC8vIFVzZXIgZnJpZW5kbHkgcGFkZGluZ1xuICAgICAgICByZXR1cm4gKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBvdXRwdXQgY3VycmVudGx5IGluIHRoZSBmZWVkYmFjayBhcmVhLiBBbHNvIHJlc2V0cyB0aGUgcHJpbnRlciBhbmRcbiAgICAgKiBhbnkgaGlnaGxpZ2h0ZWQgbGluZXMgaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UoXCIqUmVhZHkqXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmhpZGRlbihmYWxzZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBmaW5kRmlyc3RFcnJvckxpbmUoZmVlZGJhY2tEYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBmZWVkYmFja0RhdGEubGVuZ3RoLTE7IGkgPj0gMDsgaS09IDEpIHtcbiAgICAgICAgICAgIGlmIChcInBvc2l0aW9uXCIgaW4gZmVlZGJhY2tEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRiYWNrRGF0YVtpXS5wb3NpdGlvbi5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBtb2RlbCB3aXRoIHRoZXNlIG5ldyBleGVjdXRpb24gcmVzdWx0c1xuICAgICAqIEBwYXJhbSBleGVjdXRpb25SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICAvLyBQYXJzZSBvdXQgZGF0YVxuICAgICAgICBsZXQgbWVzc2FnZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5NRVNTQUdFKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkNBVEVHT1JZKTtcbiAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkxBQkVMKTtcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuSElERSk7XG4gICAgICAgIGxldCBkYXRhID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkRBVEEpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGJhc2VkIG9uIGFzc2lnbm1lbnRzJyBzZXR0aW5nc1xuICAgICAgICBsZXQgaGlkZVNjb3JlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGlmIChoaWRlU2NvcmUgJiYgY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBsYWJlbCA9IFwiTm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJObyBlcnJvcnMgcmVwb3J0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGVycm9yIG9uIGEgbGluZSBhbmQgcmVwb3J0IHRoYXRcbiAgICAgICAgbGV0IGxpbmUgPSBCbG9ja1B5RmVlZGJhY2suZmluZEZpcnN0RXJyb3JMaW5lKGRhdGEpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmUgIT09IG51bGwgJiYgbGluZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5wdXNoKGxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW52ZXJ0IHRoZSBzZXQgb2YgdHJhY2VkIGxpbmVzXG4gICAgICAgIGxldCBzdHVkZW50UmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQ7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQuc3VjY2Vzcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDw9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0TGluZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQubGluZXMuaW5kZXhPZihpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RmVlZGJhY2tVcGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrXCIpLnNob3coKS5mYWRlT3V0KDcwMDApO1xuICAgIH07XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeShcImludGVybmFsXCIpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsKFwiSW50ZXJuYWwgRXJyb3JcIik7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFxuICAgICAgICAgICAgRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay5cbiAgICAgICAgICAgIFBsZWFzZSBzaG93IHRoZSBmb2xsb3dpbmcgdG8gYW4gaW5zdHJ1Y3RvcjpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHByZT48c3Ryb25nPiR7ZXJyb3IudHAkbmFtZX08L3N0cm9uZz46ICR7U2suZmZpLnJlbWFwVG9KcyhlcnJvci5hcmdzKX08L3ByZT5gO1xuXG4gICAgICAgIGlmIChlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHRyYWNlYmFja0Zvcm1hdHRlZD0gZXJyb3IudHJhY2ViYWNrLm1hcChmcmFtZSA9PlxuICAgICAgICAgICAgICAgIGBGaWxlIDxzcGFuIGNsYXNzPVwiZmlsZW5hbWVcIj5cIiR7ZnJhbWUuZmlsZW5hbWV9XCI8L3NwYW4+LCBsaW5lIDxzcGFuIGNsYXNzPVwibGluZW5vXCI+JHtmcmFtZS5saW5lbm99PC9zcGFuPlxcbmApLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGA8cHJlPiR7dHJhY2ViYWNrRm9ybWF0dGVkfTwvcHJlPmA7XG4gICAgICAgICAgICBsZXQgbGFzdF90cmFjZWJhY2sgPSBlcnJvci50cmFjZWJhY2suc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgaWYgKGxhc3RfdHJhY2ViYWNrLmZpbGVuYW1lID09PSBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgICAgICAgICAgbGFzdF90cmFjZWJhY2subGluZW5vIC09IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5pbnN0cnVjdG9yLmxpbmVfb2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cbn0iLCJjb25zdCBtYWtlVGFiID0gZnVuY3Rpb24oZmlsZW5hbWUsIGZyaWVuZGx5TmFtZSwgaGlkZUlmRW1wdHkpIHtcclxuICAgIGlmIChmcmllbmRseU5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZyaWVuZGx5TmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gJyR7ZmlsZW5hbWV9J30sXHJcbiAgICAgICAgICAgICAgICBjbGljazogZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCAnJHtmaWxlbmFtZX0nKSxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEke2hpZGVJZkVtcHR5fSB8fCB1aS5maWxlcy5oYXNDb250ZW50cygnJHtmaWxlbmFtZX0nKVwiPlxyXG4gICAgICAgICAgICAke2ZyaWVuZGx5TmFtZX08L2E+XHJcbiAgICA8L2xpPmA7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZJTEVTX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWZpbGVzXCJcclxuICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmZpbGVzLnZpc2libGVcIj5cclxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxzdHJvbmc+VmlldzogPC9zdHJvbmc+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgICR7bWFrZVRhYihcImFuc3dlci5weVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiQXNzaWdubWVudCBTZXR0aW5nc1wiKX1cclxuICAgICR7bWFrZVRhYihcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiU3RhcnRpbmcgQ29kZVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ydW4ucHlcIiwgXCJPbiBSdW5cIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fY2hhbmdlLnB5XCIsIFwiT24gQ2hhbmdlXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2V2YWwucHlcIiwgXCJPbiBFdmFsXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiP21vY2tfdXJscy5ibG9ja3B5XCIsIFwiVVJMIERhdGFcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIiwgXCJTYW1wbGUgU3VibWlzc2lvbnNcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhdGFncy5ibG9ja3B5XCIsIFwiVGFnc1wiLCB0cnVlKX1cclxuICBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5BZGQgTmV3PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP21vY2tfdXJscy5ibG9ja3B5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJz9tb2NrX3VybHMuYmxvY2tweScpXCI+VVJMIERhdGE8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz90YWdzLmJsb2NrcHknKVwiPlRhZ3M8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9zYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweScpXCI+U2FtcGxlIFN1Ym1pc3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9jaGFuZ2UucHknKVwiPk9uIENoYW5nZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uRXZhbFwiPk9uIEV2YWw8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5JbnN0cnVjdG9yIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3R1ZGVudCBGaWxlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICBcclxuPC91bD5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG4vKipcclxuICogRmlsZW5hbWVzIGxpdmUgaW4gb25lIG9mIGZpdmUgcG9zc2libGUgbmFtZXNwYWNlczpcclxuICogIEluc3RydWN0b3IgKCEpOiBJbnZpc2libGUgdG8gdGhlIHN0dWRlbnQgdW5kZXIgYWxsIGNpcmN1bXN0YW5jZXNcclxuICogIFN0YXJ0IFNwYWNlICheKTogVXNlZCB0byByZXNldCB0aGUgc3R1ZGVudCBuYW1lc3BhY2VcclxuICogIFN0dWRlbnQgU3BhY2UgKCk6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQgd2hlbiBkaXNwbGF5LmhpZGVGaWxlcyBpcyBub3QgdHJ1ZSwgYWJsZSB0byBiZSBlZGl0ZWRcclxuICogIEhpZGRlbiBTcGFjZSAoPyk6IE5vdCBkaXJlY3RseSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgYWNjZXNzaWJsZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAqICBSZWFkLW9ubHkgU3BhY2UgKCYpOiBBbiBpbnN0cnVjdG9yIGZpbGUgdHlwZSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgaXMgdW5lZGl0YWJsZSBieSB0aGVtXHJcbiAqICBTZWNyZXQgU3BhY2UgKCQpOiBOb3QgdmlzaWJsZSBmcm9tIHRoZSBtZW51IGF0IGFsbCwgc29tZSBvdGhlciBtZWNoYW5pc20gY29udHJvbHMgaXRcclxuICogIEdlbmVyYXRlZCBTcGFjZSAoKik6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBkZXN0cm95ZWQgYWZ0ZXIgRW5naW5lLkNsZWFyLiBDYW4gc2hhZG93IGFuIGFjdHVhbCBmaWxlLlxyXG4gKiAgQ29uY2F0ZW5hdGVkIFNwYWNlICgjKTogVXNlZCB3aGVuIGJ1bmRsaW5nIGEgc3BhY2UgZm9yIHRoZSBzZXJ2ZXIuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBTVEFSVElOR19GSUxFUyA9IFtcclxuICAgIC8vIFN1Ym1pc3Npb25cclxuICAgIFwiYW5zd2VyLnB5XCIsXHJcbiAgICAvLyBJbnN0cnVjdG9yIGZpbGVzXHJcbiAgICBcIiFpbnN0cnVjdGlvbnMubWRcIixcclxuICAgIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgXCJec3RhcnRpbmdfY29kZS5weVwiLFxyXG4gICAgXCIhb25fcnVuLnB5XCIsXHJcbiAgICBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfTkVXX0ZJTEVTID0gW1xyXG4gICAgXCIhb25fY2hhbmdlLnB5XCIsXHJcbiAgICBcIiFvbl9ldmFsLnB5XCIsXHJcbiAgICBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgXCIhdGFncy5ibG9ja3B5XCIsXHJcbiAgICBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXHJcbl07XHJcblxyXG5jb25zdCBERUxFVEFCTEVfU0lNUExFX0ZJTEVTID0gW1wiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOREVMRVRBQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOUkVOQU1BQkxFX0ZJTEVTID0gW1wiYW5zd2VyLnB5XCIsIFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIiFhc3NpZ25tZW50X3NldHRpbmdzLnB5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiIW9uX3J1bi5weVwiLCBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiLCBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhdGFncy5ibG9ja3B5XCIsIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJdO1xyXG5cclxuY2xhc3MgQmxvY2tQeUZpbGUge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgIHJldHVybiB7XCJmaWxlbmFtZVwiOiBrby5vYnNlcnZhYmxlKGZpbGVuYW1lKSwgY29udGVudHM6IGtvLm9ic2VydmFibGUoY29udGVudHMgfHwgXCJcIil9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbmNhdGVuYXRlZEZpbGUoY29uY2F0ZW5hdGVkRmlsZSwgbW9kZWxGaWxlTGlzdCkge1xyXG4gICAgaWYgKGNvbmNhdGVuYXRlZEZpbGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBKU09OLnBhcnNlKGNvbmNhdGVuYXRlZEZpbGUpO1xyXG4gICAgICAgIGZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKSk7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChmaWxlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbEZpbGVMaXN0KCkubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLmZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiBmaWxlLmNvbnRlbnRzKClcclxuICAgICAgICB9O1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoKS5mb3JFYWNoKGZpbGUgPT5cclxuICAgICAgICAgICAgcmVzdWx0W2ZpbGUuZmlsZW5hbWUoKV0gPSBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdHMgYXdheSBkYXRhYmFzZSBsb2dpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGaWxlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfID0ge307XHJcbiAgICAgICAgdGhpcy5tb3VudEZpbGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlc18gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiF0YWdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnRhZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIkc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJeXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIhXCIpIHx8IGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIj9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlSW5BcnJheV8oZmlsZSwgYXJyYXkpIHtcclxuICAgICAgICBmaWxlLm93bmVyID0gYXJyYXk7XHJcbiAgICAgICAgbGV0IGNvZGVCdW5kbGUgPSBmaWxlLm93bmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY29kZUJ1bmRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29kZUJ1bmRsZVtpXS5maWxlbmFtZSgpID09PSBmaWxlLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmhhbmRsZSA9IGNvZGVCdW5kbGVbaV0uY29udGVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGUuaGFuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBuZXdGaWxlLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5ld0ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VudEZpbGVzKCkge1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJec3RhcnRpbmdfY29kZS5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhb25fcnVuLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFpbnN0cnVjdGlvbnMubWRcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdGaWxlKGZpbGVuYW1lLCBjb250ZW50cywgbW9kZWxGaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgYWxyZWFkeSBleGlzdHMhIEp1c3QgdXBkYXRlIGl0cyBoYW5kbGVcclxuICAgICAgICAgICAgbGV0IGV4aXN0aW5nRmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58b2JqZWN0fSBUaGUgaW5mbyBhYm91dCB0aGUgZmlsZSwgb3IgZmFsc2UgaWYgaXQgY291bGQgbm90IGJlIGRlbGV0ZWRcclxuICAgICAqL1xyXG4gICAgZGVsZXRlRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChERUxFVEFCTEVfU0lNUExFX0ZJTEVTLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VycyBhIGNhbGxiYWNrIHRvIGV2ZW50dWFsbHkgY2FsbCBkZWxldGVGaWxlTG9jYWxseV9cclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyLnJlbW92ZShtb2RlbEZpbGUgPT4gbW9kZWxGaWxlLmZpbGVuYW1lID09PSBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZCB8fCBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLmRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeVdhdGNoZXMoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlLmZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLnVwZGF0ZWQoZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vVE9ETzogTW92ZSBnZXQgbGluayBkb3duIHRvIGZvb3RlciwgcmVtb3ZlIHZlcnRpY2FsIGJhciBmcm9tIHF1aWNrLW1lbnVcclxuZXhwb3J0IGxldCBGT09URVJfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktc3RhdHVzXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEFzc2lnbm1lbnQnKVwiPkxvYWQgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUFzc2lnbm1lbnQnKVwiPlNhdmUgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEZpbGUnKVwiPkxvYWQgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUZpbGUnKVwiPlNhdmUgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZERhdGFzZXQnKVwiPkxvYWQgRGF0YXNldDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9nRXZlbnQnKVwiPkxvZyBFdmVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygndXBkYXRlU3VibWlzc2lvbicpXCI+VXBkYXRlIFN1Ym1pc3Npb248L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ29uRXhlY3V0aW9uJylcIj5FeGVjdXRpb248L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZXJ2ZXIubWVzc2FnZXNcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+VXNlcjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5pZFwiPjwvc3Bhbj4gKDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIubmFtZVwiPjwvc3Bhbj4pPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+Q291cnNlOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmNvdXJzZUlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+R3JvdXA6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuZ3JvdXBJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQ6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQuaWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50IFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQudmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24uaWRcIj48L3NwYW4+PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbiBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gOyIsImltcG9ydCB7VFJBQ0VfSFRNTH0gZnJvbSBcInRyYWNlLmpzXCI7XG5pbXBvcnQge0RJQUxPR19IVE1MfSBmcm9tIFwiZGlhbG9nLmpzXCI7XG5pbXBvcnQge0ZFRURCQUNLX0hUTUx9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xuaW1wb3J0IHtGSUxFU19IVE1MfSBmcm9tIFwiZmlsZXMuanNcIjtcbmltcG9ydCB7Rk9PVEVSX0hUTUx9IGZyb20gXCJmb290ZXIuanNcIjtcbmltcG9ydCB7RURJVE9SU19IVE1MfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xuaW1wb3J0IHtDT05TT0xFX0hUTUx9IGZyb20gXCJjb25zb2xlLmpzXCI7XG5cbi8qKlxuICogQGVudW0ge3N0cn1cbiAqL1xuZXhwb3J0IGxldCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMgPSB7XG4gICAgRkVFREJBQ0s6IFwiZmVlZGJhY2tcIixcbiAgICBUUkFDRTogXCJ0cmFjZVwiLFxuICAgIE5PTkU6IFwibm9uZVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCkge1xuICAgIGxldCBoaWdobGlnaHRUaW1lb3V0ID0gbnVsbDtcbiAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuY3VycmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0VGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdGlvbnMgcHJlIGNvZGVcIikubWFwKCAoaSwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICR7RElBTE9HX0hUTUx9XG4gICAgXG4gICAgPCEtLSBIaWRkZW4gQ2FwdHVyZSBDYW52YXMgLS0+XG4gICAgPGNhbnZhcyBpZD0nY2FwdHVyZS1jYW52YXMnIGNsYXNzPSdkLW5vbmUnIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2NhbnZhcz5cbiAgICBcbiAgICA8IS0tIFJvdyAxOiBIZWFkZXIgYW5kIFF1aWNrIE1lbnUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgIFxuICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiAtLT5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMCBibG9ja3B5LXBhbmVsIGJsb2NrcHktaGVhZGVyJ1xuICAgICAgICAgICAgICAgcm9sZT0naGVhZGluZycgYXJpYS1sYWJlbD0nQXNzaWdubWVudCBEZXNjcmlwdGlvbic+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gQXNzaWdubWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD0nMSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2tweS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CbG9ja1B5OiA8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBhc3NpZ25tZW50Lm5hbWUnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBSZXNldCBJbnN0cnVjdGlvbnMgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rpb25zLXJlc2V0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5pbnN0cnVjdGlvbnMucmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IGluc3RydWN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEluc3RydWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiB1aS5pbnN0cnVjdGlvbnMuY3VycmVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXF1aWNrLW1lbnUnXG4gICAgICAgICAgICAgcm9sZT0nbWVudWJhcicgYXJpYS1sYWJlbD0nUXVpY2sgTWVudScgdGl0bGU9XCJRdWljayBNZW51XCI+XG4gICAgICAgICAgICA8IS0tIEdldCBTaGFyZWFibGUgTGluayAtLT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBWaWV3IGFzIGluc3RydWN0b3IgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLnJvbGUuaXNHcmFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGRpc3BsYXkuaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBhcyBpbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDI6IENvbnNvbGUgYW5kIEZlZWRiYWNrIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgXG4gICAgICAgIDwhLS0gQ29uc29sZSAtLT5cbiAgICAgICAgJHtDT05TT0xFX0hUTUx9XG4gICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjayAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlIC0tPlxuICAgICAgICAke0ZFRURCQUNLX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICBcbiAgICAgICAgPCEtLSBUcmFjZSAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlIC0tPlxuICAgICAgICAke1RSQUNFX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMzogRmlsZSBOYXZpZ2F0aW9uIC0tPlxuICAgIDwhLS0ga28gaWY6IHVpLmZpbGVzLnZpc2libGUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgJHtGSUxFU19IVE1MfVxuICAgIDwvZGl2PlxuICAgIDwhLS0gL2tvIC0tPlxuICAgIFxuICAgIDwhLS0gVmlldyBSb3cgLS0+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0VESVRPUlNfSFRNTH1cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRm9vdGVyIFJvdyAtLT4gICAgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0ZPT1RFUl9IVE1MfVxuICAgIDwvZGl2PlxuICAgIFxuPC9kaXY+XG4gICAgYDtcbn07IiwiaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBsZXQgU3RhdHVzU3RhdGUgPSB7XG4gICAgUkVBRFk6IFwicmVhZHlcIixcbiAgICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gICAgUkVUUllJTkc6IFwicmV0cnlpbmdcIixcbiAgICBGQUlMRUQ6IFwiZmFpbGVkXCIsXG4gICAgT0ZGTElORTogXCJvZmZsaW5lXCJcbn07XG5cbi8qKlxuICogT2JqZWN0IGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIGV4dGVybmFsIHNlcnZlcnMuIFRoaXMgaW5jbHVkZXMgZnVuY3Rpb25hbGl0eSBmb3JcbiAqIHNhdmluZyBhbmQgbG9hZGluZyBmaWxlcywgbG9nZ2luZyBldmVudHMsIHNhdmluZyBjb21wbGV0aW9ucywgYW5kIHJldHJpZXZpbmcgaGlzdG9yeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5U2VydmVyfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5U2VydmVyKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgLy8gU2F2ZSBVUkxzIGxvY2FsbHkgZm9yIHF1aWNrZXIgYWNjZXNzXG4gICAgdGhpcy51cmxzID0gbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHM7XG5cbiAgICAvLyBBZGQgdGhlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9uXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJCTE9DS1BZXCIpO1xuXG4gICAgLy8gRmF1bHRSZXNpc3RhbnRDYWNoZVxuICAgIHRoaXMucXVldWUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcImxvZ0V2ZW50XCIsIFwiW11cIikpLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcInVwZGF0ZVN1Ym1pc3Npb25cIiwgXCJbXVwiKSlcbiAgICB9O1xuICAgIHRoaXMuTUFYX1FVRVVFX1NJWkUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogMjAwLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5USU1FUl9ERUxBWSA9IDEwMDA7XG4gICAgdGhpcy5GQUlMX0RFTEFZID0gMjAwMDtcblxuICAgIHRoaXMudGltZXJzID0ge307XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA9IDA7XG5cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcyA9IFtdO1xuICAgIHRoaXMuY3JlYXRlU3Vic2NyaXB0aW9ucygpO1xuICAgIHRoaXMuY2hlY2tDYWNoZXMoKTtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgSVAgYWRkcmVzcyBoYXMgY2hhbmdlZCwgbG9nZ2luZyBhbiBldmVudCBpZiB0aGF0IG9jY3Vycy5cbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0lQID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJJUFwiKSkge1xuICAgICAgICAgICAgbGV0IG9sZElQID0gdGhpcy5zdG9yYWdlLmdldChcIklQXCIpO1xuICAgICAgICAgICAgaWYgKG9sZElQICE9PSByZXNwb25zZS5pcCkge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBcIm9sZFwiOiBvbGRJUCxcbiAgICAgICAgICAgICAgICAgICAgXCJuZXdcIjogcmVzcG9uc2UuaXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiWC1JUC5DaGFuZ2VcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZXJlIGhhdmUgYmVlbiBwcmV2aW91cyBmYWlsdXJlcyBjYWNoZWQsIGFuZCBpZiBzbyByZXRyaWVzIHRoZW0uXG4gKiBUT0RPOiB1cGRhdGVcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tDYWNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVBc3NpZ25tZW50XCIpKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwiYXNzaWdubWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXZlQXNzaWdubWVudFwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpO1xuICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5xdWV1ZSkuZm9yRWFjaChmdW5jdGlvbiAoZW5kcG9pbnQpIHtcbiAgICAgICAgKGZ1bmN0aW9uIHB1c2hBbnlRdWV1ZWQocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IHNlcnZlci51cmxzW2VuZHBvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIDEwMDAsIHB1c2hBbnlRdWV1ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoe1wic3VjY2Vzc1wiOiB0cnVlfSk7XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBmaWxlbmFtZSkge1xuICAgIG1vZGVsLnN1YnNjcmliZSgoY29udGVudHMpID0+XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkgPyB0aGlzLnNhdmVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykgOiBmYWxzZSwgdGhpcyk7XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMucHVzaChmaWxlbmFtZSk7XG59O1xuXG4vKipcbiAqIFRPRE86IGZpeFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuc3VibWlzc2lvbi5jb2RlLCBcImFuc3dlci5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vblJ1biwgXCIhb25fcnVuLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCwgXCIhb25fZXZhbC5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSwgXCIhb25fY2hhbmdlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucywgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSwgXCJec3RhcnRpbmdfY29kZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdHVkZW50RmlsZXMsIFwiI2V4dHJhU3R1ZGVudEZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3RhcnRpbmdGaWxlcywgXCIjZXh0cmFTdGFydGluZ0ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYUluc3RydWN0b3JGaWxlcy5ibG9ja3B5XCIpO1xuICAgIC8qXG4gICAgbW9kZWwuYXNzaWdubWVudC5uYW1lLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpO30pO1xuXG4gICAgbW9kZWwuYXNzaWdubWVudC5wYXJzb25zLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LmltcG9ydGFibGUuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuc2VjcmV0LnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LmRpc2FibGVfYWxnb3JpdGhtX2Vycm9ycy5zdWJzY3JpYmUoZnVuY3Rpb24oZSkgeyBzZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKTsgfSk7XG4gICAgbW9kZWwuYXNzaWdubWVudC5kaXNhYmxlX3RpbWVvdXQuc3Vic2NyaWJlKGZ1bmN0aW9uKGUpIHsgc2VydmVyLnNhdmVBc3NpZ25tZW50KCk7IH0pO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuaW5pdGlhbF92aWV3LnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LmZpbGVzLnN1YnNjcmliZShmdW5jdGlvbihlKSB7IHNlcnZlci5zYXZlQXNzaWdubWVudCgpOyB9KTtcbiAgICAvL21vZGVsLnNldHRpbmdzLmVkaXRvci5zdWJzY3JpYmUoZnVuY3Rpb24obmV3VmFsdWUpIHsgc2VydmVyLmxvZ0V2ZW50KCdlZGl0b3InLCBuZXdWYWx1ZSk7IH0pO1xuICAgIG1vZGVsLmV4ZWN1dGlvbi5zaG93X3RyYWNlLnN1YnNjcmliZShmdW5jdGlvbihuZXdWYWx1ZSkgeyBzZXJ2ZXIubG9nRXZlbnQoXCJ0cmFjZVwiLCBuZXdWYWx1ZSk7IH0pO1xuICAgIG1vZGVsLmV4ZWN1dGlvbi50cmFjZV9zdGVwLnN1YnNjcmliZShmdW5jdGlvbihuZXdWYWx1ZSkgeyBzZXJ2ZXIubG9nRXZlbnQoXCJ0cmFjZV9zdGVwXCIsIG5ld1ZhbHVlKTsgfSk7XG4gICAgICovXG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1pY3Jvc2Vjb25kcyA9IG5vdy5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuaWQoKSxcbiAgICAgICAgXCJhc3NpZ25tZW50X2dyb3VwX2lkXCI6IHVzZXIuZ3JvdXBJZCgpLFxuICAgICAgICBcImNvdXJzZV9pZFwiOiB1c2VyLmNvdXJzZUlkKCksXG4gICAgICAgIFwic3VibWlzc2lvbl9pZFwiOiBzdWJtaXNzaW9uLmlkKCksXG4gICAgICAgIFwidXNlcl9pZFwiOiB1c2VyLmlkKCksXG4gICAgICAgIFwidmVyc2lvblwiOiBhc3NpZ25tZW50LnZlcnNpb24oKSxcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogbWljcm9zZWNvbmRzLFxuICAgICAgICBcInRpbWV6b25lXCI6IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVBc3NpZ25tZW50XCIpICYmXG4gICAgICAgIG1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiaW50cm9kdWN0aW9uXCJdID0gbW9kZWwuYXNzaWdubWVudC5pbnRyb2R1Y3Rpb24oKTtcbiAgICAgICAgZGF0YVtcInBhcnNvbnNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnBhcnNvbnMoKTtcbiAgICAgICAgZGF0YVtcImluaXRpYWxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmluaXRpYWxfdmlldygpO1xuICAgICAgICBkYXRhW1wiaW1wb3J0YWJsZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaW1wb3J0YWJsZSgpO1xuICAgICAgICBkYXRhW1wic2VjcmV0XCJdID0gbW9kZWwuYXNzaWdubWVudC5zZWNyZXQoKTtcbiAgICAgICAgZGF0YVtcImRpc2FibGVfYWxnb3JpdGhtX2Vycm9yc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuZGlzYWJsZV9hbGdvcml0aG1fZXJyb3JzKCk7XG4gICAgICAgIGRhdGFbXCJkaXNhYmxlX3RpbWVvdXRcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmRpc2FibGVfdGltZW91dCgpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICAvLyBUT0RPOiBoYWNraXNoLCBicm9rZW4gaWYgJywnIGlzIGluIG5hbWVcbiAgICAgICAgZGF0YVtcIm1vZHVsZXNcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm1vZHVsZXMoKS5qb2luKFwiLFwiKTtcbiAgICAgICAgZGF0YVtcImZpbGVzXCJdID0gbW9kZWwuYXNzaWdubWVudC5maWxlcygpLmpvaW4oXCIsXCIpO1xuXG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCB0aGlzLnVybHMuc2F2ZV9hc3NpZ25tZW50LCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQVNTSUdOTUVOVFNfQ0FDSEVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmdldEhpc3RvcnkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiZ2V0X2hpc3RvcnlcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMuZ2V0X2hpc3RvcnksIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkVycm9yXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoR2V0IEhpc3RvcnkpXCIpO1xuICAgICAgICBjYWxsYmFjayhbXSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBsb2FkIGZpbGVzIGFuZCB3ZWIgcmVzb3VyY2VzLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiLyoqXG4gKiBTa3VscHQgTW9kdWxlIGZvciBob2xkaW5nIHRoZSBJbnN0cnVjdG9yIEFQSS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gYnkgZ2V0dGluZyB0aGUgZnVuY3Rpb25zJyBzb3VyY2UgY29kZSBmcm9tIHRvU3RyaW5nLlxuICogSXNuJ3QgdGhhdCBjcmF6eT9cbiAqXG4gKlxuICovXG5leHBvcnQgbGV0ICRza19tb2RfaW5zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1haW4gbW9kdWxlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYXQgdGhlIGVuZC5cbiAgICBsZXQgbW9kID0ge307XG4gICAgbGV0IG5vbmUgPSBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgXG4gICAgbGV0IHByaW9yID0gbnVsbDtcbiAgICBtb2QudGltZWl0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ0aW1laXRcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChwcmlvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gRGF0ZS5ub3coKSAtIHByaW9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobmFtZSksIGRpZmZlcmVuY2UvMTAwMCk7XG4gICAgICAgIHByaW9yID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGZlZWRiYWNrIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5sb2cgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGRlYnVnIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5kZWJ1ZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb3ZlcnRzIHRoZSBvdXRwdXQgaW4gdGhlIHN0dWRlbnQgcmVwb3J0IHRvIGEgcHl0aG9uIFxuICAgICAqIGxpc3QgYW5kIHJldHVybnMgaXQuXG4gICAgKiovXG4gICAgbW9kLmdldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQubWFwKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udG9Ta3VscHQoKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KG91dHB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGUgb3V0cHV0LCBwYXJ0aWN1bGFybHkgdXNlZnVsIGlmIHRoZSBzdHVkZW50XG4gICAgICogY29kZSBpcyBnb2luZyB0byBiZSByZXJ1bi5cbiAgICAgKi9cbiAgICBtb2QucmVzZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInJlc2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ub3V0cHV0LnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnF1ZXVlX2lucHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInF1ZXVlX2lucHV0XCIsIGFyZ3VtZW50cywgMSwgSW5maW5pdHkpO1xuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBhcmdzW2ldO1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImlucHV0XCIsIFwic3RyaW5nXCIsIFNrLmJ1aWx0aW4uY2hlY2tTdHJpbmcoaW5wdXQpKTtcbiAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goU2suZmZpLnJlbWFwVG9KcyhpbnB1dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X3Byb2dyYW0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Byb2dyYW1cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInZlcmlmaWVyXCJdLmNvZGUpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC50cmFjZV9saW5lcyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5saW5lcztcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW9kLmdldF9zdHVkZW50X2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW25vbmUsIG5vbmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bXCJsaW5lXCJdID0gZXJyb3IudHJhY2ViYWNrWzBdLmxpbmVubztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb24gPSBTay5mZmkucmVtYXBUb1B5KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbZXJyb3IsIHBvc2l0aW9uXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIG1vZC5oYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiAhU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2VzcyAmJiBcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvciAmJlxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLnRwJG5hbWUgPT09IFwiVGltZUxpbWl0RXJyb3JcIjtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgYmFja3VwVGltZSA9IHVuZGVmaW5lZDtcbiAgICBtb2QubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgYmFja3VwVGltZSA9IFNrLmV4ZWNMaW1pdDtcbiAgICAgICAgaWYgKFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1vZC51bmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInVubGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gYmFja3VwVGltZTtcbiAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2Quc3VwcHJlc3Nfc2Nyb2xsaW5nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInN1cHByZXNzX3Njcm9sbGluZ1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIFxuICAgIC8qXG4gICAgZGVmIGhpc3Qoc2VsZiwgZGF0YSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnSGlzdG9ncmFtJywgJ3ZhbHVlcyc6IGRhdGEsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgcGxvdChzZWxmLCB4cywgeXM9Tm9uZSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgaWYgeXMgPT0gTm9uZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiByYW5nZShsZW4oeHMpKSwgJ3knOiB4cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICAgICBlbHNlOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgc2NhdHRlcihzZWxmLCB4cywgeXMsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ1NjYXR0ZXInLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgKi9cbiAgICBtb2QuZ2V0X3Bsb3RzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wbG90c1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dHMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0cyA9IG91dHB1dHMuZmlsdGVyKGZ1bmN0aW9uKG91dHB1dCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LnR5cGUgPT09IFwicGxvdFwiO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcImRhdGFcIjogZ3JhcGgubWFwKGZ1bmN0aW9uKHBsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bsb3QgPSB7IFwidHlwZVwiOiBwbG90LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3QudHlwZSA9PT0gXCJsaW5lXCIgfHwgcGxvdC50eXBlID09PSBcInNjYXR0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInhcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieVwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi55OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbG90LnR5cGUgPT09IFwiaGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1widmFsdWVzXCJdID0gcGxvdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQbG90O1xuICAgICAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgICAgICBcInhsYWJlbFwiOiBcIlwiLCBcInlsYWJlbFwiOiBcIlwiLCBcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFwibGVnZW5kXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkob3V0cHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIFByb3ZpZGVzIGBzdHVkZW50YCBhcyBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgdGhhdCB0aGUgc3R1ZGVudCBkZWNsYXJlZC5cbiAgICBtb2QuU3R1ZGVudERhdGEgPSBTay5taXNjZXZhbC5idWlsZENsYXNzKG1vZCwgZnVuY3Rpb24oJGdibCwgJGxvYykge1xuICAgICAgICAkbG9jLl9faW5pdF9fID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICAvL3NlbGYuZGF0YSA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0RpY3QgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIFNrLmFic3RyLnNhdHRyKHNlbGYsIFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSwgbmV3RGljdCwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLm1vZHVsZSA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnJlc3VsdHM7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0gc2VsZi5tb2R1bGUuJGQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEaWN0Lm1wJGFzc19zdWJzY3JpcHQoU2suZmZpLnJlbWFwVG9QeShrZXkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRsb2MuZ2V0X25hbWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbmFtZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTay5mZmkucmVtYXBUb1B5KHByb3BlcnR5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAkbG9jLmdldF92YWx1ZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF92YWx1ZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNlbGYubW9kdWxlW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtb2Q7XG59O1xuIiwiLyoqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBpbnRlcmZhY2luZyB3aXRoIHRoZSBMb2NhbFN0b3JhZ2UuIFRoZSBMb2NhbFN0b3JhZ2VcbiAqIGJyb3dzZXIgQVBJIGFsbG93cyBmb3Igb2ZmbGluZSBzdG9yYWdlLiBUaGF0IEFQSSBpcyB2ZXJ5IHVuc29waGlzdGljYXRlZCxcbiAqIGFuZCBpcyBlc3NlbnRpYWxseSBhIGxhbWUga2V5LXZhbHVlIHN0b3JlLiBUaGlzIG9iamVjdCBzaXRzIG9uIHRvcFxuICogYW5kIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHVzZWZ1bCB1dGlsaXRpZXMsIGluY2x1ZGluZyBydWRpbWVudGFyeWNhY2hlXG4gKiBjYWNoZSBleHBpcmF0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0xvY2FsU3RvcmFnZVdyYXBwZXJ9XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gQSBuYW1lc3BhY2UgdG8gdXNlIGluIGdyb3VwaW5nIGFjY2VzcyB0byBsb2NhbHN0b3JhZ2UuIFRoaXMga2VlcHMgYWNjZXNzIGNsZWFuIGFuZCBvcmdhbml6ZWQsIHdoaWxlIGFsc28gbWFraW5nIGl0IHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlV3JhcHBlcihuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbn1cbi8qKlxuICogQSBtZXRob2QgZm9yIGFkZGluZyBhIGtleS92YWx1ZSBwYWlyIHRvIExvY2FsU3RvcmFnZS5cbiAqIE5vdGUgdGhhdCBib3RoIHBhcmFtZXRlcnMgbXVzdCBiZSBzdHJpbmdzIChKU09OLnN0cmluZ2lmeSBpcyB5b3VyIGZyaWVuZCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9ICBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIsIHZhbHVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIikpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKiBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZC5cbiAqIFRoaXMgZGVmYXVsdCB3aWxsIGJlIHNldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWx1ZSAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZS4gTXVzdCBiZSBhIHN0cmluZy5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBnaXZlbiBrZXkgaXMgaW4gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHRlc3QgZXhpc3RlbmNlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBzZXJ2ZXIgaGFzIHRoZSBuZXdlciB2ZXJzaW9uLiBUaGlzIGZ1bmN0aW9uXG4gKiBhc3N1bWVzIHRoYXQgdGhlIHNlcnZlciB0cmlwIHRha2VzIGFib3V0IDUgc2Vjb25kcy4gVGhpcyBtZXRob2RcbiAqIGlzIGxhcmdlbHkgZGVwcmVjYXRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBjaGVjay5cbiAqIEBwYXJhbSB7SW50ZWdlcn0gc2VydmVyX3RpbWUgLSBUaGUgc2VydmVyJ3MgdGltZSBhcyBhbiBlcG9jaCAoaW4gbWlsbGlzZWNvbmRzKVxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5pc19uZXcgPSBmdW5jdGlvbihrZXksIHNlcnZlcl90aW1lKSB7XG4gICAgdmFyIHN0b3JlZF90aW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U3RlcDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAvIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICg8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj4pXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAkcm9vdC52aWV3RXhhY3RWYWx1ZSh0eXBlLCBleGFjdF92YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1uZXctd2luZG93Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICAgIFxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgIT09IFwiX19uYW1lX19cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIl9fZG9jX19cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIl9fcGFja2FnZV9fXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gVHJhY2UucGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB7XCJuYW1lXCI6IHByb3BlcnR5LCBcInR5cGVcIjogXCJVbmtub3duXCIsIFwidmFsdWVcIjogdmFsdWUudG9TdHJpbmcoKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBTay5idWlsdGluLm1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzLnB1c2godmFsdWUuJGQuX19uYW1lX18udik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XCJwcm9wZXJ0aWVzXCI6IHJlc3VsdCwgXCJtb2R1bGVzXCI6IG1vZHVsZXN9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBTa3VscHQgdmFsdWUgaW50byBhIG1vcmUgZWFzaWx5IHByaW50YWJsZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSB0aGUgc2t1bHB0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZ1bmM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFyZ3VtZW50czogXCIrdmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzLmpvaW4oXCIsIFwiKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBObyBhcmd1bWVudHNcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5tb2R1bGU6IHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uc3RyOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNxJGxlbmd0aCA8PSAyMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge2FueXRoaW5nfSBuZWVkbGUgLSBUaGUgZWxlbWVudCB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7QXJyYXl9IGhheXN0YWNrIC0gVGhlIGxpc3QgdG8gc2VhcmNoLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCBleGlzdHNcbiAqL1xuZnVuY3Rpb24gYXJyYXlDb250YWlucyhuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYW4gYXJyYXksIHByZXNlcnZpbmcgb3JkZXIuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKiBDb3VydGVzeTpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1ODQzNzAvaG93LXRvLW1lcmdlLXR3by1hcnJheXMtaW4tamF2YXNjcmlwdC1hbmQtZGUtZHVwbGljYXRlLWl0ZW1zXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gdW5pcXVpZnkuIEVsZW1lbnRzIGNvbXBhcmVkIHdpdGggPT09LlxuICovXG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHZhciBhID0gYXJyYXkuY29uY2F0KCk7XG4gICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IodmFyIGo9aSsxOyBqPGEubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGlmKGFbaV0gPT09IGFbal0pIHthLnNwbGljZShqLS0sIDEpO31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBleHRlbmRpbmcgYW4gYXJyYXkgYmFzZWRcbiAqIG9uIGFuIFwiYWRkQXJyYXlcIiBhbmQgXCJyZW1vdmVBcnJheVwiLiBBbnkgZWxlbWVudFxuICogZm91bmQgaW4gcmVtb3ZlQXJyYXkgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaXJzdCBhcnJheVxuICogYW5kIGFsbCB0aGUgZWxlbWVudHMgb2YgYWRkQXJyYXkgYXJlIGFkZGVkLlxuICogQW55IGR1cGxpY2F0ZSBpdGVtcyBhcmUgcmVtb3ZlZC5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIHRoZSBhcnJheSB0byBtYW5pcHVsYXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhZGRBcnJheSAtIHRoZSBlbGVtZW50cyB0byBhZGQgdG8gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSByZW1vdmVBcnJheSAtIHRoZSBlbGVtZW50cyB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQXJyYXkoYXJyYXksIGFkZEFycmF5LCByZW1vdmVBcnJheSkge1xuICAgIHZhciBjb3B5QXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlQXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5VW5pcXVlKGNvcHlBcnJheS5jb25jYXQoYWRkQXJyYXkpKTtcbn1cblxuLyoqXG4gKiBEZWVwbHkgY2xvbmVzIGEgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlIEEgbm9kZSB0byBjbG9uZVxuICogQHJldHVybiB7Tm9kZX0gQSBjbG9uZSBvZiB0aGUgZ2l2ZW4gbm9kZSBhbmQgYWxsIGl0cyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgIC8vIElmIHRoZSBub2RlIGlzIGEgdGV4dCBub2RlLCB0aGVuIHJlLWNyZWF0ZSBpdCByYXRoZXIgdGhhbiBjbG9uZSBpdFxuICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT0gMyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiBcbiAgICAvLyBSZWN1cnNlICAgICBcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY2hpbGQpIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgICBcbiAgICByZXR1cm4gY2xvbmU7XG59XG5cbi8qKlxuICogSW5kZW50cyB0aGUgZ2l2ZW4gc3RyaW5nIGJ5IDQgc3BhY2VzLiBUaGlzIGNvcnJlY3RseSBoYW5kbGVzIG11bHRpLWxpbmUgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCBmb3VyIHNwYWNlcyBhZGRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgbmV3IGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKD89LikvZ20sIFwiICAgIFwiKTtcbn1cblxuLyoqXG4gKiBUdXJucyBzcGFjZXMgaW50byB1bmRlcnNjb3JlcyBpbiB0aGUgc3RyaW5nLCBtYWtlcyBpdCBsb3dlcmNhc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBbYG1pbmAsIGBtYXhgXS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgaW50ZWdlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSBpbnRlZ2VyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gaW50ZWdlci5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xufVxuXG4vKipcbiAqIEVuY29kZXMgc29tZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHNhZmVseSB3cml0dGVuIGludG8gYW4gSFRNTCBib3guXG4gKiBUaGlzIGluY2x1ZGVzIHJlcGxhY2luZyBzcGVjaWFsIEhUTUwgY2hhcmFjdGVycyAoJiwgPCwgPiwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSB0ZXh0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEhUTUwtc2FmZSB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSFRNTChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKTtcbn1cblxuLyoqXG4gKiBTaHVmZmxlIHRoZSBibG9ja3MgaW4gdGhlIHdvcmtzcGFjZVxuICovXG5pZiAodHlwZW9mIEJsb2NrbHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBCbG9ja2x5LldvcmtzcGFjZVN2Zy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWV0cmljcyA9IHRoaXMuZ2V0TWV0cmljcygpO1xuICAgICAgICB2YXIgd2lkdGggPSBtZXRyaWNzLnZpZXdXaWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLnZpZXdIZWlnaHQ7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmdldFRvcEJsb2NrcyhmYWxzZSk7XG4gICAgICAgIHZhciB5ID0gNSwgeCA9IDAsXG4gICAgICAgICAgICBtYXhpbWFsX2luY3JlYXNlID0gaGVpZ2h0L2Jsb2Nrcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIEdldCBhIGJsb2NrXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IGJsb2NrLmdldFJlbGF0aXZlVG9TdXJmYWNlWFkoKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IC1wcm9wZXJ0aWVzLngrcmFuZG9tSW50ZWdlcigxMCwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2subW92ZUJ5KHgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC1wcm9wZXJ0aWVzLnkreSk7XG4gICAgICAgICAgICB5ID0geSArIHJhbmRvbUludGVnZXIoNSwgbWF4aW1hbF9pbmNyZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudHMgZnJvbSBvbmUgYXJyYXkgdG8gYW5vdGhlciBiYXNlZCBvbiBhIGNvbmRpdGlvbmFsIGNoZWNrLlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzE4ODc5NjcvamF2YXNjcmlwdC1tb3ZlLW9iamVjdHMtZnJvbS1vbmUtYXJyYXktdG8tYW5vdGhlci1iZXN0LWFwcHJvYWNoXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyhzb3VyY2UsIHRhcmdldCwgbW92ZUNoZWNrKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzb3VyY2VbaV07XG4gICAgICAgIGlmIChtb3ZlQ2hlY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==