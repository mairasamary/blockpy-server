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
          dirtySubmission: ko.observable(true),

          /**
           *  Whether or not to make the BlockPy element in FULL SCREEN mode. Sadly, not fullscreen
           *  within the window, but FULL SCREEN. Very aggressive.
           */
          fullscreen: ko.observable(false),

          /**
           * User-supplied passcode to compare on the server against the current passcode.
           */
          passcode: ko.observable("")
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
          textFullscreen: ko.pureComputed(function () {
            return model.display.fullscreen() ? "fa-compress-arrows-alt" : "fa-expand-arrows-alt";
          }),
          clickFullscreen: function clickFullscreen() {
            model.display.fullscreen(!model.display.fullscreen());
          },
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
              if (!model.assignment.hidden() && model.submission.correct()) {
                return "Submit";
              } else {
                return "Submit early";
              }
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
  }, {
    key: "requestPasscode",
    value: function requestPasscode() {
      var userSuppliedPasscode = prompt("Please enter the passcode.");
      this.model.display.passcode(userSuppliedPasscode);
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

BlockPyDialog.prototype.ERROR_LOADING_ASSIGNMNENT = function (reason) {
  this.show("Error Loading Assignment", "BlockPy encountered an error while loading the assignment.<br>\nPlease reload the page and try again.<br>Response from server was:<br><pre>".concat(reason, "</pre>"));
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



var ASSIGNMENT_SETTINGS = [["toolbox", "toolbox", "normal", "toolbox", "Which version of the toolbox to present to the user."], ["passcode", "passcode", "", "string", "A string that the user must enter to access the problem. If blank, then no passcode is prompted."], //["toolboxLevel", "toolbox_level", "normal", "toolbox", "INCOMPLETE: What level of toolbox to present to the user (hiding and showing categories)."],
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
var ASSIGNMENT_SETTINGS_EDITOR_HTML = "\n    <div class=\"blockpy-view-settings\">\n    \n    <form>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-12 mx-auto\">\n                <button type=\"button\" class=\"btn btn-success\"\n                    data-bind=\"click: ui.editors.settings.save\">Save changes</button>\n            </div>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-name\" class=\"col-sm-2 col-form-label text-right\">Name:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-name\"\n                data-bind=\"value: assignment.name\">\n                <small class=\"form-text text-muted\">\n                    The student-facing name of the assignment. Assignments within a group are ordered alphabetically\n                    by their name, so you may want to use a naming scheme like \"#43.5) Whatever\".\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-url\" class=\"col-sm-2 col-form-label text-right\">URL:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-url\"\n                data-bind=\"value: assignment.url\">\n                <small class=\"form-text text-muted\">\n                    The course-unique URL that can be used to consistently refer to this assignment. \n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-public\">Public:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-public\"\n                    data-bind=\"checked: assignment.public\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If not public, users outside of the course will not be able to see the assignment in course listings.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-hidden\">Hidden:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-hidden\"\n                    data-bind=\"checked: assignment.hidden\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If hidden, students will not be able to see their grade while working on the assignment.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Reviewed:</label>\n            </div>\n            <div class=\"col-sm-1\">\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"blockpy-settings-reviewed\"\n                    data-bind=\"checked: assignment.reviewed\">\n                </div>  \n            </div>            \n            <div class=\"col-sm-9\">\n                <small class=\"form-text text-muted\">\n                    If reviewed, the assignment need to be commented upon and regraded by the staff after submission.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <div class=\"col-sm-2 text-right\">\n                <label class=\"form-check-label\" for=\"blockpy-settings-reviewed\">Starting View:</label>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"btn-group btn-group-toggle mr-2\" data-toggle=\"buttons\">\n                    ".concat(makeStartViewTab("Blocks", "th-large", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].BLOCK), "\n                    ").concat(makeStartViewTab("Split", "columns", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].SPLIT), "\n                    ").concat(makeStartViewTab("Text", "align-left", _python__WEBPACK_IMPORTED_MODULE_1__["DisplayModes"].TEXT), "\n                 </div>\n            </div>            \n            <div class=\"col-sm-7\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("startView"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-ip-ranges\" class=\"col-sm-2 col-form-label text-right\">IP Ranges:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-ip-ranges\"\n                data-bind=\"value: assignment.ipRanges\">\n                <small class=\"form-text text-muted\">\n                    Provide a comma-separated list of IP Addresses that will be explicitly allowed. If blank,\n                    then all addresses are allowed. If an address starts with <code>^</code> then it it is explicitly\n                    blacklisted, but that can be overridden in turn with a <code>!</code>. Addresses can also\n                    include a bit mask to allow a range of addresses.\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-passcode\" class=\"col-sm-2 col-form-label text-right\">Passcode:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-passcode\"\n                data-bind=\"value: assignment.settings.passcode\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("passcode"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-datasets\" class=\"col-sm-2 col-form-label text-right\">Preloaded Datasets:</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"blockpy-settings-datasets\"\n                data-bind=\"value: assignment.settings.datasets\">\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("datasets"), "\n                </small>\n            </div>\n        </div>\n        \n        <div class=\"form-group row\">\n            <label for=\"blockpy-settings-toolbox\" class=\"col-sm-2 col-form-label text-right\">Block Toolbox:</label>\n            <div class=\"col-sm-10\">\n                <select class=\"form-control\" id=\"blockpy-settings-toolbox\"\n                       data-bind=\"value: assignment.settings.toolbox\">\n                   <option value=\"normal\">Normal Toolbox</option>\n                   <option value=\"ct\">CT@VT Toolbox</option>\n                   <option value=\"minimal\">Minimal Set</option>\n                   <option value=\"full\">All Blocks</option>\n                </select>\n                <small class=\"form-text text-muted\">\n                    ").concat(getDocumentation("toolbox"), "\n                </small>\n            </div>\n        </div>\n        \n        ").concat(ASSIGNMENT_SETTINGS_BOOLEAN_COMPONENTS_HTML, "\n    </form>\n    \n    </div>\n");
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
        return _this.main.model.assignment.settings.disableTimeout() ? Infinity : 3000;
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
  model.display.fullscreen.subscribe(function (isFullscreen) {
    self.components.server.logEvent("X-Display.Fullscreen.Request", "", "", isFullscreen.toString(), "");

    if (isFullscreen) {
      // NOTE: navigationUI could allow us to force controls to show
      model.configuration.container.parent()[0].requestFullscreen()["catch"](function (err) {
        var message = "Error attempting to enable full-screen mode: ".concat(err.message, " (").concat(err.name, ")");
        self.components.server.logEvent("X-Display.Fullscreen.Error", "", "", message, "");
        alert(message);
      }).then(function () {
        self.components.server.logEvent("X-Display.Fullscreen.Success", "", "", "", "");
        model.display.fullscreen(true);
        model.configuration.container.css("overflow-y", "auto");
      });
    } else {
      document.exitFullscreen().then(function () {
        self.components.server.logEvent("X-Display.Fullscreen.Exit", "", "", isFullscreen.toString(), "");
        model.display.fullscreen(false);
      });
    }
  });
} // TODO: Get shareable link button

function makeInterface(main) {
  return "\n<div class='blockpy-content container-fluid'>\n\n    <!-- Dialog -->\n    ".concat(dialog_js__WEBPACK_IMPORTED_MODULE_1__["DIALOG_HTML"], "\n    \n    <!-- Hidden Capture Canvas -->\n    <canvas id='capture-canvas' class='d-none' role=\"presentation\" aria-hidden=\"true\"></canvas>\n    \n    <!-- Row 1: Header and Quick Menu -->\n    <div class='row'>\n         \n         <!-- Description -->\n         <div class='col-md-10 blockpy-panel blockpy-header'\n               role='heading' aria-label='Assignment Description'>\n         \n            <!-- Assignment Name -->\n            <span role='heading' aria-level='1'\n                  class=\"blockpy-name\">\n                <strong>BlockPy: </strong> \n                <span data-bind='text: assignment.name'></span>\n            </span>\n            \n            <!-- Reset Instructions Button -->\n            <div class=\"blockpy-instructions-reset\"\n                data-bind=\"visible: ui.instructions.isChanged\">\n                <a class=\"float-right\"\n                    data-bind=\"click: ui.instructions.reset\"\n                    href=\"\">\n                    Reset instructions</a>\n            </div>\n            \n            <!-- Instructions -->\n            <div class='blockpy-instructions'\n                 data-bind=\"html: ui.instructions.current\">\n            </div>\n        </div>\n        \n        <div class='col-md-2 blockpy-panel blockpy-quick-menu'\n             role='menubar' aria-label='Quick Menu' title=\"Quick Menu\">\n            <!-- Get Shareable Link -->\n            <!--<button class=\"btn btn-outline-secondary btn-sm\">\n                Get shareable link</button>-->\n            <span data-bind=\"visible: ui.menu.isSubmitted\">\n                Your submission is ready to be reviewed!</span>\n            <button class=\"btn btn-outline-secondary btn-sm\"\n                data-bind=\"visible: ui.menu.canMarkSubmitted,\n                           text: ui.menu.textMarkSubmitted,\n                           click: ui.menu.clickMarkSubmitted\"></button>\n            <!-- View as instructor -->\n            <div class=\"form-check\"\n                 data-bind=\"visible: ui.role.isGrader\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"blockpy-as-instructor\"\n                    data-bind=\"checked: display.instructor\">\n                <label class=\"form-check-label\" for=\"blockpy-as-instructor\">\n                    View as instructor\n                </label>\n            </div>\n            <button class=\"btn btn-outline-secondary btn-sm\"\n                data-bind=\"click: ui.menu.clickFullscreen\"\n            ><span class='fas',\n                           data-bind=\"class: ui.menu.textFullscreen\"\n            ></span></button>\n        </div>\n         \n    </div>\n    \n    <!-- Row 2: Console and Feedback -->\n    <div class='row'>\n    \n        <!-- Console -->\n        ").concat(console_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_HTML"], "\n         \n        <!-- Feedback -->\n        <!-- ko if: ui.secondRow.isFeedbackVisible -->\n        ").concat(feedback_js__WEBPACK_IMPORTED_MODULE_2__["FEEDBACK_HTML"], "\n        <!-- /ko -->\n        \n        <!-- Trace -->\n        <!-- ko if: ui.secondRow.isTraceVisible -->\n        ").concat(trace_js__WEBPACK_IMPORTED_MODULE_0__["TRACE_HTML"], "\n        <!-- /ko -->\n         \n    </div>\n    \n    <!-- Row 3: File Navigation -->\n    <!-- ko if: ui.files.visible -->\n    <div class='row'>\n        ").concat(files_js__WEBPACK_IMPORTED_MODULE_3__["FILES_HTML"], "\n    </div>\n    <!-- /ko -->\n    \n    <!-- View Row -->\n    <div class=\"row\">\n        ").concat(editors_js__WEBPACK_IMPORTED_MODULE_5__["EDITORS_HTML"], "\n    </div>\n\n    <!-- Footer Row -->    \n    <div class=\"row\">\n        ").concat(footer_js__WEBPACK_IMPORTED_MODULE_4__["FOOTER_HTML"], "\n    </div>\n    \n</div>\n    ");
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

BlockPyServer.prototype.createEventLogs = function () {
  var _this3 = this;

  window.onblur = function () {
    _this3.logEvent("Session.End", undefined, undefined, undefined);
  };

  window.onfocus = function () {
    _this3.logEvent("Session.Start", undefined, undefined, undefined);
  }; // TODO: Add in beacon?

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
  var display = this.main.model.display;
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
    "timezone": now.getTimezoneOffset(),
    "passcode": display.passcode()
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
  var _this4 = this;

  // Trigger request
  var postRequest = function postRequest() {
    // Make a backup of the current post
    _this4._enqueueData(endpoint, data);

    $.post(_this4.urls[endpoint], data).done(function (response) {
      _this4._dequeueData(endpoint, data);

      if (response.success) {
        _this4.setStatus(endpoint, StatusState.READY);
      } else {
        console.error(response);

        _this4.setStatus(endpoint, StatusState.FAILED, response.message);
      }

      if (callback) {
        callback(response);
      }

      if (response.success) {
        _this4.checkIP(response.ip);
      }
    }) // If server request is the latest one, then let's try it again in a bit
    .fail(function (error, textStatus) {
      _this4.setStatus(endpoint, StatusState.RETRYING, textStatus.toString());

      _this4._postRetry(data, endpoint, delay + _this4.FAIL_DELAY, callback);
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
  var _this5 = this;

  var cache = endpoint + filename;

  var request = function request() {
    // Make a backup of the current post
    _this5.storage.set(cache, JSON.stringify(data));

    var time = _this5.storage.getTime(cache); // Send the request


    $.post(_this5.urls[endpoint], data).done(function (response) {
      if (response.success) {
        _this5.checkIP(response); // If server request is the latest one, clear it from the cache


        var cachedTime = _this5.storage.getTime(cache);

        if (time >= cachedTime) {
          _this5.storage.remove(cache);
        }

        _this5.setStatus(endpoint, StatusState.READY);
      } else {
        // This connected but failed, don't try again but let the user know why.
        _this5.setStatus(endpoint, StatusState.FAILED, response.message);

        if (response.success === false) {
          // If we're the latest one, clear it from the cache
          var _cachedTime = _this5.storage.getTime(cache);

          if (time >= _cachedTime) {
            _this5.storage.remove(cache);
          }
        }
      }
    }).fail(function (error, textStatus) {
      _this5.setStatus(endpoint, StatusState.RETRYING, textStatus.toString()); // If server request is the latest one, then let's try it again in a bit


      var cachedTime = _this5.storage.getTime(cache);

      if (time >= cachedTime) {
        _this5._postLatestRetry(data, filename, endpoint, delay + _this5.FAIL_DELAY);
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
  var _this6 = this;

  this.showOverlay(attempts);
  $.post(this.urls[endpoint], data).done(function (response) {
    _this6.hideOverlay();

    _this6.setStatus(endpoint, StatusState.READY);

    success(response);

    _this6.checkIP(response);
  }).fail(function (e, textStatus, errorThrown) {
    if (attempts <= 0) {
      _this6.hideOverlay();

      _this6.setStatus(endpoint, StatusState.FAILED, textStatus.toString());

      if (failure) {
        failure(e, textStatus, errorThrown);
      }
    } else {
      setTimeout(function () {
        _this6.hideOverlay();

        _this6.setStatus(endpoint, StatusState.RETRYING, textStatus.toString());

        _this6._postBlocking(endpoint, data, attempts - 1, success, failure);
      }, _this6.FAIL_DELAY);
    }
  });
};

BlockPyServer.prototype.loadAssignment = function (assignment_id) {
  var _this7 = this;

  var model = this.main.model;

  if (model.ui.server.isEndpointConnected("loadAssignment")) {
    var data = this.createServerData();
    data["assignment_id"] = assignment_id;

    this._postBlocking("loadAssignment", data, 4, function (response) {
      if (response.success) {
        _this7.main.loadAssignmentData_(response);
      } else {
        _this7.setStatus("loadAssignment", StatusState.FAILED, response.message);

        _this7.main.components.dialog.ERROR_LOADING_ASSIGNMNENT(response.message);
      }
    }, function (e, textStatus, errorThrown) {
      _this7.main.components.dialog.ERROR_LOADING_ASSIGNMNENT(textStatus);

      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("loadAssignment", StatusState.OFFLINE);
  }
};

BlockPyServer.prototype.saveAssignment = function () {
  var _this8 = this;

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
      _this8.main.components.dialog.ERROR_SAVING_ASSIGNMNENT();

      console.error(e, textStatus, errorThrown);
    });
  } else {
    this.setStatus("saveAssignment", StatusState.OFFLINE, "Server is not connected! (Save Assignment)");
  }
};

BlockPyServer.prototype.loadHistory = function (callback) {
  var _this9 = this;

  if (this.main.model.ui.server.isEndpointConnected("loadHistory")) {
    var model = this.main.model;
    var data = this.createServerData();

    this._postBlocking("loadHistory", data, 2, callback, function (e, textStatus, errorThrown) {
      _this9.main.components.dialog.ERROR_LOADING_HISTORY();

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
  var _this10 = this;

  if (this.main.model.ui.server.isEndpointConnected("updateSubmissionStatus")) {
    var data = this.createServerData();
    data["status"] = newStatus;

    var postStatusChange = function postStatusChange(data) {
      if (data.success) {
        _this10.main.model.submission.submissionStatus(newStatus);
      }
    };

    this._postBlocking("updateSubmissionStatus", data, 2, postStatusChange, function (e, textStatus, errorThrown) {
      _this10.main.components.dialog.ERROR_UPDATING_SUBMISSION_STATUS();

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
  var _this11 = this;

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

      _this11._postRetry(data, "updateSubmission", 0, function (response) {
        if (response.success) {
          _this11.setStatus("updateSubmission", StatusState.READY);
        } else {
          _this11.setStatus("updateSubmission", StatusState.FAILED, response.message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ibG9ja3B5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvYmxvY2tweS5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jb3JnaXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYmxvY2tweS5jc3MiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9jc3MvYm9vdHN0cmFwX3JldGhlbWUuY3NzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL2Fic3RyYWN0X2VkaXRvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL21hcmtkb3duLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3B5dGhvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VkaXRvci90YWdzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZWRpdG9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lZGl0b3JzLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2NvbmZpZ3VyYXRpb25zLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL2V2YWwuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvaW5zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9jaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fZXZhbC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9vbl9ydW4uanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvb25fc2FtcGxlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZW5naW5lL3J1bi5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2VuZ2luZS9zYW1wbGUuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9lbmdpbmUvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9ibG9ja3B5Ly4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9oaXN0b3J5LmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvc2tfbW9kX2luc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2Jsb2NrcHkvLi9zcmMvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vYmxvY2tweS9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovL2Jsb2NrcHkvZXh0ZXJuYWwgXCJrb1wiIl0sIm5hbWVzIjpbIkJsb2NrUHkiLCJjb25maWd1cmF0aW9uIiwiYXNzaWdubWVudCIsInN1Ym1pc3Npb24iLCJpbml0TW9kZWwiLCJ1bmRlZmluZWQiLCJzZXRBc3NpZ25tZW50IiwiaW5pdE1haW4iLCJpbml0VXRpbGl0aWVzIiwiaW5pdE1vZGVsTWV0aG9kcyIsInR1cm5PbkhhY2tzIiwiaW5pdEludGVyZmFjZSIsImFwcGx5TW9kZWwiLCJpbml0Q29tcG9uZW50cyIsIm1ha2VFeHRyYVN1YnNjcmlwdGlvbnMiLCJzdGFydCIsImtleSIsImRlZmF1bHRWYWx1ZSIsImluaXRpYWxDb25maWd1cmF0aW9uXyIsImxvY2FsU2V0dGluZ3NfIiwiaGFzIiwiZ2V0IiwiTG9jYWxTdG9yYWdlV3JhcHBlciIsIm1vZGVsIiwidXNlciIsImlkIiwia28iLCJvYnNlcnZhYmxlIiwibmFtZSIsInJvbGUiLCJnZXRTZXR0aW5nIiwiY291cnNlSWQiLCJncm91cElkIiwiaW5zdHJ1Y3Rpb25zIiwidXJsIiwidHlwZSIsInN0YXJ0aW5nQ29kZSIsIm9uUnVuIiwib25DaGFuZ2UiLCJvbkV2YWwiLCJleHRyYUluc3RydWN0b3JGaWxlcyIsIm9ic2VydmFibGVBcnJheSIsImV4dHJhU3RhcnRpbmdGaWxlcyIsImZvcmtlZElkIiwiZm9ya2VkVmVyc2lvbiIsIm93bmVySWQiLCJ2ZXJzaW9uIiwidGFncyIsInNhbXBsZVN1Ym1pc3Npb25zIiwicmV2aWV3ZWQiLCJoaWRkZW4iLCJpcFJhbmdlcyIsInNldHRpbmdzIiwibWFrZUFzc2lnbm1lbnRTZXR0aW5nc01vZGVsIiwiY29kZSIsImV4dHJhRmlsZXMiLCJlbmRwb2ludCIsInNjb3JlIiwiY29ycmVjdCIsInN1Ym1pc3Npb25TdGF0dXMiLCJncmFkaW5nU3RhdHVzIiwiZGlzcGxheSIsImZpbGVuYW1lIiwiaW5zdHJ1Y3RvciIsInRvU3RyaW5nIiwibXV0ZVByaW50ZXIiLCJweXRob25Nb2RlIiwiRGlzcGxheU1vZGVzIiwiU1BMSVQiLCJoaXN0b3J5TW9kZSIsImF1dG9TYXZlIiwiYmlnQ29uc29sZSIsInByZXZpb3VzQ29uc29sZUhlaWdodCIsImN1cnJlbnRDb25zb2xlSGVpZ2h0Iiwic2Vjb25kUm93U2Vjb25kUGFuZWwiLCJTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMiLCJGRUVEQkFDSyIsInRyYWNlRXhlY3V0aW9uIiwibG9hZGluZ0RhdGFzZXRzIiwiY2hhbmdlZEluc3RydWN0aW9ucyIsInRyaWdnZXJPbkNoYW5nZSIsImRpcnR5U3VibWlzc2lvbiIsImZ1bGxzY3JlZW4iLCJwYXNzY29kZSIsInN0YXR1cyIsImxvYWRBc3NpZ25tZW50IiwiU3RhdHVzU3RhdGUiLCJSRUFEWSIsImxvYWRBc3NpZ25tZW50TWVzc2FnZSIsImxvYWRIaXN0b3J5IiwibG9hZEhpc3RvcnlNZXNzYWdlIiwibG9hZEZpbGUiLCJsb2FkRmlsZU1lc3NhZ2UiLCJsb2FkRGF0YXNldCIsImxvYWREYXRhc2V0TWVzc2FnZSIsImxvZ0V2ZW50IiwibG9nRXZlbnRNZXNzYWdlIiwic2F2ZUltYWdlIiwic2F2ZUltYWdlTWVzc2FnZSIsInNhdmVGaWxlIiwic2F2ZUZpbGVNZXNzYWdlIiwic2F2ZUFzc2lnbm1lbnQiLCJzYXZlQXNzaWdubWVudE1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uIiwidXBkYXRlU3VibWlzc2lvbk1lc3NhZ2UiLCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzIiwidXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UiLCJvbkV4ZWN1dGlvbiIsImV4ZWN1dGlvbiIsInJlcG9ydHMiLCJvdXRwdXQiLCJzdHVkZW50IiwiY3VycmVudFN0ZXAiLCJsYXN0U3RlcCIsImN1cnJlbnRMaW5lIiwibGFzdExpbmUiLCJjdXJyZW50VHJhY2VEYXRhIiwiY3VycmVudFRyYWNlU3RlcCIsInJlc3VsdHMiLCJnbG9iYWxzIiwiZmVlZGJhY2siLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImxpbmVzRXJyb3IiLCJsaW5lc1VuY292ZXJlZCIsImNhbGxiYWNrcyIsInNlcnZlckNvbm5lY3RlZCIsImJsb2NrbHlQYXRoIiwiYXR0YWNobWVudFBvaW50IiwiY29udGFpbmVyIiwidXJscyIsImNvbnN0YW50cyIsImd1aSIsIm1ha2VJbnRlcmZhY2UiLCIkIiwiaHRtbCIsImFzc2lnbm1lbnRfaWQiLCJjb21wb25lbnRzIiwic2VydmVyIiwic2FtcGxlcyIsInN0YXJ0aW5nX2NvZGUiLCJsb2FkQ29uY2F0ZW5hdGVkRmlsZSIsImV4dHJhX3N0YXJ0aW5nX2ZpbGVzIiwibG9hZE5vU3VibWlzc2lvbiIsImdyYWRpbmdfc3RhdHVzIiwic3VibWlzc2lvbl9zdGF0dXMiLCJ1c2VyX2lkIiwiY291cnNlX2lkIiwiZXh0cmFfZmlsZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc2V0SW50ZXJmYWNlIiwiZmlsZVN5c3RlbSIsImRpc21vdW50RXh0cmFGaWxlcyIsIndhc1NlcnZlckNvbm5lY3RlZCIsImZvcmtlZF9pZCIsImZvcmtlZF92ZXJzaW9uIiwiaXBfcmFuZ2VzIiwib25fY2hhbmdlIiwibmV3RmlsZSIsIm9uX2V2YWwiLCJvbl9ydW4iLCJvd25lcl9pZCIsImxvYWRBc3NpZ25tZW50U2V0dGluZ3MiLCJsb2FkVGFncyIsImxvYWRTYW1wbGVTdWJtaXNzaW9ucyIsInNhbXBsZV9zdWJtaXNzaW9ucyIsImV4dHJhX2luc3RydWN0b3JfZmlsZXMiLCJsb2FkU3VibWlzc2lvbiIsImNvcmdpcyIsImxvYWREYXRhc2V0cyIsInNldFN0YXR1cyIsInNlbGYiLCJ1aSIsImlzR3JhZGVyIiwicHVyZUNvbXB1dGVkIiwiaXNDaGFuZ2VkIiwiY3VycmVudCIsInV0aWxpdGllcyIsIm1hcmtkb3duIiwicmVzZXQiLCJtZW51IiwidGV4dEZ1bGxzY3JlZW4iLCJjbGlja0Z1bGxzY3JlZW4iLCJjYW5NYXJrU3VibWl0dGVkIiwidGV4dE1hcmtTdWJtaXR0ZWQiLCJpc0NvbXBsZXRlZCIsImlzU3VibWl0dGVkIiwiY2xpY2tNYXJrU3VibWl0dGVkIiwiYWxlcnQiLCJlbmdpbmUiLCJkZWxheWVkUnVuIiwidG9Mb3dlckNhc2UiLCJzZWNvbmRSb3ciLCJpc0ZlZWRiYWNrVmlzaWJsZSIsImlzVHJhY2VWaXNpYmxlIiwiVFJBQ0UiLCJpc0NvbnNvbGVTaG93VmlzaWJsZSIsInN3aXRjaExhYmVsIiwiYWR2YW5jZVN0YXRlIiwiY3VycmVudFBhbmVsIiwiTk9ORSIsInNpemUiLCJoaWRlRXZhbHVhdGUiLCJBQ1RJVkUiLCJiYWRnZSIsInRyYWNlIiwibGluZSIsInN0ZXAiLCJ0cmFjZURhdGEiLCJmaXJzdCIsImJhY2t3YXJkIiwicHJldmlvdXMiLCJNYXRoIiwibWF4IiwiZm9yd2FyZCIsIm5leHQiLCJtaW4iLCJsYXN0IiwiZmlsZXMiLCJ2aXNpYmxlIiwiaGlkZUZpbGVzIiwiaGFzQ29udGVudHMiLCJwYXRoIiwic29tZSIsImZpbGUiLCJsZW5ndGgiLCJhZGQiLCJuZXdGaWxlRGlhbG9nIiwiZGVsZXRlRmlsZSIsImV4dHJhU3R1ZGVudEZpbGVzIiwib2JzZXJ2ZUNvbmNhdGVuYXRlZEZpbGUiLCJkaXNwbGF5RmlsZW5hbWUiLCJzdGFydHNXaXRoIiwic2xpY2UiLCJlZGl0b3JzIiwiZ2V0RWRpdG9yIiwidmlldyIsImhpZGVFZGl0b3JzIiwibWFwIiwic3Vic3RyIiwibWFrZU1vZGVsRmlsZSIsImNvbnRlbnRzIiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIlVOREVMRVRBQkxFX0ZJTEVTIiwiaW5kZXhPZiIsImNhblJlbmFtZSIsIlVOUkVOQU1BQkxFX0ZJTEVTIiwidXBsb2FkIiwidXBsb2FkRmlsZSIsImJpbmQiLCJkb3dubG9hZCIsImRvd25sb2FkRmlsZSIsImltcG9ydERhdGFzZXQiLCJvcGVuRGlhbG9nIiwicHl0aG9uIiwiY29kZU1pcnJvciIsInB5dGhvbkVkaXRvciIsImJtIiwidGV4dEVkaXRvciIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsInVwZGF0ZU1vZGUiLCJuZXdNb2RlIiwib2xkUHl0aG9uTW9kZSIsImlzSGlzdG9yeUF2YWlsYWJsZSIsImlzRW5kcG9pbnRDb25uZWN0ZWQiLCJ0dXJuT2ZmSGlzdG9yeU1vZGUiLCJ1cGRhdGVFZGl0b3IiLCJzZXRSZWFkT25seSIsInR1cm5Pbkhpc3RvcnlNb2RlIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiaGlzdG9yeSIsImxvYWQiLCJkaWFsb2ciLCJFUlJPUl9MT0FESU5HX0hJU1RPUlkiLCJ0b2dnbGVIaXN0b3J5TW9kZSIsIm1vdmVUb1N0YXJ0IiwibW92ZVByZXZpb3VzIiwibW92ZU5leHQiLCJtb3N0UmVjZW50IiwibW92ZVRvTW9zdFJlY2VudCIsInVzZSIsInNhdmUiLCJleGVjdXRlIiwiaXNSdW5uaW5nIiwicnVuIiwiZXZhbHVhdGUiLCJtZXNzYWdlcyIsImZvcmNlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmYWRlT3V0IiwiZmFkZUluIiwibWFrZUV4dHJhSW50ZXJmYWNlU3Vic2NyaXB0aW9ucyIsImFwcGx5QmluZGluZ3MiLCJtYWluIiwidGV4dCIsIkVhc3lNREUiLCJwcm90b3R5cGUiLCJCbG9ja1B5RGlhbG9nIiwiZmluZCIsIkJsb2NrUHlGZWVkYmFjayIsIkJsb2NrUHlUcmFjZSIsIkJsb2NrUHlDb25zb2xlIiwiQmxvY2tQeUVuZ2luZSIsIkJsb2NrUHlGaWxlU3lzdGVtIiwiRWRpdG9ycyIsImJ5TmFtZSIsIkJsb2NrUHlTZXJ2ZXIiLCJCbG9ja1B5Q29yZ2lzIiwiQmxvY2tQeUhpc3RvcnkiLCJzdWJzY3JpYmUiLCJjaGFuZ2VkIiwidXNlclN1cHBsaWVkUGFzc2NvZGUiLCJwcm9tcHQiLCJTVEFSVF9FVkFMX0hUTUwiLCJDT05TT0xFX0hUTUwiLCJORVdfQ09OU09MRV9MSU5FX0hUTUwiLCJDb25zb2xlTGluZVR5cGUiLCJURVhUIiwiSFRNTCIsIlBMT1QiLCJJTUFHRSIsIlRVUlRMRSIsIkVWQUwiLCJTVEFSVF9FVkFMIiwiVkFMVUUiLCJJTlBVVCIsIlRFU1RfQ0FTRSIsIkNvbnNvbGVMaW5lIiwiY29udGVudCIsIm9yaWdpbiIsIlNrIiwiY3VyckZpbGVuYW1lIiwiZXhlY3V0aW9uQnVmZmVyIiwiaW5kZXgiLCJmZmkiLCJyZW1hcFRvUHkiLCJyZW1vdmUiLCJDb25zb2xlTGluZVR1cnRsZSIsImFkZENsYXNzIiwid2hlcmUiLCJwcmVwZW5kIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkNvbnNvbGVMaW5lSW1hZ2UiLCJhcHBlbmQiLCJDb25zb2xlTGluZVBsb3QiLCJDb25zb2xlTGluZVRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZUhUTUwiLCJsaW5lRGF0YSIsInRvb2x0aXAiLCJDb25zb2xlTGluZVZhbHVlIiwiQ29uc29sZUxpbmVJbnB1dCIsInByb21wdE1lc3NhZ2UiLCJpbnB1dEZvcm0iLCJpbnB1dEJ0biIsImlucHV0R3JvdXAiLCJpbnB1dEJveCIsImlucHV0TXNnIiwibWFrZUludGVyYWN0aXZlIiwiaW5wdXQiLCJidXR0b24iLCJyZXNvbHZlT25DbGljayIsInN1Ym1pdHRlZFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN1Ym1pdEZvcm0iLCJ1c2VySW5wdXR0ZWRWYWx1ZSIsInZhbCIsInF1ZXVlZElucHV0IiwicHVzaCIsInByb3AiLCJjbGljayIsImtleXVwIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsIkNvbnNvbGVMaW5lRXZhbHVhdGUiLCJDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUiLCJ0YWciLCJwcmludGVyVGFnIiwiTUlOSU1VTV9XSURUSCIsIk1JTklNVU1fSEVJR0hUIiwiREVGQVVMVF9IRUlHSFQiLCJoZWlnaHQiLCJjbGVhciIsInJlbW92ZUFsbCIsImxpbmVCdWZmZXIiLCJwbG90QnVmZmVyIiwiZW1wdHkiLCJ0dXJ0bGVMaW5lIiwiVHVydGxlR3JhcGhpY3MiLCJnZXRUdXJ0bGVMaW5lIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImFzc2V0cyIsImxvYWRBc3NldCIsInJlbmRlciIsImN1cnJlbnRQcmludGVyRGltZW5zaW9uIiwic2F2ZVR1cnRsZU91dHB1dCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJwYWdlIiwiZWFjaCIsImF0dHIiLCJzaG93IiwiaGlkZSIsImxpbmVUZXh0IiwiZmx1c2giLCJjaGFyQXQiLCJzcGxpdExpbmVzIiwic3BsaXQiLCJhZGRDb250ZW50IiwiaSIsInBsb3RzIiwiaW1hZ2VEYXRhIiwiaW1hZ2VCdWZmZXIiLCJpbWFnZSIsInZhbHVlIiwicHJpbnRlZFZhbHVlIiwiaW5wdXRCdWZmZXIiLCJzdGFydEV2YWx1YXRpb24iLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiX0lNUE9SVEVEX0RBVEFTRVRTIiwiX0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTIiwic2V0QnV0dG9uTG9hZGVkIiwiYnRuIiwicmVtb3ZlQ2xhc3MiLCJsb2FkZWREYXRhc2V0cyIsInNpbGVudGx5IiwiZWRpdG9yIiwiaW1wb3J0cyIsImRhdGFzZXRzIiwiZm9yRWFjaCIsIkJsb2NrTWlycm9yQmxvY2tFZGl0b3IiLCJFWFRSQV9UT09MUyIsImFwcGx5Iiwic2x1ZyIsIndoZW4iLCJkb25lIiwiZm9yY2VCbG9ja1JlZnJlc2giLCJibG9ja0VkaXRvciIsInJlbWFrZVRvb2xib3giLCJmYWlsIiwiYXJndW1lbnRzIiwiZXJyb3IiLCJhbHdheXMiLCJmaW5hbGl6ZVN1YnNjcmlwdGlvbnMiLCJ1cmxfcmV0cmlldmFscyIsInJvb3QiLCJpbXBvcnREYXRhc2V0cyIsImdldERhdGFzZXQiLCJnZXRTY3JpcHQiLCJnZXRDb21wbGV0ZSIsImdldFNrdWxwdCIsImJ1aWx0aW5GaWxlcyIsImdldEJsb2NrbHkiLCJ0ZXh0VG9CbG9ja3MiLCJoaWRkZW5JbXBvcnRzIiwiZ2V0SlNPTiIsImJsb2NrcHkiLCJkb2N1bWVudGF0aW9uIiwiYm9keSIsIk9iamVjdCIsImtleXMiLCJzb3J0Iiwic2x1Z2dlZE5hbWUiLCJ0aXRsZU5hbWUiLCJpbWdTcmMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiYXBwZW5kVG8iLCJESUFMT0dfSFRNTCIsInRpdGxlVGFnIiwiYm9keVRhZyIsImZvb3RlclRhZyIsIm9rYXlCdXR0b24iLCJ5ZXMiLCJtb2RhbCIsImNsb3NlIiwib25jbG9zZSIsImRyYWdnYWJsZSIsIm9uIiwiY29uZmlybSIsIm5vIiwieWVzVGV4dCIsIkFTU0lHTk1FTlRfVkVSU0lPTl9DSEFOR0VEIiwiRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCIsInJlYXNvbiIsIlNDUkVFTlNIT1RfQkxPQ0tTIiwiRVJST1JfVVBEQVRJTkdfU1VCTUlTU0lPTl9TVEFUVVMiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVOYW1lIiwicmVhZEFzVGV4dCIsInNsdWdnaWZ5IiwicmVwbGFjZSIsImV4dGVuc2lvbiIsIm1pbWV0eXBlIiwiYmxvYiIsIkJsb2IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsInRlbXBvcmFyeURvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiQWJzdHJhY3RFZGl0b3IiLCJjaGFuZ2VFZGl0b3IiLCJ3YXRjaEZpbGUiLCJ1cGRhdGVkIiwib25GaWxlVXBkYXRlZCIsImRlbGV0ZWQiLCJvbkZpbGVEZWxldGVkIiwibmV3RmlsZW5hbWUiLCJvbGRFZGl0b3IiLCJnZXRGaWxlIiwidHJhY2tDdXJyZW50RmlsZSIsIm5ld0VkaXRvciIsInN0b3BXYXRjaGluZ0ZpbGUiLCJyZXN1bHQiLCJoYW5kbGUiLCJwYXJzZUZpbGVuYW1lIiwiQVNTSUdOTUVOVF9TRVRUSU5HUyIsImdldERvY3VtZW50YXRpb24iLCJtYWtlU3RhcnRWaWV3VGFiIiwiaWNvbiIsIm1vZGUiLCJBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MIiwiZmlsdGVyIiwic2V0dGluZyIsInByZXR0eU5hbWUiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJqb2luIiwiQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCIsIkJMT0NLIiwic2F2ZUFzc2lnbm1lbnRTZXR0aW5ncyIsImNsaWVudE5hbWUiLCJzZXJ2ZXJOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwic3RhcnRfdmlldyIsImZpZWxkVHlwZSIsImNvbmZpZ1ZhbHVlIiwiQXNzaWdubWVudFNldHRpbmdzVmlldyIsImRpcnR5IiwiY3VycmVudExpc3RlbmVyIiwidXBkYXRlSGFuZGxlIiwibmV3Q29udGVudHMiLCJBc3NpZ25tZW50U2V0dGluZ3MiLCJleHRlbnNpb25zIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsIk1BUktET1dOX0VESVRPUl9IVE1MIiwiTWFya2Rvd25FZGl0b3JWaWV3IiwibWRlIiwiZWxlbWVudCIsImF1dG9Eb3dubG9hZEZvbnRBd2Vzb21lIiwiZm9yY2VTeW5jIiwibWluSGVpZ2h0IiwicmVuZGVyaW5nQ29uZmlnIiwiY29kZVN5bnRheEhpZ2hsaWdodGluZyIsImluZGVudFdpdGhUYWJzIiwidGFiU2l6ZSIsImN1cnJlbnRTdWJzY3JpcHRpb24iLCJjb2RlbWlycm9yIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJkaXNwb3NlIiwib2ZmIiwiTWFya2Rvd25FZGl0b3IiLCJtYWtlVGFiIiwiUFlUSE9OX0VESVRPUl9IVE1MIiwiSElTVE9SWV9UT09MQkFSX0hUTUwiLCJjb252ZXJ0SXB5bmJUb1B5dGhvbiIsImlweW5iIiwiaXNVc2FibGUiLCJjZWxsIiwiY2VsbF90eXBlIiwic291cmNlIiwibWFrZVB5dGhvbiIsImNlbGxzIiwiUHl0aG9uRWRpdG9yVmlldyIsIkJsb2NrTWlycm9yIiwidG9vbGJveCIsInJlYWRPbmx5IiwibWFrZVN1YnNjcmlwdGlvbnMiLCJsaW5lRXJyb3JTdWJzY3JpcHRpb24iLCJsaW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uIiwibWFrZVBlckFzc2lnbm1lbnRTdWJzY3JpcHRpb25zIiwid29ya3NwYWNlIiwiY29uZmlndXJlQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiZW5hYmxlZCIsImNhbGxiYWNrIiwib2xkRmlsZW5hbWUiLCJjdXJyZW50Qk1MaXN0ZW5lciIsImFkZENoYW5nZUxpc3RlbmVyIiwiaXNQYXJzb25zIiwibGluZXMiLCJzZXRIaWdobGlnaHRlZExpbmVzIiwiZGVsZXRlRmlsZUxvY2FsbHlfIiwic2V0Q29kZSIsImNsZWFySGlnaGxpZ2h0ZWRMaW5lcyIsImdldENvZGUiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsImNsZWFyTGluZVN1YnNjcmlwdGlvbnMiLCJzZXRNb2RlIiwiZW5hYmxlQmxvY2tzIiwib25seVVwbG9hZHMiLCJpc1JlYWRPbmx5IiwiZW5kc1dpdGgiLCJQeXRob25FZGl0b3IiLCJUQUdTX0VESVRPUl9IVE1MIiwiVGFnc0VkaXRvclZpZXciLCJUYWdzRWRpdG9yIiwiVEVYVF9FRElUT1JfSFRNTCIsIlRleHRFZGl0b3JWaWV3IiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsInNob3dDdXJzb3JXaGVuU2VsZWN0aW5nIiwibGluZU51bWJlcnMiLCJmaXJzdExpbmVOdW1iZXIiLCJpbmRlbnRVbml0IiwiZXh0cmFLZXlzIiwiY20iLCJibHVyIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsIlRleHRFZGl0b3IiLCJFZGl0b3JzRW51bSIsIlNVQk1JU1NJT04iLCJBU1NJR05NRU5UIiwiSU5TVFJVQ1RJT05TIiwiT05fUlVOIiwiT05fQ0hBTkdFIiwiT05fRVZBTCIsIlNUQVJUSU5HX0NPREUiLCJTQU1QTEVfU1VCTUlTU0lPTlMiLCJJTlNUUlVDVE9SX0ZJTEUiLCJTUEVDSUFMX05BTUVTUEFDRVMiLCJBVkFJTEFCTEVfRURJVE9SUyIsIkVESVRPUlNfSFRNTCIsInJlZ2lzdGVyZWRfIiwiZXh0ZW5zaW9uc18iLCJieU5hbWVfIiwicmVnaXN0ZXJFZGl0b3IiLCJpbnN0YW5jZSIsImV4aXQiLCJlbnRlciIsInNwYWNlIiwibGFzdEluZGV4T2YiLCJleGVjdXRpb25Nb2RlbCIsImNvbmZpZ3VyYXRpb25zIiwiUnVuQ29uZmlndXJhdGlvbiIsImV2YWwiLCJFdmFsQ29uZmlndXJhdGlvbiIsIk9uUnVuQ29uZmlndXJhdGlvbiIsIk9uQ2hhbmdlQ29uZmlndXJhdGlvbiIsIk9uRXZhbENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmUiLCJnZXRTa3VscHRPcHRpb25zIiwib25FeGVjdXRpb25CZWdpbiIsIm9uRXhlY3V0aW9uRW5kIiwicmVwb3J0IiwicmVzZXRTdHVkZW50TW9kZWwiLCJyZXNldFJlcG9ydHMiLCJyZXNldEV4ZWN1dGlvbkJ1ZmZlciIsInRoZW4iLCJmYWlsdXJlIiwiZGlzYWJsZUZlZWRiYWNrIiwic2hvd0Vycm9ycyIsImV4ZWN1dGlvbkVuZF8iLCJldmFsdWF0aW9uSW5wdXQiLCJ1c2VySW5wdXQiLCJtaXNjZXZhbCIsImFzeW5jVG9Qcm9taXNlIiwiaW1wb3J0TWFpbldpdGhCb2R5IiwiRklMRU5BTUUiLCJwcm9ncmFtcyIsInRyaW0iLCJzYXZlQ29kZSIsInZlcmlmeUNvZGUiLCJ1cGRhdGVQYXJzZSIsInJ1bkluc3RydWN0b3JDb2RlIiwibW9kdWxlIiwiZXhlY3V0aW9uUmVwb3J0cyIsInByZXNlbnRGZWVkYmFjayIsIiRkIiwiRU1QVFlfTU9EVUxFIiwiQ29uZmlndXJhdGlvbiIsImluQnJvd3NlciIsIm9wZW5GaWxlIiwicmVxdWVzdHNHZXQiLCJ0aW1lb3V0Iiwib3BlblVSTCIsIl9fZnV0dXJlX18iLCJweXRob24zIiwicmVhZCIsImltcG9ydEZpbGUiLCJmaWxld3JpdGUiLCJ3cml0ZUZpbGUiLCJwcmludCIsImlucHV0ZnVuIiwiaW5wdXRmdW5UYWtlc1Byb21wdCIsImltYWdlUHJveHkiLCJnZXRJbWFnZVByb3h5IiwicmV0YWluR2xvYmFscyIsIndhcm4iLCJtb2NrVXJsRGF0YSIsImJ1aWx0aW4iLCJJT0Vycm9yIiwiaGFzT3duUHJvcGVydHkiLCJmaWxlRGF0YSIsInJlYWRGaWxlIiwiRXJyb3IiLCJwb3AiLCJhZnRlclNpbmdsZUV4ZWN1dGlvbiIsInByaW50VmFsdWUiLCJyZW1hcFRvSnMiLCJfIiwiJHIiLCJyZWplY3QiLCJ4IiwiRkFJTEVEIiwiU3R1ZGVudENvbmZpZ3VyYXRpb24iLCJVVElMSVRZX01PRFVMRV9DT0RFIiwiJHNrX21vZF9pbnN0cnVjdG9yIiwiSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXQiLCJmb3VuZCIsInNlYXJjaEZvckZpbGUiLCJPU0Vycm9yIiwiY2xlYXJUaW1lb3V0IiwiV1JBUF9JTlNUUlVDVE9SX0NPREUiLCJzdHVkZW50Q29kZSIsImluc3RydWN0b3JDb2RlIiwicXVpY2siLCJpc1NhZmUiLCJzYWZlQ29kZSIsImluZGVudGVkQ29kZSIsImluZGVudCIsImRpc2FibGVUaWZhIiwic3R1ZGVudENvZGVTYWZlIiwiZXZhbHVhdGlvbiIsImR1bW15T3V0U2FuZGJveCIsImxpbmVPZmZzZXQiLCJORVdfTElORV9SRUdFWCIsIlNVQ0NFU1MiLCJTQ09SRSIsIm9sZFNjb3JlIiwiSElERSIsInNjcm9sbGluZyIsInNjcm9sbFRvQm90dG9tIiwidHAkbmFtZSIsInByZXNlbnRJbnRlcm5hbEVycm9yIiwidGlmYUFuYWx5c2lzIiwiT25TYW1wbGVDb25maWd1cmF0aW9uIiwiQm9vbGVhbiIsImZpbmlzaFR1cnRsZXMiLCJiZWdpbkV2YWwiLCJwYXJzZXIiLCJ2ZXJpZmllciIsIlNhbXBsZUNvbmZpZ3VyYXRpb24iLCJleGVjTGltaXRGdW5jdGlvbiIsImRpc2FibGVUaW1lb3V0IiwiSW5maW5pdHkiLCJpc0ZvcmJpZGRlbiIsInZhcmlhYmxlcyIsImxvY2FscyIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJwYXJzZUdsb2JhbHMiLCJwcm9wZXJ0aWVzIiwibW9kdWxlcyIsImFzdCIsInZpc2l0ZWRMaW5lcyIsIlNldCIsInZpc2l0Qm9keSIsIm5vZGUiLCJsaW5lbm8iLCJzdGF0ZW1lbnQiLCJvcmVsc2UiLCJmaW5hbGJvZHkiLCJBcnJheSIsImZyb20iLCJhc3RGcm9tUGFyc2UiLCJjc3QiLCJmbGFncyIsImdldExpbmVzIiwicHJlc2VudFJ1bkVycm9yIiwiRkVFREJBQ0tfSFRNTCIsImZlZWRiYWNrTW9kZWwiLCJvZmZzZXQiLCJ0b3AiLCJ2aXNpYmlsaXR5QnVmZmVyIiwidG9wT2ZFbGVtZW50IiwiYm90dG9tT2ZFbGVtZW50IiwiYm90dG9tT2ZTY3JlZW4iLCJ0b3BPZlNjcmVlbiIsImV4ZWN1dGlvblJlc3VsdHMiLCJNRVNTQUdFIiwiQ0FURUdPUlkiLCJMQUJFTCIsIkRBVEEiLCJoaWRlU2NvcmUiLCJmaW5kRmlyc3RFcnJvckxpbmUiLCJzdHVkZW50UmVwb3J0IiwidW5jb3ZlcmVkTGluZXMiLCJ1cGRhdGVGZWVkYmFjayIsIm5vdGlmeUZlZWRiYWNrVXBkYXRlIiwibXNnIiwiYXJncyIsInYiLCJjb252ZXJ0U2t1bHB0RXJyb3IiLCJmaWxlbmFtZUV4ZWN1dGVkIiwidHJhY2ViYWNrIiwiZnJhbWUiLCJzY29wZSIsImZlZWRiYWNrRGF0YSIsInBvc2l0aW9uIiwiZnJpZW5kbHlOYW1lIiwiaGlkZUlmRW1wdHkiLCJub3RJbnN0cnVjdG9yIiwiaW5zdHJ1Y3RvckZpbGVDbGFzcyIsImhpZGVJZk5vdEluc3RydWN0b3IiLCJGSUxFU19IVE1MIiwiTkVXX0lOU1RSVUNUT1JfRklMRV9ESUFMT0dfSFRNTCIsIlNUQVJUSU5HX0ZJTEVTIiwiQkFTSUNfTkVXX0ZJTEVTIiwiSU5TVFJVQ1RPUl9ESVJFQ1RPUlkiLCJTVFVERU5UX0RJUkVDVE9SWSIsIlNlYXJjaE1vZGVzIiwiRVZFUllXSEVSRSIsIlNUQVJUX1dJVEhfSU5TVFJVQ1RPUiIsIk9OTFlfU1RVREVOVF9GSUxFUyIsIkRFTEVUQUJMRV9TSU1QTEVfRklMRVMiLCJCbG9ja1B5RmlsZSIsIm93bmVyIiwibWFrZU1vY2tNb2RlbEZpbGUiLCJjb25jYXRlbmF0ZWRGaWxlIiwibW9kZWxGaWxlTGlzdCIsIm1vZGVsRmlsZXMiLCJjcmVhdGVDb25jYXRlbmF0ZWRGaWxlIiwiZmlsZXNfIiwibW91bnRGaWxlcyIsIndhdGNoTW9kZWwiLCJ3YXRjaGVzXyIsInZpc2libGl0eSIsInRvZ2dsZSIsImZpbGVzeXN0ZW0iLCJmaWxlQXJyYXkiLCJjaGFuZ2VzIiwiY2hhbmdlIiwibW9kZWxGaWxlIiwibm90aWZ5V2F0Y2hlcyIsIm9ic2VydmVJbkFycmF5XyIsImFycmF5IiwiY29kZUJ1bmRsZSIsImV4aXN0aW5nRmlsZSIsIm9ic2VydmVGaWxlXyIsInN0dWRlbnRTZWFyY2giLCJzZWFyY2hNb2RlIiwic3BlY2lhbEZpbGUiLCJzZWFyY2hGb3JTcGVjaWFsRmlsZXNfIiwic3R1ZGVudFZlcnNpb24iLCJzZWFyY2hGb3JGaWxlSW5MaXN0XyIsImdlbmVyYXRlZFZlcnNpb24iLCJkZWZhdWx0VmVyc2lvbiIsImZpcnN0RGVmaW5lZFZhbHVlIiwiaW5zdHJ1Y3RvclZlcnNpb24iLCJoaWRkZW5WZXJzaW9uIiwic3RhcnRpbmdWZXJzaW9uIiwibW9kZWxMaXN0Iiwia2luZCIsImZpbGV0eXBlIiwibmFtZXNwYWNlIiwiZXh0ZW5zaW9uUmVnZXgiLCJleGVjIiwicHJlZml4Iiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJGT09URVJfSFRNTCIsImN1cnJlbnRJZCIsImVkaXRFdmVudHMiLCJzZWxlY3RvciIsImVkaXRJZCIsImVudHJ5IiwiZmlsZV9wYXRoIiwiZXZlbnRfdHlwZSIsIlJFTUFQX0VWRU5UX1RZUEVTIiwiZGlzcGxheWVkIiwicHJldHR5UHJpbnREYXRlVGltZSIsImNsaWVudF90aW1lc3RhbXAiLCJkaXNhYmxlIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJpc0VkaXRFdmVudCIsImV2dCIsInBhcnNlSW50IiwibW9udGhOYW1lcyIsIndlZWtEYXlzIiwiaXNTYW1lRGF5Iiwic2Vjb25kIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ0aW1lU3RyaW5nIiwibm93IiwiRGF0ZSIsInBhc3QiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJkYXlTdHIiLCJnZXREYXkiLCJtb250aFN0ciIsImRhdGUiLCJnZXRIaXN0b3J5IiwicmV2ZXJzZSIsInJlZHVjZSIsImNvbXBsZXRlIiwiZWxlbSIsImNvbXBsZXRlX3N0ciIsInRpbWUiLCJuZXdfbGluZSIsImhpZ2hsaWdodFRpbWVvdXQiLCJibG9jayIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsImlzRnVsbHNjcmVlbiIsInBhcmVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwiZXJyIiwiY3NzIiwiZXhpdEZ1bGxzY3JlZW4iLCJUUkFDRV9IVE1MIiwiUkVUUllJTkciLCJPRkZMSU5FIiwic3RvcmFnZSIsInF1ZXVlIiwiZ2V0RGVmYXVsdCIsIk1BWF9RVUVVRV9TSVpFIiwiVElNRVJfREVMQVkiLCJGQUlMX0RFTEFZIiwidGltZXJzIiwib3ZlcmxheSIsImJsb2NraW5nQXR0ZW1wdHMiLCJjYWNoZWRGaWxlbmFtZXMiLCJjcmVhdGVTdWJzY3JpcHRpb25zIiwiY2hlY2tDYWNoZXMiLCJjaGVja0lQIiwib2xkSVAiLCJpcCIsInNldCIsIl9wb3N0TGF0ZXN0UmV0cnkiLCJwdXNoQW55UXVldWVkIiwiX3Bvc3RSZXRyeSIsImNyZWF0ZUZpbGVTdWJzY3JpcHRpb24iLCJjcmVhdGVFdmVudExvZ3MiLCJvbmJsdXIiLCJvbmZvY3VzIiwiY3JlYXRlU2VydmVyRGF0YSIsIm1pY3Jvc2Vjb25kcyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInNob3dPdmVybGF5IiwiYXR0ZW1wdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoaWRlT3ZlcmxheSIsIl9lbnF1ZXVlRGF0YSIsImNhY2hlIiwiX2RlcXVldWVEYXRhIiwic3BsaWNlIiwiZGVsYXkiLCJwb3N0UmVxdWVzdCIsInBvc3QiLCJ0ZXh0U3RhdHVzIiwicmVxdWVzdCIsImNhY2hlZFRpbWUiLCJfcG9zdEJsb2NraW5nIiwiYXR0ZW1wdHMiLCJlcnJvclRocm93biIsImxvYWRBc3NpZ25tZW50RGF0YV8iLCJFUlJPUl9TQVZJTkdfQVNTSUdOTU5FTlQiLCJkaXJlY3RvcnkiLCJuZXdTdGF0dXMiLCJwb3N0U3RhdHVzQ2hhbmdlIiwiZXJyb3JDYWxsYmFjayIsImxvYWRfZmlsZSIsImhpZGRlbk92ZXJyaWRlIiwiZm9yY2VVcGRhdGUiLCJnZXRQbmdGcm9tQmxvY2tzIiwicG5nRGF0YSIsIm1vZCIsIm5vbmUiLCJub25lJCIsInByaW9yIiwidGltZWl0IiwiZnVuYyIsInB5Q2hlY2tBcmdzIiwiZGlmZmVyZW5jZSIsImRlYnVnIiwiZ2V0X291dHB1dCIsIml0ZW0iLCJ0b1NrdWxwdCIsImxpc3QiLCJyZXNldF9vdXRwdXQiLCJxdWV1ZV9pbnB1dCIsInB5Q2hlY2tUeXBlIiwiY2hlY2tTdHJpbmciLCJnZXRfcHJvZ3JhbSIsImdldF9ldmFsdWF0aW9uIiwidHJhY2VfbGluZXMiLCJnZXRfc3R1ZGVudF9lcnJvciIsInR1cGxlIiwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yIiwiYmFja3VwVGltZSIsImxpbWl0X2V4ZWN1dGlvbl90aW1lIiwiZXhlY1N0YXJ0IiwidW5saW1pdF9leGVjdXRpb25fdGltZSIsInN1cHByZXNzX3Njcm9sbGluZyIsImdldF9wbG90cyIsIm91dHB1dHMiLCJncmFwaCIsInBsb3QiLCJuZXdQbG90IiwieSIsIlN0dWRlbnREYXRhIiwiYnVpbGRDbGFzcyIsIiRnYmwiLCIkbG9jIiwiX19pbml0X18iLCJuZXdEaWN0IiwiZGljdCIsImFic3RyIiwic2F0dHIiLCJzdHIiLCJvYmplY3RTZXRJdGVtIiwidW5maXhSZXNlcnZlZCIsImNhbGxfZiIsImt3YSIsInB5Q2hlY2tBcmdzTGVuIiwiY2FsbCIsImt3YXJncyIsImJ1aWx0aW5zIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXRzIiwibXAkbG9va3VwIiwidHAkZ2V0YXR0ciIsImZ1bmN0aW9uT2JqZWN0IiwidHAkY2FsbCIsImNvX2t3YXJncyIsImNvX25hbWUiLCJnZXRfbmFtZXNfYnlfdHlwZSIsImV4Y2x1ZGVfYnVpbHRpbnMiLCJjaGVja0Jvb2wiLCJwcm9wZXJ0eSIsImdldF92YWx1ZXNfYnlfdHlwZSIsImNhbGxzaW1PclN1c3BlbmQiLCJnZXRfc3R1ZGVudF9kYXRhIiwic2V0X2luc3RydWN0aW9ucyIsIm5ld0luc3RydWN0aW9ucyIsImdldF9tb2RlbF9pbmZvIiwiTE9DQUxfU1RPUkFHRV9SRUYiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIl9kYXRhIiwiU3RyaW5nIiwiZ2V0SXRlbSIsImlzX25ldyIsInNlcnZlcl90aW1lIiwic3RvcmVkX3RpbWUiLCJJR05PUkVEX0dMT0JBTFMiLCJwYXJzZWQiLCJwYXJzZVZhbHVlIiwiX19uYW1lX18iLCJmdWxsTGVuZ3RoIiwiZnVuY19jb2RlIiwiY29fdmFybmFtZXMiLCJzcSRsZW5ndGgiLCJib29sIiwibm1iZXIiLCJza1R5cGUiLCJpbnRfIiwiZmxvYXRfIiwiTnVtYmVyIiwiYXJyYXlDb250YWlucyIsIm5lZWRsZSIsImhheXN0YWNrIiwiYXJyYXlVbmlxdWUiLCJhIiwiY29uY2F0IiwiaiIsImV4cGFuZEFycmF5IiwiYWRkQXJyYXkiLCJyZW1vdmVBcnJheSIsImNvcHlBcnJheSIsImNsb25lTm9kZSIsImNsb25lIiwibm9kZVR5cGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm5vZGVWYWx1ZSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicmFuZG9tSW50ZWdlciIsImZsb29yIiwicmFuZG9tIiwiQmxvY2tseSIsIldvcmtzcGFjZVN2ZyIsInNodWZmbGUiLCJtZXRyaWNzIiwiZ2V0TWV0cmljcyIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJibG9ja3MiLCJnZXRUb3BCbG9ja3MiLCJtYXhpbWFsX2luY3JlYXNlIiwiZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSIsIm1vdmVCeSIsIm1vdmVFbGVtZW50cyIsIm1vdmVDaGVjayIsImlzU2tCdWlsdGluIiwib2JqIiwibG5nIiwiaXNBc3ROb2RlIiwibWl4ZWRSZW1hcFRvUHkiLCJrIiwia3ZzIiwiYXJyIiwic3VidmFsIiwiYXNzayQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFF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QUNBSyxXQUFHLENBQUN0d0IsSUFBSixDQUFTb3dCLGNBQWMsQ0FBQ0MsQ0FBRCxDQUF2QixFQUZXLENBR1g7O0FBQ0FDLFdBQUcsQ0FBQ3R3QixJQUFKLENBQVNvd0IsY0FBYyxDQUFDSCxHQUFHLENBQUNJLENBQUQsQ0FBSixDQUF2QjtBQUNILE9BUmdCLENBU2pCOzs7QUFDQSxhQUFPLElBQUk3eUIsRUFBRSxDQUFDNFksT0FBSCxDQUFXa1UsSUFBZixDQUFvQmdHLEdBQXBCLENBQVA7QUFDSCxLQVhELE1BV0s7QUFDRCxhQUFPTCxHQUFQO0FBQ0g7QUFDSixHQWZNLE1BZUEsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDaEMsV0FBTyxJQUFJenlCLEVBQUUsQ0FBQzRZLE9BQUgsQ0FBV3FVLEdBQWYsQ0FBbUJ3RixHQUFuQixDQUFQO0FBQ0gsR0FGTSxNQUVBLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2hDLFdBQU96eUIsRUFBRSxDQUFDNFksT0FBSCxDQUFXcWEsS0FBWCxDQUFpQlIsR0FBakIsQ0FBUDtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU9BLEdBQVAsS0FBZSxTQUFuQixFQUE4QjtBQUNqQyxXQUFPLElBQUl6eUIsRUFBRSxDQUFDNFksT0FBSCxDQUFXa1gsSUFBZixDQUFvQjJDLEdBQXBCLENBQVA7QUFDSCxHQUZNLE1BRUEsSUFBRyxPQUFPQSxHQUFQLEtBQWUsVUFBbEIsRUFBOEI7QUFDakMsV0FBTyxJQUFJenlCLEVBQUUsQ0FBQzRZLE9BQUgsQ0FBV3FVLEdBQWYsQ0FBbUJ3RixHQUFHLENBQUM5bEMsSUFBdkIsQ0FBUDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUN2UEQsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoiYmxvY2tweS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcImtvXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmxvY2tweVwiLCBbXCJqUXVlcnlcIiwgXCJrb1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJibG9ja3B5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwia29cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJsb2NrcHlcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJrb1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tweS5qc1wiKTtcbiIsImltcG9ydCBcIi4vY3NzL2Jsb2NrcHkuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Jvb3RzdHJhcF9yZXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlV3JhcHBlcn0gZnJvbSBcInN0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzRW51bX0gZnJvbSBcImVkaXRvcnMuanNcIjtcclxuaW1wb3J0IHtEaXNwbGF5TW9kZXN9IGZyb20gXCJlZGl0b3IvcHl0aG9uLmpzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCJzZXJ2ZXIuanNcIjtcclxuaW1wb3J0IHttYWtlSW50ZXJmYWNlLCBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zLCBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnN9IGZyb20gXCJpbnRlcmZhY2UuanNcIjtcclxuaW1wb3J0IHtFZGl0b3JzfSBmcm9tIFwiZWRpdG9ycy5qc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQmxvY2tQeUZpbGVTeXN0ZW0sXHJcbiAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIG1ha2VNb2RlbEZpbGUsXHJcbiAgICBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZSxcclxuICAgIFVOREVMRVRBQkxFX0ZJTEVTLFxyXG4gICAgVU5SRU5BTUFCTEVfRklMRVNcclxufSBmcm9tIFwiLi9maWxlc1wiO1xyXG5pbXBvcnQge3VwbG9hZEZpbGUsIGRvd25sb2FkRmlsZX0gZnJvbSBcIi4vZWRpdG9yL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlFbmdpbmV9IGZyb20gXCJlbmdpbmUuanNcIjtcclxuaW1wb3J0IHtCbG9ja1B5VHJhY2V9IGZyb20gXCIuL3RyYWNlXCI7XHJcbmltcG9ydCB7QmxvY2tQeUNvbnNvbGV9IGZyb20gXCIuL2NvbnNvbGVcIjtcclxuaW1wb3J0IHtCbG9ja1B5RmVlZGJhY2t9IGZyb20gXCJmZWVkYmFjay5qc1wiO1xyXG5pbXBvcnQge0Jsb2NrUHlTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlEaWFsb2d9IGZyb20gXCIuL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2xvYWRBc3NpZ25tZW50U2V0dGluZ3MsIG1ha2VBc3NpZ25tZW50U2V0dGluZ3NNb2RlbH0gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtCbG9ja1B5Q29yZ2lzLCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMsIF9JTVBPUlRFRF9EQVRBU0VUU30gZnJvbSBcIi4vY29yZ2lzXCI7XHJcbmltcG9ydCB7QmxvY2tQeUhpc3Rvcnl9IGZyb20gXCIuL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCB7X0lNUE9SVEVEX0NPTVBMRVRFX0RBVEFTRVRTLCBfSU1QT1JURURfREFUQVNFVFN9O1xyXG5cclxuLyoqXHJcbiAqIE1ham9yIGVudHJ5IHBvaW50IGZvciBjcmVhdGluZyBhIEJsb2NrUHkgaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1B5IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gLSBVc2VyIGxldmVsIHNldHRpbmdzIChlLmcuLCB3aGF0IGVkaXRvciBtb2RlLCB3aGV0aGVyIHRvIG11dGUgc2VtYW50aWMgZXJyb3JzLCBldGMuKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2lnbm1lbnQgLSBBc3NpZ25tZW50IGxldmVsIHNldHRpbmdzIChkYXRhIGFib3V0IHRoZSBsb2FkZWQgYXNzaWdubWVudCwgdXNlciwgc3VibWlzc2lvbiwgZXRjLilcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdWJtaXNzaW9uIC0gSW5jbHVkZXMgdGhlIHNvdXJjZSBjb2RlIG9mIGFueSBwcm9ncmFtcyB0byBiZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbiwgYXNzaWdubWVudCwgc3VibWlzc2lvbikge1xyXG4gICAgICAgIHRoaXMuaW5pdE1vZGVsKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIGlmIChhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NpZ25tZW50KGNvbmZpZ3VyYXRpb24sIGFzc2lnbm1lbnQsIHN1Ym1pc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgQmxvY2tQeSBvYmplY3QgYnkgaW5pdGlhbGl6aW5nIGl0cyBpbnRlcmZhY2UsXHJcbiAgICAgKiBtb2RlbCwgYW5kIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLmluaXRVdGlsaXRpZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlbE1ldGhvZHMoKTtcclxuICAgICAgICB0aGlzLnR1cm5PbkhhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMubWFrZUV4dHJhU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSBkZWZhdWx0IHZhbHVlIG9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHVwIGEgdmFsdWUgZm9yXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlIC0gaWYgdGhlIGtleSBpcyBub3QgZm91bmQgYW55d2hlcmUsIHVzZSB0aGlzIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGdldFNldHRpbmcoa2V5LCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBpZiAoa2V5IGluIHRoaXMuaW5pdGlhbENvbmZpZ3VyYXRpb25fKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sb2NhbFNldHRpbmdzXy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFNldHRpbmdzXy5nZXQoa2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtb2RlbCB0byBpdHMgZGVmYXVsdHMuXHJcbiAgICAgKlxyXG4gICAgICogQ2F0ZWdvcmllczpcclxuICAgICAqICAgKiB1c2VyOiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IHVzZXIgKHN0b3JlZCB0byBzZXJ2ZXIpXHJcbiAgICAgKiAgICogYXNzaWdubWVudDogdmFsdWVzIGZvciB0aGUgY3VycmVudCBhc3NpZ25tZW50IChzdG9yZWQgdG8gc2VydmVyKVxyXG4gICAgICogICAqIHN1Ym1pc3Npb246IHZhbHVlcyBmb3IgdGhlIGN1cnJlbnQgc3VibWlzc2lvbiAoc3RvcmVkIHRvIHNlcnZlcilcclxuICAgICAqICAgKiBkaXNwbGF5OiBmbGFncyByZWxhdGVkIHRvIGN1cnJlbnQgdmlzaWJpbGl0eSAoc3RvcmVkIHRvIGxvY2FsU2V0dGluZ3MpXHJcbiAgICAgKiAgICogc3RhdHVzOiBtZXNzYWdlcyByZWxhdGVkIHRvIGN1cnJlbnQgc3RhdHVzIChub3Qgc3RvcmVkKVxyXG4gICAgICogICAqIGV4ZWN1dGlvbjogdmFsdWVzIHJlbGF0ZWQgdG8gbGFzdCBydW4gKG5vdCBzdG9yZWQpXHJcbiAgICAgKiAgICogY29uZmlndXJhdGlvbjogY29uc3RhbnQgdmFsdWVzIHJlbGF0ZWQgdG8gc2V0dXAgKG5vdCBzdG9yZWQpXHJcbiAgICAgKi9cclxuICAgIGluaXRNb2RlbChjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgLy8gQ29ubmVjdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgdGhpcy5sb2NhbFNldHRpbmdzXyA9IG5ldyBMb2NhbFN0b3JhZ2VXcmFwcGVyKFwibG9jYWxTZXR0aW5nc1wiKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uXyA9IGNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJ1c2VyLmlkXCJdKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIubmFtZVwiXSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgeW91IGFyZSBhbiBPd25lciAoY2FuIG1vZGlmeSB0aGUgYXNzaWdubWVudCksIEdyYWRlciAoY2FuIHZpZXdcclxuICAgICAgICAgICAgICAgICAqIHRoZSBhc3NpZ25tZW50cycgaW5mb3JtYXRpb24pIG9yIFN0dWRlbnQgKGNhbiBub3Qgc2VlIGFueSBpbnN0cnVjdG9yIHN0dWZmKS5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByb2xlOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInVzZXIucm9sZVwiLCBcIm93bmVyXCIpKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQ3VycmVudCBjb3Vyc2UgZm9yIHRoaXMgdXNlclxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1widXNlci5jb3Vyc2VfaWRcIl0pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBDdXJyZW50IGFzc2lnbm1lbnQgZ3JvdXAgdGhhdCB0aGlzIHVzZXIgaXMgaW5zaWRlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcInVzZXIuZ3JvdXBfaWRcIl0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga28ub2JzZXJ2YWJsZShcIlNjcmF0Y2ggQ2FudmFzXCIpLFxyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBrby5vYnNlcnZhYmxlKFwiV2VsY29tZSB0byBCbG9ja1B5LiBUcnkgZWRpdGluZyBhbmQgcnVubmluZyB0aGUgY29kZSBiZWxvdy5cIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBodW1hbi1mcmllbmRseSBVUkwgdG8gdXNlIGFzIGEgc2hvcnRjdXQgZm9yIHRoaXMgYXNzaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB1cmw6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3YXJuaW5nIG1lc3NhZ2UgaWYgbWF6ZVxyXG4gICAgICAgICAgICAgICAgdHlwZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nQ29kZToga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5zdGFydGluZ19jb2RlXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25SdW46IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fcnVuXCJdIHx8IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQub25fY2hhbmdlXCJdIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAgICAgb25FdmFsOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50Lm9uX2V2YWxcIl0gfHwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICBleHRyYUluc3RydWN0b3JGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3RhcnRpbmdGaWxlczoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgIGZvcmtlZElkOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgZm9ya2VkVmVyc2lvbjoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIG93bmVySWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VJZDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlU3VibWlzc2lvbnM6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICByZXZpZXdlZDoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5yZXZpZXdlZFwiXSksXHJcbiAgICAgICAgICAgICAgICBwdWJsaWM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQucHVibGljXCJdKSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShjb25maWd1cmF0aW9uW1wiYXNzaWdubWVudC5oaWRkZW5cIl0pLFxyXG4gICAgICAgICAgICAgICAgaXBSYW5nZXM6IGtvLm9ic2VydmFibGUoY29uZmlndXJhdGlvbltcImFzc2lnbm1lbnQuaXBfcmFuZ2VzXCJdKSxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VibWlzc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBrby5vYnNlcnZhYmxlKGNvbmZpZ3VyYXRpb25bXCJzdWJtaXNzaW9uLmNvZGVcIl0gfHwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBleHRyYUZpbGVzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICBzY29yZToga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudElkIGluZmVycmVkIGZyb20gYXNzaWdubWVudC5pZFxyXG4gICAgICAgICAgICAgICAgLy8gY291cnNlSWQgaW5mZXJyZWQgZnJvbSB1c2VyLmNvdXJzZUlkXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VySWQgaW5mZXJyZWQgZnJvbSB1c2VyLmlkXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NpZ25tZW50VmVyc2lvbiBpbmZlcnJlZCBmcm9tIGFzc2lnbm1lbnQudmVyc2lvblxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25TdGF0dXM6IGtvLm9ic2VydmFibGUoXCJTdGFydGVkXCIpLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGluZ1N0YXR1czoga28ub2JzZXJ2YWJsZShcIk5vdFJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgb3duZXJJZDoga28ub2JzZXJ2YWJsZShudWxsKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB7XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEN1cnJlbnRseSB2aXNpYmxlIEZpbGUsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBiZSBwcmVzZW50ZWQgd2l0aCB0aGUgaW5zdHJ1Y3RvciBzZXR0aW5ncyBhbmQgZmlsZXNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcImRpc3BsYXkuaW5zdHJ1Y3RvclwiLCBcImZhbHNlXCIpLnRvU3RyaW5nKCk9PT1cInRydWVcIiksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgdGhlIHByaW50ZXIgZnJvbSBzaG93aW5nIHRoaW5nc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBtdXRlUHJpbnRlcjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIChQeXRob24gVmlld3MpIFRoZSBjdXJyZW50IGVkaXRvciBtb2RlLlxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0Rpc3BsYXlNb2Rlc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHl0aG9uTW9kZToga28ub2JzZXJ2YWJsZSh0aGlzLmdldFNldHRpbmcoXCJkaXNwbGF5LnB5dGhvbi5tb2RlXCIsIERpc3BsYXlNb2Rlcy5TUExJVCkpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCBIaXN0b3J5IG1vZGUgaXMgZW5nYWdlZC5cclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtib29sfVxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5TW9kZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGJlIGF1dG8tc2F2aW5nIGNoYW5nZXMgaW4gUHl0aG9uIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgICogSWYgYW4gaW50ZWdlciwgc3BlY2lmaWVzIHRoZSBkZWxheSB0aGF0IHNob3VsZCBiZSB1c2VkIChtaWNyb3NlY29uZHMpLlxyXG4gICAgICAgICAgICAgICAgICogVGhpcyBpcyBuZXZlciBvbiBpbiBub24tUHl0aG9uIGVkaXRvcnMuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbHxpbnR9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGF1dG9TYXZlOiBrby5vYnNlcnZhYmxlKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29uc29sZSBpcyBmdWxsIHdpZHRoIGFuZCBmZWVkYmFjayBpcyBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYmlnQ29uc29sZToga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFRoZSBoZWlnaHQgdG8gdXNlIGZvciB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgICAqICAgIElmIG51bGwsIHRoZW4gbGV0IHRoZSBoZWlnaHQgcmVtYWluIHVuY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICogICAgSWYgYSBudW1iZXIsIHRoZW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzQ29uc29sZUhlaWdodDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb25zb2xlSGVpZ2h0OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGljaCBwYW5lbCB0byBzaG93IGluIHRoZSBzZWNvbmQgcm93J3Mgc2Vjb25kIGNvbHVtblxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge1NlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUm93U2Vjb25kUGFuZWw6IGtvLm9ic2VydmFibGUoU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLkZFRURCQUNLKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdG8gYmUgdHJhY2luZyB0aGUgY29kZSByaWdodCBub3dcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJhY2VFeGVjdXRpb246IGtvLm9ic2VydmFibGUoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgbGlzdCBvZiBwcm9taXNlcyB0byBzdGlsbCByZXNvbHZlIHdoaWxlIGxvYWRpbmcgZGF0YXNldHNcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxQcm9taXNlPn1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RhdGFzZXRzOiBrby5vYnNlcnZhYmxlQXJyYXkoW10pLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBUaGUgdGVtcG9yYXJ5IGNoYW5nZWQgdmFsdWUgb2YgdGhlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gY2hhbmdlZCBmcm9tIHdoYXQgaXMgaW4gdGhlIGFzc2lnbm1lbnRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZEluc3RydWN0aW9uczoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQSBob2xkZXIgZm9yIHRoZSB0aW1lciB0byB0cmlnZ2VyIG9uLWNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck9uQ2hhbmdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IGZlZWRiYWNrIGFuZCBvdXRwdXQgY29ycmVzcG9uZHMgdG8gdGhlIGN1cnJlbnQgc3VibWlzc2lvbi5cclxuICAgICAgICAgICAgICAgICAqIFRoaXMgd291bGQgYmUgZmFsc2UgaWYgdGhlcmUgaXMgbm8gZmVlZGJhY2svb3V0cHV0IChpLmUuLCBjb2RlIGhhcyBub3QgYmVlbiBydW4pLFxyXG4gICAgICAgICAgICAgICAgICogb3IgaWYgdGhlIHVzZXIgaGFzIG1vZGlmaWVkIHRoZSBzdWJtaXNzaW9uIGFmdGVyIHRoZSBsYXN0IHJ1biAoZS5nLiwgYnkgZWRpdGluZ1xyXG4gICAgICAgICAgICAgICAgICogdGhlIHRleHQpLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBkaXJ0eVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUodHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqICBXaGV0aGVyIG9yIG5vdCB0byBtYWtlIHRoZSBCbG9ja1B5IGVsZW1lbnQgaW4gRlVMTCBTQ1JFRU4gbW9kZS4gU2FkbHksIG5vdCBmdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgKiAgd2l0aGluIHRoZSB3aW5kb3csIGJ1dCBGVUxMIFNDUkVFTi4gVmVyeSBhZ2dyZXNzaXZlLlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBrby5vYnNlcnZhYmxlKGZhbHNlKSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVXNlci1zdXBwbGllZCBwYXNzY29kZSB0byBjb21wYXJlIG9uIHRoZSBzZXJ2ZXIgYWdhaW5zdCB0aGUgY3VycmVudCBwYXNzY29kZS5cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcGFzc2NvZGU6IGtvLm9ic2VydmFibGUoXCJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvYWRIaXN0b3J5TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgbG9hZERhdGFzZXRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50OiBrby5vYnNlcnZhYmxlKFN0YXR1c1N0YXRlLlJFQURZKSxcclxuICAgICAgICAgICAgICAgIGxvZ0V2ZW50TWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlSW1hZ2U6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUltYWdlTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZToga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlsZU1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnQ6IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgc2F2ZUFzc2lnbm1lbnRNZXNzYWdlOiBrby5vYnNlcnZhYmxlKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gQHR5cGUge1NlcnZlclN0YXR1c31cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN1Ym1pc3Npb246IGtvLm9ic2VydmFibGUoU3RhdHVzU3RhdGUuUkVBRFkpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvbk1lc3NhZ2U6IGtvLm9ic2VydmFibGUoXCJcIiksXHJcbiAgICAgICAgICAgICAgICAvLyBAdHlwZSB7U2VydmVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3VibWlzc2lvblN0YXR1czoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uU3RhdHVzTWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIEB0eXBlIHtTZXJ2ZXJTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbjoga28ub2JzZXJ2YWJsZShTdGF0dXNTdGF0ZS5SRUFEWSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtYXRpb24gYWJvdXQgaW4tcHJvZ3Jlc3MgZXhlY3V0aW9uc1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0czoge30sXHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0IG9mIE91dHB1dCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGtvLm9ic2VydmFibGVBcnJheShbXSksXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGEgc3R1ZGVudCBydW5cclxuICAgICAgICAgICAgICAgIHN0dWRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHI6IHRoZSBmaWxlbmFtZSB0aGF0IHdhcyBsYXN0IGV4ZWN1dGVkIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVnZXJcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RlcDoga28ub2JzZXJ2YWJsZShudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFN0ZXA6IGtvLm9ic2VydmFibGUobnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaW5lOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5lOiBrby5vYnNlcnZhYmxlKDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlRGF0YToga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyYWNlU3RlcDoga28ub2JzZXJ2YWJsZSgwKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWwgZXhlY3V0aW9uIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IGtvLm9ic2VydmFibGUobnVsbClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogbnVsbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiByZWxhdGVkIHRvIGZlZWRiYWNrIGZyb20gdGhlIGluc3RydWN0b3IgcnVuXHJcbiAgICAgICAgICAgICAgICBmZWVkYmFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ciAobWFya2Rvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToga28ub2JzZXJ2YWJsZShcIlJlYWR5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrby5vYnNlcnZhYmxlKG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjoga28ub2JzZXJ2YWJsZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXNFcnJvcjoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lc1VuY292ZXJlZDoga28ub2JzZXJ2YWJsZUFycmF5KFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVzdWx0cyBvZiB0aGUgbGFzdCBleGVjdXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBGdW5jdGlvbnMgdG8gZmlyZSB3aGVuIGNlcnRhaW4gZXZlbnRzIG9jY3VyXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdoZW4gdGhlIHN0dWRlbnQgZ2V0cyBhIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJjYWxsYmFjay5zdWNjZXNzXCJdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHNlcnZlciBpcyBjb25uZWN0ZWQuXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbH1cclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VydmVyQ29ubmVjdGVkOiBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U2V0dGluZyhcInNlcnZlci5jb25uZWN0ZWRcIiwgdHJ1ZSkpLFxyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBibG9ja2x5UGF0aDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJibG9ja2x5LnBhdGhcIl0sXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRQb2ludDogdGhpcy5pbml0aWFsQ29uZmlndXJhdGlvbl9bXCJhdHRhY2htZW50LnBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgLy8gSlF1ZXJ5IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gTWFwcyBjb2RlcyAoJ2xvZ19ldmVudCcsICdzYXZlX2NvZGUnKSB0byBVUkxzXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmluaXRpYWxDb25maWd1cmF0aW9uX1tcInVybHNcIl0gfHwge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGluaXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgbGV0IGNvbnN0YW50cyA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbjtcclxuICAgICAgICBsZXQgZ3VpID0gbWFrZUludGVyZmFjZSh0aGlzKTtcclxuICAgICAgICBjb25zdGFudHMuY29udGFpbmVyID0gJChjb25zdGFudHMuYXR0YWNobWVudFBvaW50KS5odG1sKCQoZ3VpKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc2VydmVyLmxvYWRBc3NpZ25tZW50KGFzc2lnbm1lbnRfaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUYWdzKHRhZ3MpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyB0YWdzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNhbXBsZVN1Ym1pc3Npb25zKHNhbXBsZXMpIHtcclxuICAgICAgICAvLyBBbHJlYWR5IGEgSlNPTiBsaXN0IHJlcHJlc2VudGluZyBzYW1wbGVzXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5vU3VibWlzc2lvbihhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICBsb2FkQ29uY2F0ZW5hdGVkRmlsZShhc3NpZ25tZW50LmV4dHJhX3N0YXJ0aW5nX2ZpbGVzLCB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1Ym1pc3Npb24oc3VibWlzc2lvbiwgYXNzaWdubWVudCkge1xyXG4gICAgICAgIGlmICghc3VibWlzc2lvbikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBTY2FyaWVyIFwiWW91IGFyZSBub3QgbG9nZ2VkIGluIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICB0aGlzLmxvYWROb1N1Ym1pc3Npb24oYXNzaWdubWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogV2hhdCBpZiBzdWJtaXNzaW9ucycgYXNzaWdubWVudCB2ZXJzaW9uIGFuZCB0aGUgYXNzaWdubWVudHMnIHZlcnNpb24gY29uZmxpY3Q/XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmlkKHN1Ym1pc3Npb24uaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi5jb2RlKHN1Ym1pc3Npb24uY29kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VibWlzc2lvbi5jb3JyZWN0KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoc3VibWlzc2lvbi5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmVuZHBvaW50KHN1Ym1pc3Npb24uZW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi51cmwoc3VibWlzc2lvbi51cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc3VibWlzc2lvbi52ZXJzaW9uKHN1Ym1pc3Npb24udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLmdyYWRpbmdTdGF0dXMoc3VibWlzc2lvbi5ncmFkaW5nX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLnN1Ym1pc3Npb25TdGF0dXMoc3VibWlzc2lvbi5zdWJtaXNzaW9uX3N0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zdWJtaXNzaW9uLm93bmVySWQoc3VibWlzc2lvbi51c2VyX2lkKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnVzZXIuY291cnNlSWQoc3VibWlzc2lvbi5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKHN1Ym1pc3Npb24uZXh0cmFfZmlsZXMsIHRoaXMubW9kZWwuc3VibWlzc2lvbi5leHRyYUZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQXNzaWdubWVudERhdGFfKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJlc2V0SW50ZXJmYWNlKCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGlzbW91bnRFeHRyYUZpbGVzKCk7XHJcbiAgICAgICAgbGV0IHdhc1NlcnZlckNvbm5lY3RlZCA9IHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQoKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uc2VydmVyQ29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICBsZXQgYXNzaWdubWVudCA9IGRhdGEuYXNzaWdubWVudDtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaWQoYXNzaWdubWVudC5pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnZlcnNpb24oYXNzaWdubWVudC52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuY291cnNlSWQoYXNzaWdubWVudC5jb3Vyc2VfaWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5mb3JrZWRJZChhc3NpZ25tZW50LmZvcmtlZF9pZCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmZvcmtlZFZlcnNpb24oYXNzaWdubWVudC5mb3JrZWRfdmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmhpZGRlbihhc3NpZ25tZW50LmhpZGRlbik7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKGFzc2lnbm1lbnQucmV2aWV3ZWQpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5wdWJsaWMoYXNzaWdubWVudC5wdWJsaWMpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC50eXBlKGFzc2lnbm1lbnQudHlwZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LnVybChhc3NpZ25tZW50LnVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hc3NpZ25tZW50LmlwUmFuZ2VzKGFzc2lnbm1lbnQuaXBfcmFuZ2VzKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKGFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQubmFtZShhc3NpZ25tZW50Lm5hbWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZShhc3NpZ25tZW50Lm9uX2NoYW5nZSB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9jaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLmZpbGVTeXN0ZW0ubmV3RmlsZShcIiFvbl9jaGFuZ2UucHlcIiwgYXNzaWdubWVudC5vbl9jaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKGFzc2lnbm1lbnQub25fZXZhbCB8fCBudWxsKTtcclxuICAgICAgICBpZiAoYXNzaWdubWVudC5vbl9ldmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGUoXCIhb25fZXZhbC5weVwiLCBhc3NpZ25tZW50Lm9uX2V2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oYXNzaWdubWVudC5vbl9ydW4pO1xyXG4gICAgICAgIHRoaXMubW9kZWwuYXNzaWdubWVudC5zdGFydGluZ0NvZGUoYXNzaWdubWVudC5zdGFydGluZ19jb2RlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmFzc2lnbm1lbnQub3duZXJJZChhc3NpZ25tZW50Lm93bmVyX2lkKTtcclxuICAgICAgICBsb2FkQXNzaWdubWVudFNldHRpbmdzKHRoaXMubW9kZWwsIGFzc2lnbm1lbnQuc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3MoYXNzaWdubWVudC50YWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRTYW1wbGVTdWJtaXNzaW9ucyhhc3NpZ25tZW50LnNhbXBsZV9zdWJtaXNzaW9ucyk7XHJcbiAgICAgICAgbG9hZENvbmNhdGVuYXRlZEZpbGUoYXNzaWdubWVudC5leHRyYV9pbnN0cnVjdG9yX2ZpbGVzLCB0aGlzLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIGxvYWRDb25jYXRlbmF0ZWRGaWxlKGFzc2lnbm1lbnQuZXh0cmFfc3RhcnRpbmdfZmlsZXMsIHRoaXMubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIHRoaXMubG9hZFN1Ym1pc3Npb24oZGF0YS5zdWJtaXNzaW9uLCBhc3NpZ25tZW50KTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG51bGwpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuY29uZmlndXJhdGlvbi5zZXJ2ZXJDb25uZWN0ZWQod2FzU2VydmVyQ29ubmVjdGVkKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuY29yZ2lzLmxvYWREYXRhc2V0cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNlcnZlci5zZXRTdGF0dXMoXCJzYXZlRmlsZVwiLCBTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGVsTWV0aG9kcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICBtb2RlbC51aSA9IHtcclxuICAgICAgICAgICAgcm9sZToge1xyXG4gICAgICAgICAgICAgICAgaXNHcmFkZXI6IGtvLnB1cmVDb21wdXRlZCgoKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudXNlci5yb2xlKCkgPT09IFwib3duZXJcIiB8fCBtb2RlbC51c2VyLnJvbGUoKSA9PT0gXCJncmFkZXJcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQ6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuY2hhbmdlZEluc3RydWN0aW9ucygpICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuaW5zdHJ1Y3Rpb25zLmlzQ2hhbmdlZCgpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKCkpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51dGlsaXRpZXMubWFya2Rvd24obW9kZWwuYXNzaWdubWVudC5pbnN0cnVjdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICByZXNldDogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMobnVsbClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgICAgICAgdGV4dEZ1bGxzY3JlZW46IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIChtb2RlbC5kaXNwbGF5LmZ1bGxzY3JlZW4oKSkgPyBcImZhLWNvbXByZXNzLWFycm93cy1hbHRcIiA6IFwiZmEtZXhwYW5kLWFycm93cy1hbHRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrRnVsbHNjcmVlbjogKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5mdWxsc2NyZWVuKCFtb2RlbC5kaXNwbGF5LmZ1bGxzY3JlZW4oKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FuTWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBtb2RlbC5hc3NpZ25tZW50LnJldmlld2VkKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB0ZXh0TWFya1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwudWkubWVudS5pc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkFzc2lnbm1lbnQgY2xvc2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVvcGVuIGZvciBlZGl0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5kaXNwbGF5LmRpcnR5U3VibWlzc2lvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSAmJiBtb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VibWl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTdWJtaXQgZWFybHlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tNYXJrU3VibWl0dGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnVpLm1lbnUuaXNDb21wbGV0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBjYW5ub3QgcmVvcGVuIGNsb3NlZCBhc3NpZ25tZW50cy4gQ29udGFjdCBhIGdyYWRlciFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC51aS5tZW51LmlzU3VibWl0dGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiaW5Qcm9ncmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uU3RhdHVzKFwiU3VibWl0dGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5yZXZpZXdlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXR0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBrby5wdXJlQ29tcHV0ZWQoKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uc3VibWlzc2lvblN0YXR1cygpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29tcGxldGVkXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Vjb25kUm93OiB7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWRiYWNrVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuRkVFREJBQ0tcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc1RyYWNlVmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBpc0NvbnNvbGVTaG93VmlzaWJsZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2Vjb25kUm93LmlzRmVlZGJhY2tWaXNpYmxlKCkgfHwgbW9kZWwudWkuc2Vjb25kUm93LmlzVHJhY2VWaXNpYmxlKClcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hMYWJlbDoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlldyBUcmFjZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGFkdmFuY2VTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGFuZWwgPSBtb2RlbC5kaXNwbGF5LnNlY29uZFJvd1NlY29uZFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhbmVsKFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucy5GRUVEQkFDSyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGFuZWwoKSA9PT0gU2Vjb25kUm93U2Vjb25kUGFuZWxPcHRpb25zLlRSQUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuVFJBQ0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYW5lbChTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uc29sZToge1xyXG4gICAgICAgICAgICAgICAgc2l6ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuZGlzcGxheS5zZWNvbmRSb3dTZWNvbmRQYW5lbCgpID09PSBTZWNvbmRSb3dTZWNvbmRQYW5lbE9wdGlvbnMuTk9ORSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC02XCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBoaWRlRXZhbHVhdGU6IGtvLnB1cmVDb21wdXRlZCggKCk9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUV2YWx1YXRlKCkgfHwgIW1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmdsb2JhbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmVlZGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGJhZGdlOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5leGVjdXRpb24uZmVlZGJhY2suY2F0ZWdvcnkoKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1ub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KCkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtbm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtcnVudGltZS1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1zeW50YXgtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc3ludGF4LWVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW50ZXJuYWwtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtc2VtYW50aWMtZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZlZWRiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJsYWJlbC1mZWVkYmFjay1lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLXByb2JsZW0tY29tcGxldGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibGFiZWwtaW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJubyBlcnJvcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImxhYmVsLW5vLWVycm9yc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5jYXRlZ29yeSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicnVudGltZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVudGltZSBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ludGF4XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVkaXRvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRWRpdG9yIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnRlcm5hbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSW50ZXJuYWwgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbWFudGljXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbmFseXplclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxnb3JpdGhtIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmZWVkYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdHJ1Y3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc3RydWN0b3JcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkluY29ycmVjdCBBbnN3ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm8gZXJyb3JzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJObyBlcnJvcnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cmFjZToge1xyXG4gICAgICAgICAgICAgICAgaGFzOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBsaW5lOiBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlRGF0YSA9IG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYWNlRGF0YSB8fCBzdGVwID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vIHRyYWNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJlZm9yZSBydW5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IGxhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmlzaGVkIHJ1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoeSBhcmUgdGhlc2UgbnVtYmVycyB3b25reT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTGluZSBcIisodHJhY2VEYXRhW3N0ZXBdLmxpbmUtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBNYXRoLm1heCgwLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKHByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBNYXRoLm1pbihtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCgpLCBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG5leHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKG1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGtvLnB1cmVDb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBtb2RlbC5leGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RTdGVwID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2VEYXRhID0gbW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFRyYWNlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBsYXN0U3RlcDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFjZURhdGFbc3RlcCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNlRGF0YVtzdGVwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpIHx8ICFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29udGVudHM6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFuc3dlci5weVwiOiByZXR1cm4gbW9kZWwuc3VibWlzc2lvbi5jb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhaW5zdHJ1Y3Rpb25zLm1kXCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2NoYW5nZS5weVwiOiByZXR1cm4gbW9kZWwuYXNzaWdubWVudC5vbkNoYW5nZSgpICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIW9uX2V2YWwucHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMoKS5zb21lKGZpbGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUuZmlsZW5hbWUoKSA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhdGFncy5ibG9ja3B5XCI6IHJldHVybiBtb2RlbC5hc3NpZ25tZW50LnRhZ3MoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhc2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHlcIjogcmV0dXJuIG1vZGVsLmFzc2lnbm1lbnQuc2FtcGxlU3VibWlzc2lvbnMoKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/bW9ja191cmxzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj90YWdzLmJsb2NrcHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9zZXR0aW5ncy5ibG9ja3B5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiFvbl9jaGFuZ2UucHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIGZpeCBleHRyYWZpbGVzIGZvciBpbnN0cnVjdG9yIGFuZCBzdHVkZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIhb25fZXZhbC5weVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5vbkV2YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnN0cnVjdG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5uZXdGaWxlRGlhbG9nKFwiaW5zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0dWRlbnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGVEaWFsb2coXCJzdHVkZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhcnRpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5maWxlU3lzdGVtLm5ld0ZpbGVEaWFsb2coXCJzdGFydGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkuZmlsZW5hbWUocGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZGVsZXRlRmlsZShtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV4dHJhU3R1ZGVudEZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFJbnN0cnVjdG9yRmlsZXM6IG9ic2VydmVDb25jYXRlbmF0ZWRGaWxlKG1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpLFxyXG4gICAgICAgICAgICAgICAgZXh0cmFTdGFydGluZ0ZpbGVzOiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcyksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RmlsZW5hbWU6IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aCA9PT0gXCI/bW9ja191cmxzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJVUkwgRGF0YVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKFwiJlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5zbGljZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBrby5wdXJlQ29tcHV0ZWQoICgpPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3IobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUVkaXRvcnMoKSA/IFwiTm9uZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPyBtb2RlbC51aS5lZGl0b3JzLmN1cnJlbnQoKSA6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuUmVzZXRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3VibWlzc2lvbi5jb2RlKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyhtb2RlbC5hc3NpZ25tZW50LmV4dHJhU3RhcnRpbmdGaWxlcygpLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lKCkuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5TYXZlOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAhbW9kZWwuZGlzcGxheS5hdXRvU2F2ZSgpKSxcclxuICAgICAgICAgICAgICAgIGNhbkRlbGV0ZToga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgKCFtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmhpZGVGaWxlcygpIHx8IG1vZGVsLmRpc3BsYXkuaW5zdHJ1Y3RvcigpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobW9kZWwuZGlzcGxheS5maWxlbmFtZSgpKSA9PT0gLTEpLFxyXG4gICAgICAgICAgICAgICAgY2FuUmVuYW1lOiBrby5wdXJlQ29tcHV0ZWQoKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAoIW1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuaGlkZUZpbGVzKCkgfHwgbW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVU5SRU5BTUFCTEVfRklMRVMuaW5kZXhPZihtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpID09PSAtMSksXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHVwbG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiBkb3dubG9hZEZpbGUuYmluZChzZWxmKSxcclxuICAgICAgICAgICAgICAgIGltcG9ydERhdGFzZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuY29yZ2lzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBweXRob246IHtcclxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlTWlycm9yID0gc2VsZi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS50ZXh0RWRpdG9yLmNvZGVNaXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2RlTWlycm9yLnNldE9wdGlvbihcImZ1bGxTY3JlZW5cIiwgIWNvZGVNaXJyb3IuZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNb2RlOiAobmV3TW9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1WaWV3LkNoYW5nZVwiLCBcIlwiLCBcIlwiLCBuZXdNb2RlLCBtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUobmV3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iub2xkUHl0aG9uTW9kZSA9IG5ld01vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGlzdG9yeUF2YWlsYWJsZToga28ucHVyZUNvbXB1dGVkKCgpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHVybk9mZkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3IudXBkYXRlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm5Pbkhpc3RvcnlNb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9hZEhpc3RvcnkoKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubG9hZChyZXNwb25zZS5oaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5Lmhpc3RvcnlNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5weXRob25FZGl0b3Iuc2V0UmVhZE9ubHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5kaWFsb2cuRVJST1JfTE9BRElOR19ISVNUT1JZKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSGlzdG9yeU1vZGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwudWkuZWRpdG9ycy5weXRob24udHVybk9mZkhpc3RvcnlNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT25IaXN0b3J5TW9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS5tb3ZlVG9TdGFydCgpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogKCk9Pnsgc2VsZi5jb21wb25lbnRzLmhpc3RvcnkubW92ZVByZXZpb3VzKCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVOZXh0KCk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RSZWNlbnQ6ICgpPT57IHNlbGYuY29tcG9uZW50cy5oaXN0b3J5Lm1vdmVUb01vc3RSZWNlbnQoKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlOiAoKT0+eyBzZWxmLmNvbXBvbmVudHMuaGlzdG9yeS51c2UoKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmU6ICgpID0+IHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUFzc2lnbm1lbnQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGVjdXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpc1J1bm5pbmc6IGtvLnB1cmVDb21wdXRlZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbigpID09PSBTdGF0dXNTdGF0ZS5BQ1RJVkVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBydW46ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLmVuZ2luZS5kZWxheWVkUnVuKCksXHJcbiAgICAgICAgICAgICAgICBldmFsdWF0ZTogKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuZW5naW5lLmV2YWx1YXRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IChlbmRwb2ludCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwic2VydmVyLXN0YXR1cy1cIiArIG1vZGVsLnN0YXR1c1tlbmRwb2ludF0oKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGlzRW5kcG9pbnRDb25uZWN0ZWQ6IChlbmRwb2ludCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnNlcnZlckNvbm5lY3RlZCgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi51cmxzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jb25maWd1cmF0aW9uLnVybHNbZW5kcG9pbnRdICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVBc3NpZ25tZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRIaXN0b3J5TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWRGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVGaWxlTWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvYWREYXRhc2V0TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLmxvZ0V2ZW50TWVzc2FnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnNhdmVJbWFnZSgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc3RhdHVzLnVwZGF0ZVN1Ym1pc3Npb25NZXNzYWdlKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGF0dXMudXBkYXRlU3VibWlzc2lvblN0YXR1c01lc3NhZ2UoKSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZm9yY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdWJtaXNzaW9uOiAoZGF0YSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2VsZi5tb2RlbC5zdWJtaXNzaW9uLnNjb3JlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuZmFkZU91dCgxMDApLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1ha2VFeHRyYUludGVyZmFjZVN1YnNjcmlwdGlvbnMoc2VsZiwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbkhhY2tzKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJUT0RPXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHlzIHRoZSBLbm9ja291dEpTIGJpbmRpbmdzIHRvIHRoZSBtb2RlbCwgaW5zdGFudGlhdGluZyB0aGUgdmFsdWVzIGludG8gdGhlXHJcbiAgICAgKiBIVE1MLlxyXG4gICAgICovXHJcbiAgICBhcHBseU1vZGVsKCkge1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFV0aWxpdGllcygpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51dGlsaXRpZXMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtkb3duOiAodGV4dCkgPT4gdGV4dCA/IEVhc3lNREUucHJvdG90eXBlLm1hcmtkb3duKHRleHQpIDogXCI8cD48L3A+XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLm1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyO1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5jb21wb25lbnRzID0ge307XHJcbiAgICAgICAgbGV0IG1haW4gPSB0aGlzO1xyXG4gICAgICAgIC8vIEVhY2ggb2YgdGhlc2UgY29tcG9uZW50cyB3aWxsIHRha2UgdGhlIEJsb2NrUHkgaW5zdGFuY2UsIGFuZCBwb3NzaWJseSBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSByZWxldmFudCBIVE1MIGxvY2F0aW9uIHdoZXJlIGl0IHdpbGwgYmUgZW1iZWRkZWQuXHJcbiAgICAgICAgY29tcG9uZW50cy5kaWFsb2cgPSBuZXcgQmxvY2tQeURpYWxvZyhtYWluLCBjb250YWluZXIuZmluZChcIi5ibG9ja3B5LWRpYWxvZ1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5mZWVkYmFjayA9IG5ldyBCbG9ja1B5RmVlZGJhY2sobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1mZWVkYmFja1wiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy50cmFjZSA9IG5ldyBCbG9ja1B5VHJhY2UobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb25zb2xlID0gbmV3IEJsb2NrUHlDb25zb2xlKG1haW4sIGNvbnRhaW5lci5maW5kKFwiLmJsb2NrcHktY29uc29sZVwiKSk7XHJcbiAgICAgICAgY29tcG9uZW50cy5lbmdpbmUgPSBuZXcgQmxvY2tQeUVuZ2luZShtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmZpbGVTeXN0ZW0gPSBuZXcgQmxvY2tQeUZpbGVTeXN0ZW0obWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5lZGl0b3JzID0gbmV3IEVkaXRvcnMobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1lZGl0b3JcIikpO1xyXG4gICAgICAgIGNvbXBvbmVudHMucHl0aG9uRWRpdG9yID0gdGhpcy5jb21wb25lbnRzLmVkaXRvcnMuYnlOYW1lKFwicHl0aG9uXCIpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuc2VydmVyID0gbmV3IEJsb2NrUHlTZXJ2ZXIobWFpbik7XHJcbiAgICAgICAgY29tcG9uZW50cy5jb3JnaXMgPSBuZXcgQmxvY2tQeUNvcmdpcyhtYWluKTtcclxuICAgICAgICBjb21wb25lbnRzLmhpc3RvcnkgPSBuZXcgQmxvY2tQeUhpc3RvcnkobWFpbiwgY29udGFpbmVyLmZpbmQoXCIuYmxvY2tweS1oaXN0b3J5LXRvb2xiYXJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VFeHRyYVN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kaXNwbGF5LmNoYW5nZWRJbnN0cnVjdGlvbnMuc3Vic2NyaWJlKChjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUluc3RydWN0aW9ucy5DaGFuZ2VcIiwgXCJcIiwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkLCBcImluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmVuZ2luZS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RQYXNzY29kZSgpIHtcclxuICAgICAgICBsZXQgdXNlclN1cHBsaWVkUGFzc2NvZGUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgdGhlIHBhc3Njb2RlLlwiKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRpc3BsYXkucGFzc2NvZGUodXNlclN1cHBsaWVkUGFzc2NvZGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtlbmNvZGVIVE1MfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuY29uc3QgU1RBUlRfRVZBTF9IVE1MID0gYFxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lIGZsb2F0LXJpZ2h0IGJsb2NrcHktYnRuLWV2YWxcIj5cbiAgICBFdmFsdWF0ZVxuPC9idXR0b24+YDtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtNiBibG9ja3B5LXBhbmVsIGJsb2NrcHktY29uc29sZSdcbiAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNvbnNvbGVcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5jb25zb2xlLnNpemVcIj5cbiAgICAgICAgICBcbiAgICAgICAgPCEtLSBGZWVkYmFjay9UcmFjZSBWaXNpYmlsaXR5IENvbnRyb2wgLS0+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzPSdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmbG9hdC1yaWdodCBibG9ja3B5LXNob3ctZmVlZGJhY2snXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiB1aS5zZWNvbmRSb3cuaXNDb25zb2xlU2hvd1Zpc2libGUsIGNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWV5ZSc+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgPHN0cm9uZz5Db25zb2xlOjwvc3Ryb25nPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1wcmludGVyIGJsb2NrcHktcHJpbnRlci1kZWZhdWx0Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICA8L2Rpdj5gO1xuXG5jb25zdCBORVdfQ09OU09MRV9MSU5FX0hUTUwgPSBcIjxkaXY+PC9kaXY+XCI7XG5cbi8qKlxuICpcbiAqIEBlbnVtXG4gKi9cbmV4cG9ydCBsZXQgQ29uc29sZUxpbmVUeXBlID0ge1xuICAgIFRFWFQ6IFwidGV4dFwiLFxuICAgIEhUTUw6IFwiaHRtbFwiLFxuICAgIFBMT1Q6IFwicGxvdFwiLFxuICAgIElNQUdFOiBcImltYWdlXCIsXG4gICAgVFVSVExFOiBcInR1cnRsZVwiLFxuICAgIEVWQUw6IFwiZXZhbFwiLFxuICAgIFNUQVJUX0VWQUw6IFwic3RhcnRfZXZhbFwiLFxuICAgIFZBTFVFOiBcInZhbHVlXCIsXG4gICAgSU5QVVQ6IFwiaW5wdXRcIixcbiAgICBURVNUX0NBU0U6IFwidGVzdF9jYXNlXCJcbn07XG5cbmNsYXNzIENvbnNvbGVMaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0eXBlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IFNrLmN1cnJGaWxlbmFtZSxcbiAgICAgICAgICAgIHN0ZXA6IG1haW4uY29tcG9uZW50cy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXAsXG4gICAgICAgICAgICBsaW5lOiBtYWluLmNvbXBvbmVudHMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5saW5lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHRtbCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XG4gICAgICAgICAgICBcImNsYXNzXCI6ICBcImJsb2NrcHktcHJpbnRlci1vdXRwdXRcIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJkYXRhLXN0ZXBcIjogdGhpcy5vcmlnaW4uc3RlcCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdGVwIFwiICsgdGhpcy5vcmlnaW4uc3RlcCArIFwiLCBMaW5lIFwiICsgdGhpcy5vcmlnaW4ubGluZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gIW1haW4ubW9kZWwuZGlzcGxheS5tdXRlUHJpbnRlcigpO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG5cbiAgICB0b1NrdWxwdCgpIHtcbiAgICAgICAgcmV0dXJuIFNrLmZmaS5yZW1hcFRvUHkodGhpcy5jb250ZW50KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVHVydGxlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIC8vIFRPRE86IENhcHR1cmUgdHVydGxlIGNvbW1hbmRzIGZvciB0cmFjaW5nIHB1cnBvc2VzXG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVFVSVExFKTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLXR1cnRsZS1vdXRwdXRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHdoZXJlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHdoZXJlLnByZXBlbmQodGhpcy5odG1sKTtcbiAgICAgICAgICAgIHRoaXMuaHRtbFswXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUltYWdlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIGNvbnRlbnQpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklNQUdFLCBjb250ZW50KTtcbiAgICAgICAgdGhpcy5odG1sLmFkZENsYXNzKFwiYmxvY2tweS1jb25zb2xlLWltYWdlLW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQodGhpcy5jb250ZW50KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy90aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVBsb3QgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuUExPVCwgY29udGVudCk7XG4gICAgICAgIHRoaXMuaHRtbC5hZGRDbGFzcyhcImJsb2NrcHktY29uc29sZS1wbG90LW91dHB1dFwiKTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICAvL3RoaXMuaHRtbC50b29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENvbnNvbGVMaW5lVGV4dCBleHRlbmRzIENvbnNvbGVMaW5lIHtcblxuICAgIGFkZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPHNhbXA+PC9zYW1wPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVZhbHVlIGV4dGVuZHMgQ29uc29sZUxpbmUge1xuXG4gICAgY29uc3RydWN0b3IobWFpbiwgY29udGVudCkge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuVkFMVUUsIGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgZW5jb2RlZFRleHQgPSBlbmNvZGVIVE1MKHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBsZXQgbGluZURhdGEgPSAkKFwiPGNvZGU+PC9jb2RlPlwiLCB7IFwiaHRtbFwiOiBlbmNvZGVkVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuaHRtbC5hcHBlbmQobGluZURhdGEpO1xuICAgICAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZUlucHV0IGV4dGVuZHMgQ29uc29sZUxpbmUge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWFpbiwgQ29uc29sZUxpbmVUeXBlLklOUFVULCBwcm9tcHRNZXNzYWdlKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIElucHV0IGJveCBmb3IgcmVjZWl2aW5nIGlucHV0KCkgZnJvbSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcih3aGVyZSkge1xuICAgICAgICAvLyBQZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW5pbmdcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gSW5wdXQgZm9ybVxuICAgICAgICAgICAgbGV0IGlucHV0Rm9ybSA9ICQoXCI8aW5wdXQgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgICAgICAvLyBFbnRlciBidXR0b25cbiAgICAgICAgICAgIGxldCBpbnB1dEJ0biA9ICQoXCI8YnV0dG9uPjwvYnV0dG9uPlwiLCB7XCJodG1sXCI6IFwiRW50ZXJcIn0pO1xuICAgICAgICAgICAgLy8gR3JvdXAgZm9ybSBhbmQgYnV0dG9uXG4gICAgICAgICAgICBsZXQgaW5wdXRHcm91cCA9ICQoXCI8ZGl2PjwvZGl2PlwiLCB7XCJjbGFzc1wiOiBcImJsb2NrcHktY29uc29sZS1pbnB1dFwifSk7XG4gICAgICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZChpbnB1dEZvcm0pO1xuICAgICAgICAgICAgaW5wdXRHcm91cC5hcHBlbmQoaW5wdXRCdG4pO1xuICAgICAgICAgICAgLy8gUHJvbXB0IGJveCwgbmV3IGxpbmUsIGlucHV0IGdyb3VwXG4gICAgICAgICAgICBsZXQgaW5wdXRCb3ggPSAkKFwiPGRpdj48L2Rpdj5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZWRUZXh0ID0gZW5jb2RlSFRNTCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dE1zZyA9ICQoXCI8c2FtcD48L3NhbXA+XCIsICB7XCJodG1sXCI6IGVuY29kZWRUZXh0fSk7XG4gICAgICAgICAgICAgICAgaW5wdXRCb3guYXBwZW5kKGlucHV0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0Qm94LmFwcGVuZCgkKFwiPGJyPlwiKSlcbiAgICAgICAgICAgICAgICAuYXBwZW5kKGlucHV0R3JvdXApO1xuICAgICAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgICAgICB0aGlzLmh0bWwuYXBwZW5kKGlucHV0Qm94KTtcbiAgICAgICAgICAgIHdoZXJlLmFwcGVuZCh0aGlzLmh0bWwpO1xuICAgICAgICAgICAgLy8gTWFrZSBpdCBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUludGVyYWN0aXZlKGlucHV0Rm9ybSwgaW5wdXRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG5cbiAgICBtYWtlSW50ZXJhY3RpdmUoaW5wdXQsIGJ1dHRvbikge1xuICAgICAgICBsZXQgcmVzb2x2ZU9uQ2xpY2s7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dHRlZFZhbHVlID0gaW5wdXQudmFsKCk7XG4gICAgICAgICAgICBTay5xdWV1ZWRJbnB1dC5wdXNoKHVzZXJJbnB1dHRlZFZhbHVlKTtcbiAgICAgICAgICAgIHJlc29sdmVPbkNsaWNrKHVzZXJJbnB1dHRlZFZhbHVlKTtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmh0bWwudG9vbHRpcCgpO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b24uY2xpY2soc3VibWl0Rm9ybSk7XG4gICAgICAgIGlucHV0LmtleXVwKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIHJldHVybiBzdWJtaXR0ZWRQcm9taXNlO1xuICAgIH1cbn1cblxuY2xhc3MgQ29uc29sZUxpbmVFdmFsdWF0ZSBleHRlbmRzIENvbnNvbGVMaW5lSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG1haW4pIHtcbiAgICAgICAgc3VwZXIobWFpbiwgXCJFdmFsdWF0ZTpcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUgZXh0ZW5kcyBDb25zb2xlTGluZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICBzdXBlcihtYWluLCBDb25zb2xlTGluZVR5cGUuU1RBUlRfRVZBTCk7XG4gICAgICAgIHRoaXMuaHRtbC5hcHBlbmQoJChTVEFSVF9FVkFMX0hUTUwpKTtcbiAgICAgICAgdGhpcy5odG1sLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5leGVjdXRlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIod2hlcmUpIHtcbiAgICAgICAgd2hlcmUuYXBwZW5kKHRoaXMuaHRtbCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmxvY2tQeUNvbnNvbGUge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGZvciBtYW5hZ2luZyB0aGUgY29uc29sZSwgd2l0aCBmZWF0dXJlcyBmb3IgdGhpbmdzIGxpa2UgcHJpbnRpbmcsIHBsb3R0aW5nLCBldmFsaW5nLCBpbnB1dGluZy5cbiAgICAgKiBUaGUgXCJwcmludGVyXCIgaXMgdGhlIHJlZ2lvbiB3aGVyZSB3ZSBwdXQgdGhpbmdzLCBhcyBvcHBvc2VkIHRvIHRoZSBjb25zb2xlIGFzIGEgd2hvbGUuXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFpbiwgdGFnKSB7XG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnByaW50ZXJUYWcgPSB0YWcuZmluZChcIi5ibG9ja3B5LXByaW50ZXJcIik7XG5cbiAgICAgICAgdGhpcy5NSU5JTVVNX1dJRFRIID0gMjAwO1xuICAgICAgICB0aGlzLk1JTklNVU1fSEVJR0hUID0gMjAwO1xuICAgICAgICB0aGlzLkRFRkFVTFRfSEVJR0hUID0gdGhpcy5wcmludGVyVGFnLmhlaWdodCgpOyAvLyBMZXQgQ1NTIGRlZmluZSB0aGlzXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcblxuICAgICAgICB0aGlzLm91dHB1dCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGUgdXNlciBtb2RpZmllcyBhIGZpbGUsIHRoZW4gbWFrZSB0aGUgY29uc29sZSBsb29rIGZhZGVkIGEgbGl0dGxlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgb2YgdGhlIHByaW50ZXIsIGluY2x1ZGluZyByZW1vdmluZyBhbnkgdGV4dCBpbiBpdCBhbmRcbiAgICAgKiBmaXhpbmcgaXRzIHNpemUuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMub3V0cHV0LnJlbW92ZUFsbCgpO1xuXG4gICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMucHJpbnRlclRhZy5lbXB0eSgpO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgY2hhbmdlZCB0aGUgY29uc29sZSBzaXplLCB3ZSdsbCByZXNldCBpdFxuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmludGVyVGFnLmhlaWdodCh0aGlzLkRFRkFVTFRfSEVJR0hUKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50dXJ0bGVMaW5lID0gbnVsbDtcbiAgICAgICAgU2suVHVydGxlR3JhcGhpY3MgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VHVydGxlTGluZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5sb2FkQXNzZXQuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsb2FkQXNzZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBnZXRUdXJ0bGVMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy50dXJ0bGVMaW5lID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR1cnRsZUxpbmUgPSBuZXcgQ29uc29sZUxpbmVUdXJ0bGUodGhpcy5tYWluKTtcbiAgICAgICAgICAgIHRoaXMudHVydGxlTGluZS5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGhhc24ndCBjaGFuZ2VkIHRoZSBjb25zb2xlIHNpemUsIHdlJ2xsIGRvIHNvXG4gICAgICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHJldmlvdXNDb25zb2xlSGVpZ2h0KCkgPT09IHRoaXMucHJpbnRlclRhZy5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJpbnRlckRpbWVuc2lvbiA9IHRoaXMucHJpbnRlclRhZy53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJpbnRlclRhZy5oZWlnaHQoY3VycmVudFByaW50ZXJEaW1lbnNpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnByZXZpb3VzQ29uc29sZUhlaWdodCh0aGlzLnByaW50ZXJUYWcuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIFNrLlR1cnRsZUdyYXBoaWNzLmhlaWdodCA9IGN1cnJlbnRQcmludGVyRGltZW5zaW9uLTQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR1cnRsZUxpbmUuaHRtbFswXTtcbiAgICB9XG5cbiAgICBmaW5pc2hUdXJ0bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Muc2F2ZVR1cnRsZU91dHB1dCgpKSB7XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gdGhpcy50dXJ0bGVMaW5lLmh0bWwuZmluZChcImNhbnZhc1wiKS5sYXN0KClbMF07XG4gICAgICAgICAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGxldCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5zYXZlSW1hZ2UoXCJ0dXJ0bGVfb3V0cHV0XCIsIGRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogdHVydGxlcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2lkdGhcbiAgICBuZXdUdXJ0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX1dJRFRILCB0aGlzLnByaW50ZXJUYWcud2lkdGgoKS00MCk7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5NSU5JTVVNX0hFSUdIVCwgdGhpcy5wcmludGVyVGFnLmhlaWdodCgpKzQwKTtcbiAgICB9XG5cbiAgICBpc011dGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGVhY2ggcHJpbnRlZCBlbGVtZW50IGluIHRoZSBwcmludGVyIGFuZCBtYWtlcyBpdCBoaWRkZW5cbiAgICAgKiBvciB2aXNpYmxlLCBkZXBlbmRpbmcgb24gd2hhdCBzdGVwIHdlJ3JlIG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXAgLSBUaGUgY3VycmVudCBzdGVwIG9mIHRoZSBleGVjdXRlZCBwcm9ncmFtIHRoYXQgd2UncmUgb247IGVhY2ggZWxlbWVudCBpbiB0aGUgcHJpbnRlciBtdXN0IGJlIG1hcmtlZCB3aXRoIGEgXCJkYXRhLXN0ZXBcIiBwcm9wZXJ0eSB0byByZXNvbHZlIHRoaXMuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgLSBEZXByZWNhdGVkLCBub3Qgc3VyZSB3aGF0IHRoaXMgZXZlbiBkb2VzLlxuICAgICAqL1xuICAgIHN0ZXBQcmludGVyKHN0ZXAsIHBhZ2UpIHtcbiAgICAgICAgdGhpcy5wcmludGVyVGFnLmZpbmQoXCIuYmxvY2tweS1wcmludGVyLW91dHB1dFwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcImRhdGEtc3RlcFwiKSA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbnQgYSBsaW5lIHRvIHRoZSBvbi1zY3JlZW4gcHJpbnRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGluZVRleHQgLSBBIGxpbmUgb2YgdGV4dCB0byBiZSBwcmludGVkIG91dC5cbiAgICAgKi9cbiAgICBwcmludChsaW5lVGV4dCkge1xuICAgICAgICAvLyBFbXB0eSBzdHJpbmdzIG1lYW5zIGRvIG5vdGhpbmcuXG4gICAgICAgIC8vIHByaW50KFwiXCIsIGVuZD1cIlwiKVxuICAgICAgICBpZiAoIWxpbmVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lVGV4dC5jaGFyQXQobGluZVRleHQubGVuZ3RoLTEpID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwbGl0TGluZXMgPSBsaW5lVGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgaWYgKHRoaXMubGluZUJ1ZmZlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5hZGRDb250ZW50KHNwbGl0TGluZXNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IHNwbGl0TGluZXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaCh0aGlzLmxpbmVCdWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICAgICAgdGhpcy5saW5lQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lVGV4dCh0aGlzLm1haW4sIENvbnNvbGVMaW5lVHlwZS5URVhULCBzcGxpdExpbmVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmx1c2gpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2godGhpcy5saW5lQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgICAgIHRoaXMubGluZUJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwbG90KHBsb3RzKSB7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZVBsb3QodGhpcy5tYWluLCBwbG90cyk7XG4gICAgICAgIHRoaXMucGxvdEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxvdEJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFBJTEltYWdlKGltYWdlRGF0YSkge1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyID0gbmV3IENvbnNvbGVMaW5lSW1hZ2UodGhpcy5tYWluLCBpbWFnZURhdGEuaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlQnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcmludFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcmludGVkVmFsdWUgPSBuZXcgQ29uc29sZUxpbmVWYWx1ZSh0aGlzLm1haW4sIHZhbHVlKTtcbiAgICAgICAgcHJpbnRlZFZhbHVlLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgICAgICByZXR1cm4gcHJpbnRlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJlZ2lzdGVycyBhIFByb21pc2UgZnJvbSB0aGUgSW5wdXQgYm94XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb21wdE1lc3NhZ2UgLSBNZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBpbnB1dChwcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIgPSBuZXcgQ29uc29sZUxpbmVJbnB1dCh0aGlzLm1haW4sIHByb21wdE1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dEJ1ZmZlci5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9O1xuXG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlciA9IG5ldyBDb25zb2xlTGluZUV2YWx1YXRlKHRoaXMubWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0QnVmZmVyLnJlbmRlcih0aGlzLnByaW50ZXJUYWcpO1xuICAgIH1cblxuICAgIGJlZ2luRXZhbCgpIHtcbiAgICAgICAgbGV0IHN0YXJ0RXZhbHVhdGlvbiA9IG5ldyBDb25zb2xlTGluZVN0YXJ0RXZhbHVhdGUodGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0RXZhbHVhdGlvbi5yZW5kZXIodGhpcy5wcmludGVyVGFnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmNvbmRpdGlvbmFsbHkgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdy5cbiAgICAgKlxuICAgICAqL1xuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLnRhZy5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy50YWcucHJvcChcInNjcm9sbEhlaWdodFwiKSAtIHRoaXMudGFnLnByb3AoXCJjbGllbnRIZWlnaHRcIilcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IHtzbHVnfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuLy8gVE9ETzogZWRpdG9yLmJtLmJsb2NrRWRpdG9yLmV4dHJhVG9vbHNbXVxuXG5leHBvcnQgbGV0IF9JTVBPUlRFRF9EQVRBU0VUUyA9IHt9O1xuZXhwb3J0IGxldCBfSU1QT1JURURfQ09NUExFVEVfREFUQVNFVFMgPSB7fTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdmVyeSBzaW1wbGlzdGljIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgdHJhbnNmb3JtXG4gKiBhIGdpdmVuIGJ1dHRvbiBpbnRvIGEgXCJMb2FkZWRcIiBzdGF0ZSAoZGlzYWJsZWQsIHByZXNzZWQgc3RhdGUsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ0biAtIEFuIEhUTUwgZWxlbWVudCB0byBjaGFuZ2UgdGhlIHRleHQgb2YuXG4gKi9cbmxldCBzZXRCdXR0b25Mb2FkZWQgPSBmdW5jdGlvbiAoYnRuKSB7XG4gICAgYnRuLmFkZENsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXG4gICAgICAgIC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcbiAgICAgICAgLnRleHQoXCJMb2FkZWRcIilcbiAgICAgICAgLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xufTtcblxuXG4vKipcbiAqIE1vZHVsZSB0aGF0IGNvbm5lY3RzIHRvIHRoZSBDT1JHSVMgZGF0YXNldHMgYW5kIG1hbmFnZXMgaW50ZXJhY3Rpb25zXG4gKiB3aXRoIHRoZW0uIFRoaXMgaW5jbHVkZXMgbG9hZGluZyBpbiBkYXRhc2V0cyBhdCBsYXVuY2ggYW5kIG9uLXRoZS1mbHkuXG4gKiBOb3RlIHRoYXQgdGhpcyBoYXMgbm8gcHJlc2VuY2Ugb24gc2NyZWVuLCBzbyBpdCBkb2VzIG5vdCBoYXZlIGEgdGFnLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlDb3JnaXN9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlDb3JnaXMobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICB0aGlzLmxvYWRlZERhdGFzZXRzID0gW107XG4gICAgdGhpcy5sb2FkRGF0YXNldHMoKTtcbn1cblxuQmxvY2tQeUNvcmdpcy5wcm90b3R5cGUubG9hZERhdGFzZXRzID0gZnVuY3Rpb24gKHNpbGVudGx5KSB7XG4gICAgLy8gTG9hZCBpbiBlYWNoIHRoZSBkYXRhc2V0c1xuICAgIGxldCBtb2RlbCA9IHRoaXMubWFpbi5tb2RlbCxcbiAgICAgICAgZWRpdG9yID0gdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLFxuICAgICAgICBzZXJ2ZXIgPSB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXI7XG4gICAgbGV0IGltcG9ydHMgPSBbXTtcbiAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzKCkuc3BsaXQoXCIsXCIpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUgJiYgIShuYW1lIGluIEJsb2NrTWlycm9yQmxvY2tFZGl0b3IuRVhUUkFfVE9PTFMpKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnB1c2guYXBwbHkoaW1wb3J0cywgdGhpcy5pbXBvcnREYXRhc2V0KHNsdWcobmFtZSksIG5hbWUsIHNpbGVudGx5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdoZW4gZGF0YXNldHMgYXJlIGxvYWRlZCwgdXBkYXRlIHRoZSB0b29sYm94LlxuICAgICQud2hlbi5hcHBseSgkLCBpbXBvcnRzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRSSUdHRVJFRFwiKTtcbiAgICAgICAgZWRpdG9yLmJtLmZvcmNlQmxvY2tSZWZyZXNoKCk7XG4gICAgICAgIGVkaXRvci5ibS5ibG9ja0VkaXRvci5yZW1ha2VUb29sYm94KCk7XG4gICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlcnZlci5maW5hbGl6ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogTG9hZHMgdGhlIGRlZmluaXRpb25zIGZvciBhIGRhdGFzZXQgaW50byB0aGUgZW52aXJvbm1lbnQsIGluY2x1ZGluZ1xuICogdGhlIGRhdGFzZXQgKGFzIGEgSlMgZmlsZSksIHRoZSBza3VscHQgYmluZGluZ3MsIGFuZCB0aGUgYmxvY2tseVxuICogYmluZGluZ3MuIFRoaXMgcmVxdWlyZXMgYWNjZXNzIHRvIGEgQ09SR0lTIHNlcnZlciwgYW5kIG9jY3Vyc1xuICogYXN5bmNocm9ub3VzbHkuIFRoZSByZXF1ZXN0cyBhcmUgZmlyZWQgYW5kIHRoZWlyIGRlZmVycmVkIG9iamVjdHNcbiAqIGFyZSByZXR1cm5lZCAtIGNhbGxlcnMgY2FuIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIHBlcmZvcm0gYW4gYWN0aW9uXG4gKiBvbiBjb21wbGV0aW9uIG9mIHRoZSBpbXBvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNsdWcgLSBUaGUgVVJMIHNhZmUgdmVyc2lvbiBvZiB0aGUgZGF0YXNldCBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSB1c2VyLWZyaWVuZGx5IHZlcnNpb24gb2YgdGhlIGRhdGFzZXQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheS48RGVmZXJyZWQ+fSAtIFJldHVybnMgdGhlIGFzeW5jIHJlcXVlc3RzIGFzIGRlZmVycmVkIG9iamVjdHMuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLmltcG9ydERhdGFzZXQgPSBmdW5jdGlvbiAoc2x1ZywgbmFtZSkge1xuICAgIGxldCB1cmxfcmV0cmlldmFscyA9IFtdO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJpbXBvcnREYXRhc2V0c1wiKSkge1xuICAgICAgICBsZXQgcm9vdCA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLnVybHMuaW1wb3J0RGF0YXNldHMgKyBcImJsb2NrcHkvXCIgKyBzbHVnICsgXCIvXCIgKyBzbHVnO1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5sb2FkaW5nRGF0YXNldHMucHVzaChuYW1lKTtcbiAgICAgICAgLy8gQWN0dWFsbHkgZ2V0IGRhdGFcbiAgICAgICAgbGV0IGdldERhdGFzZXQgPSAkLmdldFNjcmlwdChyb290ICsgXCJfZGF0YXNldC5qc1wiKTtcbiAgICAgICAgLy8gTG9hZCBnZXRDb21wbGV0ZSBzaWxlbnRseSBpbiB0aGUgYmFja2dyb3VuZCBiZWNhdXNlIGl0cyBiaWcgOihcbiAgICAgICAgbGV0IGdldENvbXBsZXRlID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2NvbXBsZXRlLmpzXCIpO1xuICAgICAgICBsZXQgZ2V0U2t1bHB0ID0gJC5nZXQocm9vdCArIFwiX3NrdWxwdC5qc1wiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bXCJzcmMvbGliL1wiICsgc2x1ZyArIFwiL19faW5pdF9fLmpzXCJdID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnZXRCbG9ja2x5ID0gJC5nZXRTY3JpcHQocm9vdCArIFwiX2Jsb2NrbHkuanNcIik7XG4gICAgICAgIC8vIE9uIGNvbXBsZXRpb24sIHVwZGF0ZSBtZW51cy5cbiAgICAgICAgJC53aGVuKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSkuZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZERhdGFzZXRzLnB1c2goc2x1Zyk7XG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0udGV4dFRvQmxvY2tzLmhpZGRlbkltcG9ydHMucHVzaChzbHVnKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5mb3JjZUJsb2NrUmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMucHl0aG9uRWRpdG9yLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmxvYWRpbmdEYXRhc2V0cy5yZW1vdmUobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmxfcmV0cmlldmFscy5wdXNoKGdldERhdGFzZXQsIGdldFNrdWxwdCwgZ2V0QmxvY2tseSk7XG4gICAgfVxuICAgIHJldHVybiB1cmxfcmV0cmlldmFscztcbn07XG5cbi8qKlxuICogT3BlbnMgYSBkaWFsb2cgYm94IHRvIHByZXNlbnQgdGhlIHVzZXIgd2l0aCB0aGUgZGF0YXNldHMgYXZhaWxhYmxlXG4gKiB0aHJvdWdoIHRoZSBDT1JHSVMgc2VydmVyLiBUaGlzIHJlcXVpcmVzIGEgY2FsbCwgc28gdGhpcyBtZXRob2RcbiAqIGNvbXBsZXRlcyBhc3luY2hyb25vdXNseS4gVGhlIGRpYWxvZyBpcyBjb21wb3NlZCBvZiBhIHRhYmxlIHdpdGhcbiAqIGJ1dHRvbnMgdG8gbG9hZCB0aGUgZGF0YXNldHMgKE1vcmUgdGhhbiBvbmUgZGF0YXNldCBjYW4gYmUgbG9hZGVkXG4gKiBmcm9tIHdpdGhpbiB0aGUgZGlhbG9nIGF0IGEgdGltZSkuXG4gKi9cbkJsb2NrUHlDb3JnaXMucHJvdG90eXBlLm9wZW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcImltcG9ydERhdGFzZXRzXCIpKSB7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscy5pbXBvcnREYXRhc2V0cztcbiAgICAgICAgJC5nZXRKU09OKHJvb3QgKyBcImluZGV4Lmpzb25cIiwgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHVwIHRoZSBCb2R5XG4gICAgICAgICAgICBsZXQgZGF0YXNldHMgPSBkYXRhLmJsb2NrcHk7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRhdGlvbiA9IHJvb3QrXCJibG9ja3B5L2luZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIGxldCBzdGFydCA9ICQoYDxwPkRvY3VtZW50YXRpb24gaXMgYXZhaWxhYmxlIGF0IDxhIGhyZWY9JyR7ZG9jdW1lbnRhdGlvbn0nIHRhcmdldD1fYmxhbms+dXJsPC9hPjwvcD5gKTtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJChcIjx0YWJsZT48L3RhYmxlPlwiLCB7XCJjbGFzc1wiOiBcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWRcIn0pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YXNldHMpLnNvcnQoKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2x1Z2dlZE5hbWUgPSBzbHVnKGRhdGFzZXRzW25hbWVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZU5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5Mb2FkPC9idXR0b24+Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGltZ1NyYyA9IHJvb3QrXCIuLi9pbWFnZXMvZGF0YXNldHMvXCIrbmFtZStcIi1pY29uLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZERhdGFzZXRzLmluZGV4T2Yoc2x1Z2dlZE5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsaWNrKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydERhdGFzZXQoc2x1Z2dlZE5hbWUsIFwiRGF0YSAtIFwiICsgZGF0YXNldHNbbmFtZV0udGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uTG9hZGVkKGJ0bik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2xldCBpbWcgPSBgPGltZyBzcmM9JyR7aW1nU3JjfScgY2xhc3M9XCJjb3JnaXMtaWNvblwiPmA7XG4gICAgICAgICAgICAgICAgJChcIjx0cj48L3RyPlwiKVxuICAgICAgICAgICAgICAgICAgICAvLy5hcHBlbmQoJChcIjx0ZD5cIiArIGltZyArIFwiPC90ZD5cIikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJChcIjx0ZD5cIiArIGRhdGFzZXRzW25hbWVdLnRpdGxlICsgXCI8L3RkPlwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkKFwiPHRkPlwiICsgZGF0YXNldHNbbmFtZV0ub3ZlcnZpZXcgKyBcIjwvdGQ+XCIpKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCQoXCI8dGQ+PC90ZD5cIikuYXBwZW5kKGJ0bikpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhib2R5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRUbyhzdGFydCk7XG4gICAgICAgICAgICAvLyBTaG93IHRoZSBhY3R1YWwgZGlhbG9nXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5kaWFsb2cuc2hvdyhcIkltcG9ydCBEYXRhc2V0c1wiLCBzdGFydCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1ODg1MTc1MjA3NzVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiQzovVXNlcnMvYWNiYXJ0L1Byb2plY3RzL2Jsb2NrcHktZWR1L2Jsb2NrcHkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiLi4vXCIsXCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU4ODUxNzUyMDc0NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9hY2JhcnQvUHJvamVjdHMvYmxvY2tweS1lZHUvYmxvY2tweS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIuLi9cIixcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBUT0RPOiBEeWFubWljYWxseSBwb3B1bGF0ZSBhcmlhLWxhYmVsbGVkYnkgaW4gdGhpcyBhbmQgb3RoZXIgcGxhY2VzXG5cbmV4cG9ydCBsZXQgRElBTE9HX0hUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz0nYmxvY2tweS1kaWFsb2cgbW9kYWwgaGlkZGVuJ1xuICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICBhcmlhLWxhYmVsPSdEaWFsb2cnXG4gICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZGlhbG9nIG1vZGFsLWxnJyByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnIHJvbGU9J3JlZ2lvbicgYXJpYS1sYWJlbD0nRGlhbG9nIGNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPkR5bmFtaWMgQ29udGVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21vZGFsLWJvZHknIHN0eWxlPSdtYXgtd2lkdGg6MTAwJTsgbWF4LWhlaWdodDo0MDBweCc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW9kYWwtZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLXdoaXRlIG1vZGVsLWNsb3NlJyBkYXRhLWRpc21pc3M9J21vZGFsJz5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tc3VjY2VzcyBtb2RhbC1va2F5JyBkYXRhLWRpc21pc3M9J21vZGFsJz5Pa2F5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBBIHV0aWxpdHkgb2JqZWN0IGZvciBxdWlja2x5IGFuZCBjb252ZW5pZW50bHkgZ2VuZXJhdGluZyBkaWFsb2cgYm94ZXMuXG4gKiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGRvZXNuJ3QgZHluYW1pY2FsbHkgY3JlYXRlIG5ldyBib3hlczsgaXQgcmV1c2VzIHRoZSBzYW1lIG9uZVxuICogb3ZlciBhbmQgb3ZlciBhZ2Fpbi4gSXQgdHVybnMgb3V0IGR5bmFtaWNhbGx5IGdlbmVyYXRpbmcgbmV3IGRpYWxvZyBib3hlc1xuICogaXMgYSBwYWluISBTbyB3ZSBjYW4ndCBzdGFjayB0aGVtLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlEaWFsb2d9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQmxvY2tQeURpYWxvZyhtYWluLCB0YWcpIHtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgdGhpcy50aXRsZVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgIHRoaXMuYm9keVRhZyA9IHRhZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdGhpcy5mb290ZXJUYWcgPSB0YWcuZmluZChcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uID0gdGFnLmZpbmQoXCIubW9kYWwtb2theVwiKTtcblxuICAgIHRoaXMueWVzID0gKCkgPT4ge307XG4gICAgdGhpcy5va2F5QnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy55ZXMoKTtcbiAgICAgICAgdGhpcy50YWcubW9kYWwoXCJoaWRlXCIpO1xuICAgIH0pO1xufVxuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRhZy5tb2RhbChcImhpZGVcIik7XG59O1xuXG4vKipcbiAqIEEgc2ltcGxlIGV4dGVybmFsbHkgYXZhaWxhYmxlIGZ1bmN0aW9uIGZvciBwb3BwaW5nIHVwIGEgZGlhbG9nXG4gKiBtZXNzYWdlLiBUaGlzIG1lbnUgd2lsbCBiZSBkcmFnZ2FibGUgYnkgaXRzIHRpdGxlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWVzc2FnZSBkaWFsb2cuIENhbiBoYXZlIEhUTUwuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keSAtIFRoZSBib2R5IG9mIHRoZSBtZXNzYWdlIGRpYWxvZy4gQ2FuIGhhdmUgSFRNTC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uY2xvc2UgLSBBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgZGlhbG9nLlxuICovXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHRpdGxlLCBib2R5LCBvbmNsb3NlKSB7XG4gICAgdGhpcy50aXRsZVRhZy5odG1sKHRpdGxlKTtcbiAgICB0aGlzLmJvZHlUYWcuaHRtbChib2R5KTtcbiAgICB0aGlzLnRhZy5tb2RhbChcInNob3dcIik7XG4gICAgdGhpcy5va2F5QnV0dG9uLmhpZGUoKTtcbiAgICB0aGlzLnRhZy5kcmFnZ2FibGUoe1xuICAgICAgICBcImhhbmRsZVwiOiBcIi5tb2RhbC10aXRsZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnRhZy5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25jbG9zZSAhPT0gdW5kZWZpbmVkICYmIG9uY2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuY29uZmlybSA9IGZ1bmN0aW9uICh0aXRsZSwgYm9keSwgeWVzLCBubywgeWVzVGV4dCkge1xuICAgIGlmICh5ZXNUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWVzVGV4dCA9IFwiT2theVwiO1xuICAgIH1cbiAgICB0aGlzLnNob3codGl0bGUsIGJvZHksIG5vKTtcbiAgICB0aGlzLnllcyA9IHllcztcbiAgICB0aGlzLm9rYXlCdXR0b24uc2hvdygpLmh0bWwoeWVzVGV4dCk7XG4gICAgLy8gVE9ETzogYWRkIG9rYXkgYnV0dG9uIGFuZCBjYW5jZWwgYnV0dG9uXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5BU1NJR05NRU5UX1ZFUlNJT05fQ0hBTkdFRCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbmZpcm0oXCJBc3NpZ25tZW50IENoYW5nZWRcIiwgXCJZb3VyIGluc3RydWN0b3IgaGFzIG1hZGUgY2hhbmdlcyB0byB0aGlzIGFzc2lnbm1lbnQuIFdvdWxkIHlvdSBsaWtlIHRvIHJlbG9hZD8gQWxsIHlvdXIgd29yayBoYXMgYmVlbiBzYXZlZC5cIiwpO1xufTtcblxuQmxvY2tQeURpYWxvZy5wcm90b3R5cGUuRVJST1JfTE9BRElOR19BU1NJR05NTkVOVCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEFzc2lnbm1lbnRcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgYXNzaWdubWVudC48YnI+XG5QbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uPGJyPlJlc3BvbnNlIGZyb20gc2VydmVyIHdhczo8YnI+PHByZT4ke3JlYXNvbn08L3ByZT5gLCk7XG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5TQ1JFRU5TSE9UX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPXG59O1xuXG5CbG9ja1B5RGlhbG9nLnByb3RvdHlwZS5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBVcGRhdGluZyBTdWJtaXNzaW9uIFN0YXR1c1wiLCBgQmxvY2tQeSBlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyB5b3VyIHN1Ym1pc3Npb24gc3RhdHVzLjxicj5cblBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi5gKTtcbn07XG5cbkJsb2NrUHlEaWFsb2cucHJvdG90eXBlLkVSUk9SX0xPQURJTkdfSElTVE9SWSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3coXCJFcnJvciBMb2FkaW5nIEhpc3RvcnlcIiwgYEJsb2NrUHkgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2hpbGUgbG9hZGluZyB5b3VyIGhpc3RvcnkuPGJyPlxuUGxlYXNlIHJlbG9hZCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLmApO1xufTtcbiIsImltcG9ydCB7RWRpdG9yc30gZnJvbSBcIi4uL2VkaXRvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlKG1vZGVsLCBldmVudCkge1xyXG4gICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZSA9PlxyXG4gICAgICAgIG1vZGVsLnVpLmVkaXRvcnMuY3VycmVudCgpLnVwbG9hZEZpbGUoZSlcclxuICAgICk7XHJcbiAgICBmaWxlUmVhZGVyLmZpbGVOYW1lID0gZmlsZXNbMF0ubmFtZTtcclxuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2dpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkRmlsZShtb2RlbCwgZXZlbnQpIHtcclxuICAgIGxldCB7bmFtZSwgZXh0ZW5zaW9uLCBjb250ZW50cywgbWltZXR5cGV9ID0gbW9kZWwudWkuZWRpdG9ycy5jdXJyZW50KCkuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAvLyBNYWtlIHNhZmVcclxuICAgIG5hbWUgPSBzbHVnZ2lmeShuYW1lKTtcclxuICAgIG5hbWUgPSBuYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgLy8gTWFrZSB0aGUgZGF0YSBkb3dubG9hZCBhcyBhIGZpbGVcclxuICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NvbnRlbnRzXSwge3R5cGU6IG1pbWV0eXBlfSk7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIG5hbWUpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGxldCB0ZW1wb3JhcnlEb3dubG9hZExpbmsgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdGVtcG9yYXJ5RG93bmxvYWRMaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcG9yYXJ5RG93bmxvYWRMaW5rKTtcclxuICAgICAgICB0ZW1wb3JhcnlEb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBvcmFyeURvd25sb2FkTGluayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcclxuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0gPSBtYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLmRlbGV0ZUZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZmlsZW5hbWUoXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IoXCJhbnN3ZXIucHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWxlRGVsZXRlZCgpIHtcclxuICAgICAgICAvLyBUT0RPOiBTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIGZpbGUgaW5zdGVhZCBvZiBhIGRlZmF1bHQgZmlsZVxyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVkaXRvcnMuY2hhbmdlRWRpdG9yKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsZVVwZGF0ZWQoZmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlLmZpbGVuYW1lID09PSB0aGlzLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlID0gZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5jaGFuZ2VFZGl0b3IodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlU3lzdGVtLnN0b3BXYXRjaGluZ0ZpbGUodGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy50cmFja0N1cnJlbnRGaWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQ3VycmVudEZpbGUoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlU3lzdGVtLndhdGNoRmlsZSh0aGlzLmZpbGVuYW1lLCB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQ6IHRoaXMub25GaWxlVXBkYXRlZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkZWxldGVkOiB0aGlzLm9uRmlsZURlbGV0ZWQuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbmV3RmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5maWxlU3lzdGVtLmdldEZpbGUobmV3RmlsZW5hbWUpO1xyXG4gICAgICAgIHRoaXMudHJhY2tDdXJyZW50RmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuZXdGaWxlbmFtZSAtIHRoZSBmaWxlbmFtZSB0aGF0IHRoZSBvdGhlciBlZGl0b3Igd2lsbCBiZSBzd2l0Y2hpbmcgdG9cclxuICAgICAqIEBwYXJhbSBvbGRFZGl0b3JcclxuICAgICAqIEBwYXJhbSBuZXdFZGl0b3JcclxuICAgICAqL1xyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uc3RvcFdhdGNoaW5nRmlsZSh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBldmVudC50YXJnZXQuZmlsZU5hbWU7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHRoaXMuZmlsZW5hbWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbjogZmlsZW5hbWUudHlwZSxcclxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMuZmlsZS5oYW5kbGUoKSxcclxuICAgICAgICAgICAgbWltZXR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5pbXBvcnQge0Rpc3BsYXlNb2Rlc30gZnJvbSBcIi4vcHl0aG9uXCI7XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTID0gW1xyXG4gICAgW1widG9vbGJveFwiLCBcInRvb2xib3hcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiV2hpY2ggdmVyc2lvbiBvZiB0aGUgdG9vbGJveCB0byBwcmVzZW50IHRvIHRoZSB1c2VyLlwiXSxcclxuICAgIFtcInBhc3Njb2RlXCIsIFwicGFzc2NvZGVcIiwgXCJcIiwgXCJzdHJpbmdcIiwgXCJBIHN0cmluZyB0aGF0IHRoZSB1c2VyIG11c3QgZW50ZXIgdG8gYWNjZXNzIHRoZSBwcm9ibGVtLiBJZiBibGFuaywgdGhlbiBubyBwYXNzY29kZSBpcyBwcm9tcHRlZC5cIl0sXHJcbiAgICAvL1tcInRvb2xib3hMZXZlbFwiLCBcInRvb2xib3hfbGV2ZWxcIiwgXCJub3JtYWxcIiwgXCJ0b29sYm94XCIsIFwiSU5DT01QTEVURTogV2hhdCBsZXZlbCBvZiB0b29sYm94IHRvIHByZXNlbnQgdG8gdGhlIHVzZXIgKGhpZGluZyBhbmQgc2hvd2luZyBjYXRlZ29yaWVzKS5cIl0sXHJcbiAgICBbXCJzdGFydFZpZXdcIiwgXCJzdGFydF92aWV3XCIsIERpc3BsYXlNb2Rlcy5TUExJVCwgRGlzcGxheU1vZGVzLCBcIlRoZSBQeXRob24gZWRpdG9yIG1vZGUgdG8gc3RhcnQgaW4gd2hlbiB0aGUgc3R1ZGVudCBzdGFydHMgdGhlIHByb2JsZW0uXCJdLFxyXG4gICAgW1wiZGF0YXNldHNcIiwgXCJkYXRhc2V0c1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlRoZSBjdXJyZW50IGxpc3Qgb2YgZGF0YXNldHMgYXZhaWxhYmxlIG9uIGxvYWQgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlwiXSxcclxuICAgIFtcImRpc2FibGVUaW1lb3V0XCIsIFwiZGlzYWJsZV90aW1lb3V0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHN0dWRlbnRzIGNvZGUgaXMgYWxsb3dlZCB0byBydW4gd2l0aG91dCB0aW1lb3V0cyAocG90ZW50aWFsbHkgYWxsb3dpbmcgaW5maW5pdGUgbG9vcHMpLlwiXSxcclxuICAgIFtcImlzUGFyc29uc1wiLCBcImlzX3BhcnNvbnNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhpcyBpcyBhIHBhcnNvbidzIHN0eWxlIHF1ZXN0aW9uIChqdW1ibGVkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRmVlZGJhY2tcIiwgXCJkaXNhYmxlX2ZlZWRiYWNrXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIG5vIGluc3RydWN0b3Igc2NyaXB0cyBhcmUgcnVuIChlLmcuLCBvbl9ydW4gYW5kIG9uX2V2YWwpLlwiXSxcclxuICAgIFtcImRpc2FibGVJbnN0cnVjdG9yUnVuXCIsIFwiZGlzYWJsZV9pbnN0cnVjdG9yX3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgaW5zdHJ1Y3RvciBvbl9ydW4gd2lsbCBub3QgYXV0b21hdGljYWxseSBydW4gdGhlIHN0dWRlbnRzJyBjb2RlLiBUaGlzIHN0aWxsIHJ1bnMgdGhlIHN0dWRlbnRzJyBjb2RlLlwiXSxcclxuICAgIFtcImRpc2FibGVTdHVkZW50UnVuXCIsIFwiZGlzYWJsZV9zdHVkZW50X3J1blwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgcnVuIGJ1dHRvbiBubyBsb25nZXIgcnVuIHRoZSBzdHVkZW50cycgY29kZS4gVGhpcyBzdGlsbCBydW5zIHRoZSBpbnN0cnVjdG9yJ3MgZmVlZGJhY2sgb25fcnVuIHNjcmlwdC5cIl0sXHJcbiAgICBbXCJkaXNhYmxlVGlmYVwiLCBcImRpc2FibGVfdGlmYVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBkbyBub3QgYXV0b21hdGljYWxseSBydW4gVGlmYSAod2hpY2ggY2FuIGJlIHNsb3cpLlwiXSxcclxuICAgIFtcImRpc2FibGVUcmFjZVwiLCBcImRpc2FibGVfdHJhY2VcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNvZGUgd2lsbCBub3QgaGF2ZSBpdHMgZXhlY3V0aW9uIHRyYWNlZCAobm8gdmFyaWFibGVzIHJlY29yZGVkLCBubyBjb3ZlcmFnZSB0cmFja2VkKS5cIl0sXHJcbiAgICBbXCJkaXNhYmxlRWRpdFwiLCBcImNhbl9lZGl0XCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50cycgZmlsZSB3aWxsIG5vdCBiZSBlZGl0YWJsZSBhdCBhbGwuXCJdLFxyXG4gICAgW1wiZW5hYmxlQmxvY2tzXCIsIFwiY2FuX2Jsb2Nrc1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIHRoZSBzdHVkZW50IGNhbm5vdCBlZGl0IHRoZSBibG9jayBpbnRlcmZhY2UgKGFsdGhvdWdoIGl0IGlzIHZpc2libGUpLlwiXSxcclxuICAgIFtcIm9ubHlJbnRlcmFjdGl2ZVwiLCBcIm9ubHlfaW50ZXJhY3RpdmVcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZSBlZGl0b3JzIGFyZSBoaWRkZW4sIHRoZSBwcm9ncmFtIGlzIGF1dG9tYXRpY2FsbHkgcnVuLCBhbmQgdGhlbiB0aGUgY29uc29sZSBlbnRlcnMgRXZhbCBtb2RlIChpbnRlcmFjdGl2ZSkuXCJdLFxyXG4gICAgW1wib25seVVwbG9hZHNcIiwgXCJvbmx5X3VwbG9hZHNcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIHVuY2hlY2tlZCwgdGhlbiB0aGUgc3R1ZGVudHMnIGZpbGUgd2lsbCBub3QgYmUgZGlyZWN0bHkgZWRpdGFibGUgKHRoZXkgd2lsbCBoYXZlIHRvIHVwbG9hZCBzdWJtaXNzaW9ucykuXCJdLFxyXG4gICAgLy8gV2hhdCBtZW51cy9mZWVkYmFjayB0byBzaG93IGFuZCBoaWRlXHJcbiAgICBbXCJoaWRlU3VibWlzc2lvblwiLCBcImhpZGVfc3VibWlzc2lvblwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBzdWJtaXNzaW9uJ3MgY29kZSBvciBoaXN0b3J5IG9uIENhbnZhcy5cIl0sXHJcbiAgICBbXCJoaWRlRmlsZXNcIiwgXCJoaWRlX2ZpbGVzXCIsIHRydWUsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gc3R1ZGVudHMgd2lsbCBub3Qgc2VlIHRoZSBWaWV3IEZpbGVzIHRvb2xiYXIuXCJdLFxyXG4gICAgW1wiaGlkZVF1ZXVlZElucHV0c1wiLCBcImhpZGVfcXVldWVkX2lucHV0c1wiLCB0cnVlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiB1bmNoZWNrZWQsIHRoZW4gdGhlIHN0dWRlbnRzIGNhbiBhY2Nlc3MgdGhlIHF1ZXVlZCBpbnB1dHMgYm94IChtYWtlcyByZXBlYXRlZCBkZWJ1Z2dpbmcgZWFzaWVyIGZvciB0aGUgaW5wdXQgZnVuY3Rpb24pLlwiXSxcclxuICAgIFtcImhpZGVFZGl0b3JzXCIsIFwiaGlkZV9lZGl0b3JzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJZiBjaGVja2VkLCB0aGVuIGFsbCBvZiB0aGUgZWRpdG9ycyBhcmUgaGlkZGVuLlwiXSxcclxuICAgIFtcImhpZGVBbGxcIiwgXCJoaWRlX2FsbFwiLCBmYWxzZSwgXCJib29sXCIsIFwiSU5DT01QTEVURTogSWYgY2hlY2tlZCwgdGhlbiB0aGUgZW50aXJlIGludGVyZmFjZSBpcyBoaWRkZW4uXCJdLFxyXG4gICAgW1wiaGlkZUV2YWx1YXRlXCIsIFwiaGlkZV9ldmFsdWF0ZVwiLCBmYWxzZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiB0aGUgRXZhbHVhdGUgYnV0dG9uIGlzIG5vdCBzaG93biBvbiB0aGUgY29uc29sZS5cIl0sXHJcbiAgICBbXCJoaWRlSW1wb3J0RGF0YXNldHNCdXR0b25cIiwgXCJoaWRlX2ltcG9ydF9kYXRhc2V0c19idXR0b25cIiwgdHJ1ZSwgXCJib29sXCIsIFwiSWYgY2hlY2tlZCwgdGhlbiBzdHVkZW50cyBjYW5ub3Qgc2VlIHRoZSBpbXBvcnQgZGF0YXNldHMgYnV0dG9uLlwiXSxcclxuICAgIC8vIFRPRE86IEZpeCB0aGlzIG9uZSB0byBiZSBzZXR0YWJsZVxyXG4gICAgW1wiaGlkZUltcG9ydFN0YXRlbWVudHNcIiwgXCJoaWRlX2ltcG9ydF9zdGF0ZW1lbnRzXCIsIGZhbHNlLCBcImJvb2xcIiwgXCJJTkNPTVBMRVRFOiBJZiBjaGVja2VkLCBjZXJ0YWluIGtpbmRzIG9mIGltcG9ydCBzdGF0ZW1lbnRzIChtYXRwbG90bGliLCB0dXJ0bGUsIGRhdGFzZXRzKSBhcmUgbm90IHNob3duIGluIHRoZSBibG9jayBpbnRlcmZhY2UuXCJdLFxyXG4gICAgW1wiaGlkZUNvdmVyYWdlQnV0dG9uXCIsIFwiaGlkZV9jb3ZlcmFnZV9idXR0b25cIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklOQ09NUExFVEU6IElmIGNoZWNrZWQsIHRoZSBjb3ZlcmFnZSBidXR0b24gaXMgbm90IHNob3duLlwiXSxcclxuICAgIFtcInNhdmVUdXJ0bGVPdXRwdXRcIiwgXCJzYXZlX3R1cnRsZV9vdXRwdXRcIiwgZmFsc2UsIFwiYm9vbFwiLCBcIklmIGNoZWNrZWQsIHRoZW4gdHVydGxlIG91dHB1dCBpcyBzYXZlZCB3aGVuZXZlciB0aGUgcHJvZ3JhbSB1c2VzIGl0LlwiXSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvY3VtZW50YXRpb24obmFtZSkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgQVNTSUdOTUVOVF9TRVRUSU5HUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzBdID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBU1NJR05NRU5UX1NFVFRJTkdTW2ldWzRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIkRvY3VtZW50YXRpb24gbm90IGZvdW5kIGZvciBmaWVsZFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlU3RhcnRWaWV3VGFiKG5hbWUsIGljb24sIG1vZGUpIHtcclxuICAgIHJldHVybiBgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBibG9ja3B5LW1vZGUtc2V0LWJsb2Nrc1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6IGFzc2lnbm1lbnQuc2V0dGluZ3Muc3RhcnRWaWV3KCkgPT09ICcke21vZGV9J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBhc3NpZ25tZW50LnNldHRpbmdzLnN0YXJ0Vmlldy5iaW5kKCRkYXRhLCAnJHttb2RlfScpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLSR7aWNvbn0nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYmxvY2tweS1zdGFydC12aWV3LXNldFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNoZWNrZWQ+ICR7bmFtZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5gO1xyXG59XHJcblxyXG5jb25zdCBBU1NJR05NRU5UX1NFVFRJTkdTX0JPT0xFQU5fQ09NUE9ORU5UU19IVE1MID0gQVNTSUdOTUVOVF9TRVRUSU5HU1xyXG4gICAgLy8gT25seSBoYW5kbGUgdGhlIHNpbXBsZSBib29sZWFucyB0aGlzIHdheVxyXG4gICAgLmZpbHRlcigoc2V0dGluZykgPT4gc2V0dGluZ1szXSA9PT0gXCJib29sXCIpXHJcbiAgICAubWFwKChzZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IHByZXR0eU5hbWUgPSBzZXR0aW5nWzFdLnNwbGl0KFwiX1wiKS5tYXAod29yZD0+KHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrd29yZC5zbGljZSgxKSkpLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCI+JHtwcmV0dHlOYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy0ke3NldHRpbmdbMF19XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnNldHRpbmdzLiR7c2V0dGluZ1swXX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZXR0aW5nWzRdfVxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pLmpvaW4oXCJcXG5cXG5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgQVNTSUdOTUVOVF9TRVRUSU5HU19FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXZpZXctc2V0dGluZ3NcIj5cclxuICAgIFxyXG4gICAgPGZvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5zZXR0aW5ncy5zYXZlXCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3R1ZGVudC1mYWNpbmcgbmFtZSBvZiB0aGUgYXNzaWdubWVudC4gQXNzaWdubWVudHMgd2l0aGluIGEgZ3JvdXAgYXJlIG9yZGVyZWQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICAgICAgICAgICAgICBieSB0aGVpciBuYW1lLCBzbyB5b3UgbWF5IHdhbnQgdG8gdXNlIGEgbmFtaW5nIHNjaGVtZSBsaWtlIFwiIzQzLjUpIFdoYXRldmVyXCIuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdXJsXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+VVJMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLXVybFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC51cmxcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGNvdXJzZS11bmlxdWUgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uc2lzdGVudGx5IHJlZmVyIHRvIHRoaXMgYXNzaWdubWVudC4gXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXB1YmxpY1wiPlB1YmxpYzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcHVibGljXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBhc3NpZ25tZW50LnB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHVibGljLCB1c2VycyBvdXRzaWRlIG9mIHRoZSBjb3Vyc2Ugd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgdGhlIGFzc2lnbm1lbnQgaW4gY291cnNlIGxpc3RpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1oaWRkZW5cIj5IaWRkZW46PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJibG9ja3B5LXNldHRpbmdzLWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgaGlkZGVuLCBzdHVkZW50cyB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSB0aGVpciBncmFkZSB3aGlsZSB3b3JraW5nIG9uIHRoZSBhc3NpZ25tZW50LlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiPlJldmlld2VkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy1yZXZpZXdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2hlY2tlZDogYXNzaWdubWVudC5yZXZpZXdlZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiByZXZpZXdlZCwgdGhlIGFzc2lnbm1lbnQgbmVlZCB0byBiZSBjb21tZW50ZWQgdXBvbiBhbmQgcmVncmFkZWQgYnkgdGhlIHN0YWZmIGFmdGVyIHN1Ym1pc3Npb24uXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXJldmlld2VkXCI+U3RhcnRpbmcgVmlldzo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgbXItMlwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7bWFrZVN0YXJ0Vmlld1RhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiU3BsaXRcIiwgXCJjb2x1bW5zXCIsIERpc3BsYXlNb2Rlcy5TUExJVCl9XHJcbiAgICAgICAgICAgICAgICAgICAgJHttYWtlU3RhcnRWaWV3VGFiKFwiVGV4dFwiLCBcImFsaWduLWxlZnRcIiwgRGlzcGxheU1vZGVzLlRFWFQpfVxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInN0YXJ0Vmlld1wiKX1cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmxvY2tweS1zZXR0aW5ncy1pcC1yYW5nZXNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5JUCBSYW5nZXM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtaXAtcmFuZ2VzXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZhbHVlOiBhc3NpZ25tZW50LmlwUmFuZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBJUCBBZGRyZXNzZXMgdGhhdCB3aWxsIGJlIGV4cGxpY2l0bHkgYWxsb3dlZC4gSWYgYmxhbmssXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbiBhbGwgYWRkcmVzc2VzIGFyZSBhbGxvd2VkLiBJZiBhbiBhZGRyZXNzIHN0YXJ0cyB3aXRoIDxjb2RlPl48L2NvZGU+IHRoZW4gaXQgaXQgaXMgZXhwbGljaXRseVxyXG4gICAgICAgICAgICAgICAgICAgIGJsYWNrbGlzdGVkLCBidXQgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0dXJuIHdpdGggYSA8Y29kZT4hPC9jb2RlPi4gQWRkcmVzc2VzIGNhbiBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZSBhIGJpdCBtYXNrIHRvIGFsbG93IGEgcmFuZ2Ugb2YgYWRkcmVzc2VzLlxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LXNldHRpbmdzLXBhc3Njb2RlXCIgY2xhc3M9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0XCI+UGFzc2NvZGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtcGFzc2NvZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MucGFzc2NvZGVcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwicGFzc2NvZGVcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHRcIj5QcmVsb2FkZWQgRGF0YXNldHM6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJsb2NrcHktc2V0dGluZ3MtZGF0YXNldHNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwidmFsdWU6IGFzc2lnbm1lbnQuc2V0dGluZ3MuZGF0YXNldHNcIj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXREb2N1bWVudGF0aW9uKFwiZGF0YXNldHNcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktc2V0dGluZ3MtdG9vbGJveFwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodFwiPkJsb2NrIFRvb2xib3g6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYmxvY2tweS1zZXR0aW5ncy10b29sYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2YWx1ZTogYXNzaWdubWVudC5zZXR0aW5ncy50b29sYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9ybWFsXCI+Tm9ybWFsIFRvb2xib3g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjdFwiPkNUQFZUIFRvb2xib3g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaW5pbWFsXCI+TWluaW1hbCBTZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmdWxsXCI+QWxsIEJsb2Nrczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0RG9jdW1lbnRhdGlvbihcInRvb2xib3hcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke0FTU0lHTk1FTlRfU0VUVElOR1NfQk9PTEVBTl9DT01QT05FTlRTX0hUTUx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVBc3NpZ25tZW50U2V0dGluZ3MobW9kZWwpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgIGxldCBjbGllbnROYW1lID0gc2V0dGluZ1swXSwgc2VydmVyTmFtZSA9IHNldHRpbmdbMV0sIGRlZmF1bHRWYWx1ZSA9IHNldHRpbmdbMl07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXSgpO1xyXG4gICAgICAgIC8vIE9ubHkgc3RvcmUgdGhpcyBzZXR0aW5nIGlmIGl0cyBkaWZmZXJlbnQgZnJvbSB0aGUgZGVmYXVsdFxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW3NlcnZlck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFzc2lnbm1lbnRTZXR0aW5ncyhtb2RlbCwgc2V0dGluZ3MpIHtcclxuICAgIGlmIChzZXR0aW5ncykge1xyXG4gICAgICAgIHNldHRpbmdzID0gSlNPTi5wYXJzZShzZXR0aW5ncyk7XHJcbiAgICAgICAgQVNTSUdOTUVOVF9TRVRUSU5HUy5mb3JFYWNoKHNldHRpbmcgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50TmFtZSA9IHNldHRpbmdbMF0sIHNlcnZlck5hbWUgPSBzZXR0aW5nWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VydmVyTmFtZSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuYXNzaWdubWVudC5zZXR0aW5nc1tjbGllbnROYW1lXShzZXR0aW5nc1tzZXJ2ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzW2NsaWVudE5hbWVdKHNldHRpbmdbMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5zdGFydF92aWV3KSB7XHJcbiAgICAgICAgICAgIG1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZShzZXR0aW5ncy5zdGFydF92aWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXNzaWdubWVudFNldHRpbmdzTW9kZWwoY29uZmlndXJhdGlvbikge1xyXG4gICAgbGV0IHNldHRpbmdzID0ge307XHJcbiAgICBBU1NJR05NRU5UX1NFVFRJTkdTLmZvckVhY2goc2V0dGluZyA9PiB7XHJcbiAgICAgICAgbGV0IGNsaWVudE5hbWUgPSBzZXR0aW5nWzBdLCBzZXJ2ZXJOYW1lID0gc2V0dGluZ1sxXSwgZGVmYXVsdFZhbHVlID0gc2V0dGluZ1syXSxcclxuICAgICAgICAgICAgZmllbGRUeXBlID0gc2V0dGluZ1szXTtcclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbltzZXJ2ZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2NsaWVudE5hbWVdID0ga28ub2JzZXJ2YWJsZShkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb25maWdWYWx1ZSA9IGNvbmZpZ3VyYXRpb25bXCJhc3NpZ25tZW50LnNldHRpbmdzLlwiK3NlcnZlck5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRUeXBlID09PSBcImJvb2xcIikge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnVmFsdWUgPSBjb25maWdWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXR0aW5nc1tjbGllbnROYW1lXSA9IGtvLm9ic2VydmFibGUoY29uZmlnVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuY2xhc3MgQXNzaWdubWVudFNldHRpbmdzVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAvL1RPRE86IHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSByZWxldmFudCBGaWxlXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uID0gdGhpcy5maWxlLmhhbmRsZS5zdWJzY3JpYmUodGhpcy51cGRhdGVFZGl0b3IuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTm90aWZ5IHJlbGV2YW50IGZpbGUgb2YgY2hhbmdlcyB0byBCTVxyXG4gICAgICAgIHRoaXMuY3VycmVudExpc3RlbmVyID0gdGhpcy51cGRhdGVIYW5kbGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiB0aGlzLmNvZGVNaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogRG8gdXBkYXRlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGUuaGFuZGxlKHRoaXMuY29kZU1pcnJvci52YWx1ZSgpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yLCBuZXdFZGl0b3IpIHtcclxuICAgICAgICAvLyBSZW1vdmUgc3Vic2NyaWJlclxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBUT0RPOiB1cGRhdGVcclxuICAgICAgICAvL3RoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHN1cGVyLmV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBc3NpZ25tZW50U2V0dGluZ3MgPSB7XHJcbiAgICBuYW1lOiBcIkFzc2lnbm1lbnQgU2V0dGluZ3NcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIiFhc3NpZ25tZW50X3NldHRpbmdzLmJsb2NrcHlcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogQXNzaWdubWVudFNldHRpbmdzVmlldyxcclxuICAgIHRlbXBsYXRlOiBBU1NJR05NRU5UX1NFVFRJTkdTX0VESVRPUl9IVE1MXHJcbn07IiwiaW1wb3J0IHtBYnN0cmFjdEVkaXRvcn0gZnJvbSBcIi4vYWJzdHJhY3RfZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTUFSS0RPV05fRURJVE9SX0hUTUwgPSBgXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJibG9ja3B5LWVkaXRvci1tYXJrZG93blwiPjwvdGV4dGFyZWE+ICAgIFxyXG5gO1xyXG5cclxuXHJcbmNsYXNzIE1hcmtkb3duRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5tZGUgPSBuZXcgRWFzeU1ERSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRhZy5maW5kKFwiLmJsb2NrcHktZWRpdG9yLW1hcmtkb3duXCIpWzBdLFxyXG4gICAgICAgICAgICBhdXRvRG93bmxvYWRGb250QXdlc29tZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcmNlU3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjUwMHB4XCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGltYWdlVXBsb2FkRnVuY3Rpb25cclxuICAgICAgICAgICAgcmVuZGVyaW5nQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjb2RlU3ludGF4SGlnaGxpZ2h0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmRlbnRXaXRoVGFiczogZmFsc2UsXHJcbiAgICAgICAgICAgIHRhYlNpemU6IDQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBzdXBlci5lbnRlcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IodGhpcy5maWxlLmhhbmRsZSgpKTtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHJlbGV2YW50IEZpbGVcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24gPSB0aGlzLmZpbGUuaGFuZGxlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUVkaXRvci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGlzdGVuZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub24oXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChvbGRFZGl0b3IgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgLy8gRGVsYXkgc28gdGhhdCBldmVyeXRoaW5nIGlzIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5tZGUuY29kZW1pcnJvciksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFZGl0b3IobmV3Q29udGVudHMpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWRlLnZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tZGUuY29kZW1pcnJvci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXJ0eSA9ICF0aGlzLmRpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMubWRlLnZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubWRlLmNvZGVtaXJyb3Iub2ZmKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBzdXBlci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFya2Rvd25FZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIk1hcmtkb3duXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIubWRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogTWFya2Rvd25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IE1BUktET1dOX0VESVRPUl9IVE1MXHJcbn07IiwiLyoqXHJcbiAqIFRPRE86IHJlbmFtZSBmaWxlcywgbWFudWFsIHNhdmUsIHRhZ3MsIHNhbXBsZV9zdWJtaXNzaW9ucywgb25fZXZhbCwgbm9uLWJ1aWx0aW4gZmlsZXNcclxuICogVE9ETzogaW1wb3J0IGRhdGEsIGhpc3RvcnksIHJ1biwgdXJsX2RhdGEsIGFzc2lnbm1lbnRfc2V0dGluZ3MsIHBhcnNvbnNfbW9kZVxyXG4gKiBUT0RPOiBkZWxldGUgYmVjb21lcyBcImNsZWFyXCIgZm9yIGluc3RydWN0b3IgZmlsZXNcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQGVudW0ge3N0cn1cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3RFZGl0b3IsIHNsdWdnaWZ5fSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuaW1wb3J0IHtISVNUT1JZX1RPT0xCQVJfSFRNTH0gZnJvbSBcIi4uL2hpc3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgRGlzcGxheU1vZGVzID0ge1xyXG4gICAgQkxPQ0s6IFwiYmxvY2tcIixcclxuICAgIFNQTElUOiBcInNwbGl0XCIsXHJcbiAgICBURVhUOiBcInRleHRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFrZVRhYihuYW1lLCBpY29uLCBtb2RlKSB7XHJcbiAgICByZXR1cm4gYDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYmxvY2tweS1tb2RlLXNldC1ibG9ja3NcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LnB5dGhvbk1vZGUoKSA9PT0gJyR7bW9kZX0nfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLnVwZGF0ZU1vZGUuYmluZCgkZGF0YSwgJyR7bW9kZX0nKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS0ke2ljb259Jz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImJsb2NrcHktbW9kZS1zZXRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkPiAke25hbWV9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBZVEhPTl9FRElUT1JfSFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJibG9ja3B5LXB5dGhvbi10b29sYmFyIGNvbC1tZC0xMiBidG4tdG9vbGJhclwiXHJcbiAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIlB5dGhvbiBUb29sYmFyXCI+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUnVuIEdyb3VwXCI+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJsb2NrcHktcnVuXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5leGVjdXRlLnJ1bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzczogeydibG9ja3B5LXJ1bi1ydW5uaW5nJzogdWkuZXhlY3V0ZS5pc1J1bm5pbmd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9zcGFuPiBSdW5cclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSBtci0yXCIgZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIDwhLS0ga28gaWY6ICRyb290LmFzc2lnbm1lbnQuc2V0dGluZ3MuZW5hYmxlQmxvY2tzKCkgLS0+XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIkJsb2Nrc1wiLCBcInRoLWxhcmdlXCIsIERpc3BsYXlNb2Rlcy5CTE9DSyl9XHJcbiAgICAgICAgICAgICR7bWFrZVRhYihcIlNwbGl0XCIsIFwiY29sdW1uc1wiLCBEaXNwbGF5TW9kZXMuU1BMSVQpfVxyXG4gICAgICAgICAgICAke21ha2VUYWIoXCJUZXh0XCIsIFwiYWxpZ24tbGVmdFwiLCBEaXNwbGF5TW9kZXMuVEVYVCl9XHJcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZXNldCBHcm91cFwiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLXN5bmNcIj48L3NwYW4+IFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkltcG9ydCBHcm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMuaW1wb3J0RGF0YXNldFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtY2xvdWQtZG93bmxvYWQtYWx0XCI+PC9zcGFuPiBJbXBvcnQgZGF0YXNldHNcclxuICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9zcGFuPiBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJibG9ja3B5LXRvb2xiYXItdXBsb2FkXCIgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiZXZlbnQ6IHtjaGFuZ2U6IHVpLmVkaXRvcnMudXBsb2FkfVwiPlxyXG4gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtc3BsaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZXRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIERyb3Bkb3duPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0nZHJvcGRvd24taXRlbSBibG9ja3B5LXRvb2xiYXItZG93bmxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLmRvd25sb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1kb3dubG9hZCc+PC9zcGFuPiBEb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJIaXN0b3J5IEdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24udG9nZ2xlSGlzdG9yeU1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdWkuZWRpdG9ycy5weXRob24uaXNIaXN0b3J5QXZhaWxhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M6IHsgYWN0aXZlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHI6IHsgJ2FyaWEtcHJlc3NlZCc6IGRpc3BsYXkuaGlzdG9yeU1vZGUgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaGlzdG9yeVwiPjwvc3Bhbj4gSGlzdG9yeVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPCEtLSBGdWxseSBmdW5jdGlvbmFsLCBidXQgYSBsaXR0bGUgdG9vLi4gSW52YXNpdmUgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbXItMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogZGlzcGxheS5weXRob25Nb2RlKCkgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFzIGZhLWV4cGFuZC1hcnJvd3MtYWx0XCI+PC9zcGFuPiBGdWxsc2NyZWVuXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIC0tPlxyXG4gICAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtci0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlNhdmUgR3JvdXBcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLmNhblNhdmVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9zcGFuPiBTYXZlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGVsZXRlIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuZGVsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvc3Bhbj4gRGVsZXRlXHJcbiAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1yLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVuYW1lIEdyb3VwXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZWRpdG9ycy5jYW5SZW5hbWVcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L3NwYW4+IFJlbmFtZVxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAke0hJU1RPUllfVE9PTEJBUl9IVE1MfVxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1weXRob24tYmxvY2ttaXJyb3JcIlxyXG4gICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRJcHluYlRvUHl0aG9uKGNvZGUpIHtcclxuICAgIGxldCBpcHluYiA9IEpTT04ucGFyc2UoY29kZSk7XHJcbiAgICBsZXQgaXNVc2FibGUgPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2UubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgIWNlbGwuc291cmNlWzBdLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmNlbGxfdHlwZSA9PT0gXCJtYXJrZG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNlbGxfdHlwZSA9PT0gXCJyYXdcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IG1ha2VQeXRob24gPSBmdW5jdGlvbihjZWxsKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcImNvZGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2VsbF90eXBlID09PSBcIm1hcmtkb3duXCIgfHxcclxuICAgICAgICAgICAgY2VsbC5jZWxsX3R5cGUgPT09IFwicmF3XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiJycnXCIrY2VsbC5zb3VyY2Uuam9pbihcIlxcblwiKStcIicnJ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gaXB5bmIuY2VsbHMuZmlsdGVyKGlzVXNhYmxlKS5tYXAobWFrZVB5dGhvbikuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuY2xhc3MgUHl0aG9uRWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZy5maW5kKFwiLmJsb2NrcHktcHl0aG9uLWJsb2NrbWlycm9yXCIpKTtcclxuICAgICAgICB0aGlzLmJtID0gbmV3IEJsb2NrTWlycm9yKHtcclxuICAgICAgICAgICAgXCJjb250YWluZXJcIjogdGhpcy50YWdbMF0sXHJcbiAgICAgICAgICAgIFwicnVuXCI6IG1haW4uY29tcG9uZW50cy5lbmdpbmUucnVuLmJpbmQobWFpbi5jb21wb25lbnRzLmVuZ2luZSksXHJcbiAgICAgICAgICAgIFwic2tpcFNrdWxwdFwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJsb2NrbHlNZWRpYVBhdGhcIjogbWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmJsb2NrbHlQYXRoLFxyXG4gICAgICAgICAgICBcInRvb2xib3hcIjogbWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLnRvb2xib3goKVxyXG4gICAgICAgICAgICAvLydoZWlnaHQnOiAnMjAwMHB4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYWtlU3Vic2NyaXB0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2xkUHl0aG9uTW9kZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWd1cmVFeHRyYUJsb2NrbHkoKSB7XHJcbiAgICAgICAgdGhpcy5ibS5ibG9ja0VkaXRvci53b3Jrc3BhY2UuY29uZmlndXJlQ29udGV4dE1lbnUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU2NyZWVuc2hvdFwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5TQ1JFRU5TSE9UX0JMT0NLU1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpIHtcclxuICAgICAgICBsZXQgb2xkRmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQeXRob25Nb2RlID0gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkucHl0aG9uTW9kZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUodGhpcy5vbGRQeXRob25Nb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKHRoaXMuZmlsZS5oYW5kbGUoKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBOb3RpZnkgcmVsZXZhbnQgZmlsZSBvZiBjaGFuZ2VzIHRvIEJNXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Qk1MaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmN1cnJlbnRCTUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0ZpbGVuYW1lICE9PSBcImFuc3dlci5weVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uaXNQYXJzb25zID0gKCkgPT4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ibS5pc1BhcnNvbnMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5pc1BhcnNvbnM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmVFcnJvclN1YnNjcmlwdGlvbiA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGluZXNFcnJvci5zdWJzY3JpYmUoKGxpbmVzKSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLWVycm9yLWxpbmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVVbmNvdmVyZWRTdWJzY3JpcHRpb24gPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmxpbmVzVW5jb3ZlcmVkLnN1YnNjcmliZSgobGluZXMpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJtLnNldEhpZ2hsaWdodGVkTGluZXMobGluZXMsIFwiZWRpdG9yLXVuY292ZXJlZC1saW5lXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLmJtLmJsb2NrRWRpdG9yLndvcmtzcGFjZS5yZW5kZXIoKTtcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHRoaXMgZG9lc24ndCBlbmQgdXAgbG9va2luZyByaWdodCAoZ28gdG8gYSBkaWZmZXJlbnQgZWRpdG9yLCBjb21lIGJhY2ssIGFuZCBpdCdsbCBiZSBzcXVpc2hlZClcclxuICAgICAgICAvL3RoaXMuYm0ucmVmcmVzaCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ibS5yZWZyZXNoKCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIGlmIChuZXdDb250ZW50cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnRzID0gdGhpcy5maWxlLmhhbmRsZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lc24ndCBtYXR0ZXIsIGZpbGUgd2FzIGFscmVhZHkgc2h1dCBkb3duLlxyXG4gICAgICAgICAgICAgICAgbmV3Q29udGVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdDb250ZW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBXZSdyZSBjbG9zaW5nIHRoaXMgZmlsZVxyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLmRlbGV0ZUZpbGVMb2NhbGx5Xyh0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYm0uc2V0Q29kZShuZXdDb250ZW50cyk7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhhbmRsZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKHRoaXMuYm0uZ2V0Q29kZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmJtLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY3VycmVudEJNTGlzdGVuZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5oaXN0b3J5TW9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhckxpbmVTdWJzY3JpcHRpb25zKCk7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckxpbmVTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUVycm9yU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lRXJyb3JTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5saW5lVW5jb3ZlcmVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVVuY292ZXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTdWJzY3JpcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYm0uc2V0TW9kZSh0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5weXRob25Nb2RlKCkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUuc3Vic2NyaWJlKG1vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUobW9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZW5hYmxlQmxvY2tzLnN1YnNjcmliZShlbmFibGVkID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJtLnNldE1vZGUoRGlzcGxheU1vZGVzLlRFWFQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibS5zZXRNb2RlKHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnB5dGhvbk1vZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy50b29sYm94LnN1YnNjcmliZSh0b29sYm94ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ibS5jb25maWd1cmF0aW9uLnRvb2xib3ggPSB0b29sYm94O1xyXG4gICAgICAgICAgICB0aGlzLmJtLmJsb2NrRWRpdG9yLnJlbWFrZVRvb2xib3goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlUGVyQXNzaWdubWVudFN1YnNjcmlwdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3Mub25seVVwbG9hZHMuc3Vic2NyaWJlKChjaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZWQpO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVhZE9ubHkodGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuaGlzdG9yeU1vZGUoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlYWRPbmx5KGNoYW5nZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVhZE9ubHkoaXNSZWFkT25seSkge1xyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSBpc1JlYWRPbmx5O1xyXG4gICAgICAgIHRoaXMuYm0uc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShldmVudCkge1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC5maWxlTmFtZTtcclxuICAgICAgICBsZXQgY29kZSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lLmVuZHNXaXRoKFwiLmlweW5iXCIpKSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBjb252ZXJ0SXB5bmJUb1B5dGhvbihjb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1GaWxlLlVwbG9hZFwiLCBcIlwiLCBcIlwiLCBjb2RlLCB0aGlzLmZpbGVuYW1lKTtcclxuICAgICAgICB0aGlzLmZpbGUuaGFuZGxlKGNvZGUpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmVuZ2luZS5ydW4oKTtcclxuICAgICAgICAvLyBUT0RPOiBSdW4gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIGRvd25sb2FkRmlsZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXIuZG93bmxvYWRGaWxlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSBcImFuc3dlclwiICYmIHJlc3VsdC5leHRlbnNpb24gPT09IFwiLnB5XCIpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBzbHVnZ2lmeSh0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5uYW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQubWltZXR5cGUgPSBcInRleHQveC1weXRob25cIjtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUZpbGUuRG93bmxvYWRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgcmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHl0aG9uRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJQeXRob25cIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi5weVwiXSxcclxuICAgIGNvbnN0cnVjdG9yOiBQeXRob25FZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFBZVEhPTl9FRElUT1JfSFRNTFxyXG59OyIsImltcG9ydCB7QWJzdHJhY3RFZGl0b3J9IGZyb20gXCIuL2Fic3RyYWN0X2VkaXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBR1NfRURJVE9SX0hUTUwgPSBgXHJcbkNyZWF0ZSBuZXdcclxuSW1wb3J0IGJ5IG5hbWVcclxuRmluZCBieSBvd25lci9jb3Vyc2Uva2luZFxyXG5cclxuVGFnczpcclxuICAgIERhdGE6XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIEtpbmRcclxuICAgICAgICBMZXZlbFxyXG4gICAgICAgIFZlcnNpb25cclxuICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgQ29udHJvbHM6XHJcbiAgICAgICAgRWRpdFxyXG4gICAgICAgIFJlbW92ZVxyXG4gICAgICAgIERlbGV0ZSBcclxuYDtcclxuXHJcbmNsYXNzIFRhZ3NFZGl0b3JWaWV3IGV4dGVuZHMgQWJzdHJhY3RFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgc3VwZXIobWFpbiwgdGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGFnc1wiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzRWRpdG9yID0ge1xyXG4gICAgbmFtZTogXCJUYWdzXCIsXHJcbiAgICBleHRlbnNpb25zOiBbXCIhdGFncy5ibG9ja3B5XCJdLFxyXG4gICAgY29uc3RydWN0b3I6IFRhZ3NFZGl0b3JWaWV3LFxyXG4gICAgdGVtcGxhdGU6IFRBR1NfRURJVE9SX0hUTUxcclxufTsiLCJpbXBvcnQge0Fic3RyYWN0RWRpdG9yfSBmcm9tIFwiLi9hYnN0cmFjdF9lZGl0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBURVhUX0VESVRPUl9IVE1MID0gYFxyXG4gICAgPGRpdj5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImJsb2NrcHktZWRpdG9yLXRleHRcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBUZXh0RWRpdG9yVmlldyBleHRlbmRzIEFic3RyYWN0RWRpdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xyXG4gICAgICAgIHN1cGVyKG1haW4sIHRhZyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGFnLmZpbmQoXCIuYmxvY2tweS1lZGl0b3ItdGV4dFwiKVswXSwge1xyXG4gICAgICAgICAgICBzaG93Q3Vyc29yV2hlblNlbGVjdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlcjogMSxcclxuICAgICAgICAgICAgaW5kZW50VW5pdDogNCxcclxuICAgICAgICAgICAgdGFiU2l6ZTogNCxcclxuICAgICAgICAgICAgaW5kZW50V2l0aFRhYnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHRyYUtleXM6IHtcclxuICAgICAgICAgICAgICAgIFwiVGFiXCI6IFwiaW5kZW50TW9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVzY1wiOiBmdW5jdGlvbiAoY20pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oXCJmdWxsU2NyZWVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbS5kaXNwbGF5LmlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJGMTFcIjogZnVuY3Rpb24gKGNtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY20uc2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiLCAhY20uZ2V0T3B0aW9uKFwiZnVsbFNjcmVlblwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcikge1xyXG4gICAgICAgIHN1cGVyLmVudGVyKG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IpO1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcih0aGlzLmZpbGUuaGFuZGxlKCkpO1xyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgcmVsZXZhbnQgRmlsZVxyXG4gICAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbiA9IHRoaXMuZmlsZS5oYW5kbGUuc3Vic2NyaWJlKHRoaXMudXBkYXRlRWRpdG9yLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIE5vdGlmeSByZWxldmFudCBmaWxlIG9mIGNoYW5nZXMgdG8gQk1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ZW5lciA9IHRoaXMudXBkYXRlSGFuZGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLm9uKFwiY2hhbmdlXCIsIHRoaXMuY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNvIHRoYXQgZXZlcnl0aGluZyBpcyByZW5kZXJlZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuY29kZU1pcnJvci5yZWZyZXNoLmJpbmQodGhpcy5jb2RlTWlycm9yKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSBkeW5hbWljYWxseSB3aGVuIGNoYW5naW5nIGluc3RydWN0b3Igc3RhdHVzXHJcbiAgICAgICAgdGhpcy5jb2RlTWlycm9yLnNldE9wdGlvbihcInJlYWRPbmx5XCIsIG5ld0ZpbGVuYW1lLnN0YXJ0c1dpdGgoXCImXCIpICYmICF0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVkaXRvcihuZXdDb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuZGlydHkgPSAhdGhpcy5kaXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlTWlycm9yLnNldFZhbHVlKG5ld0NvbnRlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2RlTWlycm9yLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIYW5kbGUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpcnR5ID0gIXRoaXMuZGlydHk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZS5oYW5kbGUodGhpcy5jb2RlTWlycm9yLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXQobmV3RmlsZW5hbWUsIG9sZEVkaXRvciwgbmV3RWRpdG9yKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHN1YnNjcmliZXJcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5vZmYoXCJjaGFuZ2VcIiwgdGhpcy5jdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuY29kZU1pcnJvci5zZXRPcHRpb24oXCJyZWFkT25seVwiLCBmYWxzZSk7XHJcbiAgICAgICAgc3VwZXIuZXhpdChuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRFZGl0b3IgPSB7XHJcbiAgICBuYW1lOiBcIlRleHRcIixcclxuICAgIGV4dGVuc2lvbnM6IFtcIi50eHRcIl0sXHJcbiAgICBjb25zdHJ1Y3RvcjogVGV4dEVkaXRvclZpZXcsXHJcbiAgICB0ZW1wbGF0ZTogVEVYVF9FRElUT1JfSFRNTFxyXG59OyIsIi8qKlxyXG4gKiBFZGl0b3JzIGFyZSBpbmZlcnJlZCBmcm9tIEZpbGVuYW1lcy5cclxuICpcclxuICogVGhlIGVkaXRvciBpcyBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uOlxyXG4gKiAgLmJsb2NrcHk6IFNwZWNpYWwgZWRpdG9yICh3aWxsIGJlIGNob3NlbiBieSBmaWxlbmFtZSlcclxuICogIC5weTogUHl0aG9uIEVkaXRvclxyXG4gKiAgLm1kOiBNYXJrZG93biBFZGl0b3JcclxuICogIC50eHQ6IFRleHQgRWRpdG9yIChhbHNvIHVzZWQgZm9yIG90aGVyIHR5cGVzKVxyXG4gKiAgLnBlbWw6IFBFTUwgRWRpdG9yXHJcbiAqICAucG5nLCAuZ2lmLCAuanBlZywgLmpwZywgLmJtcDogSW1hZ2UgRWRpdG9yXHJcbiAqICAuanNvbjogSlNPTiBFZGl0b3JcclxuICogIC55YW1sOiBZQU1MIEVkaXRvclxyXG4gKi9cclxuXHJcbmltcG9ydCB7UHl0aG9uRWRpdG9yfSBmcm9tIFwiLi9lZGl0b3IvcHl0aG9uXCI7XHJcbmltcG9ydCB7VGV4dEVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RleHRcIjtcclxuaW1wb3J0IHtBc3NpZ25tZW50U2V0dGluZ3N9IGZyb20gXCIuL2VkaXRvci9hc3NpZ25tZW50X3NldHRpbmdzXCI7XHJcbmltcG9ydCB7VGFnc0VkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL3RhZ3NcIjtcclxuaW1wb3J0IHtNYXJrZG93bkVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yL21hcmtkb3duXCI7XHJcblxyXG4vKipcclxuICogVGhlIGRpZmZlcmVudCBwb3NzaWJsZSBlZGl0b3JzIGF2YWlsYWJsZVxyXG4gKiBAZW51bSB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGxldCBFZGl0b3JzRW51bSA9IHtcclxuICAgIFNVQk1JU1NJT046IFwic3VibWlzc2lvblwiLFxyXG4gICAgQVNTSUdOTUVOVDogXCJhc3NpZ25tZW50XCIsXHJcbiAgICBJTlNUUlVDVElPTlM6IFwiaW5zdHJ1Y3Rpb25zXCIsXHJcbiAgICBPTl9SVU46IFwib25fcnVuXCIsXHJcbiAgICBPTl9DSEFOR0U6IFwib25fY2hhbmdlXCIsXHJcbiAgICBPTl9FVkFMOiBcIm9uX2V2YWxcIixcclxuICAgIFNUQVJUSU5HX0NPREU6IFwic3RhcnRpbmdfY29kZVwiLFxyXG4gICAgU0FNUExFX1NVQk1JU1NJT05TOiBcInNhbXBsZV9zdWJtaXNzaW9uc1wiLFxyXG4gICAgSU5TVFJVQ1RPUl9GSUxFOiBcImluc3RydWN0b3JfZmlsZVwiXHJcbn07XHJcblxyXG5jb25zdCBTUEVDSUFMX05BTUVTUEFDRVMgPSBbXCIhXCIsIFwiXlwiLCBcIj9cIiwgXCIkXCJdO1xyXG5cclxuY29uc3QgQVZBSUxBQkxFX0VESVRPUlMgPSBbXHJcbiAgICBUZXh0RWRpdG9yLCBQeXRob25FZGl0b3IsIEFzc2lnbm1lbnRTZXR0aW5ncywgVGFnc0VkaXRvciwgTWFya2Rvd25FZGl0b3JcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUT1JTX0hUTUwgPSBBVkFJTEFCTEVfRURJVE9SUy5tYXAoZWRpdG9yID0+XHJcbiAgICBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LWVkaXRvclwiPlxyXG4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5lZGl0b3JzLnZpZXcoKS5uYW1lID09PSAnJHtlZGl0b3IubmFtZX0nXCI+XHJcbiAgICAke2VkaXRvci50ZW1wbGF0ZX0gICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxuICAgIC8qXHJcbiAgICBgXHJcbjwhLS0ga28gaWY6IHVpLmVkaXRvcnMudmlldygpLm5hbWUgPT09ICcke2VkaXRvci5uYW1lfScgLS0+XHJcbiR7ZWRpdG9yLnRlbXBsYXRlfVxyXG48IS0tIC9rbyAtLT5gKi9cclxuKS5qb2luKFwiXFxuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8gPSBbXTtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbnNfID0ge307XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfID0ge307XHJcbiAgICAgICAgQVZBSUxBQkxFX0VESVRPUlMuZm9yRWFjaChlZGl0b3IgPT4gdGhpcy5yZWdpc3RlckVkaXRvcihlZGl0b3IpKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5maWxlbmFtZS5zdWJzY3JpYmUodGhpcy5jaGFuZ2VFZGl0b3IsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdG9yKGRhdGEpIHtcclxuICAgICAgICBsZXQgZXh0ZW5zaW9ucyA9IGRhdGEuZXh0ZW5zaW9ucztcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgZGF0YS5jb25zdHJ1Y3Rvcih0aGlzLm1haW4sIHRoaXMudGFnKTtcclxuICAgICAgICBpbnN0YW5jZS5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZF8ucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5ieU5hbWVfW2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zX1tleHRlbnNpb25zW2ldXSA9IGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBieU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ5TmFtZV9bbmFtZS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VFZGl0b3IobmV3RmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgb2xkRWRpdG9yID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgIGxldCBuZXdFZGl0b3IgPSB0aGlzLmdldEVkaXRvcihuZXdGaWxlbmFtZSwgb2xkRWRpdG9yKTtcclxuICAgICAgICBpZiAob2xkRWRpdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9sZEVkaXRvci5leGl0KG5ld0ZpbGVuYW1lLCBvbGRFZGl0b3IsIG5ld0VkaXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0VkaXRvcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnQuZW50ZXIobmV3RmlsZW5hbWUsIG9sZEVkaXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlRmlsZW5hbWUocGF0aCkge1xyXG4gICAgICAgIGxldCBzcGFjZSA9IHBhdGguY2hhckF0KDApO1xyXG4gICAgICAgIGlmIChTUEVDSUFMX05BTUVTUEFDRVMuaW5kZXhPZihzcGFjZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIGxldCB0eXBlID0gcGF0aC5zdWJzdHIocGF0aC5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIHJldHVybiB7XCJzcGFjZVwiOiBzcGFjZSwgXCJuYW1lXCI6IG5hbWUsIFwidHlwZVwiOiB0eXBlfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZGl0b3IocGF0aCkge1xyXG4gICAgICAgIGxldCB7c3BhY2UsIG5hbWUsIHR5cGV9ID0gRWRpdG9ycy5wYXJzZUZpbGVuYW1lKHBhdGgpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcIi5ibG9ja3B5XCIgJiYgcGF0aCBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3BhdGhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSBpbiB0aGlzLmV4dGVuc2lvbnNfKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4dGVuc2lvbnNfW3R5cGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRfWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi9zZXJ2ZXJcIjtcbmltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fcnVuXCI7XG5pbXBvcnQge1J1bkNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ydW5cIjtcbmltcG9ydCB7RXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9ldmFsXCI7XG5pbXBvcnQge1NhbXBsZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9zYW1wbGVcIjtcbmltcG9ydCB7T25DaGFuZ2VDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9lbmdpbmUvb25fY2hhbmdlXCI7XG5pbXBvcnQge09uRXZhbENvbmZpZ3VyYXRpb259IGZyb20gXCIuL2VuZ2luZS9vbl9ldmFsXCI7XG5pbXBvcnQge09uU2FtcGxlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vZW5naW5lL29uX3NhbXBsZVwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZXhlY3V0aW5nIFB5dGhvbiBjb2RlIGFuZCBwYXNzaW5nIHRoZSByZXN1bHRzIGFsb25nIHRvIGludGVyZXN0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiBJbnRlcmVzdGluZyBjb21wb25lbnRzOlxuICogIEV4ZWN1dGlvbiBCdWZmZXI6IFJlc3BvbnNpYmxlIGZvciBjb2xsZWN0aW5nIHRoZSB0cmFjZSBkdXJpbmcgcHJvZ3JhbSBleGVjdXRpb24uXG4gKiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcmV2ZW50cyBLbm9ja291dGpzIGZyb20gdXBkYXRpbmcgdGhlIGVkaXRvciBkdXJpbmcgZXhlY3V0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlFZGl0b3J9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZyAtIFRoZSBIVE1MIG9iamVjdCB0aGlzIGlzIGF0dGFjaGVkIHRvLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IobWFpbikge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbk1vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcblxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0ge1xuICAgICAgICAgICAgcnVuOiBuZXcgUnVuQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIGV2YWw6IG5ldyBFdmFsQ29uZmlndXJhdGlvbihtYWluKSxcbiAgICAgICAgICAgIG9uUnVuOiBuZXcgT25SdW5Db25maWd1cmF0aW9uKG1haW4pLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG5ldyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24obWFpbiksXG4gICAgICAgICAgICBvbkV2YWw6IG5ldyBPbkV2YWxDb25maWd1cmF0aW9uKG1haW4pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJlY29uZmlndXJlIHNrdWxwdCBzbyB3ZSBjYW4gcGFyc2VcbiAgICAgICAgU2suY29uZmlndXJlKHRoaXMuY29uZmlndXJhdGlvbnMucnVuLmdldFNrdWxwdE9wdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHRyYWNpbmcgd2hpbGUgdGhlIHByb2dyYW0gaXMgZXhlY3V0aW5nXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uQnVmZmVyID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluYWJsZSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiBleGVjdXRpb24gaGFzIGZ1bGx5IGVuZGVkLFxuICAgICAgICAgKiB3aGV0aGVyIGl0IHN1Y2NlZWRzIG9yIGZhaWxzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgcmVwb3J0c1xuICAgICAqL1xuICAgIHJlc2V0UmVwb3J0cygpIHtcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMuZXhlY3V0aW9uTW9kZWwucmVwb3J0cztcbiAgICAgICAgcmVwb3J0W1widmVyaWZpZXJcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge307XG4gICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7fTtcbiAgICAgICAgcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXSA9IHt9O1xuICAgICAgICByZXBvcnRbXCJtb2RlbFwiXSA9IHRoaXMubWFpbi5tb2RlbDtcbiAgICB9O1xuXG4gICAgcmVzZXRTdHVkZW50TW9kZWwoKSB7XG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5leGVjdXRpb25Nb2RlbC5zdHVkZW50O1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRTdGVwKG51bGwpO1xuICAgICAgICBzdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQubGFzdFN0ZXAoMCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudExpbmUobnVsbCk7XG4gICAgICAgIHN0dWRlbnQuY3VycmVudFRyYWNlRGF0YS5yZW1vdmVBbGwoKTtcbiAgICAgICAgc3R1ZGVudC5yZXN1bHRzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXNldEV4ZWN1dGlvbkJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5leGVjdXRpb25CdWZmZXIgPSB7XG4gICAgICAgICAgICBcInRyYWNlXCI6IFtdLFxuICAgICAgICAgICAgXCJzdGVwXCI6IDAsXG4gICAgICAgICAgICBcImxpbmVcIjogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBpbnRlcmZhY2UgYXNwZWN0cyBvZiB0aGUgcHJldmlvdXMgUnVuLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiBDbGVhciBvdXQgYW55IGNvdmVyYWdlL3RyYWNlL2Vycm9yIGhpZ2hsaWdodHMgaW4gZWRpdG9yc1xuICAgICAgICAvLyBSZXNldCBleGVjdXRpb24gaW4gbW9kZWxcbiAgICAgICAgdGhpcy5yZXNldFN0dWRlbnRNb2RlbCgpO1xuICAgICAgICAvLyBHZXQgcmVwb3J0cyByZWFkeVxuICAgICAgICB0aGlzLnJlc2V0UmVwb3J0cygpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGV4ZWN1dGlvbiBidWZmZXJcbiAgICAgICAgdGhpcy5yZXNldEV4ZWN1dGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBDbGVhciBvdXQgdGhlIGNvbnNvbGUgb2YgcHJpbnRlZCBzdHVmZlxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgb2xkIGZlZWRiYWNrXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVsYXllZFJ1bigpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAxKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMucnVuLnVzZSh0aGlzKTtcbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgZXhlY3V0aW9uLnRoZW4odGhpcy5vblJ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMuY29uZmlndXJhdGlvbi5zaG93RXJyb3JzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJ1bigpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vblJ1bi51c2UodGhpcyk7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgpLnRoZW4oXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmFpbHVyZS5iaW5kKHRoaXMuY29uZmlndXJhdGlvbilcbiAgICAgICAgKS50aGVuKHRoaXMuZXhlY3V0aW9uRW5kXy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICBsZXQgZXZhbHVhdGlvbklucHV0ID0gdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5ldmFsdWF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmFsdWF0aW9uSW5wdXQpO1xuICAgICAgICBldmFsdWF0aW9uSW5wdXQudGhlbigodXNlcklucHV0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb25zLmV2YWwudXNlKHRoaXMsIHVzZXJJbnB1dCk7XG4gICAgICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3VjY2Vzcy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmZhaWx1cmUuYmluZCh0aGlzLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlRmVlZGJhY2soKSkge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGlvbi50aGVuKHRoaXMub25FdmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRpb24udGhlbih0aGlzLmNvbmZpZ3VyYXRpb24uc2hvd0Vycm9ycy5iaW5kKHRoaXMuY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2YWwoKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbnMub25FdmFsLnVzZSh0aGlzKTtcbiAgICAgICAgdGhpcy5leGVjdXRlKCkudGhlbihcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdWNjZXNzLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5mYWlsdXJlLmJpbmQodGhpcy5jb25maWd1cmF0aW9uKVxuICAgICAgICApLnRoZW4odGhpcy5ldmFsdWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gdGhpcy5jb25maWd1cmF0aW9ucy5vbkNoYW5nZS51c2UodGhpcyk7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICByZXR1cm4gU2subWlzY2V2YWwuYXN5bmNUb1Byb21pc2UoKCkgPT5cbiAgICAgICAgICAgIFNrLmltcG9ydE1haW5XaXRoQm9keSh0aGlzLmNvbmZpZ3VyYXRpb24uZmlsZW5hbWUsIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jb2RlLCB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlZCB3aGVuZXZlciB0aGUgUHl0aG9uIGNvZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIG9uX2NoYW5nZSgpIHtcbiAgICAgICAgbGV0IEZJTEVOQU1FID0gXCJvbl9jaGFuZ2VcIjtcbiAgICAgICAgLy8gU2tpcCBpZiB0aGUgaW5zdHJ1Y3RvciBoYXMgbm90IGRlZmluZWQgYW55dGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwucHJvZ3JhbXNbRklMRU5BTUVdKCkudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdGF0dXMoXCJjaGFuZ2luZ1wiKTtcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnNhdmVDb2RlKCk7XG4gICAgICAgIC8vIE9uIHN0ZXAgZG9lcyBub3QgcGVyZm9ybSBwYXJzZSBhbmFseXNpcyBieSBkZWZhdWx0IG9yIHJ1biBzdHVkZW50IGNvZGVcbiAgICAgICAgbGV0IGVuZ2luZSA9IHRoaXM7XG4gICAgICAgIGxldCBmZWVkYmFjayA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrO1xuICAgICAgICBlbmdpbmUucmVzZXRSZXBvcnRzKCk7XG4gICAgICAgIGVuZ2luZS52ZXJpZnlDb2RlKCk7XG4gICAgICAgIGVuZ2luZS51cGRhdGVQYXJzZSgpO1xuICAgICAgICBlbmdpbmUucnVuSW5zdHJ1Y3RvckNvZGUoRklMRU5BTUUsIHRydWUsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAvLyBTVUNDRVNTLCBTQ09SRSwgQ0FURUdPUlksIExBQkVMLCBNRVNTQUdFLCBEQVRBLCBISURFXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogb25seSBzaG93IHVuZGVyIGNlcnRhaW4gY2lyY3Vtc3RhbmNlc1xuICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcyAmJlxuICAgICAgICAgICAgICAgICAgICAhKGNhdGVnb3J5ID09PSBcIkluc3RydWN0b3JcIiAmJiBsYWJlbCA9PT0gXCJObyBlcnJvcnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKGNhdGVnb3J5LCBsYWJlbCwgbWVzc2FnZSwgbGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuZ2luZS5tYWluLmNvbXBvbmVudHMuZmVlZGJhY2sucHJlc2VudEZlZWRiYWNrKG1vZHVsZS4kZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0YXR1cyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW5naW5lLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJlbmdpbmVcIiwgXCJvbl9jaGFuZ2VcIik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGNhbGwgdGhlIGRlZmluZWQgb25FeGVjdXRpb25FbmQsXG4gICAgICogYnV0IHdpbGwgZG8gbm90aGluZyBpZiB0aGVyZSBpcyBubyBmdW5jdGlvbiBkZWZpbmVkLlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkVuZF8oKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRXhlY3V0aW9uRW5kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGV4ZWN1dGlvbkJlZ2luXygpIHtcbiAgICAgICAgaWYgKHRoaXMub25FeGVjdXRpb25CZWdpbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5vbkV4ZWN1dGlvbkJlZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX01PRFVMRSA9IFwibGV0ICRidWlsdGlubW9kdWxlID0gZnVuY3Rpb24obW9kKXsgcmV0dXJuIG1vZDsgfVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBob2xkaW5nIHNldHRpbmdzIG9mIGEgcGFydGljdWxhciBydW4gY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvZGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICAvLyBBY2Nlc3MgcG9pbnQgZm9yIGluc3RydWN0b3IgZGF0YVxyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgU2suY29uc29sZSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGU7XHJcbiAgICAgICAgU2sucXVldWVkSW5wdXQgPSBbXTtcclxuICAgICAgICBTay5jb25maWd1cmUodGhpcy5nZXRTa3VscHRPcHRpb25zKCkpO1xyXG4gICAgICAgIC8vIFNldCBvcGVuRmlsZSBhcyBtZWNoYW5pc20gdG8gcmVhZCBmaWxlc1xyXG4gICAgICAgIFNrLmluQnJvd3NlciA9IHRoaXMub3BlbkZpbGUuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBQcm94eSByZXF1ZXN0c1xyXG4gICAgICAgIFNrLnJlcXVlc3RzR2V0ID0gKHVybCwgZGF0YSwgdGltZW91dCkgPT4gdGhpcy5vcGVuVVJMKHVybCwgZGF0YSwgdGltZW91dCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2t1bHB0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfX2Z1dHVyZV9fOiBTay5weXRob24zLFxyXG4gICAgICAgICAgICAvLyBpbXBvcnRcclxuICAgICAgICAgICAgcmVhZDogdGhpcy5pbXBvcnRGaWxlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIG9wZW5cclxuICAgICAgICAgICAgLy9maWxlb3BlbjogdGhpcy5vcGVuRmlsZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAvLyBmaWxlLndyaXRlXHJcbiAgICAgICAgICAgIGZpbGV3cml0ZTogdGhpcy53cml0ZUZpbGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gcHJpbnRcclxuICAgICAgICAgICAgb3V0cHV0OiB0aGlzLnByaW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIC8vIGlucHV0XHJcbiAgICAgICAgICAgIGlucHV0ZnVuOiB0aGlzLmlucHV0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlucHV0ZnVuVGFrZXNQcm9tcHQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIE1lZGlhIEltYWdlIFByb3h5IFVSTFxyXG4gICAgICAgICAgICBpbWFnZVByb3h5OiB0aGlzLmdldEltYWdlUHJveHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8ga2VlcCB0aGUgZ2xvYmFsc1xyXG4gICAgICAgICAgICByZXRhaW5HbG9iYWxzOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gYWNjZXNzIFNrdWxwdCBidWlsdC1pbnMuIFRoaXMgaXMgcHJldHR5IGdlbmVyaWMsIHRha2VuXHJcbiAgICAgKiBhbG1vc3QgZGlyZWN0bHkgZnJvbSB0aGUgU2t1bHB0IGRvY3MuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lIC0gVGhlIHB5dGhvbiBmaWxlbmFtZSAoZS5nLiwgXCJvc1wiIG9yIFwicHByaW50XCIpIHRoYXQgd2lsbCBiZSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSBvZiB0aGUgZmlsZSAod2VpcmQsIHJpZ2h0PylcclxuICAgICAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBpc24ndCBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgaW1wb3J0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG5cclxuICAgIG9wZW5VUkwodXJsLCBkYXRhLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgLy9yZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBtb2NrVXJsRGF0YSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uZ2V0RmlsZShcIj9tb2NrX3VybHMuYmxvY2tweVwiKTtcclxuICAgICAgICBpZiAobW9ja1VybERhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyAobmV3IFNrLmJ1aWx0aW4uSU9FcnJvcihcIkNhbm5vdCBhY2Nlc3MgdXJsOiBVUkwgRGF0YSB3YXMgbm90IG1hZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2lnbm1lbnRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb2NrVXJsRGF0YSA9IEpTT04ucGFyc2UobW9ja1VybERhdGEuaGFuZGxlKCkpO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGVuYW1lIGluIG1vY2tVcmxEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2NrVXJsRGF0YS5oYXNPd25Qcm9wZXJ0eShmaWxlbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IG1vY2tVcmxEYXRhW2ZpbGVuYW1lXS5sZW5ndGg7IGkrPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vY2tVcmxEYXRhW2ZpbGVuYW1lXVtpXSA9PT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlRGF0YSA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0ucmVhZEZpbGUoZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGZpbGVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9yZWplY3QobmV3IFNrLmJ1aWx0aW4uSU9FcnJvcihcIkNhbm5vdCBhY2Nlc3MgdXJsOiBcIit1cmwrXCIgd2FzIG5vdCBtYWRlIGF2YWlsYWJsZSBmb3IgdGhpcyBhc3NpZ25tZW50XCIpKTtcclxuICAgICAgICB0aHJvdyAobmV3IFNrLmJ1aWx0aW4uSU9FcnJvcihcIkNhbm5vdCBhY2Nlc3MgdXJsOiBcIit1cmwrXCIgd2FzIG5vdCBtYWRlIGF2YWlsYWJsZSBmb3IgdGhpcyBhc3NpZ25tZW50XCIpKTtcclxuICAgICAgICAvL30pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgbWV0aG9kIVwiKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLnByaW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIG1ldGhvZCFcIik7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnB1dE1vY2tGdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoU2sucXVldWVkSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEltYWdlUHJveHkoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RTdGVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZvcmJpZGRlbihmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWNjZXNzKG1vZHVsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IHN1Y2Nlc3MgZXhlY3V0aW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBYnN0cmFjdCBmYWlsdXJlIGV4ZWN1dGlvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkdW1teU91dFNhbmRib3goKSB7XHJcbiAgICAgICAgLy9Tay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3BlZGFsL3NhbmRib3gvc2FuZGJveC5weVwiXSA9IFwiY2xhc3MgU2FuZGJveDogcGFzc1xcbmRlZiBydW4oKTogcGFzc1xcbmRlZiByZXNldCgpOiBwYXNzXFxuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7U3R1ZGVudENvbmZpZ3VyYXRpb259IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdGF0dXNTdGF0ZX0gZnJvbSBcIi4uL3NlcnZlclwiO1xyXG5pbXBvcnQge0Jsb2NrUHlUcmFjZX0gZnJvbSBcIi4uL3RyYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lLCBjb2RlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZml4IHRvIGJlIGN1cnJlbnRseSBhZGRlZCBsaW5lXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlKFwiUnVubmluZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmZpbGVuYW1lID0gXCJhbnN3ZXJcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSBcIl8gPSBcIiArIGNvZGU7XHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgU2sucmV0YWluR2xvYmFscyA9IHRydWU7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRmlsZS5BZGRcIiwgXCJcIiwgXCJcIiwgY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIHRoaXMuY29kZSwgXCJldmFsdWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkV2YWwgc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLUV2YWx1YXRlLlByb2dyYW1cIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJldmFsdWF0aW9uc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnN0dWRlbnQuZ2xvYmFscyhTay5nbG9iYWxzKTtcclxuICAgICAgICBTay5nbG9iYWxzID0ge307XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5yZXN1bHRzID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUucHJpbnRWYWx1ZShTay5mZmkucmVtYXBUb0pzKG1vZHVsZS4kZC5fLiRyKCkpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RlcChtb2R1bGUuJGQsIG1vZHVsZS4kZCwtMSwgMCwgZmlsZW5hbWUgKyBcIi5weVwiKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U3RlcCgpO1xyXG4gICAgICAgICAgICByZXBvcnRbXCJzdHVkZW50XCJdID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNlXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSxcclxuICAgICAgICAgICAgICAgIFwibGluZXNcIjogdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLm1hcCh4ID0+IHgubGluZSksXHJcbiAgICAgICAgICAgICAgICBcInJlc3VsdHNcIjogbW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5vdXRwdXQsXHJcbiAgICAgICAgICAgICAgICBcImV2YWx1YXRpb25cIjogdGhpcy5jb2RlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5GQUlMRUQpO1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiQ29tcGlsZS5FcnJvclwiLCBcIlwiLCBcIlwiLCBlcnJvci50b1N0cmluZygpLCBcImV2YWx1YXRpb25zXCIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJldmFsdWF0aW9uXCI6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NvbmZpZ3VyYXRpb24sIEVNUFRZX01PRFVMRX0gZnJvbSBcIi4vY29uZmlndXJhdGlvbnMuanNcIjtcclxuaW1wb3J0IHskc2tfbW9kX2luc3RydWN0b3J9IGZyb20gXCIuLi9za19tb2RfaW5zdHJ1Y3RvclwiO1xyXG5cclxuY29uc3QgVVRJTElUWV9NT0RVTEVfQ09ERSA9IFwidmFyICRidWlsdGlubW9kdWxlID0gXCIgKyAkc2tfbW9kX2luc3RydWN0b3IudG9TdHJpbmcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIC8vIEluc3RydWN0b3JzIGhhdmUgbm8gbGltaXRzXHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8vIFN0ZXBwZXIhIEV4ZWN1dGVkIGFmdGVyIGV2ZXJ5IHN0YXRlbWVudC5cclxuICAgICAgICBTay5hZnRlclNpbmdsZUV4ZWN1dGlvbiA9IG51bGw7IC8vIDEwICoxMDAwXHJcbiAgICAgICAgLy8gTXV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkubXV0ZVByaW50ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy8gRGlzYWJsZSBpbnB1dCBib3hcclxuICAgICAgICBTay5xdWV1ZWRJbnB1dCA9IFtdO1xyXG4gICAgICAgIC8vIFRPRE8gU2suaW5wdXRmdW4gPSBCbG9ja1B5RW5naW5lLmlucHV0TW9ja0Z1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE86IEFsbG93IGlucHV0IGZ1bmN0aW9uIHRvIGRpc2FibGUgdGhlIHRpbWVyLCBzb21laG93XHJcbiAgICAgICAgLy8gRW5hYmxlIHV0aWxpdHkgbW9kZVxyXG4gICAgICAgIFNrLmJ1aWx0aW5GaWxlcy5maWxlc1tcInNyYy9saWIvdXRpbGl0eS9fX2luaXRfXy5qc1wiXSA9IFVUSUxJVFlfTU9EVUxFX0NPREU7XHJcbiAgICAgICAgU2suYnVpbHRpbkZpbGVzLmZpbGVzW1wiLi9faW5zdHJ1Y3Rvci9fX2luaXRfXy5qc1wiXSA9IEVNUFRZX01PRFVMRTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBmb3VuZCA9IHRoaXMubWFpbi5jb21wb25lbnRzLmZpbGVTeXN0ZW0uc2VhcmNoRm9yRmlsZShmaWxlbmFtZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5jb250ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3Ivb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlbmFtZSA9PT0gXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25FdmFsKCkgfHwgXCJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vX2luc3RydWN0b3IvX19pbml0X18uanNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gRU1QVFlfTU9EVUxFO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNrLmJ1aWx0aW4uT1NFcnJvcihcIkJ1aWx0LWluIG1vZHVsZXMgbm90IGFjY2Vzc2libGUuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoU2suYnVpbHRpbkZpbGVzW1wiZmlsZXNcIl1bZmlsZW5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLm1haW4uY29tcG9uZW50cy5maWxlU3lzdGVtLnNlYXJjaEZvckZpbGUoZmlsZW5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogJ1wiK2ZpbGVuYW1lICsgXCInXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlucHV0KHByb21wdE1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gXCJBcHBsZVBpZVwiO1xyXG4gICAgICAgIHJldHVybiBTay5xdWV1ZWRJbnB1dC5wb3AoKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKFNrLnF1ZXVlZElucHV0LnBvcCgpKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2luc3RydWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkNoYW5nZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwib25fY2hhbmdlLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LnRyaWdnZXJPbkNoYW5nZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcbmltcG9ydCB7TkVXX0xJTkVfUkVHRVh9IGZyb20gXCIuL29uX3J1blwiO1xyXG5pbXBvcnQge2luZGVudH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJOb25lXCIpKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG5mcm9tIHBlZGFsLnJlcG9ydCBpbXBvcnQgKlxyXG5mcm9tIHBlZGFsLnNvdXJjZSBpbXBvcnQgc2V0X3NvdXJjZVxyXG5zZXRfc291cmNlKCR7c2FmZUNvZGV9KVxyXG5kZWYgcnVuX3N0dWRlbnQoKTpcclxuICAgICMgbGltaXRfZXhlY3V0aW9uX3RpbWUoKVxyXG4gICAgdHJ5OlxyXG4ke2luZGVudGVkQ29kZX1cclxuICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZXJyb3I6XHJcbiAgICAgICAgIyB1bmxpbWl0X2V4ZWN1dGlvbl90aW1lKClcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgICMgdW5saW1pdF9leGVjdXRpb25fdGltZSgpXHJcbiAgICByZXR1cm4gTm9uZVxyXG5mcm9tIHBlZGFsLnNhbmRib3ggaW1wb3J0IGNvbXBhdGliaWxpdHlcclxuZnJvbSB1dGlsaXR5IGltcG9ydCAqXHJcbnN0dWRlbnQgPSBnZXRfc3R1ZGVudF9kYXRhKClcclxuY29tcGF0aWJpbGl0eS5zZXRfc2FuZGJveChzdHVkZW50KVxyXG5lcnJvciwgcG9zaXRpb24gPSBnZXRfc3R1ZGVudF9lcnJvcigpXHJcbmNvbXBhdGliaWxpdHkucmFpc2VfZXhjZXB0aW9uKGVycm9yLCBwb3NpdGlvbilcclxuY29tcGF0aWJpbGl0eS5ydW5fc3R1ZGVudCA9IHJ1bl9zdHVkZW50XHJcbmNvbXBhdGliaWxpdHkuZ2V0X3Bsb3RzID0gZ2V0X3Bsb3RzXHJcbmNvbXBhdGliaWxpdHkuZ2V0X291dHB1dCA9IGdldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXQgPSByZXNldF9vdXRwdXRcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmRlZiBjYXB0dXJlX291dHB1dChmdW5jLCAqYXJncyk6XHJcbiAgIHJlc2V0X291dHB1dCgpXHJcbiAgIGZ1bmMoKmFyZ3MpXHJcbiAgIHJldHVybiBnZXRfb3V0cHV0KClcclxuY29tcGF0aWJpbGl0eS5jYXB0dXJlX291dHB1dCA9IGNhcHR1cmVfb3V0cHV0XHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkV2YWxDb25maWd1cmF0aW9uIGV4dGVuZHMgSW5zdHJ1Y3RvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIl9pbnN0cnVjdG9yLm9uX2V2YWxcIjtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgZGlzYWJsZVRpZmEgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5kaXNhYmxlVGlmYSgpO1xyXG5cclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBzdHVkZW50Q29kZVNhZmUgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudC5ldmFsdWF0aW9uIHx8IFwiTm9uZVwiO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIHJlcG9ydFtcImluc3RydWN0b3JcIl0gPSB7XHJcbiAgICAgICAgICAgIFwiY29tcGxpbWVudHNcIjogW10sXHJcbiAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIuL19pbnN0cnVjdG9yL29uX2V2YWwucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBpbnN0cnVjdG9yQ29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcblxyXG4gICAgICAgIC8vU2sucmV0YWluR2xvYmFscyA9IGZhbHNlO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uRXZhbCBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBtb2R1bGUuJGQub25fZXZhbC4kZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2R1bGUuJGQpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRGZWVkYmFjayhyZXN1bHRzKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU1VDQ0VTUyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29ycmVjdChzdWNjZXNzIHx8IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3QoKSk7XHJcbiAgICAgICAgLy8gQ2Fubm90IGV4Y2VlZCAxIHBvaW50LCBjYW5ub3QgZ28gYmVsb3cgMCBwb2ludHNcclxuICAgICAgICBsZXQgc2NvcmUgPSBTay5mZmkucmVtYXBUb0pzKHJlc3VsdHMuU0NPUkUpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbigxLjAsIHNjb3JlKSk7XHJcbiAgICAgICAgbGV0IG9sZFNjb3JlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uc2NvcmUoKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShNYXRoLm1heChvbGRTY29yZSwgc2NvcmUpKTtcclxuICAgICAgICAvLyBIaWRlIHN0YXR1c1xyXG4gICAgICAgIGxldCBoaWRlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLkhJREUpO1xyXG4gICAgICAgIC8vIEFuZCBmaXJlIHRoZSByZXN1bHQhXHJcbiAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLnVwZGF0ZVN1Ym1pc3Npb24oc2NvcmUsIHN1Y2Nlc3MsIGhpZGUsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLlJFQURZKTtcclxuICAgICAgICAvL2FmdGVyKG1vZHVsZSk7XHJcblxyXG4gICAgICAgIC8qaWYgKHN1Y2Nlc3MgJiYgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24uY2FsbGJhY2tzLnN1Y2Nlc3ModGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuaWQoKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghU2suZXhlY3V0aW9uUmVwb3J0cy5pbnN0cnVjdG9yLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuY29uc29sZS5zY3JvbGxUb0JvdHRvbSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25FdmFsIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7aW5kZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7U3RhdHVzU3RhdGV9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtJbnN0cnVjdG9yQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19MSU5FX1JFR0VYID0gL1xcclxcbnxcXHJ8XFxuLztcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmV4cG9ydCBjb25zdCBXUkFQX0lOU1RSVUNUT1JfQ09ERSA9IGZ1bmN0aW9uIChzdHVkZW50Q29kZSwgaW5zdHJ1Y3RvckNvZGUsIHF1aWNrLCBpc1NhZmUpIHtcclxuICAgIGxldCBzYWZlQ29kZSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRDb2RlKTtcclxuICAgIGxldCBpbmRlbnRlZENvZGUgPSBpbmRlbnQoaW5kZW50KGlzU2FmZSA/IHN0dWRlbnRDb2RlIDogXCJwYXNzXCIpKTtcclxuICAgIGxldCB0aWZhQW5hbHlzaXMgPSBcIlwiO1xyXG4gICAgaWYgKCFxdWljaykge1xyXG4gICAgICAgIHRpZmFBbmFseXNpcyA9IFwiZnJvbSBwZWRhbC50aWZhIGltcG9ydCB0aWZhX2FuYWx5c2lzXFxudGlmYV9hbmFseXNpcyhGYWxzZSlcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBBZGQgaW4gU2sucXVldWVkSW5wdXQgdG8gYmUgcGFzc2VkIGluXHJcblxyXG4gICAgcmV0dXJuIGBcclxuZnJvbSBwZWRhbC5yZXBvcnQgaW1wb3J0ICpcclxuZnJvbSBwZWRhbC5zb3VyY2UgaW1wb3J0IHNldF9zb3VyY2Vcclxuc2V0X3NvdXJjZSgke3NhZmVDb2RlfSwgXCJhbnN3ZXIucHlcIilcclxuJHt0aWZhQW5hbHlzaXN9XHJcbmZyb20gcGVkYWwuc2FuZGJveC5zYW5kYm94IGltcG9ydCBTYW5kYm94XHJcbmZyb20gcGVkYWwuc2FuZGJveCBpbXBvcnQgY29tcGF0aWJpbGl0eVxyXG5mcm9tIHV0aWxpdHkgaW1wb3J0ICpcclxuc3R1ZGVudCA9IE1BSU5fUkVQT1JUWydzYW5kYm94J11bJ3J1biddID0gU2FuZGJveCgpXHJcbiNzdHVkZW50LnJ1bihNQUlOX1JFUE9SVFsnc291cmNlJ11bJ2NvZGUnXSwgTUFJTl9SRVBPUlRbJ3NvdXJjZSddWydmaWxlbmFtZSddLCByZXBvcnRfZXhjZXB0aW9ucz1GYWxzZSlcclxuI2RlYnVnKHN0dWRlbnQpXHJcbnN0dWRlbnQucmVwb3J0X2V4Y2VwdGlvbnNfbW9kZSA9IFRydWVcclxuaWYgbm90IGdldF9tb2RlbF9pbmZvKCdhc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVJbnN0cnVjdG9yUnVuJyk6XHJcbiAgICBjb21wYXRpYmlsaXR5LnJ1bl9zdHVkZW50KHJhaXNlX2V4Y2VwdGlvbnM9RmFsc2UpXHJcbiNsb2coc3R1ZGVudC5kYXRhKVxyXG4jc3R1ZGVudCA9IGdldF9zdHVkZW50X2RhdGEoKVxyXG4jZXJyb3IsIHBvc2l0aW9uID0gZ2V0X3N0dWRlbnRfZXJyb3IoKVxyXG4jY29tcGF0aWJpbGl0eS5yYWlzZV9leGNlcHRpb24oZXJyb3IsIHBvc2l0aW9uKVxyXG5ydW5fc3R1ZGVudCA9IGNvbXBhdGliaWxpdHkucnVuX3N0dWRlbnRcclxucmVzZXRfb3V0cHV0ID0gY29tcGF0aWJpbGl0eS5yZXNldF9vdXRwdXRcclxucXVldWVfaW5wdXQgPSBjb21wYXRpYmlsaXR5LnF1ZXVlX2lucHV0XHJcbmdldF9vdXRwdXQgPSBjb21wYXRpYmlsaXR5LmdldF9vdXRwdXRcclxuZ2V0X3Bsb3RzID0gY29tcGF0aWJpbGl0eS5nZXRfcGxvdHNcclxuY29tcGF0aWJpbGl0eS50cmFjZV9saW5lcyA9IHRyYWNlX2xpbmVzXHJcbmZyb20gcGVkYWwgaW1wb3J0IHF1ZXN0aW9uc1xyXG5xdWVzdGlvbnMuc2hvd19xdWVzdGlvbiA9IHNldF9pbnN0cnVjdGlvbnNcclxuIyBUT0RPOiBSZW1vdmUgdGhlIG5lZWQgZm9yIHRoaXMgaGFjayFcclxuZGVmIGNhcHR1cmVfb3V0cHV0KGZ1bmMsICphcmdzKTpcclxuICAgcmVzZXRfb3V0cHV0KClcclxuICAgc3R1ZGVudC5jYWxsKGZ1bmMuX19uYW1lX18sICphcmdzKVxyXG4gICByZXR1cm4gZ2V0X291dHB1dCgpXHJcbmNvbXBhdGliaWxpdHkuY2FwdHVyZV9vdXRwdXQgPSBjYXB0dXJlX291dHB1dFxyXG5cclxuZnJvbSBwZWRhbC5jYWl0LmNhaXRfYXBpIGltcG9ydCBwYXJzZV9wcm9ncmFtXHJcbiR7aW5zdHJ1Y3RvckNvZGV9XHJcbmZyb20gcGVkYWwucmVzb2x2ZXJzIGltcG9ydCBzaW1wbGVcclxuU1VDQ0VTUywgU0NPUkUsIENBVEVHT1JZLCBMQUJFTCwgTUVTU0FHRSwgREFUQSwgSElERSA9IHNpbXBsZS5yZXNvbHZlKClcclxuYDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblJ1bkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJbnN0cnVjdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiX2luc3RydWN0b3Iub25fcnVuXCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25SdW4oKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc2FibGVUaWZhID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc2V0dGluZ3MuZGlzYWJsZVRpZmEoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBsZXQgc3R1ZGVudENvZGVTYWZlID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlPdXRTYW5kYm94KCk7XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JDb2RlID0gdGhpcy5jb2RlO1xyXG4gICAgICAgIGxldCBsaW5lT2Zmc2V0ID0gaW5zdHJ1Y3RvckNvZGUuc3BsaXQoTkVXX0xJTkVfUkVHRVgpLmxlbmd0aDtcclxuICAgICAgICBsZXQgaXNTYWZlID0gIXJlcG9ydFtcInBhcnNlclwiXS5lbXB0eSAmJiByZXBvcnRbXCJ2ZXJpZmllclwiXS5zdWNjZXNzO1xyXG4gICAgICAgIGluc3RydWN0b3JDb2RlID0gV1JBUF9JTlNUUlVDVE9SX0NPREUoc3R1ZGVudENvZGVTYWZlLCBpbnN0cnVjdG9yQ29kZSwgZGlzYWJsZVRpZmEsIGlzU2FmZSk7XHJcbiAgICAgICAgbGluZU9mZnNldCA9IGluc3RydWN0b3JDb2RlLnNwbGl0KE5FV19MSU5FX1JFR0VYKS5sZW5ndGggLSBsaW5lT2Zmc2V0IC0gNDtcclxuICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdID0ge1xyXG4gICAgICAgICAgICBcImNvbXBsaW1lbnRzXCI6IFtdLFxyXG4gICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiLi9faW5zdHJ1Y3Rvci9vbl9ydW4ucHlcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IGluc3RydWN0b3JDb2RlLFxyXG4gICAgICAgICAgICBcImxpbmVPZmZzZXRcIjogbGluZU9mZnNldFxyXG4gICAgICAgICAgICAvLydjb21wbGV0ZSc6IGZhbHNlIC8vIEFjdHVhbGx5LCBsZXQncyB1c2UgdW5kZWZpbmVkIGZvciBub3cuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2RlID0gaW5zdHJ1Y3RvckNvZGU7XHJcblxyXG4gICAgICAgIFNrLnJldGFpbkdsb2JhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2Vzcyhtb2R1bGUpIHtcclxuICAgICAgICAvLyBUT0RPIExvZ2dpbmchISEhXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPblJ1biBzdWNjZXNzXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IEFjdHVhbGx5IHBhcnNlIHJlc3VsdHNcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmluc3RydWN0b3IuZ2xvYmFscyA9IFNrLmdsb2JhbHM7XHJcbiAgICAgICAgU2suZ2xvYmFscyA9IHt9O1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbW9kdWxlLiRkLm9uX3J1bi4kZDtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50RmVlZGJhY2socmVzdWx0cyk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzW1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNVQ0NFU1MpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvcnJlY3Qoc3VjY2VzcyB8fCB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb3JyZWN0KCkpO1xyXG4gICAgICAgIC8vIENhbm5vdCBleGNlZWQgMSBwb2ludCwgY2Fubm90IGdvIGJlbG93IDAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHNjb3JlID0gU2suZmZpLnJlbWFwVG9KcyhyZXN1bHRzLlNDT1JFKTtcclxuICAgICAgICBzY29yZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgc2NvcmUpKTtcclxuICAgICAgICBsZXQgb2xkU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZSgpO1xyXG4gICAgICAgIHNjb3JlID0gTWF0aC5tYXgob2xkU2NvcmUsIHNjb3JlKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zY29yZShzY29yZSk7XHJcbiAgICAgICAgLy8gSGlkZSBzdGF0dXNcclxuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMocmVzdWx0cy5ISURFKTtcclxuICAgICAgICAvLyBBbmQgZmlyZSB0aGUgcmVzdWx0IVxyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci51cGRhdGVTdWJtaXNzaW9uKHNjb3JlLCBzdWNjZXNzLCBoaWRlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1cy5vbkV4ZWN1dGlvbihTdGF0dXNTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgLy9hZnRlcihtb2R1bGUpO1xyXG5cclxuICAgICAgICAvKmlmIChzdWNjZXNzICYmIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzKHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LmlkKCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBpZiAoIVNrLmV4ZWN1dGlvblJlcG9ydHMuaW5zdHJ1Y3Rvci5zY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuc2Nyb2xsVG9Cb3R0b20oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhaWx1cmUoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUnVuIGZhaWx1cmVcIik7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJHcmFjZWZ1bEV4aXRcIikge1xyXG4gICAgICAgICAgICByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wic3VjY2Vzc1wiXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuRkFJTEVEKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiY29kZVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5mZWVkYmFjay5wcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgdGhpcy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIC8vcmVwb3J0W1wiaW5zdHJ1Y3RvclwiXVtcInN1Y2Nlc3NcIl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9yZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wiZXJyb3JcIl0gPSBlcnJvcjtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXBvcnRbXCJpbnN0cnVjdG9yXCJdW1wibGluZV9vZmZzZXRcIl0gPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IGFmdGVyKGVycm9yKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T25SdW5Db25maWd1cmF0aW9ufSBmcm9tIFwiLi9vbl9ydW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPblNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBPblJ1bkNvbmZpZ3VyYXRpb24ge1xyXG4gICAgdXNlKGVuZ2luZSkge1xyXG4gICAgICAgIHN1cGVyLnVzZShlbmdpbmUpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcIm9uX3J1bi5weVwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0YXR1c1N0YXRlfSBmcm9tIFwiLi4vc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUnVuQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0dWRlbnRDb25maWd1cmF0aW9uIHtcclxuICAgIHVzZShlbmdpbmUpIHtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLm1lc3NhZ2UoXCJSdW5uaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMuZmlsZW5hbWUgPSBcImFuc3dlclwiO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIuc2F2ZUZpbGUoXCJhbnN3ZXIucHlcIiwgdGhpcy5jb2RlLCBudWxsKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJDb21waWxlXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiYW5zd2VyLnB5XCIpO1xyXG5cclxuICAgICAgICBzdXBlci51c2UoZW5naW5lKTtcclxuXHJcbiAgICAgICAgZW5naW5lLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJzZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHNbXCJ2ZXJpZmllclwiXSA9IHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IEJvb2xlYW4odGhpcy5jb2RlLnRyaW0oKSksXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiB0aGlzLmNvZGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTay5yZXRhaW5HbG9iYWxzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobW9kdWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJSdW4uUHJvZ3JhbVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImFuc3dlci5weVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5kaXJ0eVN1Ym1pc3Npb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmNvbnNvbGUuZmluaXNoVHVydGxlcygpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXMub25FeGVjdXRpb24oU3RhdHVzU3RhdGUuUkVBRFkpO1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uc3R1ZGVudC5nbG9iYWxzKFNrLmdsb2JhbHMpO1xyXG4gICAgICAgIFNrLmdsb2JhbHMgPSB7fTtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZmlsZW5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5zdHVkZW50LnJlc3VsdHMgPSBtb2R1bGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncy5oaWRlRXZhbHVhdGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmJlZ2luRXZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAobW9kdWxlLiRkLCBtb2R1bGUuJGQsLTEsIDAsIGZpbGVuYW1lICsgXCIucHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFN0ZXAoKTtcclxuICAgICAgICAgICAgcmVwb3J0W1wic3R1ZGVudFwiXSA9IHtcclxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFjZVwiOiB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIudHJhY2UsXHJcbiAgICAgICAgICAgICAgICBcImxpbmVzXCI6IHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZS5tYXAoeCA9PiB4LmxpbmUpLFxyXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRzXCI6IG1vZHVsZSxcclxuICAgICAgICAgICAgICAgIFwib3V0cHV0XCI6IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ub3V0cHV0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsdXJlKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gZmFpbHVyZVwiKTtcclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3RhdHVzLm9uRXhlY3V0aW9uKFN0YXR1c1N0YXRlLkZBSUxFRCk7XHJcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cztcclxuICAgICAgICBpZiAocmVwb3J0LnBhcnNlci5zdWNjZXNzICYmIHJlcG9ydC52ZXJpZmllci5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkNvbXBpbGUuRXJyb3JcIiwgXCJcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiUnVuLlByb2dyYW1cIiwgXCJQcm9ncmFtRXJyb3JPdXRwdXRcIiwgXCJcIiwgZXJyb3IudG9TdHJpbmcoKSwgXCJhbnN3ZXIucHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJlcG9ydFtcInN0dWRlbnRcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTdHVkZW50Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdHVkZW50Q29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gVE9ETzogRml4IHRvIGJlIHRoZSBjdXJyZW50IHNhbXBsZSBzdWJtaXNzaW9uXHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IFwiYW5zd2VyLnB5XCI7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gXCJwcmludCgnTm90IHJlYWR5IHlldCEnKVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgRU1QVFlfTU9EVUxFfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XHJcbiAgICB1c2UoZW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIudXNlKGVuZ2luZSk7XHJcbiAgICAgICAgLy8gTGltaXQgZXhlY3V0aW9uIHRvIDUgc2Vjb25kc1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHRoaXMubWFpbi5tb2RlbC5zZXR0aW5ncztcclxuICAgICAgICBTay5leGVjTGltaXRGdW5jdGlvbiA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRpc2FibGVUaW1lb3V0KCkgPyBJbmZpbml0eSA6IDMwMDA7XHJcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gU2suZXhlY0xpbWl0RnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBTdGVwcGVyISBFeGVjdXRlZCBhZnRlciBldmVyeSBzdGF0ZW1lbnQuXHJcbiAgICAgICAgU2suYWZ0ZXJTaW5nbGVFeGVjdXRpb24gPSB0aGlzLnN0ZXAuYmluZCh0aGlzKTtcclxuICAgICAgICAvLyBVbm11dGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5Lm11dGVQcmludGVyKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsbCBhZnRlciBlYWNoIHN0ZXBcclxuICAgICAgICAvLyBhZnRlclNpbmdsZUV4ZWN1dGlvblxyXG5cclxuICAgICAgICBTay5idWlsdGluRmlsZXMuZmlsZXNbXCJzcmMvbGliL3V0aWxpdHkvX19pbml0X18uanNcIl0gPSBFTVBUWV9NT0RVTEU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5GaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlbmFtZSwgZm91bmQpO1xyXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogXCIrZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3VuZC5jb250ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGb3JiaWRkZW4oZmlsZW5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiRmlsZSBub3QgYWNjZXNzaWJsZTogJ1wiICsgZmlsZW5hbWUgKyBcIidcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVuYW1lID09PSBcIi4vYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJCdWlsdC1pbiBtb2R1bGVzIG5vdCBhY2Nlc3NpYmxlLlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFNrLmJ1aWx0aW5GaWxlc1tcImZpbGVzXCJdW2ZpbGVuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluRmlsZXNbXCJmaWxlc1wiXVtmaWxlbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gdGhpcy5tYWluLmNvbXBvbmVudHMuZmlsZVN5c3RlbS5zZWFyY2hGb3JGaWxlKGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTay5idWlsdGluLk9TRXJyb3IoXCJGaWxlIG5vdCBmb3VuZDogJ1wiK2ZpbGVuYW1lICsgXCInXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQocHJvbXB0TWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW4uY29tcG9uZW50cy5jb25zb2xlLmlucHV0KHByb21wdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9yYmlkZGVuKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3V0aWxpdHkvXCIpIHx8XHJcbiAgICAgICAgICAgIGZpbGVuYW1lLnN0YXJ0c1dpdGgoXCJzcmMvbGliL3BlZGFsL1wiKSB8fFxyXG4gICAgICAgICAgICBmaWxlbmFtZS5zdGFydHNXaXRoKFwiLi9faW5zdHJ1Y3Rvci9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcIlN0ZXBzXCIgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgY29kZSwgbWVhbnQgdG8gYmUgdXNlZCBhcyBhIGNhbGxiYWNrIHRvIHRoZSBTa3VscHRcclxuICAgICAqIGVudmlyb25tZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YXJpYWJsZXMgLSBIYXNoIHRoYXQgbWFwcyB0aGUgbmFtZXMgb2YgdmFyaWFibGVzIChTdHJpbmdzKSB0byB0aGVpciBTa3VscHQgcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGluZU51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGxpbmUgbnVtYmVyIGluIHRoZSBzb3VyY2UgY29kZSB0aGF0IGlzIGJlaW5nIGV4ZWN1dGVkLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbHVtbk51bWJlciAtIFRoZSBjb3JyZXNwb25kaW5nIGNvbHVtbiBudW1iZXIgaW4gdGhlIHNvdXJjZSBjb2RlIHRoYXQgaXMgYmVpbmcgZXhlY3V0ZWQuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpbmsgb2YgaXQgYXMgdGhlIFwiWFwiIHBvc2l0aW9uIHRvIHRoZSBsaW5lTnVtYmVyJ3MgXCJZXCIgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHl0aG9uIGZpbGUgYmVpbmcgZXhlY3V0ZWQgKGUuZy4sIFwiX19tYWluX18ucHlcIikuXHJcbiAgICAgKi9cclxuICAgIHN0ZXAodmFyaWFibGVzLCBsb2NhbHMsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZmlsZW5hbWUpIHtcclxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdGVwID0gdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXA7XHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxzID0gdGhpcy5tYWluLmNvbXBvbmVudHMudHJhY2UucGFyc2VHbG9iYWxzKHZhcmlhYmxlcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRyYWNlIGxvY2FsIHZhcmlhYmxlcyBwcm9wZXJseVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGdsb2JhbHMsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIC8vbGV0IGxvY2FscyA9IHRoaXMubWFpbi5jb21wb25lbnRzLnRyYWNlLnBhcnNlR2xvYmFscyhsb2NhbHMpO1xyXG4gICAgICAgICAgICAvL09iamVjdC5hc3NpZ24oZ2xvYmFscywgbG9jYWxzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnRyYWNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCI6IGN1cnJlbnRTdGVwLFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlbmFtZVwiOiBmaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vJ2Jsb2NrJzogaGlnaGxpZ2h0TWFwW2xpbmVOdW1iZXItMV0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmVcIjogbGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IGNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBnbG9iYWxzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBcIm1vZHVsZXNcIjogZ2xvYmFscy5tb2R1bGVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIuc3RlcCA9IGN1cnJlbnRTdGVwICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUgPSBsaW5lTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGUgU2t1bHB0IGV4ZWN1dGlvbiB0byB0ZXJtaW5hdGUgdGhlIGV4ZWN1dGlvbkJ1ZmZlclxyXG4gICAgICogYW5kIGhhbmQgaXQgb2ZmIHRvIHRoZSBleGVjdXRpb24gdHJhY2UgaW4gdGhlIG1vZGVsLlxyXG4gICAgICovXHJcbiAgICBsYXN0U3RlcCgpIHtcclxuICAgICAgICBsZXQgZXhlY3V0aW9uID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbjtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50VHJhY2VEYXRhKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci50cmFjZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQuY3VycmVudFN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50Lmxhc3RTdGVwKHRoaXMuZW5naW5lLmV4ZWN1dGlvbkJ1ZmZlci5zdGVwKTtcclxuICAgICAgICBleGVjdXRpb24uc3R1ZGVudC5jdXJyZW50TGluZSh0aGlzLmVuZ2luZS5leGVjdXRpb25CdWZmZXIubGluZSk7XHJcbiAgICAgICAgZXhlY3V0aW9uLnN0dWRlbnQubGFzdExpbmUodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLmxpbmUpO1xyXG4gICAgICAgIGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAodGhpcy5lbmdpbmUuZXhlY3V0aW9uQnVmZmVyLnN0ZXApO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMaW5lcyhhc3QpIHtcclxuICAgICAgICBsZXQgdmlzaXRlZExpbmVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCB2aXNpdEJvZHkgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5saW5lbm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRlZExpbmVzLmFkZChub2RlLmxpbmVubyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5ib2R5LmZvckVhY2goKHN0YXRlbWVudCkgPT4gdmlzaXRCb2R5KHN0YXRlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLm9yZWxzZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vcmVsc2UuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB2aXNpdEJvZHkoc3RhdGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuZmluYWxib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZpbmFsYm9keS5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHZpc2l0Qm9keShzdGF0ZW1lbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlzaXRCb2R5KGFzdCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmlzaXRlZExpbmVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZSB0aGF0IHRoZSBwYXJzZSBpbmZvcm1hdGlvbiBpcyB1cC10by1kYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVBhcnNlKCkge1xyXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHM7XHJcbiAgICAgICAgLy8gSG9sZCBhbGwgdGhlIGFjdHVhbGx5IGRpc2NvdmVyZWQgbGluZXMgZnJvbSB0aGUgcGFyc2VcclxuICAgICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgICAvLyBBdHRlbXB0IGEgcGFyc2VcclxuICAgICAgICBsZXQgYXN0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZSA9IFNrLnBhcnNlKHRoaXMuZmlsZW5hbWUsIHRoaXMuY29kZSk7XHJcbiAgICAgICAgICAgIGFzdCA9IFNrLmFzdEZyb21QYXJzZShwYXJzZS5jc3QsIHRoaXMuZmlsZW5hbWUsIHBhcnNlLmZsYWdzKTtcclxuICAgICAgICAgICAgbGluZXMgPSB0aGlzLmdldExpbmVzKGFzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBlcnJvclxyXG4gICAgICAgICAgICByZXBvcnRbXCJwYXJzZXJcIl0gPSB7XHJcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSwgdGhpcy5jb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWNjZXNzZnVsIHBhcnNlXHJcbiAgICAgICAgcmVwb3J0W1wicGFyc2VyXCJdID0ge1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJhc3RcIjogYXN0LFxyXG4gICAgICAgICAgICBcImVtcHR5XCI6IGFzdC5ib2R5Lmxlbmd0aCA9PT0gMCxcclxuICAgICAgICAgICAgXCJsaW5lc1wiOiBsaW5lc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9ycygpIHtcclxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzO1xyXG4gICAgICAgIGlmICghcmVwb3J0W1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmZlZWRiYWNrLnByZXNlbnRSdW5FcnJvcihyZXBvcnQuc3R1ZGVudC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGxldCBGRUVEQkFDS19IVE1MID0gYFxuXG48c3BhbiBjbGFzcz0nYmxvY2tweS1mbG9hdGluZy1mZWVkYmFjayB0ZXh0LW11dGVkLWxlc3MgcHVsbC1yaWdodCBwb3NpdGlvbi1zdGlja3kgc3RpY2t5LXRvcCdcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1sYWJlbD1cIk5ldyBGZWVkYmFjayBBbGVydFwiPlxuICAgIE5ldyBmZWVkYmFjayAmdWFycjtcbjwvc3Bhbj5cblxuPGRpdiBjbGFzcz0nYmxvY2tweS1mZWVkYmFjayBjb2wtbWQtNiBibG9ja3B5LXBhbmVsJ1xuICAgICAgICAgICAgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cblxuICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0J1xuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnNlY29uZFJvdy5hZHZhbmNlU3RhdGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1leWUnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2Vjb25kUm93LnN3aXRjaExhYmVsXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPCEtLSBBY3R1YWwgRmVlZGJhY2sgUmVnaW9uIC0tPiAgICBcbiAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPkZlZWRiYWNrOiA8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2JhZGdlIGJsb2NrcHktZmVlZGJhY2stY2F0ZWdvcnkgZmVlZGJhY2stYmFkZ2UnXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHVpLmZlZWRiYWNrLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB1aS5mZWVkYmFjay5jYXRlZ29yeVwiPkZlZWRiYWNrIEtpbmQ8L3NwYW4+XG4gICAgICAgIDxzbWFsbCBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLnNjb3JlKCkrJyUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBkaXNwbGF5Lmluc3RydWN0b3IoKSAmJiBleGVjdXRpb24uZmVlZGJhY2subGFiZWwoKVwiXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtbXV0ZWRcIj48L3NtYWxsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cInRleHQ6IGV4ZWN1dGlvbi5mZWVkYmFjay5sYWJlbFwiPjwvc3Ryb25nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1mZWVkYmFjay1tZXNzYWdlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IGV4ZWN1dGlvbi5mZWVkYmFjay5tZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4gICAgICAgICAgICBcbmA7XG5cbmV4cG9ydCBjbGFzcyBCbG9ja1B5RmVlZGJhY2sge1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRoYXQgbWFuYWdlcyB0aGUgZmVlZGJhY2sgYXJlYSwgd2hlcmUgdXNlcnMgYXJlIHRvbGQgdGhlIHN0YXRlIG9mIHRoZWlyXG4gICAgICogcHJvZ3JhbSdzIGV4ZWN1dGlvbiBhbmQgZ2l2ZW4gZ3VpZGFuY2UuIEFsc28gbWFuYWdlcyB0aGUgY3JlYXRpb24gb2YgdGhlIFRyYWNlIFRhYmxlLlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHRoaXMge0Jsb2NrUHlGZWVkYmFja31cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWcgLSBUaGUgSFRNTCBvYmplY3QgdGhpcyBpcyBhdHRhY2hlZCB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYWluLCB0YWcpIHtcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsID0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5mZWVkYmFjaztcblxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWNhdGVnb3J5XCIpO1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy50YWcuZmluZChcIi5ibG9ja3B5LWZlZWRiYWNrLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnRhZy5maW5kKFwiLmJsb2NrcHktZmVlZGJhY2stbWVzc2FnZVwiKTtcblxuICAgICAgICAvLyBUT0RPOiBJZiB0aGV5IGNoYW5nZSB0aGUgc3R1ZGVudCBleHRyYSBmaWxlcywgYWxzbyB1cGRhdGUgdGhlIGRpcnR5IGZsYWdcbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuZGlydHlTdWJtaXNzaW9uKHRydWUpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNjcmVlbiAodGFrZXMgMSBzZWNvbmQpIHRvIG1ha2UgdGhlIEZlZWRiYWNrIGFyZWEgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMudGFnLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZmVlZGJhY2sgYXJlYSBpcyBjdXJyZW50bHkgdmlzaWJsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRmVlZGJhY2tWaXNpYmxlKCkge1xuICAgICAgICBsZXQgdmlzaWJpbGl0eUJ1ZmZlciA9IDEwMDtcbiAgICAgICAgbGV0IHRvcE9mRWxlbWVudCA9IHRoaXMudGFnLm9mZnNldCgpLnRvcDtcbiAgICAgICAgLy9sZXQgYm90dG9tT2ZFbGVtZW50ID0gdGhpcy50YWcub2Zmc2V0KCkudG9wICsgdGhpcy50YWcub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgbGV0IGJvdHRvbU9mRWxlbWVudCA9IHRvcE9mRWxlbWVudCArIHZpc2liaWxpdHlCdWZmZXI7XG4gICAgICAgIGxldCBib3R0b21PZlNjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgbGV0IHRvcE9mU2NyZWVuID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvL2JvdHRvbV9vZl9lbGVtZW50IC09IDQwOyAvLyBVc2VyIGZyaWVuZGx5IHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0b3BPZkVsZW1lbnQgPCBib3R0b21PZlNjcmVlbikgJiZcbiAgICAgICAgICAgICh0b3BPZlNjcmVlbiA8IGJvdHRvbU9mRWxlbWVudCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IG91dHB1dCBjdXJyZW50bHkgaW4gdGhlIGZlZWRiYWNrIGFyZWEuIEFsc28gcmVzZXRzIHRoZSBwcmludGVyIGFuZFxuICAgICAqIGFueSBoaWdobGlnaHRlZCBsaW5lcyBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubWVzc2FnZShcIipSZWFkeSpcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShudWxsKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxhYmVsKG51bGwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuaGlkZGVuKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc1VuY292ZXJlZC5yZW1vdmVBbGwoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGZpbmRGaXJzdEVycm9yTGluZShmZWVkYmFja0RhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZlZWRiYWNrRGF0YS5sZW5ndGgtMTsgaSA+PSAwOyBpLT0gMSkge1xuICAgICAgICAgICAgaWYgKFwicG9zaXRpb25cIiBpbiBmZWVkYmFja0RhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlZGJhY2tEYXRhW2ldLnBvc2l0aW9uLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHVwZGF0ZVJlZ3VsYXJGZWVkYmFjaygpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG1vZGVsIHdpdGggdGhlc2UgbmV3IGV4ZWN1dGlvbiByZXN1bHRzXG4gICAgICogQHBhcmFtIGV4ZWN1dGlvblJlc3VsdHNcbiAgICAgKi9cbiAgICB1cGRhdGVGZWVkYmFjayhleGVjdXRpb25SZXN1bHRzKSB7XG4gICAgICAgIC8vIFBhcnNlIG91dCBkYXRhXG4gICAgICAgIGxldCBtZXNzYWdlID0gU2suZmZpLnJlbWFwVG9KcyhleGVjdXRpb25SZXN1bHRzLk1FU1NBR0UpO1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuQ0FURUdPUlkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuTEFCRUwpO1xuICAgICAgICBsZXQgaGlkZSA9IFNrLmZmaS5yZW1hcFRvSnMoZXhlY3V0aW9uUmVzdWx0cy5ISURFKTtcbiAgICAgICAgbGV0IGRhdGEgPSBTay5mZmkucmVtYXBUb0pzKGV4ZWN1dGlvblJlc3VsdHMuREFUQSk7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgYmFzZWQgb24gYXNzaWdubWVudHMnIHNldHRpbmdzXG4gICAgICAgIGxldCBoaWRlU2NvcmUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKTtcbiAgICAgICAgaWYgKGhpZGVTY29yZSAmJiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJubyBlcnJvcnNcIjtcbiAgICAgICAgICAgIGxhYmVsID0gXCJObyBlcnJvcnNcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIk5vIGVycm9ycyByZXBvcnRlZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbWFwIHRvIGV4cGVjdGVkIEJsb2NrUHkgbGFiZWxzXG4gICAgICAgIGlmIChjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBcImluc3RydWN0b3JcIiAmJiBsYWJlbC50b0xvd2VyQ2FzZSgpID09PSBcImV4cGxhaW5cIikge1xuICAgICAgICAgICAgbGFiZWwgPSBcIkluc3RydWN0b3IgRmVlZGJhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IHByZXNlbnQgYSBsYWNrIG9mIGVycm9yIGFzIGJlaW5nIGluY29ycmVjdFxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiSW5zdHJ1Y3RvclwiICYmIGxhYmVsID09PSBcIk5vIGVycm9yc1wiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibm8gZXJyb3JzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgbW9kZWwgYWNjb3JkaW5nbHlcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMubWFpbi51dGlsaXRpZXMubWFya2Rvd24obWVzc2FnZSkucmVwbGFjZSgvPHByZT5cXG4vZywgXCI8cHJlPlxcblxcblwiKTtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLm1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5jYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5sYWJlbChsYWJlbCk7XG4gICAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgdHJhY2tpbmcgc3R1ZGVudCBmaWxlLCBsZXQncyB0cmFjayB0aGUgaW5zdHJ1Y3RvciBmaWxlXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIkludGVydmVudGlvblwiLCBjYXRlZ29yeSwgbGFiZWwsIG1lc3NhZ2UsIFwiYW5zd2VyLnB5XCIpO1xuXG4gICAgICAgIC8vIENsZWFyIG91dCBhbnkgcHJldmlvdXNseSBoaWdobGlnaHRlZCBsaW5lc1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uY2xlYXJIaWdobGlnaHRlZExpbmVzKCk7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZXJyb3Igb24gYSBsaW5lIGFuZCByZXBvcnQgdGhhdFxuICAgICAgICBsZXQgbGluZSA9IEJsb2NrUHlGZWVkYmFjay5maW5kRmlyc3RFcnJvckxpbmUoZGF0YSk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAobGluZSAhPT0gbnVsbCAmJiBsaW5lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5saW5lc0Vycm9yLnB1c2gobGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnZlcnQgdGhlIHNldCBvZiB0cmFjZWQgbGluZXNcbiAgICAgICAgbGV0IHN0dWRlbnRSZXBvcnQgPSB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLnJlcG9ydHMuc3R1ZGVudDtcbiAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzVW5jb3ZlcmVkLnJlbW92ZUFsbCgpO1xuICAgICAgICBpZiAoc3R1ZGVudFJlcG9ydC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgdW5jb3ZlcmVkTGluZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24ucmVwb3J0cy5wYXJzZXIubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdHVkZW50UmVwb3J0LmxpbmVzLmluZGV4T2YobGluZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY292ZXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNVbmNvdmVyZWQodW5jb3ZlcmVkTGluZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlc2VudCBhbnkgYWNjdW11bGF0ZWQgZmVlZGJhY2tcbiAgICAgKi9cbiAgICBwcmVzZW50RmVlZGJhY2soZXhlY3V0aW9uUmVzdWx0cykge1xuICAgICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrKGV4ZWN1dGlvblJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IExvZ2dpbmdcbiAgICAgICAgLy90aGlzLm1haW4uY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJmZWVkYmFja1wiLCBjYXRlZ29yeStcInxcIitsYWJlbCwgbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlGZWVkYmFja1VwZGF0ZSgpO1xuICAgIH07XG5cbiAgICBub3RpZnlGZWVkYmFja1VwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0ZlZWRiYWNrVmlzaWJsZSgpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmVlZGJhY2tWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZpbmQoXCIuYmxvY2tweS1mbG9hdGluZy1mZWVkYmFja1wiKS5zaG93KCkuZmFkZU91dCg3MDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcmVzZW50UnVuRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UsIGxhYmVsLCBjYXRlZ29yeSwgbGluZW5vO1xuICAgICAgICBpZiAoZXJyb3IudHAkbmFtZSA9PT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic3ludGF4XCI7XG4gICAgICAgICAgICBsZXQgbGluZW5vID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5saW5lbm8pO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gU2suZmZpLnJlbWFwVG9KcyhlcnJvci5tc2cpO1xuICAgICAgICAgICAgbGV0IHNvdXJjZSwgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVycm9yLmFyZ3MudlszXVsyXTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBgPHByZT4ke3NvdXJjZX08L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhYmVsID09PSBcImJhZCBpbnB1dFwiKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJhZCBJbnB1dFwiO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgQmFkIGlucHV0IG9uIGxpbmUgJHtsaW5lbm99Ljxicj4ke3NvdXJjZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIikge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFT0YgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnRcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFVuZXhwZWN0ZWQgZW5kLW9mLWZpbGUgaW4gbXVsdGktbGluZSBzdGF0ZW1lbnQgb24gbGluZSAke2xpbmVub30uPGJyPiR7c291cmNlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTeW50YXggRXJyb3JcIjtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyBcIjxicj5cIiArIHNvdXJjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhYmVsID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJydW50aW1lXCI7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5jb252ZXJ0U2t1bHB0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZGJhY2tNb2RlbC5tZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwuY2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGFiZWwobGFiZWwpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrTW9kZWwubGluZXNFcnJvci5yZW1vdmVBbGwoKTtcbiAgICAgICAgaWYgKGxpbmVubyAhPT0gdW5kZWZpbmVkICYmIGxpbmVubyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFja01vZGVsLmxpbmVzRXJyb3IucHVzaChsaW5lbm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udmVydFNrdWxwdEVycm9yKGVycm9yLCBmaWxlbmFtZUV4ZWN1dGVkKSB7XG4gICAgICAgIGxldCBuYW1lID0gZXJyb3IudHAkbmFtZTtcbiAgICAgICAgbGV0IGFyZ3MgPSBTay5mZmkucmVtYXBUb0pzKGVycm9yLmFyZ3MpO1xuICAgICAgICBsZXQgdG9wID0gYCR7bmFtZX06ICR7YXJnc1swXX1cXG48YnI+XFxuPGJyPmA7XG4gICAgICAgIGxldCB0cmFjZWJhY2sgPSBcIlwiO1xuICAgICAgICBpZiAoZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyYWNlYmFjayA9IFwiVHJhY2ViYWNrOjxicj5cXG5cIiArIGVycm9yLnRyYWNlYmFjay5tYXAoZnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW5lbm8gPSBmcmFtZS5saW5lbm87XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLmZpbGVuYW1lLnNsaWNlKDAsIC0zKSA9PT0gZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lbm8gLT0gdGhpcy5tYWluLm1vZGVsLmV4ZWN1dGlvbi5yZXBvcnRzLmluc3RydWN0b3IubGluZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBgRmlsZSA8Y29kZSBjbGFzcz1cImZpbGVuYW1lXCI+XCIke2ZyYW1lLmZpbGVuYW1lfVwiPC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGBvbiBsaW5lIDxjb2RlIGNsYXNzPVwibGluZW5vXCI+JHtsaW5lbm99PC9jb2RlPiwgYDtcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSAoZnJhbWUuc2NvcGUgIT09IFwiPG1vZHVsZT5cIiAmJlxuICAgICAgICAgICAgICAgIGZyYW1lLnNjb3BlICE9PSB1bmRlZmluZWQpID8gYGluIHNjb3BlICR7ZnJhbWUuc2NvcGV9YCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lLnNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGBcXG48cHJlPjxjb2RlPiR7ZnJhbWUuc291cmNlfTwvY29kZT48L3ByZT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZSArIGxpbmUgKyBzY29wZSArIHNvdXJjZTtcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG48YnI+XCIpO1xuICAgICAgICAgICAgdHJhY2ViYWNrID0gYCR7dHJhY2ViYWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcCtcIlxcblwiK3RyYWNlYmFjaztcbiAgICB9XG5cbiAgICBwcmVzZW50SW50ZXJuYWxFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCkge1xuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZXhlY3V0aW9uLmZlZWRiYWNrLmNhdGVnb3J5KFwiaW50ZXJuYWxcIik7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subGFiZWwoXCJJbnRlcm5hbCBFcnJvclwiKTtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3IgaW4gaW5zdHJ1Y3RvciBmZWVkYmFjay4gUGxlYXNlIHNob3cgdGhlIGZvbGxvd2luZyB0byBhbiBpbnN0cnVjdG9yOjxicj5cXG5cIjtcbiAgICAgICAgbWVzc2FnZSArPSB0aGlzLmNvbnZlcnRTa3VscHRFcnJvcihlcnJvciwgZmlsZW5hbWVFeGVjdXRlZCk7XG4gICAgICAgIHRoaXMubWFpbi5tb2RlbC5leGVjdXRpb24uZmVlZGJhY2subWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeUZlZWRiYWNrVXBkYXRlKCk7XG4gICAgfVxufSIsImltcG9ydCB7Zmlyc3REZWZpbmVkVmFsdWV9IGZyb20gXCJ1dGlsaXRpZXMuanNcIjtcclxuXHJcbi8vICR7bWFrZVRhYihcIj9tb2NrX3VybHMuYmxvY2tweVwiLCBcIlVSTCBEYXRhXCIsIHRydWUpfVxyXG5cclxuY29uc3QgbWFrZVRhYiA9IGZ1bmN0aW9uKGZpbGVuYW1lLCBmcmllbmRseU5hbWUsIGhpZGVJZkVtcHR5LCBub3RJbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAoZnJpZW5kbHlOYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmcmllbmRseU5hbWUgPSBmaWxlbmFtZTtcclxuICAgIH1cclxuICAgIGxldCBpbnN0cnVjdG9yRmlsZUNsYXNzID0gXCJcIjtcclxuICAgIGxldCBoaWRlSWZOb3RJbnN0cnVjdG9yID0gXCJ0cnVlXCI7XHJcbiAgICBpZiAoIW5vdEluc3RydWN0b3IpIHtcclxuICAgICAgICBpbnN0cnVjdG9yRmlsZUNsYXNzID0gXCJibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiO1xyXG4gICAgICAgIGhpZGVJZk5vdEluc3RydWN0b3IgPSBcImRpc3BsYXkuaW5zdHJ1Y3RvcigpXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gJHtpbnN0cnVjdG9yRmlsZUNsYXNzfVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiBkaXNwbGF5LmZpbGVuYW1lKCkgPT09ICcke2ZpbGVuYW1lfSd9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgJyR7ZmlsZW5hbWV9JyksXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAoISR7aGlkZUlmRW1wdHl9IHx8IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCcke2ZpbGVuYW1lfScpKSAmJiAke2hpZGVJZk5vdEluc3RydWN0b3J9XCI+XHJcbiAgICAgICAgICAgICR7ZnJpZW5kbHlOYW1lfTwvYT5cclxuICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgRklMRVNfSFRNTCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktZmlsZXNcIlxyXG4gICAgZGF0YS1iaW5kPVwidmlzaWJsZTogdWkuZmlsZXMudmlzaWJsZVwiPlxyXG48dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG5cclxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPHN0cm9uZz5WaWV3OiA8L3N0cm9uZz5cclxuICAgIDwvbGk+XHJcblxyXG4gICAgJHttYWtlVGFiKFwiYW5zd2VyLnB5XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCJJbnN0cnVjdGlvbnNcIil9XHJcbiAgICAke21ha2VUYWIoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsIFwiU2V0dGluZ3NcIil9XHJcbiAgICAke21ha2VUYWIoXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIlN0YXJ0aW5nIENvZGVcIil9XHJcbiAgICAke21ha2VUYWIoXCIhb25fcnVuLnB5XCIsIFwiT24gUnVuXCIpfVxyXG4gICAgJHttYWtlVGFiKFwiIW9uX2NoYW5nZS5weVwiLCBcIk9uIENoYW5nZVwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFvbl9ldmFsLnB5XCIsIFwiT24gRXZhbFwiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiLCBcIlNhbXBsZSBTdWJtaXNzaW9uc1wiLCB0cnVlKX1cclxuICAgICR7bWFrZVRhYihcIiF0YWdzLmJsb2NrcHlcIiwgXCJUYWdzXCIsIHRydWUpfVxyXG4gICAgXHJcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHsnYmxvY2tweS1maWxlLWluc3RydWN0b3InOiAhZmlsZW5hbWUoKS5zdGFydHNXaXRoKCcmJyl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpIHx8ICRyb290LmRpc3BsYXkuaW5zdHJ1Y3RvcigpIFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZWRpdGFibGU6IGZpbGVuYW1lKCkuc3RhcnRzV2l0aCgnJicpfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lLmJpbmQoJGRhdGEsIGZpbGVuYW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJHJvb3QudWkuZmlsZXMuZGlzcGxheUZpbGVuYW1lKGZpbGVuYW1lKCkpXCI+XHJcbiAgICAgICAgICAgIDwvYT4gICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8IS0tIC9rbyAtLT5cclxuICAgIDwhLS0ga28gZm9yZWFjaDogYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMgLS0+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIlxyXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkcm9vdC5kaXNwbGF5Lmluc3RydWN0b3IoKVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY3NzOiB7YWN0aXZlOiAkcm9vdC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGZpbGVuYW1lKCl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUuYmluZCgkZGF0YSwgZmlsZW5hbWUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmaWxlbmFtZVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgICBcclxuICAgIDwhLS0ga28gZm9yZWFjaDogc3VibWlzc2lvbi5leHRyYUZpbGVzIC0tPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjc3M6IHthY3RpdmU6ICRyb290LmRpc3BsYXkuZmlsZW5hbWUoKSA9PT0gZmlsZW5hbWUoKX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJHJvb3QuZGlzcGxheS5maWxlbmFtZS5iaW5kKCRkYXRhLCBmaWxlbmFtZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICRyb290LnVpLmZpbGVzLmRpc3BsYXlGaWxlbmFtZShmaWxlbmFtZSgpKVwiPlxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICBcclxuICAgICAgICA8L2xpPlxyXG4gICAgPCEtLSAva28gLS0+XHJcbiAgXHJcbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkIE5ldzwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogdWkuZmlsZXMuaGFzQ29udGVudHMoJz9tb2NrX3VybHMuYmxvY2tweScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICc/bW9ja191cmxzLmJsb2NrcHknKVwiPlVSTCBEYXRhPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/dGFncy5ibG9ja3B5JylcIj5UYWdzPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJoaWRkZW46IHVpLmZpbGVzLmhhc0NvbnRlbnRzKCc/c2FtcGxlX3N1Ym1pc3Npb25zLmJsb2NrcHknKVwiPlNhbXBsZSBTdWJtaXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiaGlkZGVuOiBhc3NpZ25tZW50Lm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICchb25fY2hhbmdlLnB5JylcIj5PbiBDaGFuZ2U8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImhpZGRlbjogYXNzaWdubWVudC5vbkV2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5maWxlcy5hZGQuYmluZCgkZGF0YSwgJyFvbl9ldmFsLnB5JylcIj5PbiBFdmFsPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gYmxvY2tweS1maWxlLWluc3RydWN0b3JcIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdzdGFydGluZycpXCI+U3RhcnRpbmcgRmlsZTwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGJsb2NrcHktZmlsZS1pbnN0cnVjdG9yXCIgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmZpbGVzLmFkZC5iaW5kKCRkYXRhLCAnaW5zdHJ1Y3RvcicpXCI+SW5zdHJ1Y3RvciBGaWxlPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZmlsZXMuYWRkLmJpbmQoJGRhdGEsICdzdHVkZW50JylcIj5TdHVkZW50IEZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIFxyXG48L3VsPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IE5FV19JTlNUUlVDVE9SX0ZJTEVfRElBTE9HX0hUTUwgPSBgXHJcbjxmb3JtPlxyXG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgIDwhLS0gRmlsZW5hbWUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj5GaWxlbmFtZTo8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCJcclxuICAgICAgICAgICAgaWQ9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZW5hbWVcIj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRmlsZXR5cGUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgdGV4dC1yaWdodCBtdC0yXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPkZpbGV0eXBlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1maWxldHlwZVwiPjwvc3Bhbj4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gSW5hY2Nlc3NpYmxlIHRvIHN0dWRlbnQ/IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yIHRleHQtcmlnaHQgbXQtMlwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCI+TmFtZXNwYWNlOiA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIGJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1uYW1lc3BhY2VcIlxyXG4gICAgICAgICAgICBpZD1cImJsb2NrcHktaW5zdHJ1Y3Rvci1maWxlLWRpYWxvZy1uYW1lc3BhY2VcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiFcIj5Db21wbGV0ZWx5IGluYWNjZXNzaWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiP1wiPkhpZGRlbiBmcm9tIHN0dWRlbnQsIGFjY2Vzc2libGUgcHJvZ3JhbWF0aWNhbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCImXCI+VmlzaWJsZSB0byBzdHVkZW50LCBidXQgbm90IGVkaXRhYmxlPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZm9ybT5cclxuYDtcclxuXHJcbi8qKlxyXG4gKiBGaWxlbmFtZXMgbGl2ZSBpbiBvbmUgb2YgZml2ZSBwb3NzaWJsZSBuYW1lc3BhY2VzOlxyXG4gKiAgSW5zdHJ1Y3RvciAoISk6IEludmlzaWJsZSB0byB0aGUgc3R1ZGVudCB1bmRlciBhbGwgY2lyY3Vtc3RhbmNlc1xyXG4gKiAgU3RhcnQgU3BhY2UgKF4pOiBVc2VkIHRvIHJlc2V0IHRoZSBzdHVkZW50IG5hbWVzcGFjZVxyXG4gKiAgU3R1ZGVudCBTcGFjZSAoKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCB3aGVuIGRpc3BsYXkuaGlkZUZpbGVzIGlzIG5vdCB0cnVlLCBhYmxlIHRvIGJlIGVkaXRlZFxyXG4gKiAgSGlkZGVuIFNwYWNlICg/KTogTm90IGRpcmVjdGx5IHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBhY2Nlc3NpYmxlIHByb2dyYW1tYXRpY2FsbHlcclxuICogIFJlYWQtb25seSBTcGFjZSAoJik6IEFuIGluc3RydWN0b3IgZmlsZSB0eXBlIHZpc2libGUgdG8gdGhlIHN0dWRlbnQsIGJ1dCBpcyB1bmVkaXRhYmxlIGJ5IHRoZW1cclxuICogIFNlY3JldCBTcGFjZSAoJCk6IE5vdCB2aXNpYmxlIGZyb20gdGhlIG1lbnUgYXQgYWxsLCBzb21lIG90aGVyIG1lY2hhbmlzbSBjb250cm9scyBpdFxyXG4gKiAgR2VuZXJhdGVkIFNwYWNlICgqKTogVmlzaWJsZSB0byB0aGUgc3R1ZGVudCwgYnV0IGRlc3Ryb3llZCBhZnRlciBFbmdpbmUuQ2xlYXIuIENhbiBzaGFkb3cgYW4gYWN0dWFsIGZpbGUuXHJcbiAqICBDb25jYXRlbmF0ZWQgU3BhY2UgKCMpOiBVc2VkIHdoZW4gYnVuZGxpbmcgYSBzcGFjZSBmb3IgdGhlIHNlcnZlci5cclxuICovXHJcblxyXG5leHBvcnQgbGV0IFNUQVJUSU5HX0ZJTEVTID0gW1xyXG4gICAgLy8gU3VibWlzc2lvblxyXG4gICAgXCJhbnN3ZXIucHlcIixcclxuICAgIC8vIEluc3RydWN0b3IgZmlsZXNcclxuICAgIFwiIWluc3RydWN0aW9ucy5tZFwiLFxyXG4gICAgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIsXHJcbiAgICBcIl5zdGFydGluZ19jb2RlLnB5XCIsXHJcbiAgICBcIiFvbl9ydW4ucHlcIixcclxuICAgIFwiJHNldHRpbmdzLmJsb2NrcHlcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19ORVdfRklMRVMgPSBbXHJcbiAgICBcIiFvbl9jaGFuZ2UucHlcIixcclxuICAgIFwiIW9uX2V2YWwucHlcIixcclxuICAgIFwiP21vY2tfdXJscy5ibG9ja3B5XCIsXHJcbiAgICBcIiF0YWdzLmJsb2NrcHlcIixcclxuICAgIFwiIXNhbXBsZV9zdWJtaXNzaW9ucy5ibG9ja3B5XCJcclxuXTtcclxuXHJcbmNvbnN0IElOU1RSVUNUT1JfRElSRUNUT1JZID0gXCJfaW5zdHJ1Y3Rvci9cIjtcclxuY29uc3QgU1RVREVOVF9ESVJFQ1RPUlkgPSBcIl9zdHVkZW50L1wiO1xyXG5cclxuY29uc3QgU2VhcmNoTW9kZXMgPSB7XHJcbiAgICBFVkVSWVdIRVJFOiBcIkVWRVJZV0hFUkVcIixcclxuICAgIFNUQVJUX1dJVEhfSU5TVFJVQ1RPUjogXCJTVEFSVF9XSVRIX0lOU1RSVUNUT1JcIixcclxuICAgIE9OTFlfU1RVREVOVF9GSUxFUzogXCJPTkxZX1NUVURFTlRfRklMRVNcIlxyXG59O1xyXG5cclxuY29uc3QgREVMRVRBQkxFX1NJTVBMRV9GSUxFUyA9IFtcIiFvbl9jaGFuZ2UucHlcIiwgXCIhb25fZXZhbC5weVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkRFTEVUQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBVTlJFTkFNQUJMRV9GSUxFUyA9IFtcImFuc3dlci5weVwiLCBcIiFpbnN0cnVjdGlvbnMubWRcIiwgXCIhYXNzaWdubWVudF9zZXR0aW5ncy5weVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJec3RhcnRpbmdfY29kZS5weVwiLCBcIiFvbl9ydW4ucHlcIiwgXCIkc2V0dGluZ3MuYmxvY2tweVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIhb25fY2hhbmdlLnB5XCIsIFwiIW9uX2V2YWwucHlcIiwgXCI/bW9ja191cmxzLmJsb2NrcHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIXRhZ3MuYmxvY2tweVwiLCBcIiFzYW1wbGVfc3VibWlzc2lvbnMuYmxvY2tweVwiXTtcclxuXHJcbmNsYXNzIEJsb2NrUHlGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1haW4sIGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4ge1wiZmlsZW5hbWVcIjoga28ub2JzZXJ2YWJsZShmaWxlbmFtZSksIGNvbnRlbnRzOiBrby5vYnNlcnZhYmxlKGNvbnRlbnRzIHx8IFwiXCIpfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU1vY2tNb2RlbEZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSB7XHJcbiAgICByZXR1cm4geyBmaWxlbmFtZTogKCkgPT4gZmlsZW5hbWUsIGNvbnRlbnRzOiAoKSA9PiBjb250ZW50cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbmNhdGVuYXRlZEZpbGUoY29uY2F0ZW5hdGVkRmlsZSwgbW9kZWxGaWxlTGlzdCkge1xyXG4gICAgaWYgKGNvbmNhdGVuYXRlZEZpbGUpIHtcclxuICAgICAgICBsZXQgZmlsZXMgPSBKU09OLnBhcnNlKGNvbmNhdGVuYXRlZEZpbGUpO1xyXG4gICAgICAgIGxldCBtb2RlbEZpbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmlsZW5hbWUgaW4gZmlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVzLmhhc093blByb3BlcnR5KGZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxGaWxlcy5wdXNoKG1ha2VNb2RlbEZpbGUoZmlsZW5hbWUsIGZpbGVzW2ZpbGVuYW1lXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZmlsZXMgPSBmaWxlcy5tYXAoZmlsZSA9PiBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudHMpKTtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KG1vZGVsRmlsZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbEZpbGVMaXN0KFtdKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNhdGVuYXRlZEZpbGUobW9kZWxGaWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1vZGVsRmlsZUxpc3QoKS5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUuZmlsZW5hbWUoKSxcclxuICAgICAgICAgICAgY29udGVudHM6IGZpbGUuY29udGVudHMoKVxyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQ29uY2F0ZW5hdGVkRmlsZShtb2RlbEZpbGVMaXN0KSB7XHJcbiAgICByZXR1cm4ga28ucHVyZUNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICAgICAgbW9kZWxGaWxlTGlzdCgpLmZvckVhY2goZmlsZSA9PlxyXG4gICAgICAgICAgICByZXN1bHRbZmlsZS5maWxlbmFtZSgpXSA9IGZpbGUuY29udGVudHMoKSk7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0cyBhd2F5IGRhdGFiYXNlIGxvZ2ljXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmxvY2tQeUZpbGVTeXN0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICAgICAgdGhpcy5maWxlc18gPSB7fTtcclxuICAgICAgICB0aGlzLm1vdW50RmlsZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy53YXRjaE1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVzXyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLm1haW4ubW9kZWwuZGlzcGxheS5pbnN0cnVjdG9yLnN1YnNjcmliZSgodmlzaWJsaXR5KT0+IHtcclxuICAgICAgICAgICAgJChcIi5ibG9ja3B5LWZpbGUtaW5zdHJ1Y3RvclwiKS50b2dnbGUodmlzaWJsaXR5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaEZpbGUoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEoZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykpIHtcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXRjaGVzX1tmaWxlbmFtZV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFdhdGNoaW5nRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW2ZpbGVuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaE1vZGVsKCkge1xyXG4gICAgICAgIGxldCBmaWxlc3lzdGVtID0gdGhpcztcclxuICAgICAgICBbdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyxcclxuICAgICAgICAgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFTdGFydGluZ0ZpbGVzLFxyXG4gICAgICAgICB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlc10uZm9yRWFjaChmaWxlQXJyYXkgPT5cclxuICAgICAgICAgICAgZmlsZUFycmF5LnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RlbEZpbGUgPSBjaGFuZ2UudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiYWRkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayBuZXcgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGZpbGVzeXN0ZW0ubmV3RmlsZShtb2RlbEZpbGUuZmlsZW5hbWUoKSwgbW9kZWxGaWxlLmNvbnRlbnRzKCksIG1vZGVsRmlsZS5jb250ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0ubm90aWZ5V2F0Y2hlcyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZS5zdGF0dXMgPT09IFwiZGVsZXRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzeXN0ZW0uZGVsZXRlRmlsZUxvY2FsbHlfKG1vZGVsRmlsZS5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIFwiYXJyYXlDaGFuZ2VcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlci5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBzdWJtaXNzaW9uLmNvZGUpXHJcbiAgICAvLyAhb25fcnVuLnB5LCAhb25fY2hhbmdlLnB5LCAhb25fZXZhbC5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gcmVsZXZhbnQgYXNzaWdubWVudC48d2hhdGV2ZXI+XHJcbiAgICAvLyBec3RhcnRpbmdfY29kZS5weVxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZmlyc3QgZWxlbWVudCBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gXndoYXRldmVyXHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBhc3NpZ25tZW50LnN0YXJ0aW5nQ29kZVxyXG4gICAgLy8gIXdoYXRldmVyIG9yID93aGF0ZXZlclxyXG4gICAgLy8gICA9PiBzdWJzY3JpYmUgdG8gZWxlbWVudHMgb2YgYXNzaWdubWVudC5leHRyYUZpbGVzXHJcbiAgICAvLyBPdGhlcndpc2U6XHJcbiAgICAvLyAgID0+IHN1YnNjcmliZSB0byByZXN0IG9mIHRoZSBlbGVtZW50cyBvZiBzdWJtaXNzaW9uLmNvZGVcclxuICAgIC8qKlxyXG4gICAgICogTmV3IHNwZWNpYWwgZmlsZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkIGhlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlIHtCbG9ja1B5RmlsZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmVGaWxlXyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiYW5zd2VyLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5jb2RlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhb25fcnVuLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vblJ1bjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiIW9uX2NoYW5nZS5weVwiKSB7XHJcbiAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFvbl9ldmFsLnB5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5vbkV2YWw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlLmZpbGVuYW1lID09PSBcIiFpbnN0cnVjdGlvbnMubWRcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiXnN0YXJ0aW5nX2NvZGUucHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnN0YXJ0aW5nQ29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiP21vY2tfdXJscy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuZXh0cmFJbnN0cnVjdG9yRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhdGFncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC50YWdzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZSA9PT0gXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpIHtcclxuICAgICAgICAgICAgZmlsZS5oYW5kbGUgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5zZXR0aW5ncztcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZW5hbWUgPT09IFwiJHNldHRpbmdzLmJsb2NrcHlcIikge1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiXlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiIVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiP1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmlsZS5maWxlbmFtZS5zdGFydHNXaXRoKFwiJlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVJbkFycmF5XyhmaWxlLCB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlSW5BcnJheV8oZmlsZSwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uZXh0cmFGaWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ic2VydmVJbkFycmF5XyhmaWxlLCBhcnJheSkge1xyXG4gICAgICAgIGZpbGUub3duZXIgPSBhcnJheTtcclxuICAgICAgICBsZXQgY29kZUJ1bmRsZSA9IGZpbGUub3duZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBjb2RlQnVuZGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlQnVuZGxlW2ldLmZpbGVuYW1lKCkgPT09IGZpbGUuZmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUuaGFuZGxlID0gY29kZUJ1bmRsZVtpXS5jb250ZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsZS5oYW5kbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZpbGUgPSBtYWtlTW9kZWxGaWxlKGZpbGUuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZSA9IG5ld0ZpbGUuY29udGVudHM7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3RmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdW50RmlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiYW5zd2VyLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xyXG4gICAgICAgIHRoaXMubmV3RmlsZShcIiFvbl9ydW4ucHlcIik7XHJcbiAgICAgICAgdGhpcy5uZXdGaWxlKFwiIWluc3RydWN0aW9ucy5tZFwiKTtcclxuICAgICAgICB0aGlzLm5ld0ZpbGUoXCIhYXNzaWdubWVudF9zZXR0aW5ncy5ibG9ja3B5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21vdW50RXh0cmFGaWxlcygpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuZmlsZXNfKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzXy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFVOREVMRVRBQkxFX0ZJTEVTLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNfW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLndhdGNoZXNfW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRPRE86IFNob3VsZG4ndCB3ZSBub3RpZnkgdGhlIFVJIHRoYXQgdGhlIGZpbGUgd2FzIGRlbGV0ZWQ/XHJcbiAgICB9XHJcblxyXG4gICAgbmV3RmlsZShmaWxlbmFtZSwgY29udGVudHMsIG1vZGVsRmlsZSkge1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLmZpbGVzXykge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGFscmVhZHkgZXhpc3RzISBKdXN0IHVwZGF0ZSBpdHMgaGFuZGxlXHJcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0ZpbGUgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChtb2RlbEZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlRmlsZV8oZXhpc3RpbmdGaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhpc3RpbmdGaWxlLmhhbmRsZShjb250ZW50cyB8fCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nRmlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEJsb2NrUHlGaWxlKHRoaXMubWFpbiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0gPSBuZXdGaWxlO1xyXG4gICAgICAgICAgICBpZiAobW9kZWxGaWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZUZpbGVfKG5ld0ZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmlsZS5oYW5kbGUgPSBtb2RlbEZpbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRlbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG5ld0ZpbGUuaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVGaWxlKGZpbGVuYW1lLCBjb250ZW50cykge1xyXG4gICAgICAgIGNvbnRlbnRzID0gY29udGVudHMgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKGNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV0uaGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsZShmaWxlbmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVzX1tmaWxlbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnxvYmplY3R9IFRoZSBpbmZvIGFib3V0IHRoZSBmaWxlLCBvciBmYWxzZSBpZiBpdCBjb3VsZCBub3QgYmUgZGVsZXRlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVGaWxlKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgaWYgKERFTEVUQUJMRV9TSU1QTEVfRklMRVMuaW5kZXhPZihmaWxlbmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5kZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBmaWxlLmhhbmRsZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzIGEgY2FsbGJhY2sgdG8gZXZlbnR1YWxseSBjYWxsIGRlbGV0ZUZpbGVMb2NhbGx5X1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmZpbGVzX1tmaWxlbmFtZV0ub3duZXIucmVtb3ZlKG1vZGVsRmlsZSA9PiBtb2RlbEZpbGUuZmlsZW5hbWUgPT09IGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kIHx8IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlTG9jYWxseV8oZmlsZW5hbWUpIHtcclxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNfW2ZpbGVuYW1lXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5maWxlc19bZmlsZW5hbWVdO1xyXG4gICAgICAgIGlmIChmaWxlbmFtZSBpbiB0aGlzLndhdGNoZXNfKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hlc19bZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2suZGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5V2F0Y2hlcyhmaWxlKSB7XHJcbiAgICAgICAgaWYgKGZpbGUuZmlsZW5hbWUgaW4gdGhpcy53YXRjaGVzXykge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXNfW2ZpbGUuZmlsZW5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sudXBkYXRlZChmaWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvckZpbGUobmFtZSwgc3R1ZGVudFNlYXJjaCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgZmlsZXMuKlxyXG4gICAgICAgIF9pbnN0cnVjdG9yL2ZpbGVzLipcclxuICAgICAgICBfc3R1ZGVudC9maWxlcy4qXHJcblxyXG4gICAgICAgIElmIGEgc3R1ZGVudCBzZWFyY2hlcyBmb3IgYSBmaWxlLCBpdCBjaGVja3MgdGhlIFwiP1wiLCBcIiZcIiwgXCIqXCIsIFwiXCIgbmFtZXNwYWNlc1xyXG4gICAgICAgICAgICBpbXBvcnQgaGVscGVyID0+IFwiLi9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICBvcGVuKFwiZXh0ZXJuYWwuanNvblwiKSA9PiBcImV4dGVybmFsLmpzb25cIlxyXG4gICAgICAgIElmIGFuIGluc3RydWN0b3Igc2VhcmNoZXMgZm9yIGEgZmlsZSwgaXQgY2hlY2tzIFwiIVwiLCBcIl5cIiwgXCI/XCIsIFwiJlwiLCBcIipcIiwgXCJcIiBuYW1lc3BhY2VzXHJcbiAgICAgICAgICAgIFRvIGV4cGxpY2l0bHkgc2VhcmNoIGluc3RydWN0b3IgbmFtZXNwYWNlcyBmaXJzdFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0IF9pbnN0cnVjdG9yLmhlbHBlciA9PiBcIi4vaW5zdHJ1Y3Rvci9oZWxwZXIucHlcIlxyXG4gICAgICAgICAgICAgICAgb3BlbihcIl9pbnN0cnVjdG9yL2V4dGVybmFsLmpzb25cIikgPT4gXCJfaW5zdHJ1Y3Rvci9leHRlcm5hbC5qc29uXCJcclxuICAgICAgICAgICAgdG8gYWxsb3cgc3R1ZGVudCBmaWxlcyB0byBvdmVycmlkZTpcclxuICAgICAgICAgICAgICAgIGltcG9ydCBoZWxwZXIgPT4gXCIuL2hlbHBlci5weVwiXHJcbiAgICAgICAgICAgICAgICBvcGVuKFwiZXh0ZXJuYWwuanNvblwiKSA9PiBcImV4dGVybmFsLmpzb25cIlxyXG4gICAgICAgICAgICB0byBvbmx5IGNoZWNrIHN0dWRlbnQgZmlsZXMsIHByZXBlbmQgd2l0aCBfc3R1ZGVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIENob3Agb2ZmIHN0YXJ0aW5nIFwiLi9cIlxyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCIuL1wiKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZSgyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlYXJjaE1vZGUgPSBTZWFyY2hNb2Rlcy5FVkVSWVdIRVJFO1xyXG4gICAgICAgIC8vIFNob3VsZCB0aGUgc2VhcmNoIGJlIHN0YXJ0IHdpdGggaW5zdHJ1Y3RvciBzaWRlP1xyXG4gICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoSU5TVFJVQ1RPUl9ESVJFQ1RPUlkpKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNsaWNlKElOU1RSVUNUT1JfRElSRUNUT1JZLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNlYXJjaE1vZGUgPSBTZWFyY2hNb2Rlcy5TVEFSVF9XSVRIX0lOU1RSVUNUT1I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNob3VsZCB0aGUgc2VhcmNoIGJlIGxpbWl0ZWQgdG8gdGhlIHN0dWRlbnQgbW9kZT9cclxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFNUVURFTlRfRElSRUNUT1JZKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zbGljZShTVFVERU5UX0RJUkVDVE9SWS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3R1ZGVudFNlYXJjaCkge1xyXG4gICAgICAgICAgICBzZWFyY2hNb2RlID0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgaW5zdHJ1Y3RvciB2ZXJzaW9uc1xyXG4gICAgICAgIGxldCBleHRyYVN0dWRlbnRGaWxlcyA9IHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmV4dHJhRmlsZXMoKTtcclxuICAgICAgICBsZXQgZXh0cmFJbnN0cnVjdG9yRmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYUluc3RydWN0b3JGaWxlcygpO1xyXG4gICAgICAgIGxldCBleHRyYVN0YXJ0aW5nRmlsZXMgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5leHRyYVN0YXJ0aW5nRmlsZXMoKTtcclxuICAgICAgICAvLyBDaGVjayBzcGVjaWFsIGZpbGVzIChUT0RPOiBob3cgd291bGQgYW4gaW5zdHJ1Y3RvciBhY2Nlc3MgXCIuL19pbnN0cnVjdG9yL2Fuc3dlci5weVwiP1xyXG4gICAgICAgIGxldCBzcGVjaWFsRmlsZSA9IHRoaXMuc2VhcmNoRm9yU3BlY2lhbEZpbGVzXyhuYW1lLCBzZWFyY2hNb2RlKTtcclxuICAgICAgICBpZiAoc3BlY2lhbEZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3BlY2lhbEZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN0YXJ0IGxvb2tpbmcgdGhyb3VnaCBwb3NzaWJsZSBmaWxlc1xyXG4gICAgICAgIGxldCBzdHVkZW50VmVyc2lvbiA9IHRoaXMuc2VhcmNoRm9yRmlsZUluTGlzdF8oZXh0cmFTdHVkZW50RmlsZXMsIG5hbWUpO1xyXG4gICAgICAgIGxldCBnZW5lcmF0ZWRWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYVN0dWRlbnRGaWxlcywgXCIqXCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCImXCIrbmFtZSk7XHJcbiAgICAgICAgaWYgKHNlYXJjaE1vZGUgPT09IFNlYXJjaE1vZGVzLk9OTFlfU1RVREVOVF9GSUxFUykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3REZWZpbmVkVmFsdWUoZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluc3RydWN0b3JWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYUluc3RydWN0b3JGaWxlcywgXCIhXCIrbmFtZSk7XHJcbiAgICAgICAgbGV0IGhpZGRlblZlcnNpb24gPSB0aGlzLnNlYXJjaEZvckZpbGVJbkxpc3RfKGV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIj9cIituYW1lKTtcclxuICAgICAgICBsZXQgc3RhcnRpbmdWZXJzaW9uID0gdGhpcy5zZWFyY2hGb3JGaWxlSW5MaXN0XyhleHRyYVN0YXJ0aW5nRmlsZXMsIFwiXlwiK25hbWUpO1xyXG4gICAgICAgIGlmIChzZWFyY2hNb2RlID09PSBTZWFyY2hNb2Rlcy5TVEFSVF9XSVRIX0lOU1RSVUNUT1IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0RGVmaW5lZFZhbHVlKGluc3RydWN0b3JWZXJzaW9uLCBoaWRkZW5WZXJzaW9uLCBzdGFydGluZ1ZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmVyc2lvbiwgc3R1ZGVudFZlcnNpb24sIGdlbmVyYXRlZFZlcnNpb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuRVZFUllXSEVSRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3REZWZpbmVkVmFsdWUoZGVmYXVsdFZlcnNpb24sIHN0dWRlbnRWZXJzaW9uLCBnZW5lcmF0ZWRWZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RvclZlcnNpb24sIGhpZGRlblZlcnNpb24sIHN0YXJ0aW5nVmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvckZpbGVJbkxpc3RfKG1vZGVsTGlzdCwgZmlsZW5hbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBtb2RlbExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1vZGVsTGlzdFtpXS5maWxlbmFtZSgpID09PSBmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsTGlzdFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEZvclNwZWNpYWxGaWxlc18oZmlsZW5hbWUsIHNlYXJjaE1vZGUpIHtcclxuICAgICAgICBpZiAoc2VhcmNoTW9kZSA9PT0gU2VhcmNoTW9kZXMuT05MWV9TVFVERU5UX0ZJTEVTKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlbmFtZSA9PT0gXCJhbnN3ZXIucHlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvYW5zd2VyLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5zdWJtaXNzaW9uLmNvZGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYW5zd2VyLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9hbnN3ZXIucHlcIiwgdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb24uY29kZSgpKTtcclxuICAgICAgICAgICAgY2FzZSBcIm9uX3J1bi5weVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3Ivb25fcnVuLnB5XCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uUnVuKCkpO1xyXG4gICAgICAgICAgICBjYXNlIFwib25fY2hhbmdlLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9vbl9jaGFuZ2UucHlcIiwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQub25DaGFuZ2UoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvbl9ldmFsLnB5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU1vY2tNb2RlbEZpbGUoXCJfaW5zdHJ1Y3Rvci9vbl9ldmFsLm1kXCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lm9uRXZhbCgpKTtcclxuICAgICAgICAgICAgY2FzZSBcImluc3RydWN0aW9ucy5tZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VNb2NrTW9kZWxGaWxlKFwiX2luc3RydWN0b3IvaW5zdHJ1Y3Rpb25zLm1kXCIsIHRoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50Lmluc3RydWN0aW9ucygpKTtcclxuICAgICAgICAgICAgY2FzZSBcInN0YXJ0aW5nX2NvZGUucHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTW9ja01vZGVsRmlsZShcIl9pbnN0cnVjdG9yL3N0YXJ0aW5nX2NvZGUucHlcIiwgdGhpcy5tYWluLm1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0ZpbGVEaWFsb2coa2luZCkge1xyXG4gICAgICAgIGxldCBib2R5ID0gJChORVdfSU5TVFJVQ1RPUl9GSUxFX0RJQUxPR19IVE1MKTtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBib2R5LmZpbmQoXCIuYmxvY2tweS1pbnN0cnVjdG9yLWZpbGUtZGlhbG9nLWZpbGVuYW1lXCIpO1xyXG4gICAgICAgIGxldCBmaWxldHlwZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctZmlsZXR5cGVcIik7XHJcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IGJvZHkuZmluZChcIi5ibG9ja3B5LWluc3RydWN0b3ItZmlsZS1kaWFsb2ctbmFtZXNwYWNlXCIpO1xyXG4gICAgICAgIGxldCBleHRlbnNpb25SZWdleCA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuICAgICAgICBmaWxlbmFtZS5vbihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvblJlZ2V4LmV4ZWMoZmlsZW5hbWUudmFsKCkpWzFdO1xyXG4gICAgICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24gPT09IHVuZGVmaW5lZCA/IFwiTm8gZXh0ZW5zaW9uXCIgOiBleHRlbnNpb247XHJcbiAgICAgICAgICAgIC8vVE9ETzogdGhpcy5tYWluLmNvbXBvbmVudHMuZWRpdG9ycy5nZXRFZGl0b3JGcm9tRXh0ZW5zaW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIGZpbGV0eXBlLnRleHQoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgeWVzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiaW5zdHJ1Y3RvclwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBuYW1lc3BhY2UudmFsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2luZCA9PT0gXCJzdGFydGluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIl5cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpbGVuYW1lLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IHByZWZpeCtmaWxlbmFtZS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvZHkuc3VibWl0KChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgeWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5jb25maXJtKFwiTWFrZSBOZXcgRmlsZVwiLCBib2R5LCB5ZXMsICgpPT57fSwgXCJBZGRcIik7XHJcbiAgICB9XHJcbn0iLCIvL1RPRE86IE1vdmUgZ2V0IGxpbmsgZG93biB0byBmb290ZXIsIHJlbW92ZSB2ZXJ0aWNhbCBiYXIgZnJvbSBxdWljay1tZW51XHJcbmV4cG9ydCBsZXQgRk9PVEVSX0hUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxvY2tweS1wYW5lbCBibG9ja3B5LXN0YXR1c1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRBc3NpZ25tZW50JylcIj5Mb2FkIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVBc3NpZ25tZW50JylcIj5TYXZlIEFzc2lnbm1lbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWRGaWxlJylcIj5Mb2FkIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3NhdmVGaWxlJylcIj5TYXZlIEZpbGU8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvYWREYXRhc2V0JylcIj5Mb2FkIERhdGFzZXQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ2xvZ0V2ZW50JylcIj5Mb2cgRXZlbnQ8L3NwYW4+LCBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCIgZGF0YS1iaW5kPVwiY2xhc3M6IHVpLnNlcnZlci5zdGF0dXMoJ3VwZGF0ZVN1Ym1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB1aS5zZXJ2ZXIuZm9yY2UudXBkYXRlU3VibWlzc2lvblwiPlVwZGF0ZSBTdWJtaXNzaW9uPC9zcGFuPiwgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiIGRhdGEtYmluZD1cImNsYXNzOiB1aS5zZXJ2ZXIuc3RhdHVzKCdvbkV4ZWN1dGlvbicpXCI+RXhlY3V0aW9uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdWkuc2VydmVyLm1lc3NhZ2VzXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPlVzZXI6IDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IHVzZXIuaWRcIj48L3NwYW4+ICg8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLm5hbWVcIj48L3NwYW4+LCA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLnJvbGVcIj48L3NwYW4+KTwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPkNvdXJzZTogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogdXNlci5jb3Vyc2VJZFwiPjwvc3Bhbj48L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuPkdyb3VwOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiB1c2VyLmdyb3VwSWRcIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5Bc3NpZ25tZW50OiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LmlkXCI+PC9zcGFuPjwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4+QXNzaWdubWVudCBWZXJzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBhc3NpZ25tZW50LnZlcnNpb25cIj48L3NwYW4+PC9zcGFuPixcclxuICAgICAgICA8c3Bhbj5TdWJtaXNzaW9uOiA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBzdWJtaXNzaW9uLmlkXCI+PC9zcGFuPjwvc3Bhbj4sIFxyXG4gICAgICAgIDxzcGFuPlN1Ym1pc3Npb24gVmVyc2lvbjogPHNwYW4gZGF0YS1iaW5kPVwidGV4dDogc3VibWlzc2lvbi52ZXJzaW9uXCI+PC9zcGFuPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDsiLCIvLyBUT0RPOiBTaG91bGQgZGlzYWJsZSBidXR0b25zIGlmIHdlIGNhbid0IGFjdGl2YXRlIHRoZW0uXG5cbmV4cG9ydCBjb25zdCBISVNUT1JZX1RPT0xCQVJfSFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJibG9ja3B5LWhpc3RvcnktdG9vbGJhciBjb2wtbWQtMTJcIiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBkaXNwbGF5Lmhpc3RvcnlNb2RlXCI+XG5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJibG9ja3B5LWhpc3Rvcnktc3RhcnQgYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5zdGFydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWJhY2t3YXJkJz48L3NwYW4+IFN0YXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtci0yXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkuZWRpdG9ycy5weXRob24uaGlzdG9yeS5wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1iYWNrd2FyZCc+PC9zcGFuPiBQcmV2aW91c1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsb2NrcHktaGlzdG9yeS1zZWxlY3RvciBmb3JtLWNvbnRyb2wgY3VzdG9tLXNlbGVjdCBtci0yXCIgYXJpYS10aXRsZT1cIkhpc3RvcnkgU2VsZWN0b3JcIj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5LnVzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1maWxlLWltcG9ydCc+PC9zcGFuPiBVc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1yLTJcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5lZGl0b3JzLnB5dGhvbi5oaXN0b3J5Lm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZm9yd2FyZCc+PC9zcGFuPiBOZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmVkaXRvcnMucHl0aG9uLmhpc3RvcnkubW9zdFJlY2VudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj4gTW9zdCBSZWNlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG5gO1xuXG4vKipcbiAqIEFuIG9iamVjdCBmb3IgZGlzcGxheWluZyB0aGUgdXNlcidzIGNvZGluZyBsb2dzICh0aGVpciBoaXN0b3J5KS5cbiAqIEEgbGlnaHR3ZWlnaHQgY29tcG9uZW50LCBpdHMgb25seSBqb2IgaXMgdG8gb3BlbiBhIGRpYWxvZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEB0aGlzIHtCbG9ja1B5SGlzdG9yeX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYWluIC0gVGhlIG1haW4gQmxvY2tQeSBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tQeUhpc3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG1haW4sIHRhZykge1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jdXJyZW50SWQgPSBudWxsO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5lZGl0RXZlbnRzID0gW107XG4gICAgfVxuXG4gICAgbG9hZChoaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgICAgIHRoaXMuZWRpdEV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJChcIi5ibG9ja3B5LWhpc3Rvcnktc2VsZWN0b3JcIikuZW1wdHkoKTtcbiAgICAgICAgbGV0IGVkaXRJZCA9IDA7XG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgIWVudHJ5LmZpbGVfcGF0aC5zdGFydHNXaXRoKFwiX2luc3RydWN0b3IuXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiQ29tcGlsZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmV2ZW50X3R5cGUgIT09IFwiSW50ZXJ2ZW50aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudC5oaWRkZW4oKSB8fCBlbnRyeS5ldmVudF90eXBlICE9PSBcIlgtU3VibWlzc2lvbi5MTVNcIilcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50X3R5cGUgPSBSRU1BUF9FVkVOVF9UWVBFU1tlbnRyeS5ldmVudF90eXBlXSB8fCBlbnRyeS5ldmVudF90eXBlO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ZWQgPSBwcmV0dHlQcmludERhdGVUaW1lKGVudHJ5LmNsaWVudF90aW1lc3RhbXApICtcIiAtIFwiK2V2ZW50X3R5cGU7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGUgPSAoZW50cnkuZXZlbnRfdHlwZSAhPT0gXCJGaWxlLkVkaXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICQoXCI8b3B0aW9uPjwvb3B0aW9uPlwiLCB7dGV4dDogZGlzcGxheWVkLCBkaXNhYmxlZDogZGlzYWJsZX0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdEV2ZW50KGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uYXR0cihcInZhbHVlXCIsIGVkaXRJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEV2ZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdElkICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3IuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgZWRpdElkLTEpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW92ZVRvU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKDApO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVQcmV2aW91cygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5tYXgoMCwgY3VycmVudElkLTEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3IoKTtcbiAgICB9XG5cbiAgICBtb3ZlTmV4dCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci52YWwoTWF0aC5taW4odGhpcy5lZGl0RXZlbnRzLmxlbmd0aC0xLCBjdXJyZW50SWQrMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvcigpO1xuICAgIH1cblxuICAgIG1vdmVUb01vc3RSZWNlbnQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3IudmFsKHRoaXMuZWRpdEV2ZW50cy5sZW5ndGgtMSk7XG4gICAgICAgIHRoaXMudXBkYXRlRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5ibS5zZXRDb2RlKHRoaXMuZWRpdEV2ZW50c1tjdXJyZW50SWRdLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0RXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHBhcnNlSW50KHRoaXMuc2VsZWN0b3IudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0RXZlbnRzW2N1cnJlbnRJZF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC51aS5lZGl0b3JzLnB5dGhvbi50dXJuT2ZmSGlzdG9yeU1vZGUoKTtcbiAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnB5dGhvbkVkaXRvci5maWxlLmhhbmRsZShjb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRWRpdEV2ZW50KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoKGVudHJ5LmV2ZW50X3R5cGUgPT09IFwiRmlsZS5FZGl0XCIgfHxcbiAgICAgICAgICAgICAgICAgZW50cnkuZXZlbnRfdHlwZSA9PT0gXCJGaWxlLkNyZWF0ZVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbi5tb2RlbC5kaXNwbGF5LmZpbGVuYW1lKCkgPT09IGVudHJ5LmZpbGVfcGF0aCk7XG4gICAgfVxuXG59XG5cbmNvbnN0IFJFTUFQX0VWRU5UX1RZUEVTID0ge1xuICAgIFwiU2Vzc2lvbi5TdGFydFwiOiBcIkJlZ2FuIHNlc3Npb25cIixcbiAgICBcIlgtSVAuQ2hhbmdlXCI6IFwiQ2hhbmdlZCBJUCBhZGRyZXNzXCIsXG4gICAgXCJGaWxlLkVkaXRcIjogXCJFZGl0ZWQgY29kZVwiLFxuICAgIFwiRmlsZS5DcmVhdGVcIjogXCJTdGFydGVkIGFzc2lnbm1lbnRcIixcbiAgICBcIlJ1bi5Qcm9ncmFtXCI6IFwiUmFuIHByb2dyYW1cIixcbiAgICBcIkNvbXBpbGUuRXJyb3JcIjogXCJTeW50YXggZXJyb3JcIixcbiAgICBcIlgtU3VibWlzc2lvbi5MTVNcIjogXCJVcGRhdGVkIGdyYWRlXCJcbn07XG5cbmNvbnN0IG1vbnRoTmFtZXMgPSBbXG4gICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsXG4gICAgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsXG4gICAgXCJOb3ZcIiwgXCJEZWNcIlxuXTtcbmNvbnN0IHdlZWtEYXlzID0gW1xuICAgIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsXG4gICAgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIixcbiAgICBcIlNhdFwiXG5dO1xuXG5mdW5jdGlvbiBpc1NhbWVEYXkoZmlyc3QsIHNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdC5nZXREYXRlKCkgPT09IHNlY29uZC5nZXREYXRlKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0TW9udGgoKSA9PT0gc2Vjb25kLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZmlyc3QuZ2V0RnVsbFllYXIoKSA9PT0gc2Vjb25kLmdldEZ1bGxZZWFyKCk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGEgZGF0ZS90aW1lIHN0cmluZyBhbmQgcmV3cml0ZSBpdCBhcyBzb21ldGhpbmdcbiAqIG1vcmUgaHVtYW4gcmVhZGFibGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZVN0cmluZyAtIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSAoXCJZWVlZTU1ERCBISE1NU1NcIilcbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gQSBodW1hbi1yZWFkYWJsZSB0aW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gcHJldHR5UHJpbnREYXRlVGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLypsZXQgeWVhciA9IHRpbWVTdHJpbmcuc2xpY2UoMCwgNCksXG4gICAgICAgIG1vbnRoID0gcGFyc2VJbnQodGltZVN0cmluZy5zbGljZSg0LCA2KSwgMTApLTEsXG4gICAgICAgIGRheSA9IHRpbWVTdHJpbmcuc2xpY2UoNiwgOCksXG4gICAgICAgIGhvdXIgPSB0aW1lU3RyaW5nLnNsaWNlKDksIDExKSxcbiAgICAgICAgbWludXRlcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTEsIDEzKSxcbiAgICAgICAgc2Vjb25kcyA9IHRpbWVTdHJpbmcuc2xpY2UoMTMsIDE1KTsqL1xuICAgIC8vIFRPRE86IEhhbmRsZSB0aW1lem9uZXMgY29ycmVjdGx5XG4gICAgaWYgKHRpbWVTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gXCJVbmRlZmluZWQgVGltZVwiO1xuICAgIH1cbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcGFzdCA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVTdHJpbmcsIDEwKSk7XG4gICAgaWYgKGlzU2FtZURheShub3csIHBhc3QpKSB7XG4gICAgICAgIHJldHVybiBcIlRvZGF5IGF0IFwiK3Bhc3QudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRheVN0ciA9IHdlZWtEYXlzW3Bhc3QuZ2V0RGF5KCldO1xuICAgICAgICBsZXQgbW9udGhTdHIgPSBtb250aE5hbWVzW3Bhc3QuZ2V0TW9udGgoKV07XG4gICAgICAgIGxldCBkYXRlID0gZGF5U3RyICsgXCIsIFwiICsgbW9udGhTdHIgKyBcIiBcIiArIHBhc3QuZ2V0RGF0ZSgpO1xuICAgICAgICBpZiAobm93LmdldEZ1bGxZZWFyKCkgPT09IHBhc3QuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiBhdCBcIitwYXN0LnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGUgKyBcIiwgXCIrcGFzdC5nZXRGdWxsWWVhcigpICsgXCIgYXQgXCIrcGFzdC50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIE9wZW5zIHRoZSBoaXN0b3J5IGRpYWxvZyBib3guIFRoaXMgcmVxdWlyZXMgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYW5kXG4gKiBvY2N1cnMgYXN5bmNocm9ub3VzbHkuIFRoZSB1c2VycycgY29kZSBpcyBzaG93biBpbiBwcmVmb3JtYXR0ZWQgdGV4dFxuICogdGFncyAobm8gY29kZSBoaWdobGlnaHRpbmcgY3VycmVudGx5KSBhbG9uZyB3aXRoIHRoZSB0aW1lc3RhbXAuXG4gKi9cbkJsb2NrUHlIaXN0b3J5LnByb3RvdHlwZS5vcGVuRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpYWxvZyA9IHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZztcbiAgICB2YXIgYm9keSA9IFwiPHByZT5hID0gMDwvcHJlPlwiO1xuICAgIHRoaXMubWFpbi5jb21wb25lbnRzLnNlcnZlci5nZXRIaXN0b3J5KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGJvZHkgPSBkYXRhLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBsZXRlLCBlbGVtKSB7IFxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlX3N0ciA9IHByZXR0eVByaW50RGF0ZVRpbWUoZWxlbS50aW1lKTtcbiAgICAgICAgICAgIHZhciBuZXdfbGluZSA9IFwiPGI+XCIrY29tcGxldGVfc3RyK1wiPC9iPjxicj48cHJlPlwiK2VsZW0uY29kZStcIjwvcHJlPlwiO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlK1wiXFxuXCIrbmV3X2xpbmU7XG4gICAgICAgIH0sIFwiXCIpO1xuICAgICAgICBkaWFsb2cuc2hvdyhcIldvcmsgSGlzdG9yeVwiLCBib2R5LCBmdW5jdGlvbigpIHt9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtUUkFDRV9IVE1MfSBmcm9tIFwidHJhY2UuanNcIjtcbmltcG9ydCB7RElBTE9HX0hUTUx9IGZyb20gXCJkaWFsb2cuanNcIjtcbmltcG9ydCB7RkVFREJBQ0tfSFRNTH0gZnJvbSBcImZlZWRiYWNrLmpzXCI7XG5pbXBvcnQge0ZJTEVTX0hUTUx9IGZyb20gXCJmaWxlcy5qc1wiO1xuaW1wb3J0IHtGT09URVJfSFRNTH0gZnJvbSBcImZvb3Rlci5qc1wiO1xuaW1wb3J0IHtFRElUT1JTX0hUTUx9IGZyb20gXCJlZGl0b3JzLmpzXCI7XG5pbXBvcnQge0NPTlNPTEVfSFRNTH0gZnJvbSBcImNvbnNvbGUuanNcIjtcblxuLyoqXG4gKiBAZW51bSB7c3RyfVxuICovXG5leHBvcnQgbGV0IFNlY29uZFJvd1NlY29uZFBhbmVsT3B0aW9ucyA9IHtcbiAgICBGRUVEQkFDSzogXCJmZWVkYmFja1wiLFxuICAgIFRSQUNFOiBcInRyYWNlXCIsXG4gICAgTk9ORTogXCJub25lXCJcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXh0cmFJbnRlcmZhY2VTdWJzY3JpcHRpb25zKHNlbGYsIG1vZGVsKSB7XG4gICAgbGV0IGhpZ2hsaWdodFRpbWVvdXQgPSBudWxsO1xuICAgIG1vZGVsLnVpLmluc3RydWN0aW9ucy5jdXJyZW50LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmIChoaWdobGlnaHRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlnaGxpZ2h0VGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuZmluZChcIi5ibG9ja3B5LWluc3RydWN0aW9ucyBwcmUgY29kZVwiKS5tYXAoIChpLCBibG9jaykgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5obGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xuICAgIG1vZGVsLmRpc3BsYXkuZnVsbHNjcmVlbi5zdWJzY3JpYmUoKGlzRnVsbHNjcmVlbikgPT4ge1xuICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1EaXNwbGF5LkZ1bGxzY3JlZW4uUmVxdWVzdFwiLCBcIlwiLCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbi50b1N0cmluZygpLCBcIlwiKTtcbiAgICAgICAgaWYgKGlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgLy8gTk9URTogbmF2aWdhdGlvblVJIGNvdWxkIGFsbG93IHVzIHRvIGZvcmNlIGNvbnRyb2xzIHRvIHNob3dcbiAgICAgICAgICAgIG1vZGVsLmNvbmZpZ3VyYXRpb24uY29udGFpbmVyLnBhcmVudCgpWzBdLnJlcXVlc3RGdWxsc2NyZWVuKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGBFcnJvciBhdHRlbXB0aW5nIHRvIGVuYWJsZSBmdWxsLXNjcmVlbiBtb2RlOiAke2Vyci5tZXNzYWdlfSAoJHtlcnIubmFtZX0pYDtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBvbmVudHMuc2VydmVyLmxvZ0V2ZW50KFwiWC1EaXNwbGF5LkZ1bGxzY3JlZW4uRXJyb3JcIiwgXCJcIiwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsICBcIlwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29tcG9uZW50cy5zZXJ2ZXIubG9nRXZlbnQoXCJYLURpc3BsYXkuRnVsbHNjcmVlbi5TdWNjZXNzXCIsIFwiXCIsIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZ1bGxzY3JlZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgbW9kZWwuY29uZmlndXJhdGlvbi5jb250YWluZXIuY3NzKFwib3ZlcmZsb3cteVwiLCBcImF1dG9cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb21wb25lbnRzLnNlcnZlci5sb2dFdmVudChcIlgtRGlzcGxheS5GdWxsc2NyZWVuLkV4aXRcIiwgXCJcIiwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbi50b1N0cmluZygpLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBtb2RlbC5kaXNwbGF5LmZ1bGxzY3JlZW4oZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gVE9ETzogR2V0IHNoYXJlYWJsZSBsaW5rIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludGVyZmFjZShtYWluKSB7XG4gICAgcmV0dXJuIGBcbjxkaXYgY2xhc3M9J2Jsb2NrcHktY29udGVudCBjb250YWluZXItZmx1aWQnPlxuXG4gICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgJHtESUFMT0dfSFRNTH1cbiAgICBcbiAgICA8IS0tIEhpZGRlbiBDYXB0dXJlIENhbnZhcyAtLT5cbiAgICA8Y2FudmFzIGlkPSdjYXB0dXJlLWNhbnZhcycgY2xhc3M9J2Qtbm9uZScgcm9sZT1cInByZXNlbnRhdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvY2FudmFzPlxuICAgIFxuICAgIDwhLS0gUm93IDE6IEhlYWRlciBhbmQgUXVpY2sgTWVudSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAgXG4gICAgICAgICA8IS0tIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgPGRpdiBjbGFzcz0nY29sLW1kLTEwIGJsb2NrcHktcGFuZWwgYmxvY2tweS1oZWFkZXInXG4gICAgICAgICAgICAgICByb2xlPSdoZWFkaW5nJyBhcmlhLWxhYmVsPSdBc3NpZ25tZW50IERlc2NyaXB0aW9uJz5cbiAgICAgICAgIFxuICAgICAgICAgICAgPCEtLSBBc3NpZ25tZW50IE5hbWUgLS0+XG4gICAgICAgICAgICA8c3BhbiByb2xlPSdoZWFkaW5nJyBhcmlhLWxldmVsPScxJ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9ja3B5LW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkJsb2NrUHk6IDwvc3Ryb25nPiBcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGFzc2lnbm1lbnQubmFtZSc+PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIFJlc2V0IEluc3RydWN0aW9ucyBCdXR0b24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tweS1pbnN0cnVjdGlvbnMtcmVzZXRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLmluc3RydWN0aW9ucy5pc0NoYW5nZWRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLmluc3RydWN0aW9ucy5yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgaW5zdHJ1Y3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gSW5zdHJ1Y3Rpb25zIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nYmxvY2tweS1pbnN0cnVjdGlvbnMnXG4gICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImh0bWw6IHVpLmluc3RydWN0aW9ucy5jdXJyZW50XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbWQtMiBibG9ja3B5LXBhbmVsIGJsb2NrcHktcXVpY2stbWVudSdcbiAgICAgICAgICAgICByb2xlPSdtZW51YmFyJyBhcmlhLWxhYmVsPSdRdWljayBNZW51JyB0aXRsZT1cIlF1aWNrIE1lbnVcIj5cbiAgICAgICAgICAgIDwhLS0gR2V0IFNoYXJlYWJsZSBMaW5rIC0tPlxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgIEdldCBzaGFyZWFibGUgbGluazwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogdWkubWVudS5pc1N1Ym1pdHRlZFwiPlxuICAgICAgICAgICAgICAgIFlvdXIgc3VibWlzc2lvbiBpcyByZWFkeSB0byBiZSByZXZpZXdlZCE8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cInZpc2libGU6IHVpLm1lbnUuY2FuTWFya1N1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHVpLm1lbnUudGV4dE1hcmtTdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogdWkubWVudS5jbGlja01hcmtTdWJtaXR0ZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwhLS0gVmlldyBhcyBpbnN0cnVjdG9yIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIlxuICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiB1aS5yb2xlLmlzR3JhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJibG9ja3B5LWFzLWluc3RydWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjaGVja2VkOiBkaXNwbGF5Lmluc3RydWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmxvY2tweS1hcy1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYXMgaW5zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLm1lbnUuY2xpY2tGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz0nZmFzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsYXNzOiB1aS5tZW51LnRleHRGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgID48L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBSb3cgMjogQ29uc29sZSBhbmQgRmVlZGJhY2sgLS0+XG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cbiAgICBcbiAgICAgICAgPCEtLSBDb25zb2xlIC0tPlxuICAgICAgICAke0NPTlNPTEVfSFRNTH1cbiAgICAgICAgIFxuICAgICAgICA8IS0tIEZlZWRiYWNrIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNGZWVkYmFja1Zpc2libGUgLS0+XG4gICAgICAgICR7RkVFREJBQ0tfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgIFxuICAgICAgICA8IS0tIFRyYWNlIC0tPlxuICAgICAgICA8IS0tIGtvIGlmOiB1aS5zZWNvbmRSb3cuaXNUcmFjZVZpc2libGUgLS0+XG4gICAgICAgICR7VFJBQ0VfSFRNTH1cbiAgICAgICAgPCEtLSAva28gLS0+XG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8IS0tIFJvdyAzOiBGaWxlIE5hdmlnYXRpb24gLS0+XG4gICAgPCEtLSBrbyBpZjogdWkuZmlsZXMudmlzaWJsZSAtLT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgICAke0ZJTEVTX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgPCEtLSAva28gLS0+XG4gICAgXG4gICAgPCEtLSBWaWV3IFJvdyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7RURJVE9SU19IVE1MfVxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBGb290ZXIgUm93IC0tPiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICR7Rk9PVEVSX0hUTUx9XG4gICAgPC9kaXY+XG4gICAgXG48L2Rpdj5cbiAgICBgO1xufTsiLCJpbXBvcnQge0xvY2FsU3RvcmFnZVdyYXBwZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7bG9hZEFzc2lnbm1lbnRTZXR0aW5ncywgc2F2ZUFzc2lnbm1lbnRTZXR0aW5nc30gZnJvbSBcIi4vZWRpdG9yL2Fzc2lnbm1lbnRfc2V0dGluZ3NcIjtcblxuLyoqXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGxldCBTdGF0dXNTdGF0ZSA9IHtcbiAgICBSRUFEWTogXCJyZWFkeVwiLFxuICAgIEFDVElWRTogXCJhY3RpdmVcIixcbiAgICBSRVRSWUlORzogXCJyZXRyeWluZ1wiLFxuICAgIEZBSUxFRDogXCJmYWlsZWRcIixcbiAgICBPRkZMSU5FOiBcIm9mZmxpbmVcIlxufTtcblxuLyoqXG4gKiBPYmplY3QgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgZXh0ZXJuYWwgc2VydmVycy4gVGhpcyBpbmNsdWRlcyBmdW5jdGlvbmFsaXR5IGZvclxuICogc2F2aW5nIGFuZCBsb2FkaW5nIGZpbGVzLCBsb2dnaW5nIGV2ZW50cywgc2F2aW5nIGNvbXBsZXRpb25zLCBhbmQgcmV0cmlldmluZyBoaXN0b3J5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0Jsb2NrUHlTZXJ2ZXJ9XG4gKiBAcGFyYW0ge09iamVjdH0gbWFpbiAtIFRoZSBtYWluIEJsb2NrUHkgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrUHlTZXJ2ZXIobWFpbikge1xuICAgIHRoaXMubWFpbiA9IG1haW47XG5cbiAgICAvLyBTYXZlIFVSTHMgbG9jYWxseSBmb3IgcXVpY2tlciBhY2Nlc3NcbiAgICB0aGlzLnVybHMgPSBtYWluLm1vZGVsLmNvbmZpZ3VyYXRpb24udXJscztcblxuICAgIC8vIEFkZCB0aGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlV3JhcHBlcihcIkJMT0NLUFlcIik7XG5cbiAgICAvLyBGYXVsdFJlc2lzdGFudENhY2hlXG4gICAgdGhpcy5xdWV1ZSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwibG9nRXZlbnRcIiwgXCJbXVwiKSksXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXREZWZhdWx0KFwidXBkYXRlU3VibWlzc2lvblwiLCBcIltdXCIpKVxuICAgIH07XG4gICAgdGhpcy5NQVhfUVVFVUVfU0laRSA9IHtcbiAgICAgICAgXCJsb2dFdmVudFwiOiAyMDAsXG4gICAgICAgIFwidXBkYXRlU3VibWlzc2lvblwiOiA1MFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVSX0RFTEFZID0gMTAwMDtcbiAgICB0aGlzLkZBSUxfREVMQVkgPSAyMDAwO1xuXG4gICAgdGhpcy50aW1lcnMgPSB7fTtcblxuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy5ibG9ja2luZ0F0dGVtcHRzID0gMDtcblxuICAgIHRoaXMuY2FjaGVkRmlsZW5hbWVzID0gW107XG4gICAgdGhpcy5jcmVhdGVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5jaGVja0NhY2hlcygpO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBJUCBhZGRyZXNzIGhhcyBjaGFuZ2VkLCBsb2dnaW5nIGFuIGV2ZW50IGlmIHRoYXQgb2NjdXJzLlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNoZWNrSVAgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcIklQXCIpKSB7XG4gICAgICAgICAgICBsZXQgb2xkSVAgPSB0aGlzLnN0b3JhZ2UuZ2V0KFwiSVBcIik7XG4gICAgICAgICAgICBpZiAob2xkSVAgIT09IHJlc3BvbnNlLmlwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwib2xkXCI6IG9sZElQLFxuICAgICAgICAgICAgICAgICAgICBcIm5ld1wiOiByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRXZlbnQoXCJYLUlQLkNoYW5nZVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcIklQXCIsIHJlc3BvbnNlLmlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoXCJJUFwiLCByZXNwb25zZS5pcCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlcmUgaGF2ZSBiZWVuIHByZXZpb3VzIGZhaWx1cmVzIGNhY2hlZCwgYW5kIGlmIHNvIHJldHJpZXMgdGhlbS5cbiAqIFRPRE86IHVwZGF0ZVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jaGVja0NhY2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVBc3NpZ25tZW50XCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUFzc2lnbm1lbnRcIikpO1xuICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgXCJhc3NpZ25tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdmVBc3NpZ25tZW50XCIsIHRoaXMuVElNRVJfREVMQVkpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5mb3JFYWNoKChmaWxlbmFtZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmhhcyhcInNhdmVGaWxlXCIgKyBmaWxlbmFtZSkpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KFwic2F2ZUZpbGVcIiArIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIFwic2F2ZUZpbGVcIiwgdGhpcy5USU1FUl9ERUxBWSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgc2VydmVyID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLnF1ZXVlKS5mb3JFYWNoKGZ1bmN0aW9uIChlbmRwb2ludCkge1xuICAgICAgICAoZnVuY3Rpb24gcHVzaEFueVF1ZXVlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnF1ZXVlW2VuZHBvaW50XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHNlcnZlci5xdWV1ZVtlbmRwb2ludF0ucG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VydmVyLnVybHNbZW5kcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXIuX3Bvc3RSZXRyeShkYXRhLCBlbmRwb2ludCwgMTAwMCwgcHVzaEFueVF1ZXVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSh7XCJzdWNjZXNzXCI6IHRydWV9KTtcbiAgICB9KTtcbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZUZpbGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAobW9kZWwsIGZpbGVuYW1lKSB7XG4gICAgbW9kZWwuc3Vic2NyaWJlKChjb250ZW50cykgPT5cbiAgICAgICAgdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkuYXV0b1NhdmUoKSA/IHRoaXMuc2F2ZUZpbGUoZmlsZW5hbWUsIGNvbnRlbnRzKSA6IGZhbHNlLCB0aGlzKTtcbiAgICB0aGlzLmNhY2hlZEZpbGVuYW1lcy5wdXNoKGZpbGVuYW1lKTtcbn07XG5cbi8qKlxuICogVE9ETzogZml4XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1vZGVsID0gdGhpcy5tYWluLm1vZGVsO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5zdWJtaXNzaW9uLmNvZGUsIFwiYW5zd2VyLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uUnVuLCBcIiFvbl9ydW4ucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQub25FdmFsLCBcIiFvbl9ldmFsLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC5hc3NpZ25tZW50Lm9uQ2hhbmdlLCBcIiFvbl9jaGFuZ2UucHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuaW5zdHJ1Y3Rpb25zLCBcIiFpbnN0cnVjdGlvbnMubWRcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLmFzc2lnbm1lbnQuc3RhcnRpbmdDb2RlLCBcIl5zdGFydGluZ19jb2RlLnB5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0dWRlbnRGaWxlcywgXCIjZXh0cmFfc3R1ZGVudF9maWxlcy5ibG9ja3B5XCIpO1xuICAgIHRoaXMuY3JlYXRlRmlsZVN1YnNjcmlwdGlvbihtb2RlbC51aS5maWxlcy5leHRyYVN0YXJ0aW5nRmlsZXMsIFwiI2V4dHJhX3N0YXJ0aW5nX2ZpbGVzLmJsb2NrcHlcIik7XG4gICAgdGhpcy5jcmVhdGVGaWxlU3Vic2NyaXB0aW9uKG1vZGVsLnVpLmZpbGVzLmV4dHJhSW5zdHJ1Y3RvckZpbGVzLCBcIiNleHRyYV9pbnN0cnVjdG9yX2ZpbGVzLmJsb2NrcHlcIik7XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5jcmVhdGVFdmVudExvZ3MgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cub25ibHVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiU2Vzc2lvbi5FbmRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICB3aW5kb3cub25mb2N1cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dFdmVudChcIlNlc3Npb24uU3RhcnRcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfTtcblxuICAgIC8vIFRPRE86IEFkZCBpbiBiZWFjb24/XG59O1xuXG4vKipcbiAqXG4gKiBTb21lIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBoYXBwZW4gYWZ0ZXIgb3RoZXIgdGhpbmdzIGhhdmUgYmVlbiBsb2FkZWQuXG4gKiBSaWdodCBub3cgdGhpcyBpcyBqdXN0IGFmdGVyIENPUkdJUyBsaWJyYXJpZXMgaGF2ZSBiZWVuIGxvYWRlZCwgYnV0IG1heWJlXG4gKiB3ZSdsbCBhZGQgbW9yZSBsYXRlciBhbmQgdGhpcyB3aWxsIG5lZWQgdG8gYmUgcmVmYWN0b3JlZC5cbiAqXG4gKiBUT0RPOiBmaXhcbiAqXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmZpbmFsaXplU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3RoaXMubWFpbi5tb2RlbC5hc3NpZ25tZW50LnNldHRpbmdzLmRhdGFzZXRzLnN1YnNjcmliZSh0aGlzLnNhdmVBc3NpZ25tZW50LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBkZWZhdWx0IHBheWxvYWQgZm9yIGFueSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIHNlcnZlciBBUElcbiAqIEByZXR1cm5zIHt7YXNzaWdubWVudF9pZDogKiwgY291cnNlX2lkOiAqLCBncm91cF9pZDogKiwgdXNlcl9pZDogKiwgdGltZXpvbmU6ICosIHZlcnNpb246ICosIHRpbWVzdGFtcDogKn19XG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmNyZWF0ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFzc2lnbm1lbnQgPSB0aGlzLm1haW4ubW9kZWwuYXNzaWdubWVudDtcbiAgICBsZXQgdXNlciA9IHRoaXMubWFpbi5tb2RlbC51c2VyO1xuICAgIGxldCBzdWJtaXNzaW9uID0gdGhpcy5tYWluLm1vZGVsLnN1Ym1pc3Npb247XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLm1haW4ubW9kZWwuZGlzcGxheTtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbWljcm9zZWNvbmRzID0gbm93LmdldFRpbWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBcImFzc2lnbm1lbnRfaWRcIjogYXNzaWdubWVudC5pZCgpLFxuICAgICAgICBcImFzc2lnbm1lbnRfZ3JvdXBfaWRcIjogdXNlci5ncm91cElkKCksXG4gICAgICAgIFwiY291cnNlX2lkXCI6IHVzZXIuY291cnNlSWQoKSxcbiAgICAgICAgXCJzdWJtaXNzaW9uX2lkXCI6IHN1Ym1pc3Npb24uaWQoKSxcbiAgICAgICAgXCJ1c2VyX2lkXCI6IHVzZXIuaWQoKSxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IGFzc2lnbm1lbnQudmVyc2lvbigpLFxuICAgICAgICBcInRpbWVzdGFtcFwiOiBtaWNyb3NlY29uZHMsXG4gICAgICAgIFwidGltZXpvbmVcIjogbm93LmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICAgIFwicGFzc2NvZGVcIjogZGlzcGxheS5wYXNzY29kZSgpXG4gICAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc3RhdHVzIGFuZCBtZXNzYWdlIGZvciB0aGUgcmVsZXZhbnQgZW5kcG9pbnQuXG4gKiBAcGFyYW0gZW5kcG9pbnQge3N0cmluZ30gb25lIG9mIHRoZSBVUkwgZW5kcG9pbnRzXG4gKiBAcGFyYW0gc3RhdHVzIHtTdGF0dXNTdGF0ZX1cbiAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmc/fVxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgIHRoaXMubWFpbi5tb2RlbC5zdGF0dXNbZW5kcG9pbnRdKHN0YXR1cyk7XG4gICAgdGhpcy5tYWluLm1vZGVsLnN0YXR1c1tlbmRwb2ludCArIFwiTWVzc2FnZVwiXShtZXNzYWdlIHx8IFwiXCIpO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGFuIG92ZXJsYXkgb24gdGhlIHNjcmVlbiB0aGF0IGJsb2NrcyBvcGVyYXRpb24gdW50aWwgdGhlIHN5c3RlbSBpcyByZWFkeS5cbiAqIFRoZSBvdmVybGF5IGdldHMgcHJvZ3Jlc3NpdmVseSBkYXJrZXIgdG8gaW5kaWNhdGUgcmVwZWF0ZWQgZmFpbHVyZXMuXG4gKi9cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNob3dPdmVybGF5ID0gZnVuY3Rpb24gKGF0dGVtcHQpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgKz0gMTtcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9ja3B5LW92ZXJsYXlcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJibG9ja3B5LW92ZXJsYXlcIj4gPC9kaXY+Jyk7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gICAgc3dpdGNoIChhdHRlbXB0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiIzk4OFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiM2NTVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjMzMzXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcblxuLyoqXG4gKiBVbmRvIGEgbGV2ZWwgb2Ygb3ZlcmxheTsgaWYgdGhpcyB3YXMgdGhlIGxhc3QgbGV2ZWwsIHJlbW92ZXMgaXQgZnJvbSB0aGUgc2NyZWVuLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJsb2NraW5nQXR0ZW1wdHMgLT0gMTtcbiAgICBpZiAodGhpcy5ibG9ja2luZ0F0dGVtcHRzIDw9IDApIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9lbnF1ZXVlRGF0YSA9IGZ1bmN0aW9uIChjYWNoZSwgZGF0YSkge1xuICAgIC8vIEVuc3VyZSB3ZSBoYXZlIG5vdCBvdmVyZmlsbGVkIHRoZSBxdWV1ZVxuICAgIGxldCBsZW5ndGggPSB0aGlzLnF1ZXVlW2NhY2hlXS5sZW5ndGg7XG4gICAgbGV0IG1heCA9IHRoaXMuTUFYX1FVRVVFX1NJWkVbY2FjaGVdO1xuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVtjYWNoZV0gPSB0aGlzLnF1ZXVlW2NhY2hlXS5zbGljZShsZW5ndGggLSBtYXgsIG1heCk7XG4gICAgfVxuICAgIC8vIE9ubHkgYWRkIHRoZSBlbGVtZW50IGlmIGl0J3MgbmV3XG4gICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucXVldWVbY2FjaGVdLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnB1c2goa2V5KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkodGhpcy5xdWV1ZVtjYWNoZV0pKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fZGVxdWV1ZURhdGEgPSBmdW5jdGlvbiAoY2FjaGUsIGRhdGEpIHtcbiAgICBsZXQga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5xdWV1ZVtjYWNoZV0uaW5kZXhPZihrZXkpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMucXVldWVbY2FjaGVdLnNwbGljZShpbmRleCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoY2FjaGUsIEpTT04uc3RyaW5naWZ5KHRoaXMucXVldWVbY2FjaGVdKSk7XG4gICAgfVxufTtcblxuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGVuZHBvaW50LCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICBsZXQgcG9zdFJlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIE1ha2UgYSBiYWNrdXAgb2YgdGhlIGN1cnJlbnQgcG9zdFxuICAgICAgICB0aGlzLl9lbnF1ZXVlRGF0YShlbmRwb2ludCwgZGF0YSk7XG4gICAgICAgICQucG9zdCh0aGlzLnVybHNbZW5kcG9pbnRdLCBkYXRhKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVxdWV1ZURhdGEoZW5kcG9pbnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5GQUlMRUQsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSVAocmVzcG9uc2UuaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiBzZXJ2ZXIgcmVxdWVzdCBpcyB0aGUgbGF0ZXN0IG9uZSwgdGhlbiBsZXQncyB0cnkgaXQgYWdhaW4gaW4gYSBiaXRcbiAgICAgICAgICAgIC5mYWlsKChlcnJvciwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGVuZHBvaW50LCBTdGF0dXNTdGF0ZS5SRVRSWUlORywgdGV4dFN0YXR1cy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgZW5kcG9pbnQsIGRlbGF5ICsgdGhpcy5GQUlMX0RFTEFZLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChkZWxheSA9PT0gbnVsbCkge1xuICAgICAgICBwb3N0UmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQocG9zdFJlcXVlc3QsIGRlbGF5KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIE1ha2UgYSBBSkFYIHJlcXVlc3QgdGhhdCwgdXBvbiBmYWlsdXJlLCB3aWxsIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHdhcyB0aGVcbiAqIGxhdGVzdCBhdHRlbXB0IGZvciB0aGlzIGBjYWNoZWAgbWFya2VyLiBJZiBzbywgaXQgd2lsbCBhdHRlbXB0IGFnYWluIHVudGlsXG4gKiBzdWNjZXNzZnVsOyBvdGhlcndpc2UsIGl0IGdpdmVzIHVwIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIEFKQVgtcmVhZHkgZGF0YSB0byBiZSBwb3N0ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZSAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgdGltZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRwb2ludCAtIFRoZSB1bmlxdWUgbmFtZSBnaXZlbiB0byB0aGUgcmVsZXZhbnQgY2FjaGUgZW50cnlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZGVsYXkgLSBUaGUgY3VycmVudCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG4gdHJ5aW5nIHRoZSByZXF1ZXN0IGFnYWluLlxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5fcG9zdExhdGVzdFJldHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGZpbGVuYW1lLCBlbmRwb2ludCwgZGVsYXkpIHtcbiAgICBsZXQgY2FjaGUgPSBlbmRwb2ludCArIGZpbGVuYW1lO1xuICAgIGxldCByZXF1ZXN0ID0gKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIGEgYmFja3VwIG9mIHRoZSBjdXJyZW50IHBvc3RcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChjYWNoZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBsZXQgdGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICAkLnBvc3QodGhpcy51cmxzW2VuZHBvaW50XSwgZGF0YSlcbiAgICAgICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJUChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNlcnZlciByZXF1ZXN0IGlzIHRoZSBsYXRlc3Qgb25lLCBjbGVhciBpdCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbm5lY3RlZCBidXQgZmFpbGVkLCBkb24ndCB0cnkgYWdhaW4gYnV0IGxldCB0aGUgdXNlciBrbm93IHdoeS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdGhlIGxhdGVzdCBvbmUsIGNsZWFyIGl0IGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVkVGltZSA9IHRoaXMuc3RvcmFnZS5nZXRUaW1lKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID49IGNhY2hlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3IsIHRleHRTdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuUkVUUllJTkcsIHRleHRTdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgLy8gSWYgc2VydmVyIHJlcXVlc3QgaXMgdGhlIGxhdGVzdCBvbmUsIHRoZW4gbGV0J3MgdHJ5IGl0IGFnYWluIGluIGEgYml0XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlZFRpbWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VGltZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPj0gY2FjaGVkVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0TGF0ZXN0UmV0cnkoZGF0YSwgZmlsZW5hbWUsIGVuZHBvaW50LCBkZWxheSArIHRoaXMuRkFJTF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcnNbY2FjaGVdKTtcbiAgICBpZiAoZGVsYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZXJzW2NhY2hlXSA9IHNldFRpbWVvdXQocmVxdWVzdCwgZGVsYXkpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLl9wb3N0QmxvY2tpbmcgPSBmdW5jdGlvbiAoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgdGhpcy5zaG93T3ZlcmxheShhdHRlbXB0cyk7XG4gICAgJC5wb3N0KHRoaXMudXJsc1tlbmRwb2ludF0sIGRhdGEpXG4gICAgICAgIC5kb25lKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lQKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhlbmRwb2ludCwgU3RhdHVzU3RhdGUuRkFJTEVELCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZW5kcG9pbnQsIFN0YXR1c1N0YXRlLlJFVFJZSU5HLCB0ZXh0U3RhdHVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoZW5kcG9pbnQsIGRhdGEsIGF0dGVtcHRzIC0gMSwgc3VjY2VzcywgZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5GQUlMX0RFTEFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59O1xuXG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLmxvYWRBc3NpZ25tZW50ID0gZnVuY3Rpb24gKGFzc2lnbm1lbnRfaWQpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZEFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImFzc2lnbm1lbnRfaWRcIl0gPSBhc3NpZ25tZW50X2lkO1xuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJsb2FkQXNzaWdubWVudFwiLCBkYXRhLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmxvYWRBc3NpZ25tZW50RGF0YV8ocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwibG9hZEFzc2lnbm1lbnRcIiwgU3RhdHVzU3RhdGUuRkFJTEVELCByZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfQVNTSUdOTU5FTlQocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9MT0FESU5HX0FTU0lHTk1ORU5UKHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlQXNzaWdubWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUFzc2lnbm1lbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImhpZGRlblwiXSA9IG1vZGVsLmFzc2lnbm1lbnQuaGlkZGVuKCk7XG4gICAgICAgIGRhdGFbXCJyZXZpZXdlZFwiXSA9IG1vZGVsLmFzc2lnbm1lbnQucmV2aWV3ZWQoKTtcbiAgICAgICAgZGF0YVtcInB1YmxpY1wiXSA9IG1vZGVsLmFzc2lnbm1lbnQucHVibGljKCk7XG4gICAgICAgIGRhdGFbXCJ1cmxcIl0gPSBtb2RlbC5hc3NpZ25tZW50LnVybCgpO1xuICAgICAgICBkYXRhW1wiaXBfcmFuZ2VzXCJdID0gbW9kZWwuYXNzaWdubWVudC5pcFJhbmdlcygpO1xuICAgICAgICBkYXRhW1wibmFtZVwiXSA9IG1vZGVsLmFzc2lnbm1lbnQubmFtZSgpO1xuICAgICAgICBkYXRhW1wic2V0dGluZ3NcIl0gPSBzYXZlQXNzaWdubWVudFNldHRpbmdzKG1vZGVsKTtcblxuICAgICAgICB0aGlzLl9wb3N0QmxvY2tpbmcoXCJzYXZlQXNzaWdubWVudFwiLCBkYXRhLCAzLCAoKSA9PiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX1NBVklOR19BU1NJR05NTkVOVCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlQXNzaWdubWVudFwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoU2F2ZSBBc3NpZ25tZW50KVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkSGlzdG9yeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJsb2FkSGlzdG9yeVwiKSkge1xuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcImxvYWRIaXN0b3J5XCIsIGRhdGEsIDIsIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluLmNvbXBvbmVudHMuZGlhbG9nLkVSUk9SX0xPQURJTkdfSElTVE9SWSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUubG9nRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRfdHlwZSwgY2F0ZWdvcnksIGxhYmVsLCBtZXNzYWdlLCBmaWxlX3BhdGgpIHtcbiAgICBpZiAodGhpcy5tYWluLm1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9nRXZlbnRcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImV2ZW50X3R5cGVcIl0gPSBldmVudF90eXBlO1xuICAgICAgICBkYXRhW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeTtcbiAgICAgICAgZGF0YVtcImxhYmVsXCJdID0gbGFiZWw7XG4gICAgICAgIGRhdGFbXCJtZXNzYWdlXCJdID0gbWVzc2FnZTtcbiAgICAgICAgZGF0YVtcImZpbGVfcGF0aFwiXSA9IGZpbGVfcGF0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2dFdmVudFwiLCBTdGF0dXNTdGF0ZS5BQ1RJVkUpO1xuICAgICAgICAvLyBUcmlnZ2VyIHJlcXVlc3RcbiAgICAgICAgdGhpcy5fcG9zdFJldHJ5KGRhdGEsIFwibG9nRXZlbnRcIiwgMCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcImxvZ0V2ZW50XCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnNhdmVJbWFnZSA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGltYWdlKSB7XG4gICAgaWYgKHRoaXMubWFpbi5tb2RlbC51aS5zZXJ2ZXIuaXNFbmRwb2ludENvbm5lY3RlZChcInNhdmVJbWFnZVwiKSkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY3JlYXRlU2VydmVyRGF0YSgpO1xuICAgICAgICBkYXRhW1wiZGlyZWN0b3J5XCJdID0gZGlyZWN0b3J5O1xuICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgLy8gVHJpZ2dlciByZXF1ZXN0XG4gICAgICAgIHRoaXMuX3Bvc3RMYXRlc3RSZXRyeShkYXRhLCBcInR1cnRsZV9vdXRwdXRcIiwgXCJzYXZlSW1hZ2VcIiwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJzYXZlSW1hZ2VcIiwgU3RhdHVzU3RhdGUuT0ZGTElORSk7XG4gICAgfVxufTtcblxuQmxvY2tQeVNlcnZlci5wcm90b3R5cGUudXBkYXRlU3VibWlzc2lvblN0YXR1cyA9IGZ1bmN0aW9uKG5ld1N0YXR1cykge1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uU3RhdHVzXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzdGF0dXNcIl0gPSBuZXdTdGF0dXM7XG4gICAgICAgIGxldCBwb3N0U3RhdHVzQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW4ubW9kZWwuc3VibWlzc2lvbi5zdWJtaXNzaW9uU3RhdHVzKG5ld1N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyhcInVwZGF0ZVN1Ym1pc3Npb25TdGF0dXNcIiwgZGF0YSwgMiwgcG9zdFN0YXR1c0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5jb21wb25lbnRzLmRpYWxvZy5FUlJPUl9VUERBVElOR19TVUJNSVNTSU9OX1NUQVRVUygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGxvYWQgZmlsZXMgYW5kIHdlYiByZXNvdXJjZXMuXG4gKlxuICogREVQUkVDQVRFRFxuICovXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5sb2FkRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgdHlwZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgdmFyIHNlcnZlciA9IHRoaXM7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwibG9hZF9maWxlXCIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJmaWxlbmFtZVwiXSA9IGZpbGVuYW1lO1xuICAgICAgICBkYXRhW1widHlwZVwiXSA9IHR5cGU7XG4gICAgICAgIHRoaXMuX3Bvc3RCbG9ja2luZyh0aGlzLnVybHMubG9hZF9maWxlLCBkYXRhLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyLnNldFN0YXR1cyhcImxvYWRGaWxlXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2soXCJTZXJ2ZXIgZmFpbHVyZSEgUmVwb3J0IHRvIGluc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNhbGxiYWNrKFwiTm8gZmlsZSBzZXJ2ZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJsb2FkRmlsZVwiLCBTdGF0dXNTdGF0ZS5PRkZMSU5FLCBcIlNlcnZlciBpcyBub3QgY29ubmVjdGVkISAoTG9hZCBGaWxlKVwiKTtcbiAgICB9XG59O1xuXG5CbG9ja1B5U2VydmVyLnByb3RvdHlwZS5zYXZlRmlsZSA9IGZ1bmN0aW9uIChmaWxlbmFtZSwgY29udGVudHMsIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsYXkgPSB0aGlzLlRJTUVSX0RFTEFZO1xuICAgIH1cbiAgICBsZXQgbW9kZWwgPSB0aGlzLm1haW4ubW9kZWw7XG4gICAgaWYgKG1vZGVsLnVpLnNlcnZlci5pc0VuZHBvaW50Q29ubmVjdGVkKFwic2F2ZUZpbGVcIikpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNlcnZlckRhdGEoKTtcbiAgICAgICAgZGF0YVtcImZpbGVuYW1lXCJdID0gZmlsZW5hbWU7XG4gICAgICAgIGRhdGFbXCJjb2RlXCJdID0gY29udGVudHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKFwic2F2ZUZpbGVcIiwgU3RhdHVzU3RhdGUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5fcG9zdExhdGVzdFJldHJ5KGRhdGEsIGZpbGVuYW1lLCBcInNhdmVGaWxlXCIsIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXR1cyhcInNhdmVGaWxlXCIsIFN0YXR1c1N0YXRlLk9GRkxJTkUpO1xuICAgIH1cbn07XG5cbkJsb2NrUHlTZXJ2ZXIucHJvdG90eXBlLnVwZGF0ZVN1Ym1pc3Npb24gPSBmdW5jdGlvbiAoc2NvcmUsIGNvcnJlY3QsIGhpZGRlbk92ZXJyaWRlLCBmb3JjZVVwZGF0ZSkge1xuICAgIGxldCBjYWxsYmFjayA9IHRoaXMubWFpbi5tb2RlbC5jb25maWd1cmF0aW9uLmNhbGxiYWNrcy5zdWNjZXNzO1xuICAgIGlmICh0aGlzLm1haW4ubW9kZWwudWkuc2VydmVyLmlzRW5kcG9pbnRDb25uZWN0ZWQoXCJ1cGRhdGVTdWJtaXNzaW9uXCIpKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTZXJ2ZXJEYXRhKCk7XG4gICAgICAgIGRhdGFbXCJzY29yZVwiXSA9IHNjb3JlO1xuICAgICAgICBkYXRhW1wiY29ycmVjdFwiXSA9IGNvcnJlY3Q7XG4gICAgICAgIGRhdGFbXCJoaWRkZW5fb3ZlcnJpZGVcIl0gPSBoaWRkZW5PdmVycmlkZTtcbiAgICAgICAgZGF0YVtcImZvcmNlX3VwZGF0ZVwiXSA9IGZvcmNlVXBkYXRlO1xuICAgICAgICB0aGlzLm1haW4uY29tcG9uZW50cy5weXRob25FZGl0b3IuYm0uYmxvY2tFZGl0b3IuZ2V0UG5nRnJvbUJsb2NrcygocG5nRGF0YSwgaW1nKSA9PiB7XG4gICAgICAgICAgICBkYXRhW1wiaW1hZ2VcIl0gPSBwbmdEYXRhO1xuICAgICAgICAgICAgaWYgKGltZy5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBpbWcucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3N0UmV0cnkoZGF0YSwgXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhcInVwZGF0ZVN1Ym1pc3Npb25cIiwgU3RhdHVzU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoXCJ1cGRhdGVTdWJtaXNzaW9uXCIsIFN0YXR1c1N0YXRlLkZBSUxFRCwgcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoaWRkZW5PdmVycmlkZSAmJiBjb3JyZWN0ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhW1wiYXNzaWdubWVudF9pZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCIvKipcbiAqIFNrdWxwdCBNb2R1bGUgZm9yIGhvbGRpbmcgdGhlIEluc3RydWN0b3IgQVBJLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIGxvYWRlZCBpbiBieSBnZXR0aW5nIHRoZSBmdW5jdGlvbnMnIHNvdXJjZSBjb2RlIGZyb20gdG9TdHJpbmcuXG4gKiBJc24ndCB0aGF0IGNyYXp5P1xuICpcbiAqXG4gKi9cbmV4cG9ydCBsZXQgJHNrX21vZF9pbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gTWFpbiBtb2R1bGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCBhdCB0aGUgZW5kLlxuICAgIGxldCBtb2QgPSB7fTtcbiAgICBsZXQgbm9uZSA9IFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICBcbiAgICBsZXQgcHJpb3IgPSBudWxsO1xuICAgIG1vZC50aW1laXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInRpbWVpdFwiLCBhcmd1bWVudHMsIDEsIDEpO1xuICAgICAgICBsZXQgZGlmZmVyZW5jZTtcbiAgICAgICAgaWYgKHByaW9yID09PSBudWxsKSB7XG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBEYXRlLm5vdygpIC0gcHJpb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coU2suZmZpLnJlbWFwVG9KcyhuYW1lKSwgZGlmZmVyZW5jZS8xMDAwKTtcbiAgICAgICAgcHJpb3IgPSBEYXRlLm5vdygpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZmVlZGJhY2sgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmxvZyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibG9nXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFNrLmZmaS5yZW1hcFRvSnMobWVzc2FnZSkpO1xuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgZGVidWcgdG8gamF2YXNjcmlwdCBjb25zb2xlXG4gICAgICovXG4gICAgbW9kLmRlYnVnID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJsb2dcIiwgYXJndW1lbnRzLCAxLCAxKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdmVydHMgdGhlIG91dHB1dCBpbiB0aGUgc3R1ZGVudCByZXBvcnQgdG8gYSBweXRob24gXG4gICAgICogbGlzdCBhbmQgcmV0dXJucyBpdC5cbiAgICAqKi9cbiAgICBtb2QuZ2V0X291dHB1dCA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl1bXCJvdXRwdXRcIl0oKTtcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5tYXAoZnVuY3Rpb24oaXRlbSkgeyByZXR1cm4gaXRlbS50b1NrdWxwdCgpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3Qob3V0cHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVzZXRzIHRoZSBvdXRwdXQsIHBhcnRpY3VsYXJseSB1c2VmdWwgaWYgdGhlIHN0dWRlbnRcbiAgICAgKiBjb2RlIGlzIGdvaW5nIHRvIGJlIHJlcnVuLlxuICAgICAqL1xuICAgIG1vZC5yZXNldF9vdXRwdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicmVzZXRfb3V0cHV0XCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5vdXRwdXQucmVtb3ZlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4ubm9uZS5ub25lJDtcbiAgICB9KTtcbiAgICBcbiAgICBtb2QucXVldWVfaW5wdXQgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwicXVldWVfaW5wdXRcIiwgYXJndW1lbnRzLCAxLCBJbmZpbml0eSk7XG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGFyZ3NbaV07XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tUeXBlKFwiaW5wdXRcIiwgXCJzdHJpbmdcIiwgU2suYnVpbHRpbi5jaGVja1N0cmluZyhpbnB1dCkpO1xuICAgICAgICAgICAgU2sucXVldWVkSW5wdXQucHVzaChTay5mZmkucmVtYXBUb0pzKGlucHV0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfcHJvZ3JhbSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfcHJvZ3JhbVwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1widmVyaWZpZXJcIl0uY29kZSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieSBpbnN0cnVjdG9ycyB0byBnZXQgdGhlIHN0dWRlbnRzJyBjb2RlIGFzIGEgc3RyaW5nLlxuICAgICoqL1xuICAgIG1vZC5nZXRfZXZhbHVhdGlvbiA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfZXZhbHVhdGlvblwiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5ldmFsdWF0aW9uIHx8IFwiXCIpO1xuICAgIH0pO1xuICAgIFxuICAgIG1vZC50cmFjZV9saW5lcyA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgbGluZXMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5saW5lcztcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KGxpbmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5saXN0KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW9kLmdldF9zdHVkZW50X2Vycm9yID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9zdHVkZW50X2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIGlmIChTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4udHVwbGUoW25vbmUsIG5vbmVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IudHJhY2ViYWNrICYmIGVycm9yLnRyYWNlYmFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bXCJsaW5lXCJdID0gZXJyb3IudHJhY2ViYWNrWzBdLmxpbmVubztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb24gPSBTay5mZmkucmVtYXBUb1B5KHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi50dXBsZShbZXJyb3IsIHBvc2l0aW9uXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICAgIG1vZC5oYWRfZXhlY3V0aW9uX3RpbWVfZXJyb3IgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiaGFkX2V4ZWN1dGlvbl90aW1lX2Vycm9yXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiAhU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2VzcyAmJiBcbiAgICAgICAgICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXS5lcnJvciAmJlxuICAgICAgICAgICAgICAgIFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJzdHVkZW50XCJdLmVycm9yLnRwJG5hbWUgPT09IFwiVGltZUxpbWl0RXJyb3JcIjtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgYmFja3VwVGltZSA9IHVuZGVmaW5lZDtcbiAgICBtb2QubGltaXRfZXhlY3V0aW9uX3RpbWUgPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwibGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgYmFja3VwVGltZSA9IFNrLmV4ZWNMaW1pdDtcbiAgICAgICAgaWYgKFNrLmV4ZWNMaW1pdEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBTay5leGVjTGltaXQgPSBTay5leGVjTGltaXRGdW5jdGlvbigpO1xuICAgICAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1vZC51bmxpbWl0X2V4ZWN1dGlvbl90aW1lID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInVubGltaXRfZXhlY3V0aW9uX3RpbWVcIiwgYXJndW1lbnRzLCAwLCAwKTtcbiAgICAgICAgU2suZXhlY0xpbWl0ID0gYmFja3VwVGltZTtcbiAgICAgICAgU2suZXhlY1N0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB9KTtcbiAgICBcbiAgICBtb2Quc3VwcHJlc3Nfc2Nyb2xsaW5nID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInN1cHByZXNzX3Njcm9sbGluZ1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzLmluc3RydWN0b3Iuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIFxuICAgIC8qXG4gICAgZGVmIGhpc3Qoc2VsZiwgZGF0YSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnSGlzdG9ncmFtJywgJ3ZhbHVlcyc6IGRhdGEsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgcGxvdChzZWxmLCB4cywgeXM9Tm9uZSwgKiprd2FyZ3MpOlxuICAgICAgICBsYWJlbCA9IGt3YXJncy5nZXQoJ2xhYmVsJywgTm9uZSlcbiAgICAgICAgaWYgeXMgPT0gTm9uZTpcbiAgICAgICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ0xpbmUnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3gnOiByYW5nZShsZW4oeHMpKSwgJ3knOiB4cywgJ2xhYmVsJzogbGFiZWx9KVxuICAgICAgICBlbHNlOlxuICAgICAgICAgICAgc2VsZi5hY3RpdmVfcGxvdFsnZGF0YSddLmFwcGVuZCh7J3R5cGUnOiAnTGluZScsICd4JzogeHMsICd5JzogeXMsICdsYWJlbCc6IGxhYmVsfSlcbiAgICBkZWYgc2NhdHRlcihzZWxmLCB4cywgeXMsICoqa3dhcmdzKTpcbiAgICAgICAgbGFiZWwgPSBrd2FyZ3MuZ2V0KCdsYWJlbCcsIE5vbmUpXG4gICAgICAgIHNlbGYuYWN0aXZlX3Bsb3RbJ2RhdGEnXS5hcHBlbmQoeyd0eXBlJzogJ1NjYXR0ZXInLCAneCc6IHhzLCAneSc6IHlzLCAnbGFiZWwnOiBsYWJlbH0pXG4gICAgKi9cbiAgICBtb2QuZ2V0X3Bsb3RzID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9wbG90c1wiLCBhcmd1bWVudHMsIDAsIDApO1xuICAgICAgICBpZiAoU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0uc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IG91dHB1dHMgPSBTay5leGVjdXRpb25SZXBvcnRzW1wic3R1ZGVudFwiXVtcIm91dHB1dFwiXSgpO1xuICAgICAgICAgICAgb3V0cHV0cyA9IG91dHB1dHMuZmlsdGVyKGZ1bmN0aW9uKG91dHB1dCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0LnR5cGUgPT09IFwicGxvdFwiO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcImRhdGFcIjogZ3JhcGguY29udGVudC5tYXAoZnVuY3Rpb24ocGxvdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UGxvdCA9IHsgXCJ0eXBlXCI6IHBsb3QudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdC50eXBlID09PSBcImxpbmVcIiB8fCBwbG90LnR5cGUgPT09IFwic2NhdHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQbG90W1wieFwiXSA9IHBsb3QuZGF0YS5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi54OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ5XCJdID0gcGxvdC5kYXRhLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lnk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsb3QudHlwZSA9PT0gXCJoaXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bsb3RbXCJ2YWx1ZXNcIl0gPSBwbG90LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bsb3Q7XG4gICAgICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgICAgIFwieGxhYmVsXCI6IFwiXCIsIFwieWxhYmVsXCI6IFwiXCIsIFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJcIiwgXCJsZWdlbmRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gU2suZmZpLnJlbWFwVG9QeShvdXRwdXRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KFtdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG4gICAgLy8gUHJvdmlkZXMgYHN0dWRlbnRgIGFzIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSB0aGF0IHRoZSBzdHVkZW50IGRlY2xhcmVkLlxuICAgIG1vZC5TdHVkZW50RGF0YSA9IFNrLm1pc2NldmFsLmJ1aWxkQ2xhc3MobW9kLCBmdW5jdGlvbigkZ2JsLCAkbG9jKSB7XG4gICAgICAgICRsb2MuX19pbml0X18gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2VsZi5kYXRhID0gU2suYnVpbHRpbi5kaWN0KCk7XG4gICAgICAgICAgICBsZXQgbmV3RGljdCA9IFNrLmJ1aWx0aW4uZGljdCgpO1xuICAgICAgICAgICAgU2suYWJzdHIuc2F0dHIoc2VsZiwgU2suYnVpbHRpbi5zdHIoXCJkYXRhXCIpLCBuZXdEaWN0LCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYubW9kdWxlID0gU2suZXhlY3V0aW9uUmVwb3J0c1tcInN0dWRlbnRcIl0ucmVzdWx0cztcbiAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSBzZWxmLm1vZHVsZS4kZDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VsZi5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNrLmFic3RyLm9iamVjdFNldEl0ZW0obmV3RGljdCwgU2suZmZpLnJlbWFwVG9QeShTay51bmZpeFJlc2VydmVkKGtleSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1vZHVsZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2R1bGUgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjYWxsX2YgPSBmdW5jdGlvbihrd2EpIHtcbiAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3NMZW4oXCJjYWxsXCIsIGFyZ3VtZW50cy5sZW5ndGgsIDEsIEluZmluaXR5LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIHZhciBrd2FyZ3MgPSBuZXcgU2suYnVpbHRpbnMuZGljdChrd2EpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IGFyZ3NbMF07XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25OYW1lID0gYXJnc1sxXTtcbiAgICAgICAgICAgIGFyZ3MgPSBhcmdzLnNsaWNlKDIpO1xuXG4gICAgICAgICAgICB2YXIgaW5wdXRzID0ga3dhcmdzLm1wJGxvb2t1cChuZXcgU2suYnVpbHRpbi5zdHIoXCJpbnB1dHNcIikpO1xuICAgICAgICAgICAgaWYgKGlucHV0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzID0gU2suZmZpLnJlbWFwVG9KcyhpbnB1dHMpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNrLnF1ZXVlZElucHV0LnB1c2goaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBzZWxmLnRwJGdldGF0dHIobmV3IFNrLmJ1aWx0aW4uc3RyKFwiZGF0YVwiKSk7XG4gICAgICAgICAgICB2YXIgZnVuY3Rpb25PYmplY3QgPSBkYXRhLm1wJGxvb2t1cChmdW5jdGlvbk5hbWUpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uT2JqZWN0LnRwJGNhbGwoYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBjYWxsX2YuY29fa3dhcmdzID0gdHJ1ZTtcbiAgICAgICAgLy9jYWxsX2YuY29fdmFybmFtZXMgPSBbXCJzZWxmXCIsIFwiZnVuY3Rpb25cIl07XG4gICAgICAgIGNhbGxfZi5jb19uYW1lPSBuZXcgU2suYnVpbHRpbi5zdHIoXCJjYWxsXCIpO1xuICAgICAgICAkbG9jW1wiY2FsbF8kcm4kXCJdID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhjYWxsX2YpO1xuXG4gICAgICAgICRsb2NbXCJfX3JlcHJfX1wiXSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLnN0cihcIlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGxvYy5nZXRfbmFtZXNfYnlfdHlwZSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oc2VsZiwgdHlwZSwgZXhjbHVkZV9idWlsdGlucykge1xuICAgICAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9uYW1lc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyAmJiBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiX19cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFNrLmZmaS5yZW1hcFRvUHkoU2sudW5maXhSZXNlcnZlZChwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICRsb2MuZ2V0X3ZhbHVlc19ieV90eXBlID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihzZWxmLCB0eXBlLCBleGNsdWRlX2J1aWx0aW5zKSB7XG4gICAgICAgICAgICBTay5idWlsdGluLnB5Q2hlY2tBcmdzKFwiZ2V0X3ZhbHVlc19ieV90eXBlXCIsIGFyZ3VtZW50cywgMiwgMyk7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZV9idWlsdGlucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja1R5cGUoXCJleGNsdWRlX2J1aWx0aW5zXCIsIFwiYm9vbGVhblwiLCBTay5idWlsdGluLmNoZWNrQm9vbChleGNsdWRlX2J1aWx0aW5zKSk7XG4gICAgICAgICAgICAgICAgZXhjbHVkZV9idWlsdGlucyA9IFNrLmZmaS5yZW1hcFRvSnMoZXhjbHVkZV9idWlsdGlucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzZWxmLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubW9kdWxlW3Byb3BlcnR5XS50cCRuYW1lID09PSB0eXBlLnRwJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNsdWRlX2J1aWx0aW5zICYmIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCJfX1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5tb2R1bGVbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTay5idWlsdGluLmxpc3QocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfSwgXCJTdHVkZW50RGF0YVwiKTtcbiAgICBtb2Quc3R1ZGVudCA9IFNrLm1pc2NldmFsLmNhbGxzaW1PclN1c3BlbmQobW9kLlN0dWRlbnREYXRhKTtcbiAgICBcbiAgICBtb2QuZ2V0X3N0dWRlbnRfZGF0YSA9IG5ldyBTay5idWlsdGluLmZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgIFNrLmJ1aWx0aW4ucHlDaGVja0FyZ3MoXCJnZXRfc3R1ZGVudF9kYXRhXCIsIGFyZ3VtZW50cywgMCwgMCk7XG4gICAgICAgIHJldHVybiBtb2Quc3R1ZGVudDtcbiAgICB9KTtcblxuICAgIG1vZC5zZXRfaW5zdHJ1Y3Rpb25zID0gbmV3IFNrLmJ1aWx0aW4uZnVuYyhmdW5jdGlvbihuZXdJbnN0cnVjdGlvbnMpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcInNldF9pbnN0cnVjdGlvbnNcIiwgYXJndW1lbnRzLCAxLCAyKTtcbiAgICAgICAgbmV3SW5zdHJ1Y3Rpb25zID0gU2suZmZpLnJlbWFwVG9KcyhuZXdJbnN0cnVjdGlvbnMpO1xuICAgICAgICBTay5leGVjdXRpb25SZXBvcnRzW1wibW9kZWxcIl0uZGlzcGxheS5jaGFuZ2VkSW5zdHJ1Y3Rpb25zKG5ld0luc3RydWN0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBtb2QuZ2V0X21vZGVsX2luZm8gPSBuZXcgU2suYnVpbHRpbi5mdW5jKGZ1bmN0aW9uKGtleXMpIHtcbiAgICAgICAgU2suYnVpbHRpbi5weUNoZWNrQXJncyhcImdldF9tb2RlbF9pbmZvXCIsIGFyZ3VtZW50cywgMSwgMSk7XG4gICAgICAgIGxldCBtb2RlbCA9IFNrLmV4ZWN1dGlvblJlcG9ydHNbXCJtb2RlbFwiXTtcbiAgICAgICAga2V5cyA9IFNrLmZmaS5yZW1hcFRvSnMoa2V5cykuc3BsaXQoXCIuXCIpO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtb2RlbCA9IG1vZGVsW2tleXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTay5mZmkucmVtYXBUb1B5KG1vZGVsKCkpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtb2Q7XG59O1xuIiwibGV0IExPQ0FMX1NUT1JBR0VfUkVGO1xudHJ5IHtcbiAgICBMT0NBTF9TVE9SQUdFX1JFRiA9IGxvY2FsU3RvcmFnZTtcbiAgICBsZXQgbW9kID0gXCJCTE9DS1BZX0xPQ0FMU1RPUkFHRV9URVNUXCI7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbShtb2QsIG1vZCk7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbShtb2QpO1xufSBjYXRjaChlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYgPSB7XG4gICAgICAgIF9kYXRhICAgICAgIDoge30sXG4gICAgICAgIHNldEl0ZW0gICAgIDogZnVuY3Rpb24oaWQsIHZhbCkgeyByZXR1cm4gdGhpcy5fZGF0YVtpZF0gPSBTdHJpbmcodmFsKTsgfSxcbiAgICAgICAgZ2V0SXRlbSAgICAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gdGhpcy5fZGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkgPyB0aGlzLl9kYXRhW2lkXSA6IHVuZGVmaW5lZDsgfSxcbiAgICAgICAgcmVtb3ZlSXRlbSAgOiBmdW5jdGlvbihpZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMuX2RhdGFbaWRdOyB9LFxuICAgICAgICBjbGVhciAgICAgICA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fZGF0YSA9IHt9OyB9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgb2JqZWN0IGZvciBpbnRlcmZhY2luZyB3aXRoIHRoZSBMb2NhbFN0b3JhZ2UuIFRoZSBMb2NhbFN0b3JhZ2VcbiAqIGJyb3dzZXIgQVBJIGFsbG93cyBmb3Igb2ZmbGluZSBzdG9yYWdlLiBUaGF0IEFQSSBpcyB2ZXJ5IHVuc29waGlzdGljYXRlZCxcbiAqIGFuZCBpcyBlc3NlbnRpYWxseSBhIGxhbWUga2V5LXZhbHVlIHN0b3JlLiBUaGlzIG9iamVjdCBzaXRzIG9uIHRvcFxuICogYW5kIHByb3ZpZGVzIGEgbnVtYmVyIG9mIHVzZWZ1bCB1dGlsaXRpZXMsIGluY2x1ZGluZyBydWRpbWVudGFyeWNhY2hlXG4gKiBjYWNoZSBleHBpcmF0aW9uLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHRoaXMge0xvY2FsU3RvcmFnZVdyYXBwZXJ9XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gQSBuYW1lc3BhY2UgdG8gdXNlIGluIGdyb3VwaW5nIGFjY2VzcyB0byBsb2NhbHN0b3JhZ2UuIFRoaXMga2VlcHMgYWNjZXNzIGNsZWFuIGFuZCBvcmdhbml6ZWQsIHdoaWxlIGFsc28gbWFraW5nIGl0IHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgTG9jYWxTdG9yYWdlIGNvbm5lY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9jYWxTdG9yYWdlV3JhcHBlcihuYW1lc3BhY2UpIHtcbiAgICB0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbn1cbi8qKlxuICogQSBtZXRob2QgZm9yIGFkZGluZyBhIGtleS92YWx1ZSBwYWlyIHRvIExvY2FsU3RvcmFnZS5cbiAqIE5vdGUgdGhhdCBib3RoIHBhcmFtZXRlcnMgbXVzdCBiZSBzdHJpbmdzIChKU09OLnN0cmluZ2lmeSBpcyB5b3VyIGZyaWVuZCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUuXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLnNldCA9ICBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIiwgdmFsdWUpO1xuICAgIExPQ0FMX1NUT1JBR0VfUkVGLnNldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3RpbWVzdGFtcFwiLCAkLm5vdygpKTtcbn07XG5cbi8qKlxuICogQSBtZXRob2QgZm9yIHJlbW92aW5nIGEga2V5IGZyb20gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUgbmFtZSBvZiB0aGUga2V5IHRvIHJlbW92ZS5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdmFsdWVcIik7XG4gICAgTE9DQUxfU1RPUkFHRV9SRUYucmVtb3ZlSXRlbSh0aGlzLm5hbWVzcGFjZStcIl9cIitrZXkrXCJfdGltZXN0YW1wXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFRoZSBuYW1lIG9mIHRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIHZhbHVlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdGltZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGtleS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdGltZSBmb3IuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gLSBUaGUgdGltZXN0YW1wIChsb2NhbCBlcG9jaCkgd2hlbiB0aGUga2V5IHdhcyBsYXN0IHNldC5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBwYXJzZUludChMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIikpO1xufTtcblxuLyoqXG4gKiBBIG1ldGhvZCBmb3IgcmV0cmlldmluZyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKiBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaW5zdGVhZC5cbiAqIFRoaXMgZGVmYXVsdCB3aWxsIGJlIHNldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGtleSB0byByZXRyaWV2ZSB0aGUgdmFsdWUgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmF1bHRWYWx1ZSAtIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHVzZS4gTXVzdCBiZSBhIHN0cmluZy5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuZ2V0RGVmYXVsdCA9IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQSB0ZXN0IGZvciB3aGV0aGVyIHRoZSBnaXZlbiBrZXkgaXMgaW4gTG9jYWxTdG9yYWdlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIHRlc3QgZXhpc3RlbmNlIGZvci5cbiAqL1xuTG9jYWxTdG9yYWdlV3JhcHBlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUkVGLmdldEl0ZW0odGhpcy5uYW1lc3BhY2UrXCJfXCIra2V5K1wiX3ZhbHVlXCIpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBBIHRlc3QgZm9yIHdoZXRoZXIgdGhlIHNlcnZlciBoYXMgdGhlIG5ld2VyIHZlcnNpb24uIFRoaXMgZnVuY3Rpb25cbiAqIGFzc3VtZXMgdGhhdCB0aGUgc2VydmVyIHRyaXAgdGFrZXMgYWJvdXQgNSBzZWNvbmRzLiBUaGlzIG1ldGhvZFxuICogaXMgbGFyZ2VseSBkZXByZWNhdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHBhcmFtIHtJbnRlZ2VyfSBzZXJ2ZXJfdGltZSAtIFRoZSBzZXJ2ZXIncyB0aW1lIGFzIGFuIGVwb2NoIChpbiBtaWxsaXNlY29uZHMpXG4gKi9cbkxvY2FsU3RvcmFnZVdyYXBwZXIucHJvdG90eXBlLmlzX25ldyA9IGZ1bmN0aW9uKGtleSwgc2VydmVyX3RpbWUpIHtcbiAgICB2YXIgc3RvcmVkX3RpbWUgPSBMT0NBTF9TVE9SQUdFX1JFRi5nZXRJdGVtKHRoaXMubmFtZXNwYWNlK1wiX1wiK2tleStcIl90aW1lc3RhbXBcIik7XG4gICAgcmV0dXJuIChzZXJ2ZXJfdGltZSA+PSBzdG9yZWRfdGltZSs1MDAwKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVFJBQ0VfSFRNTCA9IGBcclxuXHJcbjxkaXYgY2xhc3M9XCJibG9ja3B5LXRyYWNlIGNvbC1tZC02IGJsb2NrcHktcGFuZWxcIlxyXG4gICAgICAgICAgICByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIlRyYWNlXCI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgIDxzdHJvbmc+VHJhY2U6IDwvc3Ryb25nPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gRmVlZGJhY2svVHJhY2UgVmlzaWJpbGl0eSBDb250cm9sIC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0IGJsb2NrcHktaGlkZS10cmFjZSdcclxuICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB1aS5zZWNvbmRSb3cuYWR2YW5jZVN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtZXllJz48L3NwYW4+IEhpZGUgVHJhY2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zIGJsb2NrcHktdHJhY2UtY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYXMgZmEtc3RlcC1iYWNrd2FyZCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHVpLnRyYWNlLmJhY2t3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZmFzIGZhLWJhY2t3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5TdGVwOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9J3RleHQ6IGV4ZWN1dGlvbi5zdHVkZW50LmN1cnJlbnRUcmFjZVN0ZXAnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC8gPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiBleGVjdXRpb24uc3R1ZGVudC5sYXN0U3RlcCc+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UuZm9yd2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1mb3J3YXJkJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0biBidG4tb3V0bGluZS1zZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XCJjbGljazogdWkudHJhY2UubGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ZhcyBmYS1zdGVwLWZvcndhcmQnPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPSd0ZXh0OiB1aS50cmFjZS5saW5lJz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8dGFibGUgY2xhc3M9J3RhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXInPlxyXG4gICAgICAgIDxjYXB0aW9uPkN1cnJlbnQgdmFyaWFibGVzIGF0IHRoaXMgc3RlcDwvY2FwdGlvbj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj48dGg+TmFtZTwvdGg+PHRoPlR5cGU8L3RoPjx0aD5WYWx1ZTwvdGg+PC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB1aS50cmFjZS5kYXRhKCkucHJvcGVydGllc1wiPlxyXG4gICAgICAgICAgICA8dHIgZGF0YS1iaW5kPVwidmlzaWJsZTogbmFtZSAhPSAnX19maWxlX18nICYmIG5hbWUgIT0gJ19fcGF0aF9fJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IG5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cInRleHQ6IHR5cGVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGRhdGEtYmluZD1cInRleHQ6IHZhbHVlXCI+PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHR5cGUgPT0gXCJMaXN0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGRhdGEtYmluZD1cImNsaWNrOiAvLyRyb290LnZpZXdFeGFjdFZhbHVlKHR5cGUsIGV4YWN0X3ZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW5ldy13aW5kb3cnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrUHlUcmFjZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFpbiwgdGFnKSB7XHJcbiAgICAgICAgdGhpcy5tYWluID0gbWFpbjtcclxuICAgICAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAgICAgdGhpcy5JR05PUkVEX0dMT0JBTFMgPSBbXCJfX25hbWVfX1wiLCBcIl9fZG9jX19cIiwgXCJfX3BhY2thZ2VfX1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NtZXRob2RcIiwgXCJwcm9wZXJ0eVwiLCBcInN0YXRpY21ldGhvZFwiXTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFjZS5jbGljayh0aGlzLmJ1aWxkVHJhY2VUYWJsZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWUgYSBzZXQgb2YgdmFyaWFibGVzIHRyYWNlZCBmcm9tIHRoZSBleGVjdXRpb24gYW5kIHBhcnNlIG91dCBhbnlcclxuICAgICAqIGdsb2JhbCB2YXJpYWJsZXMgYW5kIG1vZHVsZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhcmlhYmxlcyAtIGEgbWFwcGluZyBvZiB2YXJpYWJsZSBuYW1lcyB0byB0aGVpciBTa3VwdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcGFyc2VHbG9iYWxzKHZhcmlhYmxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGlmICghdGhpcy5tYWluLm1vZGVsLmRpc3BsYXkudHJhY2VFeGVjdXRpb24oKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB2YXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhcmlhYmxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5JR05PUkVEX0dMT0JBTFMuaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKFwiXyRydyRcIiwgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJfJHJuJFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IEJsb2NrUHlUcmFjZS5wYXJzZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IHtcIm5hbWVcIjogcHJvcGVydHksIFwidHlwZVwiOiBcIlVua25vd25cIiwgXCJ2YWx1ZVwiOiB2YWx1ZS50b1N0cmluZygpfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFNrLmJ1aWx0aW4ubW9kdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXMucHVzaCh2YWx1ZS4kZC5fX25hbWVfXy52KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcInByb3BlcnRpZXNcIjogcmVzdWx0LCBcIm1vZHVsZXNcIjogbW9kdWxlc307XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFNrdWxwdCB2YWx1ZSBpbnRvIGEgbW9yZSBlYXNpbHkgcHJpbnRhYmxlIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSAtIHRoZSBza3VscHQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlVmFsdWUocHJvcGVydHksIHZhbHVlLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZnVuYzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUuZnVuY19jb2RlLmNvX3Zhcm5hbWVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgQXJndW1lbnRzOiBcIit2YWx1ZS5mdW5jX2NvZGUuY29fdmFybmFtZXMuam9pbihcIiwgXCIpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIE5vIGFyZ3VtZW50c1wiKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm1vZHVsZTogcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5zdHI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZnVsbExlbmd0aCB8fCB2YWx1ZS52Lmxlbmd0aCA8PSAzMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTdHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbXCIrdmFsdWUuc3EkbGVuZ3RoKCkrXCIgY2hhcmFjdGVycyBub3Qgc2hvd25dXCJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4ubm9uZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiTm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uYm9vbDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLm5tYmVyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50XCIgPT09IHZhbHVlLnNrVHlwZSA/IFwiSW50ZWdlclwiOiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB2YWx1ZS4kcigpLnZcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5pbnRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50ZWdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFNrLmJ1aWx0aW4uZmxvYXRfOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLnR1cGxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHVwbGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBTay5idWlsdGluLmxpc3Q6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudi5sZW5ndGggPD0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1wibmFtZVwiOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyKCkudixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJbLi4uIFwiK3ZhbHVlLnYubGVuZ3RoK1wiIGVsZW1lbnRzIC4uLl1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGFjdF92YWx1ZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU2suYnVpbHRpbi5kaWN0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGljdGlvbmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWUuJHIoKS52XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiB2YWx1ZSAlIDEgPT09IDAgPyBcIkludGVnZXJcIiA6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogdmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XCJuYW1lXCI6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJvb2xlYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6ICh2YWx1ZSA/IFwiVHJ1ZVwiOiBcIkZhbHNlXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcIm5hbWVcIjogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHZhbHVlLnRwJG5hbWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWUudHAkbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHZhbHVlLiRyID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlLiRyKCkudlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBUT0RPOiB2aWV3RXhhY3RWYWx1ZSIsIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7YW55dGhpbmd9IG5lZWRsZSAtIFRoZSBlbGVtZW50IHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtBcnJheX0gaGF5c3RhY2sgLSBUaGUgbGlzdCB0byBzZWFyY2guXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50IGV4aXN0c1xuICovXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSwgcHJlc2VydmluZyBvcmRlci5cbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXksIHNvIGlzIG5vbi1kZXN0cnVjdGl2ZS5cbiAqIENvdXJ0ZXN5OlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTU4NDM3MC9ob3ctdG8tbWVyZ2UtdHdvLWFycmF5cy1pbi1qYXZhc2NyaXB0LWFuZC1kZS1kdXBsaWNhdGUtaXRlbXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB1bmlxdWlmeS4gRWxlbWVudHMgY29tcGFyZWQgd2l0aCA9PT0uXG4gKi9cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycmF5KSB7XG4gICAgdmFyIGEgPSBhcnJheS5jb25jYXQoKTtcbiAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZvcih2YXIgaj1pKzE7IGo8YS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYoYVtpXSA9PT0gYVtqXSkge2Euc3BsaWNlKGotLSwgMSk7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gZm9yIGV4dGVuZGluZyBhbiBhcnJheSBiYXNlZFxuICogb24gYW4gXCJhZGRBcnJheVwiIGFuZCBcInJlbW92ZUFycmF5XCIuIEFueSBlbGVtZW50XG4gKiBmb3VuZCBpbiByZW1vdmVBcnJheSBpcyByZW1vdmVkIGZyb20gdGhlIGZpcnN0IGFycmF5XG4gKiBhbmQgYWxsIHRoZSBlbGVtZW50cyBvZiBhZGRBcnJheSBhcmUgYWRkZWQuXG4gKiBBbnkgZHVwbGljYXRlIGl0ZW1zIGFyZSByZW1vdmVkLlxuICogQ3JlYXRlcyBhIG5ldyBhcnJheSwgc28gaXMgbm9uLWRlc3RydWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gdGhlIGFycmF5IHRvIG1hbmlwdWxhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFkZEFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHJlbW92ZUFycmF5IC0gdGhlIGVsZW1lbnRzIHRvIHJlbW92ZSBmcm9tIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXl9IFRoZSBtb2RpZmllZCBhcnJheVxuICovXG5mdW5jdGlvbiBleHBhbmRBcnJheShhcnJheSwgYWRkQXJyYXksIHJlbW92ZUFycmF5KSB7XG4gICAgdmFyIGNvcHlBcnJheSA9IGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVBcnJheS5pbmRleE9mKGl0ZW0pID09PSAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlVbmlxdWUoY29weUFycmF5LmNvbmNhdChhZGRBcnJheSkpO1xufVxuXG4vKipcbiAqIERlZXBseSBjbG9uZXMgYSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgQSBub2RlIHRvIGNsb25lXG4gKiBAcmV0dXJuIHtOb2RlfSBBIGNsb25lIG9mIHRoZSBnaXZlbiBub2RlIGFuZCBhbGwgaXRzIGNoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gICAgLy8gSWYgdGhlIG5vZGUgaXMgYSB0ZXh0IG5vZGUsIHRoZW4gcmUtY3JlYXRlIGl0IHJhdGhlciB0aGFuIGNsb25lIGl0XG4gICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PSAzID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS5ub2RlVmFsdWUpIDogbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuIFxuICAgIC8vIFJlY3Vyc2UgICAgIFxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjaGlsZCkge1xuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjbG9uZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiBjbG9uZTtcbn1cblxuLyoqXG4gKiBJbmRlbnRzIHRoZSBnaXZlbiBzdHJpbmcgYnkgNCBzcGFjZXMuIFRoaXMgY29ycmVjdGx5IGhhbmRsZXMgbXVsdGktbGluZSBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyB3aXRoIGZvdXIgc3BhY2VzIGFkZGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBuZXcgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGVudChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oPz0uKS9nbSwgXCIgICAgXCIpO1xufVxuXG4vKipcbiAqIFR1cm5zIHNwYWNlcyBpbnRvIHVuZGVyc2NvcmVzIGluIHRoZSBzdHJpbmcsIG1ha2VzIGl0IGxvd2VyY2FzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB0aGUgc3RyaW5nIHRvIGJlIG1hbmlwdWxhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1ZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCBcIl9cIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIFtgbWluYCwgYG1heGBdLlxuICogXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIC0gVGhlIGxvd2VzdCBwb3NzaWJsZSBpbnRlZ2VyLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIFRoZSBoaWdoZXN0IHBvc3NpYmxlIGludGVnZXIgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbixtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbik7XG59XG5cbi8qKlxuICogRW5jb2RlcyBzb21lIHRleHQgc28gdGhhdCBpdCBjYW4gYmUgc2FmZWx5IHdyaXR0ZW4gaW50byBhbiBIVE1MIGJveC5cbiAqIFRoaXMgaW5jbHVkZXMgcmVwbGFjaW5nIHNwZWNpYWwgSFRNTCBjaGFyYWN0ZXJzICgmLCA8LCA+LCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHRleHQgdG8gYmUgY29udmVydGVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSFRNTC1zYWZlIHRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG4gICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJmFwb3M7XCIpO1xufVxuXG4vKipcbiAqIFNodWZmbGUgdGhlIGJsb2NrcyBpbiB0aGUgd29ya3NwYWNlXG4gKi9cbmlmICh0eXBlb2YgQmxvY2tseSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIEJsb2NrbHkuV29ya3NwYWNlU3ZnLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXRyaWNzID0gdGhpcy5nZXRNZXRyaWNzKCk7XG4gICAgICAgIHZhciB3aWR0aCA9IG1ldHJpY3Mudmlld1dpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA9IG1ldHJpY3Mudmlld0hlaWdodDtcbiAgICAgICAgdmFyIGJsb2NrcyA9IHRoaXMuZ2V0VG9wQmxvY2tzKGZhbHNlKTtcbiAgICAgICAgdmFyIHkgPSA1LCB4ID0gMCxcbiAgICAgICAgICAgIG1heGltYWxfaW5jcmVhc2UgPSBoZWlnaHQvYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gR2V0IGEgYmxvY2tcbiAgICAgICAgICAgIHZhciBibG9jayA9IGJsb2Nrc1tpXTtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gYmxvY2suZ2V0UmVsYXRpdmVUb1N1cmZhY2VYWSgpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gLXByb3BlcnRpZXMueCtyYW5kb21JbnRlZ2VyKDEwLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5tb3ZlQnkoeCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgLXByb3BlcnRpZXMueSt5KTtcbiAgICAgICAgICAgIHkgPSB5ICsgcmFuZG9tSW50ZWdlcig1LCBtYXhpbWFsX2luY3JlYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyIGJhc2VkIG9uIGEgY29uZGl0aW9uYWwgY2hlY2suXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMTg4Nzk2Ny9qYXZhc2NyaXB0LW1vdmUtb2JqZWN0cy1mcm9tLW9uZS1hcnJheS10by1hbm90aGVyLWJlc3QtYXBwcm9hY2hcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnRzKHNvdXJjZSwgdGFyZ2V0LCBtb3ZlQ2hlY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNvdXJjZVtpXTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayhlbGVtZW50KSkge1xuICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3REZWZpbmVkVmFsdWUoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjaGVja3MgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBvbmUgb2YgdGhlIFNrLmJ1aWx0aW4gb2JqZWN0c1xuICogVE9ETzogbWFrZSB0aGlzIHNvIHdlIGRvbid0IGhhdmUgdG8gZXhwbGljaXRseSBwdXQgb3V0IGV2ZXJ5IG9wdGlvblxuICogICAgICAgICAgb25lIHBvc3NpYmxlIHRoaW5nIHdlIGNvdWxkIGRvIGlzIGdldCBhIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBcbiAqICAgICAgICAgIG9mIHRoZSBjb25zdHJ1Y3RvciBhbmQgbG9vayBmb3IgdGhlIHN1YnN0cmluZyBcInJldHVybiBuZXcgU2suYnVpbHRpblwiXG4gKiAgICAgICAgICBCdXQgSSBkb24ndCBrbm93IGhvdyByZWxpYWJsZSB0aGF0IGlzLiAgUmF0aGVyLCBpdCdzIGtpbmQgb2YgaGFja2lzaC5cbiAqICAgICAgICAgIFNob3VsZCB0ZWhvcmV0aWNhbGx5IGJlbG9uZyBpbiBTay5mZmlcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGV4YW1pbmVkXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgb25lIG9mIHRoZSBTay5idWlsdGluIHR5cGVzXG4qKi9cbmZ1bmN0aW9uIGlzU2tCdWlsdGluKG9iail7XG4gICAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmRpY3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLmxpc3QpIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnR1cGxlKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5ib29sKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5pbnRfKSB8fFxuICAgICAgICAob2JqIGluc3RhbmNlb2YgU2suYnVpbHRpbi5mbG9hdF8pIHx8XG4gICAgICAgIChvYmogaW5zdGFuY2VvZiBTay5idWlsdGluLnN0cikgfHxcbiAgICAgICAgKG9iaiBpbnN0YW5jZW9mIFNrLmJ1aWx0aW4ubG5nKTtcbiAgICAvL3ZhciBjb25zX3N0ciA9IG9iai5jb25zdHJ1Y3RvciArIFwiXCI7XG4gICAgLy9yZXR1cm4gY29uc19zdHIuaW5kZXhPZihcInJldHVybiBuZXcgU2suYnVpbHRpblwiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQXN0Tm9kZShvYmope1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgXCJfYXN0bmFtZVwiIGluIG9iajtcbn1cblxuLyoqXG4gKiBTaG91bGQgdGhlb3JldGljYWxseSBiZWxvbmcgaW4gU2suZmZpLCBidXQgSSBwdXQgaXQgaGVyZSBpbnN0ZWFkIHRvIG5vdCBtZXNzIHVwIHRoZSBza3VscHQgZmlsZXNcbiAqIGxpa2UgdGhlIG5vcm1hbCBTay5mZmkucmVtYXBUb1B5LCBpdCBkb2Vzbid0IHdvcmsgZm9yIGZ1bmN0aW9ucyBvciBtb3JlIGNvbXBsZXggb2JqZWN0cywgYnV0IGl0IGhhbmRsZXNcbiAqIGNhc2VzIHdoZXJlIHRoZSB0eXBlcyBpbiBvYmogYXJlIGEgbWl4IG9mIHB5dGhvbiBTSU1QTEUgb2JqZWN0cyBhbmQgU0lNUExFIG5vcm1hbCBqYXZhc2NyaXB0IG9iamVjdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybiB7U2suYnVpbHRpbi4/Pz99IC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBweXRob24gb2JqZWN0LCBkcm9wcGluZyBhbGwgZnVuY3Rpb25zIGFuZCB0aGluZ3MgaXQgY2FuJ3QgY29udmVydFxuKiovXG5mdW5jdGlvbiBtaXhlZFJlbWFwVG9QeShvYmope1xuICAgIHZhciBrO1xuICAgIHZhciBrdnM7XG4gICAgdmFyIGk7XG4gICAgdmFyIGFycjtcbiAgICAvL0BUT0RPOiBzaG91bGQgdGhlb3JldGljYWxseSBjaGVjayBpZiB0aGUgb2JqZWN0IGlzIGEgcHlob24gZGljdCBvciBhcnJheSB3aXRoIGpzIG9iamVjdHNcbiAgICBpZiAoaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFscmVhZHkgcHl0aG9uIHJlYWR5XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG4gICAgICAgIC8vb2JqZWN0IGlzIGFjdHVhbGx5IGEgamF2YXNjcmlwdCBhcnJheVxuICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy9mb3IgZWFjaCBvYmplY3QsIGNvbnZlcnQgaXQgdG8gYSBweXRob24gb2JqZWN0IGlmIGl0IGlzbid0IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICB2YXIgc3VidmFsID0gb2JqW2ldO1xuICAgICAgICAgICAgaWYoIWlzU2tCdWlsdGluKHN1YnZhbCkpe1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKG1peGVkUmVtYXBUb1B5KHN1YnZhbCkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3VidmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4ubGlzdChhcnIpO1xuICAgIH0gZWxzZSBpZiAob2JqID09PSBudWxsKSB7Ly9udWxsIG9iamVjdFxuICAgICAgICByZXR1cm4gU2suYnVpbHRpbi5ub25lLm5vbmUkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZighaXNTa0J1aWx0aW4ob2JqKSl7XG4gICAgICAgICAgICAvL2Fzc3VtaW5nIGl0J3MgYSBzdGFuZGFyZCBkaWN0aW9uYXJ5XG4gICAgICAgICAgICBrdnMgPSBbXTsvL1NrLmJ1aWx0aW4uZGljdCB1c2VzIGFuIGFycmF5IG9mIGtleS12YWx1ZSxrZXktdmFsdWUuLi5cbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvL2NvbnZlcnQgdGhlIGtleSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShrKSk7XG4gICAgICAgICAgICAgICAgLy9jb3ZlcnQgY29ycmVzcG9uZGluZyB2YWx1ZSBpZiBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWRcbiAgICAgICAgICAgICAgICBrdnMucHVzaChtaXhlZFJlbWFwVG9QeShvYmpba10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBuZXcgZGljdGlvbmFyeVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTay5idWlsdGluLmRpY3Qoa3ZzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5zdHIob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFNrLmJ1aWx0aW4uYXNzayQob2JqKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2suYnVpbHRpbi5ib29sKG9iaik7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IFNrLmJ1aWx0aW4uc3RyKG9iai5uYW1lKTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==