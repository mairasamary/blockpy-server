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

/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./history */ "./src/history.js");
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
          onChange: ko.observable(configuration["assignment.on_change"] || null),
          onEval: ko.observable(configuration["assignment.on_eval"] || null),
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
          "public": ko.observable(configuration["assignment.public"]),
          hidden: ko.observable(configuration["assignment.hidden"]),
          ipRanges: ko.observable(configuration["assignment.ip_ranges"]),
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
          instructor: ko.observable(this.getSetting("display.instructor", "false").toString() === "true"),

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
           * Whether or not History mode is engaged.
           * @type {bool}
           */
          historyMode: ko.observable(false),

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
           * The height to use for the console.
           *    If null, then let the height remain unchanged
           *    If a number, then the
           */
          previousConsoleHeight: ko.observable(null),
          currentConsoleHeight: ko.observable(null),

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
            lastStep: ko.observable(null),
            // integer
            currentLine: ko.observable(null),
            lastLine: ko.observable(0),
            // array of simple objects
            currentTraceData: ko.observableArray([]),
            // integer
            currentTraceStep: ko.observable(0),
            // Actual execution results
            results: null,
            globals: ko.observable(null)
          },
          instructor: {
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
      this.resetInterface();
      var wasServerConnected = this.model.configuration.serverConnected();
      this.model.configuration.serverConnected(false);
      var assignment = data.assignment;
      this.model.assignment.id(assignment.id);
      this.model.assignment.version(assignment.version);
      this.model.assignment.courseId(assignment.course_id);
      this.model.assignment.forkedId(assignment.forked_id);
      this.model.assignment.forkedVersion(assignment.forked_version);
      this.model.assignment.hidden(assignment.hidden);
      this.model.assignment.reviewed(assignment.reviewed);
      this.model.assignment["public"](assignment["public"]);
      this.model.assignment.type(assignment.type);
      this.model.assignment.url(assignment.url);
      this.model.assignment.ipRanges(assignment.ip_ranges);
      this.model.assignment.instructions(assignment.instructions);
      this.model.assignment.name(assignment.name);
      this.model.assignment.onChange(assignment.on_change || null);

      if (assignment.on_change && !this.components.fileSystem.files_["!on_change.py"]) {
        this.components.fileSystem.newFile("!on_change.py");
      }

      this.model.assignment.onEval(assignment.on_eval || null);

      if (assignment.on_eval && !this.components.fileSystem.files_["!on_eval.py"]) {
        this.components.fileSystem.newFile("!on_eval.py");
      }

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
          }),
          hideEvaluate: ko.pureComputed(function () {
            return model.assignment.settings.hideEvaluate() || !model.execution.student.globals() || model.status.onExecution() === server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].ACTIVE;
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

              case "instructions":
                return "label-instructions";

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
              case "instructions":
                return "Instructions";

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

            if (!traceData || step === null) {
              return "No trace";
            }

            if (step === 0) {
              return "Before run";
            } else if (step === lastStep) {
              return "Finished run";
            } else {
              // TODO: why are these numbers wonky?
              return "Line " + (traceData[step].line - 1);
            }
          }),
          first: function first() {
            model.execution.student.currentTraceStep(0);
          },
          backward: function backward() {
            var previous = Math.max(0, model.execution.student.currentTraceStep() - 1);
            model.execution.student.currentTraceStep(previous);
          },
          forward: function forward() {
            var next = Math.min(model.execution.student.lastStep(), model.execution.student.currentTraceStep() + 1);
            model.execution.student.currentTraceStep(next);
          },
          last: function last() {
            model.execution.student.currentTraceStep(model.execution.student.lastStep());
          },
          data: ko.pureComputed(function () {
            var step = model.execution.student.currentTraceStep();
            var lastStep = model.execution.student.lastStep();
            var traceData = model.execution.student.currentTraceData();

            if (!traceData) {
              return [];
            }

            switch (step) {
              case 0:
                return [];

              case lastStep:
                return traceData[step - 1];

              default:
                return traceData[step];
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
                return model.assignment.onEval() !== null;

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
            self.components.server.logEvent("X-File.Reset", "", "", "", "answer.py");
            model.submission.code(model.assignment.startingCode());
            model.submission.extraFiles(model.assignment.extraStartingFiles().map(function (file) {
              var filename = file.filename().substr(1);
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
            },
            updateMode: function updateMode(newMode) {
              self.components.server.logEvent("X-View.Change", "", "", newMode, model.display.filename());
              model.display.pythonMode(newMode);

              if (model.display.filename() === "answer.py") {
                self.components.pythonEditor.oldPythonMode = newMode;
              }
            },
            isHistoryAvailable: ko.pureComputed(function () {
              return model.ui.server.isEndpointConnected("loadHistory");
            }),
            turnOffHistoryMode: function turnOffHistoryMode() {
              self.components.pythonEditor.updateEditor();
              self.components.pythonEditor.setReadOnly(false);
              model.display.historyMode(false);
            },
            turnOnHistoryMode: function turnOnHistoryMode() {
              self.components.server.loadHistory(function (response) {
                if (response.success) {
                  self.components.history.load(response.history);
                  model.display.historyMode(true);
                  self.components.pythonEditor.setReadOnly(true);
                } else {
                  self.components.dialog.ERROR_LOADING_HISTORY();
                }
              });
            },
            toggleHistoryMode: function toggleHistoryMode() {
              if (model.display.historyMode()) {
                model.ui.editors.python.turnOffHistoryMode();
              } else {
                model.ui.editors.python.turnOnHistoryMode();
              }
            },
            history: {
              start: function start() {
                self.components.history.moveToStart();
              },
              previous: function previous() {
                self.components.history.movePrevious();
              },
              next: function next() {
                self.components.history.moveNext();
              },
              mostRecent: function mostRecent() {
                self.components.history.moveToMostRecent();
              },
              use: function use() {
                self.components.history.use();
              }
            }
          },
          settings: {
            save: function save() {
              return self.components.server.saveAssignment();
            }
          }
        },
        execute: {
          run: function run() {
            return self.components.engine.run();
          },
          evaluate: function evaluate() {
            return self.components.engine.evaluate();
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
      components.trace = new _trace__WEBPACK_IMPORTED_MODULE_11__["BlockPyTrace"](main);
      components.console = new _console__WEBPACK_IMPORTED_MODULE_12__["BlockPyConsole"](main, container.find(".blockpy-console"));
      components.engine = new engine_js__WEBPACK_IMPORTED_MODULE_10__["BlockPyEngine"](main);
      components.fileSystem = new _files__WEBPACK_IMPORTED_MODULE_8__["BlockPyFileSystem"](main);
      components.editors = new editors_js__WEBPACK_IMPORTED_MODULE_4__["Editors"](main, container.find(".blockpy-editor"));
      components.pythonEditor = this.components.editors.byName("python");
      components.server = new server_js__WEBPACK_IMPORTED_MODULE_6__["BlockPyServer"](main);
      components.corgis = new _corgis__WEBPACK_IMPORTED_MODULE_16__["BlockPyCorgis"](main);
      components.history = new _history__WEBPACK_IMPORTED_MODULE_17__["BlockPyHistory"](main, container.find(".blockpy-history-toolbar"));
    }
  }, {
    key: "start",
    value: function start() {
      this.model.display.filename("answer.py");
    }
  }, {
    key: "resetInterface",
    value: function resetInterface() {
      this.components.engine.reset();
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


var START_EVAL_HTML = "\n<button type=\"button\" class=\"btn btn-sm btn-outline float-right blockpy-btn-eval\">\n    Evaluate\n</button>";
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
  START_EVAL: "start_eval",
  VALUE: "value",
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
    this.visible = !main.model.display.mutePrinter();
    this.index = 0;
  }

  _createClass(ConsoleLine, [{
    key: "toSkulpt",
    value: function toSkulpt() {
      return Sk.ffi.remapToPy(this.content);
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.html.remove();
    }
  }]);

  return ConsoleLine;
}();

var ConsoleLineTurtle =
/*#__PURE__*/
function (_ConsoleLine) {
  _inherits(ConsoleLineTurtle, _ConsoleLine);

  // TODO: Capture turtle commands for tracing purposes
  function ConsoleLineTurtle(main) {
    var _this;

    _classCallCheck(this, ConsoleLineTurtle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineTurtle).call(this, main, ConsoleLineType.TURTLE));

    _this.html.addClass("blockpy-console-turtle-output");

    return _this;
  }

  _createClass(ConsoleLineTurtle, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        where.prepend(this.html);
        this.html[0].scrollIntoView({
          behavior: "smooth"
        }); //this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineTurtle;
}(ConsoleLine);

var ConsoleLineImage =
/*#__PURE__*/
function (_ConsoleLine2) {
  _inherits(ConsoleLineImage, _ConsoleLine2);

  function ConsoleLineImage(main, content) {
    var _this2;

    _classCallCheck(this, ConsoleLineImage);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineImage).call(this, main, ConsoleLineType.IMAGE, content));

    _this2.html.addClass("blockpy-console-image-output");

    return _this2;
  }

  _createClass(ConsoleLineImage, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        console.log(this.content);
        this.html.append(this.content);
        where.append(this.html); //this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineImage;
}(ConsoleLine);

var ConsoleLinePlot =
/*#__PURE__*/
function (_ConsoleLine3) {
  _inherits(ConsoleLinePlot, _ConsoleLine3);

  function ConsoleLinePlot(main, content) {
    var _this3;

    _classCallCheck(this, ConsoleLinePlot);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLinePlot).call(this, main, ConsoleLineType.PLOT, content));

    _this3.html.addClass("blockpy-console-plot-output");

    return _this3;
  }

  _createClass(ConsoleLinePlot, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        where.append(this.html); //this.html.tooltip();
      }
    }
  }]);

  return ConsoleLinePlot;
}(ConsoleLine);

var ConsoleLineText =
/*#__PURE__*/
function (_ConsoleLine4) {
  _inherits(ConsoleLineText, _ConsoleLine4);

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

var ConsoleLineValue =
/*#__PURE__*/
function (_ConsoleLine5) {
  _inherits(ConsoleLineValue, _ConsoleLine5);

  function ConsoleLineValue(main, content) {
    _classCallCheck(this, ConsoleLineValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineValue).call(this, main, ConsoleLineType.VALUE, content));
  }

  _createClass(ConsoleLineValue, [{
    key: "render",
    value: function render(where) {
      if (this.visible) {
        var encodedText = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["encodeHTML"])(this.content);
        var lineData = $("<code></code>", {
          "html": encodedText
        });
        this.html.append(lineData);
        where.append(this.html);
        this.html.tooltip();
      }
    }
  }]);

  return ConsoleLineValue;
}(ConsoleLine);

