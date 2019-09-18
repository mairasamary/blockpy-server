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
            return model.ui.menu.isSubmitted() ? "Reopen for editing" : model.display.dirtySubmission() ? "Run" : "Mark as submitted";
          }),
          clickMarkSubmitted: function clickMarkSubmitted() {
            return model.ui.menu.isSubmitted() ? self.components.server.updateSubmissionStatus("inProgress") : model.display.dirtySubmission() ? self.components.engine.delayedRun() : self.components.server.updateSubmissionStatus("Submitted");
          },
          isSubmitted: ko.pureComputed(function () {
            return model.submission.submissionStatus().toLowerCase() === "submitted";
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



var ASSIGNMENT_SETTINGS = [["toolboxLevel", "toolbox_level", "normal", "toolbox", "INCOMPLETE: What level of toolbox to present to the user (hiding and showing categories)."], ["startView", "start_view", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT, _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"], "The Python editor mode to start in when the student starts the problem."], ["datasets", "datasets", "", "string", "The current list of datasets available on load as a comma-separated string."], ["disableTimeout", "disable_timeout", false, "bool", "If checked, then students code is allowed to run without timeouts (potentially allowing infinite loops)."], ["isParsons", "is_parsons", false, "bool", "If checked, then this is a parson's style question (jumbled)."], ["disableFeedback", "disable_feedback", false, "bool", "If checked, then no instructor scripts are run (e.g., on_run and on_eval)."], ["disableTifa", "disable_tifa", false, "bool", "If checked, then do not automatically run Tifa (which can be slow)."], ["disableTrace", "disable_trace", false, "bool", "If checked, then the students code will not have its execution traced (no variables recorded, no coverage tracked)."], ["disableEdit", "can_edit", false, "bool", "If checked, then the students' file will not be editable at all."], ["disableBlocks", "can_blocks", false, "bool", "If checked, then the student cannot edit the block interface (although it is visible)."], ["onlyInteractive", "only_interactive", false, "bool", "If checked, the editors are hidden, the program is automatically run, and then the console enters Eval mode (interactive)."], ["onlyUploads", "only_uploads", false, "bool", "If unchecked, then the students' file will not be directly editable (they will have to upload submissions)."], // What menus/feedback to show and hide
["hideFiles", "hide_files", true, "bool", "If checked, then students will not see the View Files toolbar."], ["hideQueuedInputs", "hide_queued_inputs", true, "bool", "INCOMPLETE: If unchecked, then the students can access the queued inputs box (makes repeated debugging easier for the input function)."], ["hideEditors", "hide_editors", false, "bool", "If checked, then all of the editors are hidden."], ["hideAll", "hide_all", false, "bool", "INCOMPLETE: If checked, then the entire interface is hidden."], ["hideEvaluate", "hide_evaluate", false, "bool", "If checked, then the Evaluate button is not shown on the console."], ["hideImportDatasetsButton", "hide_import_datasets_button", true, "bool", "If checked, then students cannot see the import datasets button."], // TODO: Fix this one to be settable
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

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ", \"answer.py\")\ndef run_student():\n    # limit_execution_time()\n    try:\n").concat(indentedCode, "\n    except Exception as error:\n        # unlimit_execution_time()\n        return error\n    # unlimit_execution_time()\n    return None\n").concat(tifaAnalysis, "\nfrom pedal.sandbox.sandbox import Sandbox\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = MAIN_REPORT['sandbox']['run'] = Sandbox()\n#student.run(MAIN_REPORT['source']['code'], MAIN_REPORT['source']['filename'], report_exceptions=False)\n#debug(student)\nstudent.report_exceptions_mode = True\ncompatibility.run_student(raise_exceptions=False)\n#log(student.data)\n#student = get_student_data()\n#error, position = get_student_error()\n#compatibility.raise_exception(error, position)\nrun_student = compatibility.run_student\nreset_output = compatibility.reset_output\nqueue_input = compatibility.queue_input\nget_output = compatibility.get_output\nget_plots = compatibility.get_plots\ncompatibility.trace_lines = trace_lines\nfrom pedal import questions\nquestions.show_question = set_instructions\n# TODO: Remove the need for this hack!\ndef capture_output(func, *args):\n   reset_output()\n   student.call(func.__name__, *args)\n   return get_output()\ncompatibility.capture_output = capture_output\n\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n#log(MAIN_REPORT)\n#print(MAIN_REPORT.feedback[0].mistake['error'])\n");
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
      console.log(report["parser"]);
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
      var top = Sk.ffi.remapToJs(error.args).join("\n");
      var traceback = "";

      if (error.traceback && error.traceback.length) {
        traceback = "\n\n<br>Traceback:<br>\n" + error.traceback.map(function (frame) {
          var lineno = frame.lineno;

          if (frame.filename.slice(0, -3) === filenameExecuted) {
            lineno -= _this2.main.model.execution.reports.instructor.lineOffset;
          }

          var file = "File <span class=\"filename\">\"".concat(frame.filename, "\"</span>, ");
          var line = "on line <span class=\"lineno\">".concat(lineno, "</span>, ");
          var scope = frame.scope !== "<module>" ? "in scope ".concat(frame.scope) : "";
          var source = "<pre><code>".concat(frame.source, "</code></pre>");
          return file + line + scope + "\n" + source;
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
      var message = "Error in instructor feedback. Please show the following to an instructor:\n";
      message += this.convertSkulptError(error, filenameExecuted);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3M/OTgyOSIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3M/N2M4NCIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hYnN0cmFjdF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9weXRob24uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvdGFncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90ZXh0LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9jb25maWd1cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ldmFsLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fY2hhbmdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fcnVuLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3N0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZpbGVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NlcnZlci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NrX21vZF9pbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3RyYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9ibG9ja3B5L2V4dGVybmFsIFwia29cIiJdLCJuYW1lcyI6WyJCbG9ja1B5IiwiY29uZmlndXJhdGlvbiIsImFzc2lnbm1lbnQiLCJzdWJtaXNzaW9uIiwiaW5pdE1vZGVsIiwidW5kZWZpbmVkIiwic2V0QXNzaWdubWVudCIsImluaXRNYWluIiwiaW5pdFV0aWxpdGllcyIsImluaXRNb2RlbE1ldGhvZHMiLCJ0dXJuT25IYWNrcyIsImluaXRJbnRlcmZhY2UiLCJhcHBseU1vZGVsIiwiaW5pdENvbXBvbmVudHMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsImRpcnR5U3VibWlzc2lvbiIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUltYWdlIiwic2F2ZUltYWdlTWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzIiwidXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJjb3Vyc2VfaWQiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX2ZpbGVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldEludGVyZmFjZSIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwiaXBfcmFuZ2VzIiwib25fY2hhbmdlIiwiZmlsZVN5c3RlbSIsIm5ld0ZpbGUiLCJvbl9ldmFsIiwib25fcnVuIiwic3RhcnRpbmdfY29kZSIsIm93bmVyX2lkIiwibG9hZEFzc2lnbm1lbnRTZXR0aW5ncyIsImxvYWRUYWdzIiwibG9hZFNhbXBsZVN1Ym1pc3Npb25zIiwic2FtcGxlX3N1Ym1pc3Npb25zIiwiZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcyIsImV4dHJhX3N0YXJ0aW5nX2ZpbGVzIiwibG9hZFN1Ym1pc3Npb24iLCJjb3JnaXMiLCJsb2FkRGF0YXNldHMiLCJzZXRTdGF0dXMiLCJzZWxmIiwidWkiLCJpc0dyYWRlciIsInB1cmVDb21wdXRlZCIsImlzQ2hhbmdlZCIsImN1cnJlbnQiLCJ1dGlsaXRpZXMiLCJtYXJrZG93biIsInJlc2V0IiwibWVudSIsImNhbk1hcmtTdWJtaXR0ZWQiLCJ0ZXh0TWFya1N1Ym1pdHRlZCIsImlzU3VibWl0dGVkIiwiY2xpY2tNYXJrU3VibWl0dGVkIiwiZW5naW5lIiwiZGVsYXllZFJ1biIsInRvTG93ZXJDYXNlIiwic2Vjb25kUm93IiwiaXNGZWVkYmFja1Zpc2libGUiLCJpc1RyYWNlVmlzaWJsZSIsIlRSQUNFIiwiaXNDb25zb2xlU2hvd1Zpc2libGUiLCJzd2l0Y2hMYWJlbCIsImFkdmFuY2VTdGF0ZSIsImN1cnJlbnRQYW5lbCIsIk5PTkUiLCJzaXplIiwiaGlkZUV2YWx1YXRlIiwiQUNUSVZFIiwiYmFkZ2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJ1cGRhdGVNb2RlIiwibmV3TW9kZSIsIm9sZFB5dGhvbk1vZGUiLCJpc0hpc3RvcnlBdmFpbGFibGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwidHVybk9mZkhpc3RvcnlNb2RlIiwidXBkYXRlRWRpdG9yIiwic2V0UmVhZE9ubHkiLCJ0dXJuT25IaXN0b3J5TW9kZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhpc3RvcnkiLCJsb2FkIiwiZGlhbG9nIiwiRVJST1JfTE9BRElOR19ISVNUT1JZIiwidG9nZ2xlSGlzdG9yeU1vZGUiLCJtb3ZlVG9TdGFydCIsIm1vdmVQcmV2aW91cyIsIm1vdmVOZXh0IiwibW9zdFJlY2VudCIsIm1vdmVUb01vc3RSZWNlbnQiLCJ1c2UiLCJzYXZlIiwiZXhlY3V0ZSIsImlzUnVubmluZyIsInJ1biIsImV2YWx1YXRlIiwibWVzc2FnZXMiLCJmb3JjZSIsImV2ZW50IiwidGFyZ2V0IiwiZmFkZU91dCIsImZhZGVJbiIsIm1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMiLCJhcHBseUJpbmRpbmdzIiwibWFpbiIsInRleHQiLCJFYXN5TURFIiwicHJvdG90eXBlIiwiQmxvY2tQeURpYWxvZyIsImZpbmQiLCJCbG9ja1B5RmVlZGJhY2siLCJCbG9ja1B5VHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlFbmdpbmUiLCJCbG9ja1B5RmlsZVN5c3RlbSIsIkVkaXRvcnMiLCJieU5hbWUiLCJCbG9ja1B5U2VydmVyIiwiQmxvY2tQeUNvcmdpcyIsIkJsb2NrUHlIaXN0b3J5IiwiU1RBUlRfRVZBTF9IVE1MIiwiQ09OU09MRV9IVE1MIiwiTkVXX0NPTlNPTEVfTElORV9IVE1MIiwiQ29uc29sZUxpbmVUeXBlIiwiVEVYVCIsIkhUTUwiLCJQTE9UIiwiSU1BR0UiLCJUVVJUTEUiLCJFVkFMIiwiU1RBUlRfRVZBTCIsIlZBTFVFIiwiSU5QVVQiLCJURVNUX0NBU0UiLCJDb25zb2xlTGluZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJTayIsImN1cnJGaWxlbmFtZSIsImV4ZWN1dGlvbkJ1ZmZlciIsImluZGV4IiwiZmZpIiwicmVtYXBUb1B5IiwicmVtb3ZlIiwiQ29uc29sZUxpbmVUdXJ0bGUiLCJhZGRDbGFzcyIsIndoZXJlIiwicHJlcGVuZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb25zb2xlTGluZUltYWdlIiwiYXBwZW5kIiwiQ29uc29sZUxpbmVQbG90IiwiQ29uc29sZUxpbmVUZXh0IiwiZW5jb2RlZFRleHQiLCJlbmNvZGVIVE1MIiwibGluZURhdGEiLCJ0b29sdGlwIiwiQ29uc29sZUxpbmVWYWx1ZSIsIkNvbnNvbGVMaW5lSW5wdXQiLCJwcm9tcHRNZXNzYWdlIiwiaW5wdXRGb3JtIiwiaW5wdXRCdG4iLCJpbnB1dEdyb3VwIiwiaW5wdXRCb3giLCJpbnB1dE1zZyIsIm1ha2VJbnRlcmFjdGl2ZSIsImlucHV0IiwiYnV0dG9uIiwicmVzb2x2ZU9uQ2xpY2siLCJzdWJtaXR0ZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdWJtaXRGb3JtIiwidmFsIiwicHJvcCIsImNsaWNrIiwia2V5dXAiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwiQ29uc29sZUxpbmVFdmFsdWF0ZSIsIkNvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSIsInRhZyIsInByaW50ZXJUYWciLCJNSU5JTVVNX1dJRFRIIiwiTUlOSU1VTV9IRUlHSFQiLCJERUZBVUxUX0hFSUdIVCIsImhlaWdodCIsImNsZWFyIiwicmVtb3ZlQWxsIiwibGluZUJ1ZmZlciIsInBsb3RCdWZmZXIiLCJlbXB0eSIsInR1cnRsZUxpbmUiLCJUdXJ0bGVHcmFwaGljcyIsImdldFR1cnRsZUxpbmUiLCJ3aWR0aCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYXNzZXRzIiwibG9hZEFzc2V0IiwicmVuZGVyIiwiY3VycmVudFByaW50ZXJEaW1lbnNpb24iLCJzYXZlVHVydGxlT3V0cHV0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsInBhZ2UiLCJlYWNoIiwiYXR0ciIsInNob3ciLCJoaWRlIiwibGluZVRleHQiLCJmbHVzaCIsImNoYXJBdCIsInNwbGl0TGluZXMiLCJzcGxpdCIsImFkZENvbnRlbnQiLCJpIiwicHVzaCIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJ0ZXh0VG9CbG9ja3MiLCJoaWRkZW5JbXBvcnRzIiwiZ2V0SlNPTiIsImJsb2NrcHkiLCJkb2N1bWVudGF0aW9uIiwiYm9keSIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwic2x1Z2dlZE5hbWUiLCJ0aXRsZU5hbWUiLCJpbWdTcmMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiYXBwZW5kVG8iLCJESUFMT0dfSFRNTCIsInRpdGxlVGFnIiwiYm9keVRhZyIsIm9uY2xvc2UiLCJtb2RhbCIsImRyYWdnYWJsZSIsIm9uIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MIiwiQkxPQ0siLCJzYXZlQXNzaWdubWVudFNldHRpbmdzIiwiY2xpZW50TmFtZSIsInNlcnZlck5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzdGFydF92aWV3IiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsImRpcnR5IiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwibmV3Q29udGVudHMiLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJtYWtlVGFiIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiSElTVE9SWV9UT09MQkFSX0hUTUwiLCJjb252ZXJ0SXB5bmJUb1B5dGhvbiIsImlweW5iIiwiaXNVc2FibGUiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwic3RhcnRzV2l0aCIsIm1ha2VQeXRob24iLCJjZWxscyIsIlB5dGhvbkVkaXRvclZpZXciLCJCbG9ja01pcnJvciIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwiaXNSZWFkT25seSIsImVuZHNXaXRoIiwiUHl0aG9uRWRpdG9yIiwiVEFHU19FRElUT1JfSFRNTCIsIlRhZ3NFZGl0b3JWaWV3IiwiVGFnc0VkaXRvciIsIlRFWFRfRURJVE9SX0hUTUwiLCJUZXh0RWRpdG9yVmlldyIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJzaG93Q3Vyc29yV2hlblNlbGVjdGluZyIsImxpbmVOdW1iZXJzIiwiZmlyc3RMaW5lTnVtYmVyIiwiaW5kZW50VW5pdCIsImV4dHJhS2V5cyIsImNtIiwiYmx1ciIsInNldFZhbHVlIiwiVGV4dEVkaXRvciIsIkVkaXRvcnNFbnVtIiwiU1VCTUlTU0lPTiIsIkFTU0lHTk1FTlQiLCJJTlNUUlVDVElPTlMiLCJPTl9SVU4iLCJPTl9DSEFOR0UiLCJPTl9FVkFMIiwiU1RBUlRJTkdfQ09ERSIsIlNBTVBMRV9TVUJNSVNTSU9OUyIsIklOU1RSVUNUT1JfRklMRSIsIlNQRUNJQUxfTkFNRVNQQUNFUyIsIkFWQUlMQUJMRV9FRElUT1JTIiwiRURJVE9SU19IVE1MIiwicmVnaXN0ZXJlZF8iLCJleHRlbnNpb25zXyIsImJ5TmFtZV8iLCJyZWdpc3RlckVkaXRvciIsImluc3RhbmNlIiwiZXhpdCIsImVudGVyIiwic3BhY2UiLCJsYXN0SW5kZXhPZiIsImV4ZWN1dGlvbk1vZGVsIiwiY29uZmlndXJhdGlvbnMiLCJSdW5Db25maWd1cmF0aW9uIiwiZXZhbCIsIkV2YWxDb25maWd1cmF0aW9uIiwiT25SdW5Db25maWd1cmF0aW9uIiwiT25DaGFuZ2VDb25maWd1cmF0aW9uIiwiT25FdmFsQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyZSIsImdldFNrdWxwdE9wdGlvbnMiLCJvbkV4ZWN1dGlvbkJlZ2luIiwib25FeGVjdXRpb25FbmQiLCJyZXBvcnQiLCJyZXNldFN0dWRlbnRNb2RlbCIsInJlc2V0UmVwb3J0cyIsInJlc2V0RXhlY3V0aW9uQnVmZmVyIiwidGhlbiIsImZhaWx1cmUiLCJkaXNhYmxlRmVlZGJhY2siLCJzaG93RXJyb3JzIiwiZXhlY3V0aW9uRW5kXyIsImV2YWx1YXRpb25JbnB1dCIsInVzZXJJbnB1dCIsIm1pc2NldmFsIiwiYXN5bmNUb1Byb21pc2UiLCJpbXBvcnRNYWluV2l0aEJvZHkiLCJGSUxFTkFNRSIsInByb2dyYW1zIiwidHJpbSIsInNhdmVDb2RlIiwidmVyaWZ5Q29kZSIsInVwZGF0ZVBhcnNlIiwicnVuSW5zdHJ1Y3RvckNvZGUiLCJtb2R1bGUiLCJleGVjdXRpb25SZXBvcnRzIiwicHJlc2VudEZlZWRiYWNrIiwiJGQiLCJFTVBUWV9NT0RVTEUiLCJDb25maWd1cmF0aW9uIiwicXVldWVkSW5wdXQiLCJfX2Z1dHVyZV9fIiwicHl0aG9uMyIsInJlYWQiLCJpbXBvcnRGaWxlIiwiZmlsZW9wZW4iLCJvcGVuRmlsZSIsImZpbGV3cml0ZSIsIndyaXRlRmlsZSIsInByaW50IiwiaW5Ccm93c2VyIiwiaW5wdXRmdW4iLCJpbnB1dGZ1blRha2VzUHJvbXB0IiwiaW1hZ2VQcm94eSIsImdldEltYWdlUHJveHkiLCJyZXRhaW5HbG9iYWxzIiwid2FybiIsIkVycm9yIiwicG9wIiwiYWZ0ZXJTaW5nbGVFeGVjdXRpb24iLCJwcmludFZhbHVlIiwicmVtYXBUb0pzIiwiXyIsIiRyIiwicmVqZWN0IiwieCIsIkZBSUxFRCIsIlN0dWRlbnRDb25maWd1cmF0aW9uIiwiVVRJTElUWV9NT0RVTEVfQ09ERSIsIiRza19tb2RfaW5zdHJ1Y3RvciIsIkluc3RydWN0b3JDb25maWd1cmF0aW9uIiwiZXhlY0xpbWl0IiwiY2xlYXJUaW1lb3V0IiwiV1JBUF9JTlNUUlVDVE9SX0NPREUiLCJzdHVkZW50Q29kZSIsImluc3RydWN0b3JDb2RlIiwicXVpY2siLCJpc1NhZmUiLCJzYWZlQ29kZSIsImluZGVudGVkQ29kZSIsImluZGVudCIsImRpc2FibGVUaWZhIiwic3R1ZGVudENvZGVTYWZlIiwiZXZhbHVhdGlvbiIsImR1bW15T3V0U2FuZGJveCIsImxpbmVPZmZzZXQiLCJORVdfTElORV9SRUdFWCIsIlNVQ0NFU1MiLCJTQ09SRSIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwidGlmYUFuYWx5c2lzIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsImZpbmlzaFR1cnRsZXMiLCJiZWdpbkV2YWwiLCJwYXJzZXIiLCJ2ZXJpZmllciIsIlNhbXBsZUNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXRGdW5jdGlvbiIsImRpc2FibGVUaW1lb3V0IiwiSW5maW5pdHkiLCJyZXF1ZXN0c0dldCIsIm9wZW5VUkwiLCJpc0ZvcmJpZGRlbiIsInZhcmlhYmxlcyIsImxvY2FscyIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJwYXJzZUdsb2JhbHMiLCJwcm9wZXJ0aWVzIiwibW9kdWxlcyIsImFzdCIsInZpc2l0ZWRMaW5lcyIsIlNldCIsInZpc2l0Qm9keSIsIm5vZGUiLCJsaW5lbm8iLCJzdGF0ZW1lbnQiLCJvcmVsc2UiLCJmaW5hbGJvZHkiLCJBcnJheSIsImZyb20iLCJhc3RGcm9tUGFyc2UiLCJjc3QiLCJmbGFncyIsImdldExpbmVzIiwicHJlc2VudFJ1bkVycm9yIiwiRkVFREJBQ0tfSFRNTCIsImZlZWRiYWNrTW9kZWwiLCJvZmZzZXQiLCJ0b3AiLCJ0b3Bfb2ZfZWxlbWVudCIsImJvdHRvbV9vZl9lbGVtZW50Iiwib3V0ZXJIZWlnaHQiLCJib3R0b21fb2Zfc2NyZWVuIiwidG9wX29mX3NjcmVlbiIsImV4ZWN1dGlvblJlc3VsdHMiLCJNRVNTQUdFIiwiQ0FURUdPUlkiLCJMQUJFTCIsIkRBVEEiLCJoaWRlU2NvcmUiLCJmaW5kRmlyc3RFcnJvckxpbmUiLCJzdHVkZW50UmVwb3J0IiwidW5jb3ZlcmVkTGluZXMiLCJ1cGRhdGVGZWVkYmFjayIsIm5vdGlmeUZlZWRiYWNrVXBkYXRlIiwibXNnIiwiYXJncyIsInYiLCJjb252ZXJ0U2t1bHB0RXJyb3IiLCJmaWxlbmFtZUV4ZWN1dGVkIiwidHJhY2ViYWNrIiwiZnJhbWUiLCJzY29wZSIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJGSUxFU19IVE1MIiwiU1RBUlRJTkdfRklMRVMiLCJCQVNJQ19ORVdfRklMRVMiLCJERUxFVEFCTEVfU0lNUExFX0ZJTEVTIiwiQmxvY2tQeUZpbGUiLCJvd25lciIsImNvbmNhdGVuYXRlZEZpbGUiLCJtb2RlbEZpbGVMaXN0IiwiY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZSIsImZpbGVzXyIsIm1vdW50RmlsZXMiLCJ3YXRjaE1vZGVsIiwid2F0Y2hlc18iLCJmaWxlc3lzdGVtIiwiZmlsZUFycmF5IiwiY2hhbmdlcyIsImNoYW5nZSIsIm1vZGVsRmlsZSIsIm5vdGlmeVdhdGNoZXMiLCJvYnNlcnZlSW5BcnJheV8iLCJhcnJheSIsImNvZGVCdW5kbGUiLCJleGlzdGluZ0ZpbGUiLCJvYnNlcnZlRmlsZV8iLCJmb3VuZCIsIkZPT1RFUl9IVE1MIiwiY3VycmVudElkIiwiZWRpdEV2ZW50cyIsInNlbGVjdG9yIiwiZWRpdElkIiwiZW50cnkiLCJmaWxlX3BhdGgiLCJldmVudF90eXBlIiwiUkVNQVBfRVZFTlRfVFlQRVMiLCJkaXNwbGF5ZWQiLCJwcmV0dHlQcmludERhdGVUaW1lIiwiY2xpZW50X3RpbWVzdGFtcCIsImRpc2FibGUiLCJvcHRpb24iLCJkaXNhYmxlZCIsImlzRWRpdEV2ZW50IiwiZXZ0IiwicGFyc2VJbnQiLCJtb250aE5hbWVzIiwid2Vla0RheXMiLCJpc1NhbWVEYXkiLCJzZWNvbmQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRpbWVTdHJpbmciLCJub3ciLCJEYXRlIiwicGFzdCIsInRvTG9jYWxlVGltZVN0cmluZyIsImRheVN0ciIsImdldERheSIsIm1vbnRoU3RyIiwiZGF0ZSIsImdldEhpc3RvcnkiLCJyZXZlcnNlIiwicmVkdWNlIiwiY29tcGxldGUiLCJlbGVtIiwiY29tcGxldGVfc3RyIiwidGltZSIsIm5ld19saW5lIiwiaGlnaGxpZ2h0VGltZW91dCIsImJsb2NrIiwiaGxqcyIsImhpZ2hsaWdodEJsb2NrIiwiVFJBQ0VfSFRNTCIsIlJFVFJZSU5HIiwiT0ZGTElORSIsInN0b3JhZ2UiLCJxdWV1ZSIsImdldERlZmF1bHQiLCJNQVhfUVVFVUVfU0laRSIsIlRJTUVSX0RFTEFZIiwiRkFJTF9ERUxBWSIsInRpbWVycyIsIm92ZXJsYXkiLCJibG9ja2luZ0F0dGVtcHRzIiwiY2FjaGVkRmlsZW5hbWVzIiwiY3JlYXRlU3Vic2NyaXB0aW9ucyIsImNoZWNrQ2FjaGVzIiwiY2hlY2tJUCIsIm9sZElQIiwiaXAiLCJzZXQiLCJfcG9zdExhdGVzdFJldHJ5IiwicHVzaEFueVF1ZXVlZCIsIl9wb3N0UmV0cnkiLCJjcmVhdGVGaWxlU3Vic2NyaXB0aW9uIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjc3MiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJkaXJlY3RvcnkiLCJuZXdTdGF0dXMiLCJwb3N0U3RhdHVzQ2hhbmdlIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsIm1vZCIsIm5vbmUiLCJidWlsdGluIiwibm9uZSQiLCJwcmlvciIsInRpbWVpdCIsImZ1bmMiLCJweUNoZWNrQXJncyIsImRpZmZlcmVuY2UiLCJkZWJ1ZyIsImdldF9vdXRwdXQiLCJpdGVtIiwidG9Ta3VscHQiLCJsaXN0IiwicmVzZXRfb3V0cHV0IiwicXVldWVfaW5wdXQiLCJweUNoZWNrVHlwZSIsImNoZWNrU3RyaW5nIiwiZ2V0X3Byb2dyYW0iLCJnZXRfZXZhbHVhdGlvbiIsInRyYWNlX2xpbmVzIiwiZ2V0X3N0dWRlbnRfZXJyb3IiLCJ0dXBsZSIsImhhZF9leGVjdXRpb25fdGltZV9lcnJvciIsImJhY2t1cFRpbWUiLCJsaW1pdF9leGVjdXRpb25fdGltZSIsImV4ZWNTdGFydCIsInVubGltaXRfZXhlY3V0aW9uX3RpbWUiLCJzdXBwcmVzc19zY3JvbGxpbmciLCJnZXRfcGxvdHMiLCJvdXRwdXRzIiwiZ3JhcGgiLCJwbG90IiwibmV3UGxvdCIsInkiLCJTdHVkZW50RGF0YSIsImJ1aWxkQ2xhc3MiLCIkZ2JsIiwiJGxvYyIsIl9faW5pdF9fIiwibmV3RGljdCIsImRpY3QiLCJhYnN0ciIsInNhdHRyIiwic3RyIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImNhbGxfZiIsImt3YSIsInB5Q2hlY2tBcmdzTGVuIiwiY2FsbCIsImt3YXJncyIsImJ1aWx0aW5zIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXRzIiwibXAkbG9va3VwIiwidHAkZ2V0YXR0ciIsImZ1bmN0aW9uT2JqZWN0IiwidHAkY2FsbCIsImNvX2t3YXJncyIsImNvX25hbWUiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwic2V0X2luc3RydWN0aW9ucyIsIm5ld0luc3RydWN0aW9ucyIsImdldF9tb2RlbF9pbmZvIiwiTE9DQUxfU1RPUkFHRV9SRUYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIl9kYXRhIiwiU3RyaW5nIiwiZ2V0SXRlbSIsIm5hbWVzcGFjZSIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJJR05PUkVEX0dMT0JBTFMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCJzcSRsZW5ndGgiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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QSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4vdHJhY2VcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29uc29sZX0gZnJvbSBcIi4vY29uc29sZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlGZWVkYmFja30gZnJvbSBcImZlZWRiYWNrLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVNlcnZlcn0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeURpYWxvZ30gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb3JnaXMsIF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfSBmcm9tIFwiLi9jb3JnaXNcIjtcclxuaW1wb3J0IHtCbG9ja1B5SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRWZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVTdWJtaXNzaW9uczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHJldmlld2VkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnJldmlld2VkXCJdKSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYzoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5wdWJsaWNcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBpcFJhbmdlczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pcF9yYW5nZXNcIl0pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInN1Ym1pc3Npb24uY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShcIlN0YXJ0ZWRcIiksXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiTm90UmVhZHlcIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudGx5IHZpc2libGUgRmlsZSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHByZXNlbnRlZCB3aXRoIHRoZSBpbnN0cnVjdG9yIHNldHRpbmdzIGFuZCBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5pbnN0cnVjdG9yXCIsIFwiZmFsc2VcIikudG9TdHJpbmcoKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IEhpc3RvcnkgbW9kZSBpcyBlbmdhZ2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGhpc3RvcnlNb2RlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgYXV0by1zYXZpbmcgY2hhbmdlcyBpbiBQeXRob24gZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgKiBJZiBhbiBpbnRlZ2VyLCBzcGVjaWZpZXMgdGhlIGRlbGF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKG1pY3Jvc2Vjb25kcykuXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5ldmVyIG9uIGluIG5vbi1QeXRob24gZWRpdG9ycy5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfGludH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYXV0b1NhdmU6IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25zb2xlIGlzIGZ1bGwgd2lkdGggYW5kIGZlZWRiYWNrIGlzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBiaWdDb25zb2xlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGhlaWdodCB0byB1c2UgZm9yIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgbnVsbCwgdGhlbiBsZXQgdGhlIGhlaWdodCByZW1haW4gdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBhIG51bWJlciwgdGhlbiB0aGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoaWNoIHBhbmVsIHRvIHNob3cgaW4gdGhlIHNlY29uZCByb3cncyBzZWNvbmQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRSb3dTZWNvbmRQYW5lbDoga28ub2JzZXJ2YWJsZShTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSB0cmFjaW5nIHRoZSBjb2RlIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmFjZUV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBsaXN0IG9mIHByb21pc2VzIHRvIHN0aWxsIHJlc29sdmUgd2hpbGUgbG9hZGluZyBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFByb21pc2U+fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YXNldHM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSB0ZW1wb3JhcnkgY2hhbmdlZCB2YWx1ZSBvZiB0aGUgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGZyb20gd2hhdCBpcyBpbiB0aGUgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkSW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBIGhvbGRlciBmb3IgdGhlIHRpbWVyIHRvIHRyaWdnZXIgb24tY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT25DaGFuZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgZmVlZGJhY2sgYW5kIG91dHB1dCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBzdWJtaXNzaW9uLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyB3b3VsZCBiZSBmYWxzZSBpZiB0aGVyZSBpcyBubyBmZWVkYmFjay9vdXRwdXQgKGkuZS4sIGNvZGUgaGFzIG5vdCBiZWVuIHJ1biksXHJcbiAgICAgICAgICAgICAgICAgKiBvciBpZiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIHN1Ym1pc3Npb24gYWZ0ZXIgdGhlIGxhc3QgcnVuIChlLmcuLCBieSBlZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgdGV4dCkuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGRpcnR5U3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2U6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbikge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwudXNlci5jb3Vyc2VJZChzdWJtaXNzaW9uLmNvdXJzZV9pZCk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoc3VibWlzc2lvbi5leHRyYV9maWxlcywgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50RGF0YV8oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVzZXRJbnRlcmZhY2UoKTtcclxuICAgICAgICBsZXQgd2FzU2VydmVyQ29ubmVjdGVkID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCBhc3NpZ25tZW50ID0gZGF0YS5hc3NpZ25tZW50O1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pZChhc3NpZ25tZW50LmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudmVyc2lvbihhc3NpZ25tZW50LnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5jb3Vyc2VJZChhc3NpZ25tZW50LmNvdXJzZV9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZElkKGFzc2lnbm1lbnQuZm9ya2VkX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkVmVyc2lvbihhc3NpZ25tZW50LmZvcmtlZF92ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKGFzc2lnbm1lbnQuaGlkZGVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoYXNzaWdubWVudC5yZXZpZXdlZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnB1YmxpYyhhc3NpZ25tZW50LnB1YmxpYyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnR5cGUoYXNzaWdubWVudC50eXBlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudXJsKGFzc2lnbm1lbnQudXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoYXNzaWdubWVudC5pcF9yYW5nZXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoYXNzaWdubWVudC5pbnN0cnVjdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5uYW1lKGFzc2lnbm1lbnQubmFtZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKGFzc2lnbm1lbnQub25fY2hhbmdlIHx8IG51bGwpO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9uX2NoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2NoYW5nZS5weVwiLCBhc3NpZ25tZW50Lm9uX2NoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoYXNzaWdubWVudC5vbl9ldmFsIHx8IG51bGwpO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9uX2V2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9ldmFsLnB5XCIsIGFzc2lnbm1lbnQub25fZXZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vblJ1bihhc3NpZ25tZW50Lm9uX3J1bik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZShhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vd25lcklkKGFzc2lnbm1lbnQub3duZXJfaWQpO1xyXG4gICAgICAgIGxvYWRBc3NpZ25tZW50U2V0dGluZ3ModGhpcy5tb2RlbCwgYXNzaWdubWVudC5zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkVGFncyhhc3NpZ25tZW50LnRhZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFNhbXBsZVN1Ym1pc3Npb25zKGFzc2lnbm1lbnQuc2FtcGxlX3N1Ym1pc3Npb25zKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX2luc3RydWN0b3JfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9zdGFydGluZ19maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3VibWlzc2lvbihkYXRhLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCh3YXNTZXJ2ZXJDb25uZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5jb3JnaXMubG9hZERhdGFzZXRzKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kZWxNZXRob2RzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIG1vZGVsLnVpID0ge1xyXG4gICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0dyYWRlcjoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJvd25lclwiIHx8IG1vZGVsLnVzZXIucm9sZSgpID09PSBcImdyYWRlclwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZW51OiB7XHJcbiAgICAgICAgICAgICAgICBjYW5NYXJrU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpIHx8IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHRleHRNYXJrU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlJlb3BlbiBmb3IgZWRpdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlJ1blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTWFyayBhcyBzdWJtaXR0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrTWFya1N1Ym1pdHRlZDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMoXCJpblByb2dyZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmRlbGF5ZWRSdW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMoXCJTdWJtaXR0ZWRcIilcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoKS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdHRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdHVkZW50RmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgaXNSdW5uaW5nOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpLFxyXG4gICAgICAgICAgICAgICAgZXZhbHVhdGU6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ldmFsdWF0ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAoZW5kcG9pbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1zdGF0dXMtXCIgKyBtb2RlbC5zdGF0dXNbZW5kcG9pbnRdKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0VuZHBvaW50Q29ubmVjdGVkOiAoZW5kcG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJscyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzW2VuZHBvaW50XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkSGlzdG9yeU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRGF0YXNldE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2dFdmVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlSW1hZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNNZXNzYWdlKCkgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZvcmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjogKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNlbGYubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmZhZGVPdXQoMTAwKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25IYWNrcygpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVE9ET1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5cyB0aGUgS25vY2tvdXRKUyBiaW5kaW5ncyB0byB0aGUgbW9kZWwsIGluc3RhbnRpYXRpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZVxyXG4gICAgICogSFRNTC5cclxuICAgICAqL1xyXG4gICAgYXBwbHlNb2RlbCgpIHtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVdGlsaXRpZXMoKSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICBtYXJrZG93bjogKHRleHQpID0+IHRleHQgPyBFYXN5TURFLnByb3RvdHlwZS5tYXJrZG93bih0ZXh0KSA6IFwiPHA+PC9wPlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICAvLyBFYWNoIG9mIHRoZXNlIGNvbXBvbmVudHMgd2lsbCB0YWtlIHRoZSBCbG9ja1B5IGluc3RhbmNlLCBhbmQgcG9zc2libHkgYVxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSB0byB0aGUgcmVsZXZhbnQgSFRNTCBsb2NhdGlvbiB3aGVyZSBpdCB3aWxsIGJlIGVtYmVkZGVkLlxyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1kaWFsb2dcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmVlZGJhY2sgPSBuZXcgQmxvY2tQeUZlZWRiYWNrKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2tcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMudHJhY2UgPSBuZXcgQmxvY2tQeVRyYWNlKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29uc29sZSA9IG5ldyBCbG9ja1B5Q29uc29sZShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWNvbnNvbGVcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZW5naW5lID0gbmV3IEJsb2NrUHlFbmdpbmUobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5maWxlU3lzdGVtID0gbmV3IEJsb2NrUHlGaWxlU3lzdGVtKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZWRpdG9ycyA9IG5ldyBFZGl0b3JzKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZWRpdG9yXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnB5dGhvbkVkaXRvciA9IHRoaXMuY29tcG9uZW50cy5lZGl0b3JzLmJ5TmFtZShcInB5dGhvblwiKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29yZ2lzID0gbmV3IEJsb2NrUHlDb3JnaXMobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5oaXN0b3J5ID0gbmV3IEJsb2NrUHlIaXN0b3J5KG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaGlzdG9yeS10b29sYmFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2soaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJ1dHRvbi5jbGljayhzdWJtaXRGb3JtKTtcbiAgICAgICAgaW5wdXQua2V5dXAoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFByb21pc2U7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmVJbnB1dCB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBcIkV2YWx1YXRlOlwiKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5TVEFSVF9FVkFMKTtcbiAgICAgICAgdGhpcy5odG1sLmFwcGVuZCgkKFNUQVJUX0VWQUxfSFRNTCkpO1xuICAgICAgICB0aGlzLmh0bWwuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmV4ZWN1dGUuZXZhbHVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5Q29uc29sZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBjb25zb2xlLCB3aXRoIGZlYXR1cmVzIGZvciB0aGluZ3MgbGlrZSBwcmludGluZywgcGxvdHRpbmcsIGV2YWxpbmcsIGlucHV0aW5nLlxuICAgICAqIFRoZSBcInByaW50ZXJcIiBpcyB0aGUgcmVnaW9uIHdoZXJlIHdlIHB1dCB0aGluZ3MsIGFzIG9wcG9zZWQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3aG9sZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZyA9IHRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKTtcblxuICAgICAgICB0aGlzLk1JTklNVU1fV0lEVEggPSAyMDA7XG4gICAgICAgIHRoaXMuTUlOSU1VTV9IRUlHSFQgPSAyMDA7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUlHSFQgPSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCk7IC8vIExldCBDU1MgZGVmaW5lIHRoaXNcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZSB1c2VyIG1vZGlmaWVzIGEgZmlsZSwgdGhlbiBtYWtlIHRoZSBjb25zb2xlIGxvb2sgZmFkZWQgYSBsaXR0bGVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlciwgaW5jbHVkaW5nIHJlbW92aW5nIGFueSB0ZXh0IGluIGl0IGFuZFxuICAgICAqIGZpeGluZyBpdHMgc2l6ZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmVtcHR5KCk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIHJlc2V0IGl0XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBudWxsO1xuICAgICAgICBTay5UdXJ0bGVHcmFwaGljcyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUdXJ0bGVMaW5lLmJpbmQodGhpcyksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmxvYWRBc3NldC5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGxvYWRBc3NldChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGdldFR1cnRsZUxpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZUxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZSA9IG5ldyBDb25zb2xlTGluZVR1cnRsZSh0aGlzLm1haW4pO1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgZG8gc29cbiAgICAgICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcmludGVyRGltZW5zaW9uID0gdGhpcy5wcmludGVyVGFnLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodChjdXJyZW50UHJpbnRlckRpbWVuc2lvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgU2suVHVydGxlR3JhcGhpY3MuaGVpZ2h0ID0gY3VycmVudFByaW50ZXJEaW1lbnNpb24tNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHVydGxlTGluZS5odG1sWzBdO1xuICAgIH1cblxuICAgIGZpbmlzaFR1cnRsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5zYXZlVHVydGxlT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSB0aGlzLnR1cnRsZUxpbmUuaHRtbC5maW5kKFwiY2FudmFzXCIpLmxhc3QoKVswXTtcbiAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbGV0IGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVJbWFnZShcInR1cnRsZV9vdXRwdXRcIiwgZGF0YVVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0dXJ0bGVzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWR0aFxuICAgIG5ld1R1cnRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fV0lEVEgsIHRoaXMucHJpbnRlclRhZy53aWR0aCgpLTQwKTtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fSEVJR0hULCB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkrNDApO1xuICAgIH1cblxuICAgIGlzTXV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgZWFjaCBwcmludGVkIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgYW5kIG1ha2VzIGl0IGhpZGRlblxuICAgICAqIG9yIHZpc2libGUsIGRlcGVuZGluZyBvbiB3aGF0IHN0ZXAgd2UncmUgb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcCAtIFRoZSBjdXJyZW50IHN0ZXAgb2YgdGhlIGV4ZWN1dGVkIHByb2dyYW0gdGhhdCB3ZSdyZSBvbjsgZWFjaCBlbGVtZW50IGluIHRoZSBwcmludGVyIG11c3QgYmUgbWFya2VkIHdpdGggYSBcImRhdGEtc3RlcFwiIHByb3BlcnR5IHRvIHJlc29sdmUgdGhpcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZSAtIERlcHJlY2F0ZWQsIG5vdCBzdXJlIHdoYXQgdGhpcyBldmVuIGRvZXMuXG4gICAgICovXG4gICAgc3RlcFByaW50ZXIoc3RlcCwgcGFnZSkge1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXItb3V0cHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS1zdGVwXCIpIDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmludCBhIGxpbmUgdG8gdGhlIG9uLXNjcmVlbiBwcmludGVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lVGV4dCAtIEEgbGluZSBvZiB0ZXh0IHRvIGJlIHByaW50ZWQgb3V0LlxuICAgICAqL1xuICAgIHByaW50KGxpbmVUZXh0KSB7XG4gICAgICAgIC8vIEVtcHR5IHN0cmluZ3MgbWVhbnMgZG8gbm90aGluZy5cbiAgICAgICAgLy8gcHJpbnQoXCJcIiwgZW5kPVwiXCIpXG4gICAgICAgIGlmICghbGluZVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpbmVUZXh0LmNoYXJBdChsaW5lVGV4dC5sZW5ndGgtMSkgPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BsaXRMaW5lcyA9IGxpbmVUZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBpZiAodGhpcy5saW5lQnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLmFkZENvbnRlbnQoc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0xOyBpIDwgc3BsaXRMaW5lcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbHVzaCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHBsb3QocGxvdHMpIHtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lUGxvdCh0aGlzLm1haW4sIHBsb3RzKTtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbG90QnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50UElMSW1hZ2UoaW1hZ2VEYXRhKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbWFnZSh0aGlzLm1haW4sIGltYWdlRGF0YS5pbWFnZSk7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IHByaW50ZWRWYWx1ZSA9IG5ldyBDb25zb2xlTGluZVZhbHVlKHRoaXMubWFpbiwgdmFsdWUpO1xuICAgICAgICBwcmludGVkVmFsdWUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiBwcmludGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmVnaXN0ZXJzIGEgUHJvbWlzZSBmcm9tIHRoZSBJbnB1dCBib3hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvbXB0TWVzc2FnZSAtIE1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUlucHV0KHRoaXMubWFpbiwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH07XG5cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lRXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgYmVnaW5FdmFsKCkge1xuICAgICAgICBsZXQgc3RhcnRFdmFsdWF0aW9uID0gbmV3IENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gc3RhcnRFdmFsdWF0aW9uLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuY29uZGl0aW9uYWxseSBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICovXG4gICAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICAgIHRoaXMudGFnLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpIC0gdGhpcy50YWcucHJvcChcImNsaWVudEhlaWdodFwiKVxuICAgICAgICB9LCA1MDApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQge3NsdWd9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBUT0RPOiBlZGl0b3IuYm0uYmxvY2tFZGl0b3IuZXh0cmFUb29sc1tdXG5cbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0RBVEFTRVRTID0ge307XG5leHBvcnQgbGV0IF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUyA9IHt9O1xuXG4vKipcbiAqIFRoaXMgaXMgYSB2ZXJ5IHNpbXBsaXN0aWMgaGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqIGEgZ2l2ZW4gYnV0dG9uIGludG8gYSBcIkxvYWRlZFwiIHN0YXRlIChkaXNhYmxlZCwgcHJlc3NlZCBzdGF0ZSwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnRuIC0gQW4gSFRNTCBlbGVtZW50IHRvIGNoYW5nZSB0aGUgdGV4dCBvZi5cbiAqL1xubGV0IHNldEJ1dHRvbkxvYWRlZCA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXByaW1hcnlcIilcbiAgICAgICAgLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxuICAgICAgICAudGV4dChcIkxvYWRlZFwiKVxuICAgICAgICAuYXR0cihcImFyaWEtcHJlc3NlZFwiLCBcInRydWVcIik7XG59O1xuXG5cbi8qKlxuICogTW9kdWxlIHRoYXQgY29ubmVjdHMgdG8gdGhlIENPUkdJUyBkYXRhc2V0cyBhbmQgbWFuYWdlcyBpbnRlcmFjdGlvbnNcbiAqIHdpdGggdGhlbS4gVGhpcyBpbmNsdWRlcyBsb2FkaW5nIGluIGRhdGFzZXRzIGF0IGxhdW5jaCBhbmQgb24tdGhlLWZseS5cbiAqIE5vdGUgdGhhdCB0aGlzIGhhcyBubyBwcmVzZW5jZSBvbiBzY3JlZW4sIHNvIGl0IGRvZXMgbm90IGhhdmUgYSB0YWcuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUNvcmdpc31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeUNvcmdpcyhtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIHRoaXMubG9hZGVkRGF0YXNldHMgPSBbXTtcbiAgICB0aGlzLmxvYWREYXRhc2V0cygpO1xufVxuXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5sb2FkRGF0YXNldHMgPSBmdW5jdGlvbiAoc2lsZW50bHkpIHtcbiAgICAvLyBMb2FkIGluIGVhY2ggdGhlIGRhdGFzZXRzXG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsLFxuICAgICAgICBlZGl0b3IgPSB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IsXG4gICAgICAgIHNlcnZlciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlcjtcbiAgICBsZXQgaW1wb3J0cyA9IFtdO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMoKS5zcGxpdChcIixcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAmJiAhKG5hbWUgaW4gQmxvY2tNaXJyb3JCbG9ja0VkaXRvci5FWFRSQV9UT09MUykpIHtcbiAgICAgICAgICAgIGltcG9ydHMucHVzaC5hcHBseShpbXBvcnRzLCB0aGlzLmltcG9ydERhdGFzZXQoc2x1ZyhuYW1lKSwgbmFtZSwgc2lsZW50bHkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBkYXRhc2V0cyBhcmUgbG9hZGVkLCB1cGRhdGUgdGhlIHRvb2xib3guXG4gICAgJC53aGVuLmFwcGx5KCQsIGltcG9ydHMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xuICAgICAgICBlZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgZWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmVyLmZpbmFsaXplU3Vic2NyaXB0aW9ucygpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkcyB0aGUgZGVmaW5pdGlvbnMgZm9yIGEgZGF0YXNldCBpbnRvIHRoZSBlbnZpcm9ubWVudCwgaW5jbHVkaW5nXG4gKiB0aGUgZGF0YXNldCAoYXMgYSBKUyBmaWxlKSwgdGhlIHNrdWxwdCBiaW5kaW5ncywgYW5kIHRoZSBibG9ja2x5XG4gKiBiaW5kaW5ncy4gVGhpcyByZXF1aXJlcyBhY2Nlc3MgdG8gYSBDT1JHSVMgc2VydmVyLCBhbmQgb2NjdXJzXG4gKiBhc3luY2hyb25vdXNseS4gVGhlIHJlcXVlc3RzIGFyZSBmaXJlZCBhbmQgdGhlaXIgZGVmZXJyZWQgb2JqZWN0c1xuICogYXJlIHJldHVybmVkIC0gY2FsbGVycyBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gcGVyZm9ybSBhbiBhY3Rpb25cbiAqIG9uIGNvbXBsZXRpb24gb2YgdGhlIGltcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2x1ZyAtIFRoZSBVUkwgc2FmZSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIHVzZXItZnJpZW5kbHkgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lLlxuICogQHJldHVybnMge0FycmF5LjxEZWZlcnJlZD59IC0gUmV0dXJucyB0aGUgYXN5bmMgcmVxdWVzdHMgYXMgZGVmZXJyZWQgb2JqZWN0cy5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUuaW1wb3J0RGF0YXNldCA9IGZ1bmN0aW9uIChzbHVnLCBuYW1lKSB7XG4gICAgbGV0IHVybF9yZXRyaWV2YWxzID0gW107XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cyArIFwiYmxvY2tweS9cIiArIHNsdWcgKyBcIi9cIiArIHNsdWc7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBBY3R1YWxseSBnZXQgZGF0YVxuICAgICAgICBsZXQgZ2V0RGF0YXNldCA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9kYXRhc2V0LmpzXCIpO1xuICAgICAgICAvLyBMb2FkIGdldENvbXBsZXRlIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGJlY2F1c2UgaXRzIGJpZyA6KFxuICAgICAgICBsZXQgZ2V0Q29tcGxldGUgPSAkLmdldFNjcmlwdChyb290ICsgXCJfY29tcGxldGUuanNcIik7XG4gICAgICAgIGxldCBnZXRTa3VscHQgPSAkLmdldChyb290ICsgXCJfc2t1bHB0LmpzXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtcInNyYy9saWIvXCIgKyBzbHVnICsgXCIvX19pbml0X18uanNcIl0gPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGdldEJsb2NrbHkgPSAkLmdldFNjcmlwdChyb290ICsgXCJfYmxvY2tseS5qc1wiKTtcbiAgICAgICAgLy8gT24gY29tcGxldGlvbiwgdXBkYXRlIG1lbnVzLlxuICAgICAgICAkLndoZW4oZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkRGF0YXNldHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0VG9CbG9ja3MuaGlkZGVuSW1wb3J0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnJlbW92ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybF9yZXRyaWV2YWxzLnB1c2goZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybF9yZXRyaWV2YWxzO1xufTtcblxuLyoqXG4gKiBPcGVucyBhIGRpYWxvZyBib3ggdG8gcHJlc2VudCB0aGUgdXNlciB3aXRoIHRoZSBkYXRhc2V0cyBhdmFpbGFibGVcbiAqIHRocm91Z2ggdGhlIENPUkdJUyBzZXJ2ZXIuIFRoaXMgcmVxdWlyZXMgYSBjYWxsLCBzbyB0aGlzIG1ldGhvZFxuICogY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LiBUaGUgZGlhbG9nIGlzIGNvbXBvc2VkIG9mIGEgdGFibGUgd2l0aFxuICogYnV0dG9ucyB0byBsb2FkIHRoZSBkYXRhc2V0cyAoTW9yZSB0aGFuIG9uZSBkYXRhc2V0IGNhbiBiZSBsb2FkZWRcbiAqIGZyb20gd2l0aGluIHRoZSBkaWFsb2cgYXQgYSB0aW1lKS5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzO1xuICAgICAgICAkLmdldEpTT04ocm9vdCArIFwiaW5kZXguanNvblwiLCAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIE1ha2UgdXAgdGhlIEJvZHlcbiAgICAgICAgICAgIGxldCBkYXRhc2V0cyA9IGRhdGEuYmxvY2tweTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudGF0aW9uID0gcm9vdCtcImJsb2NrcHkvaW5kZXguaHRtbFwiO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gJChgPHA+RG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQgPGEgaHJlZj0nJHtkb2N1bWVudGF0aW9ufScgdGFyZ2V0PV9ibGFuaz51cmw8L2E+PC9wPmApO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKFwiPHRhYmxlPjwvdGFibGU+XCIsIHtcImNsYXNzXCI6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc20gdGFibGUtc3RyaXBlZFwifSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykuc29ydCgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbHVnZ2VkTmFtZSA9IHNsdWcoZGF0YXNldHNbbmFtZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPkxvYWQ8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nU3JjID0gcm9vdCtcIi4uL2ltYWdlcy9kYXRhc2V0cy9cIituYW1lK1wiLWljb24ucG5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YXNldHMuaW5kZXhPZihzbHVnZ2VkTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnZ2VkTmFtZSwgXCJEYXRhIC0gXCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbGV0IGltZyA9IGA8aW1nIHNyYz0nJHtpbWdTcmN9JyBjbGFzcz1cImNvcmdpcy1pY29uXCI+YDtcbiAgICAgICAgICAgICAgICAkKFwiPHRyPjwvdHI+XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vLmFwcGVuZCgkKFwiPHRkPlwiICsgaW1nICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS5vdmVydmlldyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD48L3RkPlwiKS5hcHBlbmQoYnRuKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZFRvKHN0YXJ0KTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFjdHVhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5zaG93KFwiSW1wb3J0IERhdGFzZXRzXCIsIHN0YXJ0LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2ODc4MDYxOTU3MVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY4NzgwNjE5NTQ3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRPRE86IER5YW5taWNhbGx5IHBvcHVsYXRlIGFyaWEtbGFiZWxsZWRieSBpbiB0aGlzIGFuZCBvdGhlciBwbGFjZXNcblxuZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWRpYWxvZyBtb2RhbCBoaWRkZW4nXG4gICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9J0RpYWxvZydcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgbW9kYWwtbGcnIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCcgcm9sZT0ncmVnaW9uJyBhcmlhLWxhYmVsPSdEaWFsb2cgY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+RHluYW1pYyBDb250ZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keScgc3R5bGU9J3dpZHRoOjEwMCU7IGhlaWdodDo0MDBweDsgd2hpdGUtc3BhY2U6cHJlLXdyYXAnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWZvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi13aGl0ZScgZGF0YS1kaXNtaXNzPSdtb2RhbCc+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBvYmplY3QgZm9yIHF1aWNrbHkgYW5kIGNvbnZlbmllbnRseSBnZW5lcmF0aW5nIGRpYWxvZyBib3hlcy5cbiAqIFVuZm9ydHVuYXRlbHksIHRoaXMgZG9lc24ndCBkeW5hbWljYWxseSBjcmVhdGUgbmV3IGJveGVzOyBpdCByZXVzZXMgdGhlIHNhbWUgb25lXG4gKiBvdmVyIGFuZCBvdmVyIGFnYWluLiBJdCB0dXJucyBvdXQgZHluYW1pY2FsbHkgZ2VuZXJhdGluZyBuZXcgZGlhbG9nIGJveGVzXG4gKiBpcyBhIHBhaW4hIFNvIHdlIGNhbid0IHN0YWNrIHRoZW0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeURpYWxvZ31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5RGlhbG9nKG1haW4sIHRhZykge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICB0aGlzLnRpdGxlVGFnID0gdGFnLmZpbmQoXCIubW9kYWwtdGl0bGVcIik7XG4gICAgdGhpcy5ib2R5VGFnID0gdGFnLmZpbmQoXCIubW9kYWwtYm9keVwiKTtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBleHRlcm5hbGx5IGF2YWlsYWJsZSBmdW5jdGlvbiBmb3IgcG9wcGluZyB1cCBhIGRpYWxvZ1xuICogbWVzc2FnZS4gVGhpcyBtZW51IHdpbGwgYmUgZHJhZ2dhYmxlIGJ5IGl0cyB0aXRsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHkgLSBUaGUgYm9keSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmNsb3NlIC0gQSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGRpYWxvZy5cbiAqL1xuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgb25jbG9zZSkge1xuICAgIHRoaXMudGl0bGVUYWcuaHRtbCh0aXRsZSk7XG4gICAgdGhpcy5ib2R5VGFnLmh0bWwoYm9keSk7XG4gICAgdGhpcy50YWcubW9kYWwoXCJzaG93XCIpO1xuICAgIHRoaXMudGFnLmRyYWdnYWJsZSh7XG4gICAgICAgIFwiaGFuZGxlXCI6IFwiLm1vZGFsLXRpdGxlXCJcbiAgICB9KTtcblxuICAgIHRoaXMudGFnLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChvbmNsb3NlICE9PSB1bmRlZmluZWQgJiYgb25jbG9zZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb25jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIExvYWRpbmcgQXNzaWdubWVudFwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBhc3NpZ25tZW50Ljxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBVcGRhdGluZyBTdWJtaXNzaW9uIFN0YXR1c1wiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyB5b3VyIHN1Ym1pc3Npb24gc3RhdHVzLjxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfSElTVE9SWSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEhpc3RvcnlcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB5b3VyIGhpc3RvcnkuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcbiIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTID0gW1xyXG4gICAgW1widG9vbGJveExldmVsXCIsIFwidG9vbGJveF9sZXZlbFwiLCBcIm5vcm1hbFwiLCBcInRvb2xib3hcIiwgXCJJTkNPTVBMRVRFOiBXaGF0IGxldmVsIG9mIHRvb2xib3ggdG8gcHJlc2VudCB0byB0aGUgdXNlciAoaGlkaW5nIGFuZCBzaG93aW5nIGNhdGVnb3JpZXMpLlwiXSxcclxuICAgIFtcInN0YXJ0Vmlld1wiLCBcInN0YXJ0X3ZpZXdcIiwgRGlzcGxheU1vZGVzLlNQTElULCBEaXNwbGF5TW9kZXMsIFwiVGhlIFB5dGhvbiBlZGl0b3IgbW9kZSB0byBzdGFydCBpbiB3aGVuIHRoZSBzdHVkZW50IHN0YXJ0cyB0aGUgcHJvYmxlbS5cIl0sXHJcbiAgICBbXCJkYXRhc2V0c1wiLCBcImRhdGFzZXRzXCIsIFwiXCIsIFwic3RyaW5nXCIsIFwiVGhlIGN1cnJlbnQgbGlzdCBvZiBkYXRhc2V0cyBhdmFpbGFibGUgb24gbG9hZCBhcyBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpbWVvdXRcIiwgXCJkaXNhYmxlX3RpbWVvdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgY29kZSBpcyBhbGxvd2VkIHRvIHJ1biB3aXRob3V0IHRpbWVvdXRzIChwb3RlbnRpYWxseSBhbGxvd2luZyBpbmZpbml0ZSBsb29wcykuXCJdLFxyXG4gICAgW1wiaXNQYXJzb25zXCIsIFwiaXNfcGFyc29uc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGlzIGlzIGEgcGFyc29uJ3Mgc3R5bGUgcXVlc3Rpb24gKGp1bWJsZWQpLlwiXSxcclxuICAgIFtcImRpc2FibGVGZWVkYmFja1wiLCBcImRpc2FibGVfZmVlZGJhY2tcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gbm8gaW5zdHJ1Y3RvciBzY3JpcHRzIGFyZSBydW4gKGUuZy4sIG9uX3J1biBhbmQgb25fZXZhbCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZVRpZmFcIiwgXCJkaXNhYmxlX3RpZmFcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gZG8gbm90IGF1dG9tYXRpY2FsbHkgcnVuIFRpZmEgKHdoaWNoIGNhbiBiZSBzbG93KS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVHJhY2VcIiwgXCJkaXNhYmxlX3RyYWNlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cyBjb2RlIHdpbGwgbm90IGhhdmUgaXRzIGV4ZWN1dGlvbiB0cmFjZWQgKG5vIHZhcmlhYmxlcyByZWNvcmRlZCwgbm8gY292ZXJhZ2UgdHJhY2tlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUVkaXRcIiwgXCJjYW5fZWRpdFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZWRpdGFibGUgYXQgYWxsLlwiXSxcclxuICAgIFtcImRpc2FibGVCbG9ja3NcIiwgXCJjYW5fYmxvY2tzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIC8vIFRPRE86IEZpeCB0aGlzIG9uZSB0byBiZSBzZXR0YWJsZVxyXG4gICAgW1wiaGlkZUltcG9ydFN0YXRlbWVudHNcIiwgXCJoaWRlX2ltcG9ydF9zdGF0ZW1lbnRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCBjZXJ0YWluIGtpbmRzIG9mIGltcG9ydCBzdGF0ZW1lbnRzIChtYXRwbG90bGliLCB0dXJ0bGUsIGRhdGFzZXRzKSBhcmUgbm90IHNob3duIGluIHRoZSBibG9jayBpbnRlcmZhY2UuXCJdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZSBjb3ZlcmFnZSBidXR0b24gaXMgbm90IHNob3duLlwiXSxcclxuICAgIFtcInNhdmVUdXJ0bGVPdXRwdXRcIiwgXCJzYXZlX3R1cnRsZV9vdXRwdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdHVydGxlIG91dHB1dCBpcyBzYXZlZCB3aGVuZXZlciB0aGUgcHJvZ3JhbSB1c2VzIGl0LlwiXSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgY2FuIGJlIGNvbW1lbnRlZCB1cG9uIGFuZCByZWdyYWRlZCBieSB0aGUgc3RhZmYgYWZ0ZXJ3YXJkcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcmV2aWV3ZWRcIj5TdGFydGluZyBWaWV3OjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJTcGxpdFwiLCBcImNvbHVtbnNcIiwgRGlzcGxheU1vZGVzLlNQTElUKX1cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwic3RhcnRWaWV3XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPklQIFJhbmdlczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuaXBSYW5nZXNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZSBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIElQIEFkZHJlc3NlcyB0aGF0IHdpbGwgYmUgZXhwbGljaXRseSBhbGxvd2VkLiBJZiBibGFuayxcclxuICAgICAgICAgICAgICAgICAgICB0aGVuIGFsbCBhZGRyZXNzZXMgYXJlIGFsbG93ZWQuIElmIGFuIGFkZHJlc3Mgc3RhcnRzIHdpdGggPGNvZGU+XjwvY29kZT4gdGhlbiBpdCBpdCBpcyBleHBsaWNpdGx5XHJcbiAgICAgICAgICAgICAgICAgICAgYmxhY2tsaXN0ZWQsIGJ1dCB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIGluIHR1cm4gd2l0aCBhIDxjb2RlPiE8L2NvZGU+LiBBZGRyZXNzZXMgY2FuIGFsc29cclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlIGEgYml0IG1hc2sgdG8gYWxsb3cgYSByYW5nZSBvZiBhZGRyZXNzZXMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5QcmVsb2FkZWQgRGF0YXNldHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwiZGF0YXNldHNcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke0FTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXSgpO1xyXG4gICAgICAgIC8vIE9ubHkgc3RvcmUgdGhpcyBzZXR0aW5nIGlmIGl0cyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW3NlcnZlck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCwgc2V0dGluZ3MpIHtcclxuICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgIHNldHRpbmdzID0gSlNPTi5wYXJzZShzZXR0aW5ncyk7XHJcbiAgICAgICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyTmFtZSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nc1tzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzLnN0YXJ0X3ZpZXcpIHtcclxuICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHNldHRpbmdzLnN0YXJ0X3ZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgIEFTU0lHTk1FTlRfU0VUVElOR1MuZm9yRWFjaChzZXR0aW5nID0+IHtcclxuICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdLCBkZWZhdWx0VmFsdWUgPSBzZXR0aW5nWzJdO1xyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uW3NlcnZlck5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2xpZW50TmFtZV0gPSBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnNldHRpbmdzLlwiK3NlcnZlck5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeydibG9ja3B5LXJ1bi1ydW5uaW5nJzogdWkuZXhlY3V0ZS5pc1J1bm5pbmd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnJlc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvc3Bhbj4gUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSW1wb3J0IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5pbXBvcnREYXRhc2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1jbG91ZC1kb3dubG9hZC1hbHRcIj48L3NwYW4+IEltcG9ydCBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L3NwYW4+IFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJsb2NrcHktdG9vbGJhci11cGxvYWRcIiB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJldmVudDoge2NoYW5nZTogdWkuZWRpdG9ycy51cGxvYWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlIGRyb3Bkb3duLXRvZ2dsZS1zcGxpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPSdkcm9wZG93bi1pdGVtIGJsb2NrcHktdG9vbGJhci1kb3dubG9hZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuZG93bmxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWRvd25sb2FkJz48L3NwYW4+IERvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkhpc3RvcnkgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi50b2dnbGVIaXN0b3J5TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB1aS5lZGl0b3JzLnB5dGhvbi5pc0hpc3RvcnlBdmFpbGFibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeyBhY3RpdmU6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cjogeyAnYXJpYS1wcmVzc2VkJzogZGlzcGxheS5oaXN0b3J5TW9kZSB9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1oaXN0b3J5XCI+PC9zcGFuPiBIaXN0b3J5XHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8IS0tIEZ1bGx5IGZ1bmN0aW9uYWwsIGJ1dCBhIGxpdHRsZSB0b28uLiBJbnZhc2l2ZSBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkZ1bGxzY3JlZW4gR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJ3RleHQnXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uZnVsbHNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZXhwYW5kLWFycm93cy1hbHRcIj48L3NwYW4+IEZ1bGxzY3JlZW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgLS0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiU2F2ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuU2F2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L3NwYW4+IFNhdmVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJEZWxldGUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhbkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5maWxlcy5kZWxldGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9zcGFuPiBEZWxldGVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZW5hbWUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblJlbmFtZVwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXNpZ25hdHVyZVwiPjwvc3Bhbj4gUmVuYW1lXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgICR7SElTVE9SWV9UT09MQkFSX0hUTUx9XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiXHJcbiAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5tZW51LmlzU3VibWl0dGVkXCI+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydElweW5iVG9QeXRob24oY29kZSkge1xyXG4gICAgbGV0IGlweW5iID0gSlNPTi5wYXJzZShjb2RlKTtcclxuICAgIGxldCBpc1VzYWJsZSA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAhY2VsbC5zb3VyY2VbMF0uc3RhcnRzV2l0aChcIiVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZXQgbWFrZVB5dGhvbiA9IGZ1bmN0aW9uKGNlbGwpIHtcclxuICAgICAgICBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwiY29kZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCInJydcIitjZWxsLnNvdXJjZS5qb2luKFwiXFxuXCIpK1wiJycnXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBpcHluYi5jZWxscy5maWx0ZXIoaXNVc2FibGUpLm1hcChtYWtlUHl0aG9uKS5qb2luKFwiXFxuXCIpO1xyXG59XHJcblxyXG5jbGFzcyBQeXRob25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIikpO1xyXG4gICAgICAgIHRoaXMuYm0gPSBuZXcgQmxvY2tNaXJyb3Ioe1xyXG4gICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0aGlzLnRhZ1swXSxcclxuICAgICAgICAgICAgXCJydW5cIjogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4uYmluZChtYWluLmNvbXBvbmVudHMuZW5naW5lKSxcclxuICAgICAgICAgICAgXCJza2lwU2t1bHB0XCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmxvY2tseU1lZGlhUGF0aFwiOiBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uYmxvY2tseVBhdGgsXHJcbiAgICAgICAgICAgIC8vJ2hlaWdodCc6ICcyMDAwcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1ha2VTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZ3VyZUV4dHJhQmxvY2tseSgpIHtcclxuICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5jb25maWd1cmVDb250ZXh0TWVudSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTY3JlZW5zaG90XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLlNDUkVFTlNIT1RfQkxPQ0tTXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIGxldCBvbGRGaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgaWYgKG9sZEZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShEaXNwbGF5TW9kZXMuVEVYVCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSh0aGlzLm9sZFB5dGhvbk1vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRCTUxpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJtLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmlsZW5hbWUgIT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSAoKSA9PiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmlzUGFyc29ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc0Vycm9yLnN1YnNjcmliZSgobGluZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItZXJyb3ItbGluZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNVbmNvdmVyZWQuc3Vic2NyaWJlKChsaW5lcykgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm0uc2V0SGlnaGxpZ2h0ZWRMaW5lcyhsaW5lcywgXCJlZGl0b3ItdW5jb3ZlcmVkLWxpbmVcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL3RoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLnJlbmRlcigpO1xyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgdGhpcyBkb2Vzbid0IGVuZCB1cCBsb29raW5nIHJpZ2h0IChnbyB0byBhIGRpZmZlcmVudCBlZGl0b3IsIGNvbWUgYmFjaywgYW5kIGl0J2xsIGJlIHNxdWlzaGVkKVxyXG4gICAgICAgIC8vdGhpcy5ibS5yZWZyZXNoKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJtLnJlZnJlc2goKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgaWYgKG5ld0NvbnRlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSB0aGlzLmZpbGUuaGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG1hdHRlciwgZmlsZSB3YXMgYWxyZWFkeSBzaHV0IGRvd24uXHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0NvbnRlbnRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFdlJ3JlIGNsb3NpbmcgdGhpcyBmaWxlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRDb2RlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5ibS5nZXRDb2RlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuYm0ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGluZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0TW9kZShtb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkT25seShpc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGlzUmVhZE9ubHk7XHJcbiAgICAgICAgdGhpcy5ibS5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gZXZlbnQudGFyZ2V0LmZpbGVOYW1lO1xyXG4gICAgICAgIGxldCBjb2RlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIuaXB5bmJcIikpIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuVXBsb2FkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bigpO1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBjb2RlXHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRGaWxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5kb3dubG9hZEZpbGUoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09IFwiYW5zd2VyXCIgJiYgcmVzdWx0LmV4dGVuc2lvbiA9PT0gXCIucHlcIikge1xyXG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IHNsdWdnaWZ5KHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5taW1ldHlwZSA9IFwidGV4dC94LXB5dGhvblwiO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5Eb3dubG9hZFwiLCBcIlwiLCBcIlwiLCBcIlwiLCByZXN1bHQubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQeXRob25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlB5dGhvblwiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnB5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFB5dGhvbkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogUFlUSE9OX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEFHU19FRElUT1JfSFRNTCA9IGBcclxuQ3JlYXRlIG5ld1xyXG5JbXBvcnQgYnkgbmFtZVxyXG5GaW5kIGJ5IG93bmVyL2NvdXJzZS9raW5kXHJcblxyXG5UYWdzOlxyXG4gICAgRGF0YTpcclxuICAgICAgICBOYW1lXHJcbiAgICAgICAgS2luZFxyXG4gICAgICAgIExldmVsXHJcbiAgICAgICAgVmVyc2lvblxyXG4gICAgICAgIERlc2NyaXB0aW9uXHJcbiAgICBDb250cm9sczpcclxuICAgICAgICBFZGl0XHJcbiAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgRGVsZXRlIFxyXG5gO1xyXG5cclxuY2xhc3MgVGFnc0VkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10YWdzXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3NFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRhZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiF0YWdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGFnc0VkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEFHU19FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFWFRfRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8ZGl2PlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwiYmxvY2tweS1lZGl0b3ItdGV4dFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNsYXNzIFRleHRFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0YWcuZmluZChcIi5ibG9ja3B5LWVkaXRvci10ZXh0XCIpWzBdLCB7XHJcbiAgICAgICAgICAgIHNob3dDdXJzb3JXaGVuU2VsZWN0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAgICAgZmlyc3RMaW5lTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICBpbmRlbnRVbml0OiA0LFxyXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgICAgICAgICAgXCJUYWJcIjogXCJpbmRlbnRNb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiRXNjXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtLmRpc3BsYXkuaW5wdXQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIkYxMVwiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjbS5nZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgc3VwZXIuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5jb2RlTWlycm9yLnJlZnJlc2guYmluZCh0aGlzLmNvZGVNaXJyb3IpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0VmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0RWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUZXh0XCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIudHh0XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRleHRFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRFWFRfRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogRWRpdG9ycyBhcmUgaW5mZXJyZWQgZnJvbSBGaWxlbmFtZXMuXHJcbiAqXHJcbiAqIFRoZSBlZGl0b3IgaXMgYmFzZWQgb24gdGhlIGV4dGVuc2lvbjpcclxuICogIC5ibG9ja3B5OiBTcGVjaWFsIGVkaXRvciAod2lsbCBiZSBjaG9zZW4gYnkgZmlsZW5hbWUpXHJcbiAqICAucHk6IFB5dGhvbiBFZGl0b3JcclxuICogIC5tZDogTWFya2Rvd24gRWRpdG9yXHJcbiAqICAudHh0OiBUZXh0IEVkaXRvciAoYWxzbyB1c2VkIGZvciBvdGhlciB0eXBlcylcclxuICogIC5wZW1sOiBQRU1MIEVkaXRvclxyXG4gKiAgLnBuZywgLmdpZiwgLmpwZWcsIC5qcGcsIC5ibXA6IEltYWdlIEVkaXRvclxyXG4gKiAgLmpzb246IEpTT04gRWRpdG9yXHJcbiAqICAueWFtbDogWUFNTCBFZGl0b3JcclxuICovXHJcblxyXG5pbXBvcnQge1B5dGhvbkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3B5dGhvblwiO1xyXG5pbXBvcnQge1RleHRFZGl0b3J9IGZyb20gXCIuL2VkaXRvci90ZXh0XCI7XHJcbmltcG9ydCB7QXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1RhZ3NFZGl0b3J9IGZyb20gXCIuL2VkaXRvci90YWdzXCI7XHJcbmltcG9ydCB7TWFya2Rvd25FZGl0b3J9IGZyb20gXCIuL2VkaXRvci9tYXJrZG93blwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBkaWZmZXJlbnQgcG9zc2libGUgZWRpdG9ycyBhdmFpbGFibGVcclxuICogQGVudW0ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBsZXQgRWRpdG9yc0VudW0gPSB7XHJcbiAgICBTVUJNSVNTSU9OOiBcInN1Ym1pc3Npb25cIixcclxuICAgIEFTU0lHTk1FTlQ6IFwiYXNzaWdubWVudFwiLFxyXG4gICAgSU5TVFJVQ1RJT05TOiBcImluc3RydWN0aW9uc1wiLFxyXG4gICAgT05fUlVOOiBcIm9uX3J1blwiLFxyXG4gICAgT05fQ0hBTkdFOiBcIm9uX2NoYW5nZVwiLFxyXG4gICAgT05fRVZBTDogXCJvbl9ldmFsXCIsXHJcbiAgICBTVEFSVElOR19DT0RFOiBcInN0YXJ0aW5nX2NvZGVcIixcclxuICAgIFNBTVBMRV9TVUJNSVNTSU9OUzogXCJzYW1wbGVfc3VibWlzc2lvbnNcIixcclxuICAgIElOU1RSVUNUT1JfRklMRTogXCJpbnN0cnVjdG9yX2ZpbGVcIlxyXG59O1xyXG5cclxuY29uc3QgU1BFQ0lBTF9OQU1FU1BBQ0VTID0gW1wiIVwiLCBcIl5cIiwgXCI/XCIsIFwiJFwiXTtcclxuXHJcbmNvbnN0IEFWQUlMQUJMRV9FRElUT1JTID0gW1xyXG4gICAgVGV4dEVkaXRvciwgUHl0aG9uRWRpdG9yLCBBc3NpZ25tZW50U2V0dGluZ3MsIFRhZ3NFZGl0b3IsIE1hcmtkb3duRWRpdG9yXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgRURJVE9SU19IVE1MID0gQVZBSUxBQkxFX0VESVRPUlMubWFwKGVkaXRvciA9PlxyXG4gICAgYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1lZGl0b3JcIj5cclxuICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy52aWV3KCkubmFtZSA9PT0gJyR7ZWRpdG9yLm5hbWV9J1wiPlxyXG4gICAgJHtlZGl0b3IudGVtcGxhdGV9ICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gXHJcbiAgICAvKlxyXG4gICAgYFxyXG48IS0tIGtvIGlmOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nIC0tPlxyXG4ke2VkaXRvci50ZW1wbGF0ZX1cclxuPCEtLSAva28gLS0+YCovXHJcbikuam9pbihcIlxcblwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JzIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRfID0gW107XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb25zXyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnlOYW1lXyA9IHt9O1xyXG4gICAgICAgIEFWQUlMQUJMRV9FRElUT1JTLmZvckVhY2goZWRpdG9yID0+IHRoaXMucmVnaXN0ZXJFZGl0b3IoZWRpdG9yKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUuc3Vic2NyaWJlKHRoaXMuY2hhbmdlRWRpdG9yLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVkaXRvcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGV4dGVuc2lvbnMgPSBkYXRhLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGRhdGEuY29uc3RydWN0b3IodGhpcy5tYWluLCB0aGlzLnRhZyk7XHJcbiAgICAgICAgaW5zdGFuY2UubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRfLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuYnlOYW1lX1tkYXRhLm5hbWUudG9Mb3dlckNhc2UoKV0gPSBpbnN0YW5jZTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uc19bZXh0ZW5zaW9uc1tpXV0gPSBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnlOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ieU5hbWVfW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRWRpdG9yKG5ld0ZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9sZEVkaXRvciA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICBsZXQgbmV3RWRpdG9yID0gdGhpcy5nZXRFZGl0b3IobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvbGRFZGl0b3IuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdFZGl0b3I7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50LmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXJzZUZpbGVuYW1lKHBhdGgpIHtcclxuICAgICAgICBsZXQgc3BhY2UgPSBwYXRoLmNoYXJBdCgwKTtcclxuICAgICAgICBpZiAoU1BFQ0lBTF9OQU1FU1BBQ0VTLmluZGV4T2Yoc3BhY2UpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BhY2UgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmFtZSA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICBsZXQgdHlwZSA9IHBhdGguc3Vic3RyKHBhdGgubGFzdEluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICByZXR1cm4ge1wic3BhY2VcIjogc3BhY2UsIFwibmFtZVwiOiBuYW1lLCBcInR5cGVcIjogdHlwZX07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdG9yKHBhdGgpIHtcclxuICAgICAgICBsZXQge3NwYWNlLCBuYW1lLCB0eXBlfSA9IEVkaXRvcnMucGFyc2VGaWxlbmFtZShwYXRoKTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCIuYmxvY2tweVwiICYmIHBhdGggaW4gdGhpcy5leHRlbnNpb25zXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zX1twYXRoXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgaW4gdGhpcy5leHRlbnNpb25zXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHRlbnNpb25zX1t0eXBlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkX1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4vc2VydmVyXCI7XG5pbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3J1blwiO1xuaW1wb3J0IHtSdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvcnVuXCI7XG5pbXBvcnQge0V2YWxDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvZXZhbFwiO1xuaW1wb3J0IHtTYW1wbGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvc2FtcGxlXCI7XG5pbXBvcnQge09uQ2hhbmdlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX2NoYW5nZVwiO1xuaW1wb3J0IHtPbkV2YWxDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fZXZhbFwiO1xuaW1wb3J0IHtPblNhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9zYW1wbGVcIjtcblxuLyoqXG4gKiBBbiBvYmplY3QgZm9yIGV4ZWN1dGluZyBQeXRob24gY29kZSBhbmQgcGFzc2luZyB0aGUgcmVzdWx0cyBhbG9uZyB0byBpbnRlcmVzdGVkIGNvbXBvbmVudHMuXG4gKlxuICogSW50ZXJlc3RpbmcgY29tcG9uZW50czpcbiAqICBFeGVjdXRpb24gQnVmZmVyOiBSZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyB0aGUgdHJhY2UgZHVyaW5nIHByb2dyYW0gZXhlY3V0aW9uLlxuICogICAgICAgICAgICAgICAgICAgIFRoaXMgcHJldmVudHMgS25vY2tvdXRqcyBmcm9tIHVwZGF0aW5nIHRoZSBlZGl0b3IgZHVyaW5nIGV4ZWN1dGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RWRpdG9yfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2NrUHlFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy5leGVjdXRpb25Nb2RlbCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucyA9IHtcbiAgICAgICAgICAgIHJ1bjogbmV3IFJ1bkNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBldmFsOiBuZXcgRXZhbENvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvblJ1bjogbmV3IE9uUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBuZXcgT25DaGFuZ2VDb25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25FdmFsOiBuZXcgT25FdmFsQ29uZmlndXJhdGlvbihtYWluKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByZWNvbmZpZ3VyZSBza3VscHQgc28gd2UgY2FuIHBhcnNlXG4gICAgICAgIFNrLmNvbmZpZ3VyZSh0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi5nZXRTa3VscHRPcHRpb25zKCkpO1xuXG4gICAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSB0cmFjaW5nIHdoaWxlIHRoZSBwcm9ncmFtIGlzIGV4ZWN1dGluZ1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbkJ1ZmZlciA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmFibGUgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gZXhlY3V0aW9uIGhhcyBmdWxseSBlbmRlZCxcbiAgICAgICAgICogd2hldGhlciBpdCBzdWNjZWVkcyBvciBmYWlscy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbiA9IG51bGw7XG4gICAgICAgIHRoaXMub25FeGVjdXRpb25FbmQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHJlcG9ydHNcbiAgICAgKi9cbiAgICByZXNldFJlcG9ydHMoKSB7XG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLmV4ZWN1dGlvbk1vZGVsLnJlcG9ydHM7XG4gICAgICAgIHJlcG9ydFtcInZlcmlmaWVyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wibW9kZWxcIl0gPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgfTtcblxuICAgIHJlc2V0U3R1ZGVudE1vZGVsKCkge1xuICAgICAgICBsZXQgc3R1ZGVudCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwuc3R1ZGVudDtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50U3RlcChudWxsKTtcbiAgICAgICAgc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xuICAgICAgICBzdHVkZW50Lmxhc3RTdGVwKDApO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRMaW5lKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZURhdGEucmVtb3ZlQWxsKCk7XG4gICAgICAgIHN0dWRlbnQucmVzdWx0cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXRFeGVjdXRpb25CdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge1xuICAgICAgICAgICAgXCJ0cmFjZVwiOiBbXSxcbiAgICAgICAgICAgIFwic3RlcFwiOiAwLFxuICAgICAgICAgICAgXCJsaW5lXCI6IDAsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgaW50ZXJmYWNlIGFzcGVjdHMgb2YgdGhlIHByZXZpb3VzIFJ1bi5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gVE9ETzogQ2xlYXIgb3V0IGFueSBjb3ZlcmFnZS90cmFjZS9lcnJvciBoaWdobGlnaHRzIGluIGVkaXRvcnNcbiAgICAgICAgLy8gUmVzZXQgZXhlY3V0aW9uIGluIG1vZGVsXG4gICAgICAgIHRoaXMucmVzZXRTdHVkZW50TW9kZWwoKTtcbiAgICAgICAgLy8gR2V0IHJlcG9ydHMgcmVhZHlcbiAgICAgICAgdGhpcy5yZXNldFJlcG9ydHMoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBleGVjdXRpb24gYnVmZmVyXG4gICAgICAgIHRoaXMucmVzZXRFeGVjdXRpb25CdWZmZXIoKTtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBjb25zb2xlIG9mIHByaW50ZWQgc3R1ZmZcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5jbGVhcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgYW55IG9sZCBmZWVkYmFja1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5jbGVhcigpO1xuICAgIH1cblxuICAgIGRlbGF5ZWRSdW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSwgMSk7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLnJ1bi51c2UodGhpcyk7XG4gICAgICAgIGxldCBleGVjdXRpb24gPSB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICk7XG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUZlZWRiYWNrKCkpIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25SdW4uYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLmNvbmZpZ3VyYXRpb24uc2hvd0Vycm9ycy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SdW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25SdW4udXNlKHRoaXMpO1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKS50aGVuKFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICkudGhlbih0aGlzLmV4ZWN1dGlvbkVuZF8uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgbGV0IGV2YWx1YXRpb25JbnB1dCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuZXZhbHVhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coZXZhbHVhdGlvbklucHV0KTtcbiAgICAgICAgZXZhbHVhdGlvbklucHV0LnRoZW4oKHVzZXJJbnB1dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5ldmFsLnVzZSh0aGlzLCB1c2VySW5wdXQpO1xuICAgICAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN1Y2Nlc3MuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZUZlZWRiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLm9uRXZhbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5jb25maWd1cmF0aW9uLnNob3dFcnJvcnMuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FdmFsKCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLm9uRXZhbC51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXZhbHVhdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25DaGFuZ2UudXNlKHRoaXMpO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgcmV0dXJuIFNrLm1pc2NldmFsLmFzeW5jVG9Qcm9taXNlKCgpID0+XG4gICAgICAgICAgICBTay5pbXBvcnRNYWluV2l0aEJvZHkodGhpcy5jb25maWd1cmF0aW9uLmZpbGVuYW1lLCBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY29kZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZWQgd2hlbmV2ZXIgdGhlIFB5dGhvbiBjb2RlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBvbl9jaGFuZ2UoKSB7XG4gICAgICAgIGxldCBGSUxFTkFNRSA9IFwib25fY2hhbmdlXCI7XG4gICAgICAgIC8vIFNraXAgaWYgdGhlIGluc3RydWN0b3IgaGFzIG5vdCBkZWZpbmVkIGFueXRoaW5nXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLnByb2dyYW1zW0ZJTEVOQU1FXSgpLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3RhdHVzKFwiY2hhbmdpbmdcIik7XG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlQ29kZSgpO1xuICAgICAgICAvLyBPbiBzdGVwIGRvZXMgbm90IHBlcmZvcm0gcGFyc2UgYW5hbHlzaXMgYnkgZGVmYXVsdCBvciBydW4gc3R1ZGVudCBjb2RlXG4gICAgICAgIGxldCBlbmdpbmUgPSB0aGlzO1xuICAgICAgICBsZXQgZmVlZGJhY2sgPSB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjaztcbiAgICAgICAgZW5naW5lLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICBlbmdpbmUudmVyaWZ5Q29kZSgpO1xuICAgICAgICBlbmdpbmUudXBkYXRlUGFyc2UoKTtcbiAgICAgICAgZW5naW5lLnJ1bkluc3RydWN0b3JDb2RlKEZJTEVOQU1FLCB0cnVlLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgLy8gU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgc2hvdyB1bmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXNcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MgJiZcbiAgICAgICAgICAgICAgICAgICAgIShjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbmdpbmUubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhtb2R1bGUuJGQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZW5naW5lXCIsIFwib25fY2hhbmdlXCIpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYXR0ZW1wdCB0byBjYWxsIHRoZSBkZWZpbmVkIG9uRXhlY3V0aW9uRW5kLFxuICAgICAqIGJ1dCB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlcmUgaXMgbm8gZnVuY3Rpb24gZGVmaW5lZC5cbiAgICAgKi9cbiAgICBleGVjdXRpb25FbmRfKCkge1xuICAgICAgICBpZiAodGhpcy5vbkV4ZWN1dGlvbkVuZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBleGVjdXRpb25CZWdpbl8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uQmVnaW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRpb25CZWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9NT0RVTEUgPSBcImxldCAkYnVpbHRpbm1vZHVsZSA9IGZ1bmN0aW9uKG1vZCl7IHJldHVybiBtb2Q7IH1cIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBmb3IgaG9sZGluZyBzZXR0aW5ncyBvZiBhIHBhcnRpY3VsYXIgcnVuIGNvbmZpZ3VyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgLy8gQWNjZXNzIHBvaW50IGZvciBpbnN0cnVjdG9yIGRhdGFcclxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIFNrLmNvbnNvbGUgPSB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlO1xyXG4gICAgICAgIFNrLnF1ZXVlZElucHV0ID0gW107XHJcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuZ2V0U2t1bHB0T3B0aW9ucygpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTa3VscHRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIF9fZnV0dXJlX186IFNrLnB5dGhvbjMsXHJcbiAgICAgICAgICAgIC8vIGltcG9ydFxyXG4gICAgICAgICAgICByZWFkOiB0aGlzLmltcG9ydEZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gb3BlblxyXG4gICAgICAgICAgICBmaWxlb3BlbjogdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBmaWxlLndyaXRlXHJcbiAgICAgICAgICAgIGZpbGV3cml0ZTogdGhpcy53cml0ZUZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gcHJpbnRcclxuICAgICAgICAgICAgb3V0cHV0OiB0aGlzLnByaW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnRzIHJlYWRpbmcgSFRNTCBlbGVtZW50cyBhcyBmaWxlc1xyXG4gICAgICAgICAgICBpbkJyb3dzZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBpbnB1dFxyXG4gICAgICAgICAgICBpbnB1dGZ1bjogdGhpcy5pbnB1dC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBpbnB1dGZ1blRha2VzUHJvbXB0OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBNZWRpYSBJbWFnZSBQcm94eSBVUkxcclxuICAgICAgICAgICAgaW1hZ2VQcm94eTogdGhpcy5nZXRJbWFnZVByb3h5LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRvIGtlZXAgdGhlIGdsb2JhbHNcclxuICAgICAgICAgICAgcmV0YWluR2xvYmFsczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VkIHRvIGFjY2VzcyBTa3VscHQgYnVpbHQtaW5zLiBUaGlzIGlzIHByZXR0eSBnZW5lcmljLCB0YWtlblxyXG4gICAgICogYWxtb3N0IGRpcmVjdGx5IGZyb20gdGhlIFNrdWxwdCBkb2NzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSBweXRob24gZmlsZW5hbWUgKGUuZy4sIFwib3NcIiBvciBcInBwcmludFwiKSB0aGF0IHdpbGwgYmUgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIEphdmFTY3JpcHQgc291cmNlIGNvZGUgb2YgdGhlIGZpbGUgKHdlaXJkLCByaWdodD8pXHJcbiAgICAgKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgaXNuJ3QgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIGltcG9ydEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfTtcclxuXHJcbiAgICBvcGVuRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZSgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5wcmludCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBtZXRob2QhXCIpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5wdXRNb2NrRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKFNrLnF1ZXVlZElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRJbWFnZVByb3h5KCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNGb3JiaWRkZW4oZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBzdWNjZXNzIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWJzdHJhY3QgZmFpbHVyZSBleGVjdXRpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZHVtbXlPdXRTYW5kYm94KCkge1xyXG4gICAgICAgIC8vU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi9wZWRhbC9zYW5kYm94L3NhbmRib3gucHlcIl0gPSBcImNsYXNzIFNhbmRib3g6IHBhc3NcXG5kZWYgcnVuKCk6IHBhc3NcXG5kZWYgcmVzZXQoKTogcGFzc1xcblwiO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuLi90cmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSwgY29kZSkge1xyXG4gICAgICAgIC8vIFRPRE86IGZpeCB0byBiZSBjdXJyZW50bHkgYWRkZWQgbGluZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJfID0gXCIgKyBjb2RlO1xyXG4gICAgICAgIFNrLmFmdGVyU2luZ2xlRXhlY3V0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSB0cnVlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscygpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuQWRkXCIsIFwiXCIsIFwiXCIsIGNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCB0aGlzLmNvZGUsIFwiZXZhbHVhdGlvbnNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1FdmFsdWF0ZS5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiZXZhbHVhdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50VmFsdWUoU2suZmZpLnJlbWFwVG9Kcyhtb2R1bGUuJGQuXy4kcigpKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy90aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0LFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IHRoaXMuY29kZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZXZhbHVhdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zLmpzXCI7XHJcbmltcG9ydCB7JHNrX21vZF9pbnN0cnVjdG9yfSBmcm9tIFwiLi4vc2tfbW9kX2luc3RydWN0b3JcIjtcclxuXHJcbmNvbnN0IFVUSUxJVFlfTU9EVUxFX0NPREUgPSBcInZhciAkYnVpbHRpbm1vZHVsZSA9IFwiICsgJHNrX21vZF9pbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBJbnN0cnVjdG9ycyBoYXZlIG5vIGxpbWl0c1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG4gICAgICAgIC8vIE11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKHRydWUpO1xyXG4gICAgICAgIC8vIERpc2FibGUgaW5wdXQgYm94XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICAvLyBUT0RPIFNrLmlucHV0ZnVuID0gQmxvY2tQeUVuZ2luZS5pbnB1dE1vY2tGdW5jdGlvbjtcclxuICAgICAgICAvLyBUT0RPOiBBbGxvdyBpbnB1dCBmdW5jdGlvbiB0byBkaXNhYmxlIHRoZSB0aW1lciwgc29tZWhvd1xyXG4gICAgICAgIC8vIEVuYWJsZSB1dGlsaXR5IG1vZGVcclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBVVElMSVRZX01PRFVMRV9DT0RFO1xyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZW5hbWUgPT09IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpIHx8IFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiQXBwbGVQaWVcIjtcclxuICAgICAgICByZXR1cm4gU2sucXVldWVkSW5wdXQucG9wKCk7XHJcbiAgICAgICAgLypyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShTay5xdWV1ZWRJbnB1dC5wb3AoKSk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0luc3RydWN0b3JDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9pbnN0cnVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25DaGFuZ2VDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX2NoYW5nZS5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS50cmlnZ2VyT25DaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge05FV19MSU5FX1JFR0VYfSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuaW1wb3J0IHtpbmRlbnR9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwiTm9uZVwiKSk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSlcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gZ2V0X3N0dWRlbnRfZGF0YSgpXHJcbmNvbXBhdGliaWxpdHkuc2V0X3NhbmRib3goc3R1ZGVudClcclxuZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG5jb21wYXRpYmlsaXR5LnJhaXNlX2V4Y2VwdGlvbihlcnJvciwgcG9zaXRpb24pXHJcbmNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnQgPSBydW5fc3R1ZGVudFxyXG5jb21wYXRpYmlsaXR5LmdldF9wbG90cyA9IGdldF9wbG90c1xyXG5jb21wYXRpYmlsaXR5LmdldF9vdXRwdXQgPSBnZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0ID0gcmVzZXRfb3V0cHV0XHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5kZWYgY2FwdHVyZV9vdXRwdXQoZnVuYywgKmFyZ3MpOlxyXG4gICByZXNldF9vdXRwdXQoKVxyXG4gICBmdW5jKCphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbmA7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgT25FdmFsQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ldmFsXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQuZXZhbHVhdGlvbiB8fCBcIk5vbmVcIjtcclxuICAgICAgICB0aGlzLmR1bW15T3V0U2FuZGJveCgpO1xyXG4gICAgICAgIGxldCBpbnN0cnVjdG9yQ29kZSA9IHRoaXMuY29kZTtcclxuICAgICAgICBsZXQgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGRpc2FibGVUaWZhLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ldmFsLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICAvL1NrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuICAgICAgICBTay5nbG9iYWxzID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX2V2YWwuJGQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kdWxlLiRkKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4oMS4wLCBzY29yZSkpO1xyXG4gICAgICAgIGxldCBvbGRTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfTElORV9SRUdFWCA9IC9cXHJcXG58XFxyfFxcbi87XHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgV1JBUF9JTlNUUlVDVE9SX0NPREUgPSBmdW5jdGlvbiAoc3R1ZGVudENvZGUsIGluc3RydWN0b3JDb2RlLCBxdWljaywgaXNTYWZlKSB7XHJcbiAgICBsZXQgc2FmZUNvZGUgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50Q29kZSk7XHJcbiAgICBsZXQgaW5kZW50ZWRDb2RlID0gaW5kZW50KGluZGVudChpc1NhZmUgPyBzdHVkZW50Q29kZSA6IFwicGFzc1wiKSk7XHJcbiAgICBsZXQgdGlmYUFuYWx5c2lzID0gXCJcIjtcclxuICAgIGlmICghcXVpY2spIHtcclxuICAgICAgICB0aWZhQW5hbHlzaXMgPSBcImZyb20gcGVkYWwudGlmYSBpbXBvcnQgdGlmYV9hbmFseXNpc1xcbnRpZmFfYW5hbHlzaXMoRmFsc2UpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSwgXCJhbnN3ZXIucHlcIilcclxuZGVmIHJ1bl9zdHVkZW50KCk6XHJcbiAgICAjIGxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgIHRyeTpcclxuJHtpbmRlbnRlZENvZGV9XHJcbiAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGVycm9yOlxyXG4gICAgICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICAjIHVubGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgcmV0dXJuIE5vbmVcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveC5zYW5kYm94IGltcG9ydCBTYW5kYm94XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IE1BSU5fUkVQT1JUWydzYW5kYm94J11bJ3J1biddID0gU2FuZGJveCgpXHJcbiNzdHVkZW50LnJ1bihNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2NvZGUnXSwgTUFJTl9SRVBPUlRbJ3NvdXJjZSddWydmaWxlbmFtZSddLCByZXBvcnRfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2RlYnVnKHN0dWRlbnQpXHJcbnN0dWRlbnQucmVwb3J0X2V4Y2VwdGlvbnNfbW9kZSA9IFRydWVcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudChyYWlzZV9leGNlcHRpb25zPUZhbHNlKVxyXG4jbG9nKHN0dWRlbnQuZGF0YSlcclxuI3N0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuI2Vycm9yLCBwb3NpdGlvbiA9IGdldF9zdHVkZW50X2Vycm9yKClcclxuI2NvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxucnVuX3N0dWRlbnQgPSBjb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50XHJcbnJlc2V0X291dHB1dCA9IGNvbXBhdGliaWxpdHkucmVzZXRfb3V0cHV0XHJcbnF1ZXVlX2lucHV0ID0gY29tcGF0aWJpbGl0eS5xdWV1ZV9pbnB1dFxyXG5nZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5nZXRfb3V0cHV0XHJcbmdldF9wbG90cyA9IGNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkudHJhY2VfbGluZXMgPSB0cmFjZV9saW5lc1xyXG5mcm9tIHBlZGFsIGltcG9ydCBxdWVzdGlvbnNcclxucXVlc3Rpb25zLnNob3dfcXVlc3Rpb24gPSBzZXRfaW5zdHJ1Y3Rpb25zXHJcbiMgVE9ETzogUmVtb3ZlIHRoZSBuZWVkIGZvciB0aGlzIGhhY2shXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIHN0dWRlbnQuY2FsbChmdW5jLl9fbmFtZV9fLCAqYXJncylcclxuICAgcmV0dXJuIGdldF9vdXRwdXQoKVxyXG5jb21wYXRpYmlsaXR5LmNhcHR1cmVfb3V0cHV0ID0gY2FwdHVyZV9vdXRwdXRcclxuXHJcbmZyb20gcGVkYWwuY2FpdC5jYWl0X2FwaSBpbXBvcnQgcGFyc2VfcHJvZ3JhbVxyXG4ke2luc3RydWN0b3JDb2RlfVxyXG5mcm9tIHBlZGFsLnJlc29sdmVycyBpbXBvcnQgc2ltcGxlXHJcblNVQ0NFU1MsIFNDT1JFLCBDQVRFR09SWSwgTEFCRUwsIE1FU1NBR0UsIERBVEEsIEhJREUgPSBzaW1wbGUucmVzb2x2ZSgpXHJcbiNsb2coTUFJTl9SRVBPUlQpXHJcbiNwcmludChNQUlOX1JFUE9SVC5mZWVkYmFja1swXS5taXN0YWtlWydlcnJvciddKVxyXG5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIEluc3RydWN0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJfaW5zdHJ1Y3Rvci5vbl9ydW5cIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5kdW1teU91dFNhbmRib3goKTtcclxuICAgICAgICBsZXQgaW5zdHJ1Y3RvckNvZGUgPSB0aGlzLmNvZGU7XHJcbiAgICAgICAgbGV0IGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcG9ydFtcInBhcnNlclwiXSk7XHJcbiAgICAgICAgbGV0IGlzU2FmZSA9ICFyZXBvcnRbXCJwYXJzZXJcIl0uZW1wdHkgJiYgcmVwb3J0W1widmVyaWZpZXJcIl0uc3VjY2VzcztcclxuICAgICAgICBpbnN0cnVjdG9yQ29kZSA9IFdSQVBfSU5TVFJVQ1RPUl9DT0RFKHN0dWRlbnRDb2RlU2FmZSwgaW5zdHJ1Y3RvckNvZGUsIGRpc2FibGVUaWZhLCBpc1NhZmUpO1xyXG4gICAgICAgIGxpbmVPZmZzZXQgPSBpbnN0cnVjdG9yQ29kZS5zcGxpdChORVdfTElORV9SRUdFWCkubGVuZ3RoIC0gbGluZU9mZnNldCAtIDQ7XHJcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHtcclxuICAgICAgICAgICAgXCJjb21wbGltZW50c1wiOiBbXSxcclxuICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBpbnN0cnVjdG9yQ29kZSxcclxuICAgICAgICAgICAgXCJsaW5lT2Zmc2V0XCI6IGxpbmVPZmZzZXRcclxuICAgICAgICAgICAgLy8nY29tcGxldGUnOiBmYWxzZSAvLyBBY3R1YWxseSwgbGV0J3MgdXNlIHVuZGVmaW5lZCBmb3Igbm93LlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29kZSA9IGluc3RydWN0b3JDb2RlO1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBMb2dnaW5nISEhIVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICAvLyBUT0RPOiBBY3R1YWxseSBwYXJzZSByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5pbnN0cnVjdG9yLmdsb2JhbHMgPSBTay5nbG9iYWxzO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IG1vZHVsZS4kZC5vbl9ydW4uJGQ7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TVUNDRVNTKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Y2Nlc3MgfHwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpKTtcclxuICAgICAgICAvLyBDYW5ub3QgZXhjZWVkIDEgcG9pbnQsIGNhbm5vdCBnbyBiZWxvdyAwIHBvaW50c1xyXG4gICAgICAgIGxldCBzY29yZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5TQ09SRSk7XHJcbiAgICAgICAgc2NvcmUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25SdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIkdyYWNlZnVsRXhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJjb2RlXCJdKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJlcnJvclwiXSA9IGVycm9yO1xyXG4gICAgICAgICAgICAvL1RPRE86IHJlcG9ydFtcImluc3RydWN0b3JcIl1bXCJsaW5lX29mZnNldFwiXSA9IGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogYWZ0ZXIoZXJyb3IpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPblJ1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL29uX3J1blwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIE9uUnVuQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fcnVuLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSdW5Db25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShcIlJ1bm5pbmcuLi5cIik7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlRmlsZShcImFuc3dlci5weVwiLCB0aGlzLmNvZGUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcblxyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG5cclxuICAgICAgICBlbmdpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0c1tcInZlcmlmaWVyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogQm9vbGVhbih0aGlzLmNvZGUudHJpbSgpKSxcclxuICAgICAgICAgICAgXCJjb2RlXCI6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5maW5pc2hUdXJ0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoU2suZ2xvYmFscyk7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQucmVzdWx0cyA9IG1vZHVsZTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuYmVnaW5FdmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmIChyZXBvcnQucGFyc2VyLnN1Y2Nlc3MgJiYgcmVwb3J0LnZlcmlmaWVyLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlByb2dyYW1FcnJvck91dHB1dFwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1N0dWRlbnRDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBUT0RPOiBGaXggdG8gYmUgdGhlIGN1cnJlbnQgc2FtcGxlIHN1Ym1pc3Npb25cclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXIucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcInByaW50KCdOb3QgcmVhZHkgeWV0IScpXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDb25maWd1cmF0aW9uLCBFTVBUWV9NT0RVTEV9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICAvLyBMaW1pdCBleGVjdXRpb24gdG8gNSBzZWNvbmRzXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5tYWluLm1vZGVsLnNldHRpbmdzO1xyXG4gICAgICAgIFNrLmV4ZWNMaW1pdEZ1bmN0aW9uID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpbWVvdXQoKSA/IEluZmluaXR5IDogMTAwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG4gICAgICAgIC8vIFByb3h5IHJlcXVlc3RzXHJcbiAgICAgICAgU2sucmVxdWVzdHNHZXQgPSAoZmlsZW5hbWUpID0+IHRoaXMub3BlblVSTChmaWxlbmFtZSwgXCJ1cmxcIik7XHJcblxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRm9yYmlkZGVuKGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGFjY2Vzc2libGU6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL2Fuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTay5idWlsdGluRmlsZXMgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkZpbGUgbm90IGZvdW5kOiAnXCIgKyBmaWxlbmFtZSArIFwiJ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5pbnB1dChwcm9tcHRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi91dGlsaXR5L1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwic3JjL2xpYi9wZWRhbC9cIikgfHxcclxuICAgICAgICAgICAgZmlsZW5hbWUuc3RhcnRzV2l0aChcIi4vX2luc3RydWN0b3IvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJTdGVwc1wiIHRoZSBleGVjdXRpb24gb2YgdGhlIGNvZGUsIG1lYW50IHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayB0byB0aGUgU2t1bHB0XHJcbiAgICAgKiBlbnZpcm9ubWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFyaWFibGVzIC0gSGFzaCB0aGF0IG1hcHMgdGhlIG5hbWVzIG9mIHZhcmlhYmxlcyAoU3RyaW5ncykgdG8gdGhlaXIgU2t1bHB0IHJlcHJlc2VudGF0aW9uLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVOdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBsaW5lIG51bWJlciBpbiB0aGUgc291cmNlIGNvZGUgdGhhdCBpcyBiZWluZyBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW5OdW1iZXIgLSBUaGUgY29ycmVzcG9uZGluZyBjb2x1bW4gbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaW5rIG9mIGl0IGFzIHRoZSBcIlhcIiBwb3NpdGlvbiB0byB0aGUgbGluZU51bWJlcidzIFwiWVwiIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHB5dGhvbiBmaWxlIGJlaW5nIGV4ZWN1dGVkIChlLmcuLCBcIl9fbWFpbl9fLnB5XCIpLlxyXG4gICAgICovXHJcbiAgICBzdGVwKHZhcmlhYmxlcywgbG9jYWxzLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwO1xyXG4gICAgICAgICAgICBsZXQgZ2xvYmFscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyh2YXJpYWJsZXMpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBUcmFjZSBsb2NhbCB2YXJpYWJsZXMgcHJvcGVybHlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhnbG9iYWxzLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL2xldCBsb2NhbHMgPSB0aGlzLm1haW4uY29tcG9uZW50cy50cmFjZS5wYXJzZUdsb2JhbHMobG9jYWxzKTtcclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwic3RlcFwiOiBjdXJyZW50U3RlcCxcclxuICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAvLydibG9jayc6IGhpZ2hsaWdodE1hcFtsaW5lTnVtYmVyLTFdLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lXCI6IGxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbHVtblwiOiBjb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjogZ2xvYmFscy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGdsb2JhbHMubW9kdWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAgPSBjdXJyZW50U3RlcCArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lID0gbGluZU51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlIFNrdWxwdCBleGVjdXRpb24gdG8gdGVybWluYXRlIHRoZSBleGVjdXRpb25CdWZmZXJcclxuICAgICAqIGFuZCBoYW5kIGl0IG9mZiB0byB0aGUgZXhlY3V0aW9uIHRyYWNlIGluIHRoZSBtb2RlbC5cclxuICAgICAqL1xyXG4gICAgbGFzdFN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb247XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RMaW5lKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0TGluZXMoYXN0KSB7XHJcbiAgICAgICAgbGV0IHZpc2l0ZWRMaW5lcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgdmlzaXRCb2R5ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubGluZW5vICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZpc2l0ZWRMaW5lcy5hZGQobm9kZS5saW5lbm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS5vcmVsc2UpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUub3JlbHNlLmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLmZpbmFsYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5maW5hbGJvZHkuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZpc2l0Qm9keShhc3QpO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHZpc2l0ZWRMaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhhdCB0aGUgcGFyc2UgaW5mb3JtYXRpb24gaXMgdXAtdG8tZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQYXJzZSgpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIC8vIEhvbGQgYWxsIHRoZSBhY3R1YWxseSBkaXNjb3ZlcmVkIGxpbmVzIGZyb20gdGhlIHBhcnNlXHJcbiAgICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgICAgLy8gQXR0ZW1wdCBhIHBhcnNlXHJcbiAgICAgICAgbGV0IGFzdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2UgPSBTay5wYXJzZSh0aGlzLmZpbGVuYW1lLCB0aGlzLmNvZGUpO1xyXG4gICAgICAgICAgICBhc3QgPSBTay5hc3RGcm9tUGFyc2UocGFyc2UuY3N0LCB0aGlzLmZpbGVuYW1lLCBwYXJzZS5mbGFncyk7XHJcbiAgICAgICAgICAgIGxpbmVzID0gdGhpcy5nZXRMaW5lcyhhc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFJlcG9ydCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3VjY2Vzc2Z1bCBwYXJzZVxyXG4gICAgICAgIHJlcG9ydFtcInBhcnNlclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYXN0XCI6IGFzdCxcclxuICAgICAgICAgICAgXCJlbXB0eVwiOiBhc3QuYm9keS5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgICAgIFwibGluZXNcIjogbGluZXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFcnJvcnMoKSB7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoIXJlcG9ydFtcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50UnVuRXJyb3IocmVwb3J0LnN0dWRlbnQuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBsZXQgRkVFREJBQ0tfSFRNTCA9IGBcblxuPHNwYW4gY2xhc3M9J2Jsb2NrcHktZmxvYXRpbmctZmVlZGJhY2sgdGV4dC1tdXRlZC1sZXNzIHB1bGwtcmlnaHQgcG9zaXRpb24tc3RpY2t5IHN0aWNreS10b3AnXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtbGFiZWw9XCJOZXcgRmVlZGJhY2sgQWxlcnRcIj5cbiAgICBOZXcgZmVlZGJhY2sgJnVhcnI7XG48L3NwYW4+XG5cbjxkaXYgY2xhc3M9J2Jsb2NrcHktZmVlZGJhY2sgY29sLW1kLTYgYmxvY2tweS1wYW5lbCdcbiAgICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiRmVlZGJhY2tcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCI+XG5cbiAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCdcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVpLnNlY29uZFJvdy5zd2l0Y2hMYWJlbFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDwhLS0gQWN0dWFsIEZlZWRiYWNrIFJlZ2lvbiAtLT4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz5GZWVkYmFjazogPC9zdHJvbmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdiYWRnZSBibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5IGZlZWRiYWNrLWJhZGdlJ1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB1aS5mZWVkYmFjay5iYWRnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdWkuZmVlZGJhY2suY2F0ZWdvcnlcIj5GZWVkYmFjayBLaW5kPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGV5IGNoYW5nZSB0aGUgc3R1ZGVudCBleHRyYSBmaWxlcywgYWxzbyB1cGRhdGUgdGhlIGRpcnR5IGZsYWdcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdG9wX29mX2VsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3A7XG4gICAgICAgIGxldCBib3R0b21fb2ZfZWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcCArIHRoaXMudGFnLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGxldCBib3R0b21fb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICBsZXQgdG9wX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy9ib3R0b21fb2ZfZWxlbWVudCAtPSA0MDsgLy8gVXNlciBmcmllbmRseSBwYWRkaW5nXG4gICAgICAgIHJldHVybiAoKGJvdHRvbV9vZl9zY3JlZW4gPiB0b3Bfb2ZfZWxlbWVudCkgJiYgKHRvcF9vZl9zY3JlZW4gPCBib3R0b21fb2ZfZWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlZ3VsYXJGZWVkYmFjaygpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgICAgIGxhYmVsID0gXCJObyBlcnJvcnNcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vIGVycm9ycyByZXBvcnRlZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICAvLyBUT0RPOiBJbnN0ZWFkIG9mIHRyYWNraW5nIHN0dWRlbnQgZmlsZSwgbGV0J3MgdHJhY2sgdGhlIGluc3RydWN0b3IgZmlsZVxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJJbnRlcnZlbnRpb25cIiwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBcImFuc3dlci5weVwiKTtcblxuICAgICAgICAvLyBDbGVhciBvdXQgYW55IHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgbGluZXNcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGVycm9yIG9uIGEgbGluZSBhbmQgcmVwb3J0IHRoYXRcbiAgICAgICAgbGV0IGxpbmUgPSBCbG9ja1B5RmVlZGJhY2suZmluZEZpcnN0RXJyb3JMaW5lKGRhdGEpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmUgIT09IG51bGwgJiYgbGluZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5wdXNoKGxpbmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW52ZXJ0IHRoZSBzZXQgb2YgdHJhY2VkIGxpbmVzXG4gICAgICAgIGxldCBzdHVkZW50UmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnN0dWRlbnQ7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQuc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IHVuY292ZXJlZExpbmVzID0gW107XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMucGFyc2VyLmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5saW5lcy5pbmRleE9mKGxpbmUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB1bmNvdmVyZWRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkKHVuY292ZXJlZExpbmVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXNlbnQgYW55IGFjY3VtdWxhdGVkIGZlZWRiYWNrXG4gICAgICovXG4gICAgcHJlc2VudEZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKTtcblxuICAgICAgICAvLyBUT0RPOiBMb2dnaW5nXG4gICAgICAgIC8vdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiZmVlZGJhY2tcIiwgY2F0ZWdvcnkrXCJ8XCIrbGFiZWwsIG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbm90aWZ5RmVlZGJhY2tVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICB9O1xuXG4gICAgcHJlc2VudFJ1bkVycm9yKGVycm9yKSB7XG4gICAgICAgIGxldCBtZXNzYWdlLCBsYWJlbCwgY2F0ZWdvcnksIGxpbmVubztcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiU3ludGF4RXJyb3JcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcInN5bnRheFwiO1xuICAgICAgICAgICAgbGV0IGxpbmVubyA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IubGluZW5vKTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IubXNnKTtcbiAgICAgICAgICAgIGxldCBzb3VyY2UsIG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBlcnJvci5hcmdzLnZbM11bMl07XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gYDxwcmU+JHtzb3VyY2V9PC9wcmU+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYWJlbCA9PT0gXCJiYWQgaW5wdXRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJCYWQgSW5wdXRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYEJhZCBpbnB1dCBvbiBsaW5lICR7bGluZW5vfS48YnI+JHtzb3VyY2V9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGFiZWwgPT09IFwiRU9GIGluIG11bHRpLWxpbmUgc3RhdGVtZW50XCIpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiRU9GIGluIG11bHRpLWxpbmUgc3RhdGVtZW50XCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBVbmV4cGVjdGVkIGVuZC1vZi1maWxlIGluIG11bHRpLWxpbmUgc3RhdGVtZW50IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiU3ludGF4IEVycm9yXCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGxhYmVsICsgXCI8YnI+XCIgKyBzb3VyY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYWJlbCA9IGVycm9yLnRwJG5hbWU7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwicnVudGltZVwiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRoaXMuY29udmVydFNrdWxwdEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lbm8gIT09IHVuZGVmaW5lZCAmJiBsaW5lbm8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZW5vKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICBsZXQgbmFtZSA9IGVycm9yLnRwJG5hbWU7XG4gICAgICAgIGxldCB0b3AgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIGxldCB0cmFjZWJhY2sgPSBcIlwiO1xuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IFwiXFxuXFxuPGJyPlRyYWNlYmFjazo8YnI+XFxuXCIgKyBlcnJvci50cmFjZWJhY2subWFwKGZyYW1lID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGluZW5vID0gZnJhbWUubGluZW5vO1xuICAgICAgICAgICAgICAgIGlmIChmcmFtZS5maWxlbmFtZS5zbGljZSgwLCAtMykgPT09IGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZW5vIC09IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5pbnN0cnVjdG9yLmxpbmVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gYEZpbGUgPHNwYW4gY2xhc3M9XCJmaWxlbmFtZVwiPlwiJHtmcmFtZS5maWxlbmFtZX1cIjwvc3Bhbj4sIGA7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSBgb24gbGluZSA8c3BhbiBjbGFzcz1cImxpbmVub1wiPiR7bGluZW5vfTwvc3Bhbj4sIGA7XG4gICAgICAgICAgICAgICAgbGV0IHNjb3BlID0gZnJhbWUuc2NvcGUgIT09IFwiPG1vZHVsZT5cIiA/IGBpbiBzY29wZSAke2ZyYW1lLnNjb3BlfWAgOiBcIlwiO1xuICAgICAgICAgICAgICAgIGxldCBzb3VyY2UgPSBgPHByZT48Y29kZT4ke2ZyYW1lLnNvdXJjZX08L2NvZGU+PC9wcmU+YDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZSArIGxpbmUgKyBzY29wZSArIFwiXFxuXCIgKyBzb3VyY2U7XG4gICAgICAgICAgICB9KS5qb2luKFwiXFxuPGJyPlwiKTtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IGAke3RyYWNlYmFja31gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3ArXCJcXG5cIit0cmFjZWJhY2s7XG4gICAgfVxuXG4gICAgcHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeShcImludGVybmFsXCIpO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsKFwiSW50ZXJuYWwgRXJyb3JcIik7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkVycm9yIGluIGluc3RydWN0b3IgZmVlZGJhY2suIFBsZWFzZSBzaG93IHRoZSBmb2xsb3dpbmcgdG8gYW4gaW5zdHJ1Y3RvcjpcXG5cIjtcbiAgICAgICAgbWVzc2FnZSArPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG59IiwiY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5KSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJHtoaWRlSWZFbXB0eX0gfHwgdWkuZmlsZXMuaGFzQ29udGVudHMoJyR7ZmlsZW5hbWV9JylcIj5cclxuICAgICAgICAgICAgJHtmcmllbmRseU5hbWV9PC9hPlxyXG4gICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBGSUxFU19IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1maWxlc1wiXHJcbiAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5maWxlcy52aXNpYmxlXCI+XHJcbjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8c3Ryb25nPlZpZXc6IDwvc3Ryb25nPlxyXG4gICAgPC9saT5cclxuXHJcbiAgICAke21ha2VUYWIoXCJhbnN3ZXIucHlcIil9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fZXZhbC5weScpXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGFydGluZyBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkluc3RydWN0b3IgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IERFTEVUQUJMRV9TSU1QTEVfRklMRVMgPSBbXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5ERUxFVEFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5SRU5BTUFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCIsIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiF0YWdzLmJsb2NrcHlcIiwgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIl07XHJcblxyXG5jbGFzcyBCbG9ja1B5RmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHtcImZpbGVuYW1lXCI6IGtvLm9ic2VydmFibGUoZmlsZW5hbWUpLCBjb250ZW50czoga28ub2JzZXJ2YWJsZShjb250ZW50cyB8fCBcIlwiKX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29uY2F0ZW5hdGVkRmlsZShjb25jYXRlbmF0ZWRGaWxlLCBtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICBpZiAoY29uY2F0ZW5hdGVkRmlsZSkge1xyXG4gICAgICAgIGxldCBmaWxlcyA9IEpTT04ucGFyc2UoY29uY2F0ZW5hdGVkRmlsZSk7XHJcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KGZpbGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wV2F0Y2hpbmdGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoTW9kZWwoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzeXN0ZW0gPSB0aGlzO1xyXG4gICAgICAgIFt0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzXS5mb3JFYWNoKGZpbGVBcnJheSA9PlxyXG4gICAgICAgICAgICBmaWxlQXJyYXkuc3Vic2NyaWJlKGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsRmlsZSA9IGNoYW5nZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJhZGRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWNrIG5ldyBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXN5c3RlbS5uZXdGaWxlKG1vZGVsRmlsZS5maWxlbmFtZSgpLCBtb2RlbEZpbGUuY29udGVudHMoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5ub3RpZnlXYXRjaGVzKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8obW9kZWxGaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcywgXCJhcnJheUNoYW5nZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIHN1Ym1pc3Npb24uY29kZSlcclxuICAgIC8vICFvbl9ydW4ucHksICFvbl9jaGFuZ2UucHksICFvbl9ldmFsLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZWxldmFudCBhc3NpZ25tZW50Ljx3aGF0ZXZlcj5cclxuICAgIC8vIF5zdGFydGluZ19jb2RlLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyBed2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyAhd2hhdGV2ZXIgb3IgP3doYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBlbGVtZW50cyBvZiBhc3NpZ25tZW50LmV4dHJhRmlsZXNcclxuICAgIC8vIE90aGVyd2lzZTpcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIHN1Ym1pc3Npb24uY29kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXcgc3BlY2lhbCBmaWxlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIGZpbGUge0Jsb2NrUHlGaWxlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZUZpbGVfKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKGV4aXN0aW5nRmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUoY29udGVudHMgfHwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0ZpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9ja1B5RmlsZSh0aGlzLm1haW4sIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdID0gbmV3RmlsZTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhuZXdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdGaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZW5hbWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG9iamVjdH0gVGhlIGluZm8gYWJvdXQgdGhlIGZpbGUsIG9yIGZhbHNlIGlmIGl0IGNvdWxkIG5vdCBiZSBkZWxldGVkXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoREVMRVRBQkxFX1NJTVBMRV9GSUxFUy5pbmRleE9mKGZpbGVuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlcnMgYSBjYWxsYmFjayB0byBldmVudHVhbGx5IGNhbGwgZGVsZXRlRmlsZUxvY2FsbHlfXHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lci5yZW1vdmUobW9kZWxGaWxlID0+IG1vZGVsRmlsZS5maWxlbmFtZSA9PT0gZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQgfHwgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay5kZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlXYXRjaGVzKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZS5maWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay51cGRhdGVkKGZpbGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5zZXJ2ZXIuZm9yY2UudXBkYXRlU3VibWlzc2lvblwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHBhc3QgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lU3RyaW5nLCAxMCkpO1xuICAgIGlmIChpc1NhbWVEYXkobm93LCBwYXN0KSkge1xuICAgICAgICByZXR1cm4gXCJUb2RheSBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkYXlTdHIgPSB3ZWVrRGF5c1twYXN0LmdldERheSgpXTtcbiAgICAgICAgbGV0IG1vbnRoU3RyID0gbW9udGhOYW1lc1twYXN0LmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheVN0ciArIFwiLCBcIiArIG1vbnRoU3RyICsgXCIgXCIgKyBwYXN0LmdldERhdGUoKTtcbiAgICAgICAgaWYgKG5vdy5nZXRGdWxsWWVhcigpID09PSBwYXN0LmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIsIFwiK3Bhc3QuZ2V0RnVsbFllYXIoKSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBPcGVucyB0aGUgaGlzdG9yeSBkaWFsb2cgYm94LiBUaGlzIHJlcXVpcmVzIGEgdHJpcCB0byB0aGUgc2VydmVyIGFuZFxuICogb2NjdXJzIGFzeW5jaHJvbm91c2x5LiBUaGUgdXNlcnMnIGNvZGUgaXMgc2hvd24gaW4gcHJlZm9ybWF0dGVkIHRleHRcbiAqIHRhZ3MgKG5vIGNvZGUgaGlnaGxpZ2h0aW5nIGN1cnJlbnRseSkgYWxvbmcgd2l0aCB0aGUgdGltZXN0YW1wLlxuICovXG5CbG9ja1B5SGlzdG9yeS5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWFsb2cgPSB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2c7XG4gICAgdmFyIGJvZHkgPSBcIjxwcmU+YSA9IDA8L3ByZT5cIjtcbiAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuZ2V0SGlzdG9yeShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBib2R5ID0gZGF0YS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChjb21wbGV0ZSwgZWxlbSkgeyBcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZV9zdHIgPSBwcmV0dHlQcmludERhdGVUaW1lKGVsZW0udGltZSk7XG4gICAgICAgICAgICB2YXIgbmV3X2xpbmUgPSBcIjxiPlwiK2NvbXBsZXRlX3N0citcIjwvYj48YnI+PHByZT5cIitlbGVtLmNvZGUrXCI8L3ByZT5cIjtcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZStcIlxcblwiK25ld19saW5lO1xuICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgZGlhbG9nLnNob3coXCJXb3JrIEhpc3RvcnlcIiwgYm9keSwgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSk7XG59OyIsImltcG9ydCB7VFJBQ0VfSFRNTH0gZnJvbSBcInRyYWNlLmpzXCI7XG5pbXBvcnQge0RJQUxPR19IVE1MfSBmcm9tIFwiZGlhbG9nLmpzXCI7XG5pbXBvcnQge0ZFRURCQUNLX0hUTUx9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xuaW1wb3J0IHtGSUxFU19IVE1MfSBmcm9tIFwiZmlsZXMuanNcIjtcbmltcG9ydCB7Rk9PVEVSX0hUTUx9IGZyb20gXCJmb290ZXIuanNcIjtcbmltcG9ydCB7RURJVE9SU19IVE1MfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xuaW1wb3J0IHtDT05TT0xFX0hUTUx9IGZyb20gXCJjb25zb2xlLmpzXCI7XG5cbi8qKlxuICogQGVudW0ge3N0cn1cbiAqL1xuZXhwb3J0IGxldCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMgPSB7XG4gICAgRkVFREJBQ0s6IFwiZmVlZGJhY2tcIixcbiAgICBUUkFDRTogXCJ0cmFjZVwiLFxuICAgIE5PTkU6IFwibm9uZVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCkge1xuICAgIGxldCBoaWdobGlnaHRUaW1lb3V0ID0gbnVsbDtcbiAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuY3VycmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0VGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdGlvbnMgcHJlIGNvZGVcIikubWFwKCAoaSwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn1cblxuLy8gVE9ETzogR2V0IHNoYXJlYWJsZSBsaW5rIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludGVyZmFjZShtYWluKSB7XG4gICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2Jsb2NrcHktY29udGVudCBjb250YWluZXItZmx1aWQnPlxuXG4gICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgc3VibWlzc2lvbiBpcyByZWFkeSB0byBiZSByZXZpZXdlZCE8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuY2FuTWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLm1lbnUudGV4dE1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkubWVudS5jbGlja01hcmtTdWJtaXR0ZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAyOiBDb25zb2xlIGFuZCBGZWVkYmFjayAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgIFxuICAgICAgICA8IS0tIENvbnNvbGUgLS0+XG4gICAgICAgICR7Q09OU09MRV9IVE1MfVxuICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2sgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSAtLT5cbiAgICAgICAgJHtGRUVEQkFDS19IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgXG4gICAgICAgIDwhLS0gVHJhY2UgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSAtLT5cbiAgICAgICAgJHtUUkFDRV9IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDM6IEZpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICA8IS0tIGtvIGlmOiB1aS5maWxlcy52aXNpYmxlIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICR7RklMRVNfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC9rbyAtLT5cbiAgICBcbiAgICA8IS0tIFZpZXcgUm93IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtFRElUT1JTX0hUTUx9XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZvb3RlciBSb3cgLS0+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtGT09URVJfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIGA7XG59OyIsImltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBzYXZlQXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xuXG4vKipcbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgbGV0IFN0YXR1c1N0YXRlID0ge1xuICAgIFJFQURZOiBcInJlYWR5XCIsXG4gICAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAgIFJFVFJZSU5HOiBcInJldHJ5aW5nXCIsXG4gICAgRkFJTEVEOiBcImZhaWxlZFwiLFxuICAgIE9GRkxJTkU6IFwib2ZmbGluZVwiXG59O1xuXG4vKipcbiAqIE9iamVjdCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBleHRlcm5hbCBzZXJ2ZXJzLiBUaGlzIGluY2x1ZGVzIGZ1bmN0aW9uYWxpdHkgZm9yXG4gKiBzYXZpbmcgYW5kIGxvYWRpbmcgZmlsZXMsIGxvZ2dpbmcgZXZlbnRzLCBzYXZpbmcgY29tcGxldGlvbnMsIGFuZCByZXRyaWV2aW5nIGhpc3RvcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeVNlcnZlcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeVNlcnZlcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vIFNhdmUgVVJMcyBsb2NhbGx5IGZvciBxdWlja2VyIGFjY2Vzc1xuICAgIHRoaXMudXJscyA9IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzO1xuXG4gICAgLy8gQWRkIHRoZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwiQkxPQ0tQWVwiKTtcblxuICAgIC8vIEZhdWx0UmVzaXN0YW50Q2FjaGVcbiAgICB0aGlzLnF1ZXVlID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dFdmVudFwiLCBcIltdXCIpKSxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFwiW11cIikpXG4gICAgfTtcbiAgICB0aGlzLk1BWF9RVUVVRV9TSVpFID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuVElNRVJfREVMQVkgPSAxMDAwO1xuICAgIHRoaXMuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLmNoZWNrQ2FjaGVzKCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIElQIGFkZHJlc3MgaGFzIGNoYW5nZWQsIGxvZ2dpbmcgYW4gZXZlbnQgaWYgdGhhdCBvY2N1cnMuXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tJUCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiSVBcIikpIHtcbiAgICAgICAgICAgIGxldCBvbGRJUCA9IHRoaXMuc3RvcmFnZS5nZXQoXCJJUFwiKTtcbiAgICAgICAgICAgIGlmIChvbGRJUCAhPT0gcmVzcG9uc2UuaXApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJvbGRcIjogb2xkSVAsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHJlc3BvbnNlLmlwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFdmVudChcIlgtSVAuQ2hhbmdlXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGVyZSBoYXZlIGJlZW4gcHJldmlvdXMgZmFpbHVyZXMgY2FjaGVkLCBhbmQgaWYgc28gcmV0cmllcyB0aGVtLlxuICogVE9ETzogdXBkYXRlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrQ2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlQXNzaWdubWVudFwiKSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZUFzc2lnbm1lbnRcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucXVldWUpLmZvckVhY2goZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIChmdW5jdGlvbiBwdXNoQW55UXVldWVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5wb3AoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzZXJ2ZXIudXJsc1tlbmRwb2ludF07XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgZmlsZW5hbWUpIHtcbiAgICBtb2RlbC5zdWJzY3JpYmUoKGNvbnRlbnRzKSA9PlxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpID8gdGhpcy5zYXZlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIDogZmFsc2UsIHRoaXMpO1xuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLnB1c2goZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBUT0RPOiBmaXhcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnN1Ym1pc3Npb24uY29kZSwgXCJhbnN3ZXIucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25SdW4sIFwiIW9uX3J1bi5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkV2YWwsIFwiIW9uX2V2YWwucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UsIFwiIW9uX2NoYW5nZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMsIFwiIWluc3RydWN0aW9ucy5tZFwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUsIFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3R1ZGVudEZpbGVzLCBcIiNleHRyYVN0dWRlbnRGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhU3RhcnRpbmdGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYUluc3RydWN0b3JGaWxlcywgXCIjZXh0cmFJbnN0cnVjdG9yRmlsZXMuYmxvY2tweVwiKTtcbn07XG5cbi8qKlxuICpcbiAqIFNvbWUgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGhhcHBlbiBhZnRlciBvdGhlciB0aGluZ3MgaGF2ZSBiZWVuIGxvYWRlZC5cbiAqIFJpZ2h0IG5vdyB0aGlzIGlzIGp1c3QgYWZ0ZXIgQ09SR0lTIGxpYnJhcmllcyBoYXZlIGJlZW4gbG9hZGVkLCBidXQgbWF5YmVcbiAqIHdlJ2xsIGFkZCBtb3JlIGxhdGVyIGFuZCB0aGlzIHdpbGwgbmVlZCB0byBiZSByZWZhY3RvcmVkLlxuICpcbiAqIFRPRE86IGZpeFxuICpcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuZmluYWxpemVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMuc3Vic2NyaWJlKHRoaXMuc2F2ZUFzc2lnbm1lbnQuYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgcGF5bG9hZCBmb3IgYW55IGNvbW11bmljYXRpb24gd2l0aCB0aGUgc2VydmVyIEFQSVxuICogQHJldHVybnMge3thc3NpZ25tZW50X2lkOiAqLCBjb3Vyc2VfaWQ6ICosIGdyb3VwX2lkOiAqLCB1c2VyX2lkOiAqLCB0aW1lem9uZTogKiwgdmVyc2lvbjogKiwgdGltZXN0YW1wOiAqfX1cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU2VydmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXNzaWdubWVudCA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50O1xuICAgIGxldCB1c2VyID0gdGhpcy5tYWluLm1vZGVsLnVzZXI7XG4gICAgbGV0IHN1Ym1pc3Npb24gPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbjtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGF0dXMgYW5kIG1lc3NhZ2UgZm9yIHRoZSByZWxldmFudCBlbmRwb2ludC5cbiAqIEBwYXJhbSBlbmRwb2ludCB7c3RyaW5nfSBvbmUgb2YgdGhlIFVSTCBlbmRwb2ludHNcbiAqIEBwYXJhbSBzdGF0dXMge1N0YXR1c1N0YXRlfVxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZz99XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludF0oc3RhdHVzKTtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50ICsgXCJNZXNzYWdlXCJdKG1lc3NhZ2UgfHwgXCJcIik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gb3ZlcmxheSBvbiB0aGUgc2NyZWVuIHRoYXQgYmxvY2tzIG9wZXJhdGlvbiB1bnRpbCB0aGUgc3lzdGVtIGlzIHJlYWR5LlxuICogVGhlIG92ZXJsYXkgZ2V0cyBwcm9ncmVzc2l2ZWx5IGRhcmtlciB0byBpbmRpY2F0ZSByZXBlYXRlZCBmYWlsdXJlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2hvd092ZXJsYXkgPSBmdW5jdGlvbiAoYXR0ZW1wdCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyArPSAxO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2NrcHktb3ZlcmxheVwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImJsb2NrcHktb3ZlcmxheVwiPiA8L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGF0dGVtcHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjOTg4XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzY1NVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiMzMzNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG4vKipcbiAqIFVuZG8gYSBsZXZlbCBvZiBvdmVybGF5OyBpZiB0aGlzIHdhcyB0aGUgbGFzdCBsZXZlbCwgcmVtb3ZlcyBpdCBmcm9tIHRoZSBzY3JlZW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmhpZGVPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyAtPSAxO1xuICAgIGlmICh0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2VucXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgbm90IG92ZXJmaWxsZWQgdGhlIHF1ZXVlXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMucXVldWVbY2FjaGVdLmxlbmd0aDtcbiAgICBsZXQgbWF4ID0gdGhpcy5NQVhfUVVFVUVfU0laRVtjYWNoZV07XG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXSA9IHRoaXMucXVldWVbY2FjaGVdLnNsaWNlKGxlbmd0aCAtIG1heCwgbWF4KTtcbiAgICB9XG4gICAgLy8gT25seSBhZGQgdGhlIGVsZW1lbnQgaWYgaXQncyBuZXdcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0ucHVzaChrZXkpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9kZXF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0uc3BsaWNlKGluZGV4KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZW5kcG9pbnQsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgIGxldCBwb3N0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuX2VucXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZS5pcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHBvc3RSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChwb3N0UmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFrZSBhIEFKQVggcmVxdWVzdCB0aGF0LCB1cG9uIGZhaWx1cmUsIHdpbGwgY2hlY2sgdG8gc2VlIGlmIHRoaXMgd2FzIHRoZVxuICogbGF0ZXN0IGF0dGVtcHQgZm9yIHRoaXMgYGNhY2hlYCBtYXJrZXIuIElmIHNvLCBpdCB3aWxsIGF0dGVtcHQgYWdhaW4gdW50aWxcbiAqIHN1Y2Nlc3NmdWw7IG90aGVyd2lzZSwgaXQgZ2l2ZXMgdXAgdGhlIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgQUpBWC1yZWFkeSBkYXRhIHRvIGJlIHBvc3RlZFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCB0aW1lclxuICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50IC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCBjYWNoZSBlbnRyeVxuICogQHBhcmFtIHtJbnRlZ2VyfSBkZWxheSAtIFRoZSBjdXJyZW50IG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcbiB0cnlpbmcgdGhlIHJlcXVlc3QgYWdhaW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0TGF0ZXN0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSkge1xuICAgIGxldCBjYWNoZSA9IGVuZHBvaW50ICsgZmlsZW5hbWU7XG4gICAgbGV0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY29ubmVjdGVkIGJ1dCBmYWlsZWQsIGRvbid0IHRyeSBhZ2FpbiBidXQgbGV0IHRoZSB1c2VyIGtub3cgd2h5LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyc1tjYWNoZV0pO1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lcnNbY2FjaGVdID0gc2V0VGltZW91dChyZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RCbG9ja2luZyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICB0aGlzLnNob3dPdmVybGF5KGF0dGVtcHRzKTtcbiAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCgoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZShlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMgLSAxLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoYXNzaWdubWVudF9pZCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiYXNzaWdubWVudF9pZFwiXSA9IGFzc2lnbm1lbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRBc3NpZ25tZW50XCIsIGRhdGEsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4ubG9hZEFzc2lnbm1lbnREYXRhXyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEhpc3RvcnlcIiwgZGF0YSwgMiwgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2dFdmVudCA9IGZ1bmN0aW9uIChldmVudF90eXBlLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGZpbGVfcGF0aCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dFdmVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZXZlbnRfdHlwZVwiXSA9IGV2ZW50X3R5cGU7XG4gICAgICAgIGRhdGFbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhW1wibGFiZWxcIl0gPSBsYWJlbDtcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPSBtZXNzYWdlO1xuICAgICAgICBkYXRhW1wiZmlsZV9wYXRoXCJdID0gZmlsZV9wYXRoO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJsb2dFdmVudFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUltYWdlID0gZnVuY3Rpb24gKGRpcmVjdG9yeSwgaW1hZ2UpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUltYWdlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJkaXJlY3RvcnlcIl0gPSBkaXJlY3Rvcnk7XG4gICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IGltYWdlO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwidHVydGxlX291dHB1dFwiLCBcInNhdmVJbWFnZVwiLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uU3RhdHVzID0gZnVuY3Rpb24obmV3U3RhdHVzKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInN0YXR1c1wiXSA9IG5ld1N0YXR1cztcbiAgICAgICAgbGV0IHBvc3RTdGF0dXNDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMobmV3U3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwidXBkYXRlU3VibWlzc2lvblN0YXR1c1wiLCBkYXRhLCAyLCBwb3N0U3RhdHVzQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbG9hZCBmaWxlcyBhbmQgd2ViIHJlc291cmNlcy5cbiAqXG4gKiBERVBSRUNBVEVEXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiRmFpbHVyZVwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgRmlsZSlcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNvbnRlbnRzLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGF5ID0gdGhpcy5USU1FUl9ERUxBWTtcbiAgICB9XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVGaWxlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IGNvbnRlbnRzO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uID0gZnVuY3Rpb24gKHNjb3JlLCBjb3JyZWN0LCBoaWRkZW5PdmVycmlkZSwgZm9yY2VVcGRhdGUpIHtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2VzcztcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwidXBkYXRlU3VibWlzc2lvblwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wic2NvcmVcIl0gPSBzY29yZTtcbiAgICAgICAgZGF0YVtcImNvcnJlY3RcIl0gPSBjb3JyZWN0O1xuICAgICAgICBkYXRhW1wiaGlkZGVuX292ZXJyaWRlXCJdID0gaGlkZGVuT3ZlcnJpZGU7XG4gICAgICAgIGRhdGFbXCJmb3JjZV91cGRhdGVcIl0gPSBmb3JjZVVwZGF0ZTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoKHBuZ0RhdGEsIGltZykgPT4ge1xuICAgICAgICAgICAgZGF0YVtcImltYWdlXCJdID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwidXBkYXRlU3VibWlzc2lvblwiLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGlkZGVuT3ZlcnJpZGUgJiYgY29ycmVjdCAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiLyoqXG4gKiBTa3VscHQgTW9kdWxlIGZvciBob2xkaW5nIHRoZSBJbnN0cnVjdG9yIEFQSS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gYnkgZ2V0dGluZyB0aGUgZnVuY3Rpb25zJyBzb3VyY2UgY29kZSBmcm9tIHRvU3RyaW5nLlxuICogSXNuJ3QgdGhhdCBjcmF6eT9cbiAqXG4gKlxuICovXG5leHBvcnQgbGV0ICRza19tb2RfaW5zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1haW4gbW9kdWxlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYXQgdGhlIGVuZC5cbiAgICBsZXQgbW9kID0ge307XG4gICAgbGV0IG5vbmUgPSBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgXG4gICAgbGV0IHByaW9yID0gbnVsbDtcbiAgICBtb2QudGltZWl0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ0aW1laXRcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChwcmlvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gRGF0ZS5ub3coKSAtIHByaW9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobmFtZSksIGRpZmZlcmVuY2UvMTAwMCk7XG4gICAgICAgIHByaW9yID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGZlZWRiYWNrIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5sb2cgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGRlYnVnIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5kZWJ1ZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb3ZlcnRzIHRoZSBvdXRwdXQgaW4gdGhlIHN0dWRlbnQgcmVwb3J0IHRvIGEgcHl0aG9uIFxuICAgICAqIGxpc3QgYW5kIHJldHVybnMgaXQuXG4gICAgKiovXG4gICAgbW9kLmdldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQubWFwKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udG9Ta3VscHQoKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KG91dHB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGUgb3V0cHV0LCBwYXJ0aWN1bGFybHkgdXNlZnVsIGlmIHRoZSBzdHVkZW50XG4gICAgICogY29kZSBpcyBnb2luZyB0byBiZSByZXJ1bi5cbiAgICAgKi9cbiAgICBtb2QucmVzZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInJlc2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ub3V0cHV0LnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnF1ZXVlX2lucHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInF1ZXVlX2lucHV0XCIsIGFyZ3VtZW50cywgMSwgSW5maW5pdHkpO1xuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBhcmdzW2ldO1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImlucHV0XCIsIFwic3RyaW5nXCIsIFNrLmJ1aWx0aW4uY2hlY2tTdHJpbmcoaW5wdXQpKTtcbiAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goU2suZmZpLnJlbWFwVG9KcyhpbnB1dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X3Byb2dyYW0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Byb2dyYW1cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInZlcmlmaWVyXCJdLmNvZGUpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X2V2YWx1YXRpb24gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X2V2YWx1YXRpb25cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXZhbHVhdGlvbiB8fCBcIlwiKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QudHJhY2VfbGluZXMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGxpbmVzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ubGluZXM7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShsaW5lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vZC5nZXRfc3R1ZGVudF9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtub25lLCBub25lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvcixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW1wibGluZVwiXSA9IGVycm9yLnRyYWNlYmFja1swXS5saW5lbm87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uID0gU2suZmZpLnJlbWFwVG9QeShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW2Vycm9yLCBwb3NpdGlvbl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBtb2QuaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImhhZF9leGVjdXRpb25fdGltZV9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gIVNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvci50cCRuYW1lID09PSBcIlRpbWVMaW1pdEVycm9yXCI7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGJhY2t1cFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgbW9kLmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGJhY2t1cFRpbWUgPSBTay5leGVjTGltaXQ7XG4gICAgICAgIGlmIChTay5leGVjTGltaXRGdW5jdGlvbikge1xuICAgICAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb2QudW5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IGJhY2t1cFRpbWU7XG4gICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnN1cHByZXNzX3Njcm9sbGluZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzdXBwcmVzc19zY3JvbGxpbmdcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBcbiAgICAvKlxuICAgIGRlZiBoaXN0KHNlbGYsIGRhdGEsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0hpc3RvZ3JhbScsICd2YWx1ZXMnOiBkYXRhLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHBsb3Qoc2VsZiwgeHMsIHlzPU5vbmUsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIGlmIHlzID09IE5vbmU6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcmFuZ2UobGVuKHhzKSksICd5JzogeHMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAgICAgZWxzZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHNjYXR0ZXIoc2VsZiwgeHMsIHlzLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdTY2F0dGVyJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICovXG4gICAgbW9kLmdldF9wbG90cyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcGxvdHNcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXRzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBvdXRwdXRzLmZpbHRlcihmdW5jdGlvbihvdXRwdXQpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC50eXBlID09PSBcInBsb3RcIjtcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XCJkYXRhXCI6IGdyYXBoLmNvbnRlbnQubWFwKGZ1bmN0aW9uKHBsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bsb3QgPSB7IFwidHlwZVwiOiBwbG90LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3QudHlwZSA9PT0gXCJsaW5lXCIgfHwgcGxvdC50eXBlID09PSBcInNjYXR0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInhcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieVwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi55OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbG90LnR5cGUgPT09IFwiaGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1widmFsdWVzXCJdID0gcGxvdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQbG90O1xuICAgICAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgICAgICBcInhsYWJlbFwiOiBcIlwiLCBcInlsYWJlbFwiOiBcIlwiLCBcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFwibGVnZW5kXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkob3V0cHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIFByb3ZpZGVzIGBzdHVkZW50YCBhcyBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgdGhhdCB0aGUgc3R1ZGVudCBkZWNsYXJlZC5cbiAgICBtb2QuU3R1ZGVudERhdGEgPSBTay5taXNjZXZhbC5idWlsZENsYXNzKG1vZCwgZnVuY3Rpb24oJGdibCwgJGxvYykge1xuICAgICAgICAkbG9jLl9faW5pdF9fID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICAvL3NlbGYuZGF0YSA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0RpY3QgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIFNrLmFic3RyLnNhdHRyKHNlbGYsIFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSwgbmV3RGljdCwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLm1vZHVsZSA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnJlc3VsdHM7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0gc2VsZi5tb2R1bGUuJGQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5hYnN0ci5vYmplY3RTZXRJdGVtKG5ld0RpY3QsIFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChrZXkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2R1bGVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2FsbF9mID0gZnVuY3Rpb24oa3dhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzTGVuKFwiY2FsbFwiLCBhcmd1bWVudHMubGVuZ3RoLCAxLCBJbmZpbml0eSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICB2YXIga3dhcmdzID0gbmV3IFNrLmJ1aWx0aW5zLmRpY3Qoa3dhKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICBhcmdzID0gYXJncy5zbGljZSgyKTtcblxuICAgICAgICAgICAgdmFyIGlucHV0cyA9IGt3YXJncy5tcCRsb29rdXAobmV3IFNrLmJ1aWx0aW4uc3RyKFwiaW5wdXRzXCIpKTtcbiAgICAgICAgICAgIGlmIChpbnB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlucHV0cyA9IFNrLmZmaS5yZW1hcFRvSnMoaW5wdXRzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gc2VsZi50cCRnZXRhdHRyKG5ldyBTay5idWlsdGluLnN0cihcImRhdGFcIikpO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uT2JqZWN0ID0gZGF0YS5tcCRsb29rdXAoZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbk9iamVjdC50cCRjYWxsKGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbF9mLmNvX2t3YXJncyA9IHRydWU7XG4gICAgICAgIC8vY2FsbF9mLmNvX3Zhcm5hbWVzID0gW1wic2VsZlwiLCBcImZ1bmN0aW9uXCJdO1xuICAgICAgICBjYWxsX2YuY29fbmFtZT0gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiY2FsbFwiKTtcbiAgICAgICAgJGxvY1tcImNhbGxfJHJuJFwiXSA9IG5ldyBTay5idWlsdGluLmZ1bmMoY2FsbF9mKTtcblxuICAgICAgICAkbG9jW1wiX19yZXByX19cIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIoXCJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRsb2MuZ2V0X25hbWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbmFtZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQocHJvcGVydHkpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAkbG9jLmdldF92YWx1ZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF92YWx1ZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNlbGYubW9kdWxlW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0sIFwiU3R1ZGVudERhdGFcIik7XG4gICAgbW9kLnN0dWRlbnQgPSBTay5taXNjZXZhbC5jYWxsc2ltT3JTdXNwZW5kKG1vZC5TdHVkZW50RGF0YSk7XG4gICAgXG4gICAgbW9kLmdldF9zdHVkZW50X2RhdGEgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZGF0YVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbW9kLnN0dWRlbnQ7XG4gICAgfSk7XG5cbiAgICBtb2Quc2V0X2luc3RydWN0aW9ucyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmV3SW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzZXRfaW5zdHJ1Y3Rpb25zXCIsIGFyZ3VtZW50cywgMSwgMik7XG4gICAgICAgIG5ld0luc3RydWN0aW9ucyA9IFNrLmZmaS5yZW1hcFRvSnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhuZXdJbnN0cnVjdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgbW9kLmdldF9tb2RlbF9pbmZvID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihrZXlzKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbW9kZWxfaW5mb1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgbW9kZWwgPSBTay5leGVjdXRpb25SZXBvcnRzW1wibW9kZWxcIl07XG4gICAgICAgIGtleXMgPSBTay5mZmkucmVtYXBUb0pzKGtleXMpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbW9kZWwgPSBtb2RlbFtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShtb2RlbCgpKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbW9kO1xufTtcbiIsImxldCBMT0NBTF9TVE9SQUdFX1JFRjtcbnRyeSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSBsb2NhbFN0b3JhZ2U7XG4gICAgbGV0IG1vZCA9IFwiQkxPQ0tQWV9MT0NBTFNUT1JBR0VfVEVTVFwiO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0obW9kLCBtb2QpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0obW9kKTtcbn0gY2F0Y2goZSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0ge1xuICAgICAgICBfZGF0YSAgICAgICA6IHt9LFxuICAgICAgICBzZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkLCB2YWwpIHsgcmV0dXJuIHRoaXMuX2RhdGFbaWRdID0gU3RyaW5nKHZhbCk7IH0sXG4gICAgICAgIGdldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQpIHsgcmV0dXJuIHRoaXMuX2RhdGEuaGFzT3duUHJvcGVydHkoaWQpID8gdGhpcy5fZGF0YVtpZF0gOiB1bmRlZmluZWQ7IH0sXG4gICAgICAgIHJlbW92ZUl0ZW0gIDogZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzLl9kYXRhW2lkXTsgfSxcbiAgICAgICAgY2xlYXIgICAgICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2RhdGEgPSB7fTsgfVxuICAgIH07XG59XG5cbi8qKlxuICogSGVscGVyIG9iamVjdCBmb3IgaW50ZXJmYWNpbmcgd2l0aCB0aGUgTG9jYWxTdG9yYWdlLiBUaGUgTG9jYWxTdG9yYWdlXG4gKiBicm93c2VyIEFQSSBhbGxvd3MgZm9yIG9mZmxpbmUgc3RvcmFnZS4gVGhhdCBBUEkgaXMgdmVyeSB1bnNvcGhpc3RpY2F0ZWQsXG4gKiBhbmQgaXMgZXNzZW50aWFsbHkgYSBsYW1lIGtleS12YWx1ZSBzdG9yZS4gVGhpcyBvYmplY3Qgc2l0cyBvbiB0b3BcbiAqIGFuZCBwcm92aWRlcyBhIG51bWJlciBvZiB1c2VmdWwgdXRpbGl0aWVzLCBpbmNsdWRpbmcgcnVkaW1lbnRhcnljYWNoZVxuICogY2FjaGUgZXhwaXJhdGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtMb2NhbFN0b3JhZ2VXcmFwcGVyfVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIEEgbmFtZXNwYWNlIHRvIHVzZSBpbiBncm91cGluZyBhY2Nlc3MgdG8gbG9jYWxzdG9yYWdlLiBUaGlzIGtlZXBzIGFjY2VzcyBjbGVhbiBhbmQgb3JnYW5pemVkLCB3aGlsZSBhbHNvIG1ha2luZyBpdCBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZVdyYXBwZXIobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG59XG4vKipcbiAqIEEgbWV0aG9kIGZvciBhZGRpbmcgYSBrZXkvdmFsdWUgcGFpciB0byBMb2NhbFN0b3JhZ2UuXG4gKiBOb3RlIHRoYXQgYm90aCBwYXJhbWV0ZXJzIG11c3QgYmUgc3RyaW5ncyAoSlNPTi5zdHJpbmdpZnkgaXMgeW91ciBmcmllbmQpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5LlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5zZXQgPSAgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIsIHZhbHVlKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIiwgJC5ub3coKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZW1vdmluZyBhIGtleSBmcm9tIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZW1vdmUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHRpbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHRpbWUgZm9yLlxuICogQHJldHVybnMge0ludGVnZXJ9IC0gVGhlIHRpbWVzdGFtcCAobG9jYWwgZXBvY2gpIHdoZW4gdGhlIGtleSB3YXMgbGFzdCBzZXQuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICogSWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQuXG4gKiBUaGlzIGRlZmF1bHQgd2lsbCBiZSBzZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZhdWx0VmFsdWUgLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UuIE11c3QgYmUgYSBzdHJpbmcuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldERlZmF1bHQgPSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgZ2l2ZW4ga2V5IGlzIGluIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB0ZXN0IGV4aXN0ZW5jZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBzZXJ2ZXIgaGFzIHRoZSBuZXdlciB2ZXJzaW9uLiBUaGlzIGZ1bmN0aW9uXG4gKiBhc3N1bWVzIHRoYXQgdGhlIHNlcnZlciB0cmlwIHRha2VzIGFib3V0IDUgc2Vjb25kcy4gVGhpcyBtZXRob2RcbiAqIGlzIGxhcmdlbHkgZGVwcmVjYXRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBjaGVjay5cbiAqIEBwYXJhbSB7SW50ZWdlcn0gc2VydmVyX3RpbWUgLSBUaGUgc2VydmVyJ3MgdGltZSBhcyBhbiBlcG9jaCAoaW4gbWlsbGlzZWNvbmRzKVxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5pc19uZXcgPSBmdW5jdGlvbihrZXksIHNlcnZlcl90aW1lKSB7XG4gICAgdmFyIHN0b3JlZF90aW1lID0gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xuICAgIHJldHVybiAoc2VydmVyX3RpbWUgPj0gc3RvcmVkX3RpbWUrNTAwMCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRSQUNFX0hUTUwgPSBgXHJcblxyXG48ZGl2IGNsYXNzPVwiYmxvY2tweS10cmFjZSBjb2wtbWQtNiBibG9ja3B5LXBhbmVsXCJcclxuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJUcmFjZVwiPlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICA8c3Ryb25nPlRyYWNlOiA8L3N0cm9uZz5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LWhpZGUtdHJhY2UnXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPiBIaWRlIFRyYWNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyBibG9ja3B5LXRyYWNlLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5iYWNrd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U3RlcDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAvIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZvcndhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogdWkudHJhY2UubGluZSc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPHRhYmxlIGNsYXNzPSd0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICA8Y2FwdGlvbj5DdXJyZW50IHZhcmlhYmxlcyBhdCB0aGlzIHN0ZXA8L2NhcHRpb24+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+PHRoPk5hbWU8L3RoPjx0aD5UeXBlPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVwiZm9yZWFjaDogdWkudHJhY2UuZGF0YSgpLnByb3BlcnRpZXNcIj5cclxuICAgICAgICAgICAgPHRyIGRhdGEtYmluZD1cInZpc2libGU6IG5hbWUgIT0gJ19fZmlsZV9fJyAmJiBuYW1lICE9ICdfX3BhdGhfXydcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiBuYW1lXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiB0eXBlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Y29kZSBkYXRhLWJpbmQ9XCJ0ZXh0OiB2YWx1ZVwiPjwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiB0eXBlID09IFwiTGlzdFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBkYXRhLWJpbmQ9XCJjbGljazogLy8kcm9vdC52aWV3RXhhY3RWYWx1ZSh0eXBlLCBleGFjdF92YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1uZXctd2luZG93Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICAgIFxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5VHJhY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuSUdOT1JFRF9HTE9CQUxTID0gW1wiX19uYW1lX19cIiwgXCJfX2RvY19fXCIsIFwiX19wYWNrYWdlX19cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzbWV0aG9kXCIsIFwicHJvcGVydHlcIiwgXCJzdGF0aWNtZXRob2RcIl07XHJcblxyXG4gICAgICAgIC8vIHRoaXMudHJhY2UuY2xpY2sodGhpcy5idWlsZFRyYWNlVGFibGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lIGEgc2V0IG9mIHZhcmlhYmxlcyB0cmFjZWQgZnJvbSB0aGUgZXhlY3V0aW9uIGFuZCBwYXJzZSBvdXQgYW55XHJcbiAgICAgKiBnbG9iYWwgdmFyaWFibGVzIGFuZCBtb2R1bGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBhIG1hcHBpbmcgb2YgdmFyaWFibGUgbmFtZXMgdG8gdGhlaXIgU2t1cHQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHBhcnNlR2xvYmFscyh2YXJpYWJsZXMpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IG1vZHVsZXMgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyYWNlRXhlY3V0aW9uKCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdmFyaWFibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YXJpYWJsZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSUdOT1JFRF9HTE9CQUxTLmluZGV4T2YocHJvcGVydHkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucmVwbGFjZShcIl8kcnckXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiXyRybiRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZDtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSBCbG9ja1B5VHJhY2UucGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB7XCJuYW1lXCI6IHByb3BlcnR5LCBcInR5cGVcIjogXCJVbmtub3duXCIsIFwidmFsdWVcIjogdmFsdWUudG9TdHJpbmcoKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBTay5idWlsdGluLm1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzLnB1c2godmFsdWUuJGQuX19uYW1lX18udik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XCJwcm9wZXJ0aWVzXCI6IHJlc3VsdCwgXCJtb2R1bGVzXCI6IG1vZHVsZXN9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBTa3VscHQgdmFsdWUgaW50byBhIG1vcmUgZWFzaWx5IHByaW50YWJsZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSB0aGUgc2t1bHB0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVsbExlbmd0aCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZ1bmM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFyZ3VtZW50czogXCIrdmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzLmpvaW4oXCIsIFwiKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBObyBhcmd1bWVudHNcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5tb2R1bGU6IHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uc3RyOlxyXG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxMZW5ndGggfHwgdmFsdWUudi5sZW5ndGggPD0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiW1wiK3ZhbHVlLnNxJGxlbmd0aCgpK1wiIGNoYXJhY3RlcnMgbm90IHNob3duXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5vbmU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmJvb2w6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ubWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiID09PSB2YWx1ZS5za1R5cGUgPyBcIkludGVnZXJcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uaW50XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZsb2F0XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi50dXBsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlR1cGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5saXN0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnYubGVuZ3RoIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiWy4uLiBcIit2YWx1ZS52Lmxlbmd0aCtcIiBlbGVtZW50cyAuLi5dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZGljdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkRpY3Rpb25hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUgJSAxID09PSAwID8gXCJJbnRlZ2VyXCIgOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTdHJpbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAodmFsdWUgPyBcIlRydWVcIjogXCJGYWxzZVwiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZS50cCRuYW1lID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLnRwJG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kciA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gVE9ETzogdmlld0V4YWN0VmFsdWUiLCIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge2FueXRoaW5nfSBuZWVkbGUgLSBUaGUgZWxlbWVudCB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7QXJyYXl9IGhheXN0YWNrIC0gVGhlIGxpc3QgdG8gc2VhcmNoLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCBleGlzdHNcbiAqL1xuZnVuY3Rpb24gYXJyYXlDb250YWlucyhuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYW4gYXJyYXksIHByZXNlcnZpbmcgb3JkZXIuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKiBDb3VydGVzeTpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1ODQzNzAvaG93LXRvLW1lcmdlLXR3by1hcnJheXMtaW4tamF2YXNjcmlwdC1hbmQtZGUtZHVwbGljYXRlLWl0ZW1zXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gdW5pcXVpZnkuIEVsZW1lbnRzIGNvbXBhcmVkIHdpdGggPT09LlxuICovXG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHZhciBhID0gYXJyYXkuY29uY2F0KCk7XG4gICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IodmFyIGo9aSsxOyBqPGEubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGlmKGFbaV0gPT09IGFbal0pIHthLnNwbGljZShqLS0sIDEpO31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBleHRlbmRpbmcgYW4gYXJyYXkgYmFzZWRcbiAqIG9uIGFuIFwiYWRkQXJyYXlcIiBhbmQgXCJyZW1vdmVBcnJheVwiLiBBbnkgZWxlbWVudFxuICogZm91bmQgaW4gcmVtb3ZlQXJyYXkgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaXJzdCBhcnJheVxuICogYW5kIGFsbCB0aGUgZWxlbWVudHMgb2YgYWRkQXJyYXkgYXJlIGFkZGVkLlxuICogQW55IGR1cGxpY2F0ZSBpdGVtcyBhcmUgcmVtb3ZlZC5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIHRoZSBhcnJheSB0byBtYW5pcHVsYXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhZGRBcnJheSAtIHRoZSBlbGVtZW50cyB0byBhZGQgdG8gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSByZW1vdmVBcnJheSAtIHRoZSBlbGVtZW50cyB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQXJyYXkoYXJyYXksIGFkZEFycmF5LCByZW1vdmVBcnJheSkge1xuICAgIHZhciBjb3B5QXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlQXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5VW5pcXVlKGNvcHlBcnJheS5jb25jYXQoYWRkQXJyYXkpKTtcbn1cblxuLyoqXG4gKiBEZWVwbHkgY2xvbmVzIGEgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlIEEgbm9kZSB0byBjbG9uZVxuICogQHJldHVybiB7Tm9kZX0gQSBjbG9uZSBvZiB0aGUgZ2l2ZW4gbm9kZSBhbmQgYWxsIGl0cyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgIC8vIElmIHRoZSBub2RlIGlzIGEgdGV4dCBub2RlLCB0aGVuIHJlLWNyZWF0ZSBpdCByYXRoZXIgdGhhbiBjbG9uZSBpdFxuICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT0gMyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiBcbiAgICAvLyBSZWN1cnNlICAgICBcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY2hpbGQpIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgICBcbiAgICByZXR1cm4gY2xvbmU7XG59XG5cbi8qKlxuICogSW5kZW50cyB0aGUgZ2l2ZW4gc3RyaW5nIGJ5IDQgc3BhY2VzLiBUaGlzIGNvcnJlY3RseSBoYW5kbGVzIG11bHRpLWxpbmUgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCBmb3VyIHNwYWNlcyBhZGRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgbmV3IGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKD89LikvZ20sIFwiICAgIFwiKTtcbn1cblxuLyoqXG4gKiBUdXJucyBzcGFjZXMgaW50byB1bmRlcnNjb3JlcyBpbiB0aGUgc3RyaW5nLCBtYWtlcyBpdCBsb3dlcmNhc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBbYG1pbmAsIGBtYXhgXS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgaW50ZWdlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSBpbnRlZ2VyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gaW50ZWdlci5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xufVxuXG4vKipcbiAqIEVuY29kZXMgc29tZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHNhZmVseSB3cml0dGVuIGludG8gYW4gSFRNTCBib3guXG4gKiBUaGlzIGluY2x1ZGVzIHJlcGxhY2luZyBzcGVjaWFsIEhUTUwgY2hhcmFjdGVycyAoJiwgPCwgPiwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSB0ZXh0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEhUTUwtc2FmZSB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSFRNTChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKTtcbn1cblxuLyoqXG4gKiBTaHVmZmxlIHRoZSBibG9ja3MgaW4gdGhlIHdvcmtzcGFjZVxuICovXG5pZiAodHlwZW9mIEJsb2NrbHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBCbG9ja2x5LldvcmtzcGFjZVN2Zy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWV0cmljcyA9IHRoaXMuZ2V0TWV0cmljcygpO1xuICAgICAgICB2YXIgd2lkdGggPSBtZXRyaWNzLnZpZXdXaWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLnZpZXdIZWlnaHQ7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmdldFRvcEJsb2NrcyhmYWxzZSk7XG4gICAgICAgIHZhciB5ID0gNSwgeCA9IDAsXG4gICAgICAgICAgICBtYXhpbWFsX2luY3JlYXNlID0gaGVpZ2h0L2Jsb2Nrcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIEdldCBhIGJsb2NrXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IGJsb2NrLmdldFJlbGF0aXZlVG9TdXJmYWNlWFkoKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IC1wcm9wZXJ0aWVzLngrcmFuZG9tSW50ZWdlcigxMCwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2subW92ZUJ5KHgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC1wcm9wZXJ0aWVzLnkreSk7XG4gICAgICAgICAgICB5ID0geSArIHJhbmRvbUludGVnZXIoNSwgbWF4aW1hbF9pbmNyZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudHMgZnJvbSBvbmUgYXJyYXkgdG8gYW5vdGhlciBiYXNlZCBvbiBhIGNvbmRpdGlvbmFsIGNoZWNrLlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzE4ODc5NjcvamF2YXNjcmlwdC1tb3ZlLW9iamVjdHMtZnJvbS1vbmUtYXJyYXktdG8tYW5vdGhlci1iZXN0LWFwcHJvYWNoXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyhzb3VyY2UsIHRhcmdldCwgbW92ZUNoZWNrKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzb3VyY2VbaV07XG4gICAgICAgIGlmIChtb3ZlQ2hlY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==