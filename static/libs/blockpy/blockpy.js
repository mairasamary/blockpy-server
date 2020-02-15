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
      this.makeExtraSubscriptions();
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
    key: "loadNoSubmission",
    value: function loadNoSubmission(assignment) {
      this.model.submission.code(assignment.starting_code);
      Object(_files__WEBPACK_IMPORTED_MODULE_8__["loadConcatenatedFile"])(assignment.extra_starting_files, this.model.submission.extraFiles);
    }
  }, {
    key: "loadSubmission",
    value: function loadSubmission(submission, assignment) {
      if (!submission) {
        // TODO: Scarier "You are not logged in message"
        this.loadNoSubmission(assignment);
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
      this.components.fileSystem.dismountExtraFiles();
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
      this.loadSubmission(data.submission, assignment);
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
                self.components.fileSystem.newFileDialog("instructor");
                return;

              case "student":
                self.components.fileSystem.newFileDialog("student");
                return;

              case "starting":
                self.components.fileSystem.newFileDialog("starting");
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
          extraStartingFiles: Object(_files__WEBPACK_IMPORTED_MODULE_8__["observeConcatenatedFile"])(model.assignment.extraStartingFiles),
          displayFilename: function displayFilename(path) {
            if (path === "?mock_urls.blockpy") {
              return "URL Data";
            }

            if (path.startsWith("&")) {
              return path.slice(1);
            }

            return path;
          }
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
    key: "makeExtraSubscriptions",
    value: function makeExtraSubscriptions() {
      var _this = this;

      this.model.display.changedInstructions.subscribe(function (changed) {
        _this.components.server.logEvent("X-Instructions.Change", "", "", changed, "instructions.md");
      });
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
        var userInputtedValue = input.val();
        Sk.queuedInput.push(userInputtedValue);
        resolveOnClick(userInputtedValue);
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

BlockPyDialog.prototype.close = function () {
  this.tag.modal("hide");
};
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



var ASSIGNMENT_SETTINGS = [["toolbox", "toolbox", "normal", "toolbox", "Which version of the toolbox to present to the user."], //["toolboxLevel", "toolbox_level", "normal", "toolbox", "INCOMPLETE: What level of toolbox to present to the user (hiding and showing categories)."],
["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT, _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"], "The Python editor mode to start in when the student starts the problem."], ["datasets", "datasets", "", "string", "The current list of datasets available on load as a comma-separated string."], ["disableTimeout", "disable_timeout", false, "bool", "If checked, then students code is allowed to run without timeouts (potentially allowing infinite loops)."], ["isParsons", "is_parsons", false, "bool", "If checked, then this is a parson's style question (jumbled)."], ["disableFeedback", "disable_feedback", false, "bool", "If checked, then no instructor scripts are run (e.g., on_run and on_eval)."], ["disableInstructorRun", "disable_instructor_run", false, "bool", "If checked, then the instructor on_run will not automatically run the students' code. This still runs the students' code."], ["disableStudentRun", "disable_student_run", false, "bool", "If checked, then the run button no longer run the students' code. This still runs the instructor's feedback on_run script."], ["disableTifa", "disable_tifa", false, "bool", "If checked, then do not automatically run Tifa (which can be slow)."], ["disableTrace", "disable_trace", false, "bool", "If checked, then the students code will not have its execution traced (no variables recorded, no coverage tracked)."], ["disableEdit", "can_edit", false, "bool", "If checked, then the students' file will not be editable at all."], ["enableBlocks", "can_blocks", true, "bool", "If checked, then the student cannot edit the block interface (although it is visible)."], ["onlyInteractive", "only_interactive", false, "bool", "If checked, the editors are hidden, the program is automatically run, and then the console enters Eval mode (interactive)."], ["onlyUploads", "only_uploads", false, "bool", "If unchecked, then the students' file will not be directly editable (they will have to upload submissions)."], // What menus/feedback to show and hide
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
var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div class=\"blockpy-view-settings\">\n    \n    <form>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-12 mx-auto\">\n                <button type=\"button\" class=\"btn btn-success\"\n                    data-bind=\"click: ui.editors.settings.save\">Save changes</button>\n            </div>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-name\" class=\"col-sm-2 col-form-label text-right\">Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-name\"\n                data-bind=\"value: assignment.name\">\n                <small class=\"form-text text-muted\">\n                    The student-facing name of the assignment. Assignments within a group are ordered alphabetically\n                    by their name, so you may want to use a naming scheme like \"#43.5) Whatever\".\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-url\" class=\"col-sm-2 col-form-label text-right\">URL:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-url\"\n                data-bind=\"value: assignment.url\">\n                <small class=\"form-text text-muted\">\n                    The course-unique URL that can be used to consistently refer to this assignment. \n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-public\">Public:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-public\"\n                    data-bind=\"checked: assignment.public\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If not public, users outside of the course will not be able to see the assignment in course listings.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-hidden\">Hidden:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-hidden\"\n                    data-bind=\"checked: assignment.hidden\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If hidden, students will not be able to see their grade while working on the assignment.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Reviewed:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-reviewed\"\n                    data-bind=\"checked: assignment.reviewed\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If reviewed, the assignment need to be commented upon and regraded by the staff after submission.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Starting View:</label>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                    ".concat(makeStartViewTab("Blocks", "th-large", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].BLOCK), "\n                    ").concat(makeStartViewTab("Split", "columns", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT), "\n                    ").concat(makeStartViewTab("Text", "align-left", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].TEXT), "\n                 </div>\n            </div>            \n            <div class=\"col-sm-7\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("startView"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-ip-ranges\" class=\"col-sm-2 col-form-label text-right\">IP Ranges:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-ip-ranges\"\n                data-bind=\"value: assignment.ipRanges\">\n                <small class=\"form-text text-muted\">\n                    Provide a comma-separated list of IP Addresses that will be explicitly allowed. If blank,\n                    then all addresses are allowed. If an address starts with <code>^</code> then it it is explicitly\n                    blacklisted, but that can be overridden in turn with a <code>!</code>. Addresses can also\n                    include a bit mask to allow a range of addresses.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-datasets\" class=\"col-sm-2 col-form-label text-right\">Preloaded Datasets:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-datasets\"\n                data-bind=\"value: assignment.settings.datasets\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("datasets"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-toolbox\" class=\"col-sm-2 col-form-label text-right\">Block Toolbox:</label>\n            <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"blockpy-settings-toolbox\"\n                       data-bind=\"value: assignment.settings.toolbox\">\n                   <option value=\"normal\">Normal Toolbox</option>\n                   <option value=\"ct\">CT@VT Toolbox</option>\n                   <option value=\"minimal\">Minimal Set</option>\n                   <option value=\"full\">All Blocks</option>\n                </select>\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("toolbox"), "\n                </small>\n            </div>\n        </div>\n        \n        ").concat(ASSIGNMENT_SETTINGS_BOOLEAN_COMPONENTS_HTML, "\n    </form>\n    \n    </div>\n");
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
      } else {
        model.assignment.settings[clientName](setting[2]);
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
        defaultValue = setting[2],
        fieldType = setting[3];

    if (configuration[serverName] === undefined) {
      settings[clientName] = ko.observable(defaultValue);
    } else {
      var configValue = configuration["assignment.settings." + serverName];

      if (fieldType === "bool") {
        configValue = configValue.toLowerCase() === "true";
      }

      settings[clientName] = ko.observable(configValue);
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

var PYTHON_EDITOR_HTML = "\n    <div class=\"blockpy-python-toolbar col-md-12 btn-toolbar\"\n         role=\"toolbar\" aria-label=\"Python Toolbar\">\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Run Group\">         \n            <button type=\"button\" class=\"btn blockpy-run\"\n                data-bind=\"click: ui.execute.run,\n                            css: {'blockpy-run-running': ui.execute.isRunning}\">\n                <span class=\"fas fa-play\"></span> Run\n             </button>\n         </div>\n         \n         <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n            <!-- ko if: $root.assignment.settings.enableBlocks() -->\n            ".concat(makeTab("Blocks", "th-large", DisplayModes.BLOCK), "\n            ").concat(makeTab("Split", "columns", DisplayModes.SPLIT), "\n            ").concat(makeTab("Text", "align-left", DisplayModes.TEXT), "\n            <!-- /ko -->\n         </div>\n\n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Reset Group\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\"\n                 data-bind=\"click: ui.editors.reset\">\n                 <span class=\"fas fa-sync\"></span> Reset\n              </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Import Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.importDataset\">\n                <span class=\"fas fa-cloud-download-alt\"></span> Import datasets\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\">\n                <label class=\"btn btn-outline-secondary\">\n                    <span class=\"fas fa-file-upload\"></span> Upload\n                    <input class=\"blockpy-toolbar-upload\" type=\"file\"\n                        hidden\n                        data-bind=\"event: {change: ui.editors.upload}\">\n                 </label>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"caret\"></span>\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                \n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class='dropdown-item blockpy-toolbar-download'\n                        data-bind=\"click: ui.editors.download\">\n                    <span class='fas fa-download'></span> Download\n                    </a>\n                </div>\n            </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"History Group\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                aria-pressed=\"false\"\n                data-bind=\"click: ui.editors.python.toggleHistoryMode,\n                           enable: ui.editors.python.isHistoryAvailable,\n                           css: { active: display.historyMode },\n                           attr: { 'aria-pressed': display.historyMode }\">\n                <span class=\"fas fa-history\"></span> History\n             </button>\n         </div>\n         \n         <!-- Fully functional, but a little too.. Invasive \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Fullscreen Group\"\n            data-bind=\"visible: display.pythonMode() === 'text'\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\"\n                data-bind=\"click: ui.editors.python.fullscreen\">\n                <span class=\"fas fa-expand-arrows-alt\"></span> Fullscreen\n             </button>\n         </div>\n         -->\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Save Group\"\n            data-bind=\"visible: ui.editors.canSave\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-save\"></span> Save\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete Group\"\n            data-bind=\"visible: ui.editors.canDelete\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\",\n                data-bind=\"click: ui.files.delete\">\n                <span class=\"fas fa-trash\"></span> Delete\n             </button>\n         </div>\n         \n         <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Rename Group\"\n            data-bind=\"visible: ui.editors.canRename\">\n             <button type=\"button\" class=\"btn btn-outline-secondary\">\n                <span class=\"fas fa-file-signature\"></span> Rename\n             </button>\n         </div>\n         \n    </div>\n    \n    ").concat(_history__WEBPACK_IMPORTED_MODULE_1__["HISTORY_TOOLBAR_HTML"], "\n\n\n    <div class=\"blockpy-python-blockmirror\"\n        data-bind=\"hidden: ui.menu.isSubmitted\">\n    </div>\n");

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
      "blocklyMediaPath": main.model.configuration.blocklyPath,
      "toolbox": main.model.assignment.settings.toolbox() //'height': '2000px'

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
      this.main.model.assignment.settings.enableBlocks.subscribe(function (enabled) {
        if (!enabled) {
          _this4.bm.setMode(DisplayModes.TEXT);
        } else {
          _this4.bm.setMode(_this4.main.model.display.pythonMode());
        }
      });
      this.main.model.assignment.settings.toolbox.subscribe(function (toolbox) {
        _this4.bm.configuration.toolbox = toolbox;

        _this4.bm.blockEditor.remakeToolbox();
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
      } // TODO: update dynamically when changing instructor status


      this.codeMirror.setOption("readOnly", newFilename.startsWith("&") && !this.main.model.display.instructor());
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
      this.codeMirror.setOption("readOnly", false);

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
      var _this = this;

      // Access point for instructor data
      this.engine = engine;
      Sk.executionReports = this.main.model.execution.reports;
      Sk.console = this.main.components.console;
      Sk.queuedInput = [];
      Sk.configure(this.getSkulptOptions()); // Set openFile as mechanism to read files

      Sk.inBrowser = this.openFile.bind(this); // Proxy requests

      Sk.requestsGet = function (url, data, timeout) {
        return _this.openURL(url, data, timeout);
      };

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
    key: "openURL",
    value: function openURL(url, data, timeout) {
      //return new Promise((resolve, reject) => {
      var mockUrlData = this.main.components.fileSystem.getFile("?mock_urls.blockpy");

      if (mockUrlData == null) {
        throw new Sk.builtin.IOError("Cannot access url: URL Data was not made available for this assignment");
      }

      mockUrlData = JSON.parse(mockUrlData.handle());

      for (var filename in mockUrlData) {
        if (mockUrlData.hasOwnProperty(filename)) {
          for (var i = 0; i < mockUrlData[filename].length; i += 1) {
            if (mockUrlData[filename][i] === url) {
              var fileData = this.main.components.fileSystem.readFile(filename);
              return fileData;
            }
          }
        }
      } //reject(new Sk.builtin.IOError("Cannot access url: "+url+" was not made available for this assignment"));


      throw new Sk.builtin.IOError("Cannot access url: " + url + " was not made available for this assignment"); //});
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
      var found = this.main.components.fileSystem.searchForFile(filename, false);

      if (found === undefined) {
        throw new Sk.builtin.OSError("File not found: " + filename);
      } else {
        return found.contents();
      }
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
      } else if (Sk.builtinFiles === undefined) {
        throw new Sk.builtin.OSError("Built-in modules not accessible.");
      } else if (Sk.builtinFiles["files"][filename] !== undefined) {
        return Sk.builtinFiles["files"][filename];
      } else {
        var found = this.main.components.fileSystem.searchForFile(filename, false);

        if (found === undefined) {
          throw new Sk.builtin.OSError("File not found: '" + filename + "'");
        } else {
          return found.contents();
        }
      }
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
  } // TODO: Add in Sk.queuedInput to be passed in


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

      Sk.builtinFiles.files["src/lib/utility/__init__.js"] = _configurations__WEBPACK_IMPORTED_MODULE_0__["EMPTY_MODULE"];
      return this;
    }
  }, {
    key: "openFile",
    value: function openFile(filename) {
      var found = this.main.components.fileSystem.searchForFile(filename, true);
      console.log(filename, found);

      if (found === undefined) {
        throw new Sk.builtin.OSError("File not found: " + filename);
      } else {
        return found.contents();
      }
    }
  }, {
    key: "importFile",
    value: function importFile(filename) {
      if (this.isForbidden(filename)) {
        throw "File not accessible: '" + filename + "'";
      } else if (filename === "./answer.py") {
        return this.main.model.submission.code();
      } else if (Sk.builtinFiles === undefined) {
        throw new Sk.builtin.OSError("Built-in modules not accessible.");
      } else if (Sk.builtinFiles["files"][filename] !== undefined) {
        return Sk.builtinFiles["files"][filename];
      } else {
        var found = this.main.components.fileSystem.searchForFile(filename, true);

        if (found === undefined) {
          throw new Sk.builtin.OSError("File not found: '" + filename + "'");
        } else {
          return found.contents();
        }
      }
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

var FEEDBACK_HTML = "\n\n<span class='blockpy-floating-feedback text-muted-less pull-right position-sticky sticky-top'\n    aria-hidden=\"true\" role=\"presentation\" aria-label=\"New Feedback Alert\">\n    New feedback &uarr;\n</span>\n\n<div class='blockpy-feedback col-md-6 blockpy-panel'\n            role=\"region\" aria-label=\"Feedback\"\n            aria-live=\"polite\">\n\n    <!-- Feedback/Trace Visibility Control -->\n    <button type='button'\n            class='btn btn-sm btn-outline-secondary float-right'\n            data-bind=\"click: ui.secondRow.advanceState\">\n        <span class='fas fa-eye'></span>\n        <span data-bind=\"text: ui.secondRow.switchLabel\"></span>\n    </button>\n\n    <!-- Actual Feedback Region -->    \n    <div>\n        <strong>Feedback: </strong>\n        <span class='badge blockpy-feedback-category feedback-badge'\n            data-bind=\"css: ui.feedback.badge,\n                       text: ui.feedback.category\">Feedback Kind</span>\n        <small data-bind=\"text: submission.score()+'%',\n                          visible: display.instructor() && execution.feedback.label()\"\n            class=\"text-muted\"></small>\n    </div>\n    <div>\n        <strong class=\"blockpy-feedback-label\"\n            data-bind=\"text: execution.feedback.label\"></strong>\n        <div class=\"blockpy-feedback-message\"\n            data-bind=\"html: execution.feedback.message\"></div>\n    </div>\n</div>            \n";
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
/* harmony import */ var utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities.js */ "./src/utilities.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // ${makeTab("?mock_urls.blockpy", "URL Data", true)}

var makeTab = function makeTab(filename, friendlyName, hideIfEmpty, notInstructor) {
  if (friendlyName === undefined) {
    friendlyName = filename;
  }

  var instructorFileClass = "";
  var hideIfNotInstructor = "true";

  if (!notInstructor) {
    instructorFileClass = "blockpy-file-instructor";
    hideIfNotInstructor = "display.instructor()";
  }

  return "\n    <li class=\"nav-item ".concat(instructorFileClass, "\">\n        <a class=\"nav-link\" href=\"#\"\n            data-toggle=\"tab\"\n            data-bind=\"css: {active: display.filename() === '").concat(filename, "'},\n                click: display.filename.bind($data, '").concat(filename, "'),\n                visible: (!").concat(hideIfEmpty, " || ui.files.hasContents('").concat(filename, "')) && ").concat(hideIfNotInstructor, "\">\n            ").concat(friendlyName, "</a>\n    </li>");
};

var FILES_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-files\"\n    data-bind=\"visible: ui.files.visible\">\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n\n    <li class=\"nav-item\">\n        <strong>View: </strong>\n    </li>\n\n    ".concat(makeTab("answer.py", undefined, undefined, true), "\n    ").concat(makeTab("!instructions.md", "Instructions"), "\n    ").concat(makeTab("!assignment_settings.blockpy", "Settings"), "\n    ").concat(makeTab("^starting_code.py", "Starting Code"), "\n    ").concat(makeTab("!on_run.py", "On Run"), "\n    ").concat(makeTab("!on_change.py", "On Change", true), "\n    ").concat(makeTab("!on_eval.py", "On Eval", true), "\n    ").concat(makeTab("!sample_submissions.blockpy", "Sample Submissions", true), "\n    ").concat(makeTab("!tags.blockpy", "Tags", true), "\n    \n    <!-- ko foreach: assignment.extraInstructorFiles -->\n        <li class=\"nav-item\"\n            data-bind=\"css: {'blockpy-file-instructor': !filename().startsWith('&')},\n                       visible: filename().startsWith('&') || $root.display.instructor() \">\n            <a class=\"nav-link\" href=\"#\"\n                data-toggle=\"tab\"\n                data-bind=\"css: {active: $root.display.filename() === filename(),\n                                 uneditable: filename().startsWith('&')},\n                            click: $root.display.filename.bind($data, filename()),\n                            text: $root.ui.files.displayFilename(filename())\">\n            </a>        \n        </li>\n    <!-- /ko -->\n    <!-- ko foreach: assignment.extraStartingFiles -->\n        <li class=\"nav-item blockpy-file-instructor\"\n            data-bind=\"visible: $root.display.instructor()\">\n            <a class=\"nav-link\" href=\"#\"\n                data-toggle=\"tab\"\n                data-bind=\"css: {active: $root.display.filename() === filename()},\n                            click: $root.display.filename.bind($data, filename()),\n                            text: filename\">\n            </a>        \n        </li>\n    <!-- /ko -->\n    \n    <!-- ko foreach: submission.extraFiles -->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"\n                data-toggle=\"tab\"\n                data-bind=\"css: {active: $root.display.filename() === filename()},\n                            click: $root.display.filename.bind($data, filename()),\n                            text: $root.ui.files.displayFilename(filename())\">\n            </a>        \n        </li>\n    <!-- /ko -->\n  \n    <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\n         role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Add New</a>\n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?mock_urls.blockpy'),\n                           click: ui.files.add.bind($data, '?mock_urls.blockpy')\">URL Data</a>\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?tags.blockpy')\">Tags</a>\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"hidden: ui.files.hasContents('?sample_submissions.blockpy')\">Sample Submissions</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"hidden: assignment.onChange,\n                           click: ui.files.add.bind($data, '!on_change.py')\">On Change</a>\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"hidden: assignment.onEval,\n                           click: ui.files.add.bind($data, '!on_eval.py')\">On Eval</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"click: ui.files.add.bind($data, 'starting')\">Starting File</a>\n            <a class=\"dropdown-item blockpy-file-instructor\" href=\"#\"\n                data-bind=\"click: ui.files.add.bind($data, 'instructor')\">Instructor File</a>\n            <a class=\"dropdown-item\" href=\"#\"\n                data-bind=\"click: ui.files.add.bind($data, 'student')\">Student File</a>\n        </div>\n    </li>\n  \n</ul>\n</div>\n");
var NEW_INSTRUCTOR_FILE_DIALOG_HTML = "\n<form>\n<div class=\"form-group row\">\n    <!-- Filename -->\n    <div class=\"col-sm-2 text-right\">\n        <label for=\"blockpy-instructor-file-dialog-filename\">Filename:</label>\n    </div>\n    <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control blockpy-instructor-file-dialog-filename\"\n            id=\"blockpy-instructor-file-dialog-filename\">    \n    </div>\n    <!-- Filetype -->\n    <div class=\"col-sm-2 text-right mt-2\">\n        <label for=\"blockpy-instructor-file-dialog-filetype\">Filetype: </label>\n    </div>\n    <div class=\"col-sm-10\">\n        <span class=\"blockpy-instructor-file-dialog-filetype\"\n            id=\"blockpy-instructor-file-dialog-filetype\"></span>    \n    </div>\n    <!-- Inaccessible to student? -->\n    <div class=\"col-sm-2 text-right mt-2\">\n        <label for=\"blockpy-instructor-file-dialog-namespace\">Namespace: </label>\n    </div>\n    <div class=\"col-sm-4\">\n        <select class=\"form-control blockpy-instructor-file-dialog-namespace\"\n            id=\"blockpy-instructor-file-dialog-namespace\">\n            <option value=\"!\">Completely inaccessible</option>\n            <option value=\"?\">Hidden from student, accessible programatically</option>\n            <option value=\"&\">Visible to student, but not editable</option>\n        </select>\n    </div>\n</div>\n</form>\n";
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
var INSTRUCTOR_DIRECTORY = "_instructor/";
var STUDENT_DIRECTORY = "_student/";
var SearchModes = {
  EVERYWHERE: "EVERYWHERE",
  START_WITH_INSTRUCTOR: "START_WITH_INSTRUCTOR",
  ONLY_STUDENT_FILES: "ONLY_STUDENT_FILES"
};
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

function makeMockModelFile(_filename, _contents) {
  return {
    filename: function filename() {
      return _filename;
    },
    contents: function contents() {
      return _contents;
    }
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
    this.main.model.display.instructor.subscribe(function (visiblity) {
      $(".blockpy-file-instructor").toggle(visiblity);
    });
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
        this.observeInArray_(file, this.main.model.assignment.extraInstructorFiles);
      } else if (file.filename === "!tags.blockpy") {
        file.handle = this.main.model.assignment.tags;
      } else if (file.filename === "!assignment_settings.blockpy") {
        file.handle = this.main.model.assignment.settings;
      } else if (file.filename === "$settings.blockpy") {
        file.handle = this.main.model.display;
      } else if (file.filename.startsWith("^")) {
        this.observeInArray_(file, this.main.model.assignment.extraStartingFiles);
      } else if (file.filename.startsWith("!") || file.filename.startsWith("?") || file.filename.startsWith("&")) {
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
    key: "dismountExtraFiles",
    value: function dismountExtraFiles() {
      for (var name in this.files_) {
        if (this.files_.hasOwnProperty(name)) {
          if (UNDELETABLE_FILES.indexOf(name) === -1) {
            delete this.files_[name];
            delete this.watches_[name];
          }
        }
      } // TODO: Shouldn't we notify the UI that the file was deleted?

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

        if (contents !== undefined) {
          newFile.handle(contents);
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
    key: "searchForFile",
    value: function searchForFile(name, studentSearch) {
      /*
      files.*
      _instructor/files.*
      _student/files.*
        If a student searches for a file, it checks the "?", "&", "*", "" namespaces
          import helper => "./helper.py"
          open("external.json") => "external.json"
      If an instructor searches for a file, it checks "!", "^", "?", "&", "*", "" namespaces
          To explicitly search instructor namespaces first
              import _instructor.helper => "./instructor/helper.py"
              open("_instructor/external.json") => "_instructor/external.json"
          to allow student files to override:
              import helper => "./helper.py"
              open("external.json") => "external.json"
          to only check student files, prepend with _student
       */
      // Chop off starting "./"
      if (name.startsWith("./")) {
        name = name.slice(2);
      }

      var searchMode = SearchModes.EVERYWHERE; // Should the search be start with instructor side?

      if (name.startsWith(INSTRUCTOR_DIRECTORY)) {
        name = name.slice(INSTRUCTOR_DIRECTORY.length);
        searchMode = SearchModes.START_WITH_INSTRUCTOR;
      } // Should the search be limited to the student mode?


      if (name.startsWith(STUDENT_DIRECTORY)) {
        name = name.slice(STUDENT_DIRECTORY.length);
        searchMode = SearchModes.ONLY_STUDENT_FILES;
      } else if (studentSearch) {
        searchMode = SearchModes.ONLY_STUDENT_FILES;
      } // Shortcut for instructor versions


      var extraStudentFiles = this.main.model.submission.extraFiles();
      var extraInstructorFiles = this.main.model.assignment.extraInstructorFiles();
      var extraStartingFiles = this.main.model.assignment.extraStartingFiles(); // Check special files (TODO: how would an instructor access "./_instructor/answer.py"?

      var specialFile = this.searchForSpecialFiles_(name, searchMode);

      if (specialFile !== undefined) {
        return specialFile;
      } // Start looking through possible files


      var studentVersion = this.searchForFileInList_(extraStudentFiles, name);
      var generatedVersion = this.searchForFileInList_(extraStudentFiles, "*" + name);
      var defaultVersion = this.searchForFileInList_(extraInstructorFiles, "&" + name);

      if (searchMode === SearchModes.ONLY_STUDENT_FILES) {
        return Object(utilities_js__WEBPACK_IMPORTED_MODULE_0__["firstDefinedValue"])(defaultVersion, studentVersion, generatedVersion);
      }

      var instructorVersion = this.searchForFileInList_(extraInstructorFiles, "!" + name);
      var hiddenVersion = this.searchForFileInList_(extraInstructorFiles, "?" + name);
      var startingVersion = this.searchForFileInList_(extraStartingFiles, "^" + name);

      if (searchMode === SearchModes.START_WITH_INSTRUCTOR) {
        return Object(utilities_js__WEBPACK_IMPORTED_MODULE_0__["firstDefinedValue"])(instructorVersion, hiddenVersion, startingVersion, defaultVersion, studentVersion, generatedVersion);
      } else if (searchMode === SearchModes.EVERYWHERE) {
        return Object(utilities_js__WEBPACK_IMPORTED_MODULE_0__["firstDefinedValue"])(defaultVersion, studentVersion, generatedVersion, instructorVersion, hiddenVersion, startingVersion);
      }
    }
  }, {
    key: "searchForFileInList_",
    value: function searchForFileInList_(modelList, filename) {
      for (var i = 0; i < modelList.length; i++) {
        if (modelList[i].filename() === filename) {
          return modelList[i];
        }
      }

      return undefined;
    }
  }, {
    key: "searchForSpecialFiles_",
    value: function searchForSpecialFiles_(filename, searchMode) {
      if (searchMode === SearchModes.ONLY_STUDENT_FILES) {
        if (filename === "answer.py") {
          return makeMockModelFile("_instructor/answer.py", this.main.model.submission.code());
        }

        return undefined;
      }

      switch (filename) {
        case "answer.py":
          return makeMockModelFile("_instructor/answer.py", this.main.model.submission.code());

        case "on_run.py":
          return makeMockModelFile("_instructor/on_run.py", this.main.model.assignment.onRun());

        case "on_change.py":
          return makeMockModelFile("_instructor/on_change.py", this.main.model.assignment.onChange());

        case "on_eval.py":
          return makeMockModelFile("_instructor/on_eval.md", this.main.model.assignment.onEval());

        case "instructions.md":
          return makeMockModelFile("_instructor/instructions.md", this.main.model.assignment.instructions());

        case "starting_code.py":
          return makeMockModelFile("_instructor/starting_code.py", this.main.model.assignment.startingCode());
      }

      return undefined;
    }
  }, {
    key: "newFileDialog",
    value: function newFileDialog(kind) {
      var _this2 = this;

      var body = $(NEW_INSTRUCTOR_FILE_DIALOG_HTML);
      var filename = body.find(".blockpy-instructor-file-dialog-filename");
      var filetype = body.find(".blockpy-instructor-file-dialog-filetype");
      var namespace = body.find(".blockpy-instructor-file-dialog-namespace");
      var extensionRegex = /(?:\.([^.]+))?$/;
      filename.on("input", function () {
        var extension = extensionRegex.exec(filename.val())[1];
        extension = extension === undefined ? "No extension" : extension; //TODO: this.main.components.editors.getEditorFromExtension(extension);

        filetype.text(extension);
      });

      var yes = function yes() {
        var prefix = "";

        if (kind === "instructor") {
          prefix = namespace.val();
        } else if (kind === "starting") {
          prefix = "^";
        }

        if (filename.val()) {
          filename = prefix + filename.val();

          _this2.newFile(filename);
        }
      };

      body.submit(function (e) {
        e.preventDefault();
        yes();

        _this2.main.components.dialog.close();
      });
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
var FOOTER_HTML = "\n<div class=\"col-md-12 blockpy-panel blockpy-status\">\n    <div>\n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadAssignment')\">Load Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveAssignment')\">Save Assignment</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadFile')\">Load File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('saveFile')\">Save File</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('loadDataset')\">Load Dataset</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('logEvent')\">Log Event</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('updateSubmission'),\n                                        click: ui.server.force.updateSubmission\">Update Submission</span>, \n        <span class=\"badge\" data-bind=\"class: ui.server.status('onExecution')\">Execution</span>\n    </div>\n    <div\n        <span data-bind=\"text: ui.server.messages\"></span>\n    </div>\n    <div>\n        <span>User: <span data-bind=\"text: user.id\"></span> (<span data-bind=\"text: user.name\"></span>, <span data-bind=\"text: user.role\"></span>)</span>, \n        <span>Course: <span data-bind=\"text: user.courseId\"></span></span>,\n        <span>Group: <span data-bind=\"text: user.groupId\"></span></span>,\n        <span>Assignment: <span data-bind=\"text: assignment.id\"></span></span>,\n        <span>Assignment Version: <span data-bind=\"text: assignment.version\"></span></span>,\n        <span>Submission: <span data-bind=\"text: submission.id\"></span></span>, \n        <span>Submission Version: <span data-bind=\"text: submission.version\"></span></span>\n    </div>\n</div>\n";

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
  if (timeString === undefined) {
    return "Undefined Time";
  }

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
    this.setStatus("saveAssignment", StatusState.OFFLINE, "Server is not connected! (Save Assignment)");
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
        server.setStatus("loadFile", StatusState.FAILED, response.message);
      }
    }, function (e, textStatus, errorThrown) {
      errorCallback("Server failure! Report to instructor");
      console.error(errorThrown);
    });
  } else {
    errorCallback("No file server available.");
    this.setStatus("loadFile", StatusState.OFFLINE, "Server is not connected! (Load File)");
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
/*! exports provided: indent, slug, encodeHTML, firstDefinedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indent", function() { return indent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeHTML", function() { return encodeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstDefinedValue", function() { return firstDefinedValue; });
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

function firstDefinedValue() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) {
      return arguments[i];
    }
  }

  return undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsIm1ha2VFeHRyYVN1YnNjcmlwdGlvbnMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsImRpcnR5U3VibWlzc2lvbiIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUltYWdlIiwic2F2ZUltYWdlTWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzIiwidXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsInN0YXJ0aW5nX2NvZGUiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX3N0YXJ0aW5nX2ZpbGVzIiwibG9hZE5vU3VibWlzc2lvbiIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJ1c2VyX2lkIiwiY291cnNlX2lkIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwiZmlsZVN5c3RlbSIsImRpc21vdW50RXh0cmFGaWxlcyIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwiaXBfcmFuZ2VzIiwib25fY2hhbmdlIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwiY2FuTWFya1N1Ym1pdHRlZCIsInRleHRNYXJrU3VibWl0dGVkIiwiaXNDb21wbGV0ZWQiLCJpc1N1Ym1pdHRlZCIsImNsaWNrTWFya1N1Ym1pdHRlZCIsImFsZXJ0IiwiZW5naW5lIiwiZGVsYXllZFJ1biIsInRvTG93ZXJDYXNlIiwic2Vjb25kUm93IiwiaXNGZWVkYmFja1Zpc2libGUiLCJpc1RyYWNlVmlzaWJsZSIsIlRSQUNFIiwiaXNDb25zb2xlU2hvd1Zpc2libGUiLCJzd2l0Y2hMYWJlbCIsImFkdmFuY2VTdGF0ZSIsImN1cnJlbnRQYW5lbCIsIk5PTkUiLCJzaXplIiwiaGlkZUV2YWx1YXRlIiwiQUNUSVZFIiwiYmFkZ2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwibmV3RmlsZURpYWxvZyIsImRlbGV0ZUZpbGUiLCJleHRyYVN0dWRlbnRGaWxlcyIsIm9ic2VydmVDb25jYXRlbmF0ZWRGaWxlIiwiZGlzcGxheUZpbGVuYW1lIiwic3RhcnRzV2l0aCIsInNsaWNlIiwiZWRpdG9ycyIsImdldEVkaXRvciIsInZpZXciLCJoaWRlRWRpdG9ycyIsIm1hcCIsInN1YnN0ciIsIm1ha2VNb2RlbEZpbGUiLCJjb250ZW50cyIsImNhblNhdmUiLCJjYW5EZWxldGUiLCJVTkRFTEVUQUJMRV9GSUxFUyIsImluZGV4T2YiLCJjYW5SZW5hbWUiLCJVTlJFTkFNQUJMRV9GSUxFUyIsInVwbG9hZCIsInVwbG9hZEZpbGUiLCJiaW5kIiwiZG93bmxvYWQiLCJkb3dubG9hZEZpbGUiLCJpbXBvcnREYXRhc2V0Iiwib3BlbkRpYWxvZyIsInB5dGhvbiIsImZ1bGxzY3JlZW4iLCJjb2RlTWlycm9yIiwicHl0aG9uRWRpdG9yIiwiYm0iLCJ0ZXh0RWRpdG9yIiwic2V0T3B0aW9uIiwiZ2V0T3B0aW9uIiwidXBkYXRlTW9kZSIsIm5ld01vZGUiLCJvbGRQeXRob25Nb2RlIiwiaXNIaXN0b3J5QXZhaWxhYmxlIiwiaXNFbmRwb2ludENvbm5lY3RlZCIsInR1cm5PZmZIaXN0b3J5TW9kZSIsInVwZGF0ZUVkaXRvciIsInNldFJlYWRPbmx5IiwidHVybk9uSGlzdG9yeU1vZGUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9hZCIsImRpYWxvZyIsIkVSUk9SX0xPQURJTkdfSElTVE9SWSIsInRvZ2dsZUhpc3RvcnlNb2RlIiwibW92ZVRvU3RhcnQiLCJtb3ZlUHJldmlvdXMiLCJtb3ZlTmV4dCIsIm1vc3RSZWNlbnQiLCJtb3ZlVG9Nb3N0UmVjZW50IiwidXNlIiwic2F2ZSIsImV4ZWN1dGUiLCJpc1J1bm5pbmciLCJydW4iLCJldmFsdWF0ZSIsIm1lc3NhZ2VzIiwiZm9yY2UiLCJldmVudCIsInRhcmdldCIsImZhZGVPdXQiLCJmYWRlSW4iLCJtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zIiwiYXBwbHlCaW5kaW5ncyIsIm1haW4iLCJ0ZXh0IiwiRWFzeU1ERSIsInByb3RvdHlwZSIsIkJsb2NrUHlEaWFsb2ciLCJmaW5kIiwiQmxvY2tQeUZlZWRiYWNrIiwiQmxvY2tQeVRyYWNlIiwiQmxvY2tQeUNvbnNvbGUiLCJCbG9ja1B5RW5naW5lIiwiQmxvY2tQeUZpbGVTeXN0ZW0iLCJFZGl0b3JzIiwiYnlOYW1lIiwiQmxvY2tQeVNlcnZlciIsIkJsb2NrUHlDb3JnaXMiLCJCbG9ja1B5SGlzdG9yeSIsInN1YnNjcmliZSIsImNoYW5nZWQiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ1c2VySW5wdXR0ZWRWYWx1ZSIsInZhbCIsInF1ZXVlZElucHV0IiwicHVzaCIsInByb3AiLCJjbGljayIsImtleXVwIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsIkNvbnNvbGVMaW5lRXZhbHVhdGUiLCJDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUiLCJ0YWciLCJwcmludGVyVGFnIiwiTUlOSU1VTV9XSURUSCIsIk1JTklNVU1fSEVJR0hUIiwiREVGQVVMVF9IRUlHSFQiLCJoZWlnaHQiLCJjbGVhciIsInJlbW92ZUFsbCIsImxpbmVCdWZmZXIiLCJwbG90QnVmZmVyIiwiZW1wdHkiLCJ0dXJ0bGVMaW5lIiwiVHVydGxlR3JhcGhpY3MiLCJnZXRUdXJ0bGVMaW5lIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImFzc2V0cyIsImxvYWRBc3NldCIsInJlbmRlciIsImN1cnJlbnRQcmludGVyRGltZW5zaW9uIiwic2F2ZVR1cnRsZU91dHB1dCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJwYWdlIiwiZWFjaCIsImF0dHIiLCJzaG93IiwiaGlkZSIsImxpbmVUZXh0IiwiZmx1c2giLCJjaGFyQXQiLCJzcGxpdExpbmVzIiwic3BsaXQiLCJhZGRDb250ZW50IiwiaSIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJ0ZXh0VG9CbG9ja3MiLCJoaWRkZW5JbXBvcnRzIiwiZ2V0SlNPTiIsImJsb2NrcHkiLCJkb2N1bWVudGF0aW9uIiwiYm9keSIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwic2x1Z2dlZE5hbWUiLCJ0aXRsZU5hbWUiLCJpbWdTcmMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiYXBwZW5kVG8iLCJESUFMT0dfSFRNTCIsInRpdGxlVGFnIiwiYm9keVRhZyIsImZvb3RlclRhZyIsIm9rYXlCdXR0b24iLCJ5ZXMiLCJtb2RhbCIsImNsb3NlIiwib25jbG9zZSIsImRyYWdnYWJsZSIsIm9uIiwiY29uZmlybSIsIm5vIiwieWVzVGV4dCIsIkFTU0lHTk1FTlRfVkVSU0lPTl9DSEFOR0VEIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJqb2luIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCIsIkJMT0NLIiwic2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyIsImNsaWVudE5hbWUiLCJzZXJ2ZXJOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwic3RhcnRfdmlldyIsImZpZWxkVHlwZSIsImNvbmZpZ1ZhbHVlIiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsImRpcnR5IiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwibmV3Q29udGVudHMiLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJtYWtlVGFiIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiSElTVE9SWV9UT09MQkFSX0hUTUwiLCJjb252ZXJ0SXB5bmJUb1B5dGhvbiIsImlweW5iIiwiaXNVc2FibGUiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwidG9vbGJveCIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwibWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwiZW5hYmxlQmxvY2tzIiwib25seVVwbG9hZHMiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIlRleHRFZGl0b3IiLCJFZGl0b3JzRW51bSIsIlNVQk1JU1NJT04iLCJBU1NJR05NRU5UIiwiSU5TVFJVQ1RJT05TIiwiT05fUlVOIiwiT05fQ0hBTkdFIiwiT05fRVZBTCIsIlNUQVJUSU5HX0NPREUiLCJTQU1QTEVfU1VCTUlTU0lPTlMiLCJJTlNUUlVDVE9SX0ZJTEUiLCJTUEVDSUFMX05BTUVTUEFDRVMiLCJBVkFJTEFCTEVfRURJVE9SUyIsIkVESVRPUlNfSFRNTCIsInJlZ2lzdGVyZWRfIiwiZXh0ZW5zaW9uc18iLCJieU5hbWVfIiwicmVnaXN0ZXJFZGl0b3IiLCJpbnN0YW5jZSIsImV4aXQiLCJlbnRlciIsInNwYWNlIiwibGFzdEluZGV4T2YiLCJleGVjdXRpb25Nb2RlbCIsImNvbmZpZ3VyYXRpb25zIiwiUnVuQ29uZmlndXJhdGlvbiIsImV2YWwiLCJFdmFsQ29uZmlndXJhdGlvbiIsIk9uUnVuQ29uZmlndXJhdGlvbiIsIk9uQ2hhbmdlQ29uZmlndXJhdGlvbiIsIk9uRXZhbENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmUiLCJnZXRTa3VscHRPcHRpb25zIiwib25FeGVjdXRpb25CZWdpbiIsIm9uRXhlY3V0aW9uRW5kIiwicmVwb3J0IiwicmVzZXRTdHVkZW50TW9kZWwiLCJyZXNldFJlcG9ydHMiLCJyZXNldEV4ZWN1dGlvbkJ1ZmZlciIsInRoZW4iLCJmYWlsdXJlIiwiZGlzYWJsZUZlZWRiYWNrIiwic2hvd0Vycm9ycyIsImV4ZWN1dGlvbkVuZF8iLCJldmFsdWF0aW9uSW5wdXQiLCJ1c2VySW5wdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiRklMRU5BTUUiLCJwcm9ncmFtcyIsInRyaW0iLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJ1cGRhdGVQYXJzZSIsInJ1bkluc3RydWN0b3JDb2RlIiwibW9kdWxlIiwiZXhlY3V0aW9uUmVwb3J0cyIsInByZXNlbnRGZWVkYmFjayIsIiRkIiwiRU1QVFlfTU9EVUxFIiwiQ29uZmlndXJhdGlvbiIsImluQnJvd3NlciIsIm9wZW5GaWxlIiwicmVxdWVzdHNHZXQiLCJ0aW1lb3V0Iiwib3BlblVSTCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxld3JpdGUiLCJ3cml0ZUZpbGUiLCJwcmludCIsImlucHV0ZnVuIiwiaW5wdXRmdW5UYWtlc1Byb21wdCIsImltYWdlUHJveHkiLCJnZXRJbWFnZVByb3h5IiwicmV0YWluR2xvYmFscyIsIndhcm4iLCJtb2NrVXJsRGF0YSIsImJ1aWx0aW4iLCJJT0Vycm9yIiwiaGFzT3duUHJvcGVydHkiLCJmaWxlRGF0YSIsInJlYWRGaWxlIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJmb3VuZCIsInNlYXJjaEZvckZpbGUiLCJPU0Vycm9yIiwiY2xlYXJUaW1lb3V0IiwiV1JBUF9JTlNUUlVDVE9SX0NPREUiLCJzdHVkZW50Q29kZSIsImluc3RydWN0b3JDb2RlIiwicXVpY2siLCJpc1NhZmUiLCJzYWZlQ29kZSIsImluZGVudGVkQ29kZSIsImluZGVudCIsImRpc2FibGVUaWZhIiwic3R1ZGVudENvZGVTYWZlIiwiZXZhbHVhdGlvbiIsImR1bW15T3V0U2FuZGJveCIsImxpbmVPZmZzZXQiLCJORVdfTElORV9SRUdFWCIsIlNVQ0NFU1MiLCJTQ09SRSIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwidGlmYUFuYWx5c2lzIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsImZpbmlzaFR1cnRsZXMiLCJiZWdpbkV2YWwiLCJwYXJzZXIiLCJ2ZXJpZmllciIsIlNhbXBsZUNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXRGdW5jdGlvbiIsImRpc2FibGVUaW1lb3V0IiwiSW5maW5pdHkiLCJpc0ZvcmJpZGRlbiIsInZhcmlhYmxlcyIsImxvY2FscyIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJwYXJzZUdsb2JhbHMiLCJwcm9wZXJ0aWVzIiwibW9kdWxlcyIsImFzdCIsInZpc2l0ZWRMaW5lcyIsIlNldCIsInZpc2l0Qm9keSIsIm5vZGUiLCJsaW5lbm8iLCJzdGF0ZW1lbnQiLCJvcmVsc2UiLCJmaW5hbGJvZHkiLCJBcnJheSIsImZyb20iLCJhc3RGcm9tUGFyc2UiLCJjc3QiLCJmbGFncyIsImdldExpbmVzIiwicHJlc2VudFJ1bkVycm9yIiwiRkVFREJBQ0tfSFRNTCIsImZlZWRiYWNrTW9kZWwiLCJvZmZzZXQiLCJ0b3AiLCJ2aXNpYmlsaXR5QnVmZmVyIiwidG9wT2ZFbGVtZW50IiwiYm90dG9tT2ZFbGVtZW50IiwiYm90dG9tT2ZTY3JlZW4iLCJ0b3BPZlNjcmVlbiIsImV4ZWN1dGlvblJlc3VsdHMiLCJNRVNTQUdFIiwiQ0FURUdPUlkiLCJMQUJFTCIsIkRBVEEiLCJoaWRlU2NvcmUiLCJmaW5kRmlyc3RFcnJvckxpbmUiLCJzdHVkZW50UmVwb3J0IiwidW5jb3ZlcmVkTGluZXMiLCJ1cGRhdGVGZWVkYmFjayIsIm5vdGlmeUZlZWRiYWNrVXBkYXRlIiwibXNnIiwiYXJncyIsInYiLCJjb252ZXJ0U2t1bHB0RXJyb3IiLCJmaWxlbmFtZUV4ZWN1dGVkIiwidHJhY2ViYWNrIiwiZnJhbWUiLCJzY29wZSIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJub3RJbnN0cnVjdG9yIiwiaW5zdHJ1Y3RvckZpbGVDbGFzcyIsImhpZGVJZk5vdEluc3RydWN0b3IiLCJGSUxFU19IVE1MIiwiTkVXX0lOU1RSVUNUT1JfRklMRV9ESUFMT0dfSFRNTCIsIlNUQVJUSU5HX0ZJTEVTIiwiQkFTSUNfTkVXX0ZJTEVTIiwiSU5TVFJVQ1RPUl9ESVJFQ1RPUlkiLCJTVFVERU5UX0RJUkVDVE9SWSIsIlNlYXJjaE1vZGVzIiwiRVZFUllXSEVSRSIsIlNUQVJUX1dJVEhfSU5TVFJVQ1RPUiIsIk9OTFlfU1RVREVOVF9GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwibWFrZU1vY2tNb2RlbEZpbGUiLCJjb25jYXRlbmF0ZWRGaWxlIiwibW9kZWxGaWxlTGlzdCIsIm1vZGVsRmlsZXMiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsInZpc2libGl0eSIsInRvZ2dsZSIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsInN0dWRlbnRTZWFyY2giLCJzZWFyY2hNb2RlIiwic3BlY2lhbEZpbGUiLCJzZWFyY2hGb3JTcGVjaWFsRmlsZXNfIiwic3R1ZGVudFZlcnNpb24iLCJzZWFyY2hGb3JGaWxlSW5MaXN0XyIsImdlbmVyYXRlZFZlcnNpb24iLCJkZWZhdWx0VmVyc2lvbiIsImZpcnN0RGVmaW5lZFZhbHVlIiwiaW5zdHJ1Y3RvclZlcnNpb24iLCJoaWRkZW5WZXJzaW9uIiwic3RhcnRpbmdWZXJzaW9uIiwibW9kZWxMaXN0Iiwia2luZCIsImZpbGV0eXBlIiwibmFtZXNwYWNlIiwiZXh0ZW5zaW9uUmVnZXgiLCJleGVjIiwicHJlZml4Iiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJGT09URVJfSFRNTCIsImN1cnJlbnRJZCIsImVkaXRFdmVudHMiLCJzZWxlY3RvciIsImVkaXRJZCIsImVudHJ5IiwiZmlsZV9wYXRoIiwiZXZlbnRfdHlwZSIsIlJFTUFQX0VWRU5UX1RZUEVTIiwiZGlzcGxheWVkIiwicHJldHR5UHJpbnREYXRlVGltZSIsImNsaWVudF90aW1lc3RhbXAiLCJkaXNhYmxlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJpc0VkaXRFdmVudCIsImV2dCIsInBhcnNlSW50IiwibW9udGhOYW1lcyIsIndlZWtEYXlzIiwiaXNTYW1lRGF5Iiwic2Vjb25kIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0aW1lU3RyaW5nIiwibm93IiwiRGF0ZSIsInBhc3QiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJkYXlTdHIiLCJnZXREYXkiLCJtb250aFN0ciIsImRhdGUiLCJnZXRIaXN0b3J5IiwicmV2ZXJzZSIsInJlZHVjZSIsImNvbXBsZXRlIiwiZWxlbSIsImNvbXBsZXRlX3N0ciIsInRpbWUiLCJuZXdfbGluZSIsImhpZ2hsaWdodFRpbWVvdXQiLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsIlRSQUNFX0hUTUwiLCJSRVRSWUlORyIsIk9GRkxJTkUiLCJzdG9yYWdlIiwicXVldWUiLCJnZXREZWZhdWx0IiwiTUFYX1FVRVVFX1NJWkUiLCJUSU1FUl9ERUxBWSIsIkZBSUxfREVMQVkiLCJ0aW1lcnMiLCJvdmVybGF5IiwiYmxvY2tpbmdBdHRlbXB0cyIsImNhY2hlZEZpbGVuYW1lcyIsImNyZWF0ZVN1YnNjcmlwdGlvbnMiLCJjaGVja0NhY2hlcyIsImNoZWNrSVAiLCJvbGRJUCIsImlwIiwic2V0IiwiX3Bvc3RMYXRlc3RSZXRyeSIsInB1c2hBbnlRdWV1ZWQiLCJfcG9zdFJldHJ5IiwiY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiIsImNyZWF0ZVNlcnZlckRhdGEiLCJtaWNyb3NlY29uZHMiLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJzaG93T3ZlcmxheSIsImF0dGVtcHQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3NzIiwiaGlkZU92ZXJsYXkiLCJfZW5xdWV1ZURhdGEiLCJjYWNoZSIsIl9kZXF1ZXVlRGF0YSIsInNwbGljZSIsImRlbGF5IiwicG9zdFJlcXVlc3QiLCJwb3N0IiwidGV4dFN0YXR1cyIsInJlcXVlc3QiLCJjYWNoZWRUaW1lIiwiX3Bvc3RCbG9ja2luZyIsImF0dGVtcHRzIiwiZXJyb3JUaHJvd24iLCJsb2FkQXNzaWdubWVudERhdGFfIiwiRVJST1JfU0FWSU5HX0FTU0lHTk1ORU5UIiwiZGlyZWN0b3J5IiwibmV3U3RhdHVzIiwicG9zdFN0YXR1c0NoYW5nZSIsImVycm9yQ2FsbGJhY2siLCJsb2FkX2ZpbGUiLCJoaWRkZW5PdmVycmlkZSIsImZvcmNlVXBkYXRlIiwiZ2V0UG5nRnJvbUJsb2NrcyIsInBuZ0RhdGEiLCJtb2QiLCJub25lIiwibm9uZSQiLCJwcmlvciIsInRpbWVpdCIsImZ1bmMiLCJweUNoZWNrQXJncyIsImRpZmZlcmVuY2UiLCJkZWJ1ZyIsImdldF9vdXRwdXQiLCJpdGVtIiwidG9Ta3VscHQiLCJsaXN0IiwicmVzZXRfb3V0cHV0IiwicXVldWVfaW5wdXQiLCJweUNoZWNrVHlwZSIsImNoZWNrU3RyaW5nIiwiZ2V0X3Byb2dyYW0iLCJnZXRfZXZhbHVhdGlvbiIsInRyYWNlX2xpbmVzIiwiZ2V0X3N0dWRlbnRfZXJyb3IiLCJ0dXBsZSIsImhhZF9leGVjdXRpb25fdGltZV9lcnJvciIsImJhY2t1cFRpbWUiLCJsaW1pdF9leGVjdXRpb25fdGltZSIsImV4ZWNTdGFydCIsInVubGltaXRfZXhlY3V0aW9uX3RpbWUiLCJzdXBwcmVzc19zY3JvbGxpbmciLCJnZXRfcGxvdHMiLCJvdXRwdXRzIiwiZ3JhcGgiLCJwbG90IiwibmV3UGxvdCIsInkiLCJTdHVkZW50RGF0YSIsImJ1aWxkQ2xhc3MiLCIkZ2JsIiwiJGxvYyIsIl9faW5pdF9fIiwibmV3RGljdCIsImRpY3QiLCJhYnN0ciIsInNhdHRyIiwic3RyIiwib2JqZWN0U2V0SXRlbSIsInVuZml4UmVzZXJ2ZWQiLCJjYWxsX2YiLCJrd2EiLCJweUNoZWNrQXJnc0xlbiIsImNhbGwiLCJrd2FyZ3MiLCJidWlsdGlucyIsImZ1bmN0aW9uTmFtZSIsImlucHV0cyIsIm1wJGxvb2t1cCIsInRwJGdldGF0dHIiLCJmdW5jdGlvbk9iamVjdCIsInRwJGNhbGwiLCJjb19rd2FyZ3MiLCJjb19uYW1lIiwiZ2V0X25hbWVzX2J5X3R5cGUiLCJleGNsdWRlX2J1aWx0aW5zIiwiY2hlY2tCb29sIiwicHJvcGVydHkiLCJnZXRfdmFsdWVzX2J5X3R5cGUiLCJjYWxsc2ltT3JTdXNwZW5kIiwiZ2V0X3N0dWRlbnRfZGF0YSIsInNldF9pbnN0cnVjdGlvbnMiLCJuZXdJbnN0cnVjdGlvbnMiLCJnZXRfbW9kZWxfaW5mbyIsIkxPQ0FMX1NUT1JBR0VfUkVGIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJfZGF0YSIsIlN0cmluZyIsImdldEl0ZW0iLCJpc19uZXciLCJzZXJ2ZXJfdGltZSIsInN0b3JlZF90aW1lIiwiSUdOT1JFRF9HTE9CQUxTIiwicGFyc2VkIiwicGFyc2VWYWx1ZSIsIl9fbmFtZV9fIiwiZnVsbExlbmd0aCIsImZ1bmNfY29kZSIsImNvX3Zhcm5hbWVzIiwic3EkbGVuZ3RoIiwiYm9vbCIsIm5tYmVyIiwic2tUeXBlIiwiaW50XyIsImZsb2F0XyIsIk51bWJlciIsImFycmF5Q29udGFpbnMiLCJuZWVkbGUiLCJoYXlzdGFjayIsImFycmF5VW5pcXVlIiwiYSIsImNvbmNhdCIsImoiLCJleHBhbmRBcnJheSIsImFkZEFycmF5IiwicmVtb3ZlQXJyYXkiLCJjb3B5QXJyYXkiLCJjbG9uZU5vZGUiLCJjbG9uZSIsIm5vZGVUeXBlIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlVmFsdWUiLCJjaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInJhbmRvbUludGVnZXIiLCJmbG9vciIsInJhbmRvbSIsIkJsb2NrbHkiLCJXb3Jrc3BhY2VTdmciLCJzaHVmZmxlIiwibWV0cmljcyIsImdldE1ldHJpY3MiLCJ2aWV3V2lkdGgiLCJ2aWV3SGVpZ2h0IiwiYmxvY2tzIiwiZ2V0VG9wQmxvY2tzIiwibWF4aW1hbF9pbmNyZWFzZSIsImdldFJlbGF0aXZlVG9TdXJmYWNlWFkiLCJtb3ZlQnkiLCJtb3ZlRWxlbWVudHMiLCJtb3ZlQ2hlY2siLCJpc1NrQnVpbHRpbiIsIm9iaiIsImxuZyIsImlzQXN0Tm9kZSIsIm1peGVkUmVtYXBUb1B5IiwiayIsImt2cyIsImFyciIsInN1YnZhbCIsImFzc2skIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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bnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4vdHJhY2VcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29uc29sZX0gZnJvbSBcIi4vY29uc29sZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlGZWVkYmFja30gZnJvbSBcImZlZWRiYWNrLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVNlcnZlcn0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeURpYWxvZ30gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb3JnaXMsIF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfSBmcm9tIFwiLi9jb3JnaXNcIjtcclxuaW1wb3J0IHtCbG9ja1B5SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5tYWtlRXh0cmFTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRWZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVTdWJtaXNzaW9uczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHJldmlld2VkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnJldmlld2VkXCJdKSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYzoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5wdWJsaWNcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBpcFJhbmdlczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pcF9yYW5nZXNcIl0pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInN1Ym1pc3Npb24uY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShcIlN0YXJ0ZWRcIiksXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiTm90UmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudGx5IHZpc2libGUgRmlsZSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHByZXNlbnRlZCB3aXRoIHRoZSBpbnN0cnVjdG9yIHNldHRpbmdzIGFuZCBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5pbnN0cnVjdG9yXCIsIFwiZmFsc2VcIikudG9TdHJpbmcoKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IEhpc3RvcnkgbW9kZSBpcyBlbmdhZ2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGhpc3RvcnlNb2RlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgYXV0by1zYXZpbmcgY2hhbmdlcyBpbiBQeXRob24gZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgKiBJZiBhbiBpbnRlZ2VyLCBzcGVjaWZpZXMgdGhlIGRlbGF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKG1pY3Jvc2Vjb25kcykuXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5ldmVyIG9uIGluIG5vbi1QeXRob24gZWRpdG9ycy5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfGludH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYXV0b1NhdmU6IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25zb2xlIGlzIGZ1bGwgd2lkdGggYW5kIGZlZWRiYWNrIGlzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBiaWdDb25zb2xlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGhlaWdodCB0byB1c2UgZm9yIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgbnVsbCwgdGhlbiBsZXQgdGhlIGhlaWdodCByZW1haW4gdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBhIG51bWJlciwgdGhlbiB0aGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoaWNoIHBhbmVsIHRvIHNob3cgaW4gdGhlIHNlY29uZCByb3cncyBzZWNvbmQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRSb3dTZWNvbmRQYW5lbDoga28ub2JzZXJ2YWJsZShTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSB0cmFjaW5nIHRoZSBjb2RlIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmFjZUV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBsaXN0IG9mIHByb21pc2VzIHRvIHN0aWxsIHJlc29sdmUgd2hpbGUgbG9hZGluZyBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFByb21pc2U+fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YXNldHM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSB0ZW1wb3JhcnkgY2hhbmdlZCB2YWx1ZSBvZiB0aGUgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGZyb20gd2hhdCBpcyBpbiB0aGUgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkSW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBIGhvbGRlciBmb3IgdGhlIHRpbWVyIHRvIHRyaWdnZXIgb24tY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT25DaGFuZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgZmVlZGJhY2sgYW5kIG91dHB1dCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBzdWJtaXNzaW9uLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyB3b3VsZCBiZSBmYWxzZSBpZiB0aGVyZSBpcyBubyBmZWVkYmFjay9vdXRwdXQgKGkuZS4sIGNvZGUgaGFzIG5vdCBiZWVuIHJ1biksXHJcbiAgICAgICAgICAgICAgICAgKiBvciBpZiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIHN1Ym1pc3Npb24gYWZ0ZXIgdGhlIGxhc3QgcnVuIChlLmcuLCBieSBlZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgdGV4dCkuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGRpcnR5U3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2U6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5vU3VibWlzc2lvbihhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbiwgYXNzaWdubWVudCkge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBTY2FyaWVyIFwiWW91IGFyZSBub3QgbG9nZ2VkIGluIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICB0aGlzLmxvYWROb1N1Ym1pc3Npb24oYXNzaWdubWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLm93bmVySWQoc3VibWlzc2lvbi51c2VyX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnVzZXIuY291cnNlSWQoc3VibWlzc2lvbi5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKHN1Ym1pc3Npb24uZXh0cmFfZmlsZXMsIHRoaXMubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXNzaWdubWVudERhdGFfKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJlc2V0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGlzbW91bnRFeHRyYUZpbGVzKCk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5wdWJsaWMoYXNzaWdubWVudC5wdWJsaWMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKGFzc2lnbm1lbnQuaXBfcmFuZ2VzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKGFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQubmFtZShhc3NpZ25tZW50Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShhc3NpZ25tZW50Lm9uX2NoYW5nZSB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9jaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9jaGFuZ2UucHlcIiwgYXNzaWdubWVudC5vbl9jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKGFzc2lnbm1lbnQub25fZXZhbCB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9ldmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fZXZhbC5weVwiLCBhc3NpZ25tZW50Lm9uX2V2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oYXNzaWdubWVudC5vbl9ydW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub3duZXJJZChhc3NpZ25tZW50Lm93bmVyX2lkKTtcclxuICAgICAgICBsb2FkQXNzaWdubWVudFNldHRpbmdzKHRoaXMubW9kZWwsIGFzc2lnbm1lbnQuc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3MoYXNzaWdubWVudC50YWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRTYW1wbGVTdWJtaXNzaW9ucyhhc3NpZ25tZW50LnNhbXBsZV9zdWJtaXNzaW9ucyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9pbnN0cnVjdG9yX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfc3RhcnRpbmdfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZFN1Ym1pc3Npb24oZGF0YS5zdWJtaXNzaW9uLCBhc3NpZ25tZW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQod2FzU2VydmVyQ29ubmVjdGVkKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuY29yZ2lzLmxvYWREYXRhc2V0cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGVsTWV0aG9kcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICBtb2RlbC51aSA9IHtcclxuICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgaXNHcmFkZXI6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudXNlci5yb2xlKCkgPT09IFwib3duZXJcIiB8fCBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJncmFkZXJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZCgpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobnVsbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICAgICAgY2FuTWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB0ZXh0TWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwudWkubWVudS5pc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFzc2lnbm1lbnQgY2xvc2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVvcGVuIGZvciBlZGl0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlN1Ym1pdCBlYXJseVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tNYXJrU3VibWl0dGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBjYW5ub3QgcmVvcGVuIGNsb3NlZCBhc3NpZ25tZW50cy4gQ29udGFjdCBhIGdyYWRlciFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiaW5Qcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiU3VibWl0dGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXR0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vjb25kUm93OiB7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWRiYWNrVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0tcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc1RyYWNlVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbnNvbGVTaG93VmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlKCkgfHwgbW9kZWwudWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hMYWJlbDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBUcmFjZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGFkdmFuY2VTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFuZWwgPSBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uc29sZToge1xyXG4gICAgICAgICAgICAgICAgc2l6ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoaWRlRXZhbHVhdGU6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkgfHwgIW1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vLWVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRWRpdG9yIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW50ZXJuYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxnb3JpdGhtIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlRGlhbG9nKFwiaW5zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0dWRlbnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGVEaWFsb2coXCJzdHVkZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGVEaWFsb2coXCJzdGFydGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RmlsZW5hbWU6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJVUkwgRGF0YVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiJlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3IobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUVkaXRvcnMoKSA/IFwiTm9uZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPyBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKSA6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuUmVzZXRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5jb2RlKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyhtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcygpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lKCkuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5TYXZlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhbW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpKSxcclxuICAgICAgICAgICAgICAgIGNhbkRlbGV0ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgY2FuUmVuYW1lOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5SRU5BTUFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydERhdGFzZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuY29yZ2lzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBweXRob246IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlTWlycm9yID0gc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0RWRpdG9yLmNvZGVNaXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlTWlycm9yLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNvZGVNaXJyb3IuZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNb2RlOiAobmV3TW9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1WaWV3LkNoYW5nZVwiLCBcIlwiLCBcIlwiLCBuZXdNb2RlLCBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUobmV3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iub2xkUHl0aG9uTW9kZSA9IG5ld01vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGlzdG9yeUF2YWlsYWJsZToga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9mZkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IudXBkYXRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5Pbkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEhpc3RvcnkoKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubG9hZChyZXNwb25zZS5oaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT25IaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9TdGFydCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVByZXZpb3VzKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVOZXh0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RSZWNlbnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb01vc3RSZWNlbnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS51c2UoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmU6ICgpID0+IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpc1J1bm5pbmc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBydW46ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVJbWFnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZm9yY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2VsZi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuZmFkZU91dCgxMDApLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBCbG9ja1B5VHJhY2UobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb25zb2xlID0gbmV3IEJsb2NrUHlDb25zb2xlKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktY29uc29sZVwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5lbmdpbmUgPSBuZXcgQmxvY2tQeUVuZ2luZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmZpbGVTeXN0ZW0gPSBuZXcgQmxvY2tQeUZpbGVTeXN0ZW0obWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5lZGl0b3JzID0gbmV3IEVkaXRvcnMobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1lZGl0b3JcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMucHl0aG9uRWRpdG9yID0gdGhpcy5jb21wb25lbnRzLmVkaXRvcnMuYnlOYW1lKFwicHl0aG9uXCIpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuc2VydmVyID0gbmV3IEJsb2NrUHlTZXJ2ZXIobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb3JnaXMgPSBuZXcgQmxvY2tQeUNvcmdpcyhtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmhpc3RvcnkgPSBuZXcgQmxvY2tQeUhpc3RvcnkobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1oaXN0b3J5LXRvb2xiYXJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VFeHRyYVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMuc3Vic2NyaWJlKChjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUluc3RydWN0aW9ucy5DaGFuZ2VcIiwgXCJcIiwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkLCBcImluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dHRlZFZhbHVlID0gaW5wdXQudmFsKCk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKHVzZXJJbnB1dHRlZFZhbHVlKTtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKHVzZXJJbnB1dHRlZFZhbHVlKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICBmaW5pc2hUdXJ0bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Muc2F2ZVR1cnRsZU91dHB1dCgpKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhpcy50dXJ0bGVMaW5lLmh0bWwuZmluZChcImNhbnZhc1wiKS5sYXN0KClbMF07XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlSW1hZ2UoXCJ0dXJ0bGVfb3V0cHV0XCIsIGRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dFRvQmxvY2tzLmhpZGRlbkltcG9ydHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1ODE3OTUxNjY3OTlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4MTc5NTE2Njc4M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSdtYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDo0MDBweCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlIG1vZGVsLWNsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tc3VjY2VzcyBtb2RhbC1va2F5JyBkYXRhLWRpc21pc3M9J21vZGFsJz5Pa2F5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdGhpcy5mb290ZXJUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uID0gdGFnLmZpbmQoXCIubW9kYWwtb2theVwiKTtcblxuICAgIHRoaXMueWVzID0gKCkgPT4ge307XG4gICAgdGhpcy5va2F5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy55ZXMoKTtcbiAgICAgICAgdGhpcy50YWcubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xufVxuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRhZy5tb2RhbChcImhpZGVcIik7XG59O1xuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uLmhpZGUoKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgeWVzLCBubywgeWVzVGV4dCkge1xuICAgIGlmICh5ZXNUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWVzVGV4dCA9IFwiT2theVwiO1xuICAgIH1cbiAgICB0aGlzLnNob3codGl0bGUsIGJvZHksIG5vKTtcbiAgICB0aGlzLnllcyA9IHllcztcbiAgICB0aGlzLm9rYXlCdXR0b24uc2hvdygpLmh0bWwoeWVzVGV4dCk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgXCJZb3VyIGluc3RydWN0b3IgaGFzIG1hZGUgY2hhbmdlcyB0byB0aGlzIGFzc2lnbm1lbnQuIFdvdWxkIHlvdSBsaWtlIHRvIHJlbG9hZD8gQWxsIHlvdXIgd29yayBoYXMgYmVlbiBzYXZlZC5cIiwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuU0NSRUVOU0hPVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ET1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgVXBkYXRpbmcgU3VibWlzc2lvbiBTdGF0dXNcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgeW91ciBzdWJtaXNzaW9uIHN0YXR1cy48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0hJU1RPUlkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgTG9hZGluZyBIaXN0b3J5XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgeW91ciBoaXN0b3J5Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG4iLCJpbXBvcnQge0VkaXRvcnN9IGZyb20gXCIuLi9lZGl0b3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGUgPT5cclxuICAgICAgICBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS51cGxvYWRGaWxlKGUpXHJcbiAgICApO1xyXG4gICAgZmlsZVJlYWRlci5maWxlTmFtZSA9IGZpbGVzWzBdLm5hbWU7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQge25hbWUsIGV4dGVuc2lvbiwgY29udGVudHMsIG1pbWV0eXBlfSA9IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgLy8gTWFrZSBzYWZlXHJcbiAgICBuYW1lID0gc2x1Z2dpZnkobmFtZSk7XHJcbiAgICBuYW1lID0gbmFtZSArIGV4dGVuc2lvbjtcclxuICAgIC8vIE1ha2UgdGhlIGRhdGEgZG93bmxvYWQgYXMgYSBmaWxlXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1ldHlwZX0pO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBuYW1lKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5RG93bmxvYWRMaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtID0gbWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW07XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZURlbGV0ZWQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIHRoZSBwcmV2aW91cyBmaWxlIGluc3RlYWQgb2YgYSBkZWZhdWx0IGZpbGVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVVcGRhdGVkKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gdGhpcy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0N1cnJlbnRGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS53YXRjaEZpbGUodGhpcy5maWxlbmFtZSwge1xyXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm9uRmlsZVVwZGF0ZWQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZGVsZXRlZDogdGhpcy5vbkZpbGVEZWxldGVkLmJpbmQodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZVN5c3RlbS5nZXRGaWxlKG5ld0ZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3RmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgdGhhdCB0aGUgb3RoZXIgZWRpdG9yIHdpbGwgYmUgc3dpdGNoaW5nIHRvXHJcbiAgICAgKiBAcGFyYW0gb2xkRWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gbmV3RWRpdG9yXHJcbiAgICAgKi9cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZS5uYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGVuYW1lLnR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmZpbGUuaGFuZGxlKCksXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCIuL3B5dGhvblwiO1xyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HUyA9IFtcclxuICAgIFtcInRvb2xib3hcIiwgXCJ0b29sYm94XCIsIFwibm9ybWFsXCIsIFwidG9vbGJveFwiLCBcIldoaWNoIHZlcnNpb24gb2YgdGhlIHRvb2xib3ggdG8gcHJlc2VudCB0byB0aGUgdXNlci5cIl0sXHJcbiAgICAvL1tcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVJbnN0cnVjdG9yUnVuXCIsIFwiZGlzYWJsZV9pbnN0cnVjdG9yX3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgaW5zdHJ1Y3RvciBvbl9ydW4gd2lsbCBub3QgYXV0b21hdGljYWxseSBydW4gdGhlIHN0dWRlbnRzJyBjb2RlLiBUaGlzIHN0aWxsIHJ1bnMgdGhlIHN0dWRlbnRzJyBjb2RlLlwiXSxcclxuICAgIFtcImRpc2FibGVTdHVkZW50UnVuXCIsIFwiZGlzYWJsZV9zdHVkZW50X3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgcnVuIGJ1dHRvbiBubyBsb25nZXIgcnVuIHRoZSBzdHVkZW50cycgY29kZS4gVGhpcyBzdGlsbCBydW5zIHRoZSBpbnN0cnVjdG9yJ3MgZmVlZGJhY2sgb25fcnVuIHNjcmlwdC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZW5hYmxlQmxvY2tzXCIsIFwiY2FuX2Jsb2Nrc1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlU3VibWlzc2lvblwiLCBcImhpZGVfc3VibWlzc2lvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBzdWJtaXNzaW9uJ3MgY29kZSBvciBoaXN0b3J5IG9uIENhbnZhcy5cIl0sXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIC8vIFRPRE86IEZpeCB0aGlzIG9uZSB0byBiZSBzZXR0YWJsZVxyXG4gICAgW1wiaGlkZUltcG9ydFN0YXRlbWVudHNcIiwgXCJoaWRlX2ltcG9ydF9zdGF0ZW1lbnRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCBjZXJ0YWluIGtpbmRzIG9mIGltcG9ydCBzdGF0ZW1lbnRzIChtYXRwbG90bGliLCB0dXJ0bGUsIGRhdGFzZXRzKSBhcmUgbm90IHNob3duIGluIHRoZSBibG9jayBpbnRlcmZhY2UuXCJdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZSBjb3ZlcmFnZSBidXR0b24gaXMgbm90IHNob3duLlwiXSxcclxuICAgIFtcInNhdmVUdXJ0bGVPdXRwdXRcIiwgXCJzYXZlX3R1cnRsZV9vdXRwdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdHVydGxlIG91dHB1dCBpcyBzYXZlZCB3aGVuZXZlciB0aGUgcHJvZ3JhbSB1c2VzIGl0LlwiXSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgbmVlZCB0byBiZSBjb21tZW50ZWQgdXBvbiBhbmQgcmVncmFkZWQgYnkgdGhlIHN0YWZmIGFmdGVyIHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+U3RhcnRpbmcgVmlldzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInN0YXJ0Vmlld1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5JUCBSYW5nZXM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LmlwUmFuZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBJUCBBZGRyZXNzZXMgdGhhdCB3aWxsIGJlIGV4cGxpY2l0bHkgYWxsb3dlZC4gSWYgYmxhbmssXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbiBhbGwgYWRkcmVzc2VzIGFyZSBhbGxvd2VkLiBJZiBhbiBhZGRyZXNzIHN0YXJ0cyB3aXRoIDxjb2RlPl48L2NvZGU+IHRoZW4gaXQgaXQgaXMgZXhwbGljaXRseVxyXG4gICAgICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkLCBidXQgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0dXJuIHdpdGggYSA8Y29kZT4hPC9jb2RlPi4gQWRkcmVzc2VzIGNhbiBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSBhIGJpdCBtYXNrIHRvIGFsbG93IGEgcmFuZ2Ugb2YgYWRkcmVzc2VzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWRhdGFzZXRzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+UHJlbG9hZGVkIERhdGFzZXRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWRhdGFzZXRzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcImRhdGFzZXRzXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXRvb2xib3hcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5CbG9jayBUb29sYm94OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdG9vbGJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MudG9vbGJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vcm1hbFwiPk5vcm1hbCBUb29sYm94PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3RcIj5DVEBWVCBUb29sYm94PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWluaW1hbFwiPk1pbmltYWwgU2V0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZnVsbFwiPkFsbCBCbG9ja3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJ0b29sYm94XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHtBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MfVxyXG4gICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oKTtcclxuICAgICAgICAvLyBPbmx5IHN0b3JlIHRoaXMgc2V0dGluZyBpZiBpdHMgZGlmZmVyZW50IGZyb20gdGhlIGRlZmF1bHRcclxuICAgICAgICBpZiAodmFsdWUgIT09IGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tzZXJ2ZXJOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwsIHNldHRpbmdzKSB7XHJcbiAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xyXG4gICAgICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXTtcclxuICAgICAgICAgICAgaWYgKHNlcnZlck5hbWUgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3NbY2xpZW50TmFtZV0oc2V0dGluZ3Nbc2VydmVyTmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nWzJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRfdmlldykge1xyXG4gICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoc2V0dGluZ3Muc3RhcnRfdmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl0sXHJcbiAgICAgICAgICAgIGZpZWxkVHlwZSA9IHNldHRpbmdbM107XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnVmFsdWUgPSBjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zZXR0aW5ncy5cIitzZXJ2ZXJOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJib29sXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ1ZhbHVlID0gY29uZmlnVmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGNvbmZpZ1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn1cclxuXHJcbmNsYXNzIEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IERvIHVwZGF0ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICAvL3RoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlXHJcbiAgICAgICAgLy90aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudFNldHRpbmdzID0ge1xyXG4gICAgbmFtZTogXCJBc3NpZ25tZW50IFNldHRpbmdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BUktET1dOX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIj48L3RleHRhcmVhPiAgICBcclxuYDtcclxuXHJcblxyXG5jbGFzcyBNYXJrZG93bkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMubWRlID0gbmV3IEVhc3lNREUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci1tYXJrZG93blwiKVswXSxcclxuICAgICAgICAgICAgYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JjZVN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBpbWFnZVVwbG9hZEZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJlbmRlcmluZ0NvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY29kZVN5bnRheEhpZ2hsaWdodGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMubWRlLmNvZGVtaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS52YWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLm1kZS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJNYXJrZG93blwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1kXCJdLFxyXG4gICAgY29uc3RydWN0b3I6IE1hcmtkb3duRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBNQVJLRE9XTl9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBUT0RPOiByZW5hbWUgZmlsZXMsIG1hbnVhbCBzYXZlLCB0YWdzLCBzYW1wbGVfc3VibWlzc2lvbnMsIG9uX2V2YWwsIG5vbi1idWlsdGluIGZpbGVzXHJcbiAqIFRPRE86IGltcG9ydCBkYXRhLCBoaXN0b3J5LCBydW4sIHVybF9kYXRhLCBhc3NpZ25tZW50X3NldHRpbmdzLCBwYXJzb25zX21vZGVcclxuICogVE9ETzogZGVsZXRlIGJlY29tZXMgXCJjbGVhclwiIGZvciBpbnN0cnVjdG9yIGZpbGVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBlbnVtIHtzdHJ9XHJcbiAqL1xyXG5pbXBvcnQge0Fic3RyYWN0RWRpdG9yLCBzbHVnZ2lmeX0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7SElTVE9SWV9UT09MQkFSX0hUTUx9IGZyb20gXCIuLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgbGV0IERpc3BsYXlNb2RlcyA9IHtcclxuICAgIEJMT0NLOiBcImJsb2NrXCIsXHJcbiAgICBTUExJVDogXCJzcGxpdFwiLFxyXG4gICAgVEVYVDogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi51cGRhdGVNb2RlLmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQWVRIT05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tdG9vbGJhciBjb2wtbWQtMTIgYnRuLXRvb2xiYXJcIlxyXG4gICAgICAgICByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJQeXRob24gVG9vbGJhclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJ1biBHcm91cFwiPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBibG9ja3B5LXJ1blwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZXhlY3V0ZS5ydW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsnYmxvY2tweS1ydW4tcnVubmluZyc6IHVpLmV4ZWN1dGUuaXNSdW5uaW5nfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8IS0tIGtvIGlmOiAkcm9vdC5hc3NpZ25tZW50LnNldHRpbmdzLmVuYWJsZUJsb2NrcygpIC0tPlxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXQgR3JvdXBcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucmVzZXRcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmltcG9ydERhdGFzZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvc3Bhbj4gSW1wb3J0IGRhdGFzZXRzXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImV2ZW50OiB7Y2hhbmdlOiB1aS5lZGl0b3JzLnVwbG9hZH1cIj5cclxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gYmxvY2tweS10b29sYmFyLWRvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSGlzdG9yeSBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnRvZ2dsZUhpc3RvcnlNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHVpLmVkaXRvcnMucHl0aG9uLmlzSGlzdG9yeUF2YWlsYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7IGFjdGl2ZTogZGlzcGxheS5oaXN0b3J5TW9kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7ICdhcmlhLXByZXNzZWQnOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWhpc3RvcnlcIj48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwhLS0gRnVsbHkgZnVuY3Rpb25hbCwgYnV0IGEgbGl0dGxlIHRvby4uIEludmFzaXZlIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlbiBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiPjwvc3Bhbj4gRnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTYXZlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5TYXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvc3Bhbj4gU2F2ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L3NwYW4+IERlbGV0ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlbmFtZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuUmVuYW1lXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9zcGFuPiBSZW5hbWVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgJHtISVNUT1JZX1RPT0xCQVJfSFRNTH1cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCJcclxuICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKSB7XHJcbiAgICBsZXQgaXB5bmIgPSBKU09OLnBhcnNlKGNvZGUpO1xyXG4gICAgbGV0IGlzVXNhYmxlID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICFjZWxsLnNvdXJjZVswXS5zdGFydHNXaXRoKFwiJVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCBtYWtlUHl0aG9uID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIicnJ1wiK2NlbGwuc291cmNlLmpvaW4oXCJcXG5cIikrXCInJydcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlweW5iLmNlbGxzLmZpbHRlcihpc1VzYWJsZSkubWFwKG1ha2VQeXRob24pLmpvaW4oXCJcXG5cIik7XHJcbn1cclxuXHJcbmNsYXNzIFB5dGhvbkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiKSk7XHJcbiAgICAgICAgdGhpcy5ibSA9IG5ldyBCbG9ja01pcnJvcih7XHJcbiAgICAgICAgICAgIFwiY29udGFpbmVyXCI6IHRoaXMudGFnWzBdLFxyXG4gICAgICAgICAgICBcInJ1blwiOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bi5iaW5kKG1haW4uY29tcG9uZW50cy5lbmdpbmUpLFxyXG4gICAgICAgICAgICBcInNraXBTa3VscHRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJibG9ja2x5TWVkaWFQYXRoXCI6IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5ibG9ja2x5UGF0aCxcclxuICAgICAgICAgICAgXCJ0b29sYm94XCI6IG1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy50b29sYm94KClcclxuICAgICAgICAgICAgLy8naGVpZ2h0JzogJzIwMDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFrZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlRXh0cmFCbG9ja2x5KCkge1xyXG4gICAgICAgIHRoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLmNvbmZpZ3VyZUNvbnRleHRNZW51ID0gKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNjcmVlbnNob3RcIixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuU0NSRUVOU0hPVF9CTE9DS1NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBpZiAob2xkRmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKERpc3BsYXlNb2Rlcy5URVhUKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHRoaXMub2xkUHl0aG9uTW9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudEJNTGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm0uYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9ICgpID0+IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaXNQYXJzb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzRXJyb3Iuc3Vic2NyaWJlKChsaW5lcykgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci1lcnJvci1saW5lXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc1VuY292ZXJlZC5zdWJzY3JpYmUoKGxpbmVzKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci11bmNvdmVyZWQtbGluZVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UucmVuZGVyKCk7XHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSB0aGlzIGRvZXNuJ3QgZW5kIHVwIGxvb2tpbmcgcmlnaHQgKGdvIHRvIGEgZGlmZmVyZW50IGVkaXRvciwgY29tZSBiYWNrLCBhbmQgaXQnbGwgYmUgc3F1aXNoZWQpXHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYm0ucmVmcmVzaCgpLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICBpZiAobmV3Q29udGVudHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IHRoaXMuZmlsZS5oYW5kbGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERvZXNuJ3QgbWF0dGVyLCBmaWxlIHdhcyBhbHJlYWR5IHNodXQgZG93bi5cclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gV2UncmUgY2xvc2luZyB0aGlzIGZpbGVcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8odGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldENvZGUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG5cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmJtLmdldENvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5ibS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLnNldE1vZGUodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKG1vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmVuYWJsZUJsb2Nrcy5zdWJzY3JpYmUoZW5hYmxlZCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKERpc3BsYXlNb2Rlcy5URVhUKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MudG9vbGJveC5zdWJzY3JpYmUodG9vbGJveCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uY29uZmlndXJhdGlvbi50b29sYm94ID0gdG9vbGJveDtcclxuICAgICAgICAgICAgdGhpcy5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5vbmx5VXBsb2Fkcy5zdWJzY3JpYmUoKGNoYW5nZWQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbmdlZCk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWFkT25seSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVhZE9ubHkoY2hhbmdlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkT25seShpc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuVXBsb2FkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpO1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBjb2RlXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5kb3dubG9hZEZpbGUoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09IFwiYW5zd2VyXCIgJiYgcmVzdWx0LmV4dGVuc2lvbiA9PT0gXCIucHlcIikge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHNsdWdnaWZ5KHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5taW1ldHlwZSA9IFwidGV4dC94LXB5dGhvblwiO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5Eb3dubG9hZFwiLCBcIlwiLCBcIlwiLCBcIlwiLCByZXN1bHQubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQeXRob25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnB5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFB5dGhvbkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogUFlUSE9OX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEFHU19FRElUT1JfSFRNTCA9IGBcclxuQ3JlYXRlIG5ld1xyXG5JbXBvcnQgYnkgbmFtZVxyXG5GaW5kIGJ5IG93bmVyL2NvdXJzZS9raW5kXHJcblxyXG5UYWdzOlxyXG4gICAgRGF0YTpcclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgS2luZFxyXG4gICAgICAgIExldmVsXHJcbiAgICAgICAgVmVyc2lvblxyXG4gICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICBDb250cm9sczpcclxuICAgICAgICBFZGl0XHJcbiAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgRGVsZXRlIFxyXG5gO1xyXG5cclxuY2xhc3MgVGFnc0VkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10YWdzXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3NFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiF0YWdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGFnc0VkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEFHU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItdGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNsYXNzIFRleHRFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10ZXh0XCIpWzBdLCB7XHJcbiAgICAgICAgICAgIHNob3dDdXJzb3JXaGVuU2VsZWN0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgZmlyc3RMaW5lTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICBpbmRlbnRVbml0OiA0LFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgICAgICAgICAgXCJUYWJcIjogXCJpbmRlbnRNb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiRXNjXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLmRpc3BsYXkuaW5wdXQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIkYxMVwiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5jb2RlTWlycm9yLnJlZnJlc2guYmluZCh0aGlzLmNvZGVNaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIGR5bmFtaWNhbGx5IHdoZW4gY2hhbmdpbmcgaW5zdHJ1Y3RvciBzdGF0dXNcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iuc2V0T3B0aW9uKFwicmVhZE9ubHlcIiwgbmV3RmlsZW5hbWUuc3RhcnRzV2l0aChcIiZcIikgJiYgIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVNaXJyb3Iuc2V0VmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVNaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLnNldE9wdGlvbihcInJlYWRPbmx5XCIsIGZhbHNlKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcIm1vZGVsXCJdID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIH07XG5cbiAgICByZXNldFN0dWRlbnRNb2RlbCgpIHtcbiAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnN0dWRlbnQ7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFN0ZXAobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LnJlc3VsdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0RXhlY3V0aW9uQnVmZmVyKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHtcbiAgICAgICAgICAgIFwidHJhY2VcIjogW10sXG4gICAgICAgICAgICBcInN0ZXBcIjogMCxcbiAgICAgICAgICAgIFwibGluZVwiOiAwLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGludGVyZmFjZSBhc3BlY3RzIG9mIHRoZSBwcmV2aW91cyBSdW4uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIFRPRE86IENsZWFyIG91dCBhbnkgY292ZXJhZ2UvdHJhY2UvZXJyb3IgaGlnaGxpZ2h0cyBpbiBlZGl0b3JzXG4gICAgICAgIC8vIFJlc2V0IGV4ZWN1dGlvbiBpbiBtb2RlbFxuICAgICAgICB0aGlzLnJlc2V0U3R1ZGVudE1vZGVsKCk7XG4gICAgICAgIC8vIEdldCByZXBvcnRzIHJlYWR5XG4gICAgICAgIHRoaXMucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgZXhlY3V0aW9uIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlc2V0RXhlY3V0aW9uQnVmZmVyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgY29uc29sZSBvZiBwcmludGVkIHN0dWZmXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBvbGQgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxheWVkUnVuKCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksIDEpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ydW4udXNlKHRoaXMpO1xuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uUnVuLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5jb25maWd1cmF0aW9uLnNob3dFcnJvcnMuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uUnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5leGVjdXRpb25FbmRfLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIGxldCBldmFsdWF0aW9uSW5wdXQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmV2YWx1YXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWx1YXRpb25JbnB1dCk7XG4gICAgICAgIGV2YWx1YXRpb25JbnB1dC50aGVuKCh1c2VySW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMuZXZhbC51c2UodGhpcywgdXNlcklucHV0KTtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vbkV2YWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZhbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkV2YWwudXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV2YWx1YXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uQ2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHJldHVybiBTay5taXNjZXZhbC5hc3luY1RvUHJvbWlzZSgoKSA9PlxuICAgICAgICAgICAgU2suaW1wb3J0TWFpbldpdGhCb2R5KHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmNvZGUsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVkIHdoZW5ldmVyIHRoZSBQeXRob24gY29kZSBjaGFuZ2VzXG4gICAgICovXG4gICAgb25fY2hhbmdlKCkge1xuICAgICAgICBsZXQgRklMRU5BTUUgPSBcIm9uX2NoYW5nZVwiO1xuICAgICAgICAvLyBTa2lwIGlmIHRoZSBpbnN0cnVjdG9yIGhhcyBub3QgZGVmaW5lZCBhbnl0aGluZ1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tGSUxFTkFNRV0oKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNoYW5naW5nXCIpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUNvZGUoKTtcbiAgICAgICAgLy8gT24gc3RlcCBkb2VzIG5vdCBwZXJmb3JtIHBhcnNlIGFuYWx5c2lzIGJ5IGRlZmF1bHQgb3IgcnVuIHN0dWRlbnQgY29kZVxuICAgICAgICBsZXQgZW5naW5lID0gdGhpcztcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGVuZ2luZS5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgZW5naW5lLnZlcmlmeUNvZGUoKTtcbiAgICAgICAgZW5naW5lLnVwZGF0ZVBhcnNlKCk7XG4gICAgICAgIGVuZ2luZS5ydW5JbnN0cnVjdG9yQ29kZShGSUxFTkFNRSwgdHJ1ZSwgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNob3cgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICEoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50RmVlZGJhY2soY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2sobW9kdWxlLiRkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImVuZ2luZVwiLCBcIm9uX2NoYW5nZVwiKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGF0dGVtcHQgdG8gY2FsbCB0aGUgZGVmaW5lZCBvbkV4ZWN1dGlvbkVuZCxcbiAgICAgKiBidXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZXJlIGlzIG5vIGZ1bmN0aW9uIGRlZmluZWQuXG4gICAgICovXG4gICAgZXhlY3V0aW9uRW5kXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25FbmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZXhlY3V0aW9uQmVnaW5fKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkJlZ2luICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgRU1QVFlfTU9EVUxFID0gXCJsZXQgJGJ1aWx0aW5tb2R1bGUgPSBmdW5jdGlvbihtb2QpeyByZXR1cm4gbW9kOyB9XCI7XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgLy8gU2V0IG9wZW5GaWxlIGFzIG1lY2hhbmlzbSB0byByZWFkIGZpbGVzXHJcbiAgICAgICAgU2suaW5Ccm93c2VyID0gdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAodXJsLCBkYXRhLCB0aW1lb3V0KSA9PiB0aGlzLm9wZW5VUkwodXJsLCBkYXRhLCB0aW1lb3V0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTa3VscHRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIF9fZnV0dXJlX186IFNrLnB5dGhvbjMsXHJcbiAgICAgICAgICAgIC8vIGltcG9ydFxyXG4gICAgICAgICAgICByZWFkOiB0aGlzLmltcG9ydEZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gb3BlblxyXG4gICAgICAgICAgICAvL2ZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhY2Nlc3MgU2t1bHB0IGJ1aWx0LWlucy4gVGhpcyBpcyBwcmV0dHkgZ2VuZXJpYywgdGFrZW5cclxuICAgICAqIGFsbW9zdCBkaXJlY3RseSBmcm9tIHRoZSBTa3VscHQgZG9jcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgcHl0aG9uIGZpbGVuYW1lIChlLmcuLCBcIm9zXCIgb3IgXCJwcHJpbnRcIikgdGhhdCB3aWxsIGJlIGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBKYXZhU2NyaXB0IHNvdXJjZSBjb2RlIG9mIHRoZSBmaWxlICh3ZWlyZCwgcmlnaHQ/KVxyXG4gICAgICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGlzbid0IGZvdW5kLlxyXG4gICAgICovXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcblxyXG4gICAgb3BlblVSTCh1cmwsIGRhdGEsIHRpbWVvdXQpIHtcclxuICAgICAgICAvL3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG1vY2tVcmxEYXRhID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5nZXRGaWxlKFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgIGlmIChtb2NrVXJsRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IChuZXcgU2suYnVpbHRpbi5JT0Vycm9yKFwiQ2Fubm90IGFjY2VzcyB1cmw6IFVSTCBEYXRhIHdhcyBub3QgbWFkZSBhdmFpbGFibGUgZm9yIHRoaXMgYXNzaWdubWVudFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vY2tVcmxEYXRhID0gSlNPTi5wYXJzZShtb2NrVXJsRGF0YS5oYW5kbGUoKSk7XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gbW9ja1VybERhdGEpIHtcclxuICAgICAgICAgICAgaWYgKG1vY2tVcmxEYXRhLmhhc093blByb3BlcnR5KGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbW9ja1VybERhdGFbZmlsZW5hbWVdLmxlbmd0aDsgaSs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9ja1VybERhdGFbZmlsZW5hbWVdW2ldID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVEYXRhID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5yZWFkRmlsZShmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3JlamVjdChuZXcgU2suYnVpbHRpbi5JT0Vycm9yKFwiQ2Fubm90IGFjY2VzcyB1cmw6IFwiK3VybCtcIiB3YXMgbm90IG1hZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2lnbm1lbnRcIikpO1xyXG4gICAgICAgIHRocm93IChuZXcgU2suYnVpbHRpbi5JT0Vycm9yKFwiQ2Fubm90IGFjY2VzcyB1cmw6IFwiK3VybCtcIiB3YXMgbm90IG1hZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2lnbm1lbnRcIikpO1xyXG4gICAgICAgIC8vfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBwcmludCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlucHV0TW9ja0Z1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChTay5xdWV1ZWRJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0SW1hZ2VQcm94eSgpIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3Qgc3VjY2VzcyBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGZhaWx1cmUgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGR1bW15T3V0U2FuZGJveCgpIHtcclxuICAgICAgICAvL1NrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvcGVkYWwvc2FuZGJveC9zYW5kYm94LnB5XCJdID0gXCJjbGFzcyBTYW5kYm94OiBwYXNzXFxuZGVmIHJ1bigpOiBwYXNzXFxuZGVmIHJlc2V0KCk6IHBhc3NcXG5cIjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi4vdHJhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUsIGNvZGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBmaXggdG8gYmUgY3VycmVudGx5IGFkZGVkIGxpbmVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwiXyA9IFwiICsgY29kZTtcclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gdHJ1ZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkFkZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgdGhpcy5jb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRXZhbHVhdGUuUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludFZhbHVlKFNrLmZmaS5yZW1hcFRvSnMobW9kdWxlLiRkLl8uJHIoKSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dCxcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiB0aGlzLmNvZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3NrX21vZF9pbnN0cnVjdG9yXCI7XHJcblxyXG5jb25zdCBVVElMSVRZX01PRFVMRV9DT0RFID0gXCJ2YXIgJGJ1aWx0aW5tb2R1bGUgPSBcIiArICRza19tb2RfaW5zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gSW5zdHJ1Y3RvcnMgaGF2ZSBubyBsaW1pdHNcclxuICAgICAgICBTay5leGVjTGltaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDsgLy8gMTAgKjEwMDBcclxuICAgICAgICAvLyBNdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcih0cnVlKTtcclxuICAgICAgICAvLyBEaXNhYmxlIGlucHV0IGJveFxyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgLy8gVE9ETyBTay5pbnB1dGZ1biA9IEJsb2NrUHlFbmdpbmUuaW5wdXRNb2NrRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETzogQWxsb3cgaW5wdXQgZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgdGltZXIsIHNvbWVob3dcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCIuL19pbnN0cnVjdG9yL19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkZpbGUgbm90IGZvdW5kOiBcIitmaWxlbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2suYnVpbHRpbi5PU0Vycm9yKFwiQnVpbHQtaW4gbW9kdWxlcyBub3QgYWNjZXNzaWJsZS5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uc2VhcmNoRm9yRmlsZShmaWxlbmFtZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoZm91bmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkZpbGUgbm90IGZvdW5kOiAnXCIrZmlsZW5hbWUgKyBcIidcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQuY29udGVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBcIkFwcGxlUGllXCI7XHJcbiAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xyXG4gICAgICAgIC8qcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoU2sucXVldWVkSW5wdXQucG9wKCkpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2hhbmdlQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9jaGFuZ2UucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpO1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJpZ2dlck9uQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtORVdfTElORV9SRUdFWH0gZnJvbSBcIi4vb25fcnVuXCI7XHJcbmltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcIk5vbmVcIikpO1xyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0pXHJcbmRlZiBydW5fc3R1ZGVudCgpOlxyXG4gICAgIyBsaW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICB0cnk6XHJcbiR7aW5kZW50ZWRDb2RlfVxyXG4gICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlcnJvcjpcclxuICAgICAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHJldHVybiBOb25lXHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG5jb21wYXRpYmlsaXR5LnNldF9zYW5kYm94KHN0dWRlbnQpXHJcbmVycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50ID0gcnVuX3N0dWRlbnRcclxuY29tcGF0aWJpbGl0eS5nZXRfcGxvdHMgPSBnZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0ID0gZ2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgZnVuYygqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fZXZhbFwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpIHx8IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBkaXNhYmxlVGlmYSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaWZhKCk7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50LmV2YWx1YXRpb24gfHwgXCJOb25lXCI7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgLy9Tay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ldmFsLiRkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZS4kZCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0xJTkVfUkVHRVggPSAvXFxyXFxufFxccnxcXG4vO1xyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcInBhc3NcIikpO1xyXG4gICAgbGV0IHRpZmFBbmFseXNpcyA9IFwiXCI7XHJcbiAgICBpZiAoIXF1aWNrKSB7XHJcbiAgICAgICAgdGlmYUFuYWx5c2lzID0gXCJmcm9tIHBlZGFsLnRpZmEgaW1wb3J0IHRpZmFfYW5hbHlzaXNcXG50aWZhX2FuYWx5c2lzKEZhbHNlKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IEFkZCBpbiBTay5xdWV1ZWRJbnB1dCB0byBiZSBwYXNzZWQgaW5cclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9LCBcImFuc3dlci5weVwiKVxyXG4ke3RpZmFBbmFseXNpc31cclxuZnJvbSBwZWRhbC5zYW5kYm94LnNhbmRib3ggaW1wb3J0IFNhbmRib3hcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gTUFJTl9SRVBPUlRbJ3NhbmRib3gnXVsncnVuJ10gPSBTYW5kYm94KClcclxuI3N0dWRlbnQucnVuKE1BSU5fUkVQT1JUWydzb3VyY2UnXVsnY29kZSddLCBNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2ZpbGVuYW1lJ10sIHJlcG9ydF9leGNlcHRpb25zPUZhbHNlKVxyXG4jZGVidWcoc3R1ZGVudClcclxuc3R1ZGVudC5yZXBvcnRfZXhjZXB0aW9uc19tb2RlID0gVHJ1ZVxyXG5pZiBub3QgZ2V0X21vZGVsX2luZm8oJ2Fzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUluc3RydWN0b3JSdW4nKTpcclxuICAgIGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQocmFpc2VfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2xvZyhzdHVkZW50LmRhdGEpXHJcbiNzdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbiNlcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbiNjb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbnJ1bl9zdHVkZW50ID0gY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudFxyXG5yZXNldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dFxyXG5xdWV1ZV9pbnB1dCA9IGNvbXBhdGliaWxpdHkucXVldWVfaW5wdXRcclxuZ2V0X291dHB1dCA9IGNvbXBhdGliaWxpdHkuZ2V0X291dHB1dFxyXG5nZXRfcGxvdHMgPSBjb21wYXRpYmlsaXR5LmdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZnJvbSBwZWRhbCBpbXBvcnQgcXVlc3Rpb25zXHJcbnF1ZXN0aW9ucy5zaG93X3F1ZXN0aW9uID0gc2V0X2luc3RydWN0aW9uc1xyXG4jIFRPRE86IFJlbW92ZSB0aGUgbmVlZCBmb3IgdGhpcyBoYWNrIVxyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBzdHVkZW50LmNhbGwoZnVuYy5fX25hbWVfXywgKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcblxyXG5mcm9tIHBlZGFsLmNhaXQuY2FpdF9hcGkgaW1wb3J0IHBhcnNlX3Byb2dyYW1cclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQgLSA0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIC8vIFRPRE8gTG9nZ2luZyEhISFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fcnVuLiRkO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHNjb3JlKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlRmlsZShcImFuc3dlci5weVwiLCB0aGlzLmNvZGUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBlbmdpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcInZlcmlmaWVyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvZGUudHJpbSgpKSxcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5maW5pc2hUdXJ0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG5cclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlbmFtZSwgZm91bmQpO1xyXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5jb250ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJCdWlsdC1pbiBtb2R1bGVzIG5vdCBhY2Nlc3NpYmxlLlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogJ1wiK2ZpbGVuYW1lICsgXCInXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9ycygpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmICghcmVwb3J0W1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRSdW5FcnJvcihyZXBvcnQuc3R1ZGVudC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgICAgIDxzbWFsbCBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnNjb3JlKCkrJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBkaXNwbGF5Lmluc3RydWN0b3IoKSAmJiBleGVjdXRpb24uZmVlZGJhY2subGFiZWwoKVwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtbXV0ZWRcIj48L3NtYWxsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGV5IGNoYW5nZSB0aGUgc3R1ZGVudCBleHRyYSBmaWxlcywgYWxzbyB1cGRhdGUgdGhlIGRpcnR5IGZsYWdcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eUJ1ZmZlciA9IDEwMDtcbiAgICAgICAgbGV0IHRvcE9mRWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgLy9sZXQgYm90dG9tT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbU9mRWxlbWVudCA9IHRvcE9mRWxlbWVudCArIHZpc2liaWxpdHlCdWZmZXI7XG4gICAgICAgIGxldCBib3R0b21PZlNjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcE9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0b3BPZkVsZW1lbnQgPCBib3R0b21PZlNjcmVlbikgJiZcbiAgICAgICAgICAgICh0b3BPZlNjcmVlbiA8IGJvdHRvbU9mRWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlZ3VsYXJGZWVkYmFjaygpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgICAgIGxhYmVsID0gXCJObyBlcnJvcnNcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vIGVycm9ycyByZXBvcnRlZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSkucmVwbGFjZSgvPHByZT5cXG4vZywgXCI8cHJlPlxcblxcblwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgdHJhY2tpbmcgc3R1ZGVudCBmaWxlLCBsZXQncyB0cmFjayB0aGUgaW5zdHJ1Y3RvciBmaWxlXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkludGVydmVudGlvblwiLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIFwiYW5zd2VyLnB5XCIpO1xuXG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgcHJldmlvdXNseSBoaWdobGlnaHRlZCBsaW5lc1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcmVzZW50UnVuRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UsIGxhYmVsLCBjYXRlZ29yeSwgbGluZW5vO1xuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic3ludGF4XCI7XG4gICAgICAgICAgICBsZXQgbGluZW5vID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5saW5lbm8pO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5tc2cpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSwgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVycm9yLmFyZ3MudlszXVsyXTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgPHByZT4ke3NvdXJjZX08L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhYmVsID09PSBcImJhZCBpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJhZCBJbnB1dFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmFkIGlucHV0IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFVuZXhwZWN0ZWQgZW5kLW9mLWZpbGUgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTeW50YXggRXJyb3JcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyBcIjxicj5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJydW50aW1lXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkICYmIGxpbmVubyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lbm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGxldCBuYW1lID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgbGV0IGFyZ3MgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpO1xuICAgICAgICBsZXQgdG9wID0gYCR7bmFtZX06ICR7YXJnc1swXX1cXG48YnI+XFxuPGJyPmA7XG4gICAgICAgIGxldCB0cmFjZWJhY2sgPSBcIlwiO1xuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IFwiVHJhY2ViYWNrOjxicj5cXG5cIiArIGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lbm8gPSBmcmFtZS5saW5lbm87XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBgRmlsZSA8Y29kZSBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGBvbiBsaW5lIDxjb2RlIGNsYXNzPVwibGluZW5vXCI+JHtsaW5lbm99PC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAoZnJhbWUuc2NvcGUgIT09IFwiPG1vZHVsZT5cIiAmJlxuICAgICAgICAgICAgICAgIGZyYW1lLnNjb3BlICE9PSB1bmRlZmluZWQpID8gYGluIHNjb3BlICR7ZnJhbWUuc2NvcGV9YCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGBcXG48cHJlPjxjb2RlPiR7ZnJhbWUuc291cmNlfTwvY29kZT48L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZSArIGxpbmUgKyBzY29wZSArIHNvdXJjZTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG48YnI+XCIpO1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gYCR7dHJhY2ViYWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcCtcIlxcblwiK3RyYWNlYmFjaztcbiAgICB9XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay4gUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOjxicj5cXG5cIjtcbiAgICAgICAgbWVzc2FnZSArPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfVxufSIsImltcG9ydCB7Zmlyc3REZWZpbmVkVmFsdWV9IGZyb20gXCJ1dGlsaXRpZXMuanNcIjtcclxuXHJcbi8vICR7bWFrZVRhYihcIj9tb2NrX3VybHMuYmxvY2tweVwiLCBcIlVSTCBEYXRhXCIsIHRydWUpfVxyXG5cclxuY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5LCBub3RJbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIGxldCBpbnN0cnVjdG9yRmlsZUNsYXNzID0gXCJcIjtcclxuICAgIGxldCBoaWRlSWZOb3RJbnN0cnVjdG9yID0gXCJ0cnVlXCI7XHJcbiAgICBpZiAoIW5vdEluc3RydWN0b3IpIHtcclxuICAgICAgICBpbnN0cnVjdG9yRmlsZUNsYXNzID0gXCJibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiO1xyXG4gICAgICAgIGhpZGVJZk5vdEluc3RydWN0b3IgPSBcImRpc3BsYXkuaW5zdHJ1Y3RvcigpXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gJHtpbnN0cnVjdG9yRmlsZUNsYXNzfVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAoISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpKSAmJiAke2hpZGVJZk5vdEluc3RydWN0b3J9XCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIlxyXG4gICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZmlsZXMudmlzaWJsZVwiPlxyXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPHN0cm9uZz5WaWV3OiA8L3N0cm9uZz5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgJHttYWtlVGFiKFwiYW5zd2VyLnB5XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiU2V0dGluZ3NcIil9XHJcbiAgICAke21ha2VUYWIoXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIlN0YXJ0aW5nIENvZGVcIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fcnVuLnB5XCIsIFwiT24gUnVuXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2NoYW5nZS5weVwiLCBcIk9uIENoYW5nZVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ldmFsLnB5XCIsIFwiT24gRXZhbFwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gICAgXHJcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHsnYmxvY2tweS1maWxlLWluc3RydWN0b3InOiAhZmlsZW5hbWUoKS5zdGFydHNXaXRoKCcmJyl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpIHx8ICRyb290LmRpc3BsYXkuaW5zdHJ1Y3RvcigpIFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWRpdGFibGU6IGZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsIGZpbGVuYW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJHJvb3QudWkuZmlsZXMuZGlzcGxheUZpbGVuYW1lKGZpbGVuYW1lKCkpXCI+XHJcbiAgICAgICAgICAgIDwvYT4gICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8IS0tIC9rbyAtLT5cclxuICAgIDwhLS0ga28gZm9yZWFjaDogYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkcm9vdC5kaXNwbGF5Lmluc3RydWN0b3IoKVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgZmlsZW5hbWUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmaWxlbmFtZVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgICBcclxuICAgIDwhLS0ga28gZm9yZWFjaDogc3VibWlzc2lvbi5leHRyYUZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZmlsZW5hbWUoKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJHJvb3QuZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCBmaWxlbmFtZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICRyb290LnVpLmZpbGVzLmRpc3BsYXlGaWxlbmFtZShmaWxlbmFtZSgpKVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkIE5ldzwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9tb2NrX3VybHMuYmxvY2tweScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICc/bW9ja191cmxzLmJsb2NrcHknKVwiPlVSTCBEYXRhPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/dGFncy5ibG9ja3B5JylcIj5UYWdzPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/c2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHknKVwiPlNhbXBsZSBTdWJtaXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fY2hhbmdlLnB5JylcIj5PbiBDaGFuZ2U8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkV2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9ldmFsLnB5JylcIj5PbiBFdmFsPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdzdGFydGluZycpXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnaW5zdHJ1Y3RvcicpXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdzdHVkZW50JylcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IE5FV19JTlNUUlVDVE9SX0ZJTEVfRElBTE9HX0hUTUwgPSBgXHJcbjxmb3JtPlxyXG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgIDwhLS0gRmlsZW5hbWUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj5GaWxlbmFtZTo8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRmlsZXR5cGUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodCBtdC0yXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPkZpbGV0eXBlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPjwvc3Bhbj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gSW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ/IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHQgbXQtMlwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCI+TmFtZXNwYWNlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1uYW1lc3BhY2VcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1uYW1lc3BhY2VcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiFcIj5Db21wbGV0ZWx5IGluYWNjZXNzaWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiP1wiPkhpZGRlbiBmcm9tIHN0dWRlbnQsIGFjY2Vzc2libGUgcHJvZ3JhbWF0aWNhbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCImXCI+VmlzaWJsZSB0byBzdHVkZW50LCBidXQgbm90IGVkaXRhYmxlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZm9ybT5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IElOU1RSVUNUT1JfRElSRUNUT1JZID0gXCJfaW5zdHJ1Y3Rvci9cIjtcclxuY29uc3QgU1RVREVOVF9ESVJFQ1RPUlkgPSBcIl9zdHVkZW50L1wiO1xyXG5cclxuY29uc3QgU2VhcmNoTW9kZXMgPSB7XHJcbiAgICBFVkVSWVdIRVJFOiBcIkVWRVJZV0hFUkVcIixcclxuICAgIFNUQVJUX1dJVEhfSU5TVFJVQ1RPUjogXCJTVEFSVF9XSVRIX0lOU1RSVUNUT1JcIixcclxuICAgIE9OTFlfU1RVREVOVF9GSUxFUzogXCJPTkxZX1NUVURFTlRfRklMRVNcIlxyXG59O1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU1vY2tNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4geyBmaWxlbmFtZTogKCkgPT4gZmlsZW5hbWUsIGNvbnRlbnRzOiAoKSA9PiBjb250ZW50cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbmNhdGVuYXRlZEZpbGUoY29uY2F0ZW5hdGVkRmlsZSwgbW9kZWxGaWxlTGlzdCkge1xyXG4gICAgaWYgKGNvbmNhdGVuYXRlZEZpbGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBKU09OLnBhcnNlKGNvbmNhdGVuYXRlZEZpbGUpO1xyXG4gICAgICAgIGxldCBtb2RlbEZpbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gZmlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmhhc093blByb3BlcnR5KGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxGaWxlcy5wdXNoKG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGVzW2ZpbGVuYW1lXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KG1vZGVsRmlsZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KFtdKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yLnN1YnNjcmliZSgodmlzaWJsaXR5KT0+IHtcclxuICAgICAgICAgICAgJChcIi5ibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiKS50b2dnbGUodmlzaWJsaXR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhdGFncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC50YWdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiJHNldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiIVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiJlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21vdW50RXh0cmFGaWxlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzXy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBub3RpZnkgdGhlIFVJIHRoYXQgdGhlIGZpbGUgd2FzIGRlbGV0ZWQ/XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8oZXhpc3RpbmdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRlbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvckZpbGUobmFtZSwgc3R1ZGVudFNlYXJjaCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgZmlsZXMuKlxyXG4gICAgICAgIF9pbnN0cnVjdG9yL2ZpbGVzLipcclxuICAgICAgICBfc3R1ZGVudC9maWxlcy4qXHJcblxyXG4gICAgICAgIElmIGEgc3R1ZGVudCBzZWFyY2hlcyBmb3IgYSBmaWxlLCBpdCBjaGVja3MgdGhlIFwiP1wiLCBcIiZcIiwgXCIqXCIsIFwiXCIgbmFtZXNwYWNlc1xyXG4gICAgICAgICAgICBpbXBvcnQgaGVscGVyID0+IFwiLi9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICBvcGVuKFwiZXh0ZXJuYWwuanNvblwiKSA9PiBcImV4dGVybmFsLmpzb25cIlxyXG4gICAgICAgIElmIGFuIGluc3RydWN0b3Igc2VhcmNoZXMgZm9yIGEgZmlsZSwgaXQgY2hlY2tzIFwiIVwiLCBcIl5cIiwgXCI/XCIsIFwiJlwiLCBcIipcIiwgXCJcIiBuYW1lc3BhY2VzXHJcbiAgICAgICAgICAgIFRvIGV4cGxpY2l0bHkgc2VhcmNoIGluc3RydWN0b3IgbmFtZXNwYWNlcyBmaXJzdFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0IF9pbnN0cnVjdG9yLmhlbHBlciA9PiBcIi4vaW5zdHJ1Y3Rvci9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICAgICAgb3BlbihcIl9pbnN0cnVjdG9yL2V4dGVybmFsLmpzb25cIikgPT4gXCJfaW5zdHJ1Y3Rvci9leHRlcm5hbC5qc29uXCJcclxuICAgICAgICAgICAgdG8gYWxsb3cgc3R1ZGVudCBmaWxlcyB0byBvdmVycmlkZTpcclxuICAgICAgICAgICAgICAgIGltcG9ydCBoZWxwZXIgPT4gXCIuL2hlbHBlci5weVwiXHJcbiAgICAgICAgICAgICAgICBvcGVuKFwiZXh0ZXJuYWwuanNvblwiKSA9PiBcImV4dGVybmFsLmpzb25cIlxyXG4gICAgICAgICAgICB0byBvbmx5IGNoZWNrIHN0dWRlbnQgZmlsZXMsIHByZXBlbmQgd2l0aCBfc3R1ZGVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIENob3Agb2ZmIHN0YXJ0aW5nIFwiLi9cIlxyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCIuL1wiKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlYXJjaE1vZGUgPSBTZWFyY2hNb2Rlcy5FVkVSWVdIRVJFO1xyXG4gICAgICAgIC8vIFNob3VsZCB0aGUgc2VhcmNoIGJlIHN0YXJ0IHdpdGggaW5zdHJ1Y3RvciBzaWRlP1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoSU5TVFJVQ1RPUl9ESVJFQ1RPUlkpKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKElOU1RSVUNUT1JfRElSRUNUT1JZLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNlYXJjaE1vZGUgPSBTZWFyY2hNb2Rlcy5TVEFSVF9XSVRIX0lOU1RSVUNUT1I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNob3VsZCB0aGUgc2VhcmNoIGJlIGxpbWl0ZWQgdG8gdGhlIHN0dWRlbnQgbW9kZT9cclxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFNUVURFTlRfRElSRUNUT1JZKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZShTVFVERU5UX0RJUkVDVE9SWS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3R1ZGVudFNlYXJjaCkge1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgaW5zdHJ1Y3RvciB2ZXJzaW9uc1xyXG4gICAgICAgIGxldCBleHRyYVN0dWRlbnRGaWxlcyA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMoKTtcclxuICAgICAgICBsZXQgZXh0cmFJbnN0cnVjdG9yRmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcygpO1xyXG4gICAgICAgIGxldCBleHRyYVN0YXJ0aW5nRmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKTtcclxuICAgICAgICAvLyBDaGVjayBzcGVjaWFsIGZpbGVzIChUT0RPOiBob3cgd291bGQgYW4gaW5zdHJ1Y3RvciBhY2Nlc3MgXCIuL19pbnN0cnVjdG9yL2Fuc3dlci5weVwiP1xyXG4gICAgICAgIGxldCBzcGVjaWFsRmlsZSA9IHRoaXMuc2VhcmNoRm9yU3BlY2lhbEZpbGVzXyhuYW1lLCBzZWFyY2hNb2RlKTtcclxuICAgICAgICBpZiAoc3BlY2lhbEZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3BlY2lhbEZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN0YXJ0IGxvb2tpbmcgdGhyb3VnaCBwb3NzaWJsZSBmaWxlc1xyXG4gICAgICAgIGxldCBzdHVkZW50VmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFTdHVkZW50RmlsZXMsIG5hbWUpO1xyXG4gICAgICAgIGxldCBnZW5lcmF0ZWRWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYVN0dWRlbnRGaWxlcywgXCIqXCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCImXCIrbmFtZSk7XHJcbiAgICAgICAgaWYgKHNlYXJjaE1vZGUgPT09IFNlYXJjaE1vZGVzLk9OTFlfU1RVREVOVF9GSUxFUykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3REZWZpbmVkVmFsdWUoZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCIhXCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IGhpZGRlblZlcnNpb24gPSB0aGlzLnNlYXJjaEZvckZpbGVJbkxpc3RfKGV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIj9cIituYW1lKTtcclxuICAgICAgICBsZXQgc3RhcnRpbmdWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYVN0YXJ0aW5nRmlsZXMsIFwiXlwiK25hbWUpO1xyXG4gICAgICAgIGlmIChzZWFyY2hNb2RlID09PSBTZWFyY2hNb2Rlcy5TVEFSVF9XSVRIX0lOU1RSVUNUT1IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0RGVmaW5lZFZhbHVlKGluc3RydWN0b3JWZXJzaW9uLCBoaWRkZW5WZXJzaW9uLCBzdGFydGluZ1ZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmVyc2lvbiwgc3R1ZGVudFZlcnNpb24sIGdlbmVyYXRlZFZlcnNpb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuRVZFUllXSEVSRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3REZWZpbmVkVmFsdWUoZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RvclZlcnNpb24sIGhpZGRlblZlcnNpb24sIHN0YXJ0aW5nVmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvckZpbGVJbkxpc3RfKG1vZGVsTGlzdCwgZmlsZW5hbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtb2RlbExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1vZGVsTGlzdFtpXS5maWxlbmFtZSgpID09PSBmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsTGlzdFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvclNwZWNpYWxGaWxlc18oZmlsZW5hbWUsIHNlYXJjaE1vZGUpIHtcclxuICAgICAgICBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvYW5zd2VyLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYW5zd2VyLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9hbnN3ZXIucHlcIiwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpKTtcclxuICAgICAgICAgICAgY2FzZSBcIm9uX3J1bi5weVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCkpO1xyXG4gICAgICAgICAgICBjYXNlIFwib25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9vbl9jaGFuZ2UucHlcIiwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbl9ldmFsLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9vbl9ldmFsLm1kXCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpKTtcclxuICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9ucy5tZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvaW5zdHJ1Y3Rpb25zLm1kXCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKTtcclxuICAgICAgICAgICAgY2FzZSBcInN0YXJ0aW5nX2NvZGUucHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9ja01vZGVsRmlsZShcIl9pbnN0cnVjdG9yL3N0YXJ0aW5nX2NvZGUucHlcIiwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGVEaWFsb2coa2luZCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gJChORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MKTtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCIpO1xyXG4gICAgICAgIGxldCBmaWxldHlwZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIik7XHJcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCIpO1xyXG4gICAgICAgIGxldCBleHRlbnNpb25SZWdleCA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICBmaWxlbmFtZS5vbihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvblJlZ2V4LmV4ZWMoZmlsZW5hbWUudmFsKCkpWzFdO1xyXG4gICAgICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24gPT09IHVuZGVmaW5lZCA/IFwiTm8gZXh0ZW5zaW9uXCIgOiBleHRlbnNpb247XHJcbiAgICAgICAgICAgIC8vVE9ETzogdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3JGcm9tRXh0ZW5zaW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIGZpbGV0eXBlLnRleHQoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgeWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiaW5zdHJ1Y3RvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBuYW1lc3BhY2UudmFsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2luZCA9PT0gXCJzdGFydGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIl5cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGVuYW1lLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IHByZWZpeCtmaWxlbmFtZS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvZHkuc3VibWl0KChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgeWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jb25maXJtKFwiTWFrZSBOZXcgRmlsZVwiLCBib2R5LCB5ZXMsICgpPT57fSwgXCJBZGRcIik7XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5zZXJ2ZXIuZm9yY2UudXBkYXRlU3VibWlzc2lvblwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+LCA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLnJvbGVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgaWYgKHRpbWVTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gXCJVbmRlZmluZWQgVGltZVwiO1xuICAgIH1cbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcGFzdCA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVTdHJpbmcsIDEwKSk7XG4gICAgaWYgKGlzU2FtZURheShub3csIHBhc3QpKSB7XG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheVN0ciA9IHdlZWtEYXlzW3Bhc3QuZ2V0RGF5KCldO1xuICAgICAgICBsZXQgbW9udGhTdHIgPSBtb250aE5hbWVzW3Bhc3QuZ2V0TW9udGgoKV07XG4gICAgICAgIGxldCBkYXRlID0gZGF5U3RyICsgXCIsIFwiICsgbW9udGhTdHIgKyBcIiBcIiArIHBhc3QuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IHBhc3QuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiwgXCIrcGFzdC5nZXRGdWxsWWVhcigpICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIE9wZW5zIHRoZSBoaXN0b3J5IGRpYWxvZyBib3guIFRoaXMgcmVxdWlyZXMgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYW5kXG4gKiBvY2N1cnMgYXN5bmNocm9ub3VzbHkuIFRoZSB1c2VycycgY29kZSBpcyBzaG93biBpbiBwcmVmb3JtYXR0ZWQgdGV4dFxuICogdGFncyAobm8gY29kZSBoaWdobGlnaHRpbmcgY3VycmVudGx5KSBhbG9uZyB3aXRoIHRoZSB0aW1lc3RhbXAuXG4gKi9cbkJsb2NrUHlIaXN0b3J5LnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZztcbiAgICB2YXIgYm9keSA9IFwiPHByZT5hID0gMDwvcHJlPlwiO1xuICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5nZXRIaXN0b3J5KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJvZHkgPSBkYXRhLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBsZXRlLCBlbGVtKSB7IFxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlX3N0ciA9IHByZXR0eVByaW50RGF0ZVRpbWUoZWxlbS50aW1lKTtcbiAgICAgICAgICAgIHZhciBuZXdfbGluZSA9IFwiPGI+XCIrY29tcGxldGVfc3RyK1wiPC9iPjxicj48cHJlPlwiK2VsZW0uY29kZStcIjwvcHJlPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlK1wiXFxuXCIrbmV3X2xpbmU7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgICAgICBkaWFsb2cuc2hvdyhcIldvcmsgSGlzdG9yeVwiLCBib2R5LCBmdW5jdGlvbigpIHt9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xufVxuXG4vLyBUT0RPOiBHZXQgc2hhcmVhYmxlIGxpbmsgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW50ZXJmYWNlKG1haW4pIHtcbiAgICByZXR1cm4gYFxuPGRpdiBjbGFzcz0nYmxvY2tweS1jb250ZW50IGNvbnRhaW5lci1mbHVpZCc+XG5cbiAgICA8IS0tIERpYWxvZyAtLT5cbiAgICAke0RJQUxPR19IVE1MfVxuICAgIFxuICAgIDwhLS0gSGlkZGVuIENhcHR1cmUgQ2FudmFzIC0tPlxuICAgIDxjYW52YXMgaWQ9J2NhcHR1cmUtY2FudmFzJyBjbGFzcz0nZC1ub25lJyByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9jYW52YXM+XG4gICAgXG4gICAgPCEtLSBSb3cgMTogSGVhZGVyIGFuZCBRdWljayBNZW51IC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICBcbiAgICAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMTAgYmxvY2tweS1wYW5lbCBibG9ja3B5LWhlYWRlcidcbiAgICAgICAgICAgICAgIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGFiZWw9J0Fzc2lnbm1lbnQgRGVzY3JpcHRpb24nPlxuICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEFzc2lnbm1lbnQgTmFtZSAtLT5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGV2ZWw9JzEnXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrcHktbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QmxvY2tQeTogPC9zdHJvbmc+IFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogYXNzaWdubWVudC5uYW1lJz48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gUmVzZXQgSW5zdHJ1Y3Rpb25zIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWluc3RydWN0aW9ucy1yZXNldFwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuaW5zdHJ1Y3Rpb25zLnJlc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBSZXNldCBpbnN0cnVjdGlvbnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBJbnN0cnVjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWluc3RydWN0aW9ucydcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogdWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0yIGJsb2NrcHktcGFuZWwgYmxvY2tweS1xdWljay1tZW51J1xuICAgICAgICAgICAgIHJvbGU9J21lbnViYXInIGFyaWEtbGFiZWw9J1F1aWNrIE1lbnUnIHRpdGxlPVwiUXVpY2sgTWVudVwiPlxuICAgICAgICAgICAgPCEtLSBHZXQgU2hhcmVhYmxlIExpbmsgLS0+XG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgR2V0IHNoYXJlYWJsZSBsaW5rPC9idXR0b24+LS0+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5tZW51LmlzU3VibWl0dGVkXCI+XG4gICAgICAgICAgICAgICAgWW91ciBzdWJtaXNzaW9uIGlzIHJlYWR5IHRvIGJlIHJldmlld2VkITwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5jYW5NYXJrU3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdWkubWVudS50ZXh0TWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5tZW51LmNsaWNrTWFya1N1Ym1pdHRlZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBWaWV3IGFzIGluc3RydWN0b3IgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLnJvbGUuaXNHcmFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGRpc3BsYXkuaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBhcyBpbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDI6IENvbnNvbGUgYW5kIEZlZWRiYWNrIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgXG4gICAgICAgIDwhLS0gQ29uc29sZSAtLT5cbiAgICAgICAgJHtDT05TT0xFX0hUTUx9XG4gICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjayAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlIC0tPlxuICAgICAgICAke0ZFRURCQUNLX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICBcbiAgICAgICAgPCEtLSBUcmFjZSAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlIC0tPlxuICAgICAgICAke1RSQUNFX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMzogRmlsZSBOYXZpZ2F0aW9uIC0tPlxuICAgIDwhLS0ga28gaWY6IHVpLmZpbGVzLnZpc2libGUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgJHtGSUxFU19IVE1MfVxuICAgIDwvZGl2PlxuICAgIDwhLS0gL2tvIC0tPlxuICAgIFxuICAgIDwhLS0gVmlldyBSb3cgLS0+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0VESVRPUlNfSFRNTH1cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRm9vdGVyIFJvdyAtLT4gICAgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0ZPT1RFUl9IVE1MfVxuICAgIDwvZGl2PlxuICAgIFxuPC9kaXY+XG4gICAgYDtcbn07IiwiaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIHNhdmVBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBsZXQgU3RhdHVzU3RhdGUgPSB7XG4gICAgUkVBRFk6IFwicmVhZHlcIixcbiAgICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gICAgUkVUUllJTkc6IFwicmV0cnlpbmdcIixcbiAgICBGQUlMRUQ6IFwiZmFpbGVkXCIsXG4gICAgT0ZGTElORTogXCJvZmZsaW5lXCJcbn07XG5cbi8qKlxuICogT2JqZWN0IGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIGV4dGVybmFsIHNlcnZlcnMuIFRoaXMgaW5jbHVkZXMgZnVuY3Rpb25hbGl0eSBmb3JcbiAqIHNhdmluZyBhbmQgbG9hZGluZyBmaWxlcywgbG9nZ2luZyBldmVudHMsIHNhdmluZyBjb21wbGV0aW9ucywgYW5kIHJldHJpZXZpbmcgaGlzdG9yeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5U2VydmVyfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5U2VydmVyKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgLy8gU2F2ZSBVUkxzIGxvY2FsbHkgZm9yIHF1aWNrZXIgYWNjZXNzXG4gICAgdGhpcy51cmxzID0gbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHM7XG5cbiAgICAvLyBBZGQgdGhlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9uXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJCTE9DS1BZXCIpO1xuXG4gICAgLy8gRmF1bHRSZXNpc3RhbnRDYWNoZVxuICAgIHRoaXMucXVldWUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcImxvZ0V2ZW50XCIsIFwiW11cIikpLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcInVwZGF0ZVN1Ym1pc3Npb25cIiwgXCJbXVwiKSlcbiAgICB9O1xuICAgIHRoaXMuTUFYX1FVRVVFX1NJWkUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogMjAwLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5USU1FUl9ERUxBWSA9IDEwMDA7XG4gICAgdGhpcy5GQUlMX0RFTEFZID0gMjAwMDtcblxuICAgIHRoaXMudGltZXJzID0ge307XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA9IDA7XG5cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcyA9IFtdO1xuICAgIHRoaXMuY3JlYXRlU3Vic2NyaXB0aW9ucygpO1xuICAgIHRoaXMuY2hlY2tDYWNoZXMoKTtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgSVAgYWRkcmVzcyBoYXMgY2hhbmdlZCwgbG9nZ2luZyBhbiBldmVudCBpZiB0aGF0IG9jY3Vycy5cbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0lQID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJJUFwiKSkge1xuICAgICAgICAgICAgbGV0IG9sZElQID0gdGhpcy5zdG9yYWdlLmdldChcIklQXCIpO1xuICAgICAgICAgICAgaWYgKG9sZElQICE9PSByZXNwb25zZS5pcCkge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBcIm9sZFwiOiBvbGRJUCxcbiAgICAgICAgICAgICAgICAgICAgXCJuZXdcIjogcmVzcG9uc2UuaXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiWC1JUC5DaGFuZ2VcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZXJlIGhhdmUgYmVlbiBwcmV2aW91cyBmYWlsdXJlcyBjYWNoZWQsIGFuZCBpZiBzbyByZXRyaWVzIHRoZW0uXG4gKiBUT0RPOiB1cGRhdGVcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tDYWNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVBc3NpZ25tZW50XCIpKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwiYXNzaWdubWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXZlQXNzaWdubWVudFwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpO1xuICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5xdWV1ZSkuZm9yRWFjaChmdW5jdGlvbiAoZW5kcG9pbnQpIHtcbiAgICAgICAgKGZ1bmN0aW9uIHB1c2hBbnlRdWV1ZWQocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IHNlcnZlci51cmxzW2VuZHBvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIDEwMDAsIHB1c2hBbnlRdWV1ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoe1wic3VjY2Vzc1wiOiB0cnVlfSk7XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBmaWxlbmFtZSkge1xuICAgIG1vZGVsLnN1YnNjcmliZSgoY29udGVudHMpID0+XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkgPyB0aGlzLnNhdmVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykgOiBmYWxzZSwgdGhpcyk7XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMucHVzaChmaWxlbmFtZSk7XG59O1xuXG4vKipcbiAqIFRPRE86IGZpeFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuc3VibWlzc2lvbi5jb2RlLCBcImFuc3dlci5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vblJ1biwgXCIhb25fcnVuLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCwgXCIhb25fZXZhbC5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSwgXCIhb25fY2hhbmdlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucywgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSwgXCJec3RhcnRpbmdfY29kZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdHVkZW50RmlsZXMsIFwiI2V4dHJhX3N0dWRlbnRfZmlsZXMuYmxvY2tweVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdGFydGluZ0ZpbGVzLCBcIiNleHRyYV9zdGFydGluZ19maWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYUluc3RydWN0b3JGaWxlcywgXCIjZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcy5ibG9ja3B5XCIpO1xufTtcblxuLyoqXG4gKlxuICogU29tZSBzdWJzY3JpcHRpb25zIGhhdmUgdG8gaGFwcGVuIGFmdGVyIG90aGVyIHRoaW5ncyBoYXZlIGJlZW4gbG9hZGVkLlxuICogUmlnaHQgbm93IHRoaXMgaXMganVzdCBhZnRlciBDT1JHSVMgbGlicmFyaWVzIGhhdmUgYmVlbiBsb2FkZWQsIGJ1dCBtYXliZVxuICogd2UnbGwgYWRkIG1vcmUgbGF0ZXIgYW5kIHRoaXMgd2lsbCBuZWVkIHRvIGJlIHJlZmFjdG9yZWQuXG4gKlxuICogVE9ETzogZml4XG4gKlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5maW5hbGl6ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy90aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cy5zdWJzY3JpYmUodGhpcy5zYXZlQXNzaWdubWVudC5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwYXlsb2FkIGZvciBhbnkgY29tbXVuaWNhdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgQVBJXG4gKiBAcmV0dXJucyB7e2Fzc2lnbm1lbnRfaWQ6ICosIGNvdXJzZV9pZDogKiwgZ3JvdXBfaWQ6ICosIHVzZXJfaWQ6ICosIHRpbWV6b25lOiAqLCB2ZXJzaW9uOiAqLCB0aW1lc3RhbXA6ICp9fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTZXJ2ZXJEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhc3NpZ25tZW50ID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQ7XG4gICAgbGV0IHVzZXIgPSB0aGlzLm1haW4ubW9kZWwudXNlcjtcbiAgICBsZXQgc3VibWlzc2lvbiA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uO1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtaWNyb3NlY29uZHMgPSBub3cuZ2V0VGltZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiYXNzaWdubWVudF9pZFwiOiBhc3NpZ25tZW50LmlkKCksXG4gICAgICAgIFwiYXNzaWdubWVudF9ncm91cF9pZFwiOiB1c2VyLmdyb3VwSWQoKSxcbiAgICAgICAgXCJjb3Vyc2VfaWRcIjogdXNlci5jb3Vyc2VJZCgpLFxuICAgICAgICBcInN1Ym1pc3Npb25faWRcIjogc3VibWlzc2lvbi5pZCgpLFxuICAgICAgICBcInVzZXJfaWRcIjogdXNlci5pZCgpLFxuICAgICAgICBcInZlcnNpb25cIjogYXNzaWdubWVudC52ZXJzaW9uKCksXG4gICAgICAgIFwidGltZXN0YW1wXCI6IG1pY3Jvc2Vjb25kcyxcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH07XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBhbmQgbWVzc2FnZSBmb3IgdGhlIHJlbGV2YW50IGVuZHBvaW50LlxuICogQHBhcmFtIGVuZHBvaW50IHtzdHJpbmd9IG9uZSBvZiB0aGUgVVJMIGVuZHBvaW50c1xuICogQHBhcmFtIHN0YXR1cyB7U3RhdHVzU3RhdGV9XG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nP31cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2V0U3RhdHVzID0gZnVuY3Rpb24gKGVuZHBvaW50LCBzdGF0dXMsIG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50XShzdGF0dXMpO1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnQgKyBcIk1lc3NhZ2VcIl0obWVzc2FnZSB8fCBcIlwiKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhbiBvdmVybGF5IG9uIHRoZSBzY3JlZW4gdGhhdCBibG9ja3Mgb3BlcmF0aW9uIHVudGlsIHRoZSBzeXN0ZW0gaXMgcmVhZHkuXG4gKiBUaGUgb3ZlcmxheSBnZXRzIHByb2dyZXNzaXZlbHkgZGFya2VyIHRvIGluZGljYXRlIHJlcGVhdGVkIGZhaWx1cmVzLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uIChhdHRlbXB0KSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzICs9IDE7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2tweS1vdmVybGF5XCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwiYmxvY2tweS1vdmVybGF5XCI+IDwvZGl2PicpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIHN3aXRjaCAoYXR0ZW1wdCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM5ODhcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjNjU1XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzMzM1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbi8qKlxuICogVW5kbyBhIGxldmVsIG9mIG92ZXJsYXk7IGlmIHRoaXMgd2FzIHRoZSBsYXN0IGxldmVsLCByZW1vdmVzIGl0IGZyb20gdGhlIHNjcmVlbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuaGlkZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzIC09IDE7XG4gICAgaWYgKHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZW5xdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICAvLyBFbnN1cmUgd2UgaGF2ZSBub3Qgb3ZlcmZpbGxlZCB0aGUgcXVldWVcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5xdWV1ZVtjYWNoZV0ubGVuZ3RoO1xuICAgIGxldCBtYXggPSB0aGlzLk1BWF9RVUVVRV9TSVpFW2NhY2hlXTtcbiAgICBpZiAobGVuZ3RoID4gbWF4KSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdID0gdGhpcy5xdWV1ZVtjYWNoZV0uc2xpY2UobGVuZ3RoIC0gbWF4LCBtYXgpO1xuICAgIH1cbiAgICAvLyBPbmx5IGFkZCB0aGUgZWxlbWVudCBpZiBpdCdzIG5ld1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5wdXNoKGtleSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2RlcXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5zcGxpY2UoaW5kZXgpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBlbmRwb2ludCwgZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgbGV0IHBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5fZW5xdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlcXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcG9zdFJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KHBvc3RSZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWtlIGEgQUpBWCByZXF1ZXN0IHRoYXQsIHVwb24gZmFpbHVyZSwgd2lsbCBjaGVjayB0byBzZWUgaWYgdGhpcyB3YXMgdGhlXG4gKiBsYXRlc3QgYXR0ZW1wdCBmb3IgdGhpcyBgY2FjaGVgIG1hcmtlci4gSWYgc28sIGl0IHdpbGwgYXR0ZW1wdCBhZ2FpbiB1bnRpbFxuICogc3VjY2Vzc2Z1bDsgb3RoZXJ3aXNlLCBpdCBnaXZlcyB1cCB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBBSkFYLXJlYWR5IGRhdGEgdG8gYmUgcG9zdGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IHRpbWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IGNhY2hlIGVudHJ5XG4gKiBAcGFyYW0ge0ludGVnZXJ9IGRlbGF5IC0gVGhlIGN1cnJlbnQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZVxuIHRyeWluZyB0aGUgcmVxdWVzdCBhZ2Fpbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RMYXRlc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5KSB7XG4gICAgbGV0IGNhY2hlID0gZW5kcG9pbnQgKyBmaWxlbmFtZTtcbiAgICBsZXQgcmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjb25uZWN0ZWQgYnV0IGZhaWxlZCwgZG9uJ3QgdHJ5IGFnYWluIGJ1dCBsZXQgdGhlIHVzZXIga25vdyB3aHkuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJzW2NhY2hlXSk7XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVyc1tjYWNoZV0gPSBzZXRUaW1lb3V0KHJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdEJsb2NraW5nID0gZnVuY3Rpb24gKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgIHRoaXMuc2hvd092ZXJsYXkoYXR0ZW1wdHMpO1xuICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cyAtIDEsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkQXNzaWdubWVudCA9IGZ1bmN0aW9uIChhc3NpZ25tZW50X2lkKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdID0gYXNzaWdubWVudF9pZDtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEFzc2lnbm1lbnRcIiwgZGF0YSwgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5sb2FkQXNzaWdubWVudERhdGFfKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVBc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiaGlkZGVuXCJdID0gbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgZGF0YVtcInJldmlld2VkXCJdID0gbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpO1xuICAgICAgICBkYXRhW1wicHVibGljXCJdID0gbW9kZWwuYXNzaWdubWVudC5wdWJsaWMoKTtcbiAgICAgICAgZGF0YVtcInVybFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQudXJsKCk7XG4gICAgICAgIGRhdGFbXCJpcF9yYW5nZXNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKCk7XG4gICAgICAgIGRhdGFbXCJuYW1lXCJdID0gbW9kZWwuYXNzaWdubWVudC5uYW1lKCk7XG4gICAgICAgIGRhdGFbXCJzZXR0aW5nc1wiXSA9IHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpO1xuXG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInNhdmVBc3NpZ25tZW50XCIsIGRhdGEsIDMsICgpID0+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfU0FWSU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEhpc3RvcnlcIiwgZGF0YSwgMiwgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2dFdmVudCA9IGZ1bmN0aW9uIChldmVudF90eXBlLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGZpbGVfcGF0aCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dFdmVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZXZlbnRfdHlwZVwiXSA9IGV2ZW50X3R5cGU7XG4gICAgICAgIGRhdGFbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhW1wibGFiZWxcIl0gPSBsYWJlbDtcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPSBtZXNzYWdlO1xuICAgICAgICBkYXRhW1wiZmlsZV9wYXRoXCJdID0gZmlsZV9wYXRoO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJsb2dFdmVudFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUltYWdlID0gZnVuY3Rpb24gKGRpcmVjdG9yeSwgaW1hZ2UpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUltYWdlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJkaXJlY3RvcnlcIl0gPSBkaXJlY3Rvcnk7XG4gICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IGltYWdlO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwidHVydGxlX291dHB1dFwiLCBcInNhdmVJbWFnZVwiLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uU3RhdHVzID0gZnVuY3Rpb24obmV3U3RhdHVzKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInN0YXR1c1wiXSA9IG5ld1N0YXR1cztcbiAgICAgICAgbGV0IHBvc3RTdGF0dXNDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMobmV3U3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwidXBkYXRlU3VibWlzc2lvblN0YXR1c1wiLCBkYXRhLCAyLCBwb3N0U3RhdHVzQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbG9hZCBmaWxlcyBhbmQgd2ViIHJlc291cmNlcy5cbiAqXG4gKiBERVBSRUNBVEVEXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwibG9hZEZpbGVcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRGaWxlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbk92ZXJyaWRlICYmIGNvcnJlY3QgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2suYWJzdHIub2JqZWN0U2V0SXRlbShuZXdEaWN0LCBTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQoa2V5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNhbGxfZiA9IGZ1bmN0aW9uKGt3YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJnc0xlbihcImNhbGxcIiwgYXJndW1lbnRzLmxlbmd0aCwgMSwgSW5maW5pdHksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgdmFyIGt3YXJncyA9IG5ldyBTay5idWlsdGlucy5kaWN0KGt3YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gYXJnc1swXTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMik7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dHMgPSBrd2FyZ3MubXAkbG9va3VwKG5ldyBTay5idWlsdGluLnN0cihcImlucHV0c1wiKSk7XG4gICAgICAgICAgICBpZiAoaW5wdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHMgPSBTay5mZmkucmVtYXBUb0pzKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYudHAkZ2V0YXR0cihuZXcgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpKTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk9iamVjdCA9IGRhdGEubXAkbG9va3VwKGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb25PYmplY3QudHAkY2FsbChhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGxfZi5jb19rd2FyZ3MgPSB0cnVlO1xuICAgICAgICAvL2NhbGxfZi5jb192YXJuYW1lcyA9IFtcInNlbGZcIiwgXCJmdW5jdGlvblwiXTtcbiAgICAgICAgY2FsbF9mLmNvX25hbWU9IG5ldyBTay5idWlsdGluLnN0cihcImNhbGxcIik7XG4gICAgICAgICRsb2NbXCJjYWxsXyRybiRcIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGNhbGxfZik7XG5cbiAgICAgICAgJGxvY1tcIl9fcmVwcl9fXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9LCBcIlN0dWRlbnREYXRhXCIpO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuXG4gICAgbW9kLnNldF9pbnN0cnVjdGlvbnMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5ld0luc3RydWN0aW9ucykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic2V0X2luc3RydWN0aW9uc1wiLCBhcmd1bWVudHMsIDEsIDIpO1xuICAgICAgICBuZXdJbnN0cnVjdGlvbnMgPSBTay5mZmkucmVtYXBUb0pzKG5ld0luc3RydWN0aW9ucyk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXS5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICB9KTtcblxuICAgIG1vZC5nZXRfbW9kZWxfaW5mbyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X21vZGVsX2luZm9cIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IG1vZGVsID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdO1xuICAgICAgICBrZXlzID0gU2suZmZpLnJlbWFwVG9KcyhrZXlzKS5zcGxpdChcIi5cIik7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vZGVsID0gbW9kZWxba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobW9kZWwoKSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCJsZXQgTE9DQUxfU1RPUkFHRV9SRUY7XG50cnkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0gbG9jYWxTdG9yYWdlO1xuICAgIGxldCBtb2QgPSBcIkJMT0NLUFlfTE9DQUxTVE9SQUdFX1RFU1RcIjtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKG1vZCwgbW9kKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKG1vZCk7XG59IGNhdGNoKGUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IHtcbiAgICAgICAgX2RhdGEgICAgICAgOiB7fSxcbiAgICAgICAgc2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCwgdmFsKSB7IHJldHVybiB0aGlzLl9kYXRhW2lkXSA9IFN0cmluZyh2YWwpOyB9LFxuICAgICAgICBnZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGlkKSA/IHRoaXMuX2RhdGFbaWRdIDogdW5kZWZpbmVkOyB9LFxuICAgICAgICByZW1vdmVJdGVtICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBkZWxldGUgdGhpcy5fZGF0YVtpZF07IH0sXG4gICAgICAgIGNsZWFyICAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kYXRhID0ge307IH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlN0ZXA6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLyA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6IC8vJHJvb3Qudmlld0V4YWN0VmFsdWUodHlwZSwgZXhhY3RfdmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvdyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBcclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tQeVRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeVRyYWNlLnBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0ge1wibmFtZVwiOiBwcm9wZXJ0eSwgXCJ0eXBlXCI6IFwiVW5rbm93blwiLCBcInZhbHVlXCI6IHZhbHVlLnRvU3RyaW5nKCl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bGxMZW5ndGgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsTGVuZ3RoIHx8IHZhbHVlLnYubGVuZ3RoIDw9IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IHZpZXdFeGFjdFZhbHVlIiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogVHVybnMgc3BhY2VzIGludG8gdW5kZXJzY29yZXMgaW4gdGhlIHN0cmluZywgbWFrZXMgaXQgbG93ZXJjYXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gW2BtaW5gLCBgbWF4YF0uXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIGludGVnZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgaW50ZWdlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHNvbWUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzYWZlbHkgd3JpdHRlbiBpbnRvIGFuIEhUTUwgYm94LlxuICogVGhpcyBpbmNsdWRlcyByZXBsYWNpbmcgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgKCYsIDwsID4sIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgdGV4dCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBIVE1MLXNhZmUgdGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLycvZywgXCImYXBvcztcIik7XG59XG5cbi8qKlxuICogU2h1ZmZsZSB0aGUgYmxvY2tzIGluIHRoZSB3b3Jrc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBCbG9ja2x5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQmxvY2tseS5Xb3Jrc3BhY2VTdmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1ldHJpY3MgPSB0aGlzLmdldE1ldHJpY3MoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gbWV0cmljcy52aWV3V2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy52aWV3SGVpZ2h0O1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5nZXRUb3BCbG9ja3MoZmFsc2UpO1xuICAgICAgICB2YXIgeSA9IDUsIHggPSAwLFxuICAgICAgICAgICAgbWF4aW1hbF9pbmNyZWFzZSA9IGhlaWdodC9ibG9ja3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBHZXQgYSBibG9ja1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBibG9jay5nZXRSZWxhdGl2ZVRvU3VyZmFjZVhZKCk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAtcHJvcGVydGllcy54K3JhbmRvbUludGVnZXIoMTAsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLm1vdmVCeSh4LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAtcHJvcGVydGllcy55K3kpO1xuICAgICAgICAgICAgeSA9IHkgKyByYW5kb21JbnRlZ2VyKDUsIG1heGltYWxfaW5jcmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIgYmFzZWQgb24gYSBjb25kaXRpb25hbCBjaGVjay5cbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxODg3OTY3L2phdmFzY3JpcHQtbW92ZS1vYmplY3RzLWZyb20tb25lLWFycmF5LXRvLWFub3RoZXItYmVzdC1hcHByb2FjaFxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoc291cmNlLCB0YXJnZXQsIG1vdmVDaGVjaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlW2ldO1xuICAgICAgICBpZiAobW92ZUNoZWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdERlZmluZWRWYWx1ZSgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2ldICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9