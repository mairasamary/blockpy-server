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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsIm1ha2VFeHRyYVN1YnNjcmlwdGlvbnMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsImRpcnR5U3VibWlzc2lvbiIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUltYWdlIiwic2F2ZUltYWdlTWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzIiwidXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJ1c2VyX2lkIiwiY291cnNlX2lkIiwibG9hZENvbmNhdGVuYXRlZEZpbGUiLCJleHRyYV9maWxlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzZXRJbnRlcmZhY2UiLCJmaWxlU3lzdGVtIiwiZGlzbW91bnRFeHRyYUZpbGVzIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJuZXdGaWxlIiwib25fZXZhbCIsIm9uX3J1biIsInN0YXJ0aW5nX2NvZGUiLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJleHRyYV9zdGFydGluZ19maWxlcyIsImxvYWRTdWJtaXNzaW9uIiwiY29yZ2lzIiwibG9hZERhdGFzZXRzIiwic2V0U3RhdHVzIiwic2VsZiIsInVpIiwiaXNHcmFkZXIiLCJwdXJlQ29tcHV0ZWQiLCJpc0NoYW5nZWQiLCJjdXJyZW50IiwidXRpbGl0aWVzIiwibWFya2Rvd24iLCJyZXNldCIsIm1lbnUiLCJjYW5NYXJrU3VibWl0dGVkIiwidGV4dE1hcmtTdWJtaXR0ZWQiLCJpc0NvbXBsZXRlZCIsImlzU3VibWl0dGVkIiwiY2xpY2tNYXJrU3VibWl0dGVkIiwiYWxlcnQiLCJlbmdpbmUiLCJkZWxheWVkUnVuIiwidG9Mb3dlckNhc2UiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsInNpemUiLCJoaWRlRXZhbHVhdGUiLCJBQ1RJVkUiLCJiYWRnZSIsInRyYWNlIiwibGluZSIsInN0ZXAiLCJ0cmFjZURhdGEiLCJmaXJzdCIsImJhY2t3YXJkIiwicHJldmlvdXMiLCJNYXRoIiwibWF4IiwiZm9yd2FyZCIsIm5leHQiLCJtaW4iLCJsYXN0IiwiZmlsZXMiLCJ2aXNpYmxlIiwiaGlkZUZpbGVzIiwiaGFzQ29udGVudHMiLCJwYXRoIiwic29tZSIsImZpbGUiLCJsZW5ndGgiLCJhZGQiLCJuZXdGaWxlRGlhbG9nIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJkaXNwbGF5RmlsZW5hbWUiLCJzdGFydHNXaXRoIiwic2xpY2UiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJ1cGRhdGVNb2RlIiwibmV3TW9kZSIsIm9sZFB5dGhvbk1vZGUiLCJpc0hpc3RvcnlBdmFpbGFibGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwidHVybk9mZkhpc3RvcnlNb2RlIiwidXBkYXRlRWRpdG9yIiwic2V0UmVhZE9ubHkiLCJ0dXJuT25IaXN0b3J5TW9kZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhpc3RvcnkiLCJsb2FkIiwiZGlhbG9nIiwiRVJST1JfTE9BRElOR19ISVNUT1JZIiwidG9nZ2xlSGlzdG9yeU1vZGUiLCJtb3ZlVG9TdGFydCIsIm1vdmVQcmV2aW91cyIsIm1vdmVOZXh0IiwibW9zdFJlY2VudCIsIm1vdmVUb01vc3RSZWNlbnQiLCJ1c2UiLCJzYXZlIiwiZXhlY3V0ZSIsImlzUnVubmluZyIsInJ1biIsImV2YWx1YXRlIiwibWVzc2FnZXMiLCJmb3JjZSIsImV2ZW50IiwidGFyZ2V0IiwiZmFkZU91dCIsImZhZGVJbiIsIm1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMiLCJhcHBseUJpbmRpbmdzIiwibWFpbiIsInRleHQiLCJFYXN5TURFIiwicHJvdG90eXBlIiwiQmxvY2tQeURpYWxvZyIsImZpbmQiLCJCbG9ja1B5RmVlZGJhY2siLCJCbG9ja1B5VHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlFbmdpbmUiLCJCbG9ja1B5RmlsZVN5c3RlbSIsIkVkaXRvcnMiLCJieU5hbWUiLCJCbG9ja1B5U2VydmVyIiwiQmxvY2tQeUNvcmdpcyIsIkJsb2NrUHlIaXN0b3J5Iiwic3Vic2NyaWJlIiwiY2hhbmdlZCIsIlNUQVJUX0VWQUxfSFRNTCIsIkNPTlNPTEVfSFRNTCIsIk5FV19DT05TT0xFX0xJTkVfSFRNTCIsIkNvbnNvbGVMaW5lVHlwZSIsIlRFWFQiLCJIVE1MIiwiUExPVCIsIklNQUdFIiwiVFVSVExFIiwiRVZBTCIsIlNUQVJUX0VWQUwiLCJWQUxVRSIsIklOUFVUIiwiVEVTVF9DQVNFIiwiQ29uc29sZUxpbmUiLCJjb250ZW50Iiwib3JpZ2luIiwiU2siLCJjdXJyRmlsZW5hbWUiLCJleGVjdXRpb25CdWZmZXIiLCJpbmRleCIsImZmaSIsInJlbWFwVG9QeSIsInJlbW92ZSIsIkNvbnNvbGVMaW5lVHVydGxlIiwiYWRkQ2xhc3MiLCJ3aGVyZSIsInByZXBlbmQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiQ29uc29sZUxpbmVJbWFnZSIsImFwcGVuZCIsIkNvbnNvbGVMaW5lUGxvdCIsIkNvbnNvbGVMaW5lVGV4dCIsImVuY29kZWRUZXh0IiwiZW5jb2RlSFRNTCIsImxpbmVEYXRhIiwidG9vbHRpcCIsIkNvbnNvbGVMaW5lVmFsdWUiLCJDb25zb2xlTGluZUlucHV0IiwicHJvbXB0TWVzc2FnZSIsImlucHV0Rm9ybSIsImlucHV0QnRuIiwiaW5wdXRHcm91cCIsImlucHV0Qm94IiwiaW5wdXRNc2ciLCJtYWtlSW50ZXJhY3RpdmUiLCJpbnB1dCIsImJ1dHRvbiIsInJlc29sdmVPbkNsaWNrIiwic3VibWl0dGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic3VibWl0Rm9ybSIsInZhbCIsInByb3AiLCJjbGljayIsImtleXVwIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsIkNvbnNvbGVMaW5lRXZhbHVhdGUiLCJDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUiLCJ0YWciLCJwcmludGVyVGFnIiwiTUlOSU1VTV9XSURUSCIsIk1JTklNVU1fSEVJR0hUIiwiREVGQVVMVF9IRUlHSFQiLCJoZWlnaHQiLCJjbGVhciIsInJlbW92ZUFsbCIsImxpbmVCdWZmZXIiLCJwbG90QnVmZmVyIiwiZW1wdHkiLCJ0dXJ0bGVMaW5lIiwiVHVydGxlR3JhcGhpY3MiLCJnZXRUdXJ0bGVMaW5lIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImFzc2V0cyIsImxvYWRBc3NldCIsInJlbmRlciIsImN1cnJlbnRQcmludGVyRGltZW5zaW9uIiwic2F2ZVR1cnRsZU91dHB1dCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJwYWdlIiwiZWFjaCIsImF0dHIiLCJzaG93IiwiaGlkZSIsImxpbmVUZXh0IiwiZmx1c2giLCJjaGFyQXQiLCJzcGxpdExpbmVzIiwic3BsaXQiLCJhZGRDb250ZW50IiwiaSIsInB1c2giLCJwbG90cyIsImltYWdlRGF0YSIsImltYWdlQnVmZmVyIiwiaW1hZ2UiLCJ2YWx1ZSIsInByaW50ZWRWYWx1ZSIsImlucHV0QnVmZmVyIiwic3RhcnRFdmFsdWF0aW9uIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIl9JTVBPUlRFRF9EQVRBU0VUUyIsIl9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUyIsInNldEJ1dHRvbkxvYWRlZCIsImJ0biIsInJlbW92ZUNsYXNzIiwibG9hZGVkRGF0YXNldHMiLCJzaWxlbnRseSIsImVkaXRvciIsImltcG9ydHMiLCJkYXRhc2V0cyIsImZvckVhY2giLCJCbG9ja01pcnJvckJsb2NrRWRpdG9yIiwiRVhUUkFfVE9PTFMiLCJhcHBseSIsInNsdWciLCJ3aGVuIiwiZG9uZSIsImZvcmNlQmxvY2tSZWZyZXNoIiwiYmxvY2tFZGl0b3IiLCJyZW1ha2VUb29sYm94IiwiZmFpbCIsImFyZ3VtZW50cyIsImVycm9yIiwiYWx3YXlzIiwiZmluYWxpemVTdWJzY3JpcHRpb25zIiwidXJsX3JldHJpZXZhbHMiLCJyb290IiwiaW1wb3J0RGF0YXNldHMiLCJnZXREYXRhc2V0IiwiZ2V0U2NyaXB0IiwiZ2V0Q29tcGxldGUiLCJnZXRTa3VscHQiLCJidWlsdGluRmlsZXMiLCJnZXRCbG9ja2x5IiwidGV4dFRvQmxvY2tzIiwiaGlkZGVuSW1wb3J0cyIsImdldEpTT04iLCJibG9ja3B5IiwiZG9jdW1lbnRhdGlvbiIsImJvZHkiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInNsdWdnZWROYW1lIiwidGl0bGVOYW1lIiwiaW1nU3JjIiwidGl0bGUiLCJvdmVydmlldyIsImFwcGVuZFRvIiwiRElBTE9HX0hUTUwiLCJ0aXRsZVRhZyIsImJvZHlUYWciLCJmb290ZXJUYWciLCJva2F5QnV0dG9uIiwieWVzIiwibW9kYWwiLCJjbG9zZSIsIm9uY2xvc2UiLCJkcmFnZ2FibGUiLCJvbiIsImNvbmZpcm0iLCJubyIsInllc1RleHQiLCJBU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCIsIkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQiLCJTQ1JFRU5TSE9UX0JMT0NLUyIsIkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlTmFtZSIsInJlYWRBc1RleHQiLCJzbHVnZ2lmeSIsInJlcGxhY2UiLCJleHRlbnNpb24iLCJtaW1ldHlwZSIsImJsb2IiLCJCbG9iIiwid2luZG93IiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsIm1zU2F2ZUJsb2IiLCJ0ZW1wb3JhcnlEb3dubG9hZExpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsIkFic3RyYWN0RWRpdG9yIiwiY2hhbmdlRWRpdG9yIiwid2F0Y2hGaWxlIiwidXBkYXRlZCIsIm9uRmlsZVVwZGF0ZWQiLCJkZWxldGVkIiwib25GaWxlRGVsZXRlZCIsIm5ld0ZpbGVuYW1lIiwib2xkRWRpdG9yIiwiZ2V0RmlsZSIsInRyYWNrQ3VycmVudEZpbGUiLCJuZXdFZGl0b3IiLCJzdG9wV2F0Y2hpbmdGaWxlIiwicmVzdWx0IiwiaGFuZGxlIiwicGFyc2VGaWxlbmFtZSIsIkFTU0lHTk1FTlRfU0VUVElOR1MiLCJnZXREb2N1bWVudGF0aW9uIiwibWFrZVN0YXJ0Vmlld1RhYiIsImljb24iLCJtb2RlIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTCIsImZpbHRlciIsInNldHRpbmciLCJwcmV0dHlOYW1lIiwid29yZCIsInRvVXBwZXJDYXNlIiwiam9pbiIsIkFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwiLCJCTE9DSyIsInNhdmVBc3NpZ25tZW50U2V0dGluZ3MiLCJjbGllbnROYW1lIiwic2VydmVyTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInN0YXJ0X3ZpZXciLCJmaWVsZFR5cGUiLCJjb25maWdWYWx1ZSIsIkFzc2lnbm1lbnRTZXR0aW5nc1ZpZXciLCJkaXJ0eSIsImN1cnJlbnRMaXN0ZW5lciIsInVwZGF0ZUhhbmRsZSIsIm5ld0NvbnRlbnRzIiwiQXNzaWdubWVudFNldHRpbmdzIiwiZXh0ZW5zaW9ucyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJNQVJLRE9XTl9FRElUT1JfSFRNTCIsIk1hcmtkb3duRWRpdG9yVmlldyIsIm1kZSIsImVsZW1lbnQiLCJhdXRvRG93bmxvYWRGb250QXdlc29tZSIsImZvcmNlU3luYyIsIm1pbkhlaWdodCIsInJlbmRlcmluZ0NvbmZpZyIsImNvZGVTeW50YXhIaWdobGlnaHRpbmciLCJpbmRlbnRXaXRoVGFicyIsInRhYlNpemUiLCJjdXJyZW50U3Vic2NyaXB0aW9uIiwiY29kZW1pcnJvciIsInNldFRpbWVvdXQiLCJyZWZyZXNoIiwiZGlzcG9zZSIsIm9mZiIsIk1hcmtkb3duRWRpdG9yIiwibWFrZVRhYiIsIlBZVEhPTl9FRElUT1JfSFRNTCIsIkhJU1RPUllfVE9PTEJBUl9IVE1MIiwiY29udmVydElweW5iVG9QeXRob24iLCJpcHluYiIsImlzVXNhYmxlIiwiY2VsbCIsImNlbGxfdHlwZSIsInNvdXJjZSIsIm1ha2VQeXRob24iLCJjZWxscyIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwibWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwib25seVVwbG9hZHMiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIlRleHRFZGl0b3IiLCJFZGl0b3JzRW51bSIsIlNVQk1JU1NJT04iLCJBU1NJR05NRU5UIiwiSU5TVFJVQ1RJT05TIiwiT05fUlVOIiwiT05fQ0hBTkdFIiwiT05fRVZBTCIsIlNUQVJUSU5HX0NPREUiLCJTQU1QTEVfU1VCTUlTU0lPTlMiLCJJTlNUUlVDVE9SX0ZJTEUiLCJTUEVDSUFMX05BTUVTUEFDRVMiLCJBVkFJTEFCTEVfRURJVE9SUyIsIkVESVRPUlNfSFRNTCIsInJlZ2lzdGVyZWRfIiwiZXh0ZW5zaW9uc18iLCJieU5hbWVfIiwicmVnaXN0ZXJFZGl0b3IiLCJpbnN0YW5jZSIsImV4aXQiLCJlbnRlciIsInNwYWNlIiwibGFzdEluZGV4T2YiLCJleGVjdXRpb25Nb2RlbCIsImNvbmZpZ3VyYXRpb25zIiwiUnVuQ29uZmlndXJhdGlvbiIsImV2YWwiLCJFdmFsQ29uZmlndXJhdGlvbiIsIk9uUnVuQ29uZmlndXJhdGlvbiIsIk9uQ2hhbmdlQ29uZmlndXJhdGlvbiIsIk9uRXZhbENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmUiLCJnZXRTa3VscHRPcHRpb25zIiwib25FeGVjdXRpb25CZWdpbiIsIm9uRXhlY3V0aW9uRW5kIiwicmVwb3J0IiwicmVzZXRTdHVkZW50TW9kZWwiLCJyZXNldFJlcG9ydHMiLCJyZXNldEV4ZWN1dGlvbkJ1ZmZlciIsInRoZW4iLCJmYWlsdXJlIiwiZGlzYWJsZUZlZWRiYWNrIiwic2hvd0Vycm9ycyIsImV4ZWN1dGlvbkVuZF8iLCJldmFsdWF0aW9uSW5wdXQiLCJ1c2VySW5wdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiRklMRU5BTUUiLCJwcm9ncmFtcyIsInRyaW0iLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJ1cGRhdGVQYXJzZSIsInJ1bkluc3RydWN0b3JDb2RlIiwibW9kdWxlIiwiZXhlY3V0aW9uUmVwb3J0cyIsInByZXNlbnRGZWVkYmFjayIsIiRkIiwiRU1QVFlfTU9EVUxFIiwiQ29uZmlndXJhdGlvbiIsInF1ZXVlZElucHV0IiwiaW5Ccm93c2VyIiwib3BlbkZpbGUiLCJyZXF1ZXN0c0dldCIsInRpbWVvdXQiLCJvcGVuVVJMIiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwid2FybiIsIm1vY2tVcmxEYXRhIiwiYnVpbHRpbiIsIklPRXJyb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImZpbGVEYXRhIiwicmVhZEZpbGUiLCJFcnJvciIsInBvcCIsImFmdGVyU2luZ2xlRXhlY3V0aW9uIiwicHJpbnRWYWx1ZSIsInJlbWFwVG9KcyIsIl8iLCIkciIsInJlamVjdCIsIngiLCJGQUlMRUQiLCJTdHVkZW50Q29uZmlndXJhdGlvbiIsIlVUSUxJVFlfTU9EVUxFX0NPREUiLCIkc2tfbW9kX2luc3RydWN0b3IiLCJJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdCIsImZvdW5kIiwic2VhcmNoRm9yRmlsZSIsIk9TRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwiZGlzYWJsZVRpZmEiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiZmluaXNoVHVydGxlcyIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwidmlzaXRlZExpbmVzIiwiU2V0IiwidmlzaXRCb2R5Iiwibm9kZSIsImxpbmVubyIsInN0YXRlbWVudCIsIm9yZWxzZSIsImZpbmFsYm9keSIsIkFycmF5IiwiZnJvbSIsImFzdEZyb21QYXJzZSIsImNzdCIsImZsYWdzIiwiZ2V0TGluZXMiLCJwcmVzZW50UnVuRXJyb3IiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInZpc2liaWxpdHlCdWZmZXIiLCJ0b3BPZkVsZW1lbnQiLCJib3R0b21PZkVsZW1lbnQiLCJib3R0b21PZlNjcmVlbiIsInRvcE9mU2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJ1bmNvdmVyZWRMaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJtc2ciLCJhcmdzIiwidiIsImNvbnZlcnRTa3VscHRFcnJvciIsImZpbGVuYW1lRXhlY3V0ZWQiLCJ0cmFjZWJhY2siLCJmcmFtZSIsInNjb3BlIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIm5vdEluc3RydWN0b3IiLCJpbnN0cnVjdG9yRmlsZUNsYXNzIiwiaGlkZUlmTm90SW5zdHJ1Y3RvciIsIkZJTEVTX0hUTUwiLCJORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJJTlNUUlVDVE9SX0RJUkVDVE9SWSIsIlNUVURFTlRfRElSRUNUT1JZIiwiU2VhcmNoTW9kZXMiLCJFVkVSWVdIRVJFIiwiU1RBUlRfV0lUSF9JTlNUUlVDVE9SIiwiT05MWV9TVFVERU5UX0ZJTEVTIiwiREVMRVRBQkxFX1NJTVBMRV9GSUxFUyIsIkJsb2NrUHlGaWxlIiwib3duZXIiLCJtYWtlTW9ja01vZGVsRmlsZSIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwibW9kZWxGaWxlcyIsImNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUiLCJmaWxlc18iLCJtb3VudEZpbGVzIiwid2F0Y2hNb2RlbCIsIndhdGNoZXNfIiwidmlzaWJsaXR5IiwidG9nZ2xlIiwiZmlsZXN5c3RlbSIsImZpbGVBcnJheSIsImNoYW5nZXMiLCJjaGFuZ2UiLCJtb2RlbEZpbGUiLCJub3RpZnlXYXRjaGVzIiwib2JzZXJ2ZUluQXJyYXlfIiwiYXJyYXkiLCJjb2RlQnVuZGxlIiwiZXhpc3RpbmdGaWxlIiwib2JzZXJ2ZUZpbGVfIiwic3R1ZGVudFNlYXJjaCIsInNlYXJjaE1vZGUiLCJzcGVjaWFsRmlsZSIsInNlYXJjaEZvclNwZWNpYWxGaWxlc18iLCJzdHVkZW50VmVyc2lvbiIsInNlYXJjaEZvckZpbGVJbkxpc3RfIiwiZ2VuZXJhdGVkVmVyc2lvbiIsImRlZmF1bHRWZXJzaW9uIiwiZmlyc3REZWZpbmVkVmFsdWUiLCJpbnN0cnVjdG9yVmVyc2lvbiIsImhpZGRlblZlcnNpb24iLCJzdGFydGluZ1ZlcnNpb24iLCJtb2RlbExpc3QiLCJraW5kIiwiZmlsZXR5cGUiLCJuYW1lc3BhY2UiLCJleHRlbnNpb25SZWdleCIsImV4ZWMiLCJwcmVmaXgiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJkaXJlY3RvcnkiLCJuZXdTdGF0dXMiLCJwb3N0U3RhdHVzQ2hhbmdlIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsIm1vZCIsIm5vbmUiLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImNhbGxfZiIsImt3YSIsInB5Q2hlY2tBcmdzTGVuIiwiY2FsbCIsImt3YXJncyIsImJ1aWx0aW5zIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXRzIiwibXAkbG9va3VwIiwidHAkZ2V0YXR0ciIsImZ1bmN0aW9uT2JqZWN0IiwidHAkY2FsbCIsImNvX2t3YXJncyIsImNvX25hbWUiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwic2V0X2luc3RydWN0aW9ucyIsIm5ld0luc3RydWN0aW9ucyIsImdldF9tb2RlbF9pbmZvIiwiTE9DQUxfU1RPUkFHRV9SRUYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIl9kYXRhIiwiU3RyaW5nIiwiZ2V0SXRlbSIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJJR05PUkVEX0dMT0JBTFMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCJzcSRsZW5ndGgiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7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QUZNLE1BRUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTzd4QixFQUFFLENBQUN3WSxPQUFILENBQVc2WixLQUFYLENBQWlCUixHQUFqQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFNBQW5CLEVBQThCO0FBQ2pDLFdBQU8sSUFBSTd4QixFQUFFLENBQUN3WSxPQUFILENBQVcwVyxJQUFmLENBQW9CMkMsR0FBcEIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFHLE9BQU9BLEdBQVAsS0FBZSxVQUFsQixFQUE4QjtBQUNqQyxXQUFPLElBQUk3eEIsRUFBRSxDQUFDd1ksT0FBSCxDQUFXNlQsR0FBZixDQUFtQndGLEdBQUcsQ0FBQzVrQyxJQUF2QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQ3ZQRCxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4vdHJhY2VcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29uc29sZX0gZnJvbSBcIi4vY29uc29sZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlGZWVkYmFja30gZnJvbSBcImZlZWRiYWNrLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVNlcnZlcn0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeURpYWxvZ30gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb3JnaXMsIF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfSBmcm9tIFwiLi9jb3JnaXNcIjtcclxuaW1wb3J0IHtCbG9ja1B5SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5tYWtlRXh0cmFTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRWZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVTdWJtaXNzaW9uczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHJldmlld2VkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnJldmlld2VkXCJdKSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYzoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5wdWJsaWNcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBpcFJhbmdlczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pcF9yYW5nZXNcIl0pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInN1Ym1pc3Npb24uY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShcIlN0YXJ0ZWRcIiksXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiTm90UmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudGx5IHZpc2libGUgRmlsZSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHByZXNlbnRlZCB3aXRoIHRoZSBpbnN0cnVjdG9yIHNldHRpbmdzIGFuZCBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5pbnN0cnVjdG9yXCIsIFwiZmFsc2VcIikudG9TdHJpbmcoKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IEhpc3RvcnkgbW9kZSBpcyBlbmdhZ2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGhpc3RvcnlNb2RlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgYXV0by1zYXZpbmcgY2hhbmdlcyBpbiBQeXRob24gZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgKiBJZiBhbiBpbnRlZ2VyLCBzcGVjaWZpZXMgdGhlIGRlbGF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKG1pY3Jvc2Vjb25kcykuXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5ldmVyIG9uIGluIG5vbi1QeXRob24gZWRpdG9ycy5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfGludH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYXV0b1NhdmU6IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25zb2xlIGlzIGZ1bGwgd2lkdGggYW5kIGZlZWRiYWNrIGlzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBiaWdDb25zb2xlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGhlaWdodCB0byB1c2UgZm9yIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgbnVsbCwgdGhlbiBsZXQgdGhlIGhlaWdodCByZW1haW4gdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBhIG51bWJlciwgdGhlbiB0aGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoaWNoIHBhbmVsIHRvIHNob3cgaW4gdGhlIHNlY29uZCByb3cncyBzZWNvbmQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRSb3dTZWNvbmRQYW5lbDoga28ub2JzZXJ2YWJsZShTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSB0cmFjaW5nIHRoZSBjb2RlIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmFjZUV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBsaXN0IG9mIHByb21pc2VzIHRvIHN0aWxsIHJlc29sdmUgd2hpbGUgbG9hZGluZyBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFByb21pc2U+fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YXNldHM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSB0ZW1wb3JhcnkgY2hhbmdlZCB2YWx1ZSBvZiB0aGUgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGZyb20gd2hhdCBpcyBpbiB0aGUgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkSW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBIGhvbGRlciBmb3IgdGhlIHRpbWVyIHRvIHRyaWdnZXIgb24tY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT25DaGFuZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgZmVlZGJhY2sgYW5kIG91dHB1dCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBzdWJtaXNzaW9uLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyB3b3VsZCBiZSBmYWxzZSBpZiB0aGVyZSBpcyBubyBmZWVkYmFjay9vdXRwdXQgKGkuZS4sIGNvZGUgaGFzIG5vdCBiZWVuIHJ1biksXHJcbiAgICAgICAgICAgICAgICAgKiBvciBpZiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIHN1Ym1pc3Npb24gYWZ0ZXIgdGhlIGxhc3QgcnVuIChlLmcuLCBieSBlZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgdGV4dCkuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGRpcnR5U3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2U6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbikge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5vd25lcklkKHN1Ym1pc3Npb24udXNlcl9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLmRpc21vdW50RXh0cmFGaWxlcygpO1xyXG4gICAgICAgIGxldCB3YXNTZXJ2ZXJDb25uZWN0ZWQgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnQgPSBkYXRhLmFzc2lnbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlkKGFzc2lnbm1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC52ZXJzaW9uKGFzc2lnbm1lbnQudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmNvdXJzZUlkKGFzc2lnbm1lbnQuY291cnNlX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkSWQoYXNzaWdubWVudC5mb3JrZWRfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRWZXJzaW9uKGFzc2lnbm1lbnQuZm9ya2VkX3ZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oYXNzaWdubWVudC5oaWRkZW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZChhc3NpZ25tZW50LnJldmlld2VkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucHVibGljKGFzc2lnbm1lbnQucHVibGljKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudHlwZShhc3NpZ25tZW50LnR5cGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC51cmwoYXNzaWdubWVudC51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcyhhc3NpZ25tZW50LmlwX3Jhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fY2hhbmdlLnB5XCIsIGFzc2lnbm1lbnQub25fY2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIiwgYXNzaWdubWVudC5vbl9ldmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmNvcmdpcy5sb2FkRGF0YXNldHModHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lbnU6IHtcclxuICAgICAgICAgICAgICAgIGNhbk1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdGV4dE1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBc3NpZ25tZW50IGNsb3NlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJlb3BlbiBmb3IgZWRpdGluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJSdW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTdWJtaXQgZWFybHlcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNsaWNrTWFya1N1Ym1pdHRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC51aS5tZW51LmlzQ29tcGxldGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgY2Fubm90IHJlb3BlbiBjbG9zZWQgYXNzaWdubWVudHMuIENvbnRhY3QgYSBncmFkZXIhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcImluUHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcIlN1Ym1pdHRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0dGVkXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZDoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoKS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZURpYWxvZyhcImluc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdHVkZW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlRGlhbG9nKFwic3R1ZGVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXJ0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlRGlhbG9nKFwic3RhcnRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0dWRlbnRGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUZpbGVuYW1lOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGggPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVVJMIERhdGFcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGguc3RhcnRzV2l0aChcIiZcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGguc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgaXNSdW5uaW5nOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpLFxyXG4gICAgICAgICAgICAgICAgZXZhbHVhdGU6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ldmFsdWF0ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAoZW5kcG9pbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1zdGF0dXMtXCIgKyBtb2RlbC5zdGF0dXNbZW5kcG9pbnRdKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0VuZHBvaW50Q29ubmVjdGVkOiAoZW5kcG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJscyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzW2VuZHBvaW50XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkSGlzdG9yeU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRGF0YXNldE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2dFdmVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlSW1hZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNNZXNzYWdlKCkgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZvcmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjogKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNlbGYubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmZhZGVPdXQoMTAwKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25IYWNrcygpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVE9ET1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5cyB0aGUgS25vY2tvdXRKUyBiaW5kaW5ncyB0byB0aGUgbW9kZWwsIGluc3RhbnRpYXRpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZVxyXG4gICAgICogSFRNTC5cclxuICAgICAqL1xyXG4gICAgYXBwbHlNb2RlbCgpIHtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVdGlsaXRpZXMoKSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICBtYXJrZG93bjogKHRleHQpID0+IHRleHQgPyBFYXN5TURFLnByb3RvdHlwZS5tYXJrZG93bih0ZXh0KSA6IFwiPHA+PC9wPlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICAvLyBFYWNoIG9mIHRoZXNlIGNvbXBvbmVudHMgd2lsbCB0YWtlIHRoZSBCbG9ja1B5IGluc3RhbmNlLCBhbmQgcG9zc2libHkgYVxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSB0byB0aGUgcmVsZXZhbnQgSFRNTCBsb2NhdGlvbiB3aGVyZSBpdCB3aWxsIGJlIGVtYmVkZGVkLlxyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1kaWFsb2dcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmVlZGJhY2sgPSBuZXcgQmxvY2tQeUZlZWRiYWNrKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2tcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMudHJhY2UgPSBuZXcgQmxvY2tQeVRyYWNlKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29uc29sZSA9IG5ldyBCbG9ja1B5Q29uc29sZShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWNvbnNvbGVcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZW5naW5lID0gbmV3IEJsb2NrUHlFbmdpbmUobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5maWxlU3lzdGVtID0gbmV3IEJsb2NrUHlGaWxlU3lzdGVtKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZWRpdG9ycyA9IG5ldyBFZGl0b3JzKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZWRpdG9yXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnB5dGhvbkVkaXRvciA9IHRoaXMuY29tcG9uZW50cy5lZGl0b3JzLmJ5TmFtZShcInB5dGhvblwiKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29yZ2lzID0gbmV3IEJsb2NrUHlDb3JnaXMobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5oaXN0b3J5ID0gbmV3IEJsb2NrUHlIaXN0b3J5KG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaGlzdG9yeS10b29sYmFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRXh0cmFTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zLnN1YnNjcmliZSgoY2hhbmdlZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1JbnN0cnVjdGlvbnMuQ2hhbmdlXCIsIFwiXCIsIFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCwgXCJpbnN0cnVjdGlvbnMubWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5lbmdpbmUucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7ZW5jb2RlSFRNTH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IFNUQVJUX0VWQUxfSFRNTCA9IGBcbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZSBmbG9hdC1yaWdodCBibG9ja3B5LWJ0bi1ldmFsXCI+XG4gICAgRXZhbHVhdGVcbjwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nY29sLW1kLTYgYmxvY2tweS1wYW5lbCBibG9ja3B5LWNvbnNvbGUnXG4gICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJDb25zb2xlXCJcbiAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGFzczogdWkuY29uc29sZS5zaXplXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1zaG93LWZlZWRiYWNrJ1xuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuc2Vjb25kUm93LmlzQ29uc29sZVNob3dWaXNpYmxlLCBjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDxzdHJvbmc+Q29uc29sZTo8L3N0cm9uZz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktcHJpbnRlciBibG9ja3B5LXByaW50ZXItZGVmYXVsdCc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgPC9kaXY+YDtcblxuY29uc3QgTkVXX0NPTlNPTEVfTElORV9IVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuXG4vKipcbiAqXG4gKiBAZW51bVxuICovXG5leHBvcnQgbGV0IENvbnNvbGVMaW5lVHlwZSA9IHtcbiAgICBURVhUOiBcInRleHRcIixcbiAgICBIVE1MOiBcImh0bWxcIixcbiAgICBQTE9UOiBcInBsb3RcIixcbiAgICBJTUFHRTogXCJpbWFnZVwiLFxuICAgIFRVUlRMRTogXCJ0dXJ0bGVcIixcbiAgICBFVkFMOiBcImV2YWxcIixcbiAgICBTVEFSVF9FVkFMOiBcInN0YXJ0X2V2YWxcIixcbiAgICBWQUxVRTogXCJ2YWx1ZVwiLFxuICAgIElOUFVUOiBcImlucHV0XCIsXG4gICAgVEVTVF9DQVNFOiBcInRlc3RfY2FzZVwiXG59O1xuXG5jbGFzcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdHlwZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBTay5jdXJyRmlsZW5hbWUsXG4gICAgICAgICAgICBzdGVwOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwLFxuICAgICAgICAgICAgbGluZTogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0bWwgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiAgXCJibG9ja3B5LXByaW50ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgIFwiZGF0YS1zdGVwXCI6IHRoaXMub3JpZ2luLnN0ZXAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RlcCBcIiArIHRoaXMub3JpZ2luLnN0ZXAgKyBcIiwgTGluZSBcIiArIHRoaXMub3JpZ2luLmxpbmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICFtYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdG9Ta3VscHQoKSB7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KHRoaXMuY29udGVudCk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVR1cnRsZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICAvLyBUT0RPOiBDYXB0dXJlIHR1cnRsZSBjb21tYW5kcyBmb3IgdHJhY2luZyBwdXJwb3Nlc1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlRVUlRMRSk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS10dXJ0bGUtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5wcmVwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWxbMF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbWFnZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTUFHRSwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1pbWFnZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVQbG90IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlBMT1QsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtcGxvdC1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVRleHQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50ICsgY29udGVudDtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVWYWx1ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlZBTFVFLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxjb2RlPjwvY29kZT5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbnB1dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTlBVVCwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBJbnB1dCBib3ggZm9yIHJlY2VpdmluZyBpbnB1dCgpIGZyb20gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgLy8gUGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFuaW5nXG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIElucHV0IGZvcm1cbiAgICAgICAgICAgIGxldCBpbnB1dEZvcm0gPSAkKFwiPGlucHV0IHR5cGU9J3RleHQnIC8+XCIpO1xuICAgICAgICAgICAgLy8gRW50ZXIgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRCdG4gPSAkKFwiPGJ1dHRvbj48L2J1dHRvbj5cIiwge1wiaHRtbFwiOiBcIkVudGVyXCJ9KTtcbiAgICAgICAgICAgIC8vIEdyb3VwIGZvcm0gYW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0R3JvdXAgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1wiY2xhc3NcIjogXCJibG9ja3B5LWNvbnNvbGUtaW5wdXRcIn0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRGb3JtKTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0QnRuKTtcbiAgICAgICAgICAgIC8vIFByb21wdCBib3gsIG5ldyBsaW5lLCBpbnB1dCBncm91cFxuICAgICAgICAgICAgbGV0IGlucHV0Qm94ID0gJChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRNc2cgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCAge1wiaHRtbFwiOiBlbmNvZGVkVGV4dH0pO1xuICAgICAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZChpbnB1dE1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoJChcIjxicj5cIikpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpbnB1dEdyb3VwKTtcbiAgICAgICAgICAgIC8vIFJlbmRlclxuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChpbnB1dEJveCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vIE1ha2UgaXQgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJbnRlcmFjdGl2ZShpbnB1dEZvcm0sIGlucHV0QnRuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuXG4gICAgbWFrZUludGVyYWN0aXZlKGlucHV0LCBidXR0b24pIHtcbiAgICAgICAgbGV0IHJlc29sdmVPbkNsaWNrO1xuICAgICAgICBsZXQgc3VibWl0dGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc3VibWl0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICBmaW5pc2hUdXJ0bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Muc2F2ZVR1cnRsZU91dHB1dCgpKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhpcy50dXJ0bGVMaW5lLmh0bWwuZmluZChcImNhbnZhc1wiKS5sYXN0KClbMF07XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlSW1hZ2UoXCJ0dXJ0bGVfb3V0cHV0XCIsIGRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dFRvQmxvY2tzLmhpZGRlbkltcG9ydHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NzI4MzYzNzUzOTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU3MjgzNjM3NTM2MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSdtYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDo0MDBweCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlIG1vZGVsLWNsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tc3VjY2VzcyBtb2RhbC1va2F5JyBkYXRhLWRpc21pc3M9J21vZGFsJz5Pa2F5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdGhpcy5mb290ZXJUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uID0gdGFnLmZpbmQoXCIubW9kYWwtb2theVwiKTtcblxuICAgIHRoaXMueWVzID0gKCkgPT4ge307XG4gICAgdGhpcy5va2F5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy55ZXMoKTtcbiAgICAgICAgdGhpcy50YWcubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xufVxuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRhZy5tb2RhbChcImhpZGVcIik7XG59O1xuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uLmhpZGUoKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgeWVzLCBubywgeWVzVGV4dCkge1xuICAgIGlmICh5ZXNUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWVzVGV4dCA9IFwiT2theVwiO1xuICAgIH1cbiAgICB0aGlzLnNob3codGl0bGUsIGJvZHksIG5vKTtcbiAgICB0aGlzLnllcyA9IHllcztcbiAgICB0aGlzLm9rYXlCdXR0b24uc2hvdygpLmh0bWwoeWVzVGV4dCk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgXCJZb3VyIGluc3RydWN0b3IgaGFzIG1hZGUgY2hhbmdlcyB0byB0aGlzIGFzc2lnbm1lbnQuIFdvdWxkIHlvdSBsaWtlIHRvIHJlbG9hZD8gQWxsIHlvdXIgd29yayBoYXMgYmVlbiBzYXZlZC5cIiwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuU0NSRUVOU0hPVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ET1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgVXBkYXRpbmcgU3VibWlzc2lvbiBTdGF0dXNcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgeW91ciBzdWJtaXNzaW9uIHN0YXR1cy48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0hJU1RPUlkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgTG9hZGluZyBIaXN0b3J5XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgeW91ciBoaXN0b3J5Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG4iLCJpbXBvcnQge0VkaXRvcnN9IGZyb20gXCIuLi9lZGl0b3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGUgPT5cclxuICAgICAgICBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS51cGxvYWRGaWxlKGUpXHJcbiAgICApO1xyXG4gICAgZmlsZVJlYWRlci5maWxlTmFtZSA9IGZpbGVzWzBdLm5hbWU7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQge25hbWUsIGV4dGVuc2lvbiwgY29udGVudHMsIG1pbWV0eXBlfSA9IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgLy8gTWFrZSBzYWZlXHJcbiAgICBuYW1lID0gc2x1Z2dpZnkobmFtZSk7XHJcbiAgICBuYW1lID0gbmFtZSArIGV4dGVuc2lvbjtcclxuICAgIC8vIE1ha2UgdGhlIGRhdGEgZG93bmxvYWQgYXMgYSBmaWxlXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1ldHlwZX0pO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBuYW1lKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5RG93bmxvYWRMaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtID0gbWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW07XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZURlbGV0ZWQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIHRoZSBwcmV2aW91cyBmaWxlIGluc3RlYWQgb2YgYSBkZWZhdWx0IGZpbGVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVVcGRhdGVkKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gdGhpcy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0N1cnJlbnRGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS53YXRjaEZpbGUodGhpcy5maWxlbmFtZSwge1xyXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm9uRmlsZVVwZGF0ZWQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZGVsZXRlZDogdGhpcy5vbkZpbGVEZWxldGVkLmJpbmQodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZVN5c3RlbS5nZXRGaWxlKG5ld0ZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3RmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgdGhhdCB0aGUgb3RoZXIgZWRpdG9yIHdpbGwgYmUgc3dpdGNoaW5nIHRvXHJcbiAgICAgKiBAcGFyYW0gb2xkRWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gbmV3RWRpdG9yXHJcbiAgICAgKi9cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZS5uYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGVuYW1lLnR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmZpbGUuaGFuZGxlKCksXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCIuL3B5dGhvblwiO1xyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HUyA9IFtcclxuICAgIFtcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVJbnN0cnVjdG9yUnVuXCIsIFwiZGlzYWJsZV9pbnN0cnVjdG9yX3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgaW5zdHJ1Y3RvciBvbl9ydW4gd2lsbCBub3QgYXV0b21hdGljYWxseSBydW4gdGhlIHN0dWRlbnRzJyBjb2RlLiBUaGlzIHN0aWxsIHJ1bnMgdGhlIHN0dWRlbnRzJyBjb2RlLlwiXSxcclxuICAgIFtcImRpc2FibGVTdHVkZW50UnVuXCIsIFwiZGlzYWJsZV9zdHVkZW50X3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgcnVuIGJ1dHRvbiBubyBsb25nZXIgcnVuIHRoZSBzdHVkZW50cycgY29kZS4gVGhpcyBzdGlsbCBydW5zIHRoZSBpbnN0cnVjdG9yJ3MgZmVlZGJhY2sgb25fcnVuIHNjcmlwdC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnQgY2Fubm90IGVkaXQgdGhlIGJsb2NrIGludGVyZmFjZSAoYWx0aG91Z2ggaXQgaXMgdmlzaWJsZSkuXCJdLFxyXG4gICAgW1wib25seUludGVyYWN0aXZlXCIsIFwib25seV9pbnRlcmFjdGl2ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbiwgdGhlIHByb2dyYW0gaXMgYXV0b21hdGljYWxseSBydW4sIGFuZCB0aGVuIHRoZSBjb25zb2xlIGVudGVycyBFdmFsIG1vZGUgKGludGVyYWN0aXZlKS5cIl0sXHJcbiAgICBbXCJvbmx5VXBsb2Fkc1wiLCBcIm9ubHlfdXBsb2Fkc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBkaXJlY3RseSBlZGl0YWJsZSAodGhleSB3aWxsIGhhdmUgdG8gdXBsb2FkIHN1Ym1pc3Npb25zKS5cIl0sXHJcbiAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgIFtcImhpZGVTdWJtaXNzaW9uXCIsIFwiaGlkZV9zdWJtaXNzaW9uXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIHN1Ym1pc3Npb24ncyBjb2RlIG9yIGhpc3Rvcnkgb24gQ2FudmFzLlwiXSxcclxuICAgIFtcImhpZGVGaWxlc1wiLCBcImhpZGVfZmlsZXNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBzZWUgdGhlIFZpZXcgRmlsZXMgdG9vbGJhci5cIl0sXHJcbiAgICBbXCJoaWRlUXVldWVkSW5wdXRzXCIsIFwiaGlkZV9xdWV1ZWRfaW5wdXRzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY2FuIGFjY2VzcyB0aGUgcXVldWVkIGlucHV0cyBib3ggKG1ha2VzIHJlcGVhdGVkIGRlYnVnZ2luZyBlYXNpZXIgZm9yIHRoZSBpbnB1dCBmdW5jdGlvbikuXCJdLFxyXG4gICAgW1wiaGlkZUVkaXRvcnNcIiwgXCJoaWRlX2VkaXRvcnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gYWxsIG9mIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUFsbFwiLCBcImhpZGVfYWxsXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGVuIHRoZSBlbnRpcmUgaW50ZXJmYWNlIGlzIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBFdmFsdWF0ZSBidXR0b24gaXMgbm90IHNob3duIG9uIHRoZSBjb25zb2xlLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNhbm5vdCBzZWUgdGhlIGltcG9ydCBkYXRhc2V0cyBidXR0b24uXCJdLFxyXG4gICAgLy8gVE9ETzogRml4IHRoaXMgb25lIHRvIGJlIHNldHRhYmxlXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIGNlcnRhaW4ga2luZHMgb2YgaW1wb3J0IHN0YXRlbWVudHMgKG1hdHBsb3RsaWIsIHR1cnRsZSwgZGF0YXNldHMpIGFyZSBub3Qgc2hvd24gaW4gdGhlIGJsb2NrIGludGVyZmFjZS5cIl0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlIGNvdmVyYWdlIGJ1dHRvbiBpcyBub3Qgc2hvd24uXCJdLFxyXG4gICAgW1wic2F2ZVR1cnRsZU91dHB1dFwiLCBcInNhdmVfdHVydGxlX291dHB1dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0dXJ0bGUgb3V0cHV0IGlzIHNhdmVkIHdoZW5ldmVyIHRoZSBwcm9ncmFtIHVzZXMgaXQuXCJdLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBBU1NJR05NRU5UX1NFVFRJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bMF0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmQgZm9yIGZpZWxkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VTdGFydFZpZXdUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3LmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LXN0YXJ0LXZpZXctc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwgPSBBU1NJR05NRU5UX1NFVFRJTkdTXHJcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgc2ltcGxlIGJvb2xlYW5zIHRoaXMgd2F5XHJcbiAgICAuZmlsdGVyKChzZXR0aW5nKSA9PiBzZXR0aW5nWzNdID09PSBcImJvb2xcIilcclxuICAgIC5tYXAoKHNldHRpbmcpID0+IHtcclxuICAgICAgICBsZXQgcHJldHR5TmFtZSA9IHNldHRpbmdbMV0uc3BsaXQoXCJfXCIpLm1hcCh3b3JkPT4od29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt3b3JkLnNsaWNlKDEpKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIj4ke3ByZXR0eU5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuc2V0dGluZ3MuJHtzZXR0aW5nWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldHRpbmdbNF19XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihcIlxcblxcblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktdmlldy1zZXR0aW5nc1wiPlxyXG4gICAgXHJcbiAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnNldHRpbmdzLnNhdmVcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBzdHVkZW50LWZhY2luZyBuYW1lIG9mIHRoZSBhc3NpZ25tZW50LiBBc3NpZ25tZW50cyB3aXRoaW4gYSBncm91cCBhcmUgb3JkZXJlZCBhbHBoYWJldGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGJ5IHRoZWlyIG5hbWUsIHNvIHlvdSBtYXkgd2FudCB0byB1c2UgYSBuYW1pbmcgc2NoZW1lIGxpa2UgXCIjNDMuNSkgV2hhdGV2ZXJcIi5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5VUkw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnVybFwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgY291cnNlLXVuaXF1ZSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zaXN0ZW50bHkgcmVmZXIgdG8gdGhpcyBhc3NpZ25tZW50LiBcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCI+UHVibGljOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIG5vdCBwdWJsaWMsIHVzZXJzIG91dHNpZGUgb2YgdGhlIGNvdXJzZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGUgYXNzaWdubWVudCBpbiBjb3Vyc2UgbGlzdGluZ3MuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiPkhpZGRlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBoaWRkZW4sIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIGdyYWRlIHdoaWxlIHdvcmtpbmcgb24gdGhlIGFzc2lnbm1lbnQuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+UmV2aWV3ZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnJldmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIHJldmlld2VkLCB0aGUgYXNzaWdubWVudCBjYW4gYmUgY29tbWVudGVkIHVwb24gYW5kIHJlZ3JhZGVkIGJ5IHRoZSBzdGFmZiBhZnRlcndhcmRzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlN0YXJ0aW5nIFZpZXc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJzdGFydFZpZXdcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+SVAgUmFuZ2VzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5pcFJhbmdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSVAgQWRkcmVzc2VzIHRoYXQgd2lsbCBiZSBleHBsaWNpdGx5IGFsbG93ZWQuIElmIGJsYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gYWxsIGFkZHJlc3NlcyBhcmUgYWxsb3dlZC4gSWYgYW4gYWRkcmVzcyBzdGFydHMgd2l0aCA8Y29kZT5ePC9jb2RlPiB0aGVuIGl0IGl0IGlzIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgICAgICBibGFja2xpc3RlZCwgYnV0IHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdHVybiB3aXRoIGEgPGNvZGU+ITwvY29kZT4uIEFkZHJlc3NlcyBjYW4gYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYSBiaXQgbWFzayB0byBhbGxvdyBhIHJhbmdlIG9mIGFkZHJlc3Nlcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlByZWxvYWRlZCBEYXRhc2V0czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJkYXRhc2V0c1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7QVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTH1cclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRfdmlldykge1xyXG4gICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoc2V0dGluZ3Muc3RhcnRfdmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl0sXHJcbiAgICAgICAgICAgIGZpZWxkVHlwZSA9IHNldHRpbmdbM107XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnVmFsdWUgPSBjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zZXR0aW5ncy5cIitzZXJ2ZXJOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJib29sXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ1ZhbHVlID0gY29uZmlnVmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGNvbmZpZ1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn1cclxuXHJcbmNsYXNzIEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vVE9ETzogdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IERvIHVwZGF0ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICAvL3RoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlXHJcbiAgICAgICAgLy90aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudFNldHRpbmdzID0ge1xyXG4gICAgbmFtZTogXCJBc3NpZ25tZW50IFNldHRpbmdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IEFzc2lnbm1lbnRTZXR0aW5nc1ZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BUktET1dOX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIj48L3RleHRhcmVhPiAgICBcclxuYDtcclxuXHJcblxyXG5jbGFzcyBNYXJrZG93bkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMubWRlID0gbmV3IEVhc3lNREUoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci1tYXJrZG93blwiKVswXSxcclxuICAgICAgICAgICAgYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JjZVN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiBpbWFnZVVwbG9hZEZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJlbmRlcmluZ0NvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY29kZVN5bnRheEhpZ2hsaWdodGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMubWRlLmNvZGVtaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS52YWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLm1kZS52YWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1hcmtkb3duRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJNYXJrZG93blwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLm1kXCJdLFxyXG4gICAgY29uc3RydWN0b3I6IE1hcmtkb3duRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBNQVJLRE9XTl9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBUT0RPOiByZW5hbWUgZmlsZXMsIG1hbnVhbCBzYXZlLCB0YWdzLCBzYW1wbGVfc3VibWlzc2lvbnMsIG9uX2V2YWwsIG5vbi1idWlsdGluIGZpbGVzXHJcbiAqIFRPRE86IGltcG9ydCBkYXRhLCBoaXN0b3J5LCBydW4sIHVybF9kYXRhLCBhc3NpZ25tZW50X3NldHRpbmdzLCBwYXJzb25zX21vZGVcclxuICogVE9ETzogZGVsZXRlIGJlY29tZXMgXCJjbGVhclwiIGZvciBpbnN0cnVjdG9yIGZpbGVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBlbnVtIHtzdHJ9XHJcbiAqL1xyXG5pbXBvcnQge0Fic3RyYWN0RWRpdG9yLCBzbHVnZ2lmeX0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7SElTVE9SWV9UT09MQkFSX0hUTUx9IGZyb20gXCIuLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgbGV0IERpc3BsYXlNb2RlcyA9IHtcclxuICAgIEJMT0NLOiBcImJsb2NrXCIsXHJcbiAgICBTUExJVDogXCJzcGxpdFwiLFxyXG4gICAgVEVYVDogXCJ0ZXh0XCJcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1ha2VUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi51cGRhdGVNb2RlLmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LW1vZGUtc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQWVRIT05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tdG9vbGJhciBjb2wtbWQtMTIgYnRuLXRvb2xiYXJcIlxyXG4gICAgICAgICByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJQeXRob24gVG9vbGJhclwiPlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJ1biBHcm91cFwiPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBibG9ja3B5LXJ1blwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZXhlY3V0ZS5ydW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsnYmxvY2tweS1ydW4tcnVubmluZyc6IHVpLmV4ZWN1dGUuaXNSdW5uaW5nfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvc3Bhbj4gUnVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZXNldCBHcm91cFwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXN5bmNcIj48L3NwYW4+IFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkltcG9ydCBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuaW1wb3J0RGF0YXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24udG9nZ2xlSGlzdG9yeU1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdWkuZWRpdG9ycy5weXRob24uaXNIaXN0b3J5QXZhaWxhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsgYWN0aXZlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IHsgJ2FyaWEtcHJlc3NlZCc6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAke0hJU1RPUllfVE9PTEJBUl9IVE1MfVxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIlxyXG4gICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpIHtcclxuICAgIGxldCBpcHluYiA9IEpTT04ucGFyc2UoY29kZSk7XHJcbiAgICBsZXQgaXNVc2FibGUgPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWNlbGwuc291cmNlWzBdLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1ha2VQeXRob24gPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiJycnXCIrY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKStcIicnJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaXB5bmIuY2VsbHMuZmlsdGVyKGlzVXNhYmxlKS5tYXAobWFrZVB5dGhvbikuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuY2xhc3MgUHl0aG9uRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCIpKTtcclxuICAgICAgICB0aGlzLmJtID0gbmV3IEJsb2NrTWlycm9yKHtcclxuICAgICAgICAgICAgXCJjb250YWluZXJcIjogdGhpcy50YWdbMF0sXHJcbiAgICAgICAgICAgIFwicnVuXCI6IG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuLmJpbmQobWFpbi5jb21wb25lbnRzLmVuZ2luZSksXHJcbiAgICAgICAgICAgIFwic2tpcFNrdWxwdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJsb2NrbHlNZWRpYVBhdGhcIjogbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmJsb2NrbHlQYXRoLFxyXG4gICAgICAgICAgICAvLydoZWlnaHQnOiAnMjAwMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWtlU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVFeHRyYUJsb2NrbHkoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UuY29uZmlndXJlQ29udGV4dE1lbnUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2NyZWVuc2hvdFwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5TQ1JFRU5TSE9UX0JMT0NLU1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBsZXQgb2xkRmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUodGhpcy5vbGRQeXRob25Nb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qk1MaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gKCkgPT4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5pc1BhcnNvbnM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNFcnJvci5zdWJzY3JpYmUoKGxpbmVzKSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLWVycm9yLWxpbmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzVW5jb3ZlcmVkLnN1YnNjcmliZSgobGluZXMpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLXVuY292ZXJlZC1saW5lXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5yZW5kZXIoKTtcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHRoaXMgZG9lc24ndCBlbmQgdXAgbG9va2luZyByaWdodCAoZ28gdG8gYSBkaWZmZXJlbnQgZWRpdG9yLCBjb21lIGJhY2ssIGFuZCBpdCdsbCBiZSBzcXVpc2hlZClcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ibS5yZWZyZXNoKCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIGlmIChuZXdDb250ZW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gdGhpcy5maWxlLmhhbmRsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lc24ndCBtYXR0ZXIsIGZpbGUgd2FzIGFscmVhZHkgc2h1dCBkb3duLlxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBjbG9zaW5nIHRoaXMgZmlsZVxyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0Q29kZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuYm0uZ2V0Q29kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhckxpbmVTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckxpbmVTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uc2V0TW9kZSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUuc3Vic2NyaWJlKG1vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUobW9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5vbmx5VXBsb2Fkcy5zdWJzY3JpYmUoKGNoYW5nZWQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbmdlZCk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWFkT25seSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVhZE9ubHkoY2hhbmdlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkT25seShpc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuVXBsb2FkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpO1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBjb2RlXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5kb3dubG9hZEZpbGUoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09IFwiYW5zd2VyXCIgJiYgcmVzdWx0LmV4dGVuc2lvbiA9PT0gXCIucHlcIikge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHNsdWdnaWZ5KHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5taW1ldHlwZSA9IFwidGV4dC94LXB5dGhvblwiO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5Eb3dubG9hZFwiLCBcIlwiLCBcIlwiLCBcIlwiLCByZXN1bHQubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQeXRob25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnB5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFB5dGhvbkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogUFlUSE9OX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEFHU19FRElUT1JfSFRNTCA9IGBcclxuQ3JlYXRlIG5ld1xyXG5JbXBvcnQgYnkgbmFtZVxyXG5GaW5kIGJ5IG93bmVyL2NvdXJzZS9raW5kXHJcblxyXG5UYWdzOlxyXG4gICAgRGF0YTpcclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgS2luZFxyXG4gICAgICAgIExldmVsXHJcbiAgICAgICAgVmVyc2lvblxyXG4gICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICBDb250cm9sczpcclxuICAgICAgICBFZGl0XHJcbiAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgRGVsZXRlIFxyXG5gO1xyXG5cclxuY2xhc3MgVGFnc0VkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10YWdzXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3NFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiF0YWdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGFnc0VkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEFHU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItdGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNsYXNzIFRleHRFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10ZXh0XCIpWzBdLCB7XHJcbiAgICAgICAgICAgIHNob3dDdXJzb3JXaGVuU2VsZWN0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgZmlyc3RMaW5lTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICBpbmRlbnRVbml0OiA0LFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgICAgICAgICAgXCJUYWJcIjogXCJpbmRlbnRNb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiRXNjXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLmRpc3BsYXkuaW5wdXQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIkYxMVwiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5jb2RlTWlycm9yLnJlZnJlc2guYmluZCh0aGlzLmNvZGVNaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogdXBkYXRlIGR5bmFtaWNhbGx5IHdoZW4gY2hhbmdpbmcgaW5zdHJ1Y3RvciBzdGF0dXNcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iuc2V0T3B0aW9uKFwicmVhZE9ubHlcIiwgbmV3RmlsZW5hbWUuc3RhcnRzV2l0aChcIiZcIikgJiYgIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVNaXJyb3Iuc2V0VmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVNaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLnNldE9wdGlvbihcInJlYWRPbmx5XCIsIGZhbHNlKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcIm1vZGVsXCJdID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIH07XG5cbiAgICByZXNldFN0dWRlbnRNb2RlbCgpIHtcbiAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnN0dWRlbnQ7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFN0ZXAobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LnJlc3VsdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0RXhlY3V0aW9uQnVmZmVyKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHtcbiAgICAgICAgICAgIFwidHJhY2VcIjogW10sXG4gICAgICAgICAgICBcInN0ZXBcIjogMCxcbiAgICAgICAgICAgIFwibGluZVwiOiAwLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGludGVyZmFjZSBhc3BlY3RzIG9mIHRoZSBwcmV2aW91cyBSdW4uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIFRPRE86IENsZWFyIG91dCBhbnkgY292ZXJhZ2UvdHJhY2UvZXJyb3IgaGlnaGxpZ2h0cyBpbiBlZGl0b3JzXG4gICAgICAgIC8vIFJlc2V0IGV4ZWN1dGlvbiBpbiBtb2RlbFxuICAgICAgICB0aGlzLnJlc2V0U3R1ZGVudE1vZGVsKCk7XG4gICAgICAgIC8vIEdldCByZXBvcnRzIHJlYWR5XG4gICAgICAgIHRoaXMucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgZXhlY3V0aW9uIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlc2V0RXhlY3V0aW9uQnVmZmVyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgY29uc29sZSBvZiBwcmludGVkIHN0dWZmXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBvbGQgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxheWVkUnVuKCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksIDEpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ydW4udXNlKHRoaXMpO1xuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uUnVuLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5jb25maWd1cmF0aW9uLnNob3dFcnJvcnMuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uUnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5leGVjdXRpb25FbmRfLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIGxldCBldmFsdWF0aW9uSW5wdXQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmV2YWx1YXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWx1YXRpb25JbnB1dCk7XG4gICAgICAgIGV2YWx1YXRpb25JbnB1dC50aGVuKCh1c2VySW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMuZXZhbC51c2UodGhpcywgdXNlcklucHV0KTtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vbkV2YWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZhbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkV2YWwudXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV2YWx1YXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uQ2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHJldHVybiBTay5taXNjZXZhbC5hc3luY1RvUHJvbWlzZSgoKSA9PlxuICAgICAgICAgICAgU2suaW1wb3J0TWFpbldpdGhCb2R5KHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmNvZGUsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVkIHdoZW5ldmVyIHRoZSBQeXRob24gY29kZSBjaGFuZ2VzXG4gICAgICovXG4gICAgb25fY2hhbmdlKCkge1xuICAgICAgICBsZXQgRklMRU5BTUUgPSBcIm9uX2NoYW5nZVwiO1xuICAgICAgICAvLyBTa2lwIGlmIHRoZSBpbnN0cnVjdG9yIGhhcyBub3QgZGVmaW5lZCBhbnl0aGluZ1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tGSUxFTkFNRV0oKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNoYW5naW5nXCIpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUNvZGUoKTtcbiAgICAgICAgLy8gT24gc3RlcCBkb2VzIG5vdCBwZXJmb3JtIHBhcnNlIGFuYWx5c2lzIGJ5IGRlZmF1bHQgb3IgcnVuIHN0dWRlbnQgY29kZVxuICAgICAgICBsZXQgZW5naW5lID0gdGhpcztcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGVuZ2luZS5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgZW5naW5lLnZlcmlmeUNvZGUoKTtcbiAgICAgICAgZW5naW5lLnVwZGF0ZVBhcnNlKCk7XG4gICAgICAgIGVuZ2luZS5ydW5JbnN0cnVjdG9yQ29kZShGSUxFTkFNRSwgdHJ1ZSwgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNob3cgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICEoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50RmVlZGJhY2soY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2sobW9kdWxlLiRkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImVuZ2luZVwiLCBcIm9uX2NoYW5nZVwiKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGF0dGVtcHQgdG8gY2FsbCB0aGUgZGVmaW5lZCBvbkV4ZWN1dGlvbkVuZCxcbiAgICAgKiBidXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZXJlIGlzIG5vIGZ1bmN0aW9uIGRlZmluZWQuXG4gICAgICovXG4gICAgZXhlY3V0aW9uRW5kXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25FbmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZXhlY3V0aW9uQmVnaW5fKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkJlZ2luICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgRU1QVFlfTU9EVUxFID0gXCJsZXQgJGJ1aWx0aW5tb2R1bGUgPSBmdW5jdGlvbihtb2QpeyByZXR1cm4gbW9kOyB9XCI7XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgLy8gU2V0IG9wZW5GaWxlIGFzIG1lY2hhbmlzbSB0byByZWFkIGZpbGVzXHJcbiAgICAgICAgU2suaW5Ccm93c2VyID0gdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAodXJsLCBkYXRhLCB0aW1lb3V0KSA9PiB0aGlzLm9wZW5VUkwodXJsLCBkYXRhLCB0aW1lb3V0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTa3VscHRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIF9fZnV0dXJlX186IFNrLnB5dGhvbjMsXHJcbiAgICAgICAgICAgIC8vIGltcG9ydFxyXG4gICAgICAgICAgICByZWFkOiB0aGlzLmltcG9ydEZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gb3BlblxyXG4gICAgICAgICAgICAvL2ZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gaW5wdXRcclxuICAgICAgICAgICAgaW5wdXRmdW46IHRoaXMuaW5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgaW5wdXRmdW5UYWtlc1Byb21wdDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gTWVkaWEgSW1hZ2UgUHJveHkgVVJMXHJcbiAgICAgICAgICAgIGltYWdlUHJveHk6IHRoaXMuZ2V0SW1hZ2VQcm94eS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRoZSBnbG9iYWxzXHJcbiAgICAgICAgICAgIHJldGFpbkdsb2JhbHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBhY2Nlc3MgU2t1bHB0IGJ1aWx0LWlucy4gVGhpcyBpcyBwcmV0dHkgZ2VuZXJpYywgdGFrZW5cclxuICAgICAqIGFsbW9zdCBkaXJlY3RseSBmcm9tIHRoZSBTa3VscHQgZG9jcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgcHl0aG9uIGZpbGVuYW1lIChlLmcuLCBcIm9zXCIgb3IgXCJwcHJpbnRcIikgdGhhdCB3aWxsIGJlIGxvYWRlZC5cclxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBKYXZhU2NyaXB0IHNvdXJjZSBjb2RlIG9mIHRoZSBmaWxlICh3ZWlyZCwgcmlnaHQ/KVxyXG4gICAgICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBmaWxlIGlzbid0IGZvdW5kLlxyXG4gICAgICovXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcblxyXG4gICAgb3BlblVSTCh1cmwsIGRhdGEsIHRpbWVvdXQpIHtcclxuICAgICAgICAvL3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG1vY2tVcmxEYXRhID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5nZXRGaWxlKFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgIGlmIChtb2NrVXJsRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IChuZXcgU2suYnVpbHRpbi5JT0Vycm9yKFwiQ2Fubm90IGFjY2VzcyB1cmw6IFVSTCBEYXRhIHdhcyBub3QgbWFkZSBhdmFpbGFibGUgZm9yIHRoaXMgYXNzaWdubWVudFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vY2tVcmxEYXRhID0gSlNPTi5wYXJzZShtb2NrVXJsRGF0YS5oYW5kbGUoKSk7XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gbW9ja1VybERhdGEpIHtcclxuICAgICAgICAgICAgaWYgKG1vY2tVcmxEYXRhLmhhc093blByb3BlcnR5KGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbW9ja1VybERhdGFbZmlsZW5hbWVdLmxlbmd0aDsgaSs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9ja1VybERhdGFbZmlsZW5hbWVdW2ldID09PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVEYXRhID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5yZWFkRmlsZShmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3JlamVjdChuZXcgU2suYnVpbHRpbi5JT0Vycm9yKFwiQ2Fubm90IGFjY2VzcyB1cmw6IFwiK3VybCtcIiB3YXMgbm90IG1hZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2lnbm1lbnRcIikpO1xyXG4gICAgICAgIHRocm93IChuZXcgU2suYnVpbHRpbi5JT0Vycm9yKFwiQ2Fubm90IGFjY2VzcyB1cmw6IFwiK3VybCtcIiB3YXMgbm90IG1hZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2lnbm1lbnRcIikpO1xyXG4gICAgICAgIC8vfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBwcmludCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlucHV0TW9ja0Z1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChTay5xdWV1ZWRJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0SW1hZ2VQcm94eSgpIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgc3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3Qgc3VjY2VzcyBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGZhaWx1cmUgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGR1bW15T3V0U2FuZGJveCgpIHtcclxuICAgICAgICAvL1NrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvcGVkYWwvc2FuZGJveC9zYW5kYm94LnB5XCJdID0gXCJjbGFzcyBTYW5kYm94OiBwYXNzXFxuZGVmIHJ1bigpOiBwYXNzXFxuZGVmIHJlc2V0KCk6IHBhc3NcXG5cIjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi4vdHJhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUsIGNvZGUpIHtcclxuICAgICAgICAvLyBUT0RPOiBmaXggdG8gYmUgY3VycmVudGx5IGFkZGVkIGxpbmVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwiXyA9IFwiICsgY29kZTtcclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gdHJ1ZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkFkZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgdGhpcy5jb2RlLCBcImV2YWx1YXRpb25zXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRXZhbHVhdGUuUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludFZhbHVlKFNrLmZmaS5yZW1hcFRvSnMobW9kdWxlLiRkLl8uJHIoKSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dCxcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiB0aGlzLmNvZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyRza19tb2RfaW5zdHJ1Y3Rvcn0gZnJvbSBcIi4uL3NrX21vZF9pbnN0cnVjdG9yXCI7XHJcblxyXG5jb25zdCBVVElMSVRZX01PRFVMRV9DT0RFID0gXCJ2YXIgJGJ1aWx0aW5tb2R1bGUgPSBcIiArICRza19tb2RfaW5zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gSW5zdHJ1Y3RvcnMgaGF2ZSBubyBsaW1pdHNcclxuICAgICAgICBTay5leGVjTGltaXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gU3RlcHBlciEgRXhlY3V0ZWQgYWZ0ZXIgZXZlcnkgc3RhdGVtZW50LlxyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDsgLy8gMTAgKjEwMDBcclxuICAgICAgICAvLyBNdXRlIGV2ZXJ5dGhpbmdcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcih0cnVlKTtcclxuICAgICAgICAvLyBEaXNhYmxlIGlucHV0IGJveFxyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgLy8gVE9ETyBTay5pbnB1dGZ1biA9IEJsb2NrUHlFbmdpbmUuaW5wdXRNb2NrRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETzogQWxsb3cgaW5wdXQgZnVuY3Rpb24gdG8gZGlzYWJsZSB0aGUgdGltZXIsIHNvbWVob3dcclxuICAgICAgICAvLyBFbmFibGUgdXRpbGl0eSBtb2RlXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gVVRJTElUWV9NT0RVTEVfQ09ERTtcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCIuL19pbnN0cnVjdG9yL19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkZpbGUgbm90IGZvdW5kOiBcIitmaWxlbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2suYnVpbHRpbi5PU0Vycm9yKFwiQnVpbHQtaW4gbW9kdWxlcyBub3QgYWNjZXNzaWJsZS5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uc2VhcmNoRm9yRmlsZShmaWxlbmFtZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoZm91bmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkZpbGUgbm90IGZvdW5kOiAnXCIrZmlsZW5hbWUgKyBcIidcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQuY29udGVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBcIkFwcGxlUGllXCI7XHJcbiAgICAgICAgcmV0dXJuIFNrLnF1ZXVlZElucHV0LnBvcCgpO1xyXG4gICAgICAgIC8qcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoU2sucXVldWVkSW5wdXQucG9wKCkpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uQ2hhbmdlQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9jaGFuZ2UucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpO1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJpZ2dlck9uQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtORVdfTElORV9SRUdFWH0gZnJvbSBcIi4vb25fcnVuXCI7XHJcbmltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcIk5vbmVcIikpO1xyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0pXHJcbmRlZiBydW5fc3R1ZGVudCgpOlxyXG4gICAgIyBsaW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICB0cnk6XHJcbiR7aW5kZW50ZWRDb2RlfVxyXG4gICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlcnJvcjpcclxuICAgICAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHJldHVybiBOb25lXHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG5jb21wYXRpYmlsaXR5LnNldF9zYW5kYm94KHN0dWRlbnQpXHJcbmVycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50ID0gcnVuX3N0dWRlbnRcclxuY29tcGF0aWJpbGl0eS5nZXRfcGxvdHMgPSBnZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0ID0gZ2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dCA9IHJlc2V0X291dHB1dFxyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgZnVuYygqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fZXZhbFwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpIHx8IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBkaXNhYmxlVGlmYSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaWZhKCk7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50LmV2YWx1YXRpb24gfHwgXCJOb25lXCI7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgLy9Tay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ldmFsLiRkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZHVsZS4kZCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKDEuMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0xJTkVfUkVHRVggPSAvXFxyXFxufFxccnxcXG4vO1xyXG4vKipcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdSQVBfSU5TVFJVQ1RPUl9DT0RFID0gZnVuY3Rpb24gKHN0dWRlbnRDb2RlLCBpbnN0cnVjdG9yQ29kZSwgcXVpY2ssIGlzU2FmZSkge1xyXG4gICAgbGV0IHNhZmVDb2RlID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudENvZGUpO1xyXG4gICAgbGV0IGluZGVudGVkQ29kZSA9IGluZGVudChpbmRlbnQoaXNTYWZlID8gc3R1ZGVudENvZGUgOiBcInBhc3NcIikpO1xyXG4gICAgbGV0IHRpZmFBbmFseXNpcyA9IFwiXCI7XHJcbiAgICBpZiAoIXF1aWNrKSB7XHJcbiAgICAgICAgdGlmYUFuYWx5c2lzID0gXCJmcm9tIHBlZGFsLnRpZmEgaW1wb3J0IHRpZmFfYW5hbHlzaXNcXG50aWZhX2FuYWx5c2lzKEZhbHNlKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbmZyb20gcGVkYWwucmVwb3J0IGltcG9ydCAqXHJcbmZyb20gcGVkYWwuc291cmNlIGltcG9ydCBzZXRfc291cmNlXHJcbnNldF9zb3VyY2UoJHtzYWZlQ29kZX0sIFwiYW5zd2VyLnB5XCIpXHJcbiR7dGlmYUFuYWx5c2lzfVxyXG5mcm9tIHBlZGFsLnNhbmRib3guc2FuZGJveCBpbXBvcnQgU2FuZGJveFxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBNQUlOX1JFUE9SVFsnc2FuZGJveCddWydydW4nXSA9IFNhbmRib3goKVxyXG4jc3R1ZGVudC5ydW4oTUFJTl9SRVBPUlRbJ3NvdXJjZSddWydjb2RlJ10sIE1BSU5fUkVQT1JUWydzb3VyY2UnXVsnZmlsZW5hbWUnXSwgcmVwb3J0X2V4Y2VwdGlvbnM9RmFsc2UpXHJcbiNkZWJ1ZyhzdHVkZW50KVxyXG5zdHVkZW50LnJlcG9ydF9leGNlcHRpb25zX21vZGUgPSBUcnVlXHJcbmlmIG5vdCBnZXRfbW9kZWxfaW5mbygnYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlSW5zdHJ1Y3RvclJ1bicpOlxyXG4gICAgY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudChyYWlzZV9leGNlcHRpb25zPUZhbHNlKVxyXG4jbG9nKHN0dWRlbnQuZGF0YSlcclxuI3N0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuI2Vycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuI2NvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxucnVuX3N0dWRlbnQgPSBjb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50XHJcbnJlc2V0X291dHB1dCA9IGNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0XHJcbnF1ZXVlX2lucHV0ID0gY29tcGF0aWJpbGl0eS5xdWV1ZV9pbnB1dFxyXG5nZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0XHJcbmdldF9wbG90cyA9IGNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5mcm9tIHBlZGFsIGltcG9ydCBxdWVzdGlvbnNcclxucXVlc3Rpb25zLnNob3dfcXVlc3Rpb24gPSBzZXRfaW5zdHJ1Y3Rpb25zXHJcbiMgVE9ETzogUmVtb3ZlIHRoZSBuZWVkIGZvciB0aGlzIGhhY2shXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIHN0dWRlbnQuY2FsbChmdW5jLl9fbmFtZV9fLCAqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuXHJcbmZyb20gcGVkYWwuY2FpdC5jYWl0X2FwaSBpbXBvcnQgcGFyc2VfcHJvZ3JhbVxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25SdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX3J1blwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIGxldCBkaXNhYmxlVGlmYSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaWZhKCk7XHJcblxyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IHN0dWRlbnRDb2RlU2FmZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGRpc2FibGVUaWZhLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldCAtIDQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBMb2dnaW5nISEhIVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ydW4uJGQ7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc2NvcmUpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vb25fcnVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBCb29sZWFuKHRoaXMuY29kZS50cmltKCkpLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmZpbmlzaFR1cnRsZXMoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5iZWdpbkV2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5wYXJzZXIuc3VjY2VzcyAmJiByZXBvcnQudmVyaWZpZXIuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiUHJvZ3JhbUVycm9yT3V0cHV0XCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZm91bmQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLnNlYXJjaEZvckZpbGUoZmlsZW5hbWUsIHRydWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVuYW1lLCBmb3VuZCk7XHJcbiAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkZpbGUgbm90IGZvdW5kOiBcIitmaWxlbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZvcmJpZGRlbihmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJGaWxlIG5vdCBhY2Nlc3NpYmxlOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkJ1aWx0LWluIG1vZHVsZXMgbm90IGFjY2Vzc2libGUuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLnNlYXJjaEZvckZpbGUoZmlsZW5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZm91bmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkZpbGUgbm90IGZvdW5kOiAnXCIrZmlsZW5hbWUgKyBcIidcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQuY29udGVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuaW5wdXQocHJvbXB0TWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmlsZW5hbWUuc3RhcnRzV2l0aChcInNyYy9saWIvdXRpbGl0eS9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcInNyYy9saWIvcGVkYWwvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIuL19pbnN0cnVjdG9yL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFwiU3RlcHNcIiB0aGUgZXhlY3V0aW9uIG9mIHRoZSBjb2RlLCBtZWFudCB0byBiZSB1c2VkIGFzIGEgY2FsbGJhY2sgdG8gdGhlIFNrdWxwdFxyXG4gICAgICogZW52aXJvbm1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIEhhc2ggdGhhdCBtYXBzIHRoZSBuYW1lcyBvZiB2YXJpYWJsZXMgKFN0cmluZ3MpIHRvIHRoZWlyIFNrdWxwdCByZXByZXNlbnRhdGlvbi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgbGluZSBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29sdW1uTnVtYmVyIC0gVGhlIGNvcnJlc3BvbmRpbmcgY29sdW1uIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGluayBvZiBpdCBhcyB0aGUgXCJYXCIgcG9zaXRpb24gdG8gdGhlIGxpbmVOdW1iZXIncyBcIllcIiBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBweXRob24gZmlsZSBiZWluZyBleGVjdXRlZCAoZS5nLiwgXCJfX21haW5fXy5weVwiKS5cclxuICAgICAqL1xyXG4gICAgc3RlcCh2YXJpYWJsZXMsIGxvY2FscywgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcDtcclxuICAgICAgICAgICAgbGV0IGdsb2JhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHModmFyaWFibGVzKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVHJhY2UgbG9jYWwgdmFyaWFibGVzIHByb3Blcmx5XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgLy9sZXQgbG9jYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vT2JqZWN0LmFzc2lnbihnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcInN0ZXBcIjogY3VycmVudFN0ZXAsXHJcbiAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6IGZpbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8nYmxvY2snOiBoaWdobGlnaHRNYXBbbGluZU51bWJlci0xXSxcclxuICAgICAgICAgICAgICAgIFwibGluZVwiOiBsaW5lTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJjb2x1bW5cIjogY29sdW1uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IGdsb2JhbHMucHJvcGVydGllcyxcclxuICAgICAgICAgICAgICAgIFwibW9kdWxlc1wiOiBnbG9iYWxzLm1vZHVsZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwID0gY3VycmVudFN0ZXAgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSA9IGxpbmVOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCBhdCB0aGUgZW5kIG9mIHRoZSBTa3VscHQgZXhlY3V0aW9uIHRvIHRlcm1pbmF0ZSB0aGUgZXhlY3V0aW9uQnVmZmVyXHJcbiAgICAgKiBhbmQgaGFuZCBpdCBvZmYgdG8gdGhlIGV4ZWN1dGlvbiB0cmFjZSBpbiB0aGUgbW9kZWwuXHJcbiAgICAgKi9cclxuICAgIGxhc3RTdGVwKCkge1xyXG4gICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldExpbmVzKGFzdCkge1xyXG4gICAgICAgIGxldCB2aXNpdGVkTGluZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHZpc2l0Qm9keSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmxpbmVubyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2aXNpdGVkTGluZXMuYWRkKG5vZGUubGluZW5vKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5ib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmJvZHkuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUub3JlbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9yZWxzZS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5maW5hbGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZmluYWxib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2aXNpdEJvZHkoYXN0KTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh2aXNpdGVkTGluZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5zdXJlIHRoYXQgdGhlIHBhcnNlIGluZm9ybWF0aW9uIGlzIHVwLXRvLWRhdGVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUGFyc2UoKSB7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICAvLyBIb2xkIGFsbCB0aGUgYWN0dWFsbHkgZGlzY292ZXJlZCBsaW5lcyBmcm9tIHRoZSBwYXJzZVxyXG4gICAgICAgIGxldCBsaW5lcyA9IFtdO1xyXG4gICAgICAgIC8vIEF0dGVtcHQgYSBwYXJzZVxyXG4gICAgICAgIGxldCBhc3Q7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlID0gU2sucGFyc2UodGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgYXN0ID0gU2suYXN0RnJvbVBhcnNlKHBhcnNlLmNzdCwgdGhpcy5maWxlbmFtZSwgcGFyc2UuZmxhZ3MpO1xyXG4gICAgICAgICAgICBsaW5lcyA9IHRoaXMuZ2V0TGluZXMoYXN0KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBSZXBvcnQgdGhlIGVycm9yXHJcbiAgICAgICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBcImVtcHR5XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IGxpbmVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1Y2Nlc3NmdWwgcGFyc2VcclxuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImFzdFwiOiBhc3QsXHJcbiAgICAgICAgICAgIFwiZW1wdHlcIjogYXN0LmJvZHkubGVuZ3RoID09PSAwLFxyXG4gICAgICAgICAgICBcImxpbmVzXCI6IGxpbmVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RXJyb3JzKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKCFyZXBvcnRbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudFJ1bkVycm9yKHJlcG9ydC5zdHVkZW50LmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbGV0IEZFRURCQUNLX0hUTUwgPSBgXG5cbjxzcGFuIGNsYXNzPSdibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrIHRleHQtbXV0ZWQtbGVzcyBwdWxsLXJpZ2h0IHBvc2l0aW9uLXN0aWNreSBzdGlja3ktdG9wJ1xuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWxhYmVsPVwiTmV3IEZlZWRiYWNrIEFsZXJ0XCI+XG4gICAgTmV3IGZlZWRiYWNrICZ1YXJyO1xuPC9zcGFuPlxuXG48ZGl2IGNsYXNzPSdibG9ja3B5LWZlZWRiYWNrIGNvbC1tZC02IGJsb2NrcHktcGFuZWwnXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkZlZWRiYWNrXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiPlxuXG4gICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZWNvbmRSb3cuc3dpdGNoTGFiZWxcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8IS0tIEFjdHVhbCBGZWVkYmFjayBSZWdpb24gLS0+ICAgIFxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmc+RmVlZGJhY2s6IDwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz0nYmFkZ2UgYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeSBmZWVkYmFjay1iYWRnZSdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczogdWkuZmVlZGJhY2suYmFkZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLmZlZWRiYWNrLmNhdGVnb3J5XCI+RmVlZGJhY2sgS2luZDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ0ZXh0OiBleGVjdXRpb24uZmVlZGJhY2subGFiZWxcIj48L3N0cm9uZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiBleGVjdXRpb24uZmVlZGJhY2subWVzc2FnZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+ICAgICAgICAgICAgXG5gO1xuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZlZWRiYWNrIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB0aGF0IG1hbmFnZXMgdGhlIGZlZWRiYWNrIGFyZWEsIHdoZXJlIHVzZXJzIGFyZSB0b2xkIHRoZSBzdGF0ZSBvZiB0aGVpclxuICAgICAqIHByb2dyYW0ncyBleGVjdXRpb24gYW5kIGdpdmVuIGd1aWRhbmNlLiBBbHNvIG1hbmFnZXMgdGhlIGNyZWF0aW9uIG9mIHRoZSBUcmFjZSBUYWJsZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEB0aGlzIHtCbG9ja1B5RmVlZGJhY2t9XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2s7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1jYXRlZ29yeVwiKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1sYWJlbFwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIik7XG5cbiAgICAgICAgLy8gVE9ETzogSWYgdGhleSBjaGFuZ2UgdGhlIHN0dWRlbnQgZXh0cmEgZmlsZXMsIGFsc28gdXBkYXRlIHRoZSBkaXJ0eSBmbGFnXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUuc3Vic2NyaWJlKCgpID0+IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbih0cnVlKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzY3JlZW4gKHRha2VzIDEgc2Vjb25kKSB0byBtYWtlIHRoZSBGZWVkYmFjayBhcmVhIHZpc2libGUuXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGZlZWRiYWNrIGFyZWEgaXMgY3VycmVudGx5IHZpc2libGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZlZWRiYWNrVmlzaWJsZSgpIHtcbiAgICAgICAgbGV0IHZpc2liaWxpdHlCdWZmZXIgPSAxMDA7XG4gICAgICAgIGxldCB0b3BPZkVsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3A7XG4gICAgICAgIC8vbGV0IGJvdHRvbU9mRWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcCArIHRoaXMudGFnLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGxldCBib3R0b21PZkVsZW1lbnQgPSB0b3BPZkVsZW1lbnQgKyB2aXNpYmlsaXR5QnVmZmVyO1xuICAgICAgICBsZXQgYm90dG9tT2ZTY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIGxldCB0b3BPZlNjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy9ib3R0b21fb2ZfZWxlbWVudCAtPSA0MDsgLy8gVXNlciBmcmllbmRseSBwYWRkaW5nXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAodG9wT2ZFbGVtZW50IDwgYm90dG9tT2ZTY3JlZW4pICYmXG4gICAgICAgICAgICAodG9wT2ZTY3JlZW4gPCBib3R0b21PZkVsZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFueSBvdXRwdXQgY3VycmVudGx5IGluIHRoZSBmZWVkYmFjayBhcmVhLiBBbHNvIHJlc2V0cyB0aGUgcHJpbnRlciBhbmRcbiAgICAgKiBhbnkgaGlnaGxpZ2h0ZWQgbGluZXMgaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UoXCIqUmVhZHkqXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmhpZGRlbihmYWxzZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBmaW5kRmlyc3RFcnJvckxpbmUoZmVlZGJhY2tEYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBmZWVkYmFja0RhdGEubGVuZ3RoLTE7IGkgPj0gMDsgaS09IDEpIHtcbiAgICAgICAgICAgIGlmIChcInBvc2l0aW9uXCIgaW4gZmVlZGJhY2tEYXRhW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRiYWNrRGF0YVtpXS5wb3NpdGlvbi5saW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB1cGRhdGVSZWd1bGFyRmVlZGJhY2soKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBtb2RlbCB3aXRoIHRoZXNlIG5ldyBleGVjdXRpb24gcmVzdWx0c1xuICAgICAqIEBwYXJhbSBleGVjdXRpb25SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICAvLyBQYXJzZSBvdXQgZGF0YVxuICAgICAgICBsZXQgbWVzc2FnZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5NRVNTQUdFKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkNBVEVHT1JZKTtcbiAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkxBQkVMKTtcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuSElERSk7XG4gICAgICAgIGxldCBkYXRhID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkRBVEEpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGJhc2VkIG9uIGFzc2lnbm1lbnRzJyBzZXR0aW5nc1xuICAgICAgICBsZXQgaGlkZVNjb3JlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGlmIChoaWRlU2NvcmUgJiYgY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBsYWJlbCA9IFwiTm8gZXJyb3JzXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJObyBlcnJvcnMgcmVwb3J0ZWQuXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1hcCB0byBleHBlY3RlZCBCbG9ja1B5IGxhYmVsc1xuICAgICAgICBpZiAoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnN0cnVjdG9yXCIgJiYgbGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gXCJleHBsYWluXCIpIHtcbiAgICAgICAgICAgIGxhYmVsID0gXCJJbnN0cnVjdG9yIEZlZWRiYWNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBwcmVzZW50IGEgbGFjayBvZiBlcnJvciBhcyBiZWluZyBpbmNvcnJlY3RcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG1vZGVsIGFjY29yZGluZ2x5XG4gICAgICAgIG1lc3NhZ2UgPSB0aGlzLm1haW4udXRpbGl0aWVzLm1hcmtkb3duKG1lc3NhZ2UpLnJlcGxhY2UoLzxwcmU+XFxuL2csIFwiPHByZT5cXG5cXG5cIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICAvLyBUT0RPOiBJbnN0ZWFkIG9mIHRyYWNraW5nIHN0dWRlbnQgZmlsZSwgbGV0J3MgdHJhY2sgdGhlIGluc3RydWN0b3IgZmlsZVxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJJbnRlcnZlbnRpb25cIiwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBcImFuc3dlci5weVwiKTtcblxuICAgICAgICAvLyBDbGVhciBvdXQgYW55IHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgbGluZXNcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGVycm9yIG9uIGEgbGluZSBhbmQgcmVwb3J0IHRoYXRcbiAgICAgICAgbGV0IGxpbmUgPSBCbG9ja1B5RmVlZGJhY2suZmluZEZpcnN0RXJyb3JMaW5lKGRhdGEpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmUgIT09IG51bGwgJiYgbGluZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5wdXNoKGxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW52ZXJ0IHRoZSBzZXQgb2YgdHJhY2VkIGxpbmVzXG4gICAgICAgIGxldCBzdHVkZW50UmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQ7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQuc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IHVuY292ZXJlZExpbmVzID0gW107XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMucGFyc2VyLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5saW5lcy5pbmRleE9mKGxpbmUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB1bmNvdmVyZWRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkKHVuY292ZXJlZExpbmVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgYW55IGFjY3VtdWxhdGVkIGZlZWRiYWNrXG4gICAgICovXG4gICAgcHJlc2VudEZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKTtcblxuICAgICAgICAvLyBUT0RPOiBMb2dnaW5nXG4gICAgICAgIC8vdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZmVlZGJhY2tcIiwgY2F0ZWdvcnkrXCJ8XCIrbGFiZWwsIG1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMubm90aWZ5RmVlZGJhY2tVcGRhdGUoKTtcbiAgICB9O1xuXG4gICAgbm90aWZ5RmVlZGJhY2tVcGRhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNGZWVkYmFja1Zpc2libGUoKSk7XG4gICAgICAgIGlmICghdGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmxvYXRpbmctZmVlZGJhY2tcIikuc2hvdygpLmZhZGVPdXQoNzAwMCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJlc2VudFJ1bkVycm9yKGVycm9yKSB7XG4gICAgICAgIGxldCBtZXNzYWdlLCBsYWJlbCwgY2F0ZWdvcnksIGxpbmVubztcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiU3ludGF4RXJyb3JcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcInN5bnRheFwiO1xuICAgICAgICAgICAgbGV0IGxpbmVubyA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IubGluZW5vKTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IubXNnKTtcbiAgICAgICAgICAgIGxldCBzb3VyY2UsIG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBlcnJvci5hcmdzLnZbM11bMl07XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gYDxwcmU+JHtzb3VyY2V9PC9wcmU+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYWJlbCA9PT0gXCJiYWQgaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJCYWQgSW5wdXRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJhZCBpbnB1dCBvbiBsaW5lICR7bGluZW5vfS48YnI+JHtzb3VyY2V9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGFiZWwgPT09IFwiRU9GIGluIG11bHRpLWxpbmUgc3RhdGVtZW50XCIpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiRU9GIGluIG11bHRpLWxpbmUgc3RhdGVtZW50XCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBVbmV4cGVjdGVkIGVuZC1vZi1maWxlIGluIG11bHRpLWxpbmUgc3RhdGVtZW50IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiU3ludGF4IEVycm9yXCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGxhYmVsICsgXCI8YnI+XCIgKyBzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbCA9IGVycm9yLnRwJG5hbWU7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwicnVudGltZVwiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuY29udmVydFNrdWxwdEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lbm8gIT09IHVuZGVmaW5lZCAmJiBsaW5lbm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZW5vKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICBsZXQgbmFtZSA9IGVycm9yLnRwJG5hbWU7XG4gICAgICAgIGxldCBhcmdzID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5hcmdzKTtcbiAgICAgICAgbGV0IHRvcCA9IGAke25hbWV9OiAke2FyZ3NbMF19XFxuPGJyPlxcbjxicj5gO1xuICAgICAgICBsZXQgdHJhY2ViYWNrID0gXCJcIjtcbiAgICAgICAgaWYgKGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICB0cmFjZWJhY2sgPSBcIlRyYWNlYmFjazo8YnI+XFxuXCIgKyBlcnJvci50cmFjZWJhY2subWFwKGZyYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGluZW5vID0gZnJhbWUubGluZW5vO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5maWxlbmFtZS5zbGljZSgwLCAtMykgPT09IGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZW5vIC09IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5pbnN0cnVjdG9yLmxpbmVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gYEZpbGUgPGNvZGUgY2xhc3M9XCJmaWxlbmFtZVwiPlwiJHtmcmFtZS5maWxlbmFtZX1cIjwvY29kZT4sIGA7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSBgb24gbGluZSA8Y29kZSBjbGFzcz1cImxpbmVub1wiPiR7bGluZW5vfTwvY29kZT4sIGA7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3BlID0gKGZyYW1lLnNjb3BlICE9PSBcIjxtb2R1bGU+XCIgJiZcbiAgICAgICAgICAgICAgICBmcmFtZS5zY29wZSAhPT0gdW5kZWZpbmVkKSA/IGBpbiBzY29wZSAke2ZyYW1lLnNjb3BlfWAgOiBcIlwiO1xuICAgICAgICAgICAgICAgIGxldCBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgXFxuPHByZT48Y29kZT4ke2ZyYW1lLnNvdXJjZX08L2NvZGU+PC9wcmU+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUgKyBsaW5lICsgc2NvcGUgKyBzb3VyY2U7XG4gICAgICAgICAgICB9KS5qb2luKFwiXFxuPGJyPlwiKTtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IGAke3RyYWNlYmFja31gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3ArXCJcXG5cIit0cmFjZWJhY2s7XG4gICAgfVxuXG4gICAgcHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeShcImludGVybmFsXCIpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsKFwiSW50ZXJuYWwgRXJyb3JcIik7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkVycm9yIGluIGluc3RydWN0b3IgZmVlZGJhY2suIFBsZWFzZSBzaG93IHRoZSBmb2xsb3dpbmcgdG8gYW4gaW5zdHJ1Y3Rvcjo8YnI+XFxuXCI7XG4gICAgICAgIG1lc3NhZ2UgKz0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge2ZpcnN0RGVmaW5lZFZhbHVlfSBmcm9tIFwidXRpbGl0aWVzLmpzXCI7XHJcblxyXG4vLyAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuXHJcbmNvbnN0IG1ha2VUYWIgPSBmdW5jdGlvbihmaWxlbmFtZSwgZnJpZW5kbHlOYW1lLCBoaWRlSWZFbXB0eSwgbm90SW5zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKGZyaWVuZGx5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnJpZW5kbHlOYW1lID0gZmlsZW5hbWU7XHJcbiAgICB9XHJcbiAgICBsZXQgaW5zdHJ1Y3RvckZpbGVDbGFzcyA9IFwiXCI7XHJcbiAgICBsZXQgaGlkZUlmTm90SW5zdHJ1Y3RvciA9IFwidHJ1ZVwiO1xyXG4gICAgaWYgKCFub3RJbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckZpbGVDbGFzcyA9IFwiYmxvY2tweS1maWxlLWluc3RydWN0b3JcIjtcclxuICAgICAgICBoaWRlSWZOb3RJbnN0cnVjdG9yID0gXCJkaXNwbGF5Lmluc3RydWN0b3IoKVwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtICR7aW5zdHJ1Y3RvckZpbGVDbGFzc31cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5maWxlbmFtZSgpID09PSAnJHtmaWxlbmFtZX0nfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsICcke2ZpbGVuYW1lfScpLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogKCEke2hpZGVJZkVtcHR5fSB8fCB1aS5maWxlcy5oYXNDb250ZW50cygnJHtmaWxlbmFtZX0nKSkgJiYgJHtoaWRlSWZOb3RJbnN0cnVjdG9yfVwiPlxyXG4gICAgICAgICAgICAke2ZyaWVuZGx5TmFtZX08L2E+XHJcbiAgICA8L2xpPmA7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZJTEVTX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWZpbGVzXCJcclxuICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmZpbGVzLnZpc2libGVcIj5cclxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxzdHJvbmc+VmlldzogPC9zdHJvbmc+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgICR7bWFrZVRhYihcImFuc3dlci5weVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIiwgXCJTYW1wbGUgU3VibWlzc2lvbnNcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhdGFncy5ibG9ja3B5XCIsIFwiVGFnc1wiLCB0cnVlKX1cclxuICAgIFxyXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBhc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7J2Jsb2NrcHktZmlsZS1pbnN0cnVjdG9yJzogIWZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpfSxcclxuICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmaWxlbmFtZSgpLnN0YXJ0c1dpdGgoJyYnKSB8fCAkcm9vdC5kaXNwbGF5Lmluc3RydWN0b3IoKSBcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogJHJvb3QuZGlzcGxheS5maWxlbmFtZSgpID09PSBmaWxlbmFtZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmVkaXRhYmxlOiBmaWxlbmFtZSgpLnN0YXJ0c1dpdGgoJyYnKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJHJvb3QuZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCBmaWxlbmFtZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICRyb290LnVpLmZpbGVzLmRpc3BsYXlGaWxlbmFtZShmaWxlbmFtZSgpKVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogJHJvb3QuZGlzcGxheS5pbnN0cnVjdG9yKClcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogJHJvb3QuZGlzcGxheS5maWxlbmFtZSgpID09PSBmaWxlbmFtZSgpfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsIGZpbGVuYW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZmlsZW5hbWVcIj5cclxuICAgICAgICAgICAgPC9hPiAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgXHJcbiAgICA8IS0tIGtvIGZvcmVhY2g6IHN1Ym1pc3Npb24uZXh0cmFGaWxlcyAtLT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgZmlsZW5hbWUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkcm9vdC51aS5maWxlcy5kaXNwbGF5RmlsZW5hbWUoZmlsZW5hbWUoKSlcIj5cclxuICAgICAgICAgICAgPC9hPiAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgIDwhLS0gL2tvIC0tPlxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fZXZhbC5weScpXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnc3RhcnRpbmcnKVwiPlN0YXJ0aW5nIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJ2luc3RydWN0b3InKVwiPkluc3RydWN0b3IgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnc3R1ZGVudCcpXCI+U3R1ZGVudCBGaWxlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICBcclxuPC91bD5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MID0gYFxyXG48Zm9ybT5cclxuPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICA8IS0tIEZpbGVuYW1lIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCI+RmlsZW5hbWU6PC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiXHJcbiAgICAgICAgICAgIGlkPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCI+ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEZpbGV0eXBlIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHQgbXQtMlwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIj5GaWxldHlwZTogPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGV0eXBlXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIj48L3NwYW4+ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEluYWNjZXNzaWJsZSB0byBzdHVkZW50PyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0IG10LTJcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLW5hbWVzcGFjZVwiPk5hbWVzcGFjZTogPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIhXCI+Q29tcGxldGVseSBpbmFjY2Vzc2libGU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIj9cIj5IaWRkZW4gZnJvbSBzdHVkZW50LCBhY2Nlc3NpYmxlIHByb2dyYW1hdGljYWxseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiJlwiPlZpc2libGUgdG8gc3R1ZGVudCwgYnV0IG5vdCBlZGl0YWJsZTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Zvcm0+XHJcbmA7XHJcblxyXG4vKipcclxuICogRmlsZW5hbWVzIGxpdmUgaW4gb25lIG9mIGZpdmUgcG9zc2libGUgbmFtZXNwYWNlczpcclxuICogIEluc3RydWN0b3IgKCEpOiBJbnZpc2libGUgdG8gdGhlIHN0dWRlbnQgdW5kZXIgYWxsIGNpcmN1bXN0YW5jZXNcclxuICogIFN0YXJ0IFNwYWNlICheKTogVXNlZCB0byByZXNldCB0aGUgc3R1ZGVudCBuYW1lc3BhY2VcclxuICogIFN0dWRlbnQgU3BhY2UgKCk6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQgd2hlbiBkaXNwbGF5LmhpZGVGaWxlcyBpcyBub3QgdHJ1ZSwgYWJsZSB0byBiZSBlZGl0ZWRcclxuICogIEhpZGRlbiBTcGFjZSAoPyk6IE5vdCBkaXJlY3RseSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgYWNjZXNzaWJsZSBwcm9ncmFtbWF0aWNhbGx5XHJcbiAqICBSZWFkLW9ubHkgU3BhY2UgKCYpOiBBbiBpbnN0cnVjdG9yIGZpbGUgdHlwZSB2aXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgaXMgdW5lZGl0YWJsZSBieSB0aGVtXHJcbiAqICBTZWNyZXQgU3BhY2UgKCQpOiBOb3QgdmlzaWJsZSBmcm9tIHRoZSBtZW51IGF0IGFsbCwgc29tZSBvdGhlciBtZWNoYW5pc20gY29udHJvbHMgaXRcclxuICogIEdlbmVyYXRlZCBTcGFjZSAoKik6IFZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBkZXN0cm95ZWQgYWZ0ZXIgRW5naW5lLkNsZWFyLiBDYW4gc2hhZG93IGFuIGFjdHVhbCBmaWxlLlxyXG4gKiAgQ29uY2F0ZW5hdGVkIFNwYWNlICgjKTogVXNlZCB3aGVuIGJ1bmRsaW5nIGEgc3BhY2UgZm9yIHRoZSBzZXJ2ZXIuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGxldCBTVEFSVElOR19GSUxFUyA9IFtcclxuICAgIC8vIFN1Ym1pc3Npb25cclxuICAgIFwiYW5zd2VyLnB5XCIsXHJcbiAgICAvLyBJbnN0cnVjdG9yIGZpbGVzXHJcbiAgICBcIiFpbnN0cnVjdGlvbnMubWRcIixcclxuICAgIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgXCJec3RhcnRpbmdfY29kZS5weVwiLFxyXG4gICAgXCIhb25fcnVuLnB5XCIsXHJcbiAgICBcIiRzZXR0aW5ncy5ibG9ja3B5XCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfTkVXX0ZJTEVTID0gW1xyXG4gICAgXCIhb25fY2hhbmdlLnB5XCIsXHJcbiAgICBcIiFvbl9ldmFsLnB5XCIsXHJcbiAgICBcIj9tb2NrX3VybHMuYmxvY2tweVwiLFxyXG4gICAgXCIhdGFncy5ibG9ja3B5XCIsXHJcbiAgICBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXHJcbl07XHJcblxyXG5jb25zdCBJTlNUUlVDVE9SX0RJUkVDVE9SWSA9IFwiX2luc3RydWN0b3IvXCI7XHJcbmNvbnN0IFNUVURFTlRfRElSRUNUT1JZID0gXCJfc3R1ZGVudC9cIjtcclxuXHJcbmNvbnN0IFNlYXJjaE1vZGVzID0ge1xyXG4gICAgRVZFUllXSEVSRTogXCJFVkVSWVdIRVJFXCIsXHJcbiAgICBTVEFSVF9XSVRIX0lOU1RSVUNUT1I6IFwiU1RBUlRfV0lUSF9JTlNUUlVDVE9SXCIsXHJcbiAgICBPTkxZX1NUVURFTlRfRklMRVM6IFwiT05MWV9TVFVERU5UX0ZJTEVTXCJcclxufTtcclxuXHJcbmNvbnN0IERFTEVUQUJMRV9TSU1QTEVfRklMRVMgPSBbXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5ERUxFVEFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5SRU5BTUFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCIsIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiF0YWdzLmJsb2NrcHlcIiwgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIl07XHJcblxyXG5jbGFzcyBCbG9ja1B5RmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHtcImZpbGVuYW1lXCI6IGtvLm9ic2VydmFibGUoZmlsZW5hbWUpLCBjb250ZW50czoga28ub2JzZXJ2YWJsZShjb250ZW50cyB8fCBcIlwiKX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VNb2NrTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHsgZmlsZW5hbWU6ICgpID0+IGZpbGVuYW1lLCBjb250ZW50czogKCkgPT4gY29udGVudHMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGNvbmNhdGVuYXRlZEZpbGUsIG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIGlmIChjb25jYXRlbmF0ZWRGaWxlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gSlNPTi5wYXJzZShjb25jYXRlbmF0ZWRGaWxlKTtcclxuICAgICAgICBsZXQgbW9kZWxGaWxlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGVuYW1lIGluIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5oYXNPd25Qcm9wZXJ0eShmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsRmlsZXMucHVzaChtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlc1tmaWxlbmFtZV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2ZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKSk7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChtb2RlbEZpbGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChbXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbEZpbGVMaXN0KCkubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLmZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiBmaWxlLmNvbnRlbnRzKClcclxuICAgICAgICB9O1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoKS5mb3JFYWNoKGZpbGUgPT5cclxuICAgICAgICAgICAgcmVzdWx0W2ZpbGUuZmlsZW5hbWUoKV0gPSBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdHMgYXdheSBkYXRhYmFzZSBsb2dpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGaWxlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfID0ge307XHJcbiAgICAgICAgdGhpcy5tb3VudEZpbGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlc18gPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3Rvci5zdWJzY3JpYmUoKHZpc2libGl0eSk9PiB7XHJcbiAgICAgICAgICAgICQoXCIuYmxvY2tweS1maWxlLWluc3RydWN0b3JcIikudG9nZ2xlKHZpc2libGl0eSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hGaWxlKGZpbGVuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BXYXRjaGluZ0ZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hNb2RlbCgpIHtcclxuICAgICAgICBsZXQgZmlsZXN5c3RlbSA9IHRoaXM7XHJcbiAgICAgICAgW3RoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXNdLmZvckVhY2goZmlsZUFycmF5ID0+XHJcbiAgICAgICAgICAgIGZpbGVBcnJheS5zdWJzY3JpYmUoZnVuY3Rpb24oY2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxGaWxlID0gY2hhbmdlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImFkZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhY2sgbmV3IGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBmaWxlc3lzdGVtLm5ld0ZpbGUobW9kZWxGaWxlLmZpbGVuYW1lKCksIG1vZGVsRmlsZS5jb250ZW50cygpLCBtb2RlbEZpbGUuY29udGVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLm5vdGlmeVdhdGNoZXMoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyhtb2RlbEZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLCBcImFycmF5Q2hhbmdlXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2Ygc3VibWlzc2lvbi5jb2RlKVxyXG4gICAgLy8gIW9uX3J1bi5weSwgIW9uX2NoYW5nZS5weSwgIW9uX2V2YWwucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlbGV2YW50IGFzc2lnbm1lbnQuPHdoYXRldmVyPlxyXG4gICAgLy8gXnN0YXJ0aW5nX2NvZGUucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vIF53aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vICF3aGF0ZXZlciBvciA/d2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuZXh0cmFGaWxlc1xyXG4gICAgLy8gT3RoZXJ3aXNlOlxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2Ygc3VibWlzc2lvbi5jb2RlXHJcbiAgICAvKipcclxuICAgICAqIE5ldyBzcGVjaWFsIGZpbGVzIG5lZWQgdG8gYmUgcmVnaXN0ZXJlZCBoZXJlXHJcbiAgICAgKiBAcGFyYW0gZmlsZSB7QmxvY2tQeUZpbGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlRmlsZV8oZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9jaGFuZ2UucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIl5zdGFydGluZ19jb2RlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIj9tb2NrX3VybHMuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHxcclxuICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIj9cIikgfHxcclxuICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiZcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlSW5BcnJheV8oZmlsZSwgYXJyYXkpIHtcclxuICAgICAgICBmaWxlLm93bmVyID0gYXJyYXk7XHJcbiAgICAgICAgbGV0IGNvZGVCdW5kbGUgPSBmaWxlLm93bmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY29kZUJ1bmRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29kZUJ1bmRsZVtpXS5maWxlbmFtZSgpID09PSBmaWxlLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmhhbmRsZSA9IGNvZGVCdW5kbGVbaV0uY29udGVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGUuaGFuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBuZXdGaWxlLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5ld0ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VudEZpbGVzKCkge1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJec3RhcnRpbmdfY29kZS5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhb25fcnVuLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFpbnN0cnVjdGlvbnMubWRcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtb3VudEV4dHJhRmlsZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlc18uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzX1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy53YXRjaGVzX1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUT0RPOiBTaG91bGRuJ3Qgd2Ugbm90aWZ5IHRoZSBVSSB0aGF0IHRoZSBmaWxlIHdhcyBkZWxldGVkP1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKGV4aXN0aW5nRmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUoY29udGVudHMgfHwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0ZpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9ja1B5RmlsZSh0aGlzLm1haW4sIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdID0gbmV3RmlsZTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhuZXdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGaWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58b2JqZWN0fSBUaGUgaW5mbyBhYm91dCB0aGUgZmlsZSwgb3IgZmFsc2UgaWYgaXQgY291bGQgbm90IGJlIGRlbGV0ZWRcclxuICAgICAqL1xyXG4gICAgZGVsZXRlRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChERUxFVEFCTEVfU0lNUExFX0ZJTEVTLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VycyBhIGNhbGxiYWNrIHRvIGV2ZW50dWFsbHkgY2FsbCBkZWxldGVGaWxlTG9jYWxseV9cclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyLnJlbW92ZShtb2RlbEZpbGUgPT4gbW9kZWxGaWxlLmZpbGVuYW1lID09PSBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZCB8fCBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLmRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeVdhdGNoZXMoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlLmZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLnVwZGF0ZWQoZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hGb3JGaWxlKG5hbWUsIHN0dWRlbnRTZWFyY2gpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGZpbGVzLipcclxuICAgICAgICBfaW5zdHJ1Y3Rvci9maWxlcy4qXHJcbiAgICAgICAgX3N0dWRlbnQvZmlsZXMuKlxyXG5cclxuICAgICAgICBJZiBhIHN0dWRlbnQgc2VhcmNoZXMgZm9yIGEgZmlsZSwgaXQgY2hlY2tzIHRoZSBcIj9cIiwgXCImXCIsIFwiKlwiLCBcIlwiIG5hbWVzcGFjZXNcclxuICAgICAgICAgICAgaW1wb3J0IGhlbHBlciA9PiBcIi4vaGVscGVyLnB5XCJcclxuICAgICAgICAgICAgb3BlbihcImV4dGVybmFsLmpzb25cIikgPT4gXCJleHRlcm5hbC5qc29uXCJcclxuICAgICAgICBJZiBhbiBpbnN0cnVjdG9yIHNlYXJjaGVzIGZvciBhIGZpbGUsIGl0IGNoZWNrcyBcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiZcIiwgXCIqXCIsIFwiXCIgbmFtZXNwYWNlc1xyXG4gICAgICAgICAgICBUbyBleHBsaWNpdGx5IHNlYXJjaCBpbnN0cnVjdG9yIG5hbWVzcGFjZXMgZmlyc3RcclxuICAgICAgICAgICAgICAgIGltcG9ydCBfaW5zdHJ1Y3Rvci5oZWxwZXIgPT4gXCIuL2luc3RydWN0b3IvaGVscGVyLnB5XCJcclxuICAgICAgICAgICAgICAgIG9wZW4oXCJfaW5zdHJ1Y3Rvci9leHRlcm5hbC5qc29uXCIpID0+IFwiX2luc3RydWN0b3IvZXh0ZXJuYWwuanNvblwiXHJcbiAgICAgICAgICAgIHRvIGFsbG93IHN0dWRlbnQgZmlsZXMgdG8gb3ZlcnJpZGU6XHJcbiAgICAgICAgICAgICAgICBpbXBvcnQgaGVscGVyID0+IFwiLi9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICAgICAgb3BlbihcImV4dGVybmFsLmpzb25cIikgPT4gXCJleHRlcm5hbC5qc29uXCJcclxuICAgICAgICAgICAgdG8gb25seSBjaGVjayBzdHVkZW50IGZpbGVzLCBwcmVwZW5kIHdpdGggX3N0dWRlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBDaG9wIG9mZiBzdGFydGluZyBcIi4vXCJcclxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFwiLi9cIikpIHtcclxuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc2xpY2UoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuRVZFUllXSEVSRTtcclxuICAgICAgICAvLyBTaG91bGQgdGhlIHNlYXJjaCBiZSBzdGFydCB3aXRoIGluc3RydWN0b3Igc2lkZT9cclxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKElOU1RSVUNUT1JfRElSRUNUT1JZKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZShJTlNUUlVDVE9SX0RJUkVDVE9SWS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuU1RBUlRfV0lUSF9JTlNUUlVDVE9SO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTaG91bGQgdGhlIHNlYXJjaCBiZSBsaW1pdGVkIHRvIHRoZSBzdHVkZW50IG1vZGU/XHJcbiAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aChTVFVERU5UX0RJUkVDVE9SWSkpIHtcclxuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc2xpY2UoU1RVREVOVF9ESVJFQ1RPUlkubGVuZ3RoKTtcclxuICAgICAgICAgICAgc2VhcmNoTW9kZSA9IFNlYXJjaE1vZGVzLk9OTFlfU1RVREVOVF9GSUxFUztcclxuICAgICAgICB9IGVsc2UgaWYgKHN0dWRlbnRTZWFyY2gpIHtcclxuICAgICAgICAgICAgc2VhcmNoTW9kZSA9IFNlYXJjaE1vZGVzLk9OTFlfU1RVREVOVF9GSUxFUztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIGluc3RydWN0b3IgdmVyc2lvbnNcclxuICAgICAgICBsZXQgZXh0cmFTdHVkZW50RmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKCk7XHJcbiAgICAgICAgbGV0IGV4dHJhSW5zdHJ1Y3RvckZpbGVzID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKTtcclxuICAgICAgICBsZXQgZXh0cmFTdGFydGluZ0ZpbGVzID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKCk7XHJcbiAgICAgICAgLy8gQ2hlY2sgc3BlY2lhbCBmaWxlcyAoVE9ETzogaG93IHdvdWxkIGFuIGluc3RydWN0b3IgYWNjZXNzIFwiLi9faW5zdHJ1Y3Rvci9hbnN3ZXIucHlcIj9cclxuICAgICAgICBsZXQgc3BlY2lhbEZpbGUgPSB0aGlzLnNlYXJjaEZvclNwZWNpYWxGaWxlc18obmFtZSwgc2VhcmNoTW9kZSk7XHJcbiAgICAgICAgaWYgKHNwZWNpYWxGaWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWxGaWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdGFydCBsb29raW5nIHRocm91Z2ggcG9zc2libGUgZmlsZXNcclxuICAgICAgICBsZXQgc3R1ZGVudFZlcnNpb24gPSB0aGlzLnNlYXJjaEZvckZpbGVJbkxpc3RfKGV4dHJhU3R1ZGVudEZpbGVzLCBuYW1lKTtcclxuICAgICAgICBsZXQgZ2VuZXJhdGVkVmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFTdHVkZW50RmlsZXMsIFwiKlwiK25hbWUpO1xyXG4gICAgICAgIGxldCBkZWZhdWx0VmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFJbnN0cnVjdG9yRmlsZXMsIFwiJlwiK25hbWUpO1xyXG4gICAgICAgIGlmIChzZWFyY2hNb2RlID09PSBTZWFyY2hNb2Rlcy5PTkxZX1NUVURFTlRfRklMRVMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0RGVmaW5lZFZhbHVlKGRlZmF1bHRWZXJzaW9uLCBzdHVkZW50VmVyc2lvbiwgZ2VuZXJhdGVkVmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yVmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFJbnN0cnVjdG9yRmlsZXMsIFwiIVwiK25hbWUpO1xyXG4gICAgICAgIGxldCBoaWRkZW5WZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCI/XCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IHN0YXJ0aW5nVmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFTdGFydGluZ0ZpbGVzLCBcIl5cIituYW1lKTtcclxuICAgICAgICBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuU1RBUlRfV0lUSF9JTlNUUlVDVE9SKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJzdERlZmluZWRWYWx1ZShpbnN0cnVjdG9yVmVyc2lvbiwgaGlkZGVuVmVyc2lvbiwgc3RhcnRpbmdWZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaE1vZGUgPT09IFNlYXJjaE1vZGVzLkVWRVJZV0hFUkUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0RGVmaW5lZFZhbHVlKGRlZmF1bHRWZXJzaW9uLCBzdHVkZW50VmVyc2lvbiwgZ2VuZXJhdGVkVmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0b3JWZXJzaW9uLCBoaWRkZW5WZXJzaW9uLCBzdGFydGluZ1ZlcnNpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hGb3JGaWxlSW5MaXN0Xyhtb2RlbExpc3QsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgbW9kZWxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbExpc3RbaV0uZmlsZW5hbWUoKSA9PT0gZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbExpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hGb3JTcGVjaWFsRmlsZXNfKGZpbGVuYW1lLCBzZWFyY2hNb2RlKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaE1vZGUgPT09IFNlYXJjaE1vZGVzLk9OTFlfU1RVREVOVF9GSUxFUykge1xyXG4gICAgICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9ja01vZGVsRmlsZShcIl9pbnN0cnVjdG9yL2Fuc3dlci5weVwiLCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvYW5zd2VyLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbl9ydW4ucHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9ja01vZGVsRmlsZShcIl9pbnN0cnVjdG9yL29uX3J1bi5weVwiLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpKTtcclxuICAgICAgICAgICAgY2FzZSBcIm9uX2NoYW5nZS5weVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3Ivb25fY2hhbmdlLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCkpO1xyXG4gICAgICAgICAgICBjYXNlIFwib25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3Ivb25fZXZhbC5tZFwiLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnMubWRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9ja01vZGVsRmlsZShcIl9pbnN0cnVjdG9yL2luc3RydWN0aW9ucy5tZFwiLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGFydGluZ19jb2RlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9zdGFydGluZ19jb2RlLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXdGaWxlRGlhbG9nKGtpbmQpIHtcclxuICAgICAgICBsZXQgYm9keSA9ICQoTkVXX0lOU1RSVUNUT1JfRklMRV9ESUFMT0dfSFRNTCk7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gYm9keS5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiKTtcclxuICAgICAgICBsZXQgZmlsZXR5cGUgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGV0eXBlXCIpO1xyXG4gICAgICAgIGxldCBuYW1lc3BhY2UgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLW5hbWVzcGFjZVwiKTtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9uUmVnZXggPSAvKD86XFwuKFteLl0rKSk/JC87XHJcbiAgICAgICAgZmlsZW5hbWUub24oXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBleHRlbnNpb24gPSBleHRlbnNpb25SZWdleC5leGVjKGZpbGVuYW1lLnZhbCgpKVsxXTtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uID09PSB1bmRlZmluZWQgPyBcIk5vIGV4dGVuc2lvblwiIDogZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAvL1RPRE86IHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yRnJvbUV4dGVuc2lvbihleHRlbnNpb24pO1xyXG4gICAgICAgICAgICBmaWxldHlwZS50ZXh0KGV4dGVuc2lvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHllcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImluc3RydWN0b3JcIikge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gbmFtZXNwYWNlLnZhbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtpbmQgPT09IFwic3RhcnRpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJeXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaWxlbmFtZS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBwcmVmaXgrZmlsZW5hbWUudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0ZpbGUoZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBib2R5LnN1Ym1pdCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHllcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuY29uZmlybShcIk1ha2UgTmV3IEZpbGVcIiwgYm9keSwgeWVzLCAoKT0+e30sIFwiQWRkXCIpO1xyXG4gICAgfVxyXG59IiwiLy9UT0RPOiBNb3ZlIGdldCBsaW5rIGRvd24gdG8gZm9vdGVyLCByZW1vdmUgdmVydGljYWwgYmFyIGZyb20gcXVpY2stbWVudVxyXG5leHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdWJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuc2VydmVyLmZvcmNlLnVwZGF0ZVN1Ym1pc3Npb25cIj5VcGRhdGUgU3VibWlzc2lvbjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnb25FeGVjdXRpb24nKVwiPkV4ZWN1dGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlcnZlci5tZXNzYWdlc1wiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Vc2VyOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmlkXCI+PC9zcGFuPiAoPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5uYW1lXCI+PC9zcGFuPiwgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5yb2xlXCI+PC9zcGFuPik8L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5Db3Vyc2U6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuY291cnNlSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Hcm91cDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5ncm91cElkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC5pZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQgVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi5pZFwiPjwvc3Bhbj48L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uIFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24udmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiLy8gVE9ETzogU2hvdWxkIGRpc2FibGUgYnV0dG9ucyBpZiB3ZSBjYW4ndCBhY3RpdmF0ZSB0aGVtLlxuXG5leHBvcnQgY29uc3QgSElTVE9SWV9UT09MQkFSX0hUTUwgPSBgXG48ZGl2IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXRvb2xiYXIgY29sLW1kLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5oaXN0b3J5TW9kZVwiPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXN0YXJ0IGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3Rvcnkuc3RhcnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPiBTdGFydFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkucHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj4gUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3IgZm9ybS1jb250cm9sIGN1c3RvbS1zZWxlY3QgbXItMlwiIGFyaWEtdGl0bGU9XCJIaXN0b3J5IFNlbGVjdG9yXCI+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS51c2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZmlsZS1pbXBvcnQnPjwvc3Bhbj4gVXNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5uZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj4gTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm1vc3RSZWNlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+IE1vc3QgUmVjZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuYDtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGRpc3BsYXlpbmcgdGhlIHVzZXIncyBjb2RpbmcgbG9ncyAodGhlaXIgaGlzdG9yeSkuXG4gKiBBIGxpZ2h0d2VpZ2h0IGNvbXBvbmVudCwgaXRzIG9ubHkgam9iIGlzIHRvIG9wZW4gYSBkaWFsb2cuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUhpc3Rvcnl9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlIaXN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWQoaGlzdG9yeSkge1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICQoXCIuYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yXCIpLmVtcHR5KCk7XG4gICAgICAgIGxldCBlZGl0SWQgPSAwO1xuICAgICAgICBoaXN0b3J5XG4gICAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICAgICFlbnRyeS5maWxlX3BhdGguc3RhcnRzV2l0aChcIl9pbnN0cnVjdG9yLlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkNvbXBpbGVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkludGVydmVudGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJYLVN1Ym1pc3Npb24uTE1TXCIpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudF90eXBlID0gUkVNQVBfRVZFTlRfVFlQRVNbZW50cnkuZXZlbnRfdHlwZV0gfHwgZW50cnkuZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkID0gcHJldHR5UHJpbnREYXRlVGltZShlbnRyeS5jbGllbnRfdGltZXN0YW1wKSArXCIgLSBcIitldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlID0gKGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiRmlsZS5FZGl0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIiwge3RleHQ6IGRpc3BsYXllZCwgZGlzYWJsZWQ6IGRpc2FibGV9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRFdmVudChlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiLCBlZGl0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRFdmVudHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yLmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGVkaXRJZC0xKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IuY2hhbmdlKChldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vdmVUb1N0YXJ0KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCgwKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGN1cnJlbnRJZC0xKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZU5leHQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWluKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSwgY3VycmVudElkKzEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9Nb3N0UmVjZW50KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCh0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uc2V0Q29kZSh0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuZmlsZS5oYW5kbGUoY29kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VkaXRFdmVudChlbnRyeSkge1xuICAgICAgICByZXR1cm4gKChlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuRWRpdFwiIHx8XG4gICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5DcmVhdGVcIikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBlbnRyeS5maWxlX3BhdGgpO1xuICAgIH1cblxufVxuXG5jb25zdCBSRU1BUF9FVkVOVF9UWVBFUyA9IHtcbiAgICBcIlNlc3Npb24uU3RhcnRcIjogXCJCZWdhbiBzZXNzaW9uXCIsXG4gICAgXCJYLUlQLkNoYW5nZVwiOiBcIkNoYW5nZWQgSVAgYWRkcmVzc1wiLFxuICAgIFwiRmlsZS5FZGl0XCI6IFwiRWRpdGVkIGNvZGVcIixcbiAgICBcIkZpbGUuQ3JlYXRlXCI6IFwiU3RhcnRlZCBhc3NpZ25tZW50XCIsXG4gICAgXCJSdW4uUHJvZ3JhbVwiOiBcIlJhbiBwcm9ncmFtXCIsXG4gICAgXCJDb21waWxlLkVycm9yXCI6IFwiU3ludGF4IGVycm9yXCIsXG4gICAgXCJYLVN1Ym1pc3Npb24uTE1TXCI6IFwiVXBkYXRlZCBncmFkZVwiXG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXG4gICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgIFwiQXVnXCIsIFwiU2VwdFwiLCBcIk9jdFwiLFxuICAgIFwiTm92XCIsIFwiRGVjXCJcbl07XG5jb25zdCB3ZWVrRGF5cyA9IFtcbiAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLFxuICAgIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsXG4gICAgXCJTYXRcIlxuXTtcblxuZnVuY3Rpb24gaXNTYW1lRGF5KGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QuZ2V0RGF0ZSgpID09PSBzZWNvbmQuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGZpcnN0LmdldE1vbnRoKCkgPT09IHNlY29uZC5nZXRNb250aCgpICYmXG4gICAgICAgIGZpcnN0LmdldEZ1bGxZZWFyKCkgPT09IHNlY29uZC5nZXRGdWxsWWVhcigpO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBhIGRhdGUvdGltZSBzdHJpbmcgYW5kIHJld3JpdGUgaXQgYXMgc29tZXRoaW5nXG4gKiBtb3JlIGh1bWFuIHJlYWRhYmxlLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpbWVTdHJpbmcgLSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgKFwiWVlZWU1NREQgSEhNTVNTXCIpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIEEgaHVtYW4tcmVhZGFibGUgdGltZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHByZXR0eVByaW50RGF0ZVRpbWUodGltZVN0cmluZykge1xuICAgIC8qbGV0IHllYXIgPSB0aW1lU3RyaW5nLnNsaWNlKDAsIDQpLFxuICAgICAgICBtb250aCA9IHBhcnNlSW50KHRpbWVTdHJpbmcuc2xpY2UoNCwgNiksIDEwKS0xLFxuICAgICAgICBkYXkgPSB0aW1lU3RyaW5nLnNsaWNlKDYsIDgpLFxuICAgICAgICBob3VyID0gdGltZVN0cmluZy5zbGljZSg5LCAxMSksXG4gICAgICAgIG1pbnV0ZXMgPSB0aW1lU3RyaW5nLnNsaWNlKDExLCAxMyksXG4gICAgICAgIHNlY29uZHMgPSB0aW1lU3RyaW5nLnNsaWNlKDEzLCAxNSk7Ki9cbiAgICAvLyBUT0RPOiBIYW5kbGUgdGltZXpvbmVzIGNvcnJlY3RseVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwYXN0ID0gbmV3IERhdGUocGFyc2VJbnQodGltZVN0cmluZywgMTApKTtcbiAgICBpZiAoaXNTYW1lRGF5KG5vdywgcGFzdCkpIHtcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5U3RyID0gd2Vla0RheXNbcGFzdC5nZXREYXkoKV07XG4gICAgICAgIGxldCBtb250aFN0ciA9IG1vbnRoTmFtZXNbcGFzdC5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlTdHIgKyBcIiwgXCIgKyBtb250aFN0ciArIFwiIFwiICsgcGFzdC5nZXREYXRlKCk7XG4gICAgICAgIGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gcGFzdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiLCBcIitwYXN0LmdldEZ1bGxZZWFyKCkgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogT3BlbnMgdGhlIGhpc3RvcnkgZGlhbG9nIGJveC4gVGhpcyByZXF1aXJlcyBhIHRyaXAgdG8gdGhlIHNlcnZlciBhbmRcbiAqIG9jY3VycyBhc3luY2hyb25vdXNseS4gVGhlIHVzZXJzJyBjb2RlIGlzIHNob3duIGluIHByZWZvcm1hdHRlZCB0ZXh0XG4gKiB0YWdzIChubyBjb2RlIGhpZ2hsaWdodGluZyBjdXJyZW50bHkpIGFsb25nIHdpdGggdGhlIHRpbWVzdGFtcC5cbiAqL1xuQmxvY2tQeUhpc3RvcnkucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlhbG9nID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nO1xuICAgIHZhciBib2R5ID0gXCI8cHJlPmEgPSAwPC9wcmU+XCI7XG4gICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmdldEhpc3RvcnkoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgYm9keSA9IGRhdGEucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoY29tcGxldGUsIGVsZW0pIHsgXG4gICAgICAgICAgICB2YXIgY29tcGxldGVfc3RyID0gcHJldHR5UHJpbnREYXRlVGltZShlbGVtLnRpbWUpO1xuICAgICAgICAgICAgdmFyIG5ld19saW5lID0gXCI8Yj5cIitjb21wbGV0ZV9zdHIrXCI8L2I+PGJyPjxwcmU+XCIrZWxlbS5jb2RlK1wiPC9wcmU+XCI7XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGUrXCJcXG5cIituZXdfbGluZTtcbiAgICAgICAgfSwgXCJcIik7XG4gICAgICAgIGRpYWxvZy5zaG93KFwiV29yayBIaXN0b3J5XCIsIGJvZHksIGZ1bmN0aW9uKCkge30pO1xuICAgIH0pO1xufTsiLCJpbXBvcnQge1RSQUNFX0hUTUx9IGZyb20gXCJ0cmFjZS5qc1wiO1xuaW1wb3J0IHtESUFMT0dfSFRNTH0gZnJvbSBcImRpYWxvZy5qc1wiO1xuaW1wb3J0IHtGRUVEQkFDS19IVE1MfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcbmltcG9ydCB7RklMRVNfSFRNTH0gZnJvbSBcImZpbGVzLmpzXCI7XG5pbXBvcnQge0ZPT1RFUl9IVE1MfSBmcm9tIFwiZm9vdGVyLmpzXCI7XG5pbXBvcnQge0VESVRPUlNfSFRNTH0gZnJvbSBcImVkaXRvcnMuanNcIjtcbmltcG9ydCB7Q09OU09MRV9IVE1MfSBmcm9tIFwiY29uc29sZS5qc1wiO1xuXG4vKipcbiAqIEBlbnVtIHtzdHJ9XG4gKi9cbmV4cG9ydCBsZXQgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zID0ge1xuICAgIEZFRURCQUNLOiBcImZlZWRiYWNrXCIsXG4gICAgVFJBQ0U6IFwidHJhY2VcIixcbiAgICBOT05FOiBcIm5vbmVcIlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpIHtcbiAgICBsZXQgaGlnaGxpZ2h0VGltZW91dCA9IG51bGw7XG4gICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWdobGlnaHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWdobGlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rpb25zIHByZSBjb2RlXCIpLm1hcCggKGksIGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfSk7XG59XG5cbi8vIFRPRE86IEdldCBzaGFyZWFibGUgbGluayBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICR7RElBTE9HX0hUTUx9XG4gICAgXG4gICAgPCEtLSBIaWRkZW4gQ2FwdHVyZSBDYW52YXMgLS0+XG4gICAgPGNhbnZhcyBpZD0nY2FwdHVyZS1jYW52YXMnIGNsYXNzPSdkLW5vbmUnIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2NhbnZhcz5cbiAgICBcbiAgICA8IS0tIFJvdyAxOiBIZWFkZXIgYW5kIFF1aWNrIE1lbnUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgIFxuICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiAtLT5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMCBibG9ja3B5LXBhbmVsIGJsb2NrcHktaGVhZGVyJ1xuICAgICAgICAgICAgICAgcm9sZT0naGVhZGluZycgYXJpYS1sYWJlbD0nQXNzaWdubWVudCBEZXNjcmlwdGlvbic+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gQXNzaWdubWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD0nMSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2tweS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CbG9ja1B5OiA8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBhc3NpZ25tZW50Lm5hbWUnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBSZXNldCBJbnN0cnVjdGlvbnMgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rpb25zLXJlc2V0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5pbnN0cnVjdGlvbnMucmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IGluc3RydWN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEluc3RydWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiB1aS5pbnN0cnVjdGlvbnMuY3VycmVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXF1aWNrLW1lbnUnXG4gICAgICAgICAgICAgcm9sZT0nbWVudWJhcicgYXJpYS1sYWJlbD0nUXVpY2sgTWVudScgdGl0bGU9XCJRdWljayBNZW51XCI+XG4gICAgICAgICAgICA8IS0tIEdldCBTaGFyZWFibGUgTGluayAtLT5cbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgICBZb3VyIHN1Ym1pc3Npb24gaXMgcmVhZHkgdG8gYmUgcmV2aWV3ZWQhPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5tZW51LmNhbk1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5tZW51LnRleHRNYXJrU3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLm1lbnUuY2xpY2tNYXJrU3VibWl0dGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8IS0tIFZpZXcgYXMgaW5zdHJ1Y3RvciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkucm9sZS5pc0dyYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogZGlzcGxheS5pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFzIGluc3RydWN0b3JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFfc3R1ZGVudF9maWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhX3N0YXJ0aW5nX2ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYV9pbnN0cnVjdG9yX2ZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1pY3Jvc2Vjb25kcyA9IG5vdy5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuaWQoKSxcbiAgICAgICAgXCJhc3NpZ25tZW50X2dyb3VwX2lkXCI6IHVzZXIuZ3JvdXBJZCgpLFxuICAgICAgICBcImNvdXJzZV9pZFwiOiB1c2VyLmNvdXJzZUlkKCksXG4gICAgICAgIFwic3VibWlzc2lvbl9pZFwiOiBzdWJtaXNzaW9uLmlkKCksXG4gICAgICAgIFwidXNlcl9pZFwiOiB1c2VyLmlkKCksXG4gICAgICAgIFwidmVyc2lvblwiOiBhc3NpZ25tZW50LnZlcnNpb24oKSxcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogbWljcm9zZWNvbmRzLFxuICAgICAgICBcInRpbWV6b25lXCI6IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5cIl0gPSBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBkYXRhW1wicmV2aWV3ZWRcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKCk7XG4gICAgICAgIGRhdGFbXCJwdWJsaWNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnB1YmxpYygpO1xuICAgICAgICBkYXRhW1widXJsXCJdID0gbW9kZWwuYXNzaWdubWVudC51cmwoKTtcbiAgICAgICAgZGF0YVtcImlwX3Jhbmdlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgZGF0YVtcInNldHRpbmdzXCJdID0gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCk7XG5cbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwic2F2ZUFzc2lnbm1lbnRcIiwgZGF0YSwgMywgKCkgPT4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVJbWFnZSA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGltYWdlKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVJbWFnZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZGlyZWN0b3J5XCJdID0gZGlyZWN0b3J5O1xuICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcInR1cnRsZV9vdXRwdXRcIiwgXCJzYXZlSW1hZ2VcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvblN0YXR1cyA9IGZ1bmN0aW9uKG5ld1N0YXR1cykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzdGF0dXNcIl0gPSBuZXdTdGF0dXM7XG4gICAgICAgIGxldCBwb3N0U3RhdHVzQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIiwgZGF0YSwgMiwgcG9zdFN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKlxuICogREVQUkVDQVRFRFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbk92ZXJyaWRlICYmIGNvcnJlY3QgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2suYWJzdHIub2JqZWN0U2V0SXRlbShuZXdEaWN0LCBTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQoa2V5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNhbGxfZiA9IGZ1bmN0aW9uKGt3YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJnc0xlbihcImNhbGxcIiwgYXJndW1lbnRzLmxlbmd0aCwgMSwgSW5maW5pdHksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgdmFyIGt3YXJncyA9IG5ldyBTay5idWlsdGlucy5kaWN0KGt3YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gYXJnc1swXTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMik7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dHMgPSBrd2FyZ3MubXAkbG9va3VwKG5ldyBTay5idWlsdGluLnN0cihcImlucHV0c1wiKSk7XG4gICAgICAgICAgICBpZiAoaW5wdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHMgPSBTay5mZmkucmVtYXBUb0pzKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYudHAkZ2V0YXR0cihuZXcgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpKTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk9iamVjdCA9IGRhdGEubXAkbG9va3VwKGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb25PYmplY3QudHAkY2FsbChhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGxfZi5jb19rd2FyZ3MgPSB0cnVlO1xuICAgICAgICAvL2NhbGxfZi5jb192YXJuYW1lcyA9IFtcInNlbGZcIiwgXCJmdW5jdGlvblwiXTtcbiAgICAgICAgY2FsbF9mLmNvX25hbWU9IG5ldyBTay5idWlsdGluLnN0cihcImNhbGxcIik7XG4gICAgICAgICRsb2NbXCJjYWxsXyRybiRcIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGNhbGxfZik7XG5cbiAgICAgICAgJGxvY1tcIl9fcmVwcl9fXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9LCBcIlN0dWRlbnREYXRhXCIpO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuXG4gICAgbW9kLnNldF9pbnN0cnVjdGlvbnMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5ld0luc3RydWN0aW9ucykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic2V0X2luc3RydWN0aW9uc1wiLCBhcmd1bWVudHMsIDEsIDIpO1xuICAgICAgICBuZXdJbnN0cnVjdGlvbnMgPSBTay5mZmkucmVtYXBUb0pzKG5ld0luc3RydWN0aW9ucyk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXS5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICB9KTtcblxuICAgIG1vZC5nZXRfbW9kZWxfaW5mbyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X21vZGVsX2luZm9cIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IG1vZGVsID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdO1xuICAgICAgICBrZXlzID0gU2suZmZpLnJlbWFwVG9KcyhrZXlzKS5zcGxpdChcIi5cIik7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vZGVsID0gbW9kZWxba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobW9kZWwoKSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCJsZXQgTE9DQUxfU1RPUkFHRV9SRUY7XG50cnkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0gbG9jYWxTdG9yYWdlO1xuICAgIGxldCBtb2QgPSBcIkJMT0NLUFlfTE9DQUxTVE9SQUdFX1RFU1RcIjtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKG1vZCwgbW9kKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKG1vZCk7XG59IGNhdGNoKGUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IHtcbiAgICAgICAgX2RhdGEgICAgICAgOiB7fSxcbiAgICAgICAgc2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCwgdmFsKSB7IHJldHVybiB0aGlzLl9kYXRhW2lkXSA9IFN0cmluZyh2YWwpOyB9LFxuICAgICAgICBnZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGlkKSA/IHRoaXMuX2RhdGFbaWRdIDogdW5kZWZpbmVkOyB9LFxuICAgICAgICByZW1vdmVJdGVtICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBkZWxldGUgdGhpcy5fZGF0YVtpZF07IH0sXG4gICAgICAgIGNsZWFyICAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kYXRhID0ge307IH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlN0ZXA6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLyA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6IC8vJHJvb3Qudmlld0V4YWN0VmFsdWUodHlwZSwgZXhhY3RfdmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvdyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBcclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tQeVRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeVRyYWNlLnBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0ge1wibmFtZVwiOiBwcm9wZXJ0eSwgXCJ0eXBlXCI6IFwiVW5rbm93blwiLCBcInZhbHVlXCI6IHZhbHVlLnRvU3RyaW5nKCl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bGxMZW5ndGgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsTGVuZ3RoIHx8IHZhbHVlLnYubGVuZ3RoIDw9IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IHZpZXdFeGFjdFZhbHVlIiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogVHVybnMgc3BhY2VzIGludG8gdW5kZXJzY29yZXMgaW4gdGhlIHN0cmluZywgbWFrZXMgaXQgbG93ZXJjYXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gW2BtaW5gLCBgbWF4YF0uXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIGludGVnZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgaW50ZWdlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHNvbWUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzYWZlbHkgd3JpdHRlbiBpbnRvIGFuIEhUTUwgYm94LlxuICogVGhpcyBpbmNsdWRlcyByZXBsYWNpbmcgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgKCYsIDwsID4sIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgdGV4dCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBIVE1MLXNhZmUgdGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLycvZywgXCImYXBvcztcIik7XG59XG5cbi8qKlxuICogU2h1ZmZsZSB0aGUgYmxvY2tzIGluIHRoZSB3b3Jrc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBCbG9ja2x5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQmxvY2tseS5Xb3Jrc3BhY2VTdmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1ldHJpY3MgPSB0aGlzLmdldE1ldHJpY3MoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gbWV0cmljcy52aWV3V2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy52aWV3SGVpZ2h0O1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5nZXRUb3BCbG9ja3MoZmFsc2UpO1xuICAgICAgICB2YXIgeSA9IDUsIHggPSAwLFxuICAgICAgICAgICAgbWF4aW1hbF9pbmNyZWFzZSA9IGhlaWdodC9ibG9ja3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBHZXQgYSBibG9ja1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBibG9jay5nZXRSZWxhdGl2ZVRvU3VyZmFjZVhZKCk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAtcHJvcGVydGllcy54K3JhbmRvbUludGVnZXIoMTAsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLm1vdmVCeSh4LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAtcHJvcGVydGllcy55K3kpO1xuICAgICAgICAgICAgeSA9IHkgKyByYW5kb21JbnRlZ2VyKDUsIG1heGltYWxfaW5jcmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIgYmFzZWQgb24gYSBjb25kaXRpb25hbCBjaGVjay5cbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxODg3OTY3L2phdmFzY3JpcHQtbW92ZS1vYmplY3RzLWZyb20tb25lLWFycmF5LXRvLWFub3RoZXItYmVzdC1hcHByb2FjaFxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoc291cmNlLCB0YXJnZXQsIG1vdmVDaGVjaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlW2ldO1xuICAgICAgICBpZiAobW92ZUNoZWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdERlZmluZWRWYWx1ZSgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2ldICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9