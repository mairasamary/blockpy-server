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

BlockPyDialog.prototype.confirm = function (title, body, yes, no) {
  this.show(title, body, no); // TODO: add okay button and cancel button
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3M/OTgyOSIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2Nzcy9ib290c3RyYXBfcmV0aGVtZS5jc3M/N2M4NCIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hYnN0cmFjdF9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9weXRob24uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3IvdGFncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90ZXh0LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9ycy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9jb25maWd1cmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ldmFsLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fY2hhbmdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fcnVuLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL29uX3NhbXBsZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3N0dWRlbnQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZpbGVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NlcnZlci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3NrX21vZF9pbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL3RyYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9ibG9ja3B5L2V4dGVybmFsIFwia29cIiJdLCJuYW1lcyI6WyJCbG9ja1B5IiwiY29uZmlndXJhdGlvbiIsImFzc2lnbm1lbnQiLCJzdWJtaXNzaW9uIiwiaW5pdE1vZGVsIiwidW5kZWZpbmVkIiwic2V0QXNzaWdubWVudCIsImluaXRNYWluIiwiaW5pdFV0aWxpdGllcyIsImluaXRNb2RlbE1ldGhvZHMiLCJ0dXJuT25IYWNrcyIsImluaXRJbnRlcmZhY2UiLCJhcHBseU1vZGVsIiwiaW5pdENvbXBvbmVudHMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsImRpcnR5U3VibWlzc2lvbiIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUltYWdlIiwic2F2ZUltYWdlTWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzIiwidXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJjb3Vyc2VfaWQiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX2ZpbGVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldEludGVyZmFjZSIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwiaXBfcmFuZ2VzIiwib25fY2hhbmdlIiwiZmlsZVN5c3RlbSIsIm5ld0ZpbGUiLCJvbl9ldmFsIiwib25fcnVuIiwic3RhcnRpbmdfY29kZSIsIm93bmVyX2lkIiwibG9hZEFzc2lnbm1lbnRTZXR0aW5ncyIsImxvYWRUYWdzIiwibG9hZFNhbXBsZVN1Ym1pc3Npb25zIiwic2FtcGxlX3N1Ym1pc3Npb25zIiwiZXh0cmFfaW5zdHJ1Y3Rvcl9maWxlcyIsImV4dHJhX3N0YXJ0aW5nX2ZpbGVzIiwibG9hZFN1Ym1pc3Npb24iLCJjb3JnaXMiLCJsb2FkRGF0YXNldHMiLCJzZXRTdGF0dXMiLCJzZWxmIiwidWkiLCJpc0dyYWRlciIsInB1cmVDb21wdXRlZCIsImlzQ2hhbmdlZCIsImN1cnJlbnQiLCJ1dGlsaXRpZXMiLCJtYXJrZG93biIsInJlc2V0IiwibWVudSIsImNhbk1hcmtTdWJtaXR0ZWQiLCJ0ZXh0TWFya1N1Ym1pdHRlZCIsImlzU3VibWl0dGVkIiwiY2xpY2tNYXJrU3VibWl0dGVkIiwiZW5naW5lIiwiZGVsYXllZFJ1biIsInRvTG93ZXJDYXNlIiwic2Vjb25kUm93IiwiaXNGZWVkYmFja1Zpc2libGUiLCJpc1RyYWNlVmlzaWJsZSIsIlRSQUNFIiwiaXNDb25zb2xlU2hvd1Zpc2libGUiLCJzd2l0Y2hMYWJlbCIsImFkdmFuY2VTdGF0ZSIsImN1cnJlbnRQYW5lbCIsIk5PTkUiLCJzaXplIiwiaGlkZUV2YWx1YXRlIiwiQUNUSVZFIiwiYmFkZ2UiLCJ0cmFjZSIsImxpbmUiLCJzdGVwIiwidHJhY2VEYXRhIiwiZmlyc3QiLCJiYWNrd2FyZCIsInByZXZpb3VzIiwiTWF0aCIsIm1heCIsImZvcndhcmQiLCJuZXh0IiwibWluIiwibGFzdCIsImZpbGVzIiwidmlzaWJsZSIsImhpZGVGaWxlcyIsImhhc0NvbnRlbnRzIiwicGF0aCIsInNvbWUiLCJmaWxlIiwibGVuZ3RoIiwiYWRkIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiZnVsbHNjcmVlbiIsImNvZGVNaXJyb3IiLCJweXRob25FZGl0b3IiLCJibSIsInRleHRFZGl0b3IiLCJzZXRPcHRpb24iLCJnZXRPcHRpb24iLCJ1cGRhdGVNb2RlIiwibmV3TW9kZSIsIm9sZFB5dGhvbk1vZGUiLCJpc0hpc3RvcnlBdmFpbGFibGUiLCJpc0VuZHBvaW50Q29ubmVjdGVkIiwidHVybk9mZkhpc3RvcnlNb2RlIiwidXBkYXRlRWRpdG9yIiwic2V0UmVhZE9ubHkiLCJ0dXJuT25IaXN0b3J5TW9kZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhpc3RvcnkiLCJsb2FkIiwiZGlhbG9nIiwiRVJST1JfTE9BRElOR19ISVNUT1JZIiwidG9nZ2xlSGlzdG9yeU1vZGUiLCJtb3ZlVG9TdGFydCIsIm1vdmVQcmV2aW91cyIsIm1vdmVOZXh0IiwibW9zdFJlY2VudCIsIm1vdmVUb01vc3RSZWNlbnQiLCJ1c2UiLCJzYXZlIiwiZXhlY3V0ZSIsImlzUnVubmluZyIsInJ1biIsImV2YWx1YXRlIiwibWVzc2FnZXMiLCJmb3JjZSIsImV2ZW50IiwidGFyZ2V0IiwiZmFkZU91dCIsImZhZGVJbiIsIm1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMiLCJhcHBseUJpbmRpbmdzIiwibWFpbiIsInRleHQiLCJFYXN5TURFIiwicHJvdG90eXBlIiwiQmxvY2tQeURpYWxvZyIsImZpbmQiLCJCbG9ja1B5RmVlZGJhY2siLCJCbG9ja1B5VHJhY2UiLCJCbG9ja1B5Q29uc29sZSIsIkJsb2NrUHlFbmdpbmUiLCJCbG9ja1B5RmlsZVN5c3RlbSIsIkVkaXRvcnMiLCJieU5hbWUiLCJCbG9ja1B5U2VydmVyIiwiQmxvY2tQeUNvcmdpcyIsIkJsb2NrUHlIaXN0b3J5IiwiU1RBUlRfRVZBTF9IVE1MIiwiQ09OU09MRV9IVE1MIiwiTkVXX0NPTlNPTEVfTElORV9IVE1MIiwiQ29uc29sZUxpbmVUeXBlIiwiVEVYVCIsIkhUTUwiLCJQTE9UIiwiSU1BR0UiLCJUVVJUTEUiLCJFVkFMIiwiU1RBUlRfRVZBTCIsIlZBTFVFIiwiSU5QVVQiLCJURVNUX0NBU0UiLCJDb25zb2xlTGluZSIsImNvbnRlbnQiLCJvcmlnaW4iLCJTayIsImN1cnJGaWxlbmFtZSIsImV4ZWN1dGlvbkJ1ZmZlciIsImluZGV4IiwiZmZpIiwicmVtYXBUb1B5IiwicmVtb3ZlIiwiQ29uc29sZUxpbmVUdXJ0bGUiLCJhZGRDbGFzcyIsIndoZXJlIiwicHJlcGVuZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJDb25zb2xlTGluZUltYWdlIiwiYXBwZW5kIiwiQ29uc29sZUxpbmVQbG90IiwiQ29uc29sZUxpbmVUZXh0IiwiZW5jb2RlZFRleHQiLCJlbmNvZGVIVE1MIiwibGluZURhdGEiLCJ0b29sdGlwIiwiQ29uc29sZUxpbmVWYWx1ZSIsIkNvbnNvbGVMaW5lSW5wdXQiLCJwcm9tcHRNZXNzYWdlIiwiaW5wdXRGb3JtIiwiaW5wdXRCdG4iLCJpbnB1dEdyb3VwIiwiaW5wdXRCb3giLCJpbnB1dE1zZyIsIm1ha2VJbnRlcmFjdGl2ZSIsImlucHV0IiwiYnV0dG9uIiwicmVzb2x2ZU9uQ2xpY2siLCJzdWJtaXR0ZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdWJtaXRGb3JtIiwidmFsIiwicHJvcCIsImNsaWNrIiwia2V5dXAiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwiQ29uc29sZUxpbmVFdmFsdWF0ZSIsIkNvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSIsInRhZyIsInByaW50ZXJUYWciLCJNSU5JTVVNX1dJRFRIIiwiTUlOSU1VTV9IRUlHSFQiLCJERUZBVUxUX0hFSUdIVCIsImhlaWdodCIsImNsZWFyIiwicmVtb3ZlQWxsIiwibGluZUJ1ZmZlciIsInBsb3RCdWZmZXIiLCJlbXB0eSIsInR1cnRsZUxpbmUiLCJUdXJ0bGVHcmFwaGljcyIsImdldFR1cnRsZUxpbmUiLCJ3aWR0aCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiYXNzZXRzIiwibG9hZEFzc2V0IiwicmVuZGVyIiwiY3VycmVudFByaW50ZXJEaW1lbnNpb24iLCJzYXZlVHVydGxlT3V0cHV0IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsInBhZ2UiLCJlYWNoIiwiYXR0ciIsInNob3ciLCJoaWRlIiwibGluZVRleHQiLCJmbHVzaCIsImNoYXJBdCIsInNwbGl0TGluZXMiLCJzcGxpdCIsImFkZENvbnRlbnQiLCJpIiwicHVzaCIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJ0ZXh0VG9CbG9ja3MiLCJoaWRkZW5JbXBvcnRzIiwiZ2V0SlNPTiIsImJsb2NrcHkiLCJkb2N1bWVudGF0aW9uIiwiYm9keSIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwic2x1Z2dlZE5hbWUiLCJ0aXRsZU5hbWUiLCJpbWdTcmMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiYXBwZW5kVG8iLCJESUFMT0dfSFRNTCIsInRpdGxlVGFnIiwiYm9keVRhZyIsIm9uY2xvc2UiLCJtb2RhbCIsImRyYWdnYWJsZSIsIm9uIiwiY29uZmlybSIsInllcyIsIm5vIiwiQVNTSUdOTUVOVF9WRVJTSU9OX0NIQU5HRUQiLCJFUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UIiwiU0NSRUVOU0hPVF9CTE9DS1MiLCJFUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZmlsZU5hbWUiLCJyZWFkQXNUZXh0Iiwic2x1Z2dpZnkiLCJyZXBsYWNlIiwiZXh0ZW5zaW9uIiwibWltZXR5cGUiLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwidGVtcG9yYXJ5RG93bmxvYWRMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJBYnN0cmFjdEVkaXRvciIsImNoYW5nZUVkaXRvciIsIndhdGNoRmlsZSIsInVwZGF0ZWQiLCJvbkZpbGVVcGRhdGVkIiwiZGVsZXRlZCIsIm9uRmlsZURlbGV0ZWQiLCJuZXdGaWxlbmFtZSIsIm9sZEVkaXRvciIsImdldEZpbGUiLCJ0cmFja0N1cnJlbnRGaWxlIiwibmV3RWRpdG9yIiwic3RvcFdhdGNoaW5nRmlsZSIsInJlc3VsdCIsImhhbmRsZSIsInBhcnNlRmlsZW5hbWUiLCJBU1NJR05NRU5UX1NFVFRJTkdTIiwiZ2V0RG9jdW1lbnRhdGlvbiIsIm1ha2VTdGFydFZpZXdUYWIiLCJpY29uIiwibW9kZSIsIkFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwiLCJmaWx0ZXIiLCJzZXR0aW5nIiwicHJldHR5TmFtZSIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIkFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUwiLCJCTE9DSyIsInNhdmVBc3NpZ25tZW50U2V0dGluZ3MiLCJjbGllbnROYW1lIiwic2VydmVyTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInN0YXJ0X3ZpZXciLCJBc3NpZ25tZW50U2V0dGluZ3NWaWV3IiwiZGlydHkiLCJjdXJyZW50TGlzdGVuZXIiLCJ1cGRhdGVIYW5kbGUiLCJuZXdDb250ZW50cyIsIkFzc2lnbm1lbnRTZXR0aW5ncyIsImV4dGVuc2lvbnMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwiTUFSS0RPV05fRURJVE9SX0hUTUwiLCJNYXJrZG93bkVkaXRvclZpZXciLCJtZGUiLCJlbGVtZW50IiwiYXV0b0Rvd25sb2FkRm9udEF3ZXNvbWUiLCJmb3JjZVN5bmMiLCJtaW5IZWlnaHQiLCJyZW5kZXJpbmdDb25maWciLCJjb2RlU3ludGF4SGlnaGxpZ2h0aW5nIiwiaW5kZW50V2l0aFRhYnMiLCJ0YWJTaXplIiwiY3VycmVudFN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsImNvZGVtaXJyb3IiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImRpc3Bvc2UiLCJvZmYiLCJNYXJrZG93bkVkaXRvciIsIm1ha2VUYWIiLCJQWVRIT05fRURJVE9SX0hUTUwiLCJISVNUT1JZX1RPT0xCQVJfSFRNTCIsImNvbnZlcnRJcHluYlRvUHl0aG9uIiwiaXB5bmIiLCJpc1VzYWJsZSIsImNlbGwiLCJjZWxsX3R5cGUiLCJzb3VyY2UiLCJzdGFydHNXaXRoIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwicmVhZE9ubHkiLCJtYWtlU3Vic2NyaXB0aW9ucyIsImxpbmVFcnJvclN1YnNjcmlwdGlvbiIsImxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24iLCJ3b3Jrc3BhY2UiLCJjb25maWd1cmVDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJlbmFibGVkIiwiY2FsbGJhY2siLCJvbGRGaWxlbmFtZSIsImN1cnJlbnRCTUxpc3RlbmVyIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJpc1BhcnNvbnMiLCJsaW5lcyIsInNldEhpZ2hsaWdodGVkTGluZXMiLCJkZWxldGVGaWxlTG9jYWxseV8iLCJzZXRDb2RlIiwiY2xlYXJIaWdobGlnaHRlZExpbmVzIiwiZ2V0Q29kZSIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwiY2xlYXJMaW5lU3Vic2NyaXB0aW9ucyIsInNldE1vZGUiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJUZXh0RWRpdG9yIiwiRWRpdG9yc0VudW0iLCJTVUJNSVNTSU9OIiwiQVNTSUdOTUVOVCIsIklOU1RSVUNUSU9OUyIsIk9OX1JVTiIsIk9OX0NIQU5HRSIsIk9OX0VWQUwiLCJTVEFSVElOR19DT0RFIiwiU0FNUExFX1NVQk1JU1NJT05TIiwiSU5TVFJVQ1RPUl9GSUxFIiwiU1BFQ0lBTF9OQU1FU1BBQ0VTIiwiQVZBSUxBQkxFX0VESVRPUlMiLCJFRElUT1JTX0hUTUwiLCJyZWdpc3RlcmVkXyIsImV4dGVuc2lvbnNfIiwiYnlOYW1lXyIsInJlZ2lzdGVyRWRpdG9yIiwiaW5zdGFuY2UiLCJleGl0IiwiZW50ZXIiLCJzcGFjZSIsImxhc3RJbmRleE9mIiwiZXhlY3V0aW9uTW9kZWwiLCJjb25maWd1cmF0aW9ucyIsIlJ1bkNvbmZpZ3VyYXRpb24iLCJldmFsIiwiRXZhbENvbmZpZ3VyYXRpb24iLCJPblJ1bkNvbmZpZ3VyYXRpb24iLCJPbkNoYW5nZUNvbmZpZ3VyYXRpb24iLCJPbkV2YWxDb25maWd1cmF0aW9uIiwiY29uZmlndXJlIiwiZ2V0U2t1bHB0T3B0aW9ucyIsIm9uRXhlY3V0aW9uQmVnaW4iLCJvbkV4ZWN1dGlvbkVuZCIsInJlcG9ydCIsInJlc2V0U3R1ZGVudE1vZGVsIiwicmVzZXRSZXBvcnRzIiwicmVzZXRFeGVjdXRpb25CdWZmZXIiLCJ0aGVuIiwiZmFpbHVyZSIsImRpc2FibGVGZWVkYmFjayIsInNob3dFcnJvcnMiLCJleGVjdXRpb25FbmRfIiwiZXZhbHVhdGlvbklucHV0IiwidXNlcklucHV0IiwibWlzY2V2YWwiLCJhc3luY1RvUHJvbWlzZSIsImltcG9ydE1haW5XaXRoQm9keSIsIkZJTEVOQU1FIiwicHJvZ3JhbXMiLCJ0cmltIiwic2F2ZUNvZGUiLCJ2ZXJpZnlDb2RlIiwidXBkYXRlUGFyc2UiLCJydW5JbnN0cnVjdG9yQ29kZSIsIm1vZHVsZSIsImV4ZWN1dGlvblJlcG9ydHMiLCJwcmVzZW50RmVlZGJhY2siLCIkZCIsIkVNUFRZX01PRFVMRSIsIkNvbmZpZ3VyYXRpb24iLCJxdWV1ZWRJbnB1dCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxlb3BlbiIsIm9wZW5GaWxlIiwiZmlsZXdyaXRlIiwid3JpdGVGaWxlIiwicHJpbnQiLCJpbkJyb3dzZXIiLCJpbnB1dGZ1biIsImlucHV0ZnVuVGFrZXNQcm9tcHQiLCJpbWFnZVByb3h5IiwiZ2V0SW1hZ2VQcm94eSIsInJldGFpbkdsb2JhbHMiLCJ3YXJuIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJjbGVhclRpbWVvdXQiLCJXUkFQX0lOU1RSVUNUT1JfQ09ERSIsInN0dWRlbnRDb2RlIiwiaW5zdHJ1Y3RvckNvZGUiLCJxdWljayIsImlzU2FmZSIsInNhZmVDb2RlIiwiaW5kZW50ZWRDb2RlIiwiaW5kZW50IiwiZGlzYWJsZVRpZmEiLCJzdHVkZW50Q29kZVNhZmUiLCJldmFsdWF0aW9uIiwiZHVtbXlPdXRTYW5kYm94IiwibGluZU9mZnNldCIsIk5FV19MSU5FX1JFR0VYIiwiU1VDQ0VTUyIsIlNDT1JFIiwib2xkU2NvcmUiLCJISURFIiwic2Nyb2xsaW5nIiwic2Nyb2xsVG9Cb3R0b20iLCJ0cCRuYW1lIiwicHJlc2VudEludGVybmFsRXJyb3IiLCJ0aWZhQW5hbHlzaXMiLCJPblNhbXBsZUNvbmZpZ3VyYXRpb24iLCJCb29sZWFuIiwiZmluaXNoVHVydGxlcyIsImJlZ2luRXZhbCIsInBhcnNlciIsInZlcmlmaWVyIiwiU2FtcGxlQ29uZmlndXJhdGlvbiIsImV4ZWNMaW1pdEZ1bmN0aW9uIiwiZGlzYWJsZVRpbWVvdXQiLCJJbmZpbml0eSIsInJlcXVlc3RzR2V0Iiwib3BlblVSTCIsImlzRm9yYmlkZGVuIiwidmFyaWFibGVzIiwibG9jYWxzIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInBhcnNlR2xvYmFscyIsInByb3BlcnRpZXMiLCJtb2R1bGVzIiwiYXN0IiwidmlzaXRlZExpbmVzIiwiU2V0IiwidmlzaXRCb2R5Iiwibm9kZSIsImxpbmVubyIsInN0YXRlbWVudCIsIm9yZWxzZSIsImZpbmFsYm9keSIsIkFycmF5IiwiZnJvbSIsImFzdEZyb21QYXJzZSIsImNzdCIsImZsYWdzIiwiZ2V0TGluZXMiLCJwcmVzZW50UnVuRXJyb3IiLCJGRUVEQkFDS19IVE1MIiwiZmVlZGJhY2tNb2RlbCIsIm9mZnNldCIsInRvcCIsInZpc2liaWxpdHlCdWZmZXIiLCJ0b3BPZkVsZW1lbnQiLCJib3R0b21PZkVsZW1lbnQiLCJib3R0b21PZlNjcmVlbiIsInRvcE9mU2NyZWVuIiwiZXhlY3V0aW9uUmVzdWx0cyIsIk1FU1NBR0UiLCJDQVRFR09SWSIsIkxBQkVMIiwiREFUQSIsImhpZGVTY29yZSIsImZpbmRGaXJzdEVycm9yTGluZSIsInN0dWRlbnRSZXBvcnQiLCJ1bmNvdmVyZWRMaW5lcyIsInVwZGF0ZUZlZWRiYWNrIiwibm90aWZ5RmVlZGJhY2tVcGRhdGUiLCJtc2ciLCJhcmdzIiwidiIsImNvbnZlcnRTa3VscHRFcnJvciIsImZpbGVuYW1lRXhlY3V0ZWQiLCJ0cmFjZWJhY2siLCJmcmFtZSIsInNjb3BlIiwiZmVlZGJhY2tEYXRhIiwicG9zaXRpb24iLCJmcmllbmRseU5hbWUiLCJoaWRlSWZFbXB0eSIsIkZJTEVTX0hUTUwiLCJTVEFSVElOR19GSUxFUyIsIkJBU0lDX05FV19GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwiY29uY2F0ZW5hdGVkRmlsZSIsIm1vZGVsRmlsZUxpc3QiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsImZvdW5kIiwiRk9PVEVSX0hUTUwiLCJjdXJyZW50SWQiLCJlZGl0RXZlbnRzIiwic2VsZWN0b3IiLCJlZGl0SWQiLCJlbnRyeSIsImZpbGVfcGF0aCIsImV2ZW50X3R5cGUiLCJSRU1BUF9FVkVOVF9UWVBFUyIsImRpc3BsYXllZCIsInByZXR0eVByaW50RGF0ZVRpbWUiLCJjbGllbnRfdGltZXN0YW1wIiwiZGlzYWJsZSIsIm9wdGlvbiIsImRpc2FibGVkIiwiaXNFZGl0RXZlbnQiLCJldnQiLCJwYXJzZUludCIsIm1vbnRoTmFtZXMiLCJ3ZWVrRGF5cyIsImlzU2FtZURheSIsInNlY29uZCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidGltZVN0cmluZyIsIm5vdyIsIkRhdGUiLCJwYXN0IiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZGF5U3RyIiwiZ2V0RGF5IiwibW9udGhTdHIiLCJkYXRlIiwiZ2V0SGlzdG9yeSIsInJldmVyc2UiLCJyZWR1Y2UiLCJjb21wbGV0ZSIsImVsZW0iLCJjb21wbGV0ZV9zdHIiLCJ0aW1lIiwibmV3X2xpbmUiLCJoaWdobGlnaHRUaW1lb3V0IiwiYmxvY2siLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJUUkFDRV9IVE1MIiwiUkVUUllJTkciLCJPRkZMSU5FIiwic3RvcmFnZSIsInF1ZXVlIiwiZ2V0RGVmYXVsdCIsIk1BWF9RVUVVRV9TSVpFIiwiVElNRVJfREVMQVkiLCJGQUlMX0RFTEFZIiwidGltZXJzIiwib3ZlcmxheSIsImJsb2NraW5nQXR0ZW1wdHMiLCJjYWNoZWRGaWxlbmFtZXMiLCJjcmVhdGVTdWJzY3JpcHRpb25zIiwiY2hlY2tDYWNoZXMiLCJjaGVja0lQIiwib2xkSVAiLCJpcCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJwdXNoQW55UXVldWVkIiwiX3Bvc3RSZXRyeSIsImNyZWF0ZUZpbGVTdWJzY3JpcHRpb24iLCJjcmVhdGVTZXJ2ZXJEYXRhIiwibWljcm9zZWNvbmRzIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0Iiwic2hvd092ZXJsYXkiLCJhdHRlbXB0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNzcyIsImhpZGVPdmVybGF5IiwiX2VucXVldWVEYXRhIiwiY2FjaGUiLCJfZGVxdWV1ZURhdGEiLCJzcGxpY2UiLCJkZWxheSIsInBvc3RSZXF1ZXN0IiwicG9zdCIsInRleHRTdGF0dXMiLCJyZXF1ZXN0IiwiY2FjaGVkVGltZSIsIl9wb3N0QmxvY2tpbmciLCJhdHRlbXB0cyIsImVycm9yVGhyb3duIiwibG9hZEFzc2lnbm1lbnREYXRhXyIsIkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCIsImRpcmVjdG9yeSIsIm5ld1N0YXR1cyIsInBvc3RTdGF0dXNDaGFuZ2UiLCJlcnJvckNhbGxiYWNrIiwibG9hZF9maWxlIiwiaGlkZGVuT3ZlcnJpZGUiLCJmb3JjZVVwZGF0ZSIsImdldFBuZ0Zyb21CbG9ja3MiLCJwbmdEYXRhIiwibW9kIiwibm9uZSIsImJ1aWx0aW4iLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdFNldEl0ZW0iLCJ1bmZpeFJlc2VydmVkIiwiY2FsbF9mIiwia3dhIiwicHlDaGVja0FyZ3NMZW4iLCJjYWxsIiwia3dhcmdzIiwiYnVpbHRpbnMiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dHMiLCJtcCRsb29rdXAiLCJ0cCRnZXRhdHRyIiwiZnVuY3Rpb25PYmplY3QiLCJ0cCRjYWxsIiwiY29fa3dhcmdzIiwiY29fbmFtZSIsImdldF9uYW1lc19ieV90eXBlIiwiZXhjbHVkZV9idWlsdGlucyIsImNoZWNrQm9vbCIsInByb3BlcnR5IiwiZ2V0X3ZhbHVlc19ieV90eXBlIiwiY2FsbHNpbU9yU3VzcGVuZCIsImdldF9zdHVkZW50X2RhdGEiLCJzZXRfaW5zdHJ1Y3Rpb25zIiwibmV3SW5zdHJ1Y3Rpb25zIiwiZ2V0X21vZGVsX2luZm8iLCJMT0NBTF9TVE9SQUdFX1JFRiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiX2RhdGEiLCJTdHJpbmciLCJnZXRJdGVtIiwibmFtZXNwYWNlIiwiaXNfbmV3Iiwic2VydmVyX3RpbWUiLCJzdG9yZWRfdGltZSIsIklHTk9SRURfR0xPQkFMUyIsInBhcnNlZCIsInBhcnNlVmFsdWUiLCJfX25hbWVfXyIsImZ1bGxMZW5ndGgiLCJmdW5jX2NvZGUiLCJjb192YXJuYW1lcyIsInNxJGxlbmd0aCIsImJvb2wiLCJubWJlciIsInNrVHlwZSIsImludF8iLCJmbG9hdF8iLCJOdW1iZXIiLCJhcnJheUNvbnRhaW5zIiwibmVlZGxlIiwiaGF5c3RhY2siLCJhcnJheVVuaXF1ZSIsImEiLCJjb25jYXQiLCJqIiwiZXhwYW5kQXJyYXkiLCJhZGRBcnJheSIsInJlbW92ZUFycmF5IiwiY29weUFycmF5IiwiY2xvbmVOb2RlIiwiY2xvbmUiLCJub2RlVHlwZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZVZhbHVlIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJyYW5kb21JbnRlZ2VyIiwiZmxvb3IiLCJyYW5kb20iLCJCbG9ja2x5IiwiV29ya3NwYWNlU3ZnIiwic2h1ZmZsZSIsIm1ldHJpY3MiLCJnZXRNZXRyaWNzIiwidmlld1dpZHRoIiwidmlld0hlaWdodCIsImJsb2NrcyIsImdldFRvcEJsb2NrcyIsIm1heGltYWxfaW5jcmVhc2UiLCJnZXRSZWxhdGl2ZVRvU3VyZmFjZVhZIiwibW92ZUJ5IiwibW92ZUVsZW1lbnRzIiwibW92ZUNoZWNrIiwiaXNTa0J1aWx0aW4iLCJvYmoiLCJsbmciLCJpc0FzdE5vZGUiLCJtaXhlZFJlbWFwVG9QeSIsImsiLCJrdnMiLCJhcnIiLCJzdWJ2YWwiLCJhc3NrJCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxl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b0JrRyxHQUFwQixDQUFQO0FBQ0gsS0FYRCxNQVdLO0FBQ0QsYUFBT0wsR0FBUDtBQUNIO0FBQ0osR0FmTSxNQWVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFdBQU8sSUFBSS91QixFQUFFLENBQUMybUIsT0FBSCxDQUFXMEMsR0FBZixDQUFtQjBGLEdBQW5CLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTy91QixFQUFFLENBQUMybUIsT0FBSCxDQUFXNEksS0FBWCxDQUFpQlIsR0FBakIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxTQUFuQixFQUE4QjtBQUNqQyxXQUFPLElBQUkvdUIsRUFBRSxDQUFDMm1CLE9BQUgsQ0FBV3lGLElBQWYsQ0FBb0IyQyxHQUFwQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUcsT0FBT0EsR0FBUCxLQUFlLFVBQWxCLEVBQThCO0FBQ2pDLFdBQU8sSUFBSS91QixFQUFFLENBQUMybUIsT0FBSCxDQUFXMEMsR0FBZixDQUFtQjBGLEdBQUcsQ0FBQ3BoQyxJQUF2QixDQUFQO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQzdPRCxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJibG9ja3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJibG9ja3B5XCIsIFtcImpRdWVyeVwiLCBcImtvXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJrb1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYmxvY2tweVwiXSA9IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImtvXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9ibG9ja3B5LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jc3MvYmxvY2tweS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VXcmFwcGVyfSBmcm9tIFwic3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnNFbnVtfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcImVkaXRvci9weXRob24uanNcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcInNlcnZlci5qc1wiO1xyXG5pbXBvcnQge21ha2VJbnRlcmZhY2UsIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMsIFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc30gZnJvbSBcImludGVyZmFjZS5qc1wiO1xyXG5pbXBvcnQge0VkaXRvcnN9IGZyb20gXCJlZGl0b3JzLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCbG9ja1B5RmlsZVN5c3RlbSxcclxuICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgbWFrZU1vZGVsRmlsZSxcclxuICAgIG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlLFxyXG4gICAgVU5ERUxFVEFCTEVfRklMRVMsXHJcbiAgICBVTlJFTkFNQUJMRV9GSUxFU1xyXG59IGZyb20gXCIuL2ZpbGVzXCI7XHJcbmltcG9ydCB7dXBsb2FkRmlsZSwgZG93bmxvYWRGaWxlfSBmcm9tIFwiLi9lZGl0b3IvYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7QmxvY2tQeUVuZ2luZX0gZnJvbSBcImVuZ2luZS5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4vdHJhY2VcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29uc29sZX0gZnJvbSBcIi4vY29uc29sZVwiO1xyXG5pbXBvcnQge0Jsb2NrUHlGZWVkYmFja30gZnJvbSBcImZlZWRiYWNrLmpzXCI7XHJcbmltcG9ydCB7QmxvY2tQeVNlcnZlcn0gZnJvbSBcIi4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmxvY2tQeURpYWxvZ30gZnJvbSBcIi4vZGlhbG9nXCI7XHJcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlDb3JnaXMsIF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUywgX0lNUE9SVEVEX0RBVEFTRVRTfSBmcm9tIFwiLi9jb3JnaXNcIjtcclxuaW1wb3J0IHtCbG9ja1B5SGlzdG9yeX0gZnJvbSBcIi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IHtfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU307XHJcblxyXG4vKipcclxuICogTWFqb3IgZW50cnkgcG9pbnQgZm9yIGNyZWF0aW5nIGEgQmxvY2tQeSBpbnN0YW5jZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiAtIFVzZXIgbGV2ZWwgc2V0dGluZ3MgKGUuZy4sIHdoYXQgZWRpdG9yIG1vZGUsIHdoZXRoZXIgdG8gbXV0ZSBzZW1hbnRpYyBlcnJvcnMsIGV0Yy4pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzaWdubWVudCAtIEFzc2lnbm1lbnQgbGV2ZWwgc2V0dGluZ3MgKGRhdGEgYWJvdXQgdGhlIGxvYWRlZCBhc3NpZ25tZW50LCB1c2VyLCBzdWJtaXNzaW9uLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN1Ym1pc3Npb24gLSBJbmNsdWRlcyB0aGUgc291cmNlIGNvZGUgb2YgYW55IHByb2dyYW1zIHRvIGJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCBhc3NpZ25tZW50LCBzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TW9kZWwoY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2lnbm1lbnQoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBCbG9ja1B5IG9iamVjdCBieSBpbml0aWFsaXppbmcgaXRzIGludGVyZmFjZSxcclxuICAgICAqIG1vZGVsLCBhbmQgY29tcG9uZW50cy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFV0aWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsTWV0aG9kcygpO1xyXG4gICAgICAgIHRoaXMudHVybk9uSGFja3MoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnRlcmZhY2UoKTtcclxuICAgICAgICB0aGlzLmFwcGx5TW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIGRlZmF1bHQgdmFsdWUgb3JcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdXAgYSB2YWx1ZSBmb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0VmFsdWUgLSBpZiB0aGUga2V5IGlzIG5vdCBmb3VuZCBhbnl3aGVyZSwgdXNlIHRoaXMgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0U2V0dGluZyhrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fW2tleV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxvY2FsU2V0dGluZ3NfLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsU2V0dGluZ3NfLmdldChrZXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGVsIHRvIGl0cyBkZWZhdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBDYXRlZ29yaWVzOlxyXG4gICAgICogICAqIHVzZXI6IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgdXNlciAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBhc3NpZ25tZW50OiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGFzc2lnbm1lbnQgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogc3VibWlzc2lvbjogdmFsdWVzIGZvciB0aGUgY3VycmVudCBzdWJtaXNzaW9uIChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIGRpc3BsYXk6IGZsYWdzIHJlbGF0ZWQgdG8gY3VycmVudCB2aXNpYmlsaXR5IChzdG9yZWQgdG8gbG9jYWxTZXR0aW5ncylcclxuICAgICAqICAgKiBzdGF0dXM6IG1lc3NhZ2VzIHJlbGF0ZWQgdG8gY3VycmVudCBzdGF0dXMgKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogZXhlY3V0aW9uOiB2YWx1ZXMgcmVsYXRlZCB0byBsYXN0IHJ1biAobm90IHN0b3JlZClcclxuICAgICAqICAgKiBjb25maWd1cmF0aW9uOiBjb25zdGFudCB2YWx1ZXMgcmVsYXRlZCB0byBzZXR1cCAobm90IHN0b3JlZClcclxuICAgICAqL1xyXG4gICAgaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICAvLyBDb25uZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmxvY2FsU2V0dGluZ3NfID0gbmV3IExvY2FsU3RvcmFnZVdyYXBwZXIoXCJsb2NhbFNldHRpbmdzXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5uYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciB5b3UgYXJlIGFuIE93bmVyIChjYW4gbW9kaWZ5IHRoZSBhc3NpZ25tZW50KSwgR3JhZGVyIChjYW4gdmlld1xyXG4gICAgICAgICAgICAgICAgICogdGhlIGFzc2lnbm1lbnRzJyBpbmZvcm1hdGlvbikgb3IgU3R1ZGVudCAoY2FuIG5vdCBzZWUgYW55IGluc3RydWN0b3Igc3R1ZmYpLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJvbGU6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwidXNlci5yb2xlXCIsIFwib3duZXJcIikpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGNvdXJzZSBmb3IgdGhpcyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmNvdXJzZV9pZFwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnQgYXNzaWdubWVudCBncm91cCB0aGF0IHRoaXMgdXNlciBpcyBpbnNpZGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5ncm91cF9pZFwiXSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXNzaWdubWVudDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrby5vYnNlcnZhYmxlKFwiU2NyYXRjaCBDYW52YXNcIiksXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGtvLm9ic2VydmFibGUoXCJXZWxjb21lIHRvIEJsb2NrUHkuIFRyeSBlZGl0aW5nIGFuZCBydW5uaW5nIHRoZSBjb2RlIGJlbG93LlwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGh1bWFuLWZyaWVuZGx5IFVSTCB0byB1c2UgYXMgYSBzaG9ydGN1dCBmb3IgdGhpcyBhc3NpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHVybDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdhcm5pbmcgbWVzc2FnZSBpZiBtYXplXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdDb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvblJ1bjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9ydW5cIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5vbl9jaGFuZ2VcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBvbkV2YWw6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fZXZhbFwiXSB8fCBudWxsKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5zdHJ1Y3RvckZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkSWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBmb3JrZWRWZXJzaW9uOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvdXJzZUlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHRhZ3M6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVTdWJtaXNzaW9uczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIHJldmlld2VkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnJldmlld2VkXCJdKSxcclxuICAgICAgICAgICAgICAgIHB1YmxpYzoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5wdWJsaWNcIl0pLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LmhpZGRlblwiXSksXHJcbiAgICAgICAgICAgICAgICBpcFJhbmdlczoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5pcF9yYW5nZXNcIl0pLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbChjb25maWd1cmF0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInN1Ym1pc3Npb24uY29kZVwiXSB8fCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhRmlsZXM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDoga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdDoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50SWQgaW5mZXJyZWQgZnJvbSBhc3NpZ25tZW50LmlkXHJcbiAgICAgICAgICAgICAgICAvLyBjb3Vyc2VJZCBpbmZlcnJlZCBmcm9tIHVzZXIuY291cnNlSWRcclxuICAgICAgICAgICAgICAgIC8vIHVzZXJJZCBpbmZlcnJlZCBmcm9tIHVzZXIuaWRcclxuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnRWZXJzaW9uIGluZmVycmVkIGZyb20gYXNzaWdubWVudC52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShcIlN0YXJ0ZWRcIiksXHJcbiAgICAgICAgICAgICAgICBncmFkaW5nU3RhdHVzOiBrby5vYnNlcnZhYmxlKFwiTm90UmVhZHlcIiksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHtcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudGx5IHZpc2libGUgRmlsZSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIHByZXNlbnRlZCB3aXRoIHRoZSBpbnN0cnVjdG9yIHNldHRpbmdzIGFuZCBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IGtvLm9ic2VydmFibGUodGhpcy5nZXRTZXR0aW5nKFwiZGlzcGxheS5pbnN0cnVjdG9yXCIsIFwiZmFsc2VcIikudG9TdHJpbmcoKT09PVwidHJ1ZVwiKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCB0aGUgcHJpbnRlciBmcm9tIHNob3dpbmcgdGhpbmdzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG11dGVQcmludGVyOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogKFB5dGhvbiBWaWV3cykgVGhlIGN1cnJlbnQgZWRpdG9yIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7RGlzcGxheU1vZGVzfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBweXRob25Nb2RlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkucHl0aG9uLm1vZGVcIiwgRGlzcGxheU1vZGVzLlNQTElUKSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IEhpc3RvcnkgbW9kZSBpcyBlbmdhZ2VkLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge2Jvb2x9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGhpc3RvcnlNb2RlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgYXV0by1zYXZpbmcgY2hhbmdlcyBpbiBQeXRob24gZWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgKiBJZiBhbiBpbnRlZ2VyLCBzcGVjaWZpZXMgdGhlIGRlbGF5IHRoYXQgc2hvdWxkIGJlIHVzZWQgKG1pY3Jvc2Vjb25kcykuXHJcbiAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIG5ldmVyIG9uIGluIG5vbi1QeXRob24gZWRpdG9ycy5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfGludH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYXV0b1NhdmU6IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25zb2xlIGlzIGZ1bGwgd2lkdGggYW5kIGZlZWRiYWNrIGlzIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBiaWdDb25zb2xlOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVGhlIGhlaWdodCB0byB1c2UgZm9yIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgbnVsbCwgdGhlbiBsZXQgdGhlIGhlaWdodCByZW1haW4gdW5jaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgKiAgICBJZiBhIG51bWJlciwgdGhlbiB0aGVcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbnNvbGVIZWlnaHQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoaWNoIHBhbmVsIHRvIHNob3cgaW4gdGhlIHNlY29uZCByb3cncyBzZWNvbmQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7U2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRSb3dTZWNvbmRQYW5lbDoga28ub2JzZXJ2YWJsZShTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSB0cmFjaW5nIHRoZSBjb2RlIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmFjZUV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBsaXN0IG9mIHByb21pc2VzIHRvIHN0aWxsIHJlc29sdmUgd2hpbGUgbG9hZGluZyBkYXRhc2V0c1xyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFByb21pc2U+fVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nRGF0YXNldHM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSB0ZW1wb3JhcnkgY2hhbmdlZCB2YWx1ZSBvZiB0aGUgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBjaGFuZ2VkIGZyb20gd2hhdCBpcyBpbiB0aGUgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkSW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBBIGhvbGRlciBmb3IgdGhlIHRpbWVyIHRvIHRyaWdnZXIgb24tY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT25DaGFuZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgZmVlZGJhY2sgYW5kIG91dHB1dCBjb3JyZXNwb25kcyB0byB0aGUgY3VycmVudCBzdWJtaXNzaW9uLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyB3b3VsZCBiZSBmYWxzZSBpZiB0aGVyZSBpcyBubyBmZWVkYmFjay9vdXRwdXQgKGkuZS4sIGNvZGUgaGFzIG5vdCBiZWVuIHJ1biksXHJcbiAgICAgICAgICAgICAgICAgKiBvciBpZiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIHN1Ym1pc3Npb24gYWZ0ZXIgdGhlIGxhc3QgcnVuIChlLmcuLCBieSBlZGl0aW5nXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgdGV4dCkuXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGRpcnR5U3VibWlzc2lvbjoga28ub2JzZXJ2YWJsZSh0cnVlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2U6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbikge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFdoYXQgaWYgc3VibWlzc2lvbnMnIGFzc2lnbm1lbnQgdmVyc2lvbiBhbmQgdGhlIGFzc2lnbm1lbnRzJyB2ZXJzaW9uIGNvbmZsaWN0P1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5pZChzdWJtaXNzaW9uLmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uY29kZShzdWJtaXNzaW9uLmNvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KHN1Ym1pc3Npb24uY29ycmVjdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKHN1Ym1pc3Npb24uc2NvcmUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5lbmRwb2ludChzdWJtaXNzaW9uLmVuZHBvaW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udXJsKHN1Ym1pc3Npb24udXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24udmVyc2lvbihzdWJtaXNzaW9uLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5ncmFkaW5nU3RhdHVzKHN1Ym1pc3Npb24uZ3JhZGluZ19zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKHN1Ym1pc3Npb24uc3VibWlzc2lvbl9zdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwudXNlci5jb3Vyc2VJZChzdWJtaXNzaW9uLmNvdXJzZV9pZCk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoc3VibWlzc2lvbi5leHRyYV9maWxlcywgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50RGF0YV8oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmVzZXRJbnRlcmZhY2UoKTtcclxuICAgICAgICBsZXQgd2FzU2VydmVyQ29ubmVjdGVkID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIGxldCBhc3NpZ25tZW50ID0gZGF0YS5hc3NpZ25tZW50O1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pZChhc3NpZ25tZW50LmlkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudmVyc2lvbihhc3NpZ25tZW50LnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5jb3Vyc2VJZChhc3NpZ25tZW50LmNvdXJzZV9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZElkKGFzc2lnbm1lbnQuZm9ya2VkX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZm9ya2VkVmVyc2lvbihhc3NpZ25tZW50LmZvcmtlZF92ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKGFzc2lnbm1lbnQuaGlkZGVuKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoYXNzaWdubWVudC5yZXZpZXdlZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnB1YmxpYyhhc3NpZ25tZW50LnB1YmxpYyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnR5cGUoYXNzaWdubWVudC50eXBlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQudXJsKGFzc2lnbm1lbnQudXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaXBSYW5nZXMoYXNzaWdubWVudC5pcF9yYW5nZXMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoYXNzaWdubWVudC5pbnN0cnVjdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5uYW1lKGFzc2lnbm1lbnQubmFtZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKGFzc2lnbm1lbnQub25fY2hhbmdlIHx8IG51bGwpO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9uX2NoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKFwiIW9uX2NoYW5nZS5weVwiLCBhc3NpZ25tZW50Lm9uX2NoYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoYXNzaWdubWVudC5vbl9ldmFsIHx8IG51bGwpO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50Lm9uX2V2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9ldmFsLnB5XCIsIGFzc2lnbm1lbnQub25fZXZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vblJ1bihhc3NpZ25tZW50Lm9uX3J1bik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZShhc3NpZ25tZW50LnN0YXJ0aW5nX2NvZGUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vd25lcklkKGFzc2lnbm1lbnQub3duZXJfaWQpO1xyXG4gICAgICAgIGxvYWRBc3NpZ25tZW50U2V0dGluZ3ModGhpcy5tb2RlbCwgYXNzaWdubWVudC5zZXR0aW5ncyk7XHJcbiAgICAgICAgdGhpcy5sb2FkVGFncyhhc3NpZ25tZW50LnRhZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFNhbXBsZVN1Ym1pc3Npb25zKGFzc2lnbm1lbnQuc2FtcGxlX3N1Ym1pc3Npb25zKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX2luc3RydWN0b3JfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9zdGFydGluZ19maWxlcywgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3VibWlzc2lvbihkYXRhLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobnVsbCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCh3YXNTZXJ2ZXJDb25uZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5jb3JnaXMubG9hZERhdGFzZXRzKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kZWxNZXRob2RzKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIG1vZGVsLnVpID0ge1xyXG4gICAgICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgICAgICBpc0dyYWRlcjoga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJvd25lclwiIHx8IG1vZGVsLnVzZXIucm9sZSgpID09PSBcImdyYWRlclwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0cnVjdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbmdlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuaXNDaGFuZ2VkKCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMoKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnV0aWxpdGllcy5tYXJrZG93bihtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZW51OiB7XHJcbiAgICAgICAgICAgICAgICBjYW5NYXJrU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpIHx8IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHRleHRNYXJrU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlJlb3BlbiBmb3IgZWRpdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlJ1blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTWFyayBhcyBzdWJtaXR0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrTWFya1N1Ym1pdHRlZDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMoXCJpblByb2dyZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmRlbGF5ZWRSdW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXMoXCJTdWJtaXR0ZWRcIilcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoKS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdHRlZFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlY29uZFJvdzoge1xyXG4gICAgICAgICAgICAgICAgaXNGZWVkYmFja1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFjZVZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaXNDb25zb2xlU2hvd1Zpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSgpIHx8IG1vZGVsLnVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSgpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoTGFiZWw6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlZpZXcgVHJhY2VcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhbmVsID0gbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBhbmVsKCkgPT09IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5UUkFDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWwoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuc2Vjb25kUm93U2Vjb25kUGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC0xMlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUV2YWx1YXRlOiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFdmFsdWF0ZSgpIHx8ICFtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBiYWRnZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXJ1bnRpbWUtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXN5bnRheC1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWludGVybmFsLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXNlbWFudGljLWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3RvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtZmVlZGJhY2stZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1wcm9ibGVtLWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLWluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1uby1lcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJ1bnRpbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1bnRpbWUgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN5bnRheFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVkaXRvciBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW50ZXJuYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkludGVybmFsIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYW5hbHl6ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFsZ29yaXRobSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmVlZGJhY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vIGVycm9yc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm8gZXJyb3JzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2U6IHtcclxuICAgICAgICAgICAgICAgIGhhczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgbGluZToga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZURhdGEgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cmFjZURhdGEgfHwgc3RlcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyB0cmFjZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWZvcmUgcnVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBsYXN0U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5pc2hlZCBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgYXJlIHRoZXNlIG51bWJlcnMgd29ua3k/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkxpbmUgXCIrKHRyYWNlRGF0YVtzdGVwXS5saW5lLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzID0gTWF0aC5tYXgoMCwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChwcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gTWF0aC5taW4obW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSwgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChuZXh0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgbGFzdFN0ZXA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2VEYXRhW3N0ZXAgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSB8fCAhbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRzOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbnN3ZXIucHlcIjogcmV0dXJuIG1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIWluc3RydWN0aW9ucy5tZFwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9ldmFsLnB5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzKCkuc29tZShmaWxlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmZpbGVuYW1lKCkgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXRhZ3MuYmxvY2tweVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC50YWdzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnNhbXBsZVN1Ym1pc3Npb25zKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP21vY2tfdXJscy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/dGFncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/c2V0dGluZ3MuYmxvY2tweVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBmaXggZXh0cmFmaWxlcyBmb3IgaW5zdHJ1Y3RvciBhbmQgc3R1ZGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZShwYXRoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdHVkZW50RmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczogb2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBleHRyYVN0YXJ0aW5nRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWRpdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCAoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVkaXRvcnMuZ2V0RWRpdG9yKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVFZGl0b3JzKCkgPyBcIk5vbmVcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID8gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkgOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlJlc2V0XCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uY29kZShtb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMobW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZS5maWxlbmFtZSgpLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBmaWxlLmNvbnRlbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuU2F2ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSksXHJcbiAgICAgICAgICAgICAgICBjYW5EZWxldGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICghbW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRmlsZXMoKSB8fCBtb2RlbC5kaXNwbGF5Lmluc3RydWN0b3IoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBVTkRFTEVUQUJMRV9GSUxFUy5pbmRleE9mKG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoKSkgPT09IC0xKSxcclxuICAgICAgICAgICAgICAgIGNhblJlbmFtZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOUkVOQU1BQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB1cGxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBkb3dubG9hZDogZG93bmxvYWRGaWxlLmJpbmQoc2VsZiksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnREYXRhc2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmNvcmdpcy5vcGVuRGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHl0aG9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZU1pcnJvciA9IHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dEVkaXRvci5jb2RlTWlycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29kZU1pcnJvci5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsICFjb2RlTWlycm9yLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTW9kZTogKG5ld01vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtVmlldy5DaGFuZ2VcIiwgXCJcIiwgXCJcIiwgbmV3TW9kZSwgbW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5weXRob25Nb2RlKG5ld01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpID09PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLm9sZFB5dGhvbk1vZGUgPSBuZXdNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpc0hpc3RvcnlBdmFpbGFibGU6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEhpc3RvcnlcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5PZmZIaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnVwZGF0ZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0dXJuT25IaXN0b3J5TW9kZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvYWRIaXN0b3J5KChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5oaXN0b3J5LmxvYWQocmVzcG9uc2UuaGlzdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLnNldFJlYWRPbmx5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnVpLmVkaXRvcnMucHl0aG9uLnR1cm5PZmZIaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9uSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVRvU3RhcnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVQcmV2aW91cygpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlTmV4dCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3N0UmVjZW50OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9Nb3N0UmVjZW50KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZTogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkudXNlKCk7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlOiAoKSA9PiBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnNhdmVBc3NpZ25tZW50KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlY3V0ZToge1xyXG4gICAgICAgICAgICAgICAgaXNSdW5uaW5nOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMub25FeGVjdXRpb24oKSA9PT0gU3RhdHVzU3RhdGUuQUNUSVZFXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcnVuOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5lbmdpbmUuZGVsYXllZFJ1bigpLFxyXG4gICAgICAgICAgICAgICAgZXZhbHVhdGU6ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5ldmFsdWF0ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAoZW5kcG9pbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICBcInNlcnZlci1zdGF0dXMtXCIgKyBtb2RlbC5zdGF0dXNbZW5kcG9pbnRdKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0VuZHBvaW50Q29ubmVjdGVkOiAoZW5kcG9pbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24udXJscyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzW2VuZHBvaW50XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlQXNzaWdubWVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkSGlzdG9yeU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlRmlsZU1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2FkRGF0YXNldE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5sb2dFdmVudE1lc3NhZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5zYXZlSW1hZ2UoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy51cGRhdGVTdWJtaXNzaW9uTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNNZXNzYWdlKCkgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZvcmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbjogKGRhdGEsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNlbGYubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmZhZGVPdXQoMTAwKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25IYWNrcygpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVE9ET1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5cyB0aGUgS25vY2tvdXRKUyBiaW5kaW5ncyB0byB0aGUgbW9kZWwsIGluc3RhbnRpYXRpbmcgdGhlIHZhbHVlcyBpbnRvIHRoZVxyXG4gICAgICogSFRNTC5cclxuICAgICAqL1xyXG4gICAgYXBwbHlNb2RlbCgpIHtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVdGlsaXRpZXMoKSB7XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXRpbGl0aWVzID0ge1xyXG4gICAgICAgICAgICBtYXJrZG93bjogKHRleHQpID0+IHRleHQgPyBFYXN5TURFLnByb3RvdHlwZS5tYXJrZG93bih0ZXh0KSA6IFwiPHA+PC9wPlwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29tcG9uZW50cygpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5tb2RlbC5jb25maWd1cmF0aW9uLmNvbnRhaW5lcjtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyA9IHt9O1xyXG4gICAgICAgIGxldCBtYWluID0gdGhpcztcclxuICAgICAgICAvLyBFYWNoIG9mIHRoZXNlIGNvbXBvbmVudHMgd2lsbCB0YWtlIHRoZSBCbG9ja1B5IGluc3RhbmNlLCBhbmQgcG9zc2libHkgYVxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSB0byB0aGUgcmVsZXZhbnQgSFRNTCBsb2NhdGlvbiB3aGVyZSBpdCB3aWxsIGJlIGVtYmVkZGVkLlxyXG4gICAgICAgIGNvbXBvbmVudHMuZGlhbG9nID0gbmV3IEJsb2NrUHlEaWFsb2cobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1kaWFsb2dcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZmVlZGJhY2sgPSBuZXcgQmxvY2tQeUZlZWRiYWNrKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2tcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMudHJhY2UgPSBuZXcgQmxvY2tQeVRyYWNlKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29uc29sZSA9IG5ldyBCbG9ja1B5Q29uc29sZShtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWNvbnNvbGVcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZW5naW5lID0gbmV3IEJsb2NrUHlFbmdpbmUobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5maWxlU3lzdGVtID0gbmV3IEJsb2NrUHlGaWxlU3lzdGVtKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZWRpdG9ycyA9IG5ldyBFZGl0b3JzKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktZWRpdG9yXCIpKTtcclxuICAgICAgICBjb21wb25lbnRzLnB5dGhvbkVkaXRvciA9IHRoaXMuY29tcG9uZW50cy5lZGl0b3JzLmJ5TmFtZShcInB5dGhvblwiKTtcclxuICAgICAgICBjb21wb25lbnRzLnNlcnZlciA9IG5ldyBCbG9ja1B5U2VydmVyKG1haW4pO1xyXG4gICAgICAgIGNvbXBvbmVudHMuY29yZ2lzID0gbmV3IEJsb2NrUHlDb3JnaXMobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5oaXN0b3J5ID0gbmV3IEJsb2NrUHlIaXN0b3J5KG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktaGlzdG9yeS10b29sYmFyXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZU9uQ2xpY2soaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnV0dG9uLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJ1dHRvbi5jbGljayhzdWJtaXRGb3JtKTtcbiAgICAgICAgaW5wdXQua2V5dXAoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFByb21pc2U7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUV2YWx1YXRlIGV4dGVuZHMgQ29uc29sZUxpbmVJbnB1dCB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBcIkV2YWx1YXRlOlwiKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XG4gICAgICAgIHN1cGVyKG1haW4sIENvbnNvbGVMaW5lVHlwZS5TVEFSVF9FVkFMKTtcbiAgICAgICAgdGhpcy5odG1sLmFwcGVuZCgkKFNUQVJUX0VWQUxfSFRNTCkpO1xuICAgICAgICB0aGlzLmh0bWwuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLnVpLmV4ZWN1dGUuZXZhbHVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICB3aGVyZS5hcHBlbmQodGhpcy5odG1sKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5Q29uc29sZSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgZm9yIG1hbmFnaW5nIHRoZSBjb25zb2xlLCB3aXRoIGZlYXR1cmVzIGZvciB0aGluZ3MgbGlrZSBwcmludGluZywgcGxvdHRpbmcsIGV2YWxpbmcsIGlucHV0aW5nLlxuICAgICAqIFRoZSBcInByaW50ZXJcIiBpcyB0aGUgcmVnaW9uIHdoZXJlIHdlIHB1dCB0aGluZ3MsIGFzIG9wcG9zZWQgdG8gdGhlIGNvbnNvbGUgYXMgYSB3aG9sZS5cbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZyA9IHRhZy5maW5kKFwiLmJsb2NrcHktcHJpbnRlclwiKTtcblxuICAgICAgICB0aGlzLk1JTklNVU1fV0lEVEggPSAyMDA7XG4gICAgICAgIHRoaXMuTUlOSU1VTV9IRUlHSFQgPSAyMDA7XG4gICAgICAgIHRoaXMuREVGQVVMVF9IRUlHSFQgPSB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCk7IC8vIExldCBDU1MgZGVmaW5lIHRoaXNcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQ7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZSB1c2VyIG1vZGlmaWVzIGEgZmlsZSwgdGhlbiBtYWtlIHRoZSBjb25zb2xlIGxvb2sgZmFkZWQgYSBsaXR0bGVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlciwgaW5jbHVkaW5nIHJlbW92aW5nIGFueSB0ZXh0IGluIGl0IGFuZFxuICAgICAqIGZpeGluZyBpdHMgc2l6ZS5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5vdXRwdXQucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmVtcHR5KCk7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIHJlc2V0IGl0XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KHRoaXMuREVGQVVMVF9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBudWxsO1xuICAgICAgICBTay5UdXJ0bGVHcmFwaGljcyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUdXJ0bGVMaW5lLmJpbmQodGhpcyksXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmxvYWRBc3NldC5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGxvYWRBc3NldChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGdldFR1cnRsZUxpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cnRsZUxpbmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZSA9IG5ldyBDb25zb2xlTGluZVR1cnRsZSh0aGlzLm1haW4pO1xuICAgICAgICAgICAgdGhpcy50dXJ0bGVMaW5lLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IGNoYW5nZWQgdGhlIGNvbnNvbGUgc2l6ZSwgd2UnbGwgZG8gc29cbiAgICAgICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5wcmV2aW91c0NvbnNvbGVIZWlnaHQoKSA9PT0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcmludGVyRGltZW5zaW9uID0gdGhpcy5wcmludGVyVGFnLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodChjdXJyZW50UHJpbnRlckRpbWVuc2lvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgU2suVHVydGxlR3JhcGhpY3MuaGVpZ2h0ID0gY3VycmVudFByaW50ZXJEaW1lbnNpb24tNDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHVydGxlTGluZS5odG1sWzBdO1xuICAgIH1cblxuICAgIGZpbmlzaFR1cnRsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5zYXZlVHVydGxlT3V0cHV0KCkpIHtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSB0aGlzLnR1cnRsZUxpbmUuaHRtbC5maW5kKFwiY2FudmFzXCIpLmxhc3QoKVswXTtcbiAgICAgICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbGV0IGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVJbWFnZShcInR1cnRsZV9vdXRwdXRcIiwgZGF0YVVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0dXJ0bGVzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgY3VycmVudCB3aWR0aFxuICAgIG5ld1R1cnRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fV0lEVEgsIHRoaXMucHJpbnRlclRhZy53aWR0aCgpLTQwKTtcbiAgICB9XG5cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLk1JTklNVU1fSEVJR0hULCB0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkrNDApO1xuICAgIH1cblxuICAgIGlzTXV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgZWFjaCBwcmludGVkIGVsZW1lbnQgaW4gdGhlIHByaW50ZXIgYW5kIG1ha2VzIGl0IGhpZGRlblxuICAgICAqIG9yIHZpc2libGUsIGRlcGVuZGluZyBvbiB3aGF0IHN0ZXAgd2UncmUgb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcCAtIFRoZSBjdXJyZW50IHN0ZXAgb2YgdGhlIGV4ZWN1dGVkIHByb2dyYW0gdGhhdCB3ZSdyZSBvbjsgZWFjaCBlbGVtZW50IGluIHRoZSBwcmludGVyIG11c3QgYmUgbWFya2VkIHdpdGggYSBcImRhdGEtc3RlcFwiIHByb3BlcnR5IHRvIHJlc29sdmUgdGhpcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZSAtIERlcHJlY2F0ZWQsIG5vdCBzdXJlIHdoYXQgdGhpcyBldmVuIGRvZXMuXG4gICAgICovXG4gICAgc3RlcFByaW50ZXIoc3RlcCwgcGFnZSkge1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXItb3V0cHV0XCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiZGF0YS1zdGVwXCIpIDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmludCBhIGxpbmUgdG8gdGhlIG9uLXNjcmVlbiBwcmludGVyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lVGV4dCAtIEEgbGluZSBvZiB0ZXh0IHRvIGJlIHByaW50ZWQgb3V0LlxuICAgICAqL1xuICAgIHByaW50KGxpbmVUZXh0KSB7XG4gICAgICAgIC8vIEVtcHR5IHN0cmluZ3MgbWVhbnMgZG8gbm90aGluZy5cbiAgICAgICAgLy8gcHJpbnQoXCJcIiwgZW5kPVwiXCIpXG4gICAgICAgIGlmICghbGluZVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGxpbmVUZXh0LmNoYXJBdChsaW5lVGV4dC5sZW5ndGgtMSkgPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BsaXRMaW5lcyA9IGxpbmVUZXh0LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBpZiAodGhpcy5saW5lQnVmZmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLmFkZENvbnRlbnQoc3BsaXRMaW5lc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0xOyBpIDwgc3BsaXRMaW5lcy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5wdXNoKHRoaXMubGluZUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgICAgICB0aGlzLmxpbmVCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVUZXh0KHRoaXMubWFpbiwgQ29uc29sZUxpbmVUeXBlLlRFWFQsIHNwbGl0TGluZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbHVzaCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHBsb3QocGxvdHMpIHtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lUGxvdCh0aGlzLm1haW4sIHBsb3RzKTtcbiAgICAgICAgdGhpcy5wbG90QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbG90QnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50UElMSW1hZ2UoaW1hZ2VEYXRhKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbWFnZSh0aGlzLm1haW4sIGltYWdlRGF0YS5pbWFnZSk7XG4gICAgICAgIHRoaXMuaW1hZ2VCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQnVmZmVyO1xuICAgIH1cblxuICAgIHByaW50VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IHByaW50ZWRWYWx1ZSA9IG5ldyBDb25zb2xlTGluZVZhbHVlKHRoaXMubWFpbiwgdmFsdWUpO1xuICAgICAgICBwcmludGVkVmFsdWUucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgICAgIHJldHVybiBwcmludGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmVnaXN0ZXJzIGEgUHJvbWlzZSBmcm9tIHRoZSBJbnB1dCBib3hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvbXB0TWVzc2FnZSAtIE1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUlucHV0KHRoaXMubWFpbiwgcHJvbXB0TWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH07XG5cblxuICAgIGV2YWx1YXRlKCkge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gbmV3IENvbnNvbGVMaW5lRXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRCdWZmZXIucmVuZGVyKHRoaXMucHJpbnRlclRhZyk7XG4gICAgfVxuXG4gICAgYmVnaW5FdmFsKCkge1xuICAgICAgICBsZXQgc3RhcnRFdmFsdWF0aW9uID0gbmV3IENvbnNvbGVMaW5lU3RhcnRFdmFsdWF0ZSh0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gc3RhcnRFdmFsdWF0aW9uLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuY29uZGl0aW9uYWxseSBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICovXG4gICAgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICAgIHRoaXMudGFnLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLnRhZy5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpIC0gdGhpcy50YWcucHJvcChcImNsaWVudEhlaWdodFwiKVxuICAgICAgICB9LCA1MDApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQge3NsdWd9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vLyBUT0RPOiBlZGl0b3IuYm0uYmxvY2tFZGl0b3IuZXh0cmFUb29sc1tdXG5cbmV4cG9ydCBsZXQgX0lNUE9SVEVEX0RBVEFTRVRTID0ge307XG5leHBvcnQgbGV0IF9JTVBPUlRFRF9DT01QTEVURV9EQVRBU0VUUyA9IHt9O1xuXG4vKipcbiAqIFRoaXMgaXMgYSB2ZXJ5IHNpbXBsaXN0aWMgaGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCB0cmFuc2Zvcm1cbiAqIGEgZ2l2ZW4gYnV0dG9uIGludG8gYSBcIkxvYWRlZFwiIHN0YXRlIChkaXNhYmxlZCwgcHJlc3NlZCBzdGF0ZSwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnRuIC0gQW4gSFRNTCBlbGVtZW50IHRvIGNoYW5nZSB0aGUgdGV4dCBvZi5cbiAqL1xubGV0IHNldEJ1dHRvbkxvYWRlZCA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICBidG4uYWRkQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXByaW1hcnlcIilcbiAgICAgICAgLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKVxuICAgICAgICAudGV4dChcIkxvYWRlZFwiKVxuICAgICAgICAuYXR0cihcImFyaWEtcHJlc3NlZFwiLCBcInRydWVcIik7XG59O1xuXG5cbi8qKlxuICogTW9kdWxlIHRoYXQgY29ubmVjdHMgdG8gdGhlIENPUkdJUyBkYXRhc2V0cyBhbmQgbWFuYWdlcyBpbnRlcmFjdGlvbnNcbiAqIHdpdGggdGhlbS4gVGhpcyBpbmNsdWRlcyBsb2FkaW5nIGluIGRhdGFzZXRzIGF0IGxhdW5jaCBhbmQgb24tdGhlLWZseS5cbiAqIE5vdGUgdGhhdCB0aGlzIGhhcyBubyBwcmVzZW5jZSBvbiBzY3JlZW4sIHNvIGl0IGRvZXMgbm90IGhhdmUgYSB0YWcuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeUNvcmdpc31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeUNvcmdpcyhtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIHRoaXMubG9hZGVkRGF0YXNldHMgPSBbXTtcbiAgICB0aGlzLmxvYWREYXRhc2V0cygpO1xufVxuXG5CbG9ja1B5Q29yZ2lzLnByb3RvdHlwZS5sb2FkRGF0YXNldHMgPSBmdW5jdGlvbiAoc2lsZW50bHkpIHtcbiAgICAvLyBMb2FkIGluIGVhY2ggdGhlIGRhdGFzZXRzXG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsLFxuICAgICAgICBlZGl0b3IgPSB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IsXG4gICAgICAgIHNlcnZlciA9IHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlcjtcbiAgICBsZXQgaW1wb3J0cyA9IFtdO1xuICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMoKS5zcGxpdChcIixcIikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAmJiAhKG5hbWUgaW4gQmxvY2tNaXJyb3JCbG9ja0VkaXRvci5FWFRSQV9UT09MUykpIHtcbiAgICAgICAgICAgIGltcG9ydHMucHVzaC5hcHBseShpbXBvcnRzLCB0aGlzLmltcG9ydERhdGFzZXQoc2x1ZyhuYW1lKSwgbmFtZSwgc2lsZW50bHkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBkYXRhc2V0cyBhcmUgbG9hZGVkLCB1cGRhdGUgdGhlIHRvb2xib3guXG4gICAgJC53aGVuLmFwcGx5KCQsIGltcG9ydHMpLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiVFJJR0dFUkVEXCIpO1xuICAgICAgICBlZGl0b3IuYm0uZm9yY2VCbG9ja1JlZnJlc2goKTtcbiAgICAgICAgZWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VydmVyLmZpbmFsaXplU3Vic2NyaXB0aW9ucygpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBMb2FkcyB0aGUgZGVmaW5pdGlvbnMgZm9yIGEgZGF0YXNldCBpbnRvIHRoZSBlbnZpcm9ubWVudCwgaW5jbHVkaW5nXG4gKiB0aGUgZGF0YXNldCAoYXMgYSBKUyBmaWxlKSwgdGhlIHNrdWxwdCBiaW5kaW5ncywgYW5kIHRoZSBibG9ja2x5XG4gKiBiaW5kaW5ncy4gVGhpcyByZXF1aXJlcyBhY2Nlc3MgdG8gYSBDT1JHSVMgc2VydmVyLCBhbmQgb2NjdXJzXG4gKiBhc3luY2hyb25vdXNseS4gVGhlIHJlcXVlc3RzIGFyZSBmaXJlZCBhbmQgdGhlaXIgZGVmZXJyZWQgb2JqZWN0c1xuICogYXJlIHJldHVybmVkIC0gY2FsbGVycyBjYW4gdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gcGVyZm9ybSBhbiBhY3Rpb25cbiAqIG9uIGNvbXBsZXRpb24gb2YgdGhlIGltcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2x1ZyAtIFRoZSBVUkwgc2FmZSB2ZXJzaW9uIG9mIHRoZSBkYXRhc2V0IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIHVzZXItZnJpZW5kbHkgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lLlxuICogQHJldHVybnMge0FycmF5LjxEZWZlcnJlZD59IC0gUmV0dXJucyB0aGUgYXN5bmMgcmVxdWVzdHMgYXMgZGVmZXJyZWQgb2JqZWN0cy5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUuaW1wb3J0RGF0YXNldCA9IGZ1bmN0aW9uIChzbHVnLCBuYW1lKSB7XG4gICAgbGV0IHVybF9yZXRyaWV2YWxzID0gW107XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cyArIFwiYmxvY2tweS9cIiArIHNsdWcgKyBcIi9cIiArIHNsdWc7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5wdXNoKG5hbWUpO1xuICAgICAgICAvLyBBY3R1YWxseSBnZXQgZGF0YVxuICAgICAgICBsZXQgZ2V0RGF0YXNldCA9ICQuZ2V0U2NyaXB0KHJvb3QgKyBcIl9kYXRhc2V0LmpzXCIpO1xuICAgICAgICAvLyBMb2FkIGdldENvbXBsZXRlIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGJlY2F1c2UgaXRzIGJpZyA6KFxuICAgICAgICBsZXQgZ2V0Q29tcGxldGUgPSAkLmdldFNjcmlwdChyb290ICsgXCJfY29tcGxldGUuanNcIik7XG4gICAgICAgIGxldCBnZXRTa3VscHQgPSAkLmdldChyb290ICsgXCJfc2t1bHB0LmpzXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtcInNyYy9saWIvXCIgKyBzbHVnICsgXCIvX19pbml0X18uanNcIl0gPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGdldEJsb2NrbHkgPSAkLmdldFNjcmlwdChyb290ICsgXCJfYmxvY2tseS5qc1wiKTtcbiAgICAgICAgLy8gT24gY29tcGxldGlvbiwgdXBkYXRlIG1lbnVzLlxuICAgICAgICAkLndoZW4oZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KS5kb25lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkRGF0YXNldHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0VG9CbG9ja3MuaGlkZGVuSW1wb3J0cy5wdXNoKHNsdWcpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IucmVtYWtlVG9vbGJveCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubG9hZGluZ0RhdGFzZXRzLnJlbW92ZShuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybF9yZXRyaWV2YWxzLnB1c2goZ2V0RGF0YXNldCwgZ2V0U2t1bHB0LCBnZXRCbG9ja2x5KTtcbiAgICB9XG4gICAgcmV0dXJuIHVybF9yZXRyaWV2YWxzO1xufTtcblxuLyoqXG4gKiBPcGVucyBhIGRpYWxvZyBib3ggdG8gcHJlc2VudCB0aGUgdXNlciB3aXRoIHRoZSBkYXRhc2V0cyBhdmFpbGFibGVcbiAqIHRocm91Z2ggdGhlIENPUkdJUyBzZXJ2ZXIuIFRoaXMgcmVxdWlyZXMgYSBjYWxsLCBzbyB0aGlzIG1ldGhvZFxuICogY29tcGxldGVzIGFzeW5jaHJvbm91c2x5LiBUaGUgZGlhbG9nIGlzIGNvbXBvc2VkIG9mIGEgdGFibGUgd2l0aFxuICogYnV0dG9ucyB0byBsb2FkIHRoZSBkYXRhc2V0cyAoTW9yZSB0aGFuIG9uZSBkYXRhc2V0IGNhbiBiZSBsb2FkZWRcbiAqIGZyb20gd2l0aGluIHRoZSBkaWFsb2cgYXQgYSB0aW1lKS5cbiAqL1xuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwiaW1wb3J0RGF0YXNldHNcIikpIHtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzLmltcG9ydERhdGFzZXRzO1xuICAgICAgICAkLmdldEpTT04ocm9vdCArIFwiaW5kZXguanNvblwiLCAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIE1ha2UgdXAgdGhlIEJvZHlcbiAgICAgICAgICAgIGxldCBkYXRhc2V0cyA9IGRhdGEuYmxvY2tweTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudGF0aW9uID0gcm9vdCtcImJsb2NrcHkvaW5kZXguaHRtbFwiO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gJChgPHA+RG9jdW1lbnRhdGlvbiBpcyBhdmFpbGFibGUgYXQgPGEgaHJlZj0nJHtkb2N1bWVudGF0aW9ufScgdGFyZ2V0PV9ibGFuaz51cmw8L2E+PC9wPmApO1xuICAgICAgICAgICAgbGV0IGJvZHkgPSAkKFwiPHRhYmxlPjwvdGFibGU+XCIsIHtcImNsYXNzXCI6IFwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc20gdGFibGUtc3RyaXBlZFwifSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykuc29ydCgpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzbHVnZ2VkTmFtZSA9IHNsdWcoZGF0YXNldHNbbmFtZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS10b2dnbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPkxvYWQ8L2J1dHRvbj4nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nU3JjID0gcm9vdCtcIi4uL2ltYWdlcy9kYXRhc2V0cy9cIituYW1lK1wiLWljb24ucG5nXCI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkRGF0YXNldHMuaW5kZXhPZihzbHVnZ2VkTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xpY2soICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0RGF0YXNldChzbHVnZ2VkTmFtZSwgXCJEYXRhIC0gXCIgKyBkYXRhc2V0c1tuYW1lXS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25Mb2FkZWQoYnRuKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbGV0IGltZyA9IGA8aW1nIHNyYz0nJHtpbWdTcmN9JyBjbGFzcz1cImNvcmdpcy1pY29uXCI+YDtcbiAgICAgICAgICAgICAgICAkKFwiPHRyPjwvdHI+XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vLmFwcGVuZCgkKFwiPHRkPlwiICsgaW1nICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+XCIgKyBkYXRhc2V0c1tuYW1lXS5vdmVydmlldyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD48L3RkPlwiKS5hcHBlbmQoYnRuKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZFRvKHN0YXJ0KTtcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIGFjdHVhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5zaG93KFwiSW1wb3J0IERhdGFzZXRzXCIsIHN0YXJ0LCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2OTI5Mzc4ODk3MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTY5MjkzNzg4OTAyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkM6L1VzZXJzL2FjYmFydC9Qcm9qZWN0cy9ibG9ja3B5LWVkdS9ibG9ja3B5L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIi4uL1wiLFwiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIFRPRE86IER5YW5taWNhbGx5IHBvcHVsYXRlIGFyaWEtbGFiZWxsZWRieSBpbiB0aGlzIGFuZCBvdGhlciBwbGFjZXNcblxuZXhwb3J0IGxldCBESUFMT0dfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdibG9ja3B5LWRpYWxvZyBtb2RhbCBoaWRkZW4nXG4gICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9J0RpYWxvZydcbiAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cgbW9kYWwtbGcnIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCcgcm9sZT0ncmVnaW9uJyBhcmlhLWxhYmVsPSdEaWFsb2cgY29udGVudCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPSdtb2RhbC10aXRsZSc+RHluYW1pYyBDb250ZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdjbG9zZScgZGF0YS1kaXNtaXNzPSdtb2RhbCcgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtYm9keScgc3R5bGU9J3dpZHRoOjEwMCU7IGhlaWdodDo0MDBweDsgd2hpdGUtc3BhY2U6cHJlLXdyYXAnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWZvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi13aGl0ZScgZGF0YS1kaXNtaXNzPSdtb2RhbCc+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBvYmplY3QgZm9yIHF1aWNrbHkgYW5kIGNvbnZlbmllbnRseSBnZW5lcmF0aW5nIGRpYWxvZyBib3hlcy5cbiAqIFVuZm9ydHVuYXRlbHksIHRoaXMgZG9lc24ndCBkeW5hbWljYWxseSBjcmVhdGUgbmV3IGJveGVzOyBpdCByZXVzZXMgdGhlIHNhbWUgb25lXG4gKiBvdmVyIGFuZCBvdmVyIGFnYWluLiBJdCB0dXJucyBvdXQgZHluYW1pY2FsbHkgZ2VuZXJhdGluZyBuZXcgZGlhbG9nIGJveGVzXG4gKiBpcyBhIHBhaW4hIFNvIHdlIGNhbid0IHN0YWNrIHRoZW0uXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeURpYWxvZ31cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnIC0gVGhlIEhUTUwgb2JqZWN0IHRoaXMgaXMgYXR0YWNoZWQgdG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja1B5RGlhbG9nKG1haW4sIHRhZykge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICB0aGlzLnRpdGxlVGFnID0gdGFnLmZpbmQoXCIubW9kYWwtdGl0bGVcIik7XG4gICAgdGhpcy5ib2R5VGFnID0gdGFnLmZpbmQoXCIubW9kYWwtYm9keVwiKTtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBleHRlcm5hbGx5IGF2YWlsYWJsZSBmdW5jdGlvbiBmb3IgcG9wcGluZyB1cCBhIGRpYWxvZ1xuICogbWVzc2FnZS4gVGhpcyBtZW51IHdpbGwgYmUgZHJhZ2dhYmxlIGJ5IGl0cyB0aXRsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIG1lc3NhZ2UgZGlhbG9nLiBDYW4gaGF2ZSBIVE1MLlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHkgLSBUaGUgYm9keSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmNsb3NlIC0gQSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgdXNlciBjbG9zZXMgdGhlIGRpYWxvZy5cbiAqL1xuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgb25jbG9zZSkge1xuICAgIHRoaXMudGl0bGVUYWcuaHRtbCh0aXRsZSk7XG4gICAgdGhpcy5ib2R5VGFnLmh0bWwoYm9keSk7XG4gICAgdGhpcy50YWcubW9kYWwoXCJzaG93XCIpO1xuICAgIHRoaXMudGFnLmRyYWdnYWJsZSh7XG4gICAgICAgIFwiaGFuZGxlXCI6IFwiLm1vZGFsLXRpdGxlXCJcbiAgICB9KTtcblxuICAgIHRoaXMudGFnLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChvbmNsb3NlICE9PSB1bmRlZmluZWQgJiYgb25jbG9zZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb25jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCB5ZXMsIG5vKSB7XG4gICAgdGhpcy5zaG93KHRpdGxlLCBib2R5LCBubyk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgYFlvdXIgaW5zdHJ1Y3RvciBoYXMgbWFkZSBjaGFuZ2VzIHRvIHRoaXMgYXNzaWdubWVudC4gV291bGQgeW91IGxpa2UgdG8gcmVsb2FkPyBBbGwgeW91ciB3b3JrIGhhcyBiZWVuIHNhdmVkLmAsKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93KFwiRXJyb3IgTG9hZGluZyBBc3NpZ25tZW50XCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIGFzc2lnbm1lbnQuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmAsKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLlNDUkVFTlNIT1RfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE9cbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIFVwZGF0aW5nIFN1Ym1pc3Npb24gU3RhdHVzXCIsIGBCbG9ja1B5IGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIHVwZGF0aW5nIHlvdXIgc3VibWlzc2lvbiBzdGF0dXMuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19ISVNUT1JZID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvdyhcIkVycm9yIExvYWRpbmcgSGlzdG9yeVwiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSBsb2FkaW5nIHlvdXIgaGlzdG9yeS48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uYCk7XG59O1xuIiwiaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiLi4vZWRpdG9yc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGUobW9kZWwsIGV2ZW50KSB7XHJcbiAgICBsZXQgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XHJcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlID0+XHJcbiAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkudXBsb2FkRmlsZShlKVxyXG4gICAgKTtcclxuICAgIGZpbGVSZWFkZXIuZmlsZU5hbWUgPSBmaWxlc1swXS5uYW1lO1xyXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdKTtcclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbHVnZ2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiX1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IHtuYW1lLCBleHRlbnNpb24sIGNvbnRlbnRzLCBtaW1ldHlwZX0gPSBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKS5kb3dubG9hZEZpbGUoKTtcclxuICAgIC8vIE1ha2Ugc2FmZVxyXG4gICAgbmFtZSA9IHNsdWdnaWZ5KG5hbWUpO1xyXG4gICAgbmFtZSA9IG5hbWUgKyBleHRlbnNpb247XHJcbiAgICAvLyBNYWtlIHRoZSBkYXRhIGRvd25sb2FkIGFzIGEgZmlsZVxyXG4gICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY29udGVudHNdLCB7dHlwZTogbWltZXR5cGV9KTtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgbmFtZSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgbGV0IHRlbXBvcmFyeURvd25sb2FkTGluayA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnlEb3dubG9hZExpbmspO1xyXG4gICAgICAgIHRlbXBvcmFyeURvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbSA9IG1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZShcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcihcImFuc3dlci5weVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbGVEZWxldGVkKCkge1xyXG4gICAgICAgIC8vIFRPRE86IFN3aXRjaCB0byB0aGUgcHJldmlvdXMgZmlsZSBpbnN0ZWFkIG9mIGEgZGVmYXVsdCBmaWxlXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlVXBkYXRlZChmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IHRoaXMuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lZGl0b3JzLmNoYW5nZUVkaXRvcih0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgLy90aGlzLnRyYWNrQ3VycmVudEZpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tDdXJyZW50RmlsZSgpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0ud2F0Y2hGaWxlKHRoaXMuZmlsZW5hbWUsIHtcclxuICAgICAgICAgICAgdXBkYXRlZDogdGhpcy5vbkZpbGVVcGRhdGVkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IHRoaXMub25GaWxlRGVsZXRlZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBuZXdGaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSB0aGlzLmZpbGVTeXN0ZW0uZ2V0RmlsZShuZXdGaWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5ld0ZpbGVuYW1lIC0gdGhlIGZpbGVuYW1lIHRoYXQgdGhlIG90aGVyIGVkaXRvciB3aWxsIGJlIHN3aXRjaGluZyB0b1xyXG4gICAgICogQHBhcmFtIG9sZEVkaXRvclxyXG4gICAgICogQHBhcmFtIG5ld0VkaXRvclxyXG4gICAgICovXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIHRoaXMuZmlsZVN5c3RlbS5zdG9wV2F0Y2hpbmdGaWxlKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuZmlsZS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBFZGl0b3JzLnBhcnNlRmlsZW5hbWUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWUubmFtZSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlbmFtZS50eXBlLFxyXG4gICAgICAgICAgICBjb250ZW50czogdGhpcy5maWxlLmhhbmRsZSgpLFxyXG4gICAgICAgICAgICBtaW1ldHlwZTogXCJ0ZXh0L3BsYWluXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcbmltcG9ydCB7RGlzcGxheU1vZGVzfSBmcm9tIFwiLi9weXRob25cIjtcclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1MgPSBbXHJcbiAgICBbXCJ0b29sYm94TGV2ZWxcIiwgXCJ0b29sYm94X2xldmVsXCIsIFwibm9ybWFsXCIsIFwidG9vbGJveFwiLCBcIklOQ09NUExFVEU6IFdoYXQgbGV2ZWwgb2YgdG9vbGJveCB0byBwcmVzZW50IHRvIHRoZSB1c2VyIChoaWRpbmcgYW5kIHNob3dpbmcgY2F0ZWdvcmllcykuXCJdLFxyXG4gICAgW1wic3RhcnRWaWV3XCIsIFwic3RhcnRfdmlld1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQsIERpc3BsYXlNb2RlcywgXCJUaGUgUHl0aG9uIGVkaXRvciBtb2RlIHRvIHN0YXJ0IGluIHdoZW4gdGhlIHN0dWRlbnQgc3RhcnRzIHRoZSBwcm9ibGVtLlwiXSxcclxuICAgIFtcImRhdGFzZXRzXCIsIFwiZGF0YXNldHNcIiwgXCJcIiwgXCJzdHJpbmdcIiwgXCJUaGUgY3VycmVudCBsaXN0IG9mIGRhdGFzZXRzIGF2YWlsYWJsZSBvbiBsb2FkIGFzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGltZW91dFwiLCBcImRpc2FibGVfdGltZW91dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjb2RlIGlzIGFsbG93ZWQgdG8gcnVuIHdpdGhvdXQgdGltZW91dHMgKHBvdGVudGlhbGx5IGFsbG93aW5nIGluZmluaXRlIGxvb3BzKS5cIl0sXHJcbiAgICBbXCJpc1BhcnNvbnNcIiwgXCJpc19wYXJzb25zXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoaXMgaXMgYSBwYXJzb24ncyBzdHlsZSBxdWVzdGlvbiAoanVtYmxlZCkuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUZlZWRiYWNrXCIsIFwiZGlzYWJsZV9mZWVkYmFja1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBubyBpbnN0cnVjdG9yIHNjcmlwdHMgYXJlIHJ1biAoZS5nLiwgb25fcnVuIGFuZCBvbl9ldmFsKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZGlzYWJsZUJsb2Nrc1wiLCBcImNhbl9ibG9ja3NcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnQgY2Fubm90IGVkaXQgdGhlIGJsb2NrIGludGVyZmFjZSAoYWx0aG91Z2ggaXQgaXMgdmlzaWJsZSkuXCJdLFxyXG4gICAgW1wib25seUludGVyYWN0aXZlXCIsIFwib25seV9pbnRlcmFjdGl2ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlIGVkaXRvcnMgYXJlIGhpZGRlbiwgdGhlIHByb2dyYW0gaXMgYXV0b21hdGljYWxseSBydW4sIGFuZCB0aGVuIHRoZSBjb25zb2xlIGVudGVycyBFdmFsIG1vZGUgKGludGVyYWN0aXZlKS5cIl0sXHJcbiAgICBbXCJvbmx5VXBsb2Fkc1wiLCBcIm9ubHlfdXBsb2Fkc1wiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgdW5jaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBkaXJlY3RseSBlZGl0YWJsZSAodGhleSB3aWxsIGhhdmUgdG8gdXBsb2FkIHN1Ym1pc3Npb25zKS5cIl0sXHJcbiAgICAvLyBXaGF0IG1lbnVzL2ZlZWRiYWNrIHRvIHNob3cgYW5kIGhpZGVcclxuICAgIFtcImhpZGVGaWxlc1wiLCBcImhpZGVfZmlsZXNcIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBzZWUgdGhlIFZpZXcgRmlsZXMgdG9vbGJhci5cIl0sXHJcbiAgICBbXCJoaWRlUXVldWVkSW5wdXRzXCIsIFwiaGlkZV9xdWV1ZWRfaW5wdXRzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMgY2FuIGFjY2VzcyB0aGUgcXVldWVkIGlucHV0cyBib3ggKG1ha2VzIHJlcGVhdGVkIGRlYnVnZ2luZyBlYXNpZXIgZm9yIHRoZSBpbnB1dCBmdW5jdGlvbikuXCJdLFxyXG4gICAgW1wiaGlkZUVkaXRvcnNcIiwgXCJoaWRlX2VkaXRvcnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gYWxsIG9mIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUFsbFwiLCBcImhpZGVfYWxsXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCB0aGVuIHRoZSBlbnRpcmUgaW50ZXJmYWNlIGlzIGhpZGRlbi5cIl0sXHJcbiAgICBbXCJoaWRlRXZhbHVhdGVcIiwgXCJoaWRlX2V2YWx1YXRlXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBFdmFsdWF0ZSBidXR0b24gaXMgbm90IHNob3duIG9uIHRoZSBjb25zb2xlLlwiXSxcclxuICAgIFtcImhpZGVJbXBvcnREYXRhc2V0c0J1dHRvblwiLCBcImhpZGVfaW1wb3J0X2RhdGFzZXRzX2J1dHRvblwiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNhbm5vdCBzZWUgdGhlIGltcG9ydCBkYXRhc2V0cyBidXR0b24uXCJdLFxyXG4gICAgLy8gVE9ETzogRml4IHRoaXMgb25lIHRvIGJlIHNldHRhYmxlXHJcbiAgICBbXCJoaWRlSW1wb3J0U3RhdGVtZW50c1wiLCBcImhpZGVfaW1wb3J0X3N0YXRlbWVudHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIGNlcnRhaW4ga2luZHMgb2YgaW1wb3J0IHN0YXRlbWVudHMgKG1hdHBsb3RsaWIsIHR1cnRsZSwgZGF0YXNldHMpIGFyZSBub3Qgc2hvd24gaW4gdGhlIGJsb2NrIGludGVyZmFjZS5cIl0sXHJcbiAgICBbXCJoaWRlQ292ZXJhZ2VCdXR0b25cIiwgXCJoaWRlX2NvdmVyYWdlX2J1dHRvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlIGNvdmVyYWdlIGJ1dHRvbiBpcyBub3Qgc2hvd24uXCJdLFxyXG4gICAgW1wic2F2ZVR1cnRsZU91dHB1dFwiLCBcInNhdmVfdHVydGxlX291dHB1dFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0dXJ0bGUgb3V0cHV0IGlzIHNhdmVkIHdoZW5ldmVyIHRoZSBwcm9ncmFtIHVzZXMgaXQuXCJdLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRhdGlvbihuYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBBU1NJR05NRU5UX1NFVFRJTkdTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bMF0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFTU0lHTk1FTlRfU0VUVElOR1NbaV1bNF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiRG9jdW1lbnRhdGlvbiBub3QgZm91bmQgZm9yIGZpZWxkXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VTdGFydFZpZXdUYWIobmFtZSwgaWNvbiwgbW9kZSkge1xyXG4gICAgcmV0dXJuIGA8bGFiZWwgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJsb2NrcHktbW9kZS1zZXQtYmxvY2tzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNzczoge2FjdGl2ZTogYXNzaWdubWVudC5zZXR0aW5ncy5zdGFydFZpZXcoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3LmJpbmQoJGRhdGEsICcke21vZGV9JylcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtJHtpY29ufSc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJibG9ja3B5LXN0YXJ0LXZpZXctc2V0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgY2hlY2tlZD4gJHtuYW1lfVxyXG4gICAgICAgICAgICA8L2xhYmVsPmA7XHJcbn1cclxuXHJcbmNvbnN0IEFTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUwgPSBBU1NJR05NRU5UX1NFVFRJTkdTXHJcbiAgICAvLyBPbmx5IGhhbmRsZSB0aGUgc2ltcGxlIGJvb2xlYW5zIHRoaXMgd2F5XHJcbiAgICAuZmlsdGVyKChzZXR0aW5nKSA9PiBzZXR0aW5nWzNdID09PSBcImJvb2xcIilcclxuICAgIC5tYXAoKHNldHRpbmcpID0+IHtcclxuICAgICAgICBsZXQgcHJldHR5TmFtZSA9IHNldHRpbmdbMV0uc3BsaXQoXCJfXCIpLm1hcCh3b3JkPT4od29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt3b3JkLnNsaWNlKDEpKSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIj4ke3ByZXR0eU5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLSR7c2V0dGluZ1swXX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQuc2V0dGluZ3MuJHtzZXR0aW5nWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldHRpbmdbNF19XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgfSkuam9pbihcIlxcblxcblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktdmlldy1zZXR0aW5nc1wiPlxyXG4gICAgXHJcbiAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnNldHRpbmdzLnNhdmVcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBzdHVkZW50LWZhY2luZyBuYW1lIG9mIHRoZSBhc3NpZ25tZW50LiBBc3NpZ25tZW50cyB3aXRoaW4gYSBncm91cCBhcmUgb3JkZXJlZCBhbHBoYWJldGljYWxseVxyXG4gICAgICAgICAgICAgICAgICAgIGJ5IHRoZWlyIG5hbWUsIHNvIHlvdSBtYXkgd2FudCB0byB1c2UgYSBuYW1pbmcgc2NoZW1lIGxpa2UgXCIjNDMuNSkgV2hhdGV2ZXJcIi5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy11cmxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5VUkw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LnVybFwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgY291cnNlLXVuaXF1ZSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBjb25zaXN0ZW50bHkgcmVmZXIgdG8gdGhpcyBhc3NpZ25tZW50LiBcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCI+UHVibGljOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1wdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNoZWNrZWQ6IGFzc2lnbm1lbnQucHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIG5vdCBwdWJsaWMsIHVzZXJzIG91dHNpZGUgb2YgdGhlIGNvdXJzZSB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGUgYXNzaWdubWVudCBpbiBjb3Vyc2UgbGlzdGluZ3MuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiPkhpZGRlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBoaWRkZW4sIHN0dWRlbnRzIHdpbGwgbm90IGJlIGFibGUgdG8gc2VlIHRoZWlyIGdyYWRlIHdoaWxlIHdvcmtpbmcgb24gdGhlIGFzc2lnbm1lbnQuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+UmV2aWV3ZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnJldmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIElmIHJldmlld2VkLCB0aGUgYXNzaWdubWVudCBjYW4gYmUgY29tbWVudGVkIHVwb24gYW5kIHJlZ3JhZGVkIGJ5IHRoZSBzdGFmZiBhZnRlcndhcmRzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlN0YXJ0aW5nIFZpZXc6PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke21ha2VTdGFydFZpZXdUYWIoXCJCbG9ja3NcIiwgXCJ0aC1sYXJnZVwiLCBEaXNwbGF5TW9kZXMuQkxPQ0spfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tN1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJzdGFydFZpZXdcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+SVAgUmFuZ2VzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWlwLXJhbmdlc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5pcFJhbmdlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgSVAgQWRkcmVzc2VzIHRoYXQgd2lsbCBiZSBleHBsaWNpdGx5IGFsbG93ZWQuIElmIGJsYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW4gYWxsIGFkZHJlc3NlcyBhcmUgYWxsb3dlZC4gSWYgYW4gYWRkcmVzcyBzdGFydHMgd2l0aCA8Y29kZT5ePC9jb2RlPiB0aGVuIGl0IGl0IGlzIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgICAgICBibGFja2xpc3RlZCwgYnV0IHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gaW4gdHVybiB3aXRoIGEgPGNvZGU+ITwvY29kZT4uIEFkZHJlc3NlcyBjYW4gYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGUgYSBiaXQgbWFzayB0byBhbGxvdyBhIHJhbmdlIG9mIGFkZHJlc3Nlcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPlByZWxvYWRlZCBEYXRhc2V0czo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1kYXRhc2V0c1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy5kYXRhc2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldERvY3VtZW50YXRpb24oXCJkYXRhc2V0c1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7QVNTSUdOTUVOVF9TRVRUSU5HU19CT09MRUFOX0NPTVBPTkVOVFNfSFRNTH1cclxuICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCkge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKCk7XHJcbiAgICAgICAgLy8gT25seSBzdG9yZSB0aGlzIHNldHRpbmcgaWYgaXRzIGRpZmZlcmVudCBmcm9tIHRoZSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Nbc2VydmVyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXNzaWdubWVudFNldHRpbmdzKG1vZGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzKTtcclxuICAgICAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV07XHJcbiAgICAgICAgICAgIGlmIChzZXJ2ZXJOYW1lIGluIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdzW3NlcnZlck5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRfdmlldykge1xyXG4gICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoc2V0dGluZ3Muc3RhcnRfdmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsKGNvbmZpZ3VyYXRpb24pIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25bc2VydmVyTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuc2V0dGluZ3MuXCIrc2VydmVyTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG59XHJcblxyXG5jbGFzcyBBc3NpZ25tZW50U2V0dGluZ3NWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIC8vVE9ETzogdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvL1RPRE86IHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRWRpdG9yKG5ld0NvbnRlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBEbyB1cGRhdGVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGVcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgLy90aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZVxyXG4gICAgICAgIC8vdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRTZXR0aW5ncyA9IHtcclxuICAgIG5hbWU6IFwiQXNzaWdubWVudCBTZXR0aW5nc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBBc3NpZ25tZW50U2V0dGluZ3NWaWV3LFxyXG4gICAgdGVtcGxhdGU6IEFTU0lHTk1FTlRfU0VUVElOR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVJLRE9XTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCI+PC90ZXh0YXJlYT4gICAgXHJcbmA7XHJcblxyXG5cclxuY2xhc3MgTWFya2Rvd25FZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnKTtcclxuICAgICAgICB0aGlzLm1kZSA9IG5ldyBFYXN5TURFKHtcclxuICAgICAgICAgICAgZWxlbWVudDogdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItbWFya2Rvd25cIilbMF0sXHJcbiAgICAgICAgICAgIGF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VTeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgLy8gVE9ETzogaW1hZ2VVcGxvYWRGdW5jdGlvblxyXG4gICAgICAgICAgICByZW5kZXJpbmdDb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNvZGVTeW50YXhIaWdobGlnaHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2guYmluZCh0aGlzLm1kZS5jb2RlbWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZGUudmFsdWUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1kZS5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5tZGUudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYXJrZG93bkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiTWFya2Rvd25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5tZFwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBNYXJrZG93bkVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogTUFSS0RPV05fRURJVE9SX0hUTUxcclxufTsiLCIvKipcclxuICogVE9ETzogcmVuYW1lIGZpbGVzLCBtYW51YWwgc2F2ZSwgdGFncywgc2FtcGxlX3N1Ym1pc3Npb25zLCBvbl9ldmFsLCBub24tYnVpbHRpbiBmaWxlc1xyXG4gKiBUT0RPOiBpbXBvcnQgZGF0YSwgaGlzdG9yeSwgcnVuLCB1cmxfZGF0YSwgYXNzaWdubWVudF9zZXR0aW5ncywgcGFyc29uc19tb2RlXHJcbiAqIFRPRE86IGRlbGV0ZSBiZWNvbWVzIFwiY2xlYXJcIiBmb3IgaW5zdHJ1Y3RvciBmaWxlc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZW51bSB7c3RyfVxyXG4gKi9cclxuaW1wb3J0IHtBYnN0cmFjdEVkaXRvciwgc2x1Z2dpZnl9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0hJU1RPUllfVE9PTEJBUl9IVE1MfSBmcm9tIFwiLi4vaGlzdG9yeVwiO1xyXG5cclxuZXhwb3J0IGxldCBEaXNwbGF5TW9kZXMgPSB7XHJcbiAgICBCTE9DSzogXCJibG9ja1wiLFxyXG4gICAgU1BMSVQ6IFwic3BsaXRcIixcclxuICAgIFRFWFQ6IFwidGV4dFwiXHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWtlVGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAnJHttb2RlfSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZWRpdG9ycy5weXRob24udXBkYXRlTW9kZS5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1tb2RlLXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUFlUSE9OX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLXRvb2xiYXIgY29sLW1kLTEyIGJ0bi10b29sYmFyXCJcclxuICAgICAgICAgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiUHl0aG9uIFRvb2xiYXJcIj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSdW4gR3JvdXBcIj4gICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmxvY2tweS1ydW5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmV4ZWN1dGUucnVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7J2Jsb2NrcHktcnVuLXJ1bm5pbmcnOiB1aS5leGVjdXRlLmlzUnVubmluZ31cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXBsYXlcIj48L3NwYW4+IFJ1blxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlIG1yLTJcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiQmxvY2tzXCIsIFwidGgtbGFyZ2VcIiwgRGlzcGxheU1vZGVzLkJMT0NLKX1cclxuICAgICAgICAgICAgJHttYWtlVGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlRleHRcIiwgXCJhbGlnbi1sZWZ0XCIsIERpc3BsYXlNb2Rlcy5URVhUKX1cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXQgR3JvdXBcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucmVzZXRcIj5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zeW5jXCI+PC9zcGFuPiBSZXNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJJbXBvcnQgR3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmltcG9ydERhdGFzZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdFwiPjwvc3Bhbj4gSW1wb3J0IGRhdGFzZXRzXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1maWxlLXVwbG9hZFwiPjwvc3Bhbj4gVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYmxvY2tweS10b29sYmFyLXVwbG9hZFwiIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImV2ZW50OiB7Y2hhbmdlOiB1aS5lZGl0b3JzLnVwbG9hZH1cIj5cclxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLXNwbGl0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9J2Ryb3Bkb3duLWl0ZW0gYmxvY2tweS10b29sYmFyLWRvd25sb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZG93bmxvYWQnPjwvc3Bhbj4gRG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiSGlzdG9yeSBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnRvZ2dsZUhpc3RvcnlNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHVpLmVkaXRvcnMucHl0aG9uLmlzSGlzdG9yeUF2YWlsYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiB7IGFjdGl2ZTogZGlzcGxheS5oaXN0b3J5TW9kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyOiB7ICdhcmlhLXByZXNzZWQnOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWhpc3RvcnlcIj48L3NwYW4+IEhpc3RvcnlcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwhLS0gRnVsbHkgZnVuY3Rpb25hbCwgYnV0IGEgbGl0dGxlIHRvby4uIEludmFzaXZlIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRnVsbHNjcmVlbiBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IGRpc3BsYXkucHl0aG9uTW9kZSgpID09PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1leHBhbmQtYXJyb3dzLWFsdFwiPjwvc3Bhbj4gRnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAtLT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJTYXZlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5TYXZlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvc3Bhbj4gU2F2ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkRlbGV0ZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuRGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L3NwYW4+IERlbGV0ZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlbmFtZSBHcm91cFwiXHJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmVkaXRvcnMuY2FuUmVuYW1lXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtc2lnbmF0dXJlXCI+PC9zcGFuPiBSZW5hbWVcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgJHtISVNUT1JZX1RPT0xCQVJfSFRNTH1cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCJcclxuICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLm1lbnUuaXNTdWJtaXR0ZWRcIj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKSB7XHJcbiAgICBsZXQgaXB5bmIgPSBKU09OLnBhcnNlKGNvZGUpO1xyXG4gICAgbGV0IGlzVXNhYmxlID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICFjZWxsLnNvdXJjZVswXS5zdGFydHNXaXRoKFwiJVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5jZWxsX3R5cGUgPT09IFwibWFya2Rvd25cIiB8fFxyXG4gICAgICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxldCBtYWtlUHl0aG9uID0gZnVuY3Rpb24oY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJjb2RlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbGwuc291cmNlLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgIGNlbGwuY2VsbF90eXBlID09PSBcInJhd1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIicnJ1wiK2NlbGwuc291cmNlLmpvaW4oXCJcXG5cIikrXCInJydcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGlweW5iLmNlbGxzLmZpbHRlcihpc1VzYWJsZSkubWFwKG1ha2VQeXRob24pLmpvaW4oXCJcXG5cIik7XHJcbn1cclxuXHJcbmNsYXNzIFB5dGhvbkVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcuZmluZChcIi5ibG9ja3B5LXB5dGhvbi1ibG9ja21pcnJvclwiKSk7XHJcbiAgICAgICAgdGhpcy5ibSA9IG5ldyBCbG9ja01pcnJvcih7XHJcbiAgICAgICAgICAgIFwiY29udGFpbmVyXCI6IHRoaXMudGFnWzBdLFxyXG4gICAgICAgICAgICBcInJ1blwiOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLnJ1bi5iaW5kKG1haW4uY29tcG9uZW50cy5lbmdpbmUpLFxyXG4gICAgICAgICAgICBcInNraXBTa3VscHRcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJibG9ja2x5TWVkaWFQYXRoXCI6IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5ibG9ja2x5UGF0aCxcclxuICAgICAgICAgICAgLy8naGVpZ2h0JzogJzIwMDBweCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFrZVN1YnNjcmlwdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9sZFB5dGhvbk1vZGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlndXJlRXh0cmFCbG9ja2x5KCkge1xyXG4gICAgICAgIHRoaXMuYm0uYmxvY2tFZGl0b3Iud29ya3NwYWNlLmNvbmZpZ3VyZUNvbnRleHRNZW51ID0gKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNjcmVlbnNob3RcIixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuU0NSRUVOU0hPVF9CTE9DS1NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKSB7XHJcbiAgICAgICAgbGV0IG9sZEZpbGVuYW1lID0gdGhpcy5maWxlbmFtZTtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBpZiAob2xkRmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKERpc3BsYXlNb2Rlcy5URVhUKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKHRoaXMub2xkUHl0aG9uTW9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudEJNTGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYm0uYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5jdXJyZW50Qk1MaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIGlmIChuZXdGaWxlbmFtZSAhPT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJtLmlzUGFyc29ucyA9ICgpID0+IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaXNQYXJzb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzRXJyb3Iuc3Vic2NyaWJlKChsaW5lcykgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci1lcnJvci1saW5lXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5saW5lc1VuY292ZXJlZC5zdWJzY3JpYmUoKGxpbmVzKSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRIaWdobGlnaHRlZExpbmVzKGxpbmVzLCBcImVkaXRvci11bmNvdmVyZWQtbGluZVwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UucmVuZGVyKCk7XHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSB0aGlzIGRvZXNuJ3QgZW5kIHVwIGxvb2tpbmcgcmlnaHQgKGdvIHRvIGEgZGlmZmVyZW50IGVkaXRvciwgY29tZSBiYWNrLCBhbmQgaXQnbGwgYmUgc3F1aXNoZWQpXHJcbiAgICAgICAgLy90aGlzLmJtLnJlZnJlc2goKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYm0ucmVmcmVzaCgpLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICBpZiAobmV3Q29udGVudHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50cyA9IHRoaXMuZmlsZS5oYW5kbGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERvZXNuJ3QgbWF0dGVyLCBmaWxlIHdhcyBhbHJlYWR5IHNodXQgZG93bi5cclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3Q29udGVudHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gV2UncmUgY2xvc2luZyB0aGlzIGZpbGVcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8odGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldENvZGUobmV3Q29udGVudHMpO1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG5cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmJtLmdldENvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcikge1xyXG4gICAgICAgIC8vIFJlbW92ZSBzdWJzY3JpYmVyXHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5ibS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMaW5lU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLmNsZWFySGlnaGxpZ2h0ZWRMaW5lcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlU3Vic2NyaXB0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmJtLnNldE1vZGUodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKG1vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlYWRPbmx5KGlzUmVhZE9ubHkpIHtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gaXNSZWFkT25seTtcclxuICAgICAgICB0aGlzLmJtLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGUgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGlmIChmaWxlbmFtZS5lbmRzV2l0aChcIi5pcHluYlwiKSkge1xyXG4gICAgICAgICAgICBjb2RlID0gY29udmVydElweW5iVG9QeXRob24oY29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5VcGxvYWRcIiwgXCJcIiwgXCJcIiwgY29kZSwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5maWxlLmhhbmRsZShjb2RlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuKCk7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGNvZGVcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRvd25sb2FkRmlsZSgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubmFtZSA9PT0gXCJhbnN3ZXJcIiAmJiByZXN1bHQuZXh0ZW5zaW9uID09PSBcIi5weVwiKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gc2x1Z2dpZnkodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQubmFtZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lm1pbWV0eXBlID0gXCJ0ZXh0L3gtcHl0aG9uXCI7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLkRvd25sb2FkXCIsIFwiXCIsIFwiXCIsIFwiXCIsIHJlc3VsdC5uYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFB5dGhvbkVkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiUHl0aG9uXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIucHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogUHl0aG9uRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBQWVRIT05fRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUdTX0VESVRPUl9IVE1MID0gYFxyXG5DcmVhdGUgbmV3XHJcbkltcG9ydCBieSBuYW1lXHJcbkZpbmQgYnkgb3duZXIvY291cnNlL2tpbmRcclxuXHJcblRhZ3M6XHJcbiAgICBEYXRhOlxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBLaW5kXHJcbiAgICAgICAgTGV2ZWxcclxuICAgICAgICBWZXJzaW9uXHJcbiAgICAgICAgRGVzY3JpcHRpb25cclxuICAgIENvbnRyb2xzOlxyXG4gICAgICAgIEVkaXRcclxuICAgICAgICBSZW1vdmVcclxuICAgICAgICBEZWxldGUgXHJcbmA7XHJcblxyXG5jbGFzcyBUYWdzRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRhZ3NcIikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFnc0VkaXRvciA9IHtcclxuICAgIG5hbWU6IFwiVGFnc1wiLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiIXRhZ3MuYmxvY2tweVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBUYWdzRWRpdG9yVmlldyxcclxuICAgIHRlbXBsYXRlOiBUQUdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVEVYVF9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci10ZXh0XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY2xhc3MgVGV4dEVkaXRvclZpZXcgZXh0ZW5kcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICBzdXBlcihtYWluLCB0YWcpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLXRleHRcIilbMF0sIHtcclxuICAgICAgICAgICAgc2hvd0N1cnNvcldoZW5TZWxlY3Rpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXJzdExpbmVOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIGluZGVudFVuaXQ6IDQsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgICAgIGluZGVudFdpdGhUYWJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlRhYlwiOiBcImluZGVudE1vcmVcIixcclxuICAgICAgICAgICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJFc2NcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY20uZGlzcGxheS5pbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiRjExXCI6IGZ1bmN0aW9uIChjbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNtLmdldE9wdGlvbihcImZ1bGxTY3JlZW5cIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vbihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgaWYgKG9sZEVkaXRvciAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAvLyBEZWxheSBzbyB0aGF0IGV2ZXJ5dGhpbmcgaXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLmNvZGVNaXJyb3IucmVmcmVzaC5iaW5kKHRoaXMuY29kZU1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlLmhhbmRsZSh0aGlzLmNvZGVNaXJyb3IudmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9mZihcImNoYW5nZVwiLCB0aGlzLmN1cnJlbnRMaXN0ZW5lcik7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJtb2RlbFwiXSA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQubGFzdFN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudExpbmUobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlRGF0YS5yZW1vdmVBbGwoKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVsYXllZFJ1bigpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAxKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLmNvbmZpZ3VyYXRpb24uc2hvd0Vycm9ycy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNrdWxwdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX19mdXR1cmVfXzogU2sucHl0aG9uMyxcclxuICAgICAgICAgICAgLy8gaW1wb3J0XHJcbiAgICAgICAgICAgIHJlYWQ6IHRoaXMuaW1wb3J0RmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBvcGVuXHJcbiAgICAgICAgICAgIGZpbGVvcGVuOiB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGZpbGUud3JpdGVcclxuICAgICAgICAgICAgZmlsZXdyaXRlOiB0aGlzLndyaXRlRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBwcmludFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHRoaXMucHJpbnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gUHJldmVudHMgcmVhZGluZyBIVE1MIGVsZW1lbnRzIGFzIGZpbGVzXHJcbiAgICAgICAgICAgIGluQnJvd3NlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIGlucHV0XHJcbiAgICAgICAgICAgIGlucHV0ZnVuOiB0aGlzLmlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlucHV0ZnVuVGFrZXNQcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxyXG4gICAgICAgICAgICBpbWFnZVByb3h5OiB0aGlzLmdldEltYWdlUHJveHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8ga2VlcCB0aGUgZ2xvYmFsc1xyXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgLy9Tay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3BlZGFsL3NhbmRib3gvc2FuZGJveC5weVwiXSA9IFwiY2xhc3MgU2FuZGJveDogcGFzc1xcbmRlZiBydW4oKTogcGFzc1xcbmRlZiByZXNldCgpOiBwYXNzXFxuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4uL3RyYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lLCBjb2RlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZml4IHRvIGJlIGN1cnJlbnRseSBhZGRlZCBsaW5lXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcIl8gPSBcIiArIGNvZGU7XHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5BZGRcIiwgXCJcIiwgXCJcIiwgY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUV2YWx1YXRlLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnRWYWx1ZShTay5mZmkucmVtYXBUb0pzKG1vZHVsZS4kZC5fLiRyKCkpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogdGhpcy5jb2RlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnMuanNcIjtcclxuaW1wb3J0IHskc2tfbW9kX2luc3RydWN0b3J9IGZyb20gXCIuLi9za19tb2RfaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgVVRJTElUWV9NT0RVTEVfQ09ERSA9IFwidmFyICRidWlsdGlubW9kdWxlID0gXCIgKyAkc2tfbW9kX2luc3RydWN0b3IudG9TdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIEluc3RydWN0b3JzIGhhdmUgbm8gbGltaXRzXHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgLy8gTXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy8gRGlzYWJsZSBpbnB1dCBib3hcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIC8vIFRPRE8gU2suaW5wdXRmdW4gPSBCbG9ja1B5RW5naW5lLmlucHV0TW9ja0Z1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE86IEFsbG93IGlucHV0IGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIHRpbWVyLCBzb21laG93XHJcbiAgICAgICAgLy8gRW5hYmxlIHV0aWxpdHkgbW9kZVxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IFVUSUxJVFlfTU9EVUxFX0NPREU7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gXCJBcHBsZVBpZVwiO1xyXG4gICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9LCBcImFuc3dlci5weVwiKVxyXG4ke3RpZmFBbmFseXNpc31cclxuZnJvbSBwZWRhbC5zYW5kYm94LnNhbmRib3ggaW1wb3J0IFNhbmRib3hcclxuZnJvbSBwZWRhbC5zYW5kYm94IGltcG9ydCBjb21wYXRpYmlsaXR5XHJcbmZyb20gdXRpbGl0eSBpbXBvcnQgKlxyXG5zdHVkZW50ID0gTUFJTl9SRVBPUlRbJ3NhbmRib3gnXVsncnVuJ10gPSBTYW5kYm94KClcclxuI3N0dWRlbnQucnVuKE1BSU5fUkVQT1JUWydzb3VyY2UnXVsnY29kZSddLCBNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2ZpbGVuYW1lJ10sIHJlcG9ydF9leGNlcHRpb25zPUZhbHNlKVxyXG4jZGVidWcoc3R1ZGVudClcclxuc3R1ZGVudC5yZXBvcnRfZXhjZXB0aW9uc19tb2RlID0gVHJ1ZVxyXG5jb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50KHJhaXNlX2V4Y2VwdGlvbnM9RmFsc2UpXHJcbiNsb2coc3R1ZGVudC5kYXRhKVxyXG4jc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG4jZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG4jY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5ydW5fc3R1ZGVudCA9IGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnRcclxucmVzZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXRcclxucXVldWVfaW5wdXQgPSBjb21wYXRpYmlsaXR5LnF1ZXVlX2lucHV0XHJcbmdldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LmdldF9vdXRwdXRcclxuZ2V0X3Bsb3RzID0gY29tcGF0aWJpbGl0eS5nZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmZyb20gcGVkYWwgaW1wb3J0IHF1ZXN0aW9uc1xyXG5xdWVzdGlvbnMuc2hvd19xdWVzdGlvbiA9IHNldF9pbnN0cnVjdGlvbnNcclxuIyBUT0RPOiBSZW1vdmUgdGhlIG5lZWQgZm9yIHRoaXMgaGFjayFcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgc3R1ZGVudC5jYWxsKGZ1bmMuX19uYW1lX18sICphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG5cclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0IC0gNDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICAvLyBUT0RPIExvZ2dpbmchISEhXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX3J1bi4kZDtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKE1hdGgubWF4KG9sZFNjb3JlLCBzY29yZSkpO1xyXG4gICAgICAgIC8vIEhpZGUgc3RhdHVzXHJcbiAgICAgICAgbGV0IGhpZGUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuSElERSk7XHJcbiAgICAgICAgLy8gQW5kIGZpcmUgdGhlIHJlc3VsdCFcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIudXBkYXRlU3VibWlzc2lvbihzY29yZSwgc3VjY2VzcywgaGlkZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIC8vYWZ0ZXIobW9kdWxlKTtcclxuXHJcbiAgICAgICAgLyppZiAoc3VjY2VzcyAmJiB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2Vzcyh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5pZCgpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCFTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnNjcm9sbFRvQm90dG9tKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBmYWlsdXJlXCIpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKGVycm9yLnRwJG5hbWUgPT09IFwiR3JhY2VmdWxFeGl0XCIpIHtcclxuICAgICAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImNvZGVcIl0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEludGVybmFsRXJyb3IoZXJyb3IsIHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAvL3JlcG9ydFtcImluc3RydWN0b3JcIl1bXCJzdWNjZXNzXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImVycm9yXCJdID0gZXJyb3I7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcImxpbmVfb2Zmc2V0XCJdID0gbGluZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBhZnRlcihlcnJvcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09uUnVuQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vb25fcnVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25TYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgT25SdW5Db25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJvbl9ydW4ucHlcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVGaWxlKFwiYW5zd2VyLnB5XCIsIHRoaXMuY29kZSwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIGVuZ2luZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1widmVyaWZpZXJcIl0gPSB7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiBCb29sZWFuKHRoaXMuY29kZS50cmltKCkpLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmZpbmlzaFR1cnRsZXMoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5iZWdpbkV2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKG1vZHVsZS4kZCwgbW9kdWxlLiRkLC0xLCAwLCBmaWxlbmFtZSArIFwiLnB5XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwidHJhY2VcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UubWFwKHggPT4geC5saW5lKSxcclxuICAgICAgICAgICAgICAgIFwicmVzdWx0c1wiOiBtb2R1bGUsXHJcbiAgICAgICAgICAgICAgICBcIm91dHB1dFwiOiB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLm91dHB1dFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgaWYgKHJlcG9ydC5wYXJzZXIuc3VjY2VzcyAmJiByZXBvcnQudmVyaWZpZXIuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlLkVycm9yXCIsIFwiXCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlJ1bi5Qcm9ncmFtXCIsIFwiUHJvZ3JhbUVycm9yT3V0cHV0XCIsIFwiXCIsIGVycm9yLnRvU3RyaW5nKCksIFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3R1ZGVudENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpeCB0byBiZSB0aGUgY3VycmVudCBzYW1wbGUgc3VibWlzc2lvblxyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlci5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IFwicHJpbnQoJ05vdCByZWFkeSB5ZXQhJylcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIExpbWl0IGV4ZWN1dGlvbiB0byA1IHNlY29uZHNcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLm1haW4ubW9kZWwuc2V0dGluZ3M7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0RnVuY3Rpb24gPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGltZW91dCgpID8gSW5maW5pdHkgOiAxMDAwMDtcclxuICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIFVubXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjYWxsIGFmdGVyIGVhY2ggc3RlcFxyXG4gICAgICAgIC8vIGFmdGVyU2luZ2xlRXhlY3V0aW9uXHJcbiAgICAgICAgLy8gUHJveHkgcmVxdWVzdHNcclxuICAgICAgICBTay5yZXF1ZXN0c0dldCA9IChmaWxlbmFtZSkgPT4gdGhpcy5vcGVuVVJMKGZpbGVuYW1lLCBcInVybFwiKTtcclxuXHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wic3JjL2xpYi91dGlsaXR5L19faW5pdF9fLmpzXCJdID0gRU1QVFlfTU9EVUxFO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgZm91bmQ6ICdcIiArIGZpbGVuYW1lICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9ycygpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmICghcmVwb3J0W1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRSdW5FcnJvcihyZXBvcnQuc3R1ZGVudC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cImJsb2NrcHktZmVlZGJhY2stbGFiZWxcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogZXhlY3V0aW9uLmZlZWRiYWNrLmxhYmVsXCI+PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLW1lc3NhZ2VcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiaHRtbDogZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2VcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNsYXNzIEJsb2NrUHlGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdGhhdCBtYW5hZ2VzIHRoZSBmZWVkYmFjayBhcmVhLCB3aGVyZSB1c2VycyBhcmUgdG9sZCB0aGUgc3RhdGUgb2YgdGhlaXJcbiAgICAgKiBwcm9ncmFtJ3MgZXhlY3V0aW9uIGFuZCBnaXZlbiBndWlkYW5jZS4gQWxzbyBtYW5hZ2VzIHRoZSBjcmVhdGlvbiBvZiB0aGUgVHJhY2UgVGFibGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAdGhpcyB7QmxvY2tQeUZlZWRiYWNrfVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcblxuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnlcIik7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbGFiZWxcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCIpO1xuXG4gICAgICAgIC8vIFRPRE86IElmIHRoZXkgY2hhbmdlIHRoZSBzdHVkZW50IGV4dHJhIGZpbGVzLCBhbHNvIHVwZGF0ZSB0aGUgZGlydHkgZmxhZ1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24odHJ1ZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2NyZWVuICh0YWtlcyAxIHNlY29uZCkgdG8gbWFrZSB0aGUgRmVlZGJhY2sgYXJlYSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KCkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBmZWVkYmFjayBhcmVhIGlzIGN1cnJlbnRseSB2aXNpYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGZWVkYmFja1Zpc2libGUoKSB7XG4gICAgICAgIGxldCB2aXNpYmlsaXR5QnVmZmVyID0gMTAwO1xuICAgICAgICBsZXQgdG9wT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wO1xuICAgICAgICAvL2xldCBib3R0b21PZkVsZW1lbnQgPSB0aGlzLnRhZy5vZmZzZXQoKS50b3AgKyB0aGlzLnRhZy5vdXRlckhlaWdodCgpO1xuICAgICAgICBsZXQgYm90dG9tT2ZFbGVtZW50ID0gdG9wT2ZFbGVtZW50ICsgdmlzaWJpbGl0eUJ1ZmZlcjtcbiAgICAgICAgbGV0IGJvdHRvbU9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICBsZXQgdG9wT2ZTY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIC8vYm90dG9tX29mX2VsZW1lbnQgLT0gNDA7IC8vIFVzZXIgZnJpZW5kbHkgcGFkZGluZ1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRvcE9mRWxlbWVudCA8IGJvdHRvbU9mU2NyZWVuKSAmJlxuICAgICAgICAgICAgKHRvcE9mU2NyZWVuIDwgYm90dG9tT2ZFbGVtZW50KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbnkgb3V0cHV0IGN1cnJlbnRseSBpbiB0aGUgZmVlZGJhY2sgYXJlYS4gQWxzbyByZXNldHMgdGhlIHByaW50ZXIgYW5kXG4gICAgICogYW55IGhpZ2hsaWdodGVkIGxpbmVzIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKFwiKlJlYWR5KlwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobnVsbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5oaWRkZW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZmluZEZpcnN0RXJyb3JMaW5lKGZlZWRiYWNrRGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gZmVlZGJhY2tEYXRhLmxlbmd0aC0xOyBpID49IDA7IGktPSAxKSB7XG4gICAgICAgICAgICBpZiAoXCJwb3NpdGlvblwiIGluIGZlZWRiYWNrRGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZWVkYmFja0RhdGFbaV0ucG9zaXRpb24ubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdXBkYXRlUmVndWxhckZlZWRiYWNrKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgbW9kZWwgd2l0aCB0aGVzZSBuZXcgZXhlY3V0aW9uIHJlc3VsdHNcbiAgICAgKiBAcGFyYW0gZXhlY3V0aW9uUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpIHtcbiAgICAgICAgLy8gUGFyc2Ugb3V0IGRhdGFcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTUVTU0FHRSk7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5DQVRFR09SWSk7XG4gICAgICAgIGxldCBsYWJlbCA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5MQUJFTCk7XG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLkhJREUpO1xuICAgICAgICBsZXQgZGF0YSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5EQVRBKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBiYXNlZCBvbiBhc3NpZ25tZW50cycgc2V0dGluZ3NcbiAgICAgICAgbGV0IGhpZGVTY29yZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbigpO1xuICAgICAgICBpZiAoaGlkZVNjb3JlICYmIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcIm5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbGFiZWwgPSBcIk5vIGVycm9yc1wiO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiTm8gZXJyb3JzIHJlcG9ydGVkLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtYXAgdG8gZXhwZWN0ZWQgQmxvY2tQeSBsYWJlbHNcbiAgICAgICAgaWYgKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IFwiaW5zdHJ1Y3RvclwiICYmIGxhYmVsLnRvTG93ZXJDYXNlKCkgPT09IFwiZXhwbGFpblwiKSB7XG4gICAgICAgICAgICBsYWJlbCA9IFwiSW5zdHJ1Y3RvciBGZWVkYmFja1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgcHJlc2VudCBhIGxhY2sgb2YgZXJyb3IgYXMgYmVpbmcgaW5jb3JyZWN0XG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gXCJJbnN0cnVjdG9yXCIgJiYgbGFiZWwgPT09IFwiTm8gZXJyb3JzXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RlbCBhY2NvcmRpbmdseVxuICAgICAgICBtZXNzYWdlID0gdGhpcy5tYWluLnV0aWxpdGllcy5tYXJrZG93bihtZXNzYWdlKS5yZXBsYWNlKC88cHJlPlxcbi9nLCBcIjxwcmU+XFxuXFxuXCIpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKGxhYmVsKTtcbiAgICAgICAgLy8gVE9ETzogSW5zdGVhZCBvZiB0cmFja2luZyBzdHVkZW50IGZpbGUsIGxldCdzIHRyYWNrIHRoZSBpbnN0cnVjdG9yIGZpbGVcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiSW50ZXJ2ZW50aW9uXCIsIGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgXCJhbnN3ZXIucHlcIik7XG5cbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFueSBwcmV2aW91c2x5IGhpZ2hsaWdodGVkIGxpbmVzXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5jbGVhckhpZ2hsaWdodGVkTGluZXMoKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBlcnJvciBvbiBhIGxpbmUgYW5kIHJlcG9ydCB0aGF0XG4gICAgICAgIGxldCBsaW5lID0gQmxvY2tQeUZlZWRiYWNrLmZpbmRGaXJzdEVycm9yTGluZShkYXRhKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChsaW5lICE9PSBudWxsICYmIGxpbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludmVydCB0aGUgc2V0IG9mIHRyYWNlZCBsaW5lc1xuICAgICAgICBsZXQgc3R1ZGVudFJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5zdHVkZW50O1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQucmVtb3ZlQWxsKCk7XG4gICAgICAgIGlmIChzdHVkZW50UmVwb3J0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCB1bmNvdmVyZWRMaW5lcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLnBhcnNlci5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0dWRlbnRSZXBvcnQubGluZXMuaW5kZXhPZihsaW5lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5jb3ZlcmVkTGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZCh1bmNvdmVyZWRMaW5lcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVzZW50IGFueSBhY2N1bXVsYXRlZCBmZWVkYmFja1xuICAgICAqL1xuICAgIHByZXNlbnRGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cyk7XG5cbiAgICAgICAgLy8gVE9ETzogTG9nZ2luZ1xuICAgICAgICAvL3RoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcImZlZWRiYWNrXCIsIGNhdGVnb3J5K1wifFwiK2xhYmVsLCBtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfTtcblxuICAgIG5vdGlmeUZlZWRiYWNrVXBkYXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpO1xuICAgICAgICBpZiAoIXRoaXMuaXNGZWVkYmFja1Zpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZsb2F0aW5nLWZlZWRiYWNrXCIpLnNob3coKS5mYWRlT3V0KDcwMDApO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByZXNlbnRSdW5FcnJvcihlcnJvcikge1xuICAgICAgICBsZXQgbWVzc2FnZSwgbGFiZWwsIGNhdGVnb3J5LCBsaW5lbm87XG4gICAgICAgIGlmIChlcnJvci50cCRuYW1lID09PSBcIlN5bnRheEVycm9yXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJzeW50YXhcIjtcbiAgICAgICAgICAgIGxldCBsaW5lbm8gPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmxpbmVubyk7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLm1zZyk7XG4gICAgICAgICAgICBsZXQgc291cmNlLCBtZXNzYWdlID0gXCJcIjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gZXJyb3IuYXJncy52WzNdWzJdO1xuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGA8cHJlPiR7c291cmNlfTwvcHJlPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFiZWwgPT09IFwiYmFkIGlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQmFkIElucHV0XCI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBCYWQgaW5wdXQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhYmVsID09PSBcIkVPRiBpbiBtdWx0aS1saW5lIHN0YXRlbWVudFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkVPRiBpbiBtdWx0aS1saW5lIHN0YXRlbWVudFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVW5leHBlY3RlZCBlbmQtb2YtZmlsZSBpbiBtdWx0aS1saW5lIHN0YXRlbWVudCBvbiBsaW5lICR7bGluZW5vfS48YnI+JHtzb3VyY2V9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIlN5bnRheCBFcnJvclwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBsYWJlbCArIFwiPGJyPlwiICsgc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwgPSBlcnJvci50cCRuYW1lO1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcInJ1bnRpbWVcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZW5vICE9PSB1bmRlZmluZWQgJiYgbGluZW5vICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5wdXNoKGxpbmVubyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IsIGZpbGVuYW1lRXhlY3V0ZWQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBlcnJvci50cCRuYW1lO1xuICAgICAgICBsZXQgYXJncyA9IFNrLmZmaS5yZW1hcFRvSnMoZXJyb3IuYXJncyk7XG4gICAgICAgIGxldCB0b3AgPSBgJHtuYW1lfTogJHthcmdzWzBdfVxcbjxicj5cXG48YnI+YDtcbiAgICAgICAgbGV0IHRyYWNlYmFjayA9IFwiXCI7XG4gICAgICAgIGlmIChlcnJvci50cmFjZWJhY2sgJiYgZXJyb3IudHJhY2ViYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gXCJUcmFjZWJhY2s6PGJyPlxcblwiICsgZXJyb3IudHJhY2ViYWNrLm1hcChmcmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmVubyA9IGZyYW1lLmxpbmVubztcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUuZmlsZW5hbWUuc2xpY2UoMCwgLTMpID09PSBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVubyAtPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuaW5zdHJ1Y3Rvci5saW5lT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGBGaWxlIDxjb2RlIGNsYXNzPVwiZmlsZW5hbWVcIj5cIiR7ZnJhbWUuZmlsZW5hbWV9XCI8L2NvZGU+LCBgO1xuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gYG9uIGxpbmUgPGNvZGUgY2xhc3M9XCJsaW5lbm9cIj4ke2xpbmVub308L2NvZGU+LCBgO1xuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9IChmcmFtZS5zY29wZSAhPT0gXCI8bW9kdWxlPlwiICYmXG4gICAgICAgICAgICAgICAgZnJhbWUuc2NvcGUgIT09IHVuZGVmaW5lZCkgPyBgaW4gc2NvcGUgJHtmcmFtZS5zY29wZX1gIDogXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWUuc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gYFxcbjxwcmU+PGNvZGU+JHtmcmFtZS5zb3VyY2V9PC9jb2RlPjwvcHJlPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlICsgbGluZSArIHNjb3BlICsgc291cmNlO1xuICAgICAgICAgICAgfSkuam9pbihcIlxcbjxicj5cIik7XG4gICAgICAgICAgICB0cmFjZWJhY2sgPSBgJHt0cmFjZWJhY2t9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wK1wiXFxuXCIrdHJhY2ViYWNrO1xuICAgIH1cblxuICAgIHByZXNlbnRJbnRlcm5hbEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoXCJpbnRlcm5hbFwiKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbChcIkludGVybmFsIEVycm9yXCIpO1xuXG4gICAgICAgIGxldCBtZXNzYWdlID0gXCJFcnJvciBpbiBpbnN0cnVjdG9yIGZlZWRiYWNrLiBQbGVhc2Ugc2hvdyB0aGUgZm9sbG93aW5nIHRvIGFuIGluc3RydWN0b3I6PGJyPlxcblwiO1xuICAgICAgICBtZXNzYWdlICs9IHRoaXMuY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKTtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMubm90aWZ5RmVlZGJhY2tVcGRhdGUoKTtcbiAgICB9XG59IiwiY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5KSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJHtoaWRlSWZFbXB0eX0gfHwgdWkuZmlsZXMuaGFzQ29udGVudHMoJyR7ZmlsZW5hbWV9JylcIj5cclxuICAgICAgICAgICAgJHtmcmllbmRseU5hbWV9PC9hPlxyXG4gICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBGSUxFU19IVE1MID0gYFxyXG48ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGJsb2NrcHktcGFuZWwgYmxvY2tweS1maWxlc1wiXHJcbiAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5maWxlcy52aXNpYmxlXCI+XHJcbjx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcblxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8c3Ryb25nPlZpZXc6IDwvc3Ryb25nPlxyXG4gICAgPC9saT5cclxuXHJcbiAgICAke21ha2VUYWIoXCJhbnN3ZXIucHlcIil9XHJcbiAgICAke21ha2VUYWIoXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiSW5zdHJ1Y3Rpb25zXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiLCBcIlNldHRpbmdzXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCJTdGFydGluZyBDb2RlXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX3J1bi5weVwiLCBcIk9uIFJ1blwiKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9jaGFuZ2UucHlcIiwgXCJPbiBDaGFuZ2VcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCIhb25fZXZhbC5weVwiLCBcIk9uIEV2YWxcIiwgdHJ1ZSl9XHJcbiAgICAke21ha2VUYWIoXCI/bW9ja191cmxzLmJsb2NrcHlcIiwgXCJVUkwgRGF0YVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gIFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkFkZCBOZXc8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/bW9ja191cmxzLmJsb2NrcHknKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnP21vY2tfdXJscy5ibG9ja3B5JylcIj5VUkwgRGF0YTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3RhZ3MuYmxvY2tweScpXCI+VGFnczwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5maWxlcy5oYXNDb250ZW50cygnP3NhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5JylcIj5TYW1wbGUgU3VibWlzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnIW9uX2NoYW5nZS5weScpXCI+T24gQ2hhbmdlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IGFzc2lnbm1lbnQub25FdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fZXZhbC5weScpXCI+T24gRXZhbDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGFydGluZyBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkluc3RydWN0b3IgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IERFTEVUQUJMRV9TSU1QTEVfRklMRVMgPSBbXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5ERUxFVEFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIl07XHJcblxyXG5leHBvcnQgY29uc3QgVU5SRU5BTUFCTEVfRklMRVMgPSBbXCJhbnN3ZXIucHlcIiwgXCIhaW5zdHJ1Y3Rpb25zLm1kXCIsIFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MucHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXnN0YXJ0aW5nX2NvZGUucHlcIiwgXCIhb25fcnVuLnB5XCIsIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIW9uX2NoYW5nZS5weVwiLCBcIiFvbl9ldmFsLnB5XCIsIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiF0YWdzLmJsb2NrcHlcIiwgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIl07XHJcblxyXG5jbGFzcyBCbG9ja1B5RmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCBmaWxlbmFtZSwgY29udGVudHMpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLm93bmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTW9kZWxGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgcmV0dXJuIHtcImZpbGVuYW1lXCI6IGtvLm9ic2VydmFibGUoZmlsZW5hbWUpLCBjb250ZW50czoga28ub2JzZXJ2YWJsZShjb250ZW50cyB8fCBcIlwiKX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29uY2F0ZW5hdGVkRmlsZShjb25jYXRlbmF0ZWRGaWxlLCBtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICBpZiAoY29uY2F0ZW5hdGVkRmlsZSkge1xyXG4gICAgICAgIGxldCBmaWxlcyA9IEpTT04ucGFyc2UoY29uY2F0ZW5hdGVkRmlsZSk7XHJcbiAgICAgICAgZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KGZpbGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRmlsZShmaWxlbmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoIShmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wV2F0Y2hpbmdGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoTW9kZWwoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVzeXN0ZW0gPSB0aGlzO1xyXG4gICAgICAgIFt0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMsXHJcbiAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmV4dHJhSW5zdHJ1Y3RvckZpbGVzXS5mb3JFYWNoKGZpbGVBcnJheSA9PlxyXG4gICAgICAgICAgICBmaWxlQXJyYXkuc3Vic2NyaWJlKGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGVsRmlsZSA9IGNoYW5nZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJhZGRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyYWNrIG5ldyBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZmlsZXN5c3RlbS5uZXdGaWxlKG1vZGVsRmlsZS5maWxlbmFtZSgpLCBtb2RlbEZpbGUuY29udGVudHMoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5ub3RpZnlXYXRjaGVzKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnN0YXR1cyA9PT0gXCJkZWxldGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXN5c3RlbS5kZWxldGVGaWxlTG9jYWxseV8obW9kZWxGaWxlLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcywgXCJhcnJheUNoYW5nZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIHN1Ym1pc3Npb24uY29kZSlcclxuICAgIC8vICFvbl9ydW4ucHksICFvbl9jaGFuZ2UucHksICFvbl9ldmFsLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZWxldmFudCBhc3NpZ25tZW50Ljx3aGF0ZXZlcj5cclxuICAgIC8vIF5zdGFydGluZ19jb2RlLnB5XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBmaXJzdCBlbGVtZW50IG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyBed2hhdGV2ZXJcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIGFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlXHJcbiAgICAvLyAhd2hhdGV2ZXIgb3IgP3doYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byBlbGVtZW50cyBvZiBhc3NpZ25tZW50LmV4dHJhRmlsZXNcclxuICAgIC8vIE90aGVyd2lzZTpcclxuICAgIC8vICAgPT4gc3Vic2NyaWJlIHRvIHJlc3Qgb2YgdGhlIGVsZW1lbnRzIG9mIHN1Ym1pc3Npb24uY29kZVxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXcgc3BlY2lhbCBmaWxlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIGZpbGUge0Jsb2NrUHlGaWxlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZUZpbGVfKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ydW4ucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fY2hhbmdlLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWluc3RydWN0aW9ucy5tZFwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCJec3RhcnRpbmdfY29kZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIXRhZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQudGFncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIWFzc2lnbm1lbnRfc2V0dGluZ3MuYmxvY2tweVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3M7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiRzZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIl5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUuc3RhcnRzV2l0aChcIiFcIikgfHwgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzLCBtb2RlbEZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgaW4gdGhpcy5maWxlc18pIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBhbHJlYWR5IGV4aXN0cyEgSnVzdCB1cGRhdGUgaXRzIGhhbmRsZVxyXG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdGaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKGV4aXN0aW5nRmlsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUoY29udGVudHMgfHwgXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0ZpbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBCbG9ja1B5RmlsZSh0aGlzLm1haW4sIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc19bZmlsZW5hbWVdID0gbmV3RmlsZTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsRmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVGaWxlXyhuZXdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlID0gbW9kZWxGaWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdGaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICAgICAgY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoY29udGVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5oYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZW5hbWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufG9iamVjdH0gVGhlIGluZm8gYWJvdXQgdGhlIGZpbGUsIG9yIGZhbHNlIGlmIGl0IGNvdWxkIG5vdCBiZSBkZWxldGVkXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUZpbGUoZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoREVMRVRBQkxFX1NJTVBMRV9GSUxFUy5pbmRleE9mKGZpbGVuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlcnMgYSBjYWxsYmFjayB0byBldmVudHVhbGx5IGNhbGwgZGVsZXRlRmlsZUxvY2FsbHlfXHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXS5vd25lci5yZW1vdmUobW9kZWxGaWxlID0+IG1vZGVsRmlsZS5maWxlbmFtZSA9PT0gZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZm91bmQgfHwgZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGVMb2NhbGx5XyhmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lIGluIHRoaXMud2F0Y2hlc18pIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay5kZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlXYXRjaGVzKGZpbGUpIHtcclxuICAgICAgICBpZiAoZmlsZS5maWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZS5maWxlbmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjay51cGRhdGVkKGZpbGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5zZXJ2ZXIuZm9yY2UudXBkYXRlU3VibWlzc2lvblwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHBhc3QgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lU3RyaW5nLCAxMCkpO1xuICAgIGlmIChpc1NhbWVEYXkobm93LCBwYXN0KSkge1xuICAgICAgICByZXR1cm4gXCJUb2RheSBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkYXlTdHIgPSB3ZWVrRGF5c1twYXN0LmdldERheSgpXTtcbiAgICAgICAgbGV0IG1vbnRoU3RyID0gbW9udGhOYW1lc1twYXN0LmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheVN0ciArIFwiLCBcIiArIG1vbnRoU3RyICsgXCIgXCIgKyBwYXN0LmdldERhdGUoKTtcbiAgICAgICAgaWYgKG5vdy5nZXRGdWxsWWVhcigpID09PSBwYXN0LmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlICsgXCIsIFwiK3Bhc3QuZ2V0RnVsbFllYXIoKSArIFwiIGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqXG4gKiBPcGVucyB0aGUgaGlzdG9yeSBkaWFsb2cgYm94LiBUaGlzIHJlcXVpcmVzIGEgdHJpcCB0byB0aGUgc2VydmVyIGFuZFxuICogb2NjdXJzIGFzeW5jaHJvbm91c2x5LiBUaGUgdXNlcnMnIGNvZGUgaXMgc2hvd24gaW4gcHJlZm9ybWF0dGVkIHRleHRcbiAqIHRhZ3MgKG5vIGNvZGUgaGlnaGxpZ2h0aW5nIGN1cnJlbnRseSkgYWxvbmcgd2l0aCB0aGUgdGltZXN0YW1wLlxuICovXG5CbG9ja1B5SGlzdG9yeS5wcm90b3R5cGUub3BlbkRpYWxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaWFsb2cgPSB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2c7XG4gICAgdmFyIGJvZHkgPSBcIjxwcmU+YSA9IDA8L3ByZT5cIjtcbiAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuZ2V0SGlzdG9yeShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBib2R5ID0gZGF0YS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChjb21wbGV0ZSwgZWxlbSkgeyBcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZV9zdHIgPSBwcmV0dHlQcmludERhdGVUaW1lKGVsZW0udGltZSk7XG4gICAgICAgICAgICB2YXIgbmV3X2xpbmUgPSBcIjxiPlwiK2NvbXBsZXRlX3N0citcIjwvYj48YnI+PHByZT5cIitlbGVtLmNvZGUrXCI8L3ByZT5cIjtcbiAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZStcIlxcblwiK25ld19saW5lO1xuICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgZGlhbG9nLnNob3coXCJXb3JrIEhpc3RvcnlcIiwgYm9keSwgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSk7XG59OyIsImltcG9ydCB7VFJBQ0VfSFRNTH0gZnJvbSBcInRyYWNlLmpzXCI7XG5pbXBvcnQge0RJQUxPR19IVE1MfSBmcm9tIFwiZGlhbG9nLmpzXCI7XG5pbXBvcnQge0ZFRURCQUNLX0hUTUx9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xuaW1wb3J0IHtGSUxFU19IVE1MfSBmcm9tIFwiZmlsZXMuanNcIjtcbmltcG9ydCB7Rk9PVEVSX0hUTUx9IGZyb20gXCJmb290ZXIuanNcIjtcbmltcG9ydCB7RURJVE9SU19IVE1MfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xuaW1wb3J0IHtDT05TT0xFX0hUTUx9IGZyb20gXCJjb25zb2xlLmpzXCI7XG5cbi8qKlxuICogQGVudW0ge3N0cn1cbiAqL1xuZXhwb3J0IGxldCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMgPSB7XG4gICAgRkVFREJBQ0s6IFwiZmVlZGJhY2tcIixcbiAgICBUUkFDRTogXCJ0cmFjZVwiLFxuICAgIE5PTkU6IFwibm9uZVwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyhzZWxmLCBtb2RlbCkge1xuICAgIGxldCBoaWdobGlnaHRUaW1lb3V0ID0gbnVsbDtcbiAgICBtb2RlbC51aS5pbnN0cnVjdGlvbnMuY3VycmVudC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoaGlnaGxpZ2h0VGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdGlvbnMgcHJlIGNvZGVcIikubWFwKCAoaSwgYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn1cblxuLy8gVE9ETzogR2V0IHNoYXJlYWJsZSBsaW5rIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludGVyZmFjZShtYWluKSB7XG4gICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2Jsb2NrcHktY29udGVudCBjb250YWluZXItZmx1aWQnPlxuXG4gICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgc3VibWlzc2lvbiBpcyByZWFkeSB0byBiZSByZXZpZXdlZCE8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuY2FuTWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLm1lbnUudGV4dE1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkubWVudS5jbGlja01hcmtTdWJtaXR0ZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAyOiBDb25zb2xlIGFuZCBGZWVkYmFjayAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgIFxuICAgICAgICA8IS0tIENvbnNvbGUgLS0+XG4gICAgICAgICR7Q09OU09MRV9IVE1MfVxuICAgICAgICAgXG4gICAgICAgIDwhLS0gRmVlZGJhY2sgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc0ZlZWRiYWNrVmlzaWJsZSAtLT5cbiAgICAgICAgJHtGRUVEQkFDS19IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgXG4gICAgICAgIDwhLS0gVHJhY2UgLS0+XG4gICAgICAgIDwhLS0ga28gaWY6IHVpLnNlY29uZFJvdy5pc1RyYWNlVmlzaWJsZSAtLT5cbiAgICAgICAgJHtUUkFDRV9IVE1MfVxuICAgICAgICA8IS0tIC9rbyAtLT5cbiAgICAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwhLS0gUm93IDM6IEZpbGUgTmF2aWdhdGlvbiAtLT5cbiAgICA8IS0tIGtvIGlmOiB1aS5maWxlcy52aXNpYmxlIC0tPlxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XG4gICAgICAgICR7RklMRVNfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC9rbyAtLT5cbiAgICBcbiAgICA8IS0tIFZpZXcgUm93IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtFRElUT1JTX0hUTUx9XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZvb3RlciBSb3cgLS0+ICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgJHtGT09URVJfSFRNTH1cbiAgICA8L2Rpdj5cbiAgICBcbjwvZGl2PlxuICAgIGA7XG59OyIsImltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHtsb2FkQXNzaWdubWVudFNldHRpbmdzLCBzYXZlQXNzaWdubWVudFNldHRpbmdzfSBmcm9tIFwiLi9lZGl0b3IvYXNzaWdubWVudF9zZXR0aW5nc1wiO1xuXG4vKipcbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgbGV0IFN0YXR1c1N0YXRlID0ge1xuICAgIFJFQURZOiBcInJlYWR5XCIsXG4gICAgQUNUSVZFOiBcImFjdGl2ZVwiLFxuICAgIFJFVFJZSU5HOiBcInJldHJ5aW5nXCIsXG4gICAgRkFJTEVEOiBcImZhaWxlZFwiLFxuICAgIE9GRkxJTkU6IFwib2ZmbGluZVwiXG59O1xuXG4vKipcbiAqIE9iamVjdCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBleHRlcm5hbCBzZXJ2ZXJzLiBUaGlzIGluY2x1ZGVzIGZ1bmN0aW9uYWxpdHkgZm9yXG4gKiBzYXZpbmcgYW5kIGxvYWRpbmcgZmlsZXMsIGxvZ2dpbmcgZXZlbnRzLCBzYXZpbmcgY29tcGxldGlvbnMsIGFuZCByZXRyaWV2aW5nIGhpc3RvcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAdGhpcyB7QmxvY2tQeVNlcnZlcn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeVNlcnZlcihtYWluKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcblxuICAgIC8vIFNhdmUgVVJMcyBsb2NhbGx5IGZvciBxdWlja2VyIGFjY2Vzc1xuICAgIHRoaXMudXJscyA9IG1haW4ubW9kZWwuY29uZmlndXJhdGlvbi51cmxzO1xuXG4gICAgLy8gQWRkIHRoZSBMb2NhbFN0b3JhZ2UgY29ubmVjdGlvblxuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwiQkxPQ0tQWVwiKTtcblxuICAgIC8vIEZhdWx0UmVzaXN0YW50Q2FjaGVcbiAgICB0aGlzLnF1ZXVlID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJsb2dFdmVudFwiLCBcIltdXCIpKSxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldERlZmF1bHQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFwiW11cIikpXG4gICAgfTtcbiAgICB0aGlzLk1BWF9RVUVVRV9TSVpFID0ge1xuICAgICAgICBcImxvZ0V2ZW50XCI6IDIwMCxcbiAgICAgICAgXCJ1cGRhdGVTdWJtaXNzaW9uXCI6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuVElNRVJfREVMQVkgPSAxMDAwO1xuICAgIHRoaXMuRkFJTF9ERUxBWSA9IDIwMDA7XG5cbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gbnVsbDtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPSAwO1xuXG4gICAgdGhpcy5jYWNoZWRGaWxlbmFtZXMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLmNoZWNrQ2FjaGVzKCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIElQIGFkZHJlc3MgaGFzIGNoYW5nZWQsIGxvZ2dpbmcgYW4gZXZlbnQgaWYgdGhhdCBvY2N1cnMuXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY2hlY2tJUCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwiSVBcIikpIHtcbiAgICAgICAgICAgIGxldCBvbGRJUCA9IHRoaXMuc3RvcmFnZS5nZXQoXCJJUFwiKTtcbiAgICAgICAgICAgIGlmIChvbGRJUCAhPT0gcmVzcG9uc2UuaXApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJvbGRcIjogb2xkSVAsXG4gICAgICAgICAgICAgICAgICAgIFwibmV3XCI6IHJlc3BvbnNlLmlwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFdmVudChcIlgtSVAuQ2hhbmdlXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFwiSVBcIiwgcmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGVyZSBoYXZlIGJlZW4gcHJldmlvdXMgZmFpbHVyZXMgY2FjaGVkLCBhbmQgaWYgc28gcmV0cmllcyB0aGVtLlxuICogVE9ETzogdXBkYXRlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrQ2FjaGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlQXNzaWdubWVudFwiKSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcImFzc2lnbm1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZUFzc2lnbm1lbnRcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgfVxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuaGFzKFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXQoXCJzYXZlRmlsZVwiICsgZmlsZW5hbWUpKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCB0aGlzLlRJTUVSX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBzZXJ2ZXIgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucXVldWUpLmZvckVhY2goZnVuY3Rpb24gKGVuZHBvaW50KSB7XG4gICAgICAgIChmdW5jdGlvbiBwdXNoQW55UXVldWVkKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIucXVldWVbZW5kcG9pbnRdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5wb3AoKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzZXJ2ZXIudXJsc1tlbmRwb2ludF07XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci5fcG9zdFJldHJ5KGRhdGEsIGVuZHBvaW50LCAxMDAwLCBwdXNoQW55UXVldWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgIH0pO1xufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgZmlsZW5hbWUpIHtcbiAgICBtb2RlbC5zdWJzY3JpYmUoKGNvbnRlbnRzKSA9PlxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpID8gdGhpcy5zYXZlRmlsZShmaWxlbmFtZSwgY29udGVudHMpIDogZmFsc2UsIHRoaXMpO1xuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzLnB1c2goZmlsZW5hbWUpO1xufTtcblxuLyoqXG4gKiBUT0RPOiBmaXhcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnN1Ym1pc3Npb24uY29kZSwgXCJhbnN3ZXIucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25SdW4sIFwiIW9uX3J1bi5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5vbkV2YWwsIFwiIW9uX2V2YWwucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UsIFwiIW9uX2NoYW5nZS5weVwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMsIFwiIWluc3RydWN0aW9ucy5tZFwiKTtcbiAgICB0aGlzLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24obW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUsIFwiXnN0YXJ0aW5nX2NvZGUucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhU3R1ZGVudEZpbGVzLCBcIiNleHRyYVN0dWRlbnRGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhU3RhcnRpbmdGaWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYUluc3RydWN0b3JGaWxlcywgXCIjZXh0cmFJbnN0cnVjdG9yRmlsZXMuYmxvY2tweVwiKTtcbn07XG5cbi8qKlxuICpcbiAqIFNvbWUgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGhhcHBlbiBhZnRlciBvdGhlciB0aGluZ3MgaGF2ZSBiZWVuIGxvYWRlZC5cbiAqIFJpZ2h0IG5vdyB0aGlzIGlzIGp1c3QgYWZ0ZXIgQ09SR0lTIGxpYnJhcmllcyBoYXZlIGJlZW4gbG9hZGVkLCBidXQgbWF5YmVcbiAqIHdlJ2xsIGFkZCBtb3JlIGxhdGVyIGFuZCB0aGlzIHdpbGwgbmVlZCB0byBiZSByZWZhY3RvcmVkLlxuICpcbiAqIFRPRE86IGZpeFxuICpcbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuZmluYWxpemVTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHMuc3Vic2NyaWJlKHRoaXMuc2F2ZUFzc2lnbm1lbnQuYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGRlZmF1bHQgcGF5bG9hZCBmb3IgYW55IGNvbW11bmljYXRpb24gd2l0aCB0aGUgc2VydmVyIEFQSVxuICogQHJldHVybnMge3thc3NpZ25tZW50X2lkOiAqLCBjb3Vyc2VfaWQ6ICosIGdyb3VwX2lkOiAqLCB1c2VyX2lkOiAqLCB0aW1lem9uZTogKiwgdmVyc2lvbjogKiwgdGltZXN0YW1wOiAqfX1cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuY3JlYXRlU2VydmVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXNzaWdubWVudCA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50O1xuICAgIGxldCB1c2VyID0gdGhpcy5tYWluLm1vZGVsLnVzZXI7XG4gICAgbGV0IHN1Ym1pc3Npb24gPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbjtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzdGF0dXMgYW5kIG1lc3NhZ2UgZm9yIHRoZSByZWxldmFudCBlbmRwb2ludC5cbiAqIEBwYXJhbSBlbmRwb2ludCB7c3RyaW5nfSBvbmUgb2YgdGhlIFVSTCBlbmRwb2ludHNcbiAqIEBwYXJhbSBzdGF0dXMge1N0YXR1c1N0YXRlfVxuICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZz99XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludF0oc3RhdHVzKTtcbiAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzW2VuZHBvaW50ICsgXCJNZXNzYWdlXCJdKG1lc3NhZ2UgfHwgXCJcIik7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gb3ZlcmxheSBvbiB0aGUgc2NyZWVuIHRoYXQgYmxvY2tzIG9wZXJhdGlvbiB1bnRpbCB0aGUgc3lzdGVtIGlzIHJlYWR5LlxuICogVGhlIG92ZXJsYXkgZ2V0cyBwcm9ncmVzc2l2ZWx5IGRhcmtlciB0byBpbmRpY2F0ZSByZXBlYXRlZCBmYWlsdXJlcy5cbiAqL1xuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2hvd092ZXJsYXkgPSBmdW5jdGlvbiAoYXR0ZW1wdCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyArPSAxO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2NrcHktb3ZlcmxheVwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImJsb2NrcHktb3ZlcmxheVwiPiA8L2Rpdj4nKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGF0dGVtcHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjOTg4XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzY1NVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiMzMzNcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuXG4vKipcbiAqIFVuZG8gYSBsZXZlbCBvZiBvdmVybGF5OyBpZiB0aGlzIHdhcyB0aGUgbGFzdCBsZXZlbCwgcmVtb3ZlcyBpdCBmcm9tIHRoZSBzY3JlZW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmhpZGVPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmxvY2tpbmdBdHRlbXB0cyAtPSAxO1xuICAgIGlmICh0aGlzLmJsb2NraW5nQXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX2VucXVldWVEYXRhID0gZnVuY3Rpb24gKGNhY2hlLCBkYXRhKSB7XG4gICAgLy8gRW5zdXJlIHdlIGhhdmUgbm90IG92ZXJmaWxsZWQgdGhlIHF1ZXVlXG4gICAgbGV0IGxlbmd0aCA9IHRoaXMucXVldWVbY2FjaGVdLmxlbmd0aDtcbiAgICBsZXQgbWF4ID0gdGhpcy5NQVhfUVVFVUVfU0laRVtjYWNoZV07XG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xuICAgICAgICB0aGlzLnF1ZXVlW2NhY2hlXSA9IHRoaXMucXVldWVbY2FjaGVdLnNsaWNlKGxlbmd0aCAtIG1heCwgbWF4KTtcbiAgICB9XG4gICAgLy8gT25seSBhZGQgdGhlIGVsZW1lbnQgaWYgaXQncyBuZXdcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0ucHVzaChrZXkpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXVlW2NhY2hlXSkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9kZXF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIGxldCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnF1ZXVlW2NhY2hlXS5pbmRleE9mKGtleSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0uc3BsaWNlKGluZGV4KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZW5kcG9pbnQsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgIGxldCBwb3N0UmVxdWVzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBhIGJhY2t1cCBvZiB0aGUgY3VycmVudCBwb3N0XG4gICAgICAgIHRoaXMuX2VucXVldWVEYXRhKGVuZHBvaW50LCBkYXRhKTtcbiAgICAgICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZS5pcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCB0aGVuIGxldCdzIHRyeSBpdCBhZ2FpbiBpbiBhIGJpdFxuICAgICAgICAgICAgLmZhaWwoKGVycm9yLCB0ZXh0U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgZGVsYXkgKyB0aGlzLkZBSUxfREVMQVksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGRlbGF5ID09PSBudWxsKSB7XG4gICAgICAgIHBvc3RSZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChwb3N0UmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFrZSBhIEFKQVggcmVxdWVzdCB0aGF0LCB1cG9uIGZhaWx1cmUsIHdpbGwgY2hlY2sgdG8gc2VlIGlmIHRoaXMgd2FzIHRoZVxuICogbGF0ZXN0IGF0dGVtcHQgZm9yIHRoaXMgYGNhY2hlYCBtYXJrZXIuIElmIHNvLCBpdCB3aWxsIGF0dGVtcHQgYWdhaW4gdW50aWxcbiAqIHN1Y2Nlc3NmdWw7IG90aGVyd2lzZSwgaXQgZ2l2ZXMgdXAgdGhlIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgQUpBWC1yZWFkeSBkYXRhIHRvIGJlIHBvc3RlZFxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCB0aW1lclxuICogQHBhcmFtIHtTdHJpbmd9IGVuZHBvaW50IC0gVGhlIHVuaXF1ZSBuYW1lIGdpdmVuIHRvIHRoZSByZWxldmFudCBjYWNoZSBlbnRyeVxuICogQHBhcmFtIHtJbnRlZ2VyfSBkZWxheSAtIFRoZSBjdXJyZW50IG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcbiB0cnlpbmcgdGhlIHJlcXVlc3QgYWdhaW4uXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0TGF0ZXN0UmV0cnkgPSBmdW5jdGlvbiAoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSkge1xuICAgIGxldCBjYWNoZSA9IGVuZHBvaW50ICsgZmlsZW5hbWU7XG4gICAgbGV0IHJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGNhY2hlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY29ubmVjdGVkIGJ1dCBmYWlsZWQsIGRvbid0IHRyeSBhZ2FpbiBidXQgbGV0IHRoZSB1c2VyIGtub3cgd2h5LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB0aGUgbGF0ZXN0IG9uZSwgY2xlYXIgaXQgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWNoZWRUaW1lID0gdGhpcy5zdG9yYWdlLmdldFRpbWUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA+PSBjYWNoZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyc1tjYWNoZV0pO1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICByZXF1ZXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lcnNbY2FjaGVdID0gc2V0VGltZW91dChyZXF1ZXN0LCBkZWxheSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuX3Bvc3RCbG9ja2luZyA9IGZ1bmN0aW9uIChlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMsIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgICB0aGlzLnNob3dPdmVybGF5KGF0dGVtcHRzKTtcbiAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgc3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCgoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZShlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhlbmRwb2ludCwgZGF0YSwgYXR0ZW1wdHMgLSAxLCBzdWNjZXNzLCBmYWlsdXJlKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkZBSUxfREVMQVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn07XG5cblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9hZEFzc2lnbm1lbnQgPSBmdW5jdGlvbiAoYXNzaWdubWVudF9pZCkge1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkQXNzaWdubWVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiYXNzaWdubWVudF9pZFwiXSA9IGFzc2lnbm1lbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRBc3NpZ25tZW50XCIsIGRhdGEsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4ubG9hZEFzc2lnbm1lbnREYXRhXyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJPZmZsaW5lXCIsIFwiU2VydmVyIGlzIG5vdCBjb25uZWN0ZWQhIChTYXZlIEFzc2lnbm1lbnQpXCIpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRIaXN0b3J5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImxvYWRIaXN0b3J5XCIpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwibG9hZEhpc3RvcnlcIiwgZGF0YSwgMiwgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2dFdmVudCA9IGZ1bmN0aW9uIChldmVudF90eXBlLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIGZpbGVfcGF0aCkge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2dFdmVudFwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZXZlbnRfdHlwZVwiXSA9IGV2ZW50X3R5cGU7XG4gICAgICAgIGRhdGFbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5O1xuICAgICAgICBkYXRhW1wibGFiZWxcIl0gPSBsYWJlbDtcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPSBtZXNzYWdlO1xuICAgICAgICBkYXRhW1wiZmlsZV9wYXRoXCJdID0gZmlsZV9wYXRoO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdFxuICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJsb2dFdmVudFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9nRXZlbnRcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUltYWdlID0gZnVuY3Rpb24gKGRpcmVjdG9yeSwgaW1hZ2UpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUltYWdlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJkaXJlY3RvcnlcIl0gPSBkaXJlY3Rvcnk7XG4gICAgICAgIGRhdGFbXCJpbWFnZVwiXSA9IGltYWdlO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIFwidHVydGxlX291dHB1dFwiLCBcInNhdmVJbWFnZVwiLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVJbWFnZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uU3RhdHVzID0gZnVuY3Rpb24obmV3U3RhdHVzKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcInN0YXR1c1wiXSA9IG5ld1N0YXR1cztcbiAgICAgICAgbGV0IHBvc3RTdGF0dXNDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMobmV3U3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKFwidXBkYXRlU3VibWlzc2lvblN0YXR1c1wiLCBkYXRhLCAyLCBwb3N0U3RhdHVzQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1VQREFUSU5HX1NVQk1JU1NJT05fU1RBVFVTKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gbG9hZCBmaWxlcyBhbmQgd2ViIHJlc291cmNlcy5cbiAqXG4gKiBERVBSRUNBVEVEXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRGaWxlID0gZnVuY3Rpb24gKGZpbGVuYW1lLCB0eXBlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHZhciBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBpZiAobW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkX2ZpbGVcIikpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJ0eXBlXCJdID0gdHlwZTtcbiAgICAgICAgdGhpcy5fcG9zdEJsb2NraW5nKHRoaXMudXJscy5sb2FkX2ZpbGUsIGRhdGEsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuc2V0U3RhdHVzKFwiRmFpbHVyZVwiLCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhcIlNlcnZlciBmYWlsdXJlISBSZXBvcnQgdG8gaW5zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yQ2FsbGJhY2soXCJObyBmaWxlIHNlcnZlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcIk9mZmxpbmVcIiwgXCJTZXJ2ZXIgaXMgbm90IGNvbm5lY3RlZCEgKExvYWQgRmlsZSlcIik7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUuc2F2ZUZpbGUgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNvbnRlbnRzLCBkZWxheSkge1xuICAgIGlmIChkZWxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGF5ID0gdGhpcy5USU1FUl9ERUxBWTtcbiAgICB9XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIGlmIChtb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVGaWxlXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1wiY29kZVwiXSA9IGNvbnRlbnRzO1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBmaWxlbmFtZSwgXCJzYXZlRmlsZVwiLCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS51cGRhdGVTdWJtaXNzaW9uID0gZnVuY3Rpb24gKHNjb3JlLCBjb3JyZWN0LCBoaWRkZW5PdmVycmlkZSwgZm9yY2VVcGRhdGUpIHtcbiAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLm1haW4ubW9kZWwuY29uZmlndXJhdGlvbi5jYWxsYmFja3Muc3VjY2VzcztcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwidXBkYXRlU3VibWlzc2lvblwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wic2NvcmVcIl0gPSBzY29yZTtcbiAgICAgICAgZGF0YVtcImNvcnJlY3RcIl0gPSBjb3JyZWN0O1xuICAgICAgICBkYXRhW1wiaGlkZGVuX292ZXJyaWRlXCJdID0gaGlkZGVuT3ZlcnJpZGU7XG4gICAgICAgIGRhdGFbXCJmb3JjZV91cGRhdGVcIl0gPSBmb3JjZVVwZGF0ZTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLmdldFBuZ0Zyb21CbG9ja3MoKHBuZ0RhdGEsIGltZykgPT4ge1xuICAgICAgICAgICAgZGF0YVtcImltYWdlXCJdID0gcG5nRGF0YTtcbiAgICAgICAgICAgIGlmIChpbWcucmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwidXBkYXRlU3VibWlzc2lvblwiLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwidXBkYXRlU3VibWlzc2lvblwiLCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGlkZGVuT3ZlcnJpZGUgJiYgY29ycmVjdCAmJiBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiLyoqXG4gKiBTa3VscHQgTW9kdWxlIGZvciBob2xkaW5nIHRoZSBJbnN0cnVjdG9yIEFQSS5cbiAqXG4gKiBUaGlzIG1vZHVsZSBpcyBsb2FkZWQgaW4gYnkgZ2V0dGluZyB0aGUgZnVuY3Rpb25zJyBzb3VyY2UgY29kZSBmcm9tIHRvU3RyaW5nLlxuICogSXNuJ3QgdGhhdCBjcmF6eT9cbiAqXG4gKlxuICovXG5leHBvcnQgbGV0ICRza19tb2RfaW5zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1haW4gbW9kdWxlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgYXQgdGhlIGVuZC5cbiAgICBsZXQgbW9kID0ge307XG4gICAgbGV0IG5vbmUgPSBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgXG4gICAgbGV0IHByaW9yID0gbnVsbDtcbiAgICBtb2QudGltZWl0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ0aW1laXRcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgbGV0IGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChwcmlvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gRGF0ZS5ub3coKSAtIHByaW9yO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobmFtZSksIGRpZmZlcmVuY2UvMTAwMCk7XG4gICAgICAgIHByaW9yID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGZlZWRiYWNrIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5sb2cgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxvZ1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhTay5mZmkucmVtYXBUb0pzKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIGRlYnVnIHRvIGphdmFzY3JpcHQgY29uc29sZVxuICAgICAqL1xuICAgIG1vZC5kZWJ1ZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBjb3ZlcnRzIHRoZSBvdXRwdXQgaW4gdGhlIHN0dWRlbnQgcmVwb3J0IHRvIGEgcHl0aG9uIFxuICAgICAqIGxpc3QgYW5kIHJldHVybnMgaXQuXG4gICAgKiovXG4gICAgbW9kLmdldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdW1wib3V0cHV0XCJdKCk7XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQubWFwKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udG9Ta3VscHQoKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KG91dHB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGUgb3V0cHV0LCBwYXJ0aWN1bGFybHkgdXNlZnVsIGlmIHRoZSBzdHVkZW50XG4gICAgICogY29kZSBpcyBnb2luZyB0byBiZSByZXJ1bi5cbiAgICAgKi9cbiAgICBtb2QucmVzZXRfb3V0cHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInJlc2V0X291dHB1dFwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ub3V0cHV0LnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5idWlsdGluLm5vbmUubm9uZSQ7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnF1ZXVlX2lucHV0ID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInF1ZXVlX2lucHV0XCIsIGFyZ3VtZW50cywgMSwgSW5maW5pdHkpO1xuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBhcmdzW2ldO1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrVHlwZShcImlucHV0XCIsIFwic3RyaW5nXCIsIFNrLmJ1aWx0aW4uY2hlY2tTdHJpbmcoaW5wdXQpKTtcbiAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goU2suZmZpLnJlbWFwVG9KcyhpbnB1dCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X3Byb2dyYW0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3Byb2dyYW1cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInZlcmlmaWVyXCJdLmNvZGUpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgaW5zdHJ1Y3RvcnMgdG8gZ2V0IHRoZSBzdHVkZW50cycgY29kZSBhcyBhIHN0cmluZy5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X2V2YWx1YXRpb24gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X2V2YWx1YXRpb25cIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXZhbHVhdGlvbiB8fCBcIlwiKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QudHJhY2VfbGluZXMgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGxpbmVzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ubGluZXM7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShsaW5lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vZC5nZXRfc3R1ZGVudF9lcnJvciA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnR1cGxlKFtub25lLCBub25lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvcixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHt9O1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnRyYWNlYmFjayAmJiBlcnJvci50cmFjZWJhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uW1wibGluZVwiXSA9IGVycm9yLnRyYWNlYmFja1swXS5saW5lbm87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yID0gbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc2l0aW9uID0gU2suZmZpLnJlbWFwVG9QeShwb3NpdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW2Vycm9yLCBwb3NpdGlvbl0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcbiAgICBtb2QuaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImhhZF9leGVjdXRpb25fdGltZV9lcnJvclwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gIVNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uZXJyb3IgJiZcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvci50cCRuYW1lID09PSBcIlRpbWVMaW1pdEVycm9yXCI7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGJhY2t1cFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgbW9kLmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGJhY2t1cFRpbWUgPSBTay5leGVjTGltaXQ7XG4gICAgICAgIGlmIChTay5leGVjTGltaXRGdW5jdGlvbikge1xuICAgICAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcbiAgICAgICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBtb2QudW5saW1pdF9leGVjdXRpb25fdGltZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJ1bmxpbWl0X2V4ZWN1dGlvbl90aW1lXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIFNrLmV4ZWNMaW1pdCA9IGJhY2t1cFRpbWU7XG4gICAgICAgIFNrLmV4ZWNTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSk7XG4gICAgXG4gICAgbW9kLnN1cHByZXNzX3Njcm9sbGluZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzdXBwcmVzc19zY3JvbGxpbmdcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBcbiAgICAvKlxuICAgIGRlZiBoaXN0KHNlbGYsIGRhdGEsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0hpc3RvZ3JhbScsICd2YWx1ZXMnOiBkYXRhLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHBsb3Qoc2VsZiwgeHMsIHlzPU5vbmUsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIGlmIHlzID09IE5vbmU6XG4gICAgICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdMaW5lJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4JzogcmFuZ2UobGVuKHhzKSksICd5JzogeHMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICAgICAgZWxzZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgZGVmIHNjYXR0ZXIoc2VsZiwgeHMsIHlzLCAqKmt3YXJncyk6XG4gICAgICAgIGxhYmVsID0ga3dhcmdzLmdldCgnbGFiZWwnLCBOb25lKVxuICAgICAgICBzZWxmLmFjdGl2ZV9wbG90WydkYXRhJ10uYXBwZW5kKHsndHlwZSc6ICdTY2F0dGVyJywgJ3gnOiB4cywgJ3knOiB5cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICovXG4gICAgbW9kLmdldF9wbG90cyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcGxvdHNcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgaWYgKFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBvdXRwdXRzID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dHMgPSBvdXRwdXRzLmZpbHRlcihmdW5jdGlvbihvdXRwdXQpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dC50eXBlID09PSBcInBsb3RcIjtcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XCJkYXRhXCI6IGdyYXBoLmNvbnRlbnQubWFwKGZ1bmN0aW9uKHBsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bsb3QgPSB7IFwidHlwZVwiOiBwbG90LnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3QudHlwZSA9PT0gXCJsaW5lXCIgfHwgcGxvdC50eXBlID09PSBcInNjYXR0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxvdFtcInhcIl0gPSBwbG90LmRhdGEubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYueDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieVwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi55OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbG90LnR5cGUgPT09IFwiaGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1widmFsdWVzXCJdID0gcGxvdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdQbG90O1xuICAgICAgICAgICAgICAgIH0pLCBcbiAgICAgICAgICAgICAgICBcInhsYWJlbFwiOiBcIlwiLCBcInlsYWJlbFwiOiBcIlwiLCBcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiXCIsIFwibGVnZW5kXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkob3V0cHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShbXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIC8vIFByb3ZpZGVzIGBzdHVkZW50YCBhcyBhbiBvYmplY3Qgd2l0aCBhbGwgdGhlIGRhdGEgdGhhdCB0aGUgc3R1ZGVudCBkZWNsYXJlZC5cbiAgICBtb2QuU3R1ZGVudERhdGEgPSBTay5taXNjZXZhbC5idWlsZENsYXNzKG1vZCwgZnVuY3Rpb24oJGdibCwgJGxvYykge1xuICAgICAgICAkbG9jLl9faW5pdF9fID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmKSB7XG4gICAgICAgICAgICAvL3NlbGYuZGF0YSA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgbGV0IG5ld0RpY3QgPSBTay5idWlsdGluLmRpY3QoKTtcbiAgICAgICAgICAgIFNrLmFic3RyLnNhdHRyKHNlbGYsIFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSwgbmV3RGljdCwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLm1vZHVsZSA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLnJlc3VsdHM7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0gc2VsZi5tb2R1bGUuJGQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHNlbGYubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5hYnN0ci5vYmplY3RTZXRJdGVtKG5ld0RpY3QsIFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChrZXkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb2R1bGVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2FsbF9mID0gZnVuY3Rpb24oa3dhKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzTGVuKFwiY2FsbFwiLCBhcmd1bWVudHMubGVuZ3RoLCAxLCBJbmZpbml0eSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICB2YXIga3dhcmdzID0gbmV3IFNrLmJ1aWx0aW5zLmRpY3Qoa3dhKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGFyZ3NbMV07XG4gICAgICAgICAgICBhcmdzID0gYXJncy5zbGljZSgyKTtcblxuICAgICAgICAgICAgdmFyIGlucHV0cyA9IGt3YXJncy5tcCRsb29rdXAobmV3IFNrLmJ1aWx0aW4uc3RyKFwiaW5wdXRzXCIpKTtcbiAgICAgICAgICAgIGlmIChpbnB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlucHV0cyA9IFNrLmZmaS5yZW1hcFRvSnMoaW5wdXRzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0gc2VsZi50cCRnZXRhdHRyKG5ldyBTay5idWlsdGluLnN0cihcImRhdGFcIikpO1xuICAgICAgICAgICAgdmFyIGZ1bmN0aW9uT2JqZWN0ID0gZGF0YS5tcCRsb29rdXAoZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmdW5jdGlvbk9iamVjdC50cCRjYWxsKGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbF9mLmNvX2t3YXJncyA9IHRydWU7XG4gICAgICAgIC8vY2FsbF9mLmNvX3Zhcm5hbWVzID0gW1wic2VsZlwiLCBcImZ1bmN0aW9uXCJdO1xuICAgICAgICBjYWxsX2YuY29fbmFtZT0gbmV3IFNrLmJ1aWx0aW4uc3RyKFwiY2FsbFwiKTtcbiAgICAgICAgJGxvY1tcImNhbGxfJHJuJFwiXSA9IG5ldyBTay5idWlsdGluLmZ1bmMoY2FsbF9mKTtcblxuICAgICAgICAkbG9jW1wiX19yZXByX19cIl0gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIoXCJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRsb2MuZ2V0X25hbWVzX2J5X3R5cGUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYsIHR5cGUsIGV4Y2x1ZGVfYnVpbHRpbnMpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbmFtZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgJiYgcHJvcGVydHkuc3RhcnRzV2l0aChcIl9fXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChTay5mZmkucmVtYXBUb1B5KFNrLnVuZml4UmVzZXJ2ZWQocHJvcGVydHkpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAkbG9jLmdldF92YWx1ZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF92YWx1ZXNfYnlfdHlwZVwiLCBhcmd1bWVudHMsIDIsIDMpO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVfYnVpbHRpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiZXhjbHVkZV9idWlsdGluc1wiLCBcImJvb2xlYW5cIiwgU2suYnVpbHRpbi5jaGVja0Jvb2woZXhjbHVkZV9idWlsdGlucykpO1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVfYnVpbHRpbnMgPSBTay5mZmkucmVtYXBUb0pzKGV4Y2x1ZGVfYnVpbHRpbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5tb2R1bGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZVtwcm9wZXJ0eV0udHAkbmFtZSA9PT0gdHlwZS50cCRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNlbGYubW9kdWxlW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5saXN0KHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH0sIFwiU3R1ZGVudERhdGFcIik7XG4gICAgbW9kLnN0dWRlbnQgPSBTay5taXNjZXZhbC5jYWxsc2ltT3JTdXNwZW5kKG1vZC5TdHVkZW50RGF0YSk7XG4gICAgXG4gICAgbW9kLmdldF9zdHVkZW50X2RhdGEgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3N0dWRlbnRfZGF0YVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gbW9kLnN0dWRlbnQ7XG4gICAgfSk7XG5cbiAgICBtb2Quc2V0X2luc3RydWN0aW9ucyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obmV3SW5zdHJ1Y3Rpb25zKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJzZXRfaW5zdHJ1Y3Rpb25zXCIsIGFyZ3VtZW50cywgMSwgMik7XG4gICAgICAgIG5ld0luc3RydWN0aW9ucyA9IFNrLmZmaS5yZW1hcFRvSnMobmV3SW5zdHJ1Y3Rpb25zKTtcbiAgICAgICAgU2suZXhlY3V0aW9uUmVwb3J0c1tcIm1vZGVsXCJdLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucyhuZXdJbnN0cnVjdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgbW9kLmdldF9tb2RlbF9pbmZvID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihrZXlzKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfbW9kZWxfaW5mb1wiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgbW9kZWwgPSBTay5leGVjdXRpb25SZXBvcnRzW1wibW9kZWxcIl07XG4gICAgICAgIGtleXMgPSBTay5mZmkucmVtYXBUb0pzKGtleXMpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbW9kZWwgPSBtb2RlbFtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShtb2RlbCgpKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbW9kO1xufTtcbiIsImxldCBMT0NBTF9TVE9SQUdFX1JFRjtcbnRyeSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSBsb2NhbFN0b3JhZ2U7XG4gICAgbGV0IG1vZCA9IFwiQkxPQ0tQWV9MT0NBTFNUT1JBR0VfVEVTVFwiO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0obW9kLCBtb2QpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0obW9kKTtcbn0gY2F0Y2goZSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGID0ge1xuICAgICAgICBfZGF0YSAgICAgICA6IHt9LFxuICAgICAgICBzZXRJdGVtICAgICA6IGZ1bmN0aW9uKGlkLCB2YWwpIHsgcmV0dXJuIHRoaXMuX2RhdGFbaWRdID0gU3RyaW5nKHZhbCk7IH0sXG4gICAgICAgIGdldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQpIHsgcmV0dXJuIHRoaXMuX2RhdGEuaGFzT3duUHJvcGVydHkoaWQpID8gdGhpcy5fZGF0YVtpZF0gOiB1bmRlZmluZWQ7IH0sXG4gICAgICAgIHJlbW92ZUl0ZW0gIDogZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzLl9kYXRhW2lkXTsgfSxcbiAgICAgICAgY2xlYXIgICAgICAgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuX2RhdGEgPSB7fTsgfVxuICAgIH07XG59XG5cbi8qKlxuICogSGVscGVyIG9iamVjdCBmb3IgaW50ZXJmYWNpbmcgd2l0aCB0aGUgTG9jYWxTdG9yYWdlLiBUaGUgTG9jYWxTdG9yYWdlXG4gKiBicm93c2VyIEFQSSBhbGxvd3MgZm9yIG9mZmxpbmUgc3RvcmFnZS4gVGhhdCBBUEkgaXMgdmVyeSB1bnNvcGhpc3RpY2F0ZWQsXG4gKiBhbmQgaXMgZXNzZW50aWFsbHkgYSBsYW1lIGtleS12YWx1ZSBzdG9yZS4gVGhpcyBvYmplY3Qgc2l0cyBvbiB0b3BcbiAqIGFuZCBwcm92aWRlcyBhIG51bWJlciBvZiB1c2VmdWwgdXRpbGl0aWVzLCBpbmNsdWRpbmcgcnVkaW1lbnRhcnljYWNoZVxuICogY2FjaGUgZXhwaXJhdGlvbi5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtMb2NhbFN0b3JhZ2VXcmFwcGVyfVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIEEgbmFtZXNwYWNlIHRvIHVzZSBpbiBncm91cGluZyBhY2Nlc3MgdG8gbG9jYWxzdG9yYWdlLiBUaGlzIGtlZXBzIGFjY2VzcyBjbGVhbiBhbmQgb3JnYW5pemVkLCB3aGlsZSBhbHNvIG1ha2luZyBpdCBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIExvY2FsU3RvcmFnZSBjb25uZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2FsU3RvcmFnZVdyYXBwZXIobmFtZXNwYWNlKSB7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG59XG4vKipcbiAqIEEgbWV0aG9kIGZvciBhZGRpbmcgYSBrZXkvdmFsdWUgcGFpciB0byBMb2NhbFN0b3JhZ2UuXG4gKiBOb3RlIHRoYXQgYm90aCBwYXJhbWV0ZXJzIG11c3QgYmUgc3RyaW5ncyAoSlNPTi5zdHJpbmdpZnkgaXMgeW91ciBmcmllbmQpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5LlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlLlxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5zZXQgPSAgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIsIHZhbHVlKTtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRi5zZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIiwgJC5ub3coKSk7XG59O1xuXG4vKipcbiAqIEEgbWV0aG9kIGZvciByZW1vdmluZyBhIGtleSBmcm9tIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZW1vdmUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHRpbWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHRpbWUgZm9yLlxuICogQHJldHVybnMge0ludGVnZXJ9IC0gVGhlIHRpbWVzdGFtcCAobG9jYWwgZXBvY2gpIHdoZW4gdGhlIGtleSB3YXMgbGFzdCBzZXQuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJldHJpZXZpbmcgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICogSWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQuXG4gKiBUaGlzIGRlZmF1bHQgd2lsbCBiZSBzZXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZhdWx0VmFsdWUgLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UuIE11c3QgYmUgYSBzdHJpbmcuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmdldERlZmF1bHQgPSBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEEgdGVzdCBmb3Igd2hldGhlciB0aGUgZ2l2ZW4ga2V5IGlzIGluIExvY2FsU3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byB0ZXN0IGV4aXN0ZW5jZSBmb3IuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl92YWx1ZVwiKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBzZXJ2ZXIgaGFzIHRoZSBuZXdlciB2ZXJzaW9uLiBUaGlzIGZ1bmN0aW9uXG4gKiBhc3N1bWVzIHRoYXQgdGhlIHNlcnZlciB0cmlwIHRha2VzIGFib3V0IDUgc2Vjb25kcy4gVGhpcyBtZXRob2RcbiAqIGlzIGxhcmdlbHkgZGVwcmVjYXRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIGtleSB0byBjaGVjay5cbiAqIEBwYXJhbSB7SW50ZWdlcn0gc2VydmVyX3RpbWUgLSBUaGUgc2VydmVyJ3MgdGltZSBhcyBhbiBlcG9jaCAoaW4gbWlsbGlzZWNvbmRzKVxuICovXG5Mb2NhbFN0b3JhZ2VXcmFwcGVyLnByb3RvdHlwZS5pc19uZXcgPSBmdW5jdGlvbihrZXksIHNlcnZlcl90aW1lKSB7XG4gICAgdmFyIHN0b3JlZF90aW1lID0gTE9DQUxfU1RPUkFHRV9SRUYuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xuICAgIHJldHVybiAoc2VydmVyX3RpbWUgPj0gc3RvcmVkX3RpbWUrNTAwMCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRSQUNFX0hUTUwgPSBgXHJcblxyXG48ZGl2IGNsYXNzPVwiYmxvY2tweS10cmFjZSBjb2wtbWQtNiBibG9ja3B5LXBhbmVsXCJcclxuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJUcmFjZVwiPlxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICA8c3Ryb25nPlRyYWNlOiA8L3N0cm9uZz5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIEZlZWRiYWNrL1RyYWNlIFZpc2liaWxpdHkgQ29udHJvbCAtLT5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LWhpZGUtdHJhY2UnXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuc2Vjb25kUm93LmFkdmFuY2VTdGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPiBIaWRlIFRyYWNlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyBibG9ja3B5LXRyYWNlLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLXN0ZXAtYmFja3dhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS50cmFjZS5iYWNrd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U3RlcDo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAvIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmZvcndhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmxhc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD0ndGV4dDogdWkudHJhY2UubGluZSc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPHRhYmxlIGNsYXNzPSd0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyJz5cclxuICAgICAgICA8Y2FwdGlvbj5DdXJyZW50IHZhcmlhYmxlcyBhdCB0aGlzIHN0ZXA8L2NhcHRpb24+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+PHRoPk5hbWU8L3RoPjx0aD5UeXBlPC90aD48dGg+VmFsdWU8L3RoPjwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVwiZm9yZWFjaDogdWkudHJhY2UuZGF0YSgpLnByb3BlcnRpZXNcIj5cclxuICAgICAgICAgICAgPHRyIGRhdGEtYmluZD1cInZpc2libGU6IG5hbWUgIT0gJ19fZmlsZV9fJyAmJiBuYW1lICE9ICdfX3BhdGhfXydcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiBuYW1lXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiB0eXBlXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Y29kZSBkYXRhLWJpbmQ9XCJ0ZXh0OiB2YWx1ZVwiPjwvY29kZT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiB0eXBlID09IFwiTGlzdFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBkYXRhLWJpbmQ9XCJjbGljazogLy8kcm9vdC52aWV3RXhhY3RWYWx1ZSh0eXBlLCBleGFjdF92YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1uZXctd2luZG93Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICAgIFxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5VHJhY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgICAgIHRoaXMuSUdOT1JFRF9HTE9CQUxTID0gW1wiX19uYW1lX19cIiwgXCJfX2RvY19fXCIsIFwiX19wYWNrYWdlX19cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzbWV0aG9kXCIsIFwicHJvcGVydHlcIiwgXCJzdGF0aWNtZXRob2RcIl07XHJcblxyXG4gICAgICAgIC8vIHRoaXMudHJhY2UuY2xpY2sodGhpcy5idWlsZFRyYWNlVGFibGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lIGEgc2V0IG9mIHZhcmlhYmxlcyB0cmFjZWQgZnJvbSB0aGUgZXhlY3V0aW9uIGFuZCBwYXJzZSBvdXQgYW55XHJcbiAgICAgKiBnbG9iYWwgdmFyaWFibGVzIGFuZCBtb2R1bGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBhIG1hcHBpbmcgb2YgdmFyaWFibGUgbmFtZXMgdG8gdGhlaXIgU2t1cHQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHBhcnNlR2xvYmFscyh2YXJpYWJsZXMpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IG1vZHVsZXMgPSBbXTtcclxuICAgICAgICBpZiAoIXRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyYWNlRXhlY3V0aW9uKCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdmFyaWFibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YXJpYWJsZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSUdOT1JFRF9HTE9CQUxTLmluZGV4T2YocHJvcGVydHkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkucmVwbGFjZShcIl8kcnckXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiXyRybiRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZDtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSBCbG9ja1B5VHJhY2UucGFyc2VWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB7XCJuYW1lXCI6IHByb3BlcnR5LCBcInR5cGVcIjogXCJVbmtub3duXCIsIFwidmFsdWVcIjogdmFsdWUudG9TdHJpbmcoKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBTay5idWlsdGluLm1vZHVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzLnB1c2godmFsdWUuJGQuX19uYW1lX18udik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XCJwcm9wZXJ0aWVzXCI6IHJlc3VsdCwgXCJtb2R1bGVzXCI6IG1vZHVsZXN9O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBTa3VscHQgdmFsdWUgaW50byBhIG1vcmUgZWFzaWx5IHByaW50YWJsZSBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgLSB0aGUgc2t1bHB0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgZnVsbExlbmd0aCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZ1bmM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLmZ1bmNfY29kZS5jb192YXJuYW1lcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFyZ3VtZW50czogXCIrdmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzLmpvaW4oXCIsIFwiKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBObyBhcmd1bWVudHNcIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5tb2R1bGU6IHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uc3RyOlxyXG4gICAgICAgICAgICAgICAgaWYgKGZ1bGxMZW5ndGggfHwgdmFsdWUudi5sZW5ndGggPD0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiW1wiK3ZhbHVlLnNxJGxlbmd0aCgpK1wiIGNoYXJhY3RlcnMgbm90IHNob3duXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5vbmU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJOb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk5vbmVcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmJvb2w6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5ubWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImludFwiID09PSB2YWx1ZS5za1R5cGUgPyBcIkludGVnZXJcIjogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uaW50XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkludGVnZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmZsb2F0XzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi50dXBsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlR1cGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5saXN0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnYubGVuZ3RoIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiWy4uLiBcIit2YWx1ZS52Lmxlbmd0aCtcIiBlbGVtZW50cyAuLi5dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhhY3RfdmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZGljdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkRpY3Rpb25hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogdmFsdWUgJSAxID09PSAwID8gXCJJbnRlZ2VyXCIgOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTdHJpbmc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCb29sZWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAodmFsdWUgPyBcIlRydWVcIjogXCJGYWxzZVwiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZS50cCRuYW1lID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLnRwJG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kciA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gVE9ETzogdmlld0V4YWN0VmFsdWUiLCIvKipcbiAqIERldGVybWluZXMgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge2FueXRoaW5nfSBuZWVkbGUgLSBUaGUgZWxlbWVudCB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7QXJyYXl9IGhheXN0YWNrIC0gVGhlIGxpc3QgdG8gc2VhcmNoLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCBleGlzdHNcbiAqL1xuZnVuY3Rpb24gYXJyYXlDb250YWlucyhuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuXG4vKipcbiAqIFJlbW92ZSBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYW4gYXJyYXksIHByZXNlcnZpbmcgb3JkZXIuXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5LCBzbyBpcyBub24tZGVzdHJ1Y3RpdmUuXG4gKiBDb3VydGVzeTpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1ODQzNzAvaG93LXRvLW1lcmdlLXR3by1hcnJheXMtaW4tamF2YXNjcmlwdC1hbmQtZGUtZHVwbGljYXRlLWl0ZW1zXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgdG8gdW5pcXVpZnkuIEVsZW1lbnRzIGNvbXBhcmVkIHdpdGggPT09LlxuICovXG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnJheSkge1xuICAgIHZhciBhID0gYXJyYXkuY29uY2F0KCk7XG4gICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IodmFyIGo9aSsxOyBqPGEubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGlmKGFbaV0gPT09IGFbal0pIHthLnNwbGljZShqLS0sIDEpO31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIGZvciBleHRlbmRpbmcgYW4gYXJyYXkgYmFzZWRcbiAqIG9uIGFuIFwiYWRkQXJyYXlcIiBhbmQgXCJyZW1vdmVBcnJheVwiLiBBbnkgZWxlbWVudFxuICogZm91bmQgaW4gcmVtb3ZlQXJyYXkgaXMgcmVtb3ZlZCBmcm9tIHRoZSBmaXJzdCBhcnJheVxuICogYW5kIGFsbCB0aGUgZWxlbWVudHMgb2YgYWRkQXJyYXkgYXJlIGFkZGVkLlxuICogQW55IGR1cGxpY2F0ZSBpdGVtcyBhcmUgcmVtb3ZlZC5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIHRoZSBhcnJheSB0byBtYW5pcHVsYXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhZGRBcnJheSAtIHRoZSBlbGVtZW50cyB0byBhZGQgdG8gdGhlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSByZW1vdmVBcnJheSAtIHRoZSBlbGVtZW50cyB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbW9kaWZpZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQXJyYXkoYXJyYXksIGFkZEFycmF5LCByZW1vdmVBcnJheSkge1xuICAgIHZhciBjb3B5QXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlQXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5VW5pcXVlKGNvcHlBcnJheS5jb25jYXQoYWRkQXJyYXkpKTtcbn1cblxuLyoqXG4gKiBEZWVwbHkgY2xvbmVzIGEgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlIEEgbm9kZSB0byBjbG9uZVxuICogQHJldHVybiB7Tm9kZX0gQSBjbG9uZSBvZiB0aGUgZ2l2ZW4gbm9kZSBhbmQgYWxsIGl0cyBjaGlsZHJlblxuICovXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgIC8vIElmIHRoZSBub2RlIGlzIGEgdGV4dCBub2RlLCB0aGVuIHJlLWNyZWF0ZSBpdCByYXRoZXIgdGhhbiBjbG9uZSBpdFxuICAgIHZhciBjbG9uZSA9IG5vZGUubm9kZVR5cGUgPT0gMyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUubm9kZVZhbHVlKSA6IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiBcbiAgICAvLyBSZWN1cnNlICAgICBcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY2hpbGQpIHtcbiAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGNoaWxkKSk7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgICBcbiAgICByZXR1cm4gY2xvbmU7XG59XG5cbi8qKlxuICogSW5kZW50cyB0aGUgZ2l2ZW4gc3RyaW5nIGJ5IDQgc3BhY2VzLiBUaGlzIGNvcnJlY3RseSBoYW5kbGVzIG11bHRpLWxpbmUgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCBmb3VyIHNwYWNlcyBhZGRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgbmV3IGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKD89LikvZ20sIFwiICAgIFwiKTtcbn1cblxuLyoqXG4gKiBUdXJucyBzcGFjZXMgaW50byB1bmRlcnNjb3JlcyBpbiB0aGUgc3RyaW5nLCBtYWtlcyBpdCBsb3dlcmNhc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdGhlIHN0cmluZyB0byBiZSBtYW5pcHVsYXRlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsdWcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgXCJfXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBbYG1pbmAsIGBtYXhgXS5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiAtIFRoZSBsb3dlc3QgcG9zc2libGUgaW50ZWdlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSBpbnRlZ2VyIChpbmNsdXNpdmUpLlxuICogQHJldHVybnMge251bWJlcn0gQSByYW5kb20gaW50ZWdlci5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xufVxuXG4vKipcbiAqIEVuY29kZXMgc29tZSB0ZXh0IHNvIHRoYXQgaXQgY2FuIGJlIHNhZmVseSB3cml0dGVuIGludG8gYW4gSFRNTCBib3guXG4gKiBUaGlzIGluY2x1ZGVzIHJlcGxhY2luZyBzcGVjaWFsIEhUTUwgY2hhcmFjdGVycyAoJiwgPCwgPiwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSB0ZXh0IHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEhUTUwtc2FmZSB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlSFRNTChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIiZhcG9zO1wiKTtcbn1cblxuLyoqXG4gKiBTaHVmZmxlIHRoZSBibG9ja3MgaW4gdGhlIHdvcmtzcGFjZVxuICovXG5pZiAodHlwZW9mIEJsb2NrbHkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBCbG9ja2x5LldvcmtzcGFjZVN2Zy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWV0cmljcyA9IHRoaXMuZ2V0TWV0cmljcygpO1xuICAgICAgICB2YXIgd2lkdGggPSBtZXRyaWNzLnZpZXdXaWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgPSBtZXRyaWNzLnZpZXdIZWlnaHQ7XG4gICAgICAgIHZhciBibG9ja3MgPSB0aGlzLmdldFRvcEJsb2NrcyhmYWxzZSk7XG4gICAgICAgIHZhciB5ID0gNSwgeCA9IDAsXG4gICAgICAgICAgICBtYXhpbWFsX2luY3JlYXNlID0gaGVpZ2h0L2Jsb2Nrcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIEdldCBhIGJsb2NrXG4gICAgICAgICAgICB2YXIgYmxvY2sgPSBibG9ja3NbaV07XG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IGJsb2NrLmdldFJlbGF0aXZlVG9TdXJmYWNlWFkoKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICB4ID0gNTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IC1wcm9wZXJ0aWVzLngrcmFuZG9tSW50ZWdlcigxMCwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxvY2subW92ZUJ5KHgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIC1wcm9wZXJ0aWVzLnkreSk7XG4gICAgICAgICAgICB5ID0geSArIHJhbmRvbUludGVnZXIoNSwgbWF4aW1hbF9pbmNyZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudHMgZnJvbSBvbmUgYXJyYXkgdG8gYW5vdGhlciBiYXNlZCBvbiBhIGNvbmRpdGlvbmFsIGNoZWNrLlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzE4ODc5NjcvamF2YXNjcmlwdC1tb3ZlLW9iamVjdHMtZnJvbS1vbmUtYXJyYXktdG8tYW5vdGhlci1iZXN0LWFwcHJvYWNoXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50cyhzb3VyY2UsIHRhcmdldCwgbW92ZUNoZWNrKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzb3VyY2VbaV07XG4gICAgICAgIGlmIChtb3ZlQ2hlY2soZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==