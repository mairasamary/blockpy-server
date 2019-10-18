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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwiZGlydHlTdWJtaXNzaW9uIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlSW1hZ2UiLCJzYXZlSW1hZ2VNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJmaWxlU3lzdGVtIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwiY2FuTWFya1N1Ym1pdHRlZCIsInRleHRNYXJrU3VibWl0dGVkIiwiaXNDb21wbGV0ZWQiLCJpc1N1Ym1pdHRlZCIsImNsaWNrTWFya1N1Ym1pdHRlZCIsImFsZXJ0IiwiZW5naW5lIiwiZGVsYXllZFJ1biIsInRvTG93ZXJDYXNlIiwic2Vjb25kUm93IiwiaXNGZWVkYmFja1Zpc2libGUiLCJpc1RyYWNlVmlzaWJsZSIsIlRSQUNFIiwiaXNDb25zb2xlU2hvd1Zpc2libGUiLCJzd2l0Y2hMYWJlbCIsImFkdmFuY2VTdGF0ZSIsImN1cnJlbnRQYW5lbCIsIk5PTkUiLCJzaXplIiwiaGlkZUV2YWx1YXRlIiwiQUNUSVZFIiwiYmFkZ2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwibmV3SW5zdHJ1Y3RvckZpbGUiLCJkZWxldGVGaWxlIiwiZXh0cmFTdHVkZW50RmlsZXMiLCJvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSIsImVkaXRvcnMiLCJnZXRFZGl0b3IiLCJ2aWV3IiwiaGlkZUVkaXRvcnMiLCJtYXAiLCJzdWJzdHIiLCJtYWtlTW9kZWxGaWxlIiwiY29udGVudHMiLCJjYW5TYXZlIiwiY2FuRGVsZXRlIiwiVU5ERUxFVEFCTEVfRklMRVMiLCJpbmRleE9mIiwiY2FuUmVuYW1lIiwiVU5SRU5BTUFCTEVfRklMRVMiLCJ1cGxvYWQiLCJ1cGxvYWRGaWxlIiwiYmluZCIsImRvd25sb2FkIiwiZG93bmxvYWRGaWxlIiwiaW1wb3J0RGF0YXNldCIsIm9wZW5EaWFsb2ciLCJweXRob24iLCJmdWxsc2NyZWVuIiwiY29kZU1pcnJvciIsInB5dGhvbkVkaXRvciIsImJtIiwidGV4dEVkaXRvciIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsInVwZGF0ZU1vZGUiLCJuZXdNb2RlIiwib2xkUHl0aG9uTW9kZSIsImlzSGlzdG9yeUF2YWlsYWJsZSIsImlzRW5kcG9pbnRDb25uZWN0ZWQiLCJ0dXJuT2ZmSGlzdG9yeU1vZGUiLCJ1cGRhdGVFZGl0b3IiLCJzZXRSZWFkT25seSIsInR1cm5Pbkhpc3RvcnlNb2RlIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiaGlzdG9yeSIsImxvYWQiLCJkaWFsb2ciLCJFUlJPUl9MT0FESU5HX0hJU1RPUlkiLCJ0b2dnbGVIaXN0b3J5TW9kZSIsIm1vdmVUb1N0YXJ0IiwibW92ZVByZXZpb3VzIiwibW92ZU5leHQiLCJtb3N0UmVjZW50IiwibW92ZVRvTW9zdFJlY2VudCIsInVzZSIsInNhdmUiLCJleGVjdXRlIiwiaXNSdW5uaW5nIiwicnVuIiwiZXZhbHVhdGUiLCJtZXNzYWdlcyIsImZvcmNlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmYWRlT3V0IiwiZmFkZUluIiwibWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyIsImFwcGx5QmluZGluZ3MiLCJtYWluIiwidGV4dCIsIkVhc3lNREUiLCJwcm90b3R5cGUiLCJCbG9ja1B5RGlhbG9nIiwiZmluZCIsIkJsb2NrUHlGZWVkYmFjayIsIkJsb2NrUHlUcmFjZSIsIkJsb2NrUHlDb25zb2xlIiwiQmxvY2tQeUVuZ2luZSIsIkJsb2NrUHlGaWxlU3lzdGVtIiwiRWRpdG9ycyIsImJ5TmFtZSIsIkJsb2NrUHlTZXJ2ZXIiLCJCbG9ja1B5Q29yZ2lzIiwiQmxvY2tQeUhpc3RvcnkiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ2YWwiLCJwcm9wIiwiY2xpY2siLCJrZXl1cCIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJDb25zb2xlTGluZUV2YWx1YXRlIiwiQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIiwidGFnIiwicHJpbnRlclRhZyIsIk1JTklNVU1fV0lEVEgiLCJNSU5JTVVNX0hFSUdIVCIsIkRFRkFVTFRfSEVJR0hUIiwiaGVpZ2h0IiwiY2xlYXIiLCJyZW1vdmVBbGwiLCJsaW5lQnVmZmVyIiwicGxvdEJ1ZmZlciIsImVtcHR5IiwidHVydGxlTGluZSIsIlR1cnRsZUdyYXBoaWNzIiwiZ2V0VHVydGxlTGluZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJhc3NldHMiLCJsb2FkQXNzZXQiLCJyZW5kZXIiLCJjdXJyZW50UHJpbnRlckRpbWVuc2lvbiIsInNhdmVUdXJ0bGVPdXRwdXQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJkYXRhVXJsIiwidG9EYXRhVVJMIiwicGFnZSIsImVhY2giLCJhdHRyIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsImZsdXNoIiwiY2hhckF0Iiwic3BsaXRMaW5lcyIsInNwbGl0IiwiYWRkQ29udGVudCIsImkiLCJwdXNoIiwicGxvdHMiLCJpbWFnZURhdGEiLCJpbWFnZUJ1ZmZlciIsImltYWdlIiwidmFsdWUiLCJwcmludGVkVmFsdWUiLCJpbnB1dEJ1ZmZlciIsInN0YXJ0RXZhbHVhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsInRleHRUb0Jsb2NrcyIsImhpZGRlbkltcG9ydHMiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzbHVnZ2VkTmFtZSIsInRpdGxlTmFtZSIsImltZ1NyYyIsInRpdGxlIiwib3ZlcnZpZXciLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwiZm9vdGVyVGFnIiwib2theUJ1dHRvbiIsInllcyIsIm1vZGFsIiwib25jbG9zZSIsImRyYWdnYWJsZSIsIm9uIiwiY29uZmlybSIsIm5vIiwieWVzVGV4dCIsIkFTU0lHTk1FTlRfVkVSU0lPTl9DSEFOR0VEIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzdGFydF92aWV3IiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsImRpcnR5IiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwibmV3Q29udGVudHMiLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJtYWtlVGFiIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiSElTVE9SWV9UT09MQkFSX0hUTUwiLCJjb252ZXJ0SXB5bmJUb1B5dGhvbiIsImlweW5iIiwiaXNVc2FibGUiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwic3RhcnRzV2l0aCIsIm1ha2VQeXRob24iLCJjZWxscyIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwibWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwib25seVVwbG9hZHMiLCJjaGFuZ2VkIiwiaXNSZWFkT25seSIsImVuZHNXaXRoIiwiUHl0aG9uRWRpdG9yIiwiVEFHU19FRElUT1JfSFRNTCIsIlRhZ3NFZGl0b3JWaWV3IiwiVGFnc0VkaXRvciIsIlRFWFRfRURJVE9SX0hUTUwiLCJUZXh0RWRpdG9yVmlldyIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJzaG93Q3Vyc29yV2hlblNlbGVjdGluZyIsImxpbmVOdW1iZXJzIiwiZmlyc3RMaW5lTnVtYmVyIiwiaW5kZW50VW5pdCIsImV4dHJhS2V5cyIsImNtIiwiYmx1ciIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsInJlZ2lzdGVyRWRpdG9yIiwiaW5zdGFuY2UiLCJleGl0IiwiZW50ZXIiLCJzcGFjZSIsImxhc3RJbmRleE9mIiwiZXhlY3V0aW9uTW9kZWwiLCJjb25maWd1cmF0aW9ucyIsIlJ1bkNvbmZpZ3VyYXRpb24iLCJldmFsIiwiRXZhbENvbmZpZ3VyYXRpb24iLCJPblJ1bkNvbmZpZ3VyYXRpb24iLCJPbkNoYW5nZUNvbmZpZ3VyYXRpb24iLCJPbkV2YWxDb25maWd1cmF0aW9uIiwiY29uZmlndXJlIiwiZ2V0U2t1bHB0T3B0aW9ucyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJ0aGVuIiwiZmFpbHVyZSIsImRpc2FibGVGZWVkYmFjayIsInNob3dFcnJvcnMiLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsImluQnJvd3NlciIsIm9wZW5GaWxlIiwiX19mdXR1cmVfXyIsInB5dGhvbjMiLCJyZWFkIiwiaW1wb3J0RmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwid2FybiIsIkVycm9yIiwicG9wIiwiYWZ0ZXJTaW5nbGVFeGVjdXRpb24iLCJwcmludFZhbHVlIiwicmVtYXBUb0pzIiwiXyIsIiRyIiwicmVqZWN0IiwieCIsIkZBSUxFRCIsIlN0dWRlbnRDb25maWd1cmF0aW9uIiwiVVRJTElUWV9NT0RVTEVfQ09ERSIsIiRza19tb2RfaW5zdHJ1Y3RvciIsIkluc3RydWN0b3JDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0IiwiaW5zdHJ1Y3RvckZpbGVzIiwiYnVpbHRpbiIsIk9TRXJyb3IiLCJpbm5lck5hbWUiLCJJbXBvcnRFcnJvciIsImNsZWFyVGltZW91dCIsIldSQVBfSU5TVFJVQ1RPUl9DT0RFIiwic3R1ZGVudENvZGUiLCJpbnN0cnVjdG9yQ29kZSIsInF1aWNrIiwiaXNTYWZlIiwic2FmZUNvZGUiLCJpbmRlbnRlZENvZGUiLCJpbmRlbnQiLCJkaXNhYmxlVGlmYSIsInN0dWRlbnRDb2RlU2FmZSIsImV2YWx1YXRpb24iLCJkdW1teU91dFNhbmRib3giLCJsaW5lT2Zmc2V0IiwiTkVXX0xJTkVfUkVHRVgiLCJTVUNDRVNTIiwiU0NPUkUiLCJvbGRTY29yZSIsIkhJREUiLCJzY3JvbGxpbmciLCJzY3JvbGxUb0JvdHRvbSIsInRwJG5hbWUiLCJwcmVzZW50SW50ZXJuYWxFcnJvciIsInRpZmFBbmFseXNpcyIsIk9uU2FtcGxlQ29uZmlndXJhdGlvbiIsIkJvb2xlYW4iLCJmaW5pc2hUdXJ0bGVzIiwiYmVnaW5FdmFsIiwicGFyc2VyIiwidmVyaWZpZXIiLCJTYW1wbGVDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0RnVuY3Rpb24iLCJkaXNhYmxlVGltZW91dCIsIkluZmluaXR5IiwicmVxdWVzdHNHZXQiLCJvcGVuVVJMIiwiaXNGb3JiaWRkZW4iLCJ2YXJpYWJsZXMiLCJsb2NhbHMiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicGFyc2VHbG9iYWxzIiwicHJvcGVydGllcyIsIm1vZHVsZXMiLCJhc3QiLCJ2aXNpdGVkTGluZXMiLCJTZXQiLCJ2aXNpdEJvZHkiLCJub2RlIiwibGluZW5vIiwic3RhdGVtZW50Iiwib3JlbHNlIiwiZmluYWxib2R5IiwiQXJyYXkiLCJmcm9tIiwiYXN0RnJvbVBhcnNlIiwiY3N0IiwiZmxhZ3MiLCJnZXRMaW5lcyIsInByZXNlbnRSdW5FcnJvciIsIkZFRURCQUNLX0hUTUwiLCJmZWVkYmFja01vZGVsIiwib2Zmc2V0IiwidG9wIiwidmlzaWJpbGl0eUJ1ZmZlciIsInRvcE9mRWxlbWVudCIsImJvdHRvbU9mRWxlbWVudCIsImJvdHRvbU9mU2NyZWVuIiwidG9wT2ZTY3JlZW4iLCJleGVjdXRpb25SZXN1bHRzIiwiTUVTU0FHRSIsIkNBVEVHT1JZIiwiTEFCRUwiLCJEQVRBIiwiaGlkZVNjb3JlIiwiZmluZEZpcnN0RXJyb3JMaW5lIiwic3R1ZGVudFJlcG9ydCIsInVuY292ZXJlZExpbmVzIiwidXBkYXRlRmVlZGJhY2siLCJub3RpZnlGZWVkYmFja1VwZGF0ZSIsIm1zZyIsImFyZ3MiLCJ2IiwiY29udmVydFNrdWxwdEVycm9yIiwiZmlsZW5hbWVFeGVjdXRlZCIsInRyYWNlYmFjayIsImZyYW1lIiwic2NvcGUiLCJmZWVkYmFja0RhdGEiLCJwb3NpdGlvbiIsImZyaWVuZGx5TmFtZSIsImhpZGVJZkVtcHR5IiwiRklMRVNfSFRNTCIsIk5FV19JTlNUUlVDVE9SX0ZJTEVfRElBTE9HX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiY29uY2F0ZW5hdGVkRmlsZSIsIm1vZGVsRmlsZUxpc3QiLCJtb2RlbEZpbGVzIiwiaGFzT3duUHJvcGVydHkiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsImZvdW5kIiwiZmlsZXR5cGUiLCJleHRlbnNpb25SZWdleCIsImV4ZWMiLCJpcyIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJkaXJlY3RvcnkiLCJuZXdTdGF0dXMiLCJwb3N0U3RhdHVzQ2hhbmdlIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsIm1vZCIsIm5vbmUiLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImNhbGxfZiIsImt3YSIsInB5Q2hlY2tBcmdzTGVuIiwiY2FsbCIsImt3YXJncyIsImJ1aWx0aW5zIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXRzIiwibXAkbG9va3VwIiwidHAkZ2V0YXR0ciIsImZ1bmN0aW9uT2JqZWN0IiwidHAkY2FsbCIsImNvX2t3YXJncyIsImNvX25hbWUiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwic2V0X2luc3RydWN0aW9ucyIsIm5ld0luc3RydWN0aW9ucyIsImdldF9tb2RlbF9pbmZvIiwiTE9DQUxfU1RPUkFHRV9SRUYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIl9kYXRhIiwiU3RyaW5nIiwiZ2V0SXRlbSIsIm5hbWVzcGFjZSIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJJR05PUkVEX0dMT0JBTFMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCJzcSRsZW5ndGgiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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O0FBQ0gsR0FGTSxNQUVBLElBQUcsT0FBT0EsR0FBUCxLQUFlLFVBQWxCLEVBQThCO0FBQ2pDLFdBQU8sSUFBSS92QixFQUFFLENBQUNxWixPQUFILENBQVdpUixHQUFmLENBQW1CeUYsR0FBRyxDQUFDdmlDLElBQXZCLENBQVA7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDN09ELG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6ImJsb2NrcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJsb2NrcHlcIiwgW1wialF1ZXJ5XCIsIFwia29cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxvY2tweVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wia29cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Jsb2NrcHkuanNcIik7XG4iLCJpbXBvcnQgXCIuL2Nzcy9ibG9ja3B5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCJzdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc0VudW19IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiZWRpdG9yL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwic2VydmVyLmpzXCI7XHJcbmltcG9ydCB7bWFrZUludGVyZmFjZSwgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucywgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfSBmcm9tIFwiaW50ZXJmYWNlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc30gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIEJsb2NrUHlGaWxlU3lzdGVtLFxyXG4gICAgbG9hZENvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBtYWtlTW9kZWxGaWxlLFxyXG4gICAgb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBVTkRFTEVUQUJMRV9GSUxFUyxcclxuICAgIFVOUkVOQU1BQkxFX0ZJTEVTXHJcbn0gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi90cmFjZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb25zb2xlfSBmcm9tIFwiLi9jb25zb2xlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZlZWRiYWNrfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5U2VydmVyfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5RGlhbG9nfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWx9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvcmdpcywgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9IGZyb20gXCIuL2Nvcmdpc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlIaXN0b3J5fSBmcm9tIFwiLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQge19JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfTtcclxuXHJcbi8qKlxyXG4gKiBNYWpvciBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgYSBCbG9ja1B5IGluc3RhbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIC0gVXNlciBsZXZlbCBzZXR0aW5ncyAoZS5nLiwgd2hhdCBlZGl0b3IgbW9kZSwgd2hldGhlciB0byBtdXRlIHNlbWFudGljIGVycm9ycywgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NpZ25tZW50IC0gQXNzaWdubWVudCBsZXZlbCBzZXR0aW5ncyAoZGF0YSBhYm91dCB0aGUgbG9hZGVkIGFzc2lnbm1lbnQsIHVzZXIsIHN1Ym1pc3Npb24sIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VibWlzc2lvbiAtIEluY2x1ZGVzIHRoZSBzb3VyY2UgY29kZSBvZiBhbnkgcHJvZ3JhbXMgdG8gYmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbChjb25maWd1cmF0aW9uKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzaWdubWVudChjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIEJsb2NrUHkgb2JqZWN0IGJ5IGluaXRpYWxpemluZyBpdHMgaW50ZXJmYWNlLFxyXG4gICAgICogbW9kZWwsIGFuZCBjb21wb25lbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VXRpbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWxNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy50dXJuT25IYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgZGVmYXVsdCB2YWx1ZSBvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB1cCBhIHZhbHVlIGZvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSAtIGlmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGFueXdoZXJlLCB1c2UgdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBnZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9ba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxTZXR0aW5nc18uaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTZXR0aW5nc18uZ2V0KGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbW9kZWwgdG8gaXRzIGRlZmF1bHRzLlxyXG4gICAgICpcclxuICAgICAqIENhdGVnb3JpZXM6XHJcbiAgICAgKiAgICogdXNlcjogdmFsdWVzIGZvciB0aGUgY3VycmVudCB1c2VyIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGFzc2lnbm1lbnQ6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgYXNzaWdubWVudCAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBzdWJtaXNzaW9uOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24gKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogZGlzcGxheTogZmxhZ3MgcmVsYXRlZCB0byBjdXJyZW50IHZpc2liaWxpdHkgKHN0b3JlZCB0byBsb2NhbFNldHRpbmdzKVxyXG4gICAgICogICAqIHN0YXR1czogbWVzc2FnZXMgcmVsYXRlZCB0byBjdXJyZW50IHN0YXR1cyAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBleGVjdXRpb246IHZhbHVlcyByZWxhdGVkIHRvIGxhc3QgcnVuIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGNvbmZpZ3VyYXRpb246IGNvbnN0YW50IHZhbHVlcyByZWxhdGVkIHRvIHNldHVwIChub3Qgc3RvcmVkKVxyXG4gICAgICovXHJcbiAgICBpbml0TW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMubG9jYWxTZXR0aW5nc18gPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcImxvY2FsU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5pZFwiXSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLm5hbWVcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHlvdSBhcmUgYW4gT3duZXIgKGNhbiBtb2RpZnkgdGhlIGFzc2lnbm1lbnQpLCBHcmFkZXIgKGNhbiB2aWV3XHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgYXNzaWdubWVudHMnIGluZm9ybWF0aW9uKSBvciBTdHVkZW50IChjYW4gbm90IHNlZSBhbnkgaW5zdHJ1Y3RvciBzdHVmZikuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcm9sZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJ1c2VyLnJvbGVcIiwgXCJvd25lclwiKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2FybmluZyBtZXNzYWdlIGlmIG1hemVcclxuICAgICAgICAgICAgICAgIHR5cGU6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uUnVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX3J1blwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2NoYW5nZVwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIG9uRXZhbDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ldmFsXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3ZWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucmV2aWV3ZWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgcHVibGljOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnB1YmxpY1wiXSksXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaGlkZGVuXCJdKSxcclxuICAgICAgICAgICAgICAgIGlwUmFuZ2VzOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmlwX3Jhbmdlc1wiXSksXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pc3Npb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRJZCBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQuaWRcclxuICAgICAgICAgICAgICAgIC8vIGNvdXJzZUlkIGluZmVycmVkIGZyb20gdXNlci5jb3Vyc2VJZFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkIGluZmVycmVkIGZyb20gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudFZlcnNpb24gaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LnZlcnNpb25cclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKSxcclxuICAgICAgICAgICAgICAgIGdyYWRpbmdTdGF0dXM6IGtvLm9ic2VydmFibGUoXCJOb3RSZWFkeVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50bHkgdmlzaWJsZSBGaWxlLCBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgcHJlc2VudGVkIHdpdGggdGhlIGluc3RydWN0b3Igc2V0dGluZ3MgYW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5Lmluc3RydWN0b3JcIiwgXCJmYWxzZVwiKS50b1N0cmluZygpPT09XCJ0cnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHRoZSBwcmludGVyIGZyb20gc2hvd2luZyB0aGluZ3NcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbXV0ZVByaW50ZXI6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiAoUHl0aG9uIFZpZXdzKSBUaGUgY3VycmVudCBlZGl0b3IgbW9kZS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtEaXNwbGF5TW9kZXN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHB5dGhvbk1vZGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5weXRob24ubW9kZVwiLCBEaXNwbGF5TW9kZXMuU1BMSVQpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgSGlzdG9yeSBtb2RlIGlzIGVuZ2FnZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeU1vZGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaGVpZ2h0IHRvIHVzZSBmb3IgdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBudWxsLCB0aGVuIGxldCB0aGUgaGVpZ2h0IHJlbWFpbiB1bmNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAqICAgIElmIGEgbnVtYmVyLCB0aGVuIHRoZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hpY2ggcGFuZWwgdG8gc2hvdyBpbiB0aGUgc2Vjb25kIHJvdydzIHNlY29uZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlY29uZFJvd1NlY29uZFBhbmVsOiBrby5vYnNlcnZhYmxlKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHRyYWNpbmcgdGhlIGNvZGUgcmlnaHQgbm93XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyYWNlRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGxpc3Qgb2YgcHJvbWlzZXMgdG8gc3RpbGwgcmVzb2x2ZSB3aGlsZSBsb2FkaW5nIGRhdGFzZXRzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8UHJvbWlzZT59XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEYXRhc2V0czoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIHRlbXBvcmFyeSBjaGFuZ2VkIHZhbHVlIG9mIHRoZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgZnJvbSB3aGF0IGlzIGluIHRoZSBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZWRJbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEEgaG9sZGVyIGZvciB0aGUgdGltZXIgdG8gdHJpZ2dlciBvbi1jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbkNoYW5nZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB0aGUgY3VycmVudCBmZWVkYmFjayBhbmQgb3V0cHV0IGNvcnJlc3BvbmRzIHRvIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIHdvdWxkIGJlIGZhbHNlIGlmIHRoZXJlIGlzIG5vIGZlZWRiYWNrL291dHB1dCAoaS5lLiwgY29kZSBoYXMgbm90IGJlZW4gcnVuKSxcclxuICAgICAgICAgICAgICAgICAqIG9yIGlmIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgc3VibWlzc2lvbiBhZnRlciB0aGUgbGFzdCBydW4gKGUuZy4sIGJ5IGVkaXRpbmdcclxuICAgICAgICAgICAgICAgICAqIHRoZSB0ZXh0KS5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZGlydHlTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3Rvcnk6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3RvcnlNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVJbWFnZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2VNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiBhYm91dCBpbi1wcm9ncmVzcyBleGVjdXRpb25zXHJcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgT3V0cHV0IG9iamVjdHNcclxuICAgICAgICAgICAgICAgIG91dHB1dDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYSBzdHVkZW50IHJ1blxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0cjogdGhlIGZpbGVuYW1lIHRoYXQgd2FzIGxhc3QgZXhlY3V0ZWQgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdExpbmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgb2Ygc2ltcGxlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VEYXRhOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VTdGVwOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFjdHVhbCBleGVjdXRpb24gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczoga28ub2JzZXJ2YWJsZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gZmVlZGJhY2sgZnJvbSB0aGUgaW5zdHJ1Y3RvciBydW5cclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyIChtYXJrZG93bilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiUmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc0Vycm9yOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzVW5jb3ZlcmVkOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IGV4ZWN1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEZ1bmN0aW9ucyB0byBmaXJlIHdoZW4gY2VydGFpbiBldmVudHMgb2NjdXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hlbiB0aGUgc3R1ZGVudCBnZXRzIGEgc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImNhbGxiYWNrLnN1Y2Nlc3NcIl0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VydmVyIGlzIGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25uZWN0ZWQ6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwic2VydmVyLmNvbm5lY3RlZFwiLCB0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGJsb2NrbHlQYXRoOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImJsb2NrbHkucGF0aFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudFBvaW50OiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImF0dGFjaG1lbnQucG9pbnRcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBKUXVlcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBNYXBzIGNvZGVzICgnbG9nX2V2ZW50JywgJ3NhdmVfY29kZScpIHRvIFVSTHNcclxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1widXJsc1wiXSB8fCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgaW5pdEludGVyZmFjZSgpIHtcclxuICAgICAgICBsZXQgY29uc3RhbnRzID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgIGxldCBndWkgPSBtYWtlSW50ZXJmYWNlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0YW50cy5jb250YWluZXIgPSAkKGNvbnN0YW50cy5hdHRhY2htZW50UG9pbnQpLmh0bWwoJChndWkpKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRhZ3ModGFncykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHRhZ3NcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2FtcGxlU3VibWlzc2lvbnMoc2FtcGxlcykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHNhbXBsZXNcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3VibWlzc2lvbihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKCFzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyZmFjZSgpO1xyXG4gICAgICAgIGxldCB3YXNTZXJ2ZXJDb25uZWN0ZWQgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnQgPSBkYXRhLmFzc2lnbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlkKGFzc2lnbm1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC52ZXJzaW9uKGFzc2lnbm1lbnQudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmNvdXJzZUlkKGFzc2lnbm1lbnQuY291cnNlX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkSWQoYXNzaWdubWVudC5mb3JrZWRfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRWZXJzaW9uKGFzc2lnbm1lbnQuZm9ya2VkX3ZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oYXNzaWdubWVudC5oaWRkZW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZChhc3NpZ25tZW50LnJldmlld2VkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucHVibGljKGFzc2lnbm1lbnQucHVibGljKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudHlwZShhc3NpZ25tZW50LnR5cGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC51cmwoYXNzaWdubWVudC51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcyhhc3NpZ25tZW50LmlwX3Jhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fY2hhbmdlLnB5XCIsIGFzc2lnbm1lbnQub25fY2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIiwgYXNzaWdubWVudC5vbl9ldmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmNvcmdpcy5sb2FkRGF0YXNldHModHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lbnU6IHtcclxuICAgICAgICAgICAgICAgIGNhbk1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdGV4dE1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJBc3NpZ25tZW50IGNsb3NlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJlb3BlbiBmb3IgZWRpdGluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJSdW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTdWJtaXQgZWFybHlcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNsaWNrTWFya1N1Ym1pdHRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC51aS5tZW51LmlzQ29tcGxldGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgY2Fubm90IHJlb3BlbiBjbG9zZWQgYXNzaWdubWVudHMuIENvbnRhY3QgYSBncmFkZXIhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwudWkubWVudS5pc1N1Ym1pdHRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcImluUHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcIlN1Ym1pdHRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0dGVkXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbXBsZXRlZDoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoKS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3SW5zdHJ1Y3RvckZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRvcnM6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lZGl0b3JzLmdldEVkaXRvcihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdmlldzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRWRpdG9ycygpID8gXCJOb25lXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA/IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpIDogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5SZXNldFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmNvZGUobW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKCkubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWUoKS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vZGVsRmlsZShmaWxlbmFtZSwgZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhblNhdmU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICFtb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkpLFxyXG4gICAgICAgICAgICAgICAgY2FuRGVsZXRlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5ERUxFVEFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICBjYW5SZW5hbWU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTlJFTkFNQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIHVwbG9hZDogdXBsb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IGRvd25sb2FkRmlsZS5iaW5kKHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RGF0YXNldDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5jb3JnaXMub3BlbkRpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHB5dGhvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGVNaXJyb3IgPSBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnRleHRFZGl0b3IuY29kZU1pcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvZGVNaXJyb3Iuc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY29kZU1pcnJvci5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGU6IChuZXdNb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLVZpZXcuQ2hhbmdlXCIsIFwiXCIsIFwiXCIsIG5ld01vZGUsIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShuZXdNb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5vbGRQeXRob25Nb2RlID0gbmV3TW9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNIaXN0b3J5QXZhaWxhYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci51cGRhdGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5zZXRSZWFkT25seShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9uSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2FkSGlzdG9yeSgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5sb2FkKHJlc3BvbnNlLmhpc3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5zZXRSZWFkT25seSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0hJU1RPUlkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5Pbkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb1N0YXJ0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlUHJldmlvdXMoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZU5leHQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdFJlY2VudDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvTW9zdFJlY2VudCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2U6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LnVzZSgpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZTogKCkgPT4gc2VsZi5jb21wb25lbnRzLnNlcnZlci5zYXZlQXNzaWdubWVudCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGU6IHtcclxuICAgICAgICAgICAgICAgIGlzUnVubmluZzoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKCkgPT09IFN0YXR1c1N0YXRlLkFDVElWRVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJ1bjogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmRlbGF5ZWRSdW4oKSxcclxuICAgICAgICAgICAgICAgIGV2YWx1YXRlOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZXZhbHVhdGUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogKGVuZHBvaW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJ2ZXItc3RhdHVzLVwiICsgbW9kZWwuc3RhdHVzW2VuZHBvaW50XSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNFbmRwb2ludENvbm5lY3RlZDogKGVuZHBvaW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJsc1tlbmRwb2ludF0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUFzc2lnbm1lbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEhpc3RvcnlNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZEZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUZpbGVNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9hZERhdGFzZXRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMubG9nRXZlbnRNZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMuc2F2ZUltYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSgpIHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBmb3JjZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IChkYXRhLCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzZWxmLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5mYWRlT3V0KDEwMCkuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uSGFja3MoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRPRE9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseXMgdGhlIEtub2Nrb3V0SlMgYmluZGluZ3MgdG8gdGhlIG1vZGVsLCBpbnN0YW50aWF0aW5nIHRoZSB2YWx1ZXMgaW50byB0aGVcclxuICAgICAqIEhUTUwuXHJcbiAgICAgKi9cclxuICAgIGFwcGx5TW9kZWwoKSB7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VXRpbGl0aWVzKCkge1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICB0aGlzLnV0aWxpdGllcyA9IHtcclxuICAgICAgICAgICAgbWFya2Rvd246ICh0ZXh0KSA9PiB0ZXh0ID8gRWFzeU1ERS5wcm90b3R5cGUubWFya2Rvd24odGV4dCkgOiBcIjxwPjwvcD5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXI7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMgPSB7fTtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgLy8gRWFjaCBvZiB0aGVzZSBjb21wb25lbnRzIHdpbGwgdGFrZSB0aGUgQmxvY2tQeSBpbnN0YW5jZSwgYW5kIHBvc3NpYmx5IGFcclxuICAgICAgICAvLyByZWZlcmVuY2UgdG8gdGhlIHJlbGV2YW50IEhUTUwgbG9jYXRpb24gd2hlcmUgaXQgd2lsbCBiZSBlbWJlZGRlZC5cclxuICAgICAgICBjb21wb25lbnRzLmRpYWxvZyA9IG5ldyBCbG9ja1B5RGlhbG9nKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZGlhbG9nXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmZlZWRiYWNrID0gbmV3IEJsb2NrUHlGZWVkYmFjayhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnRyYWNlID0gbmV3IEJsb2NrUHlUcmFjZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvbnNvbGUgPSBuZXcgQmxvY2tQeUNvbnNvbGUobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1jb25zb2xlXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLmVuZ2luZSA9IG5ldyBCbG9ja1B5RW5naW5lKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmlsZVN5c3RlbSA9IG5ldyBCbG9ja1B5RmlsZVN5c3RlbShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmVkaXRvcnMgPSBuZXcgRWRpdG9ycyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWVkaXRvclwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5weXRob25FZGl0b3IgPSB0aGlzLmNvbXBvbmVudHMuZWRpdG9ycy5ieU5hbWUoXCJweXRob25cIik7XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXJ2ZXIgPSBuZXcgQmxvY2tQeVNlcnZlcihtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmNvcmdpcyA9IG5ldyBCbG9ja1B5Q29yZ2lzKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuaGlzdG9yeSA9IG5ldyBCbG9ja1B5SGlzdG9yeShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWhpc3RvcnktdG9vbGJhclwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW50ZXJmYWNlKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5lbmdpbmUucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7ZW5jb2RlSFRNTH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmNvbnN0IFNUQVJUX0VWQUxfSFRNTCA9IGBcbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZSBmbG9hdC1yaWdodCBibG9ja3B5LWJ0bi1ldmFsXCI+XG4gICAgRXZhbHVhdGVcbjwvYnV0dG9uPmA7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nY29sLW1kLTYgYmxvY2tweS1wYW5lbCBibG9ja3B5LWNvbnNvbGUnXG4gICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJDb25zb2xlXCJcbiAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGFzczogdWkuY29uc29sZS5zaXplXCI+XG4gICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1zaG93LWZlZWRiYWNrJ1xuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuc2Vjb25kUm93LmlzQ29uc29sZVNob3dWaXNpYmxlLCBjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgIDxzdHJvbmc+Q29uc29sZTo8L3N0cm9uZz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktcHJpbnRlciBibG9ja3B5LXByaW50ZXItZGVmYXVsdCc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgPC9kaXY+YDtcblxuY29uc3QgTkVXX0NPTlNPTEVfTElORV9IVE1MID0gXCI8ZGl2PjwvZGl2PlwiO1xuXG4vKipcbiAqXG4gKiBAZW51bVxuICovXG5leHBvcnQgbGV0IENvbnNvbGVMaW5lVHlwZSA9IHtcbiAgICBURVhUOiBcInRleHRcIixcbiAgICBIVE1MOiBcImh0bWxcIixcbiAgICBQTE9UOiBcInBsb3RcIixcbiAgICBJTUFHRTogXCJpbWFnZVwiLFxuICAgIFRVUlRMRTogXCJ0dXJ0bGVcIixcbiAgICBFVkFMOiBcImV2YWxcIixcbiAgICBTVEFSVF9FVkFMOiBcInN0YXJ0X2V2YWxcIixcbiAgICBWQUxVRTogXCJ2YWx1ZVwiLFxuICAgIElOUFVUOiBcImlucHV0XCIsXG4gICAgVEVTVF9DQVNFOiBcInRlc3RfY2FzZVwiXG59O1xuXG5jbGFzcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdHlwZSwgY29udGVudCkge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHtcbiAgICAgICAgICAgIGZpbGVuYW1lOiBTay5jdXJyRmlsZW5hbWUsXG4gICAgICAgICAgICBzdGVwOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwLFxuICAgICAgICAgICAgbGluZTogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0bWwgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiAgXCJibG9ja3B5LXByaW50ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgIFwiZGF0YS1zdGVwXCI6IHRoaXMub3JpZ2luLnN0ZXAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RlcCBcIiArIHRoaXMub3JpZ2luLnN0ZXAgKyBcIiwgTGluZSBcIiArIHRoaXMub3JpZ2luLmxpbmVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICFtYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxuXG4gICAgdG9Ta3VscHQoKSB7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KHRoaXMuY29udGVudCk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLmh0bWwucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVR1cnRsZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICAvLyBUT0RPOiBDYXB0dXJlIHR1cnRsZSBjb21tYW5kcyBmb3IgdHJhY2luZyBwdXJwb3Nlc1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlRVUlRMRSk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS10dXJ0bGUtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5wcmVwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWxbMF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbWFnZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTUFHRSwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1pbWFnZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVQbG90IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlBMT1QsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtcGxvdC1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVRleHQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBhZGRDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50ICsgY29udGVudDtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVWYWx1ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlZBTFVFLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGxpbmVEYXRhID0gJChcIjxjb2RlPjwvY29kZT5cIiwgeyBcImh0bWxcIjogZW5jb2RlZFRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGxpbmVEYXRhKTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVJbnB1dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5JTlBVVCwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBJbnB1dCBib3ggZm9yIHJlY2VpdmluZyBpbnB1dCgpIGZyb20gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgLy8gUGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFuaW5nXG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIElucHV0IGZvcm1cbiAgICAgICAgICAgIGxldCBpbnB1dEZvcm0gPSAkKFwiPGlucHV0IHR5cGU9J3RleHQnIC8+XCIpO1xuICAgICAgICAgICAgLy8gRW50ZXIgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRCdG4gPSAkKFwiPGJ1dHRvbj48L2J1dHRvbj5cIiwge1wiaHRtbFwiOiBcIkVudGVyXCJ9KTtcbiAgICAgICAgICAgIC8vIEdyb3VwIGZvcm0gYW5kIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0R3JvdXAgPSAkKFwiPGRpdj48L2Rpdj5cIiwge1wiY2xhc3NcIjogXCJibG9ja3B5LWNvbnNvbGUtaW5wdXRcIn0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRGb3JtKTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0QnRuKTtcbiAgICAgICAgICAgIC8vIFByb21wdCBib3gsIG5ldyBsaW5lLCBpbnB1dCBncm91cFxuICAgICAgICAgICAgbGV0IGlucHV0Qm94ID0gJChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRNc2cgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCAge1wiaHRtbFwiOiBlbmNvZGVkVGV4dH0pO1xuICAgICAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZChpbnB1dE1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoJChcIjxicj5cIikpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChpbnB1dEdyb3VwKTtcbiAgICAgICAgICAgIC8vIFJlbmRlclxuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChpbnB1dEJveCk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vIE1ha2UgaXQgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VJbnRlcmFjdGl2ZShpbnB1dEZvcm0sIGlucHV0QnRuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuXG4gICAgbWFrZUludGVyYWN0aXZlKGlucHV0LCBidXR0b24pIHtcbiAgICAgICAgbGV0IHJlc29sdmVPbkNsaWNrO1xuICAgICAgICBsZXQgc3VibWl0dGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc3VibWl0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICBmaW5pc2hUdXJ0bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Muc2F2ZVR1cnRsZU91dHB1dCgpKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhpcy50dXJ0bGVMaW5lLmh0bWwuZmluZChcImNhbnZhc1wiKS5sYXN0KClbMF07XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlSW1hZ2UoXCJ0dXJ0bGVfb3V0cHV0XCIsIGRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dFRvQmxvY2tzLmhpZGRlbkltcG9ydHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NzEzNzM5MzI0OTJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU3MTM3MzkzMjQ2OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSdtYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDo0MDBweCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlIG1vZGVsLWNsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tc3VjY2VzcyBtb2RhbC1va2F5JyBkYXRhLWRpc21pc3M9J21vZGFsJz5Pa2F5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdGhpcy5mb290ZXJUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uID0gdGFnLmZpbmQoXCIubW9kYWwtb2theVwiKTtcblxuICAgIHRoaXMueWVzID0gKCkgPT4ge307XG4gICAgdGhpcy5va2F5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy55ZXMoKTtcbiAgICAgICAgdGhpcy50YWcubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uLmhpZGUoKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgeWVzLCBubywgeWVzVGV4dCkge1xuICAgIGlmICh5ZXNUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWVzVGV4dCA9IFwiT2theVwiO1xuICAgIH1cbiAgICB0aGlzLnNob3codGl0bGUsIGJvZHksIG5vKTtcbiAgICB0aGlzLnllcyA9IHllcztcbiAgICB0aGlzLm9rYXlCdXR0b24uc2hvdygpLmh0bWwoeWVzVGV4dCk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgXCJZb3VyIGluc3RydWN0b3IgaGFzIG1hZGUgY2hhbmdlcyB0byB0aGlzIGFzc2lnbm1lbnQuIFdvdWxkIHlvdSBsaWtlIHRvIHJlbG9hZD8gQWxsIHlvdXIgd29yayBoYXMgYmVlbiBzYXZlZC5cIiwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuU0NSRUVOU0hPVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ET1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgVXBkYXRpbmcgU3VibWlzc2lvbiBTdGF0dXNcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgeW91ciBzdWJtaXNzaW9uIHN0YXR1cy48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0hJU1RPUlkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgTG9hZGluZyBIaXN0b3J5XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgeW91ciBoaXN0b3J5Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG4iLCJpbXBvcnQge0VkaXRvcnN9IGZyb20gXCIuLi9lZGl0b3JzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGUgPT5cclxuICAgICAgICBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS51cGxvYWRGaWxlKGUpXHJcbiAgICApO1xyXG4gICAgZmlsZVJlYWRlci5maWxlTmFtZSA9IGZpbGVzWzBdLm5hbWU7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb3dubG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQge25hbWUsIGV4dGVuc2lvbiwgY29udGVudHMsIG1pbWV0eXBlfSA9IG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgLy8gTWFrZSBzYWZlXHJcbiAgICBuYW1lID0gc2x1Z2dpZnkobmFtZSk7XHJcbiAgICBuYW1lID0gbmFtZSArIGV4dGVuc2lvbjtcclxuICAgIC8vIE1ha2UgdGhlIGRhdGEgZG93bmxvYWQgYXMgYSBmaWxlXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1ldHlwZX0pO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBuYW1lKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5RG93bmxvYWRMaW5rID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtID0gbWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW07XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZURlbGV0ZWQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogU3dpdGNoIHRvIHRoZSBwcmV2aW91cyBmaWxlIGluc3RlYWQgb2YgYSBkZWZhdWx0IGZpbGVcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVVcGRhdGVkKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gdGhpcy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3RoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0N1cnJlbnRGaWxlKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS53YXRjaEZpbGUodGhpcy5maWxlbmFtZSwge1xyXG4gICAgICAgICAgICB1cGRhdGVkOiB0aGlzLm9uRmlsZVVwZGF0ZWQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZGVsZXRlZDogdGhpcy5vbkZpbGVEZWxldGVkLmJpbmQodGhpcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG5ld0ZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IHRoaXMuZmlsZVN5c3RlbS5nZXRGaWxlKG5ld0ZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3RmlsZW5hbWUgLSB0aGUgZmlsZW5hbWUgdGhhdCB0aGUgb3RoZXIgZWRpdG9yIHdpbGwgYmUgc3dpdGNoaW5nIHRvXHJcbiAgICAgKiBAcGFyYW0gb2xkRWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gbmV3RWRpdG9yXHJcbiAgICAgKi9cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZS5uYW1lLFxyXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGVuYW1lLnR5cGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLmZpbGUuaGFuZGxlKCksXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCIuL3B5dGhvblwiO1xyXG5cclxuY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HUyA9IFtcclxuICAgIFtcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVJbnN0cnVjdG9yUnVuXCIsIFwiZGlzYWJsZV9pbnN0cnVjdG9yX3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgaW5zdHJ1Y3RvciBvbl9ydW4gd2lsbCBub3QgYXV0b21hdGljYWxseSBydW4gdGhlIHN0dWRlbnRzJyBjb2RlLiBUaGlzIHN0aWxsIHJ1bnMgdGhlIHN0dWRlbnRzJyBjb2RlLlwiXSxcclxuICAgIFtcImRpc2FibGVTdHVkZW50UnVuXCIsIFwiZGlzYWJsZV9zdHVkZW50X3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgcnVuIGJ1dHRvbiBubyBsb25nZXIgcnVuIHRoZSBzdHVkZW50cycgY29kZS4gVGhpcyBzdGlsbCBydW5zIHRoZSBpbnN0cnVjdG9yJ3MgZmVlZGJhY2sgb25fcnVuIHNjcmlwdC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnQgY2Fubm90IGVkaXQgdGhlIGJsb2NrIGludGVyZmFjZSAoYWx0aG91Z2ggaXQgaXMgdmlzaWJsZSkuXCJdLFxyXG4gICAgW1wib25seUludGVyYWN0aXZlXCIsIFwib25seV9pbnRlcmFjdGl2ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbiwgdGhlIHByb2dyYW0gaXMgYXV0b21hdGljYWxseSBydW4sIGFuZCB0aGVuIHRoZSBjb25zb2xlIGVudGVycyBFdmFsIG1vZGUgKGludGVyYWN0aXZlKS5cIl0sXHJcbiAgICBbXCJvbmx5VXBsb2Fkc1wiLCBcIm9ubHlfdXBsb2Fkc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBkaXJlY3RseSBlZGl0YWJsZSAodGhleSB3aWxsIGhhdmUgdG8gdXBsb2FkIHN1Ym1pc3Npb25zKS5cIl0sXHJcbiAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgIFtcImhpZGVTdWJtaXNzaW9uXCIsIFwiaGlkZV9zdWJtaXNzaW9uXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIHN1Ym1pc3Npb24ncyBjb2RlIG9yIGhpc3Rvcnkgb24gQ2FudmFzLlwiXSxcclxuICAgIFtcImhpZGVGaWxlc1wiLCBcImhpZGVfZmlsZXNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBzZWUgdGhlIFZpZXcgRmlsZXMgdG9vbGJhci5cIl0sXHJcbiAgICBbXCJoaWRlUXVldWVkSW5wdXRzXCIsIFwiaGlkZV9xdWV1ZWRfaW5wdXRzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY2FuIGFjY2VzcyB0aGUgcXVldWVkIGlucHV0cyBib3ggKG1ha2VzIHJlcGVhdGVkIGRlYnVnZ2luZyBlYXNpZXIgZm9yIHRoZSBpbnB1dCBmdW5jdGlvbikuXCJdLFxyXG4gICAgW1wiaGlkZUVkaXRvcnNcIiwgXCJoaWRlX2VkaXRvcnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gYWxsIG9mIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUFsbFwiLCBcImhpZGVfYWxsXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGVuIHRoZSBlbnRpcmUgaW50ZXJmYWNlIGlzIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBFdmFsdWF0ZSBidXR0b24gaXMgbm90IHNob3duIG9uIHRoZSBjb25zb2xlLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNhbm5vdCBzZWUgdGhlIGltcG9ydCBkYXRhc2V0cyBidXR0b24uXCJdLFxyXG4gICAgLy8gVE9ETzogRml4IHRoaXMgb25lIHRvIGJlIHNldHRhYmxlXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIGNlcnRhaW4ga2luZHMgb2YgaW1wb3J0IHN0YXRlbWVudHMgKG1hdHBsb3RsaWIsIHR1cnRsZSwgZGF0YXNldHMpIGFyZSBub3Qgc2hvd24gaW4gdGhlIGJsb2NrIGludGVyZmFjZS5cIl0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlIGNvdmVyYWdlIGJ1dHRvbiBpcyBub3Qgc2hvd24uXCJdLFxyXG4gICAgW1wic2F2ZVR1cnRsZU91dHB1dFwiLCBcInNhdmVfdHVydGxlX291dHB1dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0dXJ0bGUgb3V0cHV0IGlzIHNhdmVkIHdoZW5ldmVyIHRoZSBwcm9ncmFtIHVzZXMgaXQuXCJdLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBBU1NJR05NRU5UX1NFVFRJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bMF0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmQgZm9yIGZpZWxkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VTdGFydFZpZXdUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3LmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LXN0YXJ0LXZpZXctc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwgPSBBU1NJR05NRU5UX1NFVFRJTkdTXHJcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgc2ltcGxlIGJvb2xlYW5zIHRoaXMgd2F5XHJcbiAgICAuZmlsdGVyKChzZXR0aW5nKSA9PiBzZXR0aW5nWzNdID09PSBcImJvb2xcIilcclxuICAgIC5tYXAoKHNldHRpbmcpID0+IHtcclxuICAgICAgICBsZXQgcHJldHR5TmFtZSA9IHNldHRpbmdbMV0uc3BsaXQoXCJfXCIpLm1hcCh3b3JkPT4od29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt3b3JkLnNsaWNlKDEpKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIj4ke3ByZXR0eU5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuc2V0dGluZ3MuJHtzZXR0aW5nWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldHRpbmdbNF19XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihcIlxcblxcblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktdmlldy1zZXR0aW5nc1wiPlxyXG4gICAgXHJcbiAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnNldHRpbmdzLnNhdmVcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBzdHVkZW50LWZhY2luZyBuYW1lIG9mIHRoZSBhc3NpZ25tZW50LiBBc3NpZ25tZW50cyB3aXRoaW4gYSBncm91cCBhcmUgb3JkZXJlZCBhbHBoYWJldGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGJ5IHRoZWlyIG5hbWUsIHNvIHlvdSBtYXkgd2FudCB0byB1c2UgYSBuYW1pbmcgc2NoZW1lIGxpa2UgXCIjNDMuNSkgV2hhdGV2ZXJcIi5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5VUkw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnVybFwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgY291cnNlLXVuaXF1ZSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zaXN0ZW50bHkgcmVmZXIgdG8gdGhpcyBhc3NpZ25tZW50LiBcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCI+UHVibGljOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIG5vdCBwdWJsaWMsIHVzZXJzIG91dHNpZGUgb2YgdGhlIGNvdXJzZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGUgYXNzaWdubWVudCBpbiBjb3Vyc2UgbGlzdGluZ3MuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiPkhpZGRlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBoaWRkZW4sIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIGdyYWRlIHdoaWxlIHdvcmtpbmcgb24gdGhlIGFzc2lnbm1lbnQuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+UmV2aWV3ZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnJldmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIHJldmlld2VkLCB0aGUgYXNzaWdubWVudCBjYW4gYmUgY29tbWVudGVkIHVwb24gYW5kIHJlZ3JhZGVkIGJ5IHRoZSBzdGFmZiBhZnRlcndhcmRzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlN0YXJ0aW5nIFZpZXc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJzdGFydFZpZXdcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+SVAgUmFuZ2VzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5pcFJhbmdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSVAgQWRkcmVzc2VzIHRoYXQgd2lsbCBiZSBleHBsaWNpdGx5IGFsbG93ZWQuIElmIGJsYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gYWxsIGFkZHJlc3NlcyBhcmUgYWxsb3dlZC4gSWYgYW4gYWRkcmVzcyBzdGFydHMgd2l0aCA8Y29kZT5ePC9jb2RlPiB0aGVuIGl0IGl0IGlzIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgICAgICBibGFja2xpc3RlZCwgYnV0IHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdHVybiB3aXRoIGEgPGNvZGU+ITwvY29kZT4uIEFkZHJlc3NlcyBjYW4gYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYSBiaXQgbWFzayB0byBhbGxvdyBhIHJhbmdlIG9mIGFkZHJlc3Nlcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlByZWxvYWRlZCBEYXRhc2V0czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJkYXRhc2V0c1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7QVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTH1cclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRfdmlldykge1xyXG4gICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoc2V0dGluZ3Muc3RhcnRfdmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc2V0dGluZ3MuXCIrc2VydmVyTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeydibG9ja3B5LXJ1bi1ydW5uaW5nJzogdWkuZXhlY3V0ZS5pc1J1bm5pbmd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSW1wb3J0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5pbXBvcnREYXRhc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L3NwYW4+IEltcG9ydCBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJldmVudDoge2NoYW5nZTogdWkuZWRpdG9ycy51cGxvYWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlIGRyb3Bkb3duLXRvZ2dsZS1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1pdGVtIGJsb2NrcHktdG9vbGJhci1kb3dubG9hZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkhpc3RvcnkgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi50b2dnbGVIaXN0b3J5TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB1aS5lZGl0b3JzLnB5dGhvbi5pc0hpc3RvcnlBdmFpbGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeyBhY3RpdmU6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogeyAnYXJpYS1wcmVzc2VkJzogZGlzcGxheS5oaXN0b3J5TW9kZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1oaXN0b3J5XCI+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8IS0tIEZ1bGx5IGZ1bmN0aW9uYWwsIGJ1dCBhIGxpdHRsZSB0b28uLiBJbnZhc2l2ZSBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkZ1bGxzY3JlZW4gR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJ3RleHQnXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uZnVsbHNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZXhwYW5kLWFycm93cy1hbHRcIj48L3NwYW4+IEZ1bGxzY3JlZW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgLS0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiU2F2ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuU2F2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L3NwYW4+IFNhdmVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJEZWxldGUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhbkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5maWxlcy5kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9zcGFuPiBEZWxldGVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZW5hbWUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblJlbmFtZVwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXNpZ25hdHVyZVwiPjwvc3Bhbj4gUmVuYW1lXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICR7SElTVE9SWV9UT09MQkFSX0hUTUx9XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiXHJcbiAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5tZW51LmlzU3VibWl0dGVkXCI+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VQZXJBc3NpZ25tZW50U3Vic2NyaXB0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZUV4dHJhQmxvY2tseSgpIHtcclxuICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5jb25maWd1cmVDb250ZXh0TWVudSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTY3JlZW5zaG90XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLlNDUkVFTlNIT1RfQkxPQ0tTXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIGxldCBvbGRGaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShEaXNwbGF5TW9kZXMuVEVYVCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSh0aGlzLm9sZFB5dGhvbk1vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSAoKSA9PiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmlzUGFyc29ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc0Vycm9yLnN1YnNjcmliZSgobGluZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItZXJyb3ItbGluZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNVbmNvdmVyZWQuc3Vic2NyaWJlKChsaW5lcykgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItdW5jb3ZlcmVkLWxpbmVcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLnJlbmRlcigpO1xyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgdGhpcyBkb2Vzbid0IGVuZCB1cCBsb29raW5nIHJpZ2h0IChnbyB0byBhIGRpZmZlcmVudCBlZGl0b3IsIGNvbWUgYmFjaywgYW5kIGl0J2xsIGJlIHNxdWlzaGVkKVxyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgaWYgKG5ld0NvbnRlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSB0aGlzLmZpbGUuaGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG1hdHRlciwgZmlsZSB3YXMgYWxyZWFkeSBzaHV0IGRvd24uXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGNsb3NpbmcgdGhpcyBmaWxlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJURVNUXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLm9ubHlVcGxvYWRzLnN1YnNjcmliZSgoY2hhbmdlZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VkKTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlYWRPbmx5KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSZWFkT25seShjaGFuZ2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlYWRPbmx5KGlzUmVhZE9ubHkpIHtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcclxuICAgICAgICB0aGlzLmJtLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5VcGxvYWRcIiwgXCJcIiwgXCJcIiwgY29kZSwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb2RlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSA9PT0gXCJhbnN3ZXJcIiAmJiByZXN1bHQuZXh0ZW5zaW9uID09PSBcIi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gc2x1Z2dpZnkodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQubmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lm1pbWV0eXBlID0gXCJ0ZXh0L3gtcHl0aG9uXCI7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkRvd25sb2FkXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci10ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRleHRcIilbMF0sIHtcclxuICAgICAgICAgICAgc2hvd0N1cnNvcldoZW5TZWxlY3Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXJzdExpbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlRhYlwiOiBcImluZGVudE1vcmVcIixcclxuICAgICAgICAgICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJFc2NcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uZGlzcGxheS5pbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiRjExXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmNvZGVNaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMuY29kZU1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZU1pcnJvci5zZXRWYWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZU1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGV4dFwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnR4dFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUZXh0RWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBURVhUX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIEVkaXRvcnMgYXJlIGluZmVycmVkIGZyb20gRmlsZW5hbWVzLlxyXG4gKlxyXG4gKiBUaGUgZWRpdG9yIGlzIGJhc2VkIG9uIHRoZSBleHRlbnNpb246XHJcbiAqICAuYmxvY2tweTogU3BlY2lhbCBlZGl0b3IgKHdpbGwgYmUgY2hvc2VuIGJ5IGZpbGVuYW1lKVxyXG4gKiAgLnB5OiBQeXRob24gRWRpdG9yXHJcbiAqICAubWQ6IE1hcmtkb3duIEVkaXRvclxyXG4gKiAgLnR4dDogVGV4dCBFZGl0b3IgKGFsc28gdXNlZCBmb3Igb3RoZXIgdHlwZXMpXHJcbiAqICAucGVtbDogUEVNTCBFZGl0b3JcclxuICogIC5wbmcsIC5naWYsIC5qcGVnLCAuanBnLCAuYm1wOiBJbWFnZSBFZGl0b3JcclxuICogIC5qc29uOiBKU09OIEVkaXRvclxyXG4gKiAgLnlhbWw6IFlBTUwgRWRpdG9yXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtQeXRob25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9weXRob25cIjtcclxuaW1wb3J0IHtUZXh0RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGV4dFwiO1xyXG5pbXBvcnQge0Fzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtUYWdzRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvdGFnc1wiO1xyXG5pbXBvcnQge01hcmtkb3duRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvbWFya2Rvd25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGlmZmVyZW50IHBvc3NpYmxlIGVkaXRvcnMgYXZhaWxhYmxlXHJcbiAqIEBlbnVtIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvcnNFbnVtID0ge1xyXG4gICAgU1VCTUlTU0lPTjogXCJzdWJtaXNzaW9uXCIsXHJcbiAgICBBU1NJR05NRU5UOiBcImFzc2lnbm1lbnRcIixcclxuICAgIElOU1RSVUNUSU9OUzogXCJpbnN0cnVjdGlvbnNcIixcclxuICAgIE9OX1JVTjogXCJvbl9ydW5cIixcclxuICAgIE9OX0NIQU5HRTogXCJvbl9jaGFuZ2VcIixcclxuICAgIE9OX0VWQUw6IFwib25fZXZhbFwiLFxyXG4gICAgU1RBUlRJTkdfQ09ERTogXCJzdGFydGluZ19jb2RlXCIsXHJcbiAgICBTQU1QTEVfU1VCTUlTU0lPTlM6IFwic2FtcGxlX3N1Ym1pc3Npb25zXCIsXHJcbiAgICBJTlNUUlVDVE9SX0ZJTEU6IFwiaW5zdHJ1Y3Rvcl9maWxlXCJcclxufTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfTkFNRVNQQUNFUyA9IFtcIiFcIiwgXCJeXCIsIFwiP1wiLCBcIiRcIl07XHJcblxyXG5jb25zdCBBVkFJTEFCTEVfRURJVE9SUyA9IFtcclxuICAgIFRleHRFZGl0b3IsIFB5dGhvbkVkaXRvciwgQXNzaWdubWVudFNldHRpbmdzLCBUYWdzRWRpdG9yLCBNYXJrZG93bkVkaXRvclxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUlNfSFRNTCA9IEFWQUlMQUJMRV9FRElUT1JTLm1hcChlZGl0b3IgPT5cclxuICAgIGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZWRpdG9yXCI+XHJcbiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfSdcIj5cclxuICAgICR7ZWRpdG9yLnRlbXBsYXRlfSAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG4gICAgLypcclxuICAgIGBcclxuPCEtLSBrbyBpZjogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9JyAtLT5cclxuJHtlZGl0b3IudGVtcGxhdGV9XHJcbjwhLS0gL2tvIC0tPmAqL1xyXG4pLmpvaW4oXCJcXG5cIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uc18gPSB7fTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV8gPSB7fTtcclxuICAgICAgICBBVkFJTEFCTEVfRURJVE9SUy5mb3JFYWNoKGVkaXRvciA9PiB0aGlzLnJlZ2lzdGVyRWRpdG9yKGVkaXRvcikpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lLnN1YnNjcmliZSh0aGlzLmNoYW5nZUVkaXRvciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0b3IoZGF0YSkge1xyXG4gICAgICAgIGxldCBleHRlbnNpb25zID0gZGF0YS5leHRlbnNpb25zO1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBkYXRhLmNvbnN0cnVjdG9yKHRoaXMubWFpbiwgdGhpcy50YWcpO1xyXG4gICAgICAgIGluc3RhbmNlLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkXy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB0aGlzLmJ5TmFtZV9bZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCldID0gaW5zdGFuY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNfW2V4dGVuc2lvbnNbaV1dID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnlOYW1lX1tuYW1lLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVkaXRvcihuZXdGaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBvbGRFZGl0b3IgPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IG5ld0VkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgb2xkRWRpdG9yLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3RWRpdG9yO1xyXG4gICAgICAgIHRoaXMuY3VycmVudC5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGFyc2VGaWxlbmFtZShwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNwYWNlID0gcGF0aC5jaGFyQXQoMCk7XHJcbiAgICAgICAgaWYgKFNQRUNJQUxfTkFNRVNQQUNFUy5pbmRleE9mKHNwYWNlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwYXRoLnN1YnN0cigwLCBwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcInNwYWNlXCI6IHNwYWNlLCBcIm5hbWVcIjogbmFtZSwgXCJ0eXBlXCI6IHR5cGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVkaXRvcihwYXRoKSB7XHJcbiAgICAgICAgbGV0IHtzcGFjZSwgbmFtZSwgdHlwZX0gPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiLmJsb2NrcHlcIiAmJiBwYXRoIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bcGF0aF07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIGluIHRoaXMuZXh0ZW5zaW9uc18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uc19bdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZF9bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuL3NlcnZlclwiO1xuaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ydW5cIjtcbmltcG9ydCB7UnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3J1blwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL2V2YWxcIjtcbmltcG9ydCB7U2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL3NhbXBsZVwiO1xuaW1wb3J0IHtPbkNoYW5nZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9jaGFuZ2VcIjtcbmltcG9ydCB7T25FdmFsQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2V2YWxcIjtcbmltcG9ydCB7T25TYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fc2FtcGxlXCI7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBleGVjdXRpbmcgUHl0aG9uIGNvZGUgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdHMgYWxvbmcgdG8gaW50ZXJlc3RlZCBjb21wb25lbnRzLlxuICpcbiAqIEludGVyZXN0aW5nIGNvbXBvbmVudHM6XG4gKiAgRXhlY3V0aW9uIEJ1ZmZlcjogUmVzcG9uc2libGUgZm9yIGNvbGxlY3RpbmcgdGhlIHRyYWNlIGR1cmluZyBwcm9ncmFtIGV4ZWN1dGlvbi5cbiAqICAgICAgICAgICAgICAgICAgICBUaGlzIHByZXZlbnRzIEtub2Nrb3V0anMgZnJvbSB1cGRhdGluZyB0aGUgZWRpdG9yIGR1cmluZyBleGVjdXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUVkaXRvcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMgPSB7XG4gICAgICAgICAgICBydW46IG5ldyBSdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgZXZhbDogbmV3IEV2YWxDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25SdW46IG5ldyBPblJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkNoYW5nZTogbmV3IE9uQ2hhbmdlQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uRXZhbDogbmV3IE9uRXZhbENvbmZpZ3VyYXRpb24obWFpbilcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcmVjb25maWd1cmUgc2t1bHB0IHNvIHdlIGNhbiBwYXJzZVxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5jb25maWd1cmF0aW9ucy5ydW4uZ2V0U2t1bHB0T3B0aW9ucygpKTtcblxuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgdHJhY2luZyB3aGlsZSB0aGUgcHJvZ3JhbSBpcyBleGVjdXRpbmdcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5hYmxlIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIGV4ZWN1dGlvbiBoYXMgZnVsbHkgZW5kZWQsXG4gICAgICAgICAqIHdoZXRoZXIgaXQgc3VjY2VlZHMgb3IgZmFpbHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4gPSBudWxsO1xuICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCByZXBvcnRzXG4gICAgICovXG4gICAgcmVzZXRSZXBvcnRzKCkge1xuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5yZXBvcnRzO1xuICAgICAgICByZXBvcnRbXCJ2ZXJpZmllclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcIm1vZGVsXCJdID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIH07XG5cbiAgICByZXNldFN0dWRlbnRNb2RlbCgpIHtcbiAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnN0dWRlbnQ7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFN0ZXAobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5sYXN0U3RlcCgwKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50TGluZShudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhLnJlbW92ZUFsbCgpO1xuICAgICAgICBzdHVkZW50LnJlc3VsdHMgPSBudWxsO1xuICAgIH1cblxuICAgIHJlc2V0RXhlY3V0aW9uQnVmZmVyKCkge1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHtcbiAgICAgICAgICAgIFwidHJhY2VcIjogW10sXG4gICAgICAgICAgICBcInN0ZXBcIjogMCxcbiAgICAgICAgICAgIFwibGluZVwiOiAwLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGludGVyZmFjZSBhc3BlY3RzIG9mIHRoZSBwcmV2aW91cyBSdW4uXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIFRPRE86IENsZWFyIG91dCBhbnkgY292ZXJhZ2UvdHJhY2UvZXJyb3IgaGlnaGxpZ2h0cyBpbiBlZGl0b3JzXG4gICAgICAgIC8vIFJlc2V0IGV4ZWN1dGlvbiBpbiBtb2RlbFxuICAgICAgICB0aGlzLnJlc2V0U3R1ZGVudE1vZGVsKCk7XG4gICAgICAgIC8vIEdldCByZXBvcnRzIHJlYWR5XG4gICAgICAgIHRoaXMucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgZXhlY3V0aW9uIGJ1ZmZlclxuICAgICAgICB0aGlzLnJlc2V0RXhlY3V0aW9uQnVmZmVyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgY29uc29sZSBvZiBwcmludGVkIHN0dWZmXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBvbGQgZmVlZGJhY2tcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2suY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxheWVkUnVuKCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucnVuLmJpbmQodGhpcyksIDEpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ydW4udXNlKHRoaXMpO1xuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uUnVuLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5jb25maWd1cmF0aW9uLnNob3dFcnJvcnMuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uUnVuLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5leGVjdXRpb25FbmRfLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIGxldCBldmFsdWF0aW9uSW5wdXQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmV2YWx1YXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWx1YXRpb25JbnB1dCk7XG4gICAgICAgIGV2YWx1YXRpb25JbnB1dC50aGVuKCh1c2VySW5wdXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMuZXZhbC51c2UodGhpcywgdXNlcklucHV0KTtcbiAgICAgICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVGZWVkYmFjaygpKSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vbkV2YWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXZhbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkV2YWwudXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV2YWx1YXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uQ2hhbmdlLnVzZSh0aGlzKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHJldHVybiBTay5taXNjZXZhbC5hc3luY1RvUHJvbWlzZSgoKSA9PlxuICAgICAgICAgICAgU2suaW1wb3J0TWFpbldpdGhCb2R5KHRoaXMuY29uZmlndXJhdGlvbi5maWxlbmFtZSwgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmNvZGUsIHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVkIHdoZW5ldmVyIHRoZSBQeXRob24gY29kZSBjaGFuZ2VzXG4gICAgICovXG4gICAgb25fY2hhbmdlKCkge1xuICAgICAgICBsZXQgRklMRU5BTUUgPSBcIm9uX2NoYW5nZVwiO1xuICAgICAgICAvLyBTa2lwIGlmIHRoZSBpbnN0cnVjdG9yIGhhcyBub3QgZGVmaW5lZCBhbnl0aGluZ1xuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5wcm9ncmFtc1tGSUxFTkFNRV0oKS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNoYW5naW5nXCIpO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUNvZGUoKTtcbiAgICAgICAgLy8gT24gc3RlcCBkb2VzIG5vdCBwZXJmb3JtIHBhcnNlIGFuYWx5c2lzIGJ5IGRlZmF1bHQgb3IgcnVuIHN0dWRlbnQgY29kZVxuICAgICAgICBsZXQgZW5naW5lID0gdGhpcztcbiAgICAgICAgbGV0IGZlZWRiYWNrID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2s7XG4gICAgICAgIGVuZ2luZS5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgZW5naW5lLnZlcmlmeUNvZGUoKTtcbiAgICAgICAgZW5naW5lLnVwZGF0ZVBhcnNlKCk7XG4gICAgICAgIGVuZ2luZS5ydW5JbnN0cnVjdG9yQ29kZShGSUxFTkFNRSwgdHJ1ZSwgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgIC8vIFNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IHNob3cgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICEoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjay5wcmVzZW50RmVlZGJhY2soY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2sobW9kdWxlLiRkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImVuZ2luZVwiLCBcIm9uX2NoYW5nZVwiKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGF0dGVtcHQgdG8gY2FsbCB0aGUgZGVmaW5lZCBvbkV4ZWN1dGlvbkVuZCxcbiAgICAgKiBidXQgd2lsbCBkbyBub3RoaW5nIGlmIHRoZXJlIGlzIG5vIGZ1bmN0aW9uIGRlZmluZWQuXG4gICAgICovXG4gICAgZXhlY3V0aW9uRW5kXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25FbmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZXhlY3V0aW9uQmVnaW5fKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkJlZ2luICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uQmVnaW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgRU1QVFlfTU9EVUxFID0gXCJsZXQgJGJ1aWx0aW5tb2R1bGUgPSBmdW5jdGlvbihtb2QpeyByZXR1cm4gbW9kOyB9XCI7XHJcblxyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGhvbGRpbmcgc2V0dGluZ3Mgb2YgYSBwYXJ0aWN1bGFyIHJ1biBjb25maWd1cmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIC8vIEFjY2VzcyBwb2ludCBmb3IgaW5zdHJ1Y3RvciBkYXRhXHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBTay5jb25zb2xlID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZTtcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmdldFNrdWxwdE9wdGlvbnMoKSk7XHJcbiAgICAgICAgLy8gU2V0IG9wZW5GaWxlIGFzIG1lY2hhbmlzbSB0byByZWFkIGZpbGVzXHJcbiAgICAgICAgU2suaW5Ccm93c2VyID0gdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNrdWxwdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX19mdXR1cmVfXzogU2sucHl0aG9uMyxcclxuICAgICAgICAgICAgLy8gaW1wb3J0XHJcbiAgICAgICAgICAgIHJlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBvcGVuXHJcbiAgICAgICAgICAgIC8vZmlsZW9wZW46IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gZmlsZS53cml0ZVxyXG4gICAgICAgICAgICBmaWxld3JpdGU6IHRoaXMud3JpdGVGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIHByaW50XHJcbiAgICAgICAgICAgIG91dHB1dDogdGhpcy5wcmludC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBpbnB1dFxyXG4gICAgICAgICAgICBpbnB1dGZ1bjogdGhpcy5pbnB1dC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBpbnB1dGZ1blRha2VzUHJvbXB0OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBNZWRpYSBJbWFnZSBQcm94eSBVUkxcclxuICAgICAgICAgICAgaW1hZ2VQcm94eTogdGhpcy5nZXRJbWFnZVByb3h5LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRvIGtlZXAgdGhlIGdsb2JhbHNcclxuICAgICAgICAgICAgcmV0YWluR2xvYmFsczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHRvIGFjY2VzcyBTa3VscHQgYnVpbHQtaW5zLiBUaGlzIGlzIHByZXR0eSBnZW5lcmljLCB0YWtlblxyXG4gICAgICogYWxtb3N0IGRpcmVjdGx5IGZyb20gdGhlIFNrdWxwdCBkb2NzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBweXRob24gZmlsZW5hbWUgKGUuZy4sIFwib3NcIiBvciBcInBwcmludFwiKSB0aGF0IHdpbGwgYmUgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIEphdmFTY3JpcHQgc291cmNlIGNvZGUgb2YgdGhlIGZpbGUgKHdlaXJkLCByaWdodD8pXHJcbiAgICAgKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgaXNuJ3QgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5wdXRNb2NrRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKFNrLnF1ZXVlZElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRJbWFnZVByb3h5KCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBzdWNjZXNzIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgZmFpbHVyZSBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZHVtbXlPdXRTYW5kYm94KCkge1xyXG4gICAgICAgIC8vU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuLi90cmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSwgY29kZSkge1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJfID0gXCIgKyBjb2RlO1xyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSB0cnVlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuQWRkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCB0aGlzLmNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1FdmFsdWF0ZS5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50VmFsdWUoU2suZmZpLnJlbWFwVG9Kcyhtb2R1bGUuJGQuXy4kcigpKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0LFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IHRoaXMuY29kZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zLmpzXCI7XHJcbmltcG9ydCB7JHNrX21vZF9pbnN0cnVjdG9yfSBmcm9tIFwiLi4vc2tfbW9kX2luc3RydWN0b3JcIjtcclxuXHJcbmNvbnN0IFVUSUxJVFlfTU9EVUxFX0NPREUgPSBcInZhciAkYnVpbHRpbm1vZHVsZSA9IFwiICsgJHNrX21vZF9pbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBJbnN0cnVjdG9ycyBoYXZlIG5vIGxpbWl0c1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsOyAvLyAxMCAqMTAwMFxyXG4gICAgICAgIC8vIE11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKHRydWUpO1xyXG4gICAgICAgIC8vIERpc2FibGUgaW5wdXQgYm94XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICAvLyBUT0RPIFNrLmlucHV0ZnVuID0gQmxvY2tQeUVuZ2luZS5pbnB1dE1vY2tGdW5jdGlvbjtcclxuICAgICAgICAvLyBUT0RPOiBBbGxvdyBpbnB1dCBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSB0aW1lciwgc29tZWhvd1xyXG4gICAgICAgIC8vIEVuYWJsZSB1dGlsaXR5IG1vZGVcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBVVElMSVRZX01PRFVMRV9DT0RFO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckZpbGVzID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBpbnN0cnVjdG9yRmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGluc3RydWN0b3JGaWxlc1tpXS5maWxlbmFtZSgpID09PSBcIiFcIitmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RydWN0b3JGaWxlc1tpXS5jb250ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiLi9hbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIikpIHtcclxuICAgICAgICAgICAgbGV0IGlubmVyTmFtZSA9IGZpbGVuYW1lLnNsaWNlKFwiLi9faW5zdHJ1Y3Rvci9cIi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3RvckZpbGVzID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgaW5zdHJ1Y3RvckZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3RvckZpbGVzW2ldLmZpbGVuYW1lKCkgPT09IFwiIVwiK2lubmVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0cnVjdG9yRmlsZXNbaV0uY29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2suYnVpbHRpbi5JbXBvcnRFcnJvcihcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gXCJBcHBsZVBpZVwiO1xyXG4gICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9LCBcImFuc3dlci5weVwiKVxyXG4ke3RpZmFBbmFseXNpc31cclxuZnJvbSBwZWRhbC5zYW5kYm94LnNhbmRib3ggaW1wb3J0IFNhbmRib3hcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gTUFJTl9SRVBPUlRbJ3NhbmRib3gnXVsncnVuJ10gPSBTYW5kYm94KClcclxuI3N0dWRlbnQucnVuKE1BSU5fUkVQT1JUWydzb3VyY2UnXVsnY29kZSddLCBNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2ZpbGVuYW1lJ10sIHJlcG9ydF9leGNlcHRpb25zPUZhbHNlKVxyXG4jZGVidWcoc3R1ZGVudClcclxuc3R1ZGVudC5yZXBvcnRfZXhjZXB0aW9uc19tb2RlID0gVHJ1ZVxyXG5pZiBub3QgZ2V0X21vZGVsX2luZm8oJ2Fzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUluc3RydWN0b3JSdW4nKTpcclxuICAgIGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQocmFpc2VfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2xvZyhzdHVkZW50LmRhdGEpXHJcbiNzdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbiNlcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbiNjb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbnJ1bl9zdHVkZW50ID0gY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudFxyXG5yZXNldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LnJlc2V0X291dHB1dFxyXG5xdWV1ZV9pbnB1dCA9IGNvbXBhdGliaWxpdHkucXVldWVfaW5wdXRcclxuZ2V0X291dHB1dCA9IGNvbXBhdGliaWxpdHkuZ2V0X291dHB1dFxyXG5nZXRfcGxvdHMgPSBjb21wYXRpYmlsaXR5LmdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LnRyYWNlX2xpbmVzID0gdHJhY2VfbGluZXNcclxuZnJvbSBwZWRhbCBpbXBvcnQgcXVlc3Rpb25zXHJcbnF1ZXN0aW9ucy5zaG93X3F1ZXN0aW9uID0gc2V0X2luc3RydWN0aW9uc1xyXG4jIFRPRE86IFJlbW92ZSB0aGUgbmVlZCBmb3IgdGhpcyBoYWNrIVxyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBzdHVkZW50LmNhbGwoZnVuYy5fX25hbWVfXywgKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcblxyXG5mcm9tIHBlZGFsLmNhaXQuY2FpdF9hcGkgaW1wb3J0IHBhcnNlX3Byb2dyYW1cclxuJHtpbnN0cnVjdG9yQ29kZX1cclxuZnJvbSBwZWRhbC5yZXNvbHZlcnMgaW1wb3J0IHNpbXBsZVxyXG5TVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFID0gc2ltcGxlLnJlc29sdmUoKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aCAtIGxpbmVPZmZzZXQgLSA0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogaW5zdHJ1Y3RvckNvZGUsXHJcbiAgICAgICAgICAgIFwibGluZU9mZnNldFwiOiBsaW5lT2Zmc2V0XHJcbiAgICAgICAgICAgIC8vJ2NvbXBsZXRlJzogZmFsc2UgLy8gQWN0dWFsbHksIGxldCdzIHVzZSB1bmRlZmluZWQgZm9yIG5vdy5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIC8vIFRPRE8gTG9nZ2luZyEhISFcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgLy8gVE9ETzogQWN0dWFsbHkgcGFyc2UgcmVzdWx0c1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uaW5zdHJ1Y3Rvci5nbG9iYWxzID0gU2suZ2xvYmFscztcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fcnVuLiRkO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHNjb3JlKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlRmlsZShcImFuc3dlci5weVwiLCB0aGlzLmNvZGUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBlbmdpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcInZlcmlmaWVyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvZGUudHJpbSgpKSxcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5maW5pc2hUdXJ0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9yYmlkZGVuKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGFjY2Vzc2libGU6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5pbnB1dChwcm9tcHRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi91dGlsaXR5L1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi9wZWRhbC9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJTdGVwc1wiIHRoZSBleGVjdXRpb24gb2YgdGhlIGNvZGUsIG1lYW50IHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayB0byB0aGUgU2t1bHB0XHJcbiAgICAgKiBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gSGFzaCB0aGF0IG1hcHMgdGhlIG5hbWVzIG9mIHZhcmlhYmxlcyAoU3RyaW5ncykgdG8gdGhlaXIgU2t1bHB0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5OdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBjb2x1bW4gbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGl0IGFzIHRoZSBcIlhcIiBwb3NpdGlvbiB0byB0aGUgbGluZU51bWJlcidzIFwiWVwiIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxyXG4gICAgICovXHJcbiAgICBzdGVwKHZhcmlhYmxlcywgbG9jYWxzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xyXG4gICAgICAgICAgICBsZXQgZ2xvYmFscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBUcmFjZSBsb2NhbCB2YXJpYWJsZXMgcHJvcGVybHlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL2xldCBsb2NhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHMobG9jYWxzKTtcclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0TGluZXMoYXN0KSB7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWRMaW5lcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgdmlzaXRCb2R5ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubGluZW5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRMaW5lcy5hZGQobm9kZS5saW5lbm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5vcmVsc2UpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUub3JlbHNlLmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmZpbmFsYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5maW5hbGJvZHkuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZpc2l0Qm9keShhc3QpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZpc2l0ZWRMaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEhvbGQgYWxsIHRoZSBhY3R1YWxseSBkaXNjb3ZlcmVkIGxpbmVzIGZyb20gdGhlIHBhcnNlXHJcbiAgICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXHJcbiAgICAgICAgbGV0IGFzdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZSh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCB0aGlzLmZpbGVuYW1lLCBwYXJzZS5mbGFncyk7XHJcbiAgICAgICAgICAgIGxpbmVzID0gdGhpcy5nZXRMaW5lcyhhc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdCxcclxuICAgICAgICAgICAgXCJlbXB0eVwiOiBhc3QuYm9keS5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFcnJvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoIXJlcG9ydFtcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50UnVuRXJyb3IocmVwb3J0LnN0dWRlbnQuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBsZXQgRkVFREJBQ0tfSFRNTCA9IGBcblxuPHNwYW4gY2xhc3M9J2Jsb2NrcHktZmxvYXRpbmctZmVlZGJhY2sgdGV4dC1tdXRlZC1sZXNzIHB1bGwtcmlnaHQgcG9zaXRpb24tc3RpY2t5IHN0aWNreS10b3AnXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtbGFiZWw9XCJOZXcgRmVlZGJhY2sgQWxlcnRcIj5cbiAgICBOZXcgZmVlZGJhY2sgJnVhcnI7XG48L3NwYW4+XG5cbjxkaXYgY2xhc3M9J2Jsb2NrcHktZmVlZGJhY2sgY29sLW1kLTYgYmxvY2tweS1wYW5lbCdcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiRmVlZGJhY2tcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCI+XG5cbiAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlY29uZFJvdy5zd2l0Y2hMYWJlbFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS0gQWN0dWFsIEZlZWRiYWNrIFJlZ2lvbiAtLT4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz5GZWVkYmFjazogPC9zdHJvbmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdiYWRnZSBibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5IGZlZWRiYWNrLWJhZGdlJ1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB1aS5mZWVkYmFjay5iYWRnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdWkuZmVlZGJhY2suY2F0ZWdvcnlcIj5GZWVkYmFjayBLaW5kPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGV5IGNoYW5nZSB0aGUgc3R1ZGVudCBleHRyYSBmaWxlcywgYWxzbyB1cGRhdGUgdGhlIGRpcnR5IGZsYWdcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eUJ1ZmZlciA9IDEwMDtcbiAgICAgICAgbGV0IHRvcE9mRWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgLy9sZXQgYm90dG9tT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbU9mRWxlbWVudCA9IHRvcE9mRWxlbWVudCArIHZpc2liaWxpdHlCdWZmZXI7XG4gICAgICAgIGxldCBib3R0b21PZlNjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcE9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0b3BPZkVsZW1lbnQgPCBib3R0b21PZlNjcmVlbikgJiZcbiAgICAgICAgICAgICh0b3BPZlNjcmVlbiA8IGJvdHRvbU9mRWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlZ3VsYXJGZWVkYmFjaygpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgICAgIGxhYmVsID0gXCJObyBlcnJvcnNcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vIGVycm9ycyByZXBvcnRlZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSkucmVwbGFjZSgvPHByZT5cXG4vZywgXCI8cHJlPlxcblxcblwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgdHJhY2tpbmcgc3R1ZGVudCBmaWxlLCBsZXQncyB0cmFjayB0aGUgaW5zdHJ1Y3RvciBmaWxlXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkludGVydmVudGlvblwiLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIFwiYW5zd2VyLnB5XCIpO1xuXG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgcHJldmlvdXNseSBoaWdobGlnaHRlZCBsaW5lc1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcmVzZW50UnVuRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UsIGxhYmVsLCBjYXRlZ29yeSwgbGluZW5vO1xuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic3ludGF4XCI7XG4gICAgICAgICAgICBsZXQgbGluZW5vID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5saW5lbm8pO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5tc2cpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSwgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVycm9yLmFyZ3MudlszXVsyXTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgPHByZT4ke3NvdXJjZX08L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhYmVsID09PSBcImJhZCBpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJhZCBJbnB1dFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmFkIGlucHV0IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFVuZXhwZWN0ZWQgZW5kLW9mLWZpbGUgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTeW50YXggRXJyb3JcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyBcIjxicj5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJydW50aW1lXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkICYmIGxpbmVubyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lbm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGxldCBuYW1lID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgbGV0IGFyZ3MgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpO1xuICAgICAgICBsZXQgdG9wID0gYCR7bmFtZX06ICR7YXJnc1swXX1cXG48YnI+XFxuPGJyPmA7XG4gICAgICAgIGxldCB0cmFjZWJhY2sgPSBcIlwiO1xuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IFwiVHJhY2ViYWNrOjxicj5cXG5cIiArIGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lbm8gPSBmcmFtZS5saW5lbm87XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBgRmlsZSA8Y29kZSBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGBvbiBsaW5lIDxjb2RlIGNsYXNzPVwibGluZW5vXCI+JHtsaW5lbm99PC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAoZnJhbWUuc2NvcGUgIT09IFwiPG1vZHVsZT5cIiAmJlxuICAgICAgICAgICAgICAgIGZyYW1lLnNjb3BlICE9PSB1bmRlZmluZWQpID8gYGluIHNjb3BlICR7ZnJhbWUuc2NvcGV9YCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGBcXG48cHJlPjxjb2RlPiR7ZnJhbWUuc291cmNlfTwvY29kZT48L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZSArIGxpbmUgKyBzY29wZSArIHNvdXJjZTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG48YnI+XCIpO1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gYCR7dHJhY2ViYWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcCtcIlxcblwiK3RyYWNlYmFjaztcbiAgICB9XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay4gUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOjxicj5cXG5cIjtcbiAgICAgICAgbWVzc2FnZSArPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfVxufSIsImNvbnN0IG1ha2VUYWIgPSBmdW5jdGlvbihmaWxlbmFtZSwgZnJpZW5kbHlOYW1lLCBoaWRlSWZFbXB0eSkge1xyXG4gICAgaWYgKGZyaWVuZGx5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnJpZW5kbHlOYW1lID0gZmlsZW5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogZGlzcGxheS5maWxlbmFtZSgpID09PSAnJHtmaWxlbmFtZX0nfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBkaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsICcke2ZpbGVuYW1lfScpLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpXCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIlxyXG4gICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZmlsZXMudmlzaWJsZVwiPlxyXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPHN0cm9uZz5WaWV3OiA8L3N0cm9uZz5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgJHttYWtlVGFiKFwiYW5zd2VyLnB5XCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWluc3RydWN0aW9ucy5tZFwiLCBcIkluc3RydWN0aW9uc1wiKX1cclxuICAgICR7bWFrZVRhYihcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIiwgXCJTZXR0aW5nc1wiKX1cclxuICAgICR7bWFrZVRhYihcIl5zdGFydGluZ19jb2RlLnB5XCIsIFwiU3RhcnRpbmcgQ29kZVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ydW4ucHlcIiwgXCJPbiBSdW5cIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fY2hhbmdlLnB5XCIsIFwiT24gQ2hhbmdlXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2V2YWwucHlcIiwgXCJPbiBFdmFsXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiP21vY2tfdXJscy5ibG9ja3B5XCIsIFwiVVJMIERhdGFcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIiwgXCJTYW1wbGUgU3VibWlzc2lvbnNcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhdGFncy5ibG9ja3B5XCIsIFwiVGFnc1wiLCB0cnVlKX1cclxuICAgIFxyXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBhc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZmlsZW5hbWUoKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJHJvb3QuZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCBmaWxlbmFtZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGZpbGVuYW1lXCI+XHJcbiAgICAgICAgICAgIDwvYT4gICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8IS0tIC9rbyAtLT5cclxuICBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5BZGQgTmV3PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP21vY2tfdXJscy5ibG9ja3B5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJz9tb2NrX3VybHMuYmxvY2tweScpXCI+VVJMIERhdGE8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz90YWdzLmJsb2NrcHknKVwiPlRhZ3M8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9zYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweScpXCI+U2FtcGxlIFN1Ym1pc3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9jaGFuZ2UucHknKVwiPk9uIENoYW5nZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uRXZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2V2YWwucHknKVwiPk9uIEV2YWw8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnaW5zdHJ1Y3RvcicpXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0dWRlbnQgRmlsZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgXHJcbjwvdWw+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgTkVXX0lOU1RSVUNUT1JfRklMRV9ESUFMT0dfSFRNTCA9IGBcclxuPGZvcm0+XHJcbjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgPCEtLSBGaWxlbmFtZSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiPkZpbGVuYW1lOjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxlbmFtZVwiPiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBGaWxldHlwZSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPkZpbGV0eXBlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPjwvc3Bhbj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gSW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ/IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCI+SW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ6IDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY29udHJvbCBibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctaGlkZGVuXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctaGlkZGVuXCIgY2hlY2tlZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC9mb3JtPlxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIEZpbGVuYW1lcyBsaXZlIGluIG9uZSBvZiBmaXZlIHBvc3NpYmxlIG5hbWVzcGFjZXM6XHJcbiAqICBJbnN0cnVjdG9yICghKTogSW52aXNpYmxlIHRvIHRoZSBzdHVkZW50IHVuZGVyIGFsbCBjaXJjdW1zdGFuY2VzXHJcbiAqICBTdGFydCBTcGFjZSAoXik6IFVzZWQgdG8gcmVzZXQgdGhlIHN0dWRlbnQgbmFtZXNwYWNlXHJcbiAqICBTdHVkZW50IFNwYWNlICgpOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50IHdoZW4gZGlzcGxheS5oaWRlRmlsZXMgaXMgbm90IHRydWUsIGFibGUgdG8gYmUgZWRpdGVkXHJcbiAqICBIaWRkZW4gU3BhY2UgKD8pOiBOb3QgZGlyZWN0bHkgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGFjY2Vzc2libGUgcHJvZ3JhbW1hdGljYWxseVxyXG4gKiAgUmVhZC1vbmx5IFNwYWNlICgmKTogQW4gaW5zdHJ1Y3RvciBmaWxlIHR5cGUgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGlzIHVuZWRpdGFibGUgYnkgdGhlbVxyXG4gKiAgU2VjcmV0IFNwYWNlICgkKTogTm90IHZpc2libGUgZnJvbSB0aGUgbWVudSBhdCBhbGwsIHNvbWUgb3RoZXIgbWVjaGFuaXNtIGNvbnRyb2xzIGl0XHJcbiAqICBHZW5lcmF0ZWQgU3BhY2UgKCopOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgZGVzdHJveWVkIGFmdGVyIEVuZ2luZS5DbGVhci4gQ2FuIHNoYWRvdyBhbiBhY3R1YWwgZmlsZS5cclxuICogIENvbmNhdGVuYXRlZCBTcGFjZSAoIyk6IFVzZWQgd2hlbiBidW5kbGluZyBhIHNwYWNlIGZvciB0aGUgc2VydmVyLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBUlRJTkdfRklMRVMgPSBbXHJcbiAgICAvLyBTdWJtaXNzaW9uXHJcbiAgICBcImFuc3dlci5weVwiLFxyXG4gICAgLy8gSW5zdHJ1Y3RvciBmaWxlc1xyXG4gICAgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsXHJcbiAgICBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIixcclxuICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIixcclxuICAgIFwiIW9uX3J1bi5weVwiLFxyXG4gICAgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0lDX05FV19GSUxFUyA9IFtcclxuICAgIFwiIW9uX2NoYW5nZS5weVwiLFxyXG4gICAgXCIhb25fZXZhbC5weVwiLFxyXG4gICAgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgIFwiIXRhZ3MuYmxvY2tweVwiLFxyXG4gICAgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIlxyXG5dO1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGNvbmNhdGVuYXRlZEZpbGUsIG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIGlmIChjb25jYXRlbmF0ZWRGaWxlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gSlNPTi5wYXJzZShjb25jYXRlbmF0ZWRGaWxlKTtcclxuICAgICAgICBsZXQgbW9kZWxGaWxlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGVuYW1lIGluIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5oYXNPd25Qcm9wZXJ0eShmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsRmlsZXMucHVzaChtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlc1tmaWxlbmFtZV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2ZpbGVzID0gZmlsZXMubWFwKGZpbGUgPT4gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKSk7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChtb2RlbEZpbGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdChbXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtb2RlbEZpbGVMaXN0KCkubWFwKGZpbGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLmZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgIGNvbnRlbnRzOiBmaWxlLmNvbnRlbnRzKClcclxuICAgICAgICB9O1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIGtvLnB1cmVDb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoKS5mb3JFYWNoKGZpbGUgPT5cclxuICAgICAgICAgICAgcmVzdWx0W2ZpbGUuZmlsZW5hbWUoKV0gPSBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdHMgYXdheSBkYXRhYmFzZSBsb2dpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGaWxlU3lzdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfID0ge307XHJcbiAgICAgICAgdGhpcy5tb3VudEZpbGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlc18gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiF0YWdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnRhZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIkc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJeXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCIhXCIpIHx8IGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIj9cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlSW5BcnJheV8oZmlsZSwgYXJyYXkpIHtcclxuICAgICAgICBmaWxlLm93bmVyID0gYXJyYXk7XHJcbiAgICAgICAgbGV0IGNvZGVCdW5kbGUgPSBmaWxlLm93bmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgY29kZUJ1bmRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29kZUJ1bmRsZVtpXS5maWxlbmFtZSgpID09PSBmaWxlLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLmhhbmRsZSA9IGNvZGVCdW5kbGVbaV0uY29udGVudHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbGUuaGFuZGxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbWFrZU1vZGVsRmlsZShmaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBuZXdGaWxlLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKG5ld0ZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VudEZpbGVzKCkge1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJec3RhcnRpbmdfY29kZS5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhb25fcnVuLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFpbnN0cnVjdGlvbnMubWRcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdGaWxlKGZpbGVuYW1lLCBjb250ZW50cywgbW9kZWxGaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgYWxyZWFkeSBleGlzdHMhIEp1c3QgdXBkYXRlIGl0cyBoYW5kbGVcclxuICAgICAgICAgICAgbGV0IGV4aXN0aW5nRmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhleGlzdGluZ0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlKGNvbnRlbnRzIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdGaWxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZpbGUgZG9lcyBub3QgZXhpc3RcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBuZXcgQmxvY2tQeUZpbGUodGhpcy5tYWluLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXSA9IG5ld0ZpbGU7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8obmV3RmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGaWxlLmhhbmRsZSA9IG1vZGVsRmlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld0luc3RydWN0b3JGaWxlKCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gJChORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MKTtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCIpO1xyXG4gICAgICAgIGxldCBmaWxldHlwZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIik7XHJcbiAgICAgICAgbGV0IGhpZGRlbiA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctaGlkZGVuXCIpO1xyXG4gICAgICAgIGxldCBleHRlbnNpb25SZWdleCA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICBmaWxlbmFtZS5vbihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvblJlZ2V4LmV4ZWMoZmlsZW5hbWUudmFsKCkpWzFdO1xyXG4gICAgICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24gPT09IHVuZGVmaW5lZCA/IFwiTm8gZXh0ZW5zaW9uXCIgOiBleHRlbnNpb247XHJcbiAgICAgICAgICAgIGZpbGV0eXBlLnRleHQoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgeWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRkZW4gPSBoaWRkZW4uaXMoXCI6Y2hlY2tlZFwiKSA/IFwiIVwiIDogXCI/XCI7XHJcbiAgICAgICAgICAgIGlmIChmaWxlbmFtZS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBoaWRkZW4rZmlsZW5hbWUudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld0ZpbGUoZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuY29uZmlybShcIk1ha2UgTmV3IEZpbGVcIiwgYm9keSwgeWVzLCAoKT0+e30sIFwiQWRkXCIpO1xyXG4gICAgfVxyXG59IiwiLy9UT0RPOiBNb3ZlIGdldCBsaW5rIGRvd24gdG8gZm9vdGVyLCByZW1vdmUgdmVydGljYWwgYmFyIGZyb20gcXVpY2stbWVudVxyXG5leHBvcnQgbGV0IEZPT1RFUl9IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1zdGF0dXNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkQXNzaWdubWVudCcpXCI+TG9hZCBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlQXNzaWdubWVudCcpXCI+U2F2ZSBBc3NpZ25tZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRmlsZScpXCI+TG9hZCBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdzYXZlRmlsZScpXCI+U2F2ZSBGaWxlPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2FkRGF0YXNldCcpXCI+TG9hZCBEYXRhc2V0PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdsb2dFdmVudCcpXCI+TG9nIEV2ZW50PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCd1cGRhdGVTdWJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuc2VydmVyLmZvcmNlLnVwZGF0ZVN1Ym1pc3Npb25cIj5VcGRhdGUgU3VibWlzc2lvbjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnb25FeGVjdXRpb24nKVwiPkV4ZWN1dGlvbjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlcnZlci5tZXNzYWdlc1wiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3Bhbj5Vc2VyOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmlkXCI+PC9zcGFuPiAoPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5uYW1lXCI+PC9zcGFuPik8L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5Db3Vyc2U6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuY291cnNlSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Hcm91cDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5ncm91cElkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudDogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC5pZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQgVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogYXNzaWdubWVudC52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi5pZFwiPjwvc3Bhbj48L3NwYW4+LCBcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uIFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24udmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7IiwiLy8gVE9ETzogU2hvdWxkIGRpc2FibGUgYnV0dG9ucyBpZiB3ZSBjYW4ndCBhY3RpdmF0ZSB0aGVtLlxuXG5leHBvcnQgY29uc3QgSElTVE9SWV9UT09MQkFSX0hUTUwgPSBgXG48ZGl2IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXRvb2xiYXIgY29sLW1kLTEyXCIgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5oaXN0b3J5TW9kZVwiPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXN0YXJ0IGJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3Rvcnkuc3RhcnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPiBTdGFydFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkucHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj4gUHJldmlvdXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3IgZm9ybS1jb250cm9sIGN1c3RvbS1zZWxlY3QgbXItMlwiIGFyaWEtdGl0bGU9XCJIaXN0b3J5IFNlbGVjdG9yXCI+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS51c2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZmlsZS1pbXBvcnQnPjwvc3Bhbj4gVXNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5uZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj4gTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm1vc3RSZWNlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+IE1vc3QgUmVjZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuYDtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGRpc3BsYXlpbmcgdGhlIHVzZXIncyBjb2RpbmcgbG9ncyAodGhlaXIgaGlzdG9yeSkuXG4gKiBBIGxpZ2h0d2VpZ2h0IGNvbXBvbmVudCwgaXRzIG9ubHkgam9iIGlzIHRvIG9wZW4gYSBkaWFsb2cuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUhpc3Rvcnl9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlIaXN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMuY3VycmVudElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGxvYWQoaGlzdG9yeSkge1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICQoXCIuYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yXCIpLmVtcHR5KCk7XG4gICAgICAgIGxldCBlZGl0SWQgPSAwO1xuICAgICAgICBoaXN0b3J5XG4gICAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gKFxuICAgICAgICAgICAgICAgICFlbnRyeS5maWxlX3BhdGguc3RhcnRzV2l0aChcIl9pbnN0cnVjdG9yLlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkNvbXBpbGVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlICE9PSBcIkludGVydmVudGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJYLVN1Ym1pc3Npb24uTE1TXCIpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudF90eXBlID0gUkVNQVBfRVZFTlRfVFlQRVNbZW50cnkuZXZlbnRfdHlwZV0gfHwgZW50cnkuZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheWVkID0gcHJldHR5UHJpbnREYXRlVGltZShlbnRyeS5jbGllbnRfdGltZXN0YW1wKSArXCIgLSBcIitldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlID0gKGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiRmlsZS5FZGl0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSAkKFwiPG9wdGlvbj48L29wdGlvbj5cIiwge3RleHQ6IGRpc3BsYXllZCwgZGlzYWJsZWQ6IGRpc2FibGV9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRFdmVudChlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmF0dHIoXCJ2YWx1ZVwiLCBlZGl0SWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRFdmVudHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yLmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGVkaXRJZC0xKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IuY2hhbmdlKChldnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vdmVUb1N0YXJ0KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCgwKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWF4KDAsIGN1cnJlbnRJZC0xKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZU5leHQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKE1hdGgubWluKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSwgY3VycmVudElkKzEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9Nb3N0UmVjZW50KCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbCh0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVkaXRvcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uc2V0Q29kZSh0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBwYXJzZUludCh0aGlzLnNlbGVjdG9yLnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBsZXQgY29kZSA9IHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuZmlsZS5oYW5kbGUoY29kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VkaXRFdmVudChlbnRyeSkge1xuICAgICAgICByZXR1cm4gKChlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuRWRpdFwiIHx8XG4gICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5DcmVhdGVcIikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBlbnRyeS5maWxlX3BhdGgpO1xuICAgIH1cblxufVxuXG5jb25zdCBSRU1BUF9FVkVOVF9UWVBFUyA9IHtcbiAgICBcIlNlc3Npb24uU3RhcnRcIjogXCJCZWdhbiBzZXNzaW9uXCIsXG4gICAgXCJYLUlQLkNoYW5nZVwiOiBcIkNoYW5nZWQgSVAgYWRkcmVzc1wiLFxuICAgIFwiRmlsZS5FZGl0XCI6IFwiRWRpdGVkIGNvZGVcIixcbiAgICBcIkZpbGUuQ3JlYXRlXCI6IFwiU3RhcnRlZCBhc3NpZ25tZW50XCIsXG4gICAgXCJSdW4uUHJvZ3JhbVwiOiBcIlJhbiBwcm9ncmFtXCIsXG4gICAgXCJDb21waWxlLkVycm9yXCI6IFwiU3ludGF4IGVycm9yXCIsXG4gICAgXCJYLVN1Ym1pc3Npb24uTE1TXCI6IFwiVXBkYXRlZCBncmFkZVwiXG59O1xuXG5jb25zdCBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXG4gICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgIFwiQXVnXCIsIFwiU2VwdFwiLCBcIk9jdFwiLFxuICAgIFwiTm92XCIsIFwiRGVjXCJcbl07XG5jb25zdCB3ZWVrRGF5cyA9IFtcbiAgICBcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLFxuICAgIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsXG4gICAgXCJTYXRcIlxuXTtcblxuZnVuY3Rpb24gaXNTYW1lRGF5KGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gZmlyc3QuZ2V0RGF0ZSgpID09PSBzZWNvbmQuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGZpcnN0LmdldE1vbnRoKCkgPT09IHNlY29uZC5nZXRNb250aCgpICYmXG4gICAgICAgIGZpcnN0LmdldEZ1bGxZZWFyKCkgPT09IHNlY29uZC5nZXRGdWxsWWVhcigpO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSBhIGRhdGUvdGltZSBzdHJpbmcgYW5kIHJld3JpdGUgaXQgYXMgc29tZXRoaW5nXG4gKiBtb3JlIGh1bWFuIHJlYWRhYmxlLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpbWVTdHJpbmcgLSB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgKFwiWVlZWU1NREQgSEhNTVNTXCIpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIEEgaHVtYW4tcmVhZGFibGUgdGltZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIHByZXR0eVByaW50RGF0ZVRpbWUodGltZVN0cmluZykge1xuICAgIC8qbGV0IHllYXIgPSB0aW1lU3RyaW5nLnNsaWNlKDAsIDQpLFxuICAgICAgICBtb250aCA9IHBhcnNlSW50KHRpbWVTdHJpbmcuc2xpY2UoNCwgNiksIDEwKS0xLFxuICAgICAgICBkYXkgPSB0aW1lU3RyaW5nLnNsaWNlKDYsIDgpLFxuICAgICAgICBob3VyID0gdGltZVN0cmluZy5zbGljZSg5LCAxMSksXG4gICAgICAgIG1pbnV0ZXMgPSB0aW1lU3RyaW5nLnNsaWNlKDExLCAxMyksXG4gICAgICAgIHNlY29uZHMgPSB0aW1lU3RyaW5nLnNsaWNlKDEzLCAxNSk7Ki9cbiAgICAvLyBUT0RPOiBIYW5kbGUgdGltZXpvbmVzIGNvcnJlY3RseVxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwYXN0ID0gbmV3IERhdGUocGFyc2VJbnQodGltZVN0cmluZywgMTApKTtcbiAgICBpZiAoaXNTYW1lRGF5KG5vdywgcGFzdCkpIHtcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF5U3RyID0gd2Vla0RheXNbcGFzdC5nZXREYXkoKV07XG4gICAgICAgIGxldCBtb250aFN0ciA9IG1vbnRoTmFtZXNbcGFzdC5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlTdHIgKyBcIiwgXCIgKyBtb250aFN0ciArIFwiIFwiICsgcGFzdC5nZXREYXRlKCk7XG4gICAgICAgIGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gcGFzdC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZSArIFwiLCBcIitwYXN0LmdldEZ1bGxZZWFyKCkgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogT3BlbnMgdGhlIGhpc3RvcnkgZGlhbG9nIGJveC4gVGhpcyByZXF1aXJlcyBhIHRyaXAgdG8gdGhlIHNlcnZlciBhbmRcbiAqIG9jY3VycyBhc3luY2hyb25vdXNseS4gVGhlIHVzZXJzJyBjb2RlIGlzIHNob3duIGluIHByZWZvcm1hdHRlZCB0ZXh0XG4gKiB0YWdzIChubyBjb2RlIGhpZ2hsaWdodGluZyBjdXJyZW50bHkpIGFsb25nIHdpdGggdGhlIHRpbWVzdGFtcC5cbiAqL1xuQmxvY2tQeUhpc3RvcnkucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGlhbG9nID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nO1xuICAgIHZhciBib2R5ID0gXCI8cHJlPmEgPSAwPC9wcmU+XCI7XG4gICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmdldEhpc3RvcnkoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgYm9keSA9IGRhdGEucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoY29tcGxldGUsIGVsZW0pIHsgXG4gICAgICAgICAgICB2YXIgY29tcGxldGVfc3RyID0gcHJldHR5UHJpbnREYXRlVGltZShlbGVtLnRpbWUpO1xuICAgICAgICAgICAgdmFyIG5ld19saW5lID0gXCI8Yj5cIitjb21wbGV0ZV9zdHIrXCI8L2I+PGJyPjxwcmU+XCIrZWxlbS5jb2RlK1wiPC9wcmU+XCI7XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGUrXCJcXG5cIituZXdfbGluZTtcbiAgICAgICAgfSwgXCJcIik7XG4gICAgICAgIGRpYWxvZy5zaG93KFwiV29yayBIaXN0b3J5XCIsIGJvZHksIGZ1bmN0aW9uKCkge30pO1xuICAgIH0pO1xufTsiLCJpbXBvcnQge1RSQUNFX0hUTUx9IGZyb20gXCJ0cmFjZS5qc1wiO1xuaW1wb3J0IHtESUFMT0dfSFRNTH0gZnJvbSBcImRpYWxvZy5qc1wiO1xuaW1wb3J0IHtGRUVEQkFDS19IVE1MfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcbmltcG9ydCB7RklMRVNfSFRNTH0gZnJvbSBcImZpbGVzLmpzXCI7XG5pbXBvcnQge0ZPT1RFUl9IVE1MfSBmcm9tIFwiZm9vdGVyLmpzXCI7XG5pbXBvcnQge0VESVRPUlNfSFRNTH0gZnJvbSBcImVkaXRvcnMuanNcIjtcbmltcG9ydCB7Q09OU09MRV9IVE1MfSBmcm9tIFwiY29uc29sZS5qc1wiO1xuXG4vKipcbiAqIEBlbnVtIHtzdHJ9XG4gKi9cbmV4cG9ydCBsZXQgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zID0ge1xuICAgIEZFRURCQUNLOiBcImZlZWRiYWNrXCIsXG4gICAgVFJBQ0U6IFwidHJhY2VcIixcbiAgICBOT05FOiBcIm5vbmVcIlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpIHtcbiAgICBsZXQgaGlnaGxpZ2h0VGltZW91dCA9IG51bGw7XG4gICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWdobGlnaHRUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBoaWdobGlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaW5zdHJ1Y3Rpb25zIHByZSBjb2RlXCIpLm1hcCggKGksIGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LmhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfSk7XG59XG5cbi8vIFRPRE86IEdldCBzaGFyZWFibGUgbGluayBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnRlcmZhY2UobWFpbikge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSdibG9ja3B5LWNvbnRlbnQgY29udGFpbmVyLWZsdWlkJz5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICR7RElBTE9HX0hUTUx9XG4gICAgXG4gICAgPCEtLSBIaWRkZW4gQ2FwdHVyZSBDYW52YXMgLS0+XG4gICAgPGNhbnZhcyBpZD0nY2FwdHVyZS1jYW52YXMnIGNsYXNzPSdkLW5vbmUnIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2NhbnZhcz5cbiAgICBcbiAgICA8IS0tIFJvdyAxOiBIZWFkZXIgYW5kIFF1aWNrIE1lbnUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgIFxuICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiAtLT5cbiAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0xMCBibG9ja3B5LXBhbmVsIGJsb2NrcHktaGVhZGVyJ1xuICAgICAgICAgICAgICAgcm9sZT0naGVhZGluZycgYXJpYS1sYWJlbD0nQXNzaWdubWVudCBEZXNjcmlwdGlvbic+XG4gICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gQXNzaWdubWVudCBOYW1lIC0tPlxuICAgICAgICAgICAgPHNwYW4gcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD0nMSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2tweS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5CbG9ja1B5OiA8L3N0cm9uZz4gXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBhc3NpZ25tZW50Lm5hbWUnPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBSZXNldCBJbnN0cnVjdGlvbnMgQnV0dG9uIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrcHktaW5zdHJ1Y3Rpb25zLXJlc2V0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5pbnN0cnVjdGlvbnMucmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IGluc3RydWN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEluc3RydWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktaW5zdHJ1Y3Rpb25zJ1xuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJodG1sOiB1aS5pbnN0cnVjdGlvbnMuY3VycmVudFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXF1aWNrLW1lbnUnXG4gICAgICAgICAgICAgcm9sZT0nbWVudWJhcicgYXJpYS1sYWJlbD0nUXVpY2sgTWVudScgdGl0bGU9XCJRdWljayBNZW51XCI+XG4gICAgICAgICAgICA8IS0tIEdldCBTaGFyZWFibGUgTGluayAtLT5cbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICBHZXQgc2hhcmVhYmxlIGxpbms8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAgICBZb3VyIHN1Ym1pc3Npb24gaXMgcmVhZHkgdG8gYmUgcmV2aWV3ZWQhPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5tZW51LmNhbk1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5tZW51LnRleHRNYXJrU3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLm1lbnUuY2xpY2tNYXJrU3VibWl0dGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8IS0tIFZpZXcgYXMgaW5zdHJ1Y3RvciAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkucm9sZS5pc0dyYWRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogZGlzcGxheS5pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IGFzIGluc3RydWN0b3JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFfc3R1ZGVudF9maWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhX3N0YXJ0aW5nX2ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYV9pbnN0cnVjdG9yX2ZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1pY3Jvc2Vjb25kcyA9IG5vdy5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJhc3NpZ25tZW50X2lkXCI6IGFzc2lnbm1lbnQuaWQoKSxcbiAgICAgICAgXCJhc3NpZ25tZW50X2dyb3VwX2lkXCI6IHVzZXIuZ3JvdXBJZCgpLFxuICAgICAgICBcImNvdXJzZV9pZFwiOiB1c2VyLmNvdXJzZUlkKCksXG4gICAgICAgIFwic3VibWlzc2lvbl9pZFwiOiBzdWJtaXNzaW9uLmlkKCksXG4gICAgICAgIFwidXNlcl9pZFwiOiB1c2VyLmlkKCksXG4gICAgICAgIFwidmVyc2lvblwiOiBhc3NpZ25tZW50LnZlcnNpb24oKSxcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogbWljcm9zZWNvbmRzLFxuICAgICAgICBcInRpbWV6b25lXCI6IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5cIl0gPSBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBkYXRhW1wicmV2aWV3ZWRcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKCk7XG4gICAgICAgIGRhdGFbXCJwdWJsaWNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnB1YmxpYygpO1xuICAgICAgICBkYXRhW1widXJsXCJdID0gbW9kZWwuYXNzaWdubWVudC51cmwoKTtcbiAgICAgICAgZGF0YVtcImlwX3Jhbmdlc1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoKTtcbiAgICAgICAgZGF0YVtcIm5hbWVcIl0gPSBtb2RlbC5hc3NpZ25tZW50Lm5hbWUoKTtcbiAgICAgICAgZGF0YVtcInNldHRpbmdzXCJdID0gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCk7XG5cbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwic2F2ZUFzc2lnbm1lbnRcIiwgZGF0YSwgMywgKCkgPT4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVJbWFnZSA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGltYWdlKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVJbWFnZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZGlyZWN0b3J5XCJdID0gZGlyZWN0b3J5O1xuICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcInR1cnRsZV9vdXRwdXRcIiwgXCJzYXZlSW1hZ2VcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvblN0YXR1cyA9IGZ1bmN0aW9uKG5ld1N0YXR1cykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzdGF0dXNcIl0gPSBuZXdTdGF0dXM7XG4gICAgICAgIGxldCBwb3N0U3RhdHVzQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIiwgZGF0YSwgMiwgcG9zdFN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKlxuICogREVQUkVDQVRFRFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcIkZhaWx1cmVcIiwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChMb2FkIEZpbGUpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCBjb250ZW50cywgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxheSA9IHRoaXMuVElNRVJfREVMQVk7XG4gICAgfVxuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlRmlsZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcImNvZGVcIl0gPSBjb250ZW50cztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvbiA9IGZ1bmN0aW9uIChzY29yZSwgY29ycmVjdCwgaGlkZGVuT3ZlcnJpZGUsIGZvcmNlVXBkYXRlKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3M7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25cIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgIGRhdGFbXCJjb3JyZWN0XCJdID0gY29ycmVjdDtcbiAgICAgICAgZGF0YVtcImhpZGRlbl9vdmVycmlkZVwiXSA9IGhpZGRlbk92ZXJyaWRlO1xuICAgICAgICBkYXRhW1wiZm9yY2VfdXBkYXRlXCJdID0gZm9yY2VVcGRhdGU7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5nZXRQbmdGcm9tQmxvY2tzKChwbmdEYXRhLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IHBuZ0RhdGE7XG4gICAgICAgICAgICBpZiAoaW1nLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcInVwZGF0ZVN1Ym1pc3Npb25cIiwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbk92ZXJyaWRlICYmIGNvcnJlY3QgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsIi8qKlxuICogU2t1bHB0IE1vZHVsZSBmb3IgaG9sZGluZyB0aGUgSW5zdHJ1Y3RvciBBUEkuXG4gKlxuICogVGhpcyBtb2R1bGUgaXMgbG9hZGVkIGluIGJ5IGdldHRpbmcgdGhlIGZ1bmN0aW9ucycgc291cmNlIGNvZGUgZnJvbSB0b1N0cmluZy5cbiAqIElzbid0IHRoYXQgY3Jhenk/XG4gKlxuICpcbiAqL1xuZXhwb3J0IGxldCAkc2tfbW9kX2luc3RydWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBNYWluIG1vZHVsZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIGF0IHRoZSBlbmQuXG4gICAgbGV0IG1vZCA9IHt9O1xuICAgIGxldCBub25lID0gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIFxuICAgIGxldCBwcmlvciA9IG51bGw7XG4gICAgbW9kLnRpbWVpdCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidGltZWl0XCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlO1xuICAgICAgICBpZiAocHJpb3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IERhdGUubm93KCkgLSBwcmlvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG5hbWUpLCBkaWZmZXJlbmNlLzEwMDApO1xuICAgICAgICBwcmlvciA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBmZWVkYmFjayB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QubG9nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhtZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBkZWJ1ZyB0byBqYXZhc2NyaXB0IGNvbnNvbGVcbiAgICAgKi9cbiAgICBtb2QuZGVidWcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY292ZXJ0cyB0aGUgb3V0cHV0IGluIHRoZSBzdHVkZW50IHJlcG9ydCB0byBhIHB5dGhvbiBcbiAgICAgKiBsaXN0IGFuZCByZXR1cm5zIGl0LlxuICAgICoqL1xuICAgIG1vZC5nZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0Lm1hcChmdW5jdGlvbihpdGVtKSB7IHJldHVybiBpdGVtLnRvU2t1bHB0KCk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChvdXRwdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXNldHMgdGhlIG91dHB1dCwgcGFydGljdWxhcmx5IHVzZWZ1bCBpZiB0aGUgc3R1ZGVudFxuICAgICAqIGNvZGUgaXMgZ29pbmcgdG8gYmUgcmVydW4uXG4gICAgICovXG4gICAgbW9kLnJlc2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJyZXNldF9vdXRwdXRcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLm91dHB1dC5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5xdWV1ZV9pbnB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJxdWV1ZV9pbnB1dFwiLCBhcmd1bWVudHMsIDEsIEluZmluaXR5KTtcbiAgICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gYXJnc1tpXTtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJpbnB1dFwiLCBcInN0cmluZ1wiLCBTay5idWlsdGluLmNoZWNrU3RyaW5nKGlucHV0KSk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKFNrLmZmaS5yZW1hcFRvSnMoaW5wdXQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9wcm9ncmFtID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wcm9ncmFtXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJ2ZXJpZmllclwiXS5jb2RlKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IGluc3RydWN0b3JzIHRvIGdldCB0aGUgc3R1ZGVudHMnIGNvZGUgYXMgYSBzdHJpbmcuXG4gICAgKiovXG4gICAgbW9kLmdldF9ldmFsdWF0aW9uID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9ldmFsdWF0aW9uXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmV2YWx1YXRpb24gfHwgXCJcIik7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnRyYWNlX2xpbmVzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmxpbmVzO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobGluZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb2QuZ2V0X3N0dWRlbnRfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbbm9uZSwgbm9uZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IsXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbltcImxpbmVcIl0gPSBlcnJvci50cmFjZWJhY2tbMF0ubGluZW5vO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFNrLmZmaS5yZW1hcFRvUHkocG9zaXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtlcnJvciwgcG9zaXRpb25dKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgbW9kLmhhZF9leGVjdXRpb25fdGltZV9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJoYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3JcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuICFTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzICYmIFxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yICYmXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IudHAkbmFtZSA9PT0gXCJUaW1lTGltaXRFcnJvclwiO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBiYWNrdXBUaW1lID0gdW5kZWZpbmVkO1xuICAgIG1vZC5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsaW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBiYWNrdXBUaW1lID0gU2suZXhlY0xpbWl0O1xuICAgICAgICBpZiAoU2suZXhlY0xpbWl0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIFNrLmV4ZWNMaW1pdCA9IFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbW9kLnVubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwidW5saW1pdF9leGVjdXRpb25fdGltZVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjTGltaXQgPSBiYWNrdXBUaW1lO1xuICAgICAgICBTay5leGVjU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC5zdXBwcmVzc19zY3JvbGxpbmcgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic3VwcHJlc3Nfc2Nyb2xsaW5nXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgLypcbiAgICBkZWYgaGlzdChzZWxmLCBkYXRhLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdIaXN0b2dyYW0nLCAndmFsdWVzJzogZGF0YSwgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBwbG90KHNlbGYsIHhzLCB5cz1Ob25lLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBpZiB5cyA9PSBOb25lOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAneCc6IHJhbmdlKGxlbih4cykpLCAneSc6IHhzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgICAgIGVsc2U6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgIGRlZiBzY2F0dGVyKHNlbGYsIHhzLCB5cywgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnU2NhdHRlcicsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAqL1xuICAgIG1vZC5nZXRfcGxvdHMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Bsb3RzXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0cyA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXRzID0gb3V0cHV0cy5maWx0ZXIoZnVuY3Rpb24ob3V0cHV0KSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQudHlwZSA9PT0gXCJwbG90XCI7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wiZGF0YVwiOiBncmFwaC5jb250ZW50Lm1hcChmdW5jdGlvbihwbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdQbG90ID0geyBcInR5cGVcIjogcGxvdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90LnR5cGUgPT09IFwibGluZVwiIHx8IHBsb3QudHlwZSA9PT0gXCJzY2F0dGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ4XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lng7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInlcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxvdC50eXBlID09PSBcImhpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInZhbHVlc1wiXSA9IHBsb3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3UGxvdDtcbiAgICAgICAgICAgICAgICB9KSwgXG4gICAgICAgICAgICAgICAgXCJ4bGFiZWxcIjogXCJcIiwgXCJ5bGFiZWxcIjogXCJcIiwgXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlwiLCBcImxlZ2VuZFwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG91dHB1dHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoW10pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBQcm92aWRlcyBgc3R1ZGVudGAgYXMgYW4gb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHRoYXQgdGhlIHN0dWRlbnQgZGVjbGFyZWQuXG4gICAgbW9kLlN0dWRlbnREYXRhID0gU2subWlzY2V2YWwuYnVpbGRDbGFzcyhtb2QsIGZ1bmN0aW9uKCRnYmwsICRsb2MpIHtcbiAgICAgICAgJGxvYy5fX2luaXRfXyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgLy9zZWxmLmRhdGEgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIGxldCBuZXdEaWN0ID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBTay5hYnN0ci5zYXR0cihzZWxmLCBTay5idWlsdGluLnN0cihcImRhdGFcIiksIG5ld0RpY3QsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5yZXN1bHRzO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHNlbGYubW9kdWxlLiRkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2suYWJzdHIub2JqZWN0U2V0SXRlbShuZXdEaWN0LCBTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQoa2V5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNhbGxfZiA9IGZ1bmN0aW9uKGt3YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJnc0xlbihcImNhbGxcIiwgYXJndW1lbnRzLmxlbmd0aCwgMSwgSW5maW5pdHksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgdmFyIGt3YXJncyA9IG5ldyBTay5idWlsdGlucy5kaWN0KGt3YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gYXJnc1swXTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgYXJncyA9IGFyZ3Muc2xpY2UoMik7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dHMgPSBrd2FyZ3MubXAkbG9va3VwKG5ldyBTay5idWlsdGluLnN0cihcImlucHV0c1wiKSk7XG4gICAgICAgICAgICBpZiAoaW5wdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHMgPSBTay5mZmkucmVtYXBUb0pzKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNlbGYudHAkZ2V0YXR0cihuZXcgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpKTtcbiAgICAgICAgICAgIHZhciBmdW5jdGlvbk9iamVjdCA9IGRhdGEubXAkbG9va3VwKGZ1bmN0aW9uTmFtZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb25PYmplY3QudHAkY2FsbChhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGxfZi5jb19rd2FyZ3MgPSB0cnVlO1xuICAgICAgICAvL2NhbGxfZi5jb192YXJuYW1lcyA9IFtcInNlbGZcIiwgXCJmdW5jdGlvblwiXTtcbiAgICAgICAgY2FsbF9mLmNvX25hbWU9IG5ldyBTay5idWlsdGluLnN0cihcImNhbGxcIik7XG4gICAgICAgICRsb2NbXCJjYWxsXyRybiRcIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGNhbGxfZik7XG5cbiAgICAgICAgJGxvY1tcIl9fcmVwcl9fXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbG9jLmdldF9uYW1lc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X25hbWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgJGxvYy5nZXRfdmFsdWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfdmFsdWVzX2J5X3R5cGVcIiwgYXJndW1lbnRzLCAyLCAzKTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImV4Y2x1ZGVfYnVpbHRpbnNcIiwgXCJib29sZWFuXCIsIFNrLmJ1aWx0aW4uY2hlY2tCb29sKGV4Y2x1ZGVfYnVpbHRpbnMpKTtcbiAgICAgICAgICAgICAgICBleGNsdWRlX2J1aWx0aW5zID0gU2suZmZpLnJlbWFwVG9KcyhleGNsdWRlX2J1aWx0aW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGVbcHJvcGVydHldLnRwJG5hbWUgPT09IHR5cGUudHAkbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubGlzdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9LCBcIlN0dWRlbnREYXRhXCIpO1xuICAgIG1vZC5zdHVkZW50ID0gU2subWlzY2V2YWwuY2FsbHNpbU9yU3VzcGVuZChtb2QuU3R1ZGVudERhdGEpO1xuICAgIFxuICAgIG1vZC5nZXRfc3R1ZGVudF9kYXRhID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2RhdGFcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIG1vZC5zdHVkZW50O1xuICAgIH0pO1xuXG4gICAgbW9kLnNldF9pbnN0cnVjdGlvbnMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5ld0luc3RydWN0aW9ucykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwic2V0X2luc3RydWN0aW9uc1wiLCBhcmd1bWVudHMsIDEsIDIpO1xuICAgICAgICBuZXdJbnN0cnVjdGlvbnMgPSBTay5mZmkucmVtYXBUb0pzKG5ld0luc3RydWN0aW9ucyk7XG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXS5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICB9KTtcblxuICAgIG1vZC5nZXRfbW9kZWxfaW5mbyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oa2V5cykge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X21vZGVsX2luZm9cIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IG1vZGVsID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdO1xuICAgICAgICBrZXlzID0gU2suZmZpLnJlbWFwVG9KcyhrZXlzKS5zcGxpdChcIi5cIik7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vZGVsID0gbW9kZWxba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkobW9kZWwoKSk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1vZDtcbn07XG4iLCJsZXQgTE9DQUxfU1RPUkFHRV9SRUY7XG50cnkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0gbG9jYWxTdG9yYWdlO1xuICAgIGxldCBtb2QgPSBcIkJMT0NLUFlfTE9DQUxTVE9SQUdFX1RFU1RcIjtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKG1vZCwgbW9kKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKG1vZCk7XG59IGNhdGNoKGUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IHtcbiAgICAgICAgX2RhdGEgICAgICAgOiB7fSxcbiAgICAgICAgc2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCwgdmFsKSB7IHJldHVybiB0aGlzLl9kYXRhW2lkXSA9IFN0cmluZyh2YWwpOyB9LFxuICAgICAgICBnZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiB0aGlzLl9kYXRhLmhhc093blByb3BlcnR5KGlkKSA/IHRoaXMuX2RhdGFbaWRdIDogdW5kZWZpbmVkOyB9LFxuICAgICAgICByZW1vdmVJdGVtICA6IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBkZWxldGUgdGhpcy5fZGF0YVtpZF07IH0sXG4gICAgICAgIGNsZWFyICAgICAgIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9kYXRhID0ge307IH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBvYmplY3QgZm9yIGludGVyZmFjaW5nIHdpdGggdGhlIExvY2FsU3RvcmFnZS4gVGhlIExvY2FsU3RvcmFnZVxuICogYnJvd3NlciBBUEkgYWxsb3dzIGZvciBvZmZsaW5lIHN0b3JhZ2UuIFRoYXQgQVBJIGlzIHZlcnkgdW5zb3BoaXN0aWNhdGVkLFxuICogYW5kIGlzIGVzc2VudGlhbGx5IGEgbGFtZSBrZXktdmFsdWUgc3RvcmUuIFRoaXMgb2JqZWN0IHNpdHMgb24gdG9wXG4gKiBhbmQgcHJvdmlkZXMgYSBudW1iZXIgb2YgdXNlZnVsIHV0aWxpdGllcywgaW5jbHVkaW5nIHJ1ZGltZW50YXJ5Y2FjaGVcbiAqIGNhY2hlIGV4cGlyYXRpb24uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7TG9jYWxTdG9yYWdlV3JhcHBlcn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBBIG5hbWVzcGFjZSB0byB1c2UgaW4gZ3JvdXBpbmcgYWNjZXNzIHRvIGxvY2Fsc3RvcmFnZS4gVGhpcyBrZWVwcyBhY2Nlc3MgY2xlYW4gYW5kIG9yZ2FuaXplZCwgd2hpbGUgYWxzbyBtYWtpbmcgaXQgcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhbFN0b3JhZ2VXcmFwcGVyKG5hbWVzcGFjZSkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xufVxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgYWRkaW5nIGEga2V5L3ZhbHVlIHBhaXIgdG8gTG9jYWxTdG9yYWdlLlxuICogTm90ZSB0aGF0IGJvdGggcGFyYW1ldGVycyBtdXN0IGJlIHN0cmluZ3MgKEpTT04uc3RyaW5naWZ5IGlzIHlvdXIgZnJpZW5kKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuc2V0ID0gIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiLCB2YWx1ZSk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIsICQubm93KCkpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmVtb3ZpbmcgYSBrZXkgZnJvbSBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmVtb3ZlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB0aW1lIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB0aW1lIGZvci5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAtIFRoZSB0aW1lc3RhbXAgKGxvY2FsIGVwb2NoKSB3aGVuIHRoZSBrZXkgd2FzIGxhc3Qgc2V0LlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICogVGhpcyBkZWZhdWx0IHdpbGwgYmUgc2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFZhbHVlIC0gVGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlLiBNdXN0IGJlIGEgc3RyaW5nLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5nZXREZWZhdWx0ID0gZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIGdpdmVuIGtleSBpcyBpbiBMb2NhbFN0b3JhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gdGVzdCBleGlzdGVuY2UgZm9yLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIikgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgc2VydmVyIGhhcyB0aGUgbmV3ZXIgdmVyc2lvbi4gVGhpcyBmdW5jdGlvblxuICogYXNzdW1lcyB0aGF0IHRoZSBzZXJ2ZXIgdHJpcCB0YWtlcyBhYm91dCA1IHNlY29uZHMuIFRoaXMgbWV0aG9kXG4gKiBpcyBsYXJnZWx5IGRlcHJlY2F0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHNlcnZlcl90aW1lIC0gVGhlIHNlcnZlcidzIHRpbWUgYXMgYW4gZXBvY2ggKGluIG1pbGxpc2Vjb25kcylcbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaXNfbmV3ID0gZnVuY3Rpb24oa2V5LCBzZXJ2ZXJfdGltZSkge1xuICAgIHZhciBzdG9yZWRfdGltZSA9IExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbiAgICByZXR1cm4gKHNlcnZlcl90aW1lID49IHN0b3JlZF90aW1lKzUwMDApO1xufTtcbiIsImV4cG9ydCBjb25zdCBUUkFDRV9IVE1MID0gYFxyXG5cclxuPGRpdiBjbGFzcz1cImJsb2NrcHktdHJhY2UgY29sLW1kLTYgYmxvY2tweS1wYW5lbFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiVHJhY2VcIj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+XHJcbiAgICAgICAgPHN0cm9uZz5UcmFjZTogPC9zdHJvbmc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmxvYXQtcmlnaHQgYmxvY2tweS1oaWRlLXRyYWNlJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj4gSGlkZSBUcmFjZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTMgYmxvY2tweS10cmFjZS1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5maXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlN0ZXA6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLyA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5mb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IHVpLnRyYWNlLmxpbmUnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3Zlcic+XHJcbiAgICAgICAgPGNhcHRpb24+Q3VycmVudCB2YXJpYWJsZXMgYXQgdGhpcyBzdGVwPC9jYXB0aW9uPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPjx0aD5OYW1lPC90aD48dGg+VHlwZTwvdGg+PHRoPlZhbHVlPC90aD48L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cImZvcmVhY2g6IHVpLnRyYWNlLmRhdGEoKS5wcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBuYW1lICE9ICdfX2ZpbGVfXycgJiYgbmFtZSAhPSAnX19wYXRoX18nXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogbmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDogdHlwZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvZGUgZGF0YS1iaW5kPVwidGV4dDogdmFsdWVcIj48L2NvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdHlwZSA9PSBcIkxpc3RcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgZGF0YS1iaW5kPVwiY2xpY2s6IC8vJHJvb3Qudmlld0V4YWN0VmFsdWUodHlwZSwgZXhhY3RfdmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvdyc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICBcclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tQeVRyYWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLklHTk9SRURfR0xPQkFMUyA9IFtcIl9fbmFtZV9fXCIsIFwiX19kb2NfX1wiLCBcIl9fcGFja2FnZV9fXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc21ldGhvZFwiLCBcInByb3BlcnR5XCIsIFwic3RhdGljbWV0aG9kXCJdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRyYWNlLmNsaWNrKHRoaXMuYnVpbGRUcmFjZVRhYmxlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZSBhIHNldCBvZiB2YXJpYWJsZXMgdHJhY2VkIGZyb20gdGhlIGV4ZWN1dGlvbiBhbmQgcGFyc2Ugb3V0IGFueVxyXG4gICAgICogZ2xvYmFsIHZhcmlhYmxlcyBhbmQgbW9kdWxlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gYSBtYXBwaW5nIG9mIHZhcmlhYmxlIG5hbWVzIHRvIHRoZWlyIFNrdXB0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwYXJzZUdsb2JhbHModmFyaWFibGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBtb2R1bGVzID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmFjZUV4ZWN1dGlvbigpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdmFyaWFibGVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklHTk9SRURfR0xPQkFMUy5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoXCJfJHJ3JFwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIl8kcm4kXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gQmxvY2tQeVRyYWNlLnBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0ge1wibmFtZVwiOiBwcm9wZXJ0eSwgXCJ0eXBlXCI6IFwiVW5rbm93blwiLCBcInZhbHVlXCI6IHZhbHVlLnRvU3RyaW5nKCl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gU2suYnVpbHRpbi5tb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHZhbHVlLiRkLl9fbmFtZV9fLnYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1wicHJvcGVydGllc1wiOiByZXN1bHQsIFwibW9kdWxlc1wiOiBtb2R1bGVzfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgU2t1bHB0IHZhbHVlIGludG8gYSBtb3JlIGVhc2lseSBwcmludGFibGUgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gdGhlIHNrdWxwdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGZ1bGxMZW5ndGgpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJVbmRlZmluZWRcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHZhbHVlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mdW5jOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBcmd1bWVudHM6IFwiK3ZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcy5qb2luKFwiLCBcIikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgTm8gYXJndW1lbnRzXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubW9kdWxlOiByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnN0cjpcclxuICAgICAgICAgICAgICAgIGlmIChmdWxsTGVuZ3RoIHx8IHZhbHVlLnYubGVuZ3RoIDw9IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIltcIit2YWx1ZS5zcSRsZW5ndGgoKStcIiBjaGFyYWN0ZXJzIG5vdCBzaG93bl1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ub25lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJOb25lXCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ib29sOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRcIiA9PT0gdmFsdWUuc2tUeXBlID8gXCJJbnRlZ2VyXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmludF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnRlZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5mbG9hdF86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4udHVwbGU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUdXBsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubGlzdDpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS52Lmxlbmd0aCA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlsuLi4gXCIrdmFsdWUudi5sZW5ndGgrXCIgZWxlbWVudHMgLi4uXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4YWN0X3ZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmRpY3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJEaWN0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlICUgMSA9PT0gMCA/IFwiSW50ZWdlclwiIDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU3RyaW5nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQm9vbGVhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogKHZhbHVlID8gXCJUcnVlXCI6IFwiRmFsc2VcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUudHAkbmFtZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS50cCRuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFRPRE86IHZpZXdFeGFjdFZhbHVlIiwiLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHthbnl0aGluZ30gbmVlZGxlIC0gVGhlIGVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge0FycmF5fSBoYXlzdGFjayAtIFRoZSBsaXN0IHRvIHNlYXJjaC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQgZXhpc3RzXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xuICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGFuIGFycmF5LCBwcmVzZXJ2aW5nIG9yZGVyLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICogQ291cnRlc3k6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTg0MzcwL2hvdy10by1tZXJnZS10d28tYXJyYXlzLWluLWphdmFzY3JpcHQtYW5kLWRlLWR1cGxpY2F0ZS1pdGVtc1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHVuaXF1aWZ5LiBFbGVtZW50cyBjb21wYXJlZCB3aXRoID09PS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlVbmlxdWUoYXJyYXkpIHtcbiAgICB2YXIgYSA9IGFycmF5LmNvbmNhdCgpO1xuICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yKHZhciBqPWkrMTsgajxhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZihhW2ldID09PSBhW2pdKSB7YS5zcGxpY2Uoai0tLCAxKTt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgZXh0ZW5kaW5nIGFuIGFycmF5IGJhc2VkXG4gKiBvbiBhbiBcImFkZEFycmF5XCIgYW5kIFwicmVtb3ZlQXJyYXlcIi4gQW55IGVsZW1lbnRcbiAqIGZvdW5kIGluIHJlbW92ZUFycmF5IGlzIHJlbW92ZWQgZnJvbSB0aGUgZmlyc3QgYXJyYXlcbiAqIGFuZCBhbGwgdGhlIGVsZW1lbnRzIG9mIGFkZEFycmF5IGFyZSBhZGRlZC5cbiAqIEFueSBkdXBsaWNhdGUgaXRlbXMgYXJlIHJlbW92ZWQuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSB0aGUgYXJyYXkgdG8gbWFuaXB1bGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWRkQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcmVtb3ZlQXJyYXkgLSB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG1vZGlmaWVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEFycmF5KGFycmF5LCBhZGRBcnJheSwgcmVtb3ZlQXJyYXkpIHtcbiAgICB2YXIgY29weUFycmF5ID0gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5LmluZGV4T2YoaXRlbSkgPT09IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnJheVVuaXF1ZShjb3B5QXJyYXkuY29uY2F0KGFkZEFycmF5KSk7XG59XG5cbi8qKlxuICogRGVlcGx5IGNsb25lcyBhIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBBIG5vZGUgdG8gY2xvbmVcbiAqIEByZXR1cm4ge05vZGV9IEEgY2xvbmUgb2YgdGhlIGdpdmVuIG5vZGUgYW5kIGFsbCBpdHMgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHQgbm9kZSwgdGhlbiByZS1jcmVhdGUgaXQgcmF0aGVyIHRoYW4gY2xvbmUgaXRcbiAgICB2YXIgY2xvbmUgPSBub2RlLm5vZGVUeXBlID09IDMgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gXG4gICAgLy8gUmVjdXJzZSAgICAgXG4gICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNoaWxkKSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAgXG4gICAgcmV0dXJuIGNsb25lO1xufVxuXG4vKipcbiAqIEluZGVudHMgdGhlIGdpdmVuIHN0cmluZyBieSA0IHNwYWNlcy4gVGhpcyBjb3JyZWN0bHkgaGFuZGxlcyBtdWx0aS1saW5lIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggZm91ciBzcGFjZXMgYWRkZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IG5ldyBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXig/PS4pL2dtLCBcIiAgICBcIik7XG59XG5cbi8qKlxuICogVHVybnMgc3BhY2VzIGludG8gdW5kZXJzY29yZXMgaW4gdGhlIHN0cmluZywgbWFrZXMgaXQgbG93ZXJjYXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHRoZSBzdHJpbmcgdG8gYmUgbWFuaXB1bGF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbHVnKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gW2BtaW5gLCBgbWF4YF0uXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gLSBUaGUgbG93ZXN0IHBvc3NpYmxlIGludGVnZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IC0gVGhlIGhpZ2hlc3QgcG9zc2libGUgaW50ZWdlciAoaW5jbHVzaXZlKS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKG1heC1taW4rMSkrbWluKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHNvbWUgdGV4dCBzbyB0aGF0IGl0IGNhbiBiZSBzYWZlbHkgd3JpdHRlbiBpbnRvIGFuIEhUTUwgYm94LlxuICogVGhpcyBpbmNsdWRlcyByZXBsYWNpbmcgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgKCYsIDwsID4sIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgdGV4dCB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBIVE1MLXNhZmUgdGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUwoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLycvZywgXCImYXBvcztcIik7XG59XG5cbi8qKlxuICogU2h1ZmZsZSB0aGUgYmxvY2tzIGluIHRoZSB3b3Jrc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBCbG9ja2x5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgQmxvY2tseS5Xb3Jrc3BhY2VTdmcucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1ldHJpY3MgPSB0aGlzLmdldE1ldHJpY3MoKTtcbiAgICAgICAgdmFyIHdpZHRoID0gbWV0cmljcy52aWV3V2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbWV0cmljcy52aWV3SGVpZ2h0O1xuICAgICAgICB2YXIgYmxvY2tzID0gdGhpcy5nZXRUb3BCbG9ja3MoZmFsc2UpO1xuICAgICAgICB2YXIgeSA9IDUsIHggPSAwLFxuICAgICAgICAgICAgbWF4aW1hbF9pbmNyZWFzZSA9IGhlaWdodC9ibG9ja3MubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBHZXQgYSBibG9ja1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBibG9jay5nZXRSZWxhdGl2ZVRvU3VyZmFjZVhZKCk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgeCA9IDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAtcHJvcGVydGllcy54K3JhbmRvbUludGVnZXIoMTAsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLm1vdmVCeSh4LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAtcHJvcGVydGllcy55K3kpO1xuICAgICAgICAgICAgeSA9IHkgKyByYW5kb21JbnRlZ2VyKDUsIG1heGltYWxfaW5jcmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnRzIGZyb20gb25lIGFycmF5IHRvIGFub3RoZXIgYmFzZWQgb24gYSBjb25kaXRpb25hbCBjaGVjay5cbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxODg3OTY3L2phdmFzY3JpcHQtbW92ZS1vYmplY3RzLWZyb20tb25lLWFycmF5LXRvLWFub3RoZXItYmVzdC1hcHByb2FjaFxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoc291cmNlLCB0YXJnZXQsIG1vdmVDaGVjaykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc291cmNlW2ldO1xuICAgICAgICBpZiAobW92ZUNoZWNrKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIG9iamVjdHNcbiAqIFRPRE86IG1ha2UgdGhpcyBzbyB3ZSBkb24ndCBoYXZlIHRvIGV4cGxpY2l0bHkgcHV0IG91dCBldmVyeSBvcHRpb25cbiAqICAgICAgICAgIG9uZSBwb3NzaWJsZSB0aGluZyB3ZSBjb3VsZCBkbyBpcyBnZXQgYSBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgXG4gKiAgICAgICAgICBvZiB0aGUgY29uc3RydWN0b3IgYW5kIGxvb2sgZm9yIHRoZSBzdWJzdHJpbmcgXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIlxuICogICAgICAgICAgQnV0IEkgZG9uJ3Qga25vdyBob3cgcmVsaWFibGUgdGhhdCBpcy4gIFJhdGhlciwgaXQncyBraW5kIG9mIGhhY2tpc2guXG4gKiAgICAgICAgICBTaG91bGQgdGVob3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBleGFtaW5lZFxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiB0eXBlc1xuKiovXG5mdW5jdGlvbiBpc1NrQnVpbHRpbihvYmope1xuICAgIHJldHVybiAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5kaWN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5saXN0KSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi50dXBsZSkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uYm9vbCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uaW50XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZmxvYXRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5zdHIpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxuZyk7XG4gICAgLy92YXIgY29uc19zdHIgPSBvYmouY29uc3RydWN0b3IgKyBcIlwiO1xuICAgIC8vcmV0dXJuIGNvbnNfc3RyLmluZGV4T2YoXCJyZXR1cm4gbmV3IFNrLmJ1aWx0aW5cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FzdE5vZGUob2JqKXtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIFwiX2FzdG5hbWVcIiBpbiBvYmo7XG59XG5cbi8qKlxuICogU2hvdWxkIHRoZW9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaSwgYnV0IEkgcHV0IGl0IGhlcmUgaW5zdGVhZCB0byBub3QgbWVzcyB1cCB0aGUgc2t1bHB0IGZpbGVzXG4gKiBsaWtlIHRoZSBub3JtYWwgU2suZmZpLnJlbWFwVG9QeSwgaXQgZG9lc24ndCB3b3JrIGZvciBmdW5jdGlvbnMgb3IgbW9yZSBjb21wbGV4IG9iamVjdHMsIGJ1dCBpdCBoYW5kbGVzXG4gKiBjYXNlcyB3aGVyZSB0aGUgdHlwZXMgaW4gb2JqIGFyZSBhIG1peCBvZiBweXRob24gU0lNUExFIG9iamVjdHMgYW5kIFNJTVBMRSBub3JtYWwgamF2YXNjcmlwdCBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWRcbiAqIEByZXR1cm4ge1NrLmJ1aWx0aW4uPz8/fSAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHl0aG9uIG9iamVjdCwgZHJvcHBpbmcgYWxsIGZ1bmN0aW9ucyBhbmQgdGhpbmdzIGl0IGNhbid0IGNvbnZlcnRcbioqL1xuZnVuY3Rpb24gbWl4ZWRSZW1hcFRvUHkob2JqKXtcbiAgICB2YXIgaztcbiAgICB2YXIga3ZzO1xuICAgIHZhciBpO1xuICAgIHZhciBhcnI7XG4gICAgLy9AVE9ETzogc2hvdWxkIHRoZW9yZXRpY2FsbHkgY2hlY2sgaWYgdGhlIG9iamVjdCBpcyBhIHB5aG9uIGRpY3Qgb3IgYXJyYXkgd2l0aCBqcyBvYmplY3RzXG4gICAgaWYgKGlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAvL29iamVjdCBpcyBhbHJlYWR5IHB5dGhvbiByZWFkeVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIikge1xuICAgICAgICAvL29iamVjdCBpcyBhY3R1YWxseSBhIGphdmFzY3JpcHQgYXJyYXlcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIC8vZm9yIGVhY2ggb2JqZWN0LCBjb252ZXJ0IGl0IHRvIGEgcHl0aG9uIG9iamVjdCBpZiBpdCBpc24ndCBvbmUgYWxyZWFkeVxuICAgICAgICAgICAgdmFyIHN1YnZhbCA9IG9ialtpXTtcbiAgICAgICAgICAgIGlmKCFpc1NrQnVpbHRpbihzdWJ2YWwpKXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChtaXhlZFJlbWFwVG9QeShzdWJ2YWwpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1YnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmxpc3QoYXJyKTtcbiAgICB9IGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkgey8vbnVsbCBvYmplY3RcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYoIWlzU2tCdWlsdGluKG9iaikpe1xuICAgICAgICAgICAgLy9hc3N1bWluZyBpdCdzIGEgc3RhbmRhcmQgZGljdGlvbmFyeVxuICAgICAgICAgICAga3ZzID0gW107Ly9Tay5idWlsdGluLmRpY3QgdXNlcyBhbiBhcnJheSBvZiBrZXktdmFsdWUsa2V5LXZhbHVlLi4uXG4gICAgICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBrZXkgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkoaykpO1xuICAgICAgICAgICAgICAgIC8vY292ZXJ0IGNvcnJlc3BvbmRpbmcgdmFsdWUgaWYgaXQgbmVlZHMgdG8gYmUgY29udmVydGVkXG4gICAgICAgICAgICAgICAga3ZzLnB1c2gobWl4ZWRSZW1hcFRvUHkob2JqW2tdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NyZWF0ZSB0aGUgbmV3IGRpY3Rpb25hcnlcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5kaWN0KGt2cyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLmFzc2skKG9iaik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uYm9vbChvYmopO1xuICAgIH0gZWxzZSBpZih0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmoubmFtZSk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fOyJdLCJzb3VyY2VSb290IjoiIn0=