var ConsoleLineInput =
/*#__PURE__*/
function (_ConsoleLine6) {
  _inherits(ConsoleLineInput, _ConsoleLine6);

  function ConsoleLineInput(main, promptMessage) {
    var _this4;

    _classCallCheck(this, ConsoleLineInput);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineInput).call(this, main, ConsoleLineType.INPUT, promptMessage));
    _this4.visible = true;
    return _this4;
  }
  /**
   * Creates an Input box for receiving input() from the user.
   *
   */


  _createClass(ConsoleLineInput, [{
    key: "render",
    value: function render(where) {
      // Perform any necessary cleaning
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
      var _this5 = this;

      var resolveOnClick;
      var submittedPromise = new Promise(function (resolve) {
        resolveOnClick = resolve;
      });

      var submitForm = function submitForm() {
        resolveOnClick(input.val());
        input.prop("disabled", true);
        button.prop("disabled", true);

        _this5.html.tooltip();
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

var ConsoleLineEvaluate =
/*#__PURE__*/
function (_ConsoleLineInput) {
  _inherits(ConsoleLineEvaluate, _ConsoleLineInput);

  function ConsoleLineEvaluate(main) {
    _classCallCheck(this, ConsoleLineEvaluate);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineEvaluate).call(this, main, "Evaluate:"));
  }

  return ConsoleLineEvaluate;
}(ConsoleLineInput);

var ConsoleLineStartEvaluate =
/*#__PURE__*/
function (_ConsoleLine7) {
  _inherits(ConsoleLineStartEvaluate, _ConsoleLine7);

  function ConsoleLineStartEvaluate(main) {
    var _this6;

    _classCallCheck(this, ConsoleLineStartEvaluate);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ConsoleLineStartEvaluate).call(this, main, ConsoleLineType.START_EVAL));

    _this6.html.append($(START_EVAL_HTML));

    _this6.html.click(function () {
      _this6.main.model.ui.execute.evaluate();

      _this6["delete"]();
    });

    return _this6;
  }

  _createClass(ConsoleLineStartEvaluate, [{
    key: "render",
    value: function render(where) {
      where.append(this.html);
    }
  }]);

  return ConsoleLineStartEvaluate;
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
    this.MINIMUM_WIDTH = 200;
    this.MINIMUM_HEIGHT = 200;
    this.DEFAULT_HEIGHT = this.printerTag.height(); // Let CSS define this

    this.main.model.display.previousConsoleHeight(this.DEFAULT_HEIGHT);
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
      this.printerTag.empty(); // If the user hasn't changed the console size, we'll reset it

      if (this.main.model.display.previousConsoleHeight() === this.printerTag.height()) {
        this.printerTag.height(this.DEFAULT_HEIGHT);
        this.main.model.display.previousConsoleHeight(this.printerTag.height());
      }

      this.turtleLine = null;
      Sk.TurtleGraphics = {
        target: this.getTurtleLine.bind(this),
        width: this.getWidth(),
        height: this.getHeight(),
        assets: this.loadAsset.bind(this)
      };
    }
  }, {
    key: "loadAsset",
    value: function loadAsset(name) {
      return name;
    }
  }, {
    key: "getTurtleLine",
    value: function getTurtleLine() {
      if (this.turtleLine === null) {
        this.turtleLine = new ConsoleLineTurtle(this.main);
        this.turtleLine.render(this.printerTag); // If the user hasn't changed the console size, we'll do so

        if (this.main.model.display.previousConsoleHeight() === this.printerTag.height()) {
          var currentPrinterDimension = this.printerTag.width();
          this.printerTag.height(currentPrinterDimension);
          this.main.model.display.previousConsoleHeight(this.printerTag.height());
          Sk.TurtleGraphics.height = currentPrinterDimension - 40;
        }
      }

      return this.turtleLine.html[0];
    } // TODO: turtles should be based on the current width

  }, {
    key: "newTurtle",
    value: function newTurtle() {
      return this;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return Math.max(this.MINIMUM_WIDTH, this.printerTag.width() - 40);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return Math.max(this.MINIMUM_HEIGHT, this.printerTag.height() + 40);
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
  }, {
    key: "printPILImage",
    value: function printPILImage(imageData) {
      this.imageBuffer = new ConsoleLineImage(this.main, imageData.image);
      this.imageBuffer.render(this.printerTag);
      return this.imageBuffer;
    }
  }, {
    key: "printValue",
    value: function printValue(value) {
      var printedValue = new ConsoleLineValue(this.main, value);
      printedValue.render(this.printerTag);
      return printedValue;
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
    key: "evaluate",
    value: function evaluate() {
      this.inputBuffer = new ConsoleLineEvaluate(this.main);
      return this.inputBuffer.render(this.printerTag);
    }
  }, {
    key: "beginEval",
    value: function beginEval() {
      var startEvaluation = new ConsoleLineStartEvaluate(this.main);
      return startEvaluation.render(this.printerTag);
    }
    /**
     * Unconditionally scroll to the bottom of the window.
     *
     */

  }, {
    key: "scrollToBottom",
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
      var datasets = data.blockpy;
      var documentation = root + "blockpy/index.html";
      var start = $("<p>Documentation is available at <a href='".concat(documentation, "' target=_blank>url</a></p>"));
      var body = $("<table></table>", {
        "class": "table table-bordered table-sm table-striped"
      });
      Object.keys(datasets).sort().map(function (name) {
        var sluggedName = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["slug"])(datasets[name].name);
        var titleName = name;
        var btn = $('<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Load</button>');
        var imgSrc = root + "../images/datasets/" + name + "-icon.png";

        if (_this3.loadedDatasets.indexOf(sluggedName) > -1) {
          setButtonLoaded(btn);
        } else {
          btn.click(function () {
            _this3.importDataset(sluggedName, "Data - " + datasets[name].title);

            setButtonLoaded(btn);
          });
        } //let img = `<img src='${imgSrc}' class="corgis-icon">`;


        $("<tr></tr>") //.append($("<td>" + img + "</td>"))
        .append($("<td>" + datasets[name].title + "</td>")).append($("<td>" + datasets[name].overview + "</td>")).append($("<td></td>").append(btn)).appendTo(body);
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
var DIALOG_HTML = "\n    <div class='blockpy-dialog modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-hidden=\"true\"\n         aria-modal=\"true\">\n        <div class='modal-dialog modal-lg' role=\"document\">\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class='modal-body' style='width:100%; height:400px; white-space:pre-wrap'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white' data-dismiss='modal'>Close</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ASSIGNMENT_SETTINGS = [["toolboxLevel", "toolbox_level", "normal", "toolbox", "INCOMPLETE: What level of toolbox to present to the user (hiding and showing categories)."], ["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT, _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"], "The Python editor mode to start in when the student starts the problem."], ["datasets", "datasets", "", "string", "The current list of datasets available on load as a comma-separated string."], ["disableTimeout", "disable_timeout", false, "bool", "If checked, then students code is allowed to run without timeouts (potentially allowing infinite loops)."], ["isParsons", "is_parsons", false, "bool", "If checked, then this is a parson's style question (jumbled)."], ["disableFeedback", "disable_feedback", false, "bool", "If checked, then no instructor scripts are run (e.g., on_run and on_eval)."], ["disableTrace", "disable_trace", false, "bool", "If checked, then the students code will not have its execution traced (no variables recorded, no coverage tracked)."], ["disableEdit", "can_edit", false, "bool", "If checked, then the students' file will not be editable at all."], ["disableBlocks", "can_blocks", false, "bool", "If checked, then the student cannot edit the block interface (although it is visible)."], ["onlyInteractive", "only_interactive", false, "bool", "If checked, the editors are hidden, the program is automatically run, and then the console enters Eval mode (interactive)."], ["onlyUploads", "only_uploads", false, "bool", "If unchecked, then the students' file will not be directly editable (they will have to upload submissions)."], // What menus/feedback to show and hide
["hideFiles", "hide_files", true, "bool", "If checked, then students will not see the View Files toolbar."], ["hideQueuedInputs", "hide_queued_inputs", true, "bool", "INCOMPLETE: If unchecked, then the students can access the queued inputs box (makes repeated debugging easier for the input function)."], ["hideEditors", "hide_editors", false, "bool", "If checked, then all of the editors are hidden."], ["hideAll", "hide_all", false, "bool", "INCOMPLETE: If checked, then the entire interface is hidden."], ["hideEvaluate", "hide_evaluate", false, "bool", "If checked, then the Evaluate button is not shown on the console."], ["hideImportDatasetsButton", "hide_import_datasets_button", true, "bool", "If checked, then students cannot see the import datasets button."], ["hideImportStatements", "hide_import_statements", false, "bool", "INCOMPLETE: If checked, certain kinds of import statements (matplotlib, turtle, datasets) are not shown in the block interface."], ["hideCoverageButton", "hide_coverage_button", false, "bool", "INCOMPLETE: If checked, the coverage button is not shown."]];

function getDocumentation(name) {
  for (var i = 0; i < ASSIGNMENT_SETTINGS.length; i++) {
    if (ASSIGNMENT_SETTINGS[i][0] === name) {
      return ASSIGNMENT_SETTINGS[i][4];
    }
  }

  return "Documentation not found for field";
}

function makeStartViewTab(name, icon, mode) {
  return "<label class=\"btn btn-outline-secondary blockpy-mode-set-blocks\"\n                data-bind=\"css: {active: assignment.settings.startView() === '".concat(mode, "'},\n                           click: assignment.settings.startView.bind($data, '").concat(mode, "')\">\n                <span class='fas fa-").concat(icon, "'></span>\n                <input type=\"radio\" name=\"blockpy-start-view-set\" autocomplete=\"off\" checked> ").concat(name, "\n            </label>");
}

var ASSIGNMENT_SETTINGS_BOOLEAN_COMPONENTS_HTML = ASSIGNMENT_SETTINGS // Only handle the simple booleans this way
.filter(function (setting) {
  return setting[3] === "bool";
}).map(function (setting) {
  var prettyName = setting[1].split("_").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  return "\n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-".concat(setting[0], "\">").concat(prettyName, "</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-").concat(setting[0], "\"\n                    data-bind=\"checked: assignment.settings.").concat(setting[0], "\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    ").concat(setting[4], "\n                </small>\n            </div>\n        </div>\n        ");
}).join("\n\n");
var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div class=\"blockpy-view-settings\">\n    \n    <form>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-12 mx-auto\">\n                <button type=\"button\" class=\"btn btn-success\"\n                    data-bind=\"click: ui.editors.settings.save\">Save changes</button>\n            </div>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-name\" class=\"col-sm-2 col-form-label text-right\">Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-name\"\n                data-bind=\"value: assignment.name\">\n                <small class=\"form-text text-muted\">\n                    The student-facing name of the assignment. Assignments within a group are ordered alphabetically\n                    by their name, so you may want to use a naming scheme like \"#43.5) Whatever\".\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-url\" class=\"col-sm-2 col-form-label text-right\">URL:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-url\"\n                data-bind=\"value: assignment.url\">\n                <small class=\"form-text text-muted\">\n                    The course-unique URL that can be used to consistently refer to this assignment. \n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-public\">Public:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-public\"\n                    data-bind=\"checked: assignment.public\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If not public, users outside of the course will not be able to see the assignment in course listings.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-hidden\">Hidden:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-hidden\"\n                    data-bind=\"checked: assignment.hidden\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If hidden, students will not be able to see their grade while working on the assignment.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Reviewed:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-reviewed\"\n                    data-bind=\"checked: assignment.reviewed\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If reviewed, the assignment can be commented upon and regraded by the staff afterwards.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Starting View:</label>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                    ".concat(makeStartViewTab("Blocks", "th-large", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].BLOCK), "\n                    ").concat(makeStartViewTab("Split", "columns", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT), "\n                    ").concat(makeStartViewTab("Text", "align-left", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].TEXT), "\n                 </div>\n            </div>            \n            <div class=\"col-sm-7\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("startView"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-ip-ranges\" class=\"col-sm-2 col-form-label text-right\">IP Ranges:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-ip-ranges\"\n                data-bind=\"value: assignment.ipRanges\">\n                <small class=\"form-text text-muted\">\n                    Provide a comma-separated list of IP Addresses that will be explicitly allowed. If blank,\n                    then all addresses are allowed. If an address starts with <code>^</code> then it it is explicitly\n                    blacklisted, but that can be overridden in turn with a <code>!</code>. Addresses can also\n                    include a bit mask to allow a range of addresses.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-datasets\" class=\"col-sm-2 col-form-label text-right\">Preloaded Datasets:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-datasets\"\n                data-bind=\"value: assignment.settings.datasets\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("datasets"), "\n                </small>\n            </div>\n        </div>\n        \n        ").concat(ASSIGNMENT_SETTINGS_BOOLEAN_COMPONENTS_HTML, "\n    </form>\n    \n    </div>\n");
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

  function AssignmentSettingsView(main, tag) {
    var _this;

    _classCallCheck(this, AssignmentSettingsView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AssignmentSettingsView).call(this, main, tag));
    _this.dirty = false;
    return _this;
  }

  _createClass(AssignmentSettingsView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(AssignmentSettingsView.prototype), "enter", this).call(this, newFilename, oldEditor);

      console.log(this.file);
      this.dirty = false; //TODO: this.updateEditor(this.file.handle());
      // Subscribe to the relevant File
      // this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this));
      // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this); //TODO: this.codeMirror.on("change", this.currentListener);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true; // TODO: Do update

        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true; //this.file.handle(this.codeMirror.value());
        // TODO: Update

        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      //this.currentSubscription.dispose();
      // TODO: update
      //this.codeMirror.off("change", this.currentListener);
      _get(_getPrototypeOf(AssignmentSettingsView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }]);

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
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../history */ "./src/history.js");
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
  return "<label class=\"btn btn-outline-secondary blockpy-mode-set-blocks\"\n                data-bind=\"css: {active: display.pythonMode() === '".concat(mode, "'},\n                           click: ui.editors.python.updateMode.bind($data, '").concat(mode, "')\">\n                <span class='fas fa-").concat(icon, "'></span>\n                <input type=\"radio\" name=\"blockpy-mode-set\" autocomplete=\"off\" checked> ").concat(name, "\n            </label>");
}

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n            ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n            ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n            ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n         </div>\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\"\n                 data-bind=\"click: ui.editors.reset\">\n                 <span class=\"fas fa-sync\"></span> Reset\n              </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                aria-pressed=\"false\"\n                data-bind=\"click: ui.editors.python.toggleHistoryMode,\n                           enable: ui.editors.python.isHistoryAvailable,\n                           css: { active: display.historyMode },\n                           attr: { 'aria-pressed': display.historyMode }\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n    \n    ").concat(_history__WEBPACK_IMPORTED_MODULE_1__["HISTORY_TOOLBAR_HTML"], "\n\n\n    <div class=\"blockpy-python-blockmirror\">\n    </div>\n");
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
    _this.readOnly = false;

    _this.makeSubscriptions();

    _this.oldPythonMode = _this.main.model.display.pythonMode();
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

      var oldFilename = this.filename;

      _get(_getPrototypeOf(PythonEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentBMListener = this.updateHandle.bind(this);
      this.bm.addChangeListener(this.currentBMListener);

      if (newFilename !== "answer.py") {
        if (oldFilename === "answer.py") {
          this.oldPythonMode = this.main.model.display.pythonMode();
        }

        this.main.model.display.pythonMode(DisplayModes.TEXT);

        this.bm.isParsons = function () {
          return false;
        };
      } else {
        this.main.model.display.pythonMode(this.oldPythonMode);
        this.bm.isParsons = this.main.model.assignment.settings.isParsons;
      } //this.bm.blockEditor.workspace.render();
      //this.bm.refresh();
      // TODO: Figure out why this doesn't end up looking right (go to a different editor, come back, and it'll be squished)
      //this.bm.refresh();


      setTimeout(function () {
        return _this3.bm.refresh();
      }, 0);
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      if (newContents === undefined) {
        if (this.file !== null) {
          newContents = this.file.handle();
        } else {
          // Doesn't matter, file was already shut down.
          newContents = "";
        }
      } else if (newContents === null) {
        // We're closing this file
        this.main.components.fileSystem.deleteFileLocally_(this.filename);
        return;
      }

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

        if (!this.main.model.display.historyMode()) {
          this.file.handle(this.bm.getCode());
        }

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

      if (this.main.model.display.historyMode()) {
        this.main.model.ui.editors.python.turnOffHistoryMode();
      }

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
    key: "setReadOnly",
    value: function setReadOnly(isReadOnly) {
      this.readOnly = isReadOnly;
      this.bm.setReadOnly(isReadOnly);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(event) {
      var filename = event.target.fileName;
      var code = event.target.result;

      if (filename.endsWith(".ipynb")) {
        code = convertIpynbToPython(code);
      }

      this.main.components.server.logEvent("X-File.Upload", "", "", code, this.filename);
      this.file.handle(code);
      this.main.components.engine.run(); // TODO: Run code
    }
  }, {
    key: "downloadFile",
    value: function downloadFile() {
      var result = _get(_getPrototypeOf(PythonEditorView.prototype), "downloadFile", this).call(this);

      if (result.name === "answer" && result.extension === ".py") {
        result.name = Object(_abstract_editor__WEBPACK_IMPORTED_MODULE_0__["sluggify"])(this.main.model.assignment.name());
      }

      result.mimetype = "text/x-python";
      this.main.components.server.logEvent("X-File.Download", "", "", "", result.name);
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TEXT_EDITOR_HTML = "\n    <div>\n    <textarea class=\"blockpy-editor-text\"></textarea>\n    </div>\n";

var TextEditorView =
/*#__PURE__*/
function (_AbstractEditor) {
  _inherits(TextEditorView, _AbstractEditor);

  function TextEditorView(main, tag) {
    var _this;

    _classCallCheck(this, TextEditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextEditorView).call(this, main, tag));
    _this.codeMirror = CodeMirror.fromTextArea(tag.find(".blockpy-editor-text")[0], {
      showCursorWhenSelecting: true,
      lineNumbers: true,
      firstLineNumber: 1,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      extraKeys: {
        "Tab": "indentMore",
        "Shift-Tab": "indentLess",
        "Esc": function Esc(cm) {
          if (cm.getOption("fullScreen")) {
            cm.setOption("fullScreen", false);
          } else {
            cm.display.input.blur();
          }
        },
        "F11": function F11(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        }
      }
    });
    _this.dirty = false;
    return _this;
  }

  _createClass(TextEditorView, [{
    key: "enter",
    value: function enter(newFilename, oldEditor) {
      _get(_getPrototypeOf(TextEditorView.prototype), "enter", this).call(this, newFilename, oldEditor);

      this.dirty = false;
      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentListener = this.updateHandle.bind(this);
      this.codeMirror.on("change", this.currentListener);

      if (oldEditor !== this) {
        // Delay so that everything is rendered
        setTimeout(this.codeMirror.refresh.bind(this.codeMirror), 1);
      }
    }
  }, {
    key: "updateEditor",
    value: function updateEditor(newContents) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.codemirror.setValue(newContents);
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
        this.file.handle(this.codeMirror.value());
        this.dirty = false;
      }
    }
  }, {
    key: "exit",
    value: function exit(newFilename, oldEditor, newEditor) {
      // Remove subscriber
      this.currentSubscription.dispose();
      this.codeMirror.off("change", this.currentListener);

      _get(_getPrototypeOf(TextEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }]);

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
      student.currentTraceStep(0);
      student.lastStep(0);
      student.currentLine(null);
      student.currentTraceData.removeAll();
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
      var execution = this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration));

      if (!this.main.model.assignment.settings.disableFeedback()) {
        execution.then(this.onRun.bind(this));
      }
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
      var _this = this;

      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_0__["StatusState"].ACTIVE);
      var evaluationInput = this.main.components.console.evaluate();
      console.log(evaluationInput);
      evaluationInput.then(function (userInput) {
        _this.configuration = _this.configurations.eval.use(_this, userInput);

        var execution = _this.execute().then(_this.configuration.success.bind(_this.configuration), _this.configuration.failure.bind(_this.configuration));

        if (!_this.main.model.assignment.settings.disableFeedback()) {
          execution.then(_this.onEval.bind(_this));
        }
      });
    }
  }, {
    key: "onEval",
    value: function onEval() {
      this.configuration = this.configurations.onEval.use(this);
      this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration)).then(this.evaluate.bind(this));
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.configuration = this.configurations.onChange.use(this);
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this2 = this;

      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_0__["StatusState"].ACTIVE);
      return Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody(_this2.configuration.filename, false, _this2.configuration.code, true);
      });
    }
    /**
     * Activated whenever the Python code changes
     */

  }, {
    key: "on_change",
    value: function on_change() {
      var FILENAME = "on_change"; // Skip if the instructor has not defined anything

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
/*! exports provided: EMPTY_MODULE, Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_MODULE", function() { return EMPTY_MODULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EMPTY_MODULE = "let $builtinmodule = function(mod){ return mod; }";
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
  }, {
    key: "dummyOutSandbox",
    value: function dummyOutSandbox() {
      Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
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
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace */ "./src/trace.js");
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
    value: function use(engine, code) {
      // TODO: fix to be currently added line
      this.main.model.execution.feedback.message("Running...");
      this.filename = "answer";
      this.code = "_ = " + code;
      Sk.afterSingleExecution = null;

      _get(_getPrototypeOf(EvalConfiguration.prototype), "use", this).call(this, engine);

      Sk.retainGlobals = true;
      Sk.globals = this.main.model.execution.student.globals();
      this.main.components.server.logEvent("X-File.Add", "", "", code, "evaluations");
      this.main.components.server.logEvent("Compile", "", "", this.code, "evaluations");
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      var _this = this;

      console.log("Eval success");
      this.main.components.server.logEvent("X-Evaluate.Program", "", "", "", "evaluations");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      this.main.model.execution.student.globals(Sk.globals);
      Sk.globals = {};
      var report = this.main.model.execution.reports;
      var filename = this.filename;
      this.main.model.execution.student.results = module;
      this.main.components.console.printValue(Sk.ffi.remapToJs(module.$d._.$r()));
      return new Promise(function (resolve, reject) {
        //this.step(module.$d, module.$d,-1, 0, filename + ".py");
        _this.lastStep();

        report["student"] = {
          "success": true,
          "trace": _this.engine.executionBuffer.trace,
          "lines": _this.engine.executionBuffer.trace.map(function (x) {
            return x.line;
          }),
          "results": module,
          "output": _this.main.model.execution.output,
          "evaluation": _this.code
        };
        resolve();
      });
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("Eval failure");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED);
      var report = this.main.model.execution.reports;
      this.main.components.server.logEvent("Compile.Error", "", "", error.toString(), "evaluations");
      return new Promise(function (resolve, reject) {
        report["student"] = {
          "success": false,
          "error": error,
          "evaluation": false
        };
        console.error(error);
        resolve();
      });
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
      // TODO: Allow input function to disable the timer, somehow
      // Enable utility mode

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = UTILITY_MODULE_CODE;
      Sk.builtinFiles.files["./_instructor/__init__.js"] = _configurations_js__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      return this;
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (filename === "./answer.py") {
        return this.main.model.submission.code();
      } else if (filename === "./_instructor/on_run.py") {
        return this.main.model.assignment.onRun();
      } else if (filename === "./_instructor/on_eval.py") {
        return this.main.model.assignment.onEval() || "";
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }, {
    key: "input",
    value: function input(promptMessage) {
      return new Promise(function (resolve) {
        resolve(Sk.queuedInput.pop());
      });
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
/*! exports provided: WRAP_INSTRUCTOR_CODE, OnEvalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAP_INSTRUCTOR_CODE", function() { return WRAP_INSTRUCTOR_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnEvalConfiguration", function() { return OnEvalConfiguration; });
/* harmony import */ var _instructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructor */ "./src/engine/instructor.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
/* harmony import */ var _on_run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on_run */ "./src/engine/on_run.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
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
 * @return {string}
 */

var WRAP_INSTRUCTOR_CODE = function WRAP_INSTRUCTOR_CODE(studentCode, instructorCode, quick, isSafe) {
  var safeCode = JSON.stringify(studentCode);
  var indentedCode = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["indent"])(Object(_utilities__WEBPACK_IMPORTED_MODULE_3__["indent"])(isSafe ? studentCode : "None"));
  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = get_student_data()\ncompatibility.set_sandbox(student)\nerror, position = get_student_error()\ncompatibility.raise_exception(error, position)\ncompatibility.run_student = run_student\ncompatibility.get_plots = get_plots\ncompatibility.get_output = get_output\ncompatibility.reset_output = reset_output\ncompatibility.trace_lines = trace_lines\ndef capture_output(func, *args):\n   reset_output()\n   func(*args)\n   return get_output()\ncompatibility.capture_output = capture_output\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n");
};
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

      this.filename = "_instructor.on_eval";
      this.code = this.main.model.assignment.onEval() || "";
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.execution.reports.student.evaluation || "None";
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(_on_run__WEBPACK_IMPORTED_MODULE_2__["NEW_LINE_REGEX"]).length;
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
      lineOffset = instructorCode.split(_on_run__WEBPACK_IMPORTED_MODULE_2__["NEW_LINE_REGEX"]).length - lineOffset;
      report["instructor"] = {
        "compliments": [],
        "filename": "./_instructor/on_eval.py",
        "code": instructorCode,
        "lineOffset": lineOffset //'complete': false // Actually, let's use undefined for now.

      };
      this.code = instructorCode;

      _get(_getPrototypeOf(OnEvalConfiguration.prototype), "use", this).call(this, engine); //Sk.retainGlobals = false;


      Sk.globals = this.main.model.execution.instructor.globals;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      console.log("OnEval success"); // TODO: Actually parse results

      this.main.model.execution.instructor.globals = Sk.globals;
      var results = module.$d.on_eval.$d;
      console.log(module.$d);
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

      if (success && this.main.model.configuration.callbacks.success) {
        this.main.model.configuration.callbacks.success(this.main.model.assignment.id());
      }

      if (!Sk.executionReports.instructor.scrolling) {
        try {
          this.main.components.console.scrollToBottom();
        } catch (e) {}
      }
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("OnEval failure");
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

  return OnEvalConfiguration;
}(_instructor__WEBPACK_IMPORTED_MODULE_0__["InstructorConfiguration"]);

/***/ }),

/***/ "./src/engine/on_run.js":
/*!******************************!*\
  !*** ./src/engine/on_run.js ***!
  \******************************/
/*! exports provided: NEW_LINE_REGEX, WRAP_INSTRUCTOR_CODE, OnRunConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_LINE_REGEX", function() { return NEW_LINE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRAP_INSTRUCTOR_CODE", function() { return WRAP_INSTRUCTOR_CODE; });
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
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.submission.code();
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset;
      report["instructor"] = {
        "compliments": [],
        "filename": "./_instructor/on_run.py",
        "code": instructorCode,
        "lineOffset": lineOffset //'complete': false // Actually, let's use undefined for now.

      };
      this.code = instructorCode;
      Sk.retainGlobals = false;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      // TODO Logging!!!!
      console.log("OnRun success"); // TODO: Actually parse results

      this.main.model.execution.instructor.globals = Sk.globals;
      Sk.globals = {};
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

      if (success && this.main.model.configuration.callbacks.success) {
        this.main.model.configuration.callbacks.success(this.main.model.assignment.id());
      }

      if (!Sk.executionReports.instructor.scrolling) {
        try {
          this.main.components.console.scrollToBottom();
        } catch (e) {}
      }
    }
  }, {
    key: "failure",
    value: function failure(error) {
      console.log("OnRun failure");
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
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./src/server.js");
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
      this.main.components.server.saveFile("answer.py", this.code, null);
      this.main.components.server.logEvent("Compile", "", "", "", "answer.py");

      _get(_getPrototypeOf(RunConfiguration.prototype), "use", this).call(this, engine);

      engine.reset();
      this.updateParse();
      this.main.model.execution.reports["verifier"] = {
        "success": Boolean(this.code.trim()),
        "code": this.code
      };
      Sk.retainGlobals = false;
      return this;
    }
  }, {
    key: "success",
    value: function success(module) {
      var _this = this;

      console.log("Run success");
      this.main.components.server.logEvent("Run.Program", "", "", "", "answer.py");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].READY);
      this.main.model.execution.student.globals(Sk.globals);
      Sk.globals = {};
      var report = this.main.model.execution.reports;
      var filename = this.filename;
      this.main.model.execution.student.results = module;

      if (!this.main.model.assignment.settings.hideEvaluate()) {
        this.main.components.console.beginEval();
      }

      return new Promise(function (resolve, reject) {
        _this.step(module.$d, module.$d, -1, 0, filename + ".py");

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
      console.log("Run failure");
      this.main.model.status.onExecution(_server__WEBPACK_IMPORTED_MODULE_1__["StatusState"].FAILED);
      var report = this.main.model.execution.reports;

      if (report.parser.success && report.verifier.success) {
        this.main.components.server.logEvent("Compile.Error", "", "", error.toString(), "answer.py");
      } else {
        this.main.components.server.logEvent("Run.Program", "ProgramErrorOutput", "", error.toString(), "answer.py");
      }

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

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = _configurations__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
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
    value: function step(variables, locals, lineNumber, columnNumber, filename) {
      if (filename === "answer.py") {
        var currentStep = this.engine.executionBuffer.step;
        var globals = this.main.components.trace.parseGlobals(variables); // TODO: Trace local variables properly
        //console.log(globals, locals);
        //let locals = this.main.components.trace.parseGlobals(locals);
        //Object.assign(globals, locals);

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
          "error": error,
          "empty": true
        };
        console.error(error);
        console.log(this.filename, this.code);
        return false;
      } // Successful parse


      report["parser"] = {
        "success": true,
        "ast": ast,
        "empty": ast.body.length === 0
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
      this.feedbackModel.label(label); // TODO: Instead of tracking student file, let's track the instructor file

      this.main.components.server.logEvent("Intervention", category, label, message, "answer.py"); // Find the first error on a line and report that

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
          last_traceback.lineno -= this.main.model.execution.reports.instructor.lineOffset;
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

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval,\n                           click: ui.files.add.bind($data, '!on_eval.py')\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
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

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: HISTORY_TOOLBAR_HTML, BlockPyHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_TOOLBAR_HTML", function() { return HISTORY_TOOLBAR_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyHistory", function() { return BlockPyHistory; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO: Should disable buttons if we can't activate them.
var HISTORY_TOOLBAR_HTML = "\n<div class=\"blockpy-history-toolbar col-md-12\" data-bind=\"visible: display.historyMode\">\n\n    <form class=\"form-inline\">\n        <button class=\"blockpy-history-start btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.start\">\n            <span class='fas fa-step-backward'></span> Start\n        </button>\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.previous\">\n            <span class='fas fa-backward'></span> Previous\n        </button>\n        <select class=\"blockpy-history-selector form-control custom-select mr-2\" aria-title=\"History Selector\">\n        </select>\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.use\">\n            <span class='fas fa-file-import'></span> Use\n        </button>\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.next\">\n            <span class='fas fa-forward'></span> Next\n        </button>\n        <button class=\"btn btn-outline-secondary\" type=\"button\"\n            data-bind=\"click: ui.editors.python.history.mostRecent\">\n            <span class='fas fa-step-forward'></span> Most Recent\n        </button>\n    </form>\n</div>\n";
/**
 * An object for displaying the user's coding logs (their history).
 * A lightweight component, its only job is to open a dialog.
 *
 * @constructor
 * @this {BlockPyHistory}
 * @param {Object} main - The main BlockPy instance
 */

