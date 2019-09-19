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

  return "\nfrom pedal.report import *\nfrom pedal.source import set_source\nset_source(".concat(safeCode, ", \"answer.py\")\n").concat(tifaAnalysis, "\nfrom pedal.sandbox.sandbox import Sandbox\nfrom pedal.sandbox import compatibility\nfrom utility import *\nstudent = MAIN_REPORT['sandbox']['run'] = Sandbox()\n#student.run(MAIN_REPORT['source']['code'], MAIN_REPORT['source']['filename'], report_exceptions=False)\n#debug(student)\nstudent.report_exceptions_mode = True\ncompatibility.run_student(raise_exceptions=False)\n#log(student.data)\n#student = get_student_data()\n#error, position = get_student_error()\n#compatibility.raise_exception(error, position)\nrun_student = compatibility.run_student\nreset_output = compatibility.reset_output\nqueue_input = compatibility.queue_input\nget_output = compatibility.get_output\nget_plots = compatibility.get_plots\ncompatibility.trace_lines = trace_lines\nfrom pedal import questions\nquestions.show_question = set_instructions\n# TODO: Remove the need for this hack!\ndef capture_output(func, *args):\n   reset_output()\n   student.call(func.__name__, *args)\n   return get_output()\ncompatibility.capture_output = capture_output\n\nfrom pedal.cait.cait_api import parse_program\n").concat(instructorCode, "\nfrom pedal.resolvers import simple\nSUCCESS, SCORE, CATEGORY, LABEL, MESSAGE, DATA, HIDE = simple.resolve()\n");
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
      console.log(instructorCode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsInN0YXJ0Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbENvbmZpZ3VyYXRpb25fIiwibG9jYWxTZXR0aW5nc18iLCJoYXMiLCJnZXQiLCJMb2NhbFN0b3JhZ2VXcmFwcGVyIiwibW9kZWwiLCJ1c2VyIiwiaWQiLCJrbyIsIm9ic2VydmFibGUiLCJuYW1lIiwicm9sZSIsImdldFNldHRpbmciLCJjb3Vyc2VJZCIsImdyb3VwSWQiLCJpbnN0cnVjdGlvbnMiLCJ1cmwiLCJ0eXBlIiwic3RhcnRpbmdDb2RlIiwib25SdW4iLCJvbkNoYW5nZSIsIm9uRXZhbCIsImV4dHJhSW5zdHJ1Y3RvckZpbGVzIiwib2JzZXJ2YWJsZUFycmF5IiwiZXh0cmFTdGFydGluZ0ZpbGVzIiwiZm9ya2VkSWQiLCJmb3JrZWRWZXJzaW9uIiwib3duZXJJZCIsInZlcnNpb24iLCJ0YWdzIiwic2FtcGxlU3VibWlzc2lvbnMiLCJyZXZpZXdlZCIsImhpZGRlbiIsImlwUmFuZ2VzIiwic2V0dGluZ3MiLCJtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwiLCJjb2RlIiwiZXh0cmFGaWxlcyIsImVuZHBvaW50Iiwic2NvcmUiLCJjb3JyZWN0Iiwic3VibWlzc2lvblN0YXR1cyIsImdyYWRpbmdTdGF0dXMiLCJkaXNwbGF5IiwiZmlsZW5hbWUiLCJpbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtdXRlUHJpbnRlciIsInB5dGhvbk1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTUExJVCIsImhpc3RvcnlNb2RlIiwiYXV0b1NhdmUiLCJiaWdDb25zb2xlIiwicHJldmlvdXNDb25zb2xlSGVpZ2h0IiwiY3VycmVudENvbnNvbGVIZWlnaHQiLCJzZWNvbmRSb3dTZWNvbmRQYW5lbCIsIlNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyIsIkZFRURCQUNLIiwidHJhY2VFeGVjdXRpb24iLCJsb2FkaW5nRGF0YXNldHMiLCJjaGFuZ2VkSW5zdHJ1Y3Rpb25zIiwidHJpZ2dlck9uQ2hhbmdlIiwiZGlydHlTdWJtaXNzaW9uIiwic3RhdHVzIiwibG9hZEFzc2lnbm1lbnQiLCJTdGF0dXNTdGF0ZSIsIlJFQURZIiwibG9hZEFzc2lnbm1lbnRNZXNzYWdlIiwibG9hZEhpc3RvcnkiLCJsb2FkSGlzdG9yeU1lc3NhZ2UiLCJsb2FkRmlsZSIsImxvYWRGaWxlTWVzc2FnZSIsImxvYWREYXRhc2V0IiwibG9hZERhdGFzZXRNZXNzYWdlIiwibG9nRXZlbnQiLCJsb2dFdmVudE1lc3NhZ2UiLCJzYXZlSW1hZ2UiLCJzYXZlSW1hZ2VNZXNzYWdlIiwic2F2ZUZpbGUiLCJzYXZlRmlsZU1lc3NhZ2UiLCJzYXZlQXNzaWdubWVudCIsInNhdmVBc3NpZ25tZW50TWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb24iLCJ1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSIsInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZSIsIm9uRXhlY3V0aW9uIiwiZXhlY3V0aW9uIiwicmVwb3J0cyIsIm91dHB1dCIsInN0dWRlbnQiLCJjdXJyZW50U3RlcCIsImxhc3RTdGVwIiwiY3VycmVudExpbmUiLCJsYXN0TGluZSIsImN1cnJlbnRUcmFjZURhdGEiLCJjdXJyZW50VHJhY2VTdGVwIiwicmVzdWx0cyIsImdsb2JhbHMiLCJmZWVkYmFjayIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsImxhYmVsIiwibGluZXNFcnJvciIsImxpbmVzVW5jb3ZlcmVkIiwiY2FsbGJhY2tzIiwic2VydmVyQ29ubmVjdGVkIiwiYmxvY2tseVBhdGgiLCJhdHRhY2htZW50UG9pbnQiLCJjb250YWluZXIiLCJ1cmxzIiwiY29uc3RhbnRzIiwiZ3VpIiwibWFrZUludGVyZmFjZSIsIiQiLCJodG1sIiwiYXNzaWdubWVudF9pZCIsImNvbXBvbmVudHMiLCJzZXJ2ZXIiLCJzYW1wbGVzIiwiZ3JhZGluZ19zdGF0dXMiLCJzdWJtaXNzaW9uX3N0YXR1cyIsImNvdXJzZV9pZCIsImxvYWRDb25jYXRlbmF0ZWRGaWxlIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwid2FzU2VydmVyQ29ubmVjdGVkIiwiZm9ya2VkX2lkIiwiZm9ya2VkX3ZlcnNpb24iLCJpcF9yYW5nZXMiLCJvbl9jaGFuZ2UiLCJmaWxlU3lzdGVtIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJzdGFydGluZ19jb2RlIiwib3duZXJfaWQiLCJsb2FkQXNzaWdubWVudFNldHRpbmdzIiwibG9hZFRhZ3MiLCJsb2FkU2FtcGxlU3VibWlzc2lvbnMiLCJzYW1wbGVfc3VibWlzc2lvbnMiLCJleHRyYV9pbnN0cnVjdG9yX2ZpbGVzIiwiZXh0cmFfc3RhcnRpbmdfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwiY2FuTWFya1N1Ym1pdHRlZCIsInRleHRNYXJrU3VibWl0dGVkIiwiaXNTdWJtaXR0ZWQiLCJjbGlja01hcmtTdWJtaXR0ZWQiLCJlbmdpbmUiLCJkZWxheWVkUnVuIiwidG9Mb3dlckNhc2UiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsInNpemUiLCJoaWRlRXZhbHVhdGUiLCJBQ1RJVkUiLCJiYWRnZSIsInRyYWNlIiwibGluZSIsInN0ZXAiLCJ0cmFjZURhdGEiLCJmaXJzdCIsImJhY2t3YXJkIiwicHJldmlvdXMiLCJNYXRoIiwibWF4IiwiZm9yd2FyZCIsIm5leHQiLCJtaW4iLCJsYXN0IiwiZmlsZXMiLCJ2aXNpYmxlIiwiaGlkZUZpbGVzIiwiaGFzQ29udGVudHMiLCJwYXRoIiwic29tZSIsImZpbGUiLCJsZW5ndGgiLCJhZGQiLCJkZWxldGVGaWxlIiwiZXh0cmFTdHVkZW50RmlsZXMiLCJvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSIsImVkaXRvcnMiLCJnZXRFZGl0b3IiLCJ2aWV3IiwiaGlkZUVkaXRvcnMiLCJtYXAiLCJzdWJzdHIiLCJtYWtlTW9kZWxGaWxlIiwiY29udGVudHMiLCJjYW5TYXZlIiwiY2FuRGVsZXRlIiwiVU5ERUxFVEFCTEVfRklMRVMiLCJpbmRleE9mIiwiY2FuUmVuYW1lIiwiVU5SRU5BTUFCTEVfRklMRVMiLCJ1cGxvYWQiLCJ1cGxvYWRGaWxlIiwiYmluZCIsImRvd25sb2FkIiwiZG93bmxvYWRGaWxlIiwiaW1wb3J0RGF0YXNldCIsIm9wZW5EaWFsb2ciLCJweXRob24iLCJmdWxsc2NyZWVuIiwiY29kZU1pcnJvciIsInB5dGhvbkVkaXRvciIsImJtIiwidGV4dEVkaXRvciIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsInVwZGF0ZU1vZGUiLCJuZXdNb2RlIiwib2xkUHl0aG9uTW9kZSIsImlzSGlzdG9yeUF2YWlsYWJsZSIsImlzRW5kcG9pbnRDb25uZWN0ZWQiLCJ0dXJuT2ZmSGlzdG9yeU1vZGUiLCJ1cGRhdGVFZGl0b3IiLCJzZXRSZWFkT25seSIsInR1cm5Pbkhpc3RvcnlNb2RlIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiaGlzdG9yeSIsImxvYWQiLCJkaWFsb2ciLCJFUlJPUl9MT0FESU5HX0hJU1RPUlkiLCJ0b2dnbGVIaXN0b3J5TW9kZSIsIm1vdmVUb1N0YXJ0IiwibW92ZVByZXZpb3VzIiwibW92ZU5leHQiLCJtb3N0UmVjZW50IiwibW92ZVRvTW9zdFJlY2VudCIsInVzZSIsInNhdmUiLCJleGVjdXRlIiwiaXNSdW5uaW5nIiwicnVuIiwiZXZhbHVhdGUiLCJtZXNzYWdlcyIsImZvcmNlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmYWRlT3V0IiwiZmFkZUluIiwibWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyIsImFwcGx5QmluZGluZ3MiLCJtYWluIiwidGV4dCIsIkVhc3lNREUiLCJwcm90b3R5cGUiLCJCbG9ja1B5RGlhbG9nIiwiZmluZCIsIkJsb2NrUHlGZWVkYmFjayIsIkJsb2NrUHlUcmFjZSIsIkJsb2NrUHlDb25zb2xlIiwiQmxvY2tQeUVuZ2luZSIsIkJsb2NrUHlGaWxlU3lzdGVtIiwiRWRpdG9ycyIsImJ5TmFtZSIsIkJsb2NrUHlTZXJ2ZXIiLCJCbG9ja1B5Q29yZ2lzIiwiQmxvY2tQeUhpc3RvcnkiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ2YWwiLCJwcm9wIiwiY2xpY2siLCJrZXl1cCIsImUiLCJrZXlDb2RlIiwiZm9jdXMiLCJDb25zb2xlTGluZUV2YWx1YXRlIiwiQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIiwidGFnIiwicHJpbnRlclRhZyIsIk1JTklNVU1fV0lEVEgiLCJNSU5JTVVNX0hFSUdIVCIsIkRFRkFVTFRfSEVJR0hUIiwiaGVpZ2h0IiwiY2xlYXIiLCJyZW1vdmVBbGwiLCJsaW5lQnVmZmVyIiwicGxvdEJ1ZmZlciIsImVtcHR5IiwidHVydGxlTGluZSIsIlR1cnRsZUdyYXBoaWNzIiwiZ2V0VHVydGxlTGluZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJhc3NldHMiLCJsb2FkQXNzZXQiLCJyZW5kZXIiLCJjdXJyZW50UHJpbnRlckRpbWVuc2lvbiIsInNhdmVUdXJ0bGVPdXRwdXQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJkYXRhVXJsIiwidG9EYXRhVVJMIiwicGFnZSIsImVhY2giLCJhdHRyIiwic2hvdyIsImhpZGUiLCJsaW5lVGV4dCIsImZsdXNoIiwiY2hhckF0Iiwic3BsaXRMaW5lcyIsInNwbGl0IiwiYWRkQ29udGVudCIsImkiLCJwdXNoIiwicGxvdHMiLCJpbWFnZURhdGEiLCJpbWFnZUJ1ZmZlciIsImltYWdlIiwidmFsdWUiLCJwcmludGVkVmFsdWUiLCJpbnB1dEJ1ZmZlciIsInN0YXJ0RXZhbHVhdGlvbiIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJfSU1QT1JURURfREFUQVNFVFMiLCJfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMiLCJzZXRCdXR0b25Mb2FkZWQiLCJidG4iLCJyZW1vdmVDbGFzcyIsImxvYWRlZERhdGFzZXRzIiwic2lsZW50bHkiLCJlZGl0b3IiLCJpbXBvcnRzIiwiZGF0YXNldHMiLCJmb3JFYWNoIiwiQmxvY2tNaXJyb3JCbG9ja0VkaXRvciIsIkVYVFJBX1RPT0xTIiwiYXBwbHkiLCJzbHVnIiwid2hlbiIsImRvbmUiLCJmb3JjZUJsb2NrUmVmcmVzaCIsImJsb2NrRWRpdG9yIiwicmVtYWtlVG9vbGJveCIsImZhaWwiLCJhcmd1bWVudHMiLCJlcnJvciIsImFsd2F5cyIsImZpbmFsaXplU3Vic2NyaXB0aW9ucyIsInVybF9yZXRyaWV2YWxzIiwicm9vdCIsImltcG9ydERhdGFzZXRzIiwiZ2V0RGF0YXNldCIsImdldFNjcmlwdCIsImdldENvbXBsZXRlIiwiZ2V0U2t1bHB0IiwiYnVpbHRpbkZpbGVzIiwiZ2V0QmxvY2tseSIsInRleHRUb0Jsb2NrcyIsImhpZGRlbkltcG9ydHMiLCJnZXRKU09OIiwiYmxvY2tweSIsImRvY3VtZW50YXRpb24iLCJib2R5IiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJzbHVnZ2VkTmFtZSIsInRpdGxlTmFtZSIsImltZ1NyYyIsInRpdGxlIiwib3ZlcnZpZXciLCJhcHBlbmRUbyIsIkRJQUxPR19IVE1MIiwidGl0bGVUYWciLCJib2R5VGFnIiwib25jbG9zZSIsIm1vZGFsIiwiZHJhZ2dhYmxlIiwib24iLCJFUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UIiwiU0NSRUVOU0hPVF9CTE9DS1MiLCJFUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwidGVtcG9yYXJ5RG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJBYnN0cmFjdEVkaXRvciIsImNoYW5nZUVkaXRvciIsIndhdGNoRmlsZSIsInVwZGF0ZWQiLCJvbkZpbGVVcGRhdGVkIiwiZGVsZXRlZCIsIm9uRmlsZURlbGV0ZWQiLCJuZXdGaWxlbmFtZSIsIm9sZEVkaXRvciIsImdldEZpbGUiLCJ0cmFja0N1cnJlbnRGaWxlIiwibmV3RWRpdG9yIiwic3RvcFdhdGNoaW5nRmlsZSIsInJlc3VsdCIsImhhbmRsZSIsInBhcnNlRmlsZW5hbWUiLCJBU1NJR05NRU5UX1NFVFRJTkdTIiwiZ2V0RG9jdW1lbnRhdGlvbiIsIm1ha2VTdGFydFZpZXdUYWIiLCJpY29uIiwibW9kZSIsIkFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwiLCJmaWx0ZXIiLCJzZXR0aW5nIiwicHJldHR5TmFtZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIkFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwiLCJCTE9DSyIsInNhdmVBc3NpZ25tZW50U2V0dGluZ3MiLCJjbGllbnROYW1lIiwic2VydmVyTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInN0YXJ0X3ZpZXciLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsImxpbmVFcnJvclN1YnNjcmlwdGlvbiIsImxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24iLCJ3b3Jrc3BhY2UiLCJjb25maWd1cmVDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJlbmFibGVkIiwiY2FsbGJhY2siLCJvbGRGaWxlbmFtZSIsImN1cnJlbnRCTUxpc3RlbmVyIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJpc1BhcnNvbnMiLCJsaW5lcyIsInNldEhpZ2hsaWdodGVkTGluZXMiLCJkZWxldGVGaWxlTG9jYWxseV8iLCJzZXRDb2RlIiwiY2xlYXJIaWdobGlnaHRlZExpbmVzIiwiZ2V0Q29kZSIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwiY2xlYXJMaW5lU3Vic2NyaXB0aW9ucyIsInNldE1vZGUiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsInJlZ2lzdGVyRWRpdG9yIiwiaW5zdGFuY2UiLCJleGl0IiwiZW50ZXIiLCJzcGFjZSIsImxhc3RJbmRleE9mIiwiZXhlY3V0aW9uTW9kZWwiLCJjb25maWd1cmF0aW9ucyIsIlJ1bkNvbmZpZ3VyYXRpb24iLCJldmFsIiwiRXZhbENvbmZpZ3VyYXRpb24iLCJPblJ1bkNvbmZpZ3VyYXRpb24iLCJPbkNoYW5nZUNvbmZpZ3VyYXRpb24iLCJPbkV2YWxDb25maWd1cmF0aW9uIiwiY29uZmlndXJlIiwiZ2V0U2t1bHB0T3B0aW9ucyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJ0aGVuIiwiZmFpbHVyZSIsImRpc2FibGVGZWVkYmFjayIsInNob3dFcnJvcnMiLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxlb3BlbiIsIm9wZW5GaWxlIiwiZmlsZXdyaXRlIiwid3JpdGVGaWxlIiwicHJpbnQiLCJpbkJyb3dzZXIiLCJpbnB1dGZ1biIsImlucHV0ZnVuVGFrZXNQcm9tcHQiLCJpbWFnZVByb3h5IiwiZ2V0SW1hZ2VQcm94eSIsInJldGFpbkdsb2JhbHMiLCJ3YXJuIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwiZGlzYWJsZVRpZmEiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiZmluaXNoVHVydGxlcyIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwidmlzaXRlZExpbmVzIiwiU2V0IiwidmlzaXRCb2R5Iiwibm9kZSIsImxpbmVubyIsInN0YXRlbWVudCIsIm9yZWxzZSIsImZpbmFsYm9keSIsIkFycmF5IiwiZnJvbSIsImFzdEZyb21QYXJzZSIsImNzdCIsImZsYWdzIiwiZ2V0TGluZXMiLCJwcmVzZW50UnVuRXJyb3IiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInRvcF9vZl9lbGVtZW50IiwiYm90dG9tX29mX2VsZW1lbnQiLCJvdXRlckhlaWdodCIsImJvdHRvbV9vZl9zY3JlZW4iLCJ0b3Bfb2Zfc2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJ1bmNvdmVyZWRMaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJtc2ciLCJhcmdzIiwidiIsImNvbnZlcnRTa3VscHRFcnJvciIsImZpbGVuYW1lRXhlY3V0ZWQiLCJ0cmFjZWJhY2siLCJmcmFtZSIsInNjb3BlIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIkZJTEVTX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiY29uY2F0ZW5hdGVkRmlsZSIsIm1vZGVsRmlsZUxpc3QiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsImZvdW5kIiwiRk9PVEVSX0hUTUwiLCJjdXJyZW50SWQiLCJlZGl0RXZlbnRzIiwic2VsZWN0b3IiLCJlZGl0SWQiLCJlbnRyeSIsImZpbGVfcGF0aCIsImV2ZW50X3R5cGUiLCJSRU1BUF9FVkVOVF9UWVBFUyIsImRpc3BsYXllZCIsInByZXR0eVByaW50RGF0ZVRpbWUiLCJjbGllbnRfdGltZXN0YW1wIiwiZGlzYWJsZSIsIm9wdGlvbiIsImRpc2FibGVkIiwiaXNFZGl0RXZlbnQiLCJldnQiLCJwYXJzZUludCIsIm1vbnRoTmFtZXMiLCJ3ZWVrRGF5cyIsImlzU2FtZURheSIsInNlY29uZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidGltZVN0cmluZyIsIm5vdyIsIkRhdGUiLCJwYXN0IiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZGF5U3RyIiwiZ2V0RGF5IiwibW9udGhTdHIiLCJkYXRlIiwiZ2V0SGlzdG9yeSIsInJldmVyc2UiLCJyZWR1Y2UiLCJjb21wbGV0ZSIsImVsZW0iLCJjb21wbGV0ZV9zdHIiLCJ0aW1lIiwibmV3X2xpbmUiLCJoaWdobGlnaHRUaW1lb3V0IiwiYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJUUkFDRV9IVE1MIiwiUkVUUllJTkciLCJPRkZMSU5FIiwic3RvcmFnZSIsInF1ZXVlIiwiZ2V0RGVmYXVsdCIsIk1BWF9RVUVVRV9TSVpFIiwiVElNRVJfREVMQVkiLCJGQUlMX0RFTEFZIiwidGltZXJzIiwib3ZlcmxheSIsImJsb2NraW5nQXR0ZW1wdHMiLCJjYWNoZWRGaWxlbmFtZXMiLCJjcmVhdGVTdWJzY3JpcHRpb25zIiwiY2hlY2tDYWNoZXMiLCJjaGVja0lQIiwib2xkSVAiLCJpcCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJwdXNoQW55UXVldWVkIiwiX3Bvc3RSZXRyeSIsImNyZWF0ZUZpbGVTdWJzY3JpcHRpb24iLCJjcmVhdGVTZXJ2ZXJEYXRhIiwibWljcm9zZWNvbmRzIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwic2hvd092ZXJsYXkiLCJhdHRlbXB0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNzcyIsImhpZGVPdmVybGF5IiwiX2VucXVldWVEYXRhIiwiY2FjaGUiLCJfZGVxdWV1ZURhdGEiLCJzcGxpY2UiLCJkZWxheSIsInBvc3RSZXF1ZXN0IiwicG9zdCIsInRleHRTdGF0dXMiLCJyZXF1ZXN0IiwiY2FjaGVkVGltZSIsIl9wb3N0QmxvY2tpbmciLCJhdHRlbXB0cyIsImVycm9yVGhyb3duIiwibG9hZEFzc2lnbm1lbnREYXRhXyIsIkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCIsImRpcmVjdG9yeSIsIm5ld1N0YXR1cyIsInBvc3RTdGF0dXNDaGFuZ2UiLCJlcnJvckNhbGxiYWNrIiwibG9hZF9maWxlIiwiaGlkZGVuT3ZlcnJpZGUiLCJmb3JjZVVwZGF0ZSIsImdldFBuZ0Zyb21CbG9ja3MiLCJwbmdEYXRhIiwibW9kIiwibm9uZSIsImJ1aWx0aW4iLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdFNldEl0ZW0iLCJ1bmZpeFJlc2VydmVkIiwiY2FsbF9mIiwia3dhIiwicHlDaGVja0FyZ3NMZW4iLCJjYWxsIiwia3dhcmdzIiwiYnVpbHRpbnMiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dHMiLCJtcCRsb29rdXAiLCJ0cCRnZXRhdHRyIiwiZnVuY3Rpb25PYmplY3QiLCJ0cCRjYWxsIiwiY29fa3dhcmdzIiwiY29fbmFtZSIsImdldF9uYW1lc19ieV90eXBlIiwiZXhjbHVkZV9idWlsdGlucyIsImNoZWNrQm9vbCIsInByb3BlcnR5IiwiZ2V0X3ZhbHVlc19ieV90eXBlIiwiY2FsbHNpbU9yU3VzcGVuZCIsImdldF9zdHVkZW50X2RhdGEiLCJzZXRfaW5zdHJ1Y3Rpb25zIiwibmV3SW5zdHJ1Y3Rpb25zIiwiZ2V0X21vZGVsX2luZm8iLCJMT0NBTF9TVE9SQUdFX1JFRiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2RhdGEiLCJTdHJpbmciLCJnZXRJdGVtIiwibmFtZXNwYWNlIiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsIklHTk9SRURfR0xPQkFMUyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bGxMZW5ndGgiLCJmdW5jX2NvZGUiLCJjb192YXJuYW1lcyIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwiY2xvbmUiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZVZhbHVlIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJyYW5kb21JbnRlZ2VyIiwiZmxvb3IiLCJyYW5kb20iLCJCbG9ja2x5IiwiV29ya3NwYWNlU3ZnIiwic2h1ZmZsZSIsIm1ldHJpY3MiLCJnZXRNZXRyaWNzIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImJsb2NrcyIsImdldFRvcEJsb2NrcyIsIm1heGltYWxfaW5jcmVhc2UiLCJnZXRSZWxhdGl2ZVRvU3VyZmFjZVhZIiwibW92ZUJ5IiwibW92ZUVsZW1lbnRzIiwibW92ZUNoZWNrIiwiaXNTa0J1aWx0aW4iLCJvYmoiLCJsbmciLCJpc0FzdE5vZGUiLCJtaXhlZFJlbWFwVG9QeSIsImsiLCJrdnMiLCJhcnIiLCJzdWJ2YWwiLCJhc3NrJCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7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MEYsR0FBRyxDQUFDaGhDLElBQXZCLENBQVA7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDN09ELG9EOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6ImJsb2NrcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJsb2NrcHlcIiwgW1wialF1ZXJ5XCIsIFwia29cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmxvY2tweVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdLCByb290W1wia29cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Jsb2NrcHkuanNcIik7XG4iLCJpbXBvcnQgXCIuL2Nzcy9ibG9ja3B5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3NcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCJzdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc0VudW19IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiZWRpdG9yL3B5dGhvbi5qc1wiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwic2VydmVyLmpzXCI7XHJcbmltcG9ydCB7bWFrZUludGVyZmFjZSwgbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucywgU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfSBmcm9tIFwiaW50ZXJmYWNlLmpzXCI7XHJcbmltcG9ydCB7RWRpdG9yc30gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtcclxuICAgIEJsb2NrUHlGaWxlU3lzdGVtLFxyXG4gICAgbG9hZENvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBtYWtlTW9kZWxGaWxlLFxyXG4gICAgb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUsXHJcbiAgICBVTkRFTEVUQUJMRV9GSUxFUyxcclxuICAgIFVOUkVOQU1BQkxFX0ZJTEVTXHJcbn0gZnJvbSBcIi4vZmlsZXNcIjtcclxuaW1wb3J0IHt1cGxvYWRGaWxlLCBkb3dubG9hZEZpbGV9IGZyb20gXCIuL2VkaXRvci9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtCbG9ja1B5RW5naW5lfSBmcm9tIFwiZW5naW5lLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVRyYWNlfSBmcm9tIFwiLi90cmFjZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb25zb2xlfSBmcm9tIFwiLi9jb25zb2xlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUZlZWRiYWNrfSBmcm9tIFwiZmVlZGJhY2suanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5U2VydmVyfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCbG9ja1B5RGlhbG9nfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWx9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvcmdpcywgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9IGZyb20gXCIuL2Nvcmdpc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlIaXN0b3J5fSBmcm9tIFwiLi9oaXN0b3J5XCI7XHJcblxyXG5leHBvcnQge19JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfTtcclxuXHJcbi8qKlxyXG4gKiBNYWpvciBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgYSBCbG9ja1B5IGluc3RhbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIC0gVXNlciBsZXZlbCBzZXR0aW5ncyAoZS5nLiwgd2hhdCBlZGl0b3IgbW9kZSwgd2hldGhlciB0byBtdXRlIHNlbWFudGljIGVycm9ycywgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhc3NpZ25tZW50IC0gQXNzaWdubWVudCBsZXZlbCBzZXR0aW5ncyAoZGF0YSBhYm91dCB0aGUgbG9hZGVkIGFzc2lnbm1lbnQsIHVzZXIsIHN1Ym1pc3Npb24sIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3VibWlzc2lvbiAtIEluY2x1ZGVzIHRoZSBzb3VyY2UgY29kZSBvZiBhbnkgcHJvZ3JhbXMgdG8gYmUgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbChjb25maWd1cmF0aW9uKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzaWdubWVudChjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIEJsb2NrUHkgb2JqZWN0IGJ5IGluaXRpYWxpemluZyBpdHMgaW50ZXJmYWNlLFxyXG4gICAgICogbW9kZWwsIGFuZCBjb21wb25lbnRzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VXRpbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWxNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy50dXJuT25IYWNrcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEludGVyZmFjZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgZGVmYXVsdCB2YWx1ZSBvclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB1cCBhIHZhbHVlIGZvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZSAtIGlmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGFueXdoZXJlLCB1c2UgdGhpcyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBnZXRTZXR0aW5nKGtleSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9ba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxTZXR0aW5nc18uaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTZXR0aW5nc18uZ2V0KGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgbW9kZWwgdG8gaXRzIGRlZmF1bHRzLlxyXG4gICAgICpcclxuICAgICAqIENhdGVnb3JpZXM6XHJcbiAgICAgKiAgICogdXNlcjogdmFsdWVzIGZvciB0aGUgY3VycmVudCB1c2VyIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGFzc2lnbm1lbnQ6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgYXNzaWdubWVudCAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBzdWJtaXNzaW9uOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24gKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogZGlzcGxheTogZmxhZ3MgcmVsYXRlZCB0byBjdXJyZW50IHZpc2liaWxpdHkgKHN0b3JlZCB0byBsb2NhbFNldHRpbmdzKVxyXG4gICAgICogICAqIHN0YXR1czogbWVzc2FnZXMgcmVsYXRlZCB0byBjdXJyZW50IHN0YXR1cyAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBleGVjdXRpb246IHZhbHVlcyByZWxhdGVkIHRvIGxhc3QgcnVuIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGNvbmZpZ3VyYXRpb246IGNvbnN0YW50IHZhbHVlcyByZWxhdGVkIHRvIHNldHVwIChub3Qgc3RvcmVkKVxyXG4gICAgICovXHJcbiAgICBpbml0TW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIENvbm5lY3QgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHRoaXMubG9jYWxTZXR0aW5nc18gPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcImxvY2FsU2V0dGluZ3NcIik7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5pZFwiXSksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLm5hbWVcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHlvdSBhcmUgYW4gT3duZXIgKGNhbiBtb2RpZnkgdGhlIGFzc2lnbm1lbnQpLCBHcmFkZXIgKGNhbiB2aWV3XHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgYXNzaWdubWVudHMnIGluZm9ybWF0aW9uKSBvciBTdHVkZW50IChjYW4gbm90IHNlZSBhbnkgaW5zdHJ1Y3RvciBzdHVmZikuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcm9sZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJ1c2VyLnJvbGVcIiwgXCJvd25lclwiKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgY291cnNlIGZvciB0aGlzIHVzZXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuY291cnNlX2lkXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBhc3NpZ25tZW50IGdyb3VwIHRoYXQgdGhpcyB1c2VyIGlzIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmdyb3VwX2lkXCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50OiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoXCJTY3JhdGNoIENhbnZhc1wiKSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShcIldlbGNvbWUgdG8gQmxvY2tQeS4gVHJ5IGVkaXRpbmcgYW5kIHJ1bm5pbmcgdGhlIGNvZGUgYmVsb3cuXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaHVtYW4tZnJpZW5kbHkgVVJMIHRvIHVzZSBhcyBhIHNob3J0Y3V0IGZvciB0aGlzIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd2FybmluZyBtZXNzYWdlIGlmIG1hemVcclxuICAgICAgICAgICAgICAgIHR5cGU6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzdGFydGluZ0NvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uUnVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX3J1blwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2NoYW5nZVwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIG9uRXZhbDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ldmFsXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZFZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBvd25lcklkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY291cnNlSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdGFnczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVN1Ym1pc3Npb25zOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgcmV2aWV3ZWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucmV2aWV3ZWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgcHVibGljOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnB1YmxpY1wiXSksXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaGlkZGVuXCJdKSxcclxuICAgICAgICAgICAgICAgIGlwUmFuZ2VzOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmlwX3Jhbmdlc1wiXSksXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pc3Npb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wic3VibWlzc2lvbi5jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBjb3JyZWN0OiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRJZCBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQuaWRcclxuICAgICAgICAgICAgICAgIC8vIGNvdXJzZUlkIGluZmVycmVkIGZyb20gdXNlci5jb3Vyc2VJZFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlcklkIGluZmVycmVkIGZyb20gdXNlci5pZFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudFZlcnNpb24gaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LnZlcnNpb25cclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiU3RhcnRlZFwiKSxcclxuICAgICAgICAgICAgICAgIGdyYWRpbmdTdGF0dXM6IGtvLm9ic2VydmFibGUoXCJOb3RSZWFkeVwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGxheToge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50bHkgdmlzaWJsZSBGaWxlLCBpZiBhcHBsaWNhYmxlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZToga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgcHJlc2VudGVkIHdpdGggdGhlIGluc3RydWN0b3Igc2V0dGluZ3MgYW5kIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5Lmluc3RydWN0b3JcIiwgXCJmYWxzZVwiKS50b1N0cmluZygpPT09XCJ0cnVlXCIpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHRoZSBwcmludGVyIGZyb20gc2hvd2luZyB0aGluZ3NcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbXV0ZVByaW50ZXI6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiAoUHl0aG9uIFZpZXdzKSBUaGUgY3VycmVudCBlZGl0b3IgbW9kZS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtEaXNwbGF5TW9kZXN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHB5dGhvbk1vZGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5weXRob24ubW9kZVwiLCBEaXNwbGF5TW9kZXMuU1BMSVQpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgSGlzdG9yeSBtb2RlIGlzIGVuZ2FnZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeU1vZGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBhdXRvLXNhdmluZyBjaGFuZ2VzIGluIFB5dGhvbiBlZGl0b3JcclxuICAgICAgICAgICAgICAgICAqIElmIGFuIGludGVnZXIsIHNwZWNpZmllcyB0aGUgZGVsYXkgdGhhdCBzaG91bGQgYmUgdXNlZCAobWljcm9zZWNvbmRzKS5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgaXMgbmV2ZXIgb24gaW4gbm9uLVB5dGhvbiBlZGl0b3JzLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x8aW50fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBhdXRvU2F2ZToga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbnNvbGUgaXMgZnVsbCB3aWR0aCBhbmQgZmVlZGJhY2sgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGJpZ0NvbnNvbGU6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgaGVpZ2h0IHRvIHVzZSBmb3IgdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBudWxsLCB0aGVuIGxldCB0aGUgaGVpZ2h0IHJlbWFpbiB1bmNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAqICAgIElmIGEgbnVtYmVyLCB0aGVuIHRoZVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hpY2ggcGFuZWwgdG8gc2hvdyBpbiB0aGUgc2Vjb25kIHJvdydzIHNlY29uZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNlY29uZFJvd1NlY29uZFBhbmVsOiBrby5vYnNlcnZhYmxlKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHRyYWNpbmcgdGhlIGNvZGUgcmlnaHQgbm93XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyYWNlRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGxpc3Qgb2YgcHJvbWlzZXMgdG8gc3RpbGwgcmVzb2x2ZSB3aGlsZSBsb2FkaW5nIGRhdGFzZXRzXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8UHJvbWlzZT59XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEYXRhc2V0czoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIHRlbXBvcmFyeSBjaGFuZ2VkIHZhbHVlIG9mIHRoZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGNoYW5nZWQgZnJvbSB3aGF0IGlzIGluIHRoZSBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNoYW5nZWRJbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEEgaG9sZGVyIGZvciB0aGUgdGltZXIgdG8gdHJpZ2dlciBvbi1jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbkNoYW5nZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB0aGUgY3VycmVudCBmZWVkYmFjayBhbmQgb3V0cHV0IGNvcnJlc3BvbmRzIHRvIHRoZSBjdXJyZW50IHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIHdvdWxkIGJlIGZhbHNlIGlmIHRoZXJlIGlzIG5vIGZlZWRiYWNrL291dHB1dCAoaS5lLiwgY29kZSBoYXMgbm90IGJlZW4gcnVuKSxcclxuICAgICAgICAgICAgICAgICAqIG9yIGlmIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgc3VibWlzc2lvbiBhZnRlciB0aGUgbGFzdCBydW4gKGUuZy4sIGJ5IGVkaXRpbmdcclxuICAgICAgICAgICAgICAgICAqIHRoZSB0ZXh0KS5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZGlydHlTdWJtaXNzaW9uOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3Rvcnk6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEhpc3RvcnlNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRGF0YXNldE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9nRXZlbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVJbWFnZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2VNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHNhdmVGaWxlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudDoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlQXNzaWdubWVudE1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uOiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiBhYm91dCBpbi1wcm9ncmVzcyBleGVjdXRpb25zXHJcbiAgICAgICAgICAgICAgICByZXBvcnRzOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgT3V0cHV0IG9iamVjdHNcclxuICAgICAgICAgICAgICAgIG91dHB1dDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYSBzdHVkZW50IHJ1blxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0cjogdGhlIGZpbGVuYW1lIHRoYXQgd2FzIGxhc3QgZXhlY3V0ZWQgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGVzZSByZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdExpbmU6IGtvLm9ic2VydmFibGUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXkgb2Ygc2ltcGxlIG9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VEYXRhOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VHJhY2VTdGVwOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFjdHVhbCBleGVjdXRpb24gcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczoga28ub2JzZXJ2YWJsZShudWxsKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gZmVlZGJhY2sgZnJvbSB0aGUgaW5zdHJ1Y3RvciBydW5cclxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RyIChtYXJrZG93bilcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiUmVhZHlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc0Vycm9yOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzVW5jb3ZlcmVkOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IGV4ZWN1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEZ1bmN0aW9ucyB0byBmaXJlIHdoZW4gY2VydGFpbiBldmVudHMgb2NjdXJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogV2hlbiB0aGUgc3R1ZGVudCBnZXRzIGEgc3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImNhbGxiYWNrLnN1Y2Nlc3NcIl0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgc2VydmVyIGlzIGNvbm5lY3RlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJDb25uZWN0ZWQ6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwic2VydmVyLmNvbm5lY3RlZFwiLCB0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGJsb2NrbHlQYXRoOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImJsb2NrbHkucGF0aFwiXSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudFBvaW50OiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcImF0dGFjaG1lbnQucG9pbnRcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBKUXVlcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBNYXBzIGNvZGVzICgnbG9nX2V2ZW50JywgJ3NhdmVfY29kZScpIHRvIFVSTHNcclxuICAgICAgICAgICAgICAgIHVybHM6IHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW1widXJsc1wiXSB8fCB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgaW5pdEludGVyZmFjZSgpIHtcclxuICAgICAgICBsZXQgY29uc3RhbnRzID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgIGxldCBndWkgPSBtYWtlSW50ZXJmYWNlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0YW50cy5jb250YWluZXIgPSAkKGNvbnN0YW50cy5hdHRhY2htZW50UG9pbnQpLmh0bWwoJChndWkpKTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEFzc2lnbm1lbnQoYXNzaWdubWVudF9pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRhZ3ModGFncykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHRhZ3NcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2FtcGxlU3VibWlzc2lvbnMoc2FtcGxlcykge1xyXG4gICAgICAgIC8vIEFscmVhZHkgYSBKU09OIGxpc3QgcmVwcmVzZW50aW5nIHNhbXBsZXNcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3VibWlzc2lvbihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKCFzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC51c2VyLmNvdXJzZUlkKHN1Ym1pc3Npb24uY291cnNlX2lkKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShzdWJtaXNzaW9uLmV4dHJhX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFzc2lnbm1lbnREYXRhXyhkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEludGVyZmFjZSgpO1xyXG4gICAgICAgIGxldCB3YXNTZXJ2ZXJDb25uZWN0ZWQgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZChmYWxzZSk7XHJcbiAgICAgICAgbGV0IGFzc2lnbm1lbnQgPSBkYXRhLmFzc2lnbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlkKGFzc2lnbm1lbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC52ZXJzaW9uKGFzc2lnbm1lbnQudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmNvdXJzZUlkKGFzc2lnbm1lbnQuY291cnNlX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkSWQoYXNzaWdubWVudC5mb3JrZWRfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRWZXJzaW9uKGFzc2lnbm1lbnQuZm9ya2VkX3ZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oYXNzaWdubWVudC5oaWRkZW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZChhc3NpZ25tZW50LnJldmlld2VkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucHVibGljKGFzc2lnbm1lbnQucHVibGljKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudHlwZShhc3NpZ25tZW50LnR5cGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC51cmwoYXNzaWdubWVudC51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcyhhc3NpZ25tZW50LmlwX3Jhbmdlcyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucyhhc3NpZ25tZW50Lmluc3RydWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm5hbWUoYXNzaWdubWVudC5uYW1lKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoYXNzaWdubWVudC5vbl9jaGFuZ2UgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fY2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fY2hhbmdlLnB5XCIsIGFzc2lnbm1lbnQub25fY2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbChhc3NpZ25tZW50Lm9uX2V2YWwgfHwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQub25fZXZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2V2YWwucHlcIiwgYXNzaWdubWVudC5vbl9ldmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKGFzc2lnbm1lbnQub25fcnVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKGFzc2lnbm1lbnQuc3RhcnRpbmdfY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm93bmVySWQoYXNzaWdubWVudC5vd25lcl9pZCk7XHJcbiAgICAgICAgbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyh0aGlzLm1vZGVsLCBhc3NpZ25tZW50LnNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRUYWdzKGFzc2lnbm1lbnQudGFncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2FtcGxlU3VibWlzc2lvbnMoYXNzaWdubWVudC5zYW1wbGVfc3VibWlzc2lvbnMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB0aGlzLmxvYWRTdWJtaXNzaW9uKGRhdGEuc3VibWlzc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbih0cnVlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKHdhc1NlcnZlckNvbm5lY3RlZCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmNvcmdpcy5sb2FkRGF0YXNldHModHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RlbE1ldGhvZHMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgbW9kZWwudWkgPSB7XHJcbiAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgIGlzR3JhZGVyOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVzZXIucm9sZSgpID09PSBcIm93bmVyXCIgfHwgbW9kZWwudXNlci5yb2xlKCkgPT09IFwiZ3JhZGVyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluc3RydWN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWQoKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXRpbGl0aWVzLm1hcmtkb3duKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKCkpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1lbnU6IHtcclxuICAgICAgICAgICAgICAgIGNhbk1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCkgfHwgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgdGV4dE1hcmtTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLm1lbnUuaXNTdWJtaXR0ZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiUmVvcGVuIGZvciBlZGl0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUnVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJNYXJrIGFzIHN1Ym1pdHRlZFwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tNYXJrU3VibWl0dGVkOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLm1lbnUuaXNTdWJtaXR0ZWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcImluUHJvZ3Jlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvblN0YXR1cyhcIlN1Ym1pdHRlZFwiKVxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0dGVkXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vjb25kUm93OiB7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWRiYWNrVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0tcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc1RyYWNlVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbnNvbGVTaG93VmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlKCkgfHwgbW9kZWwudWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hMYWJlbDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBUcmFjZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGFkdmFuY2VTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFuZWwgPSBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uc29sZToge1xyXG4gICAgICAgICAgICAgICAgc2l6ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoaWRlRXZhbHVhdGU6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkgfHwgIW1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vLWVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRWRpdG9yIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW50ZXJuYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxnb3JpdGhtIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0dWRlbnRGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3IobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUVkaXRvcnMoKSA/IFwiTm9uZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPyBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKSA6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuUmVzZXRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5jb2RlKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyhtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcygpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lKCkuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5TYXZlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhbW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpKSxcclxuICAgICAgICAgICAgICAgIGNhbkRlbGV0ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgY2FuUmVuYW1lOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5SRU5BTUFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydERhdGFzZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuY29yZ2lzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBweXRob246IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlTWlycm9yID0gc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0RWRpdG9yLmNvZGVNaXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlTWlycm9yLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNvZGVNaXJyb3IuZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNb2RlOiAobmV3TW9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1WaWV3LkNoYW5nZVwiLCBcIlwiLCBcIlwiLCBuZXdNb2RlLCBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUobmV3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iub2xkUHl0aG9uTW9kZSA9IG5ld01vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGlzdG9yeUF2YWlsYWJsZToga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9mZkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IudXBkYXRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5Pbkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEhpc3RvcnkoKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubG9hZChyZXNwb25zZS5oaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT25IaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9TdGFydCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVByZXZpb3VzKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVOZXh0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RSZWNlbnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb01vc3RSZWNlbnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS51c2UoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmU6ICgpID0+IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpc1J1bm5pbmc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBydW46ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVJbWFnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZm9yY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2VsZi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuZmFkZU91dCgxMDApLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBCbG9ja1B5VHJhY2UobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb25zb2xlID0gbmV3IEJsb2NrUHlDb25zb2xlKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktY29uc29sZVwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5lbmdpbmUgPSBuZXcgQmxvY2tQeUVuZ2luZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmZpbGVTeXN0ZW0gPSBuZXcgQmxvY2tQeUZpbGVTeXN0ZW0obWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5lZGl0b3JzID0gbmV3IEVkaXRvcnMobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1lZGl0b3JcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMucHl0aG9uRWRpdG9yID0gdGhpcy5jb21wb25lbnRzLmVkaXRvcnMuYnlOYW1lKFwicHl0aG9uXCIpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuc2VydmVyID0gbmV3IEJsb2NrUHlTZXJ2ZXIobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb3JnaXMgPSBuZXcgQmxvY2tQeUNvcmdpcyhtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmhpc3RvcnkgPSBuZXcgQmxvY2tQeUhpc3RvcnkobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1oaXN0b3J5LXRvb2xiYXJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEludGVyZmFjZSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZW5naW5lLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQge2VuY29kZUhUTUx9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5jb25zdCBTVEFSVF9FVkFMX0hUTUwgPSBgXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUgZmxvYXQtcmlnaHQgYmxvY2tweS1idG4tZXZhbFwiPlxuICAgIEV2YWx1YXRlXG48L2J1dHRvbj5gO1xuXG5leHBvcnQgY29uc3QgQ09OU09MRV9IVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2NvbC1tZC02IGJsb2NrcHktcGFuZWwgYmxvY2tweS1jb25zb2xlJ1xuICAgICAgICAgIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiQ29uc29sZVwiXG4gICAgICAgICAgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLmNvbnNvbGUuc2l6ZVwiPlxuICAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktc2hvdy1mZWVkYmFjaydcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLnNlY29uZFJvdy5pc0NvbnNvbGVTaG93VmlzaWJsZSwgY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICA8c3Ryb25nPkNvbnNvbGU6PC9zdHJvbmc+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LXByaW50ZXIgYmxvY2tweS1wcmludGVyLWRlZmF1bHQnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgIDwvZGl2PmA7XG5cbmNvbnN0IE5FV19DT05TT0xFX0xJTkVfSFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcblxuLyoqXG4gKlxuICogQGVudW1cbiAqL1xuZXhwb3J0IGxldCBDb25zb2xlTGluZVR5cGUgPSB7XG4gICAgVEVYVDogXCJ0ZXh0XCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgUExPVDogXCJwbG90XCIsXG4gICAgSU1BR0U6IFwiaW1hZ2VcIixcbiAgICBUVVJUTEU6IFwidHVydGxlXCIsXG4gICAgRVZBTDogXCJldmFsXCIsXG4gICAgU1RBUlRfRVZBTDogXCJzdGFydF9ldmFsXCIsXG4gICAgVkFMVUU6IFwidmFsdWVcIixcbiAgICBJTlBVVDogXCJpbnB1dFwiLFxuICAgIFRFU1RfQ0FTRTogXCJ0ZXN0X2Nhc2VcIlxufTtcblxuY2xhc3MgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHR5cGUsIGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7XG4gICAgICAgICAgICBmaWxlbmFtZTogU2suY3VyckZpbGVuYW1lLFxuICAgICAgICAgICAgc3RlcDogbWFpbi5jb21wb25lbnRzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCxcbiAgICAgICAgICAgIGxpbmU6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odG1sID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogIFwiYmxvY2tweS1wcmludGVyLW91dHB1dFwiLFxuICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICBcImRhdGEtc3RlcFwiOiB0aGlzLm9yaWdpbi5zdGVwLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0ZXAgXCIgKyB0aGlzLm9yaWdpbi5zdGVwICsgXCIsIExpbmUgXCIgKyB0aGlzLm9yaWdpbi5saW5lXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhbWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRvU2t1bHB0KCkge1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeSh0aGlzLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5odG1sLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUdXJ0bGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgLy8gVE9ETzogQ2FwdHVyZSB0dXJ0bGUgY29tbWFuZHMgZm9yIHRyYWNpbmcgcHVycG9zZXNcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5UVVJUTEUpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtdHVydGxlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUucHJlcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgdGhpcy5odG1sWzBdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW1hZ2UgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU1BR0UsIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLmh0bWwuYWRkQ2xhc3MoXCJibG9ja3B5LWNvbnNvbGUtaW1hZ2Utb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lUGxvdCBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5QTE9ULCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXBsb3Qtb3V0cHV0XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIC8vdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVUZXh0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgYWRkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudCArIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8c2FtcD48L3NhbXA+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVmFsdWUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluLCBjb250ZW50KSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5WQUxVRSwgY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBlbmNvZGVkVGV4dCA9IGVuY29kZUhUTUwodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIGxldCBsaW5lRGF0YSA9ICQoXCI8Y29kZT48L2NvZGU+XCIsIHsgXCJodG1sXCI6IGVuY29kZWRUZXh0IH0pO1xuICAgICAgICAgICAgdGhpcy5odG1sLmFwcGVuZChsaW5lRGF0YSk7XG4gICAgICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lSW5wdXQgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgcHJvbXB0TWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuSU5QVVQsIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSW5wdXQgYm94IGZvciByZWNlaXZpbmcgaW5wdXQoKSBmcm9tIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIC8vIFBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbmluZ1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBJbnB1dCBmb3JtXG4gICAgICAgICAgICBsZXQgaW5wdXRGb3JtID0gJChcIjxpbnB1dCB0eXBlPSd0ZXh0JyAvPlwiKTtcbiAgICAgICAgICAgIC8vIEVudGVyIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGlucHV0QnRuID0gJChcIjxidXR0b24+PC9idXR0b24+XCIsIHtcImh0bWxcIjogXCJFbnRlclwifSk7XG4gICAgICAgICAgICAvLyBHcm91cCBmb3JtIGFuZCBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEdyb3VwID0gJChcIjxkaXY+PC9kaXY+XCIsIHtcImNsYXNzXCI6IFwiYmxvY2tweS1jb25zb2xlLWlucHV0XCJ9KTtcbiAgICAgICAgICAgIGlucHV0R3JvdXAuYXBwZW5kKGlucHV0Rm9ybSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEJ0bik7XG4gICAgICAgICAgICAvLyBQcm9tcHQgYm94LCBuZXcgbGluZSwgaW5wdXQgZ3JvdXBcbiAgICAgICAgICAgIGxldCBpbnB1dEJveCA9ICQoXCI8ZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0TXNnID0gJChcIjxzYW1wPjwvc2FtcD5cIiwgIHtcImh0bWxcIjogZW5jb2RlZFRleHR9KTtcbiAgICAgICAgICAgICAgICBpbnB1dEJveC5hcHBlbmQoaW5wdXRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKCQoXCI8YnI+XCIpKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoaW5wdXRHcm91cCk7XG4gICAgICAgICAgICAvLyBSZW5kZXJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoaW5wdXRCb3gpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvLyBNYWtlIGl0IGludGVyYWN0aXZlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW50ZXJhY3RpdmUoaW5wdXRGb3JtLCBpbnB1dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcblxuICAgIG1ha2VJbnRlcmFjdGl2ZShpbnB1dCwgYnV0dG9uKSB7XG4gICAgICAgIGxldCByZXNvbHZlT25DbGljaztcbiAgICAgICAgbGV0IHN1Ym1pdHRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2sgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlT25DbGljayhpbnB1dC52YWwoKSk7XG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5odG1sLnRvb2x0aXAoKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnV0dG9uLmNsaWNrKHN1Ym1pdEZvcm0pO1xuICAgICAgICBpbnB1dC5rZXl1cCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICByZXR1cm4gc3VibWl0dGVkUHJvbWlzZTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lRXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZUlucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIFwiRXZhbHVhdGU6XCIpO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLlNUQVJUX0VWQUwpO1xuICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKCQoU1RBUlRfRVZBTF9IVE1MKSk7XG4gICAgICAgIHRoaXMuaHRtbC5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZXhlY3V0ZS5ldmFsdWF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlDb25zb2xlIHtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBmb3IgbWFuYWdpbmcgdGhlIGNvbnNvbGUsIHdpdGggZmVhdHVyZXMgZm9yIHRoaW5ncyBsaWtlIHByaW50aW5nLCBwbG90dGluZywgZXZhbGluZywgaW5wdXRpbmcuXG4gICAgICogVGhlIFwicHJpbnRlclwiIGlzIHRoZSByZWdpb24gd2hlcmUgd2UgcHV0IHRoaW5ncywgYXMgb3Bwb3NlZCB0byB0aGUgY29uc29sZSBhcyBhIHdob2xlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5wcmludGVyVGFnID0gdGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyXCIpO1xuXG4gICAgICAgIHRoaXMuTUlOSU1VTV9XSURUSCA9IDIwMDtcbiAgICAgICAgdGhpcy5NSU5JTVVNX0hFSUdIVCA9IDIwMDtcbiAgICAgICAgdGhpcy5ERUZBVUxUX0hFSUdIVCA9IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKTsgLy8gTGV0IENTUyBkZWZpbmUgdGhpc1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dDtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gVE9ETzogSWYgdGhlIHVzZXIgbW9kaWZpZXMgYSBmaWxlLCB0aGVuIG1ha2UgdGhlIGNvbnNvbGUgbG9vayBmYWRlZCBhIGxpdHRsZVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyLCBpbmNsdWRpbmcgcmVtb3ZpbmcgYW55IHRleHQgaW4gaXQgYW5kXG4gICAgICogZml4aW5nIGl0cyBzaXplLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm91dHB1dC5yZW1vdmVBbGwoKTtcblxuICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZW1wdHkoKTtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgcmVzZXQgaXRcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQodGhpcy5ERUZBVUxUX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHVydGxlTGluZSA9IG51bGw7XG4gICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldFR1cnRsZUxpbmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBhc3NldHM6IHRoaXMubG9hZEFzc2V0LmJpbmQodGhpcylcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbG9hZEFzc2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VHVydGxlTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHVydGxlTGluZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbmV3IENvbnNvbGVMaW5lVHVydGxlKHRoaXMubWFpbik7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCBkbyBzb1xuICAgICAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCgpID09PSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByaW50ZXJEaW1lbnNpb24gPSB0aGlzLnByaW50ZXJUYWcud2lkdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KGN1cnJlbnRQcmludGVyRGltZW5zaW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQodGhpcy5wcmludGVyVGFnLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICBTay5UdXJ0bGVHcmFwaGljcy5oZWlnaHQgPSBjdXJyZW50UHJpbnRlckRpbWVuc2lvbi00MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50dXJ0bGVMaW5lLmh0bWxbMF07XG4gICAgfVxuXG4gICAgZmluaXNoVHVydGxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLnNhdmVUdXJ0bGVPdXRwdXQoKSkge1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IHRoaXMudHVydGxlTGluZS5odG1sLmZpbmQoXCJjYW52YXNcIikubGFzdCgpWzBdO1xuICAgICAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBsZXQgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUltYWdlKFwidHVydGxlX291dHB1dFwiLCBkYXRhVXJsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IHR1cnRsZXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdpZHRoXG4gICAgbmV3VHVydGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9XSURUSCwgdGhpcy5wcmludGVyVGFnLndpZHRoKCktNDApO1xuICAgIH1cblxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuTUlOSU1VTV9IRUlHSFQsIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSs0MCk7XG4gICAgfVxuXG4gICAgaXNNdXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBlYWNoIHByaW50ZWQgZWxlbWVudCBpbiB0aGUgcHJpbnRlciBhbmQgbWFrZXMgaXQgaGlkZGVuXG4gICAgICogb3IgdmlzaWJsZSwgZGVwZW5kaW5nIG9uIHdoYXQgc3RlcCB3ZSdyZSBvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwIC0gVGhlIGN1cnJlbnQgc3RlcCBvZiB0aGUgZXhlY3V0ZWQgcHJvZ3JhbSB0aGF0IHdlJ3JlIG9uOyBlYWNoIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgbXVzdCBiZSBtYXJrZWQgd2l0aCBhIFwiZGF0YS1zdGVwXCIgcHJvcGVydHkgdG8gcmVzb2x2ZSB0aGlzLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlIC0gRGVwcmVjYXRlZCwgbm90IHN1cmUgd2hhdCB0aGlzIGV2ZW4gZG9lcy5cbiAgICAgKi9cbiAgICBzdGVwUHJpbnRlcihzdGVwLCBwYWdlKSB7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlci1vdXRwdXRcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJkYXRhLXN0ZXBcIikgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByaW50IGEgbGluZSB0byB0aGUgb24tc2NyZWVuIHByaW50ZXIuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmVUZXh0IC0gQSBsaW5lIG9mIHRleHQgdG8gYmUgcHJpbnRlZCBvdXQuXG4gICAgICovXG4gICAgcHJpbnQobGluZVRleHQpIHtcbiAgICAgICAgLy8gRW1wdHkgc3RyaW5ncyBtZWFucyBkbyBub3RoaW5nLlxuICAgICAgICAvLyBwcmludChcIlwiLCBlbmQ9XCJcIilcbiAgICAgICAgaWYgKCFsaW5lVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbHVzaCA9IGZhbHNlO1xuICAgICAgICBpZiAobGluZVRleHQuY2hhckF0KGxpbmVUZXh0Lmxlbmd0aC0xKSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgZmx1c2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGxpdExpbmVzID0gbGluZVRleHQuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGlmICh0aGlzLmxpbmVCdWZmZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIuYWRkQ29udGVudChzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTE7IGkgPCBzcGxpdExpbmVzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVRleHQodGhpcy5tYWluLCBDb25zb2xlTGluZVR5cGUuVEVYVCwgc3BsaXRMaW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsdXNoKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgcGxvdChwbG90cykge1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVQbG90KHRoaXMubWFpbiwgcGxvdHMpO1xuICAgICAgICB0aGlzLnBsb3RCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsb3RCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRQSUxJbWFnZShpbWFnZURhdGEpIHtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUltYWdlKHRoaXMubWFpbiwgaW1hZ2VEYXRhLmltYWdlKTtcbiAgICAgICAgdGhpcy5pbWFnZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VCdWZmZXI7XG4gICAgfVxuXG4gICAgcHJpbnRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgcHJpbnRlZFZhbHVlID0gbmV3IENvbnNvbGVMaW5lVmFsdWUodGhpcy5tYWluLCB2YWx1ZSk7XG4gICAgICAgIHByaW50ZWRWYWx1ZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHByaW50ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZWdpc3RlcnMgYSBQcm9taXNlIGZyb20gdGhlIElucHV0IGJveFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9tcHRNZXNzYWdlIC0gTWVzc2FnZSB0byBkaXNwbGF5IHRvIHRoZSB1c2VyLlxuICAgICAqXG4gICAgICovXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW5wdXQodGhpcy5tYWluLCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfTtcblxuXG4gICAgZXZhbHVhdGUoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICBiZWdpbkV2YWwoKSB7XG4gICAgICAgIGxldCBzdGFydEV2YWx1YXRpb24gPSBuZXcgQ29uc29sZUxpbmVTdGFydEV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiBzdGFydEV2YWx1YXRpb24ucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5jb25kaXRpb25hbGx5IHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKi9cbiAgICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy50YWcuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLnByb3AoXCJzY3JvbGxIZWlnaHRcIikgLSB0aGlzLnRhZy5wcm9wKFwiY2xpZW50SGVpZ2h0XCIpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxufSIsImltcG9ydCB7c2x1Z30gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8vIFRPRE86IGVkaXRvci5ibS5ibG9ja0VkaXRvci5leHRyYVRvb2xzW11cblxuZXhwb3J0IGxldCBfSU1QT1JURURfREFUQVNFVFMgPSB7fTtcbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTID0ge307XG5cbi8qKlxuICogVGhpcyBpcyBhIHZlcnkgc2ltcGxpc3RpYyBoZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIHRyYW5zZm9ybVxuICogYSBnaXZlbiBidXR0b24gaW50byBhIFwiTG9hZGVkXCIgc3RhdGUgKGRpc2FibGVkLCBwcmVzc2VkIHN0YXRlLCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidG4gLSBBbiBIVE1MIGVsZW1lbnQgdG8gY2hhbmdlIHRoZSB0ZXh0IG9mLlxuICovXG5sZXQgc2V0QnV0dG9uTG9hZGVkID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGJ0bi5hZGRDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxuICAgICAgICAucHJvcChcImRpc2FibGVkXCIsIHRydWUpXG4gICAgICAgIC50ZXh0KFwiTG9hZGVkXCIpXG4gICAgICAgIC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIFwidHJ1ZVwiKTtcbn07XG5cblxuLyoqXG4gKiBNb2R1bGUgdGhhdCBjb25uZWN0cyB0byB0aGUgQ09SR0lTIGRhdGFzZXRzIGFuZCBtYW5hZ2VzIGludGVyYWN0aW9uc1xuICogd2l0aCB0aGVtLiBUaGlzIGluY2x1ZGVzIGxvYWRpbmcgaW4gZGF0YXNldHMgYXQgbGF1bmNoIGFuZCBvbi10aGUtZmx5LlxuICogTm90ZSB0aGF0IHRoaXMgaGFzIG5vIHByZXNlbmNlIG9uIHNjcmVlbiwgc28gaXQgZG9lcyBub3QgaGF2ZSBhIHRhZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5Q29yZ2lzfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5Q29yZ2lzKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgdGhpcy5sb2FkZWREYXRhc2V0cyA9IFtdO1xuICAgIHRoaXMubG9hZERhdGFzZXRzKCk7XG59XG5cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmxvYWREYXRhc2V0cyA9IGZ1bmN0aW9uIChzaWxlbnRseSkge1xuICAgIC8vIExvYWQgaW4gZWFjaCB0aGUgZGF0YXNldHNcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWwsXG4gICAgICAgIGVkaXRvciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvcixcbiAgICAgICAgc2VydmVyID0gdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyO1xuICAgIGxldCBpbXBvcnRzID0gW107XG4gICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cygpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lICYmICEobmFtZSBpbiBCbG9ja01pcnJvckJsb2NrRWRpdG9yLkVYVFJBX1RPT0xTKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoLmFwcGx5KGltcG9ydHMsIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnKG5hbWUpLCBuYW1lLCBzaWxlbnRseSkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGRhdGFzZXRzIGFyZSBsb2FkZWQsIHVwZGF0ZSB0aGUgdG9vbGJveC5cbiAgICAkLndoZW4uYXBwbHkoJCwgaW1wb3J0cykuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUUklHR0VSRURcIik7XG4gICAgICAgIGVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICBlZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXJ2ZXIuZmluYWxpemVTdWJzY3JpcHRpb25zKCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIExvYWRzIHRoZSBkZWZpbml0aW9ucyBmb3IgYSBkYXRhc2V0IGludG8gdGhlIGVudmlyb25tZW50LCBpbmNsdWRpbmdcbiAqIHRoZSBkYXRhc2V0IChhcyBhIEpTIGZpbGUpLCB0aGUgc2t1bHB0IGJpbmRpbmdzLCBhbmQgdGhlIGJsb2NrbHlcbiAqIGJpbmRpbmdzLiBUaGlzIHJlcXVpcmVzIGFjY2VzcyB0byBhIENPUkdJUyBzZXJ2ZXIsIGFuZCBvY2N1cnNcbiAqIGFzeW5jaHJvbm91c2x5LiBUaGUgcmVxdWVzdHMgYXJlIGZpcmVkIGFuZCB0aGVpciBkZWZlcnJlZCBvYmplY3RzXG4gKiBhcmUgcmV0dXJuZWQgLSBjYWxsZXJzIGNhbiB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBwZXJmb3JtIGFuIGFjdGlvblxuICogb24gY29tcGxldGlvbiBvZiB0aGUgaW1wb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnIC0gVGhlIFVSTCBzYWZlIHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgdXNlci1mcmllbmRseSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXkuPERlZmVycmVkPn0gLSBSZXR1cm5zIHRoZSBhc3luYyByZXF1ZXN0cyBhcyBkZWZlcnJlZCBvYmplY3RzLlxuICovXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5pbXBvcnREYXRhc2V0ID0gZnVuY3Rpb24gKHNsdWcsIG5hbWUpIHtcbiAgICBsZXQgdXJsX3JldHJpZXZhbHMgPSBbXTtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzICsgXCJibG9ja3B5L1wiICsgc2x1ZyArIFwiL1wiICsgc2x1ZztcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnB1c2gobmFtZSk7XG4gICAgICAgIC8vIEFjdHVhbGx5IGdldCBkYXRhXG4gICAgICAgIGxldCBnZXREYXRhc2V0ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2RhdGFzZXQuanNcIik7XG4gICAgICAgIC8vIExvYWQgZ2V0Q29tcGxldGUgc2lsZW50bHkgaW4gdGhlIGJhY2tncm91bmQgYmVjYXVzZSBpdHMgYmlnIDooXG4gICAgICAgIGxldCBnZXRDb21wbGV0ZSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9jb21wbGV0ZS5qc1wiKTtcbiAgICAgICAgbGV0IGdldFNrdWxwdCA9ICQuZ2V0KHJvb3QgKyBcIl9za3VscHQuanNcIiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW1wic3JjL2xpYi9cIiArIHNsdWcgKyBcIi9fX2luaXRfXy5qc1wiXSA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZ2V0QmxvY2tseSA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9ibG9ja2x5LmpzXCIpO1xuICAgICAgICAvLyBPbiBjb21wbGV0aW9uLCB1cGRhdGUgbWVudXMuXG4gICAgICAgICQud2hlbihnZXREYXRhc2V0LCBnZXRTa3VscHQsIGdldEJsb2NrbHkpLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWREYXRhc2V0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnRleHRUb0Jsb2Nrcy5oaWRkZW5JbXBvcnRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucmVtb3ZlKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdXJsX3JldHJpZXZhbHMucHVzaChnZXREYXRhc2V0LCBnZXRTa3VscHQsIGdldEJsb2NrbHkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsX3JldHJpZXZhbHM7XG59O1xuXG4vKipcbiAqIE9wZW5zIGEgZGlhbG9nIGJveCB0byBwcmVzZW50IHRoZSB1c2VyIHdpdGggdGhlIGRhdGFzZXRzIGF2YWlsYWJsZVxuICogdGhyb3VnaCB0aGUgQ09SR0lTIHNlcnZlci4gVGhpcyByZXF1aXJlcyBhIGNhbGwsIHNvIHRoaXMgbWV0aG9kXG4gKiBjb21wbGV0ZXMgYXN5bmNocm9ub3VzbHkuIFRoZSBkaWFsb2cgaXMgY29tcG9zZWQgb2YgYSB0YWJsZSB3aXRoXG4gKiBidXR0b25zIHRvIGxvYWQgdGhlIGRhdGFzZXRzIChNb3JlIHRoYW4gb25lIGRhdGFzZXQgY2FuIGJlIGxvYWRlZFxuICogZnJvbSB3aXRoaW4gdGhlIGRpYWxvZyBhdCBhIHRpbWUpLlxuICovXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHM7XG4gICAgICAgICQuZ2V0SlNPTihyb290ICsgXCJpbmRleC5qc29uXCIsICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gTWFrZSB1cCB0aGUgQm9keVxuICAgICAgICAgICAgbGV0IGRhdGFzZXRzID0gZGF0YS5ibG9ja3B5O1xuICAgICAgICAgICAgbGV0IGRvY3VtZW50YXRpb24gPSByb290K1wiYmxvY2tweS9pbmRleC5odG1sXCI7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSAkKGA8cD5Eb2N1bWVudGF0aW9uIGlzIGF2YWlsYWJsZSBhdCA8YSBocmVmPScke2RvY3VtZW50YXRpb259JyB0YXJnZXQ9X2JsYW5rPnVybDwvYT48L3A+YCk7XG4gICAgICAgICAgICBsZXQgYm9keSA9ICQoXCI8dGFibGU+PC90YWJsZT5cIiwge1wiY2xhc3NcIjogXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkXCJ9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGFzZXRzKS5zb3J0KCkubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNsdWdnZWROYW1lID0gc2x1ZyhkYXRhc2V0c1tuYW1lXS5uYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVOYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cImZhbHNlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+TG9hZDwvYnV0dG9uPicpO1xuICAgICAgICAgICAgICAgIGxldCBpbWdTcmMgPSByb290K1wiLi4vaW1hZ2VzL2RhdGFzZXRzL1wiK25hbWUrXCItaWNvbi5wbmdcIjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkZWREYXRhc2V0cy5pbmRleE9mKHNsdWdnZWROYW1lKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkxvYWRlZChidG4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGljayggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWdnZWROYW1lLCBcIkRhdGEgLSBcIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkxvYWRlZChidG4pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9sZXQgaW1nID0gYDxpbWcgc3JjPScke2ltZ1NyY30nIGNsYXNzPVwiY29yZ2lzLWljb25cIj5gO1xuICAgICAgICAgICAgICAgICQoXCI8dHI+PC90cj5cIilcbiAgICAgICAgICAgICAgICAgICAgLy8uYXBwZW5kKCQoXCI8dGQ+XCIgKyBpbWcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLm92ZXJ2aWV3ICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPjwvdGQ+XCIpLmFwcGVuZChidG4pKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kVG8oc3RhcnQpO1xuICAgICAgICAgICAgLy8gU2hvdyB0aGUgYWN0dWFsIGRpYWxvZ1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLnNob3coXCJJbXBvcnQgRGF0YXNldHNcIiwgc3RhcnQsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY4OTExNjkwOTQ1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1Njg5MTE2OTA5MjhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gVE9ETzogRHlhbm1pY2FsbHkgcG9wdWxhdGUgYXJpYS1sYWJlbGxlZGJ5IGluIHRoaXMgYW5kIG90aGVyIHBsYWNlc1xuXG5leHBvcnQgbGV0IERJQUxPR19IVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9J2Jsb2NrcHktZGlhbG9nIG1vZGFsIGhpZGRlbidcbiAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgYXJpYS1sYWJlbD0nRGlhbG9nJ1xuICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZyBtb2RhbC1sZycgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1jb250ZW50JyByb2xlPSdyZWdpb24nIGFyaWEtbGFiZWw9J0RpYWxvZyBjb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9J21vZGFsLXRpdGxlJz5EeW5hbWljIENvbnRlbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2Nsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1ib2R5JyBzdHlsZT0nd2lkdGg6MTAwJTsgaGVpZ2h0OjQwMHB4OyB3aGl0ZS1zcGFjZTpwcmUtd3JhcCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbi8qKlxuICogQSB1dGlsaXR5IG9iamVjdCBmb3IgcXVpY2tseSBhbmQgY29udmVuaWVudGx5IGdlbmVyYXRpbmcgZGlhbG9nIGJveGVzLlxuICogVW5mb3J0dW5hdGVseSwgdGhpcyBkb2Vzbid0IGR5bmFtaWNhbGx5IGNyZWF0ZSBuZXcgYm94ZXM7IGl0IHJldXNlcyB0aGUgc2FtZSBvbmVcbiAqIG92ZXIgYW5kIG92ZXIgYWdhaW4uIEl0IHR1cm5zIG91dCBkeW5hbWljYWxseSBnZW5lcmF0aW5nIG5ldyBkaWFsb2cgYm94ZXNcbiAqIGlzIGEgcGFpbiEgU28gd2UgY2FuJ3Qgc3RhY2sgdGhlbS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5RGlhbG9nfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlEaWFsb2cobWFpbiwgdGFnKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgIHRoaXMudGl0bGVUYWcgPSB0YWcuZmluZChcIi5tb2RhbC10aXRsZVwiKTtcbiAgICB0aGlzLmJvZHlUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1ib2R5XCIpO1xufVxuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy50YWcuZHJhZ2dhYmxlKHtcbiAgICAgICAgXCJoYW5kbGVcIjogXCIubW9kYWwtdGl0bGVcIlxuICAgIH0pO1xuXG4gICAgdGhpcy50YWcub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKG9uY2xvc2UgIT09IHVuZGVmaW5lZCAmJiBvbmNsb3NlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvbmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgTG9hZGluZyBBc3NpZ25tZW50XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIGFzc2lnbm1lbnQuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmAsKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLlNDUkVFTlNIT1RfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE9cbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIFVwZGF0aW5nIFN1Ym1pc3Npb24gU3RhdHVzXCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIHVwZGF0aW5nIHlvdXIgc3VibWlzc2lvbiBzdGF0dXMuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19ISVNUT1JZID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIExvYWRpbmcgSGlzdG9yeVwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHlvdXIgaGlzdG9yeS48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCk7XG59O1xuIiwiaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiLi4vZWRpdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlID0+XHJcbiAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkudXBsb2FkRmlsZShlKVxyXG4gICAgKTtcclxuICAgIGZpbGVSZWFkZXIuZmlsZU5hbWUgPSBmaWxlc1swXS5uYW1lO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbHVnZ2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IHtuYW1lLCBleHRlbnNpb24sIGNvbnRlbnRzLCBtaW1ldHlwZX0gPSBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS5kb3dubG9hZEZpbGUoKTtcclxuICAgIC8vIE1ha2Ugc2FmZVxyXG4gICAgbmFtZSA9IHNsdWdnaWZ5KG5hbWUpO1xyXG4gICAgbmFtZSA9IG5hbWUgKyBleHRlbnNpb247XHJcbiAgICAvLyBNYWtlIHRoZSBkYXRhIGRvd25sb2FkIGFzIGEgZmlsZVxyXG4gICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudHNdLCB7dHlwZTogbWltZXR5cGV9KTtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgbmFtZSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbGV0IHRlbXBvcmFyeURvd25sb2FkTGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbSA9IG1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVEZWxldGVkKCkge1xyXG4gICAgICAgIC8vIFRPRE86IFN3aXRjaCB0byB0aGUgcHJldmlvdXMgZmlsZSBpbnN0ZWFkIG9mIGEgZGVmYXVsdCBmaWxlXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlVXBkYXRlZChmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IHRoaXMuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcih0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tDdXJyZW50RmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0ud2F0Y2hGaWxlKHRoaXMuZmlsZW5hbWUsIHtcclxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5vbkZpbGVVcGRhdGVkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRoaXMub25GaWxlRGVsZXRlZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBuZXdGaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSB0aGlzLmZpbGVTeXN0ZW0uZ2V0RmlsZShuZXdGaWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5ld0ZpbGVuYW1lIC0gdGhlIGZpbGVuYW1lIHRoYXQgdGhlIG90aGVyIGVkaXRvciB3aWxsIGJlIHN3aXRjaGluZyB0b1xyXG4gICAgICogQHBhcmFtIG9sZEVkaXRvclxyXG4gICAgICogQHBhcmFtIG5ld0VkaXRvclxyXG4gICAgICovXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWUubmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlbmFtZS50eXBlLFxyXG4gICAgICAgICAgICBjb250ZW50czogdGhpcy5maWxlLmhhbmRsZSgpLFxyXG4gICAgICAgICAgICBtaW1ldHlwZTogXCJ0ZXh0L3BsYWluXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiLi9weXRob25cIjtcclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1MgPSBbXHJcbiAgICBbXCJ0b29sYm94TGV2ZWxcIiwgXCJ0b29sYm94X2xldmVsXCIsIFwibm9ybWFsXCIsIFwidG9vbGJveFwiLCBcIklOQ09NUExFVEU6IFdoYXQgbGV2ZWwgb2YgdG9vbGJveCB0byBwcmVzZW50IHRvIHRoZSB1c2VyIChoaWRpbmcgYW5kIHNob3dpbmcgY2F0ZWdvcmllcykuXCJdLFxyXG4gICAgW1wic3RhcnRWaWV3XCIsIFwic3RhcnRfdmlld1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQsIERpc3BsYXlNb2RlcywgXCJUaGUgUHl0aG9uIGVkaXRvciBtb2RlIHRvIHN0YXJ0IGluIHdoZW4gdGhlIHN0dWRlbnQgc3RhcnRzIHRoZSBwcm9ibGVtLlwiXSxcclxuICAgIFtcImRhdGFzZXRzXCIsIFwiZGF0YXNldHNcIiwgXCJcIiwgXCJzdHJpbmdcIiwgXCJUaGUgY3VycmVudCBsaXN0IG9mIGRhdGFzZXRzIGF2YWlsYWJsZSBvbiBsb2FkIGFzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGltZW91dFwiLCBcImRpc2FibGVfdGltZW91dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjb2RlIGlzIGFsbG93ZWQgdG8gcnVuIHdpdGhvdXQgdGltZW91dHMgKHBvdGVudGlhbGx5IGFsbG93aW5nIGluZmluaXRlIGxvb3BzKS5cIl0sXHJcbiAgICBbXCJpc1BhcnNvbnNcIiwgXCJpc19wYXJzb25zXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoaXMgaXMgYSBwYXJzb24ncyBzdHlsZSBxdWVzdGlvbiAoanVtYmxlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUZlZWRiYWNrXCIsIFwiZGlzYWJsZV9mZWVkYmFja1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBubyBpbnN0cnVjdG9yIHNjcmlwdHMgYXJlIHJ1biAoZS5nLiwgb25fcnVuIGFuZCBvbl9ldmFsKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnQgY2Fubm90IGVkaXQgdGhlIGJsb2NrIGludGVyZmFjZSAoYWx0aG91Z2ggaXQgaXMgdmlzaWJsZSkuXCJdLFxyXG4gICAgW1wib25seUludGVyYWN0aXZlXCIsIFwib25seV9pbnRlcmFjdGl2ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbiwgdGhlIHByb2dyYW0gaXMgYXV0b21hdGljYWxseSBydW4sIGFuZCB0aGVuIHRoZSBjb25zb2xlIGVudGVycyBFdmFsIG1vZGUgKGludGVyYWN0aXZlKS5cIl0sXHJcbiAgICBbXCJvbmx5VXBsb2Fkc1wiLCBcIm9ubHlfdXBsb2Fkc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBkaXJlY3RseSBlZGl0YWJsZSAodGhleSB3aWxsIGhhdmUgdG8gdXBsb2FkIHN1Ym1pc3Npb25zKS5cIl0sXHJcbiAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgIFtcImhpZGVGaWxlc1wiLCBcImhpZGVfZmlsZXNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBzZWUgdGhlIFZpZXcgRmlsZXMgdG9vbGJhci5cIl0sXHJcbiAgICBbXCJoaWRlUXVldWVkSW5wdXRzXCIsIFwiaGlkZV9xdWV1ZWRfaW5wdXRzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY2FuIGFjY2VzcyB0aGUgcXVldWVkIGlucHV0cyBib3ggKG1ha2VzIHJlcGVhdGVkIGRlYnVnZ2luZyBlYXNpZXIgZm9yIHRoZSBpbnB1dCBmdW5jdGlvbikuXCJdLFxyXG4gICAgW1wiaGlkZUVkaXRvcnNcIiwgXCJoaWRlX2VkaXRvcnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gYWxsIG9mIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUFsbFwiLCBcImhpZGVfYWxsXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGVuIHRoZSBlbnRpcmUgaW50ZXJmYWNlIGlzIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBFdmFsdWF0ZSBidXR0b24gaXMgbm90IHNob3duIG9uIHRoZSBjb25zb2xlLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNhbm5vdCBzZWUgdGhlIGltcG9ydCBkYXRhc2V0cyBidXR0b24uXCJdLFxyXG4gICAgLy8gVE9ETzogRml4IHRoaXMgb25lIHRvIGJlIHNldHRhYmxlXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIGNlcnRhaW4ga2luZHMgb2YgaW1wb3J0IHN0YXRlbWVudHMgKG1hdHBsb3RsaWIsIHR1cnRsZSwgZGF0YXNldHMpIGFyZSBub3Qgc2hvd24gaW4gdGhlIGJsb2NrIGludGVyZmFjZS5cIl0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlIGNvdmVyYWdlIGJ1dHRvbiBpcyBub3Qgc2hvd24uXCJdLFxyXG4gICAgW1wic2F2ZVR1cnRsZU91dHB1dFwiLCBcInNhdmVfdHVydGxlX291dHB1dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0dXJ0bGUgb3V0cHV0IGlzIHNhdmVkIHdoZW5ldmVyIHRoZSBwcm9ncmFtIHVzZXMgaXQuXCJdLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBBU1NJR05NRU5UX1NFVFRJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bMF0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmQgZm9yIGZpZWxkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VTdGFydFZpZXdUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3LmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LXN0YXJ0LXZpZXctc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwgPSBBU1NJR05NRU5UX1NFVFRJTkdTXHJcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgc2ltcGxlIGJvb2xlYW5zIHRoaXMgd2F5XHJcbiAgICAuZmlsdGVyKChzZXR0aW5nKSA9PiBzZXR0aW5nWzNdID09PSBcImJvb2xcIilcclxuICAgIC5tYXAoKHNldHRpbmcpID0+IHtcclxuICAgICAgICBsZXQgcHJldHR5TmFtZSA9IHNldHRpbmdbMV0uc3BsaXQoXCJfXCIpLm1hcCh3b3JkPT4od29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt3b3JkLnNsaWNlKDEpKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIj4ke3ByZXR0eU5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuc2V0dGluZ3MuJHtzZXR0aW5nWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldHRpbmdbNF19XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihcIlxcblxcblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktdmlldy1zZXR0aW5nc1wiPlxyXG4gICAgXHJcbiAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnNldHRpbmdzLnNhdmVcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBzdHVkZW50LWZhY2luZyBuYW1lIG9mIHRoZSBhc3NpZ25tZW50LiBBc3NpZ25tZW50cyB3aXRoaW4gYSBncm91cCBhcmUgb3JkZXJlZCBhbHBoYWJldGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGJ5IHRoZWlyIG5hbWUsIHNvIHlvdSBtYXkgd2FudCB0byB1c2UgYSBuYW1pbmcgc2NoZW1lIGxpa2UgXCIjNDMuNSkgV2hhdGV2ZXJcIi5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5VUkw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnVybFwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgY291cnNlLXVuaXF1ZSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zaXN0ZW50bHkgcmVmZXIgdG8gdGhpcyBhc3NpZ25tZW50LiBcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCI+UHVibGljOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIG5vdCBwdWJsaWMsIHVzZXJzIG91dHNpZGUgb2YgdGhlIGNvdXJzZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGUgYXNzaWdubWVudCBpbiBjb3Vyc2UgbGlzdGluZ3MuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiPkhpZGRlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBoaWRkZW4sIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIGdyYWRlIHdoaWxlIHdvcmtpbmcgb24gdGhlIGFzc2lnbm1lbnQuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+UmV2aWV3ZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnJldmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIHJldmlld2VkLCB0aGUgYXNzaWdubWVudCBjYW4gYmUgY29tbWVudGVkIHVwb24gYW5kIHJlZ3JhZGVkIGJ5IHRoZSBzdGFmZiBhZnRlcndhcmRzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlN0YXJ0aW5nIFZpZXc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJzdGFydFZpZXdcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+SVAgUmFuZ2VzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5pcFJhbmdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSVAgQWRkcmVzc2VzIHRoYXQgd2lsbCBiZSBleHBsaWNpdGx5IGFsbG93ZWQuIElmIGJsYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gYWxsIGFkZHJlc3NlcyBhcmUgYWxsb3dlZC4gSWYgYW4gYWRkcmVzcyBzdGFydHMgd2l0aCA8Y29kZT5ePC9jb2RlPiB0aGVuIGl0IGl0IGlzIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgICAgICBibGFja2xpc3RlZCwgYnV0IHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdHVybiB3aXRoIGEgPGNvZGU+ITwvY29kZT4uIEFkZHJlc3NlcyBjYW4gYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYSBiaXQgbWFzayB0byBhbGxvdyBhIHJhbmdlIG9mIGFkZHJlc3Nlcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlByZWxvYWRlZCBEYXRhc2V0czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJkYXRhc2V0c1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7QVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTH1cclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRfdmlldykge1xyXG4gICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoc2V0dGluZ3Muc3RhcnRfdmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc2V0dGluZ3MuXCIrc2VydmVyTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG59XHJcblxyXG5jbGFzcyBBc3NpZ25tZW50U2V0dGluZ3NWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIC8vVE9ETzogdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL1RPRE86IHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBEbyB1cGRhdGVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGVcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgLy90aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZVxyXG4gICAgICAgIC8vdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRTZXR0aW5ncyA9IHtcclxuICAgIG5hbWU6IFwiQXNzaWdubWVudCBTZXR0aW5nc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBBc3NpZ25tZW50U2V0dGluZ3NWaWV3LFxyXG4gICAgdGVtcGxhdGU6IEFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLRE9XTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCI+PC90ZXh0YXJlYT4gICAgXHJcbmA7XHJcblxyXG5cclxuY2xhc3MgTWFya2Rvd25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLm1kZSA9IG5ldyBFYXN5TURFKHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIilbMF0sXHJcbiAgICAgICAgICAgIGF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VTeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgLy8gVE9ETzogaW1hZ2VVcGxvYWRGdW5jdGlvblxyXG4gICAgICAgICAgICByZW5kZXJpbmdDb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNvZGVTeW50YXhIaWdobGlnaHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2guYmluZCh0aGlzLm1kZS5jb2RlbWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZGUudmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5tZGUudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXJrZG93bkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiTWFya2Rvd25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5tZFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBNYXJrZG93bkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogTUFSS0RPV05fRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogVE9ETzogcmVuYW1lIGZpbGVzLCBtYW51YWwgc2F2ZSwgdGFncywgc2FtcGxlX3N1Ym1pc3Npb25zLCBvbl9ldmFsLCBub24tYnVpbHRpbiBmaWxlc1xyXG4gKiBUT0RPOiBpbXBvcnQgZGF0YSwgaGlzdG9yeSwgcnVuLCB1cmxfZGF0YSwgYXNzaWdubWVudF9zZXR0aW5ncywgcGFyc29uc19tb2RlXHJcbiAqIFRPRE86IGRlbGV0ZSBiZWNvbWVzIFwiY2xlYXJcIiBmb3IgaW5zdHJ1Y3RvciBmaWxlc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZW51bSB7c3RyfVxyXG4gKi9cclxuaW1wb3J0IHtBYnN0cmFjdEVkaXRvciwgc2x1Z2dpZnl9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0hJU1RPUllfVE9PTEJBUl9IVE1MfSBmcm9tIFwiLi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IGxldCBEaXNwbGF5TW9kZXMgPSB7XHJcbiAgICBCTE9DSzogXCJibG9ja1wiLFxyXG4gICAgU1BMSVQ6IFwic3BsaXRcIixcclxuICAgIFRFWFQ6IFwidGV4dFwiXHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWtlVGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAnJHttb2RlfSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZWRpdG9ycy5weXRob24udXBkYXRlTW9kZS5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUFlUSE9OX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLXRvb2xiYXIgY29sLW1kLTEyIGJ0bi10b29sYmFyXCJcclxuICAgICAgICAgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiUHl0aG9uIFRvb2xiYXJcIj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSdW4gR3JvdXBcIj4gICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmxvY2tweS1ydW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmV4ZWN1dGUucnVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7J2Jsb2NrcHktcnVuLXJ1bm5pbmcnOiB1aS5leGVjdXRlLmlzUnVubmluZ31cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L3NwYW4+IFJ1blxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXQgR3JvdXBcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucmVzZXRcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmltcG9ydERhdGFzZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvc3Bhbj4gSW1wb3J0IGRhdGFzZXRzXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImV2ZW50OiB7Y2hhbmdlOiB1aS5lZGl0b3JzLnVwbG9hZH1cIj5cclxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gYmxvY2tweS10b29sYmFyLWRvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSGlzdG9yeSBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnRvZ2dsZUhpc3RvcnlNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHVpLmVkaXRvcnMucHl0aG9uLmlzSGlzdG9yeUF2YWlsYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7IGFjdGl2ZTogZGlzcGxheS5oaXN0b3J5TW9kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7ICdhcmlhLXByZXNzZWQnOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWhpc3RvcnlcIj48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwhLS0gRnVsbHkgZnVuY3Rpb25hbCwgYnV0IGEgbGl0dGxlIHRvby4uIEludmFzaXZlIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlbiBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiPjwvc3Bhbj4gRnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTYXZlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5TYXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvc3Bhbj4gU2F2ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L3NwYW4+IERlbGV0ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlbmFtZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuUmVuYW1lXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9zcGFuPiBSZW5hbWVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgJHtISVNUT1JZX1RPT0xCQVJfSFRNTH1cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCJcclxuICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKSB7XHJcbiAgICBsZXQgaXB5bmIgPSBKU09OLnBhcnNlKGNvZGUpO1xyXG4gICAgbGV0IGlzVXNhYmxlID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICFjZWxsLnNvdXJjZVswXS5zdGFydHNXaXRoKFwiJVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCBtYWtlUHl0aG9uID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIicnJ1wiK2NlbGwuc291cmNlLmpvaW4oXCJcXG5cIikrXCInJydcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlweW5iLmNlbGxzLmZpbHRlcihpc1VzYWJsZSkubWFwKG1ha2VQeXRob24pLmpvaW4oXCJcXG5cIik7XHJcbn1cclxuXHJcbmNsYXNzIFB5dGhvbkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiKSk7XHJcbiAgICAgICAgdGhpcy5ibSA9IG5ldyBCbG9ja01pcnJvcih7XHJcbiAgICAgICAgICAgIFwiY29udGFpbmVyXCI6IHRoaXMudGFnWzBdLFxyXG4gICAgICAgICAgICBcInJ1blwiOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bi5iaW5kKG1haW4uY29tcG9uZW50cy5lbmdpbmUpLFxyXG4gICAgICAgICAgICBcInNraXBTa3VscHRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJibG9ja2x5TWVkaWFQYXRoXCI6IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5ibG9ja2x5UGF0aCxcclxuICAgICAgICAgICAgLy8naGVpZ2h0JzogJzIwMDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFrZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlRXh0cmFCbG9ja2x5KCkge1xyXG4gICAgICAgIHRoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLmNvbmZpZ3VyZUNvbnRleHRNZW51ID0gKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNjcmVlbnNob3RcIixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuU0NSRUVOU0hPVF9CTE9DS1NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBpZiAob2xkRmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKERpc3BsYXlNb2Rlcy5URVhUKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHRoaXMub2xkUHl0aG9uTW9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudEJNTGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm0uYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9ICgpID0+IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaXNQYXJzb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzRXJyb3Iuc3Vic2NyaWJlKChsaW5lcykgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci1lcnJvci1saW5lXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc1VuY292ZXJlZC5zdWJzY3JpYmUoKGxpbmVzKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci11bmNvdmVyZWQtbGluZVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UucmVuZGVyKCk7XHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSB0aGlzIGRvZXNuJ3QgZW5kIHVwIGxvb2tpbmcgcmlnaHQgKGdvIHRvIGEgZGlmZmVyZW50IGVkaXRvciwgY29tZSBiYWNrLCBhbmQgaXQnbGwgYmUgc3F1aXNoZWQpXHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYm0ucmVmcmVzaCgpLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICBpZiAobmV3Q29udGVudHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IHRoaXMuZmlsZS5oYW5kbGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERvZXNuJ3QgbWF0dGVyLCBmaWxlIHdhcyBhbHJlYWR5IHNodXQgZG93bi5cclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gV2UncmUgY2xvc2luZyB0aGlzIGZpbGVcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8odGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldENvZGUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG5cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmJtLmdldENvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5ibS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLnNldE1vZGUodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKG1vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlYWRPbmx5KGlzUmVhZE9ubHkpIHtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcclxuICAgICAgICB0aGlzLmJtLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5VcGxvYWRcIiwgXCJcIiwgXCJcIiwgY29kZSwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb2RlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSA9PT0gXCJhbnN3ZXJcIiAmJiByZXN1bHQuZXh0ZW5zaW9uID09PSBcIi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gc2x1Z2dpZnkodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQubmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lm1pbWV0eXBlID0gXCJ0ZXh0L3gtcHl0aG9uXCI7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkRvd25sb2FkXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci10ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRleHRcIilbMF0sIHtcclxuICAgICAgICAgICAgc2hvd0N1cnNvcldoZW5TZWxlY3Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXJzdExpbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlRhYlwiOiBcImluZGVudE1vcmVcIixcclxuICAgICAgICAgICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJFc2NcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uZGlzcGxheS5pbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiRjExXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmNvZGVNaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMuY29kZU1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJtb2RlbFwiXSA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQubGFzdFN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudExpbmUobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlRGF0YS5yZW1vdmVBbGwoKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVsYXllZFJ1bigpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAxKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLmNvbmZpZ3VyYXRpb24uc2hvd0Vycm9ycy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNrdWxwdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX19mdXR1cmVfXzogU2sucHl0aG9uMyxcclxuICAgICAgICAgICAgLy8gaW1wb3J0XHJcbiAgICAgICAgICAgIHJlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBvcGVuXHJcbiAgICAgICAgICAgIGZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gUHJldmVudHMgcmVhZGluZyBIVE1MIGVsZW1lbnRzIGFzIGZpbGVzXHJcbiAgICAgICAgICAgIGluQnJvd3NlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIGlucHV0XHJcbiAgICAgICAgICAgIGlucHV0ZnVuOiB0aGlzLmlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlucHV0ZnVuVGFrZXNQcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxyXG4gICAgICAgICAgICBpbWFnZVByb3h5OiB0aGlzLmdldEltYWdlUHJveHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8ga2VlcCB0aGUgZ2xvYmFsc1xyXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgLy9Tay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3BlZGFsL3NhbmRib3gvc2FuZGJveC5weVwiXSA9IFwiY2xhc3MgU2FuZGJveDogcGFzc1xcbmRlZiBydW4oKTogcGFzc1xcbmRlZiByZXNldCgpOiBwYXNzXFxuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4uL3RyYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lLCBjb2RlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZml4IHRvIGJlIGN1cnJlbnRseSBhZGRlZCBsaW5lXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcIl8gPSBcIiArIGNvZGU7XHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5BZGRcIiwgXCJcIiwgXCJcIiwgY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUV2YWx1YXRlLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnRWYWx1ZShTay5mZmkucmVtYXBUb0pzKG1vZHVsZS4kZC5fLiRyKCkpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogdGhpcy5jb2RlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnMuanNcIjtcclxuaW1wb3J0IHskc2tfbW9kX2luc3RydWN0b3J9IGZyb20gXCIuLi9za19tb2RfaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgVVRJTElUWV9NT0RVTEVfQ09ERSA9IFwidmFyICRidWlsdGlubW9kdWxlID0gXCIgKyAkc2tfbW9kX2luc3RydWN0b3IudG9TdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIEluc3RydWN0b3JzIGhhdmUgbm8gbGltaXRzXHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgLy8gTXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy8gRGlzYWJsZSBpbnB1dCBib3hcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIC8vIFRPRE8gU2suaW5wdXRmdW4gPSBCbG9ja1B5RW5naW5lLmlucHV0TW9ja0Z1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE86IEFsbG93IGlucHV0IGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIHRpbWVyLCBzb21laG93XHJcbiAgICAgICAgLy8gRW5hYmxlIHV0aWxpdHkgbW9kZVxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IFVUSUxJVFlfTU9EVUxFX0NPREU7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gXCJBcHBsZVBpZVwiO1xyXG4gICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9LCBcImFuc3dlci5weVwiKVxyXG4ke3RpZmFBbmFseXNpc31cclxuZnJvbSBwZWRhbC5zYW5kYm94LnNhbmRib3ggaW1wb3J0IFNhbmRib3hcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gTUFJTl9SRVBPUlRbJ3NhbmRib3gnXVsncnVuJ10gPSBTYW5kYm94KClcclxuI3N0dWRlbnQucnVuKE1BSU5fUkVQT1JUWydzb3VyY2UnXVsnY29kZSddLCBNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2ZpbGVuYW1lJ10sIHJlcG9ydF9leGNlcHRpb25zPUZhbHNlKVxyXG4jZGVidWcoc3R1ZGVudClcclxuc3R1ZGVudC5yZXBvcnRfZXhjZXB0aW9uc19tb2RlID0gVHJ1ZVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50KHJhaXNlX2V4Y2VwdGlvbnM9RmFsc2UpXHJcbiNsb2coc3R1ZGVudC5kYXRhKVxyXG4jc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG4jZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG4jY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5ydW5fc3R1ZGVudCA9IGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnRcclxucmVzZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXRcclxucXVldWVfaW5wdXQgPSBjb21wYXRpYmlsaXR5LnF1ZXVlX2lucHV0XHJcbmdldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LmdldF9vdXRwdXRcclxuZ2V0X3Bsb3RzID0gY29tcGF0aWJpbGl0eS5nZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmZyb20gcGVkYWwgaW1wb3J0IHF1ZXN0aW9uc1xyXG5xdWVzdGlvbnMuc2hvd19xdWVzdGlvbiA9IHNldF9pbnN0cnVjdGlvbnNcclxuIyBUT0RPOiBSZW1vdmUgdGhlIG5lZWQgZm9yIHRoaXMgaGFjayFcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgc3R1ZGVudC5jYWxsKGZ1bmMuX19uYW1lX18sICphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG5cclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXBvcnRbXCJwYXJzZXJcIl0pO1xyXG4gICAgICAgIGxldCBpc1NhZmUgPSAhcmVwb3J0W1wicGFyc2VyXCJdLmVtcHR5ICYmIHJlcG9ydFtcInZlcmlmaWVyXCJdLnN1Y2Nlc3M7XHJcbiAgICAgICAgaW5zdHJ1Y3RvckNvZGUgPSBXUkFQX0lOU1RSVUNUT1JfQ09ERShzdHVkZW50Q29kZVNhZmUsIGluc3RydWN0b3JDb2RlLCBkaXNhYmxlVGlmYSwgaXNTYWZlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnN0cnVjdG9yQ29kZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0IC0gNDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICAvLyBUT0RPIExvZ2dpbmchISEhXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX3J1bi4kZDtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vb25fcnVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBCb29sZWFuKHRoaXMuY29kZS50cmltKCkpLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmZpbmlzaFR1cnRsZXMoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5iZWdpbkV2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5wYXJzZXIuc3VjY2VzcyAmJiByZXBvcnQudmVyaWZpZXIuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiUHJvZ3JhbUVycm9yT3V0cHV0XCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcclxuICAgICAgICBTay5yZXF1ZXN0c0dldCA9IChmaWxlbmFtZSkgPT4gdGhpcy5vcGVuVVJMKGZpbGVuYW1lLCBcInVybFwiKTtcclxuXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9ycygpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmICghcmVwb3J0W1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRSdW5FcnJvcihyZXBvcnQuc3R1ZGVudC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbGFiZWxcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdGhhdCBtYW5hZ2VzIHRoZSBmZWVkYmFjayBhcmVhLCB3aGVyZSB1c2VycyBhcmUgdG9sZCB0aGUgc3RhdGUgb2YgdGhlaXJcbiAgICAgKiBwcm9ncmFtJ3MgZXhlY3V0aW9uIGFuZCBnaXZlbiBndWlkYW5jZS4gQWxzbyBtYW5hZ2VzIHRoZSBjcmVhdGlvbiBvZiB0aGUgVHJhY2UgVGFibGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QmxvY2tQeUZlZWRiYWNrfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnlcIik7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbGFiZWxcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCIpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZXkgY2hhbmdlIHRoZSBzdHVkZW50IGV4dHJhIGZpbGVzLCBhbHNvIHVwZGF0ZSB0aGUgZGlydHkgZmxhZ1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24odHJ1ZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2NyZWVuICh0YWtlcyAxIHNlY29uZCkgdG8gbWFrZSB0aGUgRmVlZGJhY2sgYXJlYSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBmZWVkYmFjayBhcmVhIGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGZWVkYmFja1Zpc2libGUoKSB7XG4gICAgICAgIGxldCB0b3Bfb2ZfZWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9lbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbV9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIGxldCB0b3Bfb2Zfc2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuICgoYm90dG9tX29mX3NjcmVlbiA+IHRvcF9vZl9lbGVtZW50KSAmJiAodG9wX29mX3NjcmVlbiA8IGJvdHRvbV9vZl9lbGVtZW50KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgb3V0cHV0IGN1cnJlbnRseSBpbiB0aGUgZmVlZGJhY2sgYXJlYS4gQWxzbyByZXNldHMgdGhlIHByaW50ZXIgYW5kXG4gICAgICogYW55IGhpZ2hsaWdodGVkIGxpbmVzIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKFwiKlJlYWR5KlwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5oaWRkZW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZmluZEZpcnN0RXJyb3JMaW5lKGZlZWRiYWNrRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZmVlZGJhY2tEYXRhLmxlbmd0aC0xOyBpID49IDA7IGktPSAxKSB7XG4gICAgICAgICAgICBpZiAoXCJwb3NpdGlvblwiIGluIGZlZWRiYWNrRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZWVkYmFja0RhdGFbaV0ucG9zaXRpb24ubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdXBkYXRlUmVndWxhckZlZWRiYWNrKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgd2l0aCB0aGVzZSBuZXcgZXhlY3V0aW9uIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IGRhdGFcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTUVTU0FHRSk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5DQVRFR09SWSk7XG4gICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5MQUJFTCk7XG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkhJREUpO1xuICAgICAgICBsZXQgZGF0YSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5EQVRBKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBiYXNlZCBvbiBhc3NpZ25tZW50cycgc2V0dGluZ3NcbiAgICAgICAgbGV0IGhpZGVTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBpZiAoaGlkZVNjb3JlICYmIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbGFiZWwgPSBcIk5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm8gZXJyb3JzIHJlcG9ydGVkLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtYXAgdG8gZXhwZWN0ZWQgQmxvY2tQeSBsYWJlbHNcbiAgICAgICAgaWYgKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiaW5zdHJ1Y3RvclwiICYmIGxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IFwiZXhwbGFpblwiKSB7XG4gICAgICAgICAgICBsYWJlbCA9IFwiSW5zdHJ1Y3RvciBGZWVkYmFja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgcHJlc2VudCBhIGxhY2sgb2YgZXJyb3IgYXMgYmVpbmcgaW5jb3JyZWN0XG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RlbCBhY2NvcmRpbmdseVxuICAgICAgICBtZXNzYWdlID0gdGhpcy5tYWluLnV0aWxpdGllcy5tYXJrZG93bihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgdHJhY2tpbmcgc3R1ZGVudCBmaWxlLCBsZXQncyB0cmFjayB0aGUgaW5zdHJ1Y3RvciBmaWxlXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkludGVydmVudGlvblwiLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIFwiYW5zd2VyLnB5XCIpO1xuXG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgcHJldmlvdXNseSBoaWdobGlnaHRlZCBsaW5lc1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5RmVlZGJhY2tVcGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrXCIpLnNob3coKS5mYWRlT3V0KDcwMDApO1xuICAgIH07XG5cbiAgICBwcmVzZW50UnVuRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UsIGxhYmVsLCBjYXRlZ29yeSwgbGluZW5vO1xuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic3ludGF4XCI7XG4gICAgICAgICAgICBsZXQgbGluZW5vID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5saW5lbm8pO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5tc2cpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSwgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVycm9yLmFyZ3MudlszXVsyXTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgPHByZT4ke3NvdXJjZX08L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhYmVsID09PSBcImJhZCBpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJhZCBJbnB1dFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmFkIGlucHV0IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFVuZXhwZWN0ZWQgZW5kLW9mLWZpbGUgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTeW50YXggRXJyb3JcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyBcIjxicj5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJydW50aW1lXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkICYmIGxpbmVubyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lbm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGxldCBuYW1lID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgbGV0IHRvcCA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IuYXJncykuam9pbihcIlxcblwiKTtcbiAgICAgICAgbGV0IHRyYWNlYmFjayA9IFwiXCI7XG4gICAgICAgIGlmIChlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gXCJcXG5cXG48YnI+VHJhY2ViYWNrOjxicj5cXG5cIiArIGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lbm8gPSBmcmFtZS5saW5lbm87XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBgRmlsZSA8c3BhbiBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9zcGFuPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGBvbiBsaW5lIDxzcGFuIGNsYXNzPVwibGluZW5vXCI+JHtsaW5lbm99PC9zcGFuPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSBmcmFtZS5zY29wZSAhPT0gXCI8bW9kdWxlPlwiID8gYGluIHNjb3BlICR7ZnJhbWUuc2NvcGV9YCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGA8cHJlPjxjb2RlPiR7ZnJhbWUuc291cmNlfTwvY29kZT48L3ByZT5gO1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlICsgbGluZSArIHNjb3BlICsgXCJcXG5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG48YnI+XCIpO1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gYCR7dHJhY2ViYWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcCtcIlxcblwiK3RyYWNlYmFjaztcbiAgICB9XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay4gUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOlxcblwiO1xuICAgICAgICBtZXNzYWdlICs9IHRoaXMuY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cbn0iLCJjb25zdCBtYWtlVGFiID0gZnVuY3Rpb24oZmlsZW5hbWUsIGZyaWVuZGx5TmFtZSwgaGlkZUlmRW1wdHkpIHtcclxuICAgIGlmIChmcmllbmRseU5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZyaWVuZGx5TmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gJyR7ZmlsZW5hbWV9J30sXHJcbiAgICAgICAgICAgICAgICBjbGljazogZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCAnJHtmaWxlbmFtZX0nKSxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEke2hpZGVJZkVtcHR5fSB8fCB1aS5maWxlcy5oYXNDb250ZW50cygnJHtmaWxlbmFtZX0nKVwiPlxyXG4gICAgICAgICAgICAke2ZyaWVuZGx5TmFtZX08L2E+XHJcbiAgICA8L2xpPmA7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZJTEVTX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWZpbGVzXCJcclxuICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmZpbGVzLnZpc2libGVcIj5cclxuPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxzdHJvbmc+VmlldzogPC9zdHJvbmc+XHJcbiAgICA8L2xpPlxyXG5cclxuICAgICR7bWFrZVRhYihcImFuc3dlci5weVwiKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiU2V0dGluZ3NcIil9XHJcbiAgICAke21ha2VUYWIoXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIlN0YXJ0aW5nIENvZGVcIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fcnVuLnB5XCIsIFwiT24gUnVuXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2NoYW5nZS5weVwiLCBcIk9uIENoYW5nZVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ldmFsLnB5XCIsIFwiT24gRXZhbFwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIj9tb2NrX3VybHMuYmxvY2tweVwiLCBcIlVSTCBEYXRhXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCIsIFwiU2FtcGxlIFN1Ym1pc3Npb25zXCIsIHRydWUpfVxyXG4gICAgJHttYWtlVGFiKFwiIXRhZ3MuYmxvY2tweVwiLCBcIlRhZ3NcIiwgdHJ1ZSl9XHJcbiAgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkIE5ldzwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9tb2NrX3VybHMuYmxvY2tweScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICc/bW9ja191cmxzLmJsb2NrcHknKVwiPlVSTCBEYXRhPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/dGFncy5ibG9ja3B5JylcIj5UYWdzPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/c2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHknKVwiPlNhbXBsZSBTdWJtaXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fY2hhbmdlLnB5JylcIj5PbiBDaGFuZ2U8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkV2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9ldmFsLnB5JylcIj5PbiBFdmFsPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0YXJ0aW5nIEZpbGU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlN0dWRlbnQgRmlsZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgXHJcbjwvdWw+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuLyoqXHJcbiAqIEZpbGVuYW1lcyBsaXZlIGluIG9uZSBvZiBmaXZlIHBvc3NpYmxlIG5hbWVzcGFjZXM6XHJcbiAqICBJbnN0cnVjdG9yICghKTogSW52aXNpYmxlIHRvIHRoZSBzdHVkZW50IHVuZGVyIGFsbCBjaXJjdW1zdGFuY2VzXHJcbiAqICBTdGFydCBTcGFjZSAoXik6IFVzZWQgdG8gcmVzZXQgdGhlIHN0dWRlbnQgbmFtZXNwYWNlXHJcbiAqICBTdHVkZW50IFNwYWNlICgpOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50IHdoZW4gZGlzcGxheS5oaWRlRmlsZXMgaXMgbm90IHRydWUsIGFibGUgdG8gYmUgZWRpdGVkXHJcbiAqICBIaWRkZW4gU3BhY2UgKD8pOiBOb3QgZGlyZWN0bHkgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGFjY2Vzc2libGUgcHJvZ3JhbW1hdGljYWxseVxyXG4gKiAgUmVhZC1vbmx5IFNwYWNlICgmKTogQW4gaW5zdHJ1Y3RvciBmaWxlIHR5cGUgdmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGlzIHVuZWRpdGFibGUgYnkgdGhlbVxyXG4gKiAgU2VjcmV0IFNwYWNlICgkKTogTm90IHZpc2libGUgZnJvbSB0aGUgbWVudSBhdCBhbGwsIHNvbWUgb3RoZXIgbWVjaGFuaXNtIGNvbnRyb2xzIGl0XHJcbiAqICBHZW5lcmF0ZWQgU3BhY2UgKCopOiBWaXNpYmxlIHRvIHRoZSBzdHVkZW50LCBidXQgZGVzdHJveWVkIGFmdGVyIEVuZ2luZS5DbGVhci4gQ2FuIHNoYWRvdyBhbiBhY3R1YWwgZmlsZS5cclxuICogIENvbmNhdGVuYXRlZCBTcGFjZSAoIyk6IFVzZWQgd2hlbiBidW5kbGluZyBhIHNwYWNlIGZvciB0aGUgc2VydmVyLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU1RBUlRJTkdfRklMRVMgPSBbXHJcbiAgICAvLyBTdWJtaXNzaW9uXHJcbiAgICBcImFuc3dlci5weVwiLFxyXG4gICAgLy8gSW5zdHJ1Y3RvciBmaWxlc1xyXG4gICAgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsXHJcbiAgICBcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIixcclxuICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIixcclxuICAgIFwiIW9uX3J1bi5weVwiLFxyXG4gICAgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0lDX05FV19GSUxFUyA9IFtcclxuICAgIFwiIW9uX2NoYW5nZS5weVwiLFxyXG4gICAgXCIhb25fZXZhbC5weVwiLFxyXG4gICAgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgIFwiIXRhZ3MuYmxvY2tweVwiLFxyXG4gICAgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIlxyXG5dO1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGNvbmNhdGVuYXRlZEZpbGUsIG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIGlmIChjb25jYXRlbmF0ZWRGaWxlKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gSlNPTi5wYXJzZShjb25jYXRlbmF0ZWRGaWxlKTtcclxuICAgICAgICBmaWxlcyA9IGZpbGVzLm1hcChmaWxlID0+IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSwgZmlsZS5jb250ZW50cykpO1xyXG4gICAgICAgIG1vZGVsRmlsZUxpc3QoZmlsZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobW9kZWxGaWxlTGlzdCgpLm1hcChmaWxlID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWxlbmFtZTogZmlsZS5maWxlbmFtZSgpLFxyXG4gICAgICAgICAgICBjb250ZW50czogZmlsZS5jb250ZW50cygpXHJcbiAgICAgICAgfTtcclxuICAgIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsRmlsZUxpc3QpIHtcclxuICAgIHJldHVybiBrby5wdXJlQ29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KCkuZm9yRWFjaChmaWxlID0+XHJcbiAgICAgICAgICAgIHJlc3VsdFtmaWxlLmZpbGVuYW1lKCldID0gZmlsZS5jb250ZW50cygpKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQWJzdHJhY3RzIGF3YXkgZGF0YWJhc2UgbG9naWNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmlsZVN5c3RlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVzXyA9IHt9O1xyXG4gICAgICAgIHRoaXMubW91bnRGaWxlcygpO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoTW9kZWwoKTtcclxuICAgICAgICB0aGlzLndhdGNoZXNfID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hGaWxlKGZpbGVuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BXYXRjaGluZ0ZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hNb2RlbCgpIHtcclxuICAgICAgICBsZXQgZmlsZXN5c3RlbSA9IHRoaXM7XHJcbiAgICAgICAgW3RoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXNdLmZvckVhY2goZmlsZUFycmF5ID0+XHJcbiAgICAgICAgICAgIGZpbGVBcnJheS5zdWJzY3JpYmUoZnVuY3Rpb24oY2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxGaWxlID0gY2hhbmdlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImFkZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhY2sgbmV3IGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBmaWxlc3lzdGVtLm5ld0ZpbGUobW9kZWxGaWxlLmZpbGVuYW1lKCksIG1vZGVsRmlsZS5jb250ZW50cygpLCBtb2RlbEZpbGUuY29udGVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLm5vdGlmeVdhdGNoZXMoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2Uuc3RhdHVzID09PSBcImRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyhtb2RlbEZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLCBcImFycmF5Q2hhbmdlXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2Ygc3VibWlzc2lvbi5jb2RlKVxyXG4gICAgLy8gIW9uX3J1bi5weSwgIW9uX2NoYW5nZS5weSwgIW9uX2V2YWwucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlbGV2YW50IGFzc2lnbm1lbnQuPHdoYXRldmVyPlxyXG4gICAgLy8gXnN0YXJ0aW5nX2NvZGUucHlcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGZpcnN0IGVsZW1lbnQgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vIF53aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2YgYXNzaWdubWVudC5zdGFydGluZ0NvZGVcclxuICAgIC8vICF3aGF0ZXZlciBvciA/d2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuZXh0cmFGaWxlc1xyXG4gICAgLy8gT3RoZXJ3aXNlOlxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVzdCBvZiB0aGUgZWxlbWVudHMgb2Ygc3VibWlzc2lvbi5jb2RlXHJcbiAgICAvKipcclxuICAgICAqIE5ldyBzcGVjaWFsIGZpbGVzIG5lZWQgdG8gYmUgcmVnaXN0ZXJlZCBoZXJlXHJcbiAgICAgKiBAcGFyYW0gZmlsZSB7QmxvY2tQeUZpbGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlRmlsZV8oZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX3J1bi5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9jaGFuZ2UucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fZXZhbC5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIl5zdGFydGluZ19jb2RlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIj9tb2NrX3VybHMuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhdGFncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC50YWdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiJHNldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiIVwiKSB8fCBmaWxlLmZpbGVuYW1lLnN0YXJ0c1dpdGgoXCI/XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUluQXJyYXlfKGZpbGUsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUluQXJyYXlfKGZpbGUsIGFycmF5KSB7XHJcbiAgICAgICAgZmlsZS5vd25lciA9IGFycmF5O1xyXG4gICAgICAgIGxldCBjb2RlQnVuZGxlID0gZmlsZS5vd25lcigpO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGNvZGVCdW5kbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvZGVCdW5kbGVbaV0uZmlsZW5hbWUoKSA9PT0gZmlsZS5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSBjb2RlQnVuZGxlW2ldLmNvbnRlbnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxlLmhhbmRsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG1ha2VNb2RlbEZpbGUoZmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gbmV3RmlsZS5jb250ZW50cztcclxuICAgICAgICAgICAgYXJyYXkucHVzaChuZXdGaWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnRGaWxlcygpIHtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIW9uX3J1bi5weVwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8oZXhpc3RpbmdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICBjb250ZW50cyA9IGNvbnRlbnRzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZShjb250ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdLmhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaWxlbmFtZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58b2JqZWN0fSBUaGUgaW5mbyBhYm91dCB0aGUgZmlsZSwgb3IgZmFsc2UgaWYgaXQgY291bGQgbm90IGJlIGRlbGV0ZWRcclxuICAgICAqL1xyXG4gICAgZGVsZXRlRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGlmIChERUxFVEFCTEVfU0lNUExFX0ZJTEVTLmluZGV4T2YoZmlsZW5hbWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUobnVsbCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VycyBhIGNhbGxiYWNrIHRvIGV2ZW50dWFsbHkgY2FsbCBkZWxldGVGaWxlTG9jYWxseV9cclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5maWxlc19bZmlsZW5hbWVdLm93bmVyLnJlbW92ZShtb2RlbEZpbGUgPT4gbW9kZWxGaWxlLmZpbGVuYW1lID09PSBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZCB8fCBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZUxvY2FsbHlfKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLmRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeVdhdGNoZXMoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlLmZpbGVuYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrLnVwZGF0ZWQoZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vVE9ETzogTW92ZSBnZXQgbGluayBkb3duIHRvIGZvb3RlciwgcmVtb3ZlIHZlcnRpY2FsIGJhciBmcm9tIHF1aWNrLW1lbnVcclxuZXhwb3J0IGxldCBGT09URVJfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktc3RhdHVzXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEFzc2lnbm1lbnQnKVwiPkxvYWQgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUFzc2lnbm1lbnQnKVwiPlNhdmUgQXNzaWdubWVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZEZpbGUnKVwiPkxvYWQgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnc2F2ZUZpbGUnKVwiPlNhdmUgRmlsZTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9hZERhdGFzZXQnKVwiPkxvYWQgRGF0YXNldDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygnbG9nRXZlbnQnKVwiPkxvZyBFdmVudDwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiBkYXRhLWJpbmQ9XCJjbGFzczogdWkuc2VydmVyLnN0YXR1cygndXBkYXRlU3VibWlzc2lvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLnNlcnZlci5mb3JjZS51cGRhdGVTdWJtaXNzaW9uXCI+VXBkYXRlIFN1Ym1pc3Npb248L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ29uRXhlY3V0aW9uJylcIj5FeGVjdXRpb248L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1aS5zZXJ2ZXIubWVzc2FnZXNcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+VXNlcjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5pZFwiPjwvc3Bhbj4gKDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIubmFtZVwiPjwvc3Bhbj4pPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+Q291cnNlOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmNvdXJzZUlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+R3JvdXA6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuZ3JvdXBJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkFzc2lnbm1lbnQ6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQuaWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50IFZlcnNpb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGFzc2lnbm1lbnQudmVyc2lvblwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb246IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHN1Ym1pc3Npb24uaWRcIj48L3NwYW4+PC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4+U3VibWlzc2lvbiBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gOyIsIi8vIFRPRE86IFNob3VsZCBkaXNhYmxlIGJ1dHRvbnMgaWYgd2UgY2FuJ3QgYWN0aXZhdGUgdGhlbS5cblxuZXhwb3J0IGNvbnN0IEhJU1RPUllfVE9PTEJBUl9IVE1MID0gYFxuPGRpdiBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS10b29sYmFyIGNvbC1tZC0xMlwiIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkuaGlzdG9yeU1vZGVcIj5cblxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zdGFydCBidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnN0YXJ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj4gU3RhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+IFByZXZpb3VzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYmxvY2tweS1oaXN0b3J5LXNlbGVjdG9yIGZvcm0tY29udHJvbCBjdXN0b20tc2VsZWN0IG1yLTJcIiBhcmlhLXRpdGxlPVwiSGlzdG9yeSBTZWxlY3RvclwiPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkudXNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWZpbGUtaW1wb3J0Jz48L3NwYW4+IFVzZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXItMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+IE5leHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5tb3N0UmVjZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtZm9yd2FyZCc+PC9zcGFuPiBNb3N0IFJlY2VudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cbmA7XG5cbi8qKlxuICogQW4gb2JqZWN0IGZvciBkaXNwbGF5aW5nIHRoZSB1c2VyJ3MgY29kaW5nIGxvZ3MgKHRoZWlyIGhpc3RvcnkpLlxuICogQSBsaWdodHdlaWdodCBjb21wb25lbnQsIGl0cyBvbmx5IGpvYiBpcyB0byBvcGVuIGEgZGlhbG9nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlIaXN0b3J5fVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1B5SGlzdG9yeSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLmVkaXRFdmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBsb2FkKGhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSAkKFwiLmJsb2NrcHktaGlzdG9yeS1zZWxlY3RvclwiKS5lbXB0eSgpO1xuICAgICAgICBsZXQgZWRpdElkID0gMDtcbiAgICAgICAgaGlzdG9yeVxuICAgICAgICAgICAgLmZpbHRlcigoZW50cnkpID0+IChcbiAgICAgICAgICAgICAgICAhZW50cnkuZmlsZV9wYXRoLnN0YXJ0c1dpdGgoXCJfaW5zdHJ1Y3Rvci5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJDb21waWxlXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJJbnRlcnZlbnRpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICAoIXRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpIHx8IGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiWC1TdWJtaXNzaW9uLkxNU1wiKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnRfdHlwZSA9IFJFTUFQX0VWRU5UX1RZUEVTW2VudHJ5LmV2ZW50X3R5cGVdIHx8IGVudHJ5LmV2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXllZCA9IHByZXR0eVByaW50RGF0ZVRpbWUoZW50cnkuY2xpZW50X3RpbWVzdGFtcCkgK1wiIC0gXCIrZXZlbnRfdHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZSA9IChlbnRyeS5ldmVudF90eXBlICE9PSBcIkZpbGUuRWRpdFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gJChcIjxvcHRpb24+PC9vcHRpb24+XCIsIHt0ZXh0OiBkaXNwbGF5ZWQsIGRpc2FibGVkOiBkaXNhYmxlfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFZGl0RXZlbnQoZW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5hdHRyKFwidmFsdWVcIiwgZWRpdElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0RXZlbnRzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBlZGl0SWQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rvci5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1heCgwLCBlZGl0SWQtMSkpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLmNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtb3ZlVG9TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoMCk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZVByZXZpb3VzKCkge1xuICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1heCgwLCBjdXJyZW50SWQtMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVOZXh0KCkge1xuICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnZhbChNYXRoLm1pbih0aGlzLmVkaXRFdmVudHMubGVuZ3RoLTEsIGN1cnJlbnRJZCsxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgbW92ZVRvTW9zdFJlY2VudCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwodGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLnNldENvZGUodGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gcGFyc2VJbnQodGhpcy5zZWxlY3Rvci52YWwoKSwgMTApO1xuICAgICAgICAgICAgbGV0IGNvZGUgPSB0aGlzLmVkaXRFdmVudHNbY3VycmVudElkXS5tZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmZpbGUuaGFuZGxlKGNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFZGl0RXZlbnQoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuICgoZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkVkaXRcIiB8fFxuICAgICAgICAgICAgICAgICBlbnRyeS5ldmVudF90eXBlID09PSBcIkZpbGUuQ3JlYXRlXCIpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZW50cnkuZmlsZV9wYXRoKTtcbiAgICB9XG5cbn1cblxuY29uc3QgUkVNQVBfRVZFTlRfVFlQRVMgPSB7XG4gICAgXCJTZXNzaW9uLlN0YXJ0XCI6IFwiQmVnYW4gc2Vzc2lvblwiLFxuICAgIFwiWC1JUC5DaGFuZ2VcIjogXCJDaGFuZ2VkIElQIGFkZHJlc3NcIixcbiAgICBcIkZpbGUuRWRpdFwiOiBcIkVkaXRlZCBjb2RlXCIsXG4gICAgXCJGaWxlLkNyZWF0ZVwiOiBcIlN0YXJ0ZWQgYXNzaWdubWVudFwiLFxuICAgIFwiUnVuLlByb2dyYW1cIjogXCJSYW4gcHJvZ3JhbVwiLFxuICAgIFwiQ29tcGlsZS5FcnJvclwiOiBcIlN5bnRheCBlcnJvclwiLFxuICAgIFwiWC1TdWJtaXNzaW9uLkxNU1wiOiBcIlVwZGF0ZWQgZ3JhZGVcIlxufTtcblxuY29uc3QgbW9udGhOYW1lcyA9IFtcbiAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxuICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIixcbiAgICBcIkF1Z1wiLCBcIlNlcHRcIiwgXCJPY3RcIixcbiAgICBcIk5vdlwiLCBcIkRlY1wiXG5dO1xuY29uc3Qgd2Vla0RheXMgPSBbXG4gICAgXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIixcbiAgICBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLFxuICAgIFwiU2F0XCJcbl07XG5cbmZ1bmN0aW9uIGlzU2FtZURheShmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0LmdldERhdGUoKSA9PT0gc2Vjb25kLmdldERhdGUoKSAmJlxuICAgICAgICBmaXJzdC5nZXRNb250aCgpID09PSBzZWNvbmQuZ2V0TW9udGgoKSAmJlxuICAgICAgICBmaXJzdC5nZXRGdWxsWWVhcigpID09PSBzZWNvbmQuZ2V0RnVsbFllYXIoKTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgYSBkYXRlL3RpbWUgc3RyaW5nIGFuZCByZXdyaXRlIGl0IGFzIHNvbWV0aGluZ1xuICogbW9yZSBodW1hbiByZWFkYWJsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0aW1lU3RyaW5nIC0gdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIChcIllZWVlNTUREIEhITU1TU1wiKVxuICogQHJldHVybnMge1N0cmluZ30gLSBBIGh1bWFuLXJlYWRhYmxlIHRpbWUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBwcmV0dHlQcmludERhdGVUaW1lKHRpbWVTdHJpbmcpIHtcbiAgICAvKmxldCB5ZWFyID0gdGltZVN0cmluZy5zbGljZSgwLCA0KSxcbiAgICAgICAgbW9udGggPSBwYXJzZUludCh0aW1lU3RyaW5nLnNsaWNlKDQsIDYpLCAxMCktMSxcbiAgICAgICAgZGF5ID0gdGltZVN0cmluZy5zbGljZSg2LCA4KSxcbiAgICAgICAgaG91ciA9IHRpbWVTdHJpbmcuc2xpY2UoOSwgMTEpLFxuICAgICAgICBtaW51dGVzID0gdGltZVN0cmluZy5zbGljZSgxMSwgMTMpLFxuICAgICAgICBzZWNvbmRzID0gdGltZVN0cmluZy5zbGljZSgxMywgMTUpOyovXG4gICAgLy8gVE9ETzogSGFuZGxlIHRpbWV6b25lcyBjb3JyZWN0bHlcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcGFzdCA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVTdHJpbmcsIDEwKSk7XG4gICAgaWYgKGlzU2FtZURheShub3csIHBhc3QpKSB7XG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheVN0ciA9IHdlZWtEYXlzW3Bhc3QuZ2V0RGF5KCldO1xuICAgICAgICBsZXQgbW9udGhTdHIgPSBtb250aE5hbWVzW3Bhc3QuZ2V0TW9udGgoKV07XG4gICAgICAgIGxldCBkYXRlID0gZGF5U3RyICsgXCIsIFwiICsgbW9udGhTdHIgKyBcIiBcIiArIHBhc3QuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IHBhc3QuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiwgXCIrcGFzdC5nZXRGdWxsWWVhcigpICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIE9wZW5zIHRoZSBoaXN0b3J5IGRpYWxvZyBib3guIFRoaXMgcmVxdWlyZXMgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYW5kXG4gKiBvY2N1cnMgYXN5bmNocm9ub3VzbHkuIFRoZSB1c2VycycgY29kZSBpcyBzaG93biBpbiBwcmVmb3JtYXR0ZWQgdGV4dFxuICogdGFncyAobm8gY29kZSBoaWdobGlnaHRpbmcgY3VycmVudGx5KSBhbG9uZyB3aXRoIHRoZSB0aW1lc3RhbXAuXG4gKi9cbkJsb2NrUHlIaXN0b3J5LnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZztcbiAgICB2YXIgYm9keSA9IFwiPHByZT5hID0gMDwvcHJlPlwiO1xuICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5nZXRIaXN0b3J5KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJvZHkgPSBkYXRhLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBsZXRlLCBlbGVtKSB7IFxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlX3N0ciA9IHByZXR0eVByaW50RGF0ZVRpbWUoZWxlbS50aW1lKTtcbiAgICAgICAgICAgIHZhciBuZXdfbGluZSA9IFwiPGI+XCIrY29tcGxldGVfc3RyK1wiPC9iPjxicj48cHJlPlwiK2VsZW0uY29kZStcIjwvcHJlPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlK1wiXFxuXCIrbmV3X2xpbmU7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgICAgICBkaWFsb2cuc2hvdyhcIldvcmsgSGlzdG9yeVwiLCBib2R5LCBmdW5jdGlvbigpIHt9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xufVxuXG4vLyBUT0RPOiBHZXQgc2hhcmVhYmxlIGxpbmsgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW50ZXJmYWNlKG1haW4pIHtcbiAgICByZXR1cm4gYFxuPGRpdiBjbGFzcz0nYmxvY2tweS1jb250ZW50IGNvbnRhaW5lci1mbHVpZCc+XG5cbiAgICA8IS0tIERpYWxvZyAtLT5cbiAgICAke0RJQUxPR19IVE1MfVxuICAgIFxuICAgIDwhLS0gSGlkZGVuIENhcHR1cmUgQ2FudmFzIC0tPlxuICAgIDxjYW52YXMgaWQ9J2NhcHR1cmUtY2FudmFzJyBjbGFzcz0nZC1ub25lJyByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9jYW52YXM+XG4gICAgXG4gICAgPCEtLSBSb3cgMTogSGVhZGVyIGFuZCBRdWljayBNZW51IC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICBcbiAgICAgICAgIDwhLS0gRGVzY3JpcHRpb24gLS0+XG4gICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMTAgYmxvY2tweS1wYW5lbCBibG9ja3B5LWhlYWRlcidcbiAgICAgICAgICAgICAgIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGFiZWw9J0Fzc2lnbm1lbnQgRGVzY3JpcHRpb24nPlxuICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIEFzc2lnbm1lbnQgTmFtZSAtLT5cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9J2hlYWRpbmcnIGFyaWEtbGV2ZWw9JzEnXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrcHktbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QmxvY2tQeTogPC9zdHJvbmc+IFxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogYXNzaWdubWVudC5uYW1lJz48L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gUmVzZXQgSW5zdHJ1Y3Rpb25zIEJ1dHRvbiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWluc3RydWN0aW9ucy1yZXNldFwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuaW5zdHJ1Y3Rpb25zLnJlc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBSZXNldCBpbnN0cnVjdGlvbnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBJbnN0cnVjdGlvbnMgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWluc3RydWN0aW9ucydcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogdWkuaW5zdHJ1Y3Rpb25zLmN1cnJlbnRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1tZC0yIGJsb2NrcHktcGFuZWwgYmxvY2tweS1xdWljay1tZW51J1xuICAgICAgICAgICAgIHJvbGU9J21lbnViYXInIGFyaWEtbGFiZWw9J1F1aWNrIE1lbnUnIHRpdGxlPVwiUXVpY2sgTWVudVwiPlxuICAgICAgICAgICAgPCEtLSBHZXQgU2hhcmVhYmxlIExpbmsgLS0+XG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgR2V0IHNoYXJlYWJsZSBsaW5rPC9idXR0b24+LS0+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5tZW51LmlzU3VibWl0dGVkXCI+XG4gICAgICAgICAgICAgICAgWW91ciBzdWJtaXNzaW9uIGlzIHJlYWR5IHRvIGJlIHJldmlld2VkITwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5jYW5NYXJrU3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdWkubWVudS50ZXh0TWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5tZW51LmNsaWNrTWFya1N1Ym1pdHRlZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBWaWV3IGFzIGluc3RydWN0b3IgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLnJvbGUuaXNHcmFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImJsb2NrcHktYXMtaW5zdHJ1Y3RvclwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGRpc3BsYXkuaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBhcyBpbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDI6IENvbnNvbGUgYW5kIEZlZWRiYWNrIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgXG4gICAgICAgIDwhLS0gQ29uc29sZSAtLT5cbiAgICAgICAgJHtDT05TT0xFX0hUTUx9XG4gICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjayAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlIC0tPlxuICAgICAgICAke0ZFRURCQUNLX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICBcbiAgICAgICAgPCEtLSBUcmFjZSAtLT5cbiAgICAgICAgPCEtLSBrbyBpZjogdWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlIC0tPlxuICAgICAgICAke1RSQUNFX0hUTUx9XG4gICAgICAgIDwhLS0gL2tvIC0tPlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMzogRmlsZSBOYXZpZ2F0aW9uIC0tPlxuICAgIDwhLS0ga28gaWY6IHVpLmZpbGVzLnZpc2libGUgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICAgICAgJHtGSUxFU19IVE1MfVxuICAgIDwvZGl2PlxuICAgIDwhLS0gL2tvIC0tPlxuICAgIFxuICAgIDwhLS0gVmlldyBSb3cgLS0+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0VESVRPUlNfSFRNTH1cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRm9vdGVyIFJvdyAtLT4gICAgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAke0ZPT1RFUl9IVE1MfVxuICAgIDwvZGl2PlxuICAgIFxuPC9kaXY+XG4gICAgYDtcbn07IiwiaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIHNhdmVBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBsZXQgU3RhdHVzU3RhdGUgPSB7XG4gICAgUkVBRFk6IFwicmVhZHlcIixcbiAgICBBQ1RJVkU6IFwiYWN0aXZlXCIsXG4gICAgUkVUUllJTkc6IFwicmV0cnlpbmdcIixcbiAgICBGQUlMRUQ6IFwiZmFpbGVkXCIsXG4gICAgT0ZGTElORTogXCJvZmZsaW5lXCJcbn07XG5cbi8qKlxuICogT2JqZWN0IGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIGV4dGVybmFsIHNlcnZlcnMuIFRoaXMgaW5jbHVkZXMgZnVuY3Rpb25hbGl0eSBmb3JcbiAqIHNhdmluZyBhbmQgbG9hZGluZyBmaWxlcywgbG9nZ2luZyBldmVudHMsIHNhdmluZyBjb21wbGV0aW9ucywgYW5kIHJldHJpZXZpbmcgaGlzdG9yeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5U2VydmVyfVxuICogQHBhcmFtIHtPYmplY3R9IG1haW4gLSBUaGUgbWFpbiBCbG9ja1B5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5U2VydmVyKG1haW4pIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuXG4gICAgLy8gU2F2ZSBVUkxzIGxvY2FsbHkgZm9yIHF1aWNrZXIgYWNjZXNzXG4gICAgdGhpcy51cmxzID0gbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHM7XG5cbiAgICAvLyBBZGQgdGhlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9uXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJCTE9DS1BZXCIpO1xuXG4gICAgLy8gRmF1bHRSZXNpc3RhbnRDYWNoZVxuICAgIHRoaXMucXVldWUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcImxvZ0V2ZW50XCIsIFwiW11cIikpLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0RGVmYXVsdChcInVwZGF0ZVN1Ym1pc3Npb25cIiwgXCJbXVwiKSlcbiAgICB9O1xuICAgIHRoaXMuTUFYX1FVRVVFX1NJWkUgPSB7XG4gICAgICAgIFwibG9nRXZlbnRcIjogMjAwLFxuICAgICAgICBcInVwZGF0ZVN1Ym1pc3Npb25cIjogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5USU1FUl9ERUxBWSA9IDEwMDA7XG4gICAgdGhpcy5GQUlMX0RFTEFZID0gMjAwMDtcblxuICAgIHRoaXMudGltZXJzID0ge307XG5cbiAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA9IDA7XG5cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcyA9IFtdO1xuICAgIHRoaXMuY3JlYXRlU3Vic2NyaXB0aW9ucygpO1xuICAgIHRoaXMuY2hlY2tDYWNoZXMoKTtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgSVAgYWRkcmVzcyBoYXMgY2hhbmdlZCwgbG9nZ2luZyBhbiBldmVudCBpZiB0aGF0IG9jY3Vycy5cbiAqIEBwYXJhbSByZXNwb25zZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0lQID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJJUFwiKSkge1xuICAgICAgICAgICAgbGV0IG9sZElQID0gdGhpcy5zdG9yYWdlLmdldChcIklQXCIpO1xuICAgICAgICAgICAgaWYgKG9sZElQICE9PSByZXNwb25zZS5pcCkge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBcIm9sZFwiOiBvbGRJUCxcbiAgICAgICAgICAgICAgICAgICAgXCJuZXdcIjogcmVzcG9uc2UuaXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiWC1JUC5DaGFuZ2VcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZXJlIGhhdmUgYmVlbiBwcmV2aW91cyBmYWlsdXJlcyBjYWNoZWQsIGFuZCBpZiBzbyByZXRyaWVzIHRoZW0uXG4gKiBUT0RPOiB1cGRhdGVcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tDYWNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVBc3NpZ25tZW50XCIpKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwiYXNzaWdubWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXZlQXNzaWdubWVudFwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5oYXMoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldChcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpO1xuICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5xdWV1ZSkuZm9yRWFjaChmdW5jdGlvbiAoZW5kcG9pbnQpIHtcbiAgICAgICAgKGZ1bmN0aW9uIHB1c2hBbnlRdWV1ZWQocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLnBvcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IHNlcnZlci51cmxzW2VuZHBvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIDEwMDAsIHB1c2hBbnlRdWV1ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoe1wic3VjY2Vzc1wiOiB0cnVlfSk7XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCBmaWxlbmFtZSkge1xuICAgIG1vZGVsLnN1YnNjcmliZSgoY29udGVudHMpID0+XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmF1dG9TYXZlKCkgPyB0aGlzLnNhdmVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykgOiBmYWxzZSwgdGhpcyk7XG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMucHVzaChmaWxlbmFtZSk7XG59O1xuXG4vKipcbiAqIFRPRE86IGZpeFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuc3VibWlzc2lvbi5jb2RlLCBcImFuc3dlci5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vblJ1biwgXCIhb25fcnVuLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCwgXCIhb25fZXZhbC5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSwgXCIhb25fY2hhbmdlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucywgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSwgXCJec3RhcnRpbmdfY29kZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwudWkuZmlsZXMuZXh0cmFTdHVkZW50RmlsZXMsIFwiI2V4dHJhU3R1ZGVudEZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3RhcnRpbmdGaWxlcywgXCIjZXh0cmFTdGFydGluZ0ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYUluc3RydWN0b3JGaWxlcy5ibG9ja3B5XCIpO1xufTtcblxuLyoqXG4gKlxuICogU29tZSBzdWJzY3JpcHRpb25zIGhhdmUgdG8gaGFwcGVuIGFmdGVyIG90aGVyIHRoaW5ncyBoYXZlIGJlZW4gbG9hZGVkLlxuICogUmlnaHQgbm93IHRoaXMgaXMganVzdCBhZnRlciBDT1JHSVMgbGlicmFyaWVzIGhhdmUgYmVlbiBsb2FkZWQsIGJ1dCBtYXliZVxuICogd2UnbGwgYWRkIG1vcmUgbGF0ZXIgYW5kIHRoaXMgd2lsbCBuZWVkIHRvIGJlIHJlZmFjdG9yZWQuXG4gKlxuICogVE9ETzogZml4XG4gKlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5maW5hbGl6ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy90aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0cy5zdWJzY3JpYmUodGhpcy5zYXZlQXNzaWdubWVudC5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZGVmYXVsdCBwYXlsb2FkIGZvciBhbnkgY29tbXVuaWNhdGlvbiB3aXRoIHRoZSBzZXJ2ZXIgQVBJXG4gKiBAcmV0dXJucyB7e2Fzc2lnbm1lbnRfaWQ6ICosIGNvdXJzZV9pZDogKiwgZ3JvdXBfaWQ6ICosIHVzZXJfaWQ6ICosIHRpbWV6b25lOiAqLCB2ZXJzaW9uOiAqLCB0aW1lc3RhbXA6ICp9fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVTZXJ2ZXJEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhc3NpZ25tZW50ID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQ7XG4gICAgbGV0IHVzZXIgPSB0aGlzLm1haW4ubW9kZWwudXNlcjtcbiAgICBsZXQgc3VibWlzc2lvbiA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uO1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtaWNyb3NlY29uZHMgPSBub3cuZ2V0VGltZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiYXNzaWdubWVudF9pZFwiOiBhc3NpZ25tZW50LmlkKCksXG4gICAgICAgIFwiYXNzaWdubWVudF9ncm91cF9pZFwiOiB1c2VyLmdyb3VwSWQoKSxcbiAgICAgICAgXCJjb3Vyc2VfaWRcIjogdXNlci5jb3Vyc2VJZCgpLFxuICAgICAgICBcInN1Ym1pc3Npb25faWRcIjogc3VibWlzc2lvbi5pZCgpLFxuICAgICAgICBcInVzZXJfaWRcIjogdXNlci5pZCgpLFxuICAgICAgICBcInZlcnNpb25cIjogYXNzaWdubWVudC52ZXJzaW9uKCksXG4gICAgICAgIFwidGltZXN0YW1wXCI6IG1pY3Jvc2Vjb25kcyxcbiAgICAgICAgXCJ0aW1lem9uZVwiOiBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH07XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHN0YXR1cyBhbmQgbWVzc2FnZSBmb3IgdGhlIHJlbGV2YW50IGVuZHBvaW50LlxuICogQHBhcmFtIGVuZHBvaW50IHtzdHJpbmd9IG9uZSBvZiB0aGUgVVJMIGVuZHBvaW50c1xuICogQHBhcmFtIHN0YXR1cyB7U3RhdHVzU3RhdGV9XG4gKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nP31cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2V0U3RhdHVzID0gZnVuY3Rpb24gKGVuZHBvaW50LCBzdGF0dXMsIG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50XShzdGF0dXMpO1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnQgKyBcIk1lc3NhZ2VcIl0obWVzc2FnZSB8fCBcIlwiKTtcbn07XG5cbi8qKlxuICogUmVuZGVycyBhbiBvdmVybGF5IG9uIHRoZSBzY3JlZW4gdGhhdCBibG9ja3Mgb3BlcmF0aW9uIHVudGlsIHRoZSBzeXN0ZW0gaXMgcmVhZHkuXG4gKiBUaGUgb3ZlcmxheSBnZXRzIHByb2dyZXNzaXZlbHkgZGFya2VyIHRvIGluZGljYXRlIHJlcGVhdGVkIGZhaWx1cmVzLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uIChhdHRlbXB0KSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzICs9IDE7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvY2tweS1vdmVybGF5XCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwiYmxvY2tweS1vdmVybGF5XCI+IDwvZGl2PicpO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIHN3aXRjaCAoYXR0ZW1wdCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM5ODhcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjNjU1XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzMzM1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbi8qKlxuICogVW5kbyBhIGxldmVsIG9mIG92ZXJsYXk7IGlmIHRoaXMgd2FzIHRoZSBsYXN0IGxldmVsLCByZW1vdmVzIGl0IGZyb20gdGhlIHNjcmVlbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuaGlkZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzIC09IDE7XG4gICAgaWYgKHRoaXMuYmxvY2tpbmdBdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZW5xdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICAvLyBFbnN1cmUgd2UgaGF2ZSBub3Qgb3ZlcmZpbGxlZCB0aGUgcXVldWVcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5xdWV1ZVtjYWNoZV0ubGVuZ3RoO1xuICAgIGxldCBtYXggPSB0aGlzLk1BWF9RVUVVRV9TSVpFW2NhY2hlXTtcbiAgICBpZiAobGVuZ3RoID4gbWF4KSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdID0gdGhpcy5xdWV1ZVtjYWNoZV0uc2xpY2UobGVuZ3RoIC0gbWF4LCBtYXgpO1xuICAgIH1cbiAgICAvLyBPbmx5IGFkZCB0aGUgZWxlbWVudCBpZiBpdCdzIG5ld1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5wdXNoKGtleSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2RlcXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXS5zcGxpY2UoaW5kZXgpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBlbmRwb2ludCwgZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgbGV0IHBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5fZW5xdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlcXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcG9zdFJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KHBvc3RSZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYWtlIGEgQUpBWCByZXF1ZXN0IHRoYXQsIHVwb24gZmFpbHVyZSwgd2lsbCBjaGVjayB0byBzZWUgaWYgdGhpcyB3YXMgdGhlXG4gKiBsYXRlc3QgYXR0ZW1wdCBmb3IgdGhpcyBgY2FjaGVgIG1hcmtlci4gSWYgc28sIGl0IHdpbGwgYXR0ZW1wdCBhZ2FpbiB1bnRpbFxuICogc3VjY2Vzc2Z1bDsgb3RoZXJ3aXNlLCBpdCBnaXZlcyB1cCB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBBSkFYLXJlYWR5IGRhdGEgdG8gYmUgcG9zdGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IHRpbWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcG9pbnQgLSBUaGUgdW5pcXVlIG5hbWUgZ2l2ZW4gdG8gdGhlIHJlbGV2YW50IGNhY2hlIGVudHJ5XG4gKiBAcGFyYW0ge0ludGVnZXJ9IGRlbGF5IC0gVGhlIGN1cnJlbnQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZVxuIHRyeWluZyB0aGUgcmVxdWVzdCBhZ2Fpbi5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RMYXRlc3RSZXRyeSA9IGZ1bmN0aW9uIChkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5KSB7XG4gICAgbGV0IGNhY2hlID0gZW5kcG9pbnQgKyBmaWxlbmFtZTtcbiAgICBsZXQgcmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjb25uZWN0ZWQgYnV0IGZhaWxlZCwgZG9uJ3QgdHJ5IGFnYWluIGJ1dCBsZXQgdGhlIHVzZXIga25vdyB3aHkuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJzW2NhY2hlXSk7XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHJlcXVlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVyc1tjYWNoZV0gPSBzZXRUaW1lb3V0KHJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdEJsb2NraW5nID0gZnVuY3Rpb24gKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cywgc3VjY2VzcywgZmFpbHVyZSkge1xuICAgIHRoaXMuc2hvd092ZXJsYXkoYXR0ZW1wdHMpO1xuICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKGVuZHBvaW50LCBkYXRhLCBhdHRlbXB0cyAtIDEsIHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkQXNzaWdubWVudCA9IGZ1bmN0aW9uIChhc3NpZ25tZW50X2lkKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJhc3NpZ25tZW50X2lkXCJdID0gYXNzaWdubWVudF9pZDtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEFzc2lnbm1lbnRcIiwgZGF0YSwgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5sb2FkQXNzaWdubWVudERhdGFfKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvYWRBc3NpZ25tZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVBc3NpZ25tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiaGlkZGVuXCJdID0gbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgZGF0YVtcInJldmlld2VkXCJdID0gbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpO1xuICAgICAgICBkYXRhW1wicHVibGljXCJdID0gbW9kZWwuYXNzaWdubWVudC5wdWJsaWMoKTtcbiAgICAgICAgZGF0YVtcInVybFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQudXJsKCk7XG4gICAgICAgIGRhdGFbXCJpcF9yYW5nZXNcIl0gPSBtb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKCk7XG4gICAgICAgIGRhdGFbXCJuYW1lXCJdID0gbW9kZWwuYXNzaWdubWVudC5uYW1lKCk7XG4gICAgICAgIGRhdGFbXCJzZXR0aW5nc1wiXSA9IHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpO1xuXG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInNhdmVBc3NpZ25tZW50XCIsIGRhdGEsIDMsICgpID0+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfU0FWSU5HX0FTU0lHTk1ORU5UKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKFNhdmUgQXNzaWdubWVudClcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEhpc3RvcnkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpIHtcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkSGlzdG9yeVwiLCBkYXRhLCAyLCBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0hJU1RPUlkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvZ0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X3R5cGUsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgZmlsZV9wYXRoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvZ0V2ZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJldmVudF90eXBlXCJdID0gZXZlbnRfdHlwZTtcbiAgICAgICAgZGF0YVtcImNhdGVnb3J5XCJdID0gY2F0ZWdvcnk7XG4gICAgICAgIGRhdGFbXCJsYWJlbFwiXSA9IGxhYmVsO1xuICAgICAgICBkYXRhW1wibWVzc2FnZVwiXSA9IG1lc3NhZ2U7XG4gICAgICAgIGRhdGFbXCJmaWxlX3BhdGhcIl0gPSBmaWxlX3BhdGg7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBcImxvZ0V2ZW50XCIsIDAsICgpID0+IHtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlSW1hZ2UgPSBmdW5jdGlvbiAoZGlyZWN0b3J5LCBpbWFnZSkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJzYXZlSW1hZ2VcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImRpcmVjdG9yeVwiXSA9IGRpcmVjdG9yeTtcbiAgICAgICAgZGF0YVtcImltYWdlXCJdID0gaW1hZ2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUltYWdlXCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJ0dXJ0bGVfb3V0cHV0XCIsIFwic2F2ZUltYWdlXCIsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUltYWdlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMgPSBmdW5jdGlvbihuZXdTdGF0dXMpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwidXBkYXRlU3VibWlzc2lvblN0YXR1c1wiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wic3RhdHVzXCJdID0gbmV3U3RhdHVzO1xuICAgICAgICBsZXQgcG9zdFN0YXR1c0NoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cyhuZXdTdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIsIGRhdGEsIDIsIHBvc3RTdGF0dXNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBsb2FkIGZpbGVzIGFuZCB3ZWIgcmVzb3VyY2VzLlxuICpcbiAqIERFUFJFQ0FURURcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIHR5cGUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdmFyIG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRfZmlsZVwiKSkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZmlsZW5hbWVcIl0gPSBmaWxlbmFtZTtcbiAgICAgICAgZGF0YVtcInR5cGVcIl0gPSB0eXBlO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcodGhpcy51cmxzLmxvYWRfZmlsZSwgZGF0YSwgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2socmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlci5zZXRTdGF0dXMoXCJGYWlsdXJlXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKFwiU2VydmVyIGZhaWx1cmUhIFJlcG9ydCB0byBpbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JDYWxsYmFjayhcIk5vIGZpbGUgc2VydmVyIGF2YWlsYWJsZS5cIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiT2ZmbGluZVwiLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoTG9hZCBGaWxlKVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgY29udGVudHMsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsYXkgPSB0aGlzLlRJTUVSX0RFTEFZO1xuICAgIH1cbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUZpbGVcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJjb2RlXCJdID0gY29udGVudHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVN1Ym1pc3Npb24gPSBmdW5jdGlvbiAoc2NvcmUsIGNvcnJlY3QsIGhpZGRlbk92ZXJyaWRlLCBmb3JjZVVwZGF0ZSkge1xuICAgIGxldCBjYWxsYmFjayA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzY29yZVwiXSA9IHNjb3JlO1xuICAgICAgICBkYXRhW1wiY29ycmVjdFwiXSA9IGNvcnJlY3Q7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5fb3ZlcnJpZGVcIl0gPSBoaWRkZW5PdmVycmlkZTtcbiAgICAgICAgZGF0YVtcImZvcmNlX3VwZGF0ZVwiXSA9IGZvcmNlVXBkYXRlO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IuZ2V0UG5nRnJvbUJsb2NrcygocG5nRGF0YSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBwbmdEYXRhO1xuICAgICAgICAgICAgaWYgKGltZy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoaWRkZW5PdmVycmlkZSAmJiBjb3JyZWN0ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhW1wiYXNzaWdubWVudF9pZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCIvKipcbiAqIFNrdWxwdCBNb2R1bGUgZm9yIGhvbGRpbmcgdGhlIEluc3RydWN0b3IgQVBJLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGxvYWRlZCBpbiBieSBnZXR0aW5nIHRoZSBmdW5jdGlvbnMnIHNvdXJjZSBjb2RlIGZyb20gdG9TdHJpbmcuXG4gKiBJc24ndCB0aGF0IGNyYXp5P1xuICpcbiAqXG4gKi9cbmV4cG9ydCBsZXQgJHNrX21vZF9pbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gTWFpbiBtb2R1bGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCBhdCB0aGUgZW5kLlxuICAgIGxldCBtb2QgPSB7fTtcbiAgICBsZXQgbm9uZSA9IFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICBcbiAgICBsZXQgcHJpb3IgPSBudWxsO1xuICAgIG1vZC50aW1laXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInRpbWVpdFwiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgZGlmZmVyZW5jZTtcbiAgICAgICAgaWYgKHByaW9yID09PSBudWxsKSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBEYXRlLm5vdygpIC0gcHJpb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhuYW1lKSwgZGlmZmVyZW5jZS8xMDAwKTtcbiAgICAgICAgcHJpb3IgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZmVlZGJhY2sgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmxvZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobWVzc2FnZSkpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZGVidWcgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmRlYnVnID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdmVydHMgdGhlIG91dHB1dCBpbiB0aGUgc3R1ZGVudCByZXBvcnQgdG8gYSBweXRob24gXG4gICAgICogbGlzdCBhbmQgcmV0dXJucyBpdC5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5tYXAoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbS50b1NrdWxwdCgpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3Qob3V0cHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVzZXRzIHRoZSBvdXRwdXQsIHBhcnRpY3VsYXJseSB1c2VmdWwgaWYgdGhlIHN0dWRlbnRcbiAgICAgKiBjb2RlIGlzIGdvaW5nIHRvIGJlIHJlcnVuLlxuICAgICAqL1xuICAgIG1vZC5yZXNldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicmVzZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5vdXRwdXQucmVtb3ZlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QucXVldWVfaW5wdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicXVldWVfaW5wdXRcIiwgYXJndW1lbnRzLCAxLCBJbmZpbml0eSk7XG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGFyZ3NbaV07XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiaW5wdXRcIiwgXCJzdHJpbmdcIiwgU2suYnVpbHRpbi5jaGVja1N0cmluZyhpbnB1dCkpO1xuICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChTay5mZmkucmVtYXBUb0pzKGlucHV0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfcHJvZ3JhbSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcHJvZ3JhbVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1widmVyaWZpZXJcIl0uY29kZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfZXZhbHVhdGlvbiA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfZXZhbHVhdGlvblwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5ldmFsdWF0aW9uIHx8IFwiXCIpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC50cmFjZV9saW5lcyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5saW5lcztcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW9kLmdldF9zdHVkZW50X2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW25vbmUsIG5vbmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bXCJsaW5lXCJdID0gZXJyb3IudHJhY2ViYWNrWzBdLmxpbmVubztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb24gPSBTay5mZmkucmVtYXBUb1B5KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbZXJyb3IsIHBvc2l0aW9uXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIG1vZC5oYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiAhU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2VzcyAmJiBcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvciAmJlxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLnRwJG5hbWUgPT09IFwiVGltZUxpbWl0RXJyb3JcIjtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgYmFja3VwVGltZSA9IHVuZGVmaW5lZDtcbiAgICBtb2QubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgYmFja3VwVGltZSA9IFNrLmV4ZWNMaW1pdDtcbiAgICAgICAgaWYgKFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1vZC51bmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInVubGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gYmFja3VwVGltZTtcbiAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2Quc3VwcHJlc3Nfc2Nyb2xsaW5nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInN1cHByZXNzX3Njcm9sbGluZ1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIFxuICAgIC8qXG4gICAgZGVmIGhpc3Qoc2VsZiwgZGF0YSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnSGlzdG9ncmFtJywgJ3ZhbHVlcyc6IGRhdGEsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgcGxvdChzZWxmLCB4cywgeXM9Tm9uZSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgaWYgeXMgPT0gTm9uZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiByYW5nZShsZW4oeHMpKSwgJ3knOiB4cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICAgICBlbHNlOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgc2NhdHRlcihzZWxmLCB4cywgeXMsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ1NjYXR0ZXInLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgKi9cbiAgICBtb2QuZ2V0X3Bsb3RzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wbG90c1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dHMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0cyA9IG91dHB1dHMuZmlsdGVyKGZ1bmN0aW9uKG91dHB1dCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LnR5cGUgPT09IFwicGxvdFwiO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcImRhdGFcIjogZ3JhcGguY29udGVudC5tYXAoZnVuY3Rpb24ocGxvdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGxvdCA9IHsgXCJ0eXBlXCI6IHBsb3QudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdC50eXBlID09PSBcImxpbmVcIiB8fCBwbG90LnR5cGUgPT09IFwic2NhdHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieFwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi54OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ5XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lnk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsb3QudHlwZSA9PT0gXCJoaXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ2YWx1ZXNcIl0gPSBwbG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bsb3Q7XG4gICAgICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgICAgIFwieGxhYmVsXCI6IFwiXCIsIFwieWxhYmVsXCI6IFwiXCIsIFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIiwgXCJsZWdlbmRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShvdXRwdXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgLy8gUHJvdmlkZXMgYHN0dWRlbnRgIGFzIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSB0aGF0IHRoZSBzdHVkZW50IGRlY2xhcmVkLlxuICAgIG1vZC5TdHVkZW50RGF0YSA9IFNrLm1pc2NldmFsLmJ1aWxkQ2xhc3MobW9kLCBmdW5jdGlvbigkZ2JsLCAkbG9jKSB7XG4gICAgICAgICRsb2MuX19pbml0X18gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2VsZi5kYXRhID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBsZXQgbmV3RGljdCA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgU2suYWJzdHIuc2F0dHIoc2VsZiwgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpLCBuZXdEaWN0LCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYubW9kdWxlID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ucmVzdWx0cztcbiAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBzZWxmLm1vZHVsZS4kZDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNrLmFic3RyLm9iamVjdFNldEl0ZW0obmV3RGljdCwgU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKGtleSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjYWxsX2YgPSBmdW5jdGlvbihrd2EpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3NMZW4oXCJjYWxsXCIsIGFyZ3VtZW50cy5sZW5ndGgsIDEsIEluZmluaXR5LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIHZhciBrd2FyZ3MgPSBuZXcgU2suYnVpbHRpbnMuZGljdChrd2EpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IGFyZ3NbMF07XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gYXJnc1sxXTtcbiAgICAgICAgICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDIpO1xuXG4gICAgICAgICAgICB2YXIgaW5wdXRzID0ga3dhcmdzLm1wJGxvb2t1cChuZXcgU2suYnVpbHRpbi5zdHIoXCJpbnB1dHNcIikpO1xuICAgICAgICAgICAgaWYgKGlucHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzID0gU2suZmZpLnJlbWFwVG9KcyhpbnB1dHMpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLnRwJGdldGF0dHIobmV3IFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSk7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25PYmplY3QgPSBkYXRhLm1wJGxvb2t1cChmdW5jdGlvbk5hbWUpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uT2JqZWN0LnRwJGNhbGwoYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBjYWxsX2YuY29fa3dhcmdzID0gdHJ1ZTtcbiAgICAgICAgLy9jYWxsX2YuY29fdmFybmFtZXMgPSBbXCJzZWxmXCIsIFwiZnVuY3Rpb25cIl07XG4gICAgICAgIGNhbGxfZi5jb19uYW1lPSBuZXcgU2suYnVpbHRpbi5zdHIoXCJjYWxsXCIpO1xuICAgICAgICAkbG9jW1wiY2FsbF8kcm4kXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhjYWxsX2YpO1xuXG4gICAgICAgICRsb2NbXCJfX3JlcHJfX1wiXSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihcIlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGxvYy5nZXRfbmFtZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9uYW1lc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICRsb2MuZ2V0X3ZhbHVlc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3ZhbHVlc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5tb2R1bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSwgXCJTdHVkZW50RGF0YVwiKTtcbiAgICBtb2Quc3R1ZGVudCA9IFNrLm1pc2NldmFsLmNhbGxzaW1PclN1c3BlbmQobW9kLlN0dWRlbnREYXRhKTtcbiAgICBcbiAgICBtb2QuZ2V0X3N0dWRlbnRfZGF0YSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9kYXRhXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBtb2Quc3R1ZGVudDtcbiAgICB9KTtcblxuICAgIG1vZC5zZXRfaW5zdHJ1Y3Rpb25zID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuZXdJbnN0cnVjdGlvbnMpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInNldF9pbnN0cnVjdGlvbnNcIiwgYXJndW1lbnRzLCAxLCAyKTtcbiAgICAgICAgbmV3SW5zdHJ1Y3Rpb25zID0gU2suZmZpLnJlbWFwVG9KcyhuZXdJbnN0cnVjdGlvbnMpO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wibW9kZWxcIl0uZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG5ld0luc3RydWN0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBtb2QuZ2V0X21vZGVsX2luZm8gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKGtleXMpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9tb2RlbF9pbmZvXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBtb2RlbCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXTtcbiAgICAgICAga2V5cyA9IFNrLmZmaS5yZW1hcFRvSnMoa2V5cykuc3BsaXQoXCIuXCIpO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtb2RlbCA9IG1vZGVsW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG1vZGVsKCkpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtb2Q7XG59O1xuIiwibGV0IExPQ0FMX1NUT1JBR0VfUkVGO1xudHJ5IHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IGxvY2FsU3RvcmFnZTtcbiAgICBsZXQgbW9kID0gXCJCTE9DS1BZX0xPQ0FMU1RPUkFHRV9URVNUXCI7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbShtb2QsIG1vZCk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbShtb2QpO1xufSBjYXRjaChlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSB7XG4gICAgICAgIF9kYXRhICAgICAgIDoge30sXG4gICAgICAgIHNldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQsIHZhbCkgeyByZXR1cm4gdGhpcy5fZGF0YVtpZF0gPSBTdHJpbmcodmFsKTsgfSxcbiAgICAgICAgZ2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gdGhpcy5fZGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgPyB0aGlzLl9kYXRhW2lkXSA6IHVuZGVmaW5lZDsgfSxcbiAgICAgICAgcmVtb3ZlSXRlbSAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMuX2RhdGFbaWRdOyB9LFxuICAgICAgICBjbGVhciAgICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGF0YSA9IHt9OyB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBpbnRlcmZhY2luZyB3aXRoIHRoZSBMb2NhbFN0b3JhZ2UuIFRoZSBMb2NhbFN0b3JhZ2VcbiAqIGJyb3dzZXIgQVBJIGFsbG93cyBmb3Igb2ZmbGluZSBzdG9yYWdlLiBUaGF0IEFQSSBpcyB2ZXJ5IHVuc29waGlzdGljYXRlZCxcbiAqIGFuZCBpcyBlc3NlbnRpYWxseSBhIGxhbWUga2V5LXZhbHVlIHN0b3JlLiBUaGlzIG9iamVjdCBzaXRzIG9uIHRvcFxuICogYW5kIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHVzZWZ1bCB1dGlsaXRpZXMsIGluY2x1ZGluZyBydWRpbWVudGFyeWNhY2hlXG4gKiBjYWNoZSBleHBpcmF0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0xvY2FsU3RvcmFnZVdyYXBwZXJ9XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gQSBuYW1lc3BhY2UgdG8gdXNlIGluIGdyb3VwaW5nIGFjY2VzcyB0byBsb2NhbHN0b3JhZ2UuIFRoaXMga2VlcHMgYWNjZXNzIGNsZWFuIGFuZCBvcmdhbml6ZWQsIHdoaWxlIGFsc28gbWFraW5nIGl0IHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlV3JhcHBlcihuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbn1cbi8qKlxuICogQSBtZXRob2QgZm9yIGFkZGluZyBhIGtleS92YWx1ZSBwYWlyIHRvIExvY2FsU3RvcmFnZS5cbiAqIE5vdGUgdGhhdCBib3RoIHBhcmFtZXRlcnMgbXVzdCBiZSBzdHJpbmdzIChKU09OLnN0cmluZ2lmeSBpcyB5b3VyIGZyaWVuZCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9ICBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIiwgdmFsdWUpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIikpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKiBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZC5cbiAqIFRoaXMgZGVmYXVsdCB3aWxsIGJlIHNldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWx1ZSAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZS4gTXVzdCBiZSBhIHN0cmluZy5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBnaXZlbiBrZXkgaXMgaW4gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHRlc3QgZXhpc3RlbmNlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIHNlcnZlciBoYXMgdGhlIG5ld2VyIHZlcnNpb24uIFRoaXMgZnVuY3Rpb25cbiAqIGFzc3VtZXMgdGhhdCB0aGUgc2VydmVyIHRyaXAgdGFrZXMgYWJvdXQgNSBzZWNvbmRzLiBUaGlzIG1ldGhvZFxuICogaXMgbGFyZ2VseSBkZXByZWNhdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBzZXJ2ZXJfdGltZSAtIFRoZSBzZXJ2ZXIncyB0aW1lIGFzIGFuIGVwb2NoIChpbiBtaWxsaXNlY29uZHMpXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmlzX25ldyA9IGZ1bmN0aW9uKGtleSwgc2VydmVyX3RpbWUpIHtcbiAgICB2YXIgc3RvcmVkX3RpbWUgPSBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5JR05PUkVEX0dMT0JBTFMgPSBbXCJfX25hbWVfX1wiLCBcIl9fZG9jX19cIiwgXCJfX3BhY2thZ2VfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NtZXRob2RcIiwgXCJwcm9wZXJ0eVwiLCBcInN0YXRpY21ldGhvZFwiXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5JR05PUkVEX0dMT0JBTFMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFwiXyRydyRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfJHJuJFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IEJsb2NrUHlUcmFjZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHtcIm5hbWVcIjogcHJvcGVydHksIFwidHlwZVwiOiBcIlVua25vd25cIiwgXCJ2YWx1ZVwiOiB2YWx1ZS50b1N0cmluZygpfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFNrLmJ1aWx0aW4ubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXMucHVzaCh2YWx1ZS4kZC5fX25hbWVfXy52KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcInByb3BlcnRpZXNcIjogcmVzdWx0LCBcIm1vZHVsZXNcIjogbW9kdWxlc307XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFNrdWxwdCB2YWx1ZSBpbnRvIGEgbW9yZSBlYXNpbHkgcHJpbnRhYmxlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAtIHRoZSBza3VscHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZnVuYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQXJndW1lbnRzOiBcIit2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMuam9pbihcIiwgXCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIE5vIGFyZ3VtZW50c1wiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm1vZHVsZTogcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5zdHI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbExlbmd0aCB8fCB2YWx1ZS52Lmxlbmd0aCA8PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUT0RPOiB2aWV3RXhhY3RWYWx1ZSIsIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7YW55dGhpbmd9IG5lZWRsZSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtBcnJheX0gaGF5c3RhY2sgLSBUaGUgbGlzdCB0byBzZWFyY2guXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50IGV4aXN0c1xuICovXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSwgcHJlc2VydmluZyBvcmRlci5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqIENvdXJ0ZXN5OlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU4NDM3MC9ob3ctdG8tbWVyZ2UtdHdvLWFycmF5cy1pbi1qYXZhc2NyaXB0LWFuZC1kZS1kdXBsaWNhdGUtaXRlbXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB1bmlxdWlmeS4gRWxlbWVudHMgY29tcGFyZWQgd2l0aCA9PT0uXG4gKi9cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycmF5KSB7XG4gICAgdmFyIGEgPSBhcnJheS5jb25jYXQoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZvcih2YXIgaj1pKzE7IGo8YS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYoYVtpXSA9PT0gYVtqXSkge2Euc3BsaWNlKGotLSwgMSk7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBhbiBhcnJheSBiYXNlZFxuICogb24gYW4gXCJhZGRBcnJheVwiIGFuZCBcInJlbW92ZUFycmF5XCIuIEFueSBlbGVtZW50XG4gKiBmb3VuZCBpbiByZW1vdmVBcnJheSBpcyByZW1vdmVkIGZyb20gdGhlIGZpcnN0IGFycmF5XG4gKiBhbmQgYWxsIHRoZSBlbGVtZW50cyBvZiBhZGRBcnJheSBhcmUgYWRkZWQuXG4gKiBBbnkgZHVwbGljYXRlIGl0ZW1zIGFyZSByZW1vdmVkLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gdGhlIGFycmF5IHRvIG1hbmlwdWxhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFkZEFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHJlbW92ZUFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBleHBhbmRBcnJheShhcnJheSwgYWRkQXJyYXksIHJlbW92ZUFycmF5KSB7XG4gICAgdmFyIGNvcHlBcnJheSA9IGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlVbmlxdWUoY29weUFycmF5LmNvbmNhdChhZGRBcnJheSkpO1xufVxuXG4vKipcbiAqIERlZXBseSBjbG9uZXMgYSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgQSBub2RlIHRvIGNsb25lXG4gKiBAcmV0dXJuIHtOb2RlfSBBIGNsb25lIG9mIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgLy8gSWYgdGhlIG5vZGUgaXMgYSB0ZXh0IG5vZGUsIHRoZW4gcmUtY3JlYXRlIGl0IHJhdGhlciB0aGFuIGNsb25lIGl0XG4gICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PSAzID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuIFxuICAgIC8vIFJlY3Vyc2UgICAgIFxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBJbmRlbnRzIHRoZSBnaXZlbiBzdHJpbmcgYnkgNCBzcGFjZXMuIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbXVsdGktbGluZSBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGZvdXIgc3BhY2VzIGFkZGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBuZXcgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oPz0uKS9nbSwgXCIgICAgXCIpO1xufVxuXG4vKipcbiAqIFR1cm5zIHNwYWNlcyBpbnRvIHVuZGVyc2NvcmVzIGluIHRoZSBzdHJpbmcsIG1ha2VzIGl0IGxvd2VyY2FzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB0aGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1ZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIFtgbWluYCwgYG1heGBdLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VzdCBwb3NzaWJsZSBpbnRlZ2VyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGludGVnZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbixtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBzb21lIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc2FmZWx5IHdyaXR0ZW4gaW50byBhbiBIVE1MIGJveC5cbiAqIFRoaXMgaW5jbHVkZXMgcmVwbGFjaW5nIHNwZWNpYWwgSFRNTCBjaGFyYWN0ZXJzICgmLCA8LCA+LCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHRleHQgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSFRNTC1zYWZlIHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIG9uZSBvZiB0aGUgU2suYnVpbHRpbiBvYmplY3RzXG4gKiBUT0RPOiBtYWtlIHRoaXMgc28gd2UgZG9uJ3QgaGF2ZSB0byBleHBsaWNpdGx5IHB1dCBvdXQgZXZlcnkgb3B0aW9uXG4gKiAgICAgICAgICBvbmUgcG9zc2libGUgdGhpbmcgd2UgY291bGQgZG8gaXMgZ2V0IGEgc3RyaW5nIHZlcnNpb24gb2YgdGhlIFxuICogICAgICAgICAgb2YgdGhlIGNvbnN0cnVjdG9yIGFuZCBsb29rIGZvciB0aGUgc3Vic3RyaW5nIFwicmV0dXJuIG5ldyBTay5idWlsdGluXCJcbiAqICAgICAgICAgIEJ1dCBJIGRvbid0IGtub3cgaG93IHJlbGlhYmxlIHRoYXQgaXMuICBSYXRoZXIsIGl0J3Mga2luZCBvZiBoYWNraXNoLlxuICogICAgICAgICAgU2hvdWxkIHRlaG9yZXRpY2FsbHkgYmVsb25nIGluIFNrLmZmaVxuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgZXhhbWluZWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gdHlwZXNcbioqL1xuZnVuY3Rpb24gaXNTa0J1aWx0aW4ob2JqKXtcbiAgICByZXR1cm4gKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uZGljdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubGlzdCkgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4udHVwbGUpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmJvb2wpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmludF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmZsb2F0XykgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4uc3RyKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5sbmcpO1xuICAgIC8vdmFyIGNvbnNfc3RyID0gb2JqLmNvbnN0cnVjdG9yICsgXCJcIjtcbiAgICAvL3JldHVybiBjb25zX3N0ci5pbmRleE9mKFwicmV0dXJuIG5ldyBTay5idWlsdGluXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBc3ROb2RlKG9iail7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBcIl9hc3RuYW1lXCIgaW4gb2JqO1xufVxuXG4vKipcbiAqIFNob3VsZCB0aGVvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmksIGJ1dCBJIHB1dCBpdCBoZXJlIGluc3RlYWQgdG8gbm90IG1lc3MgdXAgdGhlIHNrdWxwdCBmaWxlc1xuICogbGlrZSB0aGUgbm9ybWFsIFNrLmZmaS5yZW1hcFRvUHksIGl0IGRvZXNuJ3Qgd29yayBmb3IgZnVuY3Rpb25zIG9yIG1vcmUgY29tcGxleCBvYmplY3RzLCBidXQgaXQgaGFuZGxlc1xuICogY2FzZXMgd2hlcmUgdGhlIHR5cGVzIGluIG9iaiBhcmUgYSBtaXggb2YgcHl0aG9uIFNJTVBMRSBvYmplY3RzIGFuZCBTSU1QTEUgbm9ybWFsIGphdmFzY3JpcHQgb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJuIHtTay5idWlsdGluLj8/P30gLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHB5dGhvbiBvYmplY3QsIGRyb3BwaW5nIGFsbCBmdW5jdGlvbnMgYW5kIHRoaW5ncyBpdCBjYW4ndCBjb252ZXJ0XG4qKi9cbmZ1bmN0aW9uIG1peGVkUmVtYXBUb1B5KG9iail7XG4gICAgdmFyIGs7XG4gICAgdmFyIGt2cztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXJyO1xuICAgIC8vQFRPRE86IHNob3VsZCB0aGVvcmV0aWNhbGx5IGNoZWNrIGlmIHRoZSBvYmplY3QgaXMgYSBweWhvbiBkaWN0IG9yIGFycmF5IHdpdGgganMgb2JqZWN0c1xuICAgIGlmIChpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgLy9vYmplY3QgaXMgYWxyZWFkeSBweXRob24gcmVhZHlcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgLy9vYmplY3QgaXMgYWN0dWFsbHkgYSBqYXZhc2NyaXB0IGFycmF5XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAvL2ZvciBlYWNoIG9iamVjdCwgY29udmVydCBpdCB0byBhIHB5dGhvbiBvYmplY3QgaWYgaXQgaXNuJ3Qgb25lIGFscmVhZHlcbiAgICAgICAgICAgIHZhciBzdWJ2YWwgPSBvYmpbaV07XG4gICAgICAgICAgICBpZighaXNTa0J1aWx0aW4oc3VidmFsKSl7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2gobWl4ZWRSZW1hcFRvUHkoc3VidmFsKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzdWJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KGFycik7XG4gICAgfSBlbHNlIGlmIChvYmogPT09IG51bGwpIHsvL251bGwgb2JqZWN0XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmKCFpc1NrQnVpbHRpbihvYmopKXtcbiAgICAgICAgICAgIC8vYXNzdW1pbmcgaXQncyBhIHN0YW5kYXJkIGRpY3Rpb25hcnlcbiAgICAgICAgICAgIGt2cyA9IFtdOy8vU2suYnVpbHRpbi5kaWN0IHVzZXMgYW4gYXJyYXkgb2Yga2V5LXZhbHVlLGtleS12YWx1ZS4uLlxuICAgICAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vY29udmVydCB0aGUga2V5IGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KGspKTtcbiAgICAgICAgICAgICAgICAvL2NvdmVydCBjb3JyZXNwb25kaW5nIHZhbHVlIGlmIGl0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZFxuICAgICAgICAgICAgICAgIGt2cy5wdXNoKG1peGVkUmVtYXBUb1B5KG9ialtrXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jcmVhdGUgdGhlIG5ldyBkaWN0aW9uYXJ5XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uZGljdChrdnMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5hc3NrJChvYmopO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmJvb2wob2JqKTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqLm5hbWUpO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9