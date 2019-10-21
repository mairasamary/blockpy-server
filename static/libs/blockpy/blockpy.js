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
          gradingStatus: ko.observable("NotReady"),
          ownerId: ko.observable(null)
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
          triggerOnChange: null,

          /**
           * Whether the current feedback and output corresponds to the current submission.
           * This would be false if there is no feedback/output (i.e., code has not been run),
           * or if the user has modified the submission after the last run (e.g., by editing
           * the text).
           */
          dirtySubmission: ko.observable(true)
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
          saveImage: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          saveImageMessage: ko.observable(""),
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
          updateSubmissionStatus: ko.observable(server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].READY),
          updateSubmissionStatusMessage: ko.observable(""),
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
      this.model.submission.ownerId(submission.user_id);
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
      this.model.display.dirtySubmission(true);
      this.model.display.changedInstructions(null);
      this.model.configuration.serverConnected(wasServerConnected);
      this.components.corgis.loadDatasets(true);
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
        menu: {
          canMarkSubmitted: ko.pureComputed(function () {
            return model.assignment.hidden() || model.assignment.reviewed();
          }),
          textMarkSubmitted: ko.pureComputed(function () {
            if (model.ui.menu.isCompleted()) {
              return "Assignment closed";
            } else if (model.ui.menu.isSubmitted()) {
              return "Reopen for editing";
            } else if (model.display.dirtySubmission()) {
              return "Run";
            } else {
              return "Submit early";
            }
          }),
          clickMarkSubmitted: function clickMarkSubmitted() {
            if (model.ui.menu.isCompleted()) {
              alert("You cannot reopen closed assignments. Contact a grader!");
            } else if (model.ui.menu.isSubmitted()) {
              self.components.server.updateSubmissionStatus("inProgress");
            } else if (model.display.dirtySubmission()) {
              self.components.engine.delayedRun();
            } else {
              self.components.server.updateSubmissionStatus("Submitted");
            }
          },
          isSubmitted: ko.pureComputed(function () {
            return model.assignment.reviewed() && model.submission.submissionStatus().toLowerCase() === "submitted";
          }),
          isCompleted: ko.pureComputed(function () {
            return model.submission.submissionStatus().toLowerCase() === "completed";
          })
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

              case "instructor":
                self.components.fileSystem.newInstructorFile();
                return;

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
          isRunning: ko.pureComputed(function () {
            return model.status.onExecution() === server_js__WEBPACK_IMPORTED_MODULE_6__["StatusState"].ACTIVE;
          }),
          run: function run() {
            return self.components.engine.delayedRun();
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
            return model.status.loadAssignmentMessage() || model.status.saveAssignmentMessage() || model.status.loadHistoryMessage() || model.status.loadFileMessage() || model.status.saveFileMessage() || model.status.loadDatasetMessage() || model.status.logEventMessage() || model.status.saveImage() || model.status.updateSubmissionMessage() || model.status.updateSubmissionStatusMessage() || "";
          }),
          force: {
            updateSubmission: function updateSubmission(data, event) {
              console.log(event);
              self.components.server.updateSubmission(self.model.submission.score(), self.model.submission.correct(), false, true);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).fadeOut(100).fadeIn(100);
            }
          }
        }
      };
      Object(interface_js__WEBPACK_IMPORTED_MODULE_7__["makeExtraInterfaceSubscriptions"])(self, model);
    }
  }, {
    key: "turnOnHacks",
    value: function turnOnHacks() {} //console.log("TODO");

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
    }
  }, {
    key: "finishTurtles",
    value: function finishTurtles() {
      if (this.main.model.assignment.settings.saveTurtleOutput()) {
        var canvas = this.turtleLine.html.find("canvas").last()[0];
        var ctx = canvas.getContext("2d");
        var img = new Image();
        var dataUrl = canvas.toDataURL("image/png");
        this.main.components.server.saveImage("turtle_output", dataUrl);
      }
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
    //console.log("TRIGGERED");
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

      _this2.main.components.pythonEditor.bm.textToBlocks.hiddenImports.push(slug);

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
var DIALOG_HTML = "\n    <div class='blockpy-dialog modal hidden'\n         role=\"dialog\"\n         aria-label='Dialog'\n         aria-hidden=\"true\"\n         aria-modal=\"true\">\n        <div class='modal-dialog modal-lg' role=\"document\">\n            <div class='modal-content' role='region' aria-label='Dialog content'>\n                <div class='modal-header'>\n                    <h4 class='modal-title'>Dynamic Content</h4>\n                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class='modal-body' style='max-width:100%; max-height:400px'>\n                </div>\n                <div class='modal-footer'>\n                    <button type='button' class='btn btn-white model-close' data-dismiss='modal'>Close</button>\n                    <button type='button' class='btn btn-success modal-okay' data-dismiss='modal'>Okay</button>\n                </div>    \n            </div>\n        </div>\n    </div>\n";
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
  var _this = this;

  this.main = main;
  this.tag = tag;
  this.titleTag = tag.find(".modal-title");
  this.bodyTag = tag.find(".modal-body");
  this.footerTag = tag.find(".modal-footer");
  this.okayButton = tag.find(".modal-okay");

  this.yes = function () {};

  this.okayButton.click(function () {
    _this.yes();

    _this.tag.modal("hide");
  });
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
  this.okayButton.hide();
  this.tag.draggable({
    "handle": ".modal-title"
  });
  this.tag.on("hidden.bs.modal", function (e) {
    if (onclose !== undefined && onclose !== null) {
      onclose();
    }
  });
};

BlockPyDialog.prototype.confirm = function (title, body, yes, no, yesText) {
  if (yesText === undefined) {
    yesText = "Okay";
  }

  this.show(title, body, no);
  this.yes = yes;
  this.okayButton.show().html(yesText); // TODO: add okay button and cancel button
};

BlockPyDialog.prototype.ASSIGNMENT_VERSION_CHANGED = function () {
  this.confirm("Assignment Changed", "Your instructor has made changes to this assignment. Would you like to reload? All your work has been saved.");
};

BlockPyDialog.prototype.ERROR_LOADING_ASSIGNMNENT = function () {
  this.show("Error Loading Assignment", "BlockPy encountered an error while loading the assignment.<br>\nPlease reload the page and try again.");
};

BlockPyDialog.prototype.SCREENSHOT_BLOCKS = function () {// TODO
};

BlockPyDialog.prototype.ERROR_UPDATING_SUBMISSION_STATUS = function () {
  this.show("Error Updating Submission Status", "BlockPy encountered an error while updating your submission status.<br>\nPlease reload the page and try again.");
};

BlockPyDialog.prototype.ERROR_LOADING_HISTORY = function () {
  this.show("Error Loading History", "BlockPy encountered an error while loading your history.<br>\nPlease reload the page and try again.");
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



var ASSIGNMENT_SETTINGS = [["toolboxLevel", "toolbox_level", "normal", "toolbox", "INCOMPLETE: What level of toolbox to present to the user (hiding and showing categories)."], ["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT, _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"], "The Python editor mode to start in when the student starts the problem."], ["datasets", "datasets", "", "string", "The current list of datasets available on load as a comma-separated string."], ["disableTimeout", "disable_timeout", false, "bool", "If checked, then students code is allowed to run without timeouts (potentially allowing infinite loops)."], ["isParsons", "is_parsons", false, "bool", "If checked, then this is a parson's style question (jumbled)."], ["disableFeedback", "disable_feedback", false, "bool", "If checked, then no instructor scripts are run (e.g., on_run and on_eval)."], ["disableInstructorRun", "disable_instructor_run", false, "bool", "If checked, then the instructor on_run will not automatically run the students' code. This still runs the students' code."], ["disableStudentRun", "disable_student_run", false, "bool", "If checked, then the run button no longer run the students' code. This still runs the instructor's feedback on_run script."], ["disableTifa", "disable_tifa", false, "bool", "If checked, then do not automatically run Tifa (which can be slow)."], ["disableTrace", "disable_trace", false, "bool", "If checked, then the students code will not have its execution traced (no variables recorded, no coverage tracked)."], ["disableEdit", "can_edit", false, "bool", "If checked, then the students' file will not be editable at all."], ["disableBlocks", "can_blocks", false, "bool", "If checked, then the student cannot edit the block interface (although it is visible)."], ["onlyInteractive", "only_interactive", false, "bool", "If checked, the editors are hidden, the program is automatically run, and then the console enters Eval mode (interactive)."], ["onlyUploads", "only_uploads", false, "bool", "If unchecked, then the students' file will not be directly editable (they will have to upload submissions)."], // What menus/feedback to show and hide
["hideSubmission", "hide_submission", false, "bool", "If checked, then students will not be able to see their submission's code or history on Canvas."], ["hideFiles", "hide_files", true, "bool", "If checked, then students will not see the View Files toolbar."], ["hideQueuedInputs", "hide_queued_inputs", true, "bool", "INCOMPLETE: If unchecked, then the students can access the queued inputs box (makes repeated debugging easier for the input function)."], ["hideEditors", "hide_editors", false, "bool", "If checked, then all of the editors are hidden."], ["hideAll", "hide_all", false, "bool", "INCOMPLETE: If checked, then the entire interface is hidden."], ["hideEvaluate", "hide_evaluate", false, "bool", "If checked, then the Evaluate button is not shown on the console."], ["hideImportDatasetsButton", "hide_import_datasets_button", true, "bool", "If checked, then students cannot see the import datasets button."], // TODO: Fix this one to be settable
["hideImportStatements", "hide_import_statements", false, "bool", "INCOMPLETE: If checked, certain kinds of import statements (matplotlib, turtle, datasets) are not shown in the block interface."], ["hideCoverageButton", "hide_coverage_button", false, "bool", "INCOMPLETE: If checked, the coverage button is not shown."], ["saveTurtleOutput", "save_turtle_output", false, "bool", "If checked, then turtle output is saved whenever the program uses it."]];

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

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run,\n                            css: {'blockpy-run-running': ui.execute.isRunning}\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n            ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n            ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n            ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n         </div>\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\"\n                 data-bind=\"click: ui.editors.reset\">\n                 <span class=\"fas fa-sync\"></span> Reset\n              </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                aria-pressed=\"false\"\n                data-bind=\"click: ui.editors.python.toggleHistoryMode,\n                           enable: ui.editors.python.isHistoryAvailable,\n                           css: { active: display.historyMode },\n                           attr: { 'aria-pressed': display.historyMode }\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n    \n    ").concat(_history__WEBPACK_IMPORTED_MODULE_1__["HISTORY_TOOLBAR_HTML"], "\n\n\n    <div class=\"blockpy-python-blockmirror\"\n        data-bind=\"hidden: ui.menu.isSubmitted\">\n    </div>\n");

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

    _this.makePerAssignmentSubscriptions();

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

      if (newFilename !== "answer.py") {
        if (oldFilename === "answer.py") {
          this.oldPythonMode = this.main.model.display.pythonMode();
        }

        this.main.model.display.pythonMode(DisplayModes.TEXT);
      } else {
        this.main.model.display.pythonMode(this.oldPythonMode);
      }

      this.updateEditor(this.file.handle()); // Subscribe to the relevant File

      this.currentSubscription = this.file.handle.subscribe(this.updateEditor.bind(this)); // Notify relevant file of changes to BM

      this.currentBMListener = this.updateHandle.bind(this);
      this.bm.addChangeListener(this.currentBMListener);

      if (newFilename !== "answer.py") {
        this.bm.isParsons = function () {
          return false;
        };
      } else {
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
    key: "makePerAssignmentSubscriptions",
    value: function makePerAssignmentSubscriptions() {
      var _this5 = this;

      console.log("TEST");
      this.main.model.assignment.settings.onlyUploads.subscribe(function (changed) {
        console.log(changed);

        if (!changed) {
          _this5.setReadOnly(_this5.main.model.display.historyMode());
        } else {
          _this5.setReadOnly(changed);
        }
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
        this.codeMirror.setValue(newContents);
        this.codeMirror.refresh();
        this.dirty = false;
      }
    }
  }, {
    key: "updateHandle",
    value: function updateHandle(event) {
      this.dirty = !this.dirty;

      if (this.dirty) {
        this.dirty = true;
        this.file.handle(this.codeMirror.getValue());
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
      report["model"] = this.main.model;
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
    key: "delayedRun",
    value: function delayedRun() {
      setTimeout(this.run.bind(this), 1);
    }
  }, {
    key: "run",
    value: function run() {
      this.configuration = this.configurations.run.use(this);
      var execution = this.execute().then(this.configuration.success.bind(this.configuration), this.configuration.failure.bind(this.configuration));

      if (!this.main.model.assignment.settings.disableFeedback()) {
        execution.then(this.onRun.bind(this));
      } else {
        execution.then(this.configuration.showErrors.bind(this.configuration));
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
        } else {
          execution.then(_this.configuration.showErrors.bind(_this.configuration));
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
      Sk.configure(this.getSkulptOptions()); // Set openFile as mechanism to read files

      Sk.inBrowser = this.openFile.bind(this);
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
        //fileopen: this.openFile.bind(this),
        // file.write
        filewrite: this.writeFile.bind(this),
        // print
        output: this.print.bind(this),
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

      Sk.afterSingleExecution = null; // 10 *1000
      // Mute everything

      this.main.model.display.mutePrinter(true); // Disable input box

      Sk.queuedInput = []; // TODO Sk.inputfun = BlockPyEngine.inputMockFunction;
      // TODO: Allow input function to disable the timer, somehow
      // Enable utility mode

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = UTILITY_MODULE_CODE;
      Sk.builtinFiles.files["./_instructor/__init__.js"] = _configurations_js__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      return this;
    }
  }, {
    key: "openFile",
    value: function openFile(filename) {
      var instructorFiles = this.main.model.assignment.extraInstructorFiles();

      for (var i = 0; i < instructorFiles.length; i++) {
        if (instructorFiles[i].filename() === "!" + filename) {
          return instructorFiles[i].contents();
        }
      }

      throw new Sk.builtin.OSError("File not found: " + filename);
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
      } else if (filename === "./_instructor/__init__.js") {
        return _configurations_js__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      } else if (filename.startsWith("./_instructor/")) {
        var innerName = filename.slice("./_instructor/".length);
        var instructorFiles = this.main.model.assignment.extraInstructorFiles();

        for (var i = 0; i < instructorFiles.length; i++) {
          if (instructorFiles[i].filename() === "!" + innerName) {
            return instructorFiles[i].contents();
          }
        }

        throw new Sk.builtin.ImportError("File not found: '" + filename + "'");
      } else if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw "File not found: '" + filename + "'";
      }

      return Sk.builtinFiles["files"][filename];
    }
  }, {
    key: "input",
    value: function input(promptMessage) {
      return "ApplePie";
      return Sk.queuedInput.pop();
      /*return new Promise((resolve) => {
          resolve(Sk.queuedInput.pop());
      });*/
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
      var disableTifa = this.main.model.assignment.settings.disableTifa();
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.execution.reports.student.evaluation || "None";
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(_on_run__WEBPACK_IMPORTED_MODULE_2__["NEW_LINE_REGEX"]).length;
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, disableTifa, isSafe);
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

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ", \"answer.py\")\n").concat(tifaAnalysis, "\nfrom pedal.sandbox.sandbox import Sandbox\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = MAIN_REPORT['sandbox']['run'] = Sandbox()\n#student.run(MAIN_REPORT['source']['code'], MAIN_REPORT['source']['filename'], report_exceptions=False)\n#debug(student)\nstudent.report_exceptions_mode = True\nif not get_model_info('assignment.settings.disableInstructorRun'):\n    compatibility.run_student(raise_exceptions=False)\n#log(student.data)\n#student = get_student_data()\n#error, position = get_student_error()\n#compatibility.raise_exception(error, position)\nrun_student = compatibility.run_student\nreset_output = compatibility.reset_output\nqueue_input = compatibility.queue_input\nget_output = compatibility.get_output\nget_plots = compatibility.get_plots\ncompatibility.trace_lines = trace_lines\nfrom pedal import questions\nquestions.show_question = set_instructions\n# TODO: Remove the need for this hack!\ndef capture_output(func, *args):\n   reset_output()\n   student.call(func.__name__, *args)\n   return get_output()\ncompatibility.capture_output = capture_output\n\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n");
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
      var disableTifa = this.main.model.assignment.settings.disableTifa();
      var report = this.main.model.execution.reports;
      var studentCodeSafe = this.main.model.submission.code();
      this.dummyOutSandbox();
      var instructorCode = this.code;
      var lineOffset = instructorCode.split(NEW_LINE_REGEX).length;
      var isSafe = !report["parser"].empty && report["verifier"].success;
      instructorCode = WRAP_INSTRUCTOR_CODE(studentCodeSafe, instructorCode, disableTifa, isSafe);
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
      score = Math.max(0, Math.min(100, score));
      var oldScore = this.main.model.submission.score();
      score = Math.max(oldScore, score);
      this.main.model.submission.score(score); // Hide status

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
      this.main.model.display.dirtySubmission(false);
      this.main.components.console.finishTurtles();
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
  }, {
    key: "showErrors",
    value: function showErrors() {
      var report = this.main.model.execution.reports;

      if (!report["student"].success) {
        this.main.components.feedback.presentRunError(report.student.error);
      }
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
    var _this = this;

    _classCallCheck(this, BlockPyFeedback);

    this.main = main;
    this.tag = tag;
    this.feedbackModel = this.main.model.execution.feedback;
    this.category = this.tag.find(".blockpy-feedback-category");
    this.label = this.tag.find(".blockpy-feedback-label");
    this.message = this.tag.find(".blockpy-feedback-message"); // TODO: If they change the student extra files, also update the dirty flag

    this.main.model.submission.code.subscribe(function () {
      return _this.main.model.display.dirtySubmission(true);
    });
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
      var visibilityBuffer = 100;
      var topOfElement = this.tag.offset().top; //let bottomOfElement = this.tag.offset().top + this.tag.outerHeight();

      var bottomOfElement = topOfElement + visibilityBuffer;
      var bottomOfScreen = $(window).scrollTop() + $(window).height();
      var topOfScreen = $(window).scrollTop(); //bottom_of_element -= 40; // User friendly padding

      return topOfElement < bottomOfScreen && topOfScreen < bottomOfElement;
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
    key: "updateRegularFeedback",
    value: function updateRegularFeedback() {}
    /**
     * Updates the model with these new execution results
     * @param executionResults
     */

  }, {
    key: "updateFeedback",
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
        message = "No errors reported.";
      } // Remap to expected BlockPy labels


      if (category.toLowerCase() === "instructor" && label.toLowerCase() === "explain") {
        label = "Instructor Feedback";
      } // Don't present a lack of error as being incorrect


      if (category === "Instructor" && label === "No errors") {
        category = "no errors";
      } // Update model accordingly


      message = this.main.utilities.markdown(message).replace(/<pre>\n/g, "<pre>\n\n");
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

      this.notifyFeedbackUpdate();
    }
  }, {
    key: "notifyFeedbackUpdate",
    value: function notifyFeedbackUpdate() {
      console.log(this.isFeedbackVisible());

      if (!this.isFeedbackVisible()) {
        this.tag.find(".blockpy-floating-feedback").show().fadeOut(7000);
        this.scrollIntoView();
      }
    }
  }, {
    key: "presentRunError",
    value: function presentRunError(error) {
      var message, label, category, lineno;

      if (error.tp$name === "SyntaxError") {
        category = "syntax";

        var _lineno = Sk.ffi.remapToJs(error.lineno);

        var _label = Sk.ffi.remapToJs(error.msg);

        var source,
            _message = "";

        try {
          source = error.args.v[3][2];

          if (source === undefined) {
            source = "";
          } else {
            source = "<pre>".concat(source, "</pre>");
          }
        } catch (e) {
          source = "";
        }

        if (_label === "bad input") {
          _label = "Bad Input";
          _message = "Bad input on line ".concat(_lineno, ".<br>").concat(source);
        } else if (_label === "EOF in multi-line statement") {
          _label = "EOF in multi-line statement";
          _message = "Unexpected end-of-file in multi-line statement on line ".concat(_lineno, ".<br>").concat(source);
        } else {
          _label = "Syntax Error";
          _message = _label + "<br>" + source;
        }
      } else {
        label = error.tp$name;
        category = "runtime";
        message = this.convertSkulptError(error);
      }

      this.feedbackModel.message(message);
      this.feedbackModel.category(category);
      this.feedbackModel.label(label);
      this.feedbackModel.linesError.removeAll();

      if (lineno !== undefined && lineno !== null) {
        this.feedbackModel.linesError.push(lineno);
      }
    }
  }, {
    key: "convertSkulptError",
    value: function convertSkulptError(error, filenameExecuted) {
      var _this2 = this;

      var name = error.tp$name;
      var args = Sk.ffi.remapToJs(error.args);
      var top = "".concat(name, ": ").concat(args[0], "\n<br>\n<br>");
      var traceback = "";

      if (error.traceback && error.traceback.length) {
        traceback = "Traceback:<br>\n" + error.traceback.map(function (frame) {
          var lineno = frame.lineno;

          if (frame.filename.slice(0, -3) === filenameExecuted) {
            lineno -= _this2.main.model.execution.reports.instructor.lineOffset;
          }

          var file = "File <code class=\"filename\">\"".concat(frame.filename, "\"</code>, ");
          var line = "on line <code class=\"lineno\">".concat(lineno, "</code>, ");
          var scope = frame.scope !== "<module>" && frame.scope !== undefined ? "in scope ".concat(frame.scope) : "";
          var source = "";

          if (frame.source !== undefined) {
            source = "\n<pre><code>".concat(frame.source, "</code></pre>");
          }

          return file + line + scope + source;
        }).join("\n<br>");
        traceback = "".concat(traceback);
      }

      return top + "\n" + traceback;
    }
  }, {
    key: "presentInternalError",
    value: function presentInternalError(error, filenameExecuted) {
      this.main.model.execution.feedback.category("internal");
      this.main.model.execution.feedback.label("Internal Error");
      var message = "Error in instructor feedback. Please show the following to an instructor:<br>\n";
      message += this.convertSkulptError(error, filenameExecuted);
      this.main.model.execution.feedback.message(message);
      this.notifyFeedbackUpdate();
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
/* WEBPACK VAR INJECTION */(function(ko, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILES_HTML", function() { return FILES_HTML; });
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

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py"), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("?mock_urls.blockpy", "URL Data", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n    \n    <!-- ko foreach: assignment.extraInstructorFiles -->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"\n                data-toggle=\"tab\"\n                data-bind=\"css: {active: $root.display.filename() === filename()},\n                            click: $root.display.filename.bind($data, filename()),\n                            text: filename\">\n            </a>        \n        </li>\n    <!-- /ko -->\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval,\n                           click: ui.files.add.bind($data, '!on_eval.py')\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Starting File</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"click: ui.files.add.bind($data, 'instructor')\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
var NEW_INSTRUCTOR_FILE_DIALOG_HTML = "\n<form>\n<div class=\"form-group row\">\n    <!-- Filename -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filename\">Filename:</label>\n    </div>\n    <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control blockpy-instructor-file-dialog-filename\"\n            id=\"blockpy-instructor-file-dialog-filename\">    \n    </div>\n    <!-- Filetype -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filetype\">Filetype: </label>\n    </div>\n    <div class=\"col-sm-10\">\n        <span class=\"blockpy-instructor-file-dialog-filetype\"\n            id=\"blockpy-instructor-file-dialog-filetype\"></span>    \n    </div>\n    <!-- Inaccessible to student? -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filename\">Inaccessible to student: </label>\n    </div>\n    <div class=\"col-sm-1\">\n        <input type=\"checkbox\" class=\"form-control blockpy-instructor-file-dialog-hidden\"\n            id=\"blockpy-instructor-file-dialog-hidden\" checked>\n    </div>\n</div>\n</form>\n";
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
    var modelFiles = [];

    for (var filename in files) {
      if (files.hasOwnProperty(filename)) {
        modelFiles.push(makeModelFile(filename, files[filename]));
      }
    } //files = files.map(file => makeModelFile(file.filename, file.contents));


    modelFileList(modelFiles);
  } else {
    modelFileList([]);
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
  }, {
    key: "newInstructorFile",
    value: function newInstructorFile() {
      var _this2 = this;

      var body = $(NEW_INSTRUCTOR_FILE_DIALOG_HTML);
      var filename = body.find(".blockpy-instructor-file-dialog-filename");
      var filetype = body.find(".blockpy-instructor-file-dialog-filetype");
      var hidden = body.find(".blockpy-instructor-file-dialog-hidden");
      var extensionRegex = /(?:\.([^.]+))?$/;
      filename.on("input", function () {
        var extension = extensionRegex.exec(filename.val())[1];
        extension = extension === undefined ? "No extension" : extension;
        filetype.text(extension);
      });

      var yes = function yes() {
        hidden = hidden.is(":checked") ? "!" : "?";

        if (filename.val()) {
          filename = hidden + filename.val();

          _this2.newFile(filename);
        }
      };

      this.main.components.dialog.confirm("Make New File", body, yes, function () {}, "Add");
    }
  }]);

  return BlockPyFileSystem;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! knockout */ "knockout"), __webpack_require__(/*! jquery */ "jquery")))

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
var FOOTER_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-status\">\n    <div>\n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadAssignment')\">Load Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveAssignment')\">Save Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadFile')\">Load File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveFile')\">Save File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadDataset')\">Load Dataset</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('logEvent')\">Log Event</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('updateSubmission'),\n                                        click: ui.server.force.updateSubmission\">Update Submission</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('onExecution')\">Execution</span>\n    </div>\n    <div\n        <span data-bind=\"text: ui.server.messages\"></span>\n    </div>\n    <div>\n        <span>User: <span data-bind=\"text: user.id\"></span> (<span data-bind=\"text: user.name\"></span>)</span>, \n        <span>Course: <span data-bind=\"text: user.courseId\"></span></span>,\n        <span>Group: <span data-bind=\"text: user.groupId\"></span></span>,\n        <span>Assignment: <span data-bind=\"text: assignment.id\"></span></span>,\n        <span>Assignment Version: <span data-bind=\"text: assignment.version\"></span></span>,\n        <span>Submission: <span data-bind=\"text: submission.id\"></span></span>, \n        <span>Submission Version: <span data-bind=\"text: submission.version\"></span></span>\n    </div>\n</div>\n";

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
  return "\n<div class='blockpy-content container-fluid'>\n\n    <!-- Dialog -->\n    ".concat(dialog_js__WEBPACK_IMPORTED_MODULE_1__["DIALOG_HTML"], "\n    \n    <!-- Hidden Capture Canvas -->\n    <canvas id='capture-canvas' class='d-none' role=\"presentation\" aria-hidden=\"true\"></canvas>\n    \n    <!-- Row 1: Header and Quick Menu -->\n    <div class='row'>\n         \n         <!-- Description -->\n         <div class='col-md-10 blockpy-panel blockpy-header'\n               role='heading' aria-label='Assignment Description'>\n         \n            <!-- Assignment Name -->\n            <span role='heading' aria-level='1'\n                  class=\"blockpy-name\">\n                <strong>BlockPy: </strong> \n                <span data-bind='text: assignment.name'></span>\n            </span>\n            \n            <!-- Reset Instructions Button -->\n            <div class=\"blockpy-instructions-reset\"\n                data-bind=\"visible: ui.instructions.isChanged\">\n                <a class=\"float-right\"\n                    data-bind=\"click: ui.instructions.reset\"\n                    href=\"\">\n                    Reset instructions</a>\n            </div>\n            \n            <!-- Instructions -->\n            <div class='blockpy-instructions'\n                 data-bind=\"html: ui.instructions.current\">\n            </div>\n        </div>\n        \n        <div class='col-md-2 blockpy-panel blockpy-quick-menu'\n             role='menubar' aria-label='Quick Menu' title=\"Quick Menu\">\n            <!-- Get Shareable Link -->\n            <!--<button class=\"btn btn-outline-secondary btn-sm\">\n                Get shareable link</button>-->\n            <span data-bind=\"visible: ui.menu.isSubmitted\">\n                Your submission is ready to be reviewed!</span>\n            <button class=\"btn btn-outline-secondary btn-sm\"\n                data-bind=\"visible: ui.menu.canMarkSubmitted,\n                           text: ui.menu.textMarkSubmitted,\n                           click: ui.menu.clickMarkSubmitted\"></button>\n            <!-- View as instructor -->\n            <div class=\"form-check\"\n                 data-bind=\"visible: ui.role.isGrader\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"blockpy-as-instructor\"\n                    data-bind=\"checked: display.instructor\">\n                <label class=\"form-check-label\" for=\"blockpy-as-instructor\">\n                    View as instructor\n                </label>\n            </div>\n        </div>\n         \n    </div>\n    \n    <!-- Row 2: Console and Feedback -->\n    <div class='row'>\n    \n        <!-- Console -->\n        ").concat(console_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_HTML"], "\n         \n        <!-- Feedback -->\n        <!-- ko if: ui.secondRow.isFeedbackVisible -->\n        ").concat(feedback_js__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_HTML"], "\n        <!-- /ko -->\n        \n        <!-- Trace -->\n        <!-- ko if: ui.secondRow.isTraceVisible -->\n        ").concat(trace_js__WEBPACK_IMPORTED_MODULE_0__["TRACE_HTML"], "\n        <!-- /ko -->\n         \n    </div>\n    \n    <!-- Row 3: File Navigation -->\n    <!-- ko if: ui.files.visible -->\n    <div class='row'>\n        ").concat(files_js__WEBPACK_IMPORTED_MODULE_3__["FILES_HTML"], "\n    </div>\n    <!-- /ko -->\n    \n    <!-- View Row -->\n    <div class=\"row\">\n        ").concat(editors_js__WEBPACK_IMPORTED_MODULE_5__["EDITORS_HTML"], "\n    </div>\n\n    <!-- Footer Row -->    \n    <div class=\"row\">\n        ").concat(footer_js__WEBPACK_IMPORTED_MODULE_4__["FOOTER_HTML"], "\n    </div>\n    \n</div>\n    ");
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
  this.createFileSubscription(model.ui.files.extraStudentFiles, "#extra_student_files.blockpy");
  this.createFileSubscription(model.ui.files.extraStartingFiles, "#extra_starting_files.blockpy");
  this.createFileSubscription(model.ui.files.extraInstructorFiles, "#extra_instructor_files.blockpy");
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