var BlockPyHistory =
/*#__PURE__*/
function () {
  function BlockPyHistory(main, tag) {
    _classCallCheck(this, BlockPyHistory);

    this.main = main;
    this.tag = tag;
    this.currentId = null;
    this.history = [];
    this.editEvents = [];
  }

  _createClass(BlockPyHistory, [{
    key: "load",
    value: function load(history) {
      var _this = this;

      this.history = history;
      this.editEvents = [];
      this.selector = $(".blockpy-history-selector").empty();
      var editId = 0;
      history.filter(function (entry) {
        return !entry.file_path.startsWith("_instructor.") && entry.event_type !== "Compile" && entry.event_type !== "Intervention" && (!_this.main.model.assignment.hidden() || entry.event_type !== "X-Submission.LMS");
      }).forEach(function (entry, index) {
        var event_type = REMAP_EVENT_TYPES[entry.event_type] || entry.event_type;
        var displayed = prettyPrintDateTime(entry.client_timestamp) + " - " + event_type;
        var disable = entry.event_type !== "File.Edit";
        var option = $("<option></option>", {
          text: displayed,
          disabled: disable
        });

        if (_this.isEditEvent(entry)) {
          option.attr("value", editId);

          _this.editEvents.push(entry);

          editId += 1;
        }

        _this.selector.append(option);
      });
      this.selector.val(Math.max(0, editId - 1));
      this.selector.change(function (evt) {
        _this.updateEditor();
      });
    }
  }, {
    key: "moveToStart",
    value: function moveToStart() {
      this.selector.val(0);
      this.updateEditor();
    }
  }, {
    key: "movePrevious",
    value: function movePrevious() {
      var currentId = parseInt(this.selector.val(), 10);
      this.selector.val(Math.max(0, currentId - 1));
      this.updateEditor();
    }
  }, {
    key: "moveNext",
    value: function moveNext() {
      var currentId = parseInt(this.selector.val(), 10);
      this.selector.val(Math.min(this.editEvents.length - 1, currentId + 1));
      this.updateEditor();
    }
  }, {
    key: "moveToMostRecent",
    value: function moveToMostRecent() {
      this.selector.val(this.editEvents.length - 1);
      this.updateEditor();
    }
  }, {
    key: "updateEditor",
    value: function updateEditor() {
      if (this.editEvents.length) {
        var currentId = parseInt(this.selector.val(), 10);
        this.main.components.pythonEditor.bm.setCode(this.editEvents[currentId].message);
      }
    }
  }, {
    key: "use",
    value: function use() {
      if (this.editEvents.length) {
        var currentId = parseInt(this.selector.val(), 10);
        var code = this.editEvents[currentId].message;
        this.main.model.ui.editors.python.turnOffHistoryMode();
        this.main.components.pythonEditor.file.handle(code);
      }
    }
  }, {
    key: "isEditEvent",
    value: function isEditEvent(entry) {
      return (entry.event_type === "File.Edit" || entry.event_type === "File.Create") && this.main.model.display.filename() === entry.file_path;
    }
  }]);

  return BlockPyHistory;
}();
var REMAP_EVENT_TYPES = {
  "Session.Start": "Began session",
  "X-IP.Change": "Changed IP address",
  "File.Edit": "Edited code",
  "File.Create": "Started assignment",
  "Run.Program": "Ran program",
  "Compile.Error": "Syntax error",
  "X-Submission.LMS": "Updated grade"
};
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function isSameDay(first, second) {
  return first.getDate() === second.getDate() && first.getMonth() === second.getMonth() && first.getFullYear() === second.getFullYear();
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
  var now = new Date();
  var past = new Date(parseInt(timeString, 10));

  if (isSameDay(now, past)) {
    return "Today at " + past.toLocaleTimeString();
  } else {
    var dayStr = weekDays[past.getDay()];
    var monthStr = monthNames[past.getMonth()];
    var date = dayStr + ", " + monthStr + " " + past.getDate();

    if (now.getFullYear() === past.getFullYear()) {
      return date + " at " + past.toLocaleTimeString();
    } else {
      return date + ", " + past.getFullYear() + " at " + past.toLocaleTimeString();
    }
  }
}
/**
 * Opens the history dialog box. This requires a trip to the server and
 * occurs asynchronously. The users' code is shown in preformatted text
 * tags (no code highlighting currently) along with the timestamp.
 */


BlockPyHistory.prototype.openDialog = function () {
  var dialog = this.main.components.dialog;
  var body = "<pre>a = 0</pre>";
  this.main.components.server.getHistory(function (data) {
    body = data.reverse().reduce(function (complete, elem) {
      var complete_str = prettyPrintDateTime(elem.time);
      var new_line = "<b>" + complete_str + "</b><br><pre>" + elem.code + "</pre>";
      return complete + "\n" + new_line;
    }, "");
    dialog.show("Work History", body, function () {});
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

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
} // TODO: Get shareable link button

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
/* harmony import */ var _editor_assignment_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/assignment_settings */ "./src/editor/assignment_settings.js");


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
  var _this7 = this;

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("saveAssignment")) {
    var data = this.createServerData();
    data["hidden"] = model.assignment.hidden();
    data["reviewed"] = model.assignment.reviewed();
    data["public"] = model.assignment["public"]();
    data["url"] = model.assignment.url();
    data["ip_ranges"] = model.assignment.ipRanges();
    data["name"] = model.assignment.name();
    data["settings"] = Object(_editor_assignment_settings__WEBPACK_IMPORTED_MODULE_1__["saveAssignmentSettings"])(model);

    this._postBlocking("saveAssignment", data, 3, function () {
      return 0;
    }, function (e, textStatus, errorThrown) {
      _this7.main.components.dialog.ERROR_SAVING_ASSIGNMNENT();

      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("Offline", "Server is not connected! (Save Assignment)");
  }
};

BlockPyServer.prototype.loadHistory = function (callback) {
  var _this8 = this;

  if (this.main.model.ui.server.isEndpointConnected("loadHistory")) {
    var model = this.main.model;
    var data = this.createServerData();

    this._postBlocking("loadHistory", data, 2, callback, function (e, textStatus, errorThrown) {
      _this8.main.components.dialog.ERROR_LOADING_HISTORY();

      console.error(e, textStatus, errorThrown);
    });
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
  var _this9 = this;

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

      _this9._postRetry(data, "updateSubmission", 0, function (response) {
        if (response.success) {
          _this9.setStatus("updateSubmission", StatusState.READY);
        } else {
          _this9.setStatus("updateSubmission", StatusState.FAILED, response.message);
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

    return Sk.builtin.none.none$;
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
  /**
   * This function is called by instructors to get the students' code as a string.
  **/

  mod.get_evaluation = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_evaluation", arguments, 0, 0);
    return Sk.ffi.remapToPy(Sk.executionReports["student"].evaluation || "");
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
          "data": graph.content.map(function (plot) {
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
/*! exports provided: TRACE_HTML, BlockPyTrace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE_HTML", function() { return TRACE_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPyTrace", function() { return BlockPyTrace; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TRACE_HTML = "\n\n<div class=\"blockpy-trace col-md-6 blockpy-panel\"\n            role=\"region\" aria-label=\"Trace\">\n    \n    <div class=\"clearfix\">\n        <strong>Trace: </strong>\n        \n        <!-- Feedback/Trace Visibility Control -->\n        <button type='button'\n                class='btn btn-sm btn-outline-secondary float-right blockpy-hide-trace'\n                data-bind=\"click: ui.secondRow.advanceState\">\n            <span class='fas fa-eye'></span> Hide Trace\n        </button>\n    </div>\n\n    <div class=\"input-group mb-3 blockpy-trace-controls\">\n        <div class=\"input-group-prepend\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.first\">\n                <span class='fas fa-step-backward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.backward\">\n                <span class='fas fa-backward'></span>\n            </button>\n            <span class=\"input-group-text\">Step:</span>\n            <span class=\"input-group-text\">\n                <span data-bind='text: execution.student.currentTraceStep'></span>\n                / <span data-bind='text: execution.student.lastStep'></span>\n            </span>\n        </div>\n        <div class=\"input-group-append\">\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.forward\">\n                <span class='fas fa-forward'></span>\n            </button>\n            <button type='button' class='btn btn-outline-secondary'\n                data-bind=\"click: ui.trace.last\">\n                <span class='fas fa-step-forward'></span>\n            </button>\n            <span class=\"input-group-text\">\n                <span data-bind='text: ui.trace.line'></span>\n            </span>\n        </div>\n    </div>\n    \n    <table class='table table-sm table-striped table-bordered table-hover'>\n        <caption>Current variables at this step</caption>\n        <thead>\n            <tr><th>Name</th><th>Type</th><th>Value</th></tr>\n        </thead>\n        <tbody data-bind=\"foreach: ui.trace.data().properties\">\n            <tr data-bind=\"visible: name != '__file__' && name != '__path__'\">\n                <td data-bind=\"text: name\"></td>\n                <td data-bind=\"text: type\"></td>\n                <td>\n                    <code data-bind=\"text: value\"></code>\n                    <!-- ko if: type == \"List\" -->\n                    \n                    <a href=\"\" data-bind=\"click: //$root.viewExactValue(type, exact_value)\">\n                    <span class='glyphicon glyphicon-new-window'></span>\n                    </a>\n                    <!-- /ko -->\n                </td>\n            </tr>\n        </tbody>\n    </table>\n    \n</div>\n";
var BlockPyTrace =
/*#__PURE__*/
function () {
  function BlockPyTrace(main, tag) {
    _classCallCheck(this, BlockPyTrace);

    this.main = main;
    this.tag = tag;
    this.IGNORED_GLOBALS = ["__name__", "__doc__", "__package__", "classmethod", "property", "staticmethod"]; // this.trace.click(this.buildTraceTable.bind(this));
  }
  /**
   * Consume a set of variables traced from the execution and parse out any
   * global variables and modules.
   *
   * @param {Object} variables - a mapping of variable names to their Skupt value.
   */


  _createClass(BlockPyTrace, [{
    key: "parseGlobals",
    value: function parseGlobals(variables) {
      var result = [];
      var modules = [];

      if (!this.main.model.display.traceExecution()) {
        for (var property in variables) {
          var value = variables[property];

          if (this.IGNORED_GLOBALS.indexOf(property) === -1) {
            property = property.replace("_$rw$", "").replace("_$rn$", "");
            var parsed = void 0;

            try {
              parsed = BlockPyTrace.parseValue(property, value);
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
    value: function parseValue(property, value, fullLength) {
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
          if (fullLength || value.v.length <= 32) {
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

  return BlockPyTrace;
}(); // TODO: viewExactValue

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3M/OTgyOSIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3M/N2M4NCIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hYnN0cmFjdF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9weXRob24uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvdGFncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90ZXh0LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9jb25maWd1cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ldmFsLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fY2hhbmdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fcnVuLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3N0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZpbGVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NlcnZlci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NrX21vZF9pbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3RyYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9ibG9ja3B5L2V4dGVybmFsIFwia29cIiJdLCJuYW1lcyI6WyJCbG9ja1B5IiwiY29uZmlndXJhdGlvbiIsImFzc2lnbm1lbnQiLCJzdWJtaXNzaW9uIiwiaW5pdE1vZGVsIiwidW5kZWZpbmVkIiwic2V0QXNzaWdubWVudCIsImluaXRNYWluIiwiaW5pdFV0aWxpdGllcyIsImluaXRNb2RlbE1ldGhvZHMiLCJ0dXJuT25IYWNrcyIsImluaXRJbnRlcmZhY2UiLCJhcHBseU1vZGVsIiwiaW5pdENvbXBvbmVudHMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJmaWxlU3lzdGVtIiwiZmlsZXNfIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsInNpemUiLCJoaWRlRXZhbHVhdGUiLCJBQ1RJVkUiLCJiYWRnZSIsInRvTG93ZXJDYXNlIiwidHJhY2UiLCJsaW5lIiwic3RlcCIsInRyYWNlRGF0YSIsImZpcnN0IiwiYmFja3dhcmQiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJmb3J3YXJkIiwibmV4dCIsIm1pbiIsImxhc3QiLCJmaWxlcyIsInZpc2libGUiLCJoaWRlRmlsZXMiLCJoYXNDb250ZW50cyIsInBhdGgiLCJzb21lIiwiZmlsZSIsImxlbmd0aCIsImFkZCIsImRlbGV0ZUZpbGUiLCJleHRyYVN0dWRlbnRGaWxlcyIsIm9ic2VydmVDb25jYXRlbmF0ZWRGaWxlIiwiZWRpdG9ycyIsImdldEVkaXRvciIsInZpZXciLCJoaWRlRWRpdG9ycyIsIm1hcCIsInN1YnN0ciIsIm1ha2VNb2RlbEZpbGUiLCJjb250ZW50cyIsImNhblNhdmUiLCJjYW5EZWxldGUiLCJVTkRFTEVUQUJMRV9GSUxFUyIsImluZGV4T2YiLCJjYW5SZW5hbWUiLCJVTlJFTkFNQUJMRV9GSUxFUyIsInVwbG9hZCIsInVwbG9hZEZpbGUiLCJiaW5kIiwiZG93bmxvYWQiLCJkb3dubG9hZEZpbGUiLCJpbXBvcnREYXRhc2V0IiwiY29yZ2lzIiwib3BlbkRpYWxvZyIsInB5dGhvbiIsImZ1bGxzY3JlZW4iLCJjb2RlTWlycm9yIiwicHl0aG9uRWRpdG9yIiwiYm0iLCJ0ZXh0RWRpdG9yIiwic2V0T3B0aW9uIiwiZ2V0T3B0aW9uIiwidXBkYXRlTW9kZSIsIm5ld01vZGUiLCJvbGRQeXRob25Nb2RlIiwiaXNIaXN0b3J5QXZhaWxhYmxlIiwiaXNFbmRwb2ludENvbm5lY3RlZCIsInR1cm5PZmZIaXN0b3J5TW9kZSIsInVwZGF0ZUVkaXRvciIsInNldFJlYWRPbmx5IiwidHVybk9uSGlzdG9yeU1vZGUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9hZCIsImRpYWxvZyIsIkVSUk9SX0xPQURJTkdfSElTVE9SWSIsInRvZ2dsZUhpc3RvcnlNb2RlIiwibW92ZVRvU3RhcnQiLCJtb3ZlUHJldmlvdXMiLCJtb3ZlTmV4dCIsIm1vc3RSZWNlbnQiLCJtb3ZlVG9Nb3N0UmVjZW50IiwidXNlIiwic2F2ZSIsImV4ZWN1dGUiLCJydW4iLCJlbmdpbmUiLCJldmFsdWF0ZSIsIm1lc3NhZ2VzIiwibWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyIsImFwcGx5QmluZGluZ3MiLCJtYWluIiwidGV4dCIsIkVhc3lNREUiLCJwcm90b3R5cGUiLCJCbG9ja1B5RGlhbG9nIiwiZmluZCIsIkJsb2NrUHlGZWVkYmFjayIsIkJsb2NrUHlUcmFjZSIsIkJsb2NrUHlDb25zb2xlIiwiQmxvY2tQeUVuZ2luZSIsIkJsb2NrUHlGaWxlU3lzdGVtIiwiRWRpdG9ycyIsImJ5TmFtZSIsIkJsb2NrUHlTZXJ2ZXIiLCJCbG9ja1B5Q29yZ2lzIiwiQmxvY2tQeUhpc3RvcnkiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ2YWwiLCJwcm9wIiwiY2xpY2siLCJrZXl1cCIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJDb25zb2xlTGluZUV2YWx1YXRlIiwiQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIiwidGFnIiwicHJpbnRlclRhZyIsIk1JTklNVU1fV0lEVEgiLCJNSU5JTVVNX0hFSUdIVCIsIkRFRkFVTFRfSEVJR0hUIiwiaGVpZ2h0IiwiY2xlYXIiLCJyZW1vdmVBbGwiLCJsaW5lQnVmZmVyIiwicGxvdEJ1ZmZlciIsImVtcHR5IiwidHVydGxlTGluZSIsIlR1cnRsZUdyYXBoaWNzIiwidGFyZ2V0IiwiZ2V0VHVydGxlTGluZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJhc3NldHMiLCJsb2FkQXNzZXQiLCJyZW5kZXIiLCJjdXJyZW50UHJpbnRlckRpbWVuc2lvbiIsInBhZ2UiLCJlYWNoIiwiYXR0ciIsInNob3ciLCJoaWRlIiwibGluZVRleHQiLCJmbHVzaCIsImNoYXJBdCIsInNwbGl0TGluZXMiLCJzcGxpdCIsImFkZENvbnRlbnQiLCJpIiwicHVzaCIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsImxvYWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzbHVnZ2VkTmFtZSIsInRpdGxlTmFtZSIsImltZ1NyYyIsInRpdGxlIiwib3ZlcnZpZXciLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwib25jbG9zZSIsIm1vZGFsIiwiZHJhZ2dhYmxlIiwib24iLCJFUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UIiwiY29uZmlybSIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiZXZlbnQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsIndvcmtzcGFjZSIsImNvbmZpZ3VyZUNvbnRleHRNZW51Iiwib3B0aW9ucyIsImVuYWJsZWQiLCJjYWxsYmFjayIsIm9sZEZpbGVuYW1lIiwiY3VycmVudEJNTGlzdGVuZXIiLCJhZGRDaGFuZ2VMaXN0ZW5lciIsImlzUGFyc29ucyIsImRlbGV0ZUZpbGVMb2NhbGx5XyIsInNldENvZGUiLCJnZXRDb2RlIiwicmVtb3ZlQ2hhbmdlTGlzdGVuZXIiLCJzZXRNb2RlIiwiaXNSZWFkT25seSIsImVuZHNXaXRoIiwiUHl0aG9uRWRpdG9yIiwiVEFHU19FRElUT1JfSFRNTCIsIlRhZ3NFZGl0b3JWaWV3IiwiVGFnc0VkaXRvciIsIlRFWFRfRURJVE9SX0hUTUwiLCJUZXh0RWRpdG9yVmlldyIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJzaG93Q3Vyc29yV2hlblNlbGVjdGluZyIsImxpbmVOdW1iZXJzIiwiZmlyc3RMaW5lTnVtYmVyIiwiaW5kZW50VW5pdCIsImV4dHJhS2V5cyIsImNtIiwiYmx1ciIsInNldFZhbHVlIiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidGhlbiIsImZhaWx1cmUiLCJkaXNhYmxlRmVlZGJhY2siLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxlb3BlbiIsIm9wZW5GaWxlIiwiZmlsZXdyaXRlIiwid3JpdGVGaWxlIiwicHJpbnQiLCJpbkJyb3dzZXIiLCJpbnB1dGZ1biIsImlucHV0ZnVuVGFrZXNQcm9tcHQiLCJpbWFnZVByb3h5IiwiZ2V0SW1hZ2VQcm94eSIsInJldGFpbkdsb2JhbHMiLCJ3YXJuIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50Iiwic3R1ZGVudENvZGVTYWZlIiwiZXZhbHVhdGlvbiIsImR1bW15T3V0U2FuZGJveCIsImxpbmVPZmZzZXQiLCJORVdfTElORV9SRUdFWCIsIlNVQ0NFU1MiLCJTQ09SRSIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwidGlmYUFuYWx5c2lzIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInRvcF9vZl9lbGVtZW50IiwiYm90dG9tX29mX2VsZW1lbnQiLCJvdXRlckhlaWdodCIsImJvdHRvbV9vZl9zY3JlZW4iLCJ0b3Bfb2Zfc2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJsaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJmYWRlT3V0IiwiZmlsZW5hbWVFeGVjdXRlZCIsImFyZ3MiLCJ0cmFjZWJhY2siLCJ0cmFjZWJhY2tGb3JtYXR0ZWQiLCJmcmFtZSIsImxpbmVubyIsImxhc3RfdHJhY2ViYWNrIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIkZJTEVTX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiY29uY2F0ZW5hdGVkRmlsZSIsIm1vZGVsRmlsZUxpc3QiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsImZvdW5kIiwiRk9PVEVSX0hUTUwiLCJjdXJyZW50SWQiLCJlZGl0RXZlbnRzIiwic2VsZWN0b3IiLCJlZGl0SWQiLCJlbnRyeSIsImZpbGVfcGF0aCIsImV2ZW50X3R5cGUiLCJSRU1BUF9FVkVOVF9UWVBFUyIsImRpc3BsYXllZCIsInByZXR0eVByaW50RGF0ZVRpbWUiLCJjbGllbnRfdGltZXN0YW1wIiwiZGlzYWJsZSIsIm9wdGlvbiIsImRpc2FibGVkIiwiaXNFZGl0RXZlbnQiLCJldnQiLCJwYXJzZUludCIsIm1vbnRoTmFtZXMiLCJ3ZWVrRGF5cyIsImlzU2FtZURheSIsInNlY29uZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidGltZVN0cmluZyIsIm5vdyIsIkRhdGUiLCJwYXN0IiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZGF5U3RyIiwiZ2V0RGF5IiwibW9udGhTdHIiLCJkYXRlIiwiZ2V0SGlzdG9yeSIsInJldmVyc2UiLCJyZWR1Y2UiLCJjb21wbGV0ZSIsImVsZW0iLCJjb21wbGV0ZV9zdHIiLCJ0aW1lIiwibmV3X2xpbmUiLCJoaWdobGlnaHRUaW1lb3V0IiwiYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJUUkFDRV9IVE1MIiwiUkVUUllJTkciLCJPRkZMSU5FIiwic3RvcmFnZSIsInF1ZXVlIiwiZ2V0RGVmYXVsdCIsIk1BWF9RVUVVRV9TSVpFIiwiVElNRVJfREVMQVkiLCJGQUlMX0RFTEFZIiwidGltZXJzIiwib3ZlcmxheSIsImJsb2NraW5nQXR0ZW1wdHMiLCJjYWNoZWRGaWxlbmFtZXMiLCJjcmVhdGVTdWJzY3JpcHRpb25zIiwiY2hlY2tDYWNoZXMiLCJjaGVja0lQIiwib2xkSVAiLCJpcCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJwdXNoQW55UXVldWVkIiwiX3Bvc3RSZXRyeSIsImNyZWF0ZUZpbGVTdWJzY3JpcHRpb24iLCJjcmVhdGVTZXJ2ZXJEYXRhIiwibWljcm9zZWNvbmRzIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwic2hvd092ZXJsYXkiLCJhdHRlbXB0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNzcyIsImhpZGVPdmVybGF5IiwiX2VucXVldWVEYXRhIiwiY2FjaGUiLCJfZGVxdWV1ZURhdGEiLCJzcGxpY2UiLCJkZWxheSIsInBvc3RSZXF1ZXN0IiwicG9zdCIsInRleHRTdGF0dXMiLCJyZXF1ZXN0IiwiY2FjaGVkVGltZSIsIl9wb3N0QmxvY2tpbmciLCJhdHRlbXB0cyIsImVycm9yVGhyb3duIiwibG9hZEFzc2lnbm1lbnREYXRhXyIsIkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCIsImVycm9yQ2FsbGJhY2siLCJsb2FkX2ZpbGUiLCJoaWRkZW5PdmVycmlkZSIsImZvcmNlVXBkYXRlIiwiZ2V0UG5nRnJvbUJsb2NrcyIsInBuZ0RhdGEiLCJpbWciLCJtb2QiLCJub25lIiwiYnVpbHRpbiIsIm5vbmUkIiwicHJpb3IiLCJ0aW1laXQiLCJmdW5jIiwicHlDaGVja0FyZ3MiLCJkaWZmZXJlbmNlIiwiZGVidWciLCJnZXRfb3V0cHV0IiwiaXRlbSIsInRvU2t1bHB0IiwibGlzdCIsInJlc2V0X291dHB1dCIsInF1ZXVlX2lucHV0IiwicHlDaGVja1R5cGUiLCJjaGVja1N0cmluZyIsImdldF9wcm9ncmFtIiwiZ2V0X2V2YWx1YXRpb24iLCJ0cmFjZV9saW5lcyIsImdldF9zdHVkZW50X2Vycm9yIiwidHVwbGUiLCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IiLCJiYWNrdXBUaW1lIiwibGltaXRfZXhlY3V0aW9uX3RpbWUiLCJleGVjU3RhcnQiLCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lIiwic3VwcHJlc3Nfc2Nyb2xsaW5nIiwiZ2V0X3Bsb3RzIiwib3V0cHV0cyIsImdyYXBoIiwicGxvdCIsIm5ld1Bsb3QiLCJ2IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJoYXNPd25Qcm9wZXJ0eSIsIm1wJGFzc19zdWJzY3JpcHQiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwibmFtZXNwYWNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsIklHTk9SRURfR0xPQkFMUyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bGxMZW5ndGgiLCJmdW5jX2NvZGUiLCJjb192YXJuYW1lcyIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJTdHJpbmciLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwibm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwiY2FsbCIsInN1YnZhbCIsImFzc2skIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QzltQixJQUFKLENBQVM0bUIsY0FBYyxDQUFDQyxDQUFELENBQXZCLEVBRlcsQ0FHWDs7QUFDQUMsV0FBRyxDQUFDOW1CLElBQUosQ0FBUzRtQixjQUFjLENBQUNILEdBQUcsQ0FBQ0ksQ0FBRCxDQUFKLENBQXZCO0FBQ0gsT0FSZ0IsQ0FTakI7OztBQUNBLGFBQU8sSUFBSTdyQixFQUFFLENBQUN1a0IsT0FBSCxDQUFXd0MsSUFBZixDQUFvQitFLEdBQXBCLENBQVA7QUFDSCxLQVhELE1BV0s7QUFDRCxhQUFPTCxHQUFQO0FBQ0g7QUFDSixHQWZNLE1BZUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTyxJQUFJenJCLEVBQUUsQ0FBQ3VrQixPQUFILENBQVcyQyxHQUFmLENBQW1CdUUsR0FBbkIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxXQUFPenJCLEVBQUUsQ0FBQ3VrQixPQUFILENBQVcySCxLQUFYLENBQWlCVCxHQUFqQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFNBQW5CLEVBQThCO0FBQ2pDLFdBQU8sSUFBSXpyQixFQUFFLENBQUN1a0IsT0FBSCxDQUFXcUUsSUFBZixDQUFvQjZDLEdBQXBCLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBRyxPQUFPQSxHQUFQLEtBQWUsVUFBbEIsRUFBOEI7QUFDakMsV0FBTyxJQUFJenJCLEVBQUUsQ0FBQ3VrQixPQUFILENBQVcyQyxHQUFmLENBQW1CdUUsR0FBRyxDQUFDNzhCLElBQXZCLENBQVA7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDN09ELG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6ImJsb2NrcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJsb2NrcHlcIiwgW1wialF1ZXJ5XCIsIFwia29cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxvY2tweVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wia29cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Jsb2NrcHkuanNcIik7XG4iLCJpbXBvcnQgXCIuL2Nzcy9ibG9ja3B5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCJzdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc0VudW19IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiZWRpdG9yL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwic2VydmVyLmpzXCI7XHJcbmltcG9ydCB7bWFrZUludGVyZmFjZSwgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucywgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfSBmcm9tIFwiaW50ZXJmYWNlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc30gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIEJsb2NrUHlGaWxlU3lzdGVtLFxyXG4gICAgbG9hZENvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBtYWtlTW9kZWxGaWxlLFxyXG4gICAgb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBVTkRFTEVUQUJMRV9GSUxFUyxcclxuICAgIFVOUkVOQU1BQkxFX0ZJTEVTXHJcbn0gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi90cmFjZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb25zb2xlfSBmcm9tIFwiLi9jb25zb2xlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZlZWRiYWNrfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5U2VydmVyfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5RGlhbG9nfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWx9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvcmdpcywgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9IGZyb20gXCIuL2Nvcmdpc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlIaXN0b3J5fSBmcm9tIFwiLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQge19JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfTtcclxuXHJcbi8qKlxyXG4gKiBNYWpvciBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgYSBCbG9ja1B5IGluc3RhbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIC0gVXNlciBsZXZlbCBzZXR0aW5ncyAoZS5nLiwgd2hhdCBlZGl0b3IgbW9kZSwgd2hldGhlciB0byBtdXRlIHNlbWFudGljIGVycm9ycywgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NpZ25tZW50IC0gQXNzaWdubWVudCBsZXZlbCBzZXR0aW5ncyAoZGF0YSBhYm91dCB0aGUgbG9hZGVkIGFzc2lnbm1lbnQsIHVzZXIsIHN1Ym1pc3Npb24sIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VibWlzc2lvbiAtIEluY2x1ZGVzIHRoZSBzb3VyY2UgY29kZSBvZiBhbnkgcHJvZ3JhbXMgdG8gYmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbChjb25maWd1cmF0aW9uKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzaWdubWVudChjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIEJsb2NrUHkgb2JqZWN0IGJ5IGluaXRpYWxpemluZyBpdHMgaW50ZXJmYWNlLFxyXG4gICAgICogbW9kZWwsIGFuZCBjb21wb25lbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VXRpbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWxNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy50dXJuT25IYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgZGVmYXVsdCB2YWx1ZSBvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB1cCBhIHZhbHVlIGZvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSAtIGlmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGFueXdoZXJlLCB1c2UgdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBnZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9ba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxTZXR0aW5nc18uaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTZXR0aW5nc18uZ2V0KGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbW9kZWwgdG8gaXRzIGRlZmF1bHRzLlxyXG4gICAgICpcclxuICAgICAqIENhdGVnb3JpZXM6XHJcbiAgICAgKiAgICogdXNlcjogdmFsdWVzIGZvciB0aGUgY3VycmVudCB1c2VyIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGFzc2lnbm1lbnQ6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgYXNzaWdubWVudCAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBzdWJtaXNzaW9uOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24gKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogZGlzcGxheTogZmxhZ3MgcmVsYXRlZCB0byBjdXJyZW50IHZpc2liaWxpdHkgKHN0b3JlZCB0byBsb2NhbFNldHRpbmdzKVxyXG4gICAgICogICAqIHN0YXR1czogbWVzc2FnZXMgcmVsYXRlZCB0byBjdXJyZW50IHN0YXR1cyAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBleGVjdXRpb246IHZhbHVlcyByZWxhdGVkIHRvIGxhc3QgcnVuIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGNvbmZpZ3VyYXRpb246IGNvbnN0YW50IHZhbHVlcyByZWxhdGVkIHRvIHNldHVwIChub3Qgc3RvcmVkKVxyXG4gICAgICovXHJcbiAgICBpbml0TW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMubG9jYWxTZXR0aW5nc18gPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcImxvY2FsU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5pZFwiXSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLm5hbWVcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHlvdSBhcmUgYW4gT3duZXIgKGNhbiBtb2RpZnkgdGhlIGFzc2lnbm1lbnQpLCBHcmFkZXIgKGNhbiB2aWV3XHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgYXNzaWdubWVudHMnIGluZm9ybWF0aW9uKSBvciBTdHVkZW50IChjYW4gbm90IHNlZSBhbnkgaW5zdHJ1Y3RvciBzdHVmZikuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcm9sZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJ1c2VyLnJvbGVcIiwgXCJvd25lclwiKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2FybmluZyBtZXNzYWdlIGlmIG1hemVcclxuICAgICAgICAgICAgICAgIHR5cGU6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uUnVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX3J1blwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2NoYW5nZVwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIG9uRXZhbDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ldmFsXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3ZWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucmV2aWV3ZWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgcHVibGljOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnB1YmxpY1wiXSksXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaGlkZGVuXCJdKSxcclxuICAgICAgICAgICAgICAgIGlwUmFuZ2VzOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmlwX3Jhbmdlc1wiXSksXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pc3Npb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRJZCBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQuaWRcclxuICAgICAgICAgICAgICAgIC8vIGNvdXJzZUlkIGluZmVycmVkIGZyb20gdXNlci5jb3Vyc2VJZFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkIGluZmVycmVkIGZyb20gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudFZlcnNpb24gaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LnZlcnNpb25cclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKSxcclxuICAgICAgICAgICAgICAgIGdyYWRpbmdTdGF0dXM6IGtvLm9ic2VydmFibGUoXCJOb3RSZWFkeVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50bHkgdmlzaWJsZSBGaWxlLCBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgcHJlc2VudGVkIHdpdGggdGhlIGluc3RydWN0b3Igc2V0dGluZ3MgYW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5Lmluc3RydWN0b3JcIiwgXCJmYWxzZVwiKS50b1N0cmluZygpPT09XCJ0cnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHRoZSBwcmludGVyIGZyb20gc2hvd2luZyB0aGluZ3NcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbXV0ZVByaW50ZXI6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiAoUHl0aG9uIFZpZXdzKSBUaGUgY3VycmVudCBlZGl0b3IgbW9kZS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtEaXNwbGF5TW9kZXN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHB5dGhvbk1vZGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5weXRob24ubW9kZVwiLCBEaXNwbGF5TW9kZXMuU1BMSVQpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgSGlzdG9yeSBtb2RlIGlzIGVuZ2FnZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeU1vZGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaGVpZ2h0IHRvIHVzZSBmb3IgdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBudWxsLCB0aGVuIGxldCB0aGUgaGVpZ2h0IHJlbWFpbiB1bmNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAqICAgIElmIGEgbnVtYmVyLCB0aGVuIHRoZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hpY2ggcGFuZWwgdG8gc2hvdyBpbiB0aGUgc2Vjb25kIHJvdydzIHNlY29uZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlY29uZFJvd1NlY29uZFBhbmVsOiBrby5vYnNlcnZhYmxlKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHRyYWNpbmcgdGhlIGNvZGUgcmlnaHQgbm93XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyYWNlRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGxpc3Qgb2YgcHJvbWlzZXMgdG8gc3RpbGwgcmVzb2x2ZSB3aGlsZSBsb2FkaW5nIGRhdGFzZXRzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8UHJvbWlzZT59XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEYXRhc2V0czoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIHRlbXBvcmFyeSBjaGFuZ2VkIHZhbHVlIG9mIHRoZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgZnJvbSB3aGF0IGlzIGluIHRoZSBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZWRJbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEEgaG9sZGVyIGZvciB0aGUgdGltZXIgdG8gdHJpZ2dlciBvbi1jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbkNoYW5nZTogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3Rvcnk6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3RvcnlNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbikge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwudXNlci5jb3Vyc2VJZChzdWJtaXNzaW9uLmNvdXJzZV9pZCk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoc3VibWlzc2lvbi5leHRyYV9maWxlcywgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50RGF0YV8oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVzZXRJbnRlcmZhY2UoKTtcclxuICAgICAgICBsZXQgd2FzU2VydmVyQ29ubmVjdGVkID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCBhc3NpZ25tZW50ID0gZGF0YS5hc3NpZ25tZW50O1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pZChhc3NpZ25tZW50LmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudmVyc2lvbihhc3NpZ25tZW50LnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5jb3Vyc2VJZChhc3NpZ25tZW50LmNvdXJzZV9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZElkKGFzc2lnbm1lbnQuZm9ya2VkX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkVmVyc2lvbihhc3NpZ25tZW50LmZvcmtlZF92ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKGFzc2lnbm1lbnQuaGlkZGVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoYXNzaWdubWVudC5yZXZpZXdlZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnB1YmxpYyhhc3NpZ25tZW50LnB1YmxpYyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnR5cGUoYXNzaWdubWVudC50eXBlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudXJsKGFzc2lnbm1lbnQudXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoYXNzaWdubWVudC5pcF9yYW5nZXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoYXNzaWdubWVudC5pbnN0cnVjdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5uYW1lKGFzc2lnbm1lbnQubmFtZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKGFzc2lnbm1lbnQub25fY2hhbmdlIHx8IG51bGwpO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9uX2NoYW5nZSAmJiAhdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZmlsZXNfW1wiIW9uX2NoYW5nZS5weVwiXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2NoYW5nZS5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCAmJiAhdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZmlsZXNfW1wiIW9uX2V2YWwucHlcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9ldmFsLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oYXNzaWdubWVudC5vbl9ydW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub3duZXJJZChhc3NpZ25tZW50Lm93bmVyX2lkKTtcclxuICAgICAgICBsb2FkQXNzaWdubWVudFNldHRpbmdzKHRoaXMubW9kZWwsIGFzc2lnbm1lbnQuc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3MoYXNzaWdubWVudC50YWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRTYW1wbGVTdWJtaXNzaW9ucyhhc3NpZ25tZW50LnNhbXBsZV9zdWJtaXNzaW9ucyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9pbnN0cnVjdG9yX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfc3RhcnRpbmdfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZFN1Ym1pc3Npb24oZGF0YS5zdWJtaXNzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdHVkZW50RmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUucnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVE9ET1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5cyB0aGUgS25vY2tvdXRKUyBiaW5kaW5ncyB0byB0aGUgbW9kZWwsIGluc3RhbnRpYXRpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZVxyXG4gICAgICogSFRNTC5cclxuICAgICAqL1xyXG4gICAgYXBwbHlNb2RlbCgpIHtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVdGlsaXRpZXMoKSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICBtYXJrZG93bjogKHRleHQpID0+IHRleHQgPyBFYXN5TURFLnByb3RvdHlwZS5tYXJrZG93bih0ZXh0KSA6IFwiPHA+PC9wPlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICAvLyBFYWNoIG9mIHRoZXNlIGNvbXBvbmVudHMgd2lsbCB0YWtlIHRoZSBCbG9ja1B5IGluc3RhbmNlLCBhbmQgcG9zc2libHkgYVxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSB0byB0aGUgcmVsZXZhbnQgSFRNTCBsb2NhdGlvbiB3aGVyZSBpdCB3aWxsIGJlIGVtYmVkZGVkLlxyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1kaWFsb2dcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmVlZGJhY2sgPSBuZXcgQmxvY2tQeUZlZWRiYWNrKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2tcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMudHJhY2UgPSBuZXcgQmxvY2tQeVRyYWNlKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29uc29sZSA9IG5ldyBCbG9ja1B5Q29uc29sZShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWNvbnNvbGVcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZW5naW5lID0gbmV3IEJsb2NrUHlFbmdpbmUobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5maWxlU3lzdGVtID0gbmV3IEJsb2NrUHlGaWxlU3lzdGVtKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZWRpdG9ycyA9IG5ldyBFZGl0b3JzKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZWRpdG9yXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnB5dGhvbkVkaXRvciA9IHRoaXMuY29tcG9uZW50cy5lZGl0b3JzLmJ5TmFtZShcInB5dGhvblwiKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29yZ2lzID0gbmV3IEJsb2NrUHlDb3JnaXMobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5oaXN0b3J5ID0gbmV3IEJsb2NrUHlIaXN0b3J5KG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaGlzdG9yeS10b29sYmFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2soaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJ1dHRvbi5jbGljayhzdWJtaXRGb3JtKTtcbiAgICAgICAgaW5wdXQua2V5dXAoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFByb21pc2U7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmVJbnB1dCB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBcIkV2YWx1YXRlOlwiKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5TVEFSVF9FVkFMKTtcbiAgICAgICAgdGhpcy5odG1sLmFwcGVuZCgkKFNUQVJUX0VWQUxfSFRNTCkpO1xuICAgICAgICB0aGlzLmh0bWwuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmV4ZWN1dGUuZXZhbHVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5Q29uc29sZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBjb25zb2xlLCB3aXRoIGZlYXR1cmVzIGZvciB0aGluZ3MgbGlrZSBwcmludGluZywgcGxvdHRpbmcsIGV2YWxpbmcsIGlucHV0aW5nLlxuICAgICAqIFRoZSBcInByaW50ZXJcIiBpcyB0aGUgcmVnaW9uIHdoZXJlIHdlIHB1dCB0aGluZ3MsIGFzIG9wcG9zZWQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3aG9sZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZyA9IHRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKTtcblxuICAgICAgICB0aGlzLk1JTklNVU1fV0lEVEggPSAyMDA7XG4gICAgICAgIHRoaXMuTUlOSU1VTV9IRUlHSFQgPSAyMDA7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUlHSFQgPSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCk7IC8vIExldCBDU1MgZGVmaW5lIHRoaXNcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZSB1c2VyIG1vZGlmaWVzIGEgZmlsZSwgdGhlbiBtYWtlIHRoZSBjb25zb2xlIGxvb2sgZmFkZWQgYSBsaXR0bGVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlciwgaW5jbHVkaW5nIHJlbW92aW5nIGFueSB0ZXh0IGluIGl0IGFuZFxuICAgICAqIGZpeGluZyBpdHMgc2l6ZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmVtcHR5KCk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIHJlc2V0IGl0XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBudWxsO1xuICAgICAgICBTay5UdXJ0bGVHcmFwaGljcyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUdXJ0bGVMaW5lLmJpbmQodGhpcyksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmxvYWRBc3NldC5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGxvYWRBc3NldChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGdldFR1cnRsZUxpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZUxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZSA9IG5ldyBDb25zb2xlTGluZVR1cnRsZSh0aGlzLm1haW4pO1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgZG8gc29cbiAgICAgICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcmludGVyRGltZW5zaW9uID0gdGhpcy5wcmludGVyVGFnLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodChjdXJyZW50UHJpbnRlckRpbWVuc2lvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgU2suVHVydGxlR3JhcGhpY3MuaGVpZ2h0ID0gY3VycmVudFByaW50ZXJEaW1lbnNpb24tNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHVydGxlTGluZS5odG1sWzBdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHR1cnRsZXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgbmV3VHVydGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9XSURUSCwgdGhpcy5wcmludGVyVGFnLndpZHRoKCktNDApO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9IRUlHSFQsIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSs0MCk7XG4gICAgfVxuXG4gICAgaXNNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBlYWNoIHByaW50ZWQgZWxlbWVudCBpbiB0aGUgcHJpbnRlciBhbmQgbWFrZXMgaXQgaGlkZGVuXG4gICAgICogb3IgdmlzaWJsZSwgZGVwZW5kaW5nIG9uIHdoYXQgc3RlcCB3ZSdyZSBvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIGN1cnJlbnQgc3RlcCBvZiB0aGUgZXhlY3V0ZWQgcHJvZ3JhbSB0aGF0IHdlJ3JlIG9uOyBlYWNoIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgbXVzdCBiZSBtYXJrZWQgd2l0aCBhIFwiZGF0YS1zdGVwXCIgcHJvcGVydHkgdG8gcmVzb2x2ZSB0aGlzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlIC0gRGVwcmVjYXRlZCwgbm90IHN1cmUgd2hhdCB0aGlzIGV2ZW4gZG9lcy5cbiAgICAgKi9cbiAgICBzdGVwUHJpbnRlcihzdGVwLCBwYWdlKSB7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlci1vdXRwdXRcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXN0ZXBcIikgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByaW50IGEgbGluZSB0byB0aGUgb24tc2NyZWVuIHByaW50ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmVUZXh0IC0gQSBsaW5lIG9mIHRleHQgdG8gYmUgcHJpbnRlZCBvdXQuXG4gICAgICovXG4gICAgcHJpbnQobGluZVRleHQpIHtcbiAgICAgICAgLy8gRW1wdHkgc3RyaW5ncyBtZWFucyBkbyBub3RoaW5nLlxuICAgICAgICAvLyBwcmludChcIlwiLCBlbmQ9XCJcIilcbiAgICAgICAgaWYgKCFsaW5lVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAobGluZVRleHQuY2hhckF0KGxpbmVUZXh0Lmxlbmd0aC0xKSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGxpdExpbmVzID0gbGluZVRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGlmICh0aGlzLmxpbmVCdWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIuYWRkQ29udGVudChzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBzcGxpdExpbmVzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsdXNoKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcGxvdChwbG90cykge1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVQbG90KHRoaXMubWFpbiwgcGxvdHMpO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRQSUxJbWFnZShpbWFnZURhdGEpIHtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUltYWdlKHRoaXMubWFpbiwgaW1hZ2VEYXRhLmltYWdlKTtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgcHJpbnRlZFZhbHVlID0gbmV3IENvbnNvbGVMaW5lVmFsdWUodGhpcy5tYWluLCB2YWx1ZSk7XG4gICAgICAgIHByaW50ZWRWYWx1ZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHByaW50ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZWdpc3RlcnMgYSBQcm9taXNlIGZyb20gdGhlIElucHV0IGJveFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9tcHRNZXNzYWdlIC0gTWVzc2FnZSB0byBkaXNwbGF5IHRvIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW5wdXQodGhpcy5tYWluLCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfTtcblxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICBiZWdpbkV2YWwoKSB7XG4gICAgICAgIGxldCBzdGFydEV2YWx1YXRpb24gPSBuZXcgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiBzdGFydEV2YWx1YXRpb24ucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5jb25kaXRpb25hbGx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy50YWcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLnByb3AoXCJzY3JvbGxIZWlnaHRcIikgLSB0aGlzLnRhZy5wcm9wKFwiY2xpZW50SGVpZ2h0XCIpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxufSIsImltcG9ydCB7c2x1Z30gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8vIFRPRE86IGVkaXRvci5ibS5ibG9ja0VkaXRvci5leHRyYVRvb2xzW11cblxuZXhwb3J0IGxldCBfSU1QT1JURURfREFUQVNFVFMgPSB7fTtcbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTID0ge307XG5cbi8qKlxuICogVGhpcyBpcyBhIHZlcnkgc2ltcGxpc3RpYyBoZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIHRyYW5zZm9ybVxuICogYSBnaXZlbiBidXR0b24gaW50byBhIFwiTG9hZGVkXCIgc3RhdGUgKGRpc2FibGVkLCBwcmVzc2VkIHN0YXRlLCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidG4gLSBBbiBIVE1MIGVsZW1lbnQgdG8gY2hhbmdlIHRoZSB0ZXh0IG9mLlxuICovXG5sZXQgc2V0QnV0dG9uTG9hZGVkID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxuICAgICAgICAucHJvcChcImRpc2FibGVkXCIsIHRydWUpXG4gICAgICAgIC50ZXh0KFwiTG9hZGVkXCIpXG4gICAgICAgIC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIFwidHJ1ZVwiKTtcbn07XG5cblxuLyoqXG4gKiBNb2R1bGUgdGhhdCBjb25uZWN0cyB0byB0aGUgQ09SR0lTIGRhdGFzZXRzIGFuZCBtYW5hZ2VzIGludGVyYWN0aW9uc1xuICogd2l0aCB0aGVtLiBUaGlzIGluY2x1ZGVzIGxvYWRpbmcgaW4gZGF0YXNldHMgYXQgbGF1bmNoIGFuZCBvbi10aGUtZmx5LlxuICogTm90ZSB0aGF0IHRoaXMgaGFzIG5vIHByZXNlbmNlIG9uIHNjcmVlbiwgc28gaXQgZG9lcyBub3QgaGF2ZSBhIHRhZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5Q29yZ2lzfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5Q29yZ2lzKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgdGhpcy5sb2FkZWREYXRhc2V0cyA9IFtdO1xuICAgIHRoaXMubG9hZERhdGFzZXRzKCk7XG59XG5cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmxvYWREYXRhc2V0cyA9IGZ1bmN0aW9uIChzaWxlbnRseSkge1xuICAgIC8vIExvYWQgaW4gZWFjaCB0aGUgZGF0YXNldHNcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWwsXG4gICAgICAgIGVkaXRvciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvcixcbiAgICAgICAgc2VydmVyID0gdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyO1xuICAgIGxldCBpbXBvcnRzID0gW107XG4gICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cygpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICYmICEobmFtZSBpbiBCbG9ja01pcnJvckJsb2NrRWRpdG9yLkVYVFJBX1RPT0xTKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoLmFwcGx5KGltcG9ydHMsIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnKG5hbWUpLCBuYW1lLCBzaWxlbnRseSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGRhdGFzZXRzIGFyZSBsb2FkZWQsIHVwZGF0ZSB0aGUgdG9vbGJveC5cbiAgICAkLndoZW4uYXBwbHkoJCwgaW1wb3J0cykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xuICAgICAgICBlZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgZWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmVyLmZpbmFsaXplU3Vic2NyaXB0aW9ucygpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkcyB0aGUgZGVmaW5pdGlvbnMgZm9yIGEgZGF0YXNldCBpbnRvIHRoZSBlbnZpcm9ubWVudCwgaW5jbHVkaW5nXG4gKiB0aGUgZGF0YXNldCAoYXMgYSBKUyBmaWxlKSwgdGhlIHNrdWxwdCBiaW5kaW5ncywgYW5kIHRoZSBibG9ja2x5XG4gKiBiaW5kaW5ncy4gVGhpcyByZXF1aXJlcyBhY2Nlc3MgdG8gYSBDT1JHSVMgc2VydmVyLCBhbmQgb2NjdXJzXG4gKiBhc3luY2hyb25vdXNseS4gVGhlIHJlcXVlc3RzIGFyZSBmaXJlZCBhbmQgdGhlaXIgZGVmZXJyZWQgb2JqZWN0c1xuICogYXJlIHJldHVybmVkIC0gY2FsbGVycyBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gcGVyZm9ybSBhbiBhY3Rpb25cbiAqIG9uIGNvbXBsZXRpb24gb2YgdGhlIGltcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2x1ZyAtIFRoZSBVUkwgc2FmZSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIHVzZXItZnJpZW5kbHkgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lLlxuICogQHJldHVybnMge0FycmF5LjxEZWZlcnJlZD59IC0gUmV0dXJucyB0aGUgYXN5bmMgcmVxdWVzdHMgYXMgZGVmZXJyZWQgb2JqZWN0cy5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUuaW1wb3J0RGF0YXNldCA9IGZ1bmN0aW9uIChzbHVnLCBuYW1lKSB7XG4gICAgbGV0IHVybF9yZXRyaWV2YWxzID0gW107XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cyArIFwiYmxvY2tweS9cIiArIHNsdWcgKyBcIi9cIiArIHNsdWc7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBBY3R1YWxseSBnZXQgZGF0YVxuICAgICAgICBsZXQgZ2V0RGF0YXNldCA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9kYXRhc2V0LmpzXCIpO1xuICAgICAgICAvLyBMb2FkIGdldENvbXBsZXRlIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGJlY2F1c2UgaXRzIGJpZyA6KFxuICAgICAgICBsZXQgZ2V0Q29tcGxldGUgPSAkLmdldFNjcmlwdChyb290ICsgXCJfY29tcGxldGUuanNcIik7XG4gICAgICAgIGxldCBnZXRTa3VscHQgPSAkLmdldChyb290ICsgXCJfc2t1bHB0LmpzXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtcInNyYy9saWIvXCIgKyBzbHVnICsgXCIvX19pbml0X18uanNcIl0gPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGdldEJsb2NrbHkgPSAkLmdldFNjcmlwdChyb290ICsgXCJfYmxvY2tseS5qc1wiKTtcbiAgICAgICAgLy8gT24gY29tcGxldGlvbiwgdXBkYXRlIG1lbnVzLlxuICAgICAgICAkLndoZW4oZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkRGF0YXNldHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjY5NTAyNDU4NTZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2Njk1MDI0NTgzNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSd3aWR0aDoxMDAlOyBoZWlnaHQ6NDAwcHg7IHdoaXRlLXNwYWNlOnByZS13cmFwJz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4td2hpdGUnIGRhdGEtZGlzbWlzcz0nbW9kYWwnPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgZXh0ZXJuYWxseSBhdmFpbGFibGUgZnVuY3Rpb24gZm9yIHBvcHBpbmcgdXAgYSBkaWFsb2dcbiAqIG1lc3NhZ2UuIFRoaXMgbWVudSB3aWxsIGJlIGRyYWdnYWJsZSBieSBpdHMgdGl0bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5IC0gVGhlIGJvZHkgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25jbG9zZSAtIEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBkaWFsb2cuXG4gKi9cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodGl0bGUsIGJvZHksIG9uY2xvc2UpIHtcbiAgICB0aGlzLnRpdGxlVGFnLmh0bWwodGl0bGUpO1xuICAgIHRoaXMuYm9keVRhZy5odG1sKGJvZHkpO1xuICAgIHRoaXMudGFnLm1vZGFsKFwic2hvd1wiKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25maXJtKFwiRXJyb3IgTG9hZGluZyBBc3NpZ25tZW50XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIGFzc2lnbm1lbnQuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmAsKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLlNDUkVFTlNIT1RfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE9cbn07IiwiaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiLi4vZWRpdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlID0+XHJcbiAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkudXBsb2FkRmlsZShlKVxyXG4gICAgKTtcclxuICAgIGZpbGVSZWFkZXIuZmlsZU5hbWUgPSBmaWxlc1swXS5uYW1lO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbHVnZ2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IHtuYW1lLCBleHRlbnNpb24sIGNvbnRlbnRzLCBtaW1ldHlwZX0gPSBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS5kb3dubG9hZEZpbGUoKTtcclxuICAgIC8vIE1ha2Ugc2FmZVxyXG4gICAgbmFtZSA9IHNsdWdnaWZ5KG5hbWUpO1xyXG4gICAgbmFtZSA9IG5hbWUgKyBleHRlbnNpb247XHJcbiAgICAvLyBNYWtlIHRoZSBkYXRhIGRvd25sb2FkIGFzIGEgZmlsZVxyXG4gICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudHNdLCB7dHlwZTogbWltZXR5cGV9KTtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgbmFtZSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbGV0IHRlbXBvcmFyeURvd25sb2FkTGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbSA9IG1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVEZWxldGVkKCkge1xyXG4gICAgICAgIC8vIFRPRE86IFN3aXRjaCB0byB0aGUgcHJldmlvdXMgZmlsZSBpbnN0ZWFkIG9mIGEgZGVmYXVsdCBmaWxlXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlVXBkYXRlZChmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IHRoaXMuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcih0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tDdXJyZW50RmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0ud2F0Y2hGaWxlKHRoaXMuZmlsZW5hbWUsIHtcclxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5vbkZpbGVVcGRhdGVkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRoaXMub25GaWxlRGVsZXRlZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBuZXdGaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSB0aGlzLmZpbGVTeXN0ZW0uZ2V0RmlsZShuZXdGaWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5ld0ZpbGVuYW1lIC0gdGhlIGZpbGVuYW1lIHRoYXQgdGhlIG90aGVyIGVkaXRvciB3aWxsIGJlIHN3aXRjaGluZyB0b1xyXG4gICAgICogQHBhcmFtIG9sZEVkaXRvclxyXG4gICAgICogQHBhcmFtIG5ld0VkaXRvclxyXG4gICAgICovXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWUubmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlbmFtZS50eXBlLFxyXG4gICAgICAgICAgICBjb250ZW50czogdGhpcy5maWxlLmhhbmRsZSgpLFxyXG4gICAgICAgICAgICBtaW1ldHlwZTogXCJ0ZXh0L3BsYWluXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiLi9weXRob25cIjtcclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1MgPSBbXHJcbiAgICBbXCJ0b29sYm94TGV2ZWxcIiwgXCJ0b29sYm94X2xldmVsXCIsIFwibm9ybWFsXCIsIFwidG9vbGJveFwiLCBcIklOQ09NUExFVEU6IFdoYXQgbGV2ZWwgb2YgdG9vbGJveCB0byBwcmVzZW50IHRvIHRoZSB1c2VyIChoaWRpbmcgYW5kIHNob3dpbmcgY2F0ZWdvcmllcykuXCJdLFxyXG4gICAgW1wic3RhcnRWaWV3XCIsIFwic3RhcnRfdmlld1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQsIERpc3BsYXlNb2RlcywgXCJUaGUgUHl0aG9uIGVkaXRvciBtb2RlIHRvIHN0YXJ0IGluIHdoZW4gdGhlIHN0dWRlbnQgc3RhcnRzIHRoZSBwcm9ibGVtLlwiXSxcclxuICAgIFtcImRhdGFzZXRzXCIsIFwiZGF0YXNldHNcIiwgXCJcIiwgXCJzdHJpbmdcIiwgXCJUaGUgY3VycmVudCBsaXN0IG9mIGRhdGFzZXRzIGF2YWlsYWJsZSBvbiBsb2FkIGFzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGltZW91dFwiLCBcImRpc2FibGVfdGltZW91dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjb2RlIGlzIGFsbG93ZWQgdG8gcnVuIHdpdGhvdXQgdGltZW91dHMgKHBvdGVudGlhbGx5IGFsbG93aW5nIGluZmluaXRlIGxvb3BzKS5cIl0sXHJcbiAgICBbXCJpc1BhcnNvbnNcIiwgXCJpc19wYXJzb25zXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoaXMgaXMgYSBwYXJzb24ncyBzdHlsZSBxdWVzdGlvbiAoanVtYmxlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUZlZWRiYWNrXCIsIFwiZGlzYWJsZV9mZWVkYmFja1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBubyBpbnN0cnVjdG9yIHNjcmlwdHMgYXJlIHJ1biAoZS5nLiwgb25fcnVuIGFuZCBvbl9ldmFsKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVHJhY2VcIiwgXCJkaXNhYmxlX3RyYWNlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cyBjb2RlIHdpbGwgbm90IGhhdmUgaXRzIGV4ZWN1dGlvbiB0cmFjZWQgKG5vIHZhcmlhYmxlcyByZWNvcmRlZCwgbm8gY292ZXJhZ2UgdHJhY2tlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUVkaXRcIiwgXCJjYW5fZWRpdFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZWRpdGFibGUgYXQgYWxsLlwiXSxcclxuICAgIFtcImRpc2FibGVCbG9ja3NcIiwgXCJjYW5fYmxvY2tzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnRTdGF0ZW1lbnRzXCIsIFwiaGlkZV9pbXBvcnRfc3RhdGVtZW50c1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgY2VydGFpbiBraW5kcyBvZiBpbXBvcnQgc3RhdGVtZW50cyAobWF0cGxvdGxpYiwgdHVydGxlLCBkYXRhc2V0cykgYXJlIG5vdCBzaG93biBpbiB0aGUgYmxvY2sgaW50ZXJmYWNlLlwiXSxcclxuICAgIFtcImhpZGVDb3ZlcmFnZUJ1dHRvblwiLCBcImhpZGVfY292ZXJhZ2VfYnV0dG9uXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGUgY292ZXJhZ2UgYnV0dG9uIGlzIG5vdCBzaG93bi5cIl1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgY2FuIGJlIGNvbW1lbnRlZCB1cG9uIGFuZCByZWdyYWRlZCBieSB0aGUgc3RhZmYgYWZ0ZXJ3YXJkcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIj5TdGFydGluZyBWaWV3OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwic3RhcnRWaWV3XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPklQIFJhbmdlczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuaXBSYW5nZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIElQIEFkZHJlc3NlcyB0aGF0IHdpbGwgYmUgZXhwbGljaXRseSBhbGxvd2VkLiBJZiBibGFuayxcclxuICAgICAgICAgICAgICAgICAgICB0aGVuIGFsbCBhZGRyZXNzZXMgYXJlIGFsbG93ZWQuIElmIGFuIGFkZHJlc3Mgc3RhcnRzIHdpdGggPGNvZGU+XjwvY29kZT4gdGhlbiBpdCBpdCBpcyBleHBsaWNpdGx5XHJcbiAgICAgICAgICAgICAgICAgICAgYmxhY2tsaXN0ZWQsIGJ1dCB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIHR1cm4gd2l0aCBhIDxjb2RlPiE8L2NvZGU+LiBBZGRyZXNzZXMgY2FuIGFsc29cclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlIGEgYml0IG1hc2sgdG8gYWxsb3cgYSByYW5nZSBvZiBhZGRyZXNzZXMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5QcmVsb2FkZWQgRGF0YXNldHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwiZGF0YXNldHNcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke0FTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXSgpO1xyXG4gICAgICAgIC8vIE9ubHkgc3RvcmUgdGhpcyBzZXR0aW5nIGlmIGl0cyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW3NlcnZlck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCwgc2V0dGluZ3MpIHtcclxuICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgIHNldHRpbmdzID0gSlNPTi5wYXJzZShzZXR0aW5ncyk7XHJcbiAgICAgICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyTmFtZSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nc1tzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uW3NlcnZlck5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnNldHRpbmdzLlwiK3NlcnZlck5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1blwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZXNldCBHcm91cFwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXN5bmNcIj48L3NwYW4+IFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkltcG9ydCBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuaW1wb3J0RGF0YXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24udG9nZ2xlSGlzdG9yeU1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdWkuZWRpdG9ycy5weXRob24uaXNIaXN0b3J5QXZhaWxhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsgYWN0aXZlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IHsgJ2FyaWEtcHJlc3NlZCc6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAke0hJU1RPUllfVE9PTEJBUl9IVE1MfVxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG4vKlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJsb2NrcHktcnVuJyBzdHlsZT0nZmxvYXQ6bGVmdCcsXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD0nY3NzOiBleGVjdXRpb24uc3RhdHVzKCkgPT0gXCJydW5uaW5nXCIgPyBcImJ0bi1pbmZvXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0aW9uLnN0YXR1cygpID09IFwiZXJyb3JcIiA/IFwiYnRuLWRhbmdlclwiIDogXCJidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKSB8fCAhYXNzaWdubWVudC51cGxvYWQoKScgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5Jz48L3NwYW4+IFJ1blxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6ICFhc3NpZ25tZW50LnVwbG9hZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ0Jsb2NrcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGFyZ2UnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiBCbG9ja3NcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtaW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ1VwbG9hZCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gSW5zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdTcGxpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVzaXplLWhvcml6b250YWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gU3BsaXRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdUZXh0J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gVGV4dFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1yZXNldCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAhYXNzaWdubWVudC51cGxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCc+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1jYXB0dXJlJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmUnPjwvc3Bhbj4gQ2FwdHVyZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWltcG9ydCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKCkgfHwgKCFhc3NpZ25tZW50LnVwbG9hZCgpICYmIGFzc2lnbm1lbnQuaW1wb3J0YWJsZSgpKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tY2xvdWQtZG93bmxvYWQnPjwvc3Bhbj4gSW1wb3J0IERhdGFzZXRzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdXBsb2FkJz48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkIFB5dGhvbiBDb2RlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1oaXN0b3J5Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzcyc+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaW5zdHJ1Y3RvcicgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj4gU2V0dGluZ3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1lbmdsaXNoJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+IEVuZ2xpc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKVwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9J2NsZWFyOmJvdGgnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJsb2NrcHktdG9vbGJhci1maWxlbmFtZS1waWNrZXJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdfX21haW5fXyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiX19tYWluX19cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gX19tYWluX19cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnc3RhcnRpbmdfY29kZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwic3RhcnRpbmdfY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fc3RhcnRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnZ2l2ZV9mZWVkYmFjayd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiZ2l2ZV9mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fcnVuXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ29uX2NoYW5nZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwib25fY2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBvbl9jaGFuZ2VcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gKi9cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZUV4dHJhQmxvY2tseSgpIHtcclxuICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5jb25maWd1cmVDb250ZXh0TWVudSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTY3JlZW5zaG90XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLlNDUkVFTlNIT1RfQkxPQ0tTXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIGxldCBvbGRGaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qk1MaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9ICgpID0+IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUodGhpcy5vbGRQeXRob25Nb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5pc1BhcnNvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5yZW5kZXIoKTtcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHRoaXMgZG9lc24ndCBlbmQgdXAgbG9va2luZyByaWdodCAoZ28gdG8gYSBkaWZmZXJlbnQgZWRpdG9yLCBjb21lIGJhY2ssIGFuZCBpdCdsbCBiZSBzcXVpc2hlZClcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ibS5yZWZyZXNoKCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIGlmIChuZXdDb250ZW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gdGhpcy5maWxlLmhhbmRsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lc24ndCBtYXR0ZXIsIGZpbGUgd2FzIGFscmVhZHkgc2h1dCBkb3duLlxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBjbG9zaW5nIHRoaXMgZmlsZVxyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0Q29kZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuYm0uZ2V0Q29kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLnNldE1vZGUodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKG1vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlYWRPbmx5KGlzUmVhZE9ubHkpIHtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcclxuICAgICAgICB0aGlzLmJtLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5VcGxvYWRcIiwgXCJcIiwgXCJcIiwgY29kZSwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb2RlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSA9PT0gXCJhbnN3ZXJcIiAmJiByZXN1bHQuZXh0ZW5zaW9uID09PSBcIi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gc2x1Z2dpZnkodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQubmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lm1pbWV0eXBlID0gXCJ0ZXh0L3gtcHl0aG9uXCI7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkRvd25sb2FkXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci10ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRleHRcIilbMF0sIHtcclxuICAgICAgICAgICAgc2hvd0N1cnNvcldoZW5TZWxlY3Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXJzdExpbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlRhYlwiOiBcImluZGVudE1vcmVcIixcclxuICAgICAgICAgICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJFc2NcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uZGlzcGxheS5pbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiRjExXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmNvZGVNaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMuY29kZU1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgIH07XG5cbiAgICByZXNldFN0dWRlbnRNb2RlbCgpIHtcbiAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnN0dWRlbnQ7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFN0ZXAobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LnJlc3VsdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0RXhlY3V0aW9uQnVmZmVyKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHtcbiAgICAgICAgICAgIFwidHJhY2VcIjogW10sXG4gICAgICAgICAgICBcInN0ZXBcIjogMCxcbiAgICAgICAgICAgIFwibGluZVwiOiAwLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGludGVyZmFjZSBhc3BlY3RzIG9mIHRoZSBwcmV2aW91cyBSdW4uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIFRPRE86IENsZWFyIG91dCBhbnkgY292ZXJhZ2UvdHJhY2UvZXJyb3IgaGlnaGxpZ2h0cyBpbiBlZGl0b3JzXG4gICAgICAgIC8vIFJlc2V0IGV4ZWN1dGlvbiBpbiBtb2RlbFxuICAgICAgICB0aGlzLnJlc2V0U3R1ZGVudE1vZGVsKCk7XG4gICAgICAgIC8vIEdldCByZXBvcnRzIHJlYWR5XG4gICAgICAgIHRoaXMucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgZXhlY3V0aW9uIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlc2V0RXhlY3V0aW9uQnVmZmVyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgY29uc29sZSBvZiBwcmludGVkIHN0dWZmXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBvbGQgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcbiAgICB9XG5cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ydW4udXNlKHRoaXMpO1xuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uUnVuLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SdW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25SdW4udXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV4ZWN1dGlvbkVuZF8uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgbGV0IGV2YWx1YXRpb25JbnB1dCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuZXZhbHVhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZhbHVhdGlvbklucHV0KTtcbiAgICAgICAgZXZhbHVhdGlvbklucHV0LnRoZW4oKHVzZXJJbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ldmFsLnVzZSh0aGlzLCB1c2VySW5wdXQpO1xuICAgICAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUZlZWRiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uRXZhbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FdmFsKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uRXZhbC51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXZhbHVhdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25DaGFuZ2UudXNlKHRoaXMpO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgcmV0dXJuIFNrLm1pc2NldmFsLmFzeW5jVG9Qcm9taXNlKCgpID0+XG4gICAgICAgICAgICBTay5pbXBvcnRNYWluV2l0aEJvZHkodGhpcy5jb25maWd1cmF0aW9uLmZpbGVuYW1lLCBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY29kZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZWQgd2hlbmV2ZXIgdGhlIFB5dGhvbiBjb2RlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBvbl9jaGFuZ2UoKSB7XG4gICAgICAgIGxldCBGSUxFTkFNRSA9IFwib25fY2hhbmdlXCI7XG4gICAgICAgIC8vIFNraXAgaWYgdGhlIGluc3RydWN0b3IgaGFzIG5vdCBkZWZpbmVkIGFueXRoaW5nXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLnByb2dyYW1zW0ZJTEVOQU1FXSgpLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY2hhbmdpbmdcIik7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlQ29kZSgpO1xuICAgICAgICAvLyBPbiBzdGVwIGRvZXMgbm90IHBlcmZvcm0gcGFyc2UgYW5hbHlzaXMgYnkgZGVmYXVsdCBvciBydW4gc3R1ZGVudCBjb2RlXG4gICAgICAgIGxldCBlbmdpbmUgPSB0aGlzO1xuICAgICAgICBsZXQgZmVlZGJhY2sgPSB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjaztcbiAgICAgICAgZW5naW5lLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICBlbmdpbmUudmVyaWZ5Q29kZSgpO1xuICAgICAgICBlbmdpbmUudXBkYXRlUGFyc2UoKTtcbiAgICAgICAgZW5naW5lLnJ1bkluc3RydWN0b3JDb2RlKEZJTEVOQU1FLCB0cnVlLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgLy8gU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc2hvdyB1bmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXNcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgIShjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhtb2R1bGUuJGQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZW5naW5lXCIsIFwib25fY2hhbmdlXCIpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYXR0ZW1wdCB0byBjYWxsIHRoZSBkZWZpbmVkIG9uRXhlY3V0aW9uRW5kLFxuICAgICAqIGJ1dCB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlcmUgaXMgbm8gZnVuY3Rpb24gZGVmaW5lZC5cbiAgICAgKi9cbiAgICBleGVjdXRpb25FbmRfKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkVuZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBleGVjdXRpb25CZWdpbl8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uQmVnaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9NT0RVTEUgPSBcImxldCAkYnVpbHRpbm1vZHVsZSA9IGZ1bmN0aW9uKG1vZCl7IHJldHVybiBtb2Q7IH1cIlxyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNrdWxwdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX19mdXR1cmVfXzogU2sucHl0aG9uMyxcclxuICAgICAgICAgICAgLy8gaW1wb3J0XHJcbiAgICAgICAgICAgIHJlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBvcGVuXHJcbiAgICAgICAgICAgIGZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gUHJldmVudHMgcmVhZGluZyBIVE1MIGVsZW1lbnRzIGFzIGZpbGVzXHJcbiAgICAgICAgICAgIGluQnJvd3NlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIGlucHV0XHJcbiAgICAgICAgICAgIGlucHV0ZnVuOiB0aGlzLmlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlucHV0ZnVuVGFrZXNQcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxyXG4gICAgICAgICAgICBpbWFnZVByb3h5OiB0aGlzLmdldEltYWdlUHJveHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8ga2VlcCB0aGUgZ2xvYmFsc1xyXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHRvIGFjY2VzcyBTa3VscHQgYnVpbHQtaW5zLiBUaGlzIGlzIHByZXR0eSBnZW5lcmljLCB0YWtlblxyXG4gICAgICogYWxtb3N0IGRpcmVjdGx5IGZyb20gdGhlIFNrdWxwdCBkb2NzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBweXRob24gZmlsZW5hbWUgKGUuZy4sIFwib3NcIiBvciBcInBwcmludFwiKSB0aGF0IHdpbGwgYmUgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIEphdmFTY3JpcHQgc291cmNlIGNvZGUgb2YgdGhlIGZpbGUgKHdlaXJkLCByaWdodD8pXHJcbiAgICAgKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgaXNuJ3QgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5wdXRNb2NrRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKFNrLnF1ZXVlZElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRJbWFnZVByb3h5KCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBzdWNjZXNzIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgZmFpbHVyZSBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZHVtbXlPdXRTYW5kYm94KCkge1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvcGVkYWwvc2FuZGJveC9zYW5kYm94LnB5XCJdID0gXCJjbGFzcyBTYW5kYm94OiBwYXNzXFxuZGVmIHJ1bigpOiBwYXNzXFxuZGVmIHJlc2V0KCk6IHBhc3NcXG5cIjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi4vdHJhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUsIGNvZGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBmaXggdG8gYmUgY3VycmVudGx5IGFkZGVkIGxpbmVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwiXyA9IFwiICsgY29kZTtcclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gdHJ1ZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkFkZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgdGhpcy5jb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRXZhbHVhdGUuUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludFZhbHVlKFNrLmZmaS5yZW1hcFRvSnMobW9kdWxlLiRkLl8uJHIoKSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dCxcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiB0aGlzLmNvZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3NrX21vZF9pbnN0cnVjdG9yXCI7XHJcblxyXG5jb25zdCBVVElMSVRZX01PRFVMRV9DT0RFID0gXCJ2YXIgJGJ1aWx0aW5tb2R1bGUgPSBcIiArICRza19tb2RfaW5zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gSW5zdHJ1Y3RvcnMgaGF2ZSBubyBsaW1pdHNcclxuICAgICAgICBTay5leGVjTGltaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuICAgICAgICAvLyBNdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcih0cnVlKTtcclxuICAgICAgICAvLyBEaXNhYmxlIGlucHV0IGJveFxyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgLy8gVE9ETyBTay5pbnB1dGZ1biA9IEJsb2NrUHlFbmdpbmUuaW5wdXRNb2NrRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETzogQWxsb3cgaW5wdXQgZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgdGltZXIsIHNvbWVob3dcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCIuL19pbnN0cnVjdG9yL19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge05FV19MSU5FX1JFR0VYfSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwiTm9uZVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ldmFsXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQuZXZhbHVhdGlvbiB8fCBcIk5vbmVcIjtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGZhbHNlLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAvL1NrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX2V2YWwuJGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLiRkKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICBpZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG4ke3RpZmFBbmFseXNpc31cclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG5mcm9tIHBlZGFsLmNhaXQuY2FpdF9hcGkgaW1wb3J0IHBhcnNlX3Byb2dyYW1cclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG4jcHJpbnQoTUFJTl9SRVBPUlQuZmVlZGJhY2tbMF0ubWlzdGFrZVsnZXJyb3InXSlcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZmFsc2UsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIC8vIFRPRE8gTG9nZ2luZyEhISFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fcnVuLiRkO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIGlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vb25fcnVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBCb29sZWFuKHRoaXMuY29kZS50cmltKCkpLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9yYmlkZGVuKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGFjY2Vzc2libGU6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5pbnB1dChwcm9tcHRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi91dGlsaXR5L1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi9wZWRhbC9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJTdGVwc1wiIHRoZSBleGVjdXRpb24gb2YgdGhlIGNvZGUsIG1lYW50IHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayB0byB0aGUgU2t1bHB0XHJcbiAgICAgKiBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gSGFzaCB0aGF0IG1hcHMgdGhlIG5hbWVzIG9mIHZhcmlhYmxlcyAoU3RyaW5ncykgdG8gdGhlaXIgU2t1bHB0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5OdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBjb2x1bW4gbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGl0IGFzIHRoZSBcIlhcIiBwb3NpdGlvbiB0byB0aGUgbGluZU51bWJlcidzIFwiWVwiIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxyXG4gICAgICovXHJcbiAgICBzdGVwKHZhcmlhYmxlcywgbG9jYWxzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xyXG4gICAgICAgICAgICBsZXQgZ2xvYmFscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBUcmFjZSBsb2NhbCB2YXJpYWJsZXMgcHJvcGVybHlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL2xldCBsb2NhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHMobG9jYWxzKTtcclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgYSBwYXJzZVxyXG4gICAgICAgIGxldCBhc3Q7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlID0gU2sucGFyc2UodGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgYXN0ID0gU2suYXN0RnJvbVBhcnNlKHBhcnNlLmNzdCwgdGhpcy5maWxlbmFtZSwgcGFyc2UuZmxhZ3MpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlcIjogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbGFiZWxcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdGhhdCBtYW5hZ2VzIHRoZSBmZWVkYmFjayBhcmVhLCB3aGVyZSB1c2VycyBhcmUgdG9sZCB0aGUgc3RhdGUgb2YgdGhlaXJcbiAgICAgKiBwcm9ncmFtJ3MgZXhlY3V0aW9uIGFuZCBnaXZlbiBndWlkYW5jZS4gQWxzbyBtYW5hZ2VzIHRoZSBjcmVhdGlvbiBvZiB0aGUgVHJhY2UgVGFibGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QmxvY2tQeUZlZWRiYWNrfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnlcIik7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbGFiZWxcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2NyZWVuICh0YWtlcyAxIHNlY29uZCkgdG8gbWFrZSB0aGUgRmVlZGJhY2sgYXJlYSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBmZWVkYmFjayBhcmVhIGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGZWVkYmFja1Zpc2libGUoKSB7XG4gICAgICAgIGxldCB0b3Bfb2ZfZWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIGxldCB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgb3V0cHV0IGN1cnJlbnRseSBpbiB0aGUgZmVlZGJhY2sgYXJlYS4gQWxzbyByZXNldHMgdGhlIHByaW50ZXIgYW5kXG4gICAgICogYW55IGhpZ2hsaWdodGVkIGxpbmVzIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKFwiKlJlYWR5KlwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5oaWRkZW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZmluZEZpcnN0RXJyb3JMaW5lKGZlZWRiYWNrRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZmVlZGJhY2tEYXRhLmxlbmd0aC0xOyBpID49IDA7IGktPSAxKSB7XG4gICAgICAgICAgICBpZiAoXCJwb3NpdGlvblwiIGluIGZlZWRiYWNrRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZWVkYmFja0RhdGFbaV0ucG9zaXRpb24ubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgd2l0aCB0aGVzZSBuZXcgZXhlY3V0aW9uIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IGRhdGFcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTUVTU0FHRSk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5DQVRFR09SWSk7XG4gICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5MQUJFTCk7XG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkhJREUpO1xuICAgICAgICBsZXQgZGF0YSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5EQVRBKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBiYXNlZCBvbiBhc3NpZ25tZW50cycgc2V0dGluZ3NcbiAgICAgICAgbGV0IGhpZGVTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBpZiAoaGlkZVNjb3JlICYmIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbGFiZWwgPSBcIk5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm8gZXJyb3JzIHJlcG9ydGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1hcCB0byBleHBlY3RlZCBCbG9ja1B5IGxhYmVsc1xuICAgICAgICBpZiAoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnN0cnVjdG9yXCIgJiYgbGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gXCJleHBsYWluXCIpIHtcbiAgICAgICAgICAgIGxhYmVsID0gXCJJbnN0cnVjdG9yIEZlZWRiYWNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBwcmVzZW50IGEgbGFjayBvZiBlcnJvciBhcyBiZWluZyBpbmNvcnJlY3RcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vZGVsIGFjY29yZGluZ2x5XG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLm1haW4udXRpbGl0aWVzLm1hcmtkb3duKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgLy8gVE9ETzogSW5zdGVhZCBvZiB0cmFja2luZyBzdHVkZW50IGZpbGUsIGxldCdzIHRyYWNrIHRoZSBpbnN0cnVjdG9yIGZpbGVcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiSW50ZXJ2ZW50aW9uXCIsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgXCJhbnN3ZXIucHlcIik7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPD0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5saW5lcy5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IGFueSBhY2N1bXVsYXRlZCBmZWVkYmFja1xuICAgICAqL1xuICAgIHByZXNlbnRGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cyk7XG5cbiAgICAgICAgLy8gVE9ETzogTG9nZ2luZ1xuICAgICAgICAvL3RoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImZlZWRiYWNrXCIsIGNhdGVnb3J5K1wifFwiK2xhYmVsLCBtZXNzYWdlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGZWVkYmFja1Zpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG5vdGlmeUZlZWRiYWNrVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmxvYXRpbmctZmVlZGJhY2tcIikuc2hvdygpLmZhZGVPdXQoNzAwMCk7XG4gICAgfTtcblxuICAgIHByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgXG4gICAgICAgICAgICBFcnJvciBpbiBpbnN0cnVjdG9yIGZlZWRiYWNrLlxuICAgICAgICAgICAgUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cHJlPjxzdHJvbmc+JHtlcnJvci50cCRuYW1lfTwvc3Ryb25nPjogJHtTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpfTwvcHJlPmA7XG5cbiAgICAgICAgaWYgKGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdHJhY2ViYWNrRm9ybWF0dGVkPSBlcnJvci50cmFjZWJhY2subWFwKGZyYW1lID0+XG4gICAgICAgICAgICAgICAgYEZpbGUgPHNwYW4gY2xhc3M9XCJmaWxlbmFtZVwiPlwiJHtmcmFtZS5maWxlbmFtZX1cIjwvc3Bhbj4sIGxpbmUgPHNwYW4gY2xhc3M9XCJsaW5lbm9cIj4ke2ZyYW1lLmxpbmVub308L3NwYW4+XFxuYCkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDxwcmU+JHt0cmFjZWJhY2tGb3JtYXR0ZWR9PC9wcmU+YDtcbiAgICAgICAgICAgIGxldCBsYXN0X3RyYWNlYmFjayA9IGVycm9yLnRyYWNlYmFjay5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICBpZiAobGFzdF90cmFjZWJhY2suZmlsZW5hbWUgPT09IGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICBsYXN0X3RyYWNlYmFjay5saW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG59IiwiY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5KSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJHtoaWRlSWZFbXB0eX0gfHwgdWkuZmlsZXMuaGFzQ29udGVudHMoJyR7ZmlsZW5hbWV9JylcIj5cclxuICAgICAgICAgICAgJHtmcmllbmRseU5hbWV9PC9hPlxyXG4gICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBGSUxFU19IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1maWxlc1wiXHJcbiAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5maWxlcy52aXNpYmxlXCI+XHJcbjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8c3Ryb25nPlZpZXc6IDwvc3Ryb25nPlxyXG4gICAgPC9saT5cclxuXHJcbiAgICAke21ha2VUYWIoXCJhbnN3ZXIucHlcIil9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fZXZhbC5weScpXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGFydGluZyBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkluc3RydWN0b3IgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IERFTEVUQUJMRV9TSU1QTEVfRklMRVMgPSBbXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5ERUxFVEFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5SRU5BTUFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCIsIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiF0YWdzLmJsb2NrcHlcIiwgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIl07XHJcblxyXG5jbGFzcyBCbG9ja1B5RmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHtcImZpbGVuYW1lXCI6IGtvLm9ic2VydmFibGUoZmlsZW5hbWUpLCBjb250ZW50czoga28ub2JzZXJ2YWJsZShjb250ZW50cyB8fCBcIlwiKX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29uY2F0ZW5hdGVkRmlsZShjb25jYXRlbmF0ZWRGaWxlLCBtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICBpZiAoY29uY2F0ZW5hdGVkRmlsZSkge1xyXG4gICAgICAgIGxldCBmaWxlcyA9IEpTT04ucGFyc2UoY29uY2F0ZW5hdGVkRmlsZSk7XHJcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KGZpbGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wV2F0Y2hpbmdGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoTW9kZWwoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzeXN0ZW0gPSB0aGlzO1xyXG4gICAgICAgIFt0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzXS5mb3JFYWNoKGZpbGVBcnJheSA9PlxyXG4gICAgICAgICAgICBmaWxlQXJyYXkuc3Vic2NyaWJlKGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsRmlsZSA9IGNoYW5nZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJhZGRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWNrIG5ldyBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXN5c3RlbS5uZXdGaWxlKG1vZGVsRmlsZS5maWxlbmFtZSgpLCBtb2RlbEZpbGUuY29udGVudHMoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5ub3RpZnlXYXRjaGVzKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8obW9kZWxGaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcywgXCJhcnJheUNoYW5nZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIHN1Ym1pc3Npb24uY29kZSlcclxuICAgIC8vICFvbl9ydW4ucHksICFvbl9jaGFuZ2UucHksICFvbl9ldmFsLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZWxldmFudCBhc3NpZ25tZW50Ljx3aGF0ZXZlcj5cclxuICAgIC8vIF5zdGFydGluZ19jb2RlLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyBed2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyAhd2hhdGV2ZXIgb3IgP3doYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBlbGVtZW50cyBvZiBhc3NpZ25tZW50LmV4dHJhRmlsZXNcclxuICAgIC8vIE90aGVyd2lzZTpcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIHN1Ym1pc3Npb24uY29kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXcgc3BlY2lhbCBmaWxlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIGZpbGUge0Jsb2NrUHlGaWxlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZUZpbGVfKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlKGNvbnRlbnRzIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdGaWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBuZXcgQmxvY2tQeUZpbGUodGhpcy5tYWluLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXSA9IG5ld0ZpbGU7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8obmV3RmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy9UT0RPOiBNb3ZlIGdldCBsaW5rIGRvd24gdG8gZm9vdGVyLCByZW1vdmUgdmVydGljYWwgYmFyIGZyb20gcXVpY2stbWVudVxyXG5leHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdWJtaXNzaW9uJylcIj5VcGRhdGUgU3VibWlzc2lvbjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnb25FeGVjdXRpb24nKVwiPkV4ZWN1dGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlcnZlci5tZXNzYWdlc1wiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Vc2VyOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmlkXCI+PC9zcGFuPiAoPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5uYW1lXCI+PC9zcGFuPik8L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5Db3Vyc2U6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuY291cnNlSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Hcm91cDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5ncm91cElkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC5pZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQgVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi5pZFwiPjwvc3Bhbj48L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uIFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24udmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiLy8gVE9ETzogU2hvdWxkIGRpc2FibGUgYnV0dG9ucyBpZiB3ZSBjYW4ndCBhY3RpdmF0ZSB0aGVtLlxuXG5leHBvcnQgY29uc3QgSElTVE9SWV9UT09MQkFSX0hUTUwgPSBgXG48ZGl2IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXRvb2xiYXIgY29sLW1kLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5oaXN0b3J5TW9kZVwiPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXN0YXJ0IGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3Rvcnkuc3RhcnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPiBTdGFydFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkucHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj4gUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3IgZm9ybS1jb250cm9sIGN1c3RvbS1zZWxlY3QgbXItMlwiIGFyaWEtdGl0bGU9XCJIaXN0b3J5IFNlbGVjdG9yXCI+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS51c2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZmlsZS1pbXBvcnQnPjwvc3Bhbj4gVXNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5uZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj4gTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm1vc3RSZWNlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+IE1vc3QgUmVjZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuYDtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGRpc3BsYXlpbmcgdGhlIHVzZXIncyBjb2RpbmcgbG9ncyAodGhlaXIgaGlzdG9yeSkuXG4gKiBBIGxpZ2h0d2VpZ2h0IGNvbXBvbmVudCwgaXRzIG9ubHkgam9iIGlzIHRvIG9wZW4gYSBkaWFsb2cuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUhpc3Rvcnl9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlIaXN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWQoaGlzdG9yeSkge1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICQoXCIuYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yXCIpLmVtcHR5KCk7XG4gICAgICAgIGxldCBlZGl0SWQgPSAwO1xuICAgICAgICBoaXN0b3J5XG4gICAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICAgICFlbnRyeS5maWxlX3BhdGguc3RhcnRzV2l0aChcIl9pbnN0cnVjdG9yLlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkNvbXBpbGVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkludGVydmVudGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJYLVN1Ym1pc3Npb24uTE1TXCIpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudF90eXBlID0gUkVNQVBfRVZFTlRfVFlQRVNbZW50cnkuZXZlbnRfdHlwZV0gfHwgZW50cnkuZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkID0gcHJldHR5UHJpbnREYXRlVGltZShlbnRyeS5jbGllbnRfdGltZXN0YW1wKSArXCIgLSBcIitldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlID0gKGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiRmlsZS5FZGl0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIiwge3RleHQ6IGRpc3BsYXllZCwgZGlzYWJsZWQ6IGRpc2FibGV9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRFdmVudChlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiLCBlZGl0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRFdmVudHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yLmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGVkaXRJZC0xKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IuY2hhbmdlKChldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vdmVUb1N0YXJ0KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCgwKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGN1cnJlbnRJZC0xKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZU5leHQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWluKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSwgY3VycmVudElkKzEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9Nb3N0UmVjZW50KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCh0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uc2V0Q29kZSh0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuZmlsZS5oYW5kbGUoY29kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VkaXRFdmVudChlbnRyeSkge1xuICAgICAgICByZXR1cm4gKChlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuRWRpdFwiIHx8XG4gICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5DcmVhdGVcIikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBlbnRyeS5maWxlX3BhdGgpO1xuICAgIH1cblxufVxuXG5jb25zdCBSRU1BUF9FVkVOVF9UWVBFUyA9IHtcbiAgICBcIlNlc3Npb24uU3RhcnRcIjogXCJCZWdhbiBzZXNzaW9uXCIsXG4gICAgXCJYLUlQLkNoYW5nZVwiOiBcIkNoYW5nZWQgSVAgYWRkcmVzc1wiLFxuICAgIFwiRmlsZS5FZGl0XCI6IFwiRWRpdGVkIGNvZGVcIixcbiAgICBcIkZpbGUuQ3JlYXRlXCI6IFwiU3RhcnRlZCBhc3NpZ25tZW50XCIsXG4gICAgXCJSdW4uUHJvZ3JhbVwiOiBcIlJhbiBwcm9ncmFtXCIsXG4gICAgXCJDb21waWxlLkVycm9yXCI6IFwiU3ludGF4IGVycm9yXCIsXG4gICAgXCJYLVN1Ym1pc3Npb24uTE1TXCI6IFwiVXBkYXRlZCBncmFkZVwiXG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXG4gICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgIFwiQXVnXCIsIFwiU2VwdFwiLCBcIk9jdFwiLFxuICAgIFwiTm92XCIsIFwiRGVjXCJcbl07XG5jb25zdCB3ZWVrRGF5cyA9IFtcbiAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLFxuICAgIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsXG4gICAgXCJTYXRcIlxuXTtcblxuZnVuY3Rpb24gaXNTYW1lRGF5KGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QuZ2V0RGF0ZSgpID09PSBzZWNvbmQuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGZpcnN0LmdldE1vbnRoKCkgPT09IHNlY29uZC5nZXRNb250aCgpICYmXG4gICAgICAgIGZpcnN0LmdldEZ1bGxZZWFyKCkgPT09IHNlY29uZC5nZXRGdWxsWWVhcigpO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBhIGRhdGUvdGltZSBzdHJpbmcgYW5kIHJld3JpdGUgaXQgYXMgc29tZXRoaW5nXG4gKiBtb3JlIGh1bWFuIHJlYWRhYmxlLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpbWVTdHJpbmcgLSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgKFwiWVlZWU1NREQgSEhNTVNTXCIpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIEEgaHVtYW4tcmVhZGFibGUgdGltZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHByZXR0eVByaW50RGF0ZVRpbWUodGltZVN0cmluZykge1xuICAgIC8qbGV0IHllYXIgPSB0aW1lU3RyaW5nLnNsaWNlKDAsIDQpLFxuICAgICAgICBtb250aCA9IHBhcnNlSW50KHRpbWVTdHJpbmcuc2xpY2UoNCwgNiksIDEwKS0xLFxuICAgICAgICBkYXkgPSB0aW1lU3RyaW5nLnNsaWNlKDYsIDgpLFxuICAgICAgICBob3VyID0gdGltZVN0cmluZy5zbGljZSg5LCAxMSksXG4gICAgICAgIG1pbnV0ZXMgPSB0aW1lU3RyaW5nLnNsaWNlKDExLCAxMyksXG4gICAgICAgIHNlY29uZHMgPSB0aW1lU3RyaW5nLnNsaWNlKDEzLCAxNSk7Ki9cbiAgICAvLyBUT0RPOiBIYW5kbGUgdGltZXpvbmVzIGNvcnJlY3RseVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwYXN0ID0gbmV3IERhdGUocGFyc2VJbnQodGltZVN0cmluZywgMTApKTtcbiAgICBpZiAoaXNTYW1lRGF5KG5vdywgcGFzdCkpIHtcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5U3RyID0gd2Vla0RheXNbcGFzdC5nZXREYXkoKV07XG4gICAgICAgIGxldCBtb250aFN0ciA9IG1vbnRoTmFtZXNbcGFzdC5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlTdHIgKyBcIiwgXCIgKyBtb250aFN0ciArIFwiIFwiICsgcGFzdC5nZXREYXRlKCk7XG4gICAgICAgIGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gcGFzdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiLCBcIitwYXN0LmdldEZ1bGxZZWFyKCkgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogT3BlbnMgdGhlIGhpc3RvcnkgZGlhbG9nIGJveC4gVGhpcyByZXF1aXJlcyBhIHRyaXAgdG8gdGhlIHNlcnZlciBhbmRcbiAqIG9jY3VycyBhc3luY2hyb25vdXNseS4gVGhlIHVzZXJzJyBjb2RlIGlzIHNob3duIGluIHByZWZvcm1hdHRlZCB0ZXh0XG4gKiB0YWdzIChubyBjb2RlIGhpZ2hsaWdodGluZyBjdXJyZW50bHkpIGFsb25nIHdpdGggdGhlIHRpbWVzdGFtcC5cbiAqL1xuQmxvY2tQeUhpc3RvcnkucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlhbG9nID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nO1xuICAgIHZhciBib2R5ID0gXCI8cHJlPmEgPSAwPC9wcmU+XCI7XG4gICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmdldEhpc3RvcnkoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgYm9keSA9IGRhdGEucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoY29tcGxldGUsIGVsZW0pIHsgXG4gICAgICAgICAgICB2YXIgY29tcGxldGVfc3RyID0gcHJldHR5UHJpbnREYXRlVGltZShlbGVtLnRpbWUpO1xuICAgICAgICAgICAgdmFyIG5ld19saW5lID0gXCI8Yj5cIitjb21wbGV0ZV9zdHIrXCI8L2I+PGJyPjxwcmU+XCIrZWxlbS5jb2RlK1wiPC9wcmU+XCI7XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGUrXCJcXG5cIituZXdfbGluZTtcbiAgICAgICAgfSwgXCJcIik7XG4gICAgICAgIGRpYWxvZy5zaG93KFwiV29yayBIaXN0b3J5XCIsIGJvZHksIGZ1bmN0aW9uKCkge30pO1xuICAgIH0pO1xufTsiLCJpbXBvcnQge1RSQUNFX0hUTUx9IGZyb20gXCJ0cmFjZS5qc1wiO1xuaW1wb3J0IHtESUFMT0dfSFRNTH0gZnJvbSBcImRpYWxvZy5qc1wiO1xuaW1wb3J0IHtGRUVEQkFDS19IVE1MfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcbmltcG9ydCB7RklMRVNfSFRNTH0gZnJvbSBcImZpbGVzLmpzXCI7XG5pbXBvcnQge0ZPT1RFUl9IVE1MfSBmcm9tIFwiZm9vdGVyLmpzXCI7XG5pbXBvcnQge0VESVRPUlNfSFRNTH0gZnJvbSBcImVkaXRvcnMuanNcIjtcbmltcG9ydCB7Q09OU09MRV9IVE1MfSBmcm9tIFwiY29uc29sZS5qc1wiO1xuXG4vKipcbiAqIEBlbnVtIHtzdHJ9XG4gKi9cbmV4cG9ydCBsZXQgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zID0ge1xuICAgIEZFRURCQUNLOiBcImZlZWRiYWNrXCIsXG4gICAgVFJBQ0U6IFwidHJhY2VcIixcbiAgICBOT05FOiBcIm5vbmVcIlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpIHtcbiAgICBsZXQgaGlnaGxpZ2h0VGltZW91dCA9IG51bGw7XG4gICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWdobGlnaHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWdobGlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rpb25zIHByZSBjb2RlXCIpLm1hcCggKGksIGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfSk7XG59XG5cbi8vIFRPRE86IEdldCBzaGFyZWFibGUgbGluayBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICR7RElBTE9HX0hUTUx9XG4gICAgXG4gICAgPCEtLSBIaWRkZW4gQ2FwdHVyZSBDYW52YXMgLS0+XG4gICAgPGNhbnZhcyBpZD0nY2FwdHVyZS1jYW52YXMnIGNsYXNzPSdkLW5vbmUnIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2NhbnZhcz5cbiAgICBcbiAgICA8IS0tIFJvdyAxOiBIZWFkZXIgYW5kIFF1aWNrIE1lbnUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgIFxuICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiAtLT5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMCBibG9ja3B5LXBhbmVsIGJsb2NrcHktaGVhZGVyJ1xuICAgICAgICAgICAgICAgcm9sZT0naGVhZGluZycgYXJpYS1sYWJlbD0nQXNzaWdubWVudCBEZXNjcmlwdGlvbic+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gQXNzaWdubWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD0nMSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2tweS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CbG9ja1B5OiA8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBhc3NpZ25tZW50Lm5hbWUnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBSZXNldCBJbnN0cnVjdGlvbnMgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rpb25zLXJlc2V0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5pbnN0cnVjdGlvbnMucmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IGluc3RydWN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEluc3RydWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiB1aS5pbnN0cnVjdGlvbnMuY3VycmVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXF1aWNrLW1lbnUnXG4gICAgICAgICAgICAgcm9sZT0nbWVudWJhcicgYXJpYS1sYWJlbD0nUXVpY2sgTWVudScgdGl0bGU9XCJRdWljayBNZW51XCI+XG4gICAgICAgICAgICA8IS0tIEdldCBTaGFyZWFibGUgTGluayAtLT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBWaWV3IGFzIGluc3RydWN0b3IgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLnJvbGUuaXNHcmFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGRpc3BsYXkuaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBhcyBpbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDI6IENvbnNvbGUgYW5kIEZlZWRiYWNrIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgXG4gICAgICAgIDwhLS0gQ29uc29sZSAtLT5cbiAgICAgICAgJHtDT05TT0xFX0hUTUx9XG4gICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjayAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlIC0tPlxuICAgICAgICAke0ZFRURCQUNLX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICBcbiAgICAgICAgPCEtLSBUcmFjZSAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlIC0tPlxuICAgICAgICAke1RSQUNFX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMzogRmlsZSBOYXZpZ2F0aW9uIC0tPlxuICAgIDwhLS0ga28gaWY6IHVpLmZpbGVzLnZpc2libGUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgJHtGSUxFU19IVE1MfVxuICAgIDwvZGl2PlxuICAgIDwhLS0gL2tvIC0tPlxuICAgIFxuICAgIDwhLS0gVmlldyBSb3cgLS0+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0VESVRPUlNfSFRNTH1cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRm9vdGVyIFJvdyAtLT4gICAgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0ZPT1RFUl9IVE1MfVxuICAgIDwvZGl2PlxuICAgIFxuPC9kaXY+XG4gICAgYDtcbn07IiwiaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIHNhdmVBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBsZXQgU3RhdHVzU3RhdGUgPSB7XG4gICAgUkVBRFk6IFwicmVhZHlcIixcbiAgICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gICAgUkVUUllJTkc6IFwicmV0cnlpbmdcIixcbiAgICBGQUlMRUQ6IFwiZmFpbGVkXCIsXG4gICAgT0ZGTElORTogXCJvZmZsaW5lXCJcbn07XG5cbi8qKlxuICogT2JqZWN0IGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIGV4dGVybmFsIHNlcnZlcnMuIFRoaXMgaW5jbHVkZXMgZnVuY3Rpb25hbGl0eSBmb3JcbiAqIHNhdmluZyBhbmQgbG9hZGluZyBmaWxlcywgbG9nZ2luZyBldmVudHMsIHNhdmluZyBjb21wbGV0aW9ucywgYW5kIHJldHJpZXZpbmcgaGlzdG9yeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5U2VydmVyfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5U2VydmVyKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgLy8gU2F2ZSBVUkxzIGxvY2FsbHkgZm9yIHF1aWNrZXIgYWNjZXNzXG4gICAgdGhpcy51cmxzID0gbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHM7XG5cbiAgICAvLyBBZGQgdGhlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9uXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJCTE9DS1BZXCIpO1xuXG4gICAgLy8gRmF1bHRSZXNpc3RhbnRDYWNoZVxuICAgIHRoaXMucXVldWUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcImxvZ0V2ZW50XCIsIFwiW11cIikpLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcInVwZGF0ZVN1Ym1pc3Npb25cIiwgXCJbXVwiKSlcbiAgICB9O1xuICAgIHRoaXMuTUFYX1FVRVVFX1NJWkUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogMjAwLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5USU1FUl9ERUxBWSA9IDEwMDA7XG4gICAgdGhpcy5GQUlMX0RFTEFZID0gMjAwMDtcblxuICAgIHRoaXMudGltZXJzID0ge307XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA9IDA7XG5cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcyA9IFtdO1xuICAgIHRoaXMuY3JlYXRlU3Vic2NyaXB0aW9ucygpO1xuICAgIHRoaXMuY2hlY2tDYWNoZXMoKTtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgSVAgYWRkcmVzcyBoYXMgY2hhbmdlZCwgbG9nZ2luZyBhbiBldmVudCBpZiB0aGF0IG9jY3Vycy5cbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0lQID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJJUFwiKSkge1xuICAgICAgICAgICAgbGV0IG9sZElQID0gdGhpcy5zdG9yYWdlLmdldChcIklQXCIpO1xuICAgICAgICAgICAgaWYgKG9sZElQICE9PSByZXNwb25zZS5pcCkge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBcIm9sZFwiOiBvbGRJUCxcbiAgICAgICAgICAgICAgICAgICAgXCJuZXdcIjogcmVzcG9uc2UuaXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiWC1JUC5DaGFuZ2VcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZXJlIGhhdmUgYmVlbiBwcmV2aW91cyBmYWlsdXJlcyBjYWNoZWQsIGFuZCBpZiBzbyByZXRyaWVzIHRoZW0uXG4gKiBUT0RPOiB1cGRhdGVcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tDYWNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVBc3NpZ25tZW50XCIpKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwiYXNzaWdubWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXZlQXNzaWdubWVudFwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpO1xuICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5xdWV1ZSkuZm9yRWFjaChmdW5jdGlvbiAoZW5kcG9pbnQpIHtcbiAgICAgICAgKGZ1bmN0aW9uIHB1c2hBbnlRdWV1ZWQocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IHNlcnZlci51cmxzW2VuZHBvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIDEwMDAsIHB1c2hBbnlRdWV1ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoe1wic3VjY2Vzc1wiOiB0cnVlfSk7XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBmaWxlbmFtZSkge1xuICAgIG1vZGVsLnN1YnNjcmliZSgoY29udGVudHMpID0+XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkgPyB0aGlzLnNhdmVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykgOiBmYWxzZSwgdGhpcyk7XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMucHVzaChmaWxlbmFtZSk7XG59O1xuXG4vKipcbiAqIFRPRE86IGZpeFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuc3VibWlzc2lvbi5jb2RlLCBcImFuc3dlci5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vblJ1biwgXCIhb25fcnVuLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCwgXCIhb25fZXZhbC5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSwgXCIhb25fY2hhbmdlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucywgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSwgXCJec3RhcnRpbmdfY29kZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdHVkZW50RmlsZXMsIFwiI2V4dHJhU3R1ZGVudEZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3RhcnRpbmdGaWxlcywgXCIjZXh0cmFTdGFydGluZ0ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYUluc3RydWN0b3JGaWxlcy5ibG9ja3B5XCIpO1xufTtcblxuLyoqXG4gKlxuICogU29tZSBzdWJzY3JpcHRpb25zIGhhdmUgdG8gaGFwcGVuIGFmdGVyIG90aGVyIHRoaW5ncyBoYXZlIGJlZW4gbG9hZGVkLlxuICogUmlnaHQgbm93IHRoaXMgaXMganVzdCBhZnRlciBDT1JHSVMgbGlicmFyaWVzIGhhdmUgYmVlbiBsb2FkZWQsIGJ1dCBtYXliZVxuICogd2UnbGwgYWRkIG1vcmUgbGF0ZXIgYW5kIHRoaXMgd2lsbCBuZWVkIHRvIGJlIHJlZmFjdG9yZWQuXG4gKlxuICogVE9ETzogZml4XG4gKlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5maW5hbGl6ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy90aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cy5zdWJzY3JpYmUodGhpcy5zYXZlQXNzaWdubWVudC5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwYXlsb2FkIGZvciBhbnkgY29tbXVuaWNhdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgQVBJXG4gKiBAcmV0dXJucyB7e2Fzc2lnbm1lbnRfaWQ6ICosIGNvdXJzZV9pZDogKiwgZ3JvdXBfaWQ6ICosIHVzZXJfaWQ6ICosIHRpbWV6b25lOiAqLCB2ZXJzaW9uOiAqLCB0aW1lc3RhbXA6ICp9fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTZXJ2ZXJEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhc3NpZ25tZW50ID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQ7XG4gICAgbGV0IHVzZXIgPSB0aGlzLm1haW4ubW9kZWwudXNlcjtcbiAgICBsZXQgc3VibWlzc2lvbiA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uO1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtaWNyb3NlY29uZHMgPSBub3cuZ2V0VGltZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiYXNzaWdubWVudF9pZFwiOiBhc3NpZ25tZW50LmlkKCksXG4gICAgICAgIFwiYXNzaWdubWVudF9ncm91cF9pZFwiOiB1c2VyLmdyb3VwSWQoKSxcbiAgICAgICAgXCJjb3Vyc2VfaWRcIjogdXNlci5jb3Vyc2VJZCgpLFxuICAgICAgICBcInN1Ym1pc3Npb25faWRcIjogc3VibWlzc2lvbi5pZCgpLFxuICAgICAgICBcInVzZXJfaWRcIjogdXNlci5pZCgpLFxuICAgICAgICBcInZlcnNpb25cIjogYXNzaWdubWVudC52ZXJzaW9uKCksXG4gICAgICAgIFwidGltZXN0YW1wXCI6IG1pY3Jvc2Vjb25kcyxcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH07XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBhbmQgbWVzc2FnZSBmb3IgdGhlIHJlbGV2YW50IGVuZHBvaW50LlxuICogQHBhcmFtIGVuZHBvaW50IHtzdHJpbmd9IG9uZSBvZiB0aGUgVVJMIGVuZHBvaW50c1xuICogQHBhcmFtIHN0YXR1cyB7U3RhdHVzU3RhdGV9XG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nP31cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2V0U3RhdHVzID0gZnVuY3Rpb24gKGVuZHBvaW50LCBzdGF0dXMsIG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50XShzdGF0dXMpO1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnQgKyBcIk1lc3NhZ2VcIl0obWVzc2FnZSB8fCBcIlwiKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhbiBvdmVybGF5IG9uIHRoZSBzY3JlZW4gdGhhdCBibG9ja3Mgb3BlcmF0aW9uIHVudGlsIHRoZSBzeXN0ZW0gaXMgcmVhZHkuXG4gKiBUaGUgb3ZlcmxheSBnZXRzIHByb2dyZXNzaXZlbHkgZGFya2VyIHRvIGluZGljYXRlIHJlcGVhdGVkIGZhaWx1cmVzLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uIChhdHRlbXB0KSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzICs9IDE7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2tweS1vdmVybGF5XCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwiYmxvY2tweS1vdmVybGF5XCI+IDwvZGl2PicpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIHN3aXRjaCAoYXR0ZW1wdCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM5ODhcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjNjU1XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzMzM1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbi8qKlxuICogVW5kbyBhIGxldmVsIG9mIG92ZXJsYXk7IGlmIHRoaXMgd2FzIHRoZSBsYXN0IGxldmVsLCByZW1vdmVzIGl0IGZyb20gdGhlIHNjcmVlbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuaGlkZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzIC09IDE7XG4gICAgaWYgKHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZW5xdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICAvLyBFbnN1cmUgd2UgaGF2ZSBub3Qgb3ZlcmZpbGxlZCB0aGUgcXVldWVcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5xdWV1ZVtjYWNoZV0ubGVuZ3RoO1xuICAgIGxldCBtYXggPSB0aGlzLk1BWF9RVUVVRV9TSVpFW2NhY2hlXTtcbiAgICBpZiAobGVuZ3RoID4gbWF4KSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdID0gdGhpcy5xdWV1ZVtjYWNoZV0uc2xpY2UobGVuZ3RoIC0gbWF4LCBtYXgpO1xuICAgIH1cbiAgICAvLyBPbmx5IGFkZCB0aGUgZWxlbWVudCBpZiBpdCdzIG5ld1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5wdXNoKGtleSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2RlcXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5zcGxpY2UoaW5kZXgpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBlbmRwb2ludCwgZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgbGV0IHBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5fZW5xdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlcXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcG9zdFJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KHBvc3RSZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWtlIGEgQUpBWCByZXF1ZXN0IHRoYXQsIHVwb24gZmFpbHVyZSwgd2lsbCBjaGVjayB0byBzZWUgaWYgdGhpcyB3YXMgdGhlXG4gKiBsYXRlc3QgYXR0ZW1wdCBmb3IgdGhpcyBgY2FjaGVgIG1hcmtlci4gSWYgc28sIGl0IHdpbGwgYXR0ZW1wdCBhZ2FpbiB1bnRpbFxuICogc3VjY2Vzc2Z1bDsgb3RoZXJ3aXNlLCBpdCBnaXZlcyB1cCB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBBSkFYLXJlYWR5IGRhdGEgdG8gYmUgcG9zdGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IHRpbWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IGNhY2hlIGVudHJ5XG4gKiBAcGFyYW0ge0ludGVnZXJ9IGRlbGF5IC0gVGhlIGN1cnJlbnQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZVxuIHRyeWluZyB0aGUgcmVxdWVzdCBhZ2Fpbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RMYXRlc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5KSB7XG4gICAgbGV0IGNhY2hlID0gZW5kcG9pbnQgKyBmaWxlbmFtZTtcbiAgICBsZXQgcmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjb25uZWN0ZWQgYnV0IGZhaWxlZCwgZG9uJ3QgdHJ5IGFnYWluIGJ1dCBsZXQgdGhlIHVzZXIga25vdyB3aHkuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJzW2NhY2hlXSk7XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVyc1tjYWNoZV0gPSBzZXRUaW1lb3V0KHJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdEJsb2NraW5nID0gZnVuY3Rpb24gKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgIHRoaXMuc2hvd092ZXJsYXkoYXR0ZW1wdHMpO1xuICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cyAtIDEsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkQXNzaWdubWVudCA9IGZ1bmN0aW9uIChhc3NpZ25tZW50X2lkKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdID0gYXNzaWdubWVudF9pZDtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEFzc2lnbm1lbnRcIiwgZGF0YSwgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5sb2FkQXNzaWdubWVudERhdGFfKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVBc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiaGlkZGVuXCJdID0gbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgZGF0YVtcInJldmlld2VkXCJdID0gbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpO1xuICAgICAgICBkYXRhW1wicHVibGljXCJdID0gbW9kZWwuYXNzaWdubWVudC5wdWJsaWMoKTtcbiAgICAgICAgZGF0YVtcInVybFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQudXJsKCk7XG4gICAgICAgIGRhdGFbXCJpcF9yYW5nZXNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKCk7XG4gICAgICAgIGRhdGFbXCJuYW1lXCJdID0gbW9kZWwuYXNzaWdubWVudC5uYW1lKCk7XG4gICAgICAgIGRhdGFbXCJzZXR0aW5nc1wiXSA9IHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpO1xuXG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInNhdmVBc3NpZ25tZW50XCIsIGRhdGEsIDMsICgpID0+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfU0FWSU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKFNhdmUgQXNzaWdubWVudClcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEhpc3RvcnkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpIHtcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkSGlzdG9yeVwiLCBkYXRhLCAyLCBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0hJU1RPUlkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvZ0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X3R5cGUsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgZmlsZV9wYXRoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvZ0V2ZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJldmVudF90eXBlXCJdID0gZXZlbnRfdHlwZTtcbiAgICAgICAgZGF0YVtcImNhdGVnb3J5XCJdID0gY2F0ZWdvcnk7XG4gICAgICAgIGRhdGFbXCJsYWJlbFwiXSA9IGxhYmVsO1xuICAgICAgICBkYXRhW1wibWVzc2FnZVwiXSA9IG1lc3NhZ2U7XG4gICAgICAgIGRhdGFbXCJmaWxlX3BhdGhcIl0gPSBmaWxlX3BhdGg7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcImxvZ0V2ZW50XCIsIDAsICgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbG9hZCBmaWxlcyBhbmQgd2ViIHJlc291cmNlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIHR5cGUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRfZmlsZVwiKSkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcInR5cGVcIl0gPSB0eXBlO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcodGhpcy51cmxzLmxvYWRfZmlsZSwgZGF0YSwgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2socmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5zZXRTdGF0dXMoXCJGYWlsdXJlXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKFwiU2VydmVyIGZhaWx1cmUhIFJlcG9ydCB0byBpbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JDYWxsYmFjayhcIk5vIGZpbGUgc2VydmVyIGF2YWlsYWJsZS5cIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoTG9hZCBGaWxlKVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgY29udGVudHMsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsYXkgPSB0aGlzLlRJTUVSX0RFTEFZO1xuICAgIH1cbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUZpbGVcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJjb2RlXCJdID0gY29udGVudHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVN1Ym1pc3Npb24gPSBmdW5jdGlvbiAoc2NvcmUsIGNvcnJlY3QsIGhpZGRlbk92ZXJyaWRlLCBmb3JjZVVwZGF0ZSkge1xuICAgIGxldCBjYWxsYmFjayA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzY29yZVwiXSA9IHNjb3JlO1xuICAgICAgICBkYXRhW1wiY29ycmVjdFwiXSA9IGNvcnJlY3Q7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5fb3ZlcnJpZGVcIl0gPSBoaWRkZW5PdmVycmlkZTtcbiAgICAgICAgZGF0YVtcImZvcmNlX3VwZGF0ZVwiXSA9IGZvcmNlVXBkYXRlO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IuZ2V0UG5nRnJvbUJsb2NrcygocG5nRGF0YSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBwbmdEYXRhO1xuICAgICAgICAgICAgaWYgKGltZy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGljdC5tcCRhc3Nfc3Vic2NyaXB0KFNrLmZmaS5yZW1hcFRvUHkoa2V5KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2R1bGVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShwcm9wZXJ0eSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtb2Quc3R1ZGVudCA9IFNrLm1pc2NldmFsLmNhbGxzaW1PclN1c3BlbmQobW9kLlN0dWRlbnREYXRhKTtcbiAgICBcbiAgICBtb2QuZ2V0X3N0dWRlbnRfZGF0YSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9kYXRhXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBtb2Quc3R1ZGVudDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbW9kO1xufTtcbiIsIi8qKlxuICogSGVscGVyIG9iamVjdCBmb3IgaW50ZXJmYWNpbmcgd2l0aCB0aGUgTG9jYWxTdG9yYWdlLiBUaGUgTG9jYWxTdG9yYWdlXG4gKiBicm93c2VyIEFQSSBhbGxvd3MgZm9yIG9mZmxpbmUgc3RvcmFnZS4gVGhhdCBBUEkgaXMgdmVyeSB1bnNvcGhpc3RpY2F0ZWQsXG4gKiBhbmQgaXMgZXNzZW50aWFsbHkgYSBsYW1lIGtleS12YWx1ZSBzdG9yZS4gVGhpcyBvYmplY3Qgc2l0cyBvbiB0b3BcbiAqIGFuZCBwcm92aWRlcyBhIG51bWJlciBvZiB1c2VmdWwgdXRpbGl0aWVzLCBpbmNsdWRpbmcgcnVkaW1lbnRhcnljYWNoZVxuICogY2FjaGUgZXhwaXJhdGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtMb2NhbFN0b3JhZ2VXcmFwcGVyfVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIEEgbmFtZXNwYWNlIHRvIHVzZSBpbiBncm91cGluZyBhY2Nlc3MgdG8gbG9jYWxzdG9yYWdlLiBUaGlzIGtlZXBzIGFjY2VzcyBjbGVhbiBhbmQgb3JnYW5pemVkLCB3aGlsZSBhbHNvIG1ha2luZyBpdCBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZVdyYXBwZXIobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG59XG4vKipcbiAqIEEgbWV0aG9kIGZvciBhZGRpbmcgYSBrZXkvdmFsdWUgcGFpciB0byBMb2NhbFN0b3JhZ2UuXG4gKiBOb3RlIHRoYXQgYm90aCBwYXJhbWV0ZXJzIG11c3QgYmUgc3RyaW5ncyAoSlNPTi5zdHJpbmdpZnkgaXMgeW91ciBmcmllbmQpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5LlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5zZXQgPSAgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICogSWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQuXG4gKiBUaGlzIGRlZmF1bHQgd2lsbCBiZSBzZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZhdWx0VmFsdWUgLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UuIE11c3QgYmUgYSBzdHJpbmcuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldERlZmF1bHQgPSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgZ2l2ZW4ga2V5IGlzIGluIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB0ZXN0IGV4aXN0ZW5jZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5JR05PUkVEX0dMT0JBTFMgPSBbXCJfX25hbWVfX1wiLCBcIl9fZG9jX19cIiwgXCJfX3BhY2thZ2VfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NtZXRob2RcIiwgXCJwcm9wZXJ0eVwiLCBcInN0YXRpY21ldGhvZFwiXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5JR05PUkVEX0dMT0JBTFMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFwiXyRydyRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfJHJuJFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IEJsb2NrUHlUcmFjZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHtcIm5hbWVcIjogcHJvcGVydHksIFwidHlwZVwiOiBcIlVua25vd25cIiwgXCJ2YWx1ZVwiOiB2YWx1ZS50b1N0cmluZygpfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFNrLmJ1aWx0aW4ubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXMucHVzaCh2YWx1ZS4kZC5fX25hbWVfXy52KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcInByb3BlcnRpZXNcIjogcmVzdWx0LCBcIm1vZHVsZXNcIjogbW9kdWxlc307XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFNrdWxwdCB2YWx1ZSBpbnRvIGEgbW9yZSBlYXNpbHkgcHJpbnRhYmxlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAtIHRoZSBza3VscHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZnVuYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQXJndW1lbnRzOiBcIit2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMuam9pbihcIiwgXCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIE5vIGFyZ3VtZW50c1wiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm1vZHVsZTogcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5zdHI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbExlbmd0aCB8fCB2YWx1ZS52Lmxlbmd0aCA8PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUT0RPOiB2aWV3RXhhY3RWYWx1ZSIsIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7YW55dGhpbmd9IG5lZWRsZSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtBcnJheX0gaGF5c3RhY2sgLSBUaGUgbGlzdCB0byBzZWFyY2guXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50IGV4aXN0c1xuICovXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSwgcHJlc2VydmluZyBvcmRlci5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqIENvdXJ0ZXN5OlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU4NDM3MC9ob3ctdG8tbWVyZ2UtdHdvLWFycmF5cy1pbi1qYXZhc2NyaXB0LWFuZC1kZS1kdXBsaWNhdGUtaXRlbXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB1bmlxdWlmeS4gRWxlbWVudHMgY29tcGFyZWQgd2l0aCA9PT0uXG4gKi9cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycmF5KSB7XG4gICAgdmFyIGEgPSBhcnJheS5jb25jYXQoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZvcih2YXIgaj1pKzE7IGo8YS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYoYVtpXSA9PT0gYVtqXSkge2Euc3BsaWNlKGotLSwgMSk7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBhbiBhcnJheSBiYXNlZFxuICogb24gYW4gXCJhZGRBcnJheVwiIGFuZCBcInJlbW92ZUFycmF5XCIuIEFueSBlbGVtZW50XG4gKiBmb3VuZCBpbiByZW1vdmVBcnJheSBpcyByZW1vdmVkIGZyb20gdGhlIGZpcnN0IGFycmF5XG4gKiBhbmQgYWxsIHRoZSBlbGVtZW50cyBvZiBhZGRBcnJheSBhcmUgYWRkZWQuXG4gKiBBbnkgZHVwbGljYXRlIGl0ZW1zIGFyZSByZW1vdmVkLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gdGhlIGFycmF5IHRvIG1hbmlwdWxhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFkZEFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHJlbW92ZUFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBleHBhbmRBcnJheShhcnJheSwgYWRkQXJyYXksIHJlbW92ZUFycmF5KSB7XG4gICAgdmFyIGNvcHlBcnJheSA9IGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlVbmlxdWUoY29weUFycmF5LmNvbmNhdChhZGRBcnJheSkpO1xufVxuXG4vKipcbiAqIERlZXBseSBjbG9uZXMgYSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgQSBub2RlIHRvIGNsb25lXG4gKiBAcmV0dXJuIHtOb2RlfSBBIGNsb25lIG9mIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgLy8gSWYgdGhlIG5vZGUgaXMgYSB0ZXh0IG5vZGUsIHRoZW4gcmUtY3JlYXRlIGl0IHJhdGhlciB0aGFuIGNsb25lIGl0XG4gICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PSAzID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuIFxuICAgIC8vIFJlY3Vyc2UgICAgIFxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBJbmRlbnRzIHRoZSBnaXZlbiBzdHJpbmcgYnkgNCBzcGFjZXMuIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbXVsdGktbGluZSBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGZvdXIgc3BhY2VzIGFkZGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBuZXcgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oPz0uKS9nbSwgXCIgICAgXCIpO1xufVxuXG4vKipcbiAqIFR1cm5zIHNwYWNlcyBpbnRvIHVuZGVyc2NvcmVzIGluIHRoZSBzdHJpbmcsIG1ha2VzIGl0IGxvd2VyY2FzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB0aGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1ZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIFtgbWluYCwgYG1heGBdLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VzdCBwb3NzaWJsZSBpbnRlZ2VyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGludGVnZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbixtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBzb21lIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc2FmZWx5IHdyaXR0ZW4gaW50byBhbiBIVE1MIGJveC5cbiAqIFRoaXMgaW5jbHVkZXMgcmVwbGFjaW5nIHNwZWNpYWwgSFRNTCBjaGFyYWN0ZXJzICgmLCA8LCA+LCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHRleHQgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSFRNTC1zYWZlIHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9