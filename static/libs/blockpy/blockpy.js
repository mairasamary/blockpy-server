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

      if (assignment.on_change) {
        this.components.fileSystem.newFile("!on_change.py");
      }

      this.model.assignment.onEval(assignment.on_eval || null);

      if (assignment.on_eval) {
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

        if (modelFile === undefined) {
          this.observeFile_(existingFile);
        } else {
          existingFile.handle = modelFile;
        }

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
var LOCAL_STORAGE_REF;

try {
  LOCAL_STORAGE_REF = localStorage;
  var mod = "BLOCKPY_LOCALSTORAGE_TEST";
  LOCAL_STORAGE_REF.setItem(mod, mod);
  LOCAL_STORAGE_REF.removeItem(mod);
} catch (e) {
  LOCAL_STORAGE_REF = {
    _data: {},
    setItem: function setItem(id, val) {
      return this._data[id] = String(val);
    },
    getItem: function getItem(id) {
      return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
    },
    removeItem: function removeItem(id) {
      return delete this._data[id];
    },
    clear: function clear() {
      return this._data = {};
    }
  };
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

LocalStorageWrapper.prototype.set = function (key, value) {
  LOCAL_STORAGE_REF.setItem(this.namespace + "_" + key + "_value", value);
  LOCAL_STORAGE_REF.setItem(this.namespace + "_" + key + "_timestamp", $.now());
};
/**
 * A method for removing a key from LocalStorage.
 *
 * @param {String} key - The name of the key to remove.
 */


LocalStorageWrapper.prototype.remove = function (key) {
  LOCAL_STORAGE_REF.removeItem(this.namespace + "_" + key + "_value");
  LOCAL_STORAGE_REF.removeItem(this.namespace + "_" + key + "_timestamp");
};
/**
 * A method for retrieving the value associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the value for.
 */


LocalStorageWrapper.prototype.get = function (key) {
  return LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_value");
};
/**
 * A method for retrieving the time associated with the given key.
 *
 * @param {String} key - The name of the key to retrieve the time for.
 * @returns {Integer} - The timestamp (local epoch) when the key was last set.
 */


LocalStorageWrapper.prototype.getTime = function (key) {
  return parseInt(LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_timestamp"));
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
  return LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_value") !== null;
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
  var stored_time = LOCAL_STORAGE_REF.getItem(this.namespace + "_" + key + "_timestamp");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3M/OTgyOSIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3M/N2M4NCIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hYnN0cmFjdF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9weXRob24uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvdGFncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90ZXh0LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9jb25maWd1cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ldmFsLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fY2hhbmdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fcnVuLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3N0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZpbGVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NlcnZlci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NrX21vZF9pbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3RyYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9ibG9ja3B5L2V4dGVybmFsIFwia29cIiJdLCJuYW1lcyI6WyJCbG9ja1B5IiwiY29uZmlndXJhdGlvbiIsImFzc2lnbm1lbnQiLCJzdWJtaXNzaW9uIiwiaW5pdE1vZGVsIiwidW5kZWZpbmVkIiwic2V0QXNzaWdubWVudCIsImluaXRNYWluIiwiaW5pdFV0aWxpdGllcyIsImluaXRNb2RlbE1ldGhvZHMiLCJ0dXJuT25IYWNrcyIsImluaXRJbnRlcmZhY2UiLCJhcHBseU1vZGVsIiwiaW5pdENvbXBvbmVudHMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJmaWxlU3lzdGVtIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsInNpemUiLCJoaWRlRXZhbHVhdGUiLCJBQ1RJVkUiLCJiYWRnZSIsInRvTG93ZXJDYXNlIiwidHJhY2UiLCJsaW5lIiwic3RlcCIsInRyYWNlRGF0YSIsImZpcnN0IiwiYmFja3dhcmQiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJmb3J3YXJkIiwibmV4dCIsIm1pbiIsImxhc3QiLCJmaWxlcyIsInZpc2libGUiLCJoaWRlRmlsZXMiLCJoYXNDb250ZW50cyIsInBhdGgiLCJzb21lIiwiZmlsZSIsImxlbmd0aCIsImFkZCIsImRlbGV0ZUZpbGUiLCJleHRyYVN0dWRlbnRGaWxlcyIsIm9ic2VydmVDb25jYXRlbmF0ZWRGaWxlIiwiZWRpdG9ycyIsImdldEVkaXRvciIsInZpZXciLCJoaWRlRWRpdG9ycyIsIm1hcCIsInN1YnN0ciIsIm1ha2VNb2RlbEZpbGUiLCJjb250ZW50cyIsImNhblNhdmUiLCJjYW5EZWxldGUiLCJVTkRFTEVUQUJMRV9GSUxFUyIsImluZGV4T2YiLCJjYW5SZW5hbWUiLCJVTlJFTkFNQUJMRV9GSUxFUyIsInVwbG9hZCIsInVwbG9hZEZpbGUiLCJiaW5kIiwiZG93bmxvYWQiLCJkb3dubG9hZEZpbGUiLCJpbXBvcnREYXRhc2V0IiwiY29yZ2lzIiwib3BlbkRpYWxvZyIsInB5dGhvbiIsImZ1bGxzY3JlZW4iLCJjb2RlTWlycm9yIiwicHl0aG9uRWRpdG9yIiwiYm0iLCJ0ZXh0RWRpdG9yIiwic2V0T3B0aW9uIiwiZ2V0T3B0aW9uIiwidXBkYXRlTW9kZSIsIm5ld01vZGUiLCJvbGRQeXRob25Nb2RlIiwiaXNIaXN0b3J5QXZhaWxhYmxlIiwiaXNFbmRwb2ludENvbm5lY3RlZCIsInR1cm5PZmZIaXN0b3J5TW9kZSIsInVwZGF0ZUVkaXRvciIsInNldFJlYWRPbmx5IiwidHVybk9uSGlzdG9yeU1vZGUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9hZCIsImRpYWxvZyIsIkVSUk9SX0xPQURJTkdfSElTVE9SWSIsInRvZ2dsZUhpc3RvcnlNb2RlIiwibW92ZVRvU3RhcnQiLCJtb3ZlUHJldmlvdXMiLCJtb3ZlTmV4dCIsIm1vc3RSZWNlbnQiLCJtb3ZlVG9Nb3N0UmVjZW50IiwidXNlIiwic2F2ZSIsImV4ZWN1dGUiLCJydW4iLCJlbmdpbmUiLCJldmFsdWF0ZSIsIm1lc3NhZ2VzIiwibWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyIsImFwcGx5QmluZGluZ3MiLCJtYWluIiwidGV4dCIsIkVhc3lNREUiLCJwcm90b3R5cGUiLCJCbG9ja1B5RGlhbG9nIiwiZmluZCIsIkJsb2NrUHlGZWVkYmFjayIsIkJsb2NrUHlUcmFjZSIsIkJsb2NrUHlDb25zb2xlIiwiQmxvY2tQeUVuZ2luZSIsIkJsb2NrUHlGaWxlU3lzdGVtIiwiRWRpdG9ycyIsImJ5TmFtZSIsIkJsb2NrUHlTZXJ2ZXIiLCJCbG9ja1B5Q29yZ2lzIiwiQmxvY2tQeUhpc3RvcnkiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ2YWwiLCJwcm9wIiwiY2xpY2siLCJrZXl1cCIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJDb25zb2xlTGluZUV2YWx1YXRlIiwiQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIiwidGFnIiwicHJpbnRlclRhZyIsIk1JTklNVU1fV0lEVEgiLCJNSU5JTVVNX0hFSUdIVCIsIkRFRkFVTFRfSEVJR0hUIiwiaGVpZ2h0IiwiY2xlYXIiLCJyZW1vdmVBbGwiLCJsaW5lQnVmZmVyIiwicGxvdEJ1ZmZlciIsImVtcHR5IiwidHVydGxlTGluZSIsIlR1cnRsZUdyYXBoaWNzIiwidGFyZ2V0IiwiZ2V0VHVydGxlTGluZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJhc3NldHMiLCJsb2FkQXNzZXQiLCJyZW5kZXIiLCJjdXJyZW50UHJpbnRlckRpbWVuc2lvbiIsInBhZ2UiLCJlYWNoIiwiYXR0ciIsInNob3ciLCJoaWRlIiwibGluZVRleHQiLCJmbHVzaCIsImNoYXJBdCIsInNwbGl0TGluZXMiLCJzcGxpdCIsImFkZENvbnRlbnQiLCJpIiwicHVzaCIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsImxvYWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzbHVnZ2VkTmFtZSIsInRpdGxlTmFtZSIsImltZ1NyYyIsInRpdGxlIiwib3ZlcnZpZXciLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwib25jbG9zZSIsIm1vZGFsIiwiZHJhZ2dhYmxlIiwib24iLCJFUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UIiwiY29uZmlybSIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiZXZlbnQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsIndvcmtzcGFjZSIsImNvbmZpZ3VyZUNvbnRleHRNZW51Iiwib3B0aW9ucyIsImVuYWJsZWQiLCJjYWxsYmFjayIsIm9sZEZpbGVuYW1lIiwiY3VycmVudEJNTGlzdGVuZXIiLCJhZGRDaGFuZ2VMaXN0ZW5lciIsImlzUGFyc29ucyIsImRlbGV0ZUZpbGVMb2NhbGx5XyIsInNldENvZGUiLCJnZXRDb2RlIiwicmVtb3ZlQ2hhbmdlTGlzdGVuZXIiLCJzZXRNb2RlIiwiaXNSZWFkT25seSIsImVuZHNXaXRoIiwiUHl0aG9uRWRpdG9yIiwiVEFHU19FRElUT1JfSFRNTCIsIlRhZ3NFZGl0b3JWaWV3IiwiVGFnc0VkaXRvciIsIlRFWFRfRURJVE9SX0hUTUwiLCJUZXh0RWRpdG9yVmlldyIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJzaG93Q3Vyc29yV2hlblNlbGVjdGluZyIsImxpbmVOdW1iZXJzIiwiZmlyc3RMaW5lTnVtYmVyIiwiaW5kZW50VW5pdCIsImV4dHJhS2V5cyIsImNtIiwiYmx1ciIsInNldFZhbHVlIiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidGhlbiIsImZhaWx1cmUiLCJkaXNhYmxlRmVlZGJhY2siLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxlb3BlbiIsIm9wZW5GaWxlIiwiZmlsZXdyaXRlIiwid3JpdGVGaWxlIiwicHJpbnQiLCJpbkJyb3dzZXIiLCJpbnB1dGZ1biIsImlucHV0ZnVuVGFrZXNQcm9tcHQiLCJpbWFnZVByb3h5IiwiZ2V0SW1hZ2VQcm94eSIsInJldGFpbkdsb2JhbHMiLCJ3YXJuIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50Iiwic3R1ZGVudENvZGVTYWZlIiwiZXZhbHVhdGlvbiIsImR1bW15T3V0U2FuZGJveCIsImxpbmVPZmZzZXQiLCJORVdfTElORV9SRUdFWCIsIlNVQ0NFU1MiLCJTQ09SRSIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwidGlmYUFuYWx5c2lzIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInRvcF9vZl9lbGVtZW50IiwiYm90dG9tX29mX2VsZW1lbnQiLCJvdXRlckhlaWdodCIsImJvdHRvbV9vZl9zY3JlZW4iLCJ0b3Bfb2Zfc2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJsaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJmYWRlT3V0IiwiZmlsZW5hbWVFeGVjdXRlZCIsImFyZ3MiLCJ0cmFjZWJhY2siLCJ0cmFjZWJhY2tGb3JtYXR0ZWQiLCJmcmFtZSIsImxpbmVubyIsImxhc3RfdHJhY2ViYWNrIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIkZJTEVTX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiY29uY2F0ZW5hdGVkRmlsZSIsIm1vZGVsRmlsZUxpc3QiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsImZvdW5kIiwiRk9PVEVSX0hUTUwiLCJjdXJyZW50SWQiLCJlZGl0RXZlbnRzIiwic2VsZWN0b3IiLCJlZGl0SWQiLCJlbnRyeSIsImZpbGVfcGF0aCIsImV2ZW50X3R5cGUiLCJSRU1BUF9FVkVOVF9UWVBFUyIsImRpc3BsYXllZCIsInByZXR0eVByaW50RGF0ZVRpbWUiLCJjbGllbnRfdGltZXN0YW1wIiwiZGlzYWJsZSIsIm9wdGlvbiIsImRpc2FibGVkIiwiaXNFZGl0RXZlbnQiLCJldnQiLCJwYXJzZUludCIsIm1vbnRoTmFtZXMiLCJ3ZWVrRGF5cyIsImlzU2FtZURheSIsInNlY29uZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidGltZVN0cmluZyIsIm5vdyIsIkRhdGUiLCJwYXN0IiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZGF5U3RyIiwiZ2V0RGF5IiwibW9udGhTdHIiLCJkYXRlIiwiZ2V0SGlzdG9yeSIsInJldmVyc2UiLCJyZWR1Y2UiLCJjb21wbGV0ZSIsImVsZW0iLCJjb21wbGV0ZV9zdHIiLCJ0aW1lIiwibmV3X2xpbmUiLCJoaWdobGlnaHRUaW1lb3V0IiwiYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJUUkFDRV9IVE1MIiwiUkVUUllJTkciLCJPRkZMSU5FIiwic3RvcmFnZSIsInF1ZXVlIiwiZ2V0RGVmYXVsdCIsIk1BWF9RVUVVRV9TSVpFIiwiVElNRVJfREVMQVkiLCJGQUlMX0RFTEFZIiwidGltZXJzIiwib3ZlcmxheSIsImJsb2NraW5nQXR0ZW1wdHMiLCJjYWNoZWRGaWxlbmFtZXMiLCJjcmVhdGVTdWJzY3JpcHRpb25zIiwiY2hlY2tDYWNoZXMiLCJjaGVja0lQIiwib2xkSVAiLCJpcCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJwdXNoQW55UXVldWVkIiwiX3Bvc3RSZXRyeSIsImNyZWF0ZUZpbGVTdWJzY3JpcHRpb24iLCJjcmVhdGVTZXJ2ZXJEYXRhIiwibWljcm9zZWNvbmRzIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwic2hvd092ZXJsYXkiLCJhdHRlbXB0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNzcyIsImhpZGVPdmVybGF5IiwiX2VucXVldWVEYXRhIiwiY2FjaGUiLCJfZGVxdWV1ZURhdGEiLCJzcGxpY2UiLCJkZWxheSIsInBvc3RSZXF1ZXN0IiwicG9zdCIsInRleHRTdGF0dXMiLCJyZXF1ZXN0IiwiY2FjaGVkVGltZSIsIl9wb3N0QmxvY2tpbmciLCJhdHRlbXB0cyIsImVycm9yVGhyb3duIiwibG9hZEFzc2lnbm1lbnREYXRhXyIsIkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCIsImVycm9yQ2FsbGJhY2siLCJsb2FkX2ZpbGUiLCJoaWRkZW5PdmVycmlkZSIsImZvcmNlVXBkYXRlIiwiZ2V0UG5nRnJvbUJsb2NrcyIsInBuZ0RhdGEiLCJpbWciLCJtb2QiLCJub25lIiwiYnVpbHRpbiIsIm5vbmUkIiwicHJpb3IiLCJ0aW1laXQiLCJmdW5jIiwicHlDaGVja0FyZ3MiLCJkaWZmZXJlbmNlIiwiZGVidWciLCJnZXRfb3V0cHV0IiwiaXRlbSIsInRvU2t1bHB0IiwibGlzdCIsInJlc2V0X291dHB1dCIsInF1ZXVlX2lucHV0IiwicHlDaGVja1R5cGUiLCJjaGVja1N0cmluZyIsImdldF9wcm9ncmFtIiwiZ2V0X2V2YWx1YXRpb24iLCJ0cmFjZV9saW5lcyIsImdldF9zdHVkZW50X2Vycm9yIiwidHVwbGUiLCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IiLCJiYWNrdXBUaW1lIiwibGltaXRfZXhlY3V0aW9uX3RpbWUiLCJleGVjU3RhcnQiLCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lIiwic3VwcHJlc3Nfc2Nyb2xsaW5nIiwiZ2V0X3Bsb3RzIiwib3V0cHV0cyIsImdyYXBoIiwicGxvdCIsIm5ld1Bsb3QiLCJ2IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJoYXNPd25Qcm9wZXJ0eSIsIm1wJGFzc19zdWJzY3JpcHQiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwiTE9DQUxfU1RPUkFHRV9SRUYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIl9kYXRhIiwiU3RyaW5nIiwiZ2V0SXRlbSIsIm5hbWVzcGFjZSIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJJR05PUkVEX0dMT0JBTFMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCJzcSRsZW5ndGgiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsIm5vZGUiLCJjbG9uZSIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlVmFsdWUiLCJjaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInJhbmRvbUludGVnZXIiLCJmbG9vciIsInJhbmRvbSIsIkJsb2NrbHkiLCJXb3Jrc3BhY2VTdmciLCJzaHVmZmxlIiwibWV0cmljcyIsImdldE1ldHJpY3MiLCJ2aWV3V2lkdGgiLCJ2aWV3SGVpZ2h0IiwiYmxvY2tzIiwiZ2V0VG9wQmxvY2tzIiwibWF4aW1hbF9pbmNyZWFzZSIsImdldFJlbGF0aXZlVG9TdXJmYWNlWFkiLCJtb3ZlQnkiLCJtb3ZlRWxlbWVudHMiLCJtb3ZlQ2hlY2siLCJpc1NrQnVpbHRpbiIsIm9iaiIsImxuZyIsImlzQXN0Tm9kZSIsIm1peGVkUmVtYXBUb1B5IiwiayIsImt2cyIsImFyciIsImNhbGwiLCJzdWJ2YWwiLCJhc3NrJCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7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QUFXd0MsSUFBZixDQUFvQmlGLEdBQXBCLENBQVA7QUFDSCxLQVhELE1BV0s7QUFDRCxhQUFPTCxHQUFQO0FBQ0g7QUFDSixHQWZNLE1BZUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTyxJQUFJNXJCLEVBQUUsQ0FBQ3drQixPQUFILENBQVcyQyxHQUFmLENBQW1CeUUsR0FBbkIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxXQUFPNXJCLEVBQUUsQ0FBQ3drQixPQUFILENBQVc2SCxLQUFYLENBQWlCVCxHQUFqQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFNBQW5CLEVBQThCO0FBQ2pDLFdBQU8sSUFBSTVyQixFQUFFLENBQUN3a0IsT0FBSCxDQUFXd0UsSUFBZixDQUFvQjRDLEdBQXBCLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBRyxPQUFPQSxHQUFQLEtBQWUsVUFBbEIsRUFBOEI7QUFDakMsV0FBTyxJQUFJNXJCLEVBQUUsQ0FBQ3drQixPQUFILENBQVcyQyxHQUFmLENBQW1CeUUsR0FBRyxDQUFDLzhCLElBQXZCLENBQVA7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDN09ELG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6ImJsb2NrcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJsb2NrcHlcIiwgW1wialF1ZXJ5XCIsIFwia29cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxvY2tweVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wia29cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Jsb2NrcHkuanNcIik7XG4iLCJpbXBvcnQgXCIuL2Nzcy9ibG9ja3B5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCJzdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc0VudW19IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiZWRpdG9yL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwic2VydmVyLmpzXCI7XHJcbmltcG9ydCB7bWFrZUludGVyZmFjZSwgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucywgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfSBmcm9tIFwiaW50ZXJmYWNlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc30gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIEJsb2NrUHlGaWxlU3lzdGVtLFxyXG4gICAgbG9hZENvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBtYWtlTW9kZWxGaWxlLFxyXG4gICAgb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBVTkRFTEVUQUJMRV9GSUxFUyxcclxuICAgIFVOUkVOQU1BQkxFX0ZJTEVTXHJcbn0gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi90cmFjZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb25zb2xlfSBmcm9tIFwiLi9jb25zb2xlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZlZWRiYWNrfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5U2VydmVyfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5RGlhbG9nfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWx9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvcmdpcywgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9IGZyb20gXCIuL2Nvcmdpc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlIaXN0b3J5fSBmcm9tIFwiLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQge19JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfTtcclxuXHJcbi8qKlxyXG4gKiBNYWpvciBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgYSBCbG9ja1B5IGluc3RhbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIC0gVXNlciBsZXZlbCBzZXR0aW5ncyAoZS5nLiwgd2hhdCBlZGl0b3IgbW9kZSwgd2hldGhlciB0byBtdXRlIHNlbWFudGljIGVycm9ycywgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NpZ25tZW50IC0gQXNzaWdubWVudCBsZXZlbCBzZXR0aW5ncyAoZGF0YSBhYm91dCB0aGUgbG9hZGVkIGFzc2lnbm1lbnQsIHVzZXIsIHN1Ym1pc3Npb24sIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VibWlzc2lvbiAtIEluY2x1ZGVzIHRoZSBzb3VyY2UgY29kZSBvZiBhbnkgcHJvZ3JhbXMgdG8gYmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbChjb25maWd1cmF0aW9uKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzaWdubWVudChjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIEJsb2NrUHkgb2JqZWN0IGJ5IGluaXRpYWxpemluZyBpdHMgaW50ZXJmYWNlLFxyXG4gICAgICogbW9kZWwsIGFuZCBjb21wb25lbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VXRpbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWxNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy50dXJuT25IYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgZGVmYXVsdCB2YWx1ZSBvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB1cCBhIHZhbHVlIGZvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSAtIGlmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGFueXdoZXJlLCB1c2UgdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBnZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9ba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxTZXR0aW5nc18uaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTZXR0aW5nc18uZ2V0KGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbW9kZWwgdG8gaXRzIGRlZmF1bHRzLlxyXG4gICAgICpcclxuICAgICAqIENhdGVnb3JpZXM6XHJcbiAgICAgKiAgICogdXNlcjogdmFsdWVzIGZvciB0aGUgY3VycmVudCB1c2VyIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGFzc2lnbm1lbnQ6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgYXNzaWdubWVudCAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBzdWJtaXNzaW9uOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24gKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogZGlzcGxheTogZmxhZ3MgcmVsYXRlZCB0byBjdXJyZW50IHZpc2liaWxpdHkgKHN0b3JlZCB0byBsb2NhbFNldHRpbmdzKVxyXG4gICAgICogICAqIHN0YXR1czogbWVzc2FnZXMgcmVsYXRlZCB0byBjdXJyZW50IHN0YXR1cyAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBleGVjdXRpb246IHZhbHVlcyByZWxhdGVkIHRvIGxhc3QgcnVuIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGNvbmZpZ3VyYXRpb246IGNvbnN0YW50IHZhbHVlcyByZWxhdGVkIHRvIHNldHVwIChub3Qgc3RvcmVkKVxyXG4gICAgICovXHJcbiAgICBpbml0TW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMubG9jYWxTZXR0aW5nc18gPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcImxvY2FsU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5pZFwiXSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLm5hbWVcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHlvdSBhcmUgYW4gT3duZXIgKGNhbiBtb2RpZnkgdGhlIGFzc2lnbm1lbnQpLCBHcmFkZXIgKGNhbiB2aWV3XHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgYXNzaWdubWVudHMnIGluZm9ybWF0aW9uKSBvciBTdHVkZW50IChjYW4gbm90IHNlZSBhbnkgaW5zdHJ1Y3RvciBzdHVmZikuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcm9sZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJ1c2VyLnJvbGVcIiwgXCJvd25lclwiKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2FybmluZyBtZXNzYWdlIGlmIG1hemVcclxuICAgICAgICAgICAgICAgIHR5cGU6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uUnVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX3J1blwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2NoYW5nZVwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIG9uRXZhbDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ldmFsXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3ZWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucmV2aWV3ZWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgcHVibGljOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnB1YmxpY1wiXSksXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaGlkZGVuXCJdKSxcclxuICAgICAgICAgICAgICAgIGlwUmFuZ2VzOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmlwX3Jhbmdlc1wiXSksXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pc3Npb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRJZCBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQuaWRcclxuICAgICAgICAgICAgICAgIC8vIGNvdXJzZUlkIGluZmVycmVkIGZyb20gdXNlci5jb3Vyc2VJZFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkIGluZmVycmVkIGZyb20gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudFZlcnNpb24gaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LnZlcnNpb25cclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKSxcclxuICAgICAgICAgICAgICAgIGdyYWRpbmdTdGF0dXM6IGtvLm9ic2VydmFibGUoXCJOb3RSZWFkeVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50bHkgdmlzaWJsZSBGaWxlLCBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgcHJlc2VudGVkIHdpdGggdGhlIGluc3RydWN0b3Igc2V0dGluZ3MgYW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5Lmluc3RydWN0b3JcIiwgXCJmYWxzZVwiKS50b1N0cmluZygpPT09XCJ0cnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHRoZSBwcmludGVyIGZyb20gc2hvd2luZyB0aGluZ3NcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbXV0ZVByaW50ZXI6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiAoUHl0aG9uIFZpZXdzKSBUaGUgY3VycmVudCBlZGl0b3IgbW9kZS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtEaXNwbGF5TW9kZXN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHB5dGhvbk1vZGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5weXRob24ubW9kZVwiLCBEaXNwbGF5TW9kZXMuU1BMSVQpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgSGlzdG9yeSBtb2RlIGlzIGVuZ2FnZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeU1vZGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaGVpZ2h0IHRvIHVzZSBmb3IgdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBudWxsLCB0aGVuIGxldCB0aGUgaGVpZ2h0IHJlbWFpbiB1bmNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAqICAgIElmIGEgbnVtYmVyLCB0aGVuIHRoZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hpY2ggcGFuZWwgdG8gc2hvdyBpbiB0aGUgc2Vjb25kIHJvdydzIHNlY29uZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlY29uZFJvd1NlY29uZFBhbmVsOiBrby5vYnNlcnZhYmxlKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHRyYWNpbmcgdGhlIGNvZGUgcmlnaHQgbm93XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyYWNlRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGxpc3Qgb2YgcHJvbWlzZXMgdG8gc3RpbGwgcmVzb2x2ZSB3aGlsZSBsb2FkaW5nIGRhdGFzZXRzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8UHJvbWlzZT59XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEYXRhc2V0czoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIHRlbXBvcmFyeSBjaGFuZ2VkIHZhbHVlIG9mIHRoZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgZnJvbSB3aGF0IGlzIGluIHRoZSBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZWRJbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEEgaG9sZGVyIGZvciB0aGUgdGltZXIgdG8gdHJpZ2dlciBvbi1jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbkNoYW5nZTogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3Rvcnk6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3RvcnlNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbikge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwudXNlci5jb3Vyc2VJZChzdWJtaXNzaW9uLmNvdXJzZV9pZCk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoc3VibWlzc2lvbi5leHRyYV9maWxlcywgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50RGF0YV8oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVzZXRJbnRlcmZhY2UoKTtcclxuICAgICAgICBsZXQgd2FzU2VydmVyQ29ubmVjdGVkID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCBhc3NpZ25tZW50ID0gZGF0YS5hc3NpZ25tZW50O1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pZChhc3NpZ25tZW50LmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudmVyc2lvbihhc3NpZ25tZW50LnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5jb3Vyc2VJZChhc3NpZ25tZW50LmNvdXJzZV9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZElkKGFzc2lnbm1lbnQuZm9ya2VkX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkVmVyc2lvbihhc3NpZ25tZW50LmZvcmtlZF92ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKGFzc2lnbm1lbnQuaGlkZGVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoYXNzaWdubWVudC5yZXZpZXdlZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnB1YmxpYyhhc3NpZ25tZW50LnB1YmxpYyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnR5cGUoYXNzaWdubWVudC50eXBlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudXJsKGFzc2lnbm1lbnQudXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoYXNzaWdubWVudC5pcF9yYW5nZXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoYXNzaWdubWVudC5pbnN0cnVjdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5uYW1lKGFzc2lnbm1lbnQubmFtZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKGFzc2lnbm1lbnQub25fY2hhbmdlIHx8IG51bGwpO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9uX2NoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2NoYW5nZS5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vblJ1bihhc3NpZ25tZW50Lm9uX3J1bik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZShhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vd25lcklkKGFzc2lnbm1lbnQub3duZXJfaWQpO1xyXG4gICAgICAgIGxvYWRBc3NpZ25tZW50U2V0dGluZ3ModGhpcy5tb2RlbCwgYXNzaWdubWVudC5zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkVGFncyhhc3NpZ25tZW50LnRhZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFNhbXBsZVN1Ym1pc3Npb25zKGFzc2lnbm1lbnQuc2FtcGxlX3N1Ym1pc3Npb25zKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX2luc3RydWN0b3JfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9zdGFydGluZ19maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3VibWlzc2lvbihkYXRhLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQod2FzU2VydmVyQ29ubmVjdGVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGVsTWV0aG9kcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICBtb2RlbC51aSA9IHtcclxuICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgaXNHcmFkZXI6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudXNlci5yb2xlKCkgPT09IFwib3duZXJcIiB8fCBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJncmFkZXJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZCgpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobnVsbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vjb25kUm93OiB7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWRiYWNrVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0tcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc1RyYWNlVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbnNvbGVTaG93VmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlKCkgfHwgbW9kZWwudWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hMYWJlbDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBUcmFjZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGFkdmFuY2VTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFuZWwgPSBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uc29sZToge1xyXG4gICAgICAgICAgICAgICAgc2l6ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoaWRlRXZhbHVhdGU6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkgfHwgIW1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vLWVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRWRpdG9yIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW50ZXJuYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxnb3JpdGhtIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0dWRlbnRGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3IobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUVkaXRvcnMoKSA/IFwiTm9uZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPyBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKSA6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuUmVzZXRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5jb2RlKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyhtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcygpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lKCkuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5TYXZlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhbW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpKSxcclxuICAgICAgICAgICAgICAgIGNhbkRlbGV0ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgY2FuUmVuYW1lOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5SRU5BTUFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydERhdGFzZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuY29yZ2lzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBweXRob246IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlTWlycm9yID0gc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0RWRpdG9yLmNvZGVNaXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlTWlycm9yLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNvZGVNaXJyb3IuZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNb2RlOiAobmV3TW9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1WaWV3LkNoYW5nZVwiLCBcIlwiLCBcIlwiLCBuZXdNb2RlLCBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUobmV3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iub2xkUHl0aG9uTW9kZSA9IG5ld01vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGlzdG9yeUF2YWlsYWJsZToga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9mZkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IudXBkYXRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5Pbkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEhpc3RvcnkoKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubG9hZChyZXNwb25zZS5oaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT25IaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9TdGFydCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVByZXZpb3VzKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVOZXh0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RSZWNlbnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb01vc3RSZWNlbnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS51c2UoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmU6ICgpID0+IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBydW46ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKSxcclxuICAgICAgICAgICAgICAgIGV2YWx1YXRlOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZXZhbHVhdGUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogKGVuZHBvaW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItc3RhdHVzLVwiICsgbW9kZWwuc3RhdHVzW2VuZHBvaW50XSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNFbmRwb2ludENvbm5lY3RlZDogKGVuZHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJsc1tlbmRwb2ludF0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEhpc3RvcnlNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZERhdGFzZXRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9nRXZlbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uSGFja3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBCbG9ja1B5VHJhY2UobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb25zb2xlID0gbmV3IEJsb2NrUHlDb25zb2xlKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktY29uc29sZVwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5lbmdpbmUgPSBuZXcgQmxvY2tQeUVuZ2luZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmZpbGVTeXN0ZW0gPSBuZXcgQmxvY2tQeUZpbGVTeXN0ZW0obWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5lZGl0b3JzID0gbmV3IEVkaXRvcnMobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1lZGl0b3JcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMucHl0aG9uRWRpdG9yID0gdGhpcy5jb21wb25lbnRzLmVkaXRvcnMuYnlOYW1lKFwicHl0aG9uXCIpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuc2VydmVyID0gbmV3IEJsb2NrUHlTZXJ2ZXIobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb3JnaXMgPSBuZXcgQmxvY2tQeUNvcmdpcyhtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmhpc3RvcnkgPSBuZXcgQmxvY2tQeUhpc3RvcnkobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1oaXN0b3J5LXRvb2xiYXJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEludGVyZmFjZSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZW5naW5lLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQge2VuY29kZUhUTUx9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5jb25zdCBTVEFSVF9FVkFMX0hUTUwgPSBgXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUgZmxvYXQtcmlnaHQgYmxvY2tweS1idG4tZXZhbFwiPlxuICAgIEV2YWx1YXRlXG48L2J1dHRvbj5gO1xuXG5leHBvcnQgY29uc3QgQ09OU09MRV9IVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2NvbC1tZC02IGJsb2NrcHktcGFuZWwgYmxvY2tweS1jb25zb2xlJ1xuICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiQ29uc29sZVwiXG4gICAgICAgICAgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLmNvbnNvbGUuc2l6ZVwiPlxuICAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktc2hvdy1mZWVkYmFjaydcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLnNlY29uZFJvdy5pc0NvbnNvbGVTaG93VmlzaWJsZSwgY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICA8c3Ryb25nPkNvbnNvbGU6PC9zdHJvbmc+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LXByaW50ZXIgYmxvY2tweS1wcmludGVyLWRlZmF1bHQnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgIDwvZGl2PmA7XG5cbmNvbnN0IE5FV19DT05TT0xFX0xJTkVfSFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcblxuLyoqXG4gKlxuICogQGVudW1cbiAqL1xuZXhwb3J0IGxldCBDb25zb2xlTGluZVR5cGUgPSB7XG4gICAgVEVYVDogXCJ0ZXh0XCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgUExPVDogXCJwbG90XCIsXG4gICAgSU1BR0U6IFwiaW1hZ2VcIixcbiAgICBUVVJUTEU6IFwidHVydGxlXCIsXG4gICAgRVZBTDogXCJldmFsXCIsXG4gICAgU1RBUlRfRVZBTDogXCJzdGFydF9ldmFsXCIsXG4gICAgVkFMVUU6IFwidmFsdWVcIixcbiAgICBJTlBVVDogXCJpbnB1dFwiLFxuICAgIFRFU1RfQ0FTRTogXCJ0ZXN0X2Nhc2VcIlxufTtcblxuY2xhc3MgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHR5cGUsIGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7XG4gICAgICAgICAgICBmaWxlbmFtZTogU2suY3VyckZpbGVuYW1lLFxuICAgICAgICAgICAgc3RlcDogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCxcbiAgICAgICAgICAgIGxpbmU6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odG1sID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogIFwiYmxvY2tweS1wcmludGVyLW91dHB1dFwiLFxuICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICBcImRhdGEtc3RlcFwiOiB0aGlzLm9yaWdpbi5zdGVwLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0ZXAgXCIgKyB0aGlzLm9yaWdpbi5zdGVwICsgXCIsIExpbmUgXCIgKyB0aGlzLm9yaWdpbi5saW5lXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhbWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRvU2t1bHB0KCkge1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeSh0aGlzLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUdXJ0bGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgLy8gVE9ETzogQ2FwdHVyZSB0dXJ0bGUgY29tbWFuZHMgZm9yIHRyYWNpbmcgcHVycG9zZXNcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5UVVJUTEUpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtdHVydGxlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUucHJlcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sWzBdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW1hZ2UgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU1BR0UsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtaW1hZ2Utb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lUGxvdCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5QTE9ULCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXBsb3Qtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUZXh0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudCArIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8c2FtcD48L3NhbXA+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVmFsdWUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5WQUxVRSwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8Y29kZT48L2NvZGU+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW5wdXQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgcHJvbXB0TWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU5QVVQsIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSW5wdXQgYm94IGZvciByZWNlaXZpbmcgaW5wdXQoKSBmcm9tIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIC8vIFBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbmluZ1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBJbnB1dCBmb3JtXG4gICAgICAgICAgICBsZXQgaW5wdXRGb3JtID0gJChcIjxpbnB1dCB0eXBlPSd0ZXh0JyAvPlwiKTtcbiAgICAgICAgICAgIC8vIEVudGVyIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0QnRuID0gJChcIjxidXR0b24+PC9idXR0b24+XCIsIHtcImh0bWxcIjogXCJFbnRlclwifSk7XG4gICAgICAgICAgICAvLyBHcm91cCBmb3JtIGFuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEdyb3VwID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcImNsYXNzXCI6IFwiYmxvY2tweS1jb25zb2xlLWlucHV0XCJ9KTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0Rm9ybSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEJ0bik7XG4gICAgICAgICAgICAvLyBQcm9tcHQgYm94LCBuZXcgbGluZSwgaW5wdXQgZ3JvdXBcbiAgICAgICAgICAgIGxldCBpbnB1dEJveCA9ICQoXCI8ZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0TXNnID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgIHtcImh0bWxcIjogZW5jb2RlZFRleHR9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoaW5wdXRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKCQoXCI8YnI+XCIpKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5wdXRHcm91cCk7XG4gICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoaW5wdXRCb3gpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvLyBNYWtlIGl0IGludGVyYWN0aXZlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW50ZXJhY3RpdmUoaW5wdXRGb3JtLCBpbnB1dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuICAgIG1ha2VJbnRlcmFjdGl2ZShpbnB1dCwgYnV0dG9uKSB7XG4gICAgICAgIGxldCByZXNvbHZlT25DbGljaztcbiAgICAgICAgbGV0IHN1Ym1pdHRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2sgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayhpbnB1dC52YWwoKSk7XG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnV0dG9uLmNsaWNrKHN1Ym1pdEZvcm0pO1xuICAgICAgICBpbnB1dC5rZXl1cCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gc3VibWl0dGVkUHJvbWlzZTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lRXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZUlucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIFwiRXZhbHVhdGU6XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlNUQVJUX0VWQUwpO1xuICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKCQoU1RBUlRfRVZBTF9IVE1MKSk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZXhlY3V0ZS5ldmFsdWF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlDb25zb2xlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBmb3IgbWFuYWdpbmcgdGhlIGNvbnNvbGUsIHdpdGggZmVhdHVyZXMgZm9yIHRoaW5ncyBsaWtlIHByaW50aW5nLCBwbG90dGluZywgZXZhbGluZywgaW5wdXRpbmcuXG4gICAgICogVGhlIFwicHJpbnRlclwiIGlzIHRoZSByZWdpb24gd2hlcmUgd2UgcHV0IHRoaW5ncywgYXMgb3Bwb3NlZCB0byB0aGUgY29uc29sZSBhcyBhIHdob2xlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5wcmludGVyVGFnID0gdGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyXCIpO1xuXG4gICAgICAgIHRoaXMuTUlOSU1VTV9XSURUSCA9IDIwMDtcbiAgICAgICAgdGhpcy5NSU5JTVVNX0hFSUdIVCA9IDIwMDtcbiAgICAgICAgdGhpcy5ERUZBVUxUX0hFSUdIVCA9IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKTsgLy8gTGV0IENTUyBkZWZpbmUgdGhpc1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogSWYgdGhlIHVzZXIgbW9kaWZpZXMgYSBmaWxlLCB0aGVuIG1ha2UgdGhlIGNvbnNvbGUgbG9vayBmYWRlZCBhIGxpdHRsZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyLCBpbmNsdWRpbmcgcmVtb3ZpbmcgYW55IHRleHQgaW4gaXQgYW5kXG4gICAgICogZml4aW5nIGl0cyBzaXplLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm91dHB1dC5yZW1vdmVBbGwoKTtcblxuICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZW1wdHkoKTtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgcmVzZXQgaXRcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVydGxlTGluZSA9IG51bGw7XG4gICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldFR1cnRsZUxpbmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBhc3NldHM6IHRoaXMubG9hZEFzc2V0LmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbG9hZEFzc2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VHVydGxlTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHVydGxlTGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbmV3IENvbnNvbGVMaW5lVHVydGxlKHRoaXMubWFpbik7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCBkbyBzb1xuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByaW50ZXJEaW1lbnNpb24gPSB0aGlzLnByaW50ZXJUYWcud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KGN1cnJlbnRQcmludGVyRGltZW5zaW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICBTay5UdXJ0bGVHcmFwaGljcy5oZWlnaHQgPSBjdXJyZW50UHJpbnRlckRpbWVuc2lvbi00MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50dXJ0bGVMaW5lLmh0bWxbMF07XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUUklHR0VSRURcIik7XG4gICAgICAgIGVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICBlZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXJ2ZXIuZmluYWxpemVTdWJzY3JpcHRpb25zKCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIExvYWRzIHRoZSBkZWZpbml0aW9ucyBmb3IgYSBkYXRhc2V0IGludG8gdGhlIGVudmlyb25tZW50LCBpbmNsdWRpbmdcbiAqIHRoZSBkYXRhc2V0IChhcyBhIEpTIGZpbGUpLCB0aGUgc2t1bHB0IGJpbmRpbmdzLCBhbmQgdGhlIGJsb2NrbHlcbiAqIGJpbmRpbmdzLiBUaGlzIHJlcXVpcmVzIGFjY2VzcyB0byBhIENPUkdJUyBzZXJ2ZXIsIGFuZCBvY2N1cnNcbiAqIGFzeW5jaHJvbm91c2x5LiBUaGUgcmVxdWVzdHMgYXJlIGZpcmVkIGFuZCB0aGVpciBkZWZlcnJlZCBvYmplY3RzXG4gKiBhcmUgcmV0dXJuZWQgLSBjYWxsZXJzIGNhbiB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBwZXJmb3JtIGFuIGFjdGlvblxuICogb24gY29tcGxldGlvbiBvZiB0aGUgaW1wb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnIC0gVGhlIFVSTCBzYWZlIHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgdXNlci1mcmllbmRseSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXkuPERlZmVycmVkPn0gLSBSZXR1cm5zIHRoZSBhc3luYyByZXF1ZXN0cyBhcyBkZWZlcnJlZCBvYmplY3RzLlxuICovXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5pbXBvcnREYXRhc2V0ID0gZnVuY3Rpb24gKHNsdWcsIG5hbWUpIHtcbiAgICBsZXQgdXJsX3JldHJpZXZhbHMgPSBbXTtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzICsgXCJibG9ja3B5L1wiICsgc2x1ZyArIFwiL1wiICsgc2x1ZztcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnB1c2gobmFtZSk7XG4gICAgICAgIC8vIEFjdHVhbGx5IGdldCBkYXRhXG4gICAgICAgIGxldCBnZXREYXRhc2V0ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2RhdGFzZXQuanNcIik7XG4gICAgICAgIC8vIExvYWQgZ2V0Q29tcGxldGUgc2lsZW50bHkgaW4gdGhlIGJhY2tncm91bmQgYmVjYXVzZSBpdHMgYmlnIDooXG4gICAgICAgIGxldCBnZXRDb21wbGV0ZSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9jb21wbGV0ZS5qc1wiKTtcbiAgICAgICAgbGV0IGdldFNrdWxwdCA9ICQuZ2V0KHJvb3QgKyBcIl9za3VscHQuanNcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW1wic3JjL2xpYi9cIiArIHNsdWcgKyBcIi9fX2luaXRfXy5qc1wiXSA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZ2V0QmxvY2tseSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9ibG9ja2x5LmpzXCIpO1xuICAgICAgICAvLyBPbiBjb21wbGV0aW9uLCB1cGRhdGUgbWVudXMuXG4gICAgICAgICQud2hlbihnZXREYXRhc2V0LCBnZXRTa3VscHQsIGdldEJsb2NrbHkpLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWREYXRhc2V0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnJlbW92ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybF9yZXRyaWV2YWxzLnB1c2goZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybF9yZXRyaWV2YWxzO1xufTtcblxuLyoqXG4gKiBPcGVucyBhIGRpYWxvZyBib3ggdG8gcHJlc2VudCB0aGUgdXNlciB3aXRoIHRoZSBkYXRhc2V0cyBhdmFpbGFibGVcbiAqIHRocm91Z2ggdGhlIENPUkdJUyBzZXJ2ZXIuIFRoaXMgcmVxdWlyZXMgYSBjYWxsLCBzbyB0aGlzIG1ldGhvZFxuICogY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LiBUaGUgZGlhbG9nIGlzIGNvbXBvc2VkIG9mIGEgdGFibGUgd2l0aFxuICogYnV0dG9ucyB0byBsb2FkIHRoZSBkYXRhc2V0cyAoTW9yZSB0aGFuIG9uZSBkYXRhc2V0IGNhbiBiZSBsb2FkZWRcbiAqIGZyb20gd2l0aGluIHRoZSBkaWFsb2cgYXQgYSB0aW1lKS5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzO1xuICAgICAgICAkLmdldEpTT04ocm9vdCArIFwiaW5kZXguanNvblwiLCAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIE1ha2UgdXAgdGhlIEJvZHlcbiAgICAgICAgICAgIGxldCBkYXRhc2V0cyA9IGRhdGEuYmxvY2tweTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudGF0aW9uID0gcm9vdCtcImJsb2NrcHkvaW5kZXguaHRtbFwiO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gJChgPHA+RG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQgPGEgaHJlZj0nJHtkb2N1bWVudGF0aW9ufScgdGFyZ2V0PV9ibGFuaz51cmw8L2E+PC9wPmApO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKFwiPHRhYmxlPjwvdGFibGU+XCIsIHtcImNsYXNzXCI6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc20gdGFibGUtc3RyaXBlZFwifSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykuc29ydCgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbHVnZ2VkTmFtZSA9IHNsdWcoZGF0YXNldHNbbmFtZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPkxvYWQ8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nU3JjID0gcm9vdCtcIi4uL2ltYWdlcy9kYXRhc2V0cy9cIituYW1lK1wiLWljb24ucG5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YXNldHMuaW5kZXhPZihzbHVnZ2VkTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnZ2VkTmFtZSwgXCJEYXRhIC0gXCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbGV0IGltZyA9IGA8aW1nIHNyYz0nJHtpbWdTcmN9JyBjbGFzcz1cImNvcmdpcy1pY29uXCI+YDtcbiAgICAgICAgICAgICAgICAkKFwiPHRyPjwvdHI+XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vLmFwcGVuZCgkKFwiPHRkPlwiICsgaW1nICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS5vdmVydmlldyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD48L3RkPlwiKS5hcHBlbmQoYnRuKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZFRvKHN0YXJ0KTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFjdHVhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5zaG93KFwiSW1wb3J0IERhdGFzZXRzXCIsIHN0YXJ0LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NzAxOTkxMzY5MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY3MDE5OTEzNjgzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRPRE86IER5YW5taWNhbGx5IHBvcHVsYXRlIGFyaWEtbGFiZWxsZWRieSBpbiB0aGlzIGFuZCBvdGhlciBwbGFjZXNcblxuZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWRpYWxvZyBtb2RhbCBoaWRkZW4nXG4gICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9J0RpYWxvZydcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgbW9kYWwtbGcnIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCcgcm9sZT0ncmVnaW9uJyBhcmlhLWxhYmVsPSdEaWFsb2cgY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+RHluYW1pYyBDb250ZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keScgc3R5bGU9J3dpZHRoOjEwMCU7IGhlaWdodDo0MDBweDsgd2hpdGUtc3BhY2U6cHJlLXdyYXAnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWZvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi13aGl0ZScgZGF0YS1kaXNtaXNzPSdtb2RhbCc+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBvYmplY3QgZm9yIHF1aWNrbHkgYW5kIGNvbnZlbmllbnRseSBnZW5lcmF0aW5nIGRpYWxvZyBib3hlcy5cbiAqIFVuZm9ydHVuYXRlbHksIHRoaXMgZG9lc24ndCBkeW5hbWljYWxseSBjcmVhdGUgbmV3IGJveGVzOyBpdCByZXVzZXMgdGhlIHNhbWUgb25lXG4gKiBvdmVyIGFuZCBvdmVyIGFnYWluLiBJdCB0dXJucyBvdXQgZHluYW1pY2FsbHkgZ2VuZXJhdGluZyBuZXcgZGlhbG9nIGJveGVzXG4gKiBpcyBhIHBhaW4hIFNvIHdlIGNhbid0IHN0YWNrIHRoZW0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeURpYWxvZ31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5RGlhbG9nKG1haW4sIHRhZykge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICB0aGlzLnRpdGxlVGFnID0gdGFnLmZpbmQoXCIubW9kYWwtdGl0bGVcIik7XG4gICAgdGhpcy5ib2R5VGFnID0gdGFnLmZpbmQoXCIubW9kYWwtYm9keVwiKTtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBleHRlcm5hbGx5IGF2YWlsYWJsZSBmdW5jdGlvbiBmb3IgcG9wcGluZyB1cCBhIGRpYWxvZ1xuICogbWVzc2FnZS4gVGhpcyBtZW51IHdpbGwgYmUgZHJhZ2dhYmxlIGJ5IGl0cyB0aXRsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHkgLSBUaGUgYm9keSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmNsb3NlIC0gQSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGRpYWxvZy5cbiAqL1xuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgb25jbG9zZSkge1xuICAgIHRoaXMudGl0bGVUYWcuaHRtbCh0aXRsZSk7XG4gICAgdGhpcy5ib2R5VGFnLmh0bWwoYm9keSk7XG4gICAgdGhpcy50YWcubW9kYWwoXCJzaG93XCIpO1xuICAgIHRoaXMudGFnLmRyYWdnYWJsZSh7XG4gICAgICAgIFwiaGFuZGxlXCI6IFwiLm1vZGFsLXRpdGxlXCJcbiAgICB9KTtcblxuICAgIHRoaXMudGFnLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChvbmNsb3NlICE9PSB1bmRlZmluZWQgJiYgb25jbG9zZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb25jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbmZpcm0oXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuU0NSRUVOU0hPVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ET1xufTsiLCJpbXBvcnQge0VkaXRvcnN9IGZyb20gXCIuLi9lZGl0b3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGUgPT5cclxuICAgICAgICBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS51cGxvYWRGaWxlKGUpXHJcbiAgICApO1xyXG4gICAgZmlsZVJlYWRlci5maWxlTmFtZSA9IGZpbGVzWzBdLm5hbWU7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQge25hbWUsIGV4dGVuc2lvbiwgY29udGVudHMsIG1pbWV0eXBlfSA9IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgLy8gTWFrZSBzYWZlXHJcbiAgICBuYW1lID0gc2x1Z2dpZnkobmFtZSk7XHJcbiAgICBuYW1lID0gbmFtZSArIGV4dGVuc2lvbjtcclxuICAgIC8vIE1ha2UgdGhlIGRhdGEgZG93bmxvYWQgYXMgYSBmaWxlXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1ldHlwZX0pO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBuYW1lKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5RG93bmxvYWRMaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtID0gbWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW07XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZURlbGV0ZWQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIHRoZSBwcmV2aW91cyBmaWxlIGluc3RlYWQgb2YgYSBkZWZhdWx0IGZpbGVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVVcGRhdGVkKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gdGhpcy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0N1cnJlbnRGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS53YXRjaEZpbGUodGhpcy5maWxlbmFtZSwge1xyXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm9uRmlsZVVwZGF0ZWQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZGVsZXRlZDogdGhpcy5vbkZpbGVEZWxldGVkLmJpbmQodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZVN5c3RlbS5nZXRGaWxlKG5ld0ZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3RmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgdGhhdCB0aGUgb3RoZXIgZWRpdG9yIHdpbGwgYmUgc3dpdGNoaW5nIHRvXHJcbiAgICAgKiBAcGFyYW0gb2xkRWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gbmV3RWRpdG9yXHJcbiAgICAgKi9cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZS5uYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGVuYW1lLnR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmZpbGUuaGFuZGxlKCksXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCIuL3B5dGhvblwiO1xyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HUyA9IFtcclxuICAgIFtcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnQgY2Fubm90IGVkaXQgdGhlIGJsb2NrIGludGVyZmFjZSAoYWx0aG91Z2ggaXQgaXMgdmlzaWJsZSkuXCJdLFxyXG4gICAgW1wib25seUludGVyYWN0aXZlXCIsIFwib25seV9pbnRlcmFjdGl2ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbiwgdGhlIHByb2dyYW0gaXMgYXV0b21hdGljYWxseSBydW4sIGFuZCB0aGVuIHRoZSBjb25zb2xlIGVudGVycyBFdmFsIG1vZGUgKGludGVyYWN0aXZlKS5cIl0sXHJcbiAgICBbXCJvbmx5VXBsb2Fkc1wiLCBcIm9ubHlfdXBsb2Fkc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBkaXJlY3RseSBlZGl0YWJsZSAodGhleSB3aWxsIGhhdmUgdG8gdXBsb2FkIHN1Ym1pc3Npb25zKS5cIl0sXHJcbiAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgIFtcImhpZGVGaWxlc1wiLCBcImhpZGVfZmlsZXNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBzZWUgdGhlIFZpZXcgRmlsZXMgdG9vbGJhci5cIl0sXHJcbiAgICBbXCJoaWRlUXVldWVkSW5wdXRzXCIsIFwiaGlkZV9xdWV1ZWRfaW5wdXRzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY2FuIGFjY2VzcyB0aGUgcXVldWVkIGlucHV0cyBib3ggKG1ha2VzIHJlcGVhdGVkIGRlYnVnZ2luZyBlYXNpZXIgZm9yIHRoZSBpbnB1dCBmdW5jdGlvbikuXCJdLFxyXG4gICAgW1wiaGlkZUVkaXRvcnNcIiwgXCJoaWRlX2VkaXRvcnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gYWxsIG9mIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUFsbFwiLCBcImhpZGVfYWxsXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGVuIHRoZSBlbnRpcmUgaW50ZXJmYWNlIGlzIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBFdmFsdWF0ZSBidXR0b24gaXMgbm90IHNob3duIG9uIHRoZSBjb25zb2xlLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNhbm5vdCBzZWUgdGhlIGltcG9ydCBkYXRhc2V0cyBidXR0b24uXCJdLFxyXG4gICAgW1wiaGlkZUltcG9ydFN0YXRlbWVudHNcIiwgXCJoaWRlX2ltcG9ydF9zdGF0ZW1lbnRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCBjZXJ0YWluIGtpbmRzIG9mIGltcG9ydCBzdGF0ZW1lbnRzIChtYXRwbG90bGliLCB0dXJ0bGUsIGRhdGFzZXRzKSBhcmUgbm90IHNob3duIGluIHRoZSBibG9jayBpbnRlcmZhY2UuXCJdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZSBjb3ZlcmFnZSBidXR0b24gaXMgbm90IHNob3duLlwiXVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBBU1NJR05NRU5UX1NFVFRJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bMF0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmQgZm9yIGZpZWxkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VTdGFydFZpZXdUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3LmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LXN0YXJ0LXZpZXctc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwgPSBBU1NJR05NRU5UX1NFVFRJTkdTXHJcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgc2ltcGxlIGJvb2xlYW5zIHRoaXMgd2F5XHJcbiAgICAuZmlsdGVyKChzZXR0aW5nKSA9PiBzZXR0aW5nWzNdID09PSBcImJvb2xcIilcclxuICAgIC5tYXAoKHNldHRpbmcpID0+IHtcclxuICAgICAgICBsZXQgcHJldHR5TmFtZSA9IHNldHRpbmdbMV0uc3BsaXQoXCJfXCIpLm1hcCh3b3JkPT4od29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt3b3JkLnNsaWNlKDEpKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIj4ke3ByZXR0eU5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuc2V0dGluZ3MuJHtzZXR0aW5nWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldHRpbmdbNF19XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihcIlxcblxcblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktdmlldy1zZXR0aW5nc1wiPlxyXG4gICAgXHJcbiAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnNldHRpbmdzLnNhdmVcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBzdHVkZW50LWZhY2luZyBuYW1lIG9mIHRoZSBhc3NpZ25tZW50LiBBc3NpZ25tZW50cyB3aXRoaW4gYSBncm91cCBhcmUgb3JkZXJlZCBhbHBoYWJldGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGJ5IHRoZWlyIG5hbWUsIHNvIHlvdSBtYXkgd2FudCB0byB1c2UgYSBuYW1pbmcgc2NoZW1lIGxpa2UgXCIjNDMuNSkgV2hhdGV2ZXJcIi5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5VUkw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnVybFwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgY291cnNlLXVuaXF1ZSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zaXN0ZW50bHkgcmVmZXIgdG8gdGhpcyBhc3NpZ25tZW50LiBcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCI+UHVibGljOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIG5vdCBwdWJsaWMsIHVzZXJzIG91dHNpZGUgb2YgdGhlIGNvdXJzZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGUgYXNzaWdubWVudCBpbiBjb3Vyc2UgbGlzdGluZ3MuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiPkhpZGRlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBoaWRkZW4sIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIGdyYWRlIHdoaWxlIHdvcmtpbmcgb24gdGhlIGFzc2lnbm1lbnQuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+UmV2aWV3ZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnJldmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIHJldmlld2VkLCB0aGUgYXNzaWdubWVudCBjYW4gYmUgY29tbWVudGVkIHVwb24gYW5kIHJlZ3JhZGVkIGJ5IHRoZSBzdGFmZiBhZnRlcndhcmRzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlN0YXJ0aW5nIFZpZXc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJzdGFydFZpZXdcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+SVAgUmFuZ2VzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5pcFJhbmdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSVAgQWRkcmVzc2VzIHRoYXQgd2lsbCBiZSBleHBsaWNpdGx5IGFsbG93ZWQuIElmIGJsYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gYWxsIGFkZHJlc3NlcyBhcmUgYWxsb3dlZC4gSWYgYW4gYWRkcmVzcyBzdGFydHMgd2l0aCA8Y29kZT5ePC9jb2RlPiB0aGVuIGl0IGl0IGlzIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgICAgICBibGFja2xpc3RlZCwgYnV0IHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdHVybiB3aXRoIGEgPGNvZGU+ITwvY29kZT4uIEFkZHJlc3NlcyBjYW4gYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYSBiaXQgbWFzayB0byBhbGxvdyBhIHJhbmdlIG9mIGFkZHJlc3Nlcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlByZWxvYWRlZCBEYXRhc2V0czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJkYXRhc2V0c1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7QVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTH1cclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc2V0dGluZ3MuXCIrc2VydmVyTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG59XHJcblxyXG5jbGFzcyBBc3NpZ25tZW50U2V0dGluZ3NWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIC8vVE9ETzogdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL1RPRE86IHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBEbyB1cGRhdGVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGVcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgLy90aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZVxyXG4gICAgICAgIC8vdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRTZXR0aW5ncyA9IHtcclxuICAgIG5hbWU6IFwiQXNzaWdubWVudCBTZXR0aW5nc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBBc3NpZ25tZW50U2V0dGluZ3NWaWV3LFxyXG4gICAgdGVtcGxhdGU6IEFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLRE9XTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCI+PC90ZXh0YXJlYT4gICAgXHJcbmA7XHJcblxyXG5cclxuY2xhc3MgTWFya2Rvd25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLm1kZSA9IG5ldyBFYXN5TURFKHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIilbMF0sXHJcbiAgICAgICAgICAgIGF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VTeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgLy8gVE9ETzogaW1hZ2VVcGxvYWRGdW5jdGlvblxyXG4gICAgICAgICAgICByZW5kZXJpbmdDb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNvZGVTeW50YXhIaWdobGlnaHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2guYmluZCh0aGlzLm1kZS5jb2RlbWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZGUudmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5tZGUudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXJrZG93bkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiTWFya2Rvd25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5tZFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBNYXJrZG93bkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogTUFSS0RPV05fRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogVE9ETzogcmVuYW1lIGZpbGVzLCBtYW51YWwgc2F2ZSwgdGFncywgc2FtcGxlX3N1Ym1pc3Npb25zLCBvbl9ldmFsLCBub24tYnVpbHRpbiBmaWxlc1xyXG4gKiBUT0RPOiBpbXBvcnQgZGF0YSwgaGlzdG9yeSwgcnVuLCB1cmxfZGF0YSwgYXNzaWdubWVudF9zZXR0aW5ncywgcGFyc29uc19tb2RlXHJcbiAqIFRPRE86IGRlbGV0ZSBiZWNvbWVzIFwiY2xlYXJcIiBmb3IgaW5zdHJ1Y3RvciBmaWxlc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZW51bSB7c3RyfVxyXG4gKi9cclxuaW1wb3J0IHtBYnN0cmFjdEVkaXRvciwgc2x1Z2dpZnl9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0hJU1RPUllfVE9PTEJBUl9IVE1MfSBmcm9tIFwiLi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IGxldCBEaXNwbGF5TW9kZXMgPSB7XHJcbiAgICBCTE9DSzogXCJibG9ja1wiLFxyXG4gICAgU1BMSVQ6IFwic3BsaXRcIixcclxuICAgIFRFWFQ6IFwidGV4dFwiXHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWtlVGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAnJHttb2RlfSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZWRpdG9ycy5weXRob24udXBkYXRlTW9kZS5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUFlUSE9OX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLXRvb2xiYXIgY29sLW1kLTEyIGJ0bi10b29sYmFyXCJcclxuICAgICAgICAgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiUHl0aG9uIFRvb2xiYXJcIj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSdW4gR3JvdXBcIj4gICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmxvY2tweS1ydW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmV4ZWN1dGUucnVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSW1wb3J0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5pbXBvcnREYXRhc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L3NwYW4+IEltcG9ydCBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJldmVudDoge2NoYW5nZTogdWkuZWRpdG9ycy51cGxvYWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlIGRyb3Bkb3duLXRvZ2dsZS1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1pdGVtIGJsb2NrcHktdG9vbGJhci1kb3dubG9hZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkhpc3RvcnkgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi50b2dnbGVIaXN0b3J5TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB1aS5lZGl0b3JzLnB5dGhvbi5pc0hpc3RvcnlBdmFpbGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeyBhY3RpdmU6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogeyAnYXJpYS1wcmVzc2VkJzogZGlzcGxheS5oaXN0b3J5TW9kZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1oaXN0b3J5XCI+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8IS0tIEZ1bGx5IGZ1bmN0aW9uYWwsIGJ1dCBhIGxpdHRsZSB0b28uLiBJbnZhc2l2ZSBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkZ1bGxzY3JlZW4gR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJ3RleHQnXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uZnVsbHNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZXhwYW5kLWFycm93cy1hbHRcIj48L3NwYW4+IEZ1bGxzY3JlZW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgLS0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiU2F2ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuU2F2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L3NwYW4+IFNhdmVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJEZWxldGUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhbkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5maWxlcy5kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9zcGFuPiBEZWxldGVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZW5hbWUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblJlbmFtZVwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXNpZ25hdHVyZVwiPjwvc3Bhbj4gUmVuYW1lXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICR7SElTVE9SWV9UT09MQkFSX0hUTUx9XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcbi8qXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYmxvY2tweS1ydW4nIHN0eWxlPSdmbG9hdDpsZWZ0JyxcclxuICAgICAgICAgICAgZGF0YS1iaW5kPSdjc3M6IGV4ZWN1dGlvbi5zdGF0dXMoKSA9PSBcInJ1bm5pbmdcIiA/IFwiYnRuLWluZm9cIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRpb24uc3RhdHVzKCkgPT0gXCJlcnJvclwiID8gXCJidG4tZGFuZ2VyXCIgOiBcImJ0bi1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcigpIHx8ICFhc3NpZ25tZW50LnVwbG9hZCgpJyA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBsYXknPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogIWFzc2lnbm1lbnQudXBsb2FkKClcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5lZGl0b3IoKSA9PSAnQmxvY2tzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhYXJlQmxvY2tzVXBkYXRpbmcoKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1sYXJnZSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+IEJsb2Nrc1xyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1pbnN0cnVjdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5lZGl0b3IoKSA9PSAnVXBsb2FkJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBJbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ1NwbGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhYXJlQmxvY2tzVXBkYXRpbmcoKX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1yZXNpemUtaG9yaXpvbnRhbCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBTcGxpdFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ1RleHQnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBUZXh0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLXJlc2V0J1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6ICFhc3NpZ25tZW50LnVwbG9hZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoJz48L3NwYW4+IFJlc2V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWNhcHR1cmUnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcGljdHVyZSc+PC9zcGFuPiBDYXB0dXJlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaW1wb3J0J1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKSB8fCAoIWFzc2lnbm1lbnQudXBsb2FkKCkgJiYgYXNzaWdubWVudC5pbXBvcnRhYmxlKCkpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1jbG91ZC1kb3dubG9hZCc+PC9zcGFuPiBJbXBvcnQgRGF0YXNldHNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi11cGxvYWQnPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Jsb2NrcHktdG9vbGJhci1kb3dubG9hZCc+PHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWQgUHl0aG9uIENvZGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWhpc3RvcnknPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG91cmdsYXNzJz48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1pbnN0cnVjdG9yJyBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCc+PC9zcGFuPiBTZXR0aW5nc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS1cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWVuZ2xpc2gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj4gRW5nbGlzaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcigpXCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT0nY2xlYXI6Ym90aCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYmxvY2tweS10b29sYmFyLWZpbGVuYW1lLXBpY2tlclwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ19fbWFpbl9fJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsZW5hbWU9XCJfX21haW5fX1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiBfX21haW5fX1xyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdzdGFydGluZ19jb2RlJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsZW5hbWU9XCJzdGFydGluZ19jb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBvbl9zdGFydFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdnaXZlX2ZlZWRiYWNrJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsZW5hbWU9XCJnaXZlX2ZlZWRiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBvbl9ydW5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnb25fY2hhbmdlJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsZW5hbWU9XCJvbl9jaGFuZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IG9uX2NoYW5nZVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAqL1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKSB7XHJcbiAgICBsZXQgaXB5bmIgPSBKU09OLnBhcnNlKGNvZGUpO1xyXG4gICAgbGV0IGlzVXNhYmxlID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICFjZWxsLnNvdXJjZVswXS5zdGFydHNXaXRoKFwiJVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCBtYWtlUHl0aG9uID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIicnJ1wiK2NlbGwuc291cmNlLmpvaW4oXCJcXG5cIikrXCInJydcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlweW5iLmNlbGxzLmZpbHRlcihpc1VzYWJsZSkubWFwKG1ha2VQeXRob24pLmpvaW4oXCJcXG5cIik7XHJcbn1cclxuXHJcbmNsYXNzIFB5dGhvbkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiKSk7XHJcbiAgICAgICAgdGhpcy5ibSA9IG5ldyBCbG9ja01pcnJvcih7XHJcbiAgICAgICAgICAgIFwiY29udGFpbmVyXCI6IHRoaXMudGFnWzBdLFxyXG4gICAgICAgICAgICBcInJ1blwiOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bi5iaW5kKG1haW4uY29tcG9uZW50cy5lbmdpbmUpLFxyXG4gICAgICAgICAgICBcInNraXBTa3VscHRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJibG9ja2x5TWVkaWFQYXRoXCI6IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5ibG9ja2x5UGF0aCxcclxuICAgICAgICAgICAgLy8naGVpZ2h0JzogJzIwMDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFrZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlRXh0cmFCbG9ja2x5KCkge1xyXG4gICAgICAgIHRoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLmNvbmZpZ3VyZUNvbnRleHRNZW51ID0gKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNjcmVlbnNob3RcIixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuU0NSRUVOU0hPVF9CTE9DS1NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShEaXNwbGF5TW9kZXMuVEVYVCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gKCkgPT4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSh0aGlzLm9sZFB5dGhvbk1vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmlzUGFyc29ucztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLnJlbmRlcigpO1xyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgdGhpcyBkb2Vzbid0IGVuZCB1cCBsb29raW5nIHJpZ2h0IChnbyB0byBhIGRpZmZlcmVudCBlZGl0b3IsIGNvbWUgYmFjaywgYW5kIGl0J2xsIGJlIHNxdWlzaGVkKVxyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgaWYgKG5ld0NvbnRlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSB0aGlzLmZpbGUuaGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG1hdHRlciwgZmlsZSB3YXMgYWxyZWFkeSBzaHV0IGRvd24uXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGNsb3NpbmcgdGhpcyBmaWxlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uc2V0TW9kZSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUuc3Vic2NyaWJlKG1vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUobW9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVhZE9ubHkoaXNSZWFkT25seSkge1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBpc1JlYWRPbmx5O1xyXG4gICAgICAgIHRoaXMuYm0uc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29kZSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKFwiLmlweW5iXCIpKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlVwbG9hZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvZGUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKTtcclxuICAgICAgICAvLyBUT0RPOiBSdW4gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSBcImFuc3dlclwiICYmIHJlc3VsdC5leHRlbnNpb24gPT09IFwiLnB5XCIpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBzbHVnZ2lmeSh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5uYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQubWltZXR5cGUgPSBcInRleHQveC1weXRob25cIjtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuRG93bmxvYWRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgcmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHl0aG9uRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJQeXRob25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5weVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBQeXRob25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFBZVEhPTl9FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBR1NfRURJVE9SX0hUTUwgPSBgXHJcbkNyZWF0ZSBuZXdcclxuSW1wb3J0IGJ5IG5hbWVcclxuRmluZCBieSBvd25lci9jb3Vyc2Uva2luZFxyXG5cclxuVGFnczpcclxuICAgIERhdGE6XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIEtpbmRcclxuICAgICAgICBMZXZlbFxyXG4gICAgICAgIFZlcnNpb25cclxuICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgQ29udHJvbHM6XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIFJlbW92ZVxyXG4gICAgICAgIERlbGV0ZSBcclxuYDtcclxuXHJcbmNsYXNzIFRhZ3NFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGFnc1wiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUYWdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhdGFncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRhZ3NFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRBR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBURVhUX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLXRleHRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBUZXh0RWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGV4dFwiKVswXSwge1xyXG4gICAgICAgICAgICBzaG93Q3Vyc29yV2hlblNlbGVjdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlcjogMSxcclxuICAgICAgICAgICAgaW5kZW50VW5pdDogNCxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHRyYUtleXM6IHtcclxuICAgICAgICAgICAgICAgIFwiVGFiXCI6IFwiaW5kZW50TW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVzY1wiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5kaXNwbGF5LmlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJGMTFcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuY29kZU1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5jb2RlTWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgfTtcblxuICAgIHJlc2V0U3R1ZGVudE1vZGVsKCkge1xuICAgICAgICBsZXQgc3R1ZGVudCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwuc3R1ZGVudDtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50U3RlcChudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xuICAgICAgICBzdHVkZW50Lmxhc3RTdGVwKDApO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRMaW5lKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZURhdGEucmVtb3ZlQWxsKCk7XG4gICAgICAgIHN0dWRlbnQucmVzdWx0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXRFeGVjdXRpb25CdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge1xuICAgICAgICAgICAgXCJ0cmFjZVwiOiBbXSxcbiAgICAgICAgICAgIFwic3RlcFwiOiAwLFxuICAgICAgICAgICAgXCJsaW5lXCI6IDAsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgaW50ZXJmYWNlIGFzcGVjdHMgb2YgdGhlIHByZXZpb3VzIFJ1bi5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gVE9ETzogQ2xlYXIgb3V0IGFueSBjb3ZlcmFnZS90cmFjZS9lcnJvciBoaWdobGlnaHRzIGluIGVkaXRvcnNcbiAgICAgICAgLy8gUmVzZXQgZXhlY3V0aW9uIGluIG1vZGVsXG4gICAgICAgIHRoaXMucmVzZXRTdHVkZW50TW9kZWwoKTtcbiAgICAgICAgLy8gR2V0IHJlcG9ydHMgcmVhZHlcbiAgICAgICAgdGhpcy5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBleGVjdXRpb24gYnVmZmVyXG4gICAgICAgIHRoaXMucmVzZXRFeGVjdXRpb25CdWZmZXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBjb25zb2xlIG9mIHByaW50ZWQgc3R1ZmZcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5jbGVhcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgYW55IG9sZCBmZWVkYmFja1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5jbGVhcigpO1xuICAgIH1cblxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi51c2UodGhpcyk7XG4gICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUZlZWRiYWNrKCkpIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25SdW4uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiXHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2t1bHB0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxyXG4gICAgICAgICAgICAvLyBpbXBvcnRcclxuICAgICAgICAgICAgcmVhZDogdGhpcy5pbXBvcnRGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIG9wZW5cclxuICAgICAgICAgICAgZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gZmlsZS53cml0ZVxyXG4gICAgICAgICAgICBmaWxld3JpdGU6IHRoaXMud3JpdGVGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIHByaW50XHJcbiAgICAgICAgICAgIG91dHB1dDogdGhpcy5wcmludC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50cyByZWFkaW5nIEhUTUwgZWxlbWVudHMgYXMgZmlsZXNcclxuICAgICAgICAgICAgaW5Ccm93c2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuLi90cmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSwgY29kZSkge1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJfID0gXCIgKyBjb2RlO1xyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSB0cnVlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuQWRkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCB0aGlzLmNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1FdmFsdWF0ZS5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50VmFsdWUoU2suZmZpLnJlbWFwVG9Kcyhtb2R1bGUuJGQuXy4kcigpKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0LFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IHRoaXMuY29kZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zLmpzXCI7XHJcbmltcG9ydCB7JHNrX21vZF9pbnN0cnVjdG9yfSBmcm9tIFwiLi4vc2tfbW9kX2luc3RydWN0b3JcIjtcclxuXHJcbmNvbnN0IFVUSUxJVFlfTU9EVUxFX0NPREUgPSBcInZhciAkYnVpbHRpbm1vZHVsZSA9IFwiICsgJHNrX21vZF9pbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBJbnN0cnVjdG9ycyBoYXZlIG5vIGxpbWl0c1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG4gICAgICAgIC8vIE11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKHRydWUpO1xyXG4gICAgICAgIC8vIERpc2FibGUgaW5wdXQgYm94XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICAvLyBUT0RPIFNrLmlucHV0ZnVuID0gQmxvY2tQeUVuZ2luZS5pbnB1dE1vY2tGdW5jdGlvbjtcclxuICAgICAgICAvLyBUT0RPOiBBbGxvdyBpbnB1dCBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSB0aW1lciwgc29tZWhvd1xyXG4gICAgICAgIC8vIEVuYWJsZSB1dGlsaXR5IG1vZGVcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBVVElMSVRZX01PRFVMRV9DT0RFO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpIHx8IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoU2sucXVldWVkSW5wdXQucG9wKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZmFsc2UsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIGlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0xJTkVfUkVHRVggPSAvXFxyXFxufFxccnxcXG4vO1xyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcInBhc3NcIikpO1xyXG4gICAgbGV0IHRpZmFBbmFseXNpcyA9IFwiXCI7XHJcbiAgICBpZiAoIXF1aWNrKSB7XHJcbiAgICAgICAgdGlmYUFuYWx5c2lzID0gXCJmcm9tIHBlZGFsLnRpZmEgaW1wb3J0IHRpZmFfYW5hbHlzaXNcXG50aWZhX2FuYWx5c2lzKEZhbHNlKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0pXHJcbmRlZiBydW5fc3R1ZGVudCgpOlxyXG4gICAgIyBsaW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICB0cnk6XHJcbiR7aW5kZW50ZWRDb2RlfVxyXG4gICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlcnJvcjpcclxuICAgICAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHJldHVybiBOb25lXHJcbiR7dGlmYUFuYWx5c2lzfVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbmZyb20gcGVkYWwuY2FpdC5jYWl0X2FwaSBpbXBvcnQgcGFyc2VfcHJvZ3JhbVxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbiNwcmludChNQUlOX1JFUE9SVC5mZWVkYmFja1swXS5taXN0YWtlWydlcnJvciddKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBmYWxzZSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBMb2dnaW5nISEhIVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ydW4uJGQ7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBPblJ1bkNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX3J1bi5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUZpbGUoXCJhbnN3ZXIucHlcIiwgdGhpcy5jb2RlLCBudWxsKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgZW5naW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJzZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJ2ZXJpZmllclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IEJvb2xlYW4odGhpcy5jb2RlLnRyaW0oKSksXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5iZWdpbkV2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5wYXJzZXIuc3VjY2VzcyAmJiByZXBvcnQudmVyaWZpZXIuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiUHJvZ3JhbUVycm9yT3V0cHV0XCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcclxuICAgICAgICBTay5yZXF1ZXN0c0dldCA9IChmaWxlbmFtZSkgPT4gdGhpcy5vcGVuVVJMKGZpbGVuYW1lLCBcInVybFwiKTtcclxuXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXHJcbiAgICAgICAgbGV0IGFzdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZSh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCB0aGlzLmZpbGVuYW1lLCBwYXJzZS5mbGFncyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1Y2Nlc3NmdWwgcGFyc2VcclxuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImFzdFwiOiBhc3QsXHJcbiAgICAgICAgICAgIFwiZW1wdHlcIjogYXN0LmJvZHkubGVuZ3RoID09PSAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbGV0IEZFRURCQUNLX0hUTUwgPSBgXG5cbjxzcGFuIGNsYXNzPSdibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrIHRleHQtbXV0ZWQtbGVzcyBwdWxsLXJpZ2h0IHBvc2l0aW9uLXN0aWNreSBzdGlja3ktdG9wJ1xuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWxhYmVsPVwiTmV3IEZlZWRiYWNrIEFsZXJ0XCI+XG4gICAgTmV3IGZlZWRiYWNrICZ1YXJyO1xuPC9zcGFuPlxuXG48ZGl2IGNsYXNzPSdibG9ja3B5LWZlZWRiYWNrIGNvbC1tZC02IGJsb2NrcHktcGFuZWwnXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkZlZWRiYWNrXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuXG4gICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZWNvbmRSb3cuc3dpdGNoTGFiZWxcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIEFjdHVhbCBGZWVkYmFjayBSZWdpb24gLS0+ICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmc+RmVlZGJhY2s6IDwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UgYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeSBmZWVkYmFjay1iYWRnZSdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczogdWkuZmVlZGJhY2suYmFkZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLmZlZWRiYWNrLmNhdGVnb3J5XCI+RmVlZGJhY2sgS2luZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ0ZXh0OiBleGVjdXRpb24uZmVlZGJhY2subGFiZWxcIj48L3N0cm9uZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiBleGVjdXRpb24uZmVlZGJhY2subWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICAgICAgICAgICAgXG5gO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZlZWRiYWNrIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hbmFnZXMgdGhlIGZlZWRiYWNrIGFyZWEsIHdoZXJlIHVzZXJzIGFyZSB0b2xkIHRoZSBzdGF0ZSBvZiB0aGVpclxuICAgICAqIHByb2dyYW0ncyBleGVjdXRpb24gYW5kIGdpdmVuIGd1aWRhbmNlLiBBbHNvIG1hbmFnZXMgdGhlIGNyZWF0aW9uIG9mIHRoZSBUcmFjZSBUYWJsZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEB0aGlzIHtCbG9ja1B5RmVlZGJhY2t9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2s7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeVwiKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzY3JlZW4gKHRha2VzIDEgc2Vjb25kKSB0byBtYWtlIHRoZSBGZWVkYmFjayBhcmVhIHZpc2libGUuXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGZlZWRiYWNrIGFyZWEgaXMgY3VycmVudGx5IHZpc2libGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZlZWRiYWNrVmlzaWJsZSgpIHtcbiAgICAgICAgbGV0IHRvcF9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wO1xuICAgICAgICBsZXQgYm90dG9tX29mX2VsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3AgKyB0aGlzLnRhZy5vdXRlckhlaWdodCgpO1xuICAgICAgICBsZXQgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vYm90dG9tX29mX2VsZW1lbnQgLT0gNDA7IC8vIFVzZXIgZnJpZW5kbHkgcGFkZGluZ1xuICAgICAgICByZXR1cm4gKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBvdXRwdXQgY3VycmVudGx5IGluIHRoZSBmZWVkYmFjayBhcmVhLiBBbHNvIHJlc2V0cyB0aGUgcHJpbnRlciBhbmRcbiAgICAgKiBhbnkgaGlnaGxpZ2h0ZWQgbGluZXMgaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UoXCIqUmVhZHkqXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmhpZGRlbihmYWxzZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBmaW5kRmlyc3RFcnJvckxpbmUoZmVlZGJhY2tEYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBmZWVkYmFja0RhdGEubGVuZ3RoLTE7IGkgPj0gMDsgaS09IDEpIHtcbiAgICAgICAgICAgIGlmIChcInBvc2l0aW9uXCIgaW4gZmVlZGJhY2tEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRiYWNrRGF0YVtpXS5wb3NpdGlvbi5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBtb2RlbCB3aXRoIHRoZXNlIG5ldyBleGVjdXRpb24gcmVzdWx0c1xuICAgICAqIEBwYXJhbSBleGVjdXRpb25SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICAvLyBQYXJzZSBvdXQgZGF0YVxuICAgICAgICBsZXQgbWVzc2FnZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5NRVNTQUdFKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkNBVEVHT1JZKTtcbiAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkxBQkVMKTtcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuSElERSk7XG4gICAgICAgIGxldCBkYXRhID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkRBVEEpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGJhc2VkIG9uIGFzc2lnbm1lbnRzJyBzZXR0aW5nc1xuICAgICAgICBsZXQgaGlkZVNjb3JlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGlmIChoaWRlU2NvcmUgJiYgY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBsYWJlbCA9IFwiTm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJObyBlcnJvcnMgcmVwb3J0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICAvLyBUT0RPOiBJbnN0ZWFkIG9mIHRyYWNraW5nIHN0dWRlbnQgZmlsZSwgbGV0J3MgdHJhY2sgdGhlIGluc3RydWN0b3IgZmlsZVxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJJbnRlcnZlbnRpb25cIiwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBcImFuc3dlci5weVwiKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBlcnJvciBvbiBhIGxpbmUgYW5kIHJlcG9ydCB0aGF0XG4gICAgICAgIGxldCBsaW5lID0gQmxvY2tQeUZlZWRiYWNrLmZpbmRGaXJzdEVycm9yTGluZShkYXRhKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lICE9PSBudWxsICYmIGxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludmVydCB0aGUgc2V0IG9mIHRyYWNlZCBsaW5lc1xuICAgICAgICBsZXQgc3R1ZGVudFJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50O1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChzdHVkZW50UmVwb3J0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8PSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgYW55IGFjY3VtdWxhdGVkIGZlZWRiYWNrXG4gICAgICovXG4gICAgcHJlc2VudEZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKTtcblxuICAgICAgICAvLyBUT0RPOiBMb2dnaW5nXG4gICAgICAgIC8vdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZmVlZGJhY2tcIiwgY2F0ZWdvcnkrXCJ8XCIrbGFiZWwsIG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbm90aWZ5RmVlZGJhY2tVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICB9O1xuXG4gICAgcHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoXCJpbnRlcm5hbFwiKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbChcIkludGVybmFsIEVycm9yXCIpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBcbiAgICAgICAgICAgIEVycm9yIGluIGluc3RydWN0b3IgZmVlZGJhY2suXG4gICAgICAgICAgICBQbGVhc2Ugc2hvdyB0aGUgZm9sbG93aW5nIHRvIGFuIGluc3RydWN0b3I6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwcmU+PHN0cm9uZz4ke2Vycm9yLnRwJG5hbWV9PC9zdHJvbmc+OiAke1NrLmZmaS5yZW1hcFRvSnMoZXJyb3IuYXJncyl9PC9wcmU+YDtcblxuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB0cmFjZWJhY2tGb3JtYXR0ZWQ9IGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT5cbiAgICAgICAgICAgICAgICBgRmlsZSA8c3BhbiBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9zcGFuPiwgbGluZSA8c3BhbiBjbGFzcz1cImxpbmVub1wiPiR7ZnJhbWUubGluZW5vfTwvc3Bhbj5cXG5gKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgPHByZT4ke3RyYWNlYmFja0Zvcm1hdHRlZH08L3ByZT5gO1xuICAgICAgICAgICAgbGV0IGxhc3RfdHJhY2ViYWNrID0gZXJyb3IudHJhY2ViYWNrLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIGlmIChsYXN0X3RyYWNlYmFjay5maWxlbmFtZSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgIGxhc3RfdHJhY2ViYWNrLmxpbmVubyAtPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuaW5zdHJ1Y3Rvci5saW5lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cbn0iLCJjb25zdCBtYWtlVGFiID0gZnVuY3Rpb24oZmlsZW5hbWUsIGZyaWVuZGx5TmFtZSwgaGlkZUlmRW1wdHkpIHtcclxuICAgIGlmIChmcmllbmRseU5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZyaWVuZGx5TmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gJyR7ZmlsZW5hbWV9J30sXHJcbiAgICAgICAgICAgICAgICBjbGljazogZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCAnJHtmaWxlbmFtZX0nKSxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEke2hpZGVJZkVtcHR5fSB8fCB1aS5maWxlcy5oYXNDb250ZW50cygnJHtmaWxlbmFtZX0nKVwiPlxyXG4gICAgICAgICAgICAke2ZyaWVuZGx5TmFtZX08L2E+XHJcbiAgICA8L2xpPmA7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZJTEVTX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWZpbGVzXCJcclxuICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmZpbGVzLnZpc2libGVcIj5cclxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxzdHJvbmc+VmlldzogPC9zdHJvbmc+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgICR7bWFrZVRhYihcImFuc3dlci5weVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiU2V0dGluZ3NcIil9XHJcbiAgICAke21ha2VUYWIoXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIlN0YXJ0aW5nIENvZGVcIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fcnVuLnB5XCIsIFwiT24gUnVuXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2NoYW5nZS5weVwiLCBcIk9uIENoYW5nZVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ldmFsLnB5XCIsIFwiT24gRXZhbFwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIj9tb2NrX3VybHMuYmxvY2tweVwiLCBcIlVSTCBEYXRhXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCIsIFwiU2FtcGxlIFN1Ym1pc3Npb25zXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIXRhZ3MuYmxvY2tweVwiLCBcIlRhZ3NcIiwgdHJ1ZSl9XHJcbiAgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkIE5ldzwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9tb2NrX3VybHMuYmxvY2tweScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICc/bW9ja191cmxzLmJsb2NrcHknKVwiPlVSTCBEYXRhPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/dGFncy5ibG9ja3B5JylcIj5UYWdzPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/c2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHknKVwiPlNhbXBsZSBTdWJtaXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fY2hhbmdlLnB5JylcIj5PbiBDaGFuZ2U8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkV2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9ldmFsLnB5JylcIj5PbiBFdmFsPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0YXJ0aW5nIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0dWRlbnQgRmlsZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgXHJcbjwvdWw+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIEZpbGVuYW1lcyBsaXZlIGluIG9uZSBvZiBmaXZlIHBvc3NpYmxlIG5hbWVzcGFjZXM6XHJcbiAqICBJbnN0cnVjdG9yICghKTogSW52aXNpYmxlIHRvIHRoZSBzdHVkZW50IHVuZGVyIGFsbCBjaXJjdW1zdGFuY2VzXHJcbiAqICBTdGFydCBTcGFjZSAoXik6IFVzZWQgdG8gcmVzZXQgdGhlIHN0dWRlbnQgbmFtZXNwYWNlXHJcbiAqICBTdHVkZW50IFNwYWNlICgpOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50IHdoZW4gZGlzcGxheS5oaWRlRmlsZXMgaXMgbm90IHRydWUsIGFibGUgdG8gYmUgZWRpdGVkXHJcbiAqICBIaWRkZW4gU3BhY2UgKD8pOiBOb3QgZGlyZWN0bHkgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGFjY2Vzc2libGUgcHJvZ3JhbW1hdGljYWxseVxyXG4gKiAgUmVhZC1vbmx5IFNwYWNlICgmKTogQW4gaW5zdHJ1Y3RvciBmaWxlIHR5cGUgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGlzIHVuZWRpdGFibGUgYnkgdGhlbVxyXG4gKiAgU2VjcmV0IFNwYWNlICgkKTogTm90IHZpc2libGUgZnJvbSB0aGUgbWVudSBhdCBhbGwsIHNvbWUgb3RoZXIgbWVjaGFuaXNtIGNvbnRyb2xzIGl0XHJcbiAqICBHZW5lcmF0ZWQgU3BhY2UgKCopOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgZGVzdHJveWVkIGFmdGVyIEVuZ2luZS5DbGVhci4gQ2FuIHNoYWRvdyBhbiBhY3R1YWwgZmlsZS5cclxuICogIENvbmNhdGVuYXRlZCBTcGFjZSAoIyk6IFVzZWQgd2hlbiBidW5kbGluZyBhIHNwYWNlIGZvciB0aGUgc2VydmVyLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBUlRJTkdfRklMRVMgPSBbXHJcbiAgICAvLyBTdWJtaXNzaW9uXHJcbiAgICBcImFuc3dlci5weVwiLFxyXG4gICAgLy8gSW5zdHJ1Y3RvciBmaWxlc1xyXG4gICAgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsXHJcbiAgICBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIixcclxuICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIixcclxuICAgIFwiIW9uX3J1bi5weVwiLFxyXG4gICAgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0lDX05FV19GSUxFUyA9IFtcclxuICAgIFwiIW9uX2NoYW5nZS5weVwiLFxyXG4gICAgXCIhb25fZXZhbC5weVwiLFxyXG4gICAgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgIFwiIXRhZ3MuYmxvY2tweVwiLFxyXG4gICAgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIlxyXG5dO1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGNvbmNhdGVuYXRlZEZpbGUsIG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIGlmIChjb25jYXRlbmF0ZWRGaWxlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gSlNPTi5wYXJzZShjb25jYXRlbmF0ZWRGaWxlKTtcclxuICAgICAgICBmaWxlcyA9IGZpbGVzLm1hcChmaWxlID0+IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSwgZmlsZS5jb250ZW50cykpO1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoZmlsZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobW9kZWxGaWxlTGlzdCgpLm1hcChmaWxlID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5maWxlbmFtZSgpLFxyXG4gICAgICAgICAgICBjb250ZW50czogZmlsZS5jb250ZW50cygpXHJcbiAgICAgICAgfTtcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBrby5wdXJlQ29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KCkuZm9yRWFjaChmaWxlID0+XHJcbiAgICAgICAgICAgIHJlc3VsdFtmaWxlLmZpbGVuYW1lKCldID0gZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3RzIGF3YXkgZGF0YWJhc2UgbG9naWNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmlsZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVzXyA9IHt9O1xyXG4gICAgICAgIHRoaXMubW91bnRGaWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoTW9kZWwoKTtcclxuICAgICAgICB0aGlzLndhdGNoZXNfID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hGaWxlKGZpbGVuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BXYXRjaGluZ0ZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hNb2RlbCgpIHtcclxuICAgICAgICBsZXQgZmlsZXN5c3RlbSA9IHRoaXM7XHJcbiAgICAgICAgW3RoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXNdLmZvckVhY2goZmlsZUFycmF5ID0+XHJcbiAgICAgICAgICAgIGZpbGVBcnJheS5zdWJzY3JpYmUoZnVuY3Rpb24oY2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxGaWxlID0gY2hhbmdlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImFkZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhY2sgbmV3IGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBmaWxlc3lzdGVtLm5ld0ZpbGUobW9kZWxGaWxlLmZpbGVuYW1lKCksIG1vZGVsRmlsZS5jb250ZW50cygpLCBtb2RlbEZpbGUuY29udGVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLm5vdGlmeVdhdGNoZXMoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyhtb2RlbEZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLCBcImFycmF5Q2hhbmdlXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2Ygc3VibWlzc2lvbi5jb2RlKVxyXG4gICAgLy8gIW9uX3J1bi5weSwgIW9uX2NoYW5nZS5weSwgIW9uX2V2YWwucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlbGV2YW50IGFzc2lnbm1lbnQuPHdoYXRldmVyPlxyXG4gICAgLy8gXnN0YXJ0aW5nX2NvZGUucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vIF53aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vICF3aGF0ZXZlciBvciA/d2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuZXh0cmFGaWxlc1xyXG4gICAgLy8gT3RoZXJ3aXNlOlxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2Ygc3VibWlzc2lvbi5jb2RlXHJcbiAgICAvKipcclxuICAgICAqIE5ldyBzcGVjaWFsIGZpbGVzIG5lZWQgdG8gYmUgcmVnaXN0ZXJlZCBoZXJlXHJcbiAgICAgKiBAcGFyYW0gZmlsZSB7QmxvY2tQeUZpbGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlRmlsZV8oZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9jaGFuZ2UucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIl5zdGFydGluZ19jb2RlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIj9tb2NrX3VybHMuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhdGFncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC50YWdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiJHNldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiIVwiKSB8fCBmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCI/XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUluQXJyYXlfKGZpbGUsIGFycmF5KSB7XHJcbiAgICAgICAgZmlsZS5vd25lciA9IGFycmF5O1xyXG4gICAgICAgIGxldCBjb2RlQnVuZGxlID0gZmlsZS5vd25lcigpO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGNvZGVCdW5kbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvZGVCdW5kbGVbaV0uZmlsZW5hbWUoKSA9PT0gZmlsZS5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBjb2RlQnVuZGxlW2ldLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxlLmhhbmRsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gbmV3RmlsZS5jb250ZW50cztcclxuICAgICAgICAgICAgYXJyYXkucHVzaChuZXdGaWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnRGaWxlcygpIHtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIW9uX3J1bi5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8oZXhpc3RpbmdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58b2JqZWN0fSBUaGUgaW5mbyBhYm91dCB0aGUgZmlsZSwgb3IgZmFsc2UgaWYgaXQgY291bGQgbm90IGJlIGRlbGV0ZWRcclxuICAgICAqL1xyXG4gICAgZGVsZXRlRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChERUxFVEFCTEVfU0lNUExFX0ZJTEVTLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VycyBhIGNhbGxiYWNrIHRvIGV2ZW50dWFsbHkgY2FsbCBkZWxldGVGaWxlTG9jYWxseV9cclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyLnJlbW92ZShtb2RlbEZpbGUgPT4gbW9kZWxGaWxlLmZpbGVuYW1lID09PSBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZCB8fCBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLmRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeVdhdGNoZXMoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlLmZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLnVwZGF0ZWQoZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vVE9ETzogTW92ZSBnZXQgbGluayBkb3duIHRvIGZvb3RlciwgcmVtb3ZlIHZlcnRpY2FsIGJhciBmcm9tIHF1aWNrLW1lbnVcclxuZXhwb3J0IGxldCBGT09URVJfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktc3RhdHVzXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEFzc2lnbm1lbnQnKVwiPkxvYWQgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUFzc2lnbm1lbnQnKVwiPlNhdmUgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEZpbGUnKVwiPkxvYWQgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUZpbGUnKVwiPlNhdmUgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZERhdGFzZXQnKVwiPkxvYWQgRGF0YXNldDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9nRXZlbnQnKVwiPkxvZyBFdmVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygndXBkYXRlU3VibWlzc2lvbicpXCI+VXBkYXRlIFN1Ym1pc3Npb248L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ29uRXhlY3V0aW9uJylcIj5FeGVjdXRpb248L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZXJ2ZXIubWVzc2FnZXNcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+VXNlcjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5pZFwiPjwvc3Bhbj4gKDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIubmFtZVwiPjwvc3Bhbj4pPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+Q291cnNlOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmNvdXJzZUlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+R3JvdXA6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuZ3JvdXBJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQ6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQuaWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50IFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQudmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24uaWRcIj48L3NwYW4+PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbiBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gOyIsIi8vIFRPRE86IFNob3VsZCBkaXNhYmxlIGJ1dHRvbnMgaWYgd2UgY2FuJ3QgYWN0aXZhdGUgdGhlbS5cblxuZXhwb3J0IGNvbnN0IEhJU1RPUllfVE9PTEJBUl9IVE1MID0gYFxuPGRpdiBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS10b29sYmFyIGNvbC1tZC0xMlwiIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkuaGlzdG9yeU1vZGVcIj5cblxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zdGFydCBidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnN0YXJ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj4gU3RhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+IFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yIGZvcm0tY29udHJvbCBjdXN0b20tc2VsZWN0IG1yLTJcIiBhcmlhLXRpdGxlPVwiSGlzdG9yeSBTZWxlY3RvclwiPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkudXNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZpbGUtaW1wb3J0Jz48L3NwYW4+IFVzZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+IE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5tb3N0UmVjZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPiBNb3N0IFJlY2VudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cbmA7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBkaXNwbGF5aW5nIHRoZSB1c2VyJ3MgY29kaW5nIGxvZ3MgKHRoZWlyIGhpc3RvcnkpLlxuICogQSBsaWdodHdlaWdodCBjb21wb25lbnQsIGl0cyBvbmx5IGpvYiBpcyB0byBvcGVuIGEgZGlhbG9nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlIaXN0b3J5fVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5SGlzdG9yeSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBsb2FkKGhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAkKFwiLmJsb2NrcHktaGlzdG9yeS1zZWxlY3RvclwiKS5lbXB0eSgpO1xuICAgICAgICBsZXQgZWRpdElkID0gMDtcbiAgICAgICAgaGlzdG9yeVxuICAgICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IChcbiAgICAgICAgICAgICAgICAhZW50cnkuZmlsZV9wYXRoLnN0YXJ0c1dpdGgoXCJfaW5zdHJ1Y3Rvci5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJDb21waWxlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJJbnRlcnZlbnRpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpIHx8IGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiWC1TdWJtaXNzaW9uLkxNU1wiKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnRfdHlwZSA9IFJFTUFQX0VWRU5UX1RZUEVTW2VudHJ5LmV2ZW50X3R5cGVdIHx8IGVudHJ5LmV2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXllZCA9IHByZXR0eVByaW50RGF0ZVRpbWUoZW50cnkuY2xpZW50X3RpbWVzdGFtcCkgK1wiIC0gXCIrZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZSA9IChlbnRyeS5ldmVudF90eXBlICE9PSBcIkZpbGUuRWRpdFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIsIHt0ZXh0OiBkaXNwbGF5ZWQsIGRpc2FibGVkOiBkaXNhYmxlfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFZGl0RXZlbnQoZW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5hdHRyKFwidmFsdWVcIiwgZWRpdElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0RXZlbnRzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBlZGl0SWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rvci5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1heCgwLCBlZGl0SWQtMSkpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLmNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtb3ZlVG9TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoMCk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZVByZXZpb3VzKCkge1xuICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1heCgwLCBjdXJyZW50SWQtMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVOZXh0KCkge1xuICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1pbih0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEsIGN1cnJlbnRJZCsxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZVRvTW9zdFJlY2VudCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwodGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnNldENvZGUodGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICAgICAgbGV0IGNvZGUgPSB0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmZpbGUuaGFuZGxlKGNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFZGl0RXZlbnQoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuICgoZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkVkaXRcIiB8fFxuICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuQ3JlYXRlXCIpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZW50cnkuZmlsZV9wYXRoKTtcbiAgICB9XG5cbn1cblxuY29uc3QgUkVNQVBfRVZFTlRfVFlQRVMgPSB7XG4gICAgXCJTZXNzaW9uLlN0YXJ0XCI6IFwiQmVnYW4gc2Vzc2lvblwiLFxuICAgIFwiWC1JUC5DaGFuZ2VcIjogXCJDaGFuZ2VkIElQIGFkZHJlc3NcIixcbiAgICBcIkZpbGUuRWRpdFwiOiBcIkVkaXRlZCBjb2RlXCIsXG4gICAgXCJGaWxlLkNyZWF0ZVwiOiBcIlN0YXJ0ZWQgYXNzaWdubWVudFwiLFxuICAgIFwiUnVuLlByb2dyYW1cIjogXCJSYW4gcHJvZ3JhbVwiLFxuICAgIFwiQ29tcGlsZS5FcnJvclwiOiBcIlN5bnRheCBlcnJvclwiLFxuICAgIFwiWC1TdWJtaXNzaW9uLkxNU1wiOiBcIlVwZGF0ZWQgZ3JhZGVcIlxufTtcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxuICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIixcbiAgICBcIkF1Z1wiLCBcIlNlcHRcIiwgXCJPY3RcIixcbiAgICBcIk5vdlwiLCBcIkRlY1wiXG5dO1xuY29uc3Qgd2Vla0RheXMgPSBbXG4gICAgXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIixcbiAgICBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLFxuICAgIFwiU2F0XCJcbl07XG5cbmZ1bmN0aW9uIGlzU2FtZURheShmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0LmdldERhdGUoKSA9PT0gc2Vjb25kLmdldERhdGUoKSAmJlxuICAgICAgICBmaXJzdC5nZXRNb250aCgpID09PSBzZWNvbmQuZ2V0TW9udGgoKSAmJlxuICAgICAgICBmaXJzdC5nZXRGdWxsWWVhcigpID09PSBzZWNvbmQuZ2V0RnVsbFllYXIoKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgYSBkYXRlL3RpbWUgc3RyaW5nIGFuZCByZXdyaXRlIGl0IGFzIHNvbWV0aGluZ1xuICogbW9yZSBodW1hbiByZWFkYWJsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0aW1lU3RyaW5nIC0gdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIChcIllZWVlNTUREIEhITU1TU1wiKVxuICogQHJldHVybnMge1N0cmluZ30gLSBBIGh1bWFuLXJlYWRhYmxlIHRpbWUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBwcmV0dHlQcmludERhdGVUaW1lKHRpbWVTdHJpbmcpIHtcbiAgICAvKmxldCB5ZWFyID0gdGltZVN0cmluZy5zbGljZSgwLCA0KSxcbiAgICAgICAgbW9udGggPSBwYXJzZUludCh0aW1lU3RyaW5nLnNsaWNlKDQsIDYpLCAxMCktMSxcbiAgICAgICAgZGF5ID0gdGltZVN0cmluZy5zbGljZSg2LCA4KSxcbiAgICAgICAgaG91ciA9IHRpbWVTdHJpbmcuc2xpY2UoOSwgMTEpLFxuICAgICAgICBtaW51dGVzID0gdGltZVN0cmluZy5zbGljZSgxMSwgMTMpLFxuICAgICAgICBzZWNvbmRzID0gdGltZVN0cmluZy5zbGljZSgxMywgMTUpOyovXG4gICAgLy8gVE9ETzogSGFuZGxlIHRpbWV6b25lcyBjb3JyZWN0bHlcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcGFzdCA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVTdHJpbmcsIDEwKSk7XG4gICAgaWYgKGlzU2FtZURheShub3csIHBhc3QpKSB7XG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheVN0ciA9IHdlZWtEYXlzW3Bhc3QuZ2V0RGF5KCldO1xuICAgICAgICBsZXQgbW9udGhTdHIgPSBtb250aE5hbWVzW3Bhc3QuZ2V0TW9udGgoKV07XG4gICAgICAgIGxldCBkYXRlID0gZGF5U3RyICsgXCIsIFwiICsgbW9udGhTdHIgKyBcIiBcIiArIHBhc3QuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IHBhc3QuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiwgXCIrcGFzdC5nZXRGdWxsWWVhcigpICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIE9wZW5zIHRoZSBoaXN0b3J5IGRpYWxvZyBib3guIFRoaXMgcmVxdWlyZXMgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYW5kXG4gKiBvY2N1cnMgYXN5bmNocm9ub3VzbHkuIFRoZSB1c2VycycgY29kZSBpcyBzaG93biBpbiBwcmVmb3JtYXR0ZWQgdGV4dFxuICogdGFncyAobm8gY29kZSBoaWdobGlnaHRpbmcgY3VycmVudGx5KSBhbG9uZyB3aXRoIHRoZSB0aW1lc3RhbXAuXG4gKi9cbkJsb2NrUHlIaXN0b3J5LnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZztcbiAgICB2YXIgYm9keSA9IFwiPHByZT5hID0gMDwvcHJlPlwiO1xuICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5nZXRIaXN0b3J5KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJvZHkgPSBkYXRhLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBsZXRlLCBlbGVtKSB7IFxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlX3N0ciA9IHByZXR0eVByaW50RGF0ZVRpbWUoZWxlbS50aW1lKTtcbiAgICAgICAgICAgIHZhciBuZXdfbGluZSA9IFwiPGI+XCIrY29tcGxldGVfc3RyK1wiPC9iPjxicj48cHJlPlwiK2VsZW0uY29kZStcIjwvcHJlPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlK1wiXFxuXCIrbmV3X2xpbmU7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgICAgICBkaWFsb2cuc2hvdyhcIldvcmsgSGlzdG9yeVwiLCBib2R5LCBmdW5jdGlvbigpIHt9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xufVxuXG4vLyBUT0RPOiBHZXQgc2hhcmVhYmxlIGxpbmsgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW50ZXJmYWNlKG1haW4pIHtcbiAgICByZXR1cm4gYFxuPGRpdiBjbGFzcz0nYmxvY2tweS1jb250ZW50IGNvbnRhaW5lci1mbHVpZCc+XG5cbiAgICA8IS0tIERpYWxvZyAtLT5cbiAgICAke0RJQUxPR19IVE1MfVxuICAgIFxuICAgIDwhLS0gSGlkZGVuIENhcHR1cmUgQ2FudmFzIC0tPlxuICAgIDxjYW52YXMgaWQ9J2NhcHR1cmUtY2FudmFzJyBjbGFzcz0nZC1ub25lJyByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9jYW52YXM+XG4gICAgXG4gICAgPCEtLSBSb3cgMTogSGVhZGVyIGFuZCBRdWljayBNZW51IC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICBcbiAgICAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMTAgYmxvY2tweS1wYW5lbCBibG9ja3B5LWhlYWRlcidcbiAgICAgICAgICAgICAgIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGFiZWw9J0Fzc2lnbm1lbnQgRGVzY3JpcHRpb24nPlxuICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEFzc2lnbm1lbnQgTmFtZSAtLT5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGV2ZWw9JzEnXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrcHktbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QmxvY2tQeTogPC9zdHJvbmc+IFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogYXNzaWdubWVudC5uYW1lJz48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gUmVzZXQgSW5zdHJ1Y3Rpb25zIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWluc3RydWN0aW9ucy1yZXNldFwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuaW5zdHJ1Y3Rpb25zLnJlc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBSZXNldCBpbnN0cnVjdGlvbnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBJbnN0cnVjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWluc3RydWN0aW9ucydcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogdWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0yIGJsb2NrcHktcGFuZWwgYmxvY2tweS1xdWljay1tZW51J1xuICAgICAgICAgICAgIHJvbGU9J21lbnViYXInIGFyaWEtbGFiZWw9J1F1aWNrIE1lbnUnIHRpdGxlPVwiUXVpY2sgTWVudVwiPlxuICAgICAgICAgICAgPCEtLSBHZXQgU2hhcmVhYmxlIExpbmsgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAyOiBDb25zb2xlIGFuZCBGZWVkYmFjayAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgIFxuICAgICAgICA8IS0tIENvbnNvbGUgLS0+XG4gICAgICAgICR7Q09OU09MRV9IVE1MfVxuICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2sgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSAtLT5cbiAgICAgICAgJHtGRUVEQkFDS19IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgXG4gICAgICAgIDwhLS0gVHJhY2UgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSAtLT5cbiAgICAgICAgJHtUUkFDRV9IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDM6IEZpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICA8IS0tIGtvIGlmOiB1aS5maWxlcy52aXNpYmxlIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICR7RklMRVNfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC9rbyAtLT5cbiAgICBcbiAgICA8IS0tIFZpZXcgUm93IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtFRElUT1JTX0hUTUx9XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZvb3RlciBSb3cgLS0+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtGT09URVJfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIGA7XG59OyIsImltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBzYXZlQXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xuXG4vKipcbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgbGV0IFN0YXR1c1N0YXRlID0ge1xuICAgIFJFQURZOiBcInJlYWR5XCIsXG4gICAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAgIFJFVFJZSU5HOiBcInJldHJ5aW5nXCIsXG4gICAgRkFJTEVEOiBcImZhaWxlZFwiLFxuICAgIE9GRkxJTkU6IFwib2ZmbGluZVwiXG59O1xuXG4vKipcbiAqIE9iamVjdCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBleHRlcm5hbCBzZXJ2ZXJzLiBUaGlzIGluY2x1ZGVzIGZ1bmN0aW9uYWxpdHkgZm9yXG4gKiBzYXZpbmcgYW5kIGxvYWRpbmcgZmlsZXMsIGxvZ2dpbmcgZXZlbnRzLCBzYXZpbmcgY29tcGxldGlvbnMsIGFuZCByZXRyaWV2aW5nIGhpc3RvcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeVNlcnZlcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeVNlcnZlcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vIFNhdmUgVVJMcyBsb2NhbGx5IGZvciBxdWlja2VyIGFjY2Vzc1xuICAgIHRoaXMudXJscyA9IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzO1xuXG4gICAgLy8gQWRkIHRoZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwiQkxPQ0tQWVwiKTtcblxuICAgIC8vIEZhdWx0UmVzaXN0YW50Q2FjaGVcbiAgICB0aGlzLnF1ZXVlID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dFdmVudFwiLCBcIltdXCIpKSxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFwiW11cIikpXG4gICAgfTtcbiAgICB0aGlzLk1BWF9RVUVVRV9TSVpFID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuVElNRVJfREVMQVkgPSAxMDAwO1xuICAgIHRoaXMuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLmNoZWNrQ2FjaGVzKCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIElQIGFkZHJlc3MgaGFzIGNoYW5nZWQsIGxvZ2dpbmcgYW4gZXZlbnQgaWYgdGhhdCBvY2N1cnMuXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tJUCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiSVBcIikpIHtcbiAgICAgICAgICAgIGxldCBvbGRJUCA9IHRoaXMuc3RvcmFnZS5nZXQoXCJJUFwiKTtcbiAgICAgICAgICAgIGlmIChvbGRJUCAhPT0gcmVzcG9uc2UuaXApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJvbGRcIjogb2xkSVAsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHJlc3BvbnNlLmlwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFdmVudChcIlgtSVAuQ2hhbmdlXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGVyZSBoYXZlIGJlZW4gcHJldmlvdXMgZmFpbHVyZXMgY2FjaGVkLCBhbmQgaWYgc28gcmV0cmllcyB0aGVtLlxuICogVE9ETzogdXBkYXRlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrQ2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlQXNzaWdubWVudFwiKSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZUFzc2lnbm1lbnRcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucXVldWUpLmZvckVhY2goZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIChmdW5jdGlvbiBwdXNoQW55UXVldWVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5wb3AoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzZXJ2ZXIudXJsc1tlbmRwb2ludF07XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgZmlsZW5hbWUpIHtcbiAgICBtb2RlbC5zdWJzY3JpYmUoKGNvbnRlbnRzKSA9PlxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpID8gdGhpcy5zYXZlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIDogZmFsc2UsIHRoaXMpO1xuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLnB1c2goZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBUT0RPOiBmaXhcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnN1Ym1pc3Npb24uY29kZSwgXCJhbnN3ZXIucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25SdW4sIFwiIW9uX3J1bi5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkV2YWwsIFwiIW9uX2V2YWwucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UsIFwiIW9uX2NoYW5nZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMsIFwiIWluc3RydWN0aW9ucy5tZFwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUsIFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3R1ZGVudEZpbGVzLCBcIiNleHRyYVN0dWRlbnRGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhU3RhcnRpbmdGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYUluc3RydWN0b3JGaWxlcywgXCIjZXh0cmFJbnN0cnVjdG9yRmlsZXMuYmxvY2tweVwiKTtcbn07XG5cbi8qKlxuICpcbiAqIFNvbWUgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGhhcHBlbiBhZnRlciBvdGhlciB0aGluZ3MgaGF2ZSBiZWVuIGxvYWRlZC5cbiAqIFJpZ2h0IG5vdyB0aGlzIGlzIGp1c3QgYWZ0ZXIgQ09SR0lTIGxpYnJhcmllcyBoYXZlIGJlZW4gbG9hZGVkLCBidXQgbWF5YmVcbiAqIHdlJ2xsIGFkZCBtb3JlIGxhdGVyIGFuZCB0aGlzIHdpbGwgbmVlZCB0byBiZSByZWZhY3RvcmVkLlxuICpcbiAqIFRPRE86IGZpeFxuICpcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuZmluYWxpemVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMuc3Vic2NyaWJlKHRoaXMuc2F2ZUFzc2lnbm1lbnQuYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgcGF5bG9hZCBmb3IgYW55IGNvbW11bmljYXRpb24gd2l0aCB0aGUgc2VydmVyIEFQSVxuICogQHJldHVybnMge3thc3NpZ25tZW50X2lkOiAqLCBjb3Vyc2VfaWQ6ICosIGdyb3VwX2lkOiAqLCB1c2VyX2lkOiAqLCB0aW1lem9uZTogKiwgdmVyc2lvbjogKiwgdGltZXN0YW1wOiAqfX1cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU2VydmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXNzaWdubWVudCA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50O1xuICAgIGxldCB1c2VyID0gdGhpcy5tYWluLm1vZGVsLnVzZXI7XG4gICAgbGV0IHN1Ym1pc3Npb24gPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbjtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGF0dXMgYW5kIG1lc3NhZ2UgZm9yIHRoZSByZWxldmFudCBlbmRwb2ludC5cbiAqIEBwYXJhbSBlbmRwb2ludCB7c3RyaW5nfSBvbmUgb2YgdGhlIFVSTCBlbmRwb2ludHNcbiAqIEBwYXJhbSBzdGF0dXMge1N0YXR1c1N0YXRlfVxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZz99XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludF0oc3RhdHVzKTtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50ICsgXCJNZXNzYWdlXCJdKG1lc3NhZ2UgfHwgXCJcIik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gb3ZlcmxheSBvbiB0aGUgc2NyZWVuIHRoYXQgYmxvY2tzIG9wZXJhdGlvbiB1bnRpbCB0aGUgc3lzdGVtIGlzIHJlYWR5LlxuICogVGhlIG92ZXJsYXkgZ2V0cyBwcm9ncmVzc2l2ZWx5IGRhcmtlciB0byBpbmRpY2F0ZSByZXBlYXRlZCBmYWlsdXJlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2hvd092ZXJsYXkgPSBmdW5jdGlvbiAoYXR0ZW1wdCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyArPSAxO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2NrcHktb3ZlcmxheVwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImJsb2NrcHktb3ZlcmxheVwiPiA8L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGF0dGVtcHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjOTg4XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzY1NVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiMzMzNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG4vKipcbiAqIFVuZG8gYSBsZXZlbCBvZiBvdmVybGF5OyBpZiB0aGlzIHdhcyB0aGUgbGFzdCBsZXZlbCwgcmVtb3ZlcyBpdCBmcm9tIHRoZSBzY3JlZW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmhpZGVPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyAtPSAxO1xuICAgIGlmICh0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2VucXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgbm90IG92ZXJmaWxsZWQgdGhlIHF1ZXVlXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMucXVldWVbY2FjaGVdLmxlbmd0aDtcbiAgICBsZXQgbWF4ID0gdGhpcy5NQVhfUVVFVUVfU0laRVtjYWNoZV07XG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXSA9IHRoaXMucXVldWVbY2FjaGVdLnNsaWNlKGxlbmd0aCAtIG1heCwgbWF4KTtcbiAgICB9XG4gICAgLy8gT25seSBhZGQgdGhlIGVsZW1lbnQgaWYgaXQncyBuZXdcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0ucHVzaChrZXkpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9kZXF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0uc3BsaWNlKGluZGV4KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZW5kcG9pbnQsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgIGxldCBwb3N0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuX2VucXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZS5pcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHBvc3RSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChwb3N0UmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFrZSBhIEFKQVggcmVxdWVzdCB0aGF0LCB1cG9uIGZhaWx1cmUsIHdpbGwgY2hlY2sgdG8gc2VlIGlmIHRoaXMgd2FzIHRoZVxuICogbGF0ZXN0IGF0dGVtcHQgZm9yIHRoaXMgYGNhY2hlYCBtYXJrZXIuIElmIHNvLCBpdCB3aWxsIGF0dGVtcHQgYWdhaW4gdW50aWxcbiAqIHN1Y2Nlc3NmdWw7IG90aGVyd2lzZSwgaXQgZ2l2ZXMgdXAgdGhlIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgQUpBWC1yZWFkeSBkYXRhIHRvIGJlIHBvc3RlZFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCB0aW1lclxuICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50IC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCBjYWNoZSBlbnRyeVxuICogQHBhcmFtIHtJbnRlZ2VyfSBkZWxheSAtIFRoZSBjdXJyZW50IG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcbiB0cnlpbmcgdGhlIHJlcXVlc3QgYWdhaW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0TGF0ZXN0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSkge1xuICAgIGxldCBjYWNoZSA9IGVuZHBvaW50ICsgZmlsZW5hbWU7XG4gICAgbGV0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY29ubmVjdGVkIGJ1dCBmYWlsZWQsIGRvbid0IHRyeSBhZ2FpbiBidXQgbGV0IHRoZSB1c2VyIGtub3cgd2h5LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyc1tjYWNoZV0pO1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lcnNbY2FjaGVdID0gc2V0VGltZW91dChyZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RCbG9ja2luZyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICB0aGlzLnNob3dPdmVybGF5KGF0dGVtcHRzKTtcbiAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCgoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZShlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMgLSAxLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoYXNzaWdubWVudF9pZCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiYXNzaWdubWVudF9pZFwiXSA9IGFzc2lnbm1lbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRBc3NpZ25tZW50XCIsIGRhdGEsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4ubG9hZEFzc2lnbm1lbnREYXRhXyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEhpc3RvcnlcIiwgZGF0YSwgMiwgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2dFdmVudCA9IGZ1bmN0aW9uIChldmVudF90eXBlLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGZpbGVfcGF0aCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dFdmVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZXZlbnRfdHlwZVwiXSA9IGV2ZW50X3R5cGU7XG4gICAgICAgIGRhdGFbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhW1wibGFiZWxcIl0gPSBsYWJlbDtcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPSBtZXNzYWdlO1xuICAgICAgICBkYXRhW1wiZmlsZV9wYXRoXCJdID0gZmlsZV9wYXRoO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJsb2dFdmVudFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiRmFpbHVyZVwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgRmlsZSlcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNvbnRlbnRzLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGF5ID0gdGhpcy5USU1FUl9ERUxBWTtcbiAgICB9XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVGaWxlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IGNvbnRlbnRzO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uID0gZnVuY3Rpb24gKHNjb3JlLCBjb3JyZWN0LCBoaWRkZW5PdmVycmlkZSwgZm9yY2VVcGRhdGUpIHtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2VzcztcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwidXBkYXRlU3VibWlzc2lvblwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wic2NvcmVcIl0gPSBzY29yZTtcbiAgICAgICAgZGF0YVtcImNvcnJlY3RcIl0gPSBjb3JyZWN0O1xuICAgICAgICBkYXRhW1wiaGlkZGVuX292ZXJyaWRlXCJdID0gaGlkZGVuT3ZlcnJpZGU7XG4gICAgICAgIGRhdGFbXCJmb3JjZV91cGRhdGVcIl0gPSBmb3JjZVVwZGF0ZTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoKHBuZ0RhdGEsIGltZykgPT4ge1xuICAgICAgICAgICAgZGF0YVtcImltYWdlXCJdID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwidXBkYXRlU3VibWlzc2lvblwiLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCIvKipcbiAqIFNrdWxwdCBNb2R1bGUgZm9yIGhvbGRpbmcgdGhlIEluc3RydWN0b3IgQVBJLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGxvYWRlZCBpbiBieSBnZXR0aW5nIHRoZSBmdW5jdGlvbnMnIHNvdXJjZSBjb2RlIGZyb20gdG9TdHJpbmcuXG4gKiBJc24ndCB0aGF0IGNyYXp5P1xuICpcbiAqXG4gKi9cbmV4cG9ydCBsZXQgJHNrX21vZF9pbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gTWFpbiBtb2R1bGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCBhdCB0aGUgZW5kLlxuICAgIGxldCBtb2QgPSB7fTtcbiAgICBsZXQgbm9uZSA9IFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICBcbiAgICBsZXQgcHJpb3IgPSBudWxsO1xuICAgIG1vZC50aW1laXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInRpbWVpdFwiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgZGlmZmVyZW5jZTtcbiAgICAgICAgaWYgKHByaW9yID09PSBudWxsKSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBEYXRlLm5vdygpIC0gcHJpb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhuYW1lKSwgZGlmZmVyZW5jZS8xMDAwKTtcbiAgICAgICAgcHJpb3IgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZmVlZGJhY2sgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmxvZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobWVzc2FnZSkpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZGVidWcgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmRlYnVnID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdmVydHMgdGhlIG91dHB1dCBpbiB0aGUgc3R1ZGVudCByZXBvcnQgdG8gYSBweXRob24gXG4gICAgICogbGlzdCBhbmQgcmV0dXJucyBpdC5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5tYXAoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbS50b1NrdWxwdCgpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3Qob3V0cHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVzZXRzIHRoZSBvdXRwdXQsIHBhcnRpY3VsYXJseSB1c2VmdWwgaWYgdGhlIHN0dWRlbnRcbiAgICAgKiBjb2RlIGlzIGdvaW5nIHRvIGJlIHJlcnVuLlxuICAgICAqL1xuICAgIG1vZC5yZXNldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicmVzZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5vdXRwdXQucmVtb3ZlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QucXVldWVfaW5wdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicXVldWVfaW5wdXRcIiwgYXJndW1lbnRzLCAxLCBJbmZpbml0eSk7XG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGFyZ3NbaV07XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiaW5wdXRcIiwgXCJzdHJpbmdcIiwgU2suYnVpbHRpbi5jaGVja1N0cmluZyhpbnB1dCkpO1xuICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChTay5mZmkucmVtYXBUb0pzKGlucHV0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfcHJvZ3JhbSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcHJvZ3JhbVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1widmVyaWZpZXJcIl0uY29kZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfZXZhbHVhdGlvbiA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfZXZhbHVhdGlvblwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5ldmFsdWF0aW9uIHx8IFwiXCIpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC50cmFjZV9saW5lcyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5saW5lcztcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW9kLmdldF9zdHVkZW50X2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW25vbmUsIG5vbmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bXCJsaW5lXCJdID0gZXJyb3IudHJhY2ViYWNrWzBdLmxpbmVubztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb24gPSBTay5mZmkucmVtYXBUb1B5KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbZXJyb3IsIHBvc2l0aW9uXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIG1vZC5oYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiAhU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2VzcyAmJiBcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvciAmJlxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLnRwJG5hbWUgPT09IFwiVGltZUxpbWl0RXJyb3JcIjtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgYmFja3VwVGltZSA9IHVuZGVmaW5lZDtcbiAgICBtb2QubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgYmFja3VwVGltZSA9IFNrLmV4ZWNMaW1pdDtcbiAgICAgICAgaWYgKFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1vZC51bmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInVubGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gYmFja3VwVGltZTtcbiAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2Quc3VwcHJlc3Nfc2Nyb2xsaW5nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInN1cHByZXNzX3Njcm9sbGluZ1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIFxuICAgIC8qXG4gICAgZGVmIGhpc3Qoc2VsZiwgZGF0YSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnSGlzdG9ncmFtJywgJ3ZhbHVlcyc6IGRhdGEsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgcGxvdChzZWxmLCB4cywgeXM9Tm9uZSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgaWYgeXMgPT0gTm9uZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiByYW5nZShsZW4oeHMpKSwgJ3knOiB4cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICAgICBlbHNlOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgc2NhdHRlcihzZWxmLCB4cywgeXMsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ1NjYXR0ZXInLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgKi9cbiAgICBtb2QuZ2V0X3Bsb3RzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wbG90c1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dHMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0cyA9IG91dHB1dHMuZmlsdGVyKGZ1bmN0aW9uKG91dHB1dCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LnR5cGUgPT09IFwicGxvdFwiO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcImRhdGFcIjogZ3JhcGguY29udGVudC5tYXAoZnVuY3Rpb24ocGxvdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGxvdCA9IHsgXCJ0eXBlXCI6IHBsb3QudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdC50eXBlID09PSBcImxpbmVcIiB8fCBwbG90LnR5cGUgPT09IFwic2NhdHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieFwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi54OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ5XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lnk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsb3QudHlwZSA9PT0gXCJoaXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ2YWx1ZXNcIl0gPSBwbG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bsb3Q7XG4gICAgICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgICAgIFwieGxhYmVsXCI6IFwiXCIsIFwieWxhYmVsXCI6IFwiXCIsIFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIiwgXCJsZWdlbmRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShvdXRwdXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgLy8gUHJvdmlkZXMgYHN0dWRlbnRgIGFzIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSB0aGF0IHRoZSBzdHVkZW50IGRlY2xhcmVkLlxuICAgIG1vZC5TdHVkZW50RGF0YSA9IFNrLm1pc2NldmFsLmJ1aWxkQ2xhc3MobW9kLCBmdW5jdGlvbigkZ2JsLCAkbG9jKSB7XG4gICAgICAgICRsb2MuX19pbml0X18gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2VsZi5kYXRhID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBsZXQgbmV3RGljdCA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgU2suYWJzdHIuc2F0dHIoc2VsZiwgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpLCBuZXdEaWN0LCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYubW9kdWxlID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ucmVzdWx0cztcbiAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBzZWxmLm1vZHVsZS4kZDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RpY3QubXAkYXNzX3N1YnNjcmlwdChTay5mZmkucmVtYXBUb1B5KGtleSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGxvYy5nZXRfbmFtZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9uYW1lc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFNrLmZmaS5yZW1hcFRvUHkocHJvcGVydHkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICRsb2MuZ2V0X3ZhbHVlc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3ZhbHVlc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5tb2R1bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbW9kLnN0dWRlbnQgPSBTay5taXNjZXZhbC5jYWxsc2ltT3JTdXNwZW5kKG1vZC5TdHVkZW50RGF0YSk7XG4gICAgXG4gICAgbW9kLmdldF9zdHVkZW50X2RhdGEgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZGF0YVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbW9kLnN0dWRlbnQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCJsZXQgTE9DQUxfU1RPUkFHRV9SRUY7XG50cnkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0gbG9jYWxTdG9yYWdlO1xuICAgIGxldCBtb2QgPSBcIkJMT0NLUFlfTE9DQUxTVE9SQUdFX1RFU1RcIjtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKG1vZCwgbW9kKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKG1vZCk7XG59IGNhdGNoKGUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IHtcbiAgICAgICAgX2RhdGEgICAgICAgOiB7fSxcbiAgICAgICAgc2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCwgdmFsKSB7IHJldHVybiB0aGlzLl9kYXRhW2lkXSA9IFN0cmluZyh2YWwpOyB9LFxuICAgICAgICBnZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGlkKSA/IHRoaXMuX2RhdGFbaWRdIDogdW5kZWZpbmVkOyB9LFxuICAgICAgICByZW1vdmVJdGVtICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBkZWxldGUgdGhpcy5fZGF0YVtpZF07IH0sXG4gICAgICAgIGNsZWFyICAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kYXRhID0ge307IH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlN0ZXA6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLyA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6IC8vJHJvb3Qudmlld0V4YWN0VmFsdWUodHlwZSwgZXhhY3RfdmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvdyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBcclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tQeVRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeVRyYWNlLnBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0ge1wibmFtZVwiOiBwcm9wZXJ0eSwgXCJ0eXBlXCI6IFwiVW5rbm93blwiLCBcInZhbHVlXCI6IHZhbHVlLnRvU3RyaW5nKCl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bGxMZW5ndGgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsTGVuZ3RoIHx8IHZhbHVlLnYubGVuZ3RoIDw9IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IHZpZXdFeGFjdFZhbHVlIiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogVHVybnMgc3BhY2VzIGludG8gdW5kZXJzY29yZXMgaW4gdGhlIHN0cmluZywgbWFrZXMgaXQgbG93ZXJjYXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gW2BtaW5gLCBgbWF4YF0uXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIGludGVnZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgaW50ZWdlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHNvbWUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzYWZlbHkgd3JpdHRlbiBpbnRvIGFuIEhUTUwgYm94LlxuICogVGhpcyBpbmNsdWRlcyByZXBsYWNpbmcgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgKCYsIDwsID4sIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgdGV4dCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBIVE1MLXNhZmUgdGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLycvZywgXCImYXBvcztcIik7XG59XG5cbi8qKlxuICogU2h1ZmZsZSB0aGUgYmxvY2tzIGluIHRoZSB3b3Jrc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBCbG9ja2x5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQmxvY2tseS5Xb3Jrc3BhY2VTdmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1ldHJpY3MgPSB0aGlzLmdldE1ldHJpY3MoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gbWV0cmljcy52aWV3V2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy52aWV3SGVpZ2h0O1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5nZXRUb3BCbG9ja3MoZmFsc2UpO1xuICAgICAgICB2YXIgeSA9IDUsIHggPSAwLFxuICAgICAgICAgICAgbWF4aW1hbF9pbmNyZWFzZSA9IGhlaWdodC9ibG9ja3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBHZXQgYSBibG9ja1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBibG9jay5nZXRSZWxhdGl2ZVRvU3VyZmFjZVhZKCk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAtcHJvcGVydGllcy54K3JhbmRvbUludGVnZXIoMTAsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLm1vdmVCeSh4LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAtcHJvcGVydGllcy55K3kpO1xuICAgICAgICAgICAgeSA9IHkgKyByYW5kb21JbnRlZ2VyKDUsIG1heGltYWxfaW5jcmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIgYmFzZWQgb24gYSBjb25kaXRpb25hbCBjaGVjay5cbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxODg3OTY3L2phdmFzY3JpcHQtbW92ZS1vYmplY3RzLWZyb20tb25lLWFycmF5LXRvLWFub3RoZXItYmVzdC1hcHByb2FjaFxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoc291cmNlLCB0YXJnZXQsIG1vdmVDaGVjaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlW2ldO1xuICAgICAgICBpZiAobW92ZUNoZWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIG9iamVjdHNcbiAqIFRPRE86IG1ha2UgdGhpcyBzbyB3ZSBkb24ndCBoYXZlIHRvIGV4cGxpY2l0bHkgcHV0IG91dCBldmVyeSBvcHRpb25cbiAqICAgICAgICAgIG9uZSBwb3NzaWJsZSB0aGluZyB3ZSBjb3VsZCBkbyBpcyBnZXQgYSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgXG4gKiAgICAgICAgICBvZiB0aGUgY29uc3RydWN0b3IgYW5kIGxvb2sgZm9yIHRoZSBzdWJzdHJpbmcgXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIlxuICogICAgICAgICAgQnV0IEkgZG9uJ3Qga25vdyBob3cgcmVsaWFibGUgdGhhdCBpcy4gIFJhdGhlciwgaXQncyBraW5kIG9mIGhhY2tpc2guXG4gKiAgICAgICAgICBTaG91bGQgdGVob3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBleGFtaW5lZFxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiB0eXBlc1xuKiovXG5mdW5jdGlvbiBpc1NrQnVpbHRpbihvYmope1xuICAgIHJldHVybiAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5kaWN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5saXN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi50dXBsZSkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uYm9vbCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uaW50XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZmxvYXRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5zdHIpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxuZyk7XG4gICAgLy92YXIgY29uc19zdHIgPSBvYmouY29uc3RydWN0b3IgKyBcIlwiO1xuICAgIC8vcmV0dXJuIGNvbnNfc3RyLmluZGV4T2YoXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FzdE5vZGUob2JqKXtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIFwiX2FzdG5hbWVcIiBpbiBvYmo7XG59XG5cbi8qKlxuICogU2hvdWxkIHRoZW9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaSwgYnV0IEkgcHV0IGl0IGhlcmUgaW5zdGVhZCB0byBub3QgbWVzcyB1cCB0aGUgc2t1bHB0IGZpbGVzXG4gKiBsaWtlIHRoZSBub3JtYWwgU2suZmZpLnJlbWFwVG9QeSwgaXQgZG9lc24ndCB3b3JrIGZvciBmdW5jdGlvbnMgb3IgbW9yZSBjb21wbGV4IG9iamVjdHMsIGJ1dCBpdCBoYW5kbGVzXG4gKiBjYXNlcyB3aGVyZSB0aGUgdHlwZXMgaW4gb2JqIGFyZSBhIG1peCBvZiBweXRob24gU0lNUExFIG9iamVjdHMgYW5kIFNJTVBMRSBub3JtYWwgamF2YXNjcmlwdCBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWRcbiAqIEByZXR1cm4ge1NrLmJ1aWx0aW4uPz8/fSAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHl0aG9uIG9iamVjdCwgZHJvcHBpbmcgYWxsIGZ1bmN0aW9ucyBhbmQgdGhpbmdzIGl0IGNhbid0IGNvbnZlcnRcbioqL1xuZnVuY3Rpb24gbWl4ZWRSZW1hcFRvUHkob2JqKXtcbiAgICB2YXIgaztcbiAgICB2YXIga3ZzO1xuICAgIHZhciBpO1xuICAgIHZhciBhcnI7XG4gICAgLy9AVE9ETzogc2hvdWxkIHRoZW9yZXRpY2FsbHkgY2hlY2sgaWYgdGhlIG9iamVjdCBpcyBhIHB5aG9uIGRpY3Qgb3IgYXJyYXkgd2l0aCBqcyBvYmplY3RzXG4gICAgaWYgKGlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAvL29iamVjdCBpcyBhbHJlYWR5IHB5dGhvbiByZWFkeVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIikge1xuICAgICAgICAvL29iamVjdCBpcyBhY3R1YWxseSBhIGphdmFzY3JpcHQgYXJyYXlcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIC8vZm9yIGVhY2ggb2JqZWN0LCBjb252ZXJ0IGl0IHRvIGEgcHl0aG9uIG9iamVjdCBpZiBpdCBpc24ndCBvbmUgYWxyZWFkeVxuICAgICAgICAgICAgdmFyIHN1YnZhbCA9IG9ialtpXTtcbiAgICAgICAgICAgIGlmKCFpc1NrQnVpbHRpbihzdWJ2YWwpKXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChtaXhlZFJlbWFwVG9QeShzdWJ2YWwpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1YnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoYXJyKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkgey8vbnVsbCBvYmplY3RcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYoIWlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAgICAgLy9hc3N1bWluZyBpdCdzIGEgc3RhbmRhcmQgZGljdGlvbmFyeVxuICAgICAgICAgICAga3ZzID0gW107Ly9Tay5idWlsdGluLmRpY3QgdXNlcyBhbiBhcnJheSBvZiBrZXktdmFsdWUsa2V5LXZhbHVlLi4uXG4gICAgICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBrZXkgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkoaykpO1xuICAgICAgICAgICAgICAgIC8vY292ZXJ0IGNvcnJlc3BvbmRpbmcgdmFsdWUgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkob2JqW2tdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NyZWF0ZSB0aGUgbmV3IGRpY3Rpb25hcnlcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5kaWN0KGt2cyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLmFzc2skKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uYm9vbChvYmopO1xuICAgIH0gZWxzZSBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmoubmFtZSk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fOyJdLCJzb3VyY2VSb290IjoiIn0=