BlockPyServer.prototype.saveImage = function (directory, image) {
  if (this.main.model.ui.server.isEndpointConnected("saveImage")) {
    var data = this.createServerData();
    data["directory"] = directory;
    data["image"] = image;
    this.setStatus("saveImage", StatusState.ACTIVE); // Trigger request

    this._postLatestRetry(data, "turtle_output", "saveImage", 0);
  } else {
    this.setStatus("saveImage", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.updateSubmissionStatus = function (newStatus) {
  var _this9 = this;

  if (this.main.model.ui.server.isEndpointConnected("updateSubmissionStatus")) {
    var data = this.createServerData();
    data["status"] = newStatus;

    var postStatusChange = function postStatusChange(data) {
      if (data.success) {
        _this9.main.model.submission.submissionStatus(newStatus);
      }
    };

    this._postBlocking("updateSubmissionStatus", data, 2, postStatusChange, function (e, textStatus, errorThrown) {
      _this9.main.components.dialog.ERROR_UPDATING_SUBMISSION_STATUS();

      console.error(e, textStatus, errorThrown);
    });
  }
};
/**
 * This function can be used to load files and web resources.
 *
 * DEPRECATED
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
  var _this10 = this;

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

      _this10._postRetry(data, "updateSubmission", 0, function (response) {
        if (response.success) {
          _this10.setStatus("updateSubmission", StatusState.READY);
        } else {
          _this10.setStatus("updateSubmission", StatusState.FAILED, response.message);
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
      var _input = args[i];
      Sk.builtin.pyCheckType("input", "string", Sk.builtin.checkString(_input));
      Sk.queuedInput.push(Sk.ffi.remapToJs(_input));
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

    var call_f = function call_f(kwa) {
      Sk.builtin.pyCheckArgsLen("call", arguments.length, 1, Infinity, true, true);
      var args = Array.prototype.slice.call(arguments, 1);
      var kwargs = new Sk.builtins.dict(kwa);
      var self = args[0];
      var functionName = args[1];
      args = args.slice(2);
      var inputs = kwargs.mp$lookup(new Sk.builtin.str("inputs"));

      if (inputs !== undefined) {
        inputs = Sk.ffi.remapToJs(inputs);

        if (inputs.constructor === Array) {
          inputs.forEach(function (item) {
            Sk.queuedInput.push(item);
          });
        } else {
          Sk.queuedInput.push(input);
        }
      }

      var data = self.tp$getattr(new Sk.builtin.str("data"));
      var functionObject = data.mp$lookup(functionName);
      var result = functionObject.tp$call(args);
      return result;
    };

    call_f.co_kwargs = true; //call_f.co_varnames = ["self", "function"];

    call_f.co_name = new Sk.builtin.str("call");
    $loc["call_$rn$"] = new Sk.builtin.func(call_f);
    $loc["__repr__"] = new Sk.builtin.func(function (self) {
      return new Sk.builtin.str("");
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
  }, "StudentData");
  mod.student = Sk.misceval.callsimOrSuspend(mod.StudentData);
  mod.get_student_data = new Sk.builtin.func(function () {
    Sk.builtin.pyCheckArgs("get_student_data", arguments, 0, 0);
    return mod.student;
  });
  mod.set_instructions = new Sk.builtin.func(function (newInstructions) {
    Sk.builtin.pyCheckArgs("set_instructions", arguments, 1, 2);
    newInstructions = Sk.ffi.remapToJs(newInstructions);
    Sk.executionReports["model"].display.changedInstructions(newInstructions);
  });
  mod.get_model_info = new Sk.builtin.func(function (keys) {
    Sk.builtin.pyCheckArgs("get_model_info", arguments, 1, 1);
    var model = Sk.executionReports["model"];
    keys = Sk.ffi.remapToJs(keys).split(".");

    for (var i = 0; i < keys.length; i++) {
      model = model[keys[i]];
    }

    return Sk.ffi.remapToPy(model());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwiZGlydHlTdWJtaXNzaW9uIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlSW1hZ2UiLCJzYXZlSW1hZ2VNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsInVzZXJfaWQiLCJjb3Vyc2VfaWQiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX2ZpbGVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldEludGVyZmFjZSIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwiaXBfcmFuZ2VzIiwib25fY2hhbmdlIiwiZmlsZVN5c3RlbSIsIm5ld0ZpbGUiLCJvbl9ldmFsIiwib25fcnVuIiwic3RhcnRpbmdfY29kZSIsIm93bmVyX2lkIiwibG9hZEFzc2lnbm1lbnRTZXR0aW5ncyIsImxvYWRUYWdzIiwibG9hZFNhbXBsZVN1Ym1pc3Npb25zIiwic2FtcGxlX3N1Ym1pc3Npb25zIiwiZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcyIsImV4dHJhX3N0YXJ0aW5nX2ZpbGVzIiwibG9hZFN1Ym1pc3Npb24iLCJjb3JnaXMiLCJsb2FkRGF0YXNldHMiLCJzZXRTdGF0dXMiLCJzZWxmIiwidWkiLCJpc0dyYWRlciIsInB1cmVDb21wdXRlZCIsImlzQ2hhbmdlZCIsImN1cnJlbnQiLCJ1dGlsaXRpZXMiLCJtYXJrZG93biIsInJlc2V0IiwibWVudSIsImNhbk1hcmtTdWJtaXR0ZWQiLCJ0ZXh0TWFya1N1Ym1pdHRlZCIsImlzQ29tcGxldGVkIiwiaXNTdWJtaXR0ZWQiLCJjbGlja01hcmtTdWJtaXR0ZWQiLCJhbGVydCIsImVuZ2luZSIsImRlbGF5ZWRSdW4iLCJ0b0xvd2VyQ2FzZSIsInNlY29uZFJvdyIsImlzRmVlZGJhY2tWaXNpYmxlIiwiaXNUcmFjZVZpc2libGUiLCJUUkFDRSIsImlzQ29uc29sZVNob3dWaXNpYmxlIiwic3dpdGNoTGFiZWwiLCJhZHZhbmNlU3RhdGUiLCJjdXJyZW50UGFuZWwiLCJOT05FIiwic2l6ZSIsImhpZGVFdmFsdWF0ZSIsIkFDVElWRSIsImJhZGdlIiwidHJhY2UiLCJsaW5lIiwic3RlcCIsInRyYWNlRGF0YSIsImZpcnN0IiwiYmFja3dhcmQiLCJwcmV2aW91cyIsIk1hdGgiLCJtYXgiLCJmb3J3YXJkIiwibmV4dCIsIm1pbiIsImxhc3QiLCJmaWxlcyIsInZpc2libGUiLCJoaWRlRmlsZXMiLCJoYXNDb250ZW50cyIsInBhdGgiLCJzb21lIiwiZmlsZSIsImxlbmd0aCIsImFkZCIsIm5ld0luc3RydWN0b3JGaWxlIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJ1cGRhdGVNb2RlIiwibmV3TW9kZSIsIm9sZFB5dGhvbk1vZGUiLCJpc0hpc3RvcnlBdmFpbGFibGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwidHVybk9mZkhpc3RvcnlNb2RlIiwidXBkYXRlRWRpdG9yIiwic2V0UmVhZE9ubHkiLCJ0dXJuT25IaXN0b3J5TW9kZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhpc3RvcnkiLCJsb2FkIiwiZGlhbG9nIiwiRVJST1JfTE9BRElOR19ISVNUT1JZIiwidG9nZ2xlSGlzdG9yeU1vZGUiLCJtb3ZlVG9TdGFydCIsIm1vdmVQcmV2aW91cyIsIm1vdmVOZXh0IiwibW9zdFJlY2VudCIsIm1vdmVUb01vc3RSZWNlbnQiLCJ1c2UiLCJzYXZlIiwiZXhlY3V0ZSIsImlzUnVubmluZyIsInJ1biIsImV2YWx1YXRlIiwibWVzc2FnZXMiLCJmb3JjZSIsImV2ZW50IiwidGFyZ2V0IiwiZmFkZU91dCIsImZhZGVJbiIsIm1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMiLCJhcHBseUJpbmRpbmdzIiwibWFpbiIsInRleHQiLCJFYXN5TURFIiwicHJvdG90eXBlIiwiQmxvY2tQeURpYWxvZyIsImZpbmQiLCJCbG9ja1B5RmVlZGJhY2siLCJCbG9ja1B5VHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlFbmdpbmUiLCJCbG9ja1B5RmlsZVN5c3RlbSIsIkVkaXRvcnMiLCJieU5hbWUiLCJCbG9ja1B5U2VydmVyIiwiQmxvY2tQeUNvcmdpcyIsIkJsb2NrUHlIaXN0b3J5IiwiU1RBUlRfRVZBTF9IVE1MIiwiQ09OU09MRV9IVE1MIiwiTkVXX0NPTlNPTEVfTElORV9IVE1MIiwiQ29uc29sZUxpbmVUeXBlIiwiVEVYVCIsIkhUTUwiLCJQTE9UIiwiSU1BR0UiLCJUVVJUTEUiLCJFVkFMIiwiU1RBUlRfRVZBTCIsIlZBTFVFIiwiSU5QVVQiLCJURVNUX0NBU0UiLCJDb25zb2xlTGluZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJTayIsImN1cnJGaWxlbmFtZSIsImV4ZWN1dGlvbkJ1ZmZlciIsImluZGV4IiwiZmZpIiwicmVtYXBUb1B5IiwicmVtb3ZlIiwiQ29uc29sZUxpbmVUdXJ0bGUiLCJhZGRDbGFzcyIsIndoZXJlIiwicHJlcGVuZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb25zb2xlTGluZUltYWdlIiwiYXBwZW5kIiwiQ29uc29sZUxpbmVQbG90IiwiQ29uc29sZUxpbmVUZXh0IiwiZW5jb2RlZFRleHQiLCJlbmNvZGVIVE1MIiwibGluZURhdGEiLCJ0b29sdGlwIiwiQ29uc29sZUxpbmVWYWx1ZSIsIkNvbnNvbGVMaW5lSW5wdXQiLCJwcm9tcHRNZXNzYWdlIiwiaW5wdXRGb3JtIiwiaW5wdXRCdG4iLCJpbnB1dEdyb3VwIiwiaW5wdXRCb3giLCJpbnB1dE1zZyIsIm1ha2VJbnRlcmFjdGl2ZSIsImlucHV0IiwiYnV0dG9uIiwicmVzb2x2ZU9uQ2xpY2siLCJzdWJtaXR0ZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdWJtaXRGb3JtIiwidmFsIiwicHJvcCIsImNsaWNrIiwia2V5dXAiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwiQ29uc29sZUxpbmVFdmFsdWF0ZSIsIkNvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSIsInRhZyIsInByaW50ZXJUYWciLCJNSU5JTVVNX1dJRFRIIiwiTUlOSU1VTV9IRUlHSFQiLCJERUZBVUxUX0hFSUdIVCIsImhlaWdodCIsImNsZWFyIiwicmVtb3ZlQWxsIiwibGluZUJ1ZmZlciIsInBsb3RCdWZmZXIiLCJlbXB0eSIsInR1cnRsZUxpbmUiLCJUdXJ0bGVHcmFwaGljcyIsImdldFR1cnRsZUxpbmUiLCJ3aWR0aCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYXNzZXRzIiwibG9hZEFzc2V0IiwicmVuZGVyIiwiY3VycmVudFByaW50ZXJEaW1lbnNpb24iLCJzYXZlVHVydGxlT3V0cHV0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsInBhZ2UiLCJlYWNoIiwiYXR0ciIsInNob3ciLCJoaWRlIiwibGluZVRleHQiLCJmbHVzaCIsImNoYXJBdCIsInNwbGl0TGluZXMiLCJzcGxpdCIsImFkZENvbnRlbnQiLCJpIiwicHVzaCIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJ0ZXh0VG9CbG9ja3MiLCJoaWRkZW5JbXBvcnRzIiwiZ2V0SlNPTiIsImJsb2NrcHkiLCJkb2N1bWVudGF0aW9uIiwiYm9keSIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwic2x1Z2dlZE5hbWUiLCJ0aXRsZU5hbWUiLCJpbWdTcmMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiYXBwZW5kVG8iLCJESUFMT0dfSFRNTCIsInRpdGxlVGFnIiwiYm9keVRhZyIsImZvb3RlclRhZyIsIm9rYXlCdXR0b24iLCJ5ZXMiLCJtb2RhbCIsIm9uY2xvc2UiLCJkcmFnZ2FibGUiLCJvbiIsImNvbmZpcm0iLCJubyIsInllc1RleHQiLCJBU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCIsIkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQiLCJTQ1JFRU5TSE9UX0JMT0NLUyIsIkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlTmFtZSIsInJlYWRBc1RleHQiLCJzbHVnZ2lmeSIsInJlcGxhY2UiLCJleHRlbnNpb24iLCJtaW1ldHlwZSIsImJsb2IiLCJCbG9iIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsIm1zU2F2ZUJsb2IiLCJ0ZW1wb3JhcnlEb3dubG9hZExpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsIkFic3RyYWN0RWRpdG9yIiwiY2hhbmdlRWRpdG9yIiwid2F0Y2hGaWxlIiwidXBkYXRlZCIsIm9uRmlsZVVwZGF0ZWQiLCJkZWxldGVkIiwib25GaWxlRGVsZXRlZCIsIm5ld0ZpbGVuYW1lIiwib2xkRWRpdG9yIiwiZ2V0RmlsZSIsInRyYWNrQ3VycmVudEZpbGUiLCJuZXdFZGl0b3IiLCJzdG9wV2F0Y2hpbmdGaWxlIiwicmVzdWx0IiwiaGFuZGxlIiwicGFyc2VGaWxlbmFtZSIsIkFTU0lHTk1FTlRfU0VUVElOR1MiLCJnZXREb2N1bWVudGF0aW9uIiwibWFrZVN0YXJ0Vmlld1RhYiIsImljb24iLCJtb2RlIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTCIsImZpbHRlciIsInNldHRpbmciLCJwcmV0dHlOYW1lIiwid29yZCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCIsIkJMT0NLIiwic2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyIsImNsaWVudE5hbWUiLCJzZXJ2ZXJOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwic3RhcnRfdmlldyIsIkFzc2lnbm1lbnRTZXR0aW5nc1ZpZXciLCJkaXJ0eSIsImN1cnJlbnRMaXN0ZW5lciIsInVwZGF0ZUhhbmRsZSIsIm5ld0NvbnRlbnRzIiwiQXNzaWdubWVudFNldHRpbmdzIiwiZXh0ZW5zaW9ucyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJNQVJLRE9XTl9FRElUT1JfSFRNTCIsIk1hcmtkb3duRWRpdG9yVmlldyIsIm1kZSIsImVsZW1lbnQiLCJhdXRvRG93bmxvYWRGb250QXdlc29tZSIsImZvcmNlU3luYyIsIm1pbkhlaWdodCIsInJlbmRlcmluZ0NvbmZpZyIsImNvZGVTeW50YXhIaWdobGlnaHRpbmciLCJpbmRlbnRXaXRoVGFicyIsInRhYlNpemUiLCJjdXJyZW50U3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwiY29kZW1pcnJvciIsInNldFRpbWVvdXQiLCJyZWZyZXNoIiwiZGlzcG9zZSIsIm9mZiIsIk1hcmtkb3duRWRpdG9yIiwibWFrZVRhYiIsIlBZVEhPTl9FRElUT1JfSFRNTCIsIkhJU1RPUllfVE9PTEJBUl9IVE1MIiwiY29udmVydElweW5iVG9QeXRob24iLCJpcHluYiIsImlzVXNhYmxlIiwiY2VsbCIsImNlbGxfdHlwZSIsInNvdXJjZSIsInN0YXJ0c1dpdGgiLCJtYWtlUHl0aG9uIiwiY2VsbHMiLCJQeXRob25FZGl0b3JWaWV3IiwiQmxvY2tNaXJyb3IiLCJyZWFkT25seSIsIm1ha2VTdWJzY3JpcHRpb25zIiwibGluZUVycm9yU3Vic2NyaXB0aW9uIiwibGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiIsIm1ha2VQZXJBc3NpZ25tZW50U3Vic2NyaXB0aW9ucyIsIndvcmtzcGFjZSIsImNvbmZpZ3VyZUNvbnRleHRNZW51Iiwib3B0aW9ucyIsImVuYWJsZWQiLCJjYWxsYmFjayIsIm9sZEZpbGVuYW1lIiwiY3VycmVudEJNTGlzdGVuZXIiLCJhZGRDaGFuZ2VMaXN0ZW5lciIsImlzUGFyc29ucyIsImxpbmVzIiwic2V0SGlnaGxpZ2h0ZWRMaW5lcyIsImRlbGV0ZUZpbGVMb2NhbGx5XyIsInNldENvZGUiLCJjbGVhckhpZ2hsaWdodGVkTGluZXMiLCJnZXRDb2RlIiwicmVtb3ZlQ2hhbmdlTGlzdGVuZXIiLCJjbGVhckxpbmVTdWJzY3JpcHRpb25zIiwic2V0TW9kZSIsIm9ubHlVcGxvYWRzIiwiY2hhbmdlZCIsImlzUmVhZE9ubHkiLCJlbmRzV2l0aCIsIlB5dGhvbkVkaXRvciIsIlRBR1NfRURJVE9SX0hUTUwiLCJUYWdzRWRpdG9yVmlldyIsIlRhZ3NFZGl0b3IiLCJURVhUX0VESVRPUl9IVE1MIiwiVGV4dEVkaXRvclZpZXciLCJDb2RlTWlycm9yIiwiZnJvbVRleHRBcmVhIiwic2hvd0N1cnNvcldoZW5TZWxlY3RpbmciLCJsaW5lTnVtYmVycyIsImZpcnN0TGluZU51bWJlciIsImluZGVudFVuaXQiLCJleHRyYUtleXMiLCJjbSIsImJsdXIiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidGhlbiIsImZhaWx1cmUiLCJkaXNhYmxlRmVlZGJhY2siLCJzaG93RXJyb3JzIiwiZXhlY3V0aW9uRW5kXyIsImV2YWx1YXRpb25JbnB1dCIsInVzZXJJbnB1dCIsIm1pc2NldmFsIiwiYXN5bmNUb1Byb21pc2UiLCJpbXBvcnRNYWluV2l0aEJvZHkiLCJGSUxFTkFNRSIsInByb2dyYW1zIiwidHJpbSIsInNhdmVDb2RlIiwidmVyaWZ5Q29kZSIsInVwZGF0ZVBhcnNlIiwicnVuSW5zdHJ1Y3RvckNvZGUiLCJtb2R1bGUiLCJleGVjdXRpb25SZXBvcnRzIiwicHJlc2VudEZlZWRiYWNrIiwiJGQiLCJFTVBUWV9NT0RVTEUiLCJDb25maWd1cmF0aW9uIiwicXVldWVkSW5wdXQiLCJpbkJyb3dzZXIiLCJvcGVuRmlsZSIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxld3JpdGUiLCJ3cml0ZUZpbGUiLCJwcmludCIsImlucHV0ZnVuIiwiaW5wdXRmdW5UYWtlc1Byb21wdCIsImltYWdlUHJveHkiLCJnZXRJbWFnZVByb3h5IiwicmV0YWluR2xvYmFscyIsIndhcm4iLCJFcnJvciIsInBvcCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwicHJpbnRWYWx1ZSIsInJlbWFwVG9KcyIsIl8iLCIkciIsInJlamVjdCIsIngiLCJGQUlMRUQiLCJTdHVkZW50Q29uZmlndXJhdGlvbiIsIlVUSUxJVFlfTU9EVUxFX0NPREUiLCIkc2tfbW9kX2luc3RydWN0b3IiLCJJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdCIsImluc3RydWN0b3JGaWxlcyIsImJ1aWx0aW4iLCJPU0Vycm9yIiwiaW5uZXJOYW1lIiwiSW1wb3J0RXJyb3IiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwiZGlzYWJsZVRpZmEiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiZmluaXNoVHVydGxlcyIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwidmlzaXRlZExpbmVzIiwiU2V0IiwidmlzaXRCb2R5Iiwibm9kZSIsImxpbmVubyIsInN0YXRlbWVudCIsIm9yZWxzZSIsImZpbmFsYm9keSIsIkFycmF5IiwiZnJvbSIsImFzdEZyb21QYXJzZSIsImNzdCIsImZsYWdzIiwiZ2V0TGluZXMiLCJwcmVzZW50UnVuRXJyb3IiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInZpc2liaWxpdHlCdWZmZXIiLCJ0b3BPZkVsZW1lbnQiLCJib3R0b21PZkVsZW1lbnQiLCJib3R0b21PZlNjcmVlbiIsInRvcE9mU2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJ1bmNvdmVyZWRMaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJtc2ciLCJhcmdzIiwidiIsImNvbnZlcnRTa3VscHRFcnJvciIsImZpbGVuYW1lRXhlY3V0ZWQiLCJ0cmFjZWJhY2siLCJmcmFtZSIsInNjb3BlIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIkZJTEVTX0hUTUwiLCJORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJERUxFVEFCTEVfU0lNUExFX0ZJTEVTIiwiQmxvY2tQeUZpbGUiLCJvd25lciIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwibW9kZWxGaWxlcyIsImhhc093blByb3BlcnR5IiwiY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZSIsImZpbGVzXyIsIm1vdW50RmlsZXMiLCJ3YXRjaE1vZGVsIiwid2F0Y2hlc18iLCJmaWxlc3lzdGVtIiwiZmlsZUFycmF5IiwiY2hhbmdlcyIsImNoYW5nZSIsIm1vZGVsRmlsZSIsIm5vdGlmeVdhdGNoZXMiLCJvYnNlcnZlSW5BcnJheV8iLCJhcnJheSIsImNvZGVCdW5kbGUiLCJleGlzdGluZ0ZpbGUiLCJvYnNlcnZlRmlsZV8iLCJmb3VuZCIsImZpbGV0eXBlIiwiZXh0ZW5zaW9uUmVnZXgiLCJleGVjIiwiaXMiLCJGT09URVJfSFRNTCIsImN1cnJlbnRJZCIsImVkaXRFdmVudHMiLCJzZWxlY3RvciIsImVkaXRJZCIsImVudHJ5IiwiZmlsZV9wYXRoIiwiZXZlbnRfdHlwZSIsIlJFTUFQX0VWRU5UX1RZUEVTIiwiZGlzcGxheWVkIiwicHJldHR5UHJpbnREYXRlVGltZSIsImNsaWVudF90aW1lc3RhbXAiLCJkaXNhYmxlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJpc0VkaXRFdmVudCIsImV2dCIsInBhcnNlSW50IiwibW9udGhOYW1lcyIsIndlZWtEYXlzIiwiaXNTYW1lRGF5Iiwic2Vjb25kIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0aW1lU3RyaW5nIiwibm93IiwiRGF0ZSIsInBhc3QiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJkYXlTdHIiLCJnZXREYXkiLCJtb250aFN0ciIsImRhdGUiLCJnZXRIaXN0b3J5IiwicmV2ZXJzZSIsInJlZHVjZSIsImNvbXBsZXRlIiwiZWxlbSIsImNvbXBsZXRlX3N0ciIsInRpbWUiLCJuZXdfbGluZSIsImhpZ2hsaWdodFRpbWVvdXQiLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsIlRSQUNFX0hUTUwiLCJSRVRSWUlORyIsIk9GRkxJTkUiLCJzdG9yYWdlIiwicXVldWUiLCJnZXREZWZhdWx0IiwiTUFYX1FVRVVFX1NJWkUiLCJUSU1FUl9ERUxBWSIsIkZBSUxfREVMQVkiLCJ0aW1lcnMiLCJvdmVybGF5IiwiYmxvY2tpbmdBdHRlbXB0cyIsImNhY2hlZEZpbGVuYW1lcyIsImNyZWF0ZVN1YnNjcmlwdGlvbnMiLCJjaGVja0NhY2hlcyIsImNoZWNrSVAiLCJvbGRJUCIsImlwIiwic2V0IiwiX3Bvc3RMYXRlc3RSZXRyeSIsInB1c2hBbnlRdWV1ZWQiLCJfcG9zdFJldHJ5IiwiY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiIsImNyZWF0ZVNlcnZlckRhdGEiLCJtaWNyb3NlY29uZHMiLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJzaG93T3ZlcmxheSIsImF0dGVtcHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3NzIiwiaGlkZU92ZXJsYXkiLCJfZW5xdWV1ZURhdGEiLCJjYWNoZSIsIl9kZXF1ZXVlRGF0YSIsInNwbGljZSIsImRlbGF5IiwicG9zdFJlcXVlc3QiLCJwb3N0IiwidGV4dFN0YXR1cyIsInJlcXVlc3QiLCJjYWNoZWRUaW1lIiwiX3Bvc3RCbG9ja2luZyIsImF0dGVtcHRzIiwiZXJyb3JUaHJvd24iLCJsb2FkQXNzaWdubWVudERhdGFfIiwiRVJST1JfU0FWSU5HX0FTU0lHTk1ORU5UIiwiZGlyZWN0b3J5IiwibmV3U3RhdHVzIiwicG9zdFN0YXR1c0NoYW5nZSIsImVycm9yQ2FsbGJhY2siLCJsb2FkX2ZpbGUiLCJoaWRkZW5PdmVycmlkZSIsImZvcmNlVXBkYXRlIiwiZ2V0UG5nRnJvbUJsb2NrcyIsInBuZ0RhdGEiLCJtb2QiLCJub25lIiwibm9uZSQiLCJwcmlvciIsInRpbWVpdCIsImZ1bmMiLCJweUNoZWNrQXJncyIsImRpZmZlcmVuY2UiLCJkZWJ1ZyIsImdldF9vdXRwdXQiLCJpdGVtIiwidG9Ta3VscHQiLCJsaXN0IiwicmVzZXRfb3V0cHV0IiwicXVldWVfaW5wdXQiLCJweUNoZWNrVHlwZSIsImNoZWNrU3RyaW5nIiwiZ2V0X3Byb2dyYW0iLCJnZXRfZXZhbHVhdGlvbiIsInRyYWNlX2xpbmVzIiwiZ2V0X3N0dWRlbnRfZXJyb3IiLCJ0dXBsZSIsImhhZF9leGVjdXRpb25fdGltZV9lcnJvciIsImJhY2t1cFRpbWUiLCJsaW1pdF9leGVjdXRpb25fdGltZSIsImV4ZWNTdGFydCIsInVubGltaXRfZXhlY3V0aW9uX3RpbWUiLCJzdXBwcmVzc19zY3JvbGxpbmciLCJnZXRfcGxvdHMiLCJvdXRwdXRzIiwiZ3JhcGgiLCJwbG90IiwibmV3UGxvdCIsInkiLCJTdHVkZW50RGF0YSIsImJ1aWxkQ2xhc3MiLCIkZ2JsIiwiJGxvYyIsIl9faW5pdF9fIiwibmV3RGljdCIsImRpY3QiLCJhYnN0ciIsInNhdHRyIiwic3RyIiwib2JqZWN0U2V0SXRlbSIsInVuZml4UmVzZXJ2ZWQiLCJjYWxsX2YiLCJrd2EiLCJweUNoZWNrQXJnc0xlbiIsImNhbGwiLCJrd2FyZ3MiLCJidWlsdGlucyIsImZ1bmN0aW9uTmFtZSIsImlucHV0cyIsIm1wJGxvb2t1cCIsInRwJGdldGF0dHIiLCJmdW5jdGlvbk9iamVjdCIsInRwJGNhbGwiLCJjb19rd2FyZ3MiLCJjb19uYW1lIiwiZ2V0X25hbWVzX2J5X3R5cGUiLCJleGNsdWRlX2J1aWx0aW5zIiwiY2hlY2tCb29sIiwicHJvcGVydHkiLCJnZXRfdmFsdWVzX2J5X3R5cGUiLCJjYWxsc2ltT3JTdXNwZW5kIiwiZ2V0X3N0dWRlbnRfZGF0YSIsInNldF9pbnN0cnVjdGlvbnMiLCJuZXdJbnN0cnVjdGlvbnMiLCJnZXRfbW9kZWxfaW5mbyIsIkxPQ0FMX1NUT1JBR0VfUkVGIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJfZGF0YSIsIlN0cmluZyIsImdldEl0ZW0iLCJuYW1lc3BhY2UiLCJpc19uZXciLCJzZXJ2ZXJfdGltZSIsInN0b3JlZF90aW1lIiwiSUdOT1JFRF9HTE9CQUxTIiwicGFyc2VkIiwicGFyc2VWYWx1ZSIsIl9fbmFtZV9fIiwiZnVsbExlbmd0aCIsImZ1bmNfY29kZSIsImNvX3Zhcm5hbWVzIiwic3EkbGVuZ3RoIiwiYm9vbCIsIm5tYmVyIiwic2tUeXBlIiwiaW50XyIsImZsb2F0XyIsIk51bWJlciIsImFycmF5Q29udGFpbnMiLCJuZWVkbGUiLCJoYXlzdGFjayIsImFycmF5VW5pcXVlIiwiYSIsImNvbmNhdCIsImoiLCJleHBhbmRBcnJheSIsImFkZEFycmF5IiwicmVtb3ZlQXJyYXkiLCJjb3B5QXJyYXkiLCJjbG9uZU5vZGUiLCJjbG9uZSIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlVmFsdWUiLCJjaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInJhbmRvbUludGVnZXIiLCJmbG9vciIsInJhbmRvbSIsIkJsb2NrbHkiLCJXb3Jrc3BhY2VTdmciLCJzaHVmZmxlIiwibWV0cmljcyIsImdldE1ldHJpY3MiLCJ2aWV3V2lkdGgiLCJ2aWV3SGVpZ2h0IiwiYmxvY2tzIiwiZ2V0VG9wQmxvY2tzIiwibWF4aW1hbF9pbmNyZWFzZSIsImdldFJlbGF0aXZlVG9TdXJmYWNlWFkiLCJtb3ZlQnkiLCJtb3ZlRWxlbWVudHMiLCJtb3ZlQ2hlY2siLCJpc1NrQnVpbHRpbiIsIm9iaiIsImxuZyIsImlzQXN0Tm9kZSIsIm1peGVkUmVtYXBUb1B5IiwiayIsImt2cyIsImFyciIsInN1YnZhbCIsImFzc2skIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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QWlCUixHQUFqQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFNBQW5CLEVBQThCO0FBQ2pDLFdBQU8sSUFBSS92QixFQUFFLENBQUNxWixPQUFILENBQVcrVCxJQUFmLENBQW9CMkMsR0FBcEIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFHLE9BQU9BLEdBQVAsS0FBZSxVQUFsQixFQUE4QjtBQUNqQyxXQUFPLElBQUkvdkIsRUFBRSxDQUFDcVosT0FBSCxDQUFXaVIsR0FBZixDQUFtQnlGLEdBQUcsQ0FBQ3hpQyxJQUF2QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQzdPRCxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4vdHJhY2VcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29uc29sZX0gZnJvbSBcIi4vY29uc29sZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlGZWVkYmFja30gZnJvbSBcImZlZWRiYWNrLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVNlcnZlcn0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeURpYWxvZ30gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb3JnaXMsIF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfSBmcm9tIFwiLi9jb3JnaXNcIjtcclxuaW1wb3J0IHtCbG9ja1B5SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRWZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVTdWJtaXNzaW9uczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHJldmlld2VkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnJldmlld2VkXCJdKSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYzoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5wdWJsaWNcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBpcFJhbmdlczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pcF9yYW5nZXNcIl0pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInN1Ym1pc3Npb24uY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShcIlN0YXJ0ZWRcIiksXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiTm90UmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudGx5IHZpc2libGUgRmlsZSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHByZXNlbnRlZCB3aXRoIHRoZSBpbnN0cnVjdG9yIHNldHRpbmdzIGFuZCBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5pbnN0cnVjdG9yXCIsIFwiZmFsc2VcIikudG9TdHJpbmcoKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IEhpc3RvcnkgbW9kZSBpcyBlbmdhZ2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGhpc3RvcnlNb2RlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgYXV0by1zYXZpbmcgY2hhbmdlcyBpbiBQeXRob24gZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgKiBJZiBhbiBpbnRlZ2VyLCBzcGVjaWZpZXMgdGhlIGRlbGF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKG1pY3Jvc2Vjb25kcykuXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5ldmVyIG9uIGluIG5vbi1QeXRob24gZWRpdG9ycy5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfGludH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYXV0b1NhdmU6IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25zb2xlIGlzIGZ1bGwgd2lkdGggYW5kIGZlZWRiYWNrIGlzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBiaWdDb25zb2xlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGhlaWdodCB0byB1c2UgZm9yIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgbnVsbCwgdGhlbiBsZXQgdGhlIGhlaWdodCByZW1haW4gdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBhIG51bWJlciwgdGhlbiB0aGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoaWNoIHBhbmVsIHRvIHNob3cgaW4gdGhlIHNlY29uZCByb3cncyBzZWNvbmQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRSb3dTZWNvbmRQYW5lbDoga28ub2JzZXJ2YWJsZShTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSB0cmFjaW5nIHRoZSBjb2RlIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmFjZUV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBsaXN0IG9mIHByb21pc2VzIHRvIHN0aWxsIHJlc29sdmUgd2hpbGUgbG9hZGluZyBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFByb21pc2U+fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YXNldHM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSB0ZW1wb3JhcnkgY2hhbmdlZCB2YWx1ZSBvZiB0aGUgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGZyb20gd2hhdCBpcyBpbiB0aGUgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkSW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBIGhvbGRlciBmb3IgdGhlIHRpbWVyIHRvIHRyaWdnZXIgb24tY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT25DaGFuZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgZmVlZGJhY2sgYW5kIG91dHB1dCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBzdWJtaXNzaW9uLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyB3b3VsZCBiZSBmYWxzZSBpZiB0aGVyZSBpcyBubyBmZWVkYmFjay9vdXRwdXQgKGkuZS4sIGNvZGUgaGFzIG5vdCBiZWVuIHJ1biksXHJcbiAgICAgICAgICAgICAgICAgKiBvciBpZiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIHN1Ym1pc3Npb24gYWZ0ZXIgdGhlIGxhc3QgcnVuIChlLmcuLCBieSBlZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgdGV4dCkuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGRpcnR5U3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2U6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbikge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5vd25lcklkKHN1Ym1pc3Npb24udXNlcl9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyZmFjZSgpO1xyXG4gICAgICAgIGxldCB3YXNTZXJ2ZXJDb25uZWN0ZWQgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnQgPSBkYXRhLmFzc2lnbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlkKGFzc2lnbm1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC52ZXJzaW9uKGFzc2lnbm1lbnQudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmNvdXJzZUlkKGFzc2lnbm1lbnQuY291cnNlX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkSWQoYXNzaWdubWVudC5mb3JrZWRfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRWZXJzaW9uKGFzc2lnbm1lbnQuZm9ya2VkX3ZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oYXNzaWdubWVudC5oaWRkZW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZChhc3NpZ25tZW50LnJldmlld2VkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucHVibGljKGFzc2lnbm1lbnQucHVibGljKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudHlwZShhc3NpZ25tZW50LnR5cGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC51cmwoYXNzaWdubWVudC51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcyhhc3NpZ25tZW50LmlwX3Jhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fY2hhbmdlLnB5XCIsIGFzc2lnbm1lbnQub25fY2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIiwgYXNzaWdubWVudC5vbl9ldmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmNvcmdpcy5sb2FkRGF0YXNldHModHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lbnU6IHtcclxuICAgICAgICAgICAgICAgIGNhbk1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdGV4dE1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBc3NpZ25tZW50IGNsb3NlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJlb3BlbiBmb3IgZWRpdGluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJSdW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTdWJtaXQgZWFybHlcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNsaWNrTWFya1N1Ym1pdHRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC51aS5tZW51LmlzQ29tcGxldGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgY2Fubm90IHJlb3BlbiBjbG9zZWQgYXNzaWdubWVudHMuIENvbnRhY3QgYSBncmFkZXIhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcImluUHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcIlN1Ym1pdHRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0dGVkXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZDoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoKS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3SW5zdHJ1Y3RvckZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRvcnM6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lZGl0b3JzLmdldEVkaXRvcihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdmlldzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRWRpdG9ycygpID8gXCJOb25lXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA/IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpIDogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5SZXNldFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmNvZGUobW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKCkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWUoKS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhblNhdmU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICFtb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkpLFxyXG4gICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5ERUxFVEFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICBjYW5SZW5hbWU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTlJFTkFNQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIHVwbG9hZDogdXBsb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IGRvd25sb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RGF0YXNldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5jb3JnaXMub3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB5dGhvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGVNaXJyb3IgPSBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnRleHRFZGl0b3IuY29kZU1pcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVNaXJyb3Iuc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY29kZU1pcnJvci5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGU6IChuZXdNb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLVZpZXcuQ2hhbmdlXCIsIFwiXCIsIFwiXCIsIG5ld01vZGUsIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShuZXdNb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5vbGRQeXRob25Nb2RlID0gbmV3TW9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNIaXN0b3J5QXZhaWxhYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci51cGRhdGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5zZXRSZWFkT25seShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9uSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2FkSGlzdG9yeSgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5sb2FkKHJlc3BvbnNlLmhpc3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5zZXRSZWFkT25seSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0hJU1RPUlkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5Pbkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb1N0YXJ0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlUHJldmlvdXMoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZU5leHQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdFJlY2VudDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvTW9zdFJlY2VudCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2U6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LnVzZSgpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZTogKCkgPT4gc2VsZi5jb21wb25lbnRzLnNlcnZlci5zYXZlQXNzaWdubWVudCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGU6IHtcclxuICAgICAgICAgICAgICAgIGlzUnVubmluZzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKCkgPT09IFN0YXR1c1N0YXRlLkFDVElWRVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJ1bjogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmRlbGF5ZWRSdW4oKSxcclxuICAgICAgICAgICAgICAgIGV2YWx1YXRlOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZXZhbHVhdGUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogKGVuZHBvaW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItc3RhdHVzLVwiICsgbW9kZWwuc3RhdHVzW2VuZHBvaW50XSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNFbmRwb2ludENvbm5lY3RlZDogKGVuZHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJsc1tlbmRwb2ludF0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEhpc3RvcnlNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZERhdGFzZXRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9nRXZlbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUltYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSgpIHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBmb3JjZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzZWxmLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5mYWRlT3V0KDEwMCkuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uSGFja3MoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRPRE9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseXMgdGhlIEtub2Nrb3V0SlMgYmluZGluZ3MgdG8gdGhlIG1vZGVsLCBpbnN0YW50aWF0aW5nIHRoZSB2YWx1ZXMgaW50byB0aGVcclxuICAgICAqIEhUTUwuXHJcbiAgICAgKi9cclxuICAgIGFwcGx5TW9kZWwoKSB7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VXRpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICB0aGlzLnV0aWxpdGllcyA9IHtcclxuICAgICAgICAgICAgbWFya2Rvd246ICh0ZXh0KSA9PiB0ZXh0ID8gRWFzeU1ERS5wcm90b3R5cGUubWFya2Rvd24odGV4dCkgOiBcIjxwPjwvcD5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXI7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMgPSB7fTtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgLy8gRWFjaCBvZiB0aGVzZSBjb21wb25lbnRzIHdpbGwgdGFrZSB0aGUgQmxvY2tQeSBpbnN0YW5jZSwgYW5kIHBvc3NpYmx5IGFcclxuICAgICAgICAvLyByZWZlcmVuY2UgdG8gdGhlIHJlbGV2YW50IEhUTUwgbG9jYXRpb24gd2hlcmUgaXQgd2lsbCBiZSBlbWJlZGRlZC5cclxuICAgICAgICBjb21wb25lbnRzLmRpYWxvZyA9IG5ldyBCbG9ja1B5RGlhbG9nKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZGlhbG9nXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmZlZWRiYWNrID0gbmV3IEJsb2NrUHlGZWVkYmFjayhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnRyYWNlID0gbmV3IEJsb2NrUHlUcmFjZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvbnNvbGUgPSBuZXcgQmxvY2tQeUNvbnNvbGUobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1jb25zb2xlXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmVuZ2luZSA9IG5ldyBCbG9ja1B5RW5naW5lKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmlsZVN5c3RlbSA9IG5ldyBCbG9ja1B5RmlsZVN5c3RlbShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmVkaXRvcnMgPSBuZXcgRWRpdG9ycyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWVkaXRvclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5weXRob25FZGl0b3IgPSB0aGlzLmNvbXBvbmVudHMuZWRpdG9ycy5ieU5hbWUoXCJweXRob25cIik7XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXJ2ZXIgPSBuZXcgQmxvY2tQeVNlcnZlcihtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvcmdpcyA9IG5ldyBCbG9ja1B5Q29yZ2lzKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuaGlzdG9yeSA9IG5ldyBCbG9ja1B5SGlzdG9yeShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWhpc3RvcnktdG9vbGJhclwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5lbmdpbmUucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7ZW5jb2RlSFRNTH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IFNUQVJUX0VWQUxfSFRNTCA9IGBcbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZSBmbG9hdC1yaWdodCBibG9ja3B5LWJ0bi1ldmFsXCI+XG4gICAgRXZhbHVhdGVcbjwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nY29sLW1kLTYgYmxvY2tweS1wYW5lbCBibG9ja3B5LWNvbnNvbGUnXG4gICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJDb25zb2xlXCJcbiAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGFzczogdWkuY29uc29sZS5zaXplXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1zaG93LWZlZWRiYWNrJ1xuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuc2Vjb25kUm93LmlzQ29uc29sZVNob3dWaXNpYmxlLCBjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDxzdHJvbmc+Q29uc29sZTo8L3N0cm9uZz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktcHJpbnRlciBibG9ja3B5LXByaW50ZXItZGVmYXVsdCc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgPC9kaXY+YDtcblxuY29uc3QgTkVXX0NPTlNPTEVfTElORV9IVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuXG4vKipcbiAqXG4gKiBAZW51bVxuICovXG5leHBvcnQgbGV0IENvbnNvbGVMaW5lVHlwZSA9IHtcbiAgICBURVhUOiBcInRleHRcIixcbiAgICBIVE1MOiBcImh0bWxcIixcbiAgICBQTE9UOiBcInBsb3RcIixcbiAgICBJTUFHRTogXCJpbWFnZVwiLFxuICAgIFRVUlRMRTogXCJ0dXJ0bGVcIixcbiAgICBFVkFMOiBcImV2YWxcIixcbiAgICBTVEFSVF9FVkFMOiBcInN0YXJ0X2V2YWxcIixcbiAgICBWQUxVRTogXCJ2YWx1ZVwiLFxuICAgIElOUFVUOiBcImlucHV0XCIsXG4gICAgVEVTVF9DQVNFOiBcInRlc3RfY2FzZVwiXG59O1xuXG5jbGFzcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdHlwZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBTay5jdXJyRmlsZW5hbWUsXG4gICAgICAgICAgICBzdGVwOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwLFxuICAgICAgICAgICAgbGluZTogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0bWwgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiAgXCJibG9ja3B5LXByaW50ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgIFwiZGF0YS1zdGVwXCI6IHRoaXMub3JpZ2luLnN0ZXAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RlcCBcIiArIHRoaXMub3JpZ2luLnN0ZXAgKyBcIiwgTGluZSBcIiArIHRoaXMub3JpZ2luLmxpbmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICFtYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdG9Ta3VscHQoKSB7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KHRoaXMuY29udGVudCk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVR1cnRsZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICAvLyBUT0RPOiBDYXB0dXJlIHR1cnRsZSBjb21tYW5kcyBmb3IgdHJhY2luZyBwdXJwb3Nlc1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlRVUlRMRSk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS10dXJ0bGUtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5wcmVwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWxbMF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbWFnZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTUFHRSwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1pbWFnZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVQbG90IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlBMT1QsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtcGxvdC1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVRleHQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50ICsgY29udGVudDtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVWYWx1ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlZBTFVFLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxjb2RlPjwvY29kZT5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbnB1dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTlBVVCwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBJbnB1dCBib3ggZm9yIHJlY2VpdmluZyBpbnB1dCgpIGZyb20gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgLy8gUGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFuaW5nXG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIElucHV0IGZvcm1cbiAgICAgICAgICAgIGxldCBpbnB1dEZvcm0gPSAkKFwiPGlucHV0IHR5cGU9J3RleHQnIC8+XCIpO1xuICAgICAgICAgICAgLy8gRW50ZXIgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRCdG4gPSAkKFwiPGJ1dHRvbj48L2J1dHRvbj5cIiwge1wiaHRtbFwiOiBcIkVudGVyXCJ9KTtcbiAgICAgICAgICAgIC8vIEdyb3VwIGZvcm0gYW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0R3JvdXAgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1wiY2xhc3NcIjogXCJibG9ja3B5LWNvbnNvbGUtaW5wdXRcIn0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRGb3JtKTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0QnRuKTtcbiAgICAgICAgICAgIC8vIFByb21wdCBib3gsIG5ldyBsaW5lLCBpbnB1dCBncm91cFxuICAgICAgICAgICAgbGV0IGlucHV0Qm94ID0gJChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRNc2cgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCAge1wiaHRtbFwiOiBlbmNvZGVkVGV4dH0pO1xuICAgICAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZChpbnB1dE1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoJChcIjxicj5cIikpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpbnB1dEdyb3VwKTtcbiAgICAgICAgICAgIC8vIFJlbmRlclxuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChpbnB1dEJveCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vIE1ha2UgaXQgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJbnRlcmFjdGl2ZShpbnB1dEZvcm0sIGlucHV0QnRuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuXG4gICAgbWFrZUludGVyYWN0aXZlKGlucHV0LCBidXR0b24pIHtcbiAgICAgICAgbGV0IHJlc29sdmVPbkNsaWNrO1xuICAgICAgICBsZXQgc3VibWl0dGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc3VibWl0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICBmaW5pc2hUdXJ0bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Muc2F2ZVR1cnRsZU91dHB1dCgpKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhpcy50dXJ0bGVMaW5lLmh0bWwuZmluZChcImNhbnZhc1wiKS5sYXN0KClbMF07XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlSW1hZ2UoXCJ0dXJ0bGVfb3V0cHV0XCIsIGRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dFRvQmxvY2tzLmhpZGRlbkltcG9ydHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NzEzNzM5MzI0OTJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU3MTM3MzkzMjQ2OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSdtYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDo0MDBweCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlIG1vZGVsLWNsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tc3VjY2VzcyBtb2RhbC1va2F5JyBkYXRhLWRpc21pc3M9J21vZGFsJz5Pa2F5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdGhpcy5mb290ZXJUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uID0gdGFnLmZpbmQoXCIubW9kYWwtb2theVwiKTtcblxuICAgIHRoaXMueWVzID0gKCkgPT4ge307XG4gICAgdGhpcy5va2F5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy55ZXMoKTtcbiAgICAgICAgdGhpcy50YWcubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uLmhpZGUoKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgeWVzLCBubywgeWVzVGV4dCkge1xuICAgIGlmICh5ZXNUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWVzVGV4dCA9IFwiT2theVwiO1xuICAgIH1cbiAgICB0aGlzLnNob3codGl0bGUsIGJvZHksIG5vKTtcbiAgICB0aGlzLnllcyA9IHllcztcbiAgICB0aGlzLm9rYXlCdXR0b24uc2hvdygpLmh0bWwoeWVzVGV4dCk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgXCJZb3VyIGluc3RydWN0b3IgaGFzIG1hZGUgY2hhbmdlcyB0byB0aGlzIGFzc2lnbm1lbnQuIFdvdWxkIHlvdSBsaWtlIHRvIHJlbG9hZD8gQWxsIHlvdXIgd29yayBoYXMgYmVlbiBzYXZlZC5cIiwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuU0NSRUVOU0hPVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ET1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgVXBkYXRpbmcgU3VibWlzc2lvbiBTdGF0dXNcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgeW91ciBzdWJtaXNzaW9uIHN0YXR1cy48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0hJU1RPUlkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgTG9hZGluZyBIaXN0b3J5XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgeW91ciBoaXN0b3J5Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG4iLCJpbXBvcnQge0VkaXRvcnN9IGZyb20gXCIuLi9lZGl0b3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGUgPT5cclxuICAgICAgICBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS51cGxvYWRGaWxlKGUpXHJcbiAgICApO1xyXG4gICAgZmlsZVJlYWRlci5maWxlTmFtZSA9IGZpbGVzWzBdLm5hbWU7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQge25hbWUsIGV4dGVuc2lvbiwgY29udGVudHMsIG1pbWV0eXBlfSA9IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgLy8gTWFrZSBzYWZlXHJcbiAgICBuYW1lID0gc2x1Z2dpZnkobmFtZSk7XHJcbiAgICBuYW1lID0gbmFtZSArIGV4dGVuc2lvbjtcclxuICAgIC8vIE1ha2UgdGhlIGRhdGEgZG93bmxvYWQgYXMgYSBmaWxlXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1ldHlwZX0pO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBuYW1lKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5RG93bmxvYWRMaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtID0gbWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW07XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZURlbGV0ZWQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIHRoZSBwcmV2aW91cyBmaWxlIGluc3RlYWQgb2YgYSBkZWZhdWx0IGZpbGVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVVcGRhdGVkKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gdGhpcy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0N1cnJlbnRGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS53YXRjaEZpbGUodGhpcy5maWxlbmFtZSwge1xyXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm9uRmlsZVVwZGF0ZWQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZGVsZXRlZDogdGhpcy5vbkZpbGVEZWxldGVkLmJpbmQodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZVN5c3RlbS5nZXRGaWxlKG5ld0ZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3RmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgdGhhdCB0aGUgb3RoZXIgZWRpdG9yIHdpbGwgYmUgc3dpdGNoaW5nIHRvXHJcbiAgICAgKiBAcGFyYW0gb2xkRWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gbmV3RWRpdG9yXHJcbiAgICAgKi9cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZS5uYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGVuYW1lLnR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmZpbGUuaGFuZGxlKCksXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCIuL3B5dGhvblwiO1xyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HUyA9IFtcclxuICAgIFtcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVJbnN0cnVjdG9yUnVuXCIsIFwiZGlzYWJsZV9pbnN0cnVjdG9yX3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgaW5zdHJ1Y3RvciBvbl9ydW4gd2lsbCBub3QgYXV0b21hdGljYWxseSBydW4gdGhlIHN0dWRlbnRzJyBjb2RlLiBUaGlzIHN0aWxsIHJ1bnMgdGhlIHN0dWRlbnRzJyBjb2RlLlwiXSxcclxuICAgIFtcImRpc2FibGVTdHVkZW50UnVuXCIsIFwiZGlzYWJsZV9zdHVkZW50X3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgcnVuIGJ1dHRvbiBubyBsb25nZXIgcnVuIHRoZSBzdHVkZW50cycgY29kZS4gVGhpcyBzdGlsbCBydW5zIHRoZSBpbnN0cnVjdG9yJ3MgZmVlZGJhY2sgb25fcnVuIHNjcmlwdC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnQgY2Fubm90IGVkaXQgdGhlIGJsb2NrIGludGVyZmFjZSAoYWx0aG91Z2ggaXQgaXMgdmlzaWJsZSkuXCJdLFxyXG4gICAgW1wib25seUludGVyYWN0aXZlXCIsIFwib25seV9pbnRlcmFjdGl2ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbiwgdGhlIHByb2dyYW0gaXMgYXV0b21hdGljYWxseSBydW4sIGFuZCB0aGVuIHRoZSBjb25zb2xlIGVudGVycyBFdmFsIG1vZGUgKGludGVyYWN0aXZlKS5cIl0sXHJcbiAgICBbXCJvbmx5VXBsb2Fkc1wiLCBcIm9ubHlfdXBsb2Fkc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBkaXJlY3RseSBlZGl0YWJsZSAodGhleSB3aWxsIGhhdmUgdG8gdXBsb2FkIHN1Ym1pc3Npb25zKS5cIl0sXHJcbiAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgIFtcImhpZGVTdWJtaXNzaW9uXCIsIFwiaGlkZV9zdWJtaXNzaW9uXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIHN1Ym1pc3Npb24ncyBjb2RlIG9yIGhpc3Rvcnkgb24gQ2FudmFzLlwiXSxcclxuICAgIFtcImhpZGVGaWxlc1wiLCBcImhpZGVfZmlsZXNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBzZWUgdGhlIFZpZXcgRmlsZXMgdG9vbGJhci5cIl0sXHJcbiAgICBbXCJoaWRlUXVldWVkSW5wdXRzXCIsIFwiaGlkZV9xdWV1ZWRfaW5wdXRzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY2FuIGFjY2VzcyB0aGUgcXVldWVkIGlucHV0cyBib3ggKG1ha2VzIHJlcGVhdGVkIGRlYnVnZ2luZyBlYXNpZXIgZm9yIHRoZSBpbnB1dCBmdW5jdGlvbikuXCJdLFxyXG4gICAgW1wiaGlkZUVkaXRvcnNcIiwgXCJoaWRlX2VkaXRvcnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gYWxsIG9mIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUFsbFwiLCBcImhpZGVfYWxsXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGVuIHRoZSBlbnRpcmUgaW50ZXJmYWNlIGlzIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBFdmFsdWF0ZSBidXR0b24gaXMgbm90IHNob3duIG9uIHRoZSBjb25zb2xlLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNhbm5vdCBzZWUgdGhlIGltcG9ydCBkYXRhc2V0cyBidXR0b24uXCJdLFxyXG4gICAgLy8gVE9ETzogRml4IHRoaXMgb25lIHRvIGJlIHNldHRhYmxlXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIGNlcnRhaW4ga2luZHMgb2YgaW1wb3J0IHN0YXRlbWVudHMgKG1hdHBsb3RsaWIsIHR1cnRsZSwgZGF0YXNldHMpIGFyZSBub3Qgc2hvd24gaW4gdGhlIGJsb2NrIGludGVyZmFjZS5cIl0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlIGNvdmVyYWdlIGJ1dHRvbiBpcyBub3Qgc2hvd24uXCJdLFxyXG4gICAgW1wic2F2ZVR1cnRsZU91dHB1dFwiLCBcInNhdmVfdHVydGxlX291dHB1dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0dXJ0bGUgb3V0cHV0IGlzIHNhdmVkIHdoZW5ldmVyIHRoZSBwcm9ncmFtIHVzZXMgaXQuXCJdLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBBU1NJR05NRU5UX1NFVFRJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bMF0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmQgZm9yIGZpZWxkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VTdGFydFZpZXdUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3LmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LXN0YXJ0LXZpZXctc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwgPSBBU1NJR05NRU5UX1NFVFRJTkdTXHJcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgc2ltcGxlIGJvb2xlYW5zIHRoaXMgd2F5XHJcbiAgICAuZmlsdGVyKChzZXR0aW5nKSA9PiBzZXR0aW5nWzNdID09PSBcImJvb2xcIilcclxuICAgIC5tYXAoKHNldHRpbmcpID0+IHtcclxuICAgICAgICBsZXQgcHJldHR5TmFtZSA9IHNldHRpbmdbMV0uc3BsaXQoXCJfXCIpLm1hcCh3b3JkPT4od29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt3b3JkLnNsaWNlKDEpKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIj4ke3ByZXR0eU5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuc2V0dGluZ3MuJHtzZXR0aW5nWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldHRpbmdbNF19XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihcIlxcblxcblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktdmlldy1zZXR0aW5nc1wiPlxyXG4gICAgXHJcbiAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnNldHRpbmdzLnNhdmVcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBzdHVkZW50LWZhY2luZyBuYW1lIG9mIHRoZSBhc3NpZ25tZW50LiBBc3NpZ25tZW50cyB3aXRoaW4gYSBncm91cCBhcmUgb3JkZXJlZCBhbHBoYWJldGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGJ5IHRoZWlyIG5hbWUsIHNvIHlvdSBtYXkgd2FudCB0byB1c2UgYSBuYW1pbmcgc2NoZW1lIGxpa2UgXCIjNDMuNSkgV2hhdGV2ZXJcIi5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5VUkw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnVybFwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgY291cnNlLXVuaXF1ZSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zaXN0ZW50bHkgcmVmZXIgdG8gdGhpcyBhc3NpZ25tZW50LiBcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCI+UHVibGljOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIG5vdCBwdWJsaWMsIHVzZXJzIG91dHNpZGUgb2YgdGhlIGNvdXJzZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGUgYXNzaWdubWVudCBpbiBjb3Vyc2UgbGlzdGluZ3MuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiPkhpZGRlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBoaWRkZW4sIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIGdyYWRlIHdoaWxlIHdvcmtpbmcgb24gdGhlIGFzc2lnbm1lbnQuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+UmV2aWV3ZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnJldmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIHJldmlld2VkLCB0aGUgYXNzaWdubWVudCBjYW4gYmUgY29tbWVudGVkIHVwb24gYW5kIHJlZ3JhZGVkIGJ5IHRoZSBzdGFmZiBhZnRlcndhcmRzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlN0YXJ0aW5nIFZpZXc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJzdGFydFZpZXdcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+SVAgUmFuZ2VzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5pcFJhbmdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSVAgQWRkcmVzc2VzIHRoYXQgd2lsbCBiZSBleHBsaWNpdGx5IGFsbG93ZWQuIElmIGJsYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gYWxsIGFkZHJlc3NlcyBhcmUgYWxsb3dlZC4gSWYgYW4gYWRkcmVzcyBzdGFydHMgd2l0aCA8Y29kZT5ePC9jb2RlPiB0aGVuIGl0IGl0IGlzIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgICAgICBibGFja2xpc3RlZCwgYnV0IHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdHVybiB3aXRoIGEgPGNvZGU+ITwvY29kZT4uIEFkZHJlc3NlcyBjYW4gYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYSBiaXQgbWFzayB0byBhbGxvdyBhIHJhbmdlIG9mIGFkZHJlc3Nlcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlByZWxvYWRlZCBEYXRhc2V0czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJkYXRhc2V0c1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7QVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTH1cclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRfdmlldykge1xyXG4gICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoc2V0dGluZ3Muc3RhcnRfdmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc2V0dGluZ3MuXCIrc2VydmVyTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeydibG9ja3B5LXJ1bi1ydW5uaW5nJzogdWkuZXhlY3V0ZS5pc1J1bm5pbmd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSW1wb3J0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5pbXBvcnREYXRhc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L3NwYW4+IEltcG9ydCBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJldmVudDoge2NoYW5nZTogdWkuZWRpdG9ycy51cGxvYWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlIGRyb3Bkb3duLXRvZ2dsZS1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1pdGVtIGJsb2NrcHktdG9vbGJhci1kb3dubG9hZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkhpc3RvcnkgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi50b2dnbGVIaXN0b3J5TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB1aS5lZGl0b3JzLnB5dGhvbi5pc0hpc3RvcnlBdmFpbGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeyBhY3RpdmU6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogeyAnYXJpYS1wcmVzc2VkJzogZGlzcGxheS5oaXN0b3J5TW9kZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1oaXN0b3J5XCI+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8IS0tIEZ1bGx5IGZ1bmN0aW9uYWwsIGJ1dCBhIGxpdHRsZSB0b28uLiBJbnZhc2l2ZSBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkZ1bGxzY3JlZW4gR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJ3RleHQnXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uZnVsbHNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZXhwYW5kLWFycm93cy1hbHRcIj48L3NwYW4+IEZ1bGxzY3JlZW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgLS0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiU2F2ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuU2F2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L3NwYW4+IFNhdmVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJEZWxldGUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhbkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5maWxlcy5kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9zcGFuPiBEZWxldGVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZW5hbWUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblJlbmFtZVwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXNpZ25hdHVyZVwiPjwvc3Bhbj4gUmVuYW1lXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICR7SElTVE9SWV9UT09MQkFSX0hUTUx9XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiXHJcbiAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5tZW51LmlzU3VibWl0dGVkXCI+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VQZXJBc3NpZ25tZW50U3Vic2NyaXB0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZUV4dHJhQmxvY2tseSgpIHtcclxuICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5jb25maWd1cmVDb250ZXh0TWVudSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTY3JlZW5zaG90XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLlNDUkVFTlNIT1RfQkxPQ0tTXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIGxldCBvbGRGaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShEaXNwbGF5TW9kZXMuVEVYVCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSh0aGlzLm9sZFB5dGhvbk1vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSAoKSA9PiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmlzUGFyc29ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc0Vycm9yLnN1YnNjcmliZSgobGluZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItZXJyb3ItbGluZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNVbmNvdmVyZWQuc3Vic2NyaWJlKChsaW5lcykgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItdW5jb3ZlcmVkLWxpbmVcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLnJlbmRlcigpO1xyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgdGhpcyBkb2Vzbid0IGVuZCB1cCBsb29raW5nIHJpZ2h0IChnbyB0byBhIGRpZmZlcmVudCBlZGl0b3IsIGNvbWUgYmFjaywgYW5kIGl0J2xsIGJlIHNxdWlzaGVkKVxyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgaWYgKG5ld0NvbnRlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSB0aGlzLmZpbGUuaGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG1hdHRlciwgZmlsZSB3YXMgYWxyZWFkeSBzaHV0IGRvd24uXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGNsb3NpbmcgdGhpcyBmaWxlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJURVNUXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLm9ubHlVcGxvYWRzLnN1YnNjcmliZSgoY2hhbmdlZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VkKTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlYWRPbmx5KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWFkT25seShjaGFuZ2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlYWRPbmx5KGlzUmVhZE9ubHkpIHtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcclxuICAgICAgICB0aGlzLmJtLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5VcGxvYWRcIiwgXCJcIiwgXCJcIiwgY29kZSwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb2RlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSA9PT0gXCJhbnN3ZXJcIiAmJiByZXN1bHQuZXh0ZW5zaW9uID09PSBcIi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gc2x1Z2dpZnkodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQubmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lm1pbWV0eXBlID0gXCJ0ZXh0L3gtcHl0aG9uXCI7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkRvd25sb2FkXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci10ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRleHRcIilbMF0sIHtcclxuICAgICAgICAgICAgc2hvd0N1cnNvcldoZW5TZWxlY3Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXJzdExpbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlRhYlwiOiBcImluZGVudE1vcmVcIixcclxuICAgICAgICAgICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJFc2NcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uZGlzcGxheS5pbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiRjExXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmNvZGVNaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMuY29kZU1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZU1pcnJvci5zZXRWYWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZU1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcIm1vZGVsXCJdID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIH07XG5cbiAgICByZXNldFN0dWRlbnRNb2RlbCgpIHtcbiAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnN0dWRlbnQ7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFN0ZXAobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LnJlc3VsdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0RXhlY3V0aW9uQnVmZmVyKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHtcbiAgICAgICAgICAgIFwidHJhY2VcIjogW10sXG4gICAgICAgICAgICBcInN0ZXBcIjogMCxcbiAgICAgICAgICAgIFwibGluZVwiOiAwLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGludGVyZmFjZSBhc3BlY3RzIG9mIHRoZSBwcmV2aW91cyBSdW4uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIFRPRE86IENsZWFyIG91dCBhbnkgY292ZXJhZ2UvdHJhY2UvZXJyb3IgaGlnaGxpZ2h0cyBpbiBlZGl0b3JzXG4gICAgICAgIC8vIFJlc2V0IGV4ZWN1dGlvbiBpbiBtb2RlbFxuICAgICAgICB0aGlzLnJlc2V0U3R1ZGVudE1vZGVsKCk7XG4gICAgICAgIC8vIEdldCByZXBvcnRzIHJlYWR5XG4gICAgICAgIHRoaXMucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgZXhlY3V0aW9uIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlc2V0RXhlY3V0aW9uQnVmZmVyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgY29uc29sZSBvZiBwcmludGVkIHN0dWZmXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBvbGQgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxheWVkUnVuKCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksIDEpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ydW4udXNlKHRoaXMpO1xuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uUnVuLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5jb25maWd1cmF0aW9uLnNob3dFcnJvcnMuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uUnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5leGVjdXRpb25FbmRfLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIGxldCBldmFsdWF0aW9uSW5wdXQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmV2YWx1YXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWx1YXRpb25JbnB1dCk7XG4gICAgICAgIGV2YWx1YXRpb25JbnB1dC50aGVuKCh1c2VySW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMuZXZhbC51c2UodGhpcywgdXNlcklucHV0KTtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vbkV2YWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZhbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkV2YWwudXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV2YWx1YXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uQ2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHJldHVybiBTay5taXNjZXZhbC5hc3luY1RvUHJvbWlzZSgoKSA9PlxuICAgICAgICAgICAgU2suaW1wb3J0TWFpbldpdGhCb2R5KHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmNvZGUsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVkIHdoZW5ldmVyIHRoZSBQeXRob24gY29kZSBjaGFuZ2VzXG4gICAgICovXG4gICAgb25fY2hhbmdlKCkge1xuICAgICAgICBsZXQgRklMRU5BTUUgPSBcIm9uX2NoYW5nZVwiO1xuICAgICAgICAvLyBTa2lwIGlmIHRoZSBpbnN0cnVjdG9yIGhhcyBub3QgZGVmaW5lZCBhbnl0aGluZ1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tGSUxFTkFNRV0oKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNoYW5naW5nXCIpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUNvZGUoKTtcbiAgICAgICAgLy8gT24gc3RlcCBkb2VzIG5vdCBwZXJmb3JtIHBhcnNlIGFuYWx5c2lzIGJ5IGRlZmF1bHQgb3IgcnVuIHN0dWRlbnQgY29kZVxuICAgICAgICBsZXQgZW5naW5lID0gdGhpcztcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGVuZ2luZS5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgZW5naW5lLnZlcmlmeUNvZGUoKTtcbiAgICAgICAgZW5naW5lLnVwZGF0ZVBhcnNlKCk7XG4gICAgICAgIGVuZ2luZS5ydW5JbnN0cnVjdG9yQ29kZShGSUxFTkFNRSwgdHJ1ZSwgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNob3cgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICEoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50RmVlZGJhY2soY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2sobW9kdWxlLiRkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImVuZ2luZVwiLCBcIm9uX2NoYW5nZVwiKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGF0dGVtcHQgdG8gY2FsbCB0aGUgZGVmaW5lZCBvbkV4ZWN1dGlvbkVuZCxcbiAgICAgKiBidXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZXJlIGlzIG5vIGZ1bmN0aW9uIGRlZmluZWQuXG4gICAgICovXG4gICAgZXhlY3V0aW9uRW5kXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25FbmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZXhlY3V0aW9uQmVnaW5fKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkJlZ2luICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgRU1QVFlfTU9EVUxFID0gXCJsZXQgJGJ1aWx0aW5tb2R1bGUgPSBmdW5jdGlvbihtb2QpeyByZXR1cm4gbW9kOyB9XCI7XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgLy8gU2V0IG9wZW5GaWxlIGFzIG1lY2hhbmlzbSB0byByZWFkIGZpbGVzXHJcbiAgICAgICAgU2suaW5Ccm93c2VyID0gdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNrdWxwdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX19mdXR1cmVfXzogU2sucHl0aG9uMyxcclxuICAgICAgICAgICAgLy8gaW1wb3J0XHJcbiAgICAgICAgICAgIHJlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBvcGVuXHJcbiAgICAgICAgICAgIC8vZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gZmlsZS53cml0ZVxyXG4gICAgICAgICAgICBmaWxld3JpdGU6IHRoaXMud3JpdGVGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIHByaW50XHJcbiAgICAgICAgICAgIG91dHB1dDogdGhpcy5wcmludC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBpbnB1dFxyXG4gICAgICAgICAgICBpbnB1dGZ1bjogdGhpcy5pbnB1dC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBpbnB1dGZ1blRha2VzUHJvbXB0OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBNZWRpYSBJbWFnZSBQcm94eSBVUkxcclxuICAgICAgICAgICAgaW1hZ2VQcm94eTogdGhpcy5nZXRJbWFnZVByb3h5LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRvIGtlZXAgdGhlIGdsb2JhbHNcclxuICAgICAgICAgICAgcmV0YWluR2xvYmFsczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHRvIGFjY2VzcyBTa3VscHQgYnVpbHQtaW5zLiBUaGlzIGlzIHByZXR0eSBnZW5lcmljLCB0YWtlblxyXG4gICAgICogYWxtb3N0IGRpcmVjdGx5IGZyb20gdGhlIFNrdWxwdCBkb2NzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBweXRob24gZmlsZW5hbWUgKGUuZy4sIFwib3NcIiBvciBcInBwcmludFwiKSB0aGF0IHdpbGwgYmUgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIEphdmFTY3JpcHQgc291cmNlIGNvZGUgb2YgdGhlIGZpbGUgKHdlaXJkLCByaWdodD8pXHJcbiAgICAgKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgaXNuJ3QgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5wdXRNb2NrRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKFNrLnF1ZXVlZElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRJbWFnZVByb3h5KCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBzdWNjZXNzIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgZmFpbHVyZSBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZHVtbXlPdXRTYW5kYm94KCkge1xyXG4gICAgICAgIC8vU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuLi90cmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSwgY29kZSkge1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJfID0gXCIgKyBjb2RlO1xyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSB0cnVlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuQWRkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCB0aGlzLmNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1FdmFsdWF0ZS5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50VmFsdWUoU2suZmZpLnJlbWFwVG9Kcyhtb2R1bGUuJGQuXy4kcigpKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0LFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IHRoaXMuY29kZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zLmpzXCI7XHJcbmltcG9ydCB7JHNrX21vZF9pbnN0cnVjdG9yfSBmcm9tIFwiLi4vc2tfbW9kX2luc3RydWN0b3JcIjtcclxuXHJcbmNvbnN0IFVUSUxJVFlfTU9EVUxFX0NPREUgPSBcInZhciAkYnVpbHRpbm1vZHVsZSA9IFwiICsgJHNrX21vZF9pbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBJbnN0cnVjdG9ycyBoYXZlIG5vIGxpbWl0c1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsOyAvLyAxMCAqMTAwMFxyXG4gICAgICAgIC8vIE11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKHRydWUpO1xyXG4gICAgICAgIC8vIERpc2FibGUgaW5wdXQgYm94XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICAvLyBUT0RPIFNrLmlucHV0ZnVuID0gQmxvY2tQeUVuZ2luZS5pbnB1dE1vY2tGdW5jdGlvbjtcclxuICAgICAgICAvLyBUT0RPOiBBbGxvdyBpbnB1dCBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSB0aW1lciwgc29tZWhvd1xyXG4gICAgICAgIC8vIEVuYWJsZSB1dGlsaXR5IG1vZGVcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBVVElMSVRZX01PRFVMRV9DT0RFO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckZpbGVzID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBpbnN0cnVjdG9yRmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGluc3RydWN0b3JGaWxlc1tpXS5maWxlbmFtZSgpID09PSBcIiFcIitmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RydWN0b3JGaWxlc1tpXS5jb250ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIikpIHtcclxuICAgICAgICAgICAgbGV0IGlubmVyTmFtZSA9IGZpbGVuYW1lLnNsaWNlKFwiLi9faW5zdHJ1Y3Rvci9cIi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3RvckZpbGVzID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgaW5zdHJ1Y3RvckZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3RvckZpbGVzW2ldLmZpbGVuYW1lKCkgPT09IFwiIVwiK2lubmVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdG9yRmlsZXNbaV0uY29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2suYnVpbHRpbi5JbXBvcnRFcnJvcihcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gXCJBcHBsZVBpZVwiO1xyXG4gICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9LCBcImFuc3dlci5weVwiKVxyXG4ke3RpZmFBbmFseXNpc31cclxuZnJvbSBwZWRhbC5zYW5kYm94LnNhbmRib3ggaW1wb3J0IFNhbmRib3hcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gTUFJTl9SRVBPUlRbJ3NhbmRib3gnXVsncnVuJ10gPSBTYW5kYm94KClcclxuI3N0dWRlbnQucnVuKE1BSU5fUkVQT1JUWydzb3VyY2UnXVsnY29kZSddLCBNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2ZpbGVuYW1lJ10sIHJlcG9ydF9leGNlcHRpb25zPUZhbHNlKVxyXG4jZGVidWcoc3R1ZGVudClcclxuc3R1ZGVudC5yZXBvcnRfZXhjZXB0aW9uc19tb2RlID0gVHJ1ZVxyXG5pZiBub3QgZ2V0X21vZGVsX2luZm8oJ2Fzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUluc3RydWN0b3JSdW4nKTpcclxuICAgIGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQocmFpc2VfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2xvZyhzdHVkZW50LmRhdGEpXHJcbiNzdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbiNlcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbiNjb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbnJ1bl9zdHVkZW50ID0gY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudFxyXG5yZXNldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dFxyXG5xdWV1ZV9pbnB1dCA9IGNvbXBhdGliaWxpdHkucXVldWVfaW5wdXRcclxuZ2V0X291dHB1dCA9IGNvbXBhdGliaWxpdHkuZ2V0X291dHB1dFxyXG5nZXRfcGxvdHMgPSBjb21wYXRpYmlsaXR5LmdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZnJvbSBwZWRhbCBpbXBvcnQgcXVlc3Rpb25zXHJcbnF1ZXN0aW9ucy5zaG93X3F1ZXN0aW9uID0gc2V0X2luc3RydWN0aW9uc1xyXG4jIFRPRE86IFJlbW92ZSB0aGUgbmVlZCBmb3IgdGhpcyBoYWNrIVxyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBzdHVkZW50LmNhbGwoZnVuYy5fX25hbWVfXywgKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcblxyXG5mcm9tIHBlZGFsLmNhaXQuY2FpdF9hcGkgaW1wb3J0IHBhcnNlX3Byb2dyYW1cclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQgLSA0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIC8vIFRPRE8gTG9nZ2luZyEhISFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fcnVuLiRkO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHNjb3JlKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlRmlsZShcImFuc3dlci5weVwiLCB0aGlzLmNvZGUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBlbmdpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcInZlcmlmaWVyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvZGUudHJpbSgpKSxcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5maW5pc2hUdXJ0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9yYmlkZGVuKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGFjY2Vzc2libGU6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5pbnB1dChwcm9tcHRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi91dGlsaXR5L1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi9wZWRhbC9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJTdGVwc1wiIHRoZSBleGVjdXRpb24gb2YgdGhlIGNvZGUsIG1lYW50IHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayB0byB0aGUgU2t1bHB0XHJcbiAgICAgKiBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gSGFzaCB0aGF0IG1hcHMgdGhlIG5hbWVzIG9mIHZhcmlhYmxlcyAoU3RyaW5ncykgdG8gdGhlaXIgU2t1bHB0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5OdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBjb2x1bW4gbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGl0IGFzIHRoZSBcIlhcIiBwb3NpdGlvbiB0byB0aGUgbGluZU51bWJlcidzIFwiWVwiIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxyXG4gICAgICovXHJcbiAgICBzdGVwKHZhcmlhYmxlcywgbG9jYWxzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xyXG4gICAgICAgICAgICBsZXQgZ2xvYmFscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBUcmFjZSBsb2NhbCB2YXJpYWJsZXMgcHJvcGVybHlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL2xldCBsb2NhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHMobG9jYWxzKTtcclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0TGluZXMoYXN0KSB7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWRMaW5lcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgdmlzaXRCb2R5ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubGluZW5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRMaW5lcy5hZGQobm9kZS5saW5lbm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5vcmVsc2UpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUub3JlbHNlLmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmZpbmFsYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5maW5hbGJvZHkuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZpc2l0Qm9keShhc3QpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZpc2l0ZWRMaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEhvbGQgYWxsIHRoZSBhY3R1YWxseSBkaXNjb3ZlcmVkIGxpbmVzIGZyb20gdGhlIHBhcnNlXHJcbiAgICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXHJcbiAgICAgICAgbGV0IGFzdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZSh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCB0aGlzLmZpbGVuYW1lLCBwYXJzZS5mbGFncyk7XHJcbiAgICAgICAgICAgIGxpbmVzID0gdGhpcy5nZXRMaW5lcyhhc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdCxcclxuICAgICAgICAgICAgXCJlbXB0eVwiOiBhc3QuYm9keS5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFcnJvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoIXJlcG9ydFtcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50UnVuRXJyb3IocmVwb3J0LnN0dWRlbnQuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBsZXQgRkVFREJBQ0tfSFRNTCA9IGBcblxuPHNwYW4gY2xhc3M9J2Jsb2NrcHktZmxvYXRpbmctZmVlZGJhY2sgdGV4dC1tdXRlZC1sZXNzIHB1bGwtcmlnaHQgcG9zaXRpb24tc3RpY2t5IHN0aWNreS10b3AnXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtbGFiZWw9XCJOZXcgRmVlZGJhY2sgQWxlcnRcIj5cbiAgICBOZXcgZmVlZGJhY2sgJnVhcnI7XG48L3NwYW4+XG5cbjxkaXYgY2xhc3M9J2Jsb2NrcHktZmVlZGJhY2sgY29sLW1kLTYgYmxvY2tweS1wYW5lbCdcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiRmVlZGJhY2tcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCI+XG5cbiAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlY29uZFJvdy5zd2l0Y2hMYWJlbFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS0gQWN0dWFsIEZlZWRiYWNrIFJlZ2lvbiAtLT4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz5GZWVkYmFjazogPC9zdHJvbmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdiYWRnZSBibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5IGZlZWRiYWNrLWJhZGdlJ1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB1aS5mZWVkYmFjay5iYWRnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdWkuZmVlZGJhY2suY2F0ZWdvcnlcIj5GZWVkYmFjayBLaW5kPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGV5IGNoYW5nZSB0aGUgc3R1ZGVudCBleHRyYSBmaWxlcywgYWxzbyB1cGRhdGUgdGhlIGRpcnR5IGZsYWdcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eUJ1ZmZlciA9IDEwMDtcbiAgICAgICAgbGV0IHRvcE9mRWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgLy9sZXQgYm90dG9tT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbU9mRWxlbWVudCA9IHRvcE9mRWxlbWVudCArIHZpc2liaWxpdHlCdWZmZXI7XG4gICAgICAgIGxldCBib3R0b21PZlNjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcE9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0b3BPZkVsZW1lbnQgPCBib3R0b21PZlNjcmVlbikgJiZcbiAgICAgICAgICAgICh0b3BPZlNjcmVlbiA8IGJvdHRvbU9mRWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlZ3VsYXJGZWVkYmFjaygpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgICAgIGxhYmVsID0gXCJObyBlcnJvcnNcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vIGVycm9ycyByZXBvcnRlZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSkucmVwbGFjZSgvPHByZT5cXG4vZywgXCI8cHJlPlxcblxcblwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgdHJhY2tpbmcgc3R1ZGVudCBmaWxlLCBsZXQncyB0cmFjayB0aGUgaW5zdHJ1Y3RvciBmaWxlXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkludGVydmVudGlvblwiLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIFwiYW5zd2VyLnB5XCIpO1xuXG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgcHJldmlvdXNseSBoaWdobGlnaHRlZCBsaW5lc1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcmVzZW50UnVuRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UsIGxhYmVsLCBjYXRlZ29yeSwgbGluZW5vO1xuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic3ludGF4XCI7XG4gICAgICAgICAgICBsZXQgbGluZW5vID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5saW5lbm8pO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5tc2cpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSwgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVycm9yLmFyZ3MudlszXVsyXTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgPHByZT4ke3NvdXJjZX08L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhYmVsID09PSBcImJhZCBpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJhZCBJbnB1dFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmFkIGlucHV0IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFVuZXhwZWN0ZWQgZW5kLW9mLWZpbGUgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTeW50YXggRXJyb3JcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyBcIjxicj5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJydW50aW1lXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkICYmIGxpbmVubyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lbm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGxldCBuYW1lID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgbGV0IGFyZ3MgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpO1xuICAgICAgICBsZXQgdG9wID0gYCR7bmFtZX06ICR7YXJnc1swXX1cXG48YnI+XFxuPGJyPmA7XG4gICAgICAgIGxldCB0cmFjZWJhY2sgPSBcIlwiO1xuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IFwiVHJhY2ViYWNrOjxicj5cXG5cIiArIGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lbm8gPSBmcmFtZS5saW5lbm87XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBgRmlsZSA8Y29kZSBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGBvbiBsaW5lIDxjb2RlIGNsYXNzPVwibGluZW5vXCI+JHtsaW5lbm99PC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAoZnJhbWUuc2NvcGUgIT09IFwiPG1vZHVsZT5cIiAmJlxuICAgICAgICAgICAgICAgIGZyYW1lLnNjb3BlICE9PSB1bmRlZmluZWQpID8gYGluIHNjb3BlICR7ZnJhbWUuc2NvcGV9YCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGBcXG48cHJlPjxjb2RlPiR7ZnJhbWUuc291cmNlfTwvY29kZT48L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZSArIGxpbmUgKyBzY29wZSArIHNvdXJjZTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG48YnI+XCIpO1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gYCR7dHJhY2ViYWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcCtcIlxcblwiK3RyYWNlYmFjaztcbiAgICB9XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay4gUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOjxicj5cXG5cIjtcbiAgICAgICAgbWVzc2FnZSArPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfVxufSIsImNvbnN0IG1ha2VUYWIgPSBmdW5jdGlvbihmaWxlbmFtZSwgZnJpZW5kbHlOYW1lLCBoaWRlSWZFbXB0eSkge1xyXG4gICAgaWYgKGZyaWVuZGx5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnJpZW5kbHlOYW1lID0gZmlsZW5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5maWxlbmFtZSgpID09PSAnJHtmaWxlbmFtZX0nfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsICcke2ZpbGVuYW1lfScpLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpXCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIlxyXG4gICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZmlsZXMudmlzaWJsZVwiPlxyXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPHN0cm9uZz5WaWV3OiA8L3N0cm9uZz5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgJHttYWtlVGFiKFwiYW5zd2VyLnB5XCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIkluc3RydWN0aW9uc1wiKX1cclxuICAgICR7bWFrZVRhYihcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIiwgXCJTZXR0aW5nc1wiKX1cclxuICAgICR7bWFrZVRhYihcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiU3RhcnRpbmcgQ29kZVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ydW4ucHlcIiwgXCJPbiBSdW5cIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fY2hhbmdlLnB5XCIsIFwiT24gQ2hhbmdlXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2V2YWwucHlcIiwgXCJPbiBFdmFsXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiP21vY2tfdXJscy5ibG9ja3B5XCIsIFwiVVJMIERhdGFcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIiwgXCJTYW1wbGUgU3VibWlzc2lvbnNcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhdGFncy5ibG9ja3B5XCIsIFwiVGFnc1wiLCB0cnVlKX1cclxuICAgIFxyXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBhc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZmlsZW5hbWUoKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJHJvb3QuZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCBmaWxlbmFtZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGZpbGVuYW1lXCI+XHJcbiAgICAgICAgICAgIDwvYT4gICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8IS0tIC9rbyAtLT5cclxuICBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5BZGQgTmV3PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP21vY2tfdXJscy5ibG9ja3B5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJz9tb2NrX3VybHMuYmxvY2tweScpXCI+VVJMIERhdGE8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz90YWdzLmJsb2NrcHknKVwiPlRhZ3M8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9zYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweScpXCI+U2FtcGxlIFN1Ym1pc3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9jaGFuZ2UucHknKVwiPk9uIENoYW5nZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uRXZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2V2YWwucHknKVwiPk9uIEV2YWw8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnaW5zdHJ1Y3RvcicpXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0dWRlbnQgRmlsZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgXHJcbjwvdWw+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgTkVXX0lOU1RSVUNUT1JfRklMRV9ESUFMT0dfSFRNTCA9IGBcclxuPGZvcm0+XHJcbjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgPCEtLSBGaWxlbmFtZSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiPkZpbGVuYW1lOjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiPiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBGaWxldHlwZSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPkZpbGV0eXBlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPjwvc3Bhbj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gSW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ/IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCI+SW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ6IDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY29udHJvbCBibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctaGlkZGVuXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctaGlkZGVuXCIgY2hlY2tlZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9mb3JtPlxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIEZpbGVuYW1lcyBsaXZlIGluIG9uZSBvZiBmaXZlIHBvc3NpYmxlIG5hbWVzcGFjZXM6XHJcbiAqICBJbnN0cnVjdG9yICghKTogSW52aXNpYmxlIHRvIHRoZSBzdHVkZW50IHVuZGVyIGFsbCBjaXJjdW1zdGFuY2VzXHJcbiAqICBTdGFydCBTcGFjZSAoXik6IFVzZWQgdG8gcmVzZXQgdGhlIHN0dWRlbnQgbmFtZXNwYWNlXHJcbiAqICBTdHVkZW50IFNwYWNlICgpOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50IHdoZW4gZGlzcGxheS5oaWRlRmlsZXMgaXMgbm90IHRydWUsIGFibGUgdG8gYmUgZWRpdGVkXHJcbiAqICBIaWRkZW4gU3BhY2UgKD8pOiBOb3QgZGlyZWN0bHkgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGFjY2Vzc2libGUgcHJvZ3JhbW1hdGljYWxseVxyXG4gKiAgUmVhZC1vbmx5IFNwYWNlICgmKTogQW4gaW5zdHJ1Y3RvciBmaWxlIHR5cGUgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGlzIHVuZWRpdGFibGUgYnkgdGhlbVxyXG4gKiAgU2VjcmV0IFNwYWNlICgkKTogTm90IHZpc2libGUgZnJvbSB0aGUgbWVudSBhdCBhbGwsIHNvbWUgb3RoZXIgbWVjaGFuaXNtIGNvbnRyb2xzIGl0XHJcbiAqICBHZW5lcmF0ZWQgU3BhY2UgKCopOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgZGVzdHJveWVkIGFmdGVyIEVuZ2luZS5DbGVhci4gQ2FuIHNoYWRvdyBhbiBhY3R1YWwgZmlsZS5cclxuICogIENvbmNhdGVuYXRlZCBTcGFjZSAoIyk6IFVzZWQgd2hlbiBidW5kbGluZyBhIHNwYWNlIGZvciB0aGUgc2VydmVyLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBUlRJTkdfRklMRVMgPSBbXHJcbiAgICAvLyBTdWJtaXNzaW9uXHJcbiAgICBcImFuc3dlci5weVwiLFxyXG4gICAgLy8gSW5zdHJ1Y3RvciBmaWxlc1xyXG4gICAgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsXHJcbiAgICBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIixcclxuICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIixcclxuICAgIFwiIW9uX3J1bi5weVwiLFxyXG4gICAgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0lDX05FV19GSUxFUyA9IFtcclxuICAgIFwiIW9uX2NoYW5nZS5weVwiLFxyXG4gICAgXCIhb25fZXZhbC5weVwiLFxyXG4gICAgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgIFwiIXRhZ3MuYmxvY2tweVwiLFxyXG4gICAgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIlxyXG5dO1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGNvbmNhdGVuYXRlZEZpbGUsIG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIGlmIChjb25jYXRlbmF0ZWRGaWxlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gSlNPTi5wYXJzZShjb25jYXRlbmF0ZWRGaWxlKTtcclxuICAgICAgICBsZXQgbW9kZWxGaWxlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGVuYW1lIGluIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5oYXNPd25Qcm9wZXJ0eShmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsRmlsZXMucHVzaChtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlc1tmaWxlbmFtZV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2ZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKSk7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChtb2RlbEZpbGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChbXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbEZpbGVMaXN0KCkubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLmZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiBmaWxlLmNvbnRlbnRzKClcclxuICAgICAgICB9O1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoKS5mb3JFYWNoKGZpbGUgPT5cclxuICAgICAgICAgICAgcmVzdWx0W2ZpbGUuZmlsZW5hbWUoKV0gPSBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdHMgYXdheSBkYXRhYmFzZSBsb2dpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGaWxlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfID0ge307XHJcbiAgICAgICAgdGhpcy5tb3VudEZpbGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlc18gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiF0YWdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnRhZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIkc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJeXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIhXCIpIHx8IGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIj9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlSW5BcnJheV8oZmlsZSwgYXJyYXkpIHtcclxuICAgICAgICBmaWxlLm93bmVyID0gYXJyYXk7XHJcbiAgICAgICAgbGV0IGNvZGVCdW5kbGUgPSBmaWxlLm93bmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY29kZUJ1bmRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29kZUJ1bmRsZVtpXS5maWxlbmFtZSgpID09PSBmaWxlLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmhhbmRsZSA9IGNvZGVCdW5kbGVbaV0uY29udGVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGUuaGFuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBuZXdGaWxlLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5ld0ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VudEZpbGVzKCkge1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJec3RhcnRpbmdfY29kZS5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhb25fcnVuLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFpbnN0cnVjdGlvbnMubWRcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdGaWxlKGZpbGVuYW1lLCBjb250ZW50cywgbW9kZWxGaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgYWxyZWFkeSBleGlzdHMhIEp1c3QgdXBkYXRlIGl0cyBoYW5kbGVcclxuICAgICAgICAgICAgbGV0IGV4aXN0aW5nRmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhleGlzdGluZ0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlKGNvbnRlbnRzIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdGaWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBuZXcgQmxvY2tQeUZpbGUodGhpcy5tYWluLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXSA9IG5ld0ZpbGU7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8obmV3RmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld0luc3RydWN0b3JGaWxlKCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gJChORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MKTtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCIpO1xyXG4gICAgICAgIGxldCBmaWxldHlwZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIik7XHJcbiAgICAgICAgbGV0IGhpZGRlbiA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctaGlkZGVuXCIpO1xyXG4gICAgICAgIGxldCBleHRlbnNpb25SZWdleCA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICBmaWxlbmFtZS5vbihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvblJlZ2V4LmV4ZWMoZmlsZW5hbWUudmFsKCkpWzFdO1xyXG4gICAgICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24gPT09IHVuZGVmaW5lZCA/IFwiTm8gZXh0ZW5zaW9uXCIgOiBleHRlbnNpb247XHJcbiAgICAgICAgICAgIGZpbGV0eXBlLnRleHQoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgeWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRkZW4gPSBoaWRkZW4uaXMoXCI6Y2hlY2tlZFwiKSA/IFwiIVwiIDogXCI/XCI7XHJcbiAgICAgICAgICAgIGlmIChmaWxlbmFtZS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBoaWRkZW4rZmlsZW5hbWUudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0ZpbGUoZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuY29uZmlybShcIk1ha2UgTmV3IEZpbGVcIiwgYm9keSwgeWVzLCAoKT0+e30sIFwiQWRkXCIpO1xyXG4gICAgfVxyXG59IiwiLy9UT0RPOiBNb3ZlIGdldCBsaW5rIGRvd24gdG8gZm9vdGVyLCByZW1vdmUgdmVydGljYWwgYmFyIGZyb20gcXVpY2stbWVudVxyXG5leHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdWJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuc2VydmVyLmZvcmNlLnVwZGF0ZVN1Ym1pc3Npb25cIj5VcGRhdGUgU3VibWlzc2lvbjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnb25FeGVjdXRpb24nKVwiPkV4ZWN1dGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlcnZlci5tZXNzYWdlc1wiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Vc2VyOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmlkXCI+PC9zcGFuPiAoPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5uYW1lXCI+PC9zcGFuPik8L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5Db3Vyc2U6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuY291cnNlSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Hcm91cDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5ncm91cElkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC5pZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQgVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi5pZFwiPjwvc3Bhbj48L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uIFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24udmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiLy8gVE9ETzogU2hvdWxkIGRpc2FibGUgYnV0dG9ucyBpZiB3ZSBjYW4ndCBhY3RpdmF0ZSB0aGVtLlxuXG5leHBvcnQgY29uc3QgSElTVE9SWV9UT09MQkFSX0hUTUwgPSBgXG48ZGl2IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXRvb2xiYXIgY29sLW1kLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5oaXN0b3J5TW9kZVwiPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXN0YXJ0IGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3Rvcnkuc3RhcnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPiBTdGFydFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkucHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj4gUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3IgZm9ybS1jb250cm9sIGN1c3RvbS1zZWxlY3QgbXItMlwiIGFyaWEtdGl0bGU9XCJIaXN0b3J5IFNlbGVjdG9yXCI+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS51c2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZmlsZS1pbXBvcnQnPjwvc3Bhbj4gVXNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5uZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj4gTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm1vc3RSZWNlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+IE1vc3QgUmVjZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuYDtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGRpc3BsYXlpbmcgdGhlIHVzZXIncyBjb2RpbmcgbG9ncyAodGhlaXIgaGlzdG9yeSkuXG4gKiBBIGxpZ2h0d2VpZ2h0IGNvbXBvbmVudCwgaXRzIG9ubHkgam9iIGlzIHRvIG9wZW4gYSBkaWFsb2cuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUhpc3Rvcnl9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlIaXN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWQoaGlzdG9yeSkge1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICQoXCIuYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yXCIpLmVtcHR5KCk7XG4gICAgICAgIGxldCBlZGl0SWQgPSAwO1xuICAgICAgICBoaXN0b3J5XG4gICAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICAgICFlbnRyeS5maWxlX3BhdGguc3RhcnRzV2l0aChcIl9pbnN0cnVjdG9yLlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkNvbXBpbGVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkludGVydmVudGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJYLVN1Ym1pc3Npb24uTE1TXCIpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudF90eXBlID0gUkVNQVBfRVZFTlRfVFlQRVNbZW50cnkuZXZlbnRfdHlwZV0gfHwgZW50cnkuZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkID0gcHJldHR5UHJpbnREYXRlVGltZShlbnRyeS5jbGllbnRfdGltZXN0YW1wKSArXCIgLSBcIitldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlID0gKGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiRmlsZS5FZGl0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIiwge3RleHQ6IGRpc3BsYXllZCwgZGlzYWJsZWQ6IGRpc2FibGV9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRFdmVudChlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiLCBlZGl0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRFdmVudHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yLmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGVkaXRJZC0xKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IuY2hhbmdlKChldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vdmVUb1N0YXJ0KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCgwKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGN1cnJlbnRJZC0xKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZU5leHQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWluKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSwgY3VycmVudElkKzEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9Nb3N0UmVjZW50KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCh0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uc2V0Q29kZSh0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuZmlsZS5oYW5kbGUoY29kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VkaXRFdmVudChlbnRyeSkge1xuICAgICAgICByZXR1cm4gKChlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuRWRpdFwiIHx8XG4gICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5DcmVhdGVcIikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBlbnRyeS5maWxlX3BhdGgpO1xuICAgIH1cblxufVxuXG5jb25zdCBSRU1BUF9FVkVOVF9UWVBFUyA9IHtcbiAgICBcIlNlc3Npb24uU3RhcnRcIjogXCJCZWdhbiBzZXNzaW9uXCIsXG4gICAgXCJYLUlQLkNoYW5nZVwiOiBcIkNoYW5nZWQgSVAgYWRkcmVzc1wiLFxuICAgIFwiRmlsZS5FZGl0XCI6IFwiRWRpdGVkIGNvZGVcIixcbiAgICBcIkZpbGUuQ3JlYXRlXCI6IFwiU3RhcnRlZCBhc3NpZ25tZW50XCIsXG4gICAgXCJSdW4uUHJvZ3JhbVwiOiBcIlJhbiBwcm9ncmFtXCIsXG4gICAgXCJDb21waWxlLkVycm9yXCI6IFwiU3ludGF4IGVycm9yXCIsXG4gICAgXCJYLVN1Ym1pc3Npb24uTE1TXCI6IFwiVXBkYXRlZCBncmFkZVwiXG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXG4gICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgIFwiQXVnXCIsIFwiU2VwdFwiLCBcIk9jdFwiLFxuICAgIFwiTm92XCIsIFwiRGVjXCJcbl07XG5jb25zdCB3ZWVrRGF5cyA9IFtcbiAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLFxuICAgIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsXG4gICAgXCJTYXRcIlxuXTtcblxuZnVuY3Rpb24gaXNTYW1lRGF5KGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QuZ2V0RGF0ZSgpID09PSBzZWNvbmQuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGZpcnN0LmdldE1vbnRoKCkgPT09IHNlY29uZC5nZXRNb250aCgpICYmXG4gICAgICAgIGZpcnN0LmdldEZ1bGxZZWFyKCkgPT09IHNlY29uZC5nZXRGdWxsWWVhcigpO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBhIGRhdGUvdGltZSBzdHJpbmcgYW5kIHJld3JpdGUgaXQgYXMgc29tZXRoaW5nXG4gKiBtb3JlIGh1bWFuIHJlYWRhYmxlLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpbWVTdHJpbmcgLSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgKFwiWVlZWU1NREQgSEhNTVNTXCIpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIEEgaHVtYW4tcmVhZGFibGUgdGltZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHByZXR0eVByaW50RGF0ZVRpbWUodGltZVN0cmluZykge1xuICAgIC8qbGV0IHllYXIgPSB0aW1lU3RyaW5nLnNsaWNlKDAsIDQpLFxuICAgICAgICBtb250aCA9IHBhcnNlSW50KHRpbWVTdHJpbmcuc2xpY2UoNCwgNiksIDEwKS0xLFxuICAgICAgICBkYXkgPSB0aW1lU3RyaW5nLnNsaWNlKDYsIDgpLFxuICAgICAgICBob3VyID0gdGltZVN0cmluZy5zbGljZSg5LCAxMSksXG4gICAgICAgIG1pbnV0ZXMgPSB0aW1lU3RyaW5nLnNsaWNlKDExLCAxMyksXG4gICAgICAgIHNlY29uZHMgPSB0aW1lU3RyaW5nLnNsaWNlKDEzLCAxNSk7Ki9cbiAgICAvLyBUT0RPOiBIYW5kbGUgdGltZXpvbmVzIGNvcnJlY3RseVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwYXN0ID0gbmV3IERhdGUocGFyc2VJbnQodGltZVN0cmluZywgMTApKTtcbiAgICBpZiAoaXNTYW1lRGF5KG5vdywgcGFzdCkpIHtcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5U3RyID0gd2Vla0RheXNbcGFzdC5nZXREYXkoKV07XG4gICAgICAgIGxldCBtb250aFN0ciA9IG1vbnRoTmFtZXNbcGFzdC5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlTdHIgKyBcIiwgXCIgKyBtb250aFN0ciArIFwiIFwiICsgcGFzdC5nZXREYXRlKCk7XG4gICAgICAgIGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gcGFzdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiLCBcIitwYXN0LmdldEZ1bGxZZWFyKCkgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogT3BlbnMgdGhlIGhpc3RvcnkgZGlhbG9nIGJveC4gVGhpcyByZXF1aXJlcyBhIHRyaXAgdG8gdGhlIHNlcnZlciBhbmRcbiAqIG9jY3VycyBhc3luY2hyb25vdXNseS4gVGhlIHVzZXJzJyBjb2RlIGlzIHNob3duIGluIHByZWZvcm1hdHRlZCB0ZXh0XG4gKiB0YWdzIChubyBjb2RlIGhpZ2hsaWdodGluZyBjdXJyZW50bHkpIGFsb25nIHdpdGggdGhlIHRpbWVzdGFtcC5cbiAqL1xuQmxvY2tQeUhpc3RvcnkucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlhbG9nID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nO1xuICAgIHZhciBib2R5ID0gXCI8cHJlPmEgPSAwPC9wcmU+XCI7XG4gICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmdldEhpc3RvcnkoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgYm9keSA9IGRhdGEucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoY29tcGxldGUsIGVsZW0pIHsgXG4gICAgICAgICAgICB2YXIgY29tcGxldGVfc3RyID0gcHJldHR5UHJpbnREYXRlVGltZShlbGVtLnRpbWUpO1xuICAgICAgICAgICAgdmFyIG5ld19saW5lID0gXCI8Yj5cIitjb21wbGV0ZV9zdHIrXCI8L2I+PGJyPjxwcmU+XCIrZWxlbS5jb2RlK1wiPC9wcmU+XCI7XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGUrXCJcXG5cIituZXdfbGluZTtcbiAgICAgICAgfSwgXCJcIik7XG4gICAgICAgIGRpYWxvZy5zaG93KFwiV29yayBIaXN0b3J5XCIsIGJvZHksIGZ1bmN0aW9uKCkge30pO1xuICAgIH0pO1xufTsiLCJpbXBvcnQge1RSQUNFX0hUTUx9IGZyb20gXCJ0cmFjZS5qc1wiO1xuaW1wb3J0IHtESUFMT0dfSFRNTH0gZnJvbSBcImRpYWxvZy5qc1wiO1xuaW1wb3J0IHtGRUVEQkFDS19IVE1MfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcbmltcG9ydCB7RklMRVNfSFRNTH0gZnJvbSBcImZpbGVzLmpzXCI7XG5pbXBvcnQge0ZPT1RFUl9IVE1MfSBmcm9tIFwiZm9vdGVyLmpzXCI7XG5pbXBvcnQge0VESVRPUlNfSFRNTH0gZnJvbSBcImVkaXRvcnMuanNcIjtcbmltcG9ydCB7Q09OU09MRV9IVE1MfSBmcm9tIFwiY29uc29sZS5qc1wiO1xuXG4vKipcbiAqIEBlbnVtIHtzdHJ9XG4gKi9cbmV4cG9ydCBsZXQgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zID0ge1xuICAgIEZFRURCQUNLOiBcImZlZWRiYWNrXCIsXG4gICAgVFJBQ0U6IFwidHJhY2VcIixcbiAgICBOT05FOiBcIm5vbmVcIlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpIHtcbiAgICBsZXQgaGlnaGxpZ2h0VGltZW91dCA9IG51bGw7XG4gICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWdobGlnaHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWdobGlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rpb25zIHByZSBjb2RlXCIpLm1hcCggKGksIGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfSk7XG59XG5cbi8vIFRPRE86IEdldCBzaGFyZWFibGUgbGluayBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICR7RElBTE9HX0hUTUx9XG4gICAgXG4gICAgPCEtLSBIaWRkZW4gQ2FwdHVyZSBDYW52YXMgLS0+XG4gICAgPGNhbnZhcyBpZD0nY2FwdHVyZS1jYW52YXMnIGNsYXNzPSdkLW5vbmUnIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2NhbnZhcz5cbiAgICBcbiAgICA8IS0tIFJvdyAxOiBIZWFkZXIgYW5kIFF1aWNrIE1lbnUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgIFxuICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiAtLT5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMCBibG9ja3B5LXBhbmVsIGJsb2NrcHktaGVhZGVyJ1xuICAgICAgICAgICAgICAgcm9sZT0naGVhZGluZycgYXJpYS1sYWJlbD0nQXNzaWdubWVudCBEZXNjcmlwdGlvbic+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gQXNzaWdubWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD0nMSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2tweS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CbG9ja1B5OiA8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBhc3NpZ25tZW50Lm5hbWUnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBSZXNldCBJbnN0cnVjdGlvbnMgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rpb25zLXJlc2V0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5pbnN0cnVjdGlvbnMucmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IGluc3RydWN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEluc3RydWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiB1aS5pbnN0cnVjdGlvbnMuY3VycmVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXF1aWNrLW1lbnUnXG4gICAgICAgICAgICAgcm9sZT0nbWVudWJhcicgYXJpYS1sYWJlbD0nUXVpY2sgTWVudScgdGl0bGU9XCJRdWljayBNZW51XCI+XG4gICAgICAgICAgICA8IS0tIEdldCBTaGFyZWFibGUgTGluayAtLT5cbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgICBZb3VyIHN1Ym1pc3Npb24gaXMgcmVhZHkgdG8gYmUgcmV2aWV3ZWQhPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5tZW51LmNhbk1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5tZW51LnRleHRNYXJrU3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLm1lbnUuY2xpY2tNYXJrU3VibWl0dGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8IS0tIFZpZXcgYXMgaW5zdHJ1Y3RvciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkucm9sZS5pc0dyYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogZGlzcGxheS5pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFzIGluc3RydWN0b3JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFfc3R1ZGVudF9maWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhX3N0YXJ0aW5nX2ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYV9pbnN0cnVjdG9yX2ZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1pY3Jvc2Vjb25kcyA9IG5vdy5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuaWQoKSxcbiAgICAgICAgXCJhc3NpZ25tZW50X2dyb3VwX2lkXCI6IHVzZXIuZ3JvdXBJZCgpLFxuICAgICAgICBcImNvdXJzZV9pZFwiOiB1c2VyLmNvdXJzZUlkKCksXG4gICAgICAgIFwic3VibWlzc2lvbl9pZFwiOiBzdWJtaXNzaW9uLmlkKCksXG4gICAgICAgIFwidXNlcl9pZFwiOiB1c2VyLmlkKCksXG4gICAgICAgIFwidmVyc2lvblwiOiBhc3NpZ25tZW50LnZlcnNpb24oKSxcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogbWljcm9zZWNvbmRzLFxuICAgICAgICBcInRpbWV6b25lXCI6IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5cIl0gPSBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBkYXRhW1wicmV2aWV3ZWRcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKCk7XG4gICAgICAgIGRhdGFbXCJwdWJsaWNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnB1YmxpYygpO1xuICAgICAgICBkYXRhW1widXJsXCJdID0gbW9kZWwuYXNzaWdubWVudC51cmwoKTtcbiAgICAgICAgZGF0YVtcImlwX3Jhbmdlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgZGF0YVtcInNldHRpbmdzXCJdID0gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCk7XG5cbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwic2F2ZUFzc2lnbm1lbnRcIiwgZGF0YSwgMywgKCkgPT4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVJbWFnZSA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGltYWdlKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVJbWFnZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZGlyZWN0b3J5XCJdID0gZGlyZWN0b3J5O1xuICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcInR1cnRsZV9vdXRwdXRcIiwgXCJzYXZlSW1hZ2VcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvblN0YXR1cyA9IGZ1bmN0aW9uKG5ld1N0YXR1cykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzdGF0dXNcIl0gPSBuZXdTdGF0dXM7XG4gICAgICAgIGxldCBwb3N0U3RhdHVzQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIiwgZGF0YSwgMiwgcG9zdFN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKlxuICogREVQUkVDQVRFRFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbk92ZXJyaWRlICYmIGNvcnJlY3QgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2suYWJzdHIub2JqZWN0U2V0SXRlbShuZXdEaWN0LCBTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQoa2V5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNhbGxfZiA9IGZ1bmN0aW9uKGt3YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJnc0xlbihcImNhbGxcIiwgYXJndW1lbnRzLmxlbmd0aCwgMSwgSW5maW5pdHksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgdmFyIGt3YXJncyA9IG5ldyBTay5idWlsdGlucy5kaWN0KGt3YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gYXJnc1swXTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMik7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dHMgPSBrd2FyZ3MubXAkbG9va3VwKG5ldyBTay5idWlsdGluLnN0cihcImlucHV0c1wiKSk7XG4gICAgICAgICAgICBpZiAoaW5wdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHMgPSBTay5mZmkucmVtYXBUb0pzKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYudHAkZ2V0YXR0cihuZXcgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpKTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk9iamVjdCA9IGRhdGEubXAkbG9va3VwKGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb25PYmplY3QudHAkY2FsbChhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGxfZi5jb19rd2FyZ3MgPSB0cnVlO1xuICAgICAgICAvL2NhbGxfZi5jb192YXJuYW1lcyA9IFtcInNlbGZcIiwgXCJmdW5jdGlvblwiXTtcbiAgICAgICAgY2FsbF9mLmNvX25hbWU9IG5ldyBTay5idWlsdGluLnN0cihcImNhbGxcIik7XG4gICAgICAgICRsb2NbXCJjYWxsXyRybiRcIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGNhbGxfZik7XG5cbiAgICAgICAgJGxvY1tcIl9fcmVwcl9fXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9LCBcIlN0dWRlbnREYXRhXCIpO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuXG4gICAgbW9kLnNldF9pbnN0cnVjdGlvbnMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5ld0luc3RydWN0aW9ucykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic2V0X2luc3RydWN0aW9uc1wiLCBhcmd1bWVudHMsIDEsIDIpO1xuICAgICAgICBuZXdJbnN0cnVjdGlvbnMgPSBTay5mZmkucmVtYXBUb0pzKG5ld0luc3RydWN0aW9ucyk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXS5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICB9KTtcblxuICAgIG1vZC5nZXRfbW9kZWxfaW5mbyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X21vZGVsX2luZm9cIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IG1vZGVsID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdO1xuICAgICAgICBrZXlzID0gU2suZmZpLnJlbWFwVG9KcyhrZXlzKS5zcGxpdChcIi5cIik7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vZGVsID0gbW9kZWxba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobW9kZWwoKSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCJsZXQgTE9DQUxfU1RPUkFHRV9SRUY7XG50cnkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0gbG9jYWxTdG9yYWdlO1xuICAgIGxldCBtb2QgPSBcIkJMT0NLUFlfTE9DQUxTVE9SQUdFX1RFU1RcIjtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKG1vZCwgbW9kKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKG1vZCk7XG59IGNhdGNoKGUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IHtcbiAgICAgICAgX2RhdGEgICAgICAgOiB7fSxcbiAgICAgICAgc2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCwgdmFsKSB7IHJldHVybiB0aGlzLl9kYXRhW2lkXSA9IFN0cmluZyh2YWwpOyB9LFxuICAgICAgICBnZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGlkKSA/IHRoaXMuX2RhdGFbaWRdIDogdW5kZWZpbmVkOyB9LFxuICAgICAgICByZW1vdmVJdGVtICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBkZWxldGUgdGhpcy5fZGF0YVtpZF07IH0sXG4gICAgICAgIGNsZWFyICAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kYXRhID0ge307IH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlN0ZXA6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLyA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6IC8vJHJvb3Qudmlld0V4YWN0VmFsdWUodHlwZSwgZXhhY3RfdmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvdyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBcclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tQeVRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeVRyYWNlLnBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0ge1wibmFtZVwiOiBwcm9wZXJ0eSwgXCJ0eXBlXCI6IFwiVW5rbm93blwiLCBcInZhbHVlXCI6IHZhbHVlLnRvU3RyaW5nKCl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bGxMZW5ndGgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsTGVuZ3RoIHx8IHZhbHVlLnYubGVuZ3RoIDw9IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IHZpZXdFeGFjdFZhbHVlIiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogVHVybnMgc3BhY2VzIGludG8gdW5kZXJzY29yZXMgaW4gdGhlIHN0cmluZywgbWFrZXMgaXQgbG93ZXJjYXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gW2BtaW5gLCBgbWF4YF0uXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIGludGVnZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgaW50ZWdlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHNvbWUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzYWZlbHkgd3JpdHRlbiBpbnRvIGFuIEhUTUwgYm94LlxuICogVGhpcyBpbmNsdWRlcyByZXBsYWNpbmcgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgKCYsIDwsID4sIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgdGV4dCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBIVE1MLXNhZmUgdGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLycvZywgXCImYXBvcztcIik7XG59XG5cbi8qKlxuICogU2h1ZmZsZSB0aGUgYmxvY2tzIGluIHRoZSB3b3Jrc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBCbG9ja2x5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQmxvY2tseS5Xb3Jrc3BhY2VTdmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1ldHJpY3MgPSB0aGlzLmdldE1ldHJpY3MoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gbWV0cmljcy52aWV3V2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy52aWV3SGVpZ2h0O1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5nZXRUb3BCbG9ja3MoZmFsc2UpO1xuICAgICAgICB2YXIgeSA9IDUsIHggPSAwLFxuICAgICAgICAgICAgbWF4aW1hbF9pbmNyZWFzZSA9IGhlaWdodC9ibG9ja3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBHZXQgYSBibG9ja1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBibG9jay5nZXRSZWxhdGl2ZVRvU3VyZmFjZVhZKCk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAtcHJvcGVydGllcy54K3JhbmRvbUludGVnZXIoMTAsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLm1vdmVCeSh4LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAtcHJvcGVydGllcy55K3kpO1xuICAgICAgICAgICAgeSA9IHkgKyByYW5kb21JbnRlZ2VyKDUsIG1heGltYWxfaW5jcmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIgYmFzZWQgb24gYSBjb25kaXRpb25hbCBjaGVjay5cbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxODg3OTY3L2phdmFzY3JpcHQtbW92ZS1vYmplY3RzLWZyb20tb25lLWFycmF5LXRvLWFub3RoZXItYmVzdC1hcHByb2FjaFxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoc291cmNlLCB0YXJnZXQsIG1vdmVDaGVjaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlW2ldO1xuICAgICAgICBpZiAobW92ZUNoZWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIG9iamVjdHNcbiAqIFRPRE86IG1ha2UgdGhpcyBzbyB3ZSBkb24ndCBoYXZlIHRvIGV4cGxpY2l0bHkgcHV0IG91dCBldmVyeSBvcHRpb25cbiAqICAgICAgICAgIG9uZSBwb3NzaWJsZSB0aGluZyB3ZSBjb3VsZCBkbyBpcyBnZXQgYSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgXG4gKiAgICAgICAgICBvZiB0aGUgY29uc3RydWN0b3IgYW5kIGxvb2sgZm9yIHRoZSBzdWJzdHJpbmcgXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIlxuICogICAgICAgICAgQnV0IEkgZG9uJ3Qga25vdyBob3cgcmVsaWFibGUgdGhhdCBpcy4gIFJhdGhlciwgaXQncyBraW5kIG9mIGhhY2tpc2guXG4gKiAgICAgICAgICBTaG91bGQgdGVob3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBleGFtaW5lZFxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiB0eXBlc1xuKiovXG5mdW5jdGlvbiBpc1NrQnVpbHRpbihvYmope1xuICAgIHJldHVybiAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5kaWN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5saXN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi50dXBsZSkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uYm9vbCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uaW50XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZmxvYXRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5zdHIpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxuZyk7XG4gICAgLy92YXIgY29uc19zdHIgPSBvYmouY29uc3RydWN0b3IgKyBcIlwiO1xuICAgIC8vcmV0dXJuIGNvbnNfc3RyLmluZGV4T2YoXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FzdE5vZGUob2JqKXtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIFwiX2FzdG5hbWVcIiBpbiBvYmo7XG59XG5cbi8qKlxuICogU2hvdWxkIHRoZW9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaSwgYnV0IEkgcHV0IGl0IGhlcmUgaW5zdGVhZCB0byBub3QgbWVzcyB1cCB0aGUgc2t1bHB0IGZpbGVzXG4gKiBsaWtlIHRoZSBub3JtYWwgU2suZmZpLnJlbWFwVG9QeSwgaXQgZG9lc24ndCB3b3JrIGZvciBmdW5jdGlvbnMgb3IgbW9yZSBjb21wbGV4IG9iamVjdHMsIGJ1dCBpdCBoYW5kbGVzXG4gKiBjYXNlcyB3aGVyZSB0aGUgdHlwZXMgaW4gb2JqIGFyZSBhIG1peCBvZiBweXRob24gU0lNUExFIG9iamVjdHMgYW5kIFNJTVBMRSBub3JtYWwgamF2YXNjcmlwdCBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWRcbiAqIEByZXR1cm4ge1NrLmJ1aWx0aW4uPz8/fSAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHl0aG9uIG9iamVjdCwgZHJvcHBpbmcgYWxsIGZ1bmN0aW9ucyBhbmQgdGhpbmdzIGl0IGNhbid0IGNvbnZlcnRcbioqL1xuZnVuY3Rpb24gbWl4ZWRSZW1hcFRvUHkob2JqKXtcbiAgICB2YXIgaztcbiAgICB2YXIga3ZzO1xuICAgIHZhciBpO1xuICAgIHZhciBhcnI7XG4gICAgLy9AVE9ETzogc2hvdWxkIHRoZW9yZXRpY2FsbHkgY2hlY2sgaWYgdGhlIG9iamVjdCBpcyBhIHB5aG9uIGRpY3Qgb3IgYXJyYXkgd2l0aCBqcyBvYmplY3RzXG4gICAgaWYgKGlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAvL29iamVjdCBpcyBhbHJlYWR5IHB5dGhvbiByZWFkeVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIikge1xuICAgICAgICAvL29iamVjdCBpcyBhY3R1YWxseSBhIGphdmFzY3JpcHQgYXJyYXlcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIC8vZm9yIGVhY2ggb2JqZWN0LCBjb252ZXJ0IGl0IHRvIGEgcHl0aG9uIG9iamVjdCBpZiBpdCBpc24ndCBvbmUgYWxyZWFkeVxuICAgICAgICAgICAgdmFyIHN1YnZhbCA9IG9ialtpXTtcbiAgICAgICAgICAgIGlmKCFpc1NrQnVpbHRpbihzdWJ2YWwpKXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChtaXhlZFJlbWFwVG9QeShzdWJ2YWwpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1YnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoYXJyKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkgey8vbnVsbCBvYmplY3RcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYoIWlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAgICAgLy9hc3N1bWluZyBpdCdzIGEgc3RhbmRhcmQgZGljdGlvbmFyeVxuICAgICAgICAgICAga3ZzID0gW107Ly9Tay5idWlsdGluLmRpY3QgdXNlcyBhbiBhcnJheSBvZiBrZXktdmFsdWUsa2V5LXZhbHVlLi4uXG4gICAgICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBrZXkgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkoaykpO1xuICAgICAgICAgICAgICAgIC8vY292ZXJ0IGNvcnJlc3BvbmRpbmcgdmFsdWUgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkob2JqW2tdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NyZWF0ZSB0aGUgbmV3IGRpY3Rpb25hcnlcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5kaWN0KGt2cyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLmFzc2skKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uYm9vbChvYmopO1xuICAgIH0gZWxzZSBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmoubmFtZSk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fOyJdLCJzb3VyY2VSb290IjoiIn0=