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

      this.main.components.server.logEvent("Intervention", category, label, message, "answer.py"); // Clear out any previously highlighted lines

      this.main.components.pythonEditor.bm.clearHighlightedLines(); // Find the first error on a line and report that

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

            result.push(Sk.ffi.remapToPy(Sk.unfixReserved(property)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlRmlsZSIsInNhdmVGaWxlTWVzc2FnZSIsInNhdmVBc3NpZ25tZW50Iiwic2F2ZUFzc2lnbm1lbnRNZXNzYWdlIiwidXBkYXRlU3VibWlzc2lvbiIsInVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlIiwib25FeGVjdXRpb24iLCJleGVjdXRpb24iLCJyZXBvcnRzIiwib3V0cHV0Iiwic3R1ZGVudCIsImN1cnJlbnRTdGVwIiwibGFzdFN0ZXAiLCJjdXJyZW50TGluZSIsImxhc3RMaW5lIiwiY3VycmVudFRyYWNlRGF0YSIsImN1cnJlbnRUcmFjZVN0ZXAiLCJyZXN1bHRzIiwiZ2xvYmFscyIsImZlZWRiYWNrIiwibWVzc2FnZSIsImNhdGVnb3J5IiwibGFiZWwiLCJsaW5lc0Vycm9yIiwibGluZXNVbmNvdmVyZWQiLCJjYWxsYmFja3MiLCJzZXJ2ZXJDb25uZWN0ZWQiLCJibG9ja2x5UGF0aCIsImF0dGFjaG1lbnRQb2ludCIsImNvbnRhaW5lciIsInVybHMiLCJjb25zdGFudHMiLCJndWkiLCJtYWtlSW50ZXJmYWNlIiwiJCIsImh0bWwiLCJhc3NpZ25tZW50X2lkIiwiY29tcG9uZW50cyIsInNlcnZlciIsInNhbXBsZXMiLCJncmFkaW5nX3N0YXR1cyIsInN1Ym1pc3Npb25fc3RhdHVzIiwiY291cnNlX2lkIiwibG9hZENvbmNhdGVuYXRlZEZpbGUiLCJleHRyYV9maWxlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzZXRJbnRlcmZhY2UiLCJ3YXNTZXJ2ZXJDb25uZWN0ZWQiLCJmb3JrZWRfaWQiLCJmb3JrZWRfdmVyc2lvbiIsImlwX3JhbmdlcyIsIm9uX2NoYW5nZSIsImZpbGVTeXN0ZW0iLCJuZXdGaWxlIiwib25fZXZhbCIsIm9uX3J1biIsInN0YXJ0aW5nX2NvZGUiLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJleHRyYV9zdGFydGluZ19maWxlcyIsImxvYWRTdWJtaXNzaW9uIiwic2V0U3RhdHVzIiwic2VsZiIsInVpIiwiaXNHcmFkZXIiLCJwdXJlQ29tcHV0ZWQiLCJpc0NoYW5nZWQiLCJjdXJyZW50IiwidXRpbGl0aWVzIiwibWFya2Rvd24iLCJyZXNldCIsInNlY29uZFJvdyIsImlzRmVlZGJhY2tWaXNpYmxlIiwiaXNUcmFjZVZpc2libGUiLCJUUkFDRSIsImlzQ29uc29sZVNob3dWaXNpYmxlIiwic3dpdGNoTGFiZWwiLCJhZHZhbmNlU3RhdGUiLCJjdXJyZW50UGFuZWwiLCJOT05FIiwic2l6ZSIsImhpZGVFdmFsdWF0ZSIsIkFDVElWRSIsImJhZGdlIiwidG9Mb3dlckNhc2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJjb3JnaXMiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJ1cGRhdGVNb2RlIiwibmV3TW9kZSIsIm9sZFB5dGhvbk1vZGUiLCJpc0hpc3RvcnlBdmFpbGFibGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwidHVybk9mZkhpc3RvcnlNb2RlIiwidXBkYXRlRWRpdG9yIiwic2V0UmVhZE9ubHkiLCJ0dXJuT25IaXN0b3J5TW9kZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhpc3RvcnkiLCJsb2FkIiwiZGlhbG9nIiwiRVJST1JfTE9BRElOR19ISVNUT1JZIiwidG9nZ2xlSGlzdG9yeU1vZGUiLCJtb3ZlVG9TdGFydCIsIm1vdmVQcmV2aW91cyIsIm1vdmVOZXh0IiwibW9zdFJlY2VudCIsIm1vdmVUb01vc3RSZWNlbnQiLCJ1c2UiLCJzYXZlIiwiZXhlY3V0ZSIsInJ1biIsImVuZ2luZSIsImV2YWx1YXRlIiwibWVzc2FnZXMiLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiQmxvY2tQeVRyYWNlIiwiQmxvY2tQeUNvbnNvbGUiLCJCbG9ja1B5RW5naW5lIiwiQmxvY2tQeUZpbGVTeXN0ZW0iLCJFZGl0b3JzIiwiYnlOYW1lIiwiQmxvY2tQeVNlcnZlciIsIkJsb2NrUHlDb3JnaXMiLCJCbG9ja1B5SGlzdG9yeSIsIlNUQVJUX0VWQUxfSFRNTCIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIlNUQVJUX0VWQUwiLCJWQUxVRSIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJpbmRleCIsImZmaSIsInJlbWFwVG9QeSIsInJlbW92ZSIsIkNvbnNvbGVMaW5lVHVydGxlIiwiYWRkQ2xhc3MiLCJ3aGVyZSIsInByZXBlbmQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiQ29uc29sZUxpbmVJbWFnZSIsImFwcGVuZCIsIkNvbnNvbGVMaW5lUGxvdCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lVmFsdWUiLCJDb25zb2xlTGluZUlucHV0IiwicHJvbXB0TWVzc2FnZSIsImlucHV0Rm9ybSIsImlucHV0QnRuIiwiaW5wdXRHcm91cCIsImlucHV0Qm94IiwiaW5wdXRNc2ciLCJtYWtlSW50ZXJhY3RpdmUiLCJpbnB1dCIsImJ1dHRvbiIsInJlc29sdmVPbkNsaWNrIiwic3VibWl0dGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3VibWl0Rm9ybSIsInZhbCIsInByb3AiLCJjbGljayIsImtleXVwIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsIkNvbnNvbGVMaW5lRXZhbHVhdGUiLCJDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUiLCJ0YWciLCJwcmludGVyVGFnIiwiTUlOSU1VTV9XSURUSCIsIk1JTklNVU1fSEVJR0hUIiwiREVGQVVMVF9IRUlHSFQiLCJoZWlnaHQiLCJjbGVhciIsInJlbW92ZUFsbCIsImxpbmVCdWZmZXIiLCJwbG90QnVmZmVyIiwiZW1wdHkiLCJ0dXJ0bGVMaW5lIiwiVHVydGxlR3JhcGhpY3MiLCJ0YXJnZXQiLCJnZXRUdXJ0bGVMaW5lIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImFzc2V0cyIsImxvYWRBc3NldCIsInJlbmRlciIsImN1cnJlbnRQcmludGVyRGltZW5zaW9uIiwicGFnZSIsImVhY2giLCJhdHRyIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsImZsdXNoIiwiY2hhckF0Iiwic3BsaXRMaW5lcyIsInNwbGl0IiwiYWRkQ29udGVudCIsImkiLCJwdXNoIiwicGxvdHMiLCJpbWFnZURhdGEiLCJpbWFnZUJ1ZmZlciIsImltYWdlIiwidmFsdWUiLCJwcmludGVkVmFsdWUiLCJpbnB1dEJ1ZmZlciIsInN0YXJ0RXZhbHVhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwibG9hZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsImdldEpTT04iLCJibG9ja3B5IiwiZG9jdW1lbnRhdGlvbiIsImJvZHkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInNsdWdnZWROYW1lIiwidGl0bGVOYW1lIiwiaW1nU3JjIiwidGl0bGUiLCJvdmVydmlldyIsImFwcGVuZFRvIiwiRElBTE9HX0hUTUwiLCJ0aXRsZVRhZyIsImJvZHlUYWciLCJvbmNsb3NlIiwibW9kYWwiLCJkcmFnZ2FibGUiLCJvbiIsIkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQiLCJjb25maXJtIiwiU0NSRUVOU0hPVF9CTE9DS1MiLCJldmVudCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwidGVtcG9yYXJ5RG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJBYnN0cmFjdEVkaXRvciIsImNoYW5nZUVkaXRvciIsIndhdGNoRmlsZSIsInVwZGF0ZWQiLCJvbkZpbGVVcGRhdGVkIiwiZGVsZXRlZCIsIm9uRmlsZURlbGV0ZWQiLCJuZXdGaWxlbmFtZSIsIm9sZEVkaXRvciIsImdldEZpbGUiLCJ0cmFja0N1cnJlbnRGaWxlIiwibmV3RWRpdG9yIiwic3RvcFdhdGNoaW5nRmlsZSIsInJlc3VsdCIsImhhbmRsZSIsInBhcnNlRmlsZW5hbWUiLCJBU1NJR05NRU5UX1NFVFRJTkdTIiwiZ2V0RG9jdW1lbnRhdGlvbiIsIm1ha2VTdGFydFZpZXdUYWIiLCJpY29uIiwibW9kZSIsIkFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwiLCJmaWx0ZXIiLCJzZXR0aW5nIiwicHJldHR5TmFtZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIkFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwiLCJCTE9DSyIsInNhdmVBc3NpZ25tZW50U2V0dGluZ3MiLCJjbGllbnROYW1lIiwic2VydmVyTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInN0YXJ0X3ZpZXciLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsImxpbmVFcnJvclN1YnNjcmlwdGlvbiIsImxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24iLCJ3b3Jrc3BhY2UiLCJjb25maWd1cmVDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJlbmFibGVkIiwiY2FsbGJhY2siLCJvbGRGaWxlbmFtZSIsImN1cnJlbnRCTUxpc3RlbmVyIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJpc1BhcnNvbnMiLCJsaW5lcyIsInNldEhpZ2hsaWdodGVkTGluZXMiLCJkZWxldGVGaWxlTG9jYWxseV8iLCJzZXRDb2RlIiwiY2xlYXJIaWdobGlnaHRlZExpbmVzIiwiZ2V0Q29kZSIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwiY2xlYXJMaW5lU3Vic2NyaXB0aW9ucyIsInNldE1vZGUiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsInJlZ2lzdGVyRWRpdG9yIiwiaW5zdGFuY2UiLCJleGl0IiwiZW50ZXIiLCJzcGFjZSIsImxhc3RJbmRleE9mIiwiZXhlY3V0aW9uTW9kZWwiLCJjb25maWd1cmF0aW9ucyIsIlJ1bkNvbmZpZ3VyYXRpb24iLCJldmFsIiwiRXZhbENvbmZpZ3VyYXRpb24iLCJPblJ1bkNvbmZpZ3VyYXRpb24iLCJPbkNoYW5nZUNvbmZpZ3VyYXRpb24iLCJPbkV2YWxDb25maWd1cmF0aW9uIiwiY29uZmlndXJlIiwiZ2V0U2t1bHB0T3B0aW9ucyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJ0aGVuIiwiZmFpbHVyZSIsImRpc2FibGVGZWVkYmFjayIsImV4ZWN1dGlvbkVuZF8iLCJldmFsdWF0aW9uSW5wdXQiLCJ1c2VySW5wdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiRklMRU5BTUUiLCJwcm9ncmFtcyIsInRyaW0iLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJ1cGRhdGVQYXJzZSIsInJ1bkluc3RydWN0b3JDb2RlIiwibW9kdWxlIiwiZXhlY3V0aW9uUmVwb3J0cyIsInByZXNlbnRGZWVkYmFjayIsIiRkIiwiRU1QVFlfTU9EVUxFIiwiQ29uZmlndXJhdGlvbiIsInF1ZXVlZElucHV0IiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGVvcGVuIiwib3BlbkZpbGUiLCJmaWxld3JpdGUiLCJ3cml0ZUZpbGUiLCJwcmludCIsImluQnJvd3NlciIsImlucHV0ZnVuIiwiaW5wdXRmdW5UYWtlc1Byb21wdCIsImltYWdlUHJveHkiLCJnZXRJbWFnZVByb3h5IiwicmV0YWluR2xvYmFscyIsIndhcm4iLCJFcnJvciIsInBvcCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwicHJpbnRWYWx1ZSIsInJlbWFwVG9KcyIsIl8iLCIkciIsInJlamVjdCIsIngiLCJGQUlMRUQiLCJTdHVkZW50Q29uZmlndXJhdGlvbiIsIlVUSUxJVFlfTU9EVUxFX0NPREUiLCIkc2tfbW9kX2luc3RydWN0b3IiLCJJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdCIsImNsZWFyVGltZW91dCIsIldSQVBfSU5TVFJVQ1RPUl9DT0RFIiwic3R1ZGVudENvZGUiLCJpbnN0cnVjdG9yQ29kZSIsInF1aWNrIiwiaXNTYWZlIiwic2FmZUNvZGUiLCJpbmRlbnRlZENvZGUiLCJpbmRlbnQiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiYmVnaW5FdmFsIiwicGFyc2VyIiwidmVyaWZpZXIiLCJTYW1wbGVDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0RnVuY3Rpb24iLCJkaXNhYmxlVGltZW91dCIsIkluZmluaXR5IiwicmVxdWVzdHNHZXQiLCJvcGVuVVJMIiwiaXNGb3JiaWRkZW4iLCJ2YXJpYWJsZXMiLCJsb2NhbHMiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicGFyc2VHbG9iYWxzIiwicHJvcGVydGllcyIsIm1vZHVsZXMiLCJhc3QiLCJ2aXNpdGVkTGluZXMiLCJTZXQiLCJ2aXNpdEJvZHkiLCJub2RlIiwibGluZW5vIiwic3RhdGVtZW50Iiwib3JlbHNlIiwiZmluYWxib2R5IiwiQXJyYXkiLCJmcm9tIiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJnZXRMaW5lcyIsIkZFRURCQUNLX0hUTUwiLCJmZWVkYmFja01vZGVsIiwib2Zmc2V0IiwidG9wIiwidG9wX29mX2VsZW1lbnQiLCJib3R0b21fb2ZfZWxlbWVudCIsIm91dGVySGVpZ2h0IiwiYm90dG9tX29mX3NjcmVlbiIsInRvcF9vZl9zY3JlZW4iLCJleGVjdXRpb25SZXN1bHRzIiwiTUVTU0FHRSIsIkNBVEVHT1JZIiwiTEFCRUwiLCJEQVRBIiwiaGlkZVNjb3JlIiwiZmluZEZpcnN0RXJyb3JMaW5lIiwic3R1ZGVudFJlcG9ydCIsInVuY292ZXJlZExpbmVzIiwidXBkYXRlRmVlZGJhY2siLCJub3RpZnlGZWVkYmFja1VwZGF0ZSIsImZhZGVPdXQiLCJmaWxlbmFtZUV4ZWN1dGVkIiwiYXJncyIsInRyYWNlYmFjayIsImxhc3RUcmFjZWJhY2siLCJ0cmFjZWJhY2tGb3JtYXR0ZWQiLCJmcmFtZSIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJGSUxFU19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJERUxFVEFCTEVfU0lNUExFX0ZJTEVTIiwiQmxvY2tQeUZpbGUiLCJvd25lciIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwiY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZSIsImZpbGVzXyIsIm1vdW50RmlsZXMiLCJ3YXRjaE1vZGVsIiwid2F0Y2hlc18iLCJmaWxlc3lzdGVtIiwiZmlsZUFycmF5IiwiY2hhbmdlcyIsImNoYW5nZSIsIm1vZGVsRmlsZSIsIm5vdGlmeVdhdGNoZXMiLCJvYnNlcnZlSW5BcnJheV8iLCJhcnJheSIsImNvZGVCdW5kbGUiLCJleGlzdGluZ0ZpbGUiLCJvYnNlcnZlRmlsZV8iLCJmb3VuZCIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJlcnJvckNhbGxiYWNrIiwibG9hZF9maWxlIiwiaGlkZGVuT3ZlcnJpZGUiLCJmb3JjZVVwZGF0ZSIsImdldFBuZ0Zyb21CbG9ja3MiLCJwbmdEYXRhIiwiaW1nIiwibW9kIiwibm9uZSIsImJ1aWx0aW4iLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwidiIsInkiLCJTdHVkZW50RGF0YSIsImJ1aWxkQ2xhc3MiLCIkZ2JsIiwiJGxvYyIsIl9faW5pdF9fIiwibmV3RGljdCIsImRpY3QiLCJhYnN0ciIsInNhdHRyIiwic3RyIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImdldF9uYW1lc19ieV90eXBlIiwiZXhjbHVkZV9idWlsdGlucyIsImNoZWNrQm9vbCIsInByb3BlcnR5IiwiZ2V0X3ZhbHVlc19ieV90eXBlIiwiY2FsbHNpbU9yU3VzcGVuZCIsImdldF9zdHVkZW50X2RhdGEiLCJMT0NBTF9TVE9SQUdFX1JFRiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2RhdGEiLCJTdHJpbmciLCJnZXRJdGVtIiwibmFtZXNwYWNlIiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsIklHTk9SRURfR0xPQkFMUyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bGxMZW5ndGgiLCJmdW5jX2NvZGUiLCJjb192YXJuYW1lcyIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwiY2xvbmUiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZVZhbHVlIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJyYW5kb21JbnRlZ2VyIiwiZmxvb3IiLCJyYW5kb20iLCJCbG9ja2x5IiwiV29ya3NwYWNlU3ZnIiwic2h1ZmZsZSIsIm1ldHJpY3MiLCJnZXRNZXRyaWNzIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImJsb2NrcyIsImdldFRvcEJsb2NrcyIsIm1heGltYWxfaW5jcmVhc2UiLCJnZXRSZWxhdGl2ZVRvU3VyZmFjZVhZIiwibW92ZUJ5IiwibW92ZUVsZW1lbnRzIiwibW92ZUNoZWNrIiwiaXNTa0J1aWx0aW4iLCJvYmoiLCJsbmciLCJpc0FzdE5vZGUiLCJtaXhlZFJlbWFwVG9QeSIsImsiLCJrdnMiLCJhcnIiLCJjYWxsIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxj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QVJnQixDQVNqQjs7O0FBQ0EsYUFBTyxJQUFJanRCLEVBQUUsQ0FBQ3lsQixPQUFILENBQVd3QyxJQUFmLENBQW9CaUYsR0FBcEIsQ0FBUDtBQUNILEtBWEQsTUFXSztBQUNELGFBQU9MLEdBQVA7QUFDSDtBQUNKLEdBZk0sTUFlQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUNoQyxXQUFPLElBQUk3c0IsRUFBRSxDQUFDeWxCLE9BQUgsQ0FBVzJDLEdBQWYsQ0FBbUJ5RSxHQUFuQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFdBQU83c0IsRUFBRSxDQUFDeWxCLE9BQUgsQ0FBVzZILEtBQVgsQ0FBaUJULEdBQWpCLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsU0FBbkIsRUFBOEI7QUFDakMsV0FBTyxJQUFJN3NCLEVBQUUsQ0FBQ3lsQixPQUFILENBQVd5RSxJQUFmLENBQW9CMkMsR0FBcEIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFHLE9BQU9BLEdBQVAsS0FBZSxVQUFsQixFQUE4QjtBQUNqQyxXQUFPLElBQUk3c0IsRUFBRSxDQUFDeWxCLE9BQUgsQ0FBVzJDLEdBQWYsQ0FBbUJ5RSxHQUFHLENBQUNoK0IsSUFBdkIsQ0FBUDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUM3T0Qsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoiYmxvY2tweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmxvY2tweVwiLCBbXCJqUXVlcnlcIiwgXCJrb1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJrb1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tweS5qc1wiKTtcbiIsImltcG9ydCBcIi4vY3NzL2Jsb2NrcHkuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Jvb3RzdHJhcF9yZXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcInN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzRW51bX0gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCJlZGl0b3IvcHl0aG9uLmpzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCJzZXJ2ZXIuanNcIjtcclxuaW1wb3J0IHttYWtlSW50ZXJmYWNlLCBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zLCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9IGZyb20gXCJpbnRlcmZhY2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQmxvY2tQeUZpbGVTeXN0ZW0sXHJcbiAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIG1ha2VNb2RlbEZpbGUsXHJcbiAgICBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIFVOREVMRVRBQkxFX0ZJTEVTLFxyXG4gICAgVU5SRU5BTUFCTEVfRklMRVNcclxufSBmcm9tIFwiLi9maWxlc1wiO1xyXG5pbXBvcnQge3VwbG9hZEZpbGUsIGRvd25sb2FkRmlsZX0gZnJvbSBcIi4vZWRpdG9yL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlFbmdpbmV9IGZyb20gXCJlbmdpbmUuanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuL3RyYWNlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvbnNvbGV9IGZyb20gXCIuL2NvbnNvbGVcIjtcclxuaW1wb3J0IHtCbG9ja1B5RmVlZGJhY2t9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlEaWFsb2d9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbH0gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29yZ2lzLCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU30gZnJvbSBcIi4vY29yZ2lzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUhpc3Rvcnl9IGZyb20gXCIuL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCB7X0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9O1xyXG5cclxuLyoqXHJcbiAqIE1ham9yIGVudHJ5IHBvaW50IGZvciBjcmVhdGluZyBhIEJsb2NrUHkgaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gLSBVc2VyIGxldmVsIHNldHRpbmdzIChlLmcuLCB3aGF0IGVkaXRvciBtb2RlLCB3aGV0aGVyIHRvIG11dGUgc2VtYW50aWMgZXJyb3JzLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2lnbm1lbnQgLSBBc3NpZ25tZW50IGxldmVsIHNldHRpbmdzIChkYXRhIGFib3V0IHRoZSBsb2FkZWQgYXNzaWdubWVudCwgdXNlciwgc3VibWlzc2lvbiwgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWJtaXNzaW9uIC0gSW5jbHVkZXMgdGhlIHNvdXJjZSBjb2RlIG9mIGFueSBwcm9ncmFtcyB0byBiZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbikge1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NpZ25tZW50KGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgQmxvY2tQeSBvYmplY3QgYnkgaW5pdGlhbGl6aW5nIGl0cyBpbnRlcmZhY2UsXHJcbiAgICAgKiBtb2RlbCwgYW5kIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLmluaXRVdGlsaXRpZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbE1ldGhvZHMoKTtcclxuICAgICAgICB0aGlzLnR1cm5PbkhhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBkZWZhdWx0IHZhbHVlIG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHVwIGEgdmFsdWUgZm9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlIC0gaWYgdGhlIGtleSBpcyBub3QgZm91bmQgYW55d2hlcmUsIHVzZSB0aGlzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhbFNldHRpbmdzXy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFNldHRpbmdzXy5nZXQoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtb2RlbCB0byBpdHMgZGVmYXVsdHMuXHJcbiAgICAgKlxyXG4gICAgICogQ2F0ZWdvcmllczpcclxuICAgICAqICAgKiB1c2VyOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHVzZXIgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogYXNzaWdubWVudDogdmFsdWVzIGZvciB0aGUgY3VycmVudCBhc3NpZ25tZW50IChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIHN1Ym1pc3Npb246IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgc3VibWlzc2lvbiAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBkaXNwbGF5OiBmbGFncyByZWxhdGVkIHRvIGN1cnJlbnQgdmlzaWJpbGl0eSAoc3RvcmVkIHRvIGxvY2FsU2V0dGluZ3MpXHJcbiAgICAgKiAgICogc3RhdHVzOiBtZXNzYWdlcyByZWxhdGVkIHRvIGN1cnJlbnQgc3RhdHVzIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGV4ZWN1dGlvbjogdmFsdWVzIHJlbGF0ZWQgdG8gbGFzdCBydW4gKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogY29uZmlndXJhdGlvbjogY29uc3RhbnQgdmFsdWVzIHJlbGF0ZWQgdG8gc2V0dXAgKG5vdCBzdG9yZWQpXHJcbiAgICAgKi9cclxuICAgIGluaXRNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5sb2NhbFNldHRpbmdzXyA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwibG9jYWxTZXR0aW5nc1wiKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXyA9IGNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmlkXCJdKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIubmFtZVwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgeW91IGFyZSBhbiBPd25lciAoY2FuIG1vZGlmeSB0aGUgYXNzaWdubWVudCksIEdyYWRlciAoY2FuIHZpZXdcclxuICAgICAgICAgICAgICAgICAqIHRoZSBhc3NpZ25tZW50cycgaW5mb3JtYXRpb24pIG9yIFN0dWRlbnQgKGNhbiBub3Qgc2VlIGFueSBpbnN0cnVjdG9yIHN0dWZmKS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByb2xlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInVzZXIucm9sZVwiLCBcIm93bmVyXCIpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBjb3Vyc2UgZm9yIHRoaXMgdXNlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5jb3Vyc2VfaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGFzc2lnbm1lbnQgZ3JvdXAgdGhhdCB0aGlzIHVzZXIgaXMgaW5zaWRlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuZ3JvdXBfaWRcIl0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShcIlNjcmF0Y2ggQ2FudmFzXCIpLFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKFwiV2VsY29tZSB0byBCbG9ja1B5LiBUcnkgZWRpdGluZyBhbmQgcnVubmluZyB0aGUgY29kZSBiZWxvdy5cIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBodW1hbi1mcmllbmRseSBVUkwgdG8gdXNlIGFzIGEgc2hvcnRjdXQgZm9yIHRoaXMgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3YXJuaW5nIG1lc3NhZ2UgaWYgbWF6ZVxyXG4gICAgICAgICAgICAgICAgdHlwZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zdGFydGluZ19jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25SdW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fcnVuXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fY2hhbmdlXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb25FdmFsOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2V2YWxcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZElkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkVmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG93bmVySWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlU3VibWlzc2lvbnM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICByZXZpZXdlZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5yZXZpZXdlZFwiXSksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucHVibGljXCJdKSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5oaWRkZW5cIl0pLFxyXG4gICAgICAgICAgICAgICAgaXBSYW5nZXM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaXBfcmFuZ2VzXCJdKSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJzdWJtaXNzaW9uLmNvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBleHRyYUZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzY29yZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudElkIGluZmVycmVkIGZyb20gYXNzaWdubWVudC5pZFxyXG4gICAgICAgICAgICAgICAgLy8gY291cnNlSWQgaW5mZXJyZWQgZnJvbSB1c2VyLmNvdXJzZUlkXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VySWQgaW5mZXJyZWQgZnJvbSB1c2VyLmlkXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50VmVyc2lvbiBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQudmVyc2lvblxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoXCJTdGFydGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGluZ1N0YXR1czoga28ub2JzZXJ2YWJsZShcIk5vdFJlYWR5XCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnRseSB2aXNpYmxlIEZpbGUsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgaW5zdHJ1Y3RvciBzZXR0aW5ncyBhbmQgZmlsZXNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkuaW5zdHJ1Y3RvclwiLCBcImZhbHNlXCIpLnRvU3RyaW5nKCk9PT1cInRydWVcIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgdGhlIHByaW50ZXIgZnJvbSBzaG93aW5nIHRoaW5nc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBtdXRlUHJpbnRlcjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIChQeXRob24gVmlld3MpIFRoZSBjdXJyZW50IGVkaXRvciBtb2RlLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0Rpc3BsYXlNb2Rlc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHl0aG9uTW9kZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5LnB5dGhvbi5tb2RlXCIsIERpc3BsYXlNb2Rlcy5TUExJVCkpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCBIaXN0b3J5IG1vZGUgaXMgZW5nYWdlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5TW9kZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIGF1dG8tc2F2aW5nIGNoYW5nZXMgaW4gUHl0aG9uIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgICogSWYgYW4gaW50ZWdlciwgc3BlY2lmaWVzIHRoZSBkZWxheSB0aGF0IHNob3VsZCBiZSB1c2VkIChtaWNyb3NlY29uZHMpLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyBpcyBuZXZlciBvbiBpbiBub24tUHl0aG9uIGVkaXRvcnMuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbHxpbnR9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGF1dG9TYXZlOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29uc29sZSBpcyBmdWxsIHdpZHRoIGFuZCBmZWVkYmFjayBpcyBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYmlnQ29uc29sZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBoZWlnaHQgdG8gdXNlIGZvciB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgICAqICAgIElmIG51bGwsIHRoZW4gbGV0IHRoZSBoZWlnaHQgcmVtYWluIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgYSBudW1iZXIsIHRoZW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkSGlzdG9yeU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWREYXRhc2V0TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2dFdmVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGU6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUZpbGVNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVBc3NpZ25tZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiBhYm91dCBpbi1wcm9ncmVzcyBleGVjdXRpb25zXHJcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgT3V0cHV0IG9iamVjdHNcclxuICAgICAgICAgICAgICAgIG91dHB1dDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYSBzdHVkZW50IHJ1blxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0cjogdGhlIGZpbGVuYW1lIHRoYXQgd2FzIGxhc3QgZXhlY3V0ZWQgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdExpbmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgb2Ygc2ltcGxlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VEYXRhOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VTdGVwOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFjdHVhbCBleGVjdXRpb24gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczoga28ub2JzZXJ2YWJsZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gZmVlZGJhY2sgZnJvbSB0aGUgaW5zdHJ1Y3RvciBydW5cclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyIChtYXJrZG93bilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiUmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc0Vycm9yOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzVW5jb3ZlcmVkOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IGV4ZWN1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEZ1bmN0aW9ucyB0byBmaXJlIHdoZW4gY2VydGFpbiBldmVudHMgb2NjdXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hlbiB0aGUgc3R1ZGVudCBnZXRzIGEgc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImNhbGxiYWNrLnN1Y2Nlc3NcIl0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VydmVyIGlzIGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25uZWN0ZWQ6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwic2VydmVyLmNvbm5lY3RlZFwiLCB0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGJsb2NrbHlQYXRoOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImJsb2NrbHkucGF0aFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudFBvaW50OiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImF0dGFjaG1lbnQucG9pbnRcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBKUXVlcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBNYXBzIGNvZGVzICgnbG9nX2V2ZW50JywgJ3NhdmVfY29kZScpIHRvIFVSTHNcclxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1widXJsc1wiXSB8fCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgaW5pdEludGVyZmFjZSgpIHtcclxuICAgICAgICBsZXQgY29uc3RhbnRzID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgIGxldCBndWkgPSBtYWtlSW50ZXJmYWNlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0YW50cy5jb250YWluZXIgPSAkKGNvbnN0YW50cy5hdHRhY2htZW50UG9pbnQpLmh0bWwoJChndWkpKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRhZ3ModGFncykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHRhZ3NcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2FtcGxlU3VibWlzc2lvbnMoc2FtcGxlcykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHNhbXBsZXNcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3VibWlzc2lvbihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKCFzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyZmFjZSgpO1xyXG4gICAgICAgIGxldCB3YXNTZXJ2ZXJDb25uZWN0ZWQgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnQgPSBkYXRhLmFzc2lnbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlkKGFzc2lnbm1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC52ZXJzaW9uKGFzc2lnbm1lbnQudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmNvdXJzZUlkKGFzc2lnbm1lbnQuY291cnNlX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkSWQoYXNzaWdubWVudC5mb3JrZWRfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRWZXJzaW9uKGFzc2lnbm1lbnQuZm9ya2VkX3ZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oYXNzaWdubWVudC5oaWRkZW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZChhc3NpZ25tZW50LnJldmlld2VkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucHVibGljKGFzc2lnbm1lbnQucHVibGljKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudHlwZShhc3NpZ25tZW50LnR5cGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC51cmwoYXNzaWdubWVudC51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcyhhc3NpZ25tZW50LmlwX3Jhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fY2hhbmdlLnB5XCIsIGFzc2lnbm1lbnQub25fY2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIiwgYXNzaWdubWVudC5vbl9ldmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCh3YXNTZXJ2ZXJDb25uZWN0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kZWxNZXRob2RzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIG1vZGVsLnVpID0ge1xyXG4gICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0dyYWRlcjoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJvd25lclwiIHx8IG1vZGVsLnVzZXIucm9sZSgpID09PSBcImdyYWRlclwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWNvbmRSb3c6IHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZGJhY2tWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDS1xyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzVHJhY2VWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29uc29sZVNob3dWaXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUoKSB8fCBtb2RlbC51aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaExhYmVsOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3IFRyYWNlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgYWR2YW5jZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQYW5lbCA9IG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25zb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTJcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTZcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhpZGVFdmFsdWF0ZToga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRXZhbHVhdGUoKSB8fCAhbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKCkgPT09IFN0YXR1c1N0YXRlLkFDVElWRVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgYmFkZ2U6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJydW50aW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ydW50aW1lLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzeW50YXhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImludGVybmFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1pbnRlcm5hbC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VtYW50aWNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuYWx5emVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zZW1hbnRpYy1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWZlZWRiYWNrLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcHJvYmxlbS1jb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1pbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm8tZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJydW50aW1lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJSdW50aW1lIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzeW50YXhcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlN5bnRheCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZWRpdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJFZGl0b3IgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImludGVybmFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnRlcm5hbCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VtYW50aWNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuYWx5emVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGdvcml0aG0gRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IEFuc3dlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIGVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRyYWNlOiB7XHJcbiAgICAgICAgICAgICAgICBoYXM6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGxpbmU6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhIHx8IHN0ZXAgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gdHJhY2VcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVmb3JlIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RlcCA9PT0gbGFzdFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluaXNoZWQgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogd2h5IGFyZSB0aGVzZSBudW1iZXJzIHdvbmt5P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJMaW5lIFwiKyh0cmFjZURhdGFbc3RlcF0ubGluZS0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGZpcnN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IE1hdGgubWF4KDAsIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAocHJldmlvdXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IE1hdGgubWluKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCksIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAobmV4dCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGxhc3RTdGVwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxlczoge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkgfHwgIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoYXNDb250ZW50czogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5zd2VyLnB5XCI6IHJldHVybiBtb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFpbnN0cnVjdGlvbnMubWRcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9tb2NrX3VybHMuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcygpLnNvbWUoZmlsZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZSgpID09PSBcIj9tb2NrX3VybHMuYmxvY2tweVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiF0YWdzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQudGFncygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5zYW1wbGVTdWJtaXNzaW9ucygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9tb2NrX3VybHMuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP3RhZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP3NldHRpbmdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUocGF0aCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gZml4IGV4dHJhZmlsZXMgZm9yIGluc3RydWN0b3IgYW5kIHN0dWRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRvcnM6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lZGl0b3JzLmdldEVkaXRvcihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdmlldzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRWRpdG9ycygpID8gXCJOb25lXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA/IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpIDogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5SZXNldFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmNvZGUobW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKCkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWUoKS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhblNhdmU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICFtb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkpLFxyXG4gICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5ERUxFVEFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICBjYW5SZW5hbWU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTlJFTkFNQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIHVwbG9hZDogdXBsb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IGRvd25sb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RGF0YXNldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5jb3JnaXMub3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB5dGhvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGVNaXJyb3IgPSBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnRleHRFZGl0b3IuY29kZU1pcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVNaXJyb3Iuc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY29kZU1pcnJvci5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGU6IChuZXdNb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLVZpZXcuQ2hhbmdlXCIsIFwiXCIsIFwiXCIsIG5ld01vZGUsIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShuZXdNb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5vbGRQeXRob25Nb2RlID0gbmV3TW9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNIaXN0b3J5QXZhaWxhYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci51cGRhdGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5zZXRSZWFkT25seShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9uSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2FkSGlzdG9yeSgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5sb2FkKHJlc3BvbnNlLmhpc3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5zZXRSZWFkT25seSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0hJU1RPUlkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5Pbkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb1N0YXJ0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlUHJldmlvdXMoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZU5leHQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdFJlY2VudDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvTW9zdFJlY2VudCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2U6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LnVzZSgpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZTogKCkgPT4gc2VsZi5jb21wb25lbnRzLnNlcnZlci5zYXZlQXNzaWdubWVudCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGU6IHtcclxuICAgICAgICAgICAgICAgIHJ1bjogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpLFxyXG4gICAgICAgICAgICAgICAgZXZhbHVhdGU6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ldmFsdWF0ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAoZW5kcG9pbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1zdGF0dXMtXCIgKyBtb2RlbC5zdGF0dXNbZW5kcG9pbnRdKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0VuZHBvaW50Q29ubmVjdGVkOiAoZW5kcG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJscyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzW2VuZHBvaW50XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkSGlzdG9yeU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRGF0YXNldE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2dFdmVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSgpIHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25IYWNrcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseXMgdGhlIEtub2Nrb3V0SlMgYmluZGluZ3MgdG8gdGhlIG1vZGVsLCBpbnN0YW50aWF0aW5nIHRoZSB2YWx1ZXMgaW50byB0aGVcclxuICAgICAqIEhUTUwuXHJcbiAgICAgKi9cclxuICAgIGFwcGx5TW9kZWwoKSB7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VXRpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICB0aGlzLnV0aWxpdGllcyA9IHtcclxuICAgICAgICAgICAgbWFya2Rvd246ICh0ZXh0KSA9PiB0ZXh0ID8gRWFzeU1ERS5wcm90b3R5cGUubWFya2Rvd24odGV4dCkgOiBcIjxwPjwvcD5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXI7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMgPSB7fTtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgLy8gRWFjaCBvZiB0aGVzZSBjb21wb25lbnRzIHdpbGwgdGFrZSB0aGUgQmxvY2tQeSBpbnN0YW5jZSwgYW5kIHBvc3NpYmx5IGFcclxuICAgICAgICAvLyByZWZlcmVuY2UgdG8gdGhlIHJlbGV2YW50IEhUTUwgbG9jYXRpb24gd2hlcmUgaXQgd2lsbCBiZSBlbWJlZGRlZC5cclxuICAgICAgICBjb21wb25lbnRzLmRpYWxvZyA9IG5ldyBCbG9ja1B5RGlhbG9nKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZGlhbG9nXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmZlZWRiYWNrID0gbmV3IEJsb2NrUHlGZWVkYmFjayhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnRyYWNlID0gbmV3IEJsb2NrUHlUcmFjZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvbnNvbGUgPSBuZXcgQmxvY2tQeUNvbnNvbGUobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1jb25zb2xlXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmVuZ2luZSA9IG5ldyBCbG9ja1B5RW5naW5lKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmlsZVN5c3RlbSA9IG5ldyBCbG9ja1B5RmlsZVN5c3RlbShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmVkaXRvcnMgPSBuZXcgRWRpdG9ycyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWVkaXRvclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5weXRob25FZGl0b3IgPSB0aGlzLmNvbXBvbmVudHMuZWRpdG9ycy5ieU5hbWUoXCJweXRob25cIik7XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXJ2ZXIgPSBuZXcgQmxvY2tQeVNlcnZlcihtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvcmdpcyA9IG5ldyBCbG9ja1B5Q29yZ2lzKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuaGlzdG9yeSA9IG5ldyBCbG9ja1B5SGlzdG9yeShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWhpc3RvcnktdG9vbGJhclwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5lbmdpbmUucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7ZW5jb2RlSFRNTH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IFNUQVJUX0VWQUxfSFRNTCA9IGBcbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZSBmbG9hdC1yaWdodCBibG9ja3B5LWJ0bi1ldmFsXCI+XG4gICAgRXZhbHVhdGVcbjwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nY29sLW1kLTYgYmxvY2tweS1wYW5lbCBibG9ja3B5LWNvbnNvbGUnXG4gICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJDb25zb2xlXCJcbiAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGFzczogdWkuY29uc29sZS5zaXplXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1zaG93LWZlZWRiYWNrJ1xuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuc2Vjb25kUm93LmlzQ29uc29sZVNob3dWaXNpYmxlLCBjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDxzdHJvbmc+Q29uc29sZTo8L3N0cm9uZz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktcHJpbnRlciBibG9ja3B5LXByaW50ZXItZGVmYXVsdCc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgPC9kaXY+YDtcblxuY29uc3QgTkVXX0NPTlNPTEVfTElORV9IVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuXG4vKipcbiAqXG4gKiBAZW51bVxuICovXG5leHBvcnQgbGV0IENvbnNvbGVMaW5lVHlwZSA9IHtcbiAgICBURVhUOiBcInRleHRcIixcbiAgICBIVE1MOiBcImh0bWxcIixcbiAgICBQTE9UOiBcInBsb3RcIixcbiAgICBJTUFHRTogXCJpbWFnZVwiLFxuICAgIFRVUlRMRTogXCJ0dXJ0bGVcIixcbiAgICBFVkFMOiBcImV2YWxcIixcbiAgICBTVEFSVF9FVkFMOiBcInN0YXJ0X2V2YWxcIixcbiAgICBWQUxVRTogXCJ2YWx1ZVwiLFxuICAgIElOUFVUOiBcImlucHV0XCIsXG4gICAgVEVTVF9DQVNFOiBcInRlc3RfY2FzZVwiXG59O1xuXG5jbGFzcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdHlwZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBTay5jdXJyRmlsZW5hbWUsXG4gICAgICAgICAgICBzdGVwOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwLFxuICAgICAgICAgICAgbGluZTogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0bWwgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiAgXCJibG9ja3B5LXByaW50ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgIFwiZGF0YS1zdGVwXCI6IHRoaXMub3JpZ2luLnN0ZXAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RlcCBcIiArIHRoaXMub3JpZ2luLnN0ZXAgKyBcIiwgTGluZSBcIiArIHRoaXMub3JpZ2luLmxpbmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICFtYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdG9Ta3VscHQoKSB7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KHRoaXMuY29udGVudCk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVR1cnRsZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICAvLyBUT0RPOiBDYXB0dXJlIHR1cnRsZSBjb21tYW5kcyBmb3IgdHJhY2luZyBwdXJwb3Nlc1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlRVUlRMRSk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS10dXJ0bGUtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5wcmVwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWxbMF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbWFnZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTUFHRSwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1pbWFnZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVQbG90IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlBMT1QsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtcGxvdC1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVRleHQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50ICsgY29udGVudDtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVWYWx1ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlZBTFVFLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxjb2RlPjwvY29kZT5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbnB1dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTlBVVCwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBJbnB1dCBib3ggZm9yIHJlY2VpdmluZyBpbnB1dCgpIGZyb20gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgLy8gUGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFuaW5nXG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIElucHV0IGZvcm1cbiAgICAgICAgICAgIGxldCBpbnB1dEZvcm0gPSAkKFwiPGlucHV0IHR5cGU9J3RleHQnIC8+XCIpO1xuICAgICAgICAgICAgLy8gRW50ZXIgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRCdG4gPSAkKFwiPGJ1dHRvbj48L2J1dHRvbj5cIiwge1wiaHRtbFwiOiBcIkVudGVyXCJ9KTtcbiAgICAgICAgICAgIC8vIEdyb3VwIGZvcm0gYW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0R3JvdXAgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1wiY2xhc3NcIjogXCJibG9ja3B5LWNvbnNvbGUtaW5wdXRcIn0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRGb3JtKTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0QnRuKTtcbiAgICAgICAgICAgIC8vIFByb21wdCBib3gsIG5ldyBsaW5lLCBpbnB1dCBncm91cFxuICAgICAgICAgICAgbGV0IGlucHV0Qm94ID0gJChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRNc2cgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCAge1wiaHRtbFwiOiBlbmNvZGVkVGV4dH0pO1xuICAgICAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZChpbnB1dE1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoJChcIjxicj5cIikpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpbnB1dEdyb3VwKTtcbiAgICAgICAgICAgIC8vIFJlbmRlclxuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChpbnB1dEJveCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vIE1ha2UgaXQgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJbnRlcmFjdGl2ZShpbnB1dEZvcm0sIGlucHV0QnRuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuXG4gICAgbWFrZUludGVyYWN0aXZlKGlucHV0LCBidXR0b24pIHtcbiAgICAgICAgbGV0IHJlc29sdmVPbkNsaWNrO1xuICAgICAgICBsZXQgc3VibWl0dGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc3VibWl0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0dXJ0bGVzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWR0aFxuICAgIG5ld1R1cnRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fV0lEVEgsIHRoaXMucHJpbnRlclRhZy53aWR0aCgpLTQwKTtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fSEVJR0hULCB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkrNDApO1xuICAgIH1cblxuICAgIGlzTXV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgZWFjaCBwcmludGVkIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgYW5kIG1ha2VzIGl0IGhpZGRlblxuICAgICAqIG9yIHZpc2libGUsIGRlcGVuZGluZyBvbiB3aGF0IHN0ZXAgd2UncmUgb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcCAtIFRoZSBjdXJyZW50IHN0ZXAgb2YgdGhlIGV4ZWN1dGVkIHByb2dyYW0gdGhhdCB3ZSdyZSBvbjsgZWFjaCBlbGVtZW50IGluIHRoZSBwcmludGVyIG11c3QgYmUgbWFya2VkIHdpdGggYSBcImRhdGEtc3RlcFwiIHByb3BlcnR5IHRvIHJlc29sdmUgdGhpcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZSAtIERlcHJlY2F0ZWQsIG5vdCBzdXJlIHdoYXQgdGhpcyBldmVuIGRvZXMuXG4gICAgICovXG4gICAgc3RlcFByaW50ZXIoc3RlcCwgcGFnZSkge1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXItb3V0cHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS1zdGVwXCIpIDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmludCBhIGxpbmUgdG8gdGhlIG9uLXNjcmVlbiBwcmludGVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lVGV4dCAtIEEgbGluZSBvZiB0ZXh0IHRvIGJlIHByaW50ZWQgb3V0LlxuICAgICAqL1xuICAgIHByaW50KGxpbmVUZXh0KSB7XG4gICAgICAgIC8vIEVtcHR5IHN0cmluZ3MgbWVhbnMgZG8gbm90aGluZy5cbiAgICAgICAgLy8gcHJpbnQoXCJcIiwgZW5kPVwiXCIpXG4gICAgICAgIGlmICghbGluZVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpbmVUZXh0LmNoYXJBdChsaW5lVGV4dC5sZW5ndGgtMSkgPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BsaXRMaW5lcyA9IGxpbmVUZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBpZiAodGhpcy5saW5lQnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLmFkZENvbnRlbnQoc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0xOyBpIDwgc3BsaXRMaW5lcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbHVzaCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHBsb3QocGxvdHMpIHtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lUGxvdCh0aGlzLm1haW4sIHBsb3RzKTtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbG90QnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50UElMSW1hZ2UoaW1hZ2VEYXRhKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbWFnZSh0aGlzLm1haW4sIGltYWdlRGF0YS5pbWFnZSk7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IHByaW50ZWRWYWx1ZSA9IG5ldyBDb25zb2xlTGluZVZhbHVlKHRoaXMubWFpbiwgdmFsdWUpO1xuICAgICAgICBwcmludGVkVmFsdWUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiBwcmludGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmVnaXN0ZXJzIGEgUHJvbWlzZSBmcm9tIHRoZSBJbnB1dCBib3hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvbXB0TWVzc2FnZSAtIE1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUlucHV0KHRoaXMubWFpbiwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH07XG5cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lRXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgYmVnaW5FdmFsKCkge1xuICAgICAgICBsZXQgc3RhcnRFdmFsdWF0aW9uID0gbmV3IENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gc3RhcnRFdmFsdWF0aW9uLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuY29uZGl0aW9uYWxseSBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICovXG4gICAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICAgIHRoaXMudGFnLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpIC0gdGhpcy50YWcucHJvcChcImNsaWVudEhlaWdodFwiKVxuICAgICAgICB9LCA1MDApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQge3NsdWd9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBUT0RPOiBlZGl0b3IuYm0uYmxvY2tFZGl0b3IuZXh0cmFUb29sc1tdXG5cbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0RBVEFTRVRTID0ge307XG5leHBvcnQgbGV0IF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUyA9IHt9O1xuXG4vKipcbiAqIFRoaXMgaXMgYSB2ZXJ5IHNpbXBsaXN0aWMgaGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqIGEgZ2l2ZW4gYnV0dG9uIGludG8gYSBcIkxvYWRlZFwiIHN0YXRlIChkaXNhYmxlZCwgcHJlc3NlZCBzdGF0ZSwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnRuIC0gQW4gSFRNTCBlbGVtZW50IHRvIGNoYW5nZSB0aGUgdGV4dCBvZi5cbiAqL1xubGV0IHNldEJ1dHRvbkxvYWRlZCA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXByaW1hcnlcIilcbiAgICAgICAgLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxuICAgICAgICAudGV4dChcIkxvYWRlZFwiKVxuICAgICAgICAuYXR0cihcImFyaWEtcHJlc3NlZFwiLCBcInRydWVcIik7XG59O1xuXG5cbi8qKlxuICogTW9kdWxlIHRoYXQgY29ubmVjdHMgdG8gdGhlIENPUkdJUyBkYXRhc2V0cyBhbmQgbWFuYWdlcyBpbnRlcmFjdGlvbnNcbiAqIHdpdGggdGhlbS4gVGhpcyBpbmNsdWRlcyBsb2FkaW5nIGluIGRhdGFzZXRzIGF0IGxhdW5jaCBhbmQgb24tdGhlLWZseS5cbiAqIE5vdGUgdGhhdCB0aGlzIGhhcyBubyBwcmVzZW5jZSBvbiBzY3JlZW4sIHNvIGl0IGRvZXMgbm90IGhhdmUgYSB0YWcuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUNvcmdpc31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeUNvcmdpcyhtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIHRoaXMubG9hZGVkRGF0YXNldHMgPSBbXTtcbiAgICB0aGlzLmxvYWREYXRhc2V0cygpO1xufVxuXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5sb2FkRGF0YXNldHMgPSBmdW5jdGlvbiAoc2lsZW50bHkpIHtcbiAgICAvLyBMb2FkIGluIGVhY2ggdGhlIGRhdGFzZXRzXG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsLFxuICAgICAgICBlZGl0b3IgPSB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IsXG4gICAgICAgIHNlcnZlciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlcjtcbiAgICBsZXQgaW1wb3J0cyA9IFtdO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMoKS5zcGxpdChcIixcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAmJiAhKG5hbWUgaW4gQmxvY2tNaXJyb3JCbG9ja0VkaXRvci5FWFRSQV9UT09MUykpIHtcbiAgICAgICAgICAgIGltcG9ydHMucHVzaC5hcHBseShpbXBvcnRzLCB0aGlzLmltcG9ydERhdGFzZXQoc2x1ZyhuYW1lKSwgbmFtZSwgc2lsZW50bHkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBkYXRhc2V0cyBhcmUgbG9hZGVkLCB1cGRhdGUgdGhlIHRvb2xib3guXG4gICAgJC53aGVuLmFwcGx5KCQsIGltcG9ydHMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucmVtb3ZlKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdXJsX3JldHJpZXZhbHMucHVzaChnZXREYXRhc2V0LCBnZXRTa3VscHQsIGdldEJsb2NrbHkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsX3JldHJpZXZhbHM7XG59O1xuXG4vKipcbiAqIE9wZW5zIGEgZGlhbG9nIGJveCB0byBwcmVzZW50IHRoZSB1c2VyIHdpdGggdGhlIGRhdGFzZXRzIGF2YWlsYWJsZVxuICogdGhyb3VnaCB0aGUgQ09SR0lTIHNlcnZlci4gVGhpcyByZXF1aXJlcyBhIGNhbGwsIHNvIHRoaXMgbWV0aG9kXG4gKiBjb21wbGV0ZXMgYXN5bmNocm9ub3VzbHkuIFRoZSBkaWFsb2cgaXMgY29tcG9zZWQgb2YgYSB0YWJsZSB3aXRoXG4gKiBidXR0b25zIHRvIGxvYWQgdGhlIGRhdGFzZXRzIChNb3JlIHRoYW4gb25lIGRhdGFzZXQgY2FuIGJlIGxvYWRlZFxuICogZnJvbSB3aXRoaW4gdGhlIGRpYWxvZyBhdCBhIHRpbWUpLlxuICovXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHM7XG4gICAgICAgICQuZ2V0SlNPTihyb290ICsgXCJpbmRleC5qc29uXCIsICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gTWFrZSB1cCB0aGUgQm9keVxuICAgICAgICAgICAgbGV0IGRhdGFzZXRzID0gZGF0YS5ibG9ja3B5O1xuICAgICAgICAgICAgbGV0IGRvY3VtZW50YXRpb24gPSByb290K1wiYmxvY2tweS9pbmRleC5odG1sXCI7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSAkKGA8cD5Eb2N1bWVudGF0aW9uIGlzIGF2YWlsYWJsZSBhdCA8YSBocmVmPScke2RvY3VtZW50YXRpb259JyB0YXJnZXQ9X2JsYW5rPnVybDwvYT48L3A+YCk7XG4gICAgICAgICAgICBsZXQgYm9keSA9ICQoXCI8dGFibGU+PC90YWJsZT5cIiwge1wiY2xhc3NcIjogXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkXCJ9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGFzZXRzKS5zb3J0KCkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNsdWdnZWROYW1lID0gc2x1ZyhkYXRhc2V0c1tuYW1lXS5uYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVOYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cImZhbHNlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+TG9hZDwvYnV0dG9uPicpO1xuICAgICAgICAgICAgICAgIGxldCBpbWdTcmMgPSByb290K1wiLi4vaW1hZ2VzL2RhdGFzZXRzL1wiK25hbWUrXCItaWNvbi5wbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWREYXRhc2V0cy5pbmRleE9mKHNsdWdnZWROYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkxvYWRlZChidG4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGljayggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWdnZWROYW1lLCBcIkRhdGEgLSBcIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkxvYWRlZChidG4pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9sZXQgaW1nID0gYDxpbWcgc3JjPScke2ltZ1NyY30nIGNsYXNzPVwiY29yZ2lzLWljb25cIj5gO1xuICAgICAgICAgICAgICAgICQoXCI8dHI+PC90cj5cIilcbiAgICAgICAgICAgICAgICAgICAgLy8uYXBwZW5kKCQoXCI8dGQ+XCIgKyBpbWcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLm92ZXJ2aWV3ICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPjwvdGQ+XCIpLmFwcGVuZChidG4pKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kVG8oc3RhcnQpO1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgYWN0dWFsIGRpYWxvZ1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLnNob3coXCJJbXBvcnQgRGF0YXNldHNcIiwgc3RhcnQsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY3NzE2NzkzNjQxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Njc3MTY3OTM2NTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gVE9ETzogRHlhbm1pY2FsbHkgcG9wdWxhdGUgYXJpYS1sYWJlbGxlZGJ5IGluIHRoaXMgYW5kIG90aGVyIHBsYWNlc1xuXG5leHBvcnQgbGV0IERJQUxPR19IVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktZGlhbG9nIG1vZGFsIGhpZGRlbidcbiAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgYXJpYS1sYWJlbD0nRGlhbG9nJ1xuICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZyBtb2RhbC1sZycgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50JyByb2xlPSdyZWdpb24nIGFyaWEtbGFiZWw9J0RpYWxvZyBjb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5EeW5hbWljIENvbnRlbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1ib2R5JyBzdHlsZT0nd2lkdGg6MTAwJTsgaGVpZ2h0OjQwMHB4OyB3aGl0ZS1zcGFjZTpwcmUtd3JhcCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbi8qKlxuICogQSB1dGlsaXR5IG9iamVjdCBmb3IgcXVpY2tseSBhbmQgY29udmVuaWVudGx5IGdlbmVyYXRpbmcgZGlhbG9nIGJveGVzLlxuICogVW5mb3J0dW5hdGVseSwgdGhpcyBkb2Vzbid0IGR5bmFtaWNhbGx5IGNyZWF0ZSBuZXcgYm94ZXM7IGl0IHJldXNlcyB0aGUgc2FtZSBvbmVcbiAqIG92ZXIgYW5kIG92ZXIgYWdhaW4uIEl0IHR1cm5zIG91dCBkeW5hbWljYWxseSBnZW5lcmF0aW5nIG5ldyBkaWFsb2cgYm94ZXNcbiAqIGlzIGEgcGFpbiEgU28gd2UgY2FuJ3Qgc3RhY2sgdGhlbS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RGlhbG9nfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlEaWFsb2cobWFpbiwgdGFnKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgIHRoaXMudGl0bGVUYWcgPSB0YWcuZmluZChcIi5tb2RhbC10aXRsZVwiKTtcbiAgICB0aGlzLmJvZHlUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1ib2R5XCIpO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy50YWcuZHJhZ2dhYmxlKHtcbiAgICAgICAgXCJoYW5kbGVcIjogXCIubW9kYWwtdGl0bGVcIlxuICAgIH0pO1xuXG4gICAgdGhpcy50YWcub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKG9uY2xvc2UgIT09IHVuZGVmaW5lZCAmJiBvbmNsb3NlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvbmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uZmlybShcIkVycm9yIExvYWRpbmcgQXNzaWdubWVudFwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBhc3NpZ25tZW50Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59OyIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTID0gW1xyXG4gICAgW1widG9vbGJveExldmVsXCIsIFwidG9vbGJveF9sZXZlbFwiLCBcIm5vcm1hbFwiLCBcInRvb2xib3hcIiwgXCJJTkNPTVBMRVRFOiBXaGF0IGxldmVsIG9mIHRvb2xib3ggdG8gcHJlc2VudCB0byB0aGUgdXNlciAoaGlkaW5nIGFuZCBzaG93aW5nIGNhdGVnb3JpZXMpLlwiXSxcclxuICAgIFtcInN0YXJ0Vmlld1wiLCBcInN0YXJ0X3ZpZXdcIiwgRGlzcGxheU1vZGVzLlNQTElULCBEaXNwbGF5TW9kZXMsIFwiVGhlIFB5dGhvbiBlZGl0b3IgbW9kZSB0byBzdGFydCBpbiB3aGVuIHRoZSBzdHVkZW50IHN0YXJ0cyB0aGUgcHJvYmxlbS5cIl0sXHJcbiAgICBbXCJkYXRhc2V0c1wiLCBcImRhdGFzZXRzXCIsIFwiXCIsIFwic3RyaW5nXCIsIFwiVGhlIGN1cnJlbnQgbGlzdCBvZiBkYXRhc2V0cyBhdmFpbGFibGUgb24gbG9hZCBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpbWVvdXRcIiwgXCJkaXNhYmxlX3RpbWVvdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgY29kZSBpcyBhbGxvd2VkIHRvIHJ1biB3aXRob3V0IHRpbWVvdXRzIChwb3RlbnRpYWxseSBhbGxvd2luZyBpbmZpbml0ZSBsb29wcykuXCJdLFxyXG4gICAgW1wiaXNQYXJzb25zXCIsIFwiaXNfcGFyc29uc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGlzIGlzIGEgcGFyc29uJ3Mgc3R5bGUgcXVlc3Rpb24gKGp1bWJsZWQpLlwiXSxcclxuICAgIFtcImRpc2FibGVGZWVkYmFja1wiLCBcImRpc2FibGVfZmVlZGJhY2tcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gbm8gaW5zdHJ1Y3RvciBzY3JpcHRzIGFyZSBydW4gKGUuZy4sIG9uX3J1biBhbmQgb25fZXZhbCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRyYWNlXCIsIFwiZGlzYWJsZV90cmFjZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY29kZSB3aWxsIG5vdCBoYXZlIGl0cyBleGVjdXRpb24gdHJhY2VkIChubyB2YXJpYWJsZXMgcmVjb3JkZWQsIG5vIGNvdmVyYWdlIHRyYWNrZWQpLlwiXSxcclxuICAgIFtcImRpc2FibGVFZGl0XCIsIFwiY2FuX2VkaXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzJyBmaWxlIHdpbGwgbm90IGJlIGVkaXRhYmxlIGF0IGFsbC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlQmxvY2tzXCIsIFwiY2FuX2Jsb2Nrc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudCBjYW5ub3QgZWRpdCB0aGUgYmxvY2sgaW50ZXJmYWNlIChhbHRob3VnaCBpdCBpcyB2aXNpYmxlKS5cIl0sXHJcbiAgICBbXCJvbmx5SW50ZXJhY3RpdmVcIiwgXCJvbmx5X2ludGVyYWN0aXZlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLCB0aGUgcHJvZ3JhbSBpcyBhdXRvbWF0aWNhbGx5IHJ1biwgYW5kIHRoZW4gdGhlIGNvbnNvbGUgZW50ZXJzIEV2YWwgbW9kZSAoaW50ZXJhY3RpdmUpLlwiXSxcclxuICAgIFtcIm9ubHlVcGxvYWRzXCIsIFwib25seV91cGxvYWRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzJyBmaWxlIHdpbGwgbm90IGJlIGRpcmVjdGx5IGVkaXRhYmxlICh0aGV5IHdpbGwgaGF2ZSB0byB1cGxvYWQgc3VibWlzc2lvbnMpLlwiXSxcclxuICAgIC8vIFdoYXQgbWVudXMvZmVlZGJhY2sgdG8gc2hvdyBhbmQgaGlkZVxyXG4gICAgW1wiaGlkZUZpbGVzXCIsIFwiaGlkZV9maWxlc1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIHdpbGwgbm90IHNlZSB0aGUgVmlldyBGaWxlcyB0b29sYmFyLlwiXSxcclxuICAgIFtcImhpZGVRdWV1ZWRJbnB1dHNcIiwgXCJoaWRlX3F1ZXVlZF9pbnB1dHNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cyBjYW4gYWNjZXNzIHRoZSBxdWV1ZWQgaW5wdXRzIGJveCAobWFrZXMgcmVwZWF0ZWQgZGVidWdnaW5nIGVhc2llciBmb3IgdGhlIGlucHV0IGZ1bmN0aW9uKS5cIl0sXHJcbiAgICBbXCJoaWRlRWRpdG9yc1wiLCBcImhpZGVfZWRpdG9yc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBhbGwgb2YgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlQWxsXCIsIFwiaGlkZV9hbGxcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZW4gdGhlIGVudGlyZSBpbnRlcmZhY2UgaXMgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVFdmFsdWF0ZVwiLCBcImhpZGVfZXZhbHVhdGVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIEV2YWx1YXRlIGJ1dHRvbiBpcyBub3Qgc2hvd24gb24gdGhlIGNvbnNvbGUuXCJdLFxyXG4gICAgW1wiaGlkZUltcG9ydERhdGFzZXRzQnV0dG9uXCIsIFwiaGlkZV9pbXBvcnRfZGF0YXNldHNfYnV0dG9uXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgY2Fubm90IHNlZSB0aGUgaW1wb3J0IGRhdGFzZXRzIGJ1dHRvbi5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIGNlcnRhaW4ga2luZHMgb2YgaW1wb3J0IHN0YXRlbWVudHMgKG1hdHBsb3RsaWIsIHR1cnRsZSwgZGF0YXNldHMpIGFyZSBub3Qgc2hvd24gaW4gdGhlIGJsb2NrIGludGVyZmFjZS5cIl0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlIGNvdmVyYWdlIGJ1dHRvbiBpcyBub3Qgc2hvd24uXCJdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXREb2N1bWVudGF0aW9uKG5hbWUpIHtcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IEFTU0lHTk1FTlRfU0VUVElOR1MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoQVNTSUdOTUVOVF9TRVRUSU5HU1tpXVswXSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQVNTSUdOTUVOVF9TRVRUSU5HU1tpXVs0XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJEb2N1bWVudGF0aW9uIG5vdCBmb3VuZCBmb3IgZmllbGRcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0YXJ0Vmlld1RhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0VmlldygpID09PSAnJHttb2RlfSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktc3RhcnQtdmlldy1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTCA9IEFTU0lHTk1FTlRfU0VUVElOR1NcclxuICAgIC8vIE9ubHkgaGFuZGxlIHRoZSBzaW1wbGUgYm9vbGVhbnMgdGhpcyB3YXlcclxuICAgIC5maWx0ZXIoKHNldHRpbmcpID0+IHNldHRpbmdbM10gPT09IFwiYm9vbFwiKVxyXG4gICAgLm1hcCgoc2V0dGluZykgPT4ge1xyXG4gICAgICAgIGxldCBwcmV0dHlOYW1lID0gc2V0dGluZ1sxXS5zcGxpdChcIl9cIikubWFwKHdvcmQ9Pih3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3dvcmQuc2xpY2UoMSkpKS5qb2luKFwiIFwiKTtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtJHtzZXR0aW5nWzBdfVwiPiR7cHJldHR5TmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtJHtzZXR0aW5nWzBdfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5zZXR0aW5ncy4ke3NldHRpbmdbMF19XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7c2V0dGluZ1s0XX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB9KS5qb2luKFwiXFxuXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS12aWV3LXNldHRpbmdzXCI+XHJcbiAgICBcclxuICAgIDxmb3JtPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuc2V0dGluZ3Muc2F2ZVwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1uYW1lXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1uYW1lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50Lm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHN0dWRlbnQtZmFjaW5nIG5hbWUgb2YgdGhlIGFzc2lnbm1lbnQuIEFzc2lnbm1lbnRzIHdpdGhpbiBhIGdyb3VwIGFyZSBvcmRlcmVkIGFscGhhYmV0aWNhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgYnkgdGhlaXIgbmFtZSwgc28geW91IG1heSB3YW50IHRvIHVzZSBhIG5hbWluZyBzY2hlbWUgbGlrZSBcIiM0My41KSBXaGF0ZXZlclwiLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlVSTDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQudXJsXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBjb3Vyc2UtdW5pcXVlIFVSTCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbnNpc3RlbnRseSByZWZlciB0byB0aGlzIGFzc2lnbm1lbnQuIFxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIj5QdWJsaWM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5wdWJsaWNcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgbm90IHB1YmxpYywgdXNlcnMgb3V0c2lkZSBvZiB0aGUgY291cnNlIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZSBhc3NpZ25tZW50IGluIGNvdXJzZSBsaXN0aW5ncy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCI+SGlkZGVuOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIGhpZGRlbiwgc3R1ZGVudHMgd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlaXIgZ3JhZGUgd2hpbGUgd29ya2luZyBvbiB0aGUgYXNzaWdubWVudC5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIj5SZXZpZXdlZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucmV2aWV3ZWRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgcmV2aWV3ZWQsIHRoZSBhc3NpZ25tZW50IGNhbiBiZSBjb21tZW50ZWQgdXBvbiBhbmQgcmVncmFkZWQgYnkgdGhlIHN0YWZmIGFmdGVyd2FyZHMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+U3RhcnRpbmcgVmlldzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInN0YXJ0Vmlld1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5JUCBSYW5nZXM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LmlwUmFuZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBJUCBBZGRyZXNzZXMgdGhhdCB3aWxsIGJlIGV4cGxpY2l0bHkgYWxsb3dlZC4gSWYgYmxhbmssXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbiBhbGwgYWRkcmVzc2VzIGFyZSBhbGxvd2VkLiBJZiBhbiBhZGRyZXNzIHN0YXJ0cyB3aXRoIDxjb2RlPl48L2NvZGU+IHRoZW4gaXQgaXQgaXMgZXhwbGljaXRseVxyXG4gICAgICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkLCBidXQgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0dXJuIHdpdGggYSA8Y29kZT4hPC9jb2RlPi4gQWRkcmVzc2VzIGNhbiBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSBhIGJpdCBtYXNrIHRvIGFsbG93IGEgcmFuZ2Ugb2YgYWRkcmVzc2VzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWRhdGFzZXRzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+UHJlbG9hZGVkIERhdGFzZXRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWRhdGFzZXRzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcImRhdGFzZXRzXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHtBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MfVxyXG4gICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oKTtcclxuICAgICAgICAvLyBPbmx5IHN0b3JlIHRoaXMgc2V0dGluZyBpZiBpdHMgZGlmZmVyZW50IGZyb20gdGhlIGRlZmF1bHRcclxuICAgICAgICBpZiAodmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tzZXJ2ZXJOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwsIHNldHRpbmdzKSB7XHJcbiAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xyXG4gICAgICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHNlcnZlck5hbWUgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oc2V0dGluZ3Nbc2VydmVyTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5zdGFydF92aWV3KSB7XHJcbiAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShzZXR0aW5ncy5zdGFydF92aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbltzZXJ2ZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zZXR0aW5ncy5cIitzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn1cclxuXHJcbmNsYXNzIEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IERvIHVwZGF0ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICAvL3RoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlXHJcbiAgICAgICAgLy90aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudFNldHRpbmdzID0ge1xyXG4gICAgbmFtZTogXCJBc3NpZ25tZW50IFNldHRpbmdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BUktET1dOX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIj48L3RleHRhcmVhPiAgICBcclxuYDtcclxuXHJcblxyXG5jbGFzcyBNYXJrZG93bkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMubWRlID0gbmV3IEVhc3lNREUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci1tYXJrZG93blwiKVswXSxcclxuICAgICAgICAgICAgYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JjZVN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBpbWFnZVVwbG9hZEZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJlbmRlcmluZ0NvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY29kZVN5bnRheEhpZ2hsaWdodGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMubWRlLmNvZGVtaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS52YWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLm1kZS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJNYXJrZG93blwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1kXCJdLFxyXG4gICAgY29uc3RydWN0b3I6IE1hcmtkb3duRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBNQVJLRE9XTl9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBUT0RPOiByZW5hbWUgZmlsZXMsIG1hbnVhbCBzYXZlLCB0YWdzLCBzYW1wbGVfc3VibWlzc2lvbnMsIG9uX2V2YWwsIG5vbi1idWlsdGluIGZpbGVzXHJcbiAqIFRPRE86IGltcG9ydCBkYXRhLCBoaXN0b3J5LCBydW4sIHVybF9kYXRhLCBhc3NpZ25tZW50X3NldHRpbmdzLCBwYXJzb25zX21vZGVcclxuICogVE9ETzogZGVsZXRlIGJlY29tZXMgXCJjbGVhclwiIGZvciBpbnN0cnVjdG9yIGZpbGVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBlbnVtIHtzdHJ9XHJcbiAqL1xyXG5pbXBvcnQge0Fic3RyYWN0RWRpdG9yLCBzbHVnZ2lmeX0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7SElTVE9SWV9UT09MQkFSX0hUTUx9IGZyb20gXCIuLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgbGV0IERpc3BsYXlNb2RlcyA9IHtcclxuICAgIEJMT0NLOiBcImJsb2NrXCIsXHJcbiAgICBTUExJVDogXCJzcGxpdFwiLFxyXG4gICAgVEVYVDogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi51cGRhdGVNb2RlLmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQWVRIT05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tdG9vbGJhciBjb2wtbWQtMTIgYnRuLXRvb2xiYXJcIlxyXG4gICAgICAgICByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJQeXRob24gVG9vbGJhclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJ1biBHcm91cFwiPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBibG9ja3B5LXJ1blwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZXhlY3V0ZS5ydW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L3NwYW4+IFJ1blxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXQgR3JvdXBcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucmVzZXRcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmltcG9ydERhdGFzZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvc3Bhbj4gSW1wb3J0IGRhdGFzZXRzXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImV2ZW50OiB7Y2hhbmdlOiB1aS5lZGl0b3JzLnVwbG9hZH1cIj5cclxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gYmxvY2tweS10b29sYmFyLWRvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSGlzdG9yeSBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnRvZ2dsZUhpc3RvcnlNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHVpLmVkaXRvcnMucHl0aG9uLmlzSGlzdG9yeUF2YWlsYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7IGFjdGl2ZTogZGlzcGxheS5oaXN0b3J5TW9kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7ICdhcmlhLXByZXNzZWQnOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWhpc3RvcnlcIj48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwhLS0gRnVsbHkgZnVuY3Rpb25hbCwgYnV0IGEgbGl0dGxlIHRvby4uIEludmFzaXZlIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlbiBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiPjwvc3Bhbj4gRnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTYXZlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5TYXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvc3Bhbj4gU2F2ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L3NwYW4+IERlbGV0ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlbmFtZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuUmVuYW1lXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9zcGFuPiBSZW5hbWVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgJHtISVNUT1JZX1RPT0xCQVJfSFRNTH1cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCI+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuLypcclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBibG9ja3B5LXJ1bicgc3R5bGU9J2Zsb2F0OmxlZnQnLFxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9J2NzczogZXhlY3V0aW9uLnN0YXR1cygpID09IFwicnVubmluZ1wiID8gXCJidG4taW5mb1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi5zdGF0dXMoKSA9PSBcImVycm9yXCIgPyBcImJ0bi1kYW5nZXJcIiA6IFwiYnRuLXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKCkgfHwgIWFzc2lnbm1lbnQudXBsb2FkKCknID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcGxheSc+PC9zcGFuPiBSdW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAhYXNzaWdubWVudC51cGxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdCbG9ja3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFhcmVCbG9ja3NVcGRhdGluZygpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxhcmdlJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gQmxvY2tzXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LW1vZGUtc2V0LWluc3RydWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHthY3RpdmU6IHNldHRpbmdzLmVkaXRvcigpID09ICdVcGxvYWQnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IEluc3RydWN0b3JcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1tb2RlLXNldC1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5lZGl0b3IoKSA9PSAnU3BsaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFhcmVCbG9ja3NVcGRhdGluZygpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXJlc2l6ZS1ob3Jpem9udGFsJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IFNwbGl0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktbW9kZS1zZXQtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5lZGl0b3IoKSA9PSAnVGV4dCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IFRleHRcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItcmVzZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogIWFzc2lnbm1lbnQudXBsb2FkKClcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2gnPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItY2FwdHVyZSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1waWN0dXJlJz48L3NwYW4+IENhcHR1cmVcclxuICAgICAgICAgICAgPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktdG9vbGJhci1pbXBvcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogc2V0dGluZ3MuaW5zdHJ1Y3RvcigpIHx8ICghYXNzaWdubWVudC51cGxvYWQoKSAmJiBhc3NpZ25tZW50LmltcG9ydGFibGUoKSlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWNsb3VkLWRvd25sb2FkJz48L3NwYW4+IEltcG9ydCBEYXRhc2V0c1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXVwbG9hZCc+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nYmxvY2tweS10b29sYmFyLWRvd25sb2FkJz48c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZCBQeXRob24gQ29kZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItaGlzdG9yeSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob3VyZ2xhc3MnPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLWRlZmF1bHQgYmxvY2tweS10b29sYmFyLWluc3RydWN0b3InIGRhdGEtYmluZD1cInZpc2libGU6IHNldHRpbmdzLmluc3RydWN0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0Jz48L3NwYW4+IFNldHRpbmdzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPCEtLVxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tZGVmYXVsdCBibG9ja3B5LXRvb2xiYXItZW5nbGlzaCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCc+PC9zcGFuPiBFbmdsaXNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzZXR0aW5ncy5pbnN0cnVjdG9yKClcIlxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPSdjbGVhcjpib3RoJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBibG9ja3B5LXRvb2xiYXItZmlsZW5hbWUtcGlja2VyXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYmxvY2tweS1zZXQtZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogc2V0dGluZ3MuZmlsZW5hbWUoKSA9PSAnX19tYWluX18nfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cIl9fbWFpbl9fXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LWZpbGVuYW1lLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+IF9fbWFpbl9fXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ3N0YXJ0aW5nX2NvZGUnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cInN0YXJ0aW5nX2NvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IG9uX3N0YXJ0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJsb2NrcHktc2V0LWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IHNldHRpbmdzLmZpbGVuYW1lKCkgPT0gJ2dpdmVfZmVlZGJhY2snfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cImdpdmVfZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktZmlsZW5hbWUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+IG9uX3J1blxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBibG9ja3B5LXNldC1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBzZXR0aW5ncy5maWxlbmFtZSgpID09ICdvbl9jaGFuZ2UnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWxlbmFtZT1cIm9uX2NoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1maWxlbmFtZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj4gb25fY2hhbmdlXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICovXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpIHtcclxuICAgIGxldCBpcHluYiA9IEpTT04ucGFyc2UoY29kZSk7XHJcbiAgICBsZXQgaXNVc2FibGUgPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWNlbGwuc291cmNlWzBdLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1ha2VQeXRob24gPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiJycnXCIrY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKStcIicnJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaXB5bmIuY2VsbHMuZmlsdGVyKGlzVXNhYmxlKS5tYXAobWFrZVB5dGhvbikuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuY2xhc3MgUHl0aG9uRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCIpKTtcclxuICAgICAgICB0aGlzLmJtID0gbmV3IEJsb2NrTWlycm9yKHtcclxuICAgICAgICAgICAgXCJjb250YWluZXJcIjogdGhpcy50YWdbMF0sXHJcbiAgICAgICAgICAgIFwicnVuXCI6IG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuLmJpbmQobWFpbi5jb21wb25lbnRzLmVuZ2luZSksXHJcbiAgICAgICAgICAgIFwic2tpcFNrdWxwdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJsb2NrbHlNZWRpYVBhdGhcIjogbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmJsb2NrbHlQYXRoLFxyXG4gICAgICAgICAgICAvLydoZWlnaHQnOiAnMjAwMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWtlU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVFeHRyYUJsb2NrbHkoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UuY29uZmlndXJlQ29udGV4dE1lbnUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2NyZWVuc2hvdFwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5TQ1JFRU5TSE9UX0JMT0NLU1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBsZXQgb2xkRmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudEJNTGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm0uYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBpZiAob2xkRmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKERpc3BsYXlNb2Rlcy5URVhUKTtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSAoKSA9PiBmYWxzZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSh0aGlzLm9sZFB5dGhvbk1vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmlzUGFyc29ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc0Vycm9yLnN1YnNjcmliZSgobGluZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItZXJyb3ItbGluZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNVbmNvdmVyZWQuc3Vic2NyaWJlKChsaW5lcykgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItdW5jb3ZlcmVkLWxpbmVcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLnJlbmRlcigpO1xyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgdGhpcyBkb2Vzbid0IGVuZCB1cCBsb29raW5nIHJpZ2h0IChnbyB0byBhIGRpZmZlcmVudCBlZGl0b3IsIGNvbWUgYmFjaywgYW5kIGl0J2xsIGJlIHNxdWlzaGVkKVxyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgaWYgKG5ld0NvbnRlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSB0aGlzLmZpbGUuaGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG1hdHRlciwgZmlsZSB3YXMgYWxyZWFkeSBzaHV0IGRvd24uXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGNsb3NpbmcgdGhpcyBmaWxlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkT25seShpc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuVXBsb2FkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpO1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBjb2RlXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5kb3dubG9hZEZpbGUoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09IFwiYW5zd2VyXCIgJiYgcmVzdWx0LmV4dGVuc2lvbiA9PT0gXCIucHlcIikge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHNsdWdnaWZ5KHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5taW1ldHlwZSA9IFwidGV4dC94LXB5dGhvblwiO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5Eb3dubG9hZFwiLCBcIlwiLCBcIlwiLCBcIlwiLCByZXN1bHQubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQeXRob25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnB5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFB5dGhvbkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogUFlUSE9OX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEFHU19FRElUT1JfSFRNTCA9IGBcclxuQ3JlYXRlIG5ld1xyXG5JbXBvcnQgYnkgbmFtZVxyXG5GaW5kIGJ5IG93bmVyL2NvdXJzZS9raW5kXHJcblxyXG5UYWdzOlxyXG4gICAgRGF0YTpcclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgS2luZFxyXG4gICAgICAgIExldmVsXHJcbiAgICAgICAgVmVyc2lvblxyXG4gICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICBDb250cm9sczpcclxuICAgICAgICBFZGl0XHJcbiAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgRGVsZXRlIFxyXG5gO1xyXG5cclxuY2xhc3MgVGFnc0VkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10YWdzXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3NFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiF0YWdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGFnc0VkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEFHU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItdGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNsYXNzIFRleHRFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10ZXh0XCIpWzBdLCB7XHJcbiAgICAgICAgICAgIHNob3dDdXJzb3JXaGVuU2VsZWN0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgZmlyc3RMaW5lTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICBpbmRlbnRVbml0OiA0LFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgICAgICAgICAgXCJUYWJcIjogXCJpbmRlbnRNb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiRXNjXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLmRpc3BsYXkuaW5wdXQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIkYxMVwiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5jb2RlTWlycm9yLnJlZnJlc2guYmluZCh0aGlzLmNvZGVNaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0VmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0RWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUZXh0XCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIudHh0XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRleHRFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRFWFRfRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogRWRpdG9ycyBhcmUgaW5mZXJyZWQgZnJvbSBGaWxlbmFtZXMuXHJcbiAqXHJcbiAqIFRoZSBlZGl0b3IgaXMgYmFzZWQgb24gdGhlIGV4dGVuc2lvbjpcclxuICogIC5ibG9ja3B5OiBTcGVjaWFsIGVkaXRvciAod2lsbCBiZSBjaG9zZW4gYnkgZmlsZW5hbWUpXHJcbiAqICAucHk6IFB5dGhvbiBFZGl0b3JcclxuICogIC5tZDogTWFya2Rvd24gRWRpdG9yXHJcbiAqICAudHh0OiBUZXh0IEVkaXRvciAoYWxzbyB1c2VkIGZvciBvdGhlciB0eXBlcylcclxuICogIC5wZW1sOiBQRU1MIEVkaXRvclxyXG4gKiAgLnBuZywgLmdpZiwgLmpwZWcsIC5qcGcsIC5ibXA6IEltYWdlIEVkaXRvclxyXG4gKiAgLmpzb246IEpTT04gRWRpdG9yXHJcbiAqICAueWFtbDogWUFNTCBFZGl0b3JcclxuICovXHJcblxyXG5pbXBvcnQge1B5dGhvbkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3B5dGhvblwiO1xyXG5pbXBvcnQge1RleHRFZGl0b3J9IGZyb20gXCIuL2VkaXRvci90ZXh0XCI7XHJcbmltcG9ydCB7QXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1RhZ3NFZGl0b3J9IGZyb20gXCIuL2VkaXRvci90YWdzXCI7XHJcbmltcG9ydCB7TWFya2Rvd25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9tYXJrZG93blwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBkaWZmZXJlbnQgcG9zc2libGUgZWRpdG9ycyBhdmFpbGFibGVcclxuICogQGVudW0ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBsZXQgRWRpdG9yc0VudW0gPSB7XHJcbiAgICBTVUJNSVNTSU9OOiBcInN1Ym1pc3Npb25cIixcclxuICAgIEFTU0lHTk1FTlQ6IFwiYXNzaWdubWVudFwiLFxyXG4gICAgSU5TVFJVQ1RJT05TOiBcImluc3RydWN0aW9uc1wiLFxyXG4gICAgT05fUlVOOiBcIm9uX3J1blwiLFxyXG4gICAgT05fQ0hBTkdFOiBcIm9uX2NoYW5nZVwiLFxyXG4gICAgT05fRVZBTDogXCJvbl9ldmFsXCIsXHJcbiAgICBTVEFSVElOR19DT0RFOiBcInN0YXJ0aW5nX2NvZGVcIixcclxuICAgIFNBTVBMRV9TVUJNSVNTSU9OUzogXCJzYW1wbGVfc3VibWlzc2lvbnNcIixcclxuICAgIElOU1RSVUNUT1JfRklMRTogXCJpbnN0cnVjdG9yX2ZpbGVcIlxyXG59O1xyXG5cclxuY29uc3QgU1BFQ0lBTF9OQU1FU1BBQ0VTID0gW1wiIVwiLCBcIl5cIiwgXCI/XCIsIFwiJFwiXTtcclxuXHJcbmNvbnN0IEFWQUlMQUJMRV9FRElUT1JTID0gW1xyXG4gICAgVGV4dEVkaXRvciwgUHl0aG9uRWRpdG9yLCBBc3NpZ25tZW50U2V0dGluZ3MsIFRhZ3NFZGl0b3IsIE1hcmtkb3duRWRpdG9yXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgRURJVE9SU19IVE1MID0gQVZBSUxBQkxFX0VESVRPUlMubWFwKGVkaXRvciA9PlxyXG4gICAgYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1lZGl0b3JcIj5cclxuICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9J1wiPlxyXG4gICAgJHtlZGl0b3IudGVtcGxhdGV9ICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gXHJcbiAgICAvKlxyXG4gICAgYFxyXG48IS0tIGtvIGlmOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nIC0tPlxyXG4ke2VkaXRvci50ZW1wbGF0ZX1cclxuPCEtLSAva28gLS0+YCovXHJcbikuam9pbihcIlxcblwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JzIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRfID0gW107XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25zXyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnlOYW1lXyA9IHt9O1xyXG4gICAgICAgIEFWQUlMQUJMRV9FRElUT1JTLmZvckVhY2goZWRpdG9yID0+IHRoaXMucmVnaXN0ZXJFZGl0b3IoZWRpdG9yKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUuc3Vic2NyaWJlKHRoaXMuY2hhbmdlRWRpdG9yLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVkaXRvcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSBkYXRhLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGRhdGEuY29uc3RydWN0b3IodGhpcy5tYWluLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgaW5zdGFuY2UubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRfLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYnlOYW1lX1tkYXRhLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBpbnN0YW5jZTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uc19bZXh0ZW5zaW9uc1tpXV0gPSBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnlOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ieU5hbWVfW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRWRpdG9yKG5ld0ZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9sZEVkaXRvciA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICBsZXQgbmV3RWRpdG9yID0gdGhpcy5nZXRFZGl0b3IobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvbGRFZGl0b3IuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdFZGl0b3I7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50LmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXJzZUZpbGVuYW1lKHBhdGgpIHtcclxuICAgICAgICBsZXQgc3BhY2UgPSBwYXRoLmNoYXJBdCgwKTtcclxuICAgICAgICBpZiAoU1BFQ0lBTF9OQU1FU1BBQ0VTLmluZGV4T2Yoc3BhY2UpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BhY2UgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmFtZSA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICBsZXQgdHlwZSA9IHBhdGguc3Vic3RyKHBhdGgubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICByZXR1cm4ge1wic3BhY2VcIjogc3BhY2UsIFwibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogdHlwZX07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdG9yKHBhdGgpIHtcclxuICAgICAgICBsZXQge3NwYWNlLCBuYW1lLCB0eXBlfSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZShwYXRoKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCIuYmxvY2tweVwiICYmIHBhdGggaW4gdGhpcy5leHRlbnNpb25zXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zX1twYXRoXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgaW4gdGhpcy5leHRlbnNpb25zXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zX1t0eXBlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkX1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4vc2VydmVyXCI7XG5pbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3J1blwiO1xuaW1wb3J0IHtSdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvcnVuXCI7XG5pbXBvcnQge0V2YWxDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvZXZhbFwiO1xuaW1wb3J0IHtTYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvc2FtcGxlXCI7XG5pbXBvcnQge09uQ2hhbmdlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2NoYW5nZVwiO1xuaW1wb3J0IHtPbkV2YWxDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fZXZhbFwiO1xuaW1wb3J0IHtPblNhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9zYW1wbGVcIjtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGV4ZWN1dGluZyBQeXRob24gY29kZSBhbmQgcGFzc2luZyB0aGUgcmVzdWx0cyBhbG9uZyB0byBpbnRlcmVzdGVkIGNvbXBvbmVudHMuXG4gKlxuICogSW50ZXJlc3RpbmcgY29tcG9uZW50czpcbiAqICBFeGVjdXRpb24gQnVmZmVyOiBSZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyB0aGUgdHJhY2UgZHVyaW5nIHByb2dyYW0gZXhlY3V0aW9uLlxuICogICAgICAgICAgICAgICAgICAgIFRoaXMgcHJldmVudHMgS25vY2tvdXRqcyBmcm9tIHVwZGF0aW5nIHRoZSBlZGl0b3IgZHVyaW5nIGV4ZWN1dGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RWRpdG9yfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy5leGVjdXRpb25Nb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucyA9IHtcbiAgICAgICAgICAgIHJ1bjogbmV3IFJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBldmFsOiBuZXcgRXZhbENvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvblJ1bjogbmV3IE9uUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBuZXcgT25DaGFuZ2VDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25FdmFsOiBuZXcgT25FdmFsQ29uZmlndXJhdGlvbihtYWluKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByZWNvbmZpZ3VyZSBza3VscHQgc28gd2UgY2FuIHBhcnNlXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi5nZXRTa3VscHRPcHRpb25zKCkpO1xuXG4gICAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSB0cmFjaW5nIHdoaWxlIHRoZSBwcm9ncmFtIGlzIGV4ZWN1dGluZ1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmFibGUgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gZXhlY3V0aW9uIGhhcyBmdWxseSBlbmRlZCxcbiAgICAgICAgICogd2hldGhlciBpdCBzdWNjZWVkcyBvciBmYWlscy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbiA9IG51bGw7XG4gICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHJlcG9ydHNcbiAgICAgKi9cbiAgICByZXNldFJlcG9ydHMoKSB7XG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnJlcG9ydHM7XG4gICAgICAgIHJlcG9ydFtcInZlcmlmaWVyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7fTtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQubGFzdFN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudExpbmUobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlRGF0YS5yZW1vdmVBbGwoKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uUnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5leGVjdXRpb25FbmRfLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIGxldCBldmFsdWF0aW9uSW5wdXQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmV2YWx1YXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWx1YXRpb25JbnB1dCk7XG4gICAgICAgIGV2YWx1YXRpb25JbnB1dC50aGVuKCh1c2VySW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMuZXZhbC51c2UodGhpcywgdXNlcklucHV0KTtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vbkV2YWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZhbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkV2YWwudXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV2YWx1YXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uQ2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHJldHVybiBTay5taXNjZXZhbC5hc3luY1RvUHJvbWlzZSgoKSA9PlxuICAgICAgICAgICAgU2suaW1wb3J0TWFpbldpdGhCb2R5KHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmNvZGUsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVkIHdoZW5ldmVyIHRoZSBQeXRob24gY29kZSBjaGFuZ2VzXG4gICAgICovXG4gICAgb25fY2hhbmdlKCkge1xuICAgICAgICBsZXQgRklMRU5BTUUgPSBcIm9uX2NoYW5nZVwiO1xuICAgICAgICAvLyBTa2lwIGlmIHRoZSBpbnN0cnVjdG9yIGhhcyBub3QgZGVmaW5lZCBhbnl0aGluZ1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tGSUxFTkFNRV0oKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNoYW5naW5nXCIpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUNvZGUoKTtcbiAgICAgICAgLy8gT24gc3RlcCBkb2VzIG5vdCBwZXJmb3JtIHBhcnNlIGFuYWx5c2lzIGJ5IGRlZmF1bHQgb3IgcnVuIHN0dWRlbnQgY29kZVxuICAgICAgICBsZXQgZW5naW5lID0gdGhpcztcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGVuZ2luZS5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgZW5naW5lLnZlcmlmeUNvZGUoKTtcbiAgICAgICAgZW5naW5lLnVwZGF0ZVBhcnNlKCk7XG4gICAgICAgIGVuZ2luZS5ydW5JbnN0cnVjdG9yQ29kZShGSUxFTkFNRSwgdHJ1ZSwgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNob3cgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICEoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50RmVlZGJhY2soY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2sobW9kdWxlLiRkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImVuZ2luZVwiLCBcIm9uX2NoYW5nZVwiKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGF0dGVtcHQgdG8gY2FsbCB0aGUgZGVmaW5lZCBvbkV4ZWN1dGlvbkVuZCxcbiAgICAgKiBidXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZXJlIGlzIG5vIGZ1bmN0aW9uIGRlZmluZWQuXG4gICAgICovXG4gICAgZXhlY3V0aW9uRW5kXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25FbmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZXhlY3V0aW9uQmVnaW5fKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkJlZ2luICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgRU1QVFlfTU9EVUxFID0gXCJsZXQgJGJ1aWx0aW5tb2R1bGUgPSBmdW5jdGlvbihtb2QpeyByZXR1cm4gbW9kOyB9XCJcclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBmb3IgaG9sZGluZyBzZXR0aW5ncyBvZiBhIHBhcnRpY3VsYXIgcnVuIGNvbmZpZ3VyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgLy8gQWNjZXNzIHBvaW50IGZvciBpbnN0cnVjdG9yIGRhdGFcclxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIFNrLmNvbnNvbGUgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlO1xyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuZ2V0U2t1bHB0T3B0aW9ucygpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTa3VscHRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIF9fZnV0dXJlX186IFNrLnB5dGhvbjMsXHJcbiAgICAgICAgICAgIC8vIGltcG9ydFxyXG4gICAgICAgICAgICByZWFkOiB0aGlzLmltcG9ydEZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gb3BlblxyXG4gICAgICAgICAgICBmaWxlb3BlbjogdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBmaWxlLndyaXRlXHJcbiAgICAgICAgICAgIGZpbGV3cml0ZTogdGhpcy53cml0ZUZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gcHJpbnRcclxuICAgICAgICAgICAgb3V0cHV0OiB0aGlzLnByaW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnRzIHJlYWRpbmcgSFRNTCBlbGVtZW50cyBhcyBmaWxlc1xyXG4gICAgICAgICAgICBpbkJyb3dzZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBpbnB1dFxyXG4gICAgICAgICAgICBpbnB1dGZ1bjogdGhpcy5pbnB1dC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBpbnB1dGZ1blRha2VzUHJvbXB0OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBNZWRpYSBJbWFnZSBQcm94eSBVUkxcclxuICAgICAgICAgICAgaW1hZ2VQcm94eTogdGhpcy5nZXRJbWFnZVByb3h5LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRvIGtlZXAgdGhlIGdsb2JhbHNcclxuICAgICAgICAgICAgcmV0YWluR2xvYmFsczogdHJ1ZVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhY2Nlc3MgU2t1bHB0IGJ1aWx0LWlucy4gVGhpcyBpcyBwcmV0dHkgZ2VuZXJpYywgdGFrZW5cclxuICAgICAqIGFsbW9zdCBkaXJlY3RseSBmcm9tIHRoZSBTa3VscHQgZG9jcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgcHl0aG9uIGZpbGVuYW1lIChlLmcuLCBcIm9zXCIgb3IgXCJwcHJpbnRcIikgdGhhdCB3aWxsIGJlIGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBKYXZhU2NyaXB0IHNvdXJjZSBjb2RlIG9mIHRoZSBmaWxlICh3ZWlyZCwgcmlnaHQ/KVxyXG4gICAgICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGlzbid0IGZvdW5kLlxyXG4gICAgICovXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcblxyXG4gICAgb3BlbkZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBwcmludCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlucHV0TW9ja0Z1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChTay5xdWV1ZWRJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0SW1hZ2VQcm94eSgpIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3Qgc3VjY2VzcyBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGZhaWx1cmUgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGR1bW15T3V0U2FuZGJveCgpIHtcclxuICAgICAgICAvL1NrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvcGVkYWwvc2FuZGJveC9zYW5kYm94LnB5XCJdID0gXCJjbGFzcyBTYW5kYm94OiBwYXNzXFxuZGVmIHJ1bigpOiBwYXNzXFxuZGVmIHJlc2V0KCk6IHBhc3NcXG5cIjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi4vdHJhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUsIGNvZGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBmaXggdG8gYmUgY3VycmVudGx5IGFkZGVkIGxpbmVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwiXyA9IFwiICsgY29kZTtcclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gdHJ1ZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkFkZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgdGhpcy5jb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRXZhbHVhdGUuUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludFZhbHVlKFNrLmZmaS5yZW1hcFRvSnMobW9kdWxlLiRkLl8uJHIoKSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dCxcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiB0aGlzLmNvZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3NrX21vZF9pbnN0cnVjdG9yXCI7XHJcblxyXG5jb25zdCBVVElMSVRZX01PRFVMRV9DT0RFID0gXCJ2YXIgJGJ1aWx0aW5tb2R1bGUgPSBcIiArICRza19tb2RfaW5zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gSW5zdHJ1Y3RvcnMgaGF2ZSBubyBsaW1pdHNcclxuICAgICAgICBTay5leGVjTGltaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuICAgICAgICAvLyBNdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcih0cnVlKTtcclxuICAgICAgICAvLyBEaXNhYmxlIGlucHV0IGJveFxyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgLy8gVE9ETyBTay5pbnB1dGZ1biA9IEJsb2NrUHlFbmdpbmUuaW5wdXRNb2NrRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETzogQWxsb3cgaW5wdXQgZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgdGltZXIsIHNvbWVob3dcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCIuL19pbnN0cnVjdG9yL19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBmb3VuZDogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgIH07XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge05FV19MSU5FX1JFR0VYfSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwiTm9uZVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ldmFsXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQuZXZhbHVhdGlvbiB8fCBcIk5vbmVcIjtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGZhbHNlLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAvL1NrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX2V2YWwuJGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLiRkKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfTElORV9SRUdFWCA9IC9cXHJcXG58XFxyfFxcbi87XHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwicGFzc1wiKSk7XHJcbiAgICBsZXQgdGlmYUFuYWx5c2lzID0gXCJcIjtcclxuICAgIGlmICghcXVpY2spIHtcclxuICAgICAgICB0aWZhQW5hbHlzaXMgPSBcImZyb20gcGVkYWwudGlmYSBpbXBvcnQgdGlmYV9hbmFseXNpc1xcbnRpZmFfYW5hbHlzaXMoRmFsc2UpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG5jb21wYXRpYmlsaXR5LnNldF9zYW5kYm94KHN0dWRlbnQpXHJcbmVycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50ID0gcnVuX3N0dWRlbnRcclxuY29tcGF0aWJpbGl0eS5nZXRfcGxvdHMgPSBnZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0ID0gZ2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgZnVuYygqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuI3ByaW50KE1BSU5fUkVQT1JULmZlZWRiYWNrWzBdLm1pc3Rha2VbJ2Vycm9yJ10pXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25SdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX3J1blwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVwb3J0W1wicGFyc2VyXCJdKTtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZmFsc2UsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0IC0gNDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICAvLyBUT0RPIExvZ2dpbmchISEhXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX3J1bi4kZDtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBPblJ1bkNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX3J1bi5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUZpbGUoXCJhbnN3ZXIucHlcIiwgdGhpcy5jb2RlLCBudWxsKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgZW5naW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJzZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJ2ZXJpZmllclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IEJvb2xlYW4odGhpcy5jb2RlLnRyaW0oKSksXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5iZWdpbkV2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5wYXJzZXIuc3VjY2VzcyAmJiByZXBvcnQudmVyaWZpZXIuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiUHJvZ3JhbUVycm9yT3V0cHV0XCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcclxuICAgICAgICBTay5yZXF1ZXN0c0dldCA9IChmaWxlbmFtZSkgPT4gdGhpcy5vcGVuVVJMKGZpbGVuYW1lLCBcInVybFwiKTtcclxuXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbGV0IEZFRURCQUNLX0hUTUwgPSBgXG5cbjxzcGFuIGNsYXNzPSdibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrIHRleHQtbXV0ZWQtbGVzcyBwdWxsLXJpZ2h0IHBvc2l0aW9uLXN0aWNreSBzdGlja3ktdG9wJ1xuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWxhYmVsPVwiTmV3IEZlZWRiYWNrIEFsZXJ0XCI+XG4gICAgTmV3IGZlZWRiYWNrICZ1YXJyO1xuPC9zcGFuPlxuXG48ZGl2IGNsYXNzPSdibG9ja3B5LWZlZWRiYWNrIGNvbC1tZC02IGJsb2NrcHktcGFuZWwnXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkZlZWRiYWNrXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuXG4gICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZWNvbmRSb3cuc3dpdGNoTGFiZWxcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIEFjdHVhbCBGZWVkYmFjayBSZWdpb24gLS0+ICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmc+RmVlZGJhY2s6IDwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UgYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeSBmZWVkYmFjay1iYWRnZSdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczogdWkuZmVlZGJhY2suYmFkZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLmZlZWRiYWNrLmNhdGVnb3J5XCI+RmVlZGJhY2sgS2luZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ0ZXh0OiBleGVjdXRpb24uZmVlZGJhY2subGFiZWxcIj48L3N0cm9uZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiBleGVjdXRpb24uZmVlZGJhY2subWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICAgICAgICAgICAgXG5gO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZlZWRiYWNrIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hbmFnZXMgdGhlIGZlZWRiYWNrIGFyZWEsIHdoZXJlIHVzZXJzIGFyZSB0b2xkIHRoZSBzdGF0ZSBvZiB0aGVpclxuICAgICAqIHByb2dyYW0ncyBleGVjdXRpb24gYW5kIGdpdmVuIGd1aWRhbmNlLiBBbHNvIG1hbmFnZXMgdGhlIGNyZWF0aW9uIG9mIHRoZSBUcmFjZSBUYWJsZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEB0aGlzIHtCbG9ja1B5RmVlZGJhY2t9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2s7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeVwiKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzY3JlZW4gKHRha2VzIDEgc2Vjb25kKSB0byBtYWtlIHRoZSBGZWVkYmFjayBhcmVhIHZpc2libGUuXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGZlZWRiYWNrIGFyZWEgaXMgY3VycmVudGx5IHZpc2libGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZlZWRiYWNrVmlzaWJsZSgpIHtcbiAgICAgICAgbGV0IHRvcF9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wO1xuICAgICAgICBsZXQgYm90dG9tX29mX2VsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3AgKyB0aGlzLnRhZy5vdXRlckhlaWdodCgpO1xuICAgICAgICBsZXQgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vYm90dG9tX29mX2VsZW1lbnQgLT0gNDA7IC8vIFVzZXIgZnJpZW5kbHkgcGFkZGluZ1xuICAgICAgICByZXR1cm4gKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBvdXRwdXQgY3VycmVudGx5IGluIHRoZSBmZWVkYmFjayBhcmVhLiBBbHNvIHJlc2V0cyB0aGUgcHJpbnRlciBhbmRcbiAgICAgKiBhbnkgaGlnaGxpZ2h0ZWQgbGluZXMgaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UoXCIqUmVhZHkqXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmhpZGRlbihmYWxzZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBmaW5kRmlyc3RFcnJvckxpbmUoZmVlZGJhY2tEYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBmZWVkYmFja0RhdGEubGVuZ3RoLTE7IGkgPj0gMDsgaS09IDEpIHtcbiAgICAgICAgICAgIGlmIChcInBvc2l0aW9uXCIgaW4gZmVlZGJhY2tEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRiYWNrRGF0YVtpXS5wb3NpdGlvbi5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBtb2RlbCB3aXRoIHRoZXNlIG5ldyBleGVjdXRpb24gcmVzdWx0c1xuICAgICAqIEBwYXJhbSBleGVjdXRpb25SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICAvLyBQYXJzZSBvdXQgZGF0YVxuICAgICAgICBsZXQgbWVzc2FnZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5NRVNTQUdFKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkNBVEVHT1JZKTtcbiAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkxBQkVMKTtcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuSElERSk7XG4gICAgICAgIGxldCBkYXRhID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkRBVEEpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGJhc2VkIG9uIGFzc2lnbm1lbnRzJyBzZXR0aW5nc1xuICAgICAgICBsZXQgaGlkZVNjb3JlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGlmIChoaWRlU2NvcmUgJiYgY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBsYWJlbCA9IFwiTm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJObyBlcnJvcnMgcmVwb3J0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICAvLyBUT0RPOiBJbnN0ZWFkIG9mIHRyYWNraW5nIHN0dWRlbnQgZmlsZSwgbGV0J3MgdHJhY2sgdGhlIGluc3RydWN0b3IgZmlsZVxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJJbnRlcnZlbnRpb25cIiwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBcImFuc3dlci5weVwiKTtcblxuICAgICAgICAvLyBDbGVhciBvdXQgYW55IHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgbGluZXNcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGVycm9yIG9uIGEgbGluZSBhbmQgcmVwb3J0IHRoYXRcbiAgICAgICAgbGV0IGxpbmUgPSBCbG9ja1B5RmVlZGJhY2suZmluZEZpcnN0RXJyb3JMaW5lKGRhdGEpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmUgIT09IG51bGwgJiYgbGluZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5wdXNoKGxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW52ZXJ0IHRoZSBzZXQgb2YgdHJhY2VkIGxpbmVzXG4gICAgICAgIGxldCBzdHVkZW50UmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQ7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQuc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IHVuY292ZXJlZExpbmVzID0gW107XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMucGFyc2VyLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5saW5lcy5pbmRleE9mKGxpbmUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB1bmNvdmVyZWRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkKHVuY292ZXJlZExpbmVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgYW55IGFjY3VtdWxhdGVkIGZlZWRiYWNrXG4gICAgICovXG4gICAgcHJlc2VudEZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKTtcblxuICAgICAgICAvLyBUT0RPOiBMb2dnaW5nXG4gICAgICAgIC8vdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZmVlZGJhY2tcIiwgY2F0ZWdvcnkrXCJ8XCIrbGFiZWwsIG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbm90aWZ5RmVlZGJhY2tVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICB9O1xuXG4gICAgcHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeShcImludGVybmFsXCIpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsKFwiSW50ZXJuYWwgRXJyb3JcIik7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFxuICAgICAgICAgICAgRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay5cbiAgICAgICAgICAgIFBsZWFzZSBzaG93IHRoZSBmb2xsb3dpbmcgdG8gYW4gaW5zdHJ1Y3RvcjpcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHByZT48c3Ryb25nPiR7ZXJyb3IudHAkbmFtZX08L3N0cm9uZz46ICR7U2suZmZpLnJlbWFwVG9KcyhlcnJvci5hcmdzKX08L3ByZT5gO1xuXG4gICAgICAgIGlmIChlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGxhc3RUcmFjZWJhY2sgPSBlcnJvci50cmFjZWJhY2suc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgaWYgKGxhc3RUcmFjZWJhY2suZmlsZW5hbWUuc2xpY2UoMCwgLTMpID09PSBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgICAgICAgICAgbGFzdFRyYWNlYmFjay5saW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0cmFjZWJhY2tGb3JtYXR0ZWQ9IGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT5cbiAgICAgICAgICAgICAgICBgRmlsZSA8c3BhbiBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9zcGFuPiwgYCtcbiAgICAgICAgICAgICAgICBgbGluZSA8c3BhbiBjbGFzcz1cImxpbmVub1wiPiR7ZnJhbWUubGluZW5vfTwvc3Bhbj5cXG5gKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgPHByZT4ke3RyYWNlYmFja0Zvcm1hdHRlZH08L3ByZT5gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG59IiwiY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5KSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJHtoaWRlSWZFbXB0eX0gfHwgdWkuZmlsZXMuaGFzQ29udGVudHMoJyR7ZmlsZW5hbWV9JylcIj5cclxuICAgICAgICAgICAgJHtmcmllbmRseU5hbWV9PC9hPlxyXG4gICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBGSUxFU19IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1maWxlc1wiXHJcbiAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5maWxlcy52aXNpYmxlXCI+XHJcbjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8c3Ryb25nPlZpZXc6IDwvc3Ryb25nPlxyXG4gICAgPC9saT5cclxuXHJcbiAgICAke21ha2VUYWIoXCJhbnN3ZXIucHlcIil9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fZXZhbC5weScpXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGFydGluZyBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkluc3RydWN0b3IgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IERFTEVUQUJMRV9TSU1QTEVfRklMRVMgPSBbXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5ERUxFVEFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5SRU5BTUFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCIsIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiF0YWdzLmJsb2NrcHlcIiwgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIl07XHJcblxyXG5jbGFzcyBCbG9ja1B5RmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHtcImZpbGVuYW1lXCI6IGtvLm9ic2VydmFibGUoZmlsZW5hbWUpLCBjb250ZW50czoga28ub2JzZXJ2YWJsZShjb250ZW50cyB8fCBcIlwiKX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29uY2F0ZW5hdGVkRmlsZShjb25jYXRlbmF0ZWRGaWxlLCBtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICBpZiAoY29uY2F0ZW5hdGVkRmlsZSkge1xyXG4gICAgICAgIGxldCBmaWxlcyA9IEpTT04ucGFyc2UoY29uY2F0ZW5hdGVkRmlsZSk7XHJcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KGZpbGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wV2F0Y2hpbmdGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoTW9kZWwoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzeXN0ZW0gPSB0aGlzO1xyXG4gICAgICAgIFt0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzXS5mb3JFYWNoKGZpbGVBcnJheSA9PlxyXG4gICAgICAgICAgICBmaWxlQXJyYXkuc3Vic2NyaWJlKGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsRmlsZSA9IGNoYW5nZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJhZGRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWNrIG5ldyBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXN5c3RlbS5uZXdGaWxlKG1vZGVsRmlsZS5maWxlbmFtZSgpLCBtb2RlbEZpbGUuY29udGVudHMoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5ub3RpZnlXYXRjaGVzKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8obW9kZWxGaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcywgXCJhcnJheUNoYW5nZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIHN1Ym1pc3Npb24uY29kZSlcclxuICAgIC8vICFvbl9ydW4ucHksICFvbl9jaGFuZ2UucHksICFvbl9ldmFsLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZWxldmFudCBhc3NpZ25tZW50Ljx3aGF0ZXZlcj5cclxuICAgIC8vIF5zdGFydGluZ19jb2RlLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyBed2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyAhd2hhdGV2ZXIgb3IgP3doYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBlbGVtZW50cyBvZiBhc3NpZ25tZW50LmV4dHJhRmlsZXNcclxuICAgIC8vIE90aGVyd2lzZTpcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIHN1Ym1pc3Npb24uY29kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXcgc3BlY2lhbCBmaWxlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIGZpbGUge0Jsb2NrUHlGaWxlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZUZpbGVfKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKGV4aXN0aW5nRmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUoY29udGVudHMgfHwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0ZpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9ja1B5RmlsZSh0aGlzLm1haW4sIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdID0gbmV3RmlsZTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhuZXdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdGaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZW5hbWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG9iamVjdH0gVGhlIGluZm8gYWJvdXQgdGhlIGZpbGUsIG9yIGZhbHNlIGlmIGl0IGNvdWxkIG5vdCBiZSBkZWxldGVkXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoREVMRVRBQkxFX1NJTVBMRV9GSUxFUy5pbmRleE9mKGZpbGVuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlcnMgYSBjYWxsYmFjayB0byBldmVudHVhbGx5IGNhbGwgZGVsZXRlRmlsZUxvY2FsbHlfXHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lci5yZW1vdmUobW9kZWxGaWxlID0+IG1vZGVsRmlsZS5maWxlbmFtZSA9PT0gZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQgfHwgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay5kZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlXYXRjaGVzKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZS5maWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay51cGRhdGVkKGZpbGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKVwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHBhc3QgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lU3RyaW5nLCAxMCkpO1xuICAgIGlmIChpc1NhbWVEYXkobm93LCBwYXN0KSkge1xuICAgICAgICByZXR1cm4gXCJUb2RheSBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkYXlTdHIgPSB3ZWVrRGF5c1twYXN0LmdldERheSgpXTtcbiAgICAgICAgbGV0IG1vbnRoU3RyID0gbW9udGhOYW1lc1twYXN0LmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheVN0ciArIFwiLCBcIiArIG1vbnRoU3RyICsgXCIgXCIgKyBwYXN0LmdldERhdGUoKTtcbiAgICAgICAgaWYgKG5vdy5nZXRGdWxsWWVhcigpID09PSBwYXN0LmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIsIFwiK3Bhc3QuZ2V0RnVsbFllYXIoKSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBPcGVucyB0aGUgaGlzdG9yeSBkaWFsb2cgYm94LiBUaGlzIHJlcXVpcmVzIGEgdHJpcCB0byB0aGUgc2VydmVyIGFuZFxuICogb2NjdXJzIGFzeW5jaHJvbm91c2x5LiBUaGUgdXNlcnMnIGNvZGUgaXMgc2hvd24gaW4gcHJlZm9ybWF0dGVkIHRleHRcbiAqIHRhZ3MgKG5vIGNvZGUgaGlnaGxpZ2h0aW5nIGN1cnJlbnRseSkgYWxvbmcgd2l0aCB0aGUgdGltZXN0YW1wLlxuICovXG5CbG9ja1B5SGlzdG9yeS5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWFsb2cgPSB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2c7XG4gICAgdmFyIGJvZHkgPSBcIjxwcmU+YSA9IDA8L3ByZT5cIjtcbiAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuZ2V0SGlzdG9yeShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBib2R5ID0gZGF0YS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChjb21wbGV0ZSwgZWxlbSkgeyBcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZV9zdHIgPSBwcmV0dHlQcmludERhdGVUaW1lKGVsZW0udGltZSk7XG4gICAgICAgICAgICB2YXIgbmV3X2xpbmUgPSBcIjxiPlwiK2NvbXBsZXRlX3N0citcIjwvYj48YnI+PHByZT5cIitlbGVtLmNvZGUrXCI8L3ByZT5cIjtcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZStcIlxcblwiK25ld19saW5lO1xuICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgZGlhbG9nLnNob3coXCJXb3JrIEhpc3RvcnlcIiwgYm9keSwgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSk7XG59OyIsImltcG9ydCB7VFJBQ0VfSFRNTH0gZnJvbSBcInRyYWNlLmpzXCI7XG5pbXBvcnQge0RJQUxPR19IVE1MfSBmcm9tIFwiZGlhbG9nLmpzXCI7XG5pbXBvcnQge0ZFRURCQUNLX0hUTUx9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xuaW1wb3J0IHtGSUxFU19IVE1MfSBmcm9tIFwiZmlsZXMuanNcIjtcbmltcG9ydCB7Rk9PVEVSX0hUTUx9IGZyb20gXCJmb290ZXIuanNcIjtcbmltcG9ydCB7RURJVE9SU19IVE1MfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xuaW1wb3J0IHtDT05TT0xFX0hUTUx9IGZyb20gXCJjb25zb2xlLmpzXCI7XG5cbi8qKlxuICogQGVudW0ge3N0cn1cbiAqL1xuZXhwb3J0IGxldCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMgPSB7XG4gICAgRkVFREJBQ0s6IFwiZmVlZGJhY2tcIixcbiAgICBUUkFDRTogXCJ0cmFjZVwiLFxuICAgIE5PTkU6IFwibm9uZVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCkge1xuICAgIGxldCBoaWdobGlnaHRUaW1lb3V0ID0gbnVsbDtcbiAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuY3VycmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0VGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdGlvbnMgcHJlIGNvZGVcIikubWFwKCAoaSwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn1cblxuLy8gVE9ETzogR2V0IHNoYXJlYWJsZSBsaW5rIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludGVyZmFjZShtYWluKSB7XG4gICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2Jsb2NrcHktY29udGVudCBjb250YWluZXItZmx1aWQnPlxuXG4gICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgR2V0IHNoYXJlYWJsZSBsaW5rPC9idXR0b24+XG4gICAgICAgICAgICA8IS0tIFZpZXcgYXMgaW5zdHJ1Y3RvciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkucm9sZS5pc0dyYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogZGlzcGxheS5pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFzIGluc3RydWN0b3JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFTdHVkZW50RmlsZXMuYmxvY2tweVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdGFydGluZ0ZpbGVzLCBcIiNleHRyYVN0YXJ0aW5nRmlsZXMuYmxvY2tweVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFJbnN0cnVjdG9yRmlsZXMsIFwiI2V4dHJhSW5zdHJ1Y3RvckZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1pY3Jvc2Vjb25kcyA9IG5vdy5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuaWQoKSxcbiAgICAgICAgXCJhc3NpZ25tZW50X2dyb3VwX2lkXCI6IHVzZXIuZ3JvdXBJZCgpLFxuICAgICAgICBcImNvdXJzZV9pZFwiOiB1c2VyLmNvdXJzZUlkKCksXG4gICAgICAgIFwic3VibWlzc2lvbl9pZFwiOiBzdWJtaXNzaW9uLmlkKCksXG4gICAgICAgIFwidXNlcl9pZFwiOiB1c2VyLmlkKCksXG4gICAgICAgIFwidmVyc2lvblwiOiBhc3NpZ25tZW50LnZlcnNpb24oKSxcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogbWljcm9zZWNvbmRzLFxuICAgICAgICBcInRpbWV6b25lXCI6IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5cIl0gPSBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBkYXRhW1wicmV2aWV3ZWRcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKCk7XG4gICAgICAgIGRhdGFbXCJwdWJsaWNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnB1YmxpYygpO1xuICAgICAgICBkYXRhW1widXJsXCJdID0gbW9kZWwuYXNzaWdubWVudC51cmwoKTtcbiAgICAgICAgZGF0YVtcImlwX3Jhbmdlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgZGF0YVtcInNldHRpbmdzXCJdID0gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCk7XG5cbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwic2F2ZUFzc2lnbm1lbnRcIiwgZGF0YSwgMywgKCkgPT4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBsb2FkIGZpbGVzIGFuZCB3ZWIgcmVzb3VyY2VzLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbk92ZXJyaWRlICYmIGNvcnJlY3QgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2suYWJzdHIub2JqZWN0U2V0SXRlbShuZXdEaWN0LCBTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQoa2V5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJGxvYy5nZXRfbmFtZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9uYW1lc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICRsb2MuZ2V0X3ZhbHVlc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3ZhbHVlc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5tb2R1bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbW9kLnN0dWRlbnQgPSBTay5taXNjZXZhbC5jYWxsc2ltT3JTdXNwZW5kKG1vZC5TdHVkZW50RGF0YSk7XG4gICAgXG4gICAgbW9kLmdldF9zdHVkZW50X2RhdGEgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZGF0YVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbW9kLnN0dWRlbnQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCJsZXQgTE9DQUxfU1RPUkFHRV9SRUY7XG50cnkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0gbG9jYWxTdG9yYWdlO1xuICAgIGxldCBtb2QgPSBcIkJMT0NLUFlfTE9DQUxTVE9SQUdFX1RFU1RcIjtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKG1vZCwgbW9kKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKG1vZCk7XG59IGNhdGNoKGUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IHtcbiAgICAgICAgX2RhdGEgICAgICAgOiB7fSxcbiAgICAgICAgc2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCwgdmFsKSB7IHJldHVybiB0aGlzLl9kYXRhW2lkXSA9IFN0cmluZyh2YWwpOyB9LFxuICAgICAgICBnZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGlkKSA/IHRoaXMuX2RhdGFbaWRdIDogdW5kZWZpbmVkOyB9LFxuICAgICAgICByZW1vdmVJdGVtICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBkZWxldGUgdGhpcy5fZGF0YVtpZF07IH0sXG4gICAgICAgIGNsZWFyICAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kYXRhID0ge307IH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlN0ZXA6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLyA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6IC8vJHJvb3Qudmlld0V4YWN0VmFsdWUodHlwZSwgZXhhY3RfdmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvdyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBcclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tQeVRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeVRyYWNlLnBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0ge1wibmFtZVwiOiBwcm9wZXJ0eSwgXCJ0eXBlXCI6IFwiVW5rbm93blwiLCBcInZhbHVlXCI6IHZhbHVlLnRvU3RyaW5nKCl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bGxMZW5ndGgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsTGVuZ3RoIHx8IHZhbHVlLnYubGVuZ3RoIDw9IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IHZpZXdFeGFjdFZhbHVlIiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogVHVybnMgc3BhY2VzIGludG8gdW5kZXJzY29yZXMgaW4gdGhlIHN0cmluZywgbWFrZXMgaXQgbG93ZXJjYXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gW2BtaW5gLCBgbWF4YF0uXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIGludGVnZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgaW50ZWdlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHNvbWUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzYWZlbHkgd3JpdHRlbiBpbnRvIGFuIEhUTUwgYm94LlxuICogVGhpcyBpbmNsdWRlcyByZXBsYWNpbmcgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgKCYsIDwsID4sIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgdGV4dCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBIVE1MLXNhZmUgdGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLycvZywgXCImYXBvcztcIik7XG59XG5cbi8qKlxuICogU2h1ZmZsZSB0aGUgYmxvY2tzIGluIHRoZSB3b3Jrc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBCbG9ja2x5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQmxvY2tseS5Xb3Jrc3BhY2VTdmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1ldHJpY3MgPSB0aGlzLmdldE1ldHJpY3MoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gbWV0cmljcy52aWV3V2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy52aWV3SGVpZ2h0O1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5nZXRUb3BCbG9ja3MoZmFsc2UpO1xuICAgICAgICB2YXIgeSA9IDUsIHggPSAwLFxuICAgICAgICAgICAgbWF4aW1hbF9pbmNyZWFzZSA9IGhlaWdodC9ibG9ja3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBHZXQgYSBibG9ja1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBibG9jay5nZXRSZWxhdGl2ZVRvU3VyZmFjZVhZKCk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAtcHJvcGVydGllcy54K3JhbmRvbUludGVnZXIoMTAsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLm1vdmVCeSh4LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAtcHJvcGVydGllcy55K3kpO1xuICAgICAgICAgICAgeSA9IHkgKyByYW5kb21JbnRlZ2VyKDUsIG1heGltYWxfaW5jcmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIgYmFzZWQgb24gYSBjb25kaXRpb25hbCBjaGVjay5cbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxODg3OTY3L2phdmFzY3JpcHQtbW92ZS1vYmplY3RzLWZyb20tb25lLWFycmF5LXRvLWFub3RoZXItYmVzdC1hcHByb2FjaFxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoc291cmNlLCB0YXJnZXQsIG1vdmVDaGVjaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlW2ldO1xuICAgICAgICBpZiAobW92ZUNoZWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIG9iamVjdHNcbiAqIFRPRE86IG1ha2UgdGhpcyBzbyB3ZSBkb24ndCBoYXZlIHRvIGV4cGxpY2l0bHkgcHV0IG91dCBldmVyeSBvcHRpb25cbiAqICAgICAgICAgIG9uZSBwb3NzaWJsZSB0aGluZyB3ZSBjb3VsZCBkbyBpcyBnZXQgYSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgXG4gKiAgICAgICAgICBvZiB0aGUgY29uc3RydWN0b3IgYW5kIGxvb2sgZm9yIHRoZSBzdWJzdHJpbmcgXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIlxuICogICAgICAgICAgQnV0IEkgZG9uJ3Qga25vdyBob3cgcmVsaWFibGUgdGhhdCBpcy4gIFJhdGhlciwgaXQncyBraW5kIG9mIGhhY2tpc2guXG4gKiAgICAgICAgICBTaG91bGQgdGVob3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBleGFtaW5lZFxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiB0eXBlc1xuKiovXG5mdW5jdGlvbiBpc1NrQnVpbHRpbihvYmope1xuICAgIHJldHVybiAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5kaWN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5saXN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi50dXBsZSkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uYm9vbCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uaW50XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZmxvYXRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5zdHIpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxuZyk7XG4gICAgLy92YXIgY29uc19zdHIgPSBvYmouY29uc3RydWN0b3IgKyBcIlwiO1xuICAgIC8vcmV0dXJuIGNvbnNfc3RyLmluZGV4T2YoXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FzdE5vZGUob2JqKXtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIFwiX2FzdG5hbWVcIiBpbiBvYmo7XG59XG5cbi8qKlxuICogU2hvdWxkIHRoZW9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaSwgYnV0IEkgcHV0IGl0IGhlcmUgaW5zdGVhZCB0byBub3QgbWVzcyB1cCB0aGUgc2t1bHB0IGZpbGVzXG4gKiBsaWtlIHRoZSBub3JtYWwgU2suZmZpLnJlbWFwVG9QeSwgaXQgZG9lc24ndCB3b3JrIGZvciBmdW5jdGlvbnMgb3IgbW9yZSBjb21wbGV4IG9iamVjdHMsIGJ1dCBpdCBoYW5kbGVzXG4gKiBjYXNlcyB3aGVyZSB0aGUgdHlwZXMgaW4gb2JqIGFyZSBhIG1peCBvZiBweXRob24gU0lNUExFIG9iamVjdHMgYW5kIFNJTVBMRSBub3JtYWwgamF2YXNjcmlwdCBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWRcbiAqIEByZXR1cm4ge1NrLmJ1aWx0aW4uPz8/fSAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHl0aG9uIG9iamVjdCwgZHJvcHBpbmcgYWxsIGZ1bmN0aW9ucyBhbmQgdGhpbmdzIGl0IGNhbid0IGNvbnZlcnRcbioqL1xuZnVuY3Rpb24gbWl4ZWRSZW1hcFRvUHkob2JqKXtcbiAgICB2YXIgaztcbiAgICB2YXIga3ZzO1xuICAgIHZhciBpO1xuICAgIHZhciBhcnI7XG4gICAgLy9AVE9ETzogc2hvdWxkIHRoZW9yZXRpY2FsbHkgY2hlY2sgaWYgdGhlIG9iamVjdCBpcyBhIHB5aG9uIGRpY3Qgb3IgYXJyYXkgd2l0aCBqcyBvYmplY3RzXG4gICAgaWYgKGlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAvL29iamVjdCBpcyBhbHJlYWR5IHB5dGhvbiByZWFkeVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIikge1xuICAgICAgICAvL29iamVjdCBpcyBhY3R1YWxseSBhIGphdmFzY3JpcHQgYXJyYXlcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIC8vZm9yIGVhY2ggb2JqZWN0LCBjb252ZXJ0IGl0IHRvIGEgcHl0aG9uIG9iamVjdCBpZiBpdCBpc24ndCBvbmUgYWxyZWFkeVxuICAgICAgICAgICAgdmFyIHN1YnZhbCA9IG9ialtpXTtcbiAgICAgICAgICAgIGlmKCFpc1NrQnVpbHRpbihzdWJ2YWwpKXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChtaXhlZFJlbWFwVG9QeShzdWJ2YWwpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1YnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoYXJyKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkgey8vbnVsbCBvYmplY3RcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYoIWlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAgICAgLy9hc3N1bWluZyBpdCdzIGEgc3RhbmRhcmQgZGljdGlvbmFyeVxuICAgICAgICAgICAga3ZzID0gW107Ly9Tay5idWlsdGluLmRpY3QgdXNlcyBhbiBhcnJheSBvZiBrZXktdmFsdWUsa2V5LXZhbHVlLi4uXG4gICAgICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBrZXkgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkoaykpO1xuICAgICAgICAgICAgICAgIC8vY292ZXJ0IGNvcnJlc3BvbmRpbmcgdmFsdWUgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkob2JqW2tdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NyZWF0ZSB0aGUgbmV3IGRpY3Rpb25hcnlcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5kaWN0KGt2cyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLmFzc2skKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uYm9vbChvYmopO1xuICAgIH0gZWxzZSBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmoubmFtZSk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fOyJdLCJzb3VyY2VSb290IjoiIn0=