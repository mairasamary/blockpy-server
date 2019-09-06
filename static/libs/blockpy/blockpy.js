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
        this.components.fileSystem.newFile("!on_change.py", assignment.on_change);
      }

      this.model.assignment.onEval(assignment.on_eval || null);

      if (assignment.on_eval) {
        this.components.fileSystem.newFile("!on_eval.py", assignment.on_eval);
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

    if (settings.start_view) {
      model.display.pythonMode(settings.start_view);
    }
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

    _this.lineErrorSubscription = null;
    _this.lineUncoveredSubscription = null;
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
        this.lineErrorSubscription = this.main.model.execution.feedback.linesError.subscribe(function (lines) {
          return _this3.bm.setHighlightedLines(lines, "editor-error-line");
        });
        this.lineUncoveredSubscription = this.main.model.execution.feedback.linesUncovered.subscribe(function (lines) {
          return _this3.bm.setHighlightedLines(lines, "editor-uncovered-line");
        });
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
      this.bm.clearHighlightedLines();
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

      this.clearLineSubscriptions();

      _get(_getPrototypeOf(PythonEditorView.prototype), "exit", this).call(this, newFilename, oldEditor);
    }
  }, {
    key: "clearLineSubscriptions",
    value: function clearLineSubscriptions() {
      this.bm.clearHighlightedLines();

      if (this.lineErrorSubscription) {
        this.lineErrorSubscription.dispose();
        this.lineErrorSubscription = null;
      }

      if (this.lineUncoveredSubscription) {
        this.lineUncoveredSubscription.dispose();
        this.lineUncoveredSubscription = null;
      }
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
    value: function dummyOutSandbox() {//Sk.builtinFiles.files["src/lib/pedal/sandbox/sandbox.py"] = "class Sandbox: pass\ndef run(): pass\ndef reset(): pass\n";
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

      /*if (success && this.main.model.configuration.callbacks.success) {
          this.main.model.configuration.callbacks.success(this.main.model.assignment.id());
      }*/

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
      console.log(report["parser"]);
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, false, isSafe);
      lineOffset = instructorCode.split(NEW_LINE_REGEX).length - lineOffset - 4;
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

      /*if (success && this.main.model.configuration.callbacks.success) {
          this.main.model.configuration.callbacks.success(this.main.model.assignment.id());
      }*/

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
    key: "getLines",
    value: function getLines(ast) {
      var visitedLines = new Set();

      var visitBody = function visitBody(node) {
        if (node.lineno !== undefined) {
          visitedLines.add(node.lineno);
        }

        if (node.body) {
          node.body.forEach(function (statement) {
            return visitBody(statement);
          });
        }

        if (node.orelse) {
          node.orelse.forEach(function (statement) {
            return visitBody(statement);
          });
        }

        if (node.finalbody) {
          node.finalbody.forEach(function (statement) {
            return visitBody(statement);
          });
        }
      };

      visitBody(ast);
      return Array.from(visitedLines);
    }
    /**
     * Ensure that the parse information is up-to-date
     */

  }, {
    key: "updateParse",
    value: function updateParse() {
      var report = this.main.model.execution.reports; // Hold all the actually discovered lines from the parse

      var lines = []; // Attempt a parse

      var ast;

      try {
        var parse = Sk.parse(this.filename, this.code);
        ast = Sk.astFromParse(parse.cst, this.filename, parse.flags);
        lines = this.getLines(ast);
      } catch (error) {
        // Report the error
        report["parser"] = {
          "success": false,
          "error": error,
          "empty": true,
          "lines": lines
        };
        console.error(error);
        console.log(this.filename, this.code);
        return false;
      } // Successful parse


      report["parser"] = {
        "success": true,
        "ast": ast,
        "empty": ast.body.length === 0,
        "lines": lines
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
        var uncoveredLines = [];
        this.main.model.execution.reports.parser.lines.forEach(function (line) {
          if (studentReport.lines.indexOf(line) === -1) {
            uncoveredLines.push(line);
          }
        });
        this.feedbackModel.linesUncovered(uncoveredLines);
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
      this.main.model.execution.feedback.category("internal");
      this.main.model.execution.feedback.label("Internal Error");
      var message = "\n            Error in instructor feedback.\n            Please show the following to an instructor:\n            \n            <pre><strong>".concat(error.tp$name, "</strong>: ").concat(Sk.ffi.remapToJs(error.args), "</pre>");

      if (error.traceback && error.traceback.length) {
        var lastTraceback = error.traceback.slice(-1)[0];

        if (lastTraceback.filename.slice(0, -3) === filenameExecuted) {
          lastTraceback.lineno -= this.main.model.execution.reports.instructor.lineOffset;
        }

        var tracebackFormatted = error.traceback.map(function (frame) {
          return "File <span class=\"filename\">\"".concat(frame.filename, "\"</span>, ") + "line <span class=\"lineno\">".concat(frame.lineno, "</span>\n");
        }).join("");
        message += "<pre>".concat(tracebackFormatted, "</pre>");
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

        if (!hiddenOverride && correct && callback) {
          callback(data["assignment_id"]);
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
            Sk.abstr.objectSetItem(newDict, Sk.ffi.remapToPy(Sk.unfixReserved(key)), self.module[key]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlRmlsZSIsInNhdmVGaWxlTWVzc2FnZSIsInNhdmVBc3NpZ25tZW50Iiwic2F2ZUFzc2lnbm1lbnRNZXNzYWdlIiwidXBkYXRlU3VibWlzc2lvbiIsInVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlIiwib25FeGVjdXRpb24iLCJleGVjdXRpb24iLCJyZXBvcnRzIiwib3V0cHV0Iiwic3R1ZGVudCIsImN1cnJlbnRTdGVwIiwibGFzdFN0ZXAiLCJjdXJyZW50TGluZSIsImxhc3RMaW5lIiwiY3VycmVudFRyYWNlRGF0YSIsImN1cnJlbnRUcmFjZVN0ZXAiLCJyZXN1bHRzIiwiZ2xvYmFscyIsImZlZWRiYWNrIiwibWVzc2FnZSIsImNhdGVnb3J5IiwibGFiZWwiLCJsaW5lc0Vycm9yIiwibGluZXNVbmNvdmVyZWQiLCJjYWxsYmFja3MiLCJzZXJ2ZXJDb25uZWN0ZWQiLCJibG9ja2x5UGF0aCIsImF0dGFjaG1lbnRQb2ludCIsImNvbnRhaW5lciIsInVybHMiLCJjb25zdGFudHMiLCJndWkiLCJtYWtlSW50ZXJmYWNlIiwiJCIsImh0bWwiLCJhc3NpZ25tZW50X2lkIiwiY29tcG9uZW50cyIsInNlcnZlciIsInNhbXBsZXMiLCJncmFkaW5nX3N0YXR1cyIsInN1Ym1pc3Npb25fc3RhdHVzIiwiY291cnNlX2lkIiwibG9hZENvbmNhdGVuYXRlZEZpbGUiLCJleHRyYV9maWxlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzZXRJbnRlcmZhY2UiLCJ3YXNTZXJ2ZXJDb25uZWN0ZWQiLCJmb3JrZWRfaWQiLCJmb3JrZWRfdmVyc2lvbiIsImlwX3JhbmdlcyIsIm9uX2NoYW5nZSIsImZpbGVTeXN0ZW0iLCJuZXdGaWxlIiwib25fZXZhbCIsIm9uX3J1biIsInN0YXJ0aW5nX2NvZGUiLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJleHRyYV9zdGFydGluZ19maWxlcyIsImxvYWRTdWJtaXNzaW9uIiwic2V0U3RhdHVzIiwic2VsZiIsInVpIiwiaXNHcmFkZXIiLCJwdXJlQ29tcHV0ZWQiLCJpc0NoYW5nZWQiLCJjdXJyZW50IiwidXRpbGl0aWVzIiwibWFya2Rvd24iLCJyZXNldCIsInNlY29uZFJvdyIsImlzRmVlZGJhY2tWaXNpYmxlIiwiaXNUcmFjZVZpc2libGUiLCJUUkFDRSIsImlzQ29uc29sZVNob3dWaXNpYmxlIiwic3dpdGNoTGFiZWwiLCJhZHZhbmNlU3RhdGUiLCJjdXJyZW50UGFuZWwiLCJOT05FIiwic2l6ZSIsImhpZGVFdmFsdWF0ZSIsIkFDVElWRSIsImJhZGdlIiwidG9Mb3dlckNhc2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJjb3JnaXMiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJ1cGRhdGVNb2RlIiwibmV3TW9kZSIsIm9sZFB5dGhvbk1vZGUiLCJpc0hpc3RvcnlBdmFpbGFibGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwidHVybk9mZkhpc3RvcnlNb2RlIiwidXBkYXRlRWRpdG9yIiwic2V0UmVhZE9ubHkiLCJ0dXJuT25IaXN0b3J5TW9kZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhpc3RvcnkiLCJsb2FkIiwiZGlhbG9nIiwiRVJST1JfTE9BRElOR19ISVNUT1JZIiwidG9nZ2xlSGlzdG9yeU1vZGUiLCJtb3ZlVG9TdGFydCIsIm1vdmVQcmV2aW91cyIsIm1vdmVOZXh0IiwibW9zdFJlY2VudCIsIm1vdmVUb01vc3RSZWNlbnQiLCJ1c2UiLCJzYXZlIiwiZXhlY3V0ZSIsInJ1biIsImVuZ2luZSIsImV2YWx1YXRlIiwibWVzc2FnZXMiLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiQmxvY2tQeVRyYWNlIiwiQmxvY2tQeUNvbnNvbGUiLCJCbG9ja1B5RW5naW5lIiwiQmxvY2tQeUZpbGVTeXN0ZW0iLCJFZGl0b3JzIiwiYnlOYW1lIiwiQmxvY2tQeVNlcnZlciIsIkJsb2NrUHlDb3JnaXMiLCJCbG9ja1B5SGlzdG9yeSIsIlNUQVJUX0VWQUxfSFRNTCIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIlNUQVJUX0VWQUwiLCJWQUxVRSIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJpbmRleCIsImZmaSIsInJlbWFwVG9QeSIsInJlbW92ZSIsIkNvbnNvbGVMaW5lVHVydGxlIiwiYWRkQ2xhc3MiLCJ3aGVyZSIsInByZXBlbmQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiQ29uc29sZUxpbmVJbWFnZSIsImFwcGVuZCIsIkNvbnNvbGVMaW5lUGxvdCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lVmFsdWUiLCJDb25zb2xlTGluZUlucHV0IiwicHJvbXB0TWVzc2FnZSIsImlucHV0Rm9ybSIsImlucHV0QnRuIiwiaW5wdXRHcm91cCIsImlucHV0Qm94IiwiaW5wdXRNc2ciLCJtYWtlSW50ZXJhY3RpdmUiLCJpbnB1dCIsImJ1dHRvbiIsInJlc29sdmVPbkNsaWNrIiwic3VibWl0dGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3VibWl0Rm9ybSIsInZhbCIsInByb3AiLCJjbGljayIsImtleXVwIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsIkNvbnNvbGVMaW5lRXZhbHVhdGUiLCJDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUiLCJ0YWciLCJwcmludGVyVGFnIiwiTUlOSU1VTV9XSURUSCIsIk1JTklNVU1fSEVJR0hUIiwiREVGQVVMVF9IRUlHSFQiLCJoZWlnaHQiLCJjbGVhciIsInJlbW92ZUFsbCIsImxpbmVCdWZmZXIiLCJwbG90QnVmZmVyIiwiZW1wdHkiLCJ0dXJ0bGVMaW5lIiwiVHVydGxlR3JhcGhpY3MiLCJ0YXJnZXQiLCJnZXRUdXJ0bGVMaW5lIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImFzc2V0cyIsImxvYWRBc3NldCIsInJlbmRlciIsImN1cnJlbnRQcmludGVyRGltZW5zaW9uIiwicGFnZSIsImVhY2giLCJhdHRyIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsImZsdXNoIiwiY2hhckF0Iiwic3BsaXRMaW5lcyIsInNwbGl0IiwiYWRkQ29udGVudCIsImkiLCJwdXNoIiwicGxvdHMiLCJpbWFnZURhdGEiLCJpbWFnZUJ1ZmZlciIsImltYWdlIiwidmFsdWUiLCJwcmludGVkVmFsdWUiLCJpbnB1dEJ1ZmZlciIsInN0YXJ0RXZhbHVhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwibG9hZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsImdldEpTT04iLCJibG9ja3B5IiwiZG9jdW1lbnRhdGlvbiIsImJvZHkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInNsdWdnZWROYW1lIiwidGl0bGVOYW1lIiwiaW1nU3JjIiwidGl0bGUiLCJvdmVydmlldyIsImFwcGVuZFRvIiwiRElBTE9HX0hUTUwiLCJ0aXRsZVRhZyIsImJvZHlUYWciLCJvbmNsb3NlIiwibW9kYWwiLCJkcmFnZ2FibGUiLCJvbiIsIkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQiLCJjb25maXJtIiwiU0NSRUVOU0hPVF9CTE9DS1MiLCJldmVudCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwidGVtcG9yYXJ5RG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJBYnN0cmFjdEVkaXRvciIsImNoYW5nZUVkaXRvciIsIndhdGNoRmlsZSIsInVwZGF0ZWQiLCJvbkZpbGVVcGRhdGVkIiwiZGVsZXRlZCIsIm9uRmlsZURlbGV0ZWQiLCJuZXdGaWxlbmFtZSIsIm9sZEVkaXRvciIsImdldEZpbGUiLCJ0cmFja0N1cnJlbnRGaWxlIiwibmV3RWRpdG9yIiwic3RvcFdhdGNoaW5nRmlsZSIsInJlc3VsdCIsImhhbmRsZSIsInBhcnNlRmlsZW5hbWUiLCJBU1NJR05NRU5UX1NFVFRJTkdTIiwiZ2V0RG9jdW1lbnRhdGlvbiIsIm1ha2VTdGFydFZpZXdUYWIiLCJpY29uIiwibW9kZSIsIkFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwiLCJmaWx0ZXIiLCJzZXR0aW5nIiwicHJldHR5TmFtZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIkFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwiLCJCTE9DSyIsInNhdmVBc3NpZ25tZW50U2V0dGluZ3MiLCJjbGllbnROYW1lIiwic2VydmVyTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInN0YXJ0X3ZpZXciLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsImxpbmVFcnJvclN1YnNjcmlwdGlvbiIsImxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24iLCJ3b3Jrc3BhY2UiLCJjb25maWd1cmVDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJlbmFibGVkIiwiY2FsbGJhY2siLCJvbGRGaWxlbmFtZSIsImN1cnJlbnRCTUxpc3RlbmVyIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJpc1BhcnNvbnMiLCJsaW5lcyIsInNldEhpZ2hsaWdodGVkTGluZXMiLCJkZWxldGVGaWxlTG9jYWxseV8iLCJzZXRDb2RlIiwiY2xlYXJIaWdobGlnaHRlZExpbmVzIiwiZ2V0Q29kZSIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwiY2xlYXJMaW5lU3Vic2NyaXB0aW9ucyIsInNldE1vZGUiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsInJlZ2lzdGVyRWRpdG9yIiwiaW5zdGFuY2UiLCJleGl0IiwiZW50ZXIiLCJzcGFjZSIsImxhc3RJbmRleE9mIiwiZXhlY3V0aW9uTW9kZWwiLCJjb25maWd1cmF0aW9ucyIsIlJ1bkNvbmZpZ3VyYXRpb24iLCJldmFsIiwiRXZhbENvbmZpZ3VyYXRpb24iLCJPblJ1bkNvbmZpZ3VyYXRpb24iLCJPbkNoYW5nZUNvbmZpZ3VyYXRpb24iLCJPbkV2YWxDb25maWd1cmF0aW9uIiwiY29uZmlndXJlIiwiZ2V0U2t1bHB0T3B0aW9ucyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJ0aGVuIiwiZmFpbHVyZSIsImRpc2FibGVGZWVkYmFjayIsImV4ZWN1dGlvbkVuZF8iLCJldmFsdWF0aW9uSW5wdXQiLCJ1c2VySW5wdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiRklMRU5BTUUiLCJwcm9ncmFtcyIsInRyaW0iLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJ1cGRhdGVQYXJzZSIsInJ1bkluc3RydWN0b3JDb2RlIiwibW9kdWxlIiwiZXhlY3V0aW9uUmVwb3J0cyIsInByZXNlbnRGZWVkYmFjayIsIiRkIiwiRU1QVFlfTU9EVUxFIiwiQ29uZmlndXJhdGlvbiIsInF1ZXVlZElucHV0IiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGVvcGVuIiwib3BlbkZpbGUiLCJmaWxld3JpdGUiLCJ3cml0ZUZpbGUiLCJwcmludCIsImluQnJvd3NlciIsImlucHV0ZnVuIiwiaW5wdXRmdW5UYWtlc1Byb21wdCIsImltYWdlUHJveHkiLCJnZXRJbWFnZVByb3h5IiwicmV0YWluR2xvYmFscyIsIndhcm4iLCJFcnJvciIsInBvcCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwicHJpbnRWYWx1ZSIsInJlbWFwVG9KcyIsIl8iLCIkciIsInJlamVjdCIsIngiLCJGQUlMRUQiLCJTdHVkZW50Q29uZmlndXJhdGlvbiIsIlVUSUxJVFlfTU9EVUxFX0NPREUiLCIkc2tfbW9kX2luc3RydWN0b3IiLCJJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdCIsImNsZWFyVGltZW91dCIsIldSQVBfSU5TVFJVQ1RPUl9DT0RFIiwic3R1ZGVudENvZGUiLCJpbnN0cnVjdG9yQ29kZSIsInF1aWNrIiwiaXNTYWZlIiwic2FmZUNvZGUiLCJpbmRlbnRlZENvZGUiLCJpbmRlbnQiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiYmVnaW5FdmFsIiwicGFyc2VyIiwidmVyaWZpZXIiLCJTYW1wbGVDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0RnVuY3Rpb24iLCJkaXNhYmxlVGltZW91dCIsIkluZmluaXR5IiwicmVxdWVzdHNHZXQiLCJvcGVuVVJMIiwiaXNGb3JiaWRkZW4iLCJ2YXJpYWJsZXMiLCJsb2NhbHMiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicGFyc2VHbG9iYWxzIiwicHJvcGVydGllcyIsIm1vZHVsZXMiLCJhc3QiLCJ2aXNpdGVkTGluZXMiLCJTZXQiLCJ2aXNpdEJvZHkiLCJub2RlIiwibGluZW5vIiwic3RhdGVtZW50Iiwib3JlbHNlIiwiZmluYWxib2R5IiwiQXJyYXkiLCJmcm9tIiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJnZXRMaW5lcyIsIkZFRURCQUNLX0hUTUwiLCJmZWVkYmFja01vZGVsIiwib2Zmc2V0IiwidG9wIiwidG9wX29mX2VsZW1lbnQiLCJib3R0b21fb2ZfZWxlbWVudCIsIm91dGVySGVpZ2h0IiwiYm90dG9tX29mX3NjcmVlbiIsInRvcF9vZl9zY3JlZW4iLCJleGVjdXRpb25SZXN1bHRzIiwiTUVTU0FHRSIsIkNBVEVHT1JZIiwiTEFCRUwiLCJEQVRBIiwiaGlkZVNjb3JlIiwiZmluZEZpcnN0RXJyb3JMaW5lIiwic3R1ZGVudFJlcG9ydCIsInVuY292ZXJlZExpbmVzIiwidXBkYXRlRmVlZGJhY2siLCJub3RpZnlGZWVkYmFja1VwZGF0ZSIsImZhZGVPdXQiLCJmaWxlbmFtZUV4ZWN1dGVkIiwiYXJncyIsInRyYWNlYmFjayIsImxhc3RUcmFjZWJhY2siLCJ0cmFjZWJhY2tGb3JtYXR0ZWQiLCJmcmFtZSIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJGSUxFU19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJERUxFVEFCTEVfU0lNUExFX0ZJTEVTIiwiQmxvY2tQeUZpbGUiLCJvd25lciIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwiY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZSIsImZpbGVzXyIsIm1vdW50RmlsZXMiLCJ3YXRjaE1vZGVsIiwid2F0Y2hlc18iLCJmaWxlc3lzdGVtIiwiZmlsZUFycmF5IiwiY2hhbmdlcyIsImNoYW5nZSIsIm1vZGVsRmlsZSIsIm5vdGlmeVdhdGNoZXMiLCJvYnNlcnZlSW5BcnJheV8iLCJhcnJheSIsImNvZGVCdW5kbGUiLCJleGlzdGluZ0ZpbGUiLCJvYnNlcnZlRmlsZV8iLCJmb3VuZCIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJlcnJvckNhbGxiYWNrIiwibG9hZF9maWxlIiwiaGlkZGVuT3ZlcnJpZGUiLCJmb3JjZVVwZGF0ZSIsImdldFBuZ0Zyb21CbG9ja3MiLCJwbmdEYXRhIiwiaW1nIiwibW9kIiwibm9uZSIsImJ1aWx0aW4iLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwidiIsInkiLCJTdHVkZW50RGF0YSIsImJ1aWxkQ2xhc3MiLCIkZ2JsIiwiJGxvYyIsIl9faW5pdF9fIiwibmV3RGljdCIsImRpY3QiLCJhYnN0ciIsInNhdHRyIiwic3RyIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImdldF9uYW1lc19ieV90eXBlIiwiZXhjbHVkZV9idWlsdGlucyIsImNoZWNrQm9vbCIsInByb3BlcnR5IiwiZ2V0X3ZhbHVlc19ieV90eXBlIiwiY2FsbHNpbU9yU3VzcGVuZCIsImdldF9zdHVkZW50X2RhdGEiLCJMT0NBTF9TVE9SQUdFX1JFRiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2RhdGEiLCJTdHJpbmciLCJnZXRJdGVtIiwibmFtZXNwYWNlIiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsIklHTk9SRURfR0xPQkFMUyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bGxMZW5ndGgiLCJmdW5jX2NvZGUiLCJjb192YXJuYW1lcyIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwiY2xvbmUiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZVZhbHVlIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJyYW5kb21JbnRlZ2VyIiwiZmxvb3IiLCJyYW5kb20iLCJCbG9ja2x5IiwiV29ya3NwYWNlU3ZnIiwic2h1ZmZsZSIsIm1ldHJpY3MiLCJnZXRNZXRyaWNzIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImJsb2NrcyIsImdldFRvcEJsb2NrcyIsIm1heGltYWxfaW5jcmVhc2UiLCJnZXRSZWxhdGl2ZVRvU3VyZmFjZVhZIiwibW92ZUJ5IiwibW92ZUVsZW1lbnRzIiwibW92ZUNoZWNrIiwiaXNTa0J1aWx0aW4iLCJvYmoiLCJsbmciLCJpc0FzdE5vZGUiLCJtaXhlZFJlbWFwVG9QeSIsImsiLCJrdnMiLCJhcnIiLCJjYWxsIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxj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R0FmTSxNQWVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFdBQU8sSUFBSTdzQixFQUFFLENBQUN5bEIsT0FBSCxDQUFXMkMsR0FBZixDQUFtQnlFLEdBQW5CLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTzdzQixFQUFFLENBQUN5bEIsT0FBSCxDQUFXNkgsS0FBWCxDQUFpQlQsR0FBakIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxTQUFuQixFQUE4QjtBQUNqQyxXQUFPLElBQUk3c0IsRUFBRSxDQUFDeWxCLE9BQUgsQ0FBV3lFLElBQWYsQ0FBb0IyQyxHQUFwQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUcsT0FBT0EsR0FBUCxLQUFlLFVBQWxCLEVBQThCO0FBQ2pDLFdBQU8sSUFBSTdzQixFQUFFLENBQUN5bEIsT0FBSCxDQUFXMkMsR0FBZixDQUFtQnlFLEdBQUcsQ0FBQ2grQixJQUF2QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQzdPRCxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4vdHJhY2VcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29uc29sZX0gZnJvbSBcIi4vY29uc29sZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlGZWVkYmFja30gZnJvbSBcImZlZWRiYWNrLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVNlcnZlcn0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeURpYWxvZ30gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb3JnaXMsIF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfSBmcm9tIFwiLi9jb3JnaXNcIjtcclxuaW1wb3J0IHtCbG9ja1B5SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRWZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVTdWJtaXNzaW9uczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHJldmlld2VkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnJldmlld2VkXCJdKSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYzoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5wdWJsaWNcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBpcFJhbmdlczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pcF9yYW5nZXNcIl0pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInN1Ym1pc3Npb24uY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShcIlN0YXJ0ZWRcIiksXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiTm90UmVhZHlcIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudGx5IHZpc2libGUgRmlsZSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHByZXNlbnRlZCB3aXRoIHRoZSBpbnN0cnVjdG9yIHNldHRpbmdzIGFuZCBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5pbnN0cnVjdG9yXCIsIFwiZmFsc2VcIikudG9TdHJpbmcoKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IEhpc3RvcnkgbW9kZSBpcyBlbmdhZ2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGhpc3RvcnlNb2RlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgYXV0by1zYXZpbmcgY2hhbmdlcyBpbiBQeXRob24gZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgKiBJZiBhbiBpbnRlZ2VyLCBzcGVjaWZpZXMgdGhlIGRlbGF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKG1pY3Jvc2Vjb25kcykuXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5ldmVyIG9uIGluIG5vbi1QeXRob24gZWRpdG9ycy5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfGludH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYXV0b1NhdmU6IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25zb2xlIGlzIGZ1bGwgd2lkdGggYW5kIGZlZWRiYWNrIGlzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBiaWdDb25zb2xlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGhlaWdodCB0byB1c2UgZm9yIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgbnVsbCwgdGhlbiBsZXQgdGhlIGhlaWdodCByZW1haW4gdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBhIG51bWJlciwgdGhlbiB0aGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoaWNoIHBhbmVsIHRvIHNob3cgaW4gdGhlIHNlY29uZCByb3cncyBzZWNvbmQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRSb3dTZWNvbmRQYW5lbDoga28ub2JzZXJ2YWJsZShTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSB0cmFjaW5nIHRoZSBjb2RlIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmFjZUV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBsaXN0IG9mIHByb21pc2VzIHRvIHN0aWxsIHJlc29sdmUgd2hpbGUgbG9hZGluZyBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFByb21pc2U+fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YXNldHM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSB0ZW1wb3JhcnkgY2hhbmdlZCB2YWx1ZSBvZiB0aGUgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGZyb20gd2hhdCBpcyBpbiB0aGUgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkSW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBIGhvbGRlciBmb3IgdGhlIHRpbWVyIHRvIHRyaWdnZXIgb24tY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT25DaGFuZ2U6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25FeGVjdXRpb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIGFib3V0IGluLXByb2dyZXNzIGV4ZWN1dGlvbnNcclxuICAgICAgICAgICAgICAgIHJlcG9ydHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdCBvZiBPdXRwdXQgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBhIHN0dWRlbnQgcnVuXHJcbiAgICAgICAgICAgICAgICBzdHVkZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyOiB0aGUgZmlsZW5hbWUgdGhhdCB3YXMgbGFzdCBleGVjdXRlZCBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZXNlIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGluZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TGluZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSBvZiBzaW1wbGUgb2JqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZURhdGE6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmFjZVN0ZXA6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0dWFsIGV4ZWN1dGlvbiByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gcmVsYXRlZCB0byBmZWVkYmFjayBmcm9tIHRoZSBpbnN0cnVjdG9yIHJ1blxyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHIgKG1hcmtkb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJSZWFkeVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzRXJyb3I6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNVbmNvdmVyZWQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3VsdHMgb2YgdGhlIGxhc3QgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRnVuY3Rpb25zIHRvIGZpcmUgd2hlbiBjZXJ0YWluIGV2ZW50cyBvY2N1clxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBXaGVuIHRoZSBzdHVkZW50IGdldHMgYSBzdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiY2FsbGJhY2suc3VjY2Vzc1wiXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzZXJ2ZXIgaXMgY29ubmVjdGVkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlcnZlckNvbm5lY3RlZDoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJzZXJ2ZXIuY29ubmVjdGVkXCIsIHRydWUpKSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYmxvY2tseVBhdGg6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYmxvY2tseS5wYXRoXCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50UG9pbnQ6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1wiYXR0YWNobWVudC5wb2ludFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIEpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIE1hcHMgY29kZXMgKCdsb2dfZXZlbnQnLCAnc2F2ZV9jb2RlJykgdG8gVVJMc1xyXG4gICAgICAgICAgICAgICAgdXJsczogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJ1cmxzXCJdIHx8IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBpbml0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIGxldCBjb25zdGFudHMgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgbGV0IGd1aSA9IG1ha2VJbnRlcmZhY2UodGhpcyk7XHJcbiAgICAgICAgY29uc3RhbnRzLmNvbnRhaW5lciA9ICQoY29uc3RhbnRzLmF0dGFjaG1lbnRQb2ludCkuaHRtbCgkKGd1aSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5sb2FkQXNzaWdubWVudChhc3NpZ25tZW50X2lkKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGFncyh0YWdzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgdGFnc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTYW1wbGVTdWJtaXNzaW9ucyhzYW1wbGVzKSB7XHJcbiAgICAgICAgLy8gQWxyZWFkeSBhIEpTT04gbGlzdCByZXByZXNlbnRpbmcgc2FtcGxlc1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdWJtaXNzaW9uKHN1Ym1pc3Npb24pIHtcclxuICAgICAgICBpZiAoIXN1Ym1pc3Npb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPOiBXaGF0IGlmIHN1Ym1pc3Npb25zJyBhc3NpZ25tZW50IHZlcnNpb24gYW5kIHRoZSBhc3NpZ25tZW50cycgdmVyc2lvbiBjb25mbGljdD9cclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uaWQoc3VibWlzc2lvbi5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoc3VibWlzc2lvbi5jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWJtaXNzaW9uLmNvcnJlY3QpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zY29yZShzdWJtaXNzaW9uLnNjb3JlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZW5kcG9pbnQoc3VibWlzc2lvbi5lbmRwb2ludCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnVybChzdWJtaXNzaW9uLnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnZlcnNpb24oc3VibWlzc2lvbi52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZ3JhZGluZ1N0YXR1cyhzdWJtaXNzaW9uLmdyYWRpbmdfc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cyhzdWJtaXNzaW9uLnN1Ym1pc3Npb25fc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnVzZXIuY291cnNlSWQoc3VibWlzc2lvbi5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKHN1Ym1pc3Npb24uZXh0cmFfZmlsZXMsIHRoaXMubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXNzaWdubWVudERhdGFfKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJlc2V0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5wdWJsaWMoYXNzaWdubWVudC5wdWJsaWMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKGFzc2lnbm1lbnQuaXBfcmFuZ2VzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKGFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQubmFtZShhc3NpZ25tZW50Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShhc3NpZ25tZW50Lm9uX2NoYW5nZSB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9jaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9jaGFuZ2UucHlcIiwgYXNzaWdubWVudC5vbl9jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKGFzc2lnbm1lbnQub25fZXZhbCB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9ldmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fZXZhbC5weVwiLCBhc3NpZ25tZW50Lm9uX2V2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oYXNzaWdubWVudC5vbl9ydW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub3duZXJJZChhc3NpZ25tZW50Lm93bmVyX2lkKTtcclxuICAgICAgICBsb2FkQXNzaWdubWVudFNldHRpbmdzKHRoaXMubW9kZWwsIGFzc2lnbm1lbnQuc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3MoYXNzaWdubWVudC50YWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRTYW1wbGVTdWJtaXNzaW9ucyhhc3NpZ25tZW50LnNhbXBsZV9zdWJtaXNzaW9ucyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9pbnN0cnVjdG9yX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfc3RhcnRpbmdfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZFN1Ym1pc3Npb24oZGF0YS5zdWJtaXNzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdHVkZW50RmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUucnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVE9ET1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5cyB0aGUgS25vY2tvdXRKUyBiaW5kaW5ncyB0byB0aGUgbW9kZWwsIGluc3RhbnRpYXRpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZVxyXG4gICAgICogSFRNTC5cclxuICAgICAqL1xyXG4gICAgYXBwbHlNb2RlbCgpIHtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVdGlsaXRpZXMoKSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICBtYXJrZG93bjogKHRleHQpID0+IHRleHQgPyBFYXN5TURFLnByb3RvdHlwZS5tYXJrZG93bih0ZXh0KSA6IFwiPHA+PC9wPlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICAvLyBFYWNoIG9mIHRoZXNlIGNvbXBvbmVudHMgd2lsbCB0YWtlIHRoZSBCbG9ja1B5IGluc3RhbmNlLCBhbmQgcG9zc2libHkgYVxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSB0byB0aGUgcmVsZXZhbnQgSFRNTCBsb2NhdGlvbiB3aGVyZSBpdCB3aWxsIGJlIGVtYmVkZGVkLlxyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1kaWFsb2dcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmVlZGJhY2sgPSBuZXcgQmxvY2tQeUZlZWRiYWNrKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2tcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMudHJhY2UgPSBuZXcgQmxvY2tQeVRyYWNlKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29uc29sZSA9IG5ldyBCbG9ja1B5Q29uc29sZShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWNvbnNvbGVcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZW5naW5lID0gbmV3IEJsb2NrUHlFbmdpbmUobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5maWxlU3lzdGVtID0gbmV3IEJsb2NrUHlGaWxlU3lzdGVtKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZWRpdG9ycyA9IG5ldyBFZGl0b3JzKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZWRpdG9yXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnB5dGhvbkVkaXRvciA9IHRoaXMuY29tcG9uZW50cy5lZGl0b3JzLmJ5TmFtZShcInB5dGhvblwiKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29yZ2lzID0gbmV3IEJsb2NrUHlDb3JnaXMobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5oaXN0b3J5ID0gbmV3IEJsb2NrUHlIaXN0b3J5KG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaGlzdG9yeS10b29sYmFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2soaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJ1dHRvbi5jbGljayhzdWJtaXRGb3JtKTtcbiAgICAgICAgaW5wdXQua2V5dXAoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFByb21pc2U7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmVJbnB1dCB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBcIkV2YWx1YXRlOlwiKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5TVEFSVF9FVkFMKTtcbiAgICAgICAgdGhpcy5odG1sLmFwcGVuZCgkKFNUQVJUX0VWQUxfSFRNTCkpO1xuICAgICAgICB0aGlzLmh0bWwuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmV4ZWN1dGUuZXZhbHVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5Q29uc29sZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBjb25zb2xlLCB3aXRoIGZlYXR1cmVzIGZvciB0aGluZ3MgbGlrZSBwcmludGluZywgcGxvdHRpbmcsIGV2YWxpbmcsIGlucHV0aW5nLlxuICAgICAqIFRoZSBcInByaW50ZXJcIiBpcyB0aGUgcmVnaW9uIHdoZXJlIHdlIHB1dCB0aGluZ3MsIGFzIG9wcG9zZWQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3aG9sZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZyA9IHRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKTtcblxuICAgICAgICB0aGlzLk1JTklNVU1fV0lEVEggPSAyMDA7XG4gICAgICAgIHRoaXMuTUlOSU1VTV9IRUlHSFQgPSAyMDA7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUlHSFQgPSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCk7IC8vIExldCBDU1MgZGVmaW5lIHRoaXNcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZSB1c2VyIG1vZGlmaWVzIGEgZmlsZSwgdGhlbiBtYWtlIHRoZSBjb25zb2xlIGxvb2sgZmFkZWQgYSBsaXR0bGVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlciwgaW5jbHVkaW5nIHJlbW92aW5nIGFueSB0ZXh0IGluIGl0IGFuZFxuICAgICAqIGZpeGluZyBpdHMgc2l6ZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmVtcHR5KCk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIHJlc2V0IGl0XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBudWxsO1xuICAgICAgICBTay5UdXJ0bGVHcmFwaGljcyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUdXJ0bGVMaW5lLmJpbmQodGhpcyksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmxvYWRBc3NldC5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGxvYWRBc3NldChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGdldFR1cnRsZUxpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZUxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZSA9IG5ldyBDb25zb2xlTGluZVR1cnRsZSh0aGlzLm1haW4pO1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgZG8gc29cbiAgICAgICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcmludGVyRGltZW5zaW9uID0gdGhpcy5wcmludGVyVGFnLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodChjdXJyZW50UHJpbnRlckRpbWVuc2lvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgU2suVHVydGxlR3JhcGhpY3MuaGVpZ2h0ID0gY3VycmVudFByaW50ZXJEaW1lbnNpb24tNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHVydGxlTGluZS5odG1sWzBdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHR1cnRsZXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgbmV3VHVydGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9XSURUSCwgdGhpcy5wcmludGVyVGFnLndpZHRoKCktNDApO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9IRUlHSFQsIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSs0MCk7XG4gICAgfVxuXG4gICAgaXNNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBlYWNoIHByaW50ZWQgZWxlbWVudCBpbiB0aGUgcHJpbnRlciBhbmQgbWFrZXMgaXQgaGlkZGVuXG4gICAgICogb3IgdmlzaWJsZSwgZGVwZW5kaW5nIG9uIHdoYXQgc3RlcCB3ZSdyZSBvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIGN1cnJlbnQgc3RlcCBvZiB0aGUgZXhlY3V0ZWQgcHJvZ3JhbSB0aGF0IHdlJ3JlIG9uOyBlYWNoIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgbXVzdCBiZSBtYXJrZWQgd2l0aCBhIFwiZGF0YS1zdGVwXCIgcHJvcGVydHkgdG8gcmVzb2x2ZSB0aGlzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlIC0gRGVwcmVjYXRlZCwgbm90IHN1cmUgd2hhdCB0aGlzIGV2ZW4gZG9lcy5cbiAgICAgKi9cbiAgICBzdGVwUHJpbnRlcihzdGVwLCBwYWdlKSB7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlci1vdXRwdXRcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXN0ZXBcIikgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByaW50IGEgbGluZSB0byB0aGUgb24tc2NyZWVuIHByaW50ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmVUZXh0IC0gQSBsaW5lIG9mIHRleHQgdG8gYmUgcHJpbnRlZCBvdXQuXG4gICAgICovXG4gICAgcHJpbnQobGluZVRleHQpIHtcbiAgICAgICAgLy8gRW1wdHkgc3RyaW5ncyBtZWFucyBkbyBub3RoaW5nLlxuICAgICAgICAvLyBwcmludChcIlwiLCBlbmQ9XCJcIilcbiAgICAgICAgaWYgKCFsaW5lVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAobGluZVRleHQuY2hhckF0KGxpbmVUZXh0Lmxlbmd0aC0xKSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGxpdExpbmVzID0gbGluZVRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGlmICh0aGlzLmxpbmVCdWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIuYWRkQ29udGVudChzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBzcGxpdExpbmVzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsdXNoKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcGxvdChwbG90cykge1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVQbG90KHRoaXMubWFpbiwgcGxvdHMpO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRQSUxJbWFnZShpbWFnZURhdGEpIHtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUltYWdlKHRoaXMubWFpbiwgaW1hZ2VEYXRhLmltYWdlKTtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgcHJpbnRlZFZhbHVlID0gbmV3IENvbnNvbGVMaW5lVmFsdWUodGhpcy5tYWluLCB2YWx1ZSk7XG4gICAgICAgIHByaW50ZWRWYWx1ZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHByaW50ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZWdpc3RlcnMgYSBQcm9taXNlIGZyb20gdGhlIElucHV0IGJveFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9tcHRNZXNzYWdlIC0gTWVzc2FnZSB0byBkaXNwbGF5IHRvIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW5wdXQodGhpcy5tYWluLCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfTtcblxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICBiZWdpbkV2YWwoKSB7XG4gICAgICAgIGxldCBzdGFydEV2YWx1YXRpb24gPSBuZXcgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiBzdGFydEV2YWx1YXRpb24ucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5jb25kaXRpb25hbGx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy50YWcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLnByb3AoXCJzY3JvbGxIZWlnaHRcIikgLSB0aGlzLnRhZy5wcm9wKFwiY2xpZW50SGVpZ2h0XCIpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxufSIsImltcG9ydCB7c2x1Z30gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8vIFRPRE86IGVkaXRvci5ibS5ibG9ja0VkaXRvci5leHRyYVRvb2xzW11cblxuZXhwb3J0IGxldCBfSU1QT1JURURfREFUQVNFVFMgPSB7fTtcbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTID0ge307XG5cbi8qKlxuICogVGhpcyBpcyBhIHZlcnkgc2ltcGxpc3RpYyBoZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIHRyYW5zZm9ybVxuICogYSBnaXZlbiBidXR0b24gaW50byBhIFwiTG9hZGVkXCIgc3RhdGUgKGRpc2FibGVkLCBwcmVzc2VkIHN0YXRlLCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidG4gLSBBbiBIVE1MIGVsZW1lbnQgdG8gY2hhbmdlIHRoZSB0ZXh0IG9mLlxuICovXG5sZXQgc2V0QnV0dG9uTG9hZGVkID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxuICAgICAgICAucHJvcChcImRpc2FibGVkXCIsIHRydWUpXG4gICAgICAgIC50ZXh0KFwiTG9hZGVkXCIpXG4gICAgICAgIC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIFwidHJ1ZVwiKTtcbn07XG5cblxuLyoqXG4gKiBNb2R1bGUgdGhhdCBjb25uZWN0cyB0byB0aGUgQ09SR0lTIGRhdGFzZXRzIGFuZCBtYW5hZ2VzIGludGVyYWN0aW9uc1xuICogd2l0aCB0aGVtLiBUaGlzIGluY2x1ZGVzIGxvYWRpbmcgaW4gZGF0YXNldHMgYXQgbGF1bmNoIGFuZCBvbi10aGUtZmx5LlxuICogTm90ZSB0aGF0IHRoaXMgaGFzIG5vIHByZXNlbmNlIG9uIHNjcmVlbiwgc28gaXQgZG9lcyBub3QgaGF2ZSBhIHRhZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5Q29yZ2lzfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5Q29yZ2lzKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgdGhpcy5sb2FkZWREYXRhc2V0cyA9IFtdO1xuICAgIHRoaXMubG9hZERhdGFzZXRzKCk7XG59XG5cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmxvYWREYXRhc2V0cyA9IGZ1bmN0aW9uIChzaWxlbnRseSkge1xuICAgIC8vIExvYWQgaW4gZWFjaCB0aGUgZGF0YXNldHNcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWwsXG4gICAgICAgIGVkaXRvciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvcixcbiAgICAgICAgc2VydmVyID0gdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyO1xuICAgIGxldCBpbXBvcnRzID0gW107XG4gICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cygpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICYmICEobmFtZSBpbiBCbG9ja01pcnJvckJsb2NrRWRpdG9yLkVYVFJBX1RPT0xTKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoLmFwcGx5KGltcG9ydHMsIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnKG5hbWUpLCBuYW1lLCBzaWxlbnRseSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGRhdGFzZXRzIGFyZSBsb2FkZWQsIHVwZGF0ZSB0aGUgdG9vbGJveC5cbiAgICAkLndoZW4uYXBwbHkoJCwgaW1wb3J0cykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xuICAgICAgICBlZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgZWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmVyLmZpbmFsaXplU3Vic2NyaXB0aW9ucygpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkcyB0aGUgZGVmaW5pdGlvbnMgZm9yIGEgZGF0YXNldCBpbnRvIHRoZSBlbnZpcm9ubWVudCwgaW5jbHVkaW5nXG4gKiB0aGUgZGF0YXNldCAoYXMgYSBKUyBmaWxlKSwgdGhlIHNrdWxwdCBiaW5kaW5ncywgYW5kIHRoZSBibG9ja2x5XG4gKiBiaW5kaW5ncy4gVGhpcyByZXF1aXJlcyBhY2Nlc3MgdG8gYSBDT1JHSVMgc2VydmVyLCBhbmQgb2NjdXJzXG4gKiBhc3luY2hyb25vdXNseS4gVGhlIHJlcXVlc3RzIGFyZSBmaXJlZCBhbmQgdGhlaXIgZGVmZXJyZWQgb2JqZWN0c1xuICogYXJlIHJldHVybmVkIC0gY2FsbGVycyBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gcGVyZm9ybSBhbiBhY3Rpb25cbiAqIG9uIGNvbXBsZXRpb24gb2YgdGhlIGltcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2x1ZyAtIFRoZSBVUkwgc2FmZSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIHVzZXItZnJpZW5kbHkgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lLlxuICogQHJldHVybnMge0FycmF5LjxEZWZlcnJlZD59IC0gUmV0dXJucyB0aGUgYXN5bmMgcmVxdWVzdHMgYXMgZGVmZXJyZWQgb2JqZWN0cy5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUuaW1wb3J0RGF0YXNldCA9IGZ1bmN0aW9uIChzbHVnLCBuYW1lKSB7XG4gICAgbGV0IHVybF9yZXRyaWV2YWxzID0gW107XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cyArIFwiYmxvY2tweS9cIiArIHNsdWcgKyBcIi9cIiArIHNsdWc7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBBY3R1YWxseSBnZXQgZGF0YVxuICAgICAgICBsZXQgZ2V0RGF0YXNldCA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9kYXRhc2V0LmpzXCIpO1xuICAgICAgICAvLyBMb2FkIGdldENvbXBsZXRlIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGJlY2F1c2UgaXRzIGJpZyA6KFxuICAgICAgICBsZXQgZ2V0Q29tcGxldGUgPSAkLmdldFNjcmlwdChyb290ICsgXCJfY29tcGxldGUuanNcIik7XG4gICAgICAgIGxldCBnZXRTa3VscHQgPSAkLmdldChyb290ICsgXCJfc2t1bHB0LmpzXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtcInNyYy9saWIvXCIgKyBzbHVnICsgXCIvX19pbml0X18uanNcIl0gPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGdldEJsb2NrbHkgPSAkLmdldFNjcmlwdChyb290ICsgXCJfYmxvY2tseS5qc1wiKTtcbiAgICAgICAgLy8gT24gY29tcGxldGlvbiwgdXBkYXRlIG1lbnVzLlxuICAgICAgICAkLndoZW4oZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkRGF0YXNldHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Njc3MTY3OTM2NDFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2NzcxNjc5MzY1NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSd3aWR0aDoxMDAlOyBoZWlnaHQ6NDAwcHg7IHdoaXRlLXNwYWNlOnByZS13cmFwJz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4td2hpdGUnIGRhdGEtZGlzbWlzcz0nbW9kYWwnPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG59XG5cbi8qKlxuICogQSBzaW1wbGUgZXh0ZXJuYWxseSBhdmFpbGFibGUgZnVuY3Rpb24gZm9yIHBvcHBpbmcgdXAgYSBkaWFsb2dcbiAqIG1lc3NhZ2UuIFRoaXMgbWVudSB3aWxsIGJlIGRyYWdnYWJsZSBieSBpdHMgdGl0bGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5IC0gVGhlIGJvZHkgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25jbG9zZSAtIEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHVzZXIgY2xvc2VzIHRoZSBkaWFsb2cuXG4gKi9cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodGl0bGUsIGJvZHksIG9uY2xvc2UpIHtcbiAgICB0aGlzLnRpdGxlVGFnLmh0bWwodGl0bGUpO1xuICAgIHRoaXMuYm9keVRhZy5odG1sKGJvZHkpO1xuICAgIHRoaXMudGFnLm1vZGFsKFwic2hvd1wiKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25maXJtKFwiRXJyb3IgTG9hZGluZyBBc3NpZ25tZW50XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIGFzc2lnbm1lbnQuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmAsKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLlNDUkVFTlNIT1RfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE9cbn07IiwiaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiLi4vZWRpdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlID0+XHJcbiAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkudXBsb2FkRmlsZShlKVxyXG4gICAgKTtcclxuICAgIGZpbGVSZWFkZXIuZmlsZU5hbWUgPSBmaWxlc1swXS5uYW1lO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbHVnZ2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IHtuYW1lLCBleHRlbnNpb24sIGNvbnRlbnRzLCBtaW1ldHlwZX0gPSBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS5kb3dubG9hZEZpbGUoKTtcclxuICAgIC8vIE1ha2Ugc2FmZVxyXG4gICAgbmFtZSA9IHNsdWdnaWZ5KG5hbWUpO1xyXG4gICAgbmFtZSA9IG5hbWUgKyBleHRlbnNpb247XHJcbiAgICAvLyBNYWtlIHRoZSBkYXRhIGRvd25sb2FkIGFzIGEgZmlsZVxyXG4gICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudHNdLCB7dHlwZTogbWltZXR5cGV9KTtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgbmFtZSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbGV0IHRlbXBvcmFyeURvd25sb2FkTGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbSA9IG1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVEZWxldGVkKCkge1xyXG4gICAgICAgIC8vIFRPRE86IFN3aXRjaCB0byB0aGUgcHJldmlvdXMgZmlsZSBpbnN0ZWFkIG9mIGEgZGVmYXVsdCBmaWxlXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlVXBkYXRlZChmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IHRoaXMuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcih0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tDdXJyZW50RmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0ud2F0Y2hGaWxlKHRoaXMuZmlsZW5hbWUsIHtcclxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5vbkZpbGVVcGRhdGVkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRoaXMub25GaWxlRGVsZXRlZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBuZXdGaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSB0aGlzLmZpbGVTeXN0ZW0uZ2V0RmlsZShuZXdGaWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5ld0ZpbGVuYW1lIC0gdGhlIGZpbGVuYW1lIHRoYXQgdGhlIG90aGVyIGVkaXRvciB3aWxsIGJlIHN3aXRjaGluZyB0b1xyXG4gICAgICogQHBhcmFtIG9sZEVkaXRvclxyXG4gICAgICogQHBhcmFtIG5ld0VkaXRvclxyXG4gICAgICovXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWUubmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlbmFtZS50eXBlLFxyXG4gICAgICAgICAgICBjb250ZW50czogdGhpcy5maWxlLmhhbmRsZSgpLFxyXG4gICAgICAgICAgICBtaW1ldHlwZTogXCJ0ZXh0L3BsYWluXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiLi9weXRob25cIjtcclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1MgPSBbXHJcbiAgICBbXCJ0b29sYm94TGV2ZWxcIiwgXCJ0b29sYm94X2xldmVsXCIsIFwibm9ybWFsXCIsIFwidG9vbGJveFwiLCBcIklOQ09NUExFVEU6IFdoYXQgbGV2ZWwgb2YgdG9vbGJveCB0byBwcmVzZW50IHRvIHRoZSB1c2VyIChoaWRpbmcgYW5kIHNob3dpbmcgY2F0ZWdvcmllcykuXCJdLFxyXG4gICAgW1wic3RhcnRWaWV3XCIsIFwic3RhcnRfdmlld1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQsIERpc3BsYXlNb2RlcywgXCJUaGUgUHl0aG9uIGVkaXRvciBtb2RlIHRvIHN0YXJ0IGluIHdoZW4gdGhlIHN0dWRlbnQgc3RhcnRzIHRoZSBwcm9ibGVtLlwiXSxcclxuICAgIFtcImRhdGFzZXRzXCIsIFwiZGF0YXNldHNcIiwgXCJcIiwgXCJzdHJpbmdcIiwgXCJUaGUgY3VycmVudCBsaXN0IG9mIGRhdGFzZXRzIGF2YWlsYWJsZSBvbiBsb2FkIGFzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGltZW91dFwiLCBcImRpc2FibGVfdGltZW91dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjb2RlIGlzIGFsbG93ZWQgdG8gcnVuIHdpdGhvdXQgdGltZW91dHMgKHBvdGVudGlhbGx5IGFsbG93aW5nIGluZmluaXRlIGxvb3BzKS5cIl0sXHJcbiAgICBbXCJpc1BhcnNvbnNcIiwgXCJpc19wYXJzb25zXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoaXMgaXMgYSBwYXJzb24ncyBzdHlsZSBxdWVzdGlvbiAoanVtYmxlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUZlZWRiYWNrXCIsIFwiZGlzYWJsZV9mZWVkYmFja1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBubyBpbnN0cnVjdG9yIHNjcmlwdHMgYXJlIHJ1biAoZS5nLiwgb25fcnVuIGFuZCBvbl9ldmFsKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVHJhY2VcIiwgXCJkaXNhYmxlX3RyYWNlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cyBjb2RlIHdpbGwgbm90IGhhdmUgaXRzIGV4ZWN1dGlvbiB0cmFjZWQgKG5vIHZhcmlhYmxlcyByZWNvcmRlZCwgbm8gY292ZXJhZ2UgdHJhY2tlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUVkaXRcIiwgXCJjYW5fZWRpdFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZWRpdGFibGUgYXQgYWxsLlwiXSxcclxuICAgIFtcImRpc2FibGVCbG9ja3NcIiwgXCJjYW5fYmxvY2tzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnRTdGF0ZW1lbnRzXCIsIFwiaGlkZV9pbXBvcnRfc3RhdGVtZW50c1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgY2VydGFpbiBraW5kcyBvZiBpbXBvcnQgc3RhdGVtZW50cyAobWF0cGxvdGxpYiwgdHVydGxlLCBkYXRhc2V0cykgYXJlIG5vdCBzaG93biBpbiB0aGUgYmxvY2sgaW50ZXJmYWNlLlwiXSxcclxuICAgIFtcImhpZGVDb3ZlcmFnZUJ1dHRvblwiLCBcImhpZGVfY292ZXJhZ2VfYnV0dG9uXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGUgY292ZXJhZ2UgYnV0dG9uIGlzIG5vdCBzaG93bi5cIl1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgY2FuIGJlIGNvbW1lbnRlZCB1cG9uIGFuZCByZWdyYWRlZCBieSB0aGUgc3RhZmYgYWZ0ZXJ3YXJkcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIj5TdGFydGluZyBWaWV3OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwic3RhcnRWaWV3XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPklQIFJhbmdlczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuaXBSYW5nZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIElQIEFkZHJlc3NlcyB0aGF0IHdpbGwgYmUgZXhwbGljaXRseSBhbGxvd2VkLiBJZiBibGFuayxcclxuICAgICAgICAgICAgICAgICAgICB0aGVuIGFsbCBhZGRyZXNzZXMgYXJlIGFsbG93ZWQuIElmIGFuIGFkZHJlc3Mgc3RhcnRzIHdpdGggPGNvZGU+XjwvY29kZT4gdGhlbiBpdCBpdCBpcyBleHBsaWNpdGx5XHJcbiAgICAgICAgICAgICAgICAgICAgYmxhY2tsaXN0ZWQsIGJ1dCB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIHR1cm4gd2l0aCBhIDxjb2RlPiE8L2NvZGU+LiBBZGRyZXNzZXMgY2FuIGFsc29cclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlIGEgYml0IG1hc2sgdG8gYWxsb3cgYSByYW5nZSBvZiBhZGRyZXNzZXMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5QcmVsb2FkZWQgRGF0YXNldHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwiZGF0YXNldHNcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke0FTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXSgpO1xyXG4gICAgICAgIC8vIE9ubHkgc3RvcmUgdGhpcyBzZXR0aW5nIGlmIGl0cyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW3NlcnZlck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCwgc2V0dGluZ3MpIHtcclxuICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgIHNldHRpbmdzID0gSlNPTi5wYXJzZShzZXR0aW5ncyk7XHJcbiAgICAgICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyTmFtZSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nc1tzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzLnN0YXJ0X3ZpZXcpIHtcclxuICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHNldHRpbmdzLnN0YXJ0X3ZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uW3NlcnZlck5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnNldHRpbmdzLlwiK3NlcnZlck5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1blwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZXNldCBHcm91cFwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXN5bmNcIj48L3NwYW4+IFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkltcG9ydCBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuaW1wb3J0RGF0YXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24udG9nZ2xlSGlzdG9yeU1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdWkuZWRpdG9ycy5weXRob24uaXNIaXN0b3J5QXZhaWxhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsgYWN0aXZlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IHsgJ2FyaWEtcHJlc3NlZCc6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAke0hJU1RPUllfVE9PTEJBUl9IVE1MfVxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG4vKlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJsb2NrcHktcnVuJyBzdHlsZT0nZmxvYXQ6bGVmdCcsXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD0nY3NzOiBleGVjdXRpb24uc3RhdHVzKCkgPT0gXCJydW5uaW5nXCIgPyBcImJ0bi1pbmZvXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0aW9uLnN0YXR1cygpID09IFwiZXJyb3JcIiA/IFwiYnRuLWRhbmdlclwiIDogXCJidG4tc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKSB8fCAhYXNzaWdubWVudC51cGxvYWQoKScgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5Jz48L3NwYW4+IFJ1blxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiIGRhdGEtYmluZD1cInZpc2libGU6ICFhc3NpZ25tZW50LnVwbG9hZCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ0Jsb2NrcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGFyZ2UnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiBCbG9ja3NcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtaW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczoge2FjdGl2ZTogc2V0dGluZ3MuZWRpdG9yKCkgPT0gJ1VwbG9hZCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gSW5zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdTcGxpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWFyZUJsb2Nrc1VwZGF0aW5nKCl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVzaXplLWhvcml6b250YWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gU3BsaXRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC10ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdUZXh0J31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWwnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gVGV4dFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1yZXNldCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAhYXNzaWdubWVudC51cGxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCc+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1jYXB0dXJlJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmUnPjwvc3Bhbj4gQ2FwdHVyZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWltcG9ydCdcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKCkgfHwgKCFhc3NpZ25tZW50LnVwbG9hZCgpICYmIGFzc2lnbm1lbnQuaW1wb3J0YWJsZSgpKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tY2xvdWQtZG93bmxvYWQnPjwvc3Bhbj4gSW1wb3J0IERhdGFzZXRzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdXBsb2FkJz48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnPjxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkIFB5dGhvbiBDb2RlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1oaXN0b3J5Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWhvdXJnbGFzcyc+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaW5zdHJ1Y3RvcicgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQnPjwvc3Bhbj4gU2V0dGluZ3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1lbmdsaXNoJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+IEVuZ2xpc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IoKVwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9J2NsZWFyOmJvdGgnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJsb2NrcHktdG9vbGJhci1maWxlbmFtZS1waWNrZXJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdfX21haW5fXyd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiX19tYWluX19cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gX19tYWluX19cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnc3RhcnRpbmdfY29kZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwic3RhcnRpbmdfY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fc3RhcnRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnZ2l2ZV9mZWVkYmFjayd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwiZ2l2ZV9mZWVkYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fcnVuXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ29uX2NoYW5nZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbGVuYW1lPVwib25fY2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPiBvbl9jaGFuZ2VcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gKi9cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZUV4dHJhQmxvY2tseSgpIHtcclxuICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5jb25maWd1cmVDb250ZXh0TWVudSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTY3JlZW5zaG90XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLlNDUkVFTlNIT1RfQkxPQ0tTXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIGxldCBvbGRGaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qk1MaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9ICgpID0+IGZhbHNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHRoaXMub2xkUHl0aG9uTW9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaXNQYXJzb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzRXJyb3Iuc3Vic2NyaWJlKChsaW5lcykgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItZXJyb3ItbGluZVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzVW5jb3ZlcmVkLnN1YnNjcmliZSgobGluZXMpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLXVuY292ZXJlZC1saW5lXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5yZW5kZXIoKTtcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHRoaXMgZG9lc24ndCBlbmQgdXAgbG9va2luZyByaWdodCAoZ28gdG8gYSBkaWZmZXJlbnQgZWRpdG9yLCBjb21lIGJhY2ssIGFuZCBpdCdsbCBiZSBzcXVpc2hlZClcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ibS5yZWZyZXNoKCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIGlmIChuZXdDb250ZW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gdGhpcy5maWxlLmhhbmRsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lc24ndCBtYXR0ZXIsIGZpbGUgd2FzIGFscmVhZHkgc2h1dCBkb3duLlxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBjbG9zaW5nIHRoaXMgZmlsZVxyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0Q29kZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuYm0uZ2V0Q29kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhckxpbmVTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckxpbmVTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uc2V0TW9kZSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUuc3Vic2NyaWJlKG1vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUobW9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVhZE9ubHkoaXNSZWFkT25seSkge1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBpc1JlYWRPbmx5O1xyXG4gICAgICAgIHRoaXMuYm0uc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29kZSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKFwiLmlweW5iXCIpKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlVwbG9hZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvZGUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKTtcclxuICAgICAgICAvLyBUT0RPOiBSdW4gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSBcImFuc3dlclwiICYmIHJlc3VsdC5leHRlbnNpb24gPT09IFwiLnB5XCIpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBzbHVnZ2lmeSh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5uYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQubWltZXR5cGUgPSBcInRleHQveC1weXRob25cIjtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuRG93bmxvYWRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgcmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHl0aG9uRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJQeXRob25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5weVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBQeXRob25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFBZVEhPTl9FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBR1NfRURJVE9SX0hUTUwgPSBgXHJcbkNyZWF0ZSBuZXdcclxuSW1wb3J0IGJ5IG5hbWVcclxuRmluZCBieSBvd25lci9jb3Vyc2Uva2luZFxyXG5cclxuVGFnczpcclxuICAgIERhdGE6XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIEtpbmRcclxuICAgICAgICBMZXZlbFxyXG4gICAgICAgIFZlcnNpb25cclxuICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgQ29udHJvbHM6XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIFJlbW92ZVxyXG4gICAgICAgIERlbGV0ZSBcclxuYDtcclxuXHJcbmNsYXNzIFRhZ3NFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGFnc1wiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUYWdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhdGFncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRhZ3NFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRBR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBURVhUX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLXRleHRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBUZXh0RWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGV4dFwiKVswXSwge1xyXG4gICAgICAgICAgICBzaG93Q3Vyc29yV2hlblNlbGVjdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlcjogMSxcclxuICAgICAgICAgICAgaW5kZW50VW5pdDogNCxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHRyYUtleXM6IHtcclxuICAgICAgICAgICAgICAgIFwiVGFiXCI6IFwiaW5kZW50TW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVzY1wiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5kaXNwbGF5LmlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJGMTFcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuY29kZU1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5jb2RlTWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgfTtcblxuICAgIHJlc2V0U3R1ZGVudE1vZGVsKCkge1xuICAgICAgICBsZXQgc3R1ZGVudCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwuc3R1ZGVudDtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50U3RlcChudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xuICAgICAgICBzdHVkZW50Lmxhc3RTdGVwKDApO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRMaW5lKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZURhdGEucmVtb3ZlQWxsKCk7XG4gICAgICAgIHN0dWRlbnQucmVzdWx0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXRFeGVjdXRpb25CdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge1xuICAgICAgICAgICAgXCJ0cmFjZVwiOiBbXSxcbiAgICAgICAgICAgIFwic3RlcFwiOiAwLFxuICAgICAgICAgICAgXCJsaW5lXCI6IDAsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgaW50ZXJmYWNlIGFzcGVjdHMgb2YgdGhlIHByZXZpb3VzIFJ1bi5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gVE9ETzogQ2xlYXIgb3V0IGFueSBjb3ZlcmFnZS90cmFjZS9lcnJvciBoaWdobGlnaHRzIGluIGVkaXRvcnNcbiAgICAgICAgLy8gUmVzZXQgZXhlY3V0aW9uIGluIG1vZGVsXG4gICAgICAgIHRoaXMucmVzZXRTdHVkZW50TW9kZWwoKTtcbiAgICAgICAgLy8gR2V0IHJlcG9ydHMgcmVhZHlcbiAgICAgICAgdGhpcy5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBleGVjdXRpb24gYnVmZmVyXG4gICAgICAgIHRoaXMucmVzZXRFeGVjdXRpb25CdWZmZXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBjb25zb2xlIG9mIHByaW50ZWQgc3R1ZmZcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5jbGVhcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgYW55IG9sZCBmZWVkYmFja1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5jbGVhcigpO1xuICAgIH1cblxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi51c2UodGhpcyk7XG4gICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUZlZWRiYWNrKCkpIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25SdW4uYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiXHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2t1bHB0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxyXG4gICAgICAgICAgICAvLyBpbXBvcnRcclxuICAgICAgICAgICAgcmVhZDogdGhpcy5pbXBvcnRGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIG9wZW5cclxuICAgICAgICAgICAgZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gZmlsZS53cml0ZVxyXG4gICAgICAgICAgICBmaWxld3JpdGU6IHRoaXMud3JpdGVGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIHByaW50XHJcbiAgICAgICAgICAgIG91dHB1dDogdGhpcy5wcmludC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBQcmV2ZW50cyByZWFkaW5nIEhUTUwgZWxlbWVudHMgYXMgZmlsZXNcclxuICAgICAgICAgICAgaW5Ccm93c2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgLy9Tay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3BlZGFsL3NhbmRib3gvc2FuZGJveC5weVwiXSA9IFwiY2xhc3MgU2FuZGJveDogcGFzc1xcbmRlZiBydW4oKTogcGFzc1xcbmRlZiByZXNldCgpOiBwYXNzXFxuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4uL3RyYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lLCBjb2RlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZml4IHRvIGJlIGN1cnJlbnRseSBhZGRlZCBsaW5lXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcIl8gPSBcIiArIGNvZGU7XHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5BZGRcIiwgXCJcIiwgXCJcIiwgY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUV2YWx1YXRlLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnRWYWx1ZShTay5mZmkucmVtYXBUb0pzKG1vZHVsZS4kZC5fLiRyKCkpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogdGhpcy5jb2RlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnMuanNcIjtcclxuaW1wb3J0IHskc2tfbW9kX2luc3RydWN0b3J9IGZyb20gXCIuLi9za19tb2RfaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgVVRJTElUWV9NT0RVTEVfQ09ERSA9IFwidmFyICRidWlsdGlubW9kdWxlID0gXCIgKyAkc2tfbW9kX2luc3RydWN0b3IudG9TdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIEluc3RydWN0b3JzIGhhdmUgbm8gbGltaXRzXHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgLy8gTXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy8gRGlzYWJsZSBpbnB1dCBib3hcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIC8vIFRPRE8gU2suaW5wdXRmdW4gPSBCbG9ja1B5RW5naW5lLmlucHV0TW9ja0Z1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE86IEFsbG93IGlucHV0IGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIHRpbWVyLCBzb21laG93XHJcbiAgICAgICAgLy8gRW5hYmxlIHV0aWxpdHkgbW9kZVxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IFVUSUxJVFlfTU9EVUxFX0NPREU7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShTay5xdWV1ZWRJbnB1dC5wb3AoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2hhbmdlQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9jaGFuZ2UucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpO1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJpZ2dlck9uQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtORVdfTElORV9SRUdFWH0gZnJvbSBcIi4vb25fcnVuXCI7XHJcbmltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcIk5vbmVcIikpO1xyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0pXHJcbmRlZiBydW5fc3R1ZGVudCgpOlxyXG4gICAgIyBsaW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICB0cnk6XHJcbiR7aW5kZW50ZWRDb2RlfVxyXG4gICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlcnJvcjpcclxuICAgICAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHJldHVybiBOb25lXHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG5jb21wYXRpYmlsaXR5LnNldF9zYW5kYm94KHN0dWRlbnQpXHJcbmVycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50ID0gcnVuX3N0dWRlbnRcclxuY29tcGF0aWJpbGl0eS5nZXRfcGxvdHMgPSBnZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0ID0gZ2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgZnVuYygqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fZXZhbFwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpIHx8IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50LmV2YWx1YXRpb24gfHwgXCJOb25lXCI7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBmYWxzZSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgLy9Tay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ldmFsLiRkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZS4kZCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0xJTkVfUkVHRVggPSAvXFxyXFxufFxccnxcXG4vO1xyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcInBhc3NcIikpO1xyXG4gICAgbGV0IHRpZmFBbmFseXNpcyA9IFwiXCI7XHJcbiAgICBpZiAoIXF1aWNrKSB7XHJcbiAgICAgICAgdGlmYUFuYWx5c2lzID0gXCJmcm9tIHBlZGFsLnRpZmEgaW1wb3J0IHRpZmFfYW5hbHlzaXNcXG50aWZhX2FuYWx5c2lzKEZhbHNlKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0pXHJcbmRlZiBydW5fc3R1ZGVudCgpOlxyXG4gICAgIyBsaW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICB0cnk6XHJcbiR7aW5kZW50ZWRDb2RlfVxyXG4gICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlcnJvcjpcclxuICAgICAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHJldHVybiBOb25lXHJcbiR7dGlmYUFuYWx5c2lzfVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbmZyb20gcGVkYWwuY2FpdC5jYWl0X2FwaSBpbXBvcnQgcGFyc2VfcHJvZ3JhbVxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbiNwcmludChNQUlOX1JFUE9SVC5mZWVkYmFja1swXS5taXN0YWtlWydlcnJvciddKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcG9ydFtcInBhcnNlclwiXSk7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGZhbHNlLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldCAtIDQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBMb2dnaW5nISEhIVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ydW4uJGQ7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vb25fcnVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBCb29sZWFuKHRoaXMuY29kZS50cmltKCkpLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9yYmlkZGVuKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGFjY2Vzc2libGU6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5pbnB1dChwcm9tcHRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi91dGlsaXR5L1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi9wZWRhbC9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJTdGVwc1wiIHRoZSBleGVjdXRpb24gb2YgdGhlIGNvZGUsIG1lYW50IHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayB0byB0aGUgU2t1bHB0XHJcbiAgICAgKiBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gSGFzaCB0aGF0IG1hcHMgdGhlIG5hbWVzIG9mIHZhcmlhYmxlcyAoU3RyaW5ncykgdG8gdGhlaXIgU2t1bHB0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5OdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBjb2x1bW4gbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGl0IGFzIHRoZSBcIlhcIiBwb3NpdGlvbiB0byB0aGUgbGluZU51bWJlcidzIFwiWVwiIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxyXG4gICAgICovXHJcbiAgICBzdGVwKHZhcmlhYmxlcywgbG9jYWxzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xyXG4gICAgICAgICAgICBsZXQgZ2xvYmFscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBUcmFjZSBsb2NhbCB2YXJpYWJsZXMgcHJvcGVybHlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL2xldCBsb2NhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHMobG9jYWxzKTtcclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0TGluZXMoYXN0KSB7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWRMaW5lcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgdmlzaXRCb2R5ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubGluZW5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRMaW5lcy5hZGQobm9kZS5saW5lbm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5vcmVsc2UpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUub3JlbHNlLmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmZpbmFsYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5maW5hbGJvZHkuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZpc2l0Qm9keShhc3QpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZpc2l0ZWRMaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEhvbGQgYWxsIHRoZSBhY3R1YWxseSBkaXNjb3ZlcmVkIGxpbmVzIGZyb20gdGhlIHBhcnNlXHJcbiAgICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXHJcbiAgICAgICAgbGV0IGFzdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZSh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCB0aGlzLmZpbGVuYW1lLCBwYXJzZS5mbGFncyk7XHJcbiAgICAgICAgICAgIGxpbmVzID0gdGhpcy5nZXRMaW5lcyhhc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdCxcclxuICAgICAgICAgICAgXCJlbXB0eVwiOiBhc3QuYm9keS5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbGFiZWxcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdGhhdCBtYW5hZ2VzIHRoZSBmZWVkYmFjayBhcmVhLCB3aGVyZSB1c2VycyBhcmUgdG9sZCB0aGUgc3RhdGUgb2YgdGhlaXJcbiAgICAgKiBwcm9ncmFtJ3MgZXhlY3V0aW9uIGFuZCBnaXZlbiBndWlkYW5jZS4gQWxzbyBtYW5hZ2VzIHRoZSBjcmVhdGlvbiBvZiB0aGUgVHJhY2UgVGFibGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QmxvY2tQeUZlZWRiYWNrfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnlcIik7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbGFiZWxcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2NyZWVuICh0YWtlcyAxIHNlY29uZCkgdG8gbWFrZSB0aGUgRmVlZGJhY2sgYXJlYSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBmZWVkYmFjayBhcmVhIGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGZWVkYmFja1Zpc2libGUoKSB7XG4gICAgICAgIGxldCB0b3Bfb2ZfZWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIGxldCB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgb3V0cHV0IGN1cnJlbnRseSBpbiB0aGUgZmVlZGJhY2sgYXJlYS4gQWxzbyByZXNldHMgdGhlIHByaW50ZXIgYW5kXG4gICAgICogYW55IGhpZ2hsaWdodGVkIGxpbmVzIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKFwiKlJlYWR5KlwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5oaWRkZW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZmluZEZpcnN0RXJyb3JMaW5lKGZlZWRiYWNrRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZmVlZGJhY2tEYXRhLmxlbmd0aC0xOyBpID49IDA7IGktPSAxKSB7XG4gICAgICAgICAgICBpZiAoXCJwb3NpdGlvblwiIGluIGZlZWRiYWNrRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZWVkYmFja0RhdGFbaV0ucG9zaXRpb24ubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgd2l0aCB0aGVzZSBuZXcgZXhlY3V0aW9uIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IGRhdGFcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTUVTU0FHRSk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5DQVRFR09SWSk7XG4gICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5MQUJFTCk7XG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkhJREUpO1xuICAgICAgICBsZXQgZGF0YSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5EQVRBKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBiYXNlZCBvbiBhc3NpZ25tZW50cycgc2V0dGluZ3NcbiAgICAgICAgbGV0IGhpZGVTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBpZiAoaGlkZVNjb3JlICYmIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbGFiZWwgPSBcIk5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm8gZXJyb3JzIHJlcG9ydGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1hcCB0byBleHBlY3RlZCBCbG9ja1B5IGxhYmVsc1xuICAgICAgICBpZiAoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnN0cnVjdG9yXCIgJiYgbGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gXCJleHBsYWluXCIpIHtcbiAgICAgICAgICAgIGxhYmVsID0gXCJJbnN0cnVjdG9yIEZlZWRiYWNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBwcmVzZW50IGEgbGFjayBvZiBlcnJvciBhcyBiZWluZyBpbmNvcnJlY3RcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vZGVsIGFjY29yZGluZ2x5XG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLm1haW4udXRpbGl0aWVzLm1hcmtkb3duKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgLy8gVE9ETzogSW5zdGVhZCBvZiB0cmFja2luZyBzdHVkZW50IGZpbGUsIGxldCdzIHRyYWNrIHRoZSBpbnN0cnVjdG9yIGZpbGVcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiSW50ZXJ2ZW50aW9uXCIsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgXCJhbnN3ZXIucHlcIik7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RmVlZGJhY2tVcGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrXCIpLnNob3coKS5mYWRlT3V0KDcwMDApO1xuICAgIH07XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgXG4gICAgICAgICAgICBFcnJvciBpbiBpbnN0cnVjdG9yIGZlZWRiYWNrLlxuICAgICAgICAgICAgUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cHJlPjxzdHJvbmc+JHtlcnJvci50cCRuYW1lfTwvc3Ryb25nPjogJHtTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpfTwvcHJlPmA7XG5cbiAgICAgICAgaWYgKGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFRyYWNlYmFjayA9IGVycm9yLnRyYWNlYmFjay5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICBpZiAobGFzdFRyYWNlYmFjay5maWxlbmFtZS5zbGljZSgwLCAtMykgPT09IGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICBsYXN0VHJhY2ViYWNrLmxpbmVubyAtPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuaW5zdHJ1Y3Rvci5saW5lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRyYWNlYmFja0Zvcm1hdHRlZD0gZXJyb3IudHJhY2ViYWNrLm1hcChmcmFtZSA9PlxuICAgICAgICAgICAgICAgIGBGaWxlIDxzcGFuIGNsYXNzPVwiZmlsZW5hbWVcIj5cIiR7ZnJhbWUuZmlsZW5hbWV9XCI8L3NwYW4+LCBgK1xuICAgICAgICAgICAgICAgIGBsaW5lIDxzcGFuIGNsYXNzPVwibGluZW5vXCI+JHtmcmFtZS5saW5lbm99PC9zcGFuPlxcbmApLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGA8cHJlPiR7dHJhY2ViYWNrRm9ybWF0dGVkfTwvcHJlPmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cbn0iLCJjb25zdCBtYWtlVGFiID0gZnVuY3Rpb24oZmlsZW5hbWUsIGZyaWVuZGx5TmFtZSwgaGlkZUlmRW1wdHkpIHtcclxuICAgIGlmIChmcmllbmRseU5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZyaWVuZGx5TmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gJyR7ZmlsZW5hbWV9J30sXHJcbiAgICAgICAgICAgICAgICBjbGljazogZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCAnJHtmaWxlbmFtZX0nKSxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEke2hpZGVJZkVtcHR5fSB8fCB1aS5maWxlcy5oYXNDb250ZW50cygnJHtmaWxlbmFtZX0nKVwiPlxyXG4gICAgICAgICAgICAke2ZyaWVuZGx5TmFtZX08L2E+XHJcbiAgICA8L2xpPmA7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZJTEVTX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWZpbGVzXCJcclxuICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmZpbGVzLnZpc2libGVcIj5cclxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxzdHJvbmc+VmlldzogPC9zdHJvbmc+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgICR7bWFrZVRhYihcImFuc3dlci5weVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiU2V0dGluZ3NcIil9XHJcbiAgICAke21ha2VUYWIoXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIlN0YXJ0aW5nIENvZGVcIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fcnVuLnB5XCIsIFwiT24gUnVuXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2NoYW5nZS5weVwiLCBcIk9uIENoYW5nZVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ldmFsLnB5XCIsIFwiT24gRXZhbFwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIj9tb2NrX3VybHMuYmxvY2tweVwiLCBcIlVSTCBEYXRhXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCIsIFwiU2FtcGxlIFN1Ym1pc3Npb25zXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIXRhZ3MuYmxvY2tweVwiLCBcIlRhZ3NcIiwgdHJ1ZSl9XHJcbiAgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkIE5ldzwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9tb2NrX3VybHMuYmxvY2tweScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICc/bW9ja191cmxzLmJsb2NrcHknKVwiPlVSTCBEYXRhPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/dGFncy5ibG9ja3B5JylcIj5UYWdzPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/c2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHknKVwiPlNhbXBsZSBTdWJtaXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fY2hhbmdlLnB5JylcIj5PbiBDaGFuZ2U8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkV2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9ldmFsLnB5JylcIj5PbiBFdmFsPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0YXJ0aW5nIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0dWRlbnQgRmlsZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgXHJcbjwvdWw+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIEZpbGVuYW1lcyBsaXZlIGluIG9uZSBvZiBmaXZlIHBvc3NpYmxlIG5hbWVzcGFjZXM6XHJcbiAqICBJbnN0cnVjdG9yICghKTogSW52aXNpYmxlIHRvIHRoZSBzdHVkZW50IHVuZGVyIGFsbCBjaXJjdW1zdGFuY2VzXHJcbiAqICBTdGFydCBTcGFjZSAoXik6IFVzZWQgdG8gcmVzZXQgdGhlIHN0dWRlbnQgbmFtZXNwYWNlXHJcbiAqICBTdHVkZW50IFNwYWNlICgpOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50IHdoZW4gZGlzcGxheS5oaWRlRmlsZXMgaXMgbm90IHRydWUsIGFibGUgdG8gYmUgZWRpdGVkXHJcbiAqICBIaWRkZW4gU3BhY2UgKD8pOiBOb3QgZGlyZWN0bHkgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGFjY2Vzc2libGUgcHJvZ3JhbW1hdGljYWxseVxyXG4gKiAgUmVhZC1vbmx5IFNwYWNlICgmKTogQW4gaW5zdHJ1Y3RvciBmaWxlIHR5cGUgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGlzIHVuZWRpdGFibGUgYnkgdGhlbVxyXG4gKiAgU2VjcmV0IFNwYWNlICgkKTogTm90IHZpc2libGUgZnJvbSB0aGUgbWVudSBhdCBhbGwsIHNvbWUgb3RoZXIgbWVjaGFuaXNtIGNvbnRyb2xzIGl0XHJcbiAqICBHZW5lcmF0ZWQgU3BhY2UgKCopOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgZGVzdHJveWVkIGFmdGVyIEVuZ2luZS5DbGVhci4gQ2FuIHNoYWRvdyBhbiBhY3R1YWwgZmlsZS5cclxuICogIENvbmNhdGVuYXRlZCBTcGFjZSAoIyk6IFVzZWQgd2hlbiBidW5kbGluZyBhIHNwYWNlIGZvciB0aGUgc2VydmVyLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBUlRJTkdfRklMRVMgPSBbXHJcbiAgICAvLyBTdWJtaXNzaW9uXHJcbiAgICBcImFuc3dlci5weVwiLFxyXG4gICAgLy8gSW5zdHJ1Y3RvciBmaWxlc1xyXG4gICAgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsXHJcbiAgICBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIixcclxuICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIixcclxuICAgIFwiIW9uX3J1bi5weVwiLFxyXG4gICAgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0lDX05FV19GSUxFUyA9IFtcclxuICAgIFwiIW9uX2NoYW5nZS5weVwiLFxyXG4gICAgXCIhb25fZXZhbC5weVwiLFxyXG4gICAgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgIFwiIXRhZ3MuYmxvY2tweVwiLFxyXG4gICAgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIlxyXG5dO1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGNvbmNhdGVuYXRlZEZpbGUsIG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIGlmIChjb25jYXRlbmF0ZWRGaWxlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gSlNPTi5wYXJzZShjb25jYXRlbmF0ZWRGaWxlKTtcclxuICAgICAgICBmaWxlcyA9IGZpbGVzLm1hcChmaWxlID0+IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSwgZmlsZS5jb250ZW50cykpO1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoZmlsZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobW9kZWxGaWxlTGlzdCgpLm1hcChmaWxlID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5maWxlbmFtZSgpLFxyXG4gICAgICAgICAgICBjb250ZW50czogZmlsZS5jb250ZW50cygpXHJcbiAgICAgICAgfTtcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBrby5wdXJlQ29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KCkuZm9yRWFjaChmaWxlID0+XHJcbiAgICAgICAgICAgIHJlc3VsdFtmaWxlLmZpbGVuYW1lKCldID0gZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3RzIGF3YXkgZGF0YWJhc2UgbG9naWNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmlsZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVzXyA9IHt9O1xyXG4gICAgICAgIHRoaXMubW91bnRGaWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoTW9kZWwoKTtcclxuICAgICAgICB0aGlzLndhdGNoZXNfID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hGaWxlKGZpbGVuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BXYXRjaGluZ0ZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hNb2RlbCgpIHtcclxuICAgICAgICBsZXQgZmlsZXN5c3RlbSA9IHRoaXM7XHJcbiAgICAgICAgW3RoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXNdLmZvckVhY2goZmlsZUFycmF5ID0+XHJcbiAgICAgICAgICAgIGZpbGVBcnJheS5zdWJzY3JpYmUoZnVuY3Rpb24oY2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxGaWxlID0gY2hhbmdlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImFkZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhY2sgbmV3IGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBmaWxlc3lzdGVtLm5ld0ZpbGUobW9kZWxGaWxlLmZpbGVuYW1lKCksIG1vZGVsRmlsZS5jb250ZW50cygpLCBtb2RlbEZpbGUuY29udGVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLm5vdGlmeVdhdGNoZXMoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyhtb2RlbEZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLCBcImFycmF5Q2hhbmdlXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2Ygc3VibWlzc2lvbi5jb2RlKVxyXG4gICAgLy8gIW9uX3J1bi5weSwgIW9uX2NoYW5nZS5weSwgIW9uX2V2YWwucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlbGV2YW50IGFzc2lnbm1lbnQuPHdoYXRldmVyPlxyXG4gICAgLy8gXnN0YXJ0aW5nX2NvZGUucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vIF53aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vICF3aGF0ZXZlciBvciA/d2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuZXh0cmFGaWxlc1xyXG4gICAgLy8gT3RoZXJ3aXNlOlxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2Ygc3VibWlzc2lvbi5jb2RlXHJcbiAgICAvKipcclxuICAgICAqIE5ldyBzcGVjaWFsIGZpbGVzIG5lZWQgdG8gYmUgcmVnaXN0ZXJlZCBoZXJlXHJcbiAgICAgKiBAcGFyYW0gZmlsZSB7QmxvY2tQeUZpbGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlRmlsZV8oZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9jaGFuZ2UucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIl5zdGFydGluZ19jb2RlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIj9tb2NrX3VybHMuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhdGFncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC50YWdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiJHNldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiIVwiKSB8fCBmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCI/XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUluQXJyYXlfKGZpbGUsIGFycmF5KSB7XHJcbiAgICAgICAgZmlsZS5vd25lciA9IGFycmF5O1xyXG4gICAgICAgIGxldCBjb2RlQnVuZGxlID0gZmlsZS5vd25lcigpO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGNvZGVCdW5kbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvZGVCdW5kbGVbaV0uZmlsZW5hbWUoKSA9PT0gZmlsZS5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBjb2RlQnVuZGxlW2ldLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxlLmhhbmRsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gbmV3RmlsZS5jb250ZW50cztcclxuICAgICAgICAgICAgYXJyYXkucHVzaChuZXdGaWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnRGaWxlcygpIHtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIW9uX3J1bi5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8oZXhpc3RpbmdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58b2JqZWN0fSBUaGUgaW5mbyBhYm91dCB0aGUgZmlsZSwgb3IgZmFsc2UgaWYgaXQgY291bGQgbm90IGJlIGRlbGV0ZWRcclxuICAgICAqL1xyXG4gICAgZGVsZXRlRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChERUxFVEFCTEVfU0lNUExFX0ZJTEVTLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VycyBhIGNhbGxiYWNrIHRvIGV2ZW50dWFsbHkgY2FsbCBkZWxldGVGaWxlTG9jYWxseV9cclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyLnJlbW92ZShtb2RlbEZpbGUgPT4gbW9kZWxGaWxlLmZpbGVuYW1lID09PSBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZCB8fCBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLmRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeVdhdGNoZXMoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlLmZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLnVwZGF0ZWQoZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vVE9ETzogTW92ZSBnZXQgbGluayBkb3duIHRvIGZvb3RlciwgcmVtb3ZlIHZlcnRpY2FsIGJhciBmcm9tIHF1aWNrLW1lbnVcclxuZXhwb3J0IGxldCBGT09URVJfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktc3RhdHVzXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEFzc2lnbm1lbnQnKVwiPkxvYWQgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUFzc2lnbm1lbnQnKVwiPlNhdmUgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEZpbGUnKVwiPkxvYWQgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUZpbGUnKVwiPlNhdmUgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZERhdGFzZXQnKVwiPkxvYWQgRGF0YXNldDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9nRXZlbnQnKVwiPkxvZyBFdmVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygndXBkYXRlU3VibWlzc2lvbicpXCI+VXBkYXRlIFN1Ym1pc3Npb248L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ29uRXhlY3V0aW9uJylcIj5FeGVjdXRpb248L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZXJ2ZXIubWVzc2FnZXNcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+VXNlcjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5pZFwiPjwvc3Bhbj4gKDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIubmFtZVwiPjwvc3Bhbj4pPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+Q291cnNlOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmNvdXJzZUlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+R3JvdXA6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuZ3JvdXBJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQ6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQuaWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50IFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQudmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24uaWRcIj48L3NwYW4+PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbiBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gOyIsIi8vIFRPRE86IFNob3VsZCBkaXNhYmxlIGJ1dHRvbnMgaWYgd2UgY2FuJ3QgYWN0aXZhdGUgdGhlbS5cblxuZXhwb3J0IGNvbnN0IEhJU1RPUllfVE9PTEJBUl9IVE1MID0gYFxuPGRpdiBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS10b29sYmFyIGNvbC1tZC0xMlwiIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkuaGlzdG9yeU1vZGVcIj5cblxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zdGFydCBidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnN0YXJ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj4gU3RhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+IFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yIGZvcm0tY29udHJvbCBjdXN0b20tc2VsZWN0IG1yLTJcIiBhcmlhLXRpdGxlPVwiSGlzdG9yeSBTZWxlY3RvclwiPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkudXNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZpbGUtaW1wb3J0Jz48L3NwYW4+IFVzZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+IE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5tb3N0UmVjZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPiBNb3N0IFJlY2VudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cbmA7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBkaXNwbGF5aW5nIHRoZSB1c2VyJ3MgY29kaW5nIGxvZ3MgKHRoZWlyIGhpc3RvcnkpLlxuICogQSBsaWdodHdlaWdodCBjb21wb25lbnQsIGl0cyBvbmx5IGpvYiBpcyB0byBvcGVuIGEgZGlhbG9nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlIaXN0b3J5fVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5SGlzdG9yeSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBsb2FkKGhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAkKFwiLmJsb2NrcHktaGlzdG9yeS1zZWxlY3RvclwiKS5lbXB0eSgpO1xuICAgICAgICBsZXQgZWRpdElkID0gMDtcbiAgICAgICAgaGlzdG9yeVxuICAgICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IChcbiAgICAgICAgICAgICAgICAhZW50cnkuZmlsZV9wYXRoLnN0YXJ0c1dpdGgoXCJfaW5zdHJ1Y3Rvci5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJDb21waWxlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJJbnRlcnZlbnRpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpIHx8IGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiWC1TdWJtaXNzaW9uLkxNU1wiKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnRfdHlwZSA9IFJFTUFQX0VWRU5UX1RZUEVTW2VudHJ5LmV2ZW50X3R5cGVdIHx8IGVudHJ5LmV2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXllZCA9IHByZXR0eVByaW50RGF0ZVRpbWUoZW50cnkuY2xpZW50X3RpbWVzdGFtcCkgK1wiIC0gXCIrZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZSA9IChlbnRyeS5ldmVudF90eXBlICE9PSBcIkZpbGUuRWRpdFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIsIHt0ZXh0OiBkaXNwbGF5ZWQsIGRpc2FibGVkOiBkaXNhYmxlfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFZGl0RXZlbnQoZW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5hdHRyKFwidmFsdWVcIiwgZWRpdElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0RXZlbnRzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBlZGl0SWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rvci5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1heCgwLCBlZGl0SWQtMSkpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLmNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtb3ZlVG9TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoMCk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZVByZXZpb3VzKCkge1xuICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1heCgwLCBjdXJyZW50SWQtMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVOZXh0KCkge1xuICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1pbih0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEsIGN1cnJlbnRJZCsxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZVRvTW9zdFJlY2VudCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwodGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnNldENvZGUodGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICAgICAgbGV0IGNvZGUgPSB0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmZpbGUuaGFuZGxlKGNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFZGl0RXZlbnQoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuICgoZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkVkaXRcIiB8fFxuICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuQ3JlYXRlXCIpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZW50cnkuZmlsZV9wYXRoKTtcbiAgICB9XG5cbn1cblxuY29uc3QgUkVNQVBfRVZFTlRfVFlQRVMgPSB7XG4gICAgXCJTZXNzaW9uLlN0YXJ0XCI6IFwiQmVnYW4gc2Vzc2lvblwiLFxuICAgIFwiWC1JUC5DaGFuZ2VcIjogXCJDaGFuZ2VkIElQIGFkZHJlc3NcIixcbiAgICBcIkZpbGUuRWRpdFwiOiBcIkVkaXRlZCBjb2RlXCIsXG4gICAgXCJGaWxlLkNyZWF0ZVwiOiBcIlN0YXJ0ZWQgYXNzaWdubWVudFwiLFxuICAgIFwiUnVuLlByb2dyYW1cIjogXCJSYW4gcHJvZ3JhbVwiLFxuICAgIFwiQ29tcGlsZS5FcnJvclwiOiBcIlN5bnRheCBlcnJvclwiLFxuICAgIFwiWC1TdWJtaXNzaW9uLkxNU1wiOiBcIlVwZGF0ZWQgZ3JhZGVcIlxufTtcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxuICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIixcbiAgICBcIkF1Z1wiLCBcIlNlcHRcIiwgXCJPY3RcIixcbiAgICBcIk5vdlwiLCBcIkRlY1wiXG5dO1xuY29uc3Qgd2Vla0RheXMgPSBbXG4gICAgXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIixcbiAgICBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLFxuICAgIFwiU2F0XCJcbl07XG5cbmZ1bmN0aW9uIGlzU2FtZURheShmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0LmdldERhdGUoKSA9PT0gc2Vjb25kLmdldERhdGUoKSAmJlxuICAgICAgICBmaXJzdC5nZXRNb250aCgpID09PSBzZWNvbmQuZ2V0TW9udGgoKSAmJlxuICAgICAgICBmaXJzdC5nZXRGdWxsWWVhcigpID09PSBzZWNvbmQuZ2V0RnVsbFllYXIoKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgYSBkYXRlL3RpbWUgc3RyaW5nIGFuZCByZXdyaXRlIGl0IGFzIHNvbWV0aGluZ1xuICogbW9yZSBodW1hbiByZWFkYWJsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0aW1lU3RyaW5nIC0gdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIChcIllZWVlNTUREIEhITU1TU1wiKVxuICogQHJldHVybnMge1N0cmluZ30gLSBBIGh1bWFuLXJlYWRhYmxlIHRpbWUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBwcmV0dHlQcmludERhdGVUaW1lKHRpbWVTdHJpbmcpIHtcbiAgICAvKmxldCB5ZWFyID0gdGltZVN0cmluZy5zbGljZSgwLCA0KSxcbiAgICAgICAgbW9udGggPSBwYXJzZUludCh0aW1lU3RyaW5nLnNsaWNlKDQsIDYpLCAxMCktMSxcbiAgICAgICAgZGF5ID0gdGltZVN0cmluZy5zbGljZSg2LCA4KSxcbiAgICAgICAgaG91ciA9IHRpbWVTdHJpbmcuc2xpY2UoOSwgMTEpLFxuICAgICAgICBtaW51dGVzID0gdGltZVN0cmluZy5zbGljZSgxMSwgMTMpLFxuICAgICAgICBzZWNvbmRzID0gdGltZVN0cmluZy5zbGljZSgxMywgMTUpOyovXG4gICAgLy8gVE9ETzogSGFuZGxlIHRpbWV6b25lcyBjb3JyZWN0bHlcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcGFzdCA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVTdHJpbmcsIDEwKSk7XG4gICAgaWYgKGlzU2FtZURheShub3csIHBhc3QpKSB7XG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheVN0ciA9IHdlZWtEYXlzW3Bhc3QuZ2V0RGF5KCldO1xuICAgICAgICBsZXQgbW9udGhTdHIgPSBtb250aE5hbWVzW3Bhc3QuZ2V0TW9udGgoKV07XG4gICAgICAgIGxldCBkYXRlID0gZGF5U3RyICsgXCIsIFwiICsgbW9udGhTdHIgKyBcIiBcIiArIHBhc3QuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IHBhc3QuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiwgXCIrcGFzdC5nZXRGdWxsWWVhcigpICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIE9wZW5zIHRoZSBoaXN0b3J5IGRpYWxvZyBib3guIFRoaXMgcmVxdWlyZXMgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYW5kXG4gKiBvY2N1cnMgYXN5bmNocm9ub3VzbHkuIFRoZSB1c2VycycgY29kZSBpcyBzaG93biBpbiBwcmVmb3JtYXR0ZWQgdGV4dFxuICogdGFncyAobm8gY29kZSBoaWdobGlnaHRpbmcgY3VycmVudGx5KSBhbG9uZyB3aXRoIHRoZSB0aW1lc3RhbXAuXG4gKi9cbkJsb2NrUHlIaXN0b3J5LnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZztcbiAgICB2YXIgYm9keSA9IFwiPHByZT5hID0gMDwvcHJlPlwiO1xuICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5nZXRIaXN0b3J5KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJvZHkgPSBkYXRhLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBsZXRlLCBlbGVtKSB7IFxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlX3N0ciA9IHByZXR0eVByaW50RGF0ZVRpbWUoZWxlbS50aW1lKTtcbiAgICAgICAgICAgIHZhciBuZXdfbGluZSA9IFwiPGI+XCIrY29tcGxldGVfc3RyK1wiPC9iPjxicj48cHJlPlwiK2VsZW0uY29kZStcIjwvcHJlPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlK1wiXFxuXCIrbmV3X2xpbmU7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgICAgICBkaWFsb2cuc2hvdyhcIldvcmsgSGlzdG9yeVwiLCBib2R5LCBmdW5jdGlvbigpIHt9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xufVxuXG4vLyBUT0RPOiBHZXQgc2hhcmVhYmxlIGxpbmsgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW50ZXJmYWNlKG1haW4pIHtcbiAgICByZXR1cm4gYFxuPGRpdiBjbGFzcz0nYmxvY2tweS1jb250ZW50IGNvbnRhaW5lci1mbHVpZCc+XG5cbiAgICA8IS0tIERpYWxvZyAtLT5cbiAgICAke0RJQUxPR19IVE1MfVxuICAgIFxuICAgIDwhLS0gSGlkZGVuIENhcHR1cmUgQ2FudmFzIC0tPlxuICAgIDxjYW52YXMgaWQ9J2NhcHR1cmUtY2FudmFzJyBjbGFzcz0nZC1ub25lJyByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9jYW52YXM+XG4gICAgXG4gICAgPCEtLSBSb3cgMTogSGVhZGVyIGFuZCBRdWljayBNZW51IC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICBcbiAgICAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMTAgYmxvY2tweS1wYW5lbCBibG9ja3B5LWhlYWRlcidcbiAgICAgICAgICAgICAgIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGFiZWw9J0Fzc2lnbm1lbnQgRGVzY3JpcHRpb24nPlxuICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEFzc2lnbm1lbnQgTmFtZSAtLT5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGV2ZWw9JzEnXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrcHktbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QmxvY2tQeTogPC9zdHJvbmc+IFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogYXNzaWdubWVudC5uYW1lJz48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gUmVzZXQgSW5zdHJ1Y3Rpb25zIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWluc3RydWN0aW9ucy1yZXNldFwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuaW5zdHJ1Y3Rpb25zLnJlc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBSZXNldCBpbnN0cnVjdGlvbnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBJbnN0cnVjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWluc3RydWN0aW9ucydcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogdWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0yIGJsb2NrcHktcGFuZWwgYmxvY2tweS1xdWljay1tZW51J1xuICAgICAgICAgICAgIHJvbGU9J21lbnViYXInIGFyaWEtbGFiZWw9J1F1aWNrIE1lbnUnIHRpdGxlPVwiUXVpY2sgTWVudVwiPlxuICAgICAgICAgICAgPCEtLSBHZXQgU2hhcmVhYmxlIExpbmsgLS0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAyOiBDb25zb2xlIGFuZCBGZWVkYmFjayAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgIFxuICAgICAgICA8IS0tIENvbnNvbGUgLS0+XG4gICAgICAgICR7Q09OU09MRV9IVE1MfVxuICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2sgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSAtLT5cbiAgICAgICAgJHtGRUVEQkFDS19IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgXG4gICAgICAgIDwhLS0gVHJhY2UgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSAtLT5cbiAgICAgICAgJHtUUkFDRV9IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDM6IEZpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICA8IS0tIGtvIGlmOiB1aS5maWxlcy52aXNpYmxlIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICR7RklMRVNfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC9rbyAtLT5cbiAgICBcbiAgICA8IS0tIFZpZXcgUm93IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtFRElUT1JTX0hUTUx9XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZvb3RlciBSb3cgLS0+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtGT09URVJfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIGA7XG59OyIsImltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBzYXZlQXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xuXG4vKipcbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgbGV0IFN0YXR1c1N0YXRlID0ge1xuICAgIFJFQURZOiBcInJlYWR5XCIsXG4gICAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAgIFJFVFJZSU5HOiBcInJldHJ5aW5nXCIsXG4gICAgRkFJTEVEOiBcImZhaWxlZFwiLFxuICAgIE9GRkxJTkU6IFwib2ZmbGluZVwiXG59O1xuXG4vKipcbiAqIE9iamVjdCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBleHRlcm5hbCBzZXJ2ZXJzLiBUaGlzIGluY2x1ZGVzIGZ1bmN0aW9uYWxpdHkgZm9yXG4gKiBzYXZpbmcgYW5kIGxvYWRpbmcgZmlsZXMsIGxvZ2dpbmcgZXZlbnRzLCBzYXZpbmcgY29tcGxldGlvbnMsIGFuZCByZXRyaWV2aW5nIGhpc3RvcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeVNlcnZlcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeVNlcnZlcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vIFNhdmUgVVJMcyBsb2NhbGx5IGZvciBxdWlja2VyIGFjY2Vzc1xuICAgIHRoaXMudXJscyA9IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzO1xuXG4gICAgLy8gQWRkIHRoZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwiQkxPQ0tQWVwiKTtcblxuICAgIC8vIEZhdWx0UmVzaXN0YW50Q2FjaGVcbiAgICB0aGlzLnF1ZXVlID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dFdmVudFwiLCBcIltdXCIpKSxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFwiW11cIikpXG4gICAgfTtcbiAgICB0aGlzLk1BWF9RVUVVRV9TSVpFID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuVElNRVJfREVMQVkgPSAxMDAwO1xuICAgIHRoaXMuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLmNoZWNrQ2FjaGVzKCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIElQIGFkZHJlc3MgaGFzIGNoYW5nZWQsIGxvZ2dpbmcgYW4gZXZlbnQgaWYgdGhhdCBvY2N1cnMuXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tJUCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiSVBcIikpIHtcbiAgICAgICAgICAgIGxldCBvbGRJUCA9IHRoaXMuc3RvcmFnZS5nZXQoXCJJUFwiKTtcbiAgICAgICAgICAgIGlmIChvbGRJUCAhPT0gcmVzcG9uc2UuaXApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJvbGRcIjogb2xkSVAsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHJlc3BvbnNlLmlwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFdmVudChcIlgtSVAuQ2hhbmdlXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGVyZSBoYXZlIGJlZW4gcHJldmlvdXMgZmFpbHVyZXMgY2FjaGVkLCBhbmQgaWYgc28gcmV0cmllcyB0aGVtLlxuICogVE9ETzogdXBkYXRlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrQ2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlQXNzaWdubWVudFwiKSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZUFzc2lnbm1lbnRcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucXVldWUpLmZvckVhY2goZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIChmdW5jdGlvbiBwdXNoQW55UXVldWVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5wb3AoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzZXJ2ZXIudXJsc1tlbmRwb2ludF07XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgZmlsZW5hbWUpIHtcbiAgICBtb2RlbC5zdWJzY3JpYmUoKGNvbnRlbnRzKSA9PlxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpID8gdGhpcy5zYXZlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIDogZmFsc2UsIHRoaXMpO1xuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLnB1c2goZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBUT0RPOiBmaXhcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnN1Ym1pc3Npb24uY29kZSwgXCJhbnN3ZXIucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25SdW4sIFwiIW9uX3J1bi5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkV2YWwsIFwiIW9uX2V2YWwucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UsIFwiIW9uX2NoYW5nZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMsIFwiIWluc3RydWN0aW9ucy5tZFwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUsIFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3R1ZGVudEZpbGVzLCBcIiNleHRyYVN0dWRlbnRGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhU3RhcnRpbmdGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYUluc3RydWN0b3JGaWxlcywgXCIjZXh0cmFJbnN0cnVjdG9yRmlsZXMuYmxvY2tweVwiKTtcbn07XG5cbi8qKlxuICpcbiAqIFNvbWUgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGhhcHBlbiBhZnRlciBvdGhlciB0aGluZ3MgaGF2ZSBiZWVuIGxvYWRlZC5cbiAqIFJpZ2h0IG5vdyB0aGlzIGlzIGp1c3QgYWZ0ZXIgQ09SR0lTIGxpYnJhcmllcyBoYXZlIGJlZW4gbG9hZGVkLCBidXQgbWF5YmVcbiAqIHdlJ2xsIGFkZCBtb3JlIGxhdGVyIGFuZCB0aGlzIHdpbGwgbmVlZCB0byBiZSByZWZhY3RvcmVkLlxuICpcbiAqIFRPRE86IGZpeFxuICpcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuZmluYWxpemVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMuc3Vic2NyaWJlKHRoaXMuc2F2ZUFzc2lnbm1lbnQuYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgcGF5bG9hZCBmb3IgYW55IGNvbW11bmljYXRpb24gd2l0aCB0aGUgc2VydmVyIEFQSVxuICogQHJldHVybnMge3thc3NpZ25tZW50X2lkOiAqLCBjb3Vyc2VfaWQ6ICosIGdyb3VwX2lkOiAqLCB1c2VyX2lkOiAqLCB0aW1lem9uZTogKiwgdmVyc2lvbjogKiwgdGltZXN0YW1wOiAqfX1cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU2VydmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXNzaWdubWVudCA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50O1xuICAgIGxldCB1c2VyID0gdGhpcy5tYWluLm1vZGVsLnVzZXI7XG4gICAgbGV0IHN1Ym1pc3Npb24gPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbjtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGF0dXMgYW5kIG1lc3NhZ2UgZm9yIHRoZSByZWxldmFudCBlbmRwb2ludC5cbiAqIEBwYXJhbSBlbmRwb2ludCB7c3RyaW5nfSBvbmUgb2YgdGhlIFVSTCBlbmRwb2ludHNcbiAqIEBwYXJhbSBzdGF0dXMge1N0YXR1c1N0YXRlfVxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZz99XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludF0oc3RhdHVzKTtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50ICsgXCJNZXNzYWdlXCJdKG1lc3NhZ2UgfHwgXCJcIik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gb3ZlcmxheSBvbiB0aGUgc2NyZWVuIHRoYXQgYmxvY2tzIG9wZXJhdGlvbiB1bnRpbCB0aGUgc3lzdGVtIGlzIHJlYWR5LlxuICogVGhlIG92ZXJsYXkgZ2V0cyBwcm9ncmVzc2l2ZWx5IGRhcmtlciB0byBpbmRpY2F0ZSByZXBlYXRlZCBmYWlsdXJlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2hvd092ZXJsYXkgPSBmdW5jdGlvbiAoYXR0ZW1wdCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyArPSAxO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2NrcHktb3ZlcmxheVwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImJsb2NrcHktb3ZlcmxheVwiPiA8L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGF0dGVtcHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjOTg4XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzY1NVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiMzMzNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG4vKipcbiAqIFVuZG8gYSBsZXZlbCBvZiBvdmVybGF5OyBpZiB0aGlzIHdhcyB0aGUgbGFzdCBsZXZlbCwgcmVtb3ZlcyBpdCBmcm9tIHRoZSBzY3JlZW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmhpZGVPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyAtPSAxO1xuICAgIGlmICh0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2VucXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgbm90IG92ZXJmaWxsZWQgdGhlIHF1ZXVlXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMucXVldWVbY2FjaGVdLmxlbmd0aDtcbiAgICBsZXQgbWF4ID0gdGhpcy5NQVhfUVVFVUVfU0laRVtjYWNoZV07XG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXSA9IHRoaXMucXVldWVbY2FjaGVdLnNsaWNlKGxlbmd0aCAtIG1heCwgbWF4KTtcbiAgICB9XG4gICAgLy8gT25seSBhZGQgdGhlIGVsZW1lbnQgaWYgaXQncyBuZXdcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0ucHVzaChrZXkpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9kZXF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0uc3BsaWNlKGluZGV4KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZW5kcG9pbnQsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgIGxldCBwb3N0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuX2VucXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZS5pcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHBvc3RSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChwb3N0UmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFrZSBhIEFKQVggcmVxdWVzdCB0aGF0LCB1cG9uIGZhaWx1cmUsIHdpbGwgY2hlY2sgdG8gc2VlIGlmIHRoaXMgd2FzIHRoZVxuICogbGF0ZXN0IGF0dGVtcHQgZm9yIHRoaXMgYGNhY2hlYCBtYXJrZXIuIElmIHNvLCBpdCB3aWxsIGF0dGVtcHQgYWdhaW4gdW50aWxcbiAqIHN1Y2Nlc3NmdWw7IG90aGVyd2lzZSwgaXQgZ2l2ZXMgdXAgdGhlIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgQUpBWC1yZWFkeSBkYXRhIHRvIGJlIHBvc3RlZFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCB0aW1lclxuICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50IC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCBjYWNoZSBlbnRyeVxuICogQHBhcmFtIHtJbnRlZ2VyfSBkZWxheSAtIFRoZSBjdXJyZW50IG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcbiB0cnlpbmcgdGhlIHJlcXVlc3QgYWdhaW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0TGF0ZXN0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSkge1xuICAgIGxldCBjYWNoZSA9IGVuZHBvaW50ICsgZmlsZW5hbWU7XG4gICAgbGV0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY29ubmVjdGVkIGJ1dCBmYWlsZWQsIGRvbid0IHRyeSBhZ2FpbiBidXQgbGV0IHRoZSB1c2VyIGtub3cgd2h5LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyc1tjYWNoZV0pO1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lcnNbY2FjaGVdID0gc2V0VGltZW91dChyZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RCbG9ja2luZyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICB0aGlzLnNob3dPdmVybGF5KGF0dGVtcHRzKTtcbiAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCgoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZShlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMgLSAxLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoYXNzaWdubWVudF9pZCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiYXNzaWdubWVudF9pZFwiXSA9IGFzc2lnbm1lbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRBc3NpZ25tZW50XCIsIGRhdGEsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4ubG9hZEFzc2lnbm1lbnREYXRhXyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEhpc3RvcnlcIiwgZGF0YSwgMiwgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2dFdmVudCA9IGZ1bmN0aW9uIChldmVudF90eXBlLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGZpbGVfcGF0aCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dFdmVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZXZlbnRfdHlwZVwiXSA9IGV2ZW50X3R5cGU7XG4gICAgICAgIGRhdGFbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhW1wibGFiZWxcIl0gPSBsYWJlbDtcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPSBtZXNzYWdlO1xuICAgICAgICBkYXRhW1wiZmlsZV9wYXRoXCJdID0gZmlsZV9wYXRoO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJsb2dFdmVudFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiRmFpbHVyZVwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgRmlsZSlcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNvbnRlbnRzLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGF5ID0gdGhpcy5USU1FUl9ERUxBWTtcbiAgICB9XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVGaWxlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IGNvbnRlbnRzO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uID0gZnVuY3Rpb24gKHNjb3JlLCBjb3JyZWN0LCBoaWRkZW5PdmVycmlkZSwgZm9yY2VVcGRhdGUpIHtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2VzcztcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwidXBkYXRlU3VibWlzc2lvblwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wic2NvcmVcIl0gPSBzY29yZTtcbiAgICAgICAgZGF0YVtcImNvcnJlY3RcIl0gPSBjb3JyZWN0O1xuICAgICAgICBkYXRhW1wiaGlkZGVuX292ZXJyaWRlXCJdID0gaGlkZGVuT3ZlcnJpZGU7XG4gICAgICAgIGRhdGFbXCJmb3JjZV91cGRhdGVcIl0gPSBmb3JjZVVwZGF0ZTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoKHBuZ0RhdGEsIGltZykgPT4ge1xuICAgICAgICAgICAgZGF0YVtcImltYWdlXCJdID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwidXBkYXRlU3VibWlzc2lvblwiLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGlkZGVuT3ZlcnJpZGUgJiYgY29ycmVjdCAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiLyoqXG4gKiBTa3VscHQgTW9kdWxlIGZvciBob2xkaW5nIHRoZSBJbnN0cnVjdG9yIEFQSS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gYnkgZ2V0dGluZyB0aGUgZnVuY3Rpb25zJyBzb3VyY2UgY29kZSBmcm9tIHRvU3RyaW5nLlxuICogSXNuJ3QgdGhhdCBjcmF6eT9cbiAqXG4gKlxuICovXG5leHBvcnQgbGV0ICRza19tb2RfaW5zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1haW4gbW9kdWxlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYXQgdGhlIGVuZC5cbiAgICBsZXQgbW9kID0ge307XG4gICAgbGV0IG5vbmUgPSBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgXG4gICAgbGV0IHByaW9yID0gbnVsbDtcbiAgICBtb2QudGltZWl0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ0aW1laXRcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChwcmlvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gRGF0ZS5ub3coKSAtIHByaW9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobmFtZSksIGRpZmZlcmVuY2UvMTAwMCk7XG4gICAgICAgIHByaW9yID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGZlZWRiYWNrIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5sb2cgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGRlYnVnIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5kZWJ1ZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb3ZlcnRzIHRoZSBvdXRwdXQgaW4gdGhlIHN0dWRlbnQgcmVwb3J0IHRvIGEgcHl0aG9uIFxuICAgICAqIGxpc3QgYW5kIHJldHVybnMgaXQuXG4gICAgKiovXG4gICAgbW9kLmdldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQubWFwKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udG9Ta3VscHQoKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KG91dHB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGUgb3V0cHV0LCBwYXJ0aWN1bGFybHkgdXNlZnVsIGlmIHRoZSBzdHVkZW50XG4gICAgICogY29kZSBpcyBnb2luZyB0byBiZSByZXJ1bi5cbiAgICAgKi9cbiAgICBtb2QucmVzZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInJlc2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ub3V0cHV0LnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnF1ZXVlX2lucHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInF1ZXVlX2lucHV0XCIsIGFyZ3VtZW50cywgMSwgSW5maW5pdHkpO1xuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBhcmdzW2ldO1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImlucHV0XCIsIFwic3RyaW5nXCIsIFNrLmJ1aWx0aW4uY2hlY2tTdHJpbmcoaW5wdXQpKTtcbiAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goU2suZmZpLnJlbWFwVG9KcyhpbnB1dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X3Byb2dyYW0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Byb2dyYW1cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInZlcmlmaWVyXCJdLmNvZGUpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X2V2YWx1YXRpb24gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X2V2YWx1YXRpb25cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXZhbHVhdGlvbiB8fCBcIlwiKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QudHJhY2VfbGluZXMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGxpbmVzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ubGluZXM7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShsaW5lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vZC5nZXRfc3R1ZGVudF9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtub25lLCBub25lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvcixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW1wibGluZVwiXSA9IGVycm9yLnRyYWNlYmFja1swXS5saW5lbm87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uID0gU2suZmZpLnJlbWFwVG9QeShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW2Vycm9yLCBwb3NpdGlvbl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBtb2QuaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImhhZF9leGVjdXRpb25fdGltZV9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gIVNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvci50cCRuYW1lID09PSBcIlRpbWVMaW1pdEVycm9yXCI7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGJhY2t1cFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgbW9kLmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGJhY2t1cFRpbWUgPSBTay5leGVjTGltaXQ7XG4gICAgICAgIGlmIChTay5leGVjTGltaXRGdW5jdGlvbikge1xuICAgICAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb2QudW5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IGJhY2t1cFRpbWU7XG4gICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnN1cHByZXNzX3Njcm9sbGluZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzdXBwcmVzc19zY3JvbGxpbmdcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBcbiAgICAvKlxuICAgIGRlZiBoaXN0KHNlbGYsIGRhdGEsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0hpc3RvZ3JhbScsICd2YWx1ZXMnOiBkYXRhLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHBsb3Qoc2VsZiwgeHMsIHlzPU5vbmUsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIGlmIHlzID09IE5vbmU6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcmFuZ2UobGVuKHhzKSksICd5JzogeHMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAgICAgZWxzZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHNjYXR0ZXIoc2VsZiwgeHMsIHlzLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdTY2F0dGVyJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICovXG4gICAgbW9kLmdldF9wbG90cyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcGxvdHNcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXRzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBvdXRwdXRzLmZpbHRlcihmdW5jdGlvbihvdXRwdXQpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC50eXBlID09PSBcInBsb3RcIjtcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XCJkYXRhXCI6IGdyYXBoLmNvbnRlbnQubWFwKGZ1bmN0aW9uKHBsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bsb3QgPSB7IFwidHlwZVwiOiBwbG90LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3QudHlwZSA9PT0gXCJsaW5lXCIgfHwgcGxvdC50eXBlID09PSBcInNjYXR0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInhcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieVwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi55OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbG90LnR5cGUgPT09IFwiaGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1widmFsdWVzXCJdID0gcGxvdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQbG90O1xuICAgICAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgICAgICBcInhsYWJlbFwiOiBcIlwiLCBcInlsYWJlbFwiOiBcIlwiLCBcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFwibGVnZW5kXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkob3V0cHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIFByb3ZpZGVzIGBzdHVkZW50YCBhcyBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgdGhhdCB0aGUgc3R1ZGVudCBkZWNsYXJlZC5cbiAgICBtb2QuU3R1ZGVudERhdGEgPSBTay5taXNjZXZhbC5idWlsZENsYXNzKG1vZCwgZnVuY3Rpb24oJGdibCwgJGxvYykge1xuICAgICAgICAkbG9jLl9faW5pdF9fID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICAvL3NlbGYuZGF0YSA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0RpY3QgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIFNrLmFic3RyLnNhdHRyKHNlbGYsIFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSwgbmV3RGljdCwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLm1vZHVsZSA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnJlc3VsdHM7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0gc2VsZi5tb2R1bGUuJGQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5hYnN0ci5vYmplY3RTZXRJdGVtKG5ld0RpY3QsIFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChrZXkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRsb2MuZ2V0X25hbWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbmFtZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTay5mZmkucmVtYXBUb1B5KHByb3BlcnR5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAkbG9jLmdldF92YWx1ZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF92YWx1ZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNlbGYubW9kdWxlW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtb2Q7XG59O1xuIiwibGV0IExPQ0FMX1NUT1JBR0VfUkVGO1xudHJ5IHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IGxvY2FsU3RvcmFnZTtcbiAgICBsZXQgbW9kID0gXCJCTE9DS1BZX0xPQ0FMU1RPUkFHRV9URVNUXCI7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbShtb2QsIG1vZCk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbShtb2QpO1xufSBjYXRjaChlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSB7XG4gICAgICAgIF9kYXRhICAgICAgIDoge30sXG4gICAgICAgIHNldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQsIHZhbCkgeyByZXR1cm4gdGhpcy5fZGF0YVtpZF0gPSBTdHJpbmcodmFsKTsgfSxcbiAgICAgICAgZ2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gdGhpcy5fZGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgPyB0aGlzLl9kYXRhW2lkXSA6IHVuZGVmaW5lZDsgfSxcbiAgICAgICAgcmVtb3ZlSXRlbSAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMuX2RhdGFbaWRdOyB9LFxuICAgICAgICBjbGVhciAgICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGF0YSA9IHt9OyB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBpbnRlcmZhY2luZyB3aXRoIHRoZSBMb2NhbFN0b3JhZ2UuIFRoZSBMb2NhbFN0b3JhZ2VcbiAqIGJyb3dzZXIgQVBJIGFsbG93cyBmb3Igb2ZmbGluZSBzdG9yYWdlLiBUaGF0IEFQSSBpcyB2ZXJ5IHVuc29waGlzdGljYXRlZCxcbiAqIGFuZCBpcyBlc3NlbnRpYWxseSBhIGxhbWUga2V5LXZhbHVlIHN0b3JlLiBUaGlzIG9iamVjdCBzaXRzIG9uIHRvcFxuICogYW5kIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHVzZWZ1bCB1dGlsaXRpZXMsIGluY2x1ZGluZyBydWRpbWVudGFyeWNhY2hlXG4gKiBjYWNoZSBleHBpcmF0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0xvY2FsU3RvcmFnZVdyYXBwZXJ9XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gQSBuYW1lc3BhY2UgdG8gdXNlIGluIGdyb3VwaW5nIGFjY2VzcyB0byBsb2NhbHN0b3JhZ2UuIFRoaXMga2VlcHMgYWNjZXNzIGNsZWFuIGFuZCBvcmdhbml6ZWQsIHdoaWxlIGFsc28gbWFraW5nIGl0IHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlV3JhcHBlcihuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbn1cbi8qKlxuICogQSBtZXRob2QgZm9yIGFkZGluZyBhIGtleS92YWx1ZSBwYWlyIHRvIExvY2FsU3RvcmFnZS5cbiAqIE5vdGUgdGhhdCBib3RoIHBhcmFtZXRlcnMgbXVzdCBiZSBzdHJpbmdzIChKU09OLnN0cmluZ2lmeSBpcyB5b3VyIGZyaWVuZCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9ICBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIiwgdmFsdWUpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIikpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKiBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZC5cbiAqIFRoaXMgZGVmYXVsdCB3aWxsIGJlIHNldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWx1ZSAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZS4gTXVzdCBiZSBhIHN0cmluZy5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBnaXZlbiBrZXkgaXMgaW4gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHRlc3QgZXhpc3RlbmNlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIHNlcnZlciBoYXMgdGhlIG5ld2VyIHZlcnNpb24uIFRoaXMgZnVuY3Rpb25cbiAqIGFzc3VtZXMgdGhhdCB0aGUgc2VydmVyIHRyaXAgdGFrZXMgYWJvdXQgNSBzZWNvbmRzLiBUaGlzIG1ldGhvZFxuICogaXMgbGFyZ2VseSBkZXByZWNhdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBzZXJ2ZXJfdGltZSAtIFRoZSBzZXJ2ZXIncyB0aW1lIGFzIGFuIGVwb2NoIChpbiBtaWxsaXNlY29uZHMpXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmlzX25ldyA9IGZ1bmN0aW9uKGtleSwgc2VydmVyX3RpbWUpIHtcbiAgICB2YXIgc3RvcmVkX3RpbWUgPSBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5JR05PUkVEX0dMT0JBTFMgPSBbXCJfX25hbWVfX1wiLCBcIl9fZG9jX19cIiwgXCJfX3BhY2thZ2VfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NtZXRob2RcIiwgXCJwcm9wZXJ0eVwiLCBcInN0YXRpY21ldGhvZFwiXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5JR05PUkVEX0dMT0JBTFMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFwiXyRydyRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfJHJuJFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IEJsb2NrUHlUcmFjZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHtcIm5hbWVcIjogcHJvcGVydHksIFwidHlwZVwiOiBcIlVua25vd25cIiwgXCJ2YWx1ZVwiOiB2YWx1ZS50b1N0cmluZygpfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFNrLmJ1aWx0aW4ubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXMucHVzaCh2YWx1ZS4kZC5fX25hbWVfXy52KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcInByb3BlcnRpZXNcIjogcmVzdWx0LCBcIm1vZHVsZXNcIjogbW9kdWxlc307XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFNrdWxwdCB2YWx1ZSBpbnRvIGEgbW9yZSBlYXNpbHkgcHJpbnRhYmxlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAtIHRoZSBza3VscHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZnVuYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQXJndW1lbnRzOiBcIit2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMuam9pbihcIiwgXCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIE5vIGFyZ3VtZW50c1wiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm1vZHVsZTogcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5zdHI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbExlbmd0aCB8fCB2YWx1ZS52Lmxlbmd0aCA8PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUT0RPOiB2aWV3RXhhY3RWYWx1ZSIsIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7YW55dGhpbmd9IG5lZWRsZSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtBcnJheX0gaGF5c3RhY2sgLSBUaGUgbGlzdCB0byBzZWFyY2guXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50IGV4aXN0c1xuICovXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSwgcHJlc2VydmluZyBvcmRlci5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqIENvdXJ0ZXN5OlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU4NDM3MC9ob3ctdG8tbWVyZ2UtdHdvLWFycmF5cy1pbi1qYXZhc2NyaXB0LWFuZC1kZS1kdXBsaWNhdGUtaXRlbXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB1bmlxdWlmeS4gRWxlbWVudHMgY29tcGFyZWQgd2l0aCA9PT0uXG4gKi9cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycmF5KSB7XG4gICAgdmFyIGEgPSBhcnJheS5jb25jYXQoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZvcih2YXIgaj1pKzE7IGo8YS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYoYVtpXSA9PT0gYVtqXSkge2Euc3BsaWNlKGotLSwgMSk7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBhbiBhcnJheSBiYXNlZFxuICogb24gYW4gXCJhZGRBcnJheVwiIGFuZCBcInJlbW92ZUFycmF5XCIuIEFueSBlbGVtZW50XG4gKiBmb3VuZCBpbiByZW1vdmVBcnJheSBpcyByZW1vdmVkIGZyb20gdGhlIGZpcnN0IGFycmF5XG4gKiBhbmQgYWxsIHRoZSBlbGVtZW50cyBvZiBhZGRBcnJheSBhcmUgYWRkZWQuXG4gKiBBbnkgZHVwbGljYXRlIGl0ZW1zIGFyZSByZW1vdmVkLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gdGhlIGFycmF5IHRvIG1hbmlwdWxhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFkZEFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHJlbW92ZUFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBleHBhbmRBcnJheShhcnJheSwgYWRkQXJyYXksIHJlbW92ZUFycmF5KSB7XG4gICAgdmFyIGNvcHlBcnJheSA9IGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlVbmlxdWUoY29weUFycmF5LmNvbmNhdChhZGRBcnJheSkpO1xufVxuXG4vKipcbiAqIERlZXBseSBjbG9uZXMgYSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgQSBub2RlIHRvIGNsb25lXG4gKiBAcmV0dXJuIHtOb2RlfSBBIGNsb25lIG9mIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgLy8gSWYgdGhlIG5vZGUgaXMgYSB0ZXh0IG5vZGUsIHRoZW4gcmUtY3JlYXRlIGl0IHJhdGhlciB0aGFuIGNsb25lIGl0XG4gICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PSAzID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuIFxuICAgIC8vIFJlY3Vyc2UgICAgIFxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBJbmRlbnRzIHRoZSBnaXZlbiBzdHJpbmcgYnkgNCBzcGFjZXMuIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbXVsdGktbGluZSBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGZvdXIgc3BhY2VzIGFkZGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBuZXcgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oPz0uKS9nbSwgXCIgICAgXCIpO1xufVxuXG4vKipcbiAqIFR1cm5zIHNwYWNlcyBpbnRvIHVuZGVyc2NvcmVzIGluIHRoZSBzdHJpbmcsIG1ha2VzIGl0IGxvd2VyY2FzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB0aGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1ZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIFtgbWluYCwgYG1heGBdLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VzdCBwb3NzaWJsZSBpbnRlZ2VyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGludGVnZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbixtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBzb21lIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc2FmZWx5IHdyaXR0ZW4gaW50byBhbiBIVE1MIGJveC5cbiAqIFRoaXMgaW5jbHVkZXMgcmVwbGFjaW5nIHNwZWNpYWwgSFRNTCBjaGFyYWN0ZXJzICgmLCA8LCA+LCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHRleHQgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSFRNTC1zYWZlIHